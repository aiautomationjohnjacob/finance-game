# Decisions — FinanceGame

Single source of truth. Synthesized from Pass 1 research (all 6 goals).
Phase: BUILDING — orchestrator may begin constructing the app.

---

## Goal 1 — Game Type & Mechanic

**Decision: Narrative life-sim + idle compounding hybrid**

- Primary mechanic: monthly turn-based life simulation. Each "month" the player receives income, pays obligations, draws a life event card, makes financial decisions, sees results.
- Retention layer: idle/incremental compounding — numbers visibly grow between turns to reinforce compounding concepts.
- No competitor covers the full combination of: free + web-first + no sign-up + ages 13–50+ + credit cards through options/futures. Clear market gap.
- Reference implementations proving the approach: Spent (narrative scenario cards), Cookie Clicker (idle compounding loop), Investopedia Simulator (paper trading).
- One progressive game, NOT separate mini-games. Content tiers unlock as player advances ("first credit card at 16" → "running the wheel strategy at 35").

---

## Goal 2 — Financial Topics & Learning Progression

**Decision: 5-tier mastery-gated content tree**

Priority order (build in this sequence):

| Tier | Topic | Why First |
|------|-------|-----------|
| 1 | Credit card debt + budgeting basics | 47% carry a balance; minimum payment trap is strongest "aha" mechanic; teachable at age 13 |
| 2 | Debt simulation (avalanche/snowball, emergency fund) | Broad audience impact; reinforces Tier 1; random life events mechanic |
| 3A | Stock basics / index funds | 58.6% of individual stocks destroyed wealth; index vs. stock-picker race mechanic |
| 3B | Mortgages + amortization | Front-loading of interest is deeply counterintuitive; reaches 30–50+ cohort |
| 4 | Stock options — the wheel strategy | Gated after stock basics; covered call + cash-secured put progression; catastrophic failure scenario included |
| 5 | Futures | Expert/opt-in only; margin call experience; appropriately marked as high-risk |

Key mechanic per topic:
- **Credit cards:** debt clock + payment slider — player sees months-to-payoff change in real time
- **Debt sim:** avalanche vs. snowball side-by-side race; emergency fund wipe by random event
- **Stocks:** paper trading with fictional tickers; scripted news events; fee eater compounding viz
- **Mortgage:** animated amortization bar shifting from interest-heavy to principal-heavy over 30 years
- **Options:** three-phase: (1) rental metaphor → (2) spinning wheel cycle → (3) math; catastrophic failure demo included
- **Futures:** farmer/bread company hedging framing first, speculation second; forced margin call experience

Completing all 5 tiers puts the player in the top 10–15% of American adult financial literacy (FINRA benchmark).

---

## Goal 3 — Audience & Pedagogy

**Decision: Three personas, one progressive difficulty path**

**Persona 1 — Jordan (16, "Anxious Starter")**
- Session: 5–8 min. Reading: 6th–8th grade. Motivation: streaks, badges, social.
- Entry point: Tier 1 (credit cards). Narrative framing: first job, first credit card offer.

**Persona 2 — Alex (25, "Overwhelmed Navigator")**
- Session: 8–15 min. Reading: 9th–11th grade. Motivation: practical utility, scenario modeling.
- Entry point: any tier. Narrative: student loans, first apartment, 401k decisions.

**Persona 3 — Morgan (42, "Catch-Up Optimizer")**
- Session: 15–25 min. Reading: adult. Motivation: ROI framing, benchmark comparisons, calculators.
- Entry point: Tier 3B–5. Does not tolerate being patronized. Needs embedded calculators.

**Pedagogical rules:**
- Aligned game mechanic (player makes the financial decision, sees consequence) → proven 0.313 SD improvement (multi-country RCT, 2024)
- Never quiz-only — player must make consequential decisions, not just answer trivia
- 80% quiz score required to unlock next tier
- No global leaderboards — self-comparison and optional classroom mode only
- Emergency fund random events are the most effective retention mechanic for Tier 1–2

**Onboarding:** Player picks a starting scenario (Teen with first job / Young Adult with student loans / Adult catching up) — this sets narrative framing and starting financial state, not a separate difficulty mode.

---

## Goal 4 — Platform & Tech Stack

**Decision: Vanilla JS + Chart.js (CDN) + Alpine.js (CDN) + localStorage**

```
index.html          ← single entry point
css/style.css       ← flat design, CSS custom properties, no framework
js/game.js          ← core game loop and state
js/finance-math.js  ← all financial formulas (amortization, compound, Black-Scholes simplified)
js/scenarios.js     ← life event card data
js/modules/         ← one file per content module (credit-card.js, mortgage.js, etc.)
```

CDN libraries (loaded via `<script>` tag — zero build step):
- **Chart.js** (~65 KB gzip): all charts — debt curve, amortization bar, portfolio line, Monte Carlo scatter
- **Alpine.js** (~15 KB gzip): reactive UI without DOM boilerplate — ideal for card reveals, tab switching, form binding

Explicitly excluded:
- React, Vue, Svelte, or any npm-built framework
- External APIs (all prices are seeded pseudo-random walk, not live)
- Phaser.js (overkill, ~980 KB)
- Tailwind CDN (350 KB, dev-only)

**Financial math in vanilla JS:**
- Amortization: standard formula `P * r*(1+r)^n / ((1+r)^n - 1)`
- Compound interest: `P * (1 + r/n)^(n*t)`
- Stock simulation: seeded linear congruential generator for reproducible sessions
- Monte Carlo (1,000 paths × 252 days): runs in <10ms in browser — use for options visualization
- Black-Scholes: ~15-line polynomial approximation for normal CDF

**Storage:** localStorage only. No backend, no accounts. Save entire game state as one JSON blob.

**PWA:** Add `manifest.json` + minimal `sw.js` (~30 lines) after core game is complete. iOS 16.4+ supports install. Android shows automatic install prompt.

---

## Goal 5 — Business Strategy & Go-to-Market

**Decision: B2C launch → B2B2C credit union sponsorship → grants**

**Phase 1 (Launch): Free web, no accounts required**
- Publish at a clean domain. No sign-up friction for players.
- Submit to Jump$tart Clearinghouse (free, reaches all 51 state financial literacy coalitions).
- Post to r/personalfinance (21.4M members), r/financialindependence, r/investing on launch day.
- SEO: "financial literacy game" space is populated by listicles, not playable tools — a real free tool attracts backlinks organically from state resource pages.

**Phase 2 (Monetization): Credit union sponsor model (Banzai template)**
- Credit unions pay $500–$5,000/year to sponsor their local schools (CRA compliance motivation).
- Schools get free access + teacher dashboard.
- Target: 26 states now mandate personal finance for graduation (up from 8 in 2020) — 20,000 new teachers need curriculum tools.
- NGPF model reached 127,000 educators this way. Banzai reached 70%+ of U.S. schools.

**Phase 3 (Grants):**
- FINRA Foundation: $50K–$100K, rolling concept forms
- CalMoneySmart (CA DFPI): up to $200K, cycle opens early 2026
- NEFE: research-oriented, spring cycle
- Rose Foundation: up to $100K

**Not doing (yet):** paid ads, native apps, district sales cycles, VC funding.

---

## Goal 6 — Game Design

**Decision: Monthly turn-based sim, 10 screens, mastery-gated tiers**

**Core game loop (each turn = 1 month):**
1. Receive income (salary ± bonuses from events)
2. Auto-pay fixed obligations (rent/mortgage, minimum debt payments)
3. Player allocates discretionary money (extra debt payment, invest, save, spend)
4. Draw life event card → make a decision
5. Markets update (stock prices move, interest accrues)
6. See net worth delta + any achievement unlocks
7. Advance to next month

**10 screens:**
1. **Onboarding** — pick starting scenario (Teen / Young Adult / Adult), enter name
2. **Dashboard (hub)** — net worth, cash, debt total, investment value, month counter, navigation
3. **Life Event Card** — full-screen card overlay with scenario and 2–4 choices
4. **Debt Tracker** — all debts, balances, APRs, payment slider, payoff timeline
5. **Portfolio** — stock holdings, buy/sell interface, price chart, P&L
6. **Learning Center** — unlocked topic cards (credit, mortgage, options, futures)
7. **Module detail** — one per topic (mortgage calculator, options demo, futures simulation)
8. **Achievement Grid** — badges, streak counter, tier progress
9. **Year-End Summary** — net worth change, grade, decisions recap, share button
10. **Quiz** — 5 questions, 80% to unlock next tier

**Visual style (no artist required):**
- Flat design, card-based, CSS Grid layout
- Color palette: 3 primary colors + semantic red/green for gain/loss
- Charts: Chart.js for everything data-heavy; CSS/SVG for decorative elements
- Icons: emoji as semantic icons (💳 credit card, 🏠 mortgage, 📈 stocks, ⚙️ options, 🌾 futures)
- Typography: system font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Accessible contrast — WCAG AA minimum throughout

**Starting financial states by scenario:**
- Teen: $800 cash, $0 debt, $0 investments, $1,200/mo income (part-time)
- Young Adult: $2,000 cash, $38,000 student debt, $500 investments, $3,500/mo income
- Adult: $8,000 cash, $220,000 mortgage, $45,000 investments, $6,500/mo income

**Life event card deck (minimum 12 at launch):**
Car breakdown ($800), Medical bill ($2,400), Unexpected bonus (+$1,500), Job loss (3 months), Credit card offer (accept/decline), Market crash (-30%), Tax refund (+$1,200), Rent increase (+$300/mo), Side hustle opportunity, Home repair ($3,500), Stock tip (temptation mechanic), Refinancing offer

---

## Architecture — Locked

- HTML/CSS/JS only. `open index.html` → works.
- Chart.js + Alpine.js via CDN `<script>` tags.
- localStorage for all save state.
- No external APIs required to run.
- Puppeteer (in `scripts/`) for testing only — not part of the app.
