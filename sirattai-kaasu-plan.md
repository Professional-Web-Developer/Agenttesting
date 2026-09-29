# Sirattai Kaasu (சிரட்டை காசு): the plan

**The idea in one line:** eateries throw away or burn their coconut shells, while charcoal and activated-carbon factories are short of them. **We collect the shells every week, weigh them in front of the owner, pay cash on the spot, and sell lots of 1–1.5 tonnes to the factories.**

> Read this first. Supporting files:
> - How the team chose it: `research/level3/decision.md` (with all Level 1 and 2 reports in `research/`)
> - The working software: `sirattai-kaasu/` (run it with `ADMIN_PIN=xxxx npm start`)
> - Tamil launch copy and the day-by-day playbook: `marketing/launch-kit.md`

---

## 1. Why this idea (the team process in brief)
- **Level 1:** 4 scouts brainstormed about 125 problems and returned 12 candidates.
- **Level 2:** a red team tried to kill each one, and a market auditor checked competitors and facts.
- **Level 3:** I scored the survivors with the seven tests you gave me:

| Your test | Sirattai Kaasu |
|---|---|
| F1 Works with cash, paper and basic phones | ✅ A hanging scale, **cash in hand** and a paper or WhatsApp receipt |
| F2 Saves or earns money, no new cost | ✅ The eatery **earns** from rubbish and pays nothing |
| F3 No lanjam or top people | ✅ The owner decides alone, with no office, committee or licence (temples excluded) |
| F4 Not crowded | ⚠️ Partial. Informal traders are active inside the coconut belt, **so we pilot outside it** |
| F5 Practical under ₹50k | ✅ One route, one hired goods auto, one scale |
| F6 Cheap to market | ✅ Shop-to-shop on one street, and "your shells = ₹__/kg" makes a natural reel |
| F7 Tangible value and a sure payer (your gold-rate objection) | ✅ **Money in hand**, paid for by a factory buying raw material it needs. It isn't information people could look up |

**11 of the 12 candidates failed**, most of them on F7: they were "a bill photo becomes a number, and a seller pays a referral fee". Sirattai Kaasu passed every gate, with a weighted score of **4.10 / 5**.

**Why now:**
- Shell prices rose sharply over 2025–26. In Kerala they went from ₹5–9/kg to ₹28–35/kg; in Pollachi, from about ₹8,500/tonne (unverified) to ₹29,000–34,500/tonne. The sources are in the Level 1 report.
- Activated-carbon exporters are publicly complaining about the shortage (BusinessLine, 9 Sep 2026).
- Coconut yields in the Pollachi belt are down, so the shortage should last at least into December.

**Honest fit note:** no pure-software idea passed your seven tests. This is a **trading business run on software.** The software you build is your advantage over informal traders: a published weekly rate, a receipt for every weigh-in, and many routes run from one system.

---

## 2. Everyone's point of view

| Who | What they gain | What could go wrong | Our answer |
|---|---|---|---|
| **Eatery owner** | ₹1,000–4,500/month for a small tiffin centre, and more for bigger hotels (assumption) | "Your scale is wrong." | Weigh in front of them on a digital scale, with the receipt on the spot |
| **Kitchen staff** | An optional ₹/kg incentive for filling the sacks | They may treat shells as their perk | Pay them the incentive, which the app records separately |
| **Buyer (charcoal or carbon unit)** | Steady, sorted, dry supply during a shortage | Price drops, grading disputes | Written quote, weighing on their scale, 1–1.5 t lots, cash on delivery |
| **Informal shell traders** | – | Competition | Pilot **outside** the coconut belt, where they aren't collecting from eateries |
| **Government and officials** | Not involved | – | No licence to trade raw shells (0% GST, unverified), and no storage yard at first |
| **Temples** | – | Shell rights are tendered (HR&CE), a lanjam risk | **Excluded** |
| **You** | ₹60k–1.3 lakh/month profit at 5 route-days a week in one town (red-team estimate, before storage and management costs) | Physical work, and prices could fall | The software handles operations, and fixed stop rules protect your money |

---

## 3. The money (assumptions; the software recalculates them from real numbers)
| Line | Base case |
|---|---|
| Buyer's delivered price | ₹29/kg |
| Freight to buyer | about ₹3.3 per kg delivered |
| Drying and kernel loss | 10% |
| Goods auto + helper | ₹2,200 per route-day for about 1,600 kg |
| **Fair rate paid to eateries** | **₹18.5/kg** (the app computes this every week) |
| Our net | **about ₹3.7/kg**, about ₹6,000 per route-day |
| Break-even buyer price | **about ₹25.4/kg**. Below this, we lower the eatery rate the same week |

**Pilot budget (under ₹50k):**

| Item | ₹ |
|---|---|
| Digital hanging scale and sacks | 4,000–6,000 |
| Goods auto for 2 pickup days | 3,000–4,400 |
| Printing (survey sheets, flyers, sack stickers) | 2,000–3,000 |
| **Cash float** to pay eateries, **recovered when the lot is sold** | about 30,000 |
| **Money actually at risk if we stop** | **about ₹10–15k** |

---

## 4. The 2-week pilot (from 1 Oct 2026). The rules are fixed in advance.
| Days | Do this | The app page to use |
|---|---|---|
| **30 Sep – 1 Oct** | Pick **one town 60–200 km from Pollachi–Kangeyam** but outside the coconut belt (Karur, Dindigul, Madurai, Trichy, Erode town, Salem). Buy the scale and sacks. Phone 6 shell buyers from the IndiaMART Pollachi and Coimbatore listings | **Buyers** (record every quote) |
| **1 – 6 Oct** | **Survey 50 eateries** (script in the launch kit, §3.3). Record coconuts per day, where the shells go now, the price they get today, and the price they *expect*; ask that before mentioning our rate. Sign up the willing ones with a fixed pickup day | **Survey**, **Eateries** |
| **Mon 5 Oct, then every Monday** | Enter the buyer's **written** delivered quote and publish the fair rate. **No written quote means no rate and no pickup** | **Buyers**, **Rate** |
| **Wed 7 Oct** | **Pickup round 1** with a hired goods auto. Weigh in front of the owner and share the receipt | **Route sheet**, **Weigh-in** |
| **Wed 14 Oct** | **Pickup round 2**, then deliver the lot, weigh it on the buyer's scale and get paid | **Weigh-in**, **Lots** |
| **Thu 15 Oct: decision day** | Open **Validation** and follow it. The launch kit (§3.5) proposes a one-week extension only if the results are mixed | **Validation** |

**KEEP GOING only if all of these hold:**
- ≥ 60% of eateries get nothing or ≤ ₹10/kg today;
- ≥ 25 sign up;
- ≥ 1 tonne is collected;
- net spread ≥ ₹3/kg;
- ≥ 1 buyer commits to weekly purchases.

**STOP if any of these happens:**
- most eateries already get ≥ ₹20/kg;
- fewer than 10 sign up;
- the net spread is under ₹1.5/kg.

---

## 5. If it passes: scale plan (Oct – Dec 2026)
1. **Weeks 3–6:** go to 3 route-days a week in the same town, hire one collector (paid per kg), and add sweet shops, messes and caterers.
2. **Deepavali (about 7–8 Nov):** eateries are busy and break more coconuts. Run the "Deepavali bonus from your shells" campaign (launch kit).
3. **Northeast monsoon (Oct–Dec):** shells get wet. Push "keep them dry" tips, hand out free covered sacks, and apply the moisture deduction clearly on the receipt.
4. **December:** decide on town #2 using real lot margins. Later, add household drop points at kiranas, and collect used cooking oil as a referral for existing oil collectors on the same weekly visit.

---

## 6. What has been built (Level 4)
The web app is in `sirattai-kaasu/`. It needs Node.js 22.13+, has **zero dependencies**, and has **25 passing tests**.
- **Public Tamil page** with this week's rate and WhatsApp/call buttons.
- **Rate engine:** buyer price, freight, drying loss, route cost and margin give the fair rate, the break-even price, and a "what if the buyer price moves" table.
- **Weigh-in on a phone** with a live amount and a **shareable receipt** (a WhatsApp link with the full calculation in Tamil).
- Route sheets, the eatery list, buyers with quotes, and **lot profit with a keep/watch/stop verdict**.
- The **50-eatery survey** and the **2-week keep-going/stop scoreboard**.
- CSV export, PIN login and a security baseline.
- It was checked in a real browser at phone width. The Tamil renders correctly and nothing overflows.

To run it: `cd sirattai-kaasu && ADMIN_PIN=yourpin npm start`, then open `http://localhost:3000`. Deployment and backups are covered in `sirattai-kaasu/README.md`.

---

## 7. Risks, and the rule for each
| Risk | Rule |
|---|---|
| Shell prices fall back | The rate engine drops the eatery rate the same week, because we never promise a fixed price. Stop if the spread stays under ₹1.5/kg |
| Informal buyers already pay eateries well | The week-1 survey finds this out before we spend the float |
| Scale disputes | Weigh in front of the owner and send the receipt on the spot. Use the same scale every week |
| Wet shells in the monsoon | Covered sacks and a visible deduction % explained on the receipt |
| A buyer delays payment | Cash on delivery for the first lots, and never more than one unpaid lot |
| You don't want to handle shells yourself | Hire a collector per route after the pilot. You run the software, the rates and the buyers |

---

## 8. Verify before spending (marked "unverified" in the research)
- The current shell price per kg at your nearest buyers. **Get 2 written quotes** before the first pickup.
- What eateries in your chosen town get today (the survey answers this).
- The GST treatment of raw shells (0% under HSN 14049060 per two sources). Confirm it with a CA if your annual turnover will cross the registration limit.
- **Scale stamping.** A scale used for buying and selling by weight normally needs Legal Metrology verification. Buy a **pre-verified, stamped** digital hanging scale from a licensed dealer, who usually handles the stamping, so you never need an office visit.
- **Buyer legitimacy.** The market audit notes that some shell-burning units operate without permits. Prefer buyers with a GST number and pollution-board consent, and ask for a GST invoice or purchase bill with each lot.
