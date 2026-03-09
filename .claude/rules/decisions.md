# Decisions — FinanceGame

Single source of truth. Synthesized and stress-tested across 3 research passes (18 total agent reports).
Phase: BUILDING — all decisions locked. Do not revisit without user instruction.

---

## Goal 1 — Game Type & Mechanic

**Lead mechanic: the debt clock slider — build this first.**
Credit card balance + APR + payment slider = months to payoff + total interest paid, updating in real time. This is the aha moment that earns word-of-mouth. It ships in session 1. (~20 lines of JavaScript.)

**Full game: narrative life-sim with persistent consequence loop.**
Each month: receive income → pay obligations → draw a life event card → make a decision → see consequences compound over time. The "my debt is still there next month" open loop is the structural protection against the Fingo failure mode (Duolingo-for-finance that went offline — users completed the quiz deck once and never returned; our persistent state prevents that).

**Audience split:**
- Default experience: Young Adult (22–35)
- Second track: Teen classroom mode (same engine, different starting state and narrative voice — preserved for the 30-state graduation mandate distribution channel)

**Market gap is real and verified.** No free + web-first + no-signup + broad-age + full-topic product exists as of March 2026. localStorage-only architecture eliminates the server cost that killed Fingo.

**Realistic 12-month scale with no marketing budget:** 2,000–8,000 unique visitors/month. Sufficient — operating cost is near zero on static hosting.

---

## Goal 2 — Financial Topics & V1 Scope

**OPTIONS AND FUTURES ARE V2 ONLY.**
Peer-reviewed research (ScienceDirect 2025, Ohio State 2021) documents that partial options knowledge + overconfidence directly leads to real financial losses. Shipping without a mandatory catastrophic failure path would cause harm. They are deferred, not removed.

**V1 Content (build in this order):**

| Order | Module | Key mechanic |
|-------|--------|--------------|
| 0 | Budget baseline | Income/expense setup — foundation for all modules |
| 1 | Credit cards & emergency fund | Debt clock slider; emergency fund wipe by random event |
| 2 | Debt simulation | Avalanche vs. snowball side-by-side race |
| 3A | Index funds | Index vs. stock-picker race; fee eater compounding viz |
| 3B | 401(k) employer match | Match capture bar — highest-ROI action available |
| 3C | Mortgages | Animated amortization bar; fixed vs ARM comparison |

**Taxes and insurance:** woven into scenario cards throughout, not standalone modules.

**APR for simulations:** 24–25% (CFPB 2025 market rate). No softening — a lower rate teaches that credit card debt is less dangerous than it is.

**Just-in-time delivery verified:** Kaiser & Menkhoff (World Bank WPS8161, 2017/2019) — teachable-moment delivery produces 48% larger effects than advance instruction. The scenario card mechanic (content fires at the moment of decision) is pedagogically optimal, confirmed across 126 studies.

**Sequential gating:** Hard gate only at the Tier 3 → options boundary (V2). Within V1 tiers 1–3, parallel navigation is acceptable after the budget baseline is complete.

---

## Goal 3 — Audience & Pedagogy

**Primary audience: Alex (22–35).** Full prefrontal cortex development, active real financial decisions, highest probability of durable behavior change from teachable-moment design.

**Secondary: Morgan (36–52).** Highest-value content gap. Highest dropout risk in minute 1 if the game feels juvenile. Must have a skip-scaffolding path via the placement assessment.

**Tertiary: Jordan (15–21).** Institutional distribution priority. Success metric is anxiety reduction and schema familiarity — not behavioral transformation (knowledge decays within 12–18 months without reinforcement).

**Onboarding: 5-question placement assessment, not age selection.**
Probes financial product experience, net worth awareness, and confidence/anxiety level.
Routes to one of 3 tracks:
- Start Here (~60% of users) — full scaffold from budget basics
- Fill the Gaps (~30%) — skip to detected weak spots
- Go Deep (~10%) — advanced starting state, compressed onboarding

**Do not overclaim.** No strong RCT evidence exists for self-directed financial literacy games producing measurable behavior change in voluntary adult users. The project can claim "game-based approach with RCT support in school settings" — nothing stronger.

**Session lengths:** 3–6 min teens, 10–20 min adults. Design each monthly session as self-contained — delivers value independently, not as part of a linear story.

**WCAG 2.2 AA requirements (4 criteria most devs miss):**
- SC 2.5.8: 44px minimum touch targets including offset spacing between clusters
- SC 2.4.11: sticky headers/card overlays must not obscure focused elements
- SC 2.4.13: focus indicator must meet 3:1 contrast ratio (browser defaults often fail)
- SC 2.5.7: payment slider must have a non-drag keyboard/button alternative

---

## Goal 4 — Platform & Tech Stack (Final, No Optionals)

**File structure (4 files, with line budgets):**
```
index.html              ← single entry point
vendor/
  chart.umd.min.js      ← Chart.js 204KB, vendored locally
  alpinejs.cdn.min.js   ← Alpine.js 46KB, vendored locally
css/
  style.css             ← flat design, CSS custom properties
js/
  game.js               ← core loop, state, navigation (<600 lines)
  math.js               ← all financial formulas (<400 lines)
  scenarios.js          ← life event card data (<400 lines)
  charts.js             ← all Chart.js wrappers (<300 lines)
```

**Libraries are vendored locally** (not CDN). `open index.html` → works with zero network dependency. Total vendor size: 250KB — negligible on USB/email.

**Alpine.js scope boundary (hard rule):** Alpine handles structural UI state only (tab switching, modal visibility, form binding). It NEVER touches rendered financial data, chart containers, or game state calculations. All financial logic lives in plain JS files. This constraint eliminates the LLM error pattern (x-if/x-for on wrong elements).

**Storage:** localStorage + Export/Import save button. URL-encoded state rejected (game state reaches 4,000–11,000+ chars base64 — too long). Export/Import pattern proven by Universal Paperclips and A Dark Room.

**PWA:** Cut from V1. Desktop PWA notification acceptance is 6%; iOS requires custom manual-install instructional UI. Deferred until after Milestones 1–6 pass at a real HTTPS URL.

**No build tools.** Open index.html in browser → it works. Puppeteer in `scripts/` is for testing only, not part of the app.

---

## Goal 5 — Business Strategy & GTM

**Pre-launch actions (complete before shipping):**
1. Apply for Fractured Atlas fiscal sponsorship (days to approve — unlocks all grant programs). **Note:** Open Collective Foundation dissolved December 31, 2024 — it is no longer an option.
2. Prepare teacher materials: Jump$tart crosswalk (2 days), module discussion guides (1 day), teacher one-pager (4 hours). Do this before launch — launching without teacher infrastructure is the #1 free EdTech failure mode.
3. Submit to Jump$tart Clearinghouse before launch day (permanent referral traffic, 51 state affiliates).

**Launch day:**
- Show HN ("Show HN: Free financial literacy game — credit cards, debt, investing") — 3,500–8,000 visitors for a front-page post
- r/Teachers post simultaneously (the correct Reddit channel — r/personalfinance auto-moderator blocks new accounts)
- Direct outreach to 10 financial literacy teachers (personalized emails, not broadcast)

**Post-launch (months 1–3):**
- Build toward CU pitch threshold: 3 named teachers in 2+ states + Jump$tart listing + estimated student reach
- Realistic first CU deal: 6–9 months post-launch
- Begin 3 small CU conversations in Month 2–3 (only after 50+ teacher users)

**Grants (after Fractured Atlas approval):**
- FINRA Foundation: $50K–$100K, rolling
- CalMoneySmart (CA DFPI): up to $200K, cycle opens early 2026
- NEFE: spring cycle
- Rose Foundation: up to $100K

**Monetization model:** Free for students (no accounts required). Credit union sponsorship ($500–$5,000/year per CU) funds teacher access + future development. No ads, no paywalled content.

**State mandate tailwind:** 30 states now mandate personal finance for graduation (up from 26 mid-2025; Delaware joined October 2025). 20 of the 30 are still phasing in — the opportunity window is now.

---

## Goal 6 — Game Design (MVP V1 Spec)

**5 screens (MVP — nothing else ships in V1):**

| Screen | Purpose |
|--------|---------|
| 1. Onboarding | 5-question placement → pick scenario → name → Month 1 begins |
| 2. Dashboard | Primary metric + cash flow delta + nav to Financials + event indicator |
| 3. Life Event Card | Full-screen overlay, 2–4 choices, consequence preview |
| 4. Financials | 3 tabs: Debt / Portfolio / Budget |
| 5. Month Summary | Cash flow delta with attribution, one decision-quality sentence, 4-number snapshot, next month preview — fits on one mobile screen |

**Does NOT ship in V1:** Learning Center screen, Achievement Grid, Options module, Futures module, PWA, leaderboards, fast-forward button.

**Primary metric by tier:**
- Tiers 1–2: Cash Flow (monthly income minus expenses minus debt payments)
- Tier 3+: Net Worth (assets minus liabilities)
- Teen scenario: Savings Rate % until Tier 2 unlocks

**Core game loop (each turn = 1 month):**
1. Receive income (± event modifiers)
2. Auto-pay fixed obligations
3. Surplus Allocation Challenge if no crisis (constrained optimization: "You have $400 — extra debt payment vs. Roth contribution vs. emergency fund")
4. Draw life event card if crisis → make choice
5. Markets + interest update
6. Month Summary screen
7. Advance

**20 life event cards (minimum deck size).**
Shuffled deck draw (not random) — prevents repeats within a run.
Five fully-designed example cards in `pass3/goal6-game-design.md`.

**Starting financial states (verified against Fed SCF 2022):**

| Scenario | Cash | Debt | Income/mo |
|----------|------|------|-----------|
| Teen (Jordan) | $500 | $0 | $800 (part-time) |
| Young Adult (Alex) | $2,000 | $26,000 student debt | $3,500 |
| Adult (Morgan) | $8,000 | $220,000 mortgage | $6,500 |

**Anti-patterns explicitly prohibited:**
- No hard game-over states (intervention/coaching screens instead)
- No punitive streak loss
- No pure-random card draw (use shuffled deck)
- No near-miss badge mechanics
- No FOMO urgency events
- No grading of decisions on Month Summary (use descriptive signal only)
- No fast-forward button (boring phases solved by Surplus Allocation Challenge)

**First decision within 60 seconds.** No tutorial wall. Placement questions → scenario selection → Month 1 starts. The debt clock slider aha moment must land in session 1.

---

## Architecture (Locked)

- HTML/CSS/JS only. `open index.html` → works.
- Chart.js + Alpine.js vendored locally in `vendor/`.
- localStorage + Export/Import for all save state.
- No external APIs required to run.
- No build tools, no npm for the app itself.
- Puppeteer in `scripts/` for automated testing only.
- Options and futures: V2 only.
- PWA: V2 only.
