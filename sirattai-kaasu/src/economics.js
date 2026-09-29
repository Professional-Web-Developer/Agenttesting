// Business maths for Sirattai Kaasu. Pure functions only, so every number
// the app shows can be unit-tested.
//
// Words used throughout:
//   gross kg  – what the scale shows at the eatery
//   paid kg   – gross kg minus the deduction for wet or kernel-heavy shells;
//               this is what the eatery is paid for
//   sold kg   – what the buyer's scale shows on delivery (after drying loss)

export const DEFAULT_SETTINGS = Object.freeze({
  town: 'Karur',
  buyerPricePerKg: 29, // delivered price quoted by a shell-charcoal unit (₹/kg) – assumption, confirm by phone
  freightPerSoldKg: 3.3, // truck freight to the buyer per kg delivered (₹/kg) – assumption
  routeCostPerDay: 2200, // goods auto + helper for one route-day (₹) – assumption
  expectedKgPerRouteDay: 1600, // shells paid for on a typical route-day (kg) – assumption
  shrinkagePct: 10, // weight lost between pickup and sale: drying, leftover kernel (%) – assumption
  targetMarginPerKg: 3, // what we aim to keep per paid kg (₹/kg); matches the "keep going" spread
  defaultDeductionPct: 0, // deduction at pickup for visibly wet / kernel-heavy shells (%)
  staffSharePerKg: 0, // optional incentive for the kitchen worker who fills the sacks (₹/kg)
  publishedRate: '', // manual override for the rate shown to eateries; empty = use the fair rate
  whatsappNumber: '', // international format without +, e.g. 919876543210
  phoneNumber: '',
  pilotStart: '', // YYYY-MM-DD, first day of the 2-week validation
});

export const NUMERIC_SETTINGS = Object.freeze([
  'buyerPricePerKg',
  'freightPerSoldKg',
  'routeCostPerDay',
  'expectedKgPerRouteDay',
  'shrinkagePct',
  'targetMarginPerKg',
  'defaultDeductionPct',
  'staffSharePerKg',
]);

// Spread thresholds from research/level3/decision.md.
export const KEEP_SPREAD_PER_KG = 3;
export const STOP_SPREAD_PER_KG = 1.5;

// The epsilon nudge makes values like 3.725 round up as people expect,
// despite binary floating point.
export function round1(x) {
  return Math.round((x + Math.sign(x) * Number.EPSILON * 10) * 10) / 10;
}

export function round2(x) {
  return Math.round((x + Math.sign(x) * Number.EPSILON * 10) * 100) / 100;
}

export function roundDownTo(value, step) {
  return Math.floor(value / step + 1e-9) * step;
}

function keepFraction(s) {
  return 1 - s.shrinkagePct / 100;
}

function routeCostPerKg(s) {
  return s.expectedKgPerRouteDay > 0 ? s.routeCostPerDay / s.expectedKgPerRouteDay : 0;
}

// ₹ we keep on each paid kg if we pay `paidRate` and the buyer pays `buyerPrice`.
export function marginPerKg(s, paidRate, buyerPrice = s.buyerPricePerKg) {
  const revenuePerPaidKg = (buyerPrice - s.freightPerSoldKg) * keepFraction(s);
  return round2(revenuePerPaidKg - routeCostPerKg(s) - s.staffSharePerKg - paidRate);
}

// Lowest buyer price at which paying `paidRate` still breaks even.
export function breakEvenBuyerPrice(s, paidRate) {
  const keep = keepFraction(s);
  if (keep <= 0) return Infinity;
  return round2((paidRate + routeCostPerKg(s) + s.staffSharePerKg) / keep + s.freightPerSoldKg);
}

// The weekly rate we can offer eateries: everything the buyer pays, minus
// freight, drying loss, route cost, staff share and our target margin,
// rounded down to the nearest 50 paise and never below zero.
export function fairRate(s) {
  const revenuePerPaidKg = (s.buyerPricePerKg - s.freightPerSoldKg) * keepFraction(s);
  const maxPayablePerKg = revenuePerPaidKg - routeCostPerKg(s) - s.staffSharePerKg;
  const fairRatePerKg = Math.max(0, roundDownTo(maxPayablePerKg - s.targetMarginPerKg, 0.5));
  return {
    revenuePerPaidKg: round2(revenuePerPaidKg),
    routeCostPerKg: round2(routeCostPerKg(s)),
    maxPayablePerKg: round2(maxPayablePerKg),
    fairRatePerKg,
    breakEvenBuyerPrice: breakEvenBuyerPrice(s, fairRatePerKg),
  };
}

// Rate actually offered: the manual override if set, otherwise the fair rate.
export function offeredRate(s) {
  const override = Number(s.publishedRate);
  if (s.publishedRate !== '' && Number.isFinite(override) && override >= 0) return override;
  return fairRate(s).fairRatePerKg;
}

// How the fair rate and our margin move as the buyer price moves.
export function sensitivity(s, paidRate, buyerPrices) {
  return buyerPrices.map((buyerPrice) => {
    const scenario = { ...s, buyerPricePerKg: buyerPrice };
    return {
      buyerPrice,
      fairRatePerKg: fairRate(scenario).fairRatePerKg,
      marginAtPaidRate: marginPerKg(s, paidRate, buyerPrice),
    };
  });
}

export function weighIn({ grossKg, deductionPct = 0, ratePerKg, staffSharePerKg = 0 }) {
  const paidKg = round1(grossKg * (1 - deductionPct / 100));
  return {
    grossKg: round1(grossKg),
    deductionPct,
    paidKg,
    ratePerKg,
    amount: Math.round(paidKg * ratePerKg),
    staffAmount: Math.round(paidKg * staffSharePerKg),
  };
}

export function spreadVerdict(netPerKg) {
  if (netPerKg >= KEEP_SPREAD_PER_KG) return 'keep';
  if (netPerKg < STOP_SPREAD_PER_KG) return 'stop';
  return 'watch';
}

// Profit on one lot sold to a buyer. `cashPaid` includes staff shares.
export function lotEconomics({ kgPaid, cashPaid, kgSold, salePricePerKg, freightCost = 0, routeCosts = 0, otherCosts = 0 }) {
  const revenue = Math.round(kgSold * salePricePerKg);
  const totalCost = Math.round(cashPaid + freightCost + routeCosts + otherCosts);
  const net = revenue - totalCost;
  const netPerKgPaid = kgPaid > 0 ? round2(net / kgPaid) : 0;
  const shrinkagePct = kgPaid > 0 ? round1((1 - kgSold / kgPaid) * 100) : 0;
  return { revenue, totalCost, net, netPerKgPaid, shrinkagePct, verdict: spreadVerdict(netPerKgPaid) };
}
