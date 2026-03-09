# Goal 2 — Financial Topics & Content (Pass 2 Critique)

**Research date:** 2026-03-09
**Pass 1 file critiqued:** `.claude/research/pass1/goal2-financial-topics.md`
**Additional sources:** CFPB 2025 Credit Card Market Report, FINRA Foundation 6th NFCS (July 2025), Federal Reserve SHED 2024, educationdata.org, getoutofdebt.org, Morgan Stanley 2025, academic literature on just-in-time financial education.

---

## What Pass 1 Got Right

**Credit card debt as #1 priority is well-supported.** The CFPB's 2025 Consumer Credit Card Market Report (data as of end-2024) confirms: the share of cardholders making only the minimum payment is at its highest since at least 2015 — 15% for general-purpose cards and 20% for private-label cards. Interest charges rose to $160 billion in 2024 (up from $105 billion in 2022). The teachability claim holds.

**The 5-tier gated progression is defensible in principle.** A FINRA Foundation meta-analysis covering 76 RCTs across 33 countries and 160,000+ individuals found financial education is effective in improving both knowledge and behaviour, adjusting for publication bias. Standards grounded in Piaget's Cognitive Development Theory and scaffolded by life stage are confirmed as the research-backed approach (NFEC, Council for Economic Education National Standards).

**The "aha moment" mechanic for credit cards is confirmed.** The minimum payment share hitting a 12-year high validates the urgency of this mechanic. The mechanic maps directly to the documented failure mode.

**Game-based learning stat (0.313 SD improvement) holds.** The ScienceDirect multi-country RCT result is genuine and stands. The 91% engagement figure is also consistent with reported outcomes.

**The stock basics teachability ranking (8/10) is reasonable.** The 58.6% statistic on stocks that destroyed shareholder wealth (1926–2022) is real (Bessembinder research) and well-cited.

---

## Weak Assumptions / Unverified Stats

### 1. The "90% of leveraged futures traders lose all" stat is not a verified regulatory figure

**Pass 1 claim:** "90% of leveraged futures/CFD traders who lose all money or break even"

**Finding:** This figure does not originate from a single authoritative regulatory source. Regulatory data shows:
- ESMA (EU) reports 70–80% of retail CFD accounts lose money in any given period.
- SEBI (India, 2024) reports 70–91% loss rates for intraday/derivatives traders.
- NFA (US) does not publish an equivalent aggregate stat for US futures retail accounts.
- The CFTC Retail Traders in Futures Markets report (2024) discusses retail participation but does not cite a "90%" aggregate failure rate.

**Verdict:** The 90% figure is a commonly repeated industry heuristic, likely conflating CFD data (Europe/Asia) with US futures. For a US-focused game, the honest stat is: "approximately 70–80% of retail CFD and short-term derivatives accounts lose money in a given period (EU ESMA data)." The "90%" claim, while viscerally useful, is unverified for the US futures market specifically and should not be presented as a sourced fact.

**Recommendation:** Downgrade to "studies show approximately 70–80% of retail derivatives traders lose money over measured periods" and cite ESMA rather than implying a single definitive study.

---

### 2. "Top 10–15% of US adults" after completing all 5 tiers — not verifiable from FINRA data

**Pass 1 claim:** "Players who complete all five levels should emerge with financial literacy scores that would place them in the top 10–15% of American adults based on FINRA's benchmark questions."

**Finding:** FINRA's 6th NFCS (July 2025) reports that only 27% of US adults correctly answered 5 or more of the 7 financial knowledge quiz questions. The average score was 3.3 out of 7. The quiz covers: compound interest, inflation, bond prices, mortgage math, stock diversification, money market accounts, and bond/stock risk.

The FINRA quiz does NOT cover options, futures, the wheel strategy, or amortization tables — it tests only basic financial concepts. Scoring in the top 10–15% means answering 6 or 7 questions correctly, which based on the distribution is a reasonable threshold — but this is about basic numeracy, inflation, and simple compound interest, NOT about the advanced content in Tiers 4 and 5.

**Verdict:** The "top 10–15%" claim is plausible but misleading in framing. Completing Tiers 1–3 would likely put a player in the top 20–30% on FINRA's specific 7-question quiz. Tiers 4–5 take the player far beyond what FINRA measures. The claim should be reframed: "Completing Tiers 1–3 addresses all seven concepts tested by FINRA's national financial literacy benchmark. Tiers 4–5 go well beyond what standard financial literacy assessments measure." This is actually a stronger marketing claim, not a weaker one.

---

### 3. Pass 1 APR figures are partially outdated and understated

**Pass 1 claim:** "Average APR (all cards, Q4 2025): 20.97%" and "Average APR (cards accruing interest, Q4 2025): 22.30%"

**CFPB 2025 Report finding:** The CFPB 2025 Consumer Credit Card Market Report (analyzing end-2024 data) reports:
- Average APR for general-purpose credit cards: **25.2%** in 2024 (highest since at least 2015)
- Average APR for private-label cards: **31.3%** in 2024

**Federal Reserve FRED data** (TERMCBCCALLNS) for cards accruing interest is 22.30%, which is the Fed series — the discrepancy arises because the CFPB uses a different denominator (volume-weighted, large-bank focus vs. Fed's narrower series).

**Verdict:** Both figures are technically correct but for different segments. The Fed series (22.30%) undercounts because it includes teaser-rate and introductory-rate cards. The CFPB figure (25.2% for general purpose) is more representative of what a consumer with revolving debt actually faces. The game should use 25–26% as the "typical APR for a balance-carrying consumer" for realism. The 22.30% figure is defensible as a system average but undersells the urgency of the problem.

---

### 4. Student debt figure is close but should be updated

**Pass 1 implied:** The Young Adult starting scenario uses $38,000 student debt.

**Current data (2025 Q3):** Average student loan debt is $39,375 (federal) and $43,333 including private loans (educationdata.org). The median is $20,000–$25,000.

**Verdict:** The $38,000 game scenario figure is close to correct but slightly low. $39,000–$40,000 is the better figure for realism. The median ($22,000) is actually more useful for typical players — the $38K+ average is pulled up by graduate and professional degree holders.

---

### 5. The wheel strategy "safe enough for beginners" framing requires qualification

**Pass 1 claim:** Wheel strategy teachability rated 6/10; described as "the most accessible multi-leg options strategy" and suitable for "advanced players who have cleared earlier modules."

**Finding:** The wheel strategy requires $5,000–$25,000 in capital per position (to secure a put on a $50 stock, you need $5,000 available; to run 2–4 positions requires $10,000–$25,000). This capital requirement means the strategy is inherently inaccessible to the core teen/young adult audience. The "accessible" framing is misleading — accessible relative to other options strategies, but not accessible to beginners in the absolute sense.

Additionally, the downside on the wheel is effectively uncapped — if a stock assigned to you at $47 drops to $15, covered calls at $0.20/week will not recover the $32/share loss for years. Pass 1 covers this but does not sufficiently weight it in the teachability rating.

**Verdict:** The wheel strategy is appropriate to teach as a concept in the game, with the explicit framing that it requires substantial capital, is not a "passive income for beginners" strategy as YouTube often presents it, and that assignment risk in a down market is the primary failure mode. The 6/10 teachability is appropriate IF the game makes the catastrophic failure path inescapable — players must experience it, not just be warned about it. The game should explicitly debunk the "the wheel always makes money" myth that is pervasive in retail options communities.

---

### 6. The minimum-payments-only trend is actually worse than Pass 1 stated

**Pass 1 claim:** "10.75% making minimum payments (Q3 2024)" — "a 12-year high"

**CFPB 2025 finding:** The share of cardholders making only the minimum payment reached **15% for general-purpose cards** and **20% for private-label cards** — the highest since at least 2015. The 10.75% figure appears to be from an earlier quarter or a different methodology. The CFPB figure is the more authoritative and more alarming number.

**Verdict:** The situation is even worse than Pass 1 stated. Update to CFPB figures.

---

## Gaps: Missing Topics

Pass 1 covers the topics in the project brief (credit cards, mortgages, stocks, options, futures) but omits several topics that financial educators consider foundational. These are significant omissions for an app targeting ages 13–50+.

### Gap 1: 401(k) Employer Match — The Most Underutilized Free Money in America

**Why it matters:**
- 98% of companies offering a 401(k) match contributions in some form, yet not all workers contribute enough to get the full match.
- The average employer match is 4–6% of salary, typically 50 cents to a dollar per dollar contributed up to that cap.
- For a 25-year-old earning $50,000, failing to capture a 4% match means leaving $2,000/year of free money uncollected. Over 40 years at 7% returns, that uncollected match compounds to approximately $425,000 in lost retirement wealth.
- Gen Z and millennials are already improving (17–19% increased contributions in Fidelity's 2025 data), but many still miss the full match.
- This is arguably the highest-ROI financial action available to any employed adult — zero downside, immediate 50–100% return on contribution up to the match cap.

**Teachability:** 9/10 — the "always contribute at least to the match" rule is simple, immediate, and viscerally motivating when the math is shown. A game mechanic showing the matched dollars appearing in real time is instantly compelling.

**Recommendation:** Add as a Tier 3 topic (parallel to stocks) for the Alex and Morgan personas. This is arguably more impactful than the dividend yield trap module in Tier 3.

---

### Gap 2: Taxes — The Invisible 20–37% Cost Nobody Plans For

**Why it matters:**
- Taxes are the largest single expense for most working Americans, yet financial literacy curricula often avoid them as "too complicated."
- The most common tax mistakes: not adjusting W-4 withholding (leading to surprise tax bills), not understanding marginal vs. effective tax rates, missing deductions (student loan interest, educator expenses, home office), and not planning for capital gains on stock sales.
- For the game's investor personas: selling a stock for a $5,000 gain and then receiving a $1,200 tax bill that "didn't show up" is a common and painful surprise.
- Understanding that a Traditional 401(k) defers taxes (reducing taxable income now) while a Roth 401(k) pays taxes now for tax-free growth is one of the most consequential decisions a young adult makes.

**Teachability:** 7/10 — marginal tax rates and brackets can be taught with a visual income ladder. Capital gains tax on stock sales can be integrated into the stock trading module directly. The "Traditional vs. Roth" decision is a strong scenario card candidate.

**Recommendation:** Tax mechanics should be woven into existing modules rather than given a standalone tier. The stock module should show capital gains tax on simulated sales. The 401(k) module should model Traditional vs. Roth. A life event card ("You got a raise — but your effective tax rate went up, here's why") is a natural fit.

---

### Gap 3: Insurance — The Risk Transfer Most People Get Badly Wrong

**Why it matters:**
- Health insurance: only 36% of employees are even aware their employer offers an HSA (HSA Bank 2025). High-deductible health plans (HDHPs) + HSA is frequently the mathematically superior option for young, healthy workers, but most choose the familiar low-deductible plan without doing the math.
- The HSA triple tax advantage (pre-tax contributions, tax-free growth, tax-free withdrawals for medical costs) makes it one of the most powerful savings vehicles available — more so than a Roth IRA in some scenarios. Yet knowledge is almost nonexistent outside financial planning circles.
- Auto and renters insurance: young adults routinely under-insure or go uninsured (11% of drivers are uninsured per IIHS). A single uninsured accident can wipe out years of financial progress.
- Life insurance: the game's age range (13–50+) hits the stage where term life becomes relevant for anyone with dependents.

**Teachability:** 6/10 — insurance concepts require explaining expected value and risk pooling, which are abstract. However, scenario cards work perfectly: "Your apartment floods. You have renters insurance: [lose $200 deductible]. You don't: [lose $8,000 in belongings]."

**Recommendation:** Insurance should be a scenario card topic throughout the game (Tiers 1–3), not a standalone tier. The HSA/HDHP decision deserves its own module alongside the 401(k) content.

---

### Gap 4: Emergency Fund Sizing — The $1,000 Starter vs. 3–6 Month Full Fund

**Pass 1 covers emergency funds** but only as a mechanic within debt simulation. The FINRA 2025 data adds urgency: the percentage of US adults who have enough money set aside to cover three months of living expenses dropped to **46%** in 2024, down from **53% in 2021**. This is a seven-point collapse in three years.

**Recommendation:** Promote the emergency fund from a supporting mechanic to a named objective in Tier 1, with clear milestones ($1,000 starter → 1 month → 3 months → 6 months). The FINRA data makes this more urgent than Pass 1 suggested.

---

### Gap 5: Budget/Cash Flow Basics — The Missing Foundation

The 5-tier structure begins with credit card debt but assumes the player understands income, fixed expenses, and discretionary spending. This is an assumption that fails for the 13–18 age range. Before a player can understand why minimum payments are dangerous, they need to understand that money flows in (income), flows out (fixed + variable expenses), and that the gap is what can be directed to debt or savings.

**The Council for Economic Education's 2021 National Standards for Personal Financial Education** lists "earning income" and "spending" as the foundational pre-requisites before credit and saving. Pass 1 skips this layer.

**Recommendation:** Add a pre-Tier 1 "Budget Basics" onboarding sequence (not a full tier, just the opening game state) that establishes income, fixed expenses, and discretionary dollars before introducing the first credit card scenario. This is especially critical for the Jordan (age 16) persona.

---

## Updated Stats (Verified 2024–2025)

| Metric | Pass 1 Stated | Verified Figure | Source |
|---|---|---|---|
| Average APR (cards accruing interest) | 22.30% | 22.30% (Fed series) / **25.2% CFPB general-purpose** | Federal Reserve FRED; CFPB 2025 Report |
| % making only minimum payment | 10.75% (12-year high) | **15% general-purpose, 20% private-label** (highest since 2015) | CFPB 2025 Consumer Credit Card Market Report |
| Interest charges paid by consumers 2024 | Not stated | **$160 billion** (up from $105B in 2022) | CFPB 2025 |
| Total US CC debt | $1.277 trillion (Q4 2025) | **>$1.2 trillion** end-2024 | CFPB 2025 |
| Average student loan debt | ~$38,000 (implied by game scenario) | **$39,375 federal; $43,333 total** (Q3 2025) | educationdata.org |
| % adults with 3-month emergency fund | Not cited | **46%** (down from 53% in 2021) | FINRA Foundation 6th NFCS, July 2025 |
| FINRA literacy pass rate (5+/7 correct) | 73% below 57% | **Only 27% answered 5+ of 7 correctly** | FINRA Foundation 6th NFCS, July 2025 |
| 90% futures traders lose all | "90% of leveraged futures/CFD traders" | **Not verified for US futures specifically; ~70–80% for EU retail CFDs** | ESMA; SEBI India; CFTC (no equivalent US stat) |
| Wheel strategy capital requirement | Not stated | **$5,000–$25,000 per position** to run the wheel on any liquid stock | OptionsPlay, Option Alpha, SteadyOptions |

---

## Priority Matrix Revision

The core priority order from Pass 1 is sound. Two adjustments are warranted:

### Addition: 401(k) Match — insert between Tier 2 and Tier 3A

The 401(k) employer match is arguably a higher-urgency topic than dividend investing for the Alex (25) and Morgan (42) personas. It requires zero market knowledge, has a guaranteed 50–100% immediate return, and is persistently under-utilized. It should be elevated from "missing topic" to a named module in Tier 3 alongside index funds — the natural framing is: "Before you invest in the stock market, capture free money from your employer."

### Revised Priority Matrix (additions in bold)

| Topic | Audience Impact | Teachability | Urgency | Priority Score | Priority Rank |
|---|---|---|---|---|---|
| Credit Card Debt | CRITICAL — 47% carry a balance; $160B interest paid in 2024; 15–20% making minimums | 9/10 | HIGHEST | **9.5** | **#1** |
| Debt Simulation (general) | HIGH — emergency funds at 46% (down from 53%); avalanche/snowball; DTI | 9/10 | HIGH | **9.0** | **#2** |
| **401(k) Employer Match** | HIGH — free money; immediate 50–100% return; affects all employed adults | 9/10 | HIGH | **8.5** | **#3 (NEW)** |
| Stock Basics & Index Funds | HIGH — 40% of non-investors cite confusion; retail underperforms by 6.1%/yr | 8/10 | HIGH | **8.0** | **#4** |
| Mortgages | HIGH — largest financial decision; amortization front-loading misunderstood | 7/10 | MEDIUM-HIGH | **7.5** | **#5** |
| **Taxes (integrated)** | HIGH — affects every module; capital gains surprise; W-4 errors | 7/10 | MEDIUM-HIGH | **7.0** | **#6 (NEW)** |
| **Insurance (scenario cards)** | MEDIUM-HIGH — HSA gap; renters/auto under-insurance affects all ages | 6/10 | MEDIUM | **6.0** | **#7 (NEW)** |
| Dividend Investing | MEDIUM — yield traps affect active investors | 6/10 | MEDIUM | **5.5** | **#8** |
| Stock Options (Wheel) | MEDIUM — growing retail adoption; high harm when misunderstood | 6/10 | MEDIUM | **5.0** | **#9** |
| Futures | LOW-MEDIUM — smaller audience; 70–80% retail loss rate (not 90%) | 5/10 | LOW-MEDIUM | **3.5** | **#10** |

---

## Timing / Delivery Method Note (New Finding)

Pass 1 does not address a critical research finding on financial literacy effectiveness: the **just-in-time problem**.

Research cited in the getoutofdebt.org analysis (drawing from peer-reviewed studies) shows that:
- Financial literacy education loses its statistical impact within 20 months of delivery regardless of instruction hours.
- Financial education delivered at the moment of a financial decision produces effects 48% larger than classroom instruction.

This has a direct design implication: the game's scenario card mechanic is not just an engagement feature — it is the pedagogically optimal delivery format. A player being offered a credit card in-game at the moment they need to understand APR is precisely what the research shows works. This validates the life-event card system from decisions.md.

**Recommendation:** Frame the scenario cards explicitly as "just-in-time" teaching moments in the design document. The card should introduce the concept (e.g., APR) at the moment the player is about to make the decision, not in a pre-game tutorial.

---

## Updated Recommendation

### What to keep from Pass 1
- 5-tier progression structure: correct
- Credit card debt as #1: correct, stats updated (worse than Pass 1 stated)
- Wheel strategy as Level 4 requiring explicit gating: correct
- Futures as opt-in Level 5 with warning gates: correct
- Game-based learning effectiveness (0.313 SD): confirmed
- Scenario card (life event) mechanic as core delivery: now additionally confirmed by just-in-time research

### What to change
1. **Add 401(k) employer match as a named Tier 3 module.** It is higher-priority than dividend investing and requires zero investment prerequisites. Mechanic: "Your employer offers a 4% match. You contribute 0%, 2%, or 4%. Watch what happens over 30 years."

2. **Integrate tax consequences into stock and 401(k) modules.** Do not add a standalone tax tier. A scenario card ("You sold your stock for a gain — here's the capital gains tax bill you didn't expect") and a Traditional vs. Roth comparison at the 401(k) module are sufficient.

3. **Integrate insurance into scenario cards throughout.** A "no renters insurance" scenario, an "HSA vs. PPO decision" scenario, and an "uninsured driver hit my car" event are sufficient to teach the core concept without a dedicated tier.

4. **Correct the 90% futures stat** to "approximately 70–80% of retail derivatives traders lose money" with EU ESMA regulatory data as the source. Do not use the 90% figure in game copy.

5. **Reframe the "top 10–15%" claim.** More accurate: "Completing Tiers 1–3 addresses all seven concepts measured by FINRA's national benchmark. Tiers 4–5 go beyond any standard financial literacy assessment." This is honest and stronger as a marketing claim.

6. **Use 25% as the "typical APR" in game simulations**, not 22.3%. The CFPB 2025 figure (25.2% for general-purpose cards) better represents what balance-carrying consumers face.

7. **Emergency fund as named Tier 1 objective.** Given the collapse from 53% to 46% of adults with 3-month reserves between 2021 and 2024, the emergency fund deserves a more prominent named mechanic, not just a supporting role.

---

## Sources

- [CFPB Consumer Credit Card Market Report 2025](https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market-2025/) — APR data, minimum payment rates, interest charges
- [Federal Register: CFPB 2025 Credit Card Market Report](https://www.federalregister.gov/documents/2026/01/07/2026-00081/consumer-credit-card-market-report-of-the-consumer-financial-protection-bureau-2025)
- [FINRA Foundation 6th National Financial Capability Study, July 2025](https://www.finrafoundation.org/sites/finrafoundation/files/2025-07/NFCS-Report-Sixth-Edition-July-2025.pdf) — literacy scores, emergency fund stat, struggling households
- [FINRA Foundation Releases Sixth Wave NFCS](https://www.finra.org/media-center/newsreleases/2025/finra-foundation-releases-sixth-wave-national-financial-capability-study)
- [FINRA Foundation Releases State-by-State Financial Knowledge Findings](https://www.finra.org/media-center/newsreleases/2025/finra-foundation-releases-state-state-financial-knowledge-findings)
- [Federal Reserve FRED — Credit Card Interest Rates (TERMCBCCALLNS)](https://fred.stlouisfed.org/series/TERMCBCCALLNS)
- [Student Loan Debt Statistics 2026 — educationdata.org](https://educationdata.org/student-loan-debt-statistics)
- [Average Student Loan Debt 2025 — educationdata.org](https://educationdata.org/average-student-loan-debt)
- [Why Financial Literacy Classes Fail: What the Research Actually Shows — getoutofdebt.org](https://getoutofdebt.org/244303/why-financial-literacy-classes-fail-research)
- [Why We Teach Financial Literacy to Teenagers at the Worst Possible Time — getoutofdebt.org](https://getoutofdebt.org/244362/teen-brain-financial-literacy-neuroscience)
- [Financial Education is Effective and Efficient — CEPR VoxEU](https://cepr.org/voxeu/columns/financial-education-effective-and-efficient) — 76-country RCT meta-analysis
- [Testing the Effectiveness of Financial Education — FINRA Foundation](https://www.finrafoundation.org/sites/finrafoundation/files/Financial-Education-Matters-Testing-Effectiveness-Financial-Education_1.pdf)
- [FINRA Foundation Financial Education Effectiveness Across 76 Studies](https://www.finrafoundation.org/sites/finrafoundation/files/Financial-Education-Matters-Testing-Effectiveness-Financial-Education_1.pdf)
- [HSA Bank 2025 Health & Wealth Index](https://www.hsabank.com/HSABank/Employers/Health-Wealth-Index/2025-HSA-Bank-Health-and-Wealth-Index) — HSA awareness gaps
- [Morgan Stanley State of the Workplace 2025 Financial Benefits Study](https://www.morganstanley.com/atwork/state-of-the-workplace) — employer financial wellness demand
- [Average 401(k) Plan Match 2025 — Nasdaq/Yahoo Finance](https://www.nasdaq.com/articles/what-average-401k-plan-match-2025)
- [How 401(k) Match Works — Fidelity](https://www.fidelity.com/learning-center/smart-money/average-401k-match)
- [401(k) Vesting Schedule Reality — CNBC 2025](https://www.cnbc.com/2025/11/28/401k-match-vesting-schedules.html)
- [Wheel Options Strategy Risks — OptionsTrading IQ](https://optionstradingiq.com/wheel-options-strategy-risks/)
- [Three Things to Know About the Wheel Strategy — Charles Schwab](https://www.schwab.com/learn/story/three-things-to-know-about-wheel-strategy)
- [The Wheel Strategy Explained — OptionsTrading.org](https://www.optionstrading.org/blog/the-wheel-strategy-explained/)
- [Do 90% of Forex Traders Really Lose? NFA Data — Medium](https://medium.com/@trading-psychology/forex-trader-success-rate-2496c14d6379)
- [Retail Traders in Futures Markets — CFTC 2024](https://www.cftc.gov/sites/default/files/2024-11/Retail_Traders_Futures_V2_new_ada.pdf)
- [The Impact of an Online Game-Based Financial Education Course — ScienceDirect 2024](https://www.sciencedirect.com/science/article/pii/S0147596724000441)
- [Gamification in Enhancing Student Financial Knowledge — ResearchGate](https://www.researchgate.net/publication/384118604_Gamification_in_Enhancing_Student_Financial_Knowledge_Engagement_and_Enjoyment_in_Financial_Education)
- [National Standards for Personal Financial Education — Council for Economic Education 2021](https://www.councilforeconed.org/wp-content/uploads/2021/10/2021-National-Standards-for-Personal-Financial-Education.pdf)
- [Only 27% of US Adults Can Pass Basic Money Quiz — Money.com](https://money.com/adults-cant-pass-basic-money-quiz/)
- [FINRA Financial Knowledge Quiz](https://www.finra.org/financial_knowledge_quiz)
