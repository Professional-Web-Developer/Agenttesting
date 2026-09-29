import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreboard, isLowPrice, isHighPrice } from '../src/validation.js';

const survey = (shells_go_to, current_price_per_kg = null) => ({ shells_go_to, current_price_per_kg });
const repeat = (n, item) => Array.from({ length: n }, () => item);

test('low price means not sold, or sold at ₹10/kg or less', () => {
  assert.ok(isLowPrice(survey('bin')));
  assert.ok(isLowPrice(survey('sold', 8)));
  assert.ok(!isLowPrice(survey('sold', 15)));
  assert.ok(isHighPrice(survey('sold', 22)));
  assert.ok(!isHighPrice(survey('burn')));
});

test('all targets met → KEEP GOING', () => {
  const board = scoreboard({
    surveys: [...repeat(35, survey('bin')), ...repeat(15, survey('sold', 18))],
    activeEateries: 27,
    kgPaid: 1200,
    lots: [{ kgPaid: 1200, net: 4200 }],
    committedBuyers: 1,
    pilotEnded: true,
  });
  assert.equal(board.verdict, 'KEEP GOING');
  assert.equal(board.spread, 3.5);
});

test('most eateries already paid ≥ ₹20/kg → STOP', () => {
  const board = scoreboard({
    surveys: [...repeat(30, survey('sold', 22)), ...repeat(20, survey('bin'))],
    activeEateries: 30,
    kgPaid: 2000,
    lots: [],
    committedBuyers: 1,
    pilotEnded: false,
  });
  assert.equal(board.verdict, 'STOP');
});

test('net spread under ₹1.5/kg → STOP even mid-pilot', () => {
  const board = scoreboard({ surveys: [], activeEateries: 5, kgPaid: 300, lots: [{ kgPaid: 300, net: 300 }], committedBuyers: 0, pilotEnded: false });
  assert.equal(board.verdict, 'STOP');
});

test('fewer than 10 sign-ups at the end → STOP; early on it is still pending', () => {
  const base = { surveys: [], kgPaid: 0, lots: [], committedBuyers: 0 };
  assert.equal(scoreboard({ ...base, activeEateries: 4, pilotEnded: false }).verdict, 'IN PROGRESS');
  assert.equal(scoreboard({ ...base, activeEateries: 4, pilotEnded: true }).verdict, 'STOP');
});

test('pilot ended with mixed results → RETHINK', () => {
  const board = scoreboard({
    surveys: repeat(25, survey('bin')),
    activeEateries: 15,
    kgPaid: 800,
    lots: [{ kgPaid: 800, net: 2000 }],
    committedBuyers: 0,
    pilotEnded: true,
  });
  assert.equal(board.verdict, 'RETHINK');
});
