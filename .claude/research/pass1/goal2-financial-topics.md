# Goal 2 — Financial Topics & Content Scope (Pass 1)

**Research date:** 2026-03-08
**Sources:** FINRA Foundation (2025), Bankrate (2026), LendingTree (2026), WalletHub, Experian, NerdWallet, Fortune, Cboe, CME Group, Vanguard, academic research (UC Berkeley Odean, LSU Bogousslavsky/Muravyev), ScienceDirect, and others. All URLs cited in Sources section.

---

## Overall Financial Literacy Baseline

Before examining individual topics, the baseline is grim:

- **73% of Americans scored below 57%** on FINRA's seven-question financial literacy quiz (FINRA Foundation, 6th National Financial Capability Study, July 2025).
- **47% of US adults grade their own personal finance knowledge a "C" or worse** (NFCC 2024 Financial Literacy Survey).
- **40% of non-investors** say they haven't invested because they don't know how or find it too confusing (WEF 2022).
- Only **44% of adults** say they find it easy to pay bills and expenses — down from 54% in 2021 (FINRA 2025).
- **26% of Americans are spending more than they earn** (FINRA 2025).

This baseline means the game must assume near-zero prior knowledge for most players and build concepts from scratch.

---

## Topic Analysis

### 1. Credit Card Debt

#### What People Get Wrong

- **The minimum payment illusion:** The single most dangerous misconception is that making the minimum payment is "keeping up." It is not — it is a slow-motion debt spiral. At a 2–3% minimum payment on average APR (~22%), the math is devastating.
- **APR incomprehension:** Most cardholders do not understand how daily compounding of APR works. They see "22% APR" and think it's charged annually; in practice interest accrues daily on the running balance.
- **"I'll pay it off later" anchoring:** Cardholders routinely underestimate how long payoff takes. Surveys show ~22% of debtors don't believe they will ever pay off their card debt.
- **Emergency expense justification:** 41% of card debtors cite emergency expenses as the primary cause — meaning many entered debt through necessity, not recklessness, but stay trapped by misunderstanding the mechanics.

#### Impact Statistics (2024–2025 data)

| Metric | Value |
|---|---|
| Total US credit card debt (Q4 2025) | $1.277 trillion |
| Average balance per cardholder with unpaid balance (Q3 2025) | $7,886 |
| Average APR (all cards, Q4 2025) | 20.97% |
| Average APR (cards accruing interest, Q4 2025) | 22.30% |
| % of cardholders carrying a balance | 47% (Dec 2025) |
| % making only minimum payments (Q3 2024) | 10.75% — a 12-year high |
| % making minimum payments (late 2024) | 11.12% |
| Payoff time on avg balance at minimum payment | 7–22 years depending on balance and method |
| Interest paid on $10,563 balance at minimum payments | $18,000+ over ~22 years |
| % in debt 1+ year | 61% (up from 53% in late 2024) |
| % who don't think they'll ever pay off | ~22% |

#### Key Debt Spiral Mechanics (for game design)

A player starting with $7,886 at 22.3% APR making only minimum payments (2% of balance):
- Month 1 payment: ~$158. Interest accrued: ~$146. Principal reduction: ~$12.
- The balance barely moves. This is the trap.

If a player pays $300/month instead: payoff in ~3.5 years, ~$2,800 in interest (vs $18,000+).

#### Teachability Rating: 9/10

The minimum payment trap is perfectly suited to a simulation mechanic. Players can watch their debt grow vs. shrink in real time depending on payment choices. APR compounding is visual and immediate. The "aha moment" is reliable and visceral.

---

### 2. Mortgages

#### What People Get Wrong

- **Amortization front-loading:** The overwhelming majority of homebuyers do not realize that in the early years of a 30-year mortgage, the majority of each payment goes to interest, not principal. On a $300,000 mortgage at 7%, roughly $1,750 of the first $2,000 payment is interest, and only $250 reduces the loan balance. This continues for years before the ratio flips.
- **PMI ignorance:** Many first-time buyers don't know PMI exists until they see it on their closing documents, and fewer still know they can request cancellation when they reach 20% equity. PMI on a $300,000 loan costs $1,500–$4,500 per year — money that builds no equity.
- **ARM risk misunderstanding:** 70% of ARM holders report regretting their ARM choice (Point.com research, 2024). ARM buyers frequently underestimate rate-adjustment risk during low-rate environments.
- **Fixed vs. ARM tradeoffs:** Research suggests lower financial literacy predicts higher fixed-rate mortgage uptake — meaning people choose fixed not because it's optimal, but because it's simpler and less confusing. That's actually often the right call, but not for the right reasons.
- **Equity building timeline:** Most buyers believe they are building equity fast. They are not, in early years. Significant equity typically doesn't accumulate until year 7–10+ on a 30-year loan.

#### Impact Statistics (2024–2025 data)

| Metric | Value |
|---|---|
| Typical first-time buyer down payment (NAR, 2024) | 9% — highest since 1997 |
| PMI annual cost on $300K loan | $1,500–$4,500/year |
| ARMs as % of total mortgages | ~10% |
| % ARM holders reporting regret | 70% |
| Average 30-year fixed mortgage rate (2025) | ~6.5–7% range |
| % adults giving personal finance a "C" or worse | 47% (includes mortgage knowledge) |

#### Key Mechanics for Game Design

- Amortization table visualization: show how $1 extra/month in early years saves $3+ in interest over the loan life.
- PMI countdown: track equity progress toward 20%, showing PMI cost burning away monthly.
- ARM vs. fixed comparison: run two timelines side by side and trigger a simulated rate spike.

#### Teachability Rating: 7/10

Mortgages are highly teachable but require more scaffolding than credit cards. The long time horizon (30 years) is difficult to compress into satisfying game sessions. The amortization revelation is a strong emotional hook, but the complexity is higher. Best suited to intermediate players who have already grasped basic debt concepts.

---

### 3. Stock Basics (Individual Stocks vs. Index Funds, Dividends)

#### What People Get Wrong — Individual Stock Picking

- **Survivorship bias:** Players see Apple, Tesla, Nvidia and believe individual stock picking is viable. They don't see the 58.6% of stocks analyzed (1926–2022) that destroyed shareholder wealth.
- **Overconfidence:** Retail investors consistently overestimate their own skill. Data shows retail money is "dumb money" on average — stocks retail buys underperform after purchase; stocks retail sells outperform after sale.
- **Short-termism:** 80% of day traders quit within two years, typically after losing most of their capital. The average retail investor underperforms the S&P 500 by 6.1% annually over 20 years.
- **Concentration risk:** Retail investors frequently concentrate in 3–5 stocks, amplifying volatility without any edge.
- **Market timing:** Selling during downturns and missing rebounds is the single biggest driver of the 6.1% underperformance gap.

#### What People Get Wrong — Index Funds

- **"Boring" dismissal:** Many retail investors (especially younger ones exposed to meme stocks and crypto) view index funds as unexciting. Financial education must make the compounding math exciting.
- **Fee blindness:** Many investors don't understand the difference between a 0.03% expense ratio (Vanguard Total Market) and a 1% actively managed fund. Over 30 years, 1% fee on a $100K investment costs approximately $200,000 in lost growth.
- **Inaction:** 40% of non-investors cite confusion or not knowing how as reasons for not investing.

#### What People Get Wrong — Dividend Investing

- **Yield chasing:** High dividend yields often signal distress, not opportunity. Walgreens yielded ~9% in 2023, then cut its dividend 47% in January 2024. FMC yielded high in 2025, then cut 86% after an 85%+ share price collapse.
- **Payout ratio blindness:** Investors don't check payout ratios. Dow Inc. had a 341.5% payout ratio in 2023 — paying out 3.4x what it earned.
- **Dividend ≠ free money:** Many believe dividends are bonus income. In reality, stock price drops by the dividend amount on ex-dividend date. Total return = price appreciation + dividends; you cannot double-count.
- **Over-concentration:** Dividend investors often concentrate in utilities, REITs, and energy — adding sector risk.

#### Impact Statistics (2024–2025 data)

| Metric | Value |
|---|---|
| % of stocks 1926–2022 that destroyed shareholder wealth | 58.6% |
| Retail investor annual underperformance vs. S&P 500 | 6.1% over 20 years |
| Retail investor underperformance gap (2023 alone) | 5.5% |
| % professional fund managers that beat the market long-term | fewer than 10% |
| % of S&P 500 stocks with negative return >5% in any given year | ~30% (151 stocks) |
| % of day traders who quit within 2 years | 80% |
| % of investors who say expanded education would make them invest more | ~70% |

#### Teachability Rating: 8/10

Index funds vs. stock picking is highly teachable through side-by-side portfolio simulations. The "run 10,000 random portfolios" mechanic (showing how often random diversification beats stock-picking) is compelling. Dividends require more nuance and are better for intermediate levels. The emotional hook is the "I could have owned the whole market" realization.

---

### 4. Stock Options (Wheel Strategy: Covered Calls & Cash-Secured Puts)

#### What People Get Wrong

- **Options are not lottery tickets (but are used that way):** 0DTE options now make up 40–50% of total retail options volume. Academic research shows 0DTE option trades lose 4.7% relative to other option trades. Retail traders lose an estimated $350,000 daily just on 0DTE SPX options.
- **Lack of sophistication:** 66% of active retail options traders hold simple, one-sided positions in only one class of options. Institutional investors use complex, multi-leg strategies. Most retail traders do not understand the relationship between premium, theta decay, delta, and the Greeks.
- **Wheel strategy misapplication:** The wheel strategy (sell cash-secured put → get assigned → sell covered call → repeat) is a legitimately income-generating strategy, but fails catastrophically when applied to low-quality or volatile underlying stocks. If a stock drops 40%, being "assigned" is a massive loss no amount of premium recovers.
- **Covered call ceiling:** Many retail investors don't understand they cap upside when selling covered calls. If you sell a covered call at $55 strike on stock at $50 and it surges to $80, you only get $55 — missing $25/share of gain.

#### The Wheel Strategy — Mechanics for Educators

**Phase 1 — Cash-Secured Put:**
- Sell a put option below current price (e.g., stock at $50, sell $47 put for $2 premium).
- If stock stays above $47 at expiration: keep $200 premium. Repeat.
- If stock drops below $47: you must buy 100 shares at $47 (effective cost: $45 net of premium).

**Phase 2 — Covered Call:**
- Now own 100 shares at $45 effective cost.
- Sell a $48 call for $1.50 premium.
- If stock stays below $48: keep premium, repeat.
- If stock rises above $48: shares called away at $48. Total gain: ($48 - $45) + $1.50 = $4.50/share.

**When it fails:** Stock bought at $47 drops to $30. Now down $17/share with only $2 premium to show. Premium income cannot recover a large underlying move against you.

#### Impact Statistics (2024–2025 data)

| Metric | Value |
|---|---|
| Average daily 0DTE options volume | ~1.5 million contracts (2025) |
| 0DTE as % of total retail options volume | 40–50% |
| Retail loss rate on 0DTE trades vs. non-0DTE | -4.7% vs. +0.19% |
| Estimated retail daily losses on 0DTE SPX options | $350,000/day |
| % retail traders using simple, one-sided options positions only | 66% |
| Retail brokers' share of options volume | ~27% (MEMX, Aug 2025) |
| % of short-dated options held by retail (≤5 day expiry) | 56% |

#### Teachability Rating: 6/10

Options are teachable but require prerequisite knowledge (stock basics, risk/reward understanding). The wheel strategy is among the most accessible multi-leg options strategies — it mimics familiar concepts (insurance, rental income). The covered call "capped upside" lesson is a powerful "gotcha" moment in game mechanics. Must be gated behind stock basics module. Do not introduce to beginners.

---

### 5. Futures (Commodity & Index Futures)

#### What People Get Wrong

- **Leverage magnitude:** Futures provide extreme leverage. An E-mini S&P 500 contract (/ES) controls ~$250,000 of index exposure with a $15,000 margin. A 1% market move = $2,500 gain or loss on $15,000 capital — a 16.7% swing on one contract. Micro E-mini (/MES) requires $1,500 margin but still controls ~$25,000.
- **Margin call mechanics:** Retail traders don't understand that futures margin isn't a down payment — it's a performance bond. When the market moves against you and your balance falls below maintenance margin, you must deposit more immediately or positions are liquidated automatically.
- **Mark-to-market daily:** Unlike stocks, futures are marked to market daily. Losses are deducted from your account every night, regardless of whether you've closed the position.
- **Commodity futures complexity:** Commodity futures (oil, grain, gold) have delivery risk, roll cost, and seasonal patterns that make them even more treacherous for retail traders.
- **Overconfidence from small wins:** Leverage means early wins can be large. Many retail traders extrapolate from a lucky first trade to confident over-sizing, then blow up.

#### Impact Statistics (2024–2025 data)

| Metric | Value |
|---|---|
| % of leveraged futures/CFD traders who lose all money or break even | 90% |
| % of retail CFD accounts that lose money | 71%+ |
| E-mini S&P 500 (/ES) margin (maintenance, Nov 2024) | $15,000/contract |
| Notional value controlled per /ES contract | ~$250,000 |
| Micro E-mini (/MES) maintenance margin | $1,500/contract |
| Typical commodity futures leverage ratio | 5:1 to 15:1 |
| Intraday broker margin (often offered) | $400–$1,000/contract for /MES |

#### Teachability Rating: 5/10

Futures are teachable conceptually (leverage, margin, mark-to-market) but inappropriate as a primary focus for this audience. The mechanical concepts (leverage multiplication, margin call triggers) can be taught through game simulation with clear loss visualization. The key pedagogical lesson is risk management, not futures-specific strategy. Suitable only for advanced players who have cleared earlier modules.

---

### 6. Simulated Trading Accounts (Paper Trading)

#### What Makes a Good Pedagogical Simulator

Research identifies five factors that distinguish educationally effective simulators from mere entertainment:

**1. Realistic Order Mechanics**
Effective simulators model actual order types: market, limit, stop-loss, stop-limit. Players who only use market orders in simulation will replicate that habit live, often at significant slippage cost. The simulator must reward using limit orders.

**2. Realistic Slippage and Fees**
Simulators that omit transaction costs create false performance expectations. Even commission-free brokerages have bid-ask spreads. A good educational simulator should model $0.01–$0.03/share of slippage on liquid stocks and expose players to the real cost of frequent trading.

**3. Emotional Realism Gap — The Core Pedagogical Problem**
The most important limitation of any paper trading simulator: it does not replicate emotional decision-making under real financial stress. Academic research consistently shows that paper trading performance does not predict live trading performance. Players may make rational decisions with fake money and irrational decisions with real money. The game should explicitly address this limitation and teach students to design rules-based systems.

**4. Scenario Diversity**
A good simulator exposes players to bull markets, bear markets, and sideways/volatile markets. A player who only trains in a bull market will be unprepared for drawdowns. The game should include curated historical scenarios (e.g., 2008 crash, 2020 COVID drop, 2022 rate-hike bear market).

**5. Feedback Loops with Explanation**
Studies show a 42% average score increase (13.7 point gain) in students using stock market simulations vs. controls — but only when accompanied by structured reflection and explanation of outcomes. The simulator should explain why a trade lost or won, not just show the P&L.

**Fidelity Requirements by Module:**

| Module | Required Fidelity | Can Simplify? |
|---|---|---|
| Credit card debt | Simple interest calculator | Yes — no market data needed |
| Mortgage amortization | Amortization table engine | Yes — deterministic math |
| Stock basics | Daily close prices, basic order types | Yes — end-of-day data sufficient |
| Options (wheel) | Options chain, Greeks display, expiration mechanics | Partially — simplify Greeks for beginners |
| Futures | Mark-to-market, margin call triggers, daily settlement | Minimal simplification — mechanics must be accurate |

#### Research on Gamified Financial Education Effectiveness

- A randomized controlled trial across 2,220 students in four countries found that game-based financial education improved financial literacy by **0.313 standard deviations** (ScienceDirect, 2024).
- **91% of participants** expressed strong interest in learning financial concepts through gameplay.
- Engagement (not enjoyment) was the strongest predictor of learning outcomes — games must actively involve the player in decisions, not just present information.
- The Stock Market Game (US national program) demonstrates significant knowledge gains particularly among students with less prior economics/business background — the game works best for novices, which matches the target audience.

#### Teachability Rating: N/A (enabler for all other topics)

The simulated account is not a topic itself — it is the delivery mechanism for all other topics. Every module should include a simulation component. The game itself IS the simulator.

---

### 7. Debt Simulation (General)

#### What People Get Wrong

- **Avalanche vs. Snowball tradeoffs:** Many people pursue the snowball method (pay smallest balance first for psychological wins) when the avalanche method (pay highest-APR first) saves more money mathematically. Neither is categorically wrong, but few debtors make an informed choice between them.
- **Debt-to-income ratio blindness:** Most people don't track how their total debt obligations compare to income and don't realize DTI affects their mortgage eligibility and credit score.
- **Emergency fund absent:** The debt spiral is perpetuated by the absence of an emergency fund — one car repair forces new credit card debt, wiping out a month of debt repayment progress.
- **Compound interest asymmetry:** People understand compound interest when it grows savings. They fail to viscerally understand it when it grows debt against them.

#### Teachability Rating: 9/10

Debt simulation is the single most teachable financial topic via game mechanics. Progress bars, debt clocks, interest accumulation counters, and comparative payment scenarios are all proven mechanics. The emotional stakes are immediately relatable to the broadest audience.

---

## Priority Matrix

| Topic | Audience Impact | Teachability | Urgency | Priority Score | Priority Rank |
|---|---|---|---|---|---|
| Credit Card Debt | CRITICAL — 47% of cardholders carry balance; $1.277T total; avg $7,886/person | 9/10 — visual, immediate, emotional | HIGHEST — affecting tens of millions now | **9.5** | **#1** |
| Debt Simulation (general) | HIGH — DTI, emergency fund, avalanche vs. snowball affects all debt holders | 9/10 — progress bars, clocks, visual payoff | HIGH — foundational to all debt topics | **9.0** | **#2** |
| Stock Basics & Index Funds | HIGH — 40% of non-investors cite confusion; retail underperforms by 6.1%/yr | 8/10 — side-by-side simulations, compounding | HIGH — wealth-building starts here | **8.0** | **#3** |
| Mortgages | HIGH — largest financial decision most Americans make; amortization misunderstood | 7/10 — long time horizon limits game-session fit; amortization hook is strong | MEDIUM-HIGH — high consequence when misunderstood | **7.5** | **#4** |
| Dividend Investing | MEDIUM — yield traps affect active investors; broad audience is not yet investing | 6/10 — yield trap reveal is gameable; payout ratio concept teachable | MEDIUM — relevant after stock basics are covered | **5.5** | **#5** |
| Stock Options (Wheel) | MEDIUM — 0DTE losses hit active traders hard; options growing in retail adoption | 6/10 — wheel strategy is most accessible options strategy for game format | MEDIUM — growing audience, high harm potential | **5.0** | **#6** |
| Futures | LOW-MEDIUM — 90% of leveraged traders lose all or break even; smaller retail audience | 5/10 — margin call and leverage mechanics teachable but complex | LOW-MEDIUM — fewer players affected; high harm when it hits | **3.5** | **#7** |

**Scoring notes:** Priority Score = average of Audience Impact (0–10), Teachability (0–10), and Urgency (0–10), with Audience Impact weighted 1.5x.

---

## Learning Progression

### Level 1 — Financial Survival (Beginner, Ages 13–25 primary)

**Prerequisite for everything else. Players must complete before advancing.**

1. **The Debt Clock** — Visual simulation of how credit card interest compounds daily. Player is given a $500 balance at 22% APR and must choose: minimum payment, fixed payment, or lump sum. Watch the debt clock run vs. wind down.

2. **The Minimum Payment Trap** — Extended simulation: player takes on a $5,000 debt (common first-card scenario) and sees 10-year and 20-year projections. The emotional impact of "you'll be paying this until you're 37" is the lesson.

3. **Avalanche vs. Snowball** — Player has 3 debts simultaneously (student loan, credit card, car). Two paths are shown in parallel: avalanche and snowball. Total interest paid is compared at the end. Player wins by choosing the strategy aligned with their stated priorities.

4. **Emergency Fund Shield** — Simulation where unexpected expenses (car repair, medical bill) hit at random intervals. Player with no emergency fund must put it on a credit card, undoing debt progress. Player with emergency fund absorbs the hit cleanly. The lesson: before aggressively paying debt, build a $1,000 buffer.

**Learning Outcome:** Player understands APR compounding, minimum payment trap, debt repayment strategies, and the emergency fund's role in preventing debt re-accumulation.

---

### Level 2 — Homeownership Basics (Intermediate, Ages 22–40 primary)

**Unlocked after Level 1 completion.**

5. **The Amortization Reveal** — Player takes out a simulated $300,000 mortgage. First month: they see the payment split ($1,750 interest, $250 principal). The game fast-forwards year by year, showing when the crossover point occurs (~year 19 on a 30-year at 7%). The "wait, most of my money isn't building equity?" moment is the hook.

6. **PMI Countdown** — Player makes a 9% down payment (the 2024 average). PMI appears on their monthly bill. Game shows the equity-building race: how many months until 20% equity? What if they overpay by $100/month? What if home values rise 3%/year? The player learns PMI removal is achievable and actionable.

7. **ARM vs. Fixed Showdown** — Player chooses a mortgage in a low-rate environment. ARM starts cheaper. Then a rate event fires (simulated Fed rate hike). ARM payments jump. Fixed payments stay flat. Player sees the 5-year cost comparison.

**Learning Outcome:** Player understands amortization front-loading, PMI mechanics and removal, and ARM vs. fixed tradeoffs under changing rate environments.

---

### Level 3 — Building Wealth (Intermediate, Ages 20–40 primary)

**Unlocked after Level 1 completion. Level 2 not required.**

8. **The Index vs. Stock-Picker Gauntlet** — Player picks 5 stocks. The game also runs an index fund in parallel. After 10 simulated years (using historical S&P 500 data), results are compared. 80% of the time, the index wins. The player discovers the S&P 500 statistics: 58.6% of individual stocks historically destroyed wealth.

9. **The Fee Eater** — Player compares two identical portfolios: one in a 0.04% expense ratio index fund, one in a 1.0% actively managed fund. Compounding over 30 years shows the fee eater consumed $200,000+ of the player's wealth. The lesson: costs are guaranteed; returns are not.

10. **Dividend Yield Trap** — Player sees a stock with a 9% dividend yield (modeled on Walgreens-type scenario). They buy in. The game fires a dividend cut event. Stock price drops 30%, dividend cut 47%. Player learns: yield alone is not signal enough; check payout ratio and earnings trajectory.

11. **Compound Growth Challenge** — Player chooses how much to invest monthly at age 22 vs. age 32. The 10-year head start (Einstein's "8th wonder" demonstration) shows the $100/month difference in starting age resulting in hundreds of thousands of dollars difference at retirement. Sets up urgency for beginning to invest.

**Learning Outcome:** Player understands why index funds outperform most stock pickers, how fees compound against you, dividend traps, and the power of starting early.

---

### Level 4 — Options Basics (Advanced, Ages 25–50 primary)

**Unlocked after Level 3 completion. Strong prerequisite gating required.**

12. **Options 101: What You're Buying** — Player learns put and call mechanics through simplified "insurance policy" and "pre-purchase agreement" analogies. No Greeks yet. Just: what does it mean to have the right (not obligation) to buy or sell?

13. **Covered Call Income Machine** — Player owns 100 shares of a simulated stock. They sell covered calls for premium income. Multiple scenarios fire: stock stays flat (keep premium, great), stock drops (keep premium, offset loss slightly), stock surges (shares called away, capped profit). Player experiences all three outcomes.

14. **Cash-Secured Put: Buying at a Discount?** — Player sells a cash-secured put. Three outcomes: stock stays above strike (keep premium), stock drops below strike (own shares at discount — is it actually a discount?), stock crashes 40% (the catastrophic wheel failure scenario). Player must hold the shares through the simulated crash and sell covered calls trying to recover. Often can't.

15. **The Wheel in Full** — Player runs the complete wheel strategy across a 6-month simulated period with multiple securities. Score is based on premium collected vs. capital risk. Outcome variance teaches position-sizing discipline.

**Learning Outcome:** Player understands the mechanics of covered calls and cash-secured puts, when the wheel strategy generates income, and when it catastrophically fails. Player can articulate the difference between premium income and true profit.

---

### Level 5 — Futures & Leverage (Expert, Ages 25–50, self-selected)

**Unlocked after Level 4. Heavy warning gates required. This level is opt-in.**

16. **Leverage Multiplier** — Player controls a $25,000 notional position with $1,500 margin (Micro E-mini). A 1% market move is simulated. Player sees $250 gain or loss on $1,500 capital — a 16.7% return or loss. The concept: leverage amplifies everything, in both directions.

17. **The Margin Call** — Player holds a futures position. Market moves against them overnight (after-hours simulation). Morning arrives: margin call notification. Player must deposit more funds or watch position liquidated at the worst possible moment. The game does not let them avoid this — they must experience it.

18. **Mark-to-Market Reality** — Player holds a long-term view on oil futures. Even though their thesis proves correct over 3 months, they are marked to market daily. Two margin calls occur during a temporary price dip, forcing them to deposit funds or close at a loss — even though the final outcome would have been profitable. Lesson: being right isn't enough; surviving the path matters.

19. **Commodity Futures Complexity** — Player trades grain futures. Delivery month approaches. The game introduces roll cost, contango vs. backwardation, and seasonal patterns. This module is designed to demonstrate complexity, not master it — the lesson is "know what you don't know."

**Learning Outcome:** Player viscerally understands leverage amplification, margin call mechanics, daily mark-to-market, and the complexity premium of commodity futures. Player can make an informed decision about whether futures belong in their actual financial life.

---

### Progression Summary

```
LEVEL 1: Credit Card Debt & Debt Simulation
   → Teachability: 9/10 | Urgency: HIGHEST | Audience: Everyone
   → Topics: APR compounding, minimum payments, avalanche/snowball, emergency fund

LEVEL 2: Mortgages (unlock after Level 1)
   → Teachability: 7/10 | Urgency: HIGH | Audience: 22–40
   → Topics: Amortization, PMI, ARM vs. fixed

LEVEL 3: Stock Basics & Index Funds (unlock after Level 1)
   → Teachability: 8/10 | Urgency: HIGH | Audience: 20–40
   → Topics: Index vs. picking, fees, dividends, compounding

LEVEL 4: Stock Options / Wheel Strategy (unlock after Level 3)
   → Teachability: 6/10 | Urgency: MEDIUM | Audience: 25–50
   → Topics: Covered calls, cash-secured puts, full wheel, failure modes

LEVEL 5: Futures (unlock after Level 4, opt-in only)
   → Teachability: 5/10 | Urgency: LOW-MEDIUM | Audience: Self-selected 25–50
   → Topics: Leverage, margin calls, mark-to-market, commodity complexity
```

**Key design decisions for progression:**
- Level 2 and Level 3 are parallel paths — a 35-year-old homeowner may complete Level 2 first; a young renter may go straight to Level 3.
- Levels 4 and 5 require explicit opt-in with clear risk disclosures in-game (not legal boilerplate — plain-language, relatable warnings).
- Players who complete all five levels should emerge with financial literacy scores that would place them in the top 10–15% of American adults based on FINRA's benchmark questions.

---

## Game Mechanic Recommendations by Topic

| Topic | Primary Game Mechanic | Secondary Mechanic |
|---|---|---|
| Credit card debt | Running debt clock with payment slider | Interest vs. principal pie chart, real-time |
| Debt strategy | Side-by-side avalanche vs. snowball race | Random event generator (car breaks, medical bill) |
| Mortgage | Amortization timeline scrubber | PMI equity progress bar |
| ARM vs. fixed | Two-timeline simulation with random rate events | Total-cost-of-ownership comparison |
| Stock basics | Index fund vs. stock-picker portfolio race | Historical scenario replay (2008, 2020, 2022) |
| Fees | 30-year compound cost visualization | "What this fee bought you" mockery generator |
| Dividends | Yield trap reveal with earnings trigger | Payout ratio warning indicator |
| Covered calls | Outcome tree (flat/up/down scenarios) | Rolling premium income tracker |
| Cash-secured puts | Wheel simulation with crash scenario | Assignment and recovery simulation |
| Futures leverage | Leverage multiplier slider | Margin call trigger simulator |
| Mark-to-market | Daily P&L clock with forced settlement | "You were right, but you lost" scenario |

---

## Sources

- [2026 Credit Card Debt Statistics | LendingTree](https://www.lendingtree.com/credit-cards/study/credit-card-debt-statistics/)
- [Average American Credit Card Debt in 2025 | The Motley Fool](https://www.fool.com/money/research/credit-card-debt-statistics/)
- [Credit Card Debt Statistics for 2025 | WalletHub](https://wallethub.com/edu/cc/credit-card-debt-study/24400)
- [Bankrate's 2026 Credit Card Debt Report | Bankrate](https://www.bankrate.com/credit-cards/news/credit-card-debt-report/)
- [Average Credit Card Debt Increases 3.5% to $6,730 in 2024 | Experian](https://www.experian.com/blogs/ask-experian/state-of-credit-cards/)
- [U.S. credit card defaults are on the rise | Fortune](https://fortune.com/2025/01/23/credit-card-defaults-debt-levels-increasing/)
- [2024 American Household Credit Card Debt Study | NerdWallet](https://www.nerdwallet.com/article/credit-cards/2024-american-household-credit-card-debt-study)
- [Financial Literacy Statistics (2025) | WalletHub](https://wallethub.com/edu/b/financial-literacy-statistics/25534)
- [70% of homeowners with an ARM regret it | Point Blog](https://point.com/blog/arm-report-2024)
- [Mortgage Statistics: 2025 | LendingTree](https://www.lendingtree.com/home/mortgage/u-s-mortgage-market-statistics/)
- [Adjustable-Rate Mortgage Trends in 2024 | Experian](https://www.experian.com/blogs/ask-experian/adjustable-rate-mortgage-study/)
- [US Financial Literacy Statistics 2026 | MoneyZine](https://moneyzine.com/personal-finance/financial-literacy-statistics/)
- [PMI Explained: 8 Smart Insights | The Money Beat](https://www.themoneybeat.com/pmi-explained/)
- [What is private mortgage insurance? | CFPB](https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/)
- [Index Funds vs. Individual Stocks | Carver Financial Services](https://carverfinancialservices.com/index-funds-vs-individual-stocks-why-boring-wins/)
- [Setting the record straight: Vanguard research August 2025](https://corporate.vanguard.com/content/dam/corp/research/pdf/setting_the_record_straight_the_truths_about_index_fund_investing.pdf)
- [Trading Is Hazardous to Your Wealth | UC Berkeley / Odean](https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/individual_investor_performance_final.pdf)
- [This Stock Market Mistake Was Very Costly in 2024 | Nasdaq](https://www.nasdaq.com/articles/stock-market-mistake-was-very-costly-2024-heres-what-investors-must-know-2025)
- [The Harsh Truth: Retail Investors Take the Brunt of Market Losses | io-fund](https://io-fund.com/broad-market/financial-analysis/retail-investors-market-losses)
- [New study: financial education gaps are primary barrier to retail investing | WEF](https://www.weforum.org/press/2022/08/new-study-finds-financial-education-gaps-are-primary-barrier-to-retail-investing-in-capital-markets/)
- [What is the Wheel Strategy in Options Trading? | OptionsPlay](https://www.optionsplay.com/blogs/what-is-the-wheel-strategy-in-options-trading)
- [Three Things to Know About the Wheel Strategy | Charles Schwab](https://www.schwab.com/learn/story/three-things-to-know-about-wheel-strategy)
- [The Wheel Strategy 2025 Update | Options Trading IQ](https://optionstradingiq.com/the-wheel-strategy/)
- [Retail Options Trading Statistics 2025 | CoinLaw](https://coinlaw.io/retail-options-trading-statistics/)
- [Understanding Retail Investors' Dynamic Trading Behavior in the US Options Market | Cboe (2024)](https://cdn.cboe.com/resources/government_relations/Understanding-Retail-Investors-Dynamic-Trading-Behavior-in-the-US-Options-Market_2024.pdf)
- [An Anatomy of Retail Option Trading | LSU / Bogousslavsky & Muravyev (2025)](https://www.lsu.edu/business/files/event-files/2025-finance-mardi-gras/retail_option_trading_v2.pdf)
- [0DTEs Decoded | Cboe](https://www.cboe.com/insights/posts/0-dt-es-decoded-positioning-trends-and-market-impact/)
- [Retail Traders Lose $350K Daily on 0DTE Options | Medium / Sub Martingale](https://medium.com/@submartingaleoptions/retail-traders-lose-350k-daily-on-zero-days-to-expiry-0dte-options-please-read-this-if-you-25d46bdd1bfb)
- [How Futures Margin Works | Charles Schwab](https://www.schwab.com/learn/story/how-futures-margin-works)
- [How to Use Leverage with Futures (2025) | HighStrike](https://highstrike.com/futures-leverage/)
- [Retail Traders in Futures Markets | CFTC (2024)](https://www.cftc.gov/sites/default/files/2024-11/Retail_Traders_Futures_V2_new_ada.pdf)
- [E-mini S&P 500 Futures Overview | CME Group](https://www.cmegroup.com/markets/equities/sp/e-mini-sandp500.html)
- [Understanding S&P 500 Futures | Charles Schwab](https://www.schwab.com/learn/story/sp-500-futures-look-basics)
- [Integrating the Stock Market Simulation Into the Core Curriculum | JABE](https://articlegateway.com/index.php/JABE/article/view/7503)
- [The impact of an online game-based financial education course: Multi-country experimental evidence | ScienceDirect (2024)](https://www.sciencedirect.com/article/pii/S0147596724000441)
- [Playing to learn: Game-based approach to financial literacy for generation Z | ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1875952124002647)
- [Gamification in Enhancing Student Financial Knowledge | ResearchGate](https://www.researchgate.net/publication/384118604_Gamification_in_Enhancing_Student_Financial_Knowledge_Engagement_and_Enjoyment_in_Financial_Education)
- [National Study by FINRA Foundation Finds More U.S. Households Struggling Financially | FINRA](https://www.finra.org/investors/insights/finra-foundation-national-financial-capability-study)
- [FINRA Foundation Sixth Wave National Financial Capability Study (July 2025)](https://www.finrafoundation.org/sites/finrafoundard/files/2025-07/NFCS-Report-Sixth-Edition-July-2025.pdf)
- [Financial Literacy Statistics: The Average American Scores Just 48% | The Motley Fool](https://www.fool.com/money/research/financial-literacy-statistics/)
- [Survey: Financial Anxiety Soars | NFCC](https://www.nfcc.org/press_release/survey-financial-anxiety-soars-as-americans-doubt-ability-to-reach-goals/)
- [Not All Dividend Stocks Are Safe | Morningstar](https://www.morningstar.com/stocks/not-all-dividend-stocks-are-safe-heres-how-avoid-dividend-traps)
- [What is a Dividend Yield Trap | Tokenist](https://tokenist.com/investing/what-is-a-dividend-yield-trap/)
- [How Income Investors Can Avoid Dividend Traps in 2026 | Morningstar Indexes](https://indexes.morningstar.com/insights/perspective/blt1c1ec1f5efea19c5/how-income-investors-can-avoid-dividend-traps-in-2026)
- [5 Best Paper Trading Apps & Platforms for 2026 | StockBrokers.com](https://www.stockbrokers.com/guides/paper-trading)
- [How to Gamify Debt Payoff to Make It Fun | Experian](https://www.experian.com/blogs/ask-experian/how-to-gamify-debt-payoff-to-make-it-fun/)
- [How to Use Gamification to Pay Off Debt Faster | Credit Counselling Society](https://nomoredebts.org/blog/dealing-with-debt/how-to-use-gamification-to-pay-off-debt-faster)
- [Gamification in Personal Finance | Smartico](https://www.smartico.ai/blog-post/gamification-in-personal-finance)
- [Who Profits from Trading Options? | Management Science / INFORMS](https://pubsonline.informs.org/doi/10.1287/mnsc.2023.4916)
