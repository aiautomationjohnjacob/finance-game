# Pass 3 Research Summary — Stress-Test & Final Decisions

## Overview

Pass 3 ran devil's advocate challenges against every Pass 2 finding and produced six reversals or significant sharpening of prior conclusions. The two most consequential changes: teens were re-elevated from "deprioritized" to a named secondary audience with a dedicated classroom track baked into the launch-day architecture, and options/futures were fully deferred to V2 after a harm-risk assessment found the mandatory catastrophic-failure design requirement is too complex to ship safely in V1. The final direction is locked and unambiguous: a free, static web app with no backend, no accounts, and no server costs, structured as a monthly turn-based financial life simulator with a debt clock slider as its first-session hook, designed from day one to serve both direct adult users and school classrooms.

---

## Biggest Reversals from Pass 2

1. **Teen audience reinstated as a named secondary track.** Pass 2 narrowed the primary target to 18–35 and effectively deprioritized teens. Pass 3 found the school distribution channel too valuable to deprioritize — 30 states now mandate personal finance for graduation, 20 of them still scrambling for curriculum tools. The resolution: build the adult experience first (better product quality), then add a classroom mode as a second onboarding track with shorter sessions and teacher-assignable scenario sets. One engine, two tracks.

2. **Options and futures deferred to V2, not V1.** Pass 2 included Tier 4 (options wheel strategy) in the launch scope. Pass 3's harm assessment found that a simulation allowing players to succeed without experiencing catastrophic failure is actively dangerous — partial options knowledge combined with high confidence predicts riskier real-money behavior than zero knowledge. The mandatory failure scenario (wheel crash, stock -40%) must be the module completion condition, not an optional branch. This design is too complex to ship safely in V1; it ships only when the failure path is fully built and tested.

3. **Open Collective Foundation is dissolved — removed from GTM plan.** Passes 1 and 2 listed it as a fiscal sponsorship option. It dissolved December 31, 2024. The replacement primary option is Fractured Atlas (days to approval, no fee, accepts technology projects).

4. **APR softening rejected.** A stress-test asked whether using a realistic 24–25% APR would feel punishing and discourage learning. Finding: no peer-reviewed evidence supports softening; using an unrealistically low rate (e.g., 12%) actively harms players by teaching a misleading lesson. Default APR stays at 24–25%, labeled "typical for balance-carrying cardholders."

5. **Sequential topic gating relaxed within Tier 3.** Pass 2 endorsed strict 5-tier sequential gating throughout. Pass 3 found the hard gate is only justified at the Tier 3 → Tier 4 boundary (harm prevention for options). Within Tier 3, modules 3A (index funds), 3B (401k match), and 3C (mortgages) are navigable in any order — no prerequisite chain creates harm within that set.

6. **PWA deferred to post-V1.** Pass 2 included PWA as part of the V1 build. Pass 3 measured desktop PWA install acceptance at 6% and found the implementation cost is low but the opportunity cost during V1 development is real. The offline use case is already satisfied by vendored libraries served from disk. PWA ships after Milestones 1–6 are passing at an HTTPS URL.

---

## Final Definitive Decisions (per goal)

### Goal 1 — Game Type & Market

- The lead mechanic is the **debt clock slider**: credit card balance + APR + payment slider shows months-to-payoff and total interest in real time. This is screen one, the shareable hook, and the on-ramp to the full simulation. Build and ship this first.
- The core game is a **monthly turn-based life simulator** with persistent state in localStorage. The player's debt and portfolio carry over between sessions, creating an open loop that quiz formats cannot replicate.
- **Two onboarding tracks, one engine.** Default: Young Adult (18–30) scenario. Classroom track: Teen (16–18), sessions under 12 minutes, printable summary for teacher use. Identical simulation mechanics; different starting financial state and narrative framing.
- The market gap is real but not empty by accident — it is empty because sustaining a free quality product without institutional backing is genuinely difficult. The credit union/school sponsorship model is a survival mechanism, not a future monetization phase. Design the teacher dashboard and classroom mode into the core architecture so the product is sponsorship-ready on launch day.
- Realistic 12-month scale with zero marketing budget: 2,000–8,000 unique visitors, 500–2,000 engaged players. This is sufficient to initiate one or two credit union sponsor conversations. Monthly operating cost at that scale: $0–$5.

### Goal 2 — Financial Topics (V1 scope)

- **V1 covers Tiers 1–3 only.** Tiers 4–5 (options, futures) are deferred to V2.
- Tier 1 (required for all): credit card APR and minimum payment trap (24–25% APR, CFPB 2025 figure, labeled and not softened); emergency fund as a named objective.
- Tier 2: debt payoff strategy (avalanche vs. snowball), debt-to-income ratio, random life event deck.
- Tier 3 (three parallel modules, any order after Tier 2): 3A index funds vs. stock picking, 3B 401k employer match with match-capture-bar mechanic, 3C mortgages with animated amortization bar.
- Taxes and insurance are woven into scenario cards, not standalone tiers.
- The just-in-time delivery finding is confirmed with a primary source (Kaiser & Menkhoff, World Bank WPS8161): teachable-moment delivery produces ~49% larger effect sizes on financial behavior than advance classroom instruction. Concepts must be introduced at the moment of in-game decision, not in pre-game tutorials. The scenario card system IS the pedagogy.
- Options/futures harm mitigation requirements when V2 ships: mandatory catastrophic failure scenario is the module completion condition (not skippable), framing is "understand how they fail" not "learn to trade," and a pre-module capital reality gate displays real position requirements ($5,000–$25,000/position). The 70–80% retail derivatives loss rate (ESMA data) is cited in-module; the unverified "90%" figure is not used.

### Goal 3 — Audience & Pedagogy

- **Primary: Alex (22–35),** actively facing real financial decisions, full prefrontal cortex development, teachable-moment effect maximized because decisions are concurrent with learning.
- **Secondary: Morgan (36–52),** mid-career with specific knowledge gaps in mortgages, investing, and tax strategy. Must be routable directly to Tier 3+ content; will leave immediately if routed to budgeting basics.
- **Tertiary: Jordan (15–21),** primary value is institutional access (school mandates, teacher distribution). Primary benefit is schema familiarity and anxiety reduction, not immediate behavior change. First-class UI citizen but does not drive core pedagogical tradeoffs.
- Onboarding routes users by **behavioral cluster** (financial confidence + prior experience), not by age. A 5-question placement assessment using product-experience and confidence signals routes users into: Start Here (support-needed, ~60% of users), Fill the Gaps (transitional, ~30%), or Go Deep (high-literacy, ~10%). Age-based routing sets narrative framing and financial starting state; behavioral routing sets content entry point. These are two separate mechanisms.
- The five non-negotiable pedagogical rules: (1) consequential simulation over trivia; (2) teachable-moment card structure; (3) three behavioral tracks, not three age groups; (4) spaced repetition via scenario recurrence across tiers; (5) skip scaffolding without penalty for high-literacy users.
- WCAG 2.2 AA is the accessibility standard. Four high-miss-rate requirements specific to game developers: 2.5.8 target size with spacing offset, 2.4.11 focus not obscured, 2.4.13 focus appearance contrast, and dynamic content focus management when card overlays appear. The payment slider must have a numeric input or +/- alternative (drag-only fails 2.5.7).

### Goal 4 — Platform & Stack

- **Final stack (no optionals):** HTML5 + CSS3 custom properties + Alpine.js 3.x (vendored, 46 KB) + Chart.js 4.x (vendored, 204 KB) + vanilla JS in four files. No build tools. `open index.html` → works.
- **Alpine.js scope constraint (hard rule):** Alpine touches UI state only — tabs, modals, show/hide toggles. All financial data rendering uses plain JS innerHTML/textContent. Never put financial logic inside x-data objects. Never use x-if or x-for inside data-rendered content. This constraint is documented at the top of index.html so it is visible to every LLM editing session.
- **Four-file JS architecture with line budgets:** `game.js` (under 600 lines, state/router/localStorage), `math.js` (under 400 lines, pure functions, zero DOM), `scenarios.js` (under 400 lines, card data), `charts.js` (under 300 lines, Chart.js wrappers). Split any file exceeding ~700 lines before continuing.
- **Storage:** localStorage as a single JSON blob under `financeGame_save`, serialized on every meaningful state change. Export/Import save (~20 lines of JS) is the MVP persistence mechanism. No IndexedDB, no LZ-string compression, no URL-encoded state as primary save.
- **Script loading:** plain `<script>` tags in dependency order, not ES modules. ES module imports are blocked on the `file://` protocol in Chromium; plain script tags work on both `file://` and `https://`.
- **PWA:** not in V1. Add manifest.json + minimal sw.js after Milestones 1–6 are passing at an HTTPS URL.
- Total vendor payload on disk: 250 KB. Negligible for USB distribution; loads from local disk with no network dependency.

### Goal 5 — Business Strategy

- **GTM sequence:** prove teacher adoption first, monetize with institutions second. Seeking revenue before adoption produces nothing because the institutional pitch requires adoption evidence.
- **Pre-launch (3–4 working days):** produce Jump$tart National Standards crosswalk, one discussion guide per module, and a teacher one-pager. These are documents, not software. Do not launch without them — the "launch-without-teacher-materials error" is the most documented failure mode for free EdTech tools.
- **Launch day:** Show HN + r/Teachers simultaneously. Personal outreach to 10 identified financial literacy teachers. Apply for Fractured Atlas fiscal sponsorship (days to approval, no fee, unlocks all grant programs). Submit to Jump$tart Clearinghouse.
- **First revenue timeline:** 6–9 months minimum. First credit union deal ($500–$1,000, small CU under $300M assets) is achievable at Month 6–9 once 50+ teachers are documented. $10K+ ARR is a 12–18 month project. Monthly hosting cost at any scale: $0–$5 (static site on Netlify/Vercel/GitHub Pages).
- **Minimum viable traction for a credit union pitch:** 50 documented teacher users in at least 2 states + 1 teacher willing to be named as a reference + Jump$tart Clearinghouse listing. The number matters less than the story.
- **Revenue streams in priority order:** (1) credit union sponsorships $500–$1,000/year per sponsor, (2) foundation grants (FINRA $50–100K, Rose Foundation up to $100K, CalMoneySmart up to $200K), (3) optional donations post-completion, (4) district analytics tier in Year 3+ if teacher dashboard is grant-funded. Never: VC funding, ads, charges to individual teachers, native apps before web adoption is proven.

### Goal 6 — Game Design (MVP spec)

- **5 screens ship in V1:** Onboarding, Dashboard, Life Event Card (overlay), Financials View (3 tabs: Debt/Portfolio/Budget), Month Summary (modal). The Financials tab structure is what makes 5 screens viable — it must carry Debt Tracker, Portfolio, and Budget Overview via tabs.
- **20 life event cards** with a weighted shuffled draw system guaranteeing: at least 1 crisis in Months 1–4, at least 1 income opportunity in Months 3–8, at least 1 market event in Months 6–15, no repeats in a single 24-month run, 60% challenging / 40% opportunity or neutral.
- **Three starting scenarios with defined financial states:** Teen (Jordan) — $500 cash, $800/month income, $0 debt, $0 investments; Young Adult (Alex) — $2,000 cash, $3,500/month, $26,000 student debt at 6.8%, $500 investments; Adult (Morgan) — $8,000 cash, $6,500/month, $220,000 mortgage at 6.5%, $45,000 investments.
- **Dual-metric dashboard:** Cash Flow is the primary metric for Tier 1–2 play; Net Worth is promoted to primary when Tier 3 content unlocks. Teen scenario uses Savings Rate as the primary metric until Tier 2. This progression mirrors how real financial awareness develops.
- **Boring phase prevention:** when a player is in a stable financial state (no crisis, no urgent decision), replace the life event card with a Surplus Allocation Challenge — a constrained optimization problem with no single correct answer. Additionally: one scripted market news event fires every month regardless of card draw, and the Financials tab progressively reveals new sections at milestones to ensure something is always newly visible.
- **No game over.** Debt spiral triggers an intervention overlay with educational content and a soft reset option.
- **Dark pattern protections (mandatory):** shuffled (not random) card draw, no decision timers that cause permanent penalty, no streak mechanics in V1, no near-miss badge mechanics, no FOMO events.
- **Month Summary screen** must fit on a single mobile screen without scroll. It shows: net worth delta with line-item attribution, a one-sentence non-judgmental decision quality signal, a 4-number snapshot (cash/debt/portfolio/emergency fund), and a next-month preview. No letter grades — attribution and next-action create learning; grades create shame.
- **Financial math lives entirely in `math.js`:** standard amortization formula, monthly interest as `balance × (APR/12)`, mortgage payment formula, stock simulation via seeded linear congruential generator with scripted event deltas. No external API, no approximations beyond defined simplifications.

---

## What to Build

Build a static web application — no server, no database, no accounts — that opens directly from `index.html` in any browser. The app is a monthly turn-based personal finance life simulator covering a 24-month run. On first load, the player picks one of three scenarios (Teen, Young Adult, Adult), enters a name, and immediately reaches Month 1 of their simulated financial life. The first interactive element is always a life event card or a debt clock slider: they see a financial situation, pick from 2–4 choices, and immediately see the consequence with a one-sentence explanation of the financial principle at work. Between card events, the player can navigate to a three-tab Financials view where they can adjust debt payments (with a real-time payoff timeline), buy and sell fictional stocks, and review their budget breakdown. Every month ends with a single-screen summary showing what moved their net worth, what their decision cost or saved them, and what to expect next month. Game state persists in localStorage; an Export Save button lets players back it up to a JSON file. The app is built in four plain JS files plus one CSS file plus `index.html`, with Chart.js and Alpine.js vendored locally so it works on USB drives and offline. The teacher distribution path is built in from day one: a classroom onboarding track with shorter sessions and a pre-launch teacher materials package (standards crosswalk, discussion guides, one-pager) that makes the tool sponsorship-ready before the first credit union conversation.

---

## Resolved: Nothing Left Ambiguous

All decisions blocking the build are locked. The stack is defined to the file level with line budgets. The financial math formulas are specified. The three starting scenario financial states are defined. The 20 life event card titles and teaching targets are listed. The 5 screens and their layout requirements are fully specified. The metric system (Cash Flow primary in Tiers 1–2, Net Worth primary in Tier 3+, Savings Rate for Teen scenario) is decided. The accessibility standard (WCAG 2.2 AA) and its four highest-miss-rate game-specific requirements are documented. The GTM launch sequence is defined to the day level. Options and futures are out of V1 scope with a documented rationale. PWA is out of V1 scope with a documented trigger condition for when to add it. There are no open questions blocking the start of development.
