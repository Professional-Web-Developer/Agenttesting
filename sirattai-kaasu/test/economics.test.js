import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_SETTINGS, fairRate, offeredRate, breakEvenBuyerPrice, marginPerKg, weighIn, lotEconomics, sensitivity } from '../src/economics.js';

const s = { ...DEFAULT_SETTINGS };

test('fair rate with the research base case is ₹18.5/kg', () => {
  // (29 − 3.3) × 0.9 = 23.13; minus route cost 2200/1600 = 1.375 → 21.755; minus ₹3 margin → 18.755 → ₹18.5
  const r = fairRate(s);
  assert.equal(r.revenuePerPaidKg, 23.13);
  assert.equal(r.routeCostPerKg, 1.38);
  assert.equal(r.fairRatePerKg, 18.5);
});

test('break-even buyer price matches the red team (about ₹25/kg)', () => {
  assert.equal(breakEvenBuyerPrice(s, 18.5), 25.38);
  assert.ok(Math.abs(marginPerKg(s, 18.5, 25.38)) < 0.01);
});

test('paying ₹18 at a ₹29 buyer price keeps about ₹3.7/kg, as in the red-team table', () => {
  assert.equal(marginPerKg(s, 18), 3.76);
});

test('fair rate never goes negative when the buyer price collapses', () => {
  assert.equal(fairRate({ ...s, buyerPricePerKg: 5 }).fairRatePerKg, 0);
});

test('staff incentive reduces what we can pay the eatery', () => {
  assert.equal(fairRate({ ...s, staffSharePerKg: 1 }).fairRatePerKg, 17.5);
});

test('published override wins over the fair rate; empty means fair rate', () => {
  assert.equal(offeredRate({ ...s, publishedRate: '17' }), 17);
  assert.equal(offeredRate({ ...s, publishedRate: '' }), 18.5);
});

test('sensitivity lowers the fair rate as the buyer price falls', () => {
  const rows = sensitivity(s, 18.5, [22, 29, 34]);
  // ₹34: (34 − 3.3) × 0.9 − 1.375 − 3 = 23.255 → ₹23
  assert.deepEqual(rows.map((r) => r.fairRatePerKg), [12, 18.5, 23]);
  assert.ok(rows[0].marginAtPaidRate < 0);
});

test('weigh-in applies the deduction and rounds cash to the rupee', () => {
  const w = weighIn({ grossKg: 42.3, deductionPct: 5, ratePerKg: 18.5, staffSharePerKg: 1 });
  assert.equal(w.paidKg, 40.2);
  assert.equal(w.amount, 744); // 40.2 × 18.5 = 743.7
  assert.equal(w.staffAmount, 40);
});

test('lot economics: red-team base case is a keep', () => {
  // 1,600 kg paid at ₹18, 1,440 kg sold at ₹29, freight ₹4,800, route ₹2,200
  const e = lotEconomics({ kgPaid: 1600, cashPaid: 28800, kgSold: 1440, salePricePerKg: 29, freightCost: 4800, routeCosts: 2200 });
  assert.equal(e.revenue, 41760);
  assert.equal(e.net, 5960);
  assert.equal(e.netPerKgPaid, 3.73);
  assert.equal(e.shrinkagePct, 10);
  assert.equal(e.verdict, 'keep');
});

test('lot economics: buyer at ₹22 is a stop', () => {
  const e = lotEconomics({ kgPaid: 1600, cashPaid: 28800, kgSold: 1440, salePricePerKg: 22, freightCost: 4800, routeCosts: 2200 });
  assert.ok(e.net < 0);
  assert.equal(e.verdict, 'stop');
});

test('lot economics: ₹2/kg is a watch', () => {
  const e = lotEconomics({ kgPaid: 1000, cashPaid: 18000, kgSold: 1000, salePricePerKg: 20 });
  assert.equal(e.netPerKgPaid, 2);
  assert.equal(e.verdict, 'watch');
});
