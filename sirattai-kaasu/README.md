# Sirattai Kaasu: the operating system

This web app runs a coconut-shell collection business. It collects shells from eateries every week, pays cash on the spot, and sells lots to shell-charcoal and activated-carbon units.

**Why this business:** see `../research/level3/decision.md`. The Tamil launch copy is in `../marketing/launch-kit.md`.

## What it does
| Page | Who uses it | What for |
|---|---|---|
| `/` (public, Tamil first) | Eatery owners | This week's rate for your town, how it works, and WhatsApp/call buttons |
| `/r/<code>` (public receipt) | Eatery owners | Receipt for each weigh-in (gross kg, deduction, paid kg × rate = cash), with WhatsApp share and print |
| **Weigh-in** | Collector (on a phone) | Pick the shop and enter the scale weight. Shows a live amount, saves, then opens the receipt |
| **Route sheet** | Collector | Active eateries for a weekday, with the last kg and a map link. Printable |
| **Eateries** | Founder | Supplier list: pickup day, status (lead/active/paused/dropped), total paid |
| **Survey** | Founder (week 1) | The 50-eatery survey: coconuts per day, where shells go now, current ₹/kg |
| **Buyers** | Founder | Charcoal and carbon units, written quotes, weekly commitment |
| **Lots** | Founder | Sell ticked pickups as one lot. Shows revenue, costs, net ₹/kg and a keep/watch/stop verdict |
| **Rate** | Founder (weekly) | Rate engine: buyer price, freight, drying loss, route cost and margin give the fair rate for eateries, the break-even buyer price, and a table of what happens if the buyer price moves |
| **Validation** | Founder | The 2-week keep-going/stop test from the research, computed from real data |
| **Export** | Founder | CSV of every table |

### How the fair rate is calculated
```
revenue per paid kg = (buyer price − freight per kg delivered) × (1 − drying loss %)
fair rate           = revenue per paid kg − route cost per kg − staff incentive − target margin
                      (rounded down to 50 paise, never below 0)
```
With the research base case (buyer ₹29, freight ₹3.3, 10% loss, ₹2,200 per 1,600 kg route-day, ₹3 margin), **the fair rate is ₹18.5/kg and break-even is a buyer price of about ₹25.4/kg.** Replace every default with real quotes before you pay anyone.

## Run it
You need **Node.js 22.13 or newer**. There are **no dependencies**, so no `npm install` is needed; it uses Node's built-in SQLite.

```bash
cd sirattai-kaasu
ADMIN_PIN=choose-a-pin npm start      # http://localhost:3000, team login at /login
npm test                              # 25 tests: maths, validation rules, full server flow
```

| Environment variable | Default | Meaning |
|---|---|---|
| `ADMIN_PIN` | `0000` in development; **required** when `NODE_ENV=production` | Team login PIN |
| `PORT` | `3000` | HTTP port |
| `DB_PATH` | `./data/sirattai.db` | SQLite file. **Back it up daily** |
| `SESSION_SECRET` | random per start | Set it so logins survive restarts |
| `PUBLIC_URL` | taken from the request | Base URL used in WhatsApp receipt links, e.g. `https://sirattai.example.in` |
| `COOKIE_SECURE` | off | Set to `1` when served over HTTPS |

## Put it online (pick one)
- **During the 2-week pilot:** run it on your laptop and open it on phones over the same Wi-Fi or hotspot (`http://<laptop-ip>:3000`). Cost: ₹0.
- **After the pilot:** a small VPS (about ₹300–500 a month) or any Node host with a **persistent disk**, such as Render or Railway with a volume. Serverless hosts without a disk will lose the SQLite file.
- Put it behind HTTPS and set `NODE_ENV=production`, `ADMIN_PIN`, `SESSION_SECRET`, `PUBLIC_URL` and `COOKIE_SECURE=1`.
- **Backups:** copy the `.db` file every night, for example with a cron job copying it to Google Drive. The CSV export is a second safety net.

## Weekly routine
1. **Monday morning:** phone 2 buyers, update the buyer price on **Rate**, and check the fair rate and break-even. Send the new rate as a WhatsApp Status or broadcast.
2. **Each pickup day:** print or open the **Route sheet** and weigh each shop's sacks in front of the owner. Save the **Weigh-in** and share the receipt on WhatsApp, or show it on screen.
3. **When about 1–1.5 tonnes have been collected:** deliver to the buyer, weigh on the buyer's scale, and record a **Lot**. The verdict must stay ≥ ₹3/kg ("keep").
4. **Every Friday:** check **Validation**. The rules were fixed before the pilot, so follow them.

## Security notes
- The team area is protected by a PIN, with an HMAC-signed, HttpOnly, SameSite=Strict cookie. Login is limited to 10 attempts per 15 minutes per IP.
- Receipts are public but use unguessable 128-bit links, so owners can open them from WhatsApp without logging in.
- All output is HTML-escaped, and CSV cells that start with `= + - @` are neutralised.
- Use a PIN longer than 4 digits once the app is online.
