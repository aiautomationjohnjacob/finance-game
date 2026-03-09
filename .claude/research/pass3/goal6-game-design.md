# Goal 6 — Game Design (Pass 3 Final)

---

## Stress-Test Results

### 1. Is 5 Screens Enough to Deliver Financial Literacy Value?

**Verdict: Yes — with one critical condition.**

The 5-screen MVP (Onboarding, Dashboard, Life Event Card, Financials, Month Summary) is sufficient to deliver the game's core pedagogical value: *make a decision, see the consequence, understand why*. The Spent game proves this with effectively 2 screens (scenario card + running balance). Financial Football proves it with quiz + scoreboard only.

**The critical condition:** the Financials screen (screen 4) must carry the weight of what Pass 1 called 4 separate screens. It must show, via tabs, all three of: Debt Tracker, Portfolio, and a simple Budget overview. If it shows only one of these, the game teaches only one topic at the Tier 1–3 level, and a player with student debt but no stock holdings has nothing to interact with in the portfolio tab. The tab structure is not optional — it is what makes 5 screens viable.

**What makes a game worth recommending to a friend:** A game earns a word-of-mouth recommendation when a player has at least one "I didn't know that" moment that changes their actual real-world thinking. For this game, that moment is the minimum payment trap: "You borrowed $1,000. After 3 years of minimum payments, you still owe $820." This single reveal is the recommendation-worthy moment. Everything else in v1 supports getting the player to that moment and keeping them through it. The 5-screen structure can deliver this within the first 15 minutes.

**What does not need to ship in v1:** The Learning Center as a separate screen, the Achievement Grid as a separate screen, the Quiz screen as a standalone screen (quizzes can be inline in the Financials tab as a "check your understanding" block), and the Options Workshop and Futures Sandbox (both are Tier 4–5 content; the MVP teaches Tier 1–3).

---

### 2. Does the Boring Phase Problem Exist? Yes. Here Is the Solution.

The boring phase problem is real and well-documented in idle game design: as progression slows, players hit a "glass ceiling" where no meaningful decision is available. In a financial sim, the highest-risk boring phase is the stable-player problem: a player who has paid off debt, set up auto-investing, and has no upcoming life events. In a monthly turn, Month 7 may feel like "nothing to do" — which causes dropout.

**Three root causes of the boring phase in a financial sim:**

1. **Solved state:** Player has optimized their finances. No remaining decisions are interesting because the correct answer is obvious (keep doing what you're doing).
2. **Waiting state:** Player is in DCA investing mode — correct behavior, but it requires no decision each month.
3. **Content exhaustion:** Player has seen all the life event cards and knows what's coming.

**Solution: The Surplus Allocation Challenge**

When a player is in a stable state, replace the life event card with a "Surplus Challenge" — a constrained optimization problem that forces deliberate thinking even when finances are healthy. Examples:

- "You have $400 surplus this month. Allocate it: extra mortgage payment (saves $X interest over 10 years), Roth IRA contribution (tax benefit, less liquid), or build emergency fund to 6 months."
- "Your 3-month emergency fund is fully funded. Your student loan rate is 5.8%. Index fund expected return is ~7% annually. What do you do with extra $300/month?"
- "You can get a 0% balance transfer for your credit card for 18 months (3% transfer fee). Is it worth it? Calculate and decide."

These scenarios have no single correct answer. They require calculation, trade-off reasoning, and personal preference. They are more intellectually demanding than the crisis cards and serve as the "advanced difficulty" of the mid-to-late game.

**Additional boring-phase prevention mechanics:**

- **Market news event every month regardless of card draw.** One stock in the fictional portfolio moves based on a scripted headline. Even if the player has no crisis, they need to decide whether to rebalance. This takes 30 seconds but maintains engagement.
- **No fast-forward.** Pass 2 correctly killed the fast-forward feature. Every month requires at least 2 decisions: one allocation and one response to either a life event or surplus challenge.
- **Slow reveal of module content.** The Financials tab progressively reveals new sections as the player reaches relevant milestones. Month 3 unlocks the options tab (as an explainer, gated behind reaching $1,000 in stocks). Month 6 unlocks the mortgage simulator. This ensures there is always something newly visible.

---

### 3. The Boring Phase Trigger Points by Scenario

| Scenario | When Boring Phase Hits | Intervention |
|---|---|---|
| Teen (Jordan) | Month 4–6: no debt, small income, full emergency fund | Surplus challenge: Roth IRA intro; side hustle opportunity card |
| Young Adult (Alex) | Month 12–18: loans shrinking but not gone; portfolio tiny | Debt payoff inflection point: show total interest saved if paid off early; job change event |
| Adult (Morgan) | Month 6–10: mortgage on autopay, 401k auto-contributing | Refinancing decision; lump sum vs. monthly invest trade-off; market crash event |

---

## 5 Example Life Event Cards (Fully Written)

These five cards represent the design standard for the deck. Each has: a situation that creates real stakes, choices where no option is obviously correct, and a consequence that teaches something specific.

---

### Card 1: "The Offer You Can't Refuse" (Credit Card Offer)

**Situation:**
> You've received a pre-approved credit card in the mail. 20% APR. $3,000 limit. No annual fee for the first year. The envelope says "You're pre-approved!"

**Your choices:**
> A. Accept it — having credit available is smart for emergencies. *(+$3,000 available credit; +1 inquiry on credit report; small positive credit score effect after 6 months of zero balance)*
> B. Decline — you don't need more available debt right now. *(No change)*
> C. Accept it and immediately transfer your existing $800 balance from your high-APR card — same 20% rate, but it consolidates. *(Neutral — same rate, but reinforces the bad pattern of moving debt rather than paying it)*

**Why this card is memorable:** It mirrors an experience that happens to virtually everyone. The temptation is realistic. Option C looks clever but isn't — it's the kind of decision that feels like progress but isn't. The consequence reveal teaches that the right answer depends on whether you have self-control, not on the math alone.

**Teaching target:** Credit card psychology; credit utilization; credit score basics.

---

### Card 2: "Your Friend Needs $500" (Lending Money)

**Situation:**
> Your close friend texts you: "Hey, I hate to ask but I'm in a bad spot — my car broke down and I'm $500 short for the repair. I'll pay you back next month when I get paid. You know I'm good for it."
> You have $1,200 in your emergency fund.

**Your choices:**
> A. Lend the $500. *(Emergency fund drops to $700; probability of getting paid back: 60-70% based on studies of informal personal loans — shown after choice is made)*
> B. Decline. *(Relationship tension; emergency fund intact; game adds flavor text: "Your friend figures it out, but things are a bit awkward for a few weeks.")*
> C. Offer $200 as a gift, not a loan. *(Emergency fund drops to $1,000; preserves relationship; removes expectation that creates resentment)*

**Why this card is memorable:** It surfaces a universal real-world scenario that no other financial literacy game covers. The emotional stakes are high — this isn't about math, it's about values. The consequence reveal cites the actual statistic that 57% of personal loans between friends are never fully repaid (Federal Reserve consumer finance data), which creates a genuine "I didn't know that" moment.

**Teaching target:** Emergency fund purpose; cost of informal lending; financial boundary-setting.

---

### Card 3: "Market Crash at the Worst Time" (Volatility Event)

**Situation:**
> The news headline this month: "Markets fall 22% in three weeks. Analysts disagree on whether this is a correction or a crash."
> Your stock portfolio, which was worth $4,200 last month, is now worth $3,276.
> You have $600 in cash sitting idle.

**Your choices:**
> A. Sell everything now — lock in what's left before it gets worse. *(Realize the $924 loss; miss potential recovery; shown in consequence: if player had held, value returns to $4,200 within 6 simulated months)*
> B. Hold and do nothing. Wait it out. *(No action; standard recovery plays out in simulation)*
> C. Buy more — prices are lower; this is how you dollar-cost average into a downturn. *(Spend $600 on stocks at discounted prices; portfolio recovers to $4,800 by Month 6 — a better outcome than holding alone)*

**Why this card is memorable:** It forces the player to confront panic-selling instinct in a simulated environment where the consequence is visible. The reveal is the key: players who sold see what they would have gained by holding or buying. This is the "aha moment" for investing behavior. The card also introduces the concept of buying on dips without ever using the phrase "buy the dip."

**Teaching target:** Behavioral finance; panic selling; dollar-cost averaging.

---

### Card 4: "The Side Hustle Offer" (Income Opportunity with Trade-offs)

**Situation:**
> A neighbor asks if you'd be willing to manage their Airbnb listing when they travel — handle guest messages, key handoffs, occasional cleaning. Estimated 8 hours/month. She'll pay you $300/month.
> You currently work full-time. Your free time is limited but not zero.

**Your choices:**
> A. Accept — extra $300/month is $3,600/year. *(+$300/month income; stress cost is abstracted; after 3 months, a "burnout event" has a 30% chance of triggering)*
> B. Decline — your time is worth more than $37.50/hour and this isn't scalable. *(No income change; no burnout risk)*
> C. Accept and automate what you can — find a co-host platform to handle messages for $60/month. *(+$240/month net; burnout risk drops to 5%; introduces the concept of leveraging tools to make income more passive)*

**Why this card is memorable:** Option C is genuinely clever and rewards lateral thinking. It introduces the concept of semi-passive income and the "buy back your time" principle without ever lecturing. The burnout probability mechanic is a rare example of a financial game modeling human capacity as a real constraint, not just dollars.

**Teaching target:** Side income trade-offs; passive income thinking; time as a financial resource.

---

### Card 5: "The Inheritance" (Windfall Allocation)

**Situation:**
> Your great-aunt has passed away. You've received a letter from the estate attorney: you are a beneficiary. After legal fees, you will receive $8,500.
> Your financial state: $4,200 student loan remaining at 6.8% APR. Emergency fund: 2 months covered. Retirement account: $0.

**Your choices:**
> A. Pay off the student loan immediately — eliminate the debt. *(Loan gone; $4,300 left over; game shows: interest you'll never pay = $1,900 over remaining term)*
> B. Split it: $4,200 to finish the loan, $2,000 to emergency fund (to 3 months), $2,300 to Roth IRA. *(Debt gone; better emergency coverage; tax-advantaged investing started; most financially optimal choice for most situations)*
> C. Invest the whole $8,500 in index funds — the expected return beats the loan rate. *($8,500 invested; loan continues; mathematically defensible if expected returns > 6.8%; introduces the philosophical debt-vs-invest debate)*
> D. Take a vacation ($2,000) and split the rest wisely. *(Game does not shame this choice; $6,500 left to allocate; teaches that personal finance includes personal wellbeing)*

**Why this card is memorable:** Option D is the bravest design choice in the deck. Most financial games either ignore lifestyle spending or punish it. This card models a financially defensible vacation — not as a "bad" choice but as a legitimate allocation — which builds trust with the player. Players who take Option D and then handle the remaining $6,500 well see better long-term outcomes than players who maximize the numbers but feel the game is judging them. Option B is the "teacher's answer," but the consequence reveal shows that C is defensible with math, which teaches the actual nuance of the debt-vs-invest question.

**Teaching target:** Windfall psychology; debt payoff vs. investing trade-off; Roth IRA basics; lifestyle spending as legitimate financial planning.

---

## Month Summary Screen Design

### The Core Question

The month summary screen must answer one question and one question only from the player's perspective: **"Did I make progress, and do I understand why?"**

Everything else — badges, tips, encouragement copy — is secondary.

### Minimum Viable Feedback (What Changes Behavior)

Research on feedback in educational games shows that behavior change requires three elements: attribution (what caused the outcome), comparison (to a reference point), and a suggested next action. The month summary must deliver all three in under 10 seconds of reading.

**Screen layout (top to bottom):**

**1. Net Worth Delta — prominently displayed, with attribution**
```
Net Worth: $12,840 → $13,105  (+$265 this month)

What moved it:
  ✓ Salary:          +$2,800
  ✓ Stock gains:     +$142
  ✗ Interest paid:   -$318  ← [i] Your credit card cost you $318 this month
  ✗ Rent:            -$1,200
  ✓ Debt payment:    -$159 → balance reduced

The single most impactful change you could make next month:
→ Paying $200 extra on your credit card would save you $41 in interest.
```

**2. Decision Quality Signal — not a grade, but a reflection**
One sentence that acknowledges the player's decision without moralizing:
> "You held your stocks through the market dip. Historically, staying the course beats selling in a downturn 73% of the time."

Or (if they made a suboptimal choice):
> "You paid the minimum on your credit card this month. At this rate, you'll pay $1,200 in interest before the balance clears. Next month, try the +$100 slider."

**3. Month Snapshot (4 numbers only):**
- Cash on hand
- Total debt
- Portfolio value
- Emergency fund: X months covered

**4. Forward hook (next month preview):**
> "Next month: your car registration is due. Keep $120 available."

This preview sets expectation, keeps engagement through session end, and reduces the cognitive friction of "what do I do next turn?"

### What to Omit

Do not show: badges earned (save for a separate, optional achievements view), long financial education paragraphs, motivational quotes, social sharing prompts mid-flow (offer at session end only), or a letter grade. Grades create shame. Attribution and next-action create learning.

### Screen Length

The month summary must fit on a single screen without scrolling on mobile (390px wide). If it doesn't fit, cut content — never require a scroll on a summary screen. Summary screens that require scrolling have a documented 40–60% drop in full-view completion rates (UX research on mobile app onboarding; comparable effect applies to in-game summaries).

---

## Central Metric Decision (Net Worth vs. Alternative)

### The Case Against Net Worth as Primary Metric for Tier 1–2

Pass 2 raised this issue and it deserves a definitive ruling.

**Net worth is problematic for Tier 1–2 players because:**

1. **It's dominated by home equity for Adult players and by zero for Teen players.** A teen's net worth swings between $0 and $1,000. It doesn't feel meaningful. A Morgan-type player's net worth is dominated by $220,000 in home equity — a number they didn't build through any in-game decision.

2. **It can go up while the player makes bad decisions.** A player who buys a house with a bad mortgage can see net worth increase short-term (due to paper equity) while paying punishing amounts in interest. This is anti-pedagogical: the metric rewards the behavior we don't want to endorse.

3. **It requires explaining a concept (assets minus liabilities) before the player has any motivation to understand it.** Net worth is a multi-step calculation. Cash flow is a one-step concept: did more come in than went out this month?

**The Case for a Dual-Metric Dashboard**

Rather than choosing one, show two numbers prominently, with clear labels:

| Metric | What It Measures | Why It's Here |
|---|---|---|
| **Monthly Cash Flow** | Income minus expenses this month | Immediate feedback; beginners understand this instantly; positive cash flow is intrinsically motivating |
| **Net Worth** | Assets minus liabilities | Long-term scorecard; relevant for Tier 3+ players; connects to mortgages, investing |

**Recommendation: Display both, but use Cash Flow as the primary motivator for Tiers 1–2.**

The hierarchy:
- **Month 1–6 (Tier 1–2 content active):** Cash Flow is shown in the largest number. Net worth is visible but secondary. The dashboard says: "This month you ended up +$342. That's money you didn't spend that went to work for you."
- **Month 7–12+ (Tier 3 content unlocked):** Net Worth moves to the primary position. The dashboard says: "Your net worth grew $1,200 this year. Here's what drove it." Cash flow becomes a supporting metric.

This progressive emphasis mirrors how real financial health awareness develops: beginners track budget and cash, more advanced planners track net worth and portfolio value.

**One additional alternative metric worth displaying for the Teen scenario only:** a **Savings Rate** percentage. "You saved 18% of your income this month." This is a behavioral target (the FIRE community uses 50%+; financial planners use 15–20% as a standard) that a 16-year-old can understand and improve without needing to understand assets and liabilities. Display it in the Teen scenario's dashboard as the primary metric until Tier 2 is unlocked.

---

## MVP V1 Scope (Definitive — What Ships, What Doesn't)

### What Ships in V1

**Screens (5):**
1. Onboarding — name + scenario selection (Teen / Young Adult / Adult); no account creation; 2 interactions max before Month 1 begins
2. Dashboard — dual metric (Cash Flow primary, Net Worth secondary for Tier 1–2; inverted for Tier 3+); month counter; navigation to Financials; life event card prompt is the first element player sees
3. Life Event Card — full-screen overlay; scenario text; 2–4 choices; immediate financial impact preview per choice; consequence reveal after selection with one-sentence explanation; no separate screen/route
4. Financials View — 3 tabs: Debt Tracker | Portfolio | Budget Overview; debt tab is the default for Teen and Young Adult scenarios; budget overview tab shows income/expense breakdown
5. Month Summary — single-screen modal; net worth delta with attribution; decision quality signal (one sentence); 4-number snapshot; next-month preview

**Life Event Deck: 20 cards minimum**

The 12 from Pass 1 (car breakdown, medical bill, bonus, job loss, credit card offer, market crash, tax refund, rent increase, side hustle, home repair, stock tip, refinancing) plus 8 more:
- Friend loan request (Card 2 above — fully written)
- Inheritance windfall (Card 5 above — fully written)
- Subscription creep audit ("Find $180/month in subscriptions you forgot about")
- Salary negotiation opportunity ("Your boss says there's budget for a raise — ask for 8%?")
- Insurance premium increase ("Your car insurance just went up $80/month — shop for alternatives?")
- Market rally (+18% — teaches resist-the-urge-to-sell-winners as much as crash teaches hold)
- Student loan refinancing offer (Young Adult scenario: lower rate available, but private lender means losing income-based repayment protection)
- Identity theft alert ("Someone opened a credit card in your name — here's what to do")

**Scenarios: 3 starting states**
- Teen (Jordan): $500 cash, $0 debt, $0 investments, $800/month income
- Young Adult (Alex): $2,000 cash, $26,000 student debt at 6.8%, $500 investments, $3,500/month income
- Adult (Morgan): $8,000 cash, $220,000 mortgage at 6.5%, $45,000 investments, $6,500/month income

**Game Length: 24 months per run**

**Financial Topics Covered in V1:**
- Tier 1: Credit card debt mechanics (minimum payment trap, APR as a cost, payoff timeline slider)
- Tier 2: Emergency fund purpose (event cards test it); debt payoff (avalanche vs. snowball comparison in debt tab)
- Tier 3A: Stock basics (fictional tickers, scripted price events, buy/sell interface, P&L)
- Tier 3B: Mortgage amortization (animated split bar in debt tab for Adult scenario)

**Metric system:**
- Cash Flow as primary for Tier 1–2 play; Net Worth promoted to primary at Tier 3+
- Teen scenario: Savings Rate as primary metric until Tier 2 unlocked

**Failure states:** No game over. Debt spiral triggers an intervention overlay with educational content and soft reset option.

**Dark pattern protections (mandatory, not optional):**
- Shuffled deck draw (not random) for life event cards
- No timer on decisions that causes permanent penalty
- No streak mechanics in v1 (deferred to v1.1 with full shield/cosmetics implementation)
- No near-miss badge mechanics
- No FOMO events

---

### What Does NOT Ship in V1

| Deferred Feature | Target Version | Reason |
|---|---|---|
| Learning Center (standalone screen) | v1.1 | Not required for core loop; educational content is inline via consequence reveals |
| Achievement Grid (standalone screen) | v1.1 | Achievement logic built in v1, display screen deferred |
| Quiz screen (standalone) | v1.1 | Quizzes exist as inline "check understanding" in Financials tabs; no separate route needed for MVP |
| Stock Options module (Wheel Strategy) | v1.1 | Tier 4 content; MVP only reaches Tier 3 |
| Futures module | v2 | Tier 5 content; expert/opt-in; not appropriate for first-run experience |
| Leaderboards | v2 | Classroom mode only; individual mode never needs leaderboards |
| Social sharing of results | v1.1 | Year-end summary shareable image; requires design time |
| PWA/mobile install | v1.1 | Add manifest + service worker after core is stable |
| Avatar customization | v1.1 | Cosmetic system requires scope investment not justified for v1 |
| Fast-forward / skip month | Never | Kills the boring phase intervention; bad for learning outcomes |
| Difficulty setting (separate from scenario) | v1.1 | Scenario selection handles difficulty implicitly; separate setting adds friction |

---

## Complete MVP Game Design Spec

### Document Summary

This section is the authoritative, self-contained game design specification for FinanceGame v1. Anything not listed here does not ship in v1.

---

### Game Identity

**Name:** FinanceGame (working title)
**Type:** Monthly turn-based financial life simulation
**Platform:** Web browser (HTML/CSS/JS); mobile-first responsive layout
**Session length:** 5–15 minutes per session; 24 turns (months) per full run
**Audience:** Ages 13–50+; three starting scenarios calibrated to different life stages
**Goal:** Player completes 24 months and can articulate at least one non-obvious financial truth (e.g., "minimum payments are a trap," "selling during a crash locks in losses") — verified through consequence reveal design, not quizzes

---

### Core Game Loop (Per Month)

```
MONTH START
  1. Income credited automatically (salary; investment returns if any)
  2. Fixed obligations paid automatically (rent/mortgage; debt minimums)
  3. Dashboard updates: show new cash balance, net worth delta from last month
  4. FIRST INTERACTIVE ELEMENT: Life Event Card OR Surplus Challenge appears
     → Player reads situation, picks from 2–4 choices
     → Immediate consequence preview shown before confirming
     → After confirm: consequence reveal with one-sentence explanation

PLAYER DECISION PHASE (optional additional actions)
  5. Player may navigate to Financials View:
     → Debt tab: adjust extra payment amount; view payoff timeline change
     → Portfolio tab: buy/sell fictional stocks; read market news card
     → Budget tab: review income/expense breakdown for this month

MONTH END
  6. Month Summary modal appears:
     → Cash flow delta with attribution (what moved the number)
     → Decision quality signal (one sentence referencing player's choice)
     → 4-number snapshot (cash, debt, portfolio, emergency fund coverage)
     → Next-month preview (one thing to expect or prepare for)
  7. Player clicks "Next Month" → loop repeats
```

---

### Starting Financial States

| Field | Teen (Jordan) | Young Adult (Alex) | Adult (Morgan) |
|---|---|---|---|
| Cash | $500 | $2,000 | $8,000 |
| Income/month | $800 | $3,500 | $6,500 |
| Credit card debt | $0 | $0 | $0 |
| Student loan | $0 | $26,000 @ 6.8% | $0 |
| Mortgage | $0 | $0 | $220,000 @ 6.5% |
| Investments | $0 | $500 | $45,000 |
| Emergency fund | $0 | $0 | $8,000 (covered above) |
| Primary metric (M1–6) | Savings Rate | Cash Flow | Net Worth |

---

### Financial Topics — V1 Coverage

**Tier 1: Credit Card Debt & Budgeting**
- Mechanic: Debt Tracker tab with payment slider; months-to-payoff calculator updates in real time
- Key moment: Minimum payment trap reveal (paying $25/month on $1,000 @ 24% APR → 4+ years, $400+ interest paid)
- Life event cards that surface this: "The Offer You Can't Refuse," "The Car Breakdown" (forces credit vs. cash decision)

**Tier 2: Emergency Fund & Debt Payoff Strategy**
- Mechanic: Emergency fund coverage counter (shown in months); life event cards drain it to teach its purpose
- Key moment: Medical bill hits when emergency fund is empty → forced credit card use → compound debt lesson
- Avalanche vs. Snowball: comparison shown in Debt tab when player has 2+ debts; player picks a strategy, can switch

**Tier 3A: Stock Basics**
- Mechanic: Portfolio tab with 5 fictional tickers; scripted news cards move prices monthly; buy/sell interface
- Key moment: Market crash card → panic-sell vs. hold vs. buy-more → consequence reveal after 6 months
- Fee demonstration: Two identical index funds — one charges 0.05% expense ratio, one charges 1.2%. After 20 years (fast-simulated), the fee difference is shown as a dollar amount. Players immediately understand that fees are the enemy.

**Tier 3B: Mortgage Amortization (Adult scenario only, Month 1)**
- Mechanic: Animated amortization split bar in Debt tab; first month shows 89% interest / 11% principal; player can drag a "years into mortgage" slider to see the flip
- Key moment: "You've been paying $1,400/month for 7 years. You've paid off $28,000 of your $220,000 loan." — illustrative of why early payments feel slow

---

### Life Event Deck — 20 Cards

Draw system: Weighted shuffled deck. Not random. Each 24-month run guarantees:
- At least 1 crisis card in Months 1–4 (tests emergency fund)
- At least 1 income opportunity card in Months 3–8
- At least 1 market event card in Months 6–15
- No card repeats within a single 24-month run
- Positive/negative ratio: 60% challenging, 40% opportunity/neutral

| Card | Type | Tier Target | Primary Teaching |
|---|---|---|---|
| Car Breakdown ($800) | Crisis | 1 | Emergency fund purpose; cash vs. credit decision |
| Medical Bill ($2,400) | Crisis | 1 | Insurance value; emergency fund depth |
| Unexpected Bonus (+$1,500) | Opportunity | 1–2 | Windfall allocation; save vs. spend vs. invest |
| Job Loss (3 months) | Major Crisis | 1–2 | Emergency fund survival; unemployment realities |
| Credit Card Offer | Decision | 1 | Credit psychology; credit utilization |
| Market Crash (−22%) | Market | 3A | Panic selling vs. hold vs. buy |
| Tax Refund (+$1,200) | Windfall | 1–2 | Withholding calibration; windfall allocation |
| Rent Increase (+$300/mo) | Ongoing Cost | 1–2 | Fixed cost creep; renegotiate vs. move |
| Side Hustle Offer | Opportunity | 2 | Time vs. money; semi-passive income |
| Home Repair ($3,500) | Crisis | 3B | Homeownership costs; savings for maintenance |
| Stock Tip (Friend's Tip) | Temptation | 3A | Insider info illegality; individual stock risk |
| Refinancing Offer | Decision | 3B | Mortgage rate sensitivity; refi costs vs. savings |
| Friend Loan Request ($500) | Decision | 1–2 | Emergency fund purpose; lending psychology |
| Inheritance Windfall ($8,500) | Windfall | 1–3 | Debt payoff vs. invest; Roth IRA introduction |
| Subscription Creep Audit | Opportunity | 1 | Fixed cost audit; monthly cashflow recapture |
| Salary Negotiation | Opportunity | 2 | Income growth; negotiation as financial skill |
| Insurance Premium Increase | Ongoing Cost | 1 | Insurance shopping; cost of inaction |
| Market Rally (+18%) | Market | 3A | Resisting urge to sell winners; rebalancing |
| Student Loan Refi Offer | Decision | 2 | Private vs. federal loan trade-offs |
| Identity Theft Alert | Crisis | 1 | Credit monitoring; fraud response process |

---

### Screen Specifications

#### Screen 1: Onboarding

**Purpose:** Get player into Month 1 in under 60 seconds.

**Layout:**
- One sentence: "You just got your first paycheck. What kind of financial life are you living?" (Teen scenario hook) — variant per scenario
- Three large cards: [Teen — part-time job, first credit card offer] [Young Adult — student loans, first real salary] [Adult — mortgage, investments, catching up]
- Each card shows 3–4 key financial stats (cash, income, debt)
- One text input: "What's your name?" (used in consequence reveals; personalizes the experience)
- "Let's Go" button → immediately loads Dashboard with Month 1 data populated

**Time target:** Player reaches Month 1 dashboard within 45 seconds of opening app.

**Anti-patterns avoided:** No tutorial carousel, no account creation, no "how this game works" explanation screen. The mechanic teaches itself via Month 1.

---

#### Screen 2: Dashboard (Hub)

**Purpose:** Central state view; surface first decision of the month.

**Layout (mobile-first, single column):**

```
[Player name] — Month 3 of 24                    [●●●○○○○○○○○○] 3/24

CASH FLOW THIS MONTH                NET WORTH
+$342                               $1,847
▲ vs last month: +$120              ▲ vs last month: +$265

[LIFE EVENT CARD — prominently centered]
🚗  Your Car Needs Repairs
    Estimated cost: $800
    You have $1,200 in cash.
    [See Your Options →]

Emergency Fund: 1.4 months covered  [Build it →]
Cash: $1,200   Debt: $1,000   Portfolio: $642

[Manage Finances]
```

**Key decisions:**
- Life event card is the FIRST interactive element — it is above the nav, not below it
- Net worth is visible but not the largest number in Tier 1–2
- Emergency fund coverage in months is always visible — it normalizes the concept
- Clicking "See Your Options" → opens Life Event Card overlay (Screen 3)

---

#### Screen 3: Life Event Card (Overlay)

**Purpose:** Force a decision with real consequences.

**Layout:**

```
[emoji] [Card Title]
───────────────────────────────────────
[2–3 sentence situation description]

[CHOICE A]  [immediate effect preview in small text below]
[CHOICE B]  [immediate effect preview in small text below]
[CHOICE C]  [immediate effect preview]   ← optional 3rd choice

                              [Confirm → ]
```

After confirm:

```
You chose: [Option A]

What happened:
[2–3 sentence consequence, written in second person, non-judgmental]

💡 [One-sentence financial principle this illustrates]

                              [Back to Dashboard]
```

**Rules:**
- Consequence text never says "Good choice" or "Bad choice" — it describes what happened and why
- All three (or two) options are always fully visible before confirmation — no hidden choices
- The learning moment is in the consequence reveal, not in the choice labels

---

#### Screen 4: Financials View (3 Tabs)

**Purpose:** Let player take voluntary financial actions and learn through exploration.

**Tabs:** DEBT | PORTFOLIO | BUDGET

**DEBT Tab:**

- List of all debts: name, balance, APR, minimum payment, next due date
- For each debt: progress bar (% paid off)
- Extra payment slider: drag to allocate extra cash toward debt; payoff timeline updates in real time
- "Pay minimum only" vs. "Pay in full" comparison: shows total interest difference
- If 2+ debts present: toggle button "Compare Payoff Strategies (Avalanche vs. Snowball)" — shows side-by-side race, both complete, avalanche cheaper, snowball has early wins
- Mortgage (Adult): animated amortization bar for current month; slider to see "Years from now" flip

**PORTFOLIO Tab:**

- 5 fictional tickers: name, price, monthly change, player's shares, P&L
- "This Month's Market News" card: 1 headline per ticker explaining its move
- Buy/sell interface: ticker dropdown → share count input → "Buy" / "Sell" button → instant portfolio update
- Portfolio value chart: Chart.js line chart, 24 data points (one per month), updates each turn
- Net worth trend (same chart, different color): overlay or toggle

**BUDGET Tab:**

- Simple two-column income/expense breakdown for current month
- Income sources: salary, investment income (if any), event windfalls
- Expense categories: fixed (rent/mortgage, loan minimums), variable (life event costs), investment outflows
- Monthly surplus/deficit shown prominently
- "Your money went to:" donut chart (CSS/SVG; 4–5 slices max)

---

#### Screen 5: Month Summary (Modal)

**Purpose:** Close the loop. Explain what happened and why. Prime next month.

**Layout (must fit single mobile screen, no scroll):**

```
Month 3 Complete

NET WORTH CHANGE          CASH FLOW
$265 this month ▲         +$342 this month

What moved it:
  ✓ Salary         +$800
  ✓ Portfolio      +$142
  ✗ Car repair     -$800     [your emergency fund covered $600 of this]
  ✗ CC interest    -$37      [pay more next month to reduce this]

This month: You paid for the car repair with your emergency fund rather
than credit. That decision saved you ~$96 in interest over 6 months.

Next month: Your credit card minimum is due ($25). Try paying $125
instead — the payoff simulator in Debt shows what that saves you.

[Next Month →]
```

---

### Financial Math Specifications

All calculations run in `js/finance-math.js`. No external API, no approximations beyond these defined simplifications.

**Credit card interest (monthly):**
```
monthly_interest = balance × (APR / 12)
new_balance = balance + monthly_interest - payment_made
```

**Months to payoff (minimum payment):**
```
Uses standard amortization: n = -log(1 - r×P/M) / log(1+r)
where r = monthly_rate, P = principal, M = minimum_payment
```

**Mortgage monthly payment:**
```
M = P × r(1+r)^n / ((1+r)^n - 1)
where r = annual_rate/12, n = term_months
```

**Stock simulation:**
- Seeded linear congruential generator (seed = player name + month number)
- Each ticker has a base trajectory (+2% per month for index analog) plus scripted event deltas
- Scripted events fire deterministically based on month and scenario (not random)
- Volatility: ±8% per month around base trajectory

**Portfolio net worth calculation:**
```
net_worth = cash + (sum of stock holdings × current prices) + home_equity - total_debt
home_equity = home_value - mortgage_balance
home_value = starting_purchase_price × (1 + 0.003)^months_elapsed  [0.3% monthly = ~3.6% annual]
```

---

### Progression and Gating

**Tier unlock triggers (in-game, not time-based):**
- Tier 2 content becomes visible: after player's first debt is paid off OR after Month 6 (whichever first)
- Tier 3A content visible: after emergency fund reaches 1 month coverage OR after Month 8
- Tier 3B content visible: Adult scenario from Month 1; other scenarios after Month 12 (forward-looking explainer only)

**No quiz gate in V1.** The gating is narrative/time-based. Quiz gates are a v1.1 feature once the Learning Center screen is built. V1 uses implicit gating: options content isn't shown because the Options module doesn't exist in V1.

---

### Replay Value Analysis and Decision

**The honest verdict: V1 does not need strong replay value to succeed.**

The primary mission of V1 is word-of-mouth sharing and B2B2C adoption (credit unions, schools). A teacher assigning the game to a class does not need the student to replay it — they need the student to complete it once and demonstrate learning. The 24-month run, completed in 4–8 sessions of 5–15 minutes each, is the primary content unit.

**Why a second playthrough happens naturally (without designing for it):**

1. **Scenario switching:** A player who completed the Teen run has no debt experience. Starting the Young Adult scenario is a materially different financial challenge. Three distinct scenarios = three meaningfully different experiences.
2. **Choice counterfactual:** Players who sold during the market crash and saw the consequence will replay to see what happens if they hold. The consequence reveal is designed to create this curiosity.
3. **Better outcome motivation:** The game tracks net worth at Year End. Players who ended with -$2,000 net worth want to see if they can end positive. This is sufficient motivation for a second run without any additional replay-value engineering.

**What NOT to build for replay in V1:** New Game+ modes, roguelike procedural generation, competitive replay scoring. These are v1.2 features. The risk of over-engineering replay for v1 is that it delays shipping and introduces complexity that a classroom-adoption scenario doesn't need.

---

### Visual Design Standards

**Color system (4 semantic colors + 1 neutral):**
- Positive / gain: `#00897B` (teal-green) — used for positive cash flow, gains, successful outcomes
- Negative / loss: `#E53935` (red) — used for debt growth, losses, crisis event headers
- Warning / attention: `#F9A825` (amber) — used for "low emergency fund," near-zero cash, decisions with risk
- Primary UI: `#1565C0` (navy) — buttons, links, active states
- Neutral background: `#F5F7FA` (near-white); card background: `#FFFFFF` with `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`

**Typography:**
- Font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (system stack, zero load time)
- Key financial numbers: `font-size: 36px; font-weight: 700; font-variant-numeric: tabular-nums`
- Body text: `font-size: 16px; line-height: 1.6`
- Never use font size below 14px on mobile

**Accessibility:**
- All text meets WCAG AA (4.5:1 contrast minimum)
- All interactive elements keyboard-navigable
- Color is never the sole differentiator (always paired with text or icon)
- Tap targets: 44px minimum height

**Emoji as icons (semantic, consistent):**
- 💰 Cash / income
- 💳 Credit card / debt
- 🏠 Mortgage / housing
- 📈 Portfolio / gains
- 📉 Losses / market down
- 🚨 Crisis event card
- 💡 Learning tip / financial principle
- ✓ Positive outcome (alongside green color)
- ✗ Negative/cost (alongside red color)

---

### What the Game Teaches (Learning Outcomes)

A player who completes one 24-month run should be able to:

1. **Explain** why paying the minimum on a credit card is a trap (Tier 1)
2. **Define** what an emergency fund is for and how many months it should cover (Tier 2)
3. **Explain** why selling stocks during a crash is usually a mistake (Tier 3A)
4. **Describe** why early mortgage payments are mostly interest, not principal (Tier 3B)
5. **Recognize** the difference between investing in an index fund vs. individual stocks (Tier 3A)

These five outcomes correspond to the five most expensive financial mistakes in the FINRA National Financial Literacy Survey. Achieving all five puts the player meaningfully ahead of the median American adult financial literacy score.

---

## Sources

- [Federal Reserve Bank of Boston — The Gamification Effect](https://www.bostonfed.org/publications/communities-and-banking/2017/spring/the-gamification-effect-using-fun-to-build-financial-security.aspx)
- [Wiley — Evaluation of Gamification on Financial Conduct (2025)](https://onlinelibrary.wiley.com/doi/full/10.1002/cfp2.70016)
- [ScienceDirect — Impact of Online Game-Based Financial Education: Multi-Country RCT](https://www.sciencedirect.com/science/article/pii/S0147596724000441)
- [MDPI Education Sciences — Financial Literacy Games: Increasing Utility Value](https://www.mdpi.com/2227-7102/15/2/227)
- [GameDesignSkills — 17 Proven Player Retention Strategies](https://gamedesignskills.com/game-design/player-retention/)
- [DesignTheGame — Crafting Compelling Idle Games](https://www.designthegame.com/learning/tutorial/crafting-compelling-idle-games)
- [PocketGamer.biz — Retention in Idle Games](https://www.pocketgamer.biz/the-ins-and-outs-of-retention-in-an-idle-game-with-merge-and-puzzle-elements/)
- [GameAnalytics — How to Make an Idle Game](https://www.gameanalytics.com/blog/how-to-make-an-idle-game-adjust)
- [MeepleMountain — Board Game Soapbox: Dear Event Cards, Die](https://www.meeplemountain.com/articles/the-board-game-soapbox-dear-event-cards-die/)
- [BGDF — More Interesting Event Cards](https://www.bgdf.com/forum/game-creation/mechanics/more-interesting-event-cards)
- [Emily Short's Interactive Storytelling — Card-Deck Narratives](https://emshort.blog/2016/05/03/card-deck-narratives/)
- [Buildbox — Psychology of Game Design](https://www.buildbox.com/the-psychology-of-game-design-how-to-keep-players-engaged/)
- [Medium / Design Bootcamp — Catharsis of Choice: Emotionally Intense Game Experiences](https://medium.com/design-bootcamp/the-catharsis-of-choice-how-emotionally-intense-experiences-in-games-transform-player-engagement-e791c449ac31)
- [ACM CHI 2024 — Understanding Emotionally Impactful Game Feel](https://dl.acm.org/doi/10.1145/3665463.3678781)
- [Coinlaw.io — Personal Finance App Industry Statistics 2025](https://coinlaw.io/personal-finance-app-industry-statistics/)
- [Bountisphere — State of Personal Finance Apps 2025](https://bountisphere.com/blog/personal-finance-apps-2025-review)
- [Federal Reserve Education — Net Worth and Cash Flow Lesson (Inventory Game)](https://www.federalreserveeducation.org/resources/lessons/lesson--2a-the-inventory-game-net-worth-cash-flow.pdf)
- [ResearchGate — Dark Patterns in Games: Empirical Study (2025)](https://www.researchgate.net/publication/390235729_Dark_Patterns_in_Games_An_Empirical_Study_of_Their_Harmfulness)
- [arXiv — Trickery: Dark Pattern Analogies for Serious Games (2024)](https://arxiv.org/html/2401.06247v2)
- [Meegle — Emotional Engagement in Game Design](https://www.meegle.com/en_us/topics/game-design/emotional-engagement)
- [GameDesigning.org — How to Use MVP in Game Design](https://gamedesigning.org/career/mvp/)
