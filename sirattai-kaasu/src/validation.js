// The 2-week keep-going / stop test from research/level3/decision.md,
// computed from what the team has actually recorded.

import { KEEP_SPREAD_PER_KG, STOP_SPREAD_PER_KG, round1, round2 } from './economics.js';

export const THRESHOLDS = Object.freeze({
  surveyTarget: 50,
  surveyMinForVerdict: 20,
  lowPriceShareKeep: 0.6, // ≥ 60% get nothing or ≤ ₹10/kg today
  lowPriceMax: 10,
  highPriceMin: 20, // most already get ≥ ₹20/kg → stop
  signupsKeep: 25,
  signupsStop: 10,
  kgKeep: 1000,
  buyersKeep: 1,
  pilotDays: 14,
});

// Where shells go today. "sold" is the only outlet that can carry a price.
export const SHELL_OUTLETS = Object.freeze({
  bin: 'Thrown in the bin / garbage',
  burn: 'Burnt as fuel',
  staff: 'Kitchen staff take them',
  free: 'Given free to someone',
  sold: 'Sold to a collector',
  other: 'Other',
});

export function isLowPrice(survey) {
  if (survey.shells_go_to !== 'sold') return true;
  const price = survey.current_price_per_kg;
  return price === null || price === undefined || price <= THRESHOLDS.lowPriceMax;
}

export function isHighPrice(survey) {
  return survey.shells_go_to === 'sold' && Number(survey.current_price_per_kg) >= THRESHOLDS.highPriceMin;
}

function check(id, label, value, target, status) {
  return { id, label, value, target, status };
}

// status: 'pass' | 'fail' | 'stop' | 'pending'
export function scoreboard({ surveys, activeEateries, kgPaid, lots, committedBuyers, pilotEnded }) {
  const checks = [];
  const n = surveys.length;
  const t = THRESHOLDS;

  if (n < t.surveyMinForVerdict) {
    checks.push(check('lowPrice', 'Eateries getting nothing or ≤ ₹10/kg today', `${n}/${t.surveyTarget} surveyed`, '≥ 60% of 50 surveyed', 'pending'));
    checks.push(check('highPrice', 'Most eateries already get ≥ ₹20/kg (stop rule)', `${n}/${t.surveyTarget} surveyed`, 'must NOT be a majority', 'pending'));
  } else {
    const lowShare = surveys.filter(isLowPrice).length / n;
    const highShare = surveys.filter(isHighPrice).length / n;
    checks.push(check('lowPrice', 'Eateries getting nothing or ≤ ₹10/kg today', `${round1(lowShare * 100)}% of ${n}`, '≥ 60%', lowShare >= t.lowPriceShareKeep ? 'pass' : 'fail'));
    checks.push(check('highPrice', 'Most eateries already get ≥ ₹20/kg (stop rule)', `${round1(highShare * 100)}% of ${n}`, 'must NOT be a majority', highShare > 0.5 ? 'stop' : 'pass'));
  }

  let signupStatus = 'pending';
  if (activeEateries >= t.signupsKeep) signupStatus = 'pass';
  else if (pilotEnded) signupStatus = activeEateries < t.signupsStop ? 'stop' : 'fail';
  checks.push(check('signups', 'Eateries signed up (active)', String(activeEateries), '≥ 25 (stop if < 10)', signupStatus));

  let kgStatus = 'pending';
  if (kgPaid >= t.kgKeep) kgStatus = 'pass';
  else if (pilotEnded) kgStatus = 'fail';
  checks.push(check('kg', 'Shells collected in the pilot', `${round1(kgPaid)} kg`, '≥ 1,000 kg', kgStatus));

  const lotKg = lots.reduce((sum, lot) => sum + lot.kgPaid, 0);
  const lotNet = lots.reduce((sum, lot) => sum + lot.net, 0);
  const spread = lotKg > 0 ? round2(lotNet / lotKg) : null;
  let spreadStatus = 'pending';
  if (spread !== null) {
    if (spread < STOP_SPREAD_PER_KG) spreadStatus = 'stop';
    else if (spread >= KEEP_SPREAD_PER_KG) spreadStatus = 'pass';
    else spreadStatus = 'fail';
  }
  checks.push(check('spread', 'Net spread after transport (all sold lots)', spread === null ? 'no lot sold yet' : `₹${spread}/kg`, '≥ ₹3/kg (stop if < ₹1.5)', spreadStatus));

  let buyerStatus = 'pending';
  if (committedBuyers >= t.buyersKeep) buyerStatus = 'pass';
  else if (pilotEnded) buyerStatus = 'fail';
  checks.push(check('buyers', 'Buyers committed to weekly purchases', String(committedBuyers), '≥ 1', buyerStatus));

  let verdict = 'IN PROGRESS';
  if (checks.some((c) => c.status === 'stop')) verdict = 'STOP';
  else if (checks.every((c) => c.status === 'pass')) verdict = 'KEEP GOING';
  else if (pilotEnded) verdict = 'RETHINK';

  return { checks, verdict, spread };
}
