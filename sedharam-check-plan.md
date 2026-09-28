# Sedharam Check: know the real price of your gold before you pay

**One-line idea:** Families in Tamil Nadu lose thousands, and at weddings lakhs, to **sedharam (சேதாரம், wastage), VA and making charges** that vary hugely from shop to shop for the same jewellery. Sedharam Check reads any jewellery **bill or estimate slip** from a WhatsApp photo, converts it into **one honest number** (the real premium over the gold rate), and shows which shops nearby charge less for that type of item. It's free for families. Jewellers who really are cheaper pay only when we send them a buyer.

*Working name: "Sedharam Check" for the Tamil Nadu launch, and something like "GoldFair" for other states. Check trademarks and domains first.*

---

## 0. The five tests you set, and how this idea scores

| Your test | Earlier ideas | **Sedharam Check** |
|---|---|---|
| 1. **Works with ground reality** (cash, paper, not everyone digital) | Saakshi failed (needed UPI) | ✅ It works on the **paper bill or estimate slip** the jeweller already gives. Payment method doesn't matter. Any family member with WhatsApp can send the photo |
| 2. **Saves money, doesn't add a cost** | NeevCheck failed (a new expense) | ✅ **Free for families.** It can save ₹10,000+ on a single sovereign and lakhs on wedding purchases (§1) |
| 3. **No approval from "top people"** (lanjam) | SocietySaver failed (the committee must approve) | ✅ **No government office, committee or official is involved.** A customer checks their own bill. Nobody can block that, and there's no one to bribe |
| 4. **Not already crowded** | Several ideas already existed | ✅ I found jewellers' own apps, explainer blogs and single-bill calculators, but **no neutral comparison across jewellers** (§2) |
| 5. **Practical for you** | – | ✅ It's software (reading photos, a calculator, a WhatsApp bot, a price index). Low capital, and revenue can start this Deepavali |

---

## 1. The problem, in rupees

- **Gold is very expensive now.** 22K gold in Chennai is about **₹14,000 a gram** today (28 Sep 2026) ([Goodreturns](https://www.goodreturns.in/gold-rates/chennai.html), [Paytm](https://paytm.com/tools/gold-rates/22k-gold-rates-chennai/), [LiveChennai](https://www.livechennai.com/gold_silverrate.asp)). So **every 1% of sedharam costs about ₹1,120 per sovereign (8 g).**
- **The spread between shops is huge.**
  - Some Chennai shops advertise around **3% wastage on plain chains and bangles** ([example](https://todaygoldrateinchennai.com/which-gold-jewellery-shop-has-low-making-charges-in-chennai/)).
  - Blogs report **10–24%** as common elsewhere ([BankBazaar](https://www.bankbazaar.com/gold-rate/making-and-wastage-charges-gold-jewellery.html), [ajithprasad.com](https://ajithprasad.com/gold-jewellery-buying-tips-wastage-charges-making-charges-va-karat-916-bis-hallmark/)).
  - One reported Chennai necklace bill charged about 21% wastage ([Unwindlogic](https://www.unwindlogic.com/hidden-charges-in-gold-jewellery-complete-guide/)), and totals can reach 20–40% above the raw gold value (same source).
- **Old-gold exchange hides another loss.** Weight or purity deductions are often not shown clearly, and one gold company's blog puts the loss at 20–35% ([Satva](https://www.satvagold.com/blog/the-gold-exchange-mistake-that-costs-indian-families-lakhs-every-year/)). Treat those percentages as claims to verify with our own data.
- **Every shop names the charges differently:** "wastage", "VA", "making charges", "grams of wastage", sometimes with the shop's own "today's rate" set higher than the market. The customer can't compare shops, and that's what the shops rely on.
- **People are frustrated.** There's even a public petition asking the government to control wastage charges ([Change.org](https://www.change.org/p/cro-bis-org-in-bs-bis-org-in-govt-norms-for-the-wastage-charges-in-gold-jewellery-reduction-control)). People ask online where to find low wastage in Chennai ([Quora](https://www.quora.com/Where-can-I-buy-916-gold-jewellery-with-low-wastage-in-Chennai)), and shops advertise "lowest wastage in Chennai" themselves ([example](https://www.facebook.com/ManojJewellersBoutique/posts/lowest-wastage-in-chennaiwhy-pay-more-on-wastage-when-you-can-get-lowest-wastage/870395163338347/)).
- **It's a huge market.** South India accounts for about **40% of India's jewellery demand**, and Tamil Nadu is among the top gold-consuming states ([World Gold Council](https://www.gold.org/goldhub/research/jewellery-demand-and-trade-india-gold-market-series/17661)).

### What it costs a family (at ₹14,000/g, including 3% GST)
| Purchase | Real premium 4% vs 16% | Difference |
|---|---|---|
| 1 sovereign chain (8 g) | ₹1,19,974 vs ₹1,33,818 | **₹13,844** |
| 10 sovereigns (80 g) | | **≈ ₹1.38 lakh** |
| Wedding set, 25 sovereigns (200 g) | | **≈ ₹3.46 lakh** |

*The 4% and 16% are illustrative. The first 2 weeks (§7) will show the real spread.*

---

## 2. Who already does what (honest landscape)

| What exists | Examples | Why it doesn't solve this |
|---|---|---|
| Jewellers' own apps and savings schemes | [Thangamayil DigiGold](https://play.google.com/store/apps/details?id=com.tmj.digigold_v7&hl=en_IN), [GRT plans](https://www.grtjewels.com/jewellery-purchase-plan/golden-eleven-flexi/) | They sell their own shop, so they're **not neutral** |
| Explainer articles | [BankBazaar](https://www.bankbazaar.com/gold-rate/making-and-wastage-charges-gold-jewellery.html), [Zerodha](https://zerodha.com/z-connect/varsity/buying-gold-jewellery-heres-how-the-pricing-works), [IIFL](https://www.indiainfoline.com/knowledge-center/gold-loan/gold-making-and-wastage-charges) | They explain the charges but **have no shop-by-shop data** |
| Making-charge calculators | [Arthgyaan](https://arthgyaan.com/calculators/gold-making-charges-calculator) | They calculate **one** bill and don't compare shops |
| Shops' own "lowest wastage" ads | Various Chennai jewellers | They're self-declared, not verified |
| Gold rate apps | Many | They show the rate, not the premium each shop charges |

**The gap:** a neutral price index across jewellers, built from **real customer bills and estimates**, that customers can check *before* paying. I can't promise nobody has tried it, but I found no one doing it.

---

## 3. The product

### The core: one honest number
> **Real Premium % = (bill total excluding GST and stone charges) ÷ (net gold weight × that day's standard 22K rate) − 1**

However a shop labels its charges (wastage, VA, making, "grams of wastage", or a higher "today's rate"), this single number makes **every bill comparable**. Using a *standard* reference rate also exposes shops that set their own board rate higher than the market.

**Example:** a bill for an 8 g chain comes to ₹1,28,000 including GST.
- ₹1,28,000 ÷ 1.03 = ₹1,24,272 before GST
- The gold itself is worth 8 × ₹14,000 = ₹1,12,000
- **Real premium = 11%, which is ₹12,272 above the gold value.**

### Four features
1. **Bill check (after buying):** send a photo of any bill, even an old one, and see your real premium and how it compares with the city average for that item type. This is the hook and it teaches people the idea.
2. **Estimate check (before buying).** This is where the money is saved. Standing in the shop, you WhatsApp a photo of the **estimate slip** and get an answer in 30 seconds: "This is 14%. For plain chains, these 3 verified shops near you are at 4–6%."
3. **Shop index:** for each city and market (T. Nagar, Madurai South Masi Street, Coimbatore Oppanakara Street and so on), the median real premium per shop per item type, built from verified bills, with the sample size and dates shown.
4. **Old-gold exchange check:** see how much of your old gold's value the shop's exchange offer actually gives you, compared with fair market value.

### Where the data comes from (cold start solved)
- **Old bills at home.** Nearly every Tamil Nadu family keeps jewellery bills in the almirah. Old bills still work, because we use the standard gold rate for that date.
- **Estimate slips** that users send before buying.
- **Mystery quotes.** Walk into 10 shops in one market and ask for an estimate on a standard item (an 8 g plain chain or 16 g bangles). It costs nothing, because no purchase is needed.
- **Verified shop offers,** accepted only when bills confirm them.

### Keeping it honest
- Check the GSTIN, invoice number and date. Block duplicate uploads, and manually review any unusual bill.
- **Remove personal details** (name, phone, address) as soon as the bill is read. Keep only the item, weights, charges, shop and date.
- **Rankings can never be bought.** They come only from bills. Paying partners are clearly marked "Partner".

---

## 4. Everyone's point of view

| Who | Reaction | Verdict |
|---|---|---|
| **Families buying gold** | "Free, 30 seconds, and it can save me ₹10,000 to lakhs." | ✅ Strong pull at every festival and wedding |
| **Loyal family-jeweller customers** | "I won't switch shops." | ✅ They don't have to. They can say: "The shop nearby gives 5% on this chain. Can you match it?" Many jewellers will match rather than lose the customer |
| **Cheaper jewellers** | "Finally, proof that we're cheaper." | ✅ Your allies. They pay only when you send them a real buyer |
| **Expensive jewellers** | Unhappy | ⚠️ They **can't block** customers from checking their own bills. Many will simply lower their charges, which is a win for buyers. Publish only verified facts (§9) |
| **Government and officials** | **Not involved at all** | ✅ No approvals, licences or office visits, so no one to bribe |
| **Big chains** | They already compete on wastage offers in public | ✅ The cheaper ones will use your ranking in their own ads |
| **You (a developer)** | Reading photos, a calculator, a WhatsApp bot and an index | ✅ Fits your skills. Capital needed is under ₹50,000 |
| **An investor** | A data moat (verified bill prices), repeat use (festivals and weddings), and room to expand to Kerala, Karnataka and AP, plus old-gold selling and gold loans later | ✅ A clear path to scale |

---

## 5. How it makes money (illustrative)

| Stream | How | Example |
|---|---|---|
| **Pay per customer from partner jewellers** | A customer books through Sedharam Check and buys at the displayed premium. The jeweller pays **0.5% of the bill** | ₹600 on one sovereign, ₹7,000 on a ₹14 lakh wedding order |
| **Wedding negotiation service** (optional, for big purchases) | We collect quotes from 3–5 shops for the family's list and negotiate. **Fee = 20% of the savings against the family's best starting quote, capped at ₹25,000. No savings, no fee** | Save ₹1.5 lakh → fee ₹25,000 (cap). The family keeps ₹1.25 lakh |
| **Old-gold selling** (later) | Verified buyers bid for the old gold, and we take a small referral fee | |
| **Gold-loan comparison** (later) | Referral fees from banks and NBFCs through a proper lending-agent arrangement | |

**One city, a year from now (assumptions to test):** 300 partner purchases a month × ₹1.5 lakh average × 0.5% = **₹2.25 lakh/month**, plus 10 wedding negotiations × ₹15,000 = **₹1.5 lakh/month.**

Jewellers already spend heavily on TV, newspaper and influencer ads. **Paying only for an actual buyer is cheaper for them** than any ad.

---

## 6. Real-world objections, answered

| Objection | Answer |
|---|---|
| "Every design is different, so the comparison isn't fair." | Compare within categories: plain machine chains, bangles, rings, coins, handmade and temple jewellery. Show ranges, not one "winner" |
| "Old people don't use apps." | Before weddings, the young people in the family do the checking. A plain photo on WhatsApp is enough, and typing the numbers also works |
| "People won't share their bills (privacy)." | Give first, then ask: share one bill and see how much you overpaid. Personal details are removed immediately. Only the numbers are kept |
| "Jewellers will fight it." | Customers are checking their own bills, and nobody can stop that. Publish only verified facts, with sample sizes, and give shops a right to respond. Get a lawyer to review the wording |
| "Shops will stop giving estimate slips." | Estimates are standard practice when you ask. The GST invoice is mandatory. The cheaper shops *want* to be compared |
| "Big chains will copy it." | A jeweller can't be a neutral comparator. Customers won't trust a shop to rank its rivals |
| "Does it involve cash, UPI or any government office?" | **No.** It reads a paper slip. How you pay and who approves anything don't matter |
| "Gold prices change every day." | The premium % is independent of price. Every bill is compared using the standard rate for its own date |

---

## 7. MVP: prove it in 2 weeks, launch at Deepavali

### Week 1 (28 Sep – 4 Oct): prove the spread is real
- Collect **50 old jewellery bills** from family and friends, with permission, and calculate the real premium % for each.
- Get **mystery quotes from 10 shops** in one market for an 8 g plain chain and 16 g bangles.
- **Keep going if** plain-gold items show a spread of **more than 6 percentage points** between shops. **Rethink if** it's under 3.

### Weeks 2–3 (5 – 18 Oct): build
- A WhatsApp number plus a web page. Photo → AI extraction of the fields (shop, GSTIN, date, item, gross, stone and net weight, rate, VA/wastage/making, discounts, GST, total).
- A daily standard 22K rate table for the city, with history.
- Outputs: real premium %, the rupee amount above gold value, the city median for that category, and verified cheaper shops nearby.
- Talk to **5 lower-premium jewellers** about the pay-per-customer pilot.

### Weeks 4–6 (19 Oct – Deepavali week, early Nov): launch
- The **"Check before you buy"** Deepavali campaign (§8).
- Publish the mystery-shopping comparison video and a press story.

### After Deepavali
- **Nov – Dec:** partner jeweller pilots and the wedding negotiation service. Prepare for the Thai-month wedding season.
- **Jan – Feb 2027:** Pongal and wedding-season campaign. Add a second city (Madurai or Coimbatore).
- **Apr – May 2027:** Akshaya Tritiya campaign.

### Keep going or stop
| Signal | Keep going | Rethink |
|---|---|---|
| Premium spread for plain gold across shops | > 6 points | < 3 points |
| Buyers who check the estimate slip *before* paying, among those who try it | ≥ 30% | < 10% |
| Lower-premium jewellers who agree to pay per customer | ≥ 2 of 5 | 0 of 5 |

---

## 8. Marketing plan

### 8.1 Positioning
> **Same chain. Different shop. Up to ₹[X] difference per sovereign.** Sedharam Check tells you the real price of your gold in 30 seconds, free, before you pay.

**Taglines**
- Tamil: **"நகை வாங்குறதுக்கு முன்னாடி, சேதாரத்தை செக் பண்ணுங்க."**
- Tamil (alternative): **"உங்க பில்லே உண்மையைச் சொல்லும்."**
- English: **"Know the real price of your gold before you pay."**

### 8.2 Why now
- Gold is around ₹14,000 a gram, so **every 1% of sedharam costs about ₹1,120 per sovereign.** People have never felt it more.
- **Deepavali (early November) and the Thai wedding season (Jan–Feb)** are right ahead.
- Until recently, AI couldn't reliably read a crumpled paper bill in seconds. Now it can.

### 8.3 Channels, in priority order
1. **WhatsApp forwards.** Every family group has an upcoming wedding. One forward reaches the exact people about to buy.
2. **Mystery-shopping reels in Tamil** (Instagram and YouTube Shorts): "Same 8 g chain, 5 shops, 5 prices." Price-comparison videos spread naturally.
3. **Tamil personal-finance and family YouTubers:** collaborate on "check your old bills" episodes.
4. **Partner jewellers:** give them a counter sticker reading "Our real premium on plain chains: [X]%. Check it on Sedharam Check." They promote you for free, because it proves they're cheap.
5. **Press:** "T. Nagar survey: the same chain costs [X]% to [Y]% over the gold rate." Tamil newspapers love consumer stories like this.
6. **Office and college WhatsApp groups**, before festival bonuses are paid.

### 8.4 Calendar
| When | Campaign |
|---|---|
| **Oct 2026** | "Check your old bills. How much did you overpay?" (collect data and build awareness) |
| **Deepavali week** | **"Check before you buy"**: estimate check live, mystery-shopping video, press story |
| **Nov – Dec** | "Wedding coming? Get quotes from 5 shops." (negotiation service) |
| **Jan – Feb 2027** | Pongal and Thai wedding season push. Second city |
| **Apr – May 2027** | Akshaya Tritiya: "Don't pay [X]% extra on a lucky day" |

### 8.5 Metrics
- **North star: rupees saved for families**, estimated as the difference between the premium they were quoted and the premium they paid.
- **Funnel:** bills checked → estimates checked before paying → purchases through partner jewellers → wedding negotiations.
- **Data health:** verified bills per shop per category, and the share of the city's jewellers covered.

### 8.6 First 90 days budget (rough)
| Item | ₹ |
|---|---|
| AI extraction, hosting, WhatsApp messages | 3,000–8,000 |
| Mystery-shopping travel and video shoots (a phone is enough) | 5,000–10,000 |
| Small paid boost for the Deepavali reel | 5,000–15,000 |
| Lawyer review of published wording and terms | 5,000–10,000 |
| **Total** | **~₹18,000–43,000** |

### 8.7 Ready-to-use copy
*Please have a native Tamil speaker proofread before use. **Replace every [X] with your real data. Never publish numbers you haven't collected.***

**A. WhatsApp forward**
> **தமிழ்:** நகை வாங்கப் போறீங்களா? 🪙 அதே மாதிரி செயினுக்கு ஒரு கடையில [X]% சேதாரம், இன்னொரு கடையில [Y]%. ஒரு பவுனுக்கே ₹[Z] வரை வித்தியாசம்! பில் அல்லது எஸ்டிமேட் சீட்டை போட்டோ எடுத்து இந்த நம்பருக்கு WhatsApp பண்ணுங்க, 30 வினாடியில உண்மையான விலை தெரியும். முற்றிலும் இலவசம். 📲 [number]
>
> **English:** Buying gold this Deepavali? 🪙 The same kind of chain costs [X]% over the gold rate at one shop and [Y]% at another, a difference of up to ₹[Z] per sovereign! WhatsApp a photo of your bill or estimate slip to [number] and see the real price in 30 seconds. Completely free.

**B. What to say to your jeweller (shown after every estimate check)**
> **தமிழ்:** "பக்கத்துக் கடையில இதே மாதிரி செயினுக்கு [X]% தான். நீங்களும் அதே மாதிரி தர முடியுமா?"
> **English:** "The shop nearby charges only [X]% for this kind of chain. Can you match it?"

**C. Reel script: "Same chain, 5 shops" (45 seconds)**
> **0–5s:** Standing on a busy jewellery street: *"I asked 5 shops for an estimate on the same 8-gram plain chain."*
> **5–30s:** Quick cuts of the 5 estimate slips (blur the shop names if the lawyer advises), each converted into a real premium % on screen.
> **30–40s:** *"Difference between the cheapest and the costliest: ₹[Z]. For one chain."*
> **40–45s:** *"Before you buy, WhatsApp your estimate slip. Free."* Show the number and QR code.

**D. Pitch to a partner jeweller**
> Sir/Madam, customers are comparing sedharam more than ever with gold at ₹14,000 a gram. Our data shows your real premium on plain chains is among the lowest in [area].
> Join as a **partner**: when our users see the proof, they come to you. **You pay 0.5% only when they buy.** There's no monthly fee and no advertising cost. Your ranking always comes from real bills, so it can't be bought, and that's why customers trust it.

**E. Press pitch**
> **Subject:** Survey: the same gold chain costs [X]% to [Y]% over the gold rate in [market]
>
> With 22K gold at about ₹14,000 a gram, every 1% of sedharam costs families about ₹1,120 per sovereign. We collected [N] real bills and mystery quotes from [M] shops in [market]. For plain chains, the real premium over the gold rate ranged from [X]% to [Y]%, a difference of ₹[Z] per sovereign. Full anonymised data available.

**F. Counter sticker for partner jewellers**
> ✅ **Verified on Sedharam Check**
> Our real premium on plain chains: **[X]%**
> Check any bill free: [number]

---

## 9. Risks and answers
| Risk | Answer |
|---|---|
| Jewellers threatening legal action | Publish only aggregates from verified bills, with sample sizes and dates. Avoid words like "cheat". Offer a right of reply. Have a lawyer review before launch |
| Fake or edited bills | GSTIN and invoice-number checks, blocking duplicates, review of unusual bills, and limits per user |
| Too little data outside big markets | Launch in one dense market first (T. Nagar, Madurai or Coimbatore). Mystery quotes fill the gaps |
| Personal data | Consent at upload, personal details removed immediately, and DPDP Act compliance |
| Partner jewellers not honouring the displayed premium | The customer shows the booking. Remove partners who break the deal, and publish the removals |
| The spread turns out smaller than expected | Week-1 test (§7) catches this before any real money is spent |

---

## 10. Ideas checked and dropped this round
| Idea | Why I dropped it |
|---|---|
| SocietySaver (apartment cost cutting) | **Your point:** committees profit from vendors (lanjam), so they'd block it |
| Electricity-bill savings for small factories | TN already waives or reduces peak charges for small LT industries ([PWRNXT](https://pwrnxt.in/blog/tamil-nadu-ci-tariff-decoded)), and C&I energy advisors exist |
| Surplus food at closing time (Too Good To Go model) | Already in India ([Good to Grab](https://thebetterindia.com/398332/good-to-grab-food-waste-solution-sustainability-landfills-app-hyderabad/)). Also, Indian bakeries often resell leftovers the next day |
| Group buying of building materials | Online dealers already sell to families building their own homes ([Building Needs](https://buildingneeds.in/), [Buildiyo](https://buildiyo.store/blogs/buildiyostore-blogs/building-materials-price-list-in-chennai-2026-cement-steel-bricks-more-1)), and contractors who take dealer commissions would resist |

## Sources
- Gold rate, Chennai: [Goodreturns](https://www.goodreturns.in/gold-rates/chennai.html) · [Paytm](https://paytm.com/tools/gold-rates/22k-gold-rates-chennai/) · [LiveChennai](https://www.livechennai.com/gold_silverrate.asp) · [Kotak Neo](https://www.kotakneo.com/gold-rates/gold-rate-today-in-chennai/)
- Wastage and VA ranges: [BankBazaar](https://www.bankbazaar.com/gold-rate/making-and-wastage-charges-gold-jewellery.html) · [ajithprasad.com](https://ajithprasad.com/gold-jewellery-buying-tips-wastage-charges-making-charges-va-karat-916-bis-hallmark/) · [Unwindlogic](https://www.unwindlogic.com/hidden-charges-in-gold-jewellery-complete-guide/) · [Zerodha](https://zerodha.com/z-connect/varsity/buying-gold-jewellery-heres-how-the-pricing-works) · [IIFL](https://www.indiainfoline.com/knowledge-center/gold-loan/gold-making-and-wastage-charges) · [Low-wastage shops, Chennai](https://todaygoldrateinchennai.com/which-gold-jewellery-shop-has-low-making-charges-in-chennai/)
- Old gold exchange: [Satva](https://www.satvagold.com/blog/the-gold-exchange-mistake-that-costs-indian-families-lakhs-every-year/)
- Demand and frustration: [World Gold Council](https://www.gold.org/goldhub/research/jewellery-demand-and-trade-india-gold-market-series/17661) · [Change.org petition](https://www.change.org/p/cro-bis-org-in-bs-bis-org-in-govt-norms-for-the-wastage-charges-in-gold-jewellery-reduction-control) · [Quora](https://www.quora.com/Where-can-I-buy-916-gold-jewellery-with-low-wastage-in-Chennai) · [Shop ad example](https://www.facebook.com/ManojJewellersBoutique/posts/lowest-wastage-in-chennaiwhy-pay-more-on-wastage-when-you-can-get-lowest-wastage/870395163338347/)
- Existing tools: [Thangamayil DigiGold](https://play.google.com/store/apps/details?id=com.tmj.digigold_v7&hl=en_IN) · [GRT plans](https://www.grtjewels.com/jewellery-purchase-plan/golden-eleven-flexi/) · [Arthgyaan calculator](https://arthgyaan.com/calculators/gold-making-charges-calculator)

*Research note: many pages were blocked from the environment this plan was written in, so some facts come from search-result summaries, and several sources are blogs from gold-related companies. Treat all percentages as claims. Your Week-1 test with 50 real bills is what decides whether this idea is real.*
