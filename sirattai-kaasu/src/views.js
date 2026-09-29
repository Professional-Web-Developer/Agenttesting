// Server-rendered HTML. Every dynamic value goes through esc().

import { EATERY_STATUSES, WEEKDAYS } from './db.js';
import { SHELL_OUTLETS, THRESHOLDS } from './validation.js';

export function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function rupees(n, digits = 0) {
  return `₹${Number(n).toLocaleString('en-IN', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
}

export function rate(n) {
  return `₹${Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}

function plural(n, word) {
  return `${n} ${word}${Number(n) === 1 ? '' : 's'}`;
}

function kg(n) {
  return `${Number(n).toLocaleString('en-IN', { maximumFractionDigits: 1 })} kg`;
}

const ADMIN_NAV = [
  ['/admin', 'Dashboard'],
  ['/admin/pickups/new', 'Weigh-in'],
  ['/admin/route', 'Route sheet'],
  ['/admin/eateries', 'Eateries'],
  ['/admin/survey', 'Survey'],
  ['/admin/buyers', 'Buyers'],
  ['/admin/lots', 'Lots'],
  ['/admin/rate', 'Rate'],
  ['/admin/validation', 'Validation'],
  ['/admin/export', 'Export'],
];

export function layout({ title, body, admin = false, lang = 'en', flash = '' }) {
  const nav = admin
    ? `<nav class="nav">${ADMIN_NAV.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('')}
        <form method="post" action="/logout" class="inline"><button class="link">Log out</button></form></nav>`
    : '';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="icon" href="data:,">
<link rel="stylesheet" href="/static/style.css">
</head>
<body class="${admin ? 'admin' : 'public'}">
${nav}
<main>
${flash ? `<p class="flash">${esc(flash)}</p>` : ''}
${body}
</main>
</body>
</html>`;
}

function field(label, name, value = '', { type = 'text', step, required = false, hint = '', attrs = '' } = {}) {
  return `<label>${esc(label)}
    <input type="${type}" name="${name}" value="${esc(value)}"${step ? ` step="${step}"` : ''}${required ? ' required' : ''} ${attrs}>
    ${hint ? `<small>${esc(hint)}</small>` : ''}</label>`;
}

function select(label, name, options, current, { required = false } = {}) {
  const opts = options.map(([value, text]) => `<option value="${esc(value)}"${String(value) === String(current ?? '') ? ' selected' : ''}>${esc(text)}</option>`).join('');
  return `<label>${esc(label)}<select name="${name}"${required ? ' required' : ''}>${opts}</select></label>`;
}

function textarea(label, name, value = '') {
  return `<label>${esc(label)}<textarea name="${name}" rows="2">${esc(value)}</textarea></label>`;
}

function badge(status) {
  return `<span class="badge ${esc(status)}">${esc(status)}</span>`;
}

function waLink(number, text) {
  let digits = String(number || '').replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1); // 09876543210
  if (digits.length === 10) digits = `91${digits}`; // wa.me needs the country code
  const base = digits ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(text)}`;
}

// ---------------------------------------------------------------- public

export function publicHome({ settings, offered }) {
  const wa = waLink(settings.whatsappNumber, 'சிரட்டை');
  const phone = String(settings.phoneNumber || '').replace(/[^\d+]/g, '');
  return layout({
    title: 'சிரட்டை காசு – Sirattai Kaasu',
    lang: 'ta',
    body: `
<section class="hero">
  <h1>சிரட்டை காசு</h1>
  <p class="sub">உங்க கடை சிரட்டைக்கு ரொக்கப் பணம்<br><span class="en">Cash for your shop's coconut shells</span></p>
  <div class="rate-card">
    <div class="label">இந்த வார விலை · This week's rate · ${esc(settings.town)}</div>
    <div class="big">${rate(offered)} <span>/ கிலோ · kg</span></div>
    <div class="note">விலை ஒவ்வொரு வாரமும் மாறலாம் · The rate is reset every week</div>
  </div>
  <div class="cta">
    <a class="btn wa" href="${esc(wa)}">WhatsApp-ல் "சிரட்டை" அனுப்புங்க</a>
    ${phone ? `<a class="btn" href="tel:${esc(phone)}">அழைக்க · Call</a>` : ''}
  </div>
</section>
<section>
  <h2>எப்படி? · How it works</h2>
  <ol class="steps">
    <li><b>WhatsApp-ல் "சிரட்டை" என்று அனுப்புங்க.</b><br><span class="en">Send "சிரட்டை" on WhatsApp, or call us.</span></li>
    <li><b>இலவச சாக்கு தருவோம். சிரட்டையை உலர்வாக சேர்த்து வைங்க.</b><br><span class="en">We give you free sacks. Keep the shells dry.</span></li>
    <li><b>வாரம் ஒரு நாள் வருவோம். உங்க கண் முன்னாடி எடை போட்டு, அங்கேயே ரொக்கம்.</b><br><span class="en">We come on a fixed day every week, weigh in front of you and pay cash on the spot.</span></li>
    <li><b>ஒவ்வொரு எடைக்கும் ரசீது.</b><br><span class="en">A receipt for every weighing.</span></li>
  </ol>
</section>
<section class="small">
  <p>கோவில்கள் மற்றும் இளநீர் கடைகளிடம் இருந்து வாங்குவதில்லை. · We do not collect from temples or tender-coconut stalls.</p>
</section>`,
  });
}

export function receiptText(p, link) {
  return [
    `சிரட்டை காசு ரசீது #${p.id}`,
    `கடை: ${p.eatery_name}`,
    `தேதி: ${p.pickup_date}`,
    `எடை: ${p.gross_kg} கிலோ${p.deduction_pct > 0 ? ` (ஈரம்/தேங்காய் கழிவு ${p.deduction_pct}%)` : ''}`,
    `நிகர எடை: ${p.paid_kg} கிலோ × ₹${p.rate_per_kg} = ₹${p.amount}`,
    p.staff_amount > 0 ? `ஊழியர் ஊக்கத்தொகை: ₹${p.staff_amount}` : '',
    'ரொக்கமாக வழங்கப்பட்டது. நன்றி!',
    link,
  ]
    .filter(Boolean)
    .join('\n');
}

export function receiptPage({ p, link, admin }) {
  const wa = waLink(p.eatery_phone, receiptText(p, link));
  return layout({
    title: `Receipt #${p.id}`,
    lang: 'ta',
    admin,
    body: `
<article class="receipt">
  <h1>சிரட்டை காசு</h1>
  <p class="en">Receipt / ரசீது #${esc(p.id)}</p>
  <table>
    <tr><th>கடை · Shop</th><td>${esc(p.eatery_name)}${p.eatery_area ? `, ${esc(p.eatery_area)}` : ''}</td></tr>
    <tr><th>தேதி · Date</th><td>${esc(p.pickup_date)}</td></tr>
    <tr><th>மொத்த எடை · Gross weight</th><td>${kg(p.gross_kg)}</td></tr>
    <tr><th>ஈரம்/தேங்காய் கழிவு · Wet/kernel deduction</th><td>${esc(p.deduction_pct)}%</td></tr>
    <tr><th>நிகர எடை · Paid weight</th><td>${kg(p.paid_kg)}</td></tr>
    <tr><th>விலை · Rate</th><td>${rate(p.rate_per_kg)} / kg</td></tr>
    <tr class="total"><th>தொகை · Amount (cash)</th><td>${rupees(p.amount)}</td></tr>
    ${p.staff_amount > 0 ? `<tr><th>ஊழியர் ஊக்கத்தொகை · Staff incentive</th><td>${rupees(p.staff_amount)}</td></tr>` : ''}
  </table>
  <p>ரொக்கமாக வழங்கப்பட்டது · Paid in cash${p.collector ? ` · ${esc(p.collector)}` : ''}</p>
  <p class="no-print actions">
    <a class="btn wa" href="${esc(wa)}">WhatsApp receipt</a>
    <button class="btn" onclick="window.print()">Print</button>
  </p>
</article>`,
  });
}

export function loginPage({ error = '' } = {}) {
  return layout({
    title: 'Log in',
    body: `
<h1>Sirattai Kaasu – team login</h1>
${error ? `<p class="error">${esc(error)}</p>` : ''}
<form method="post" action="/login" class="card narrow">
  ${field('PIN', 'pin', '', { type: 'password', required: true, attrs: 'inputmode="numeric" autocomplete="current-password" autofocus' })}
  <button class="btn">Log in</button>
</form>`,
  });
}

// ---------------------------------------------------------------- admin

export function dashboard({ settings, offered, fair, week, month, active, board, lots, flash }) {
  const recentLots = lots.slice(0, 5);
  return layout({
    title: 'Dashboard',
    admin: true,
    flash,
    body: `
<h1>Dashboard – ${esc(settings.town)}</h1>
<div class="tiles">
  <div class="tile"><div class="k">Rate offered this week</div><div class="v">${rate(offered)}/kg</div><div class="s">Fair rate from engine: ${rate(fair.fairRatePerKg)}</div></div>
  <div class="tile"><div class="k">Break-even buyer price</div><div class="v">${rate(fair.breakEvenBuyerPrice)}/kg</div><div class="s">Buyer quote now: ${rate(settings.buyerPricePerKg)}</div></div>
  <div class="tile"><div class="k">Active eateries</div><div class="v">${esc(active)}</div></div>
  <div class="tile"><div class="k">Last 7 days</div><div class="v">${kg(week.kg)}</div><div class="s">${plural(week.n, 'pickup')} · ${rupees(week.cash)} paid</div></div>
  <div class="tile"><div class="k">Last 30 days</div><div class="v">${kg(month.kg)}</div><div class="s">${plural(month.n, 'pickup')} · ${rupees(month.cash)} paid</div></div>
  <div class="tile ${board.verdict === 'STOP' ? 'bad' : board.verdict === 'KEEP GOING' ? 'good' : ''}"><div class="k">2-week test</div><div class="v">${esc(board.verdict)}</div><div class="s"><a href="/admin/validation">See all checks</a></div></div>
</div>
<p class="actions"><a class="btn" href="/admin/pickups/new">+ Weigh-in</a> <a class="btn" href="/admin/survey">+ Survey</a> <a class="btn" href="/admin/lots/new">+ Sell a lot</a></p>
<h2>Recent lots</h2>
${recentLots.length ? lotsTable(recentLots) : '<p class="muted">No lots sold yet.</p>'}`,
  });
}

export function ratePage({ settings, fair, offered, table, flash }) {
  const n = (label, name, step, hint) => field(label, name, settings[name], { type: 'number', step, required: true, hint });
  return layout({
    title: 'Weekly rate',
    admin: true,
    flash,
    body: `
<h1>Weekly rate engine</h1>
<div class="grid2">
<form method="post" action="/admin/rate" class="card">
  <h2>Inputs</h2>
  ${field('Town', 'town', settings.town, { required: true })}
  ${n('Buyer delivered price (₹/kg)', 'buyerPricePerKg', '0.01', 'Latest written quote from a charcoal / activated-carbon unit')}
  ${n('Freight to buyer (₹ per kg delivered)', 'freightPerSoldKg', '0.01', 'Truck cost ÷ kg delivered')}
  ${n('Route cost per day (₹)', 'routeCostPerDay', '1', 'Goods auto + helper')}
  ${n('Expected kg per route-day', 'expectedKgPerRouteDay', '1', '')}
  ${n('Drying / kernel loss before sale (%)', 'shrinkagePct', '0.1', 'Paid kg vs buyer-scale kg; measure it from your first lots')}
  ${n('Target margin (₹/kg)', 'targetMarginPerKg', '0.1', 'The keep-going test needs ≥ ₹3/kg')}
  ${n('Default deduction at pickup (%)', 'defaultDeductionPct', '0.5', 'Only for visibly wet or kernel-heavy shells')}
  ${n('Staff incentive (₹/kg, optional)', 'staffSharePerKg', '0.1', 'For the kitchen worker who fills the sacks')}
  ${field('Published rate override (₹/kg, optional)', 'publishedRate', settings.publishedRate, { type: 'number', step: '0.5', hint: 'Leave empty to use the fair rate' })}
  ${field('WhatsApp number (e.g. 919876543210)', 'whatsappNumber', settings.whatsappNumber)}
  ${field('Phone number', 'phoneNumber', settings.phoneNumber)}
  ${field('Pilot start date', 'pilotStart', settings.pilotStart, { type: 'date', hint: 'Day 1 of the 2-week validation' })}
  <button class="btn">Save and recalculate</button>
</form>
<div class="card">
  <h2>Result</h2>
  <table class="kv">
    <tr><th>Revenue per paid kg (after freight and drying loss)</th><td>${rate(fair.revenuePerPaidKg)}</td></tr>
    <tr><th>Route cost per kg</th><td>${rate(fair.routeCostPerKg)}</td></tr>
    <tr><th>Most we could pay (zero margin)</th><td>${rate(fair.maxPayablePerKg)}</td></tr>
    <tr class="total"><th>Fair rate for eateries (rounded down to 50 paise)</th><td>${rate(fair.fairRatePerKg)}</td></tr>
    <tr><th>Rate actually offered</th><td>${rate(offered)}</td></tr>
    <tr><th>Break-even buyer price at the fair rate</th><td>${rate(fair.breakEvenBuyerPrice)}</td></tr>
  </table>
  <h3>If the buyer price moves</h3>
  <table>
    <thead><tr><th>Buyer ₹/kg</th><th>Fair rate</th><th>Our margin if we keep paying ${rate(offered)}</th></tr></thead>
    <tbody>${table
      .map((r) => `<tr class="${r.marginAtPaidRate < 1.5 ? 'bad' : r.marginAtPaidRate >= 3 ? 'good' : ''}"><td>${rate(r.buyerPrice)}</td><td>${rate(r.fairRatePerKg)}</td><td>${rate(r.marginAtPaidRate)}</td></tr>`)
      .join('')}</tbody>
  </table>
  <p class="muted">Red rows: below the ₹1.5/kg stop line. Lower the eatery rate the same week the buyer price drops.</p>
</div>
</div>`,
  });
}

export function eateriesPage({ eateries, status, flash }) {
  const filter = [['', 'All'], ...EATERY_STATUSES.map((s) => [s, s])];
  return layout({
    title: 'Eateries',
    admin: true,
    flash,
    body: `
<h1>Eateries</h1>
<form method="get" class="inline-form">${select('Status', 'status', filter, status)}<button class="btn small">Filter</button></form>
<p class="actions"><a class="btn" href="/admin/eateries/new">+ Add eatery</a></p>
<table>
<thead><tr><th>Name</th><th>Area</th><th>Phone</th><th>Coconuts/day</th><th>Pickup day</th><th>Status</th><th>Last pickup</th><th>Total paid</th><th></th></tr></thead>
<tbody>${eateries
      .map(
        (e) => `<tr><td>${esc(e.name)}</td><td>${esc(e.area)}</td><td>${esc(e.phone)}</td><td>${esc(e.coconuts_per_day ?? '')}</td><td>${esc(e.pickup_day)}</td><td>${badge(e.status)}</td>
      <td>${esc(e.last_pickup ?? '–')}${e.last_kg ? ` (${kg(e.last_kg)})` : ''}</td><td>${rupees(e.total_paid)}</td>
      <td><a href="/admin/eateries/${e.id}">Edit</a> · <a href="/admin/pickups/new?eatery=${e.id}">Weigh</a></td></tr>`,
      )
      .join('')}</tbody>
</table>`,
  });
}

export function eateryForm({ e = {}, error = '' }) {
  const days = [['', '–'], ...WEEKDAYS.map((d) => [d, d])];
  const statuses = EATERY_STATUSES.map((s) => [s, s]);
  return layout({
    title: e.id ? `Edit ${e.name}` : 'Add eatery',
    admin: true,
    body: `
<h1>${e.id ? `Edit ${esc(e.name)}` : 'Add eatery'}</h1>
${error ? `<p class="error">${esc(error)}</p>` : ''}
<form method="post" action="/admin/eateries/${e.id || 'new'}" class="card">
  ${field('Shop name', 'name', e.name, { required: true })}
  ${field('Owner', 'owner', e.owner)}
  ${field('Phone (WhatsApp)', 'phone', e.phone, { attrs: 'inputmode="tel"' })}
  ${field('Area', 'area', e.area)}
  ${field('Address', 'address', e.address)}
  ${field('Google Maps link', 'maps_url', e.maps_url, { type: 'url' })}
  ${field('Coconuts per day', 'coconuts_per_day', e.coconuts_per_day ?? '', { type: 'number', step: '1' })}
  ${select('Pickup day', 'pickup_day', days, e.pickup_day)}
  ${field('Staff contact (who fills the sacks)', 'staff_contact', e.staff_contact)}
  ${select('Status', 'status', statuses, e.status || 'lead')}
  ${textarea('Notes', 'notes', e.notes)}
  <button class="btn">Save</button>
</form>`,
  });
}

export function pickupForm({ eateries, eateryId, settings, offered, error = '', today }) {
  const options = [['', '– choose –'], ...eateries.map((e) => [e.id, `${e.name}${e.area ? ` (${e.area})` : ''}`])];
  return layout({
    title: 'Weigh-in',
    admin: true,
    body: `
<h1>எடை · Weigh-in</h1>
${error ? `<p class="error">${esc(error)}</p>` : ''}
${eateries.length ? '' : '<p class="error">Add an eatery first.</p>'}
<form method="post" action="/admin/pickups/new" class="card" id="weigh">
  ${select('கடை · Eatery', 'eatery_id', options, eateryId, { required: true })}
  ${field('தேதி · Date', 'pickup_date', today, { type: 'date', required: true })}
  ${field('மொத்த எடை · Gross kg (scale)', 'gross_kg', '', { type: 'number', step: '0.1', required: true, attrs: 'inputmode="decimal" min="0.1"' })}
  ${field('ஈரம்/தேங்காய் கழிவு · Deduction %', 'deduction_pct', settings.defaultDeductionPct, { type: 'number', step: '0.5', attrs: 'min="0" max="50"', hint: 'Only for visibly wet or kernel-heavy shells. Show the owner why.' })}
  ${field('விலை · Rate ₹/kg', 'rate_per_kg', offered, { type: 'number', step: '0.5', required: true, attrs: 'min="0"' })}
  ${field('Staff incentive ₹/kg', 'staff_share_per_kg', settings.staffSharePerKg, { type: 'number', step: '0.1', attrs: 'min="0"' })}
  ${field('Collector', 'collector', '')}
  ${textarea('Notes', 'notes')}
  <p class="preview">Pay: <b id="amount">–</b></p>
  <button class="btn">Save and show receipt</button>
</form>
<script>
(function () {
  var f = document.getElementById('weigh');
  function upd() {
    var g = parseFloat(f.gross_kg.value), d = parseFloat(f.deduction_pct.value) || 0, r = parseFloat(f.rate_per_kg.value);
    if (!(g > 0) || !(r >= 0)) { document.getElementById('amount').textContent = '–'; return; }
    var paid = Math.round(g * (1 - d / 100) * 10) / 10;
    document.getElementById('amount').textContent = paid + ' kg × ₹' + r + ' = ₹' + Math.round(paid * r);
  }
  f.addEventListener('input', upd);
})();
</script>`,
  });
}

export function pickupsPage({ pickups }) {
  return layout({
    title: 'Pickups',
    admin: true,
    body: `
<h1>Pickups</h1>
<p class="actions"><a class="btn" href="/admin/pickups/new">+ Weigh-in</a></p>
<table>
<thead><tr><th>#</th><th>Date</th><th>Eatery</th><th>Gross</th><th>Paid kg</th><th>Rate</th><th>Cash</th><th>Lot</th><th></th></tr></thead>
<tbody>${pickups
      .map(
        (p) => `<tr><td>${p.id}</td><td>${esc(p.pickup_date)}</td><td>${esc(p.eatery_name)}</td><td>${kg(p.gross_kg)}</td><td>${kg(p.paid_kg)}</td>
      <td>${rate(p.rate_per_kg)}</td><td>${rupees(p.amount + p.staff_amount)}</td><td>${p.lot_id ? `#${p.lot_id}` : '<span class="muted">unsold</span>'}</td>
      <td><a href="/r/${esc(p.receipt_token)}">Receipt</a></td></tr>`,
      )
      .join('')}</tbody>
</table>`,
  });
}

export function routePage({ day, eateries, settings }) {
  const days = WEEKDAYS.map((d) => `<a class="${d === day ? 'on' : ''}" href="/admin/route?day=${d}">${d}</a>`).join('');
  const expected = eateries.reduce((s, e) => s + (e.last_kg || 0), 0);
  return layout({
    title: `Route ${day}`,
    admin: true,
    body: `
<h1>Route sheet – ${esc(day)} · ${esc(settings.town)}</h1>
<p class="tabs no-print">${days}</p>
<p>${eateries.length} active ${eateries.length === 1 ? 'eatery' : 'eateries'} · expected about ${kg(expected)} (based on each shop's last pickup)</p>
<table class="route">
<thead><tr><th>✓</th><th>Eatery</th><th>Area</th><th>Phone</th><th>Last kg</th><th>Map</th><th class="no-print"></th></tr></thead>
<tbody>${eateries
      .map(
        (e) => `<tr><td class="box">☐</td><td>${esc(e.name)}</td><td>${esc(e.area)}</td><td>${esc(e.phone)}</td><td>${e.last_kg ? kg(e.last_kg) : '–'}</td>
      <td>${e.maps_url ? `<a href="${esc(e.maps_url)}">map</a>` : ''}</td><td class="no-print"><a href="/admin/pickups/new?eatery=${e.id}">Weigh</a></td></tr>`,
      )
      .join('')}</tbody>
</table>
<p class="no-print"><button class="btn" onclick="window.print()">Print route sheet</button></p>`,
  });
}

export function surveyPage({ surveys, board, flash, error = '' }) {
  const outlets = [['', '– choose –'], ...Object.entries(SHELL_OUTLETS)];
  return layout({
    title: 'Eatery survey',
    admin: true,
    flash,
    body: `
<h1>Eatery survey (${surveys.length}/${THRESHOLDS.surveyTarget})</h1>
${error ? `<p class="error">${esc(error)}</p>` : ''}
<div class="grid2">
<form method="post" action="/admin/survey" class="card">
  ${field('Eatery name', 'eatery_name', '', { required: true })}
  ${field('Area', 'area', '')}
  ${field('Coconuts used per day', 'coconuts_per_day', '', { type: 'number', step: '1', attrs: 'min="0"' })}
  ${select('Where do the shells go now?', 'shells_go_to', outlets, '', { required: true })}
  ${field('If sold: price received (₹/kg)', 'current_price_per_kg', '', { type: 'number', step: '0.5', attrs: 'min="0"' })}
  ${field('Price they expect (₹/kg) – ask BEFORE telling our rate', 'expected_price_per_kg', '', { type: 'number', step: '0.5', attrs: 'min="0"' })}
  <label class="check"><input type="checkbox" name="willing_to_sign" value="1"> Willing to sign up for weekly pickup</label>
  ${textarea('Notes', 'notes')}
  <button class="btn">Save survey</button>
</form>
<div class="card">
  <h2>What the survey says so far</h2>
  ${board.checks
    .filter((c) => c.id === 'lowPrice' || c.id === 'highPrice')
    .map((c) => `<p>${badge(c.status)} ${esc(c.label)}: <b>${esc(c.value)}</b> (target ${esc(c.target)})</p>`)
    .join('')}
  <p>Willing to sign up: <b>${surveys.filter((s) => s.willing_to_sign).length}</b></p>
  <p>Coconuts per day (median): <b>${esc(median(surveys.map((s) => s.coconuts_per_day).filter((v) => v !== null && v !== undefined)) ?? '–')}</b></p>
  <p>Price eateries expect (median ₹/kg): <b>${esc(median(surveys.map((s) => s.expected_price_per_kg).filter((v) => v !== null && v !== undefined)) ?? '–')}</b>. Compare it with the fair rate on the Rate page.</p>
</div>
</div>
<h2>Responses</h2>
<table>
<thead><tr><th>Eatery</th><th>Area</th><th>Coconuts/day</th><th>Shells go to</th><th>Gets ₹/kg</th><th>Expects ₹/kg</th><th>Sign up?</th><th>Notes</th></tr></thead>
<tbody>${surveys
      .map(
        (s) => `<tr><td>${esc(s.eatery_name)}</td><td>${esc(s.area)}</td><td>${esc(s.coconuts_per_day ?? '')}</td><td>${esc(SHELL_OUTLETS[s.shells_go_to] || s.shells_go_to)}</td>
      <td>${esc(s.current_price_per_kg ?? '')}</td><td>${esc(s.expected_price_per_kg ?? '')}</td><td>${s.willing_to_sign ? 'Yes' : 'No'}</td><td>${esc(s.notes)}</td></tr>`,
      )
      .join('')}</tbody>
</table>`,
  });
}

function median(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function buyersPage({ buyers, flash }) {
  return layout({
    title: 'Buyers',
    admin: true,
    flash,
    body: `
<h1>Buyers (shell-charcoal / activated-carbon units)</h1>
<p class="actions"><a class="btn" href="/admin/buyers/new">+ Add buyer</a></p>
<table>
<thead><tr><th>Name</th><th>Location</th><th>Contact</th><th>Quote ₹/kg</th><th>Quote date</th><th>Min lot</th><th>Weekly?</th><th></th></tr></thead>
<tbody>${buyers
      .map(
        (b) => `<tr><td>${esc(b.name)}</td><td>${esc(b.location)}</td><td>${esc(b.contact)} ${esc(b.phone)}</td><td>${b.quote_per_kg !== null ? rate(b.quote_per_kg) : '–'}</td>
      <td>${esc(b.quote_date)}</td><td>${b.min_lot_kg ? kg(b.min_lot_kg) : '–'}</td><td>${b.committed_weekly ? badge('committed') : ''}</td><td><a href="/admin/buyers/${b.id}">Edit</a></td></tr>`,
      )
      .join('')}</tbody>
</table>`,
  });
}

export function buyerForm({ b = {}, error = '' }) {
  return layout({
    title: b.id ? `Edit ${b.name}` : 'Add buyer',
    admin: true,
    body: `
<h1>${b.id ? `Edit ${esc(b.name)}` : 'Add buyer'}</h1>
${error ? `<p class="error">${esc(error)}</p>` : ''}
<form method="post" action="/admin/buyers/${b.id || 'new'}" class="card">
  ${field('Unit name', 'name', b.name, { required: true })}
  ${field('Contact person', 'contact', b.contact)}
  ${field('Phone', 'phone', b.phone)}
  ${field('Location', 'location', b.location)}
  ${field('Delivered price quote (₹/kg)', 'quote_per_kg', b.quote_per_kg ?? '', { type: 'number', step: '0.01', attrs: 'min="0"' })}
  ${field('Quote date', 'quote_date', b.quote_date, { type: 'date' })}
  ${field('Minimum lot (kg)', 'min_lot_kg', b.min_lot_kg ?? '', { type: 'number', step: '1', attrs: 'min="0"' })}
  <label class="check"><input type="checkbox" name="committed_weekly" value="1"${b.committed_weekly ? ' checked' : ''}> Committed to weekly purchases (in writing)</label>
  ${textarea('Notes', 'notes', b.notes)}
  <button class="btn">Save</button>
</form>`,
  });
}

function lotsTable(lots) {
  return `<table>
<thead><tr><th>#</th><th>Date</th><th>Buyer</th><th>Paid kg</th><th>Sold kg</th><th>Loss</th><th>Revenue</th><th>Costs</th><th>Net</th><th>Net ₹/kg</th><th>Verdict</th></tr></thead>
<tbody>${lots
    .map(
      (l) => `<tr><td>${l.id}</td><td>${esc(l.sale_date)}</td><td>${esc(l.buyer_name)}</td><td>${kg(l.kg_paid)}</td><td>${kg(l.kg_sold)}</td><td>${esc(l.econ.shrinkagePct)}%</td>
    <td>${rupees(l.econ.revenue)}</td><td>${rupees(l.econ.totalCost)}</td><td>${rupees(l.econ.net)}</td><td>${rate(l.econ.netPerKgPaid)}</td><td>${badge(l.econ.verdict)}</td></tr>`,
    )
    .join('')}</tbody>
</table>`;
}

export function lotsPage({ lots, flash }) {
  return layout({
    title: 'Lots',
    admin: true,
    flash,
    body: `
<h1>Lots sold</h1>
<p class="actions"><a class="btn" href="/admin/lots/new">+ Sell a lot</a></p>
${lots.length ? lotsTable(lots) : '<p class="muted">No lots yet. Collect shells, then sell them as one lot to a buyer.</p>'}
<p class="muted">Verdict: keep ≥ ₹3/kg · watch ₹1.5–3 · stop below ₹1.5 (net profit per paid kg).</p>`,
  });
}

export function lotForm({ buyers, pickups, error = '', today, form = {} }) {
  const buyerOptions = [['', '– choose –'], ...buyers.map((b) => [b.id, `${b.name}${b.quote_per_kg !== null ? ` (quote ₹${b.quote_per_kg})` : ''}`])];
  const chosen = new Set((form.pickup_ids || []).map(String));
  return layout({
    title: 'Sell a lot',
    admin: true,
    body: `
<h1>Sell a lot</h1>
${error ? `<p class="error">${esc(error)}</p>` : ''}
${pickups.length ? '' : '<p class="error">No unsold pickups yet.</p>'}
<form method="post" action="/admin/lots/new" class="card">
  ${select('Buyer', 'buyer_id', buyerOptions, form.buyer_id, { required: true })}
  ${field('Sale date', 'sale_date', form.sale_date || today, { type: 'date', required: true })}
  <fieldset><legend>Pickups in this lot</legend>
  ${pickups
    .map(
      (p) => `<label class="check"><input type="checkbox" name="pickup_ids" value="${p.id}"${chosen.has(String(p.id)) || !form.buyer_id ? ' checked' : ''}>
      #${p.id} ${esc(p.pickup_date)} – ${esc(p.eatery_name)} – ${kg(p.paid_kg)} – ${rupees(p.amount + p.staff_amount)}</label>`,
    )
    .join('')}
  </fieldset>
  ${field("Weight on buyer's scale (kg)", 'kg_sold', form.kg_sold, { type: 'number', step: '0.1', required: true, attrs: 'min="0.1"' })}
  ${field('Price paid by buyer (₹/kg)', 'sale_price_per_kg', form.sale_price_per_kg, { type: 'number', step: '0.01', required: true, attrs: 'min="0"' })}
  ${field('Freight cost (₹)', 'freight_cost', form.freight_cost ?? 0, { type: 'number', step: '1', attrs: 'min="0"' })}
  ${field('Route costs for these pickups (₹)', 'route_costs', form.route_costs ?? 0, { type: 'number', step: '1', attrs: 'min="0"', hint: 'Goods auto, helper, fuel' })}
  ${field('Other costs (₹)', 'other_costs', form.other_costs ?? 0, { type: 'number', step: '1', attrs: 'min="0"', hint: 'Sacks, loading, commission' })}
  ${textarea('Notes', 'notes', form.notes)}
  <button class="btn">Record sale</button>
</form>`,
  });
}

export function validationPage({ board, settings, flash }) {
  return layout({
    title: '2-week test',
    admin: true,
    flash,
    body: `
<h1>2-week keep-going / stop test</h1>
<p>Pilot start: <b>${esc(settings.pilotStart || 'not set')}</b> (set it on the <a href="/admin/rate">Rate</a> page). Verdict: <b class="verdict ${esc(board.verdict.replaceAll(' ', '-'))}">${esc(board.verdict)}</b></p>
<table>
<thead><tr><th>Check</th><th>Now</th><th>Target</th><th>Status</th></tr></thead>
<tbody>${board.checks.map((c) => `<tr><td>${esc(c.label)}</td><td>${esc(c.value)}</td><td>${esc(c.target)}</td><td>${badge(c.status)}</td></tr>`).join('')}</tbody>
</table>
<p class="muted">These rules were fixed before the pilot (research/level3/decision.md), so the numbers decide, not hope. Also stop if the buyer price falls below the break-even price on the Rate page while eateries still expect today's rate.</p>`,
  });
}

export function exportPage() {
  const tables = ['eateries', 'surveys', 'buyers', 'pickups', 'lots'];
  return layout({
    title: 'Export',
    admin: true,
    body: `
<h1>Export (CSV)</h1>
<ul>${tables.map((t) => `<li><a href="/admin/export/${t}.csv">${t}.csv</a></li>`).join('')}</ul>
<p class="muted">Back up the database file itself too (see README).</p>`,
  });
}

export function notFound() {
  return layout({ title: 'Not found', body: '<h1>Not found</h1><p><a href="/">Home</a></p>' });
}
