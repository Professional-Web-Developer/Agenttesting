# Level 2 red team (v1): attack on F1, F2, F3, F5 and F7

Date: 29 Sep 2026. Scope: the 12 candidates in `level2/candidates.md`. I score only **F1, F2, F3, F5 and F7**. F4 and F6 belong to the market auditor.
Gate rule (from `SCORING.md`): a score of **3 or less on F1, F2, F3 or F7 eliminates** the candidate. F5 is scored but is not a gate.
Conventions: **[A]** marks my assumption. **[unverified]** marks a figure seen only in a search summary. **[attr?]** means the summary did not make clear which page a figure came from. I ran 14 web searches, all on facts that could change a verdict. They are listed in §4.

---

## 0. Bottom line

- **1 of 12 candidates passes the gates: Sirattai Kaasu.** The other 11 are eliminated.
- **8 of the 12 are the same "Sedharam shape":** a photo of a bill becomes an honest number, and a cheaper seller pays a referral fee. Those 8 are Sedharam, Marundhu, Paal Vilai, Vandi, Service, Virundhu, Adagu and Veedu. The founder's F7 objection kills this shape outright, for two reasons:
  - **The output is information.** Often the customer could get it by asking around, reading the label or using a free calculator.
  - **The payer is a seller who is not obliged to pay.** A referral fee on a cash walk-in cannot be tracked. The customer uses our check and then goes to the shop directly.
- **Level 1 scored these ideas before F7 existed, and the scores are too high.** For example, Vandi scored 28/30 and Marundhu 25/30. Neither survives F7.
- **The second hidden killer is creditor ties.** In rural and small-business Tamil Nadu, the dealer, milk centre, pawnbroker or waste merchant who lends money decides where the person buys or sells. That breaks F3 for Marundhu, Paal Vilai, Adagu and Kazhivu.
- **Sirattai Kaasu is the only candidate that puts cash in someone's hand.** It is paid for by a buyer who needs the goods. Its risks are commodity prices and hard physical work, not the filters.

---

## 1. Gate table

| # | Candidate | F1 | F2 | F3 | F5 | F7 | Gate verdict | Gates failed | Founder's likely one-line objection | Fatal? |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Sedharam Check | 4 | 5 | 4 | 3 | **2** | **ELIMINATED** | F7 | "People can check the gold rate in the news. And why would a jeweller pay 0.5% when the customer just walks in?" | Yes (already rejected) |
| 2 | Marundhu Bill Check | 4 | 4 | **3** | 3 | **2** | **ELIMINATED** | F3, F7 | "The farmer buys on credit till harvest. The dealer sells whatever brand he likes, and the chemical name is printed on the bottle anyway." | Yes |
| 3 | Paal Vilai Check | 4 | **3** | **2** | 2 | **2** | **ELIMINATED** | F2, F3, F7 | "The centre gave her an advance. She can't switch, and everyone in the milk queue already knows who pays more." | Yes |
| 4 | Velinaadu Velai Check | 4 | 4 | 4 | 2 | **1** | **ELIMINATED** | F7 | "The eMigrate list is free on the government site. A 'thank-you' fee isn't a business." | Yes |
| 5 | Vandi Vilai Check | 4 | 4 | **3** | 3 | **2** | **ELIMINATED** | F3, F7 | "My town has one Honda dealer. He won't pay me when the buyer walks in himself, and on-road calculators are free." | Yes |
| 6 | Service Check | 4 | **3** | **3** | 2 | **2** | **ELIMINATED** | F2, F3, F7 | "It saves a few hundred rupees, under warranty they must go to the showroom anyway, and garages won't pay." | Yes |
| 7 | Veedu Check | 4 | **2** | **2** | 2 | **1** | **ELIMINATED** | F2, F3, F7 | "In Chennai the owner decides everything. Knowing a clause is unfair doesn't change it, and who pays me?" | Yes |
| 8 | **Sirattai Kaasu** | 5 | 4 | 4 | 4 | 5 | **PASS** | – | "I'm a software developer. You want me to become a sirattai (shell) buyer? And what if the price falls?" | **No.** A fit and price risk, tested in 2 weeks |
| 9 | Gas Kanakku | **3** | **3** | 4 | 3 | **2** | **ELIMINATED** | F1, F2, F7 | "Kitchen staff won't log every cylinder. The owner will say sales dropped, not gas, and won't pay my share. The tips are on YouTube." | Yes |
| 10 | Kazhivu Rate | 4 | 4 | **3** | 3 | **3** | **ELIMINATED** | F3, F7 | "In job work the fabric, and the waste, belong to the company. The waste merchant has given an advance. Recyclers will bypass me after the first pickup." | Yes as designed. Could be revived (see §3) |
| 11 | Adagu Check | **3** | 5 | **3** | 3 | **3** | **ELIMINATED** | F1, F3, F7 | "People go to the adagu kadai (pawnshop) because there's no paperwork and cash comes in 10 minutes. Rupeek already does takeovers, and the lender pays ₹200." | Yes |
| 12 | Virundhu Check | 5 | 4 | **3** | 3 | **2** | **ELIMINATED** | F3, F7 | "Families pick a caterer because a relative recommends him. When they call him directly, he won't pay me anything." | Yes |

---

## 2. Attack write-ups

### 1. Sedharam Check: ELIMINATED (F7 = 2)
- **F7:** the product is a number. The premium over the day's rate can be worked out with free calculators such as [Arthgyaan](https://arthgyaan.com/calculators/gold-making-charges-calculator). The founder has already said "people can check."
- **The payer is the weakest kind.** A jeweller would pay 0.5% on a cash walk-in that he can deny ever came from us. The customer sees our list and then walks in directly.
- **F3 (4, with a caveat):** many TN families are enrolled in a jeweller's monthly gold-saving scheme, which ties them to that jeweller when the scheme matures. They also have a "family jeweller" who takes their old gold in exchange. This is a creditor-style tie on part of their purchases.
- **F5 (3):** easy to build. The only revenue is the untrackable referral fee.
- **Verdict:** the rejection stands. The idea is not rescued by pointing out that it measures shop premiums, not the gold rate. The payer problem alone is fatal.

### 2. Marundhu Bill Check: ELIMINATED (F3 = 3, F7 = 2)
- **F3:** the dealer is the creditor. A Tuticorin study of 120 farmers found **dealer loyalty**, with price and **credit availability** as significant factors ([Madras Agricultural Journal](https://masujournal.org/view_archive_journal.php?id=2172)) [attr?]. Scout C also flags credit ties as the #1 failure mode. A farmer on credit until harvest cannot take his cash to the "fair-price shop" 10 km away.
- **F7:** the value is information. The molecule and strength are printed on every label, and a farmer can ask a neighbour or a farmer WhatsApp group.
- **The payer is weak.** A ₹299–499 monthly listing fee from dealers is voluntary. Scout C's own estimate is about ₹8k a month per district. Referrals on cash sales cannot be tracked.
- **F2 (4):** free for the farmer, but the ₹2,500–5,500 per season is an assumption. The "cheap means fake" fear means some of that saving is never acted on.
- **F5 (3):** the bot is easy. Revenue needs many districts before it matters. If the product ever sold generics itself, it would need a pesticide sale licence, which is an F3 problem.

### 3. Paal Vilai Check: ELIMINATED (F2 = 3, F3 = 2, F7 = 2)
- **F3:** the collection centre is often the farmer's lender, through advances and feed credit. Aavin society membership adds social ties. Milk is poured twice a day, so a centre 1–3 km away is a daily cost in time and travel.
- **F7:** the rate is information that spreads by word of mouth in the queue.
- **Who the dairies actually pay.** Private dairies do pay for supply, but they pay **collection agents per litre**, for example 50 paise/L on the spot in the Amul entry reports ([DT Next](https://www.dtnext.in/amp/story/news/tamilnadu/farmers-ask-aavin-to-pay-higher-procurement-price-say-private-firms-offer-better-rates)) [attr?, likely a 2023 figure]. They pay for physical milk, not for an information tool.
- **F2 (3):** the within-village rate gap is unverified. Switching costs eat into a ₹1–2/L gap.
- **F5 (2):** it needs dense crowdsourced slips per centre. The only tangible version, becoming a collection agent, needs chilling equipment and daily logistics.

### 4. Velinaadu Velai Check: ELIMINATED (F7 = 1)
- **F7:** the information is pure public data. eMigrate publishes the lists of registered recruiting agents and illegal agents, and runs a 24x7 helpline.
- **There is no sure payer.** An optional thank-you fee, or remittance referrals from someone who is not yet abroad, is the weakest possible revenue.
- **F1–F3:** these pass (4 each). The pain is real and intense.
- **F5 (2):** there is almost nothing to build and almost nothing to earn. Liability arises if an offer the tool found no problem with later proves fraudulent.
- **Verdict:** this is worth doing as a free public-good bot or as marketing for another product. It is not a business.

### 5. Vandi Vilai Check: ELIMINATED (F3 = 3, F7 = 2)
- **F3:** in most TN towns there is **one authorised dealer per brand**, which is a local monopoly. Since registration moved to dealers ("no RTO visits", [DT Next](https://www.dtnext.in/news/tamilnadu/from-december-no-rto-visits-for-personal-vehicle-registration-in-tamil-nadu-854957)), the dealer also controls delivery and paperwork after the booking advance is paid. Dealer finance adds another tie.
- **F7:** the audit is information. On-road calculators are free ([BikeOnRoadIndia](https://bikeonroadindia.com/), [BikeFair](https://bikefair.in/calculator/)). A dealer paying ₹300–500 "per referred sale" is voluntary, and the buyer walks in with his own slip.
- **Scout D admits the most likely outcome:** the buyer uses the free check to negotiate at his original dealer, which earns us zero.
- **F5 (3), unit economics:** Scout D's own year-1 estimate is 20,000 checks × 15% × ₹400 ≈ ₹12 lakh. That needs dealers to pay, which is unproven.
- **Not verdict-changing:** the TN road-tax conflict (8% vs 10/12%).

### 6. Service Check: ELIMINATED (F2 = 3, F3 = 3, F7 = 2)
- **F3:** during warranty, the authorised service centre is a gatekeeper, because skipping its "recommended" work risks the warranty.
- **F2:** Scout D concedes that much of the padding is defensible ("60% brake wear"). The uncontested saving is a few hundred rupees a visit.
- **F7:** it compares the bill with the manufacturer's schedule, which is printed in the owner's manual. That is information. Garages paying ₹50–100 a job is a voluntary referral.
- **F5 (2):** tiny revenue per job, and it drifts towards the crowded service aggregators.

### 7. Veedu Check: ELIMINATED (F2 = 2, F3 = 2, F7 = 1)
- **F3:** the landlord sets the terms in a tight rental market, and brokers sit in between.
- **F2:** the saving happens only if the tenant can make the landlord change the terms. Scout D says tenants have "little bargaining power", so the savings mostly don't happen.
- **F7:** it is a calculation of rent + EB + advance that the tenant can do on paper. The payers are move-in vendors paying for leads, a moment NoBroker already makes money from.
- **F5 (2):** there is no clear revenue.

### 8. Sirattai Kaasu: PASS (F1 5, F2 4, F3 4, F5 4, F7 5)
- **F7 (5):** the eatery gets **cash on the spot**, weighed on a scale in front of the owner. The payer is a charcoal or activated-carbon unit buying raw material it is short of. A buyer paying for goods it needs is the surest payer there is.
  - Demand evidence: the BusinessLine and Dinamalar reports in Scout B.
  - Coconut-shell charcoal was reportedly about **$958/t in Sep 2026, up 80%+ on Sep 2024** ([International Coconut Community](https://coconutcommunity.org/storage/files/document/wpu2026-08.pdf)) [attr?][unverified].
- **F1 (5):** it works on cash, a paper or WhatsApp receipt and a physical scale. No app is needed. The only behaviour change is that staff put shells in a sack instead of the bin, and they are paid to do it.
- **F2 (4):** the eatery gets new income at no cost. It is **not 5** for two reasons:
  - For small tiffin centres the income may be only about ₹900–2,000 a month [A].
  - Informal buyers are already moving in. Kerala shops openly advertise **₹28/kg** for shells ([Onmanorama, Jan 2026](https://www.onmanorama.com/news/kerala/2026/01/09/rising-value-coconut-shells.html)), and there is a shell trade boom in coastal Karnataka ([The Federal](https://thefederal.com/category/farm-matters/how-coconut-shells-have-sparked-trade-boom-in-coastal-karnataka-224085)). Some TN eateries may already be paid.
- **F3 (4):** the eatery owner decides alone, and no licence was found for trading the shells.
  - Unworked coconut shell (HSN 14049060) is shown at **0% GST** ([RegisterKaro](https://www.registerkaro.in/hsn/gst-rate-hsn-code-14049060), [Busy](https://busy.in/hsn/hsn-14049060/)) [unverified against the notification]. So no GST registration is forced, and probably no e-way bill [unverified].
  - It is **not 5** because of three hidden parties:
    - kitchen staff who may treat shells as their perk;
    - local scrap buyers with territory;
    - a possible municipal trade licence if a storage yard is rented [unverified]. Avoid it at the start by delivering the same day.
  - **Avoid temples.** Temple shell rights are tendered and politically contested ([Deccan Chronicle, AP temple shell-tender confrontation](https://www.deccanchronicle.com/southern-states/andhra-pradesh/confrontation-over-coconut-shell-tender-at-kolanubharathi-temple-1987671)). TN temples fall under HR&CE, a lanjam risk.
- **F5 (4):** it can be started on one route with a hired goods auto for under ₹50k. The unit economics in §3 are thin but positive at today's prices.
  - The software is small: receipts, a route sheet and a ledger.
  - The real business is physical trading. If the founder will only do software, this fails on **fit**, not on the filters.

### 9. Gas Kanakku: ELIMINATED (F1 = 3, F2 = 3, F7 = 2)
- **F1:** busy kitchen staff must tap WhatsApp at every cylinder change and record the daily rush level. This is the "behaviour people won't do" trap. A paper tally card helps, but the data will be patchy.
- **F2:** the paid part charges the beneficiary a 25% share of savings measured from noisy cylinder counts. The owner can always say sales fell, not gas use. In practice the owner experiences it as a cost and disputes it.
  - Who pays for the retrofit hardware upfront is unanswered, and it breaks the ₹50k budget if the founder funds it.
- **F7:** the free fixes (clean burners, use lids, pressure-cook) are information found on [SuperGas](https://www.supergas.com/for-hotel/advice-on-saving-energy) and YouTube. The paid share is the opposite of a sure payer.
- **The urgency is fading.** The Chennai commercial cylinder price fell from ₹3,283 (June) to ₹2,960 on 1 Aug ([AIR News](https://newsonair.gov.in/oil-marketing-companies-reduce-commercial-lpg-prices-from-today/), [BankBazaar](https://www.bankbazaar.com/gas-connection/commercial-gas-price-india.html)) [attr?], and was ₹2,916.50 on 22 Sep.
- **F5 (3):** there is LPG-safety liability, and it needs a technician partner.
- **Do not bundle it with Sirattai Kaasu at launch.**

### 10. Kazhivu Rate: ELIMINATED (F3 = 3, F7 = 3), but could be revived
- **F3 (hidden gatekeeper):** under **CGST s.143(5), waste and scrap from job work belongs to the principal.** An unregistered job worker must return it to the principal, or the principal sells it ([TaxGuru](https://taxguru.in/goods-and-service-tax/analysis-job-work-gst.html), [TaxHeal](https://taxheal.com/gst-scrap-generated-job-work.html)).
  - So for the "job-work units" in the pitch, the exporter, not the unit owner, controls the waste.
  - Scout B also notes that waste merchants give **advances**, which is a creditor tie.
- **F7 (3):** the unit does get money in hand from the buyer. But our revenue, a ₹0.5–1/kg "sourcing fee" from recyclers, is bypassable: after one pickup the recycler knows the unit and deals with it directly.
- **F1 (4) and F2 (4):** pass. Sorting is an unpaid labour cost to the unit.
- **F5 (3):** half-tonne aggregation, grading disputes, and a B2B sale that is slow to close.
- **How it could pass:** restructure it like Sirattai, where **we buy, grade and resell**, and serve only **owner-producers** (domestic innerwear makers) who own their fabric. That could lift F3 to 4 and F7 to 5. It would then need a fresh score.

### 11. Adagu Check: ELIMINATED (F1 = 3, F3 = 3, F7 = 3)
- **F1:** the saving exists only if the family switches to a regulated lender. RBI told NBFCs to keep **cash gold-loan disbursal under ₹20,000** (IT Act s.269SS) ([Business Today](https://businesstoday.in/latest/economy/story/rbi-asks-nbfcs-to-stick-to-rs-20000-cash-loan-payout-limit-report-428771-2024-05-08), [Fox Mandal](https://foxmandal.in/News/rbi-directs-nbfcs-to-adhere-to-rs-20000-cash-limit-for-gold-loans/)). Switching therefore needs a bank account and KYC. That is exactly what adagu kadai customers avoid.
- **F3:** the pawnbroker holds the gold and is often the family's emergency lender. He can stall a release and makes the relationship awkward.
- **F7:** the interest-rate conversion is information.
  - The takeover is a real completed service, but **Rupeek and the NBFCs perform it**. We only pass them a lead.
  - The payer (lender) is contractual and trackable, but the documented DSA payout is 0.2–0.3%, about ₹200–300 per ₹1 lakh (Scout A).
- **F2 (5):** big savings, free to the family.
- **F5 (3):** it cannot start until a lender signs a payout of ₹500 or more, and that is unproven.

### 12. Virundhu Check: ELIMINATED (F3 = 3, F7 = 2)
- **F3:** halls force their in-house caterer. Elders and relatives choose the caterer on trust and taste, so the family is not a single price-driven decision-maker.
- **F7:** the per-plate benchmark is information that families already gather by asking relatives who held functions. A caterer paying per booking is voluntary and bypassed the moment the family phones him.
- **F5 (3):** it needs 30–50 real quotes per town before the benchmark means anything. Each family uses it once, so data builds slowly.
- **F1 (5) and F2 (4):** pass.

---

## 3. Unit-economics sanity check: Sirattai Kaasu (the only survivor)

One town, one route of 40 eateries, collected weekly. All inputs are assumptions **[A]** unless linked.

| Line | Base case [A] | If eateries demand ₹20/kg [A] | If the buyer price falls to ₹22/kg [A] |
|---|---|---|---|
| Shells collected per route-day (40 × ~40 kg/week) | 1,600 kg | 1,600 kg | 1,600 kg |
| Paid to eateries (cash) | ₹18/kg → ₹28,800 | ₹20/kg → ₹32,000 | ₹18/kg → ₹28,800 |
| Goods auto + helper for the day | ₹2,200 | ₹2,200 | ₹2,200 |
| Freight to the Pollachi–Kangeyam belt (₹2–4/kg, Scout B) | ₹4,800 | ₹4,800 | ₹4,800 |
| Weight lost to moisture and kernel (10%) | −160 kg | −160 kg | −160 kg |
| Sale: 1,440 kg × delivered price (₹29,000–34,500/t, i.e. ₹29–34.5/kg, [Dinamalar](https://www.dinamalar.com/news/tamil-nadu-district-news-coimbatore/-fast-rising-/4282552)) | ×₹29 = ₹41,760 | ×₹29 = ₹41,760 | ×₹22 = ₹31,680 |
| **Net per route-day** | **≈ ₹6,000 (₹3.7/kg)** | **≈ ₹2,800 (₹1.7/kg)** | **≈ −₹4,100 (loss)** |

**What the table shows:**
- At one route-day a week, the business makes about ₹12–26k a month.
- At five route-days a week in one town (about 200 eateries), it makes about ₹60k–1.3 lakh a month before storage and management costs.
- **Working capital** is ₹29–32k per route-day. Selling 1–1.5 t lots for cash to the nearest shell aggregator keeps the float under ₹35k.
- **Hardware** is small: a scale (₹2–3k) and sacks (₹2–3k).
- **The pilot fits under ₹50k.**
- **The model breaks** if the delivered price falls below about ₹25/kg (break-even: 1,440 kg × P = ₹35,800) without the eatery price falling with it. The stop rule is therefore Scout B's: a net spread under ₹1.5/kg means stop.

**Validate first (2 weeks):**
1. What 50 eateries do with their shells today, and what they are paid for them. The key risk is that informal buyers already pay ₹20 or more.
2. Real coconuts per day per eatery.
3. A written, cash-on-delivery price from 2 or more buyers.
4. The moisture and grade deduction on eatery shells, which are wet and have kernel left in them.

---

## 4. Facts checked this round

| Fact | Result | Effect on verdict |
|---|---|---|
| GST on unworked coconut shell | 0% under HSN 14049060 ([RegisterKaro](https://www.registerkaro.in/hsn/gst-rate-hsn-code-14049060), [Busy](https://busy.in/hsn/hsn-14049060/)) [unverified against the notification] | Sirattai F3 stays at 4. No forced registration |
| Informal shell buying already happening | Kerala shops openly buy at ₹28/kg and sell to TN wholesalers at ₹30 ([Onmanorama](https://www.onmanorama.com/news/kerala/2026/01/09/rising-value-coconut-shells.html)). There is a trade boom in coastal Karnataka ([The Federal](https://thefederal.com/category/farm-matters/how-coconut-shells-have-sparked-trade-boom-in-coastal-karnataka-224085)) | Sirattai F2 drops to 4. Passed to the market auditor for F4 |
| Shell charcoal demand | About $958/t in Sep 2026, +80% on Sep 2024 ([ICC](https://coconutcommunity.org/storage/files/document/wpu2026-08.pdf)) [attr?] | Supports Sirattai F7. No sign of a price collapse yet |
| Who owns job-work waste | The principal, under CGST s.143(5) ([TaxGuru](https://taxguru.in/goods-and-service-tax/analysis-job-work-gst.html)) | Kazhivu F3 drops to 3 (eliminated) |
| Cash limit on gold-loan disbursal | ₹20,000 (RBI, IT Act s.269SS) ([Business Today](https://businesstoday.in/latest/economy/story/rbi-asks-nbfcs-to-stick-to-rs-20000-cash-loan-payout-limit-report-428771-2024-05-08)) | Adagu F1 drops to 3 (eliminated) |
| Farmer–dealer credit ties | Dealer loyalty, with credit a significant factor (Tuticorin, 120 farmers) ([MAJ](https://masujournal.org/view_archive_journal.php?id=2172)) [attr?] | Marundhu F3 = 3 |
| Dairies pay agents, not information | Collection agents paid 50 paise/L ([DT Next](https://www.dtnext.in/amp/story/news/tamilnadu/farmers-ask-aavin-to-pay-higher-procurement-price-say-private-firms-offer-better-rates)) [attr?, likely 2023] | Paal Vilai F7 = 2 |
| Commercial LPG trend | ₹3,283 (June) → ₹2,960 (1 Aug) → ₹2,916.50 (22 Sep) ([AIR](https://newsonair.gov.in/oil-marketing-companies-reduce-commercial-lpg-prices-from-today/)) [attr?] | Gas Kanakku urgency fading |
| Temple shell rights | Tendered and contested (AP example, [Deccan Chronicle](https://www.deccanchronicle.com/southern-states/andhra-pradesh/confrontation-over-coconut-shell-tender-at-kolanubharathi-temple-1987671)) | Sirattai must exclude temples |

Searches that returned nothing useful:
- the Pollachi shell price after July 2026;
- charcoal-unit payment terms and moisture deductions;
- what TN eateries do with their shells today.

These stay as the first validation tasks.

---

## 5. Ranked top 3

**Only one candidate truly survives. Numbers 2 and 3 are ranked by how close they come to passing, and both are currently ELIMINATED.**

1. **Sirattai Kaasu: PASS.**
   - It is the only candidate where the customer gets **money in hand**, and where the payer is a **buyer paying for goods it is short of**.
   - It needs no UPI, no app and no official. The owner alone decides.
   - The pilot fits in ₹50k on one route.
   - Its real risks are outside the gates:
     - the shell price cycle;
     - informal buyers already paying eateries;
     - the founder's willingness to run a physical trade.
   - It can be validated in 2 weeks with a hired goods auto, and it earns its first rupee on the first truckload.

2. **Kazhivu Rate: ELIMINATED as written. The closest to reviving.**
   - It has the same money-in-hand shape as Sirattai, so the unit really does earn more.
   - It fails because job-work waste legally belongs to the principal (F3), and because the fee-only model lets recyclers bypass us (F7).
   - If it is rebuilt as "we buy, grade and resell" for owner-producers only, it could pass. It then needs a full re-score and a check on broker advances.

3. **Adagu Check: ELIMINATED. A distant third.**
   - It has the biggest saving per family (₹8–15k a year per ₹1 lakh), and the lender payer is contractual rather than voluntary.
   - But three gates sit at exactly 3:
     - switching needs a bank account under the ₹20k cash rule (F1);
     - the pawnbroker holds the gold (F3);
     - our part of the value is a rate number and a lead, while the lender does the actual takeover (F7).
   - It is worth reconsidering only if a lender signs a payout of ₹500+ per switch in writing.

**Recommendation to Level 3:**
- Stop generating "bill photo → number → seller-paid referral" ideas.
- Look for more candidates shaped like Sirattai Kaasu: **we buy something people currently throw away or undersell, pay cash at the door, and sell to an industrial buyer who is short of it.**
- Ask the founder directly whether a physical trading business with light software is acceptable. That, not the filters, is Sirattai Kaasu's real hurdle.
