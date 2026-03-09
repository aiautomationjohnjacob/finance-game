# Goal 6 — Game Design Spec (Pass 1)

## Mechanic-to-Topic Mapping

### Credit Card Debt → Debt Spiral Mechanic

The most effective mechanic for teaching debt is the **forced-choice scenario under resource pressure**, as demonstrated by Spent (playspent.org). Players start with a fixed amount (e.g., $1,000) and must survive a simulated month. Each "day" or decision point presents mutually exclusive options where both choices have costs. The key pedagogical insight from Spent: the spiral emerges not from a single bad decision but from the accumulation of small trade-offs, each individually defensible, that compound over time.

Specific mechanics that teach debt effectively:

- **Minimum payment trap**: Show two numbers prominently — the "minimum payment" (small, tempting) vs. "full balance" (large). Let the player choose, then show month-over-month interest accumulation via a running ticker. The visual gap between what was paid and what was owed widens each turn.
- **APR as a timer**: Visualize APR as a countdown or growing bar — not an abstract percentage. Each month, the debt bar grows a visible amount. Players feel the urgency.
- **Trade-off card system**: Present 2–3 scenario cards per month ("your car needs repair — $400", "credit card minimum payment due — $85", "rent is due — $900") with a fixed income that cannot cover all three. Force prioritization. Show long-term consequences of each deferral.
- **The "compound interest reveal"**: After a simulated 12 months, show a breakdown: "You borrowed $2,000. You paid $1,700. You still owe $1,950." The visual shock is the lesson.

Reference: Spent game (playspent.org) uses this scenario-card model to simulate poverty. A similar structure applied to credit card debt specifically would isolate that spiral without the broader poverty framing.

---

### Mortgages → Amortization Visualization Mechanic

Mortgages are counterintuitive because early payments are mostly interest. The most effective pedagogical mechanic is **the animated amortization bar**.

- Each monthly payment is a bar split into two colored segments: "principal paid" (shrinks debt) and "interest paid" (gone forever).
- In month 1, the bar is 90% interest / 10% principal. By year 25, it flips. Players see this shift visually over simulated years.
- **Down payment slider**: A draggable control that shows in real time how a larger down payment reduces monthly payment, total interest, and PMI threshold. This interactivity teaches the concept without lecture.
- **"Buy vs. Rent" decision card**: A life-event scenario where the player must choose between renting ($1,200/mo) and buying (similar monthly payment but with equity accumulation). Neither is always right — the game shows 5-year and 10-year outcomes based on simulated market conditions.
- **Rate lock scenario**: Simulate a "rates just went up 1%" life event that changes what the player can afford. Teaches rate sensitivity viscerally.

---

### Stock Basics → Paper Trading Simulation Mechanic

Research on stock market simulation games (StockMarketGame.org, StockTrak, PersonalFinanceLab) shows that paper trading without real risk still produces significant financial knowledge gains when the simulation has two key features: **feedback immediacy** and **narrative framing**.

Effective mechanics:

- **Simplified ticker**: Show 6–8 fictional companies (or thinly veiled analogs: "ApexTech", "GreenGrid Energy") with prices that change each simulated month based on scripted events + light randomness.
- **News event → price reaction**: Each month, a "market news" card appears ("ApexTech announces strong earnings → +12%", "GreenGrid faces regulatory probe → -18%"). Players who hold those stocks see direct impact on their portfolio.
- **Portfolio dashboard**: A simple pie chart (CSS/SVG) showing allocation. A net worth line chart tracking month-over-month. No complex options chains or level-2 data — just buy, hold, sell.
- **"Why did it move?" tooltip**: After each price change, a one-sentence explanation. This is the pedagogical lever — not the trade itself but the explanation of why prices move.
- **Dollar-cost averaging mechanic**: A toggle to invest $X automatically each month vs. timing the market manually. After 12 months, compare outcomes. Most players discover DCA outperforms their manual attempts.

Research finding: High school students who used stock market games scored significantly better on financial literacy exams than peers who received only lecture-based instruction (ERIC study, EJ1060325). The self-motivation effect is strong — players seek out information on their own to improve their position.

---

### Stock Options (Wheel Strategy) → Rental Contract Metaphor

Options are the hardest topic to teach without math overload. The breakthrough insight from research is to use a **concrete rental/insurance metaphor before introducing any numbers**.

**Phase 1 — The Metaphor Layer (unlock: "Options Basics" badge):**
- "A CALL option is like reserving a concert ticket at today's price for next month. You pay a small fee now. If the ticket price goes up, you saved money. If it goes down, you just lost the reservation fee."
- "A PUT option is like buying insurance on your car. You pay a premium. If nothing bad happens, you lose the premium. If the car gets totaled, the insurance pays you."
- Present this as a dialogue card with an illustrated character explaining in plain language, no formulas.

**Phase 2 — The Wheel Strategy as a 3-Step Cycle (unlock: after passing "Options Basics" quiz):**
- Visualize the wheel as a literal spinning wheel graphic (CSS animation) with three segments: "Sell Put → Collect Premium → Assigned / Not Assigned"
- If not assigned: spin again (collect more premium)
- If assigned: now you own 100 shares → move to "Sell Covered Call" segment
- The cycle is the game loop. Each month is one spin. Premium collected = income earned.
- Show a running "income generated" counter alongside the portfolio value.

**Phase 3 — Numbers (unlock: after completing 3 wheel cycles):**
- Only after the mechanic is understood via metaphor does the game introduce actual option pricing concepts: premium, strike price, expiration, intrinsic vs. extrinsic value.
- A mini "options calculator" card shows: "You sold a $50 put for $2 premium. The stock is at $48 at expiration. You buy at $50. Your effective cost basis is $48."

This progressive disclosure approach — metaphor first, mechanic second, math third — mirrors how Vanguard's investor education and MotleyFool's options primers structure their beginner content.

---

### Futures → Hedging Contract Mechanic

Futures are framed as a **price lock contract** — a farmer locks in a corn price today to protect against harvest-time price drops.

- Life event card: "You're a wheat farmer. Wheat costs $5/bushel today. You can lock in $5/bushel for delivery in 6 months (sell a futures contract) or gamble on the spot price."
- The game simulates what happens: if wheat drops to $3, the farmer who hedged wins; the one who gambled loses.
- Second scenario: "You're a bread company. Wheat is $5 today. You can lock in $5 by buying a futures contract, protecting your costs."
- This frames futures as risk management tools, not speculation — more appropriate for a literacy game and less gambling-adjacent.
- Futures are gated behind completing both "Stock Basics" and "Options Basics" modules.

---

### Simulated Portfolio → Net Worth Dashboard Mechanic

The portfolio view is the game's central hub. It combines all financial instruments into a single net worth number that tracks across the full game.

- Assets column: cash, stocks, home equity (if player bought), options income
- Liabilities column: credit card debt, mortgage balance, car loan
- Net worth = assets − liabilities, shown as a large number and a trend line
- Monthly change is celebrated (positive) or flagged (negative) with a contextual message explaining what drove the change
- This makes abstract financial interactions tangible: "Your net worth dropped $340 this month because your credit card interest ate into gains from your stock portfolio."

---

### Debt Simulator → Payoff Strategy Comparison Mechanic

Two classic debt payoff strategies presented as a side-by-side race:

- **Avalanche method**: Attack highest-interest debt first (mathematically optimal)
- **Snowball method**: Attack smallest balance first (psychologically rewarding)

The player allocates extra monthly dollars and watches two simulated timelines run. Both finish eventually; avalanche finishes cheaper, snowball finishes with earlier "wins." The lesson: both are valid; the best one is the one you'll stick to.

---

## Core Game Loop Proposal

The game is structured as a **simulated life in monthly turns**. Each turn represents one month of the player's financial life. The loop is:

```
START OF MONTH
  → Receive income (salary, investment income, option premium)
  → Pay fixed obligations (rent/mortgage, minimum debt payments)
  → See current net worth and cash balance

DECISION PHASE (player takes actions)
  → Draw 1–3 Life Event Cards (randomized from a deck)
  → Make financial decisions in response:
      - Pay off debt (how much?)
      - Invest in stocks (which, how much?)
      - Execute options trade (sell put / sell covered call)
      - Emergency fund draw (if applicable)
  → Optional: access "Learning Lens" on any decision for explanation

END OF MONTH
  → Markets move (scripted events + randomness)
  → Interest compounds on debt
  → Portfolio value updates
  → Net worth change displayed (+/- with breakdown)
  → Achievements checked (badges unlocked if milestones hit)
  → Progress toward next module unlock evaluated

ADVANCE TO NEXT MONTH
```

**Game length**: Each "game" is 12 simulated months (one year). At year-end, the player sees a summary screen: decisions made, net worth change, knowledge badges earned, and a "replay" option with harder difficulty or different life circumstances.

**Difficulty levels** (affect starting conditions):
- Starter: $40,000/year income, no debt, small emergency fund
- Normal: $35,000/year income, $5,000 credit card debt, no emergency fund
- Challenge: $28,000/year income, $12,000 credit card debt, medical bills

**Time acceleration**: Players can simulate at 1 month/click or "fast forward" past months where they're just collecting (e.g., DCA investing, debt autopay). This respects player time and reduces tedium.

---

## Screen/View List

### 1. Welcome / Onboarding Screen
- Character creation: pick avatar (emoji-based or CSS character), name, starting scenario
- Brief "what is this game?" narrative card
- Difficulty selection with plain-language explanation of what each means

### 2. Main Dashboard (Hub Screen)
- Net worth (large, prominent number + trend arrow)
- Monthly income and obligations summary bar
- Cash on hand counter
- Quick-access buttons: Portfolio, Debt Tracker, Learning Center, Achievements
- "Month X of 12" progress indicator
- Active life event card(s) shown prominently
- "Make Decisions" CTA button to enter Decision Phase

### 3. Life Event Card Screen
- Full-screen modal or card overlay
- Card text describing the scenario (e.g., "Your car needs a repair: $650")
- 2–4 choice buttons with immediate consequence preview ("Pay in full: -$650 cash" vs. "Put it on credit card: +$650 debt, $65 interest next month")
- "What does this mean?" tooltip for financial terms
- Confirm selection → return to dashboard

### 4. Portfolio View
- List of holdings (company name, shares owned, current price, gain/loss)
- Total portfolio value + percentage change this month
- Buy/Sell interface: simple slider (how many shares?)
- "Market News" sidebar: 2–3 headlines that explain this month's price moves
- Chart: portfolio value over time (SVG line chart, 12 data points)

### 5. Debt Tracker Screen
- List of all debts: credit cards, mortgage, car loan
- For each: current balance, APR, minimum payment, next due date
- Extra payment allocation: drag slider to assign extra dollars to specific debts
- Payoff projection: "At this rate, debt-free in X months | Total interest: $Y"
- Toggle: Avalanche vs. Snowball strategy comparison view

### 6. Options Trading Screen (gated — unlocks after completing Options module)
- "Wheel Workshop": step-by-step interface
- Step 1: Select a stock → see current price → set strike price → see premium offered
- Step 2: Confirm sell → premium credited to cash
- Step 3: At month end, see if option was assigned (price moved past strike) or expired (keep premium, repeat)
- Running log of wheel cycles and cumulative premium income

### 7. Learning Center / Module Library
- Grid of topic cards: Budgeting, Credit Cards, Investing, Mortgages, Options, Futures
- Each card shows: completion status, quiz score, badge earned
- Locked modules shown with a padlock and unlock requirement ("Complete Credit Cards module first")
- Each module: short interactive explainer (3–5 panels, illustrated) → quiz → badge

### 8. Achievement / Badge Screen
- Visual grid of all badges, earned and unearned
- Earned: colored, with earned date
- Unearned: grayed out with hint text ("Pay off a credit card completely to earn this")
- Streak tracker: "You've played X days in a row"
- Total knowledge points accumulated

### 9. Year-End Summary Screen
- Annual review: net worth start vs. end, percentage change
- Decisions made: breakdown of how income was allocated
- Key moments: life event cards encountered and choices made
- Knowledge progress: modules completed, quiz scores
- "What you mastered this year" section
- Play Again (same scenario / new scenario / harder difficulty) + Share result

### 10. Quiz Screen (embedded in Learning Center)
- 5–10 multiple choice questions per module
- Immediate feedback: "Correct! Here's why..." or "Not quite — here's what that means..."
- Score shown at end: 80%+ required to earn badge and unlock next module
- Retry option if below threshold

---

## Progression & Rewards System

### Mastery-Based Gating

Topics unlock sequentially, with each gate requiring demonstrated understanding (quiz score ≥ 80%), not just time spent:

```
Tier 1 (always available):
  - Budgeting & Cash Flow
  - Emergency Funds
  - Credit Card Basics

Tier 2 (unlocks after passing Tier 1 quizzes):
  - Debt Payoff Strategies
  - Credit Scores
  - Basic Investing (stocks)

Tier 3 (unlocks after passing Tier 2 quizzes):
  - Mortgage Basics
  - Tax-Advantaged Accounts (401k, IRA)
  - Portfolio Diversification

Tier 4 (unlocks after passing Tier 3 quizzes):
  - Options: Calls & Puts
  - The Wheel Strategy
  - Risk vs. Return

Tier 5 (unlocks after passing Tier 4 quizzes):
  - Futures Basics
  - Hedging Strategies
  - Advanced Portfolio Concepts
```

This mirrors the Khan Academy model: competency-gated, not time-gated. Players who already know the basics can test out quickly by going directly to quizzes.

### Reward Types

**Knowledge Badges** (primary reward — intrinsic):
- Earned for passing module quizzes
- Visually displayed on profile
- Specific and labeled: "Debt Slayer", "Compound Interest Expert", "Options Initiator", "Wheel Mechanic"
- Research shows labeled achievement badges (not generic "Level 5") increase engagement and perceived value

**Net Worth Milestones** (progress markers):
- "First $1,000 saved" badge
- "Debt-free" badge (paid off all credit card debt in one game)
- "Investor" badge (held stocks for 6+ simulated months without panic selling)
- "Premium Collector" badge (earned $500+ in options premium)

**Life Event Trophies** (narrative rewards):
- "Survived the Car Breakdown" (handled an emergency without credit card debt)
- "Weathered the Market Crash" (maintained portfolio through a simulated downturn)
- These reward decision-making quality, not just outcomes

**Streaks** (engagement hooks — use carefully):
- Daily streak: played today
- Weekly streak: played 5 of 7 days
- Keep streak rewards modest (cosmetic avatar accessories) to avoid compulsive pressure
- "Streak shield" item (protect streak if missed a day) to reduce anxiety

**Avatar Cosmetics** (non-financial, low-stakes reward):
- Earn avatar accessories (hats, backgrounds, color schemes) for milestones
- Research (Birk & Atkins, ACM CHI 2016) shows avatar identification increases intrinsic motivation and invested effort
- Purely cosmetic — no pay-to-win, no gambling mechanics

### On Leaderboards and Competition

**Recommendation: optional, classroom-context-only leaderboards.**

Research from Financial Football and PersonalFinanceLab shows that competitive leaderboards work well in structured classroom settings where a teacher facilitates and provides context. In a self-directed app for ages 13–50+, global leaderboards risk:
1. Discouraging beginners who see experts at the top
2. Inadvertently gamifying wealth accumulation as competition (inappropriate framing)
3. Creating pressure that undermines the "safe to fail" learning environment

**Better approach**: Personal progress comparison ("Your net worth grew 23% this year — better than your own record!"), optional friend challenges (share a scenario seed, compare outcomes), and classroom mode that enables teacher-visible leaderboards as an opt-in feature.

---

## Visual Design Direction

### Core Design Language: Flat + Dashboard

The target is a clean, flat design with bold accent colors and a card-based layout — achievable entirely with CSS, SVG, and emoji. No custom illustrations required.

**Color System** (accessible, age-neutral):
- Primary: deep navy or slate blue (#1E3A5F or similar) — authority, trust
- Accent: bright teal or green (#00BFA5) — for positive values, gains
- Warning: amber (#F5A623) — for alerts, near-zero cash
- Danger: clear red (#E53935) — for debt growth, losses
- Background: near-white (#F5F7FA) — not pure white; softer on eyes
- Card background: white with subtle shadow (box-shadow: 0 2px 8px rgba(0,0,0,0.08))

**Typography** (system fonts only, no external dependency):
- Headings: system-ui, bold, large (32–48px for key numbers like net worth)
- Body: system-ui, regular weight, 16px minimum
- Numbers: tabular-nums variant if available, monospace fallback for financial figures
- Key numbers (net worth, cash balance, debt total) should be the largest text on screen

**Card-Based Layout**:
- All information in cards (white rounded rectangles with shadow)
- Grid layout using CSS Grid for dashboard panels
- Mobile-first: single column on mobile, 2–3 column grid on desktop
- Cards expand/collapse for detail without navigation away

**Emoji as Icons**:
- Used judiciously for quick visual cues: 💰 (cash), 📈 (gains), 📉 (losses), 🏠 (mortgage), 💳 (credit card), 🎓 (learning), 🏆 (achievement)
- Never as sole navigation element — always paired with text label for accessibility
- Consistent, not decorative — every emoji should serve a semantic purpose

**SVG Charts (no library required)**:
- Line chart: pure SVG `<polyline>` for net worth trend (12 data points = 12 months)
- Bar chart: SVG `<rect>` elements for monthly income vs. expenses
- Pie chart: SVG `<path>` with arc calculations for portfolio allocation
- Amortization split bar: two `<div>` elements with CSS widths representing principal/interest
- All charts are CSS-animatable (stroke-dasharray trick for line draw animation)

**Progress Bars**:
- Debt payoff progress: CSS `width` transition on a colored bar
- Module completion: segmented progress bar (one segment per topic)
- These can be styled entirely in CSS with no external library

**Scenario Cards**:
- Large card format, centered, with an emoji header (🚗 for car breakdown)
- Bold situation description text
- 2–4 choice buttons, each showing immediate financial impact in smaller text
- Subtle color coding: green border for "financially sound" choice, amber for "okay but costly", red for "high cost"

**Accessibility Considerations**:
- All interactive elements must be keyboard-navigable
- Color should never be the sole differentiator (always pair with text or icon)
- Target minimum 4.5:1 contrast ratio for all text
- Large tap targets (44px minimum) for mobile users

**Age Range Considerations (13–50+)**:
- Avoid infantilizing aesthetics (no cartoon mascots for adults)
- Avoid overly corporate aesthetics (no gray Excel-style UI for teens)
- The card game / board game aesthetic (clean cards, clear choices, visible progress) works across the entire age range
- The Financial Football precedent shows age-bracketed content (Rookie / Pro / Hall of Fame levels) with the same UI shell works effectively

---

## Reference Games Analysis

### Spent (playspent.org)

**What it does well**:
- Radical empathy mechanic: players immediately feel scarcity pressure, not abstract numbers
- Every choice has emotional weight ("feed your child or pay the electric bill")
- Sparse UI — just the scenario text and 2–3 buttons — eliminates distraction
- Real statistics appear after key choices ("37 million Americans face this decision") — adds context without interrupting flow
- No tutorial needed; the first scenario teaches the mechanic by doing it

**What it lacks**:
- No progression — same difficulty throughout
- No learning content — emotional but not explanatory
- No credit card debt simulation specifically — focuses on poverty broadly
- No replayability or growth arc

**Design lessons for our game**:
- Start with a visceral, immediate scenario on the very first screen — don't onboard, just play
- Use real statistics as flavor text after player choices to ground fiction in reality
- Keep scenario screens sparse: situation text, choices, immediate cost preview — nothing else
- The "one month at a time" pacing is proven to be digestible

---

### Cashflow 101 (Rich Dad / Robert Kiyosaki)

**What it does well**:
- Introduces financial statement literacy (income statement + balance sheet as a player sheet)
- The Rat Race / Fast Track duality creates a clear aspirational arc: escape the grind, build passive income
- Physical financial statements force players to track every transaction — deeply educational
- Monthly pay cycle as game rhythm is intuitive

**What it lacks**:
- Very long play time (3–6 hours per session) — unsuitable for a web game
- Board game translation to digital loses some of the tactile learning
- Kiyosaki's ideology is embedded in mechanics (real estate bias, passive income as the only goal) — not neutral financial education
- No beginner ramp — assumes some financial vocabulary

**Design lessons for our game**:
- The "income statement + balance sheet" concept is worth visualizing, even simply: show income, expenses, and net cash flow each month
- The "escape the rat race" arc is motivating — frame progression as gaining financial autonomy, not accumulating points
- Passive income (investment returns, option premium) should feel distinct from and superior to earned income in the game mechanics — this reflects reality and creates aspirational incentive
- Keep session length to 10–20 minutes per month/turn to fit web attention spans

---

### Financial Football (Visa + NFL)

**What it does well**:
- Strong external IP (NFL brand) creates immediate interest for a specific audience
- Difficulty tiering (Rookie / Pro / Hall of Fame) maps to ages 11–14, 14–18, 18+ — clean segmentation
- Quiz-as-gameplay (answer question to gain yards) removes artificial separation between "learning" and "playing"
- 40-second time pressure per question increases engagement and simulates real decision-making urgency
- Topic breadth: budgeting, saving, credit, debt, identity theft all covered
- Available as browser + iOS + Android

**What it lacks**:
- Quiz-and-advance is inherently shallow — no simulation, no consequence chains
- Football metaphor is irrelevant to financial concepts (forced theming)
- No persistent portfolio or progression across sessions
- No advanced topics (options, futures, mortgages)

**Design lessons for our game**:
- Time pressure on decisions (a countdown for life event choices) increases engagement without requiring sports framing
- Age/experience tiers are worth implementing (Beginner / Intermediate / Advanced) as difficulty starting points
- Combining quiz mechanics with simulation mechanics (answer correctly → get a better interest rate on your simulated mortgage) bridges the two models
- The 40-second decision timer is worth adopting for life event cards — creates urgency without being punishing (can pause)

---

### Stock Market Game (SIFMA Foundation, stockmarketgame.org)

**What it does well**:
- Real market data integration creates authentic learning environment
- 10-week competitive structure (classroom teams) drives sustained engagement
- Portfolio tracking over time is more pedagogically effective than single-session games
- National competition format with prizes motivates participation

**What it lacks**:
- Requires teacher facilitation and classroom context
- Real data creates analysis paralysis for true beginners
- No financial literacy content beyond trading — no debt, budgeting, options
- Competition may disadvantage students who take more pedagogically sound long-term positions

**Design lessons for our game**:
- Fictional companies with scripted price behavior (not real market data) are better for beginners — removes noise, lets the game control what lesson is being taught
- "Market news → price reaction" is the key teaching moment — replicate this with fictional headlines
- Provide a paper trading sandbox mode even before the main game — let players experiment with no stakes before the monthly turn structure
- Long-term simulation (12 months in-game) outperforms single-session trading for teaching patience and compound growth

---

### PersonalFinanceLab

**What it does well**:
- Combines budget game + stock market game in one platform
- Embedded lessons alongside simulations
- Research-backed: 91% of student users reported increased engagement
- Certification and competition elements for classroom accountability

**What it lacks**:
- Subscription/institutional model — not free
- UI is functional but not engaging for recreational players
- Complex enough to require teacher guidance

**Design lessons for our game**:
- The combination of budget simulation + investment simulation in one persistent view (the net worth dashboard) is the right model
- "Embedded lessons" — tooltip-style explanations within the simulation, not in a separate tab — keep learning contextual
- Certifications (badges) motivate completion even without external prizes

---

## Gamification Elements Summary

| Element | Recommendation | Rationale |
|---|---|---|
| Experience Points / Levels | Yes — knowledge points that accumulate | Tracks learning progress, not just gameplay |
| Badges | Yes — specific, labeled, knowledge-tied | More meaningful than generic level numbers |
| Leaderboards | Optional / classroom-only | Global leaderboards inappropriate for personal finance framing |
| Streaks | Yes — with shields, low-pressure | Drives return visits; must avoid compulsive pressure |
| Avatar Customization | Yes — cosmetic only | Increases intrinsic motivation per academic research |
| Progress Bars | Yes — per module and overall | Visualization of "almost there" drives completion |
| Unlockable Content | Yes — mastery-gated topics | Core pedagogical mechanism for sequencing |
| Narrative Framing | Yes — life events as story | Emotional engagement increases information retention |
| Time Pressure | Soft — optional countdown on decisions | Increases realism; must be pauseable for accessibility |
| Social/Sharing | Yes — share year-end summary card | Shareable achievement image, not real financial data |
| Competition vs. Self | Self-comparison preferred | "You improved 23%" beats "You're ranked 47th" |

---

## Sources

- [Spent Game (playspent.org)](https://playspent.org/)
- [Critical Play: Spent – The Mechanics of Magic](https://mechanicsofmagic.com/2023/10/01/critical-play-spent/)
- [Is Spent a Good Educational Game? — Medium](https://medium.com/@gfruity/spent-as-an-educational-game-55cdf4fbea47)
- [Navigating Financial Realities: A Look at the Spent Game — Oreate AI](https://www.oreateai.com/blog/navigating-financial-realities-a-look-at-the-spent-game/24aa591e741d19ec0a0dea6d786848bf)
- [Cashflow 101 — Wikipedia](https://en.wikipedia.org/wiki/Cashflow_101)
- [CASHFLOW Game — Rich Dad](https://richdad.com/cashflow/)
- [Cashflow 101 Board Game — BoardGameGeek](https://boardgamegeek.com/boardgame/6552/cashflow-101)
- [Financial Football — Visa](https://www.financialfootball.com/)
- [Financial Football Review for Teachers — Common Sense Education](https://www.commonsense.org/education/reviews/financial-football)
- [About Financial Football — Visa Fact Sheet (PDF)](https://usa.visa.com/dam/VCOM/download/corporate/media/Visa_FactSheet_FinancialFootball_012915_v9.pdf)
- [The Stock Market Game — SIFMA Foundation](https://www.stockmarketgame.org/)
- [Learning Through Equity Trading Simulation — ERIC (EJ1060325)](https://files.eric.ed.gov/fulltext/EJ1060325.pdf)
- [Virtual Stock Market Simulator — StockTrak](https://www.stocktrak.com/)
- [Financial Literacy Games for Students — PersonalFinanceLab](https://www.personalfinancelab.com/)
- [12 Best Financial Literacy Games for Learners in 2024 — Cypher Learning](https://www.cypherlearning.com/blog/k-20/financial-literacy-games)
- [10 Free Financial Literacy Games for High School Students — Edutopia](https://www.edutopia.org/article/10-free-financial-literacy-games-high-school-students/)
- [The Wheel Strategy — Options Trading Explained](https://thewheelstrategy.com/)
- [Three Things to Know About the Wheel Strategy — Charles Schwab](https://www.schwab.com/learn/story/three-things-to-know-about-wheel-strategy)
- [Options Explained Like I'm 5 — Medium](https://medium.com/the-investors-handbook/options-explained-like-im-5-1d9e147db583)
- [Gamification in Financial Literacy — Smartico](https://www.smartico.ai/blog-post/gamification-in-financial-literacy)
- [Why Fintech Gamification Is Your Secret Weapon — Netguru](https://www.netguru.com/blog/fintech-gamification)
- [Gamification in Fintech: Complete Guide — The Alien Design](https://www.thealien.design/insights/fintech-gamification)
- [What is Gamification for Fintech Apps — Plotline](https://www.plotline.so/blog/fintech-app-gamification-examples)
- [Fostering Intrinsic Motivation through Avatar Identification — ACM CHI 2016](https://dl.acm.org/doi/pdf/10.1145/2858036.2858062)
- [The Effects of Badges and Avatar Identification on Play — MIT CSAIL](https://people.csail.mit.edu/dkao/pdf/kao2018chi.pdf)
- [What are Progression Systems in Games? — University XP](https://www.universityxp.com/blog/2024/1/16/what-are-progression-systems-in-games)
- [Pathways to Mastery: Taxonomy of Player Progression Systems — IntechOpen](https://www.intechopen.com/online-first/1221745)
- [Financial Literacy Games — Increasing Utility Value — MDPI Education Sciences](https://www.mdpi.com/2227-7102/15/2/227)
- [Impact of Online Game-Based Financial Education — ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0147596724000441)
- [Gamifying Finance: Enhancing User Engagement — ResearchGate](https://www.researchgate.net/publication/390077279_Gamifying_Finance_Enhancing_User_Engagement_and_Financial_Literacy_through_Digital_Gamification)
- [Dashboard Design Best Practices — Justinmind](https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux)
- [Best Dashboard Design Examples 2026 — Muzli](https://muz.li/blog/best-dashboard-design-examples-inspirations-for-2026/)
- [AgYield Simulator — Interactive Learning for Grain Traders](https://agyield.com/simulator/)
- [CME Group Practice Trading Simulator](https://www.cmegroup.com/education/practice)
- [Credit Card Interest Simulation — University of Florida](https://vam.anest.ufl.edu/simulations/creditcardinterest.php)
- [My 9 Favorite Interactives to Teach Credit — NGPF](https://www.ngpf.org/blog/interactive/my-9-favorite-interactives-to-teach-credit/)
- [Spent Game Economic Prosperity — Impact Guide (PDF)](https://gamesandimpact.org/wp-content/impactguides/PL_SPENT_web.pdf)
- [Spent (video game) — Wikipedia](https://en.wikipedia.org/wiki/Spent_(video_game))
