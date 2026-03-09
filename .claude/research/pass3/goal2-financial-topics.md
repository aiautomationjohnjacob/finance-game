# Goal 2 — Financial Topics (Pass 3 Final)

**Research date:** 2026-03-09
**Purpose:** Devil's advocate stress-test of Pass 2 findings. Produces final definitive content scope.

---

## Stress-Test Results

### Stress-Test 1: APR of 25% — Right Figure, Potential Design Problem

Pass 2 correctly identified 25.2% as the CFPB's 2025 volume-weighted APR for general-purpose cards. This is confirmed: the CFPB 2025 Consumer Credit Card Market Report (December 2025, data through end-2024) cites 25.2% for general-purpose and 31.3% for private-label cards.

**The design question Pass 2 did not answer:** Does using a realistic 25% APR feel punishing and discouraging rather than educational?

**Finding:** No peer-reviewed evidence exists that realistic APR rates discourage learning in simulation contexts. The actual risk runs opposite: using an unrealistically low rate (say, 12%) teaches a misleading lesson. A player who learns "credit card debt isn't that bad" from a 12% simulation and then encounters a real 28% card has been actively harmed.

The design solution is not to lower the rate — it is to explain the rate before applying it. NGPF's credit simulations and Banzai explicitly label their rates as "based on current market averages" to give the number context. The game should do the same.

**Final call on APR:** Use 24–25% as the default APR in credit card simulations. This is both accurate and, if anything, slightly conservative relative to the real world for sub-prime borrowers. Label it as "typical for new card holders with limited credit history." Do not soften it.

---

### Stress-Test 2: Sequential Gating vs. Self-Direction

Pass 2 endorsed 5-tier sequential gating without fully interrogating whether research supports it over self-directed topic choice.

**What research actually shows:**

The structured-vs-self-directed debate in adult learning produces a nuanced finding. Self-directed learning is well-supported for adults who are internally motivated and have baseline competency (Knowles' andragogy model; reviewed by Loeng 2020 in *Education Research International*). However, self-directed financial literacy learning falls apart for two specific reasons:

1. **Prerequisite knowledge matters for harm prevention.** The Ohio State research on financial literacy overconfidence (2021 dissertation; also ScienceDirect 2025) finds that individuals with partial financial knowledge and high subjective confidence engage in riskier financial behavior than those with zero knowledge. This is Dunning-Kruger applied to finance: knowing enough about options to feel confident, but not enough to understand tail risk, is actively worse than knowing nothing. Topic gating for options and futures is therefore a harm-prevention measure, not just a pedagogical preference.

2. **Sequence matters for concept prerequisite chains, not for motivation.** The research finding is nuanced: gate high-harm, high-prerequisite topics (options, futures) behind lower-harm foundational topics (credit, basic investing), but allow free choice within tiers. A player should be able to do mortgages before stocks, or skip mortgages entirely if they're a renter — that choice does not create harm. But they should not be able to jump to the wheel strategy without first understanding what a stock is.

**Final call on gating structure:** The 5-tier sequential structure is correct for preventing harm at Tiers 4 and 5. Within Tiers 1–3, allow parallel navigation: a player can do the mortgage module, the 401(k) module, and the stock module in any order without risk. The hard gate is Tier 3 → Tier 4 (options). Tier 1 completion is required before anything else, because the budget/debt literacy baseline protects the player from the rest of the game.

---

### Stress-Test 3: 401(k) Match — Game Mechanic or Calculator Tool?

Pass 2 added 401(k) employer match as a Tier 3 module based on high ROI and teachability. The stress-test question: is this actually gamifiable, or is it just a calculator?

**Finding:** 401(k) gamification is an active real-world practice with documented success. TIAA's "Square Up Your Savings" challenge, Fidelity's peer comparison feature (participants who saw peer contribution rates were 17% more likely to make a change), and BrightPlan's financial wellness scoring system all demonstrate functional game mechanics built around retirement contribution decisions.

Specifically gamifiable mechanics for the 401(k) match:
- **Match capture bar**: a progress bar showing "You are capturing X% of your available employer match." Reaching 100% is a visible win condition.
- **Compound visualization**: Show the matched dollars growing over 10, 20, 30 years alongside the unmatched scenario. The gap at year 30 is the hook.
- **Vesting cliff mechanic**: Introduce vesting schedules as a scenario card event — "You got a better job offer. You're 6 months from your vesting cliff. Accept or wait?" This is a real decision millions of workers face.
- **Opportunity cost framing**: "By contributing 2% instead of 4%, you are turning down $X in free compensation this year."

None of this requires an external API or complex calculation. It runs entirely in JS math. The 401(k) match module belongs in Tier 3 as a named mechanic, not just a calculator embedded in a sub-screen.

**Final call:** Keep 401(k) match in Tier 3. It is gamifiable. The match capture bar and compound growth visualization are the primary mechanics.

---

### Stress-Test 4: The "48% More Effective" Just-in-Time Claim — Verified

The source and conditions of the 48% claim are now confirmed.

**Primary source:** Kaiser & Menkhoff (2017/2019), World Bank Policy Research Working Paper 8161 — "Does Financial Education Impact Financial Literacy and Financial Behavior, and If So, When?" — a meta-analysis of 126 impact evaluation studies.

**Exact finding:** Offering financial education at a teachable moment (defined as "directly linked to decisions of immediate relevance to the target group") increases effect sizes on financial behavior by 0.079 standard deviation units. The predicted effect size for teachable-moment delivery is g = 0.124, compared to the unconditional average of g = 0.083 — a difference of approximately 49%. The "48%" figure in Pass 2's getoutofdebt.org reference is a close approximation of this.

**Conditions and scope limitations:** This is a finding about effect sizes on behavior, not just knowledge. It holds across RCT subsamples and is robust. However, there are two conditions:

1. The teachable moment must be genuinely proximate to a real decision. A game scenario about credit card APR works as a teachable moment only if the player is at the point of making a credit decision in-game — not if APR is introduced in a tutorial three screens before any decision is required.

2. The effect is compared to advance classroom instruction, not compared to no intervention. The game's scenario card mechanic beats classroom instruction; it does not beat excellent just-in-time advising from a human financial counselor.

**What this means for design:** The life event card system — where a credit card offer scenario appears at the moment the player must decide whether to accept a card, with the APR mechanic introduced at that exact moment — is the correct implementation. A pre-game tutorial explaining APR is pedagogically inferior to the in-scenario reveal. This is the most important design implication in all three passes.

---

### Stress-Test 5: Options/Futures Scope — The Harm Assessment

This is the most important stress-test question for v1 scope.

**The harm hypothesis:** Teaching partial options knowledge in a game may create overconfident beginners who transfer game behavior to real money with catastrophic results ("I learned the wheel strategy in a game, so I tried it with real money").

**Evidence assessment:**

The harm pathway from financial education to overconfident real-money trading is documented, though not specifically for game-based instruction:

- ScienceDirect (2025): "Financial literacy overconfidence significantly drives households toward riskier investments." Overconfidence about financial knowledge is a stronger predictor of risky behavior than low knowledge.
- Ohio State dissertation (2021): Individuals with high subjective financial literacy and moderate objective knowledge engage in more risky behavior than those with high knowledge or low knowledge. The dangerous zone is "just enough to be confident."
- DayTrading.com / QuantifiedStrategies: After 20–30 winning simulated trades, new traders commonly believe they have mastered options trading, failing to attribute success to favorable market conditions.
- Specific to simulators: "When novice traders begin to see a string of successful simulated trades, an insidious illusion of invincibility can take root." (TheMonelyballTrader.com analysis)

**Is there direct evidence of game-specific harm?** No peer-reviewed study specifically links a named financial literacy game to subsequent real-money options losses. The harm pathway is indirect: game → overconfidence → real trading → loss. However, the intermediate links (partial knowledge → overconfidence → risky behavior) are each individually well-documented.

**What mitigates the harm risk?**

Three design choices substantially reduce the risk:

1. **Mandatory catastrophic failure scenario.** The game must not permit a player to complete the options module with only positive outcomes. The wheel strategy crash scenario (stock drops 40%, premium income insufficient to recover, player stuck holding a losing position) must be unavoidable. Players who only experience success in the simulator are the dangerous ones. Players who experience the failure scenario first-hand are inoculated.

2. **Explicit framing as "this is what can go wrong" rather than "this is a strategy to use."** The module framing should be: "Understand what options are and how they fail" — not "Learn a profitable options strategy." The covered call capped-upside reveal and the assignment-during-crash scenario are the primary lessons, not the income-generation phase.

3. **Hard capital gate with real-world context.** Before any options module begins, display: "The wheel strategy requires $5,000–$25,000 in capital per position. This simulation is for understanding the mechanics, not as a recommendation to trade options." This is not a legal disclaimer — it is a teachable calibration point.

**Verdict on options/futures scope:** Including options and futures in the game is defensible IF (a) catastrophic failure scenarios are mandatory, not optional; (b) the framing is "understand the risk" not "learn to profit"; and (c) the modules are hard-gated behind Tier 3 completion. The harm risk from including these topics with proper framing is lower than the harm from excluding them — because exclusion does not prevent players from encountering options in the real world; it just ensures they encounter them without any conceptual framework.

**Risk mitigation that should be in v1:** The options module's catastrophic failure path must be the final scenario, not an optional branch. The player must lose on the wheel strategy at least once before the module marks "complete."

---

## Scope Risk: Options/Futures Harm Assessment

**Summary finding:** The harm pathway (partial knowledge → overconfidence → real-money losses) is real but mitigable through design. The three mitigations are non-negotiable:

| Mitigation | Implementation |
|---|---|
| Mandatory failure scenario | Wheel crash (stock -40%) is the final module scenario, not skippable |
| "Understand risk" framing | Module title: "How Options Work and How They Fail" — not "Income from Options" |
| Capital reality check | Pre-module card states real capital requirement before first simulation |

The 70–80% retail derivatives loss rate (ESMA data, confirmed Pass 2) is used as a game statistic within the module — "7 in 10 retail options traders lose money over any measured period" — not to discourage play, but to calibrate expectation.

The "90%" figure from Pass 1 remains unverified for the US futures market specifically. Do not use it in game copy. The ESMA/SEBI figure of 70–80% is the defensible claim.

---

## Just-in-Time Claim Verification

**Claim:** Just-in-time delivery of financial education produces effects 48% larger than advance classroom instruction.

**Status: CONFIRMED with source.**

- **Source:** Kaiser & Menkhoff, "Does Financial Education Impact Financial Literacy and Financial Behavior, and If So, When?" — World Bank Policy Research Working Paper 8161 (2017); updated and published in *The World Bank Economic Review* (2019).
- **Exact finding:** Teachable-moment delivery increases effect size on financial behavior by approximately 49% relative to the unconditional average effect (g = 0.124 vs. g = 0.083).
- **Scope:** Applies across 126 impact evaluation studies including RCT subsamples. Robust finding.
- **Application condition:** The teachable moment must be proximate to a real decision the player is about to make in-game. A tutorial does not qualify. A scenario card at the moment of decision does.

**Design implication confirmed:** The life event card system — introducing the concept at the moment of the in-game decision — is the pedagogically optimal delivery format, supported by the most comprehensive meta-analysis in financial education research. Pre-game tutorials explaining concepts before gameplay are inferior. Concepts should be introduced in-context, at the moment of decision.

**Limitation acknowledged:** The 48% effect size advantage is relative to advance classroom instruction, not relative to human financial counseling at the decision point. The game cannot match the effect of a qualified advisor speaking directly to a consumer before a real decision. It can, however, match or exceed the effect of classroom instruction — which is the realistic alternative for most players.

---

## Final Topic Scope: V1 vs V2+

### V1 (Launch Scope — Must Ship)

| Tier | Topic | Rationale for V1 |
|---|---|---|
| Pre-Tier 1 | Budget basics onboarding | Required foundation; teens cannot engage Tier 1 without it; 2-screen setup, not a full tier |
| Tier 1 | Credit card debt: APR, minimum payments, debt spiral | #1 priority; strongest "aha" mechanic; teachable at 13+; CFPB data shows crisis level |
| Tier 1 | Emergency fund as named objective | FINRA data: 46% of adults lack 3-month reserve (down from 53% in 2021); motivates Tier 1 completion |
| Tier 2 | Debt simulation: avalanche vs. snowball, DTI | Broad audience; reinforces Tier 1; random event mechanic |
| Tier 3A | Index funds vs. stock picking | 58.6% of stocks destroyed wealth; high teachability; compounding visualization is core |
| Tier 3B | 401(k) employer match | Highest ROI financial action; gamifiable with match capture bar; no investment prerequisites |
| Tier 3C | Mortgages + amortization | Reaches 30–50 cohort; front-loading of interest is deeply counterintuitive; amortization bar mechanic |

### V1 — Woven into Scenario Cards (not standalone tiers)

| Topic | Delivery Format |
|---|---|
| Taxes | Scenario cards: capital gains surprise, W-4 adjustment, Traditional vs. Roth 401(k) comparison |
| Insurance | Scenario cards: "no renters insurance" loss, "HDHP vs. PPO" decision, uninsured driver event |
| Dividend yield traps | One scenario card in Tier 3A: high-yield stock gets dividend cut, player sees price drop |

### V2+ (Post-Launch)

| Topic | Reason Deferred |
|---|---|
| Stock options — wheel strategy | Requires hard-gating behind Tier 3; harm mitigation design is complex; mandatory failure scenario must be built correctly; higher implementation burden than any Tier 1–3 module |
| Futures — leverage/margin | Expert-only audience; smaller user base; even higher harm mitigation burden |
| Full dividend investing module | Covered adequately by one scenario card in V1; standalone module is low incremental value |
| HSA/HDHP dedicated module | High value but niche; covered adequately by one scenario card in V1 |

**Rationale for deferring options/futures:** The harm mitigation requirements (mandatory catastrophic failure scenario, correct framing, capital reality gate) require careful design and testing. A poorly executed options module that lets players succeed without experiencing failure is actively harmful. It is better to exclude these entirely in V1 than to ship them without the mandatory failure path. V2 ships options only when the failure scenario is fully built and tested.

---

## Final Learning Progression (Definitive)

```
PRE-TIER 1: Budget Baseline (onboarding, not a tier)
   Format: 2-screen setup during character creation
   Content: Income → fixed expenses → discretionary dollars
   Required for: Jordan (16) persona; establishes game state variables
   Time: ~3 minutes

TIER 1: Financial Survival (unlock: none — starting point)
   Audience: Everyone, ages 13+
   APR used in simulations: 24–25% (CFPB 2025 general-purpose average)
   Mechanic 1: Debt clock — payment slider controls months-to-payoff in real time
   Mechanic 2: Minimum payment trap — $5,000 balance, 25 years of minimum payments visualized
   Mechanic 3: Avalanche vs. snowball side-by-side race
   Mechanic 4: Emergency fund shield — random events hit player without/with emergency fund
   Named objective: "Build $1,000 emergency fund starter" (progress bar)
   Unlock requirement: 80% quiz score on APR, compound interest, payment strategy concepts

TIER 2: Debt Mastery (unlock: Tier 1 complete)
   Audience: Ages 16–35 primary
   Mechanic 1: Multiple debt juggling (student loan + credit card + car note)
   Mechanic 2: DTI calculator integrated into mortgage pre-qualification scenario card
   Mechanic 3: Random life event deck (medical bill, car breakdown, job loss)
   Named objective: "Reach debt-free status" OR "DTI below 36%"
   Unlock requirement: 80% quiz score

TIER 3 (parallel modules, any order, all unlock after Tier 2):

   TIER 3A: Building Wealth — Index Funds (unlock: Tier 2 complete)
   Audience: Ages 18–40 primary
   APR used: N/A (stock simulations use seeded pseudo-random walk)
   Mechanic 1: Index vs. stock-picker race (seeded historical scenarios)
   Mechanic 2: Fee eater — 0.04% vs. 1.0% expense ratio over 30 years
   Mechanic 3: Dividend yield trap scenario card (one occurrence)
   Mechanic 4: Compound growth — age-22 vs. age-32 start comparison
   Named objective: "Beat the market — or admit you can't"

   TIER 3B: 401(k) & Employer Match (unlock: Tier 2 complete)
   Audience: Ages 22–50 (employed adults)
   Mechanic 1: Match capture bar — 0%, 2%, 4% contribution → show matched dollars appearing
   Mechanic 2: 30-year compound visualization (matched vs. unmatched)
   Mechanic 3: Vesting cliff scenario card — job offer arrives 6 months before vesting
   Mechanic 4: Traditional vs. Roth comparison (taxes-now vs. taxes-later)
   Named objective: "Capture 100% of employer match"
   Note: Framed as "free money before investing" — natural prerequisite framing for 3A

   TIER 3C: Mortgages (unlock: Tier 2 complete)
   Audience: Ages 25–50 primary
   Mechanic 1: Amortization bar — shifts from interest-heavy to principal-heavy in real time
   Mechanic 2: PMI equity countdown — track progress to 20% equity, show monthly PMI burn
   Mechanic 3: ARM vs. fixed — two timelines with simulated rate spike event
   Named objective: "Reach 20% equity — eliminate PMI"

TIER 4: Options — How They Work and How They Fail (unlock: Tier 3A complete, V2 only)
   Audience: Ages 25–50, self-selected
   Framing: "Understand the mechanics and failure modes" — NOT "learn to trade options"
   Capital reality gate: Pre-module card displaying real capital requirements ($5,000–$25,000/position)
   Mechanic 1: Covered call — flat/up/down outcome tree
   Mechanic 2: Cash-secured put — assignment scenario including crash path
   Mechanic 3: Full wheel cycle — mandatory crash scenario IS the module completion condition
   Unlock requirement: Player must experience the catastrophic failure scenario to earn "complete"

TIER 5: Futures — Leverage and Margin (unlock: Tier 4 complete, V2 only)
   Audience: Expert/self-selected, ages 25–50
   Warning gate: Hard opt-in with plain-language risk disclosure
   Mechanic 1: Leverage multiplier slider
   Mechanic 2: Margin call — overnight market move, morning liquidation
   Mechanic 3: Mark-to-market — right thesis, wrong survival
   Loss rate disclosed: "Studies show approximately 70–80% of retail derivatives traders lose money in any measured period (ESMA regulatory data)"
```

---

## Key Design Decisions from Pass 3

1. **APR: 24–25% in all credit card simulations.** CFPB 2025 figure is the correct benchmark. Label it "typical for balance-carrying cardholders." Do not soften it.

2. **Just-in-time delivery is confirmed as the correct format.** Concepts must be introduced at the moment of in-game decision, not in pre-game tutorials. The scenario card system IS the pedagogy.

3. **Topic gating is required for Tier 4–5 only.** Within Tier 3, the three modules (3A, 3B, 3C) are navigable in any order. The hard gate is Tier 3 → Tier 4.

4. **Options/futures are V2, not V1.** Harm mitigation design requirements make them too risky to ship without mandatory catastrophic failure paths. Defer to V2.

5. **The 90% futures loss stat is not used.** Replace with "approximately 70–80%" citing ESMA. The 90% figure is unverified for the US market.

6. **Taxes and insurance are scenario cards, not tiers.** No standalone tiers for these topics in V1 or V2. Integrate into existing module scenario card decks.

7. **Budget baseline is pre-Tier 1 onboarding, not a full tier.** Keep it lightweight — 2 screens, ~3 minutes. It establishes game state variables (income, fixed expenses, discretionary dollars) and is required for the Jordan (age 16) persona to understand Tier 1.

8. **401(k) match module is gamifiable and belongs in Tier 3.** The match capture bar, compound visualization, and vesting cliff scenario card are sufficient mechanics. No external API needed.

9. **Catastrophic failure scenario is non-negotiable for options.** A player who only experiences success in the options simulator is a liability. The failure scenario must be mandatory and unavoidable before module completion is awarded.

---

## Sources

- [CFPB Consumer Credit Card Market Report 2025 (December 2025)](https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market-2025/) — APR 25.2% general-purpose, 31.3% private-label; $160B interest charges; minimum payment rates
- [Federal Register: CFPB 2025 Credit Card Market Report](https://www.federalregister.gov/documents/2026/01/07/2026-00081/consumer-credit-card-market-report-of-the-consumer-financial-protection-bureau-2025)
- [Kaiser & Menkhoff — "Does Financial Education Impact Financial Literacy and Financial Behavior, and If So, When?" — World Bank WPS8161](https://documents1.worldbank.org/curated/en/144551502300810101/pdf/WPS8161.pdf) — primary source for the 48%/0.079 SD teachable moment finding
- [World Bank — "Does Financial Education Impact Financial Literacy" (2019, full version)](https://openknowledge.worldbank.org/server/api/core/bitstreams/f60db227-f3a0-563e-af3f-1c3921f5031b/content)
- [Fernandes, Lynch, Netemeyer — "Financial Literacy, Financial Education, and Downstream Financial Behaviors" — Management Science 2014](https://pubsonline.informs.org/doi/10.1287/mnsc.2013.1849) — knowledge decay finding; 0.1% variance explained; just-in-time framing
- [Why Financial Literacy Classes Fail — GetOutOfDebt.org](https://getoutofdebt.org/244303/why-financial-literacy-classes-fail-research) — synthesis of Fernandes et al. and Kaiser-Menkhoff findings
- [Financial Literacy Overconfidence and Financial Advice Seeking — ResearchGate](https://www.researchgate.net/publication/323856184_Financial_literacy_overconfidence_and_financial_advice_seeking)
- [Navigating Risk: Impact of Overconfidence in Financial Literacy on Retirement Wealth Reserves — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1544612324011255)
- [Financial Literacy Overconfidence, Poor Financial Behaviour, and Loan-Taking Propensity — ScienceDirect 2025](https://www.sciencedirect.com/science/article/pii/S2214845025001061)
- [Partial Knowledge Is a Dangerous Thing — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0167487010000589)
- [Dunning-Kruger Effect in Trading — DayTrading.com](https://www.daytrading.com/dunning-kruger-effect)
- [Simulated Trading — How to Avoid Overconfidence as a New Trader — The Moneyball Trader](https://themoneyballtrader.com/simulated-trading/)
- [Overconfidence Bias in Options Trading — The Option Premium](https://www.theoptionpremium.com/p/mental-capital-the-overconfidence-bias-in-options-trading)
- [Common Pitfalls for New Options Traders — Charles Schwab](https://www.schwab.com/learn/story/common-pitfalls-new-options-traders)
- [Why 90% of Options Traders Lose Money — OptionsTradingOrg](https://www.optionstrading.org/blog/why-most-options-traders-lose-money/)
- [401(k) Gamification: Can Playing Games Improve Retirement Saving? — Sigma REP](https://sigmarep401kadministration.com/401k-gamification-can-playing-games-improve-retirement-saving/)
- [Employee Financial Literacy Gets Gamification Treatment — 401k Specialist](https://401kspecialistmag.com/employee-financial-literacy-gets-gamification-treatment/)
- [This Financial App Gamifies Retirement Planning — The Next Web](https://thenextweb.com/news/financial-app-gamifies-retirement-planning)
- [Gamification Retirement Planning Engages Employees — 401kTV](https://401ktv.com/gamification-retirement-planning-engages-employees/)
- [FINRA Foundation 6th National Financial Capability Study, July 2025](https://www.finrafoundation.org/sites/finrafoundation/files/2025-07/NFCS-Report-Sixth-Edition-July-2025.pdf) — 46% with 3-month emergency fund; 27% literacy pass rate
- [The Impact of an Online Game-Based Financial Education Course — ScienceDirect 2024](https://www.sciencedirect.com/science/article/pii/S0147596724000441) — 0.313 SD improvement; 91% engagement
- [Retail Traders in Futures Markets — CFTC 2024](https://www.cftc.gov/sites/default/files/2024-11/Retail_Traders_Futures_V2_new_ada.pdf)
- [Self-Directed Learning: A Core Concept in Adult Education — Loeng 2020, Wiley](https://onlinelibrary.wiley.com/doi/10.1155/2020/3816132)
- [Structured Learning vs Self-Directed Learning — European Institute of Management and Finance](https://eimf.eu/structured-learning-vs-self-directed-learning/)
- [Is "Just In Time" Financial Education Enough? — LifeCents](https://www.lifecents.com/is-just-in-time-financial-education-enough/)
