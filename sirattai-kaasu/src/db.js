// SQLite storage using Node's built-in driver (no npm install needed).

import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { DEFAULT_SETTINGS, NUMERIC_SETTINGS } from './economics.js';

const SCHEMA = `
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS eateries (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  owner TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  area TEXT NOT NULL DEFAULT '',
  address TEXT NOT NULL DEFAULT '',
  maps_url TEXT NOT NULL DEFAULT '',
  coconuts_per_day REAL,
  pickup_day TEXT NOT NULL DEFAULT '',
  staff_contact TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'lead',
  notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS surveys (
  id INTEGER PRIMARY KEY,
  eatery_name TEXT NOT NULL,
  area TEXT NOT NULL DEFAULT '',
  coconuts_per_day REAL,
  shells_go_to TEXT NOT NULL,
  current_price_per_kg REAL,
  expected_price_per_kg REAL,
  willing_to_sign INTEGER NOT NULL DEFAULT 0,
  notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS buyers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  location TEXT NOT NULL DEFAULT '',
  quote_per_kg REAL,
  quote_date TEXT NOT NULL DEFAULT '',
  min_lot_kg REAL,
  committed_weekly INTEGER NOT NULL DEFAULT 0,
  notes TEXT NOT NULL DEFAULT ''
);
CREATE TABLE IF NOT EXISTS lots (
  id INTEGER PRIMARY KEY,
  buyer_id INTEGER NOT NULL REFERENCES buyers(id),
  sale_date TEXT NOT NULL,
  kg_sold REAL NOT NULL,
  sale_price_per_kg REAL NOT NULL,
  freight_cost REAL NOT NULL DEFAULT 0,
  route_costs REAL NOT NULL DEFAULT 0,
  other_costs REAL NOT NULL DEFAULT 0,
  notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS pickups (
  id INTEGER PRIMARY KEY,
  eatery_id INTEGER NOT NULL REFERENCES eateries(id),
  pickup_date TEXT NOT NULL,
  gross_kg REAL NOT NULL,
  deduction_pct REAL NOT NULL DEFAULT 0,
  paid_kg REAL NOT NULL,
  rate_per_kg REAL NOT NULL,
  amount INTEGER NOT NULL,
  staff_amount INTEGER NOT NULL DEFAULT 0,
  receipt_token TEXT NOT NULL UNIQUE,
  collector TEXT NOT NULL DEFAULT '',
  lot_id INTEGER REFERENCES lots(id),
  notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS pickups_eatery ON pickups(eatery_id);
CREATE INDEX IF NOT EXISTS pickups_lot ON pickups(lot_id);
`;

export const EATERY_STATUSES = ['lead', 'active', 'paused', 'dropped'];
export const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function openDb(path) {
  if (path !== ':memory:') mkdirSync(dirname(path), { recursive: true });
  const db = new DatabaseSync(path);
  db.exec('PRAGMA foreign_keys = ON;');
  db.exec(SCHEMA);
  migrate(db);
  return new Store(db);
}

// Add columns introduced after the first release to older database files.
function migrate(db) {
  const surveyCols = db.prepare('PRAGMA table_info(surveys)').all().map((c) => c.name);
  if (!surveyCols.includes('expected_price_per_kg')) db.exec('ALTER TABLE surveys ADD COLUMN expected_price_per_kg REAL');
}

class Store {
  constructor(db) {
    this.db = db;
  }

  close() {
    this.db.close();
  }

  tx(fn) {
    this.db.exec('BEGIN');
    try {
      const result = fn();
      this.db.exec('COMMIT');
      return result;
    } catch (err) {
      this.db.exec('ROLLBACK');
      throw err;
    }
  }

  // ---- settings ----
  getSettings() {
    const stored = Object.fromEntries(this.db.prepare('SELECT key, value FROM settings').all().map((r) => [r.key, r.value]));
    const merged = { ...DEFAULT_SETTINGS, ...stored };
    for (const key of NUMERIC_SETTINGS) merged[key] = Number(merged[key]);
    return merged;
  }

  saveSettings(values) {
    const stmt = this.db.prepare('INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value');
    this.tx(() => {
      for (const [key, value] of Object.entries(values)) {
        if (key in DEFAULT_SETTINGS) stmt.run(key, String(value));
      }
    });
  }

  // ---- eateries ----
  listEateries({ status, day } = {}) {
    let sql = `SELECT e.*,
        (SELECT MAX(pickup_date) FROM pickups p WHERE p.eatery_id = e.id) AS last_pickup,
        (SELECT paid_kg FROM pickups p WHERE p.eatery_id = e.id ORDER BY pickup_date DESC, id DESC LIMIT 1) AS last_kg,
        (SELECT COALESCE(SUM(amount), 0) FROM pickups p WHERE p.eatery_id = e.id) AS total_paid
      FROM eateries e WHERE 1 = 1`;
    const params = [];
    if (status) {
      sql += ' AND e.status = ?';
      params.push(status);
    }
    if (day) {
      sql += ' AND e.pickup_day = ?';
      params.push(day);
    }
    sql += ' ORDER BY e.area COLLATE NOCASE, e.name COLLATE NOCASE';
    return this.db.prepare(sql).all(...params);
  }

  getEatery(id) {
    return this.db.prepare('SELECT * FROM eateries WHERE id = ?').get(id);
  }

  saveEatery(e) {
    const cols = ['name', 'owner', 'phone', 'area', 'address', 'maps_url', 'coconuts_per_day', 'pickup_day', 'staff_contact', 'status', 'notes'];
    const values = cols.map((c) => e[c]);
    if (e.id) {
      this.db.prepare(`UPDATE eateries SET ${cols.map((c) => `${c} = ?`).join(', ')} WHERE id = ?`).run(...values, e.id);
      return e.id;
    }
    return Number(this.db.prepare(`INSERT INTO eateries (${cols.join(', ')}) VALUES (${cols.map(() => '?').join(', ')})`).run(...values).lastInsertRowid);
  }

  countActiveEateries() {
    return this.db.prepare("SELECT COUNT(*) AS n FROM eateries WHERE status = 'active'").get().n;
  }

  // ---- surveys ----
  listSurveys() {
    return this.db.prepare('SELECT * FROM surveys ORDER BY id DESC').all();
  }

  addSurvey(s) {
    return Number(
      this.db
        .prepare(
          'INSERT INTO surveys (eatery_name, area, coconuts_per_day, shells_go_to, current_price_per_kg, expected_price_per_kg, willing_to_sign, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        )
        .run(s.eatery_name, s.area, s.coconuts_per_day, s.shells_go_to, s.current_price_per_kg, s.expected_price_per_kg, s.willing_to_sign ? 1 : 0, s.notes).lastInsertRowid,
    );
  }

  // ---- buyers ----
  listBuyers() {
    return this.db.prepare('SELECT * FROM buyers ORDER BY committed_weekly DESC, quote_per_kg DESC').all();
  }

  getBuyer(id) {
    return this.db.prepare('SELECT * FROM buyers WHERE id = ?').get(id);
  }

  saveBuyer(b) {
    const cols = ['name', 'contact', 'phone', 'location', 'quote_per_kg', 'quote_date', 'min_lot_kg', 'committed_weekly', 'notes'];
    const values = cols.map((c) => b[c]);
    if (b.id) {
      this.db.prepare(`UPDATE buyers SET ${cols.map((c) => `${c} = ?`).join(', ')} WHERE id = ?`).run(...values, b.id);
      return b.id;
    }
    return Number(this.db.prepare(`INSERT INTO buyers (${cols.join(', ')}) VALUES (${cols.map(() => '?').join(', ')})`).run(...values).lastInsertRowid);
  }

  countCommittedBuyers() {
    return this.db.prepare('SELECT COUNT(*) AS n FROM buyers WHERE committed_weekly = 1').get().n;
  }

  // ---- pickups ----
  addPickup(p) {
    const info = this.db
      .prepare(
        `INSERT INTO pickups (eatery_id, pickup_date, gross_kg, deduction_pct, paid_kg, rate_per_kg, amount, staff_amount, receipt_token, collector, notes)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(p.eatery_id, p.pickup_date, p.gross_kg, p.deduction_pct, p.paid_kg, p.rate_per_kg, p.amount, p.staff_amount, p.receipt_token, p.collector, p.notes);
    return Number(info.lastInsertRowid);
  }

  getPickupByToken(token) {
    return this.db
      .prepare('SELECT p.*, e.name AS eatery_name, e.phone AS eatery_phone, e.area AS eatery_area FROM pickups p JOIN eateries e ON e.id = p.eatery_id WHERE p.receipt_token = ?')
      .get(token);
  }

  listPickups({ unsold = false, limit = 200 } = {}) {
    const where = unsold ? 'WHERE p.lot_id IS NULL' : '';
    return this.db
      .prepare(
        `SELECT p.*, e.name AS eatery_name, e.area AS eatery_area FROM pickups p JOIN eateries e ON e.id = p.eatery_id
         ${where} ORDER BY p.pickup_date DESC, p.id DESC LIMIT ?`,
      )
      .all(limit);
  }

  pickupTotalsSince(date) {
    return this.db
      .prepare('SELECT COALESCE(SUM(paid_kg), 0) AS kg, COALESCE(SUM(amount + staff_amount), 0) AS cash, COUNT(*) AS n FROM pickups WHERE pickup_date >= ?')
      .get(date);
  }

  // ---- lots ----
  createLot(lot, pickupIds) {
    return this.tx(() => {
      const lotId = Number(
        this.db
          .prepare('INSERT INTO lots (buyer_id, sale_date, kg_sold, sale_price_per_kg, freight_cost, route_costs, other_costs, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
          .run(lot.buyer_id, lot.sale_date, lot.kg_sold, lot.sale_price_per_kg, lot.freight_cost, lot.route_costs, lot.other_costs, lot.notes).lastInsertRowid,
      );
      const assign = this.db.prepare('UPDATE pickups SET lot_id = ? WHERE id = ? AND lot_id IS NULL');
      let assigned = 0;
      for (const id of pickupIds) assigned += Number(assign.run(lotId, id).changes);
      if (assigned !== pickupIds.length) throw new Error('Some pickups were already sold in another lot.');
      return lotId;
    });
  }

  listLots() {
    return this.db
      .prepare(
        `SELECT l.*, b.name AS buyer_name,
          (SELECT COALESCE(SUM(paid_kg), 0) FROM pickups p WHERE p.lot_id = l.id) AS kg_paid,
          (SELECT COALESCE(SUM(amount + staff_amount), 0) FROM pickups p WHERE p.lot_id = l.id) AS cash_paid,
          (SELECT COUNT(*) FROM pickups p WHERE p.lot_id = l.id) AS pickups
         FROM lots l JOIN buyers b ON b.id = l.buyer_id ORDER BY l.sale_date DESC, l.id DESC`,
      )
      .all();
  }

  // ---- export ----
  exportTable(table) {
    const allowed = { eateries: 'id', surveys: 'id', buyers: 'id', pickups: 'id', lots: 'id' };
    if (!(table in allowed)) return null;
    return this.db.prepare(`SELECT * FROM ${table} ORDER BY id`).all();
  }
}
