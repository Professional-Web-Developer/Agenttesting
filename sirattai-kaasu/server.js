// Sirattai Kaasu web app: public rate page + receipts, and a PIN-protected
// team area for weigh-ins, routes, surveys, buyers, lots and the 2-week test.

import { createServer } from 'node:http';
import { createHmac, createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { openDb, EATERY_STATUSES, WEEKDAYS } from './src/db.js';
import { fairRate, offeredRate, sensitivity, weighIn, lotEconomics, NUMERIC_SETTINGS } from './src/economics.js';
import { scoreboard, SHELL_OUTLETS } from './src/validation.js';
import * as v from './src/views.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const STYLE = readFileSync(join(HERE, 'public', 'style.css'));
const SESSION_HOURS = 12;
const FLASH = { saved: 'Saved.', rate: 'Rate recalculated.', survey: 'Survey saved.', lot: 'Lot recorded.' };

class BadInput extends Error {}

export function todayIST(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(now);
}

function addDays(isoDate, days) {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function num(form, name, { required = false, min = -Infinity, max = Infinity, label = name } = {}) {
  const raw = (form.get(name) ?? '').trim();
  if (raw === '') {
    if (required) throw new BadInput(`${label} is required.`);
    return null;
  }
  const n = Number(raw);
  if (!Number.isFinite(n) || n < min || n > max) throw new BadInput(`${label} must be a number between ${min} and ${max}.`);
  return n;
}

function text(form, name, { required = false, max = 500, label = name } = {}) {
  const value = (form.get(name) ?? '').trim();
  if (required && !value) throw new BadInput(`${label} is required.`);
  return value.slice(0, max);
}

function date(form, name, { required = false, label = name } = {}) {
  const value = text(form, name, { required, label });
  if (value && !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new BadInput(`${label} must be a date.`);
  return value;
}

function oneOf(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function csv(rows) {
  if (!rows.length) return '';
  const cols = Object.keys(rows[0]);
  const cell = (value) => {
    let s = String(value ?? '');
    if (/^[=+\-@]/.test(s)) s = `'${s}`; // stop spreadsheet formula injection
    return /[",\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
  };
  return [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\n');
}

export function createApp({ dbPath = ':memory:', adminPin, sessionSecret = randomBytes(32).toString('hex'), cookieSecure = false, publicUrl = '' } = {}) {
  if (!adminPin) throw new Error('adminPin is required');
  const store = openDb(dbPath);
  const pinHash = createHash('sha256').update(String(adminPin)).digest();
  const loginAttempts = new Map();

  const sign = (value) => createHmac('sha256', sessionSecret).update(value).digest('hex');

  function isLoggedIn(req) {
    const cookie = (req.headers.cookie || '').split(';').map((c) => c.trim()).find((c) => c.startsWith('sk='));
    if (!cookie) return false;
    const [expires, mac] = cookie.slice(3).split('.');
    if (!expires || !mac || Number(expires) < Date.now()) return false;
    const expected = Buffer.from(sign(expires));
    const given = Buffer.from(mac);
    return expected.length === given.length && timingSafeEqual(expected, given);
  }

  function sessionCookie() {
    const expires = String(Date.now() + SESSION_HOURS * 3600 * 1000);
    return `sk=${expires}.${sign(expires)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_HOURS * 3600}${cookieSecure ? '; Secure' : ''}`;
  }

  function tooManyAttempts(ip) {
    const now = Date.now();
    const recent = (loginAttempts.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000);
    loginAttempts.set(ip, recent);
    return recent.length >= 10;
  }

  function baseUrl(req) {
    if (publicUrl) return publicUrl.replace(/\/$/, '');
    const proto = String(req.headers['x-forwarded-proto'] || 'http').split(',')[0].trim();
    return `${proto}://${req.headers.host}`;
  }

  function send(res, status, body, type = 'text/html; charset=utf-8', headers = {}) {
    res.writeHead(status, {
      'Content-Type': type,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'same-origin',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self'; img-src 'self' data:; form-action 'self'; frame-ancestors 'none'",
      ...headers,
    });
    res.end(body);
  }

  const redirect = (res, location, headers = {}) => send(res, 303, '', 'text/plain', { Location: location, ...headers });

  function readForm(req) {
    return new Promise((resolve, reject) => {
      let size = 0;
      const chunks = [];
      req.on('data', (chunk) => {
        size += chunk.length;
        if (size > 100_000) {
          reject(new BadInput('Form too large.'));
          req.destroy();
        } else chunks.push(chunk);
      });
      req.on('end', () => resolve(new URLSearchParams(Buffer.concat(chunks).toString('utf8'))));
      req.on('error', reject);
    });
  }

  // -------------------------------------------------------------- data helpers

  function lotsWithEconomics() {
    return store.listLots().map((l) => ({
      ...l,
      econ: lotEconomics({
        kgPaid: l.kg_paid,
        cashPaid: l.cash_paid,
        kgSold: l.kg_sold,
        salePricePerKg: l.sale_price_per_kg,
        freightCost: l.freight_cost,
        routeCosts: l.route_costs,
        otherCosts: l.other_costs,
      }),
    }));
  }

  function validationBoard(settings) {
    const today = todayIST();
    const start = settings.pilotStart || '0000-01-01';
    const lots = lotsWithEconomics().filter((l) => l.sale_date >= start);
    return scoreboard({
      surveys: store.listSurveys(),
      activeEateries: store.countActiveEateries(),
      kgPaid: store.pickupTotalsSince(start).kg,
      lots: lots.map((l) => ({ kgPaid: l.kg_paid, net: l.econ.net })),
      committedBuyers: store.countCommittedBuyers(),
      pilotEnded: Boolean(settings.pilotStart) && today >= addDays(settings.pilotStart, 14),
    });
  }

  function eateryFromForm(form, id) {
    return {
      id,
      name: text(form, 'name', { required: true, max: 120, label: 'Shop name' }),
      owner: text(form, 'owner', { max: 120 }),
      phone: text(form, 'phone', { max: 20 }),
      area: text(form, 'area', { max: 120 }),
      address: text(form, 'address', { max: 300 }),
      maps_url: /^https?:\/\//.test(form.get('maps_url') || '') ? text(form, 'maps_url', { max: 500 }) : '',
      coconuts_per_day: num(form, 'coconuts_per_day', { min: 0, max: 100000, label: 'Coconuts per day' }),
      pickup_day: oneOf(form.get('pickup_day'), WEEKDAYS, ''),
      staff_contact: text(form, 'staff_contact', { max: 120 }),
      status: oneOf(form.get('status'), EATERY_STATUSES, 'lead'),
      notes: text(form, 'notes', { max: 1000 }),
    };
  }

  function buyerFromForm(form, id) {
    return {
      id,
      name: text(form, 'name', { required: true, max: 120, label: 'Unit name' }),
      contact: text(form, 'contact', { max: 120 }),
      phone: text(form, 'phone', { max: 20 }),
      location: text(form, 'location', { max: 120 }),
      quote_per_kg: num(form, 'quote_per_kg', { min: 0, max: 1000, label: 'Quote' }),
      quote_date: date(form, 'quote_date', { label: 'Quote date' }),
      min_lot_kg: num(form, 'min_lot_kg', { min: 0, max: 1e7, label: 'Minimum lot' }),
      committed_weekly: form.get('committed_weekly') === '1' ? 1 : 0,
      notes: text(form, 'notes', { max: 1000 }),
    };
  }

  // ------------------------------------------------------------------ routes

  async function handle(req, res) {
    const url = new URL(req.url, 'http://localhost');
    const path = url.pathname.replace(/\/+$/, '') || '/';
    const method = req.method;
    const flash = FLASH[url.searchParams.get('ok')] || '';
    const settings = store.getSettings();
    const loggedIn = isLoggedIn(req);

    // ---- public ----
    if (method === 'GET' && path === '/') return send(res, 200, v.publicHome({ settings, offered: offeredRate(settings) }));
    if (method === 'GET' && path === '/static/style.css') return send(res, 200, STYLE, 'text/css; charset=utf-8', { 'Cache-Control': 'public, max-age=3600' });
    if (method === 'GET' && path === '/healthz') return send(res, 200, 'ok', 'text/plain');

    let m = path.match(/^\/r\/([a-f0-9]{32})$/);
    if (method === 'GET' && m) {
      const p = store.getPickupByToken(m[1]);
      if (!p) return send(res, 404, v.notFound());
      return send(res, 200, v.receiptPage({ p, link: `${baseUrl(req)}/r/${p.receipt_token}`, admin: loggedIn }));
    }

    if (path === '/login') {
      if (method === 'GET') return send(res, 200, v.loginPage());
      if (method === 'POST') {
        const ip = req.socket.remoteAddress || 'unknown';
        if (tooManyAttempts(ip)) return send(res, 429, v.loginPage({ error: 'Too many attempts. Try again in 15 minutes.' }));
        const form = await readForm(req);
        const given = createHash('sha256').update(form.get('pin') || '').digest();
        if (!timingSafeEqual(given, pinHash)) {
          loginAttempts.get(ip).push(Date.now());
          return send(res, 401, v.loginPage({ error: 'Wrong PIN.' }));
        }
        loginAttempts.delete(ip);
        return redirect(res, '/admin', { 'Set-Cookie': sessionCookie() });
      }
    }
    if (method === 'POST' && path === '/logout') return redirect(res, '/login', { 'Set-Cookie': 'sk=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0' });

    if (!path.startsWith('/admin')) return send(res, 404, v.notFound());
    if (!loggedIn) return redirect(res, '/login');

    // ---- team area ----
    const today = todayIST();

    if (method === 'GET' && path === '/admin') {
      return send(
        res,
        200,
        v.dashboard({
          settings,
          offered: offeredRate(settings),
          fair: fairRate(settings),
          week: store.pickupTotalsSince(addDays(today, -6)),
          month: store.pickupTotalsSince(addDays(today, -29)),
          active: store.countActiveEateries(),
          board: validationBoard(settings),
          lots: lotsWithEconomics(),
          flash,
        }),
      );
    }

    if (path === '/admin/rate') {
      if (method === 'POST') {
        const form = await readForm(req);
        const values = { town: text(form, 'town', { required: true, max: 60, label: 'Town' }) };
        for (const key of NUMERIC_SETTINGS) values[key] = num(form, key, { required: true, min: 0, max: 100000, label: key });
        if (values.shrinkagePct >= 100 || values.defaultDeductionPct >= 100) throw new BadInput('Percentages must be below 100.');
        const override = num(form, 'publishedRate', { min: 0, max: 1000, label: 'Published rate' });
        values.publishedRate = override === null ? '' : override;
        values.whatsappNumber = text(form, 'whatsappNumber', { max: 15 }).replace(/\D/g, '');
        values.phoneNumber = text(form, 'phoneNumber', { max: 20 });
        values.pilotStart = date(form, 'pilotStart', { label: 'Pilot start' });
        store.saveSettings(values);
        return redirect(res, '/admin/rate?ok=rate');
      }
      const offered = offeredRate(settings);
      const base = Math.round(settings.buyerPricePerKg);
      const prices = [-8, -6, -4, -2, 0, 2, 4, 6].map((d) => base + d).filter((p) => p > 0);
      return send(res, 200, v.ratePage({ settings, fair: fairRate(settings), offered, table: sensitivity(settings, offered, prices), flash }));
    }

    if (method === 'GET' && path === '/admin/eateries') {
      const status = oneOf(url.searchParams.get('status'), EATERY_STATUSES, '');
      return send(res, 200, v.eateriesPage({ eateries: store.listEateries({ status }), status, flash }));
    }

    m = path.match(/^\/admin\/eateries\/(new|\d+)$/);
    if (m) {
      const id = m[1] === 'new' ? null : Number(m[1]);
      const existing = id ? store.getEatery(id) : {};
      if (id && !existing) return send(res, 404, v.notFound());
      if (method === 'GET') return send(res, 200, v.eateryForm({ e: existing }));
      const form = await readForm(req);
      try {
        store.saveEatery(eateryFromForm(form, id));
      } catch (err) {
        if (err instanceof BadInput) return send(res, 400, v.eateryForm({ e: { ...existing, ...Object.fromEntries(form), id }, error: err.message }));
        throw err;
      }
      return redirect(res, '/admin/eateries?ok=saved');
    }

    if (method === 'GET' && path === '/admin/pickups') return send(res, 200, v.pickupsPage({ pickups: store.listPickups() }));

    if (path === '/admin/pickups/new') {
      const eateries = store.listEateries().filter((e) => e.status !== 'dropped');
      const offered = offeredRate(settings);
      if (method === 'GET') {
        return send(res, 200, v.pickupForm({ eateries, eateryId: url.searchParams.get('eatery') || '', settings, offered, today }));
      }
      const form = await readForm(req);
      try {
        const eateryId = num(form, 'eatery_id', { required: true, min: 1, label: 'Eatery' });
        if (!store.getEatery(eateryId)) throw new BadInput('Choose an eatery.');
        const w = weighIn({
          grossKg: num(form, 'gross_kg', { required: true, min: 0.1, max: 10000, label: 'Gross kg' }),
          deductionPct: num(form, 'deduction_pct', { min: 0, max: 50, label: 'Deduction' }) ?? 0,
          ratePerKg: num(form, 'rate_per_kg', { required: true, min: 0, max: 1000, label: 'Rate' }),
          staffSharePerKg: num(form, 'staff_share_per_kg', { min: 0, max: 100, label: 'Staff incentive' }) ?? 0,
        });
        const token = randomBytes(16).toString('hex');
        store.addPickup({
          eatery_id: eateryId,
          pickup_date: date(form, 'pickup_date', { required: true, label: 'Date' }),
          gross_kg: w.grossKg,
          deduction_pct: w.deductionPct,
          paid_kg: w.paidKg,
          rate_per_kg: w.ratePerKg,
          amount: w.amount,
          staff_amount: w.staffAmount,
          receipt_token: token,
          collector: text(form, 'collector', { max: 60 }),
          notes: text(form, 'notes', { max: 500 }),
        });
        return redirect(res, `/r/${token}`);
      } catch (err) {
        if (err instanceof BadInput) return send(res, 400, v.pickupForm({ eateries, eateryId: form.get('eatery_id'), settings, offered, today, error: err.message }));
        throw err;
      }
    }

    if (method === 'GET' && path === '/admin/route') {
      const fallback = WEEKDAYS[(new Date(`${today}T00:00:00Z`).getUTCDay() + 6) % 7];
      const day = oneOf(url.searchParams.get('day'), WEEKDAYS, fallback);
      return send(res, 200, v.routePage({ day, eateries: store.listEateries({ status: 'active', day }), settings }));
    }

    if (path === '/admin/survey') {
      if (method === 'POST') {
        const form = await readForm(req);
        try {
          const outlet = oneOf(form.get('shells_go_to'), Object.keys(SHELL_OUTLETS), '');
          if (!outlet) throw new BadInput('Choose where the shells go now.');
          const price = num(form, 'current_price_per_kg', { min: 0, max: 1000, label: 'Price' });
          store.addSurvey({
            eatery_name: text(form, 'eatery_name', { required: true, max: 120, label: 'Eatery name' }),
            area: text(form, 'area', { max: 120 }),
            coconuts_per_day: num(form, 'coconuts_per_day', { min: 0, max: 100000, label: 'Coconuts per day' }),
            shells_go_to: outlet,
            current_price_per_kg: outlet === 'sold' ? price : null,
            willing_to_sign: form.get('willing_to_sign') === '1',
            notes: text(form, 'notes', { max: 1000 }),
          });
        } catch (err) {
          if (err instanceof BadInput) return send(res, 400, v.surveyPage({ surveys: store.listSurveys(), board: validationBoard(settings), error: err.message }));
          throw err;
        }
        return redirect(res, '/admin/survey?ok=survey');
      }
      return send(res, 200, v.surveyPage({ surveys: store.listSurveys(), board: validationBoard(settings), flash }));
    }

    if (method === 'GET' && path === '/admin/buyers') return send(res, 200, v.buyersPage({ buyers: store.listBuyers(), flash }));

    m = path.match(/^\/admin\/buyers\/(new|\d+)$/);
    if (m) {
      const id = m[1] === 'new' ? null : Number(m[1]);
      const existing = id ? store.getBuyer(id) : {};
      if (id && !existing) return send(res, 404, v.notFound());
      if (method === 'GET') return send(res, 200, v.buyerForm({ b: existing }));
      const form = await readForm(req);
      try {
        store.saveBuyer(buyerFromForm(form, id));
      } catch (err) {
        if (err instanceof BadInput) return send(res, 400, v.buyerForm({ b: { ...existing, ...Object.fromEntries(form), id }, error: err.message }));
        throw err;
      }
      return redirect(res, '/admin/buyers?ok=saved');
    }

    if (method === 'GET' && path === '/admin/lots') return send(res, 200, v.lotsPage({ lots: lotsWithEconomics(), flash }));

    if (path === '/admin/lots/new') {
      const buyers = store.listBuyers();
      const pickups = store.listPickups({ unsold: true, limit: 500 });
      if (method === 'GET') return send(res, 200, v.lotForm({ buyers, pickups, today }));
      const form = await readForm(req);
      const pickupIds = form.getAll('pickup_ids').map(Number).filter((n) => Number.isInteger(n) && n > 0);
      try {
        const buyerId = num(form, 'buyer_id', { required: true, min: 1, label: 'Buyer' });
        if (!store.getBuyer(buyerId)) throw new BadInput('Choose a buyer.');
        if (!pickupIds.length) throw new BadInput('Tick at least one pickup.');
        const unsold = new Set(pickups.map((p) => p.id));
        if (pickupIds.some((id) => !unsold.has(id))) throw new BadInput('Some ticked pickups are already sold. Reload the page.');
        store.createLot(
          {
            buyer_id: buyerId,
            sale_date: date(form, 'sale_date', { required: true, label: 'Sale date' }),
            kg_sold: num(form, 'kg_sold', { required: true, min: 0.1, max: 1e7, label: "Buyer's weight" }),
            sale_price_per_kg: num(form, 'sale_price_per_kg', { required: true, min: 0, max: 1000, label: 'Sale price' }),
            freight_cost: num(form, 'freight_cost', { min: 0, max: 1e7, label: 'Freight' }) ?? 0,
            route_costs: num(form, 'route_costs', { min: 0, max: 1e7, label: 'Route costs' }) ?? 0,
            other_costs: num(form, 'other_costs', { min: 0, max: 1e7, label: 'Other costs' }) ?? 0,
            notes: text(form, 'notes', { max: 1000 }),
          },
          pickupIds,
        );
      } catch (err) {
        if (err instanceof BadInput) {
          const formValues = { ...Object.fromEntries(form), pickup_ids: pickupIds };
          return send(res, 400, v.lotForm({ buyers, pickups, today, error: err.message, form: formValues }));
        }
        throw err;
      }
      return redirect(res, '/admin/lots?ok=lot');
    }

    if (method === 'GET' && path === '/admin/validation') return send(res, 200, v.validationPage({ board: validationBoard(settings), settings, flash }));
    if (method === 'GET' && path === '/admin/export') return send(res, 200, v.exportPage());

    m = path.match(/^\/admin\/export\/([a-z]+)\.csv$/);
    if (method === 'GET' && m) {
      const rows = store.exportTable(m[1]);
      if (!rows) return send(res, 404, v.notFound());
      return send(res, 200, csv(rows), 'text/csv; charset=utf-8', { 'Content-Disposition': `attachment; filename="${m[1]}-${today}.csv"` });
    }

    return send(res, 404, v.notFound());
  }

  const server = createServer((req, res) => {
    handle(req, res).catch((err) => {
      if (err instanceof BadInput) return send(res, 400, v.layout({ title: 'Error', body: `<p class="error">${v.esc(err.message)}</p>` }));
      console.error(err);
      if (!res.headersSent) send(res, 500, v.layout({ title: 'Error', body: '<p class="error">Something went wrong. The error has been logged.</p>' }));
    });
  });
  server.on('close', () => store.close());
  return server;
}

// Run directly: `npm start`
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  let adminPin = process.env.ADMIN_PIN;
  if (!adminPin) {
    if (process.env.NODE_ENV === 'production') {
      console.error('Set ADMIN_PIN before starting in production.');
      process.exit(1);
    }
    adminPin = '0000';
    console.warn('ADMIN_PIN not set – using 0000 for local testing only.');
  }
  const port = Number(process.env.PORT || 3000);
  const app = createApp({
    dbPath: process.env.DB_PATH || join(HERE, 'data', 'sirattai.db'),
    adminPin,
    sessionSecret: process.env.SESSION_SECRET || undefined,
    cookieSecure: process.env.COOKIE_SECURE === '1',
    publicUrl: process.env.PUBLIC_URL || '',
  });
  app.listen(port, () => console.log(`Sirattai Kaasu running on http://localhost:${port}`));
}
