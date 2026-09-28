# Scout A: Household money leaks (Tamil Nadu and India)

Level 1 research scout report. Date: 2026-09-28.
Domain: money that middle-class and lower-middle-class families lose unnecessarily. I covered health, education, food, water, LPG, transport, weddings and functions, gold, informal finance, rent, appliances and repairs, and a few other areas.

**Conventions**
- **[A]** marks an assumption that needs validation.
- **[unverified]** marks a figure that appeared in a search-result summary but that I could not check against the primary source.
- **[attr?]** marks a figure where the summary did not say which of the listed pages it came from.
- WebFetch was not used (the brief says it is blocked), so every fact comes from search-result summaries.
- **Research limit:** partway through verification, the session-wide WebSearch budget (200 calls) ran out. A few items could not be checked and are marked below: the current TN-notified pawnbroker interest cap, the exact lender referral payouts, BikeFair's Tamil Nadu coverage, and a conflict between sources on the TN two-wheeler road-tax rate.

---

## 0. Headline

| Rank | Idea | One line | F1 | F2 | F3 | F4 | F5 | F6 | Total /30 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Adagu Check** (pawn-ticket and gold-loan guard) | Send photos of every adagu (pawn) ticket the family holds. Get back the real yearly interest, due-date and auction alerts, and a cheaper lender to switch to | 4 | 5 | 4 | 3 | 3 | 4 | **23** |
| 2 | **Virundhu Check** (function catering and hall quote check) | Send a photo of the caterer's quote or the mandapam rate card. Get back the real per-plate price against what other families in your town paid for the same menu, plus caterers who charge less | 5 | 5 | 4 | 3 | 3 | 3 | **23** |
| 3 | **Vandi Check** (two-wheeler showroom quote check) | Send a photo of the showroom quotation. Get back a line-by-line check (legal, optional, padded) and dealers who sell without the padding | 4 | 5 | 4 | 2 | 3 | 4 | **22** |

**My honest view.** None of the three clearly beats Sedharam Check on every filter. Scout C scored its own top idea at 25/30, so these three are not the strongest in the Level 1 round either.

- **Adagu Check is the most useful to Level 2.** It is the only one with money leaking every month rather than once, and it fits well beside Sedharam: Sedharam covers buying gold, Adagu covers borrowing against it, and both use the same gold-rate engine, bill-photo pipeline and audience.
- **There is a conflict to flag.** Scout C killed a narrower version ("pawnbroker interest vs bank gold loan") on F4 because of Rupeek, indiagold, and loan aggregators being on the rejected list. §2.7 sets out why this version is different and where that argument is weak.
- **Virundhu Check is the most Sedharam-shaped.** A paper quote becomes one comparable number, and cheaper vendors pay. It also shares Sedharam's wedding moment, so it could become a later module of the same product.
- **Vandi Check** has the cleanest story, but BikeFair.in already does dealer price-matching with referral payouts, so F4 is weak.

---

## 1. Raw problems brainstormed, with verdicts (34)

| # | Raw problem (where families lose money) | Area | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Pledged gold at local pawnbrokers or high-rate NBFC schemes (roughly 12–48% a year) when banks and co-ops charge about 8.5–12%. Missed renewals lead to penal interest or auction, and fly-by-night pawnbrokers disappear with the gold | Informal finance / gold | **SURVIVOR → #1** | Passes all filters. F4 is contested (see §2.7) |
| 2 | Function catering quotes (weddings, engagements, puberty and ear-piercing functions, housewarmings, 60th birthdays) with no benchmark. Mandapam add-ons such as electricity per unit, generator and deposit deductions | Weddings and functions | **SURVIVOR → #2** | Passes. Listing sites exist, but none benchmarks a real local quote |
| 3 | Two-wheeler on-road quote padding: handling/logistics charges, forced accessories, dealer insurance, "extended warranty" | Transport | **SURVIVOR → #3** | Passes, but F4 is weak (BikeFair.in) |
| 4 | Chit (seettu) bid timing: early bidders pay a high effective interest rate without knowing it | Informal finance | Killed | F4: many free calculators ([PolicyBazaar](https://www.policybazaar.com/life-insurance/investment-plans/chit-calculator/), [chit.fund](https://chit.fund/calculator/), [cvworld](https://cvworld.in/tools/chit-fund-interest-calculator/), [WesternSparrow](https://westernsparrow.com/chit-fund/chit-fund-calculator/), [chitcalculator](https://chitcalculator.vercel.app/)). F5: no payer |
| 5 | Unregistered chit, "Deepavali fund" and shop-scheme collapses | Informal finance | Killed | F5: no payer. F3: recovery depends on the Registrar of Chits and the police ([TN guidance from a registered chit company](https://www.mayavaramchits.com/registered-vs-unregistered-chit-funds-spot-the-warning-signs-and-stay-safe-in-tamil-nadu/)). Scout C also killed this |
| 6 | Kandhu vatti (usurious daily or weekly interest, ~60%+) | Informal finance | Killed as stand-alone | F5/F3: no lender to switch a collateral-free borrower to, and enforcement is by the police ([Scroll](https://scroll.in/article/855716/tamil-nadu-has-stringent-laws-against-moneylending-at-exorbitant-rates-why-does-it-persist-then), [IndiaSpend](https://www.indiaspend.com/why-small-farmers-in-tamil-nadu-borrow-money-at-60-interest-58892)). Families who own gold are covered by #1 (top-up to retire the debt) |
| 7 | Multiple microfinance loans and coercive recovery | Informal finance | Killed | F5: no payer. TN already legislated in 2025 ([Business Standard](https://www.business-standard.com/industry/news/micro-lenders-worry-as-tn-govt-tables-bill-to-prevent-coercive-recovery-125042801292_1.html)) |
| 8 | RO purifier, AC and fridge repair overcharging, fake "authorised" technicians | Appliances | Killed | F4: [FixNow](https://fixnow.live/), [Sulekha](https://www.sulekha.com/home-appliances-repair-services/coimbatore), [Madurai Appliance Fix](https://maduraiappliancefix.in/), [MintAttick](https://www.mintattickrepairs.in/blog/appliance-repair-services-tamil-nadu-puducherry/) and Urban Company. F5: a quality-controlled technician network is operations-heavy. The pain is real ([Trustpilot](https://www.trustpilot.com/review/www.rocareindia.com), [ConsumerComplaints](https://www.consumercomplaints.in/bycompany/ro-care-india-a379322.html)) |
| 9 | Warranty forgotten, so families pay for repairs that were covered | Appliances | Killed | F4: crowded ([Warranty Tracker](https://play.google.com/store/apps/details?id=com.primeapps.warrentytracker&hl=en), [Check My Warranty](https://play.google.com/store/apps/details?id=com.checkmywarranty.app&hl=en_IN), [WarrantyTrackr](https://play.google.com/store/apps/details?id=app.warrantytrackr&hl=en_IN), [Warranty Book](https://www.warrantybook.in/), [HoldMyBill](https://holdmybill.com/guides/warranty-tracker-app-manage-all-warranties)). F5: no payer. One search was enough to show the crowding |
| 10 | "No-cost EMI" consumer-durable loans with processing fees and GST on the interest | Appliances / phones | Killed | F5: no natural payer, and the saving per purchase is small (about ₹1,700 in one example, [Business Standard, Sep 2026](https://www.business-standard.com/finance/personal-finance/consumer-durable-loans-avoid-hidden-costs-and-risk-of-overleveraging-126091701078_1.html)) |
| 11 | Offline-only appliance model numbers that block price comparison | Appliances | Killed | Not evidenced: my search found nothing to support it, and online price-comparison sites exist |
| 12 | 20L water-can prices and unsafe unlicensed cans | Water | Killed | F4: [BookWater](https://www.bookwater.com/), [Watrify](https://play.google.com/store/apps/details?id=com.watrify.watrify_consumer&hl=en_SG), [TrolleyFresh](https://www.trolleyfresh.com/), [CanCan](https://cancanapp.wordpress.com/), [Flooat](https://www.facebook.com/FlooatApp/), [Agua India](https://www.aguaindia.com/) and a [price-comparison bot (Bino)](https://bino.bot/find/20-litre-water-can-chennai-deals) |
| 13 | Private tanker price spikes in summer | Water | Killed | F3: apartments buy through RWA committees, and the cheap alternative (Metrowater booking) is a government gatekeeper |
| 14 | LPG delivery staff demanding an extra "delivery charge", and short-weight cylinders | LPG | Killed | F5: about ₹30–100 per cylinder [A] with no payer. A fix needs oil-company action (F3) |
| 15 | Overpriced medicines, branded vs generic | Health | Killed | On the rejected list (crowded) |
| 16 | Lab-test and MRI/CT price variation | Health | Killed | F4: TN-specific [BookMyScans](https://bookmyscans.com/tamilnadu/mri-scan-cost), low-price chain [Aarthi Scans](https://aarthiscan.com/scans-and-tests/chennai/mri-scan/), [Medify](https://medifyhome.com/mri-scan-in-chennai/) and national lab aggregators |
| 17 | Private-hospital delivery and surgery package prices | Health | Killed | F3: revenue would need hospital cooperation, and referral fees raise medical-ethics problems. F4: health aggregators exist. Not searched separately this round |
| 18 | Dental price variation (a LocalCircles survey found root canals priced from ₹500 to ₹15,000) | Health | Killed | F4: [Teeth.in city costs incl. Trichy](https://teeth.in/cost/molar-root-canal/tiruchirappalli/), [Practo cost pages](https://www.practo.com/chennai/root-canal-treatment-rct/cost/procedure), [Clove Dental price pages](https://clovedental.in/cost/root-canal-treatment-cost/chennai). Referral fees are ethically risky. Evidence of pain: [LocalCircles](https://www.localcircles.com/a/press/page/world-oral-health-day) |
| 19 | Hearing-aid markups for elderly parents | Health | Killed | F4: [hear.com](https://www.hear.com/in/hearing-aids/prices), [Ear Solutions](https://earsolutions.in/hearing-aid-prices/), [Centre for Hearing](https://www.centreforhearing.org/know-hearing-aid-prices/). An audiologist fitting is also needed |
| 20 | Private-school fees above the committee-fixed fee, plus forced book and uniform bundles | Education | Killed | F3: the school is the gatekeeper and holds power over the child |
| 21 | Tuition and coaching fees | Education | Killed | F5: no comparable document and no clear leak mechanism |
| 22 | Unclaimed scholarships and welfare entitlements | Education / welfare | Killed | F3: needs government approval |
| 23 | Middlemen charging for government services (patta, certificates) | Other | Killed | F3: government offices |
| 24 | Rent advance (5–10 months) and arbitrary deductions when moving out | Rent | Killed | F5: no payer. Recourse runs through the rent-authority process (F3) [unverified] |
| 25 | "Lease/othi" lump-sum rentals, where the owner can't repay or the house is already mortgaged | Rent | Killed | F5: no payer. F3: safe registration goes through the sub-registrar |
| 26 | Grocery and rice overpaying | Food | Killed | F4: quick commerce and group buying. F5: logistics-heavy |
| 27 | Wedding silk sarees: markups and fake zari | Weddings | Killed | F5: price can't be normalised from a photo, and purity needs a physical test |
| 28 | Wedding "seer" vessels sold by the kg at varying rates (roughly ₹400–1,300/kg) | Weddings | **Parked → suggest as a Sedharam module** | Same weight × rate model as Sedharam, so it's not a separate business ([IndiaMART brass ₹450/kg](https://www.indiamart.com/proddetail/brass-vessel-15762348655.html), [₹500/kg](https://www.indiamart.com/proddetail/brass-vessels-10732722712.html)) |
| 29 | Two-wheeler periodic-service overcharging | Transport | Killed | F5: no reliable payer (independent garages) |
| 30 | Used two-wheeler purchase risks (hypothecation, stolen vehicles, overpaying) | Transport | Killed | F4: [OBV](https://orangebookvalue.com/used-bikes), [Bikes4Sale](https://www.bikes4sale.in/), [DriveX](https://www.drivex.in/), [Vutto](https://vutto.in/) |
| 31 | Vehicle, health and life insurance mis-selling | Insurance | Killed | On the rejected list (crowded) |
| 32 | Funeral-service overcharging | Other | Killed | F6: nobody plans ahead, so reels and word of mouth don't reach people before the need |
| 33 | Bank minimum-balance and SMS penalty charges | Banking | Killed | F5: no payer. Converting to a basic (BSBD) account needs branch cooperation (F3) |
| 34 | Hearing, eye and cataract "premium lens" upsell | Health | Killed | F3: the doctor decides in practice. Cheap trusted options (e.g. Aravind) are already known |

---

## 2. Candidate #1: Adagu Check (pawn-ticket and gold-loan guard)

**Pitch:** *"Photo your adagu ticket. See what you really pay in a year, never miss a due date, and move your gold to a cheaper lender, free."*

### 2.1 The problem, with evidence
- **The rate gap is large.**
  - Bank gold loans in Tamil Nadu start at **8.50% a year** ([ratestoday](https://ratestoday.in/gold-loan-interest-rate/tamil-nadu/)).
  - One Tamil Nadu 2026 comparison puts banks and co-ops at about **9–12%** and NBFCs at **10–24%+** ([ComplyKraft, Jul 2026](https://www.complykraft.in/2026/07/gold-loan-interest-tamil-nadu.html?m=1)).
  - Registered TN pawnbrokers reportedly charge **12–24% a year** in practice ([PawnSoftware calculator page](https://www.pawnsoftware.in/pages/gold-loan-interest-calculator.html)) [attr?][unverified].
  - Pawn-shop rates in India are quoted monthly at **2–5% a month** ([IIFL: gold loan vs pawn shop](https://www.iifl.com/blogs/gold-loan/gold-loan-vs-pawn-shop-key-differences-rates-safety)) [attr?].
  - A lender-industry blog puts traditional pawnbrokers and moneylenders at **24–48% effective** ([Finseich](https://finseich.com/blog/new-gold-loan-rules-2026-india)) [attr?].
  - Even the big NBFCs run high-LTV "monthly interest" schemes at about **22% a year** ([Muthoot per-gram page](https://www.muthootfinance.com/gold-loan/gold-loan-per-gram)) [attr?].
- **The law caps pawnbroker interest, but families can't check it.** The TN Pawnbrokers Act lets the state notify a maximum rate of no more than **RBI bank rate + 5%** ([Section 6, Indian Kanoon](https://indiankanoon.org/doc/168618888/); [Act PDF, TN Civil Supplies](https://www.cra.tn.gov.in/tnscs/Files/act/003a_The%20Tamil%20Nadu%20Pawn%20Brokers%20Act%201943.pdf)). I could not find the currently notified rate before the search budget ran out [unverified].
- **Lost gold is a live risk.**
  - The Hindu (Madurai, 11 Jul 2026) reported police investigating **fly-by-night pawnbrokers who vanished with pledged jewellery**. Police advised people to use only banks, NBFCs or licensed brokers ([PressReader](https://www.pressreader.com/india/the-hindu-madurai-9wwb/20260711/281595247283989)).
  - Informal lenders reach about **60% a year** for small TN farmers, and about 68% of their informal loans come from moneylenders or pawnbrokers ([IndiaSpend](https://www.indiaspend.com/why-small-farmers-in-tamil-nadu-borrow-money-at-60-interest-58892)).
- **The rules changed in 2026, and most families don't know.**
  - Under RBI's 2025 directions, from **1 Apr 2026** bullet-repayment gold loans must be settled, principal plus interest, within 12 months. Endless "pay interest, renew" rollovers end, and each renewal needs a formal check ([IIFL](https://www.iifl.com/blogs/gold-loan/gold-loan-renewal-cap-end-of-indefinite-rollovers), [Upstox](https://upstox.com/learning-center/personal-finance/rbi-gold-loan-rules-2026/article-1545/)). The sources differ slightly on renewals [verify].
  - Borrowers gain rights: a **30-day auction notice**, a **reserve price of 90% of market value**, **surplus refunded within 7 working days**, and gold returned within 7 days of closure or ₹5,000 a day compensation ([IIFL auction rules](https://www.iifl.com/blogs/gold-loan/rbi-rules-on-auctioning-pledged-gold-ornaments), [Business Standard](https://www.business-standard.com/finance/personal-finance/rbi-tightens-gold-loan-rules-what-changes-in-repayment-valuation-auction-125100200506_1.html)).
  - LTV is now up to **85% for loans under ₹2.5 lakh**. At TN's 22K rate of about ₹13,618/g, that is up to about **₹11,575 per gram** ([ComplyKraft](https://www.complykraft.in/2026/07/gold-loan-interest-tamil-nadu.html?m=1)).
- **The market is huge and southern.**
  - South India is **85–90%** of India's gold-loan market ([Maximize Market Research](https://www.maximizemarketresearch.com/market-report/india-gold-loan-market/213911/)) [attr?].
  - Estimates of the unorganised share vary widely: **~60–65%** in older estimates ([KPMG 2017](https://assets.kpmg.com/content/dam/kpmg/in/pdf/2017/12/Indian-Gold-Loan-Market.pdf), [Rupeek blog](https://rupeek.com/website/blog/balance-transfer-of-your-gold-loan)) against **~22% in 2025** in another report [attr?]. Treat the size of the informal segment as uncertain.

### 2.2 How a family uses it (Dindigul, step by step)
1. Selvi (a homemaker) has **three pledges**:
   - a chain at the street adagu kadai: ₹60,000 at "2 rupee vatti", i.e. 2% a month;
   - bangles at an NBFC branch: ₹1.2 lakh on a high-LTV monthly scheme;
   - earrings at the co-op bank.
   The paper tickets sit in a steel box.
2. Her son photographs the three tickets and sends them to the Adagu Check WhatsApp number. If nobody in the family uses WhatsApp, Selvi can hand the tickets to a weekly help-desk at the market or bus stand, or give a missed call for a callback.
3. The bot reads each ticket (OCR plus a human check in the MVP): lender, date, principal, stated rate, weight and due date. It replies in **Tamil text and a voice note**:
   - "Chain: you pay about **₹14,400 a year (24%)**. At a 9.5% lender it would be about **₹5,700**. **You'd save ₹8,700 a year.**"
   - "Bangles: renewal is due on 14 Nov. Under the new RBI rule, plan to repay or refinance before then."
   - "Your three items are worth about ₹X at today's rate, against loans of ₹Y. You have ₹Z of headroom, so don't let them go to auction."
4. **Reminders** go out 7 days and 1 day before each due date, as a WhatsApp message and an **automated Tamil voice call to Selvi's basic phone**.
5. **Switch (optional).** One tap books a takeover. A partner lender's agent meets Selvi *at the pawnshop*, pays off the old loan, takes the gold and disburses the new loan. The pawnbroker must legally release the gold on full repayment.
6. **Debt swap (optional).** If the family also owes kandhu vatti at about 60%, the bot shows how a gold top-up at about 10% would retire it, and what that saves.
7. **Auction or notice help.** If a notice arrives, Selvi forwards a photo. The bot explains her rights (30-day notice, 90% reserve price, surplus refund) and her options.

Throughout, interest keeps being paid in **cash** at the lender, and the paper ticket stays with Selvi.

### 2.3 Who saves money, and how much
| Pledge | Current cost | At ~9.5% | Saving a year |
|---|---|---|---|
| ₹60,000 at 2%/month | ₹14,400 | ₹5,700 | **₹8,700** |
| ₹1,00,000 at 24% | ₹24,000 | ₹9,500 | **₹14,500** |
| ₹1,00,000 at 18% (registered pawnbroker) | ₹18,000 | ₹9,500 | **₹8,500** |

All three rows are simple interest and **[A]**. Monthly compounding of unpaid interest would make the gap bigger.

On top of the interest saving:
- **An avoided auction saves the whole gap** between the gold's market value and the loan. A single sovereign (8 g) is worth over ₹1 lakh at today's rate.
- **Retiring ₹50,000 of kandhu vatti** at 60% via a 10% top-up saves about **₹25,000 a year** [A].

### 2.4 Who pays, and why
- **Main payer: lenders**, through a referral fee when a takeover, top-up or new loan is disbursed. Gold-loan DSA payouts are reported at **0.20–0.30% of the loan** ([Ruloans DSA tiers](https://www.ruloans.com/blog/understanding-dsa-commission-tiers/)) [attr?], which is only ₹200–300 per ₹1 lakh. Rupeek advertises **up to ₹5,000** as a referral reward for loans of ₹50,000+ ([Rupeek](https://rupeek.com/), [CreditMantri listing](https://www.creditmantri.com/rupeek-gold-loan/)) [attr?][verify terms]. That shows how much lenders are willing to spend to acquire a customer. [A] A realistic payout is **₹500–1,500 per switched loan**, and this must be confirmed with a signed partner before building. Muthoot FinCorp has a [partners programme](https://muthootfincorp.com/partners).
- **Secondary payer: licensed, lower-rate local pawnbrokers** could pay a small monthly listing fee, the same logic as Sedharam's "cheaper jewellers pay". They are already going digital ([Adagu software for TN pawnbrokers](https://adagu.consign.tech/)).
- **The family never pays.**

### 2.5 F1–F6 check
| Filter | Score | Reason |
|---|---|---|
| F1 Ground reality | **4** | Works from a paper ticket, cash interest, one WhatsApp user or none (help-desk plus voice calls). −1 because switching to a regulated lender needs Aadhaar KYC and usually a bank account |
| F2 Saves money, no new cost | **5** | Free for the family. Savings of ₹8,000–15,000 a year per ₹1 lakh [A] |
| F3 No gatekeepers | **4** | The family alone decides. The pawnbroker is only a counterparty and must legally release the gold on repayment. −1 because some pawnbrokers may stall a release, though the partner lender's agent handles it |
| F4 Not crowded | **3** | **Contested.** Rupeek's takeover already turns a pledge card into a "savings card" ([Rupeek loan transfer](https://rupeek.com/loan-transfer)), and Manappuram and Muthoot do takeovers. But these are *lenders*, not neutral, and none keeps a family's multi-lender register with due-date and auction alerts |
| F5 Practical for the founder | **3** | The MVP is easy: OCR, a rate calculator, reminders and a lead form. −2 because the **revenue per switch is unproven** (it could be as low as ₹200–300) and needs a signed lender partner |
| F6 Cheap to market | **4** | A strong Tamil reel hook ("2 rupee vatti = 24% a year; the bank charges 9%"), a timely news hook (the RBI 2026 rule and the Madurai fly-by-night pawnbrokers), and help-desks near pawnshop clusters. −1 because pawning is private and some families won't share |

### 2.6 Competitors found
| Player | What it does | Why the gap remains |
|---|---|---|
| [Rupeek loan transfer](https://rupeek.com/loan-transfer) | Takeover from pawnbrokers, with a savings card from the existing pledge card. Doorstep service; [Chennai branches listed](https://rupeek.com/india/gold-loan-in-mandaveli-chennai/) | A single lender pushing its own loan. No reminders for other lenders' pledges. App or website first. TN coverage beyond Chennai unverified |
| [Manappuram takeover](https://www.manappuram.com/blogs/gold-loan-takeover-interest-rate), Muthoot, IIFL | Takeover products | Not neutral, and their own high-LTV schemes can be about 22% |
| [BankBazaar](https://www.bankbazaar.com/personal-loan/gold-loan-interest-rates.html), [Cleartax](https://cleartax.in/s/gold-loan-interest-rates), [Paisabazaar](https://www.paisabazaar.com/muthoot-finance/gold-loan/), [ratestoday](https://ratestoday.in/gold-loan-interest-rate/tamil-nadu/), [ComplyKraft](https://www.complykraft.in/2026/07/gold-loan-interest-tamil-nadu.html?m=1) | Rate tables and calculators | English, online and generic. They don't read a Tamil pawn ticket, track due dates, or know a family's pledges |
| [Adagu](https://adagu.consign.tech/), [PawnSoftware](https://pawnsoftware.in/), [PawnEasy Pro](https://pawneasypro.com/) (sends WhatsApp reminders), [Boompledge](https://play.google.com/store/apps/details?id=com.boompoo.pawnmng&hl=en), [LendWise](https://play.google.com/store/apps/details?id=com.subbu.lend_wise&hl=en_IN) | Software for pawnbrokers | Built for the lender (collecting its dues), not the family. It does show pawnbrokers are digitising, so tickets will get easier to read |
| [Attica](https://www.atticagoldcompany.com/services/release-pledged-gold/), [Benaka](https://benakagoldcompany.com/services/release-pledged-gold/) | "Release pledged gold": they pay off the loan and **buy** the gold | Ends ownership. Adagu Check aims to keep the gold |

### 2.7 How this differs from what Scout C killed, and where that argument is weak
- **What Scout C killed** was a *rate comparison*: pawnbroker vs bank, with the family then applying to a lender. I agree that on its own that is crowded, and close to the rejected "loan aggregator" idea.
- **This version is different in three ways:**
  - The core is a **neutral register of every pledge the family holds** (pawnshop, NBFC, bank, co-op), with Tamil voice reminders.
  - It protects against **auctions and the April 2026 rule change**.
  - It uses the gold's current headroom to **retire kandhu vatti**.
  The referral is only how it makes money. It is not the product.
- **Where the argument is weak:** the revenue still comes from lender referrals, which is the aggregator model. Also, the cheapest lenders (co-op and public-sector banks) usually won't pay, which creates a pull to steer families towards NBFCs that do. That must be handled by always showing the cheapest option first, even when it doesn't pay us.

### 2.8 Biggest reason it could fail
Families stay with the adagu kadai for reasons other than price: no paperwork, cash in 10 minutes, open late, small amounts (₹2,000), privacy, and an ongoing relationship. They may enjoy the reminders but never switch, and without switches there is **no revenue**. The DSA payouts reported so far (0.2–0.3%) would not cover the effort.

### 2.9 Two-week validation test
- **Days 1–3:** get a written referral payout from **one** lender or partner: a Rupeek partner route, an NBFC branch, or a DSA platform. The target is at least ₹500 per disbursed switch.
- **Days 1–7:** collect **50 pawn tickets** (photos) in one town through relatives, 3–4 local WhatsApp groups, and a stall near the bus stand or weekly market. Calculate each ticket's effective annual rate and possible saving.
- **Days 5–14:** send each family its report, switch on reminders, and offer a takeover visit.
- **Keep going if all four hold:**
  1. at least 50% of tickets show a possible saving of ₹3,000 a year or more;
  2. at least 60% of families opt in to reminders;
  3. at least 8 of 50 families book a takeover or top-up, and at least 3 complete one;
  4. a lender has confirmed a payout of ₹500+ per switch.
- **Stop if any one holds:**
  1. fewer than 25% of tickets are overpaying by ₹3,000+ a year;
  2. 0–1 switches complete;
  3. no lender will pay above the 0.2–0.3% DSA rate.

### 2.10 MVP (1 developer, 2–4 weeks, under ₹50k)
- A WhatsApp Business number on the Meta Cloud API, with a webhook to a small Node or Python backend and a SQLite/Postgres database.
- Ticket reading: an OCR or LLM vision call (Tamil and English), plus a **concierge check by the founder** for the first 100 tickets.
- A rate engine: converts monthly to yearly rates, handles simple vs compound interest, and holds a hand-maintained rate table for about 10 lenders in the pilot district. It reuses Sedharam's daily gold-rate feed for equity.
- A reminder scheduler: WhatsApp template messages plus pre-recorded Tamil voice calls through a telephony API (Exotel, Twilio or similar).
- Referral hand-off: a lead sheet shared with the partner lender, with status tracking.
- A one-page Tamil calculator website for reels to link to.
- Budget [A]: about ₹15–25k for API, messaging and voice charges, hosting and domain, plus about ₹10k for boosting reels.

---

## 3. Candidate #2: Virundhu Check (function catering and hall quote check)

**Pitch:** *"Before you book the caterer, send us the quote. See what families in your town really paid per plate for the same menu, and who does it for less."*

### 3.1 The problem, with evidence
- **Catering and the hall are the biggest spend after gold.**
  - A Chennai wedding costs **₹5–20 lakh for 400–800 guests**, and venue plus catering take **50–60%** of that ([itsmy.wedding budget guide](https://itsmy.wedding/blog/chennai-wedding-budget-guide)).
  - Catering alone is **30–40%** of the budget ([IIFL Chennai wedding cost](https://www.iifl.com/blogs/gold-loan/wedding-cost-in-chennai)) [attr?].
- **The per-plate spread is wide.**
  - Traditional banana-leaf saapadu in Chennai costs **₹350–600 a plate**, and specialist saapadu caterers **₹400–700**. For 500 guests, the total runs from about **₹2 lakh to ₹10 lakh+** ([itsmy.wedding catering](https://itsmy.wedding/blog/wedding-catering-cost-chennai)).
  - Madurai caterers list starting prices of **₹200–300** ([WedMeGood Madurai](https://www.wedmegood.com/vendors/tamil-nadu/wedding-catering/madurai-main/south-indian/)).
- **Hidden add-ons are common.**
  - Kalyana mandapams bill electricity separately. One venue charges **₹15 a unit** [attr?], while TANGEDCO's commercial tariff is about **₹7–8 a unit** ([Tristar Energy](https://www.tristarenergy.in/blog/solar-for-wedding-halls-marriage-mandapam)).
  - Some halls take a **₹1 lakh caution deposit and return only part of it**, and some charge extra for outside vendors ([San Event Hall guide](https://www.saneventhall.com/kalyana-mandapam-cost-in-chennai-2026-guide/), [BigFday](https://medium.com/@BigFday/things-you-need-to-know-before-booking-a-mandapam-in-chennai-b7fcf2b4640e), [Mandap.com on hidden venue costs](https://www.mandap.com/blogs/venue-budget-planning-hidden-costs-to-watch)) [attr?].
  - One cost guide says hiring your own caterer is **about 25% cheaper than the hall's in-house team** [attr?][unverified].
- **Quotes can't be compared as they stand.** A Chennai caterer's own guide tells families to check whether leaves, vessels, servers and water are included, and to get the menu in writing ([Hogist](https://www.hogist.com/blog/how-to-pick-wedding-caterer-chennai.html)).
- **It's not only weddings.** Tamil functions are frequent: engagement, valaikaappu (baby shower), puberty ceremony, ear-piercing, housewarming, 60th and 80th birthdays, and death rites. So each town generates a steady flow of quotes [A].

### 3.2 How a family uses it (Tiruchirappalli, step by step)
1. Murugan is planning his daughter's wedding for about 600 guests. He gets two handwritten quotes: Caterer A at ₹480 a plate and Caterer B at ₹520.
2. He sends both photos, plus the mandapam's rate card, on WhatsApp.
3. The bot pulls out the menu items and **scores the menu**: for example, 14 items, 2 sweets, 1 vadai, 2 poriyal, 1 kootu, payasam, ice cream. It also lists the **add-ons**: leaf, water, servers, gas and vessels, transport, "service charge 10%".
4. It replies in Tamil: "For a similar 14-item saapadu, Trichy families paid **₹360–430 a plate** in the last 6 months (n = 23). Quote A is **₹50–120 above** that. The 10% service charge is included in most other quotes. Hall: electricity at ₹15 a unit is double the usual rate; ask for the meter reading at start and end."
5. It shows **three caterers** who did this menu for ₹390–420, with photos of their recent functions and phone numbers.
6. A **plate estimator** helps size the order: from the invite count and past turnout at similar functions, it suggests how many plates to book, so the family doesn't over-order [A].
7. Murugan negotiates with A or books a cheaper caterer. The caterer pays us when the booking is confirmed.

### 3.3 Who saves money, and how much
- Example [A]: 600 plates at ₹480 is ₹2.88 lakh. At ₹410 it is ₹2.46 lakh, a **saving of about ₹42,000**.
- Avoiding hall electricity padding and deposit deductions could save another **₹5,000–20,000** [A].
- Right-sizing the plate count avoids paying for 10–15% extra plates [A].

### 3.4 Who pays, and why
**Caterers who really are cheaper** pay a referral fee on confirmed bookings: [A] a flat ₹1,500–3,000, or about 1% of the order. They already pay for leads through listing sites (WedMeGood, Justdial, Sulekha), so pay-on-booking is a cheaper and fairer channel for them. **Families never pay.**

### 3.5 F1–F6 check
| Filter | Score | Reason |
|---|---|---|
| F1 Ground reality | **5** | Paper or handwritten quotes, cash advances, a single WhatsApp photo |
| F2 Saves money, no new cost | **5** | Free to the family. Savings of tens of thousands per function [A] |
| F3 No gatekeepers | **4** | The family (including elders) decides. −1 because some halls force an in-house caterer, which removes the choice, though the tool still flags this *before* the hall is booked |
| F4 Not crowded | **3** | Many vendor-listing platforms exist (below), but none benchmarks a real quote against what local families actually paid |
| F5 Practical for the founder | **3** | The bot is easy. −2 because the benchmark needs about 30–50 real quotes or bills per town first, menus are harder to normalise than gold, and caterers may **bypass** the referral fee once introduced |
| F6 Cheap to market | **3** | Wedding reels do well, but the buying window is short (1–3 months before a function). Families must be reached exactly then, through cross-promotion with Sedharam (same families), invitation printers, or tailors |

### 3.6 Competitors found
| Player | What it does | Why the gap remains |
|---|---|---|
| [WedMeGood](https://www.wedmegood.com/vendors/chennai/wedding-catering/), [Weddingbazaar](https://www.weddingbazaar.com/catering-in-chennai) (also [Coimbatore](https://www.weddingbazaar.com/catering-in-coimbatore), [Madurai](https://www.weddingbazaar.com/catering-in-madurai), [Trichy](https://www.weddingbazaar.com/catering-in-tiruchirappalli)), [WeddingWire](https://www.weddingwire.in/caterers/chennai), [VenueLook](https://www.venuelook.com/caterers/chennai/vendors) | Vendor listings with "starting from" per-plate prices | The vendor pays to be listed and sets its own "starting" price. None checks an actual quote |
| [CaterNinja](https://caterninja.com/chennai/caterers), [Hogist](https://www.hogist.com/catering-services-in-chennai/) (Chennai) | Catering marketplaces or bulk food | They are sellers, focused on metros, corporate and party buffets rather than small-town saapadu |
| [Justdial](https://www.justdial.com/Chennai/Caterers-For-Wedding/nct-10083400), [Sulekha Trichy](https://www.sulekha.com/party-catering/trichy) | Directories and lead generation | Paid leads, no price benchmark |
| [Mandap.com](https://www.mandap.com/blogs/venue-budget-planning-hidden-costs-to-watch), [BigFday](https://medium.com/@BigFday/things-you-need-to-know-before-booking-a-mandapam-in-chennai-b7fcf2b4640e) | Venue booking and guides | Venue-side. They don't audit rate cards |
| [WeddingKart](https://www.weddingkart.co/tools/wedding-budget-calculator), [RecipeScaler](https://recipescalerapp.com/wedding-catering-cost-per-plate-india/), [FinToolBaba](https://fintoolbaba.com/wedding-budget-calculator), [EventBudgetCal](https://eventbudgetcal.com/wedding-catering-calculator/) | Budget calculators with national or city averages | Generic averages, not local paid prices for a matching menu, and English only |

### 3.7 Biggest reason it could fail
**Menus and quality aren't truly comparable, and families choose caterers on trust and taste**, often a relative's recommendation, not on price per plate. Low frequency per family also means the benchmark data grows slowly, and caterers may cut us out after the first introduction.

### 3.8 Two-week validation test
- **Days 1–7:** collect **40 real quotes or final bills** from one district (Trichy or the founder's home town) from caterers' own price lists, families who held functions in the last 6 months, and caterer Instagram and Facebook posts. Normalise them by item count.
- **Days 3–14:** find **10 families** with a function in the next 90 days (through relatives, invitation printers and WhatsApp groups) and give them a quote check. Approach 10 caterers about pay-on-booking.
- **Keep going if all three hold:**
  1. for the same item-count menu, the p75 price is at least 15% above the median;
  2. at least 6 of 10 families say the check changed or confirmed their decision;
  3. at least 3 caterers agree in writing to pay ₹1,000+ per booking.
- **Stop if any one holds:**
  1. the spread is under 10%;
  2. fewer than 2 caterers agree;
  3. families refuse to share quotes.

### 3.9 MVP (2–3 weeks)
- A WhatsApp bot that sends a quote photo to an LLM or OCR extractor, which produces a structured menu (items, counts, add-ons, per-plate price).
- A benchmark table per town, based on item count and veg/non-veg, showing median and range.
- A caterer directory with verified bills and **unique booking codes** to track referrals.
- A hall rate-card checklist (electricity per unit, generator, cleaning, deposit terms).
- This reuses the Sedharam bot's photo pipeline if both are built.
- Budget [A]: under ₹25k.

---

## 4. Candidate #3: Vandi Check (two-wheeler showroom quote check)

**Pitch:** *"Before you pay for the scooter, send the showroom quotation. See which lines are law, which are optional, and which are padding, and which dealers sell without the padding."*

### 4.1 The problem, with evidence
- **The TN Transport Commissioner has already stepped in.** The Commissionerate warned dealers against collecting more than the displayed sale price, after complaints from auto-rickshaw buyers. It cited **Rule 43B of the Central Motor Vehicles Rules**, which requires dealers to display the price with taxes and other charges shown separately. RTOs were told to act on complaints ([DT Next](https://www.dtnext.in/news/tamilnadu/tamil-nadu-auto-dealers-warned-of-action-for-collecting-excess-charges)). That circular covered autos, but the rule applies to all dealers.
- **Dealers now handle registration.** "From December, no RTO visits for personal vehicle registration in Tamil Nadu" ([DT Next headline](https://www.dtnext.in/news/tamilnadu/from-december-no-rto-visits-for-personal-vehicle-registration-in-tamil-nadu-854957)). With registration at the dealer, the "RTO" line on the quote is harder for buyers to check [details unverified].
- **The padding is typical and specific.**
  - Handling or logistics charges run about **₹1,500–4,000**, plus a smart card of about ₹500. These are **not set by law**, and accessories are **optional** ([BikeDetailsHub](https://bikedetailshub.com/articles/on-road-price-guide-india/), [iamabiker](https://iamabiker.com/avin/2026/how-to-calculate-the-on-road-price-of-a-bike-in-india/)) [attr?].
  - One documented complaint: a Honda scooter buyer was pushed to pay **₹2,000 (first asked ₹3,500)** for a helmet, leg guard and seat cover ([ComplaintsBoard HMSI](https://www.complaintsboard.com/honda-motorcycle-scooter-india-hmsi-b124152)) [attr?].
  - Consumer forums award compensation for dealer overcharging ([India TV, MP car case](https://www.indiatvnews.com/madhya-pradesh/mp-consumer-forum-takes-action-against-car-dealer-for-overcharging-customer-orders-this-much-compensation-2025-02-15-976369)).
  - The first insurance policy is bundled into the on-road price, and buying it online is usually cheaper ([PolicyBazaar](https://www.policybazaar.com/motor-insurance/two-wheeler-insurance/articles/bike-insurance-online-vs-dealership/)). I found no figure for the size of the markup.
- **The market is huge.**
  - India sold **2.17 crore** two-wheelers in FY26 ([AckoDrive](https://ackodrive.com/news/two-wheelers-sets-new-record-in-fy-26-with-2-17-crore-units-exports-hit-new-high/); [Business Standard](https://www.business-standard.com/industry/auto/a-first-two-wheeler-sales-cross-20-million-in-fy26-shows-vahan-data-126032200739_1.html)).
  - TN added **1.9 lakh EVs** in FY26, and EV road tax is exempt until Dec 2027 ([RetailIntel](https://retailintel.in/signal/tamil-nadu-ev-registrations-top-1-90-lakh-in-fy26-rising-38-1ae40105)).
  - Sources conflict on TN petrol two-wheeler road tax: some say 8%, others 10% up to ₹1 lakh and 12% above ([BankBazaar](https://www.bankbazaar.com/tax/tamil-nadu-road-tax.html), [Acko](https://www.acko.com/road-tax/tamilnadu-road-tax/)). **Verify before building the calculator.**

### 4.2 How a family uses it (Erode, step by step)
1. Karthik wants a 125cc scooter for his wife. The showroom's quotation slip lists:
   - ex-showroom ₹92,000
   - "RTO" ₹11,000
   - insurance ₹8,900
   - handling ₹2,500
   - accessories ₹3,200
   - extended warranty ₹1,500
   - number plate ₹800
   - **total ₹1,19,900**
2. He sends the photo on WhatsApp.
3. The bot checks each line:
   - ex-showroom against the brand's official TN price;
   - road tax and registration against the TN formula;
   - insurance against the fixed third-party premium plus the typical own-damage range.
   It then flags each line as **legal**, **optional** (accessories, extended warranty) or **not justified** (handling).
4. It replies in Tamil: "Fair on-road price is about ₹1,10,000–1,12,000. Ask them to remove handling (Rule 43B: the displayed price must show charges separately) and accessories. Buying insurance yourself could save about ₹X." It also gives a **polite Tamil script** to show the salesman.
5. It lists dealers in the district whose recent quotes (from other buyers) had **no handling charge**. Karthik buys there, or uses the list as leverage at his first showroom.

### 4.3 Who saves money, and how much
[A] The avoidable items typically add up to **₹3,000–8,000 per purchase**: handling ₹1,500–4,000, forced accessories ₹2,000–3,500, and an insurance difference (amount unverified).

### 4.4 Who pays, and why
- **Main payer: dealers** who sell without padding, paying per confirmed sale [A: ₹500–1,000]. This is plausible because BikeFair.in pays its *users* **₹1,000 per referred purchase** ([BikeFair](https://bikefair.in/)), which suggests dealer-side economics of at least that much.
- **Optional: insurance and loan referrals** through a licensed partner. That needs a POSP or partner tie-up, which is a contract rather than an approval, but it is on the crowded insurance side.
- **The family never pays.**

### 4.5 F1–F6 check
| Filter | Score | Reason |
|---|---|---|
| F1 Ground reality | **4** | Works from the paper quotation and a WhatsApp photo. The purchase itself can be cash or dealer finance. −1 because the family must push back in person at the showroom |
| F2 Saves money, no new cost | **5** | Free to the family. Savings of ₹3,000–8,000 [A] |
| F3 No gatekeepers | **4** | The buyer decides. The dealer is a counterparty, not an approver. −1 because the dealer now controls registration and could slow delivery |
| F4 Not crowded | **2** | **BikeFair.in** already does price discovery and dealer price-matching with referral rewards. BikeWale and ZigWheels give quotes, and on-road calculators exist. No one reads a paper quote line by line, but that gap is narrow |
| F5 Practical for the founder | **3** | Easy to build (a price and tax table plus OCR). −2 because dealer pay-per-sale is unproven, each family buys once every 5–8 years, and there's often only one dealer per brand in a small town |
| F6 Cheap to market | **4** | Showroom-overcharge reels are naturally shareable, and there's a clear peak: Deepavali (early Nov 2026) and Pongal |

### 4.6 Competitors found
| Player | What it does | Why the gap remains |
|---|---|---|
| [BikeFair.in](https://bikefair.in/) | Multi-brand discovery, quotes, dealer price-matching, **₹1,000 referral per purchase**, [on-road calculator](https://bikefair.in/calculator/) | **Closest competitor.** TN coverage unknown [unverified]. It doesn't audit a quote the buyer already has, and it's not in Tamil |
| [BikeWale price quote](https://www.bikewale.com/pricequote/), [ZigWheels price quote](https://www.zigwheels.com/bikes/price-quote) | On-road price estimates and dealer leads | Lead generation *for* dealers, so not neutral |
| [BikeLeague](https://www.bikeleague.in/calculators-converters-for-bikes/bike-on-road-price-calculator/), [OnRoadCost](https://onroadcost.com/blog/on-road-price-calculator-india), [BikeOnRoadIndia](https://bikeonroadindia.com/) | On-road calculators | Manual entry, generic, English |
| [PolicyBazaar](https://www.policybazaar.com/motor-insurance/two-wheeler-insurance/), [Acko](https://www.acko.com/two-wheeler-insurance/) | Online insurance | Insurance only, and crowded |

### 4.7 Biggest reason it could fail
In a small town there may be **only one dealer per brand**, so there's no cheaper seller to send buyers to, and families avoid confronting the dealer. Add BikeFair or a portal copying the idea, and the product becomes a one-off tip rather than a business.

### 4.8 Two-week validation test (run it during the pre-Deepavali buying peak)
- **Days 1–7:** collect **40 real quotations** in one district from recent buyers, dealers' walk-in quotes, and friends. Calculate the avoidable amount on each.
- **Days 1–14:** approach 6 dealers (including multi-brand and sub-dealers) about pay-per-sale. Offer free quote checks to buyers who plan to purchase within 30 days.
- **Keep going if all three hold:**
  1. median avoidable padding is ₹3,000 or more;
  2. at least 2 dealers sign up for pay-per-sale at ₹500+;
  3. at least 15 buyers ask for a check, and at least 3 buy through a listed dealer or report a successful negotiation.
- **Stop if any one holds:**
  1. median avoidable padding is under ₹1,500;
  2. no dealer will pay;
  3. BikeFair turns out to be active in TN with the same offer.

### 4.9 MVP (2–3 weeks)
- A WhatsApp bot with quote-photo extraction.
- A table of ex-showroom prices for the top 30 models (from brand sites) and a TN tax formula (verified first).
- A third-party premium table and own-damage range.
- A flag engine (legal / optional / not justified) and a Tamil negotiation script.
- A dealer list with referral codes.
- Budget [A]: under ₹20k.

---

## 5. Notes for Level 2

1. **The best use of this research may be as modules around Sedharam, not as rivals to it.** Sedharam's bot, gold-rate feed and "photo of a paper bill → one honest number" pipeline would directly power:
   - **Adagu Check** (gold as collateral: same families, same reels audience);
   - **seer vessels by the kg** (parked idea #28: same weight × rate maths);
   - **Virundhu Check** (same wedding moment).
   A "Kalyanam and gold" WhatsApp assistant would have more touchpoints a year than Sedharam alone.
2. **Adagu Check and Scout C's kill of #23 need a Level 2 ruling.** My case is in §2.7. The deciding test is whether one lender will commit to a per-switch payout of ₹500 or more. If not, the idea fails F5.
3. **Unverified items to check first:**
   - the currently notified TN pawnbroker interest cap;
   - real gold-loan referral payouts, and Rupeek's TN coverage beyond Chennai;
   - BikeFair's TN presence;
   - the TN two-wheeler road-tax rate (8% vs 10%/12%);
   - whether the April 2026 RBI 12-month rule allows renewals after the interest is paid (sources differ).
4. **Ideas I'd kill even if pushed** are health price comparisons (hospitals, dental, scans). They're either crowded, or the revenue depends on medical referral fees, which is an ethics and F3 problem.

---

## Sources (main)

**Gold loans and pawnbroking**
- Rates: [ratestoday TN](https://ratestoday.in/gold-loan-interest-rate/tamil-nadu/), [ComplyKraft TN 2026](https://www.complykraft.in/2026/07/gold-loan-interest-tamil-nadu.html?m=1), [IIFL gold loan vs pawn shop](https://www.iifl.com/blogs/gold-loan/gold-loan-vs-pawn-shop-key-differences-rates-safety), [PawnSoftware calculator](https://www.pawnsoftware.in/pages/gold-loan-interest-calculator.html), [Finseich 2026 rules](https://finseich.com/blog/new-gold-loan-rules-2026-india), [Muthoot per gram](https://www.muthootfinance.com/gold-loan/gold-loan-per-gram)
- TN law: [TN Pawnbrokers Act s.6](https://indiankanoon.org/doc/168618888/), [Act PDF](https://www.cra.tn.gov.in/tnscs/Files/act/003a_The%20Tamil%20Nadu%20Pawn%20Brokers%20Act%201943.pdf)
- RBI 2025–26 rules: [IIFL renewal cap](https://www.iifl.com/blogs/gold-loan/gold-loan-renewal-cap-end-of-indefinite-rollovers), [IIFL auction rules](https://www.iifl.com/blogs/gold-loan/rbi-rules-on-auctioning-pledged-gold-ornaments), [Business Standard](https://www.business-standard.com/finance/personal-finance/rbi-tightens-gold-loan-rules-what-changes-in-repayment-valuation-auction-125100200506_1.html), [Upstox](https://upstox.com/learning-center/personal-finance/rbi-gold-loan-rules-2026/article-1545/)
- News and research: [The Hindu Madurai via PressReader](https://www.pressreader.com/india/the-hindu-madurai-9wwb/20260711/281595247283989), [IndiaSpend](https://www.indiaspend.com/why-small-farmers-in-tamil-nadu-borrow-money-at-60-interest-58892), [Scroll](https://scroll.in/article/855716/tamil-nadu-has-stringent-laws-against-moneylending-at-exorbitant-rates-why-does-it-persist-then)
- Market size: [KPMG](https://assets.kpmg.com/content/dam/kpmg/in/pdf/2017/12/Indian-Gold-Loan-Market.pdf), [Maximize Market Research](https://www.maximizemarketresearch.com/market-report/india-gold-loan-market/213911/)
- Lenders and referral economics: [Rupeek loan transfer](https://rupeek.com/loan-transfer), [Manappuram takeover](https://www.manappuram.com/blogs/gold-loan-takeover-interest-rate), [Ruloans DSA tiers](https://www.ruloans.com/blog/understanding-dsa-commission-tiers/), [Muthoot FinCorp partners](https://muthootfincorp.com/partners)
- Pawnbroker software: [Adagu](https://adagu.consign.tech/), [PawnEasy Pro](https://pawneasypro.com/)

**Catering and halls**
- Costs: [itsmy.wedding budget](https://itsmy.wedding/blog/chennai-wedding-budget-guide), [itsmy.wedding catering](https://itsmy.wedding/blog/wedding-catering-cost-chennai), [IIFL Chennai wedding cost](https://www.iifl.com/blogs/gold-loan/wedding-cost-in-chennai), [WedMeGood Madurai](https://www.wedmegood.com/vendors/tamil-nadu/wedding-catering/madurai-main/south-indian/)
- Hall charges and quote checks: [Tristar Energy](https://www.tristarenergy.in/blog/solar-for-wedding-halls-marriage-mandapam), [San Event Hall](https://www.saneventhall.com/kalyana-mandapam-cost-in-chennai-2026-guide/), [Hogist guide](https://www.hogist.com/blog/how-to-pick-wedding-caterer-chennai.html)
- Competitors are linked in §3.6.

**Two-wheelers**
- Dealer charges and complaints: [DT Next dealers warned](https://www.dtnext.in/news/tamilnadu/tamil-nadu-auto-dealers-warned-of-action-for-collecting-excess-charges), [DT Next registration](https://www.dtnext.in/news/tamilnadu/from-december-no-rto-visits-for-personal-vehicle-registration-in-tamil-nadu-854957), [BikeDetailsHub](https://bikedetailshub.com/articles/on-road-price-guide-india/), [ComplaintsBoard](https://www.complaintsboard.com/honda-motorcycle-scooter-india-hmsi-b124152), [PolicyBazaar dealer vs online](https://www.policybazaar.com/motor-insurance/two-wheeler-insurance/articles/bike-insurance-online-vs-dealership/)
- Market and tax: [AckoDrive FY26](https://ackodrive.com/news/two-wheelers-sets-new-record-in-fy-26-with-2-17-crore-units-exports-hit-new-high/), [RetailIntel TN EV](https://retailintel.in/signal/tamil-nadu-ev-registrations-top-1-90-lakh-in-fy26-rising-38-1ae40105), [BankBazaar TN road tax](https://www.bankbazaar.com/tax/tamil-nadu-road-tax.html)
- Closest competitor: [BikeFair](https://bikefair.in/)
