import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../server.js';

let server;
let base;
let cookie = '';

before(async () => {
  server = createApp({ dbPath: ':memory:', adminPin: '4321', sessionSecret: 'test-secret' });
  await new Promise((resolve) => server.listen(0, resolve));
  base = `http://localhost:${server.address().port}`;
});

after(() => new Promise((resolve) => server.close(resolve)));

function post(path, fields, extraHeaders = {}) {
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries(fields)) {
    for (const item of Array.isArray(v) ? v : [v]) body.append(k, String(item));
  }
  return fetch(base + path, {
    method: 'POST',
    body,
    redirect: 'manual',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: cookie, ...extraHeaders },
  });
}

const get = (path) => fetch(base + path, { redirect: 'manual', headers: { Cookie: cookie } });

test('public page shows the fair rate in Tamil', async () => {
  const res = await get('/');
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.match(html, /சிரட்டை காசு/);
  assert.match(html, /₹18\.5/);
});

test('team area needs the PIN', async () => {
  const res = await get('/admin');
  assert.equal(res.status, 303);
  assert.equal(res.headers.get('location'), '/login');
  const wrong = await post('/login', { pin: '0000' });
  assert.equal(wrong.status, 401);
  const ok = await post('/login', { pin: '4321' });
  assert.equal(ok.status, 303);
  cookie = ok.headers.get('set-cookie').split(';')[0];
  assert.equal((await get('/admin')).status, 200);
});

test('tampered session cookie is rejected', async () => {
  const res = await fetch(`${base}/admin`, { redirect: 'manual', headers: { Cookie: `${cookie.slice(0, -1)}0` } });
  assert.equal(res.status, 303);
});

test('rate settings recalculate the offered rate', async () => {
  const res = await post('/admin/rate', {
    town: 'Karur',
    buyerPricePerKg: 31,
    freightPerSoldKg: 3.3,
    routeCostPerDay: 2200,
    expectedKgPerRouteDay: 1600,
    shrinkagePct: 10,
    targetMarginPerKg: 3,
    defaultDeductionPct: 0,
    staffSharePerKg: 0,
    publishedRate: '',
    whatsappNumber: '+91 98765 43210',
    phoneNumber: '',
    pilotStart: '',
  });
  assert.equal(res.status, 303);
  // (31 − 3.3) × 0.9 − 1.375 − 3 = 20.555 → ₹20.5
  const html = await (await get('/')).text();
  assert.match(html, /₹20\.5/);
  assert.match(html, /wa\.me\/919876543210/);
});

test('full flow: eatery → weigh-in → receipt → buyer → lot → validation', async () => {
  let res = await post('/admin/eateries/new', { name: 'Murugan Tiffin <Centre>', area: 'Kovai Road', phone: '9876543210', pickup_day: 'Mon', status: 'active', coconuts_per_day: 25 });
  assert.equal(res.status, 303);
  const list = await (await get('/admin/eateries')).text();
  assert.match(list, /Murugan Tiffin &lt;Centre&gt;/, 'names are HTML-escaped');
  const eateryId = list.match(/\/admin\/eateries\/(\d+)/)[1];

  res = await post('/admin/pickups/new', { eatery_id: eateryId, pickup_date: '2026-10-05', gross_kg: 42.3, deduction_pct: 5, rate_per_kg: 18.5, staff_share_per_kg: 1, collector: 'Ravi' });
  assert.equal(res.status, 303);
  const receiptPath = res.headers.get('location');
  assert.match(receiptPath, /^\/r\/[a-f0-9]{32}$/);

  // Receipts are public (the owner opens them from WhatsApp) and show the maths.
  const receipt = await (await fetch(base + receiptPath)).text();
  assert.match(receipt, /40\.2 kg/);
  assert.match(receipt, /₹744/);
  assert.match(receipt, /wa\.me\/919876543210\?/, '10-digit Indian numbers get the 91 prefix');

  const route = await (await get('/admin/route?day=Mon')).text();
  assert.match(route, /Murugan Tiffin/);

  res = await post('/admin/buyers/new', { name: 'Pollachi Shell Carbon', quote_per_kg: 29, committed_weekly: 1 });
  assert.equal(res.status, 303);
  const buyers = await (await get('/admin/buyers')).text();
  const buyerId = buyers.match(/\/admin\/buyers\/(\d+)/)[1];

  const lotForm = await (await get('/admin/lots/new')).text();
  const pickupId = lotForm.match(/name="pickup_ids" value="(\d+)"/)[1];
  res = await post('/admin/lots/new', { buyer_id: buyerId, sale_date: '2026-10-06', pickup_ids: [pickupId], kg_sold: 36.2, sale_price_per_kg: 29, freight_cost: 120, route_costs: 60 });
  assert.equal(res.status, 303);

  // 36.2 × 29 = 1,050 revenue; costs 744 + 40 + 120 + 60 = 964; net 86 → ₹2.14/kg → watch
  const lots = await (await get('/admin/lots')).text();
  assert.match(lots, /₹1,050/);
  assert.match(lots, /₹2\.14/);
  assert.match(lots, /badge watch/);

  // Selling the same pickup twice is refused.
  res = await post('/admin/lots/new', { buyer_id: buyerId, sale_date: '2026-10-07', pickup_ids: [pickupId], kg_sold: 36, sale_price_per_kg: 29 });
  assert.equal(res.status, 400);

  const validation = await (await get('/admin/validation')).text();
  assert.match(validation, /Buyers committed to weekly purchases/);
});

test('survey feeds the validation scoreboard', async () => {
  for (let i = 0; i < 20; i++) {
    const res = await post('/admin/survey', { eatery_name: `Shop ${i}`, shells_go_to: i < 14 ? 'bin' : 'sold', current_price_per_kg: i < 14 ? '' : 15, coconuts_per_day: 20, willing_to_sign: i % 2 ? 1 : '' });
    assert.equal(res.status, 303);
  }
  const html = await (await get('/admin/survey')).text();
  assert.match(html, /70% of 20/);
});

test('bad input gets a friendly 400, not a crash', async () => {
  const res = await post('/admin/pickups/new', { eatery_id: 1, pickup_date: '2026-10-05', gross_kg: -3, rate_per_kg: 18 });
  assert.equal(res.status, 400);
  assert.match(await res.text(), /Gross kg must be a number/);
});

test('CSV export works and neutralises formulas', async () => {
  await post('/admin/eateries/new', { name: '=HYPERLINK("x")', status: 'lead' });
  const res = await get('/admin/export/eateries.csv');
  assert.equal(res.status, 200);
  const body = await res.text();
  assert.match(body, /^id,name,/);
  assert.match(body, /'=HYPERLINK/);
  assert.equal((await get('/admin/export/settings.csv')).status, 404);
});
