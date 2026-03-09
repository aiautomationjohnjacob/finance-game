# Goal 6 — Game Design (Pass 2 Critique)

---

## What Pass 1 Got Right

**The monthly turn-based loop is defensible.** The "Spent" precedent confirms the one-month cadence is digestible for life-simulation financial games. Pass 1 correctly identified that time-compressed monthly turns let players experience consequences that would take years in real life, which is the core pedagogical advantage of simulation games.

**The amortization visualization mechanic is strong.** The animated split bar (principal vs. interest) is the clearest way to communicate the counterintuitive front-loading of interest payments. This is well-grounded in how financial educators approach mortgage literacy.

**The three-phase options progression (metaphor → mechanic → math) is pedagogically sound.** Progressive disclosure with a concrete metaphor before numbers is a well-established instructional design pattern. The rental/insurance framing appears consistently in practitioner options education (covered call as "rental income" is standard Schwab/tastytrade language).

**The mastery-gated tier system is correct.** Quiz score ≥ 80% to unlock the next tier mirrors Khan Academy's model and prevents players from proceeding without retention. Pass 1 is right to prefer competency-gating over time-gating.

**Fictional tickers are the right call for beginners.** Pass 1 correctly rejected real market data. Fictional companies with scripted events let the game control exactly what lesson is being taught each month.

**The anti-leaderboard recommendation is well-reasoned.** Global leaderboards in personal finance contexts are inappropriate — they gamify wealth accumulation as competition and discourage beginners.

---

## Design Risks & Weak Assumptions

### 1. Monthly Turn Cadence — Likely Too Slow for Teen Persona (Jordan, 16)

**The assumption:** A monthly turn is the right cadence for all three personas.

**The problem:** Research on teen attention spans shows 13–16 year olds have sustainable focus windows of 28–42 minutes, and educational game design research consistently recommends feedback loops that deliver meaningful feedback within a single session. A monthly turn with only 1–3 life event cards means Jordan could complete one "month" in under 3 minutes — and then have nothing left to do until they click "advance to next month." This is structurally fine for Alex (25) and Morgan (42), who have longer patience for simulation, but it risks feeling anticlimactic for a 16-year-old expecting game-level engagement.

**Fix:** The monthly turn should feel like a complete mini-session, not a single click. Each month must contain enough decision moments — income allocation, at least one life event card, one optional investment/debt decision, and a visible consequence reveal — to fill 5–10 minutes of engagement. The "fast-forward" feature proposed in Pass 1 for DCA months actively works against this by encouraging players to skip turns. DCA auto-investing should happen in the background; the turn should always surface something interactive.

**Research basis:** Game-based learning research (PMC, Frontiers 2024) shows engagement and learning outcomes are correlated with active decision-making per session, not passive progression.

### 2. 10-Screen Count — Too Many for MVP, Some Screens Are Actually the Same Pattern

**The assumption:** 10 distinct screens are needed for MVP.

**The problem:** Several of Pass 1's 10 screens are variations of the same pattern. The "Module Detail" screen (screen 7) is functionally the same as the "Quiz Screen" (screen 10) — both are within the Learning Center flow. The "Year-End Summary" (screen 9) can be implemented as a modal overlay on the Dashboard rather than a separate screen. These aren't bugs, but they inflate the perceived screen count.

**Minimum viable screen count for the core loop:** 5 screens.
1. **Onboarding** — pick scenario, enter name (must exist for personalization)
2. **Dashboard (hub)** — net worth, cash, debt, investments, month counter, life event card prompt
3. **Life Event Card** — full-screen modal/overlay (arguably a dashboard state, not a separate screen)
4. **Debt + Portfolio combined view** — pass 1 has these as screens 4 and 5; for MVP these can be tabs within one screen
5. **Year-End Summary** — modal or dedicated screen; required for session closure

The Learning Center (screen 6), Options Workshop (screen 6b in pass 1), Achievement Grid (screen 8), and separate Quiz screen can all be deferred to post-MVP or embedded within the dashboard flow. The core value proposition — make financial decisions, see consequences, understand why — does not require a Learning Center to launch.

**Recommendation:** Build 5 screens for MVP, ship, then add Learning Center and Achievement Grid in v1.1.

### 3. Life Event Deck — 12 Cards Is Insufficient for a 24-Month Playthrough

**The assumption:** 12 life event cards at launch is sufficient.

**The math:**
- Game length in decisions.md is set at 24 months (from testplan.md milestone 10: "advance through at least 24 months")
- If a card draws every turn (monthly), that's 24 draws
- Even if a card draws every 2 months: 12 draws
- A deck of 12 with 12 draws = every card appears at least once, likely repeating
- A teen playing multiple playthroughs (which the game encourages) will see the same Car Breakdown card within 2–3 sessions

**Correct deck size:**
- For a 24-month playthrough with 1 card/month: need 20+ cards to prevent noticeable repetition
- For replayability across 3 playthroughs: need 30+ cards, or a system of card variants (same scenario, different dollar amounts) to prevent exact repetition
- Minimum for non-repetitive single playthrough: 20 cards

**Recommendation:** MVP launches with 20 life event cards minimum. Use a weighted draw system (negative events more frequent in lower-cash states, positive events more frequent mid-game) to create a dynamic feel. The 12-card list in Pass 1 is a good starting set; add 8 more before launch.

**Suggested additional 8 cards:** Inheritance windfall (+$5,000), Friend asks to borrow money, Insurance premium increase, Salary negotiation opportunity, Subscription creep audit (find $200/mo in unused subscriptions), Student loan refinance offer, Market rally (+20%), Credit score improvement unlock.

### 4. Starting Financial States — Partially Accurate, Needs Correction

**Teen scenario ($800 cash, $1,200/mo income):**
Research data: Teens aged 16–19 earn a median $633/week ($32,916/year) if full-time, but most teens work part-time. 39% of surveyed teens hold a part-time job (Piper Sandler). Among teens with savings, 23% have under $250, 25% have $500–$999, and 31% have over $1,000. Median teen savings are likely $400–$600.

**Assessment:** $800 cash is slightly high (75th percentile territory) and $1,200/month is reasonable for a part-time job. However, $1,200/month is $14,400/year — borderline high for a 16-year-old working part-time. More realistic: $600–$900/month ($7,200–$10,800/year). The higher number makes the game easier; consider $800/month as default.

**Young Adult scenario ($38,000 student debt, $3,500/mo income):**
Research data (2022 Fed SCF, EducationData.org): Median student loan debt for borrowers under 30 is $23,795. The Pass 1 figure of $38,000 is at the 65th–70th percentile, not the median. Average (mean) debt is $37,574 — Pass 1 appears to have used the mean, not the median.

**Assessment:** For a "typical" scenario, $24,000–$28,000 student debt is more representative. $38,000 is a valid "challenging" difficulty, but should not be the default Young Adult starting state. Consider: Default $26,000, Hard mode $38,000.

Income of $3,500/month ($42,000/year) is slightly above median for recent grads. SCF 2022 shows median income for under-35 households at ~$50,000/year for dual-income or above-average earners. A solo recent grad at $42,000 is plausible for non-coastal markets. This is acceptable.

**Adult scenario ($220,000 mortgage, $6,500/mo income):**
Research data: Credit Karma 2022 found the average mortgage balance for their users was $231,464. SmartAsset data shows homeowners aged 35–44 carry an average mortgage balance of $235,000–$265,000. Federal Reserve SCF 2022 shows median household income for ages 35–44 at $86,473.

**Assessment:** The $220,000 mortgage figure is accurate (slightly below median, appropriate for a non-coastal "typical" homeowner). The $6,500/month income ($78,000/year) is slightly below the median household income of $86,473 for this age group — acceptable if framed as a single-income household. Investments of $45,000 are plausible but on the low side; median retirement savings for 35–44 year olds is approximately $45,000–$60,000 (Federal Reserve 2022 data confirms 401k/IRA balances declined for this cohort 2019–2022). The Adult scenario is the most accurately specified of the three.

**Summary table of corrections:**

| Scenario | Pass 1 | Reality (median) | Recommendation |
|----------|--------|------------------|----------------|
| Teen income | $1,200/mo | ~$800/mo (part-time) | Lower to $800/mo |
| Teen cash | $800 | $400–$600 | Lower to $500 |
| Young Adult debt | $38,000 | $23,795 median | Use $26,000 default; $38k = hard mode |
| Young Adult income | $3,500/mo | ~$3,500/mo | Keep |
| Adult mortgage | $220,000 | $231,000–$265,000 | Keep (acceptable) |
| Adult income | $6,500/mo | ~$7,200/mo (median) | Acceptable; slightly low is fine |

### 5. The "Rental Metaphor" for Options — Works, But Not for the Reasons Stated

**The assumption:** The rental/insurance metaphor is pedagogically proven for options teaching.

**The reality:** No academic RCT specifically validates the rental metaphor for options. What the research does show is that concrete analogical reasoning (metaphor-first instruction) improves concept retention in general — this is well-established in pedagogy (Locutorium, BYU, 2020). The rental framing for covered calls is practitioner-standard (it appears in Schwab, tastytrade, and popular options books), but its effectiveness has not been formally studied vs. alternatives.

**The risk:** The rental metaphor works for covered calls ("collect rent on stock you own") but becomes strained for puts. A cash-secured put is not like paying rent — it's more like posting a deposit to agree to buy a house at a set price. The metaphor bifurcates before it fully lands.

**Recommendation:** Keep the rental metaphor for covered calls (it's genuinely intuitive). For puts, pivot to the insurance metaphor explicitly — "you're selling an insurance policy; you collect the premium; if the stock drops below the strike, you're obligated to buy it." Don't force one metaphor to cover both. The two-metaphor approach (rental for calls, insurance for puts) is cleaner than a unified rental frame that breaks down.

### 6. Futures "Farmer/Bread Company" Framing — Correct But Teaches the Wrong Default Mental Model

**The assumption:** Framing futures as hedging (farmer/bread company) teaches the concept effectively and appropriately emphasizes risk management over speculation.

**The problem:** The farmer/bread company scenario teaches hedging correctly, but it creates a conceptual gap: once the player moves to speculation scenarios, they must unlearn the assumption that futures = hedging. The vast majority of futures trading volume is speculative (not hedging) — teaching hedging first, then adding speculation, creates cognitive dissonance when players encounter the real-world market.

**However:** For a literacy game targeting ages 13–50+, hedging-first is actually the right pedagogical choice. The game's goal is not to train futures traders; it is to help players understand what futures contracts are and why they exist. Hedging-first correctly conveys the original economic purpose of futures markets. Speculation is presented as a second frame, which is appropriate.

**Where it fails:** The framing does not adequately communicate how leverage amplifies losses in speculative futures positions. A farmer selling a futures contract to lock in price has a corresponding physical commodity that offsets losses. A speculative retail trader does not. This distinction must be explicit in the futures module — the margin call scenario (already planned) is the right mechanic to surface this.

**Recommendation:** Keep farmer/bread company framing. Add an explicit "but what about speculators?" transition card that explains most futures volume is not from farmers — it's from traders who never intend to take delivery. This prevents the farmer mental model from becoming the player's only model of futures.

### 7. Game Design Anti-Patterns to Avoid

Research on dark patterns in games (2024 arXiv study, ResearchGate empirical study, DarkPattern.games) identifies the following as harmful, particularly to younger users:

**Gambling-adjacent mechanics to avoid:**
- Variable ratio reward schedules (slot machine pull cadence) for life event cards — use a shuffled deck model instead, not pure random draws. Players should feel events are distributed, not random. Pure randomness creates "bad luck" perception that breaks immersion.
- Loot box style card packs for earning life events or badges — any mechanic where the player doesn't know what reward they'll get before spending effort is gambling-adjacent. All rewards should be clearly telegraphed.
- Near-miss mechanics — if the player is "close" to a badge, do not visually suggest they almost earned something they didn't. Show progress; do not fake near-completion.

**Stress-inducing failure states to avoid:**
- Inescapable debt spirals with no path out — if debt grows faster than income in all scenarios, the game becomes an anxiety induction machine, not a learning tool. Always provide at least one "correct" path that leads to improvement.
- Punitive streak mechanics — losing a streak that represents weeks of play is documented as a significant negative emotional trigger (see streak anxiety research). The "streak shield" proposed in Pass 1 is necessary, not optional.
- Timer pressure on quizzes with permanent penalties — a 30-second quiz timer that triggers module lockout if you fail is distressing. Unlimited retries with different question ordering is the correct model.
- Hard game over states — the game should not "end" due to poor financial decisions. A player who accumulates insurmountable debt should receive an educational intervention screen ("Here's what debt restructuring looks like") and a soft reset option, not a "GAME OVER" screen.

**Retention dark patterns to avoid:**
- Daily login streaks that pressure users to play every day — acceptable if low-stakes (cosmetics) and "streak shields" are available. Unacceptable if streak loss removes earned content.
- FOMO-based limited-time events ("This scenario card only available today!") — manipulative for a literacy game.
- Progress resets that destroy player investment — never wipe earned badges or completed modules on difficulty change or replay.

---

## Realistic Financial Starting States (Verified Data)

### Teen (Jordan, 16, part-time job):
- **Cash:** $500 (median savings for employed teens is $400–$600; NFCC and KidsMoney data)
- **Income:** $800/month (part-time, ~$9,600/year; below median but realistic for 16-year-old)
- **Debt:** $0
- **Investments:** $0

### Young Adult (Alex, 25, recent grad):
- **Cash:** $2,000 (acceptable; represents 1 month emergency fund, which 70% of under-30s lack)
- **Student debt:** $26,000 (median for borrowers under 30 per EducationData.org 2023; $23,795 per Fed)
- **Income:** $3,500/month ($42,000/year; slightly above median for solo recent grad, acceptable)
- **Investments:** $500 (realistic; 34% of Gen Z 22-24 have loans and minimal savings)

### Adult (Morgan, 42, established career):
- **Cash:** $8,000 (plausible; represents ~1 month buffer for dual-income household)
- **Mortgage balance:** $220,000 (slightly below median $231,000–$265,000 for 35–44 homeowners; acceptable)
- **Income:** $6,500/month ($78,000/year; slightly below $86,473 median for 35–44; acceptable single-income framing)
- **Investments:** $45,000 (low-median; Fed 2022 shows 35–44 401k/IRA balances at ~$45,000–$60,000 median)

**Key correction:** Pass 1's Young Adult student debt of $38,000 should be the "hard mode" setting, not the default. The $26,000 figure is the appropriate median-representative default.

---

## Onboarding Requirements

Research consensus (inworld.ai 2024, UserGuiding 2026, Reteno analysis): **72% of users expect onboarding in under 60 seconds. 90% of users churn if they don't perceive clear value in the first session.**

### What must happen in the first 60 seconds:

1. **0–10 seconds: Immediate value signal.** The landing screen must communicate in one sentence what the player will do, not what they will learn. "Manage your money. Survive the month." Not "Learn financial literacy through interactive simulation."

2. **10–25 seconds: Frictionless start.** No account creation, no tutorial pop-up wall, no 5-screen onboarding carousel. Name input + scenario selection (3 buttons) = the only required interaction before gameplay begins. This is achievable in 2 screens with fast input.

3. **25–60 seconds: First decision with real stakes.** The player must make a financial decision that feels consequential within their first minute. Do not show an info screen about how the game works. Show the first month: income received, obligations paid, first life event card. Let the mechanic teach itself.

4. **By end of first session: One memorable "aha" moment.** The minimum payment trap (showing that paying $25/month on a $1,000 balance takes 5 years) is the strongest candidate. This is the moment that makes players say "I didn't know that" and return.

**The Spent game benchmark:** Spent delivers the first decision within 5 seconds of page load. No tutorial, no sign-up. This is the standard to match.

**Recommendation for teen persona (Jordan):** Do not make the teen scenario feel like school. The first screen should feel like a game choice, not an educational intake form. "You just got your first paycheck. What do you do with it?" is a better frame than "Select your financial profile."

**Onboarding anti-pattern to avoid:** Do not show a net worth dashboard with $0 values before the first event occurs. Empty dashboards signal "nothing is happening yet" and increase early dropout. Populate with the starting scenario data immediately and show the first life event card as the very first interactive element.

---

## Anti-Patterns to Avoid

Consolidated from research and critique above:

| Anti-Pattern | Why It's Harmful | Alternative |
|---|---|---|
| Pure random card draw | Creates "bad luck" perception; demotivating | Weighted shuffled deck with guaranteed distribution |
| Hard game-over on debt spiral | Shame-inducing; abandons players at the worst moment | Soft intervention: "Here's debt restructuring" + soft reset |
| Streak loss removes earned content | High anxiety; documented harm esp. for teens | Streaks earn cosmetics only; loss = cosmetic setback only |
| Timer on quizzes with lockout | Stress-inducing; antithetical to learning | Unlimited retry, varied question order |
| Empty onboarding dashboard ($0 everything) | Signals "nothing to do" → early dropout | Pre-populate with scenario data, show first event immediately |
| Global leaderboards | Discourages beginners; gamifies wealth as competition | Self-comparison only ("You improved X%") |
| FOMO limited-time events | Manipulative; undermines trust | All content permanently available |
| Loot-box style badge reveals | Gambling-adjacent | Clearly telegraphed achievements with visible progress |
| Near-miss mechanics | Manipulative; creates false urgency | Show honest progress bars |
| Inescapable debt spirals | Anxiety-inducing with no learning value | Always one correct path; intervention screen if spiral |

---

## Revised Game Design Recommendations

### 1. Monthly Turn Cadence — Keep, But Mandate Minimum Decision Density
Keep the monthly turn. Require that every month contains: income allocation decision, at least 1 life event card, 1 optional investment/debt action, and a consequence reveal with explanation. No "skip months" for quiet periods — quiet months become "savings challenge" turns where the player must allocate their surplus.

### 2. Screen Count for MVP — Reduce to 5 Core Screens
**MVP screens:**
1. Onboarding (name + scenario selection)
2. Dashboard / Hub (all key metrics, month counter, nav)
3. Life Event Card (modal overlay on dashboard — not a separate route)
4. Financials View (tabbed: Debt | Portfolio | Budget — 3 tabs, 1 screen)
5. Month Summary / Year-End (modal; shows what changed and why)

Defer to v1.1: Learning Center, Achievement Grid, separate Quiz screen, Options Workshop, Futures Sandbox.

### 3. Life Event Deck — Minimum 20 Cards at Launch
Pass 1's 12-card list + 8 additional cards. Implement weighted draw based on financial state (distressed state draws more negative events; stable state mixes positive/negative). Use a shuffled deck (not random) to guarantee distribution across a 24-month game.

### 4. Starting Financial States — Apply Corrections
Per the verified data table above. Key change: Young Adult default debt = $26,000, not $38,000.

### 5. Options Metaphor — Split into Two (Rental + Insurance)
Covered call = rental income metaphor. Cash-secured put = insurance seller metaphor. Do not force one metaphor to cover both.

### 6. Futures Framing — Add Speculator Transition Card
Keep farmer/bread company hedging framing as the introduction. Add an explicit "but most futures traders are not farmers" card that introduces the speculative use case and sets up the margin call mechanic.

### 7. Onboarding — First Decision Within 60 Seconds
No tutorial wall. Name + scenario (2 interactions), then immediately show Month 1 with income received and first life event card. The mechanic teaches itself.

### 8. Failure States — Replace with Intervention Screens
No game-over. If net worth drops below a threshold or debt becomes unmanageable, trigger an "intervention" overlay: "This is what debt restructuring looks like in real life. Here are your options." Then offer a soft reset (continue from intervention, not from scratch).

---

## Sources

- [Federal Reserve SCF 2022 — Changes in U.S. Family Finances](https://www.federalreserve.gov/publications/files/scf23.pdf)
- [Federal Reserve SCF Interactive Table](https://www.federalreserve.gov/econres/scf/dataviz/scf/table/)
- [Federal Reserve — Median Income 35-44 at $86,473 (2025 report)](https://markets.financialcontent.com/wral/article/marketminute-2025-11-4-federal-reserve-data-reveals-median-income-for-35-44-year-olds-at-86473-a-critical-economic-barometer)
- [EducationData.org — Average Student Loan Debt by Age (2025)](https://educationdata.org/student-loan-debt-by-age-group)
- [EducationData.org — Student Loan Debt Statistics 2026](https://educationdata.org/student-loan-debt-statistics)
- [Pew Research — Facts about student loans (2024)](https://www.pewresearch.org/short-reads/2024/09/18/facts-about-student-loans/)
- [KidsMoney — Teen Saving Statistics 2025](https://www.kidsmoney.org/teens/saving/statistics/)
- [HeadphonesAddict — Teen Spending Statistics 2026](https://headphonesaddict.com/teen-spending/)
- [SmartAsset — Average Mortgage Balance by Age](https://smartasset.com/mortgage/average-mortgage-balance-by-age)
- [Credit Karma — Average Mortgage Debt 2022](https://www.creditkarma.com/insights/i/average-mortgage-debt)
- [CNBC Select — Average Net Worth Under 35 (SCF 2022)](https://www.cnbc.com/select/average-net-worth-of-people-under-35/)
- [inworld.ai — Game UX: Best Practices for Video Game Onboarding 2024](https://inworld.ai/blog/game-ux-best-practices-for-video-game-onboarding)
- [UserGuiding — User Onboarding Statistics 2026](https://userguiding.com/blog/user-onboarding-statistics)
- [Reteno — Won in 60 Seconds: How Top Apps Nail Onboarding](https://reteno.com/blog/won-in-60-seconds-how-top-apps-nail-onboarding-to-drive-subscriptions)
- [Medium — Mobile Game Onboarding: Top UX Strategies That Boost Retention](https://medium.com/@amol346bhalerao/mobile-game-onboarding-top-ux-strategies-that-boost-retention-6ef266f433cb)
- [arXiv — Trickery: Educational Dark Pattern Analogies for Serious Games (2024)](https://arxiv.org/html/2401.06247v2)
- [ResearchGate — Dark Patterns in Games: An Empirical Study of Their Harmfulness (2025)](https://www.researchgate.net/publication/390235729_Dark_Patterns_in_Games_An_Empirical_Study_of_Their_Harmfulness)
- [DarkPattern.games — Healthy Gaming Reference](https://www.darkpattern.games/)
- [arXiv — Level Up or Game Over: How Dark Patterns Shape Mobile Games (2024)](https://arxiv.org/html/2412.05039v1)
- [PCGamer — Dark Patterns Lawsuits Rise, GDC 2024](https://www.pcgamer.com/gaming-industry/dark-patterns-in-games-gdc-2024/)
- [PMC — Game-Based Learning in Early Childhood (Frontiers, 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11018941/)
- [PMC — Digital Educational Games and Student Motivation (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10783726/)
- [Sedona Sky Academy — Average Human Attention Span by Age: 35 Statistics](https://www.sedonasky.org/blog/average-human-attention-span)
- [Locutorium (BYU) — The Pedagogical Power of Metaphor (2020)](https://locutorium.byu.edu/issues/volume-15-2020/the-pedagogical-power-of-metaphor/)
- [Academia.edu — Teaching Options and Futures Trading Through Experiential Learning](https://www.academia.edu/1354140/Teaching_Options_and_Futures_Trading_Through_Experiential_Learning)
- [GameAnalytics 2025 — Mobile Game Retention Benchmarks](https://maf.ad/en/blog/mobile-game-retention-benchmarks/)
