# SocietySaver: lower maintenance, and we're paid only from what you save

**One-line idea:** Apartment societies overpay for security, housekeeping, common-area electricity, water tankers and maintenance contracts because no one on the committee knows the fair price. SocietySaver finds the overpayment, fixes it, and is paid **only a share of the money actually saved**. If nothing is saved, the society pays nothing.

*SocietySaver is a working name; check the trademark and domain before using it.*

---

## 0. Why this idea, after the first two failed

| Your test | Saakshi (1st) | NeevCheck (2nd) | **SocietySaver** |
|---|---|---|---|
| Works for everyone it targets, with no hidden dependency | ❌ Needed UPI, but many workers are paid in cash | ✅ | ✅ Deals with the society's accounts and bills, not anyone's personal phone or payment method |
| **Saves people money instead of adding a cost** | – | ❌ It was a new expense, and people are cutting costs | ✅ **It only earns from money it saves. No savings, no fee** |
| Real revenue model | Weak | OK | ✅ A share of savings, then a small subscription |
| Not already crowded | Partly done before | Partly done | ✅ I found no neutral, pay-from-savings cost cutter for housing societies (§3) |

---

## 1. The problem: everyone pays, nobody checks

- Every month, **millions of apartment households** pay maintenance of roughly ₹2–8 per sq ft ([NoBrokerHood, Hyderabad example](https://www.nobrokerhood.com/blog/apartment-maintenance-charges-in-hyderabad/)). Redseer projects 24 million households in gated communities by 2026 ([Brigade Group citing Redseer](https://www.brigadegroup.com/blog/residential/the-allure-of-gated-communities)).
- **Charges rise every year.** One industry blog puts typical society expense growth at 8–12% a year, and residents across cities are protesting maintenance hikes ([Pune Pulse](https://www.mypunepulse.com/apartment-maintenance-disputes-what-residents-can-legally-challenge-in-housing-societies/), [Tribune](https://www.tribuneindia.com/news/chandigarh/residents-oppose-hike-in-maintenance-charges-278302)). Reports of a 2025 Supreme Court ruling say hikes must be reasonable, transparent and approved by the general body ([Shriram Properties explainer](https://www.shriramproperties.com/blog/supreme-courts-landmark-ruling-reshapes-maintenance-charge-policies-for-housing-societies)).
- **Nobody on the committee knows the fair price.** Committees are volunteers, usually a software engineer, a retired banker and a homemaker. A facility-management blog notes that societies "rarely know the current market rate for security, housekeeping, or technical services" and estimates inefficiency at **15–30% of the budget** ([Ardent Facilities](https://www.ardentfacilities.com/property-management-to-stop-apartment-budget-wastage/)). That's a vendor's estimate, so we will verify it ourselves.
- **Who it hurts most:** retired couples paying ₹4,000–6,000 a month from a pension, and families already squeezed by school fees and EMIs.

**Where the money leaks**
| Cost line | Typical leak |
|---|---|
| Security and housekeeping (often the biggest line) | Agency rates far above the legal cost, "ghost" guards billed but not deployed, too many night posts |
| Common-area electricity | Old lighting, pumps and lifts running on bad schedules, the wrong tariff category, sanctioned load set too high (paying fixed charges for capacity never used) |
| Water | Summer tanker bills, leaks, no per-flat metering, treated STP water wasted |
| Maintenance contracts (lifts, generator, STP, fire, pumps) | Renewed every year at +10% without anyone checking market rates |
| Hidden risk | If the agency doesn't pay its guards' PF and ESI, **the society can be held liable** unless it did due diligence ([greytHR](https://www.greythr.com/blog/contract-labor-compliance-for-the-principal-employer/), [Karma Global](https://karmamgmt.com/blog/principal-employer-is-liable-for-pf-of-contractors-in-some-cases)) |

---

## 2. The solution

### Step 1: a free "Overpay Report" (the hook)
- Anyone, even a single resident, uploads the society's **annual income and expenditure statement**, which every society shares at its AGM. It can be a PDF, Excel file or photo.
- AI extracts the line items and converts them into **cost per flat per month**, compared against:
  - **Fair-rate formulas** built from published rules. Example: a guard's fair cost = state minimum wage + employer PF (12%, capped) + ESI (3.25%) + bonus (8.33%) + relief cover + uniform + an agency margin of about 6–15% ([cost breakdown](https://www.knighthood.co/blog/security-guard-cost/), [Delhi example](https://psssecuritysolutions.com/how-much-do-security-guards-cost-in-delhi-ncr-a-transparent-pricing-guide/)). This works from day one, with no data from other societies needed.
  - **Electricity tariff checks** against the state tariff order (a public document).
  - **Peer benchmarks** from other societies. These get sharper with every report.
- Output: **"Your society is probably overpaying ₹X a year. Here are the top 5 places."**

### Step 2: we fix it, and get paid only from savings
- The society signs a simple agreement: **we take a share (for example 25–30%) of verified savings for 12 months. If there are no savings, there's no fee.**
- We do the work:
  - **Run fair tenders** for security, housekeeping and maintenance contracts, with standard specifications, 3–5 vetted bidders and a transparent comparison.
  - **Fix electricity:** LED lighting, pump and lift schedules, and correcting the tariff category and sanctioned load, done with an energy-engineer partner.
  - **Cut water costs:** fix leaks, add per-flat meters where it pays back, and reuse treated STP water.
  - **Check compliance:** verify every month that the agency actually deposits PF and ESI. This protects the workers *and* the society.
- **Savings are measured fairly.** Each cost line has a baseline from the last 12 months, adjusted for official wage and tariff changes. The formula is agreed in writing before any work starts.

### Step 3: stay on as a subscription (year 2 onward)
- ₹3–5 per flat per month covers monthly spend tracking, renewal alerts with fair rates, yearly tenders and the PF/ESI checks.
- That's far less than the savings, and it keeps costs from creeping back.

### The ethics rule, published on the website
**We never save money by cutting workers' legal pay.** The savings come from waste, markups and bad contracts. In fact, the PF/ESI checks make sure guards get what they're owed.

---

## 3. Competition: who's there, and why they don't do this

| Player | What they do | Why they won't cut your costs |
|---|---|---|
| **Society apps** ([MyGate](https://mygate.com/blog/housing-society/society-audit-compliance-guide/) is used by 25,000+ societies, plus NoBrokerHood, ADDA and ApnaComplex ([overview](https://codingclave.com/blog/best-society-management-app-india-2026))) | Gate security, accounting, billing, communication | They're software, not a savings service. Several also earn from **vendor marketplaces**, so cutting vendor prices conflicts with their revenue |
| **Facility-management companies** | Supply the guards, housekeeping and maintenance | **They are the vendors.** They benefit when costs are high |
| **Statutory auditors (CAs)** | Check that the accounts are *correct* | Not whether the prices are *fair*. They're partners, not competitors (§6) |
| **Energy auditors and solar firms** | Electricity only | Narrow scope, and they often sell equipment |
| **Price-guide blogs** ([lift maintenance contracts](https://www.elevatorplus.app/blog-details/lift-amc-charges-india-2026), [security](https://www.sibservices.in/security-guard-cost-bangalore)) | Generic price ranges | No per-society analysis, no implementation, no accountability |

**The gap:** a **neutral** partner that takes money only from the society, never from vendors, and gets paid only when the society saves.
In my searches I found **no one in India doing this for housing societies.** I can't promise nobody ever has, but I found no one. Pay-from-savings cost consulting does exist for businesses in other countries, which shows the model works.

---

## 4. Everyone's point of view

| Who | What they think | Verdict |
|---|---|---|
| **Residents** | "Lower maintenance, and someone finally checked." | ✅ Strong pull. It's their money every month |
| **Committee / treasurer** | "Zero cost, less work (they run the tenders), and I look competent at the AGM." | ✅ Honest committees love it. ⚠️ A committee that gets vendor kickbacks will resist, so the free report goes to residents too (§6) |
| **Workers (guards, housekeeping)** | "Will I lose my job or pay?" | ✅ The ethics rule guarantees legal pay, and the PF/ESI checks protect them |
| **Vendors** | Good vendors win fair tenders. Overpriced ones lose | ⚠️ Expect pushback from inflated vendors. That's the point |
| **Your business** | Revenue per society in year 1 (§5), then a subscription | ✅ Real money per customer. ⚠️ Sales take 1–3 months per society |
| **Competitors** | Society apps have the data but a conflict of interest. Facility-management firms are the vendors | ✅ Neutrality is the moat. Integrating with or being acquired by a society app is a possible exit |
| **Investor** | Pay-from-savings sales, a data moat (benchmarks from every society), recurring revenue, and it extends to offices, schools, hospitals and hotels | ✅ A fundable shape once 10+ case studies are done |
| **Legal** | Standard service contract with the association, and the savings formula in writing | ✅ Get a CA and a lawyer to review the template once |
| **You (a web developer)** | You build the part that scales: the report engine, calculators, tender tool and dashboard | ✅ Fits your skills. You need 2 partners for field work (§7) |

---

## 5. The numbers (illustrative assumptions, to be tested)

**Example: a 300-flat society paying ₹3,000 a month per flat, so about ₹1.08 crore a year.**

| Cost line | Assumed share | ₹ lakh/yr | Assumed saving | ₹ lakh saved |
|---|---|---|---|---|
| Security | 30% | 32.4 | 10% (rates, ghost posts, CCTV-assisted night posts; never wages) | 3.2 |
| Housekeeping | 15% | 16.2 | 8% | 1.3 |
| Common electricity | 18% | 19.4 | 25% (LED, schedules, tariff and load fixes) | 4.9 |
| Water | 10% | 10.8 | 20% (leaks, metering, reuse) | 2.2 |
| Maintenance contracts | 10% | 10.8 | 15% (tenders) | 1.6 |
| Repairs, admin, other | 17% | 18.4 | 0% | 0 |
| **Total** | 100% | **108** | **~12%** | **~13.2** |

- **Residents save about ₹13 lakh a year, roughly ₹370 per flat per month.**
- **Your fee in year 1** at 30%: about ₹4 lakh. Residents still keep about ₹9 lakh in year 1 and all of it after that.
- **Year 2 subscription:** ₹4 × 300 flats × 12 = about ₹1.4 lakh a year.
- **Scale:** 30 societies ≈ ₹1.2 crore in success fees plus ₹43 lakh a year in subscriptions. MyGate alone serves 25,000+ societies, so 30 is about 0.1% of that one app's base.

*Every percentage above is an assumption. The first 10 free reports (§7) will show the real numbers.*

---

## 6. How customers are won: two doors into every society

1. **The resident door (bottom-up).** Any resident can run the free Overpay Report and share it in the society WhatsApp group: "We may be overpaying ₹12 lakh a year." That puts pressure on the committee without anyone having to ask permission, and it gets around committees that don't want outsiders.
2. **The committee door (top-down).** Pitch treasurers and presidents directly: "Free check. You pay only from savings. We run the tenders for you."

Other channels:
- **Apartment federations**, the city-level associations of RWAs. One talk reaches dozens of committees.
- **Statutory auditors (CAs).** They see every society's accounts. Pay them a referral fee, since fairness checking isn't their job.
- **Handover from the builder.** New associations taking over maintenance from the builder are inexperienced and lock in costs for years. Reach them first.

---

## 7. MVP: prove it in 90 days

**Team:**
- **You:** product, the report engine and marketing.
- **Ex-facility manager (partner or revenue share):** vendor knowledge and running tenders.
- **Electrical or energy engineer (per-job partner):** electricity savings.
- **CA advisor:** the savings formula and contract template.

### Stage 0: weeks 1–2, no code
- Get the **annual accounts of 10 societies** from friends, family, colleagues or LinkedIn. Many residents already have the AGM PDF.
- Build the benchmark in a spreadsheet: the fair-guard-cost formula, the electricity tariff check, and cost per flat per line.
- Send **10 free Overpay Reports.** Pitch 3 committees for a pay-from-savings pilot.

### Stage 1: weeks 3–8, build
- **Upload and extract:** a PDF, Excel or photo goes through AI extraction, is mapped to standard cost categories, and is converted to cost per flat per month.
- **Calculators** (also free marketing tools): Fair Guard Cost, Lift Maintenance Contract Check, Common Electricity per Flat.
- **Report generator:** a shareable web page plus a PDF.
- **Tender tool** (simple): standard specifications, vendor invites and a side-by-side bid comparison.

### Stage 2: months 2–6
- Implement changes in the **3 pilot societies**, measure the savings and publish the case studies.

### Keep going or stop
| Signal | Keep going | Rethink |
|---|---|---|
| Free reports finding savings of **≥ 8% of the budget** | 7 of 10 | Fewer than 3 of 10 |
| Committees agreeing to a pay-from-savings pilot after seeing the report | ≥ 3 of 10 | 0 of 10 |
| Verified savings in the pilots after 3 months | ≥ 5% | < 2% |

---

## 8. Marketing plan

### 8.1 Positioning
> **Your society is overpaying.** SocietySaver finds where, fixes it, and gets paid **only from the money you save.**

**Taglines**
- English: **"Pay less maintenance. Pay us only from the savings."**
- Tamil: **"மெயின்டெனன்ஸ் குறையும். சேமிப்பு இல்லைனா, கட்டணம் இல்லை."**
- Hindi: **"मेंटेनेंस कम। बचत नहीं, तो फीस नहीं।"**

### 8.2 Timing (from 28 Sep 2026)
| When | Moment | Campaign |
|---|---|---|
| **Oct – Dec 2026** | AGMs just finished; residents are annoyed about hikes | 10 free reports, calculators live, first 3 pilots |
| **Jan – Mar 2027** | **Budget season** for the new financial year | "Before you approve next year's budget, get a free Overpay Report" |
| **Mar – Jun 2027** | **Summer water crisis** and peak AC load | "Cut your tanker bill" campaign |
| **Jun – Sep 2027** | **AGM season** | Present your case studies at AGMs. Every AGM is a room full of prospects |

### 8.3 Free tools that do the selling
- **Fair Guard Cost Calculator:** enter your state, shift hours, number of guards and the agency's bill, and see the fair range and the overcharge.
- **Lift maintenance contract check:** enter the lift type and age, and see the fair range.
- **Common electricity per flat:** compare your society with similar ones.

Each tool ends with: *"Want the full report? Upload your annual accounts, free."*

### 8.4 Content engine
- A **founder LinkedIn series** of anonymised findings: "We looked at 25 societies. Security cost per flat ranged from ₹X to ₹Y for the same service."
- A **data story for the press** once you have enough reports: "[City] societies may be overpaying ₹X crore a year."
- **Case studies:** "Green Park Residency saved ₹11.4 lakh in 6 months." Use real numbers only, with permission.

### 8.5 Metrics
- **North star: rupees saved for societies.**
- **Funnel:** reports generated → reports shared → pilots signed → verified savings → subscription after year 1.
- **Quality:** savings % per society, disputes over savings calculations (target: zero), and subscription renewal rate.

### 8.6 Budget for the first 90 days (rough)
| Item | ₹ |
|---|---|
| Domain, hosting, AI extraction costs | 3,000–8,000 |
| Flyers, printing, federation event fees | 5,000–15,000 |
| Travel to societies and pilot sites | 5,000–10,000 |
| CA or lawyer review of the contract template | 5,000–10,000 |
| **Total** | **~₹20,000–45,000** |

### 8.7 Ready-to-use copy
*Please have a native speaker proofread the Tamil and Hindi before use.*

**A. WhatsApp message a resident posts in the society group**
> Friends, our maintenance keeps going up every year. I ran our last annual accounts through a free check, and it estimates we may be overpaying about **₹[X] lakh a year**, mainly on [security / common electricity / lift maintenance contracts]. Report: [link]
> The company works only from savings: **if nothing is saved, we pay nothing.** Can we discuss this at the next committee meeting? 🙏

**B. Email to a committee**
> **Subject:** Free check: is [Society] overpaying on maintenance?
>
> Dear [Name],
> Committees work hard, but no one has time to check market rates for every contract. We compare your society's costs line by line with fair rates based on legal wages, state tariffs and similar societies.
> **The first report is free.** If you'd like us to act on it, we run the tenders, fix the electricity and water issues, and are paid **only a share of verified savings for 12 months. If there are no savings, there's no fee.** We never reduce workers' legal pay.
> Could we take 20 minutes at your next committee meeting?
> [Name] · [phone]

**C. Flyer for noticeboards and federation events**
> **Is your society overpaying?**
> ✔ Free Overpay Report from your annual accounts
> ✔ We run fair tenders and fix electricity and water waste
> ✔ **Paid only from savings. No savings, no fee**
> ✔ Workers' legal pay is always protected
> Scan the QR code to check yours

**D. Founder LinkedIn post** (use real numbers only)
> I compared the maintenance accounts of [N] apartment societies in [city].
> For the same service, **security cost per flat ranged from ₹[X] to ₹[Y] a month.** Common-area electricity per flat varied [Z]x.
> Most committees are volunteers with no benchmark, so vendors set the price.
> I'm building SocietySaver: a free check, and if you want us to fix it, we're paid only from what you save.
> If you're on a committee or a resident who's tired of the hikes, comment "CHECK" and I'll send you the link.

**E. Five-slide outline for an AGM**
1. Our maintenance: ₹X/flat/month, up Y% in 3 years
2. Where it goes: a pie chart by cost line
3. Fair rate vs what we pay, for each line
4. The plan: tenders, electricity, water and compliance checks, with the expected savings
5. The terms: pay only from savings, 12 months, with the formula written into the agreement

**F. Answers to common objections**
| They say | You say |
|---|---|
| "We've already negotiated hard." | "Then the free report will confirm it, and it costs nothing to check." |
| "Who are you to audit us?" | "We're not auditors. We're a savings partner, and the committee approves every change." |
| "What if the new vendor is worse?" | "Trial periods, performance clauses and your own specifications. You choose the winner." |
| "30% is too much." | "You keep 70% in year one and 100% after. If there are no savings, you pay nothing." |
| "The guards will suffer." | "Never below legal pay. We also check that their PF and ESI are actually being deposited." |

---

## 9. Risks and answers
| Risk | Answer |
|---|---|
| A committee protecting vendors | The resident door (§6) and the AGM. Transparency is the product |
| Well-run societies with little to save | The free report shows that in a day. Focus on mid-size societies without a professional facility manager |
| Disputes over how much was saved | Baseline and adjustment formula signed before any work starts, and a shared dashboard |
| A society app copies the idea | Neutrality (they earn from vendors), your outcome record and your benchmark data. Partnering or acquisition is a possible exit |
| A new vendor underperforms | Vetted vendor list, trial periods and penalty clauses in the contracts |
| You lack field expertise | An ex-facility manager and an energy engineer on revenue share from day one |

---

## 10. Ideas checked and dropped this round
| Idea | Why I dropped it |
|---|---|
| NeevCheck (engineer inspections for self-built houses) | **Your point:** people are cutting costs, and this was a new expense |
| Electricity meter tracker to avoid tariff slab jumps | Already exists: [Bharat Smart Services](https://www.bharatsmartservices.com/blogs/take-control-of-your-electricity-bill) (meter-photo tracking) and Bijli Auditor (mid-cycle alerts) |

## Sources
- [NoBrokerHood: maintenance charges in Hyderabad](https://www.nobrokerhood.com/blog/apartment-maintenance-charges-in-hyderabad/)
- [Brigade Group (citing Redseer): gated communities](https://www.brigadegroup.com/blog/residential/the-allure-of-gated-communities)
- [Ardent Facilities: stopping apartment budget wastage](https://www.ardentfacilities.com/property-management-to-stop-apartment-budget-wastage/) · [MaintainEase: RWA maintenance calculation](https://maintainease.in/blog/rwa-maintenance-charges-calculation)
- [Pune Pulse: maintenance disputes](https://www.mypunepulse.com/apartment-maintenance-disputes-what-residents-can-legally-challenge-in-housing-societies/) · [Tribune: residents oppose hike](https://www.tribuneindia.com/news/chandigarh/residents-oppose-hike-in-maintenance-charges-278302) · [Shriram Properties: Supreme Court on maintenance charges](https://www.shriramproperties.com/blog/supreme-courts-landmark-ruling-reshapes-maintenance-charge-policies-for-housing-societies) · [Deccan Herald: Bengaluru maintenance fee ruling](https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-maintenance-fee-rulingsparks-debate-3820318)
- [greytHR: principal employer compliance](https://www.greythr.com/blog/contract-labor-compliance-for-the-principal-employer/) · [Karma Global: principal employer PF liability](https://karmamgmt.com/blog/principal-employer-is-liable-for-pf-of-contractors-in-some-cases)
- [Knighthood: security guard cost breakdown](https://www.knighthood.co/blog/security-guard-cost/) · [PSS: Delhi NCR guard pricing](https://psssecuritysolutions.com/how-much-do-security-guards-cost-in-delhi-ncr-a-transparent-pricing-guide/) · [SIB: Bengaluru guard cost](https://www.sibservices.in/security-guard-cost-bangalore)
- [ElevatorPlus: lift maintenance contract pricing 2026](https://www.elevatorplus.app/blog-details/lift-amc-charges-india-2026)
- [Codingclave: society management apps 2026](https://codingclave.com/blog/best-society-management-app-india-2026) · [MyGate: society audit guide](https://mygate.com/blog/housing-society/society-audit-compliance-guide/)
- [Bharat Smart Services: meter tracking](https://www.bharatsmartservices.com/blogs/take-control-of-your-electricity-bill)

*Research note: many pages were blocked from the environment this plan was written in, so some facts come from search-result summaries. Several sources are vendor blogs. Treat their percentages as claims to verify with your first 10 reports.*
