# Project Phases

## Current Phase: RESEARCH

In this phase, agents must NOT write application code or scaffold a project.
All output should be findings, recommendations, and decisions.

---

## Research Goals

Research is conducted in 3 passes. Each pass covers all goals. Each pass must critique
and stress-test the prior pass before adding new findings.

---

### Goal 1 — GAME TYPE & MARKET LANDSCAPE
- Non-violent mechanics for ages 13–50+
- Game types to evaluate: simulation/life-sim, idle/incremental, card game, quiz+scenario, visual novel, tycoon
- Evaluate: market size, engagement data, monetization fit, broad age-range appeal
- Web-first vs mobile-first: where does the financial literacy audience actually play?
- Competitor analysis: Cashflow (Rich Dad), Spent, Financial Football, Greenlight, Duolingo-style finance apps
- Deliverable: ranked game mechanic recommendation with data + sources

### Goal 2 — FINANCIAL TOPICS & CONTENT SCOPE
- Credit card debt: APR, minimum payments, debt spiral mechanics
- Mortgages: amortization, fixed vs ARM, PMI, home equity
- Stock basics: shares, dividends, P/E ratios, ETFs, index funds
- Stock options: calls, puts, the wheel strategy, covered calls, cash-secured puts
- Futures: commodity futures, contract specs, leverage, margin calls
- Simulated accounts: paper trading, virtual portfolio, debt simulator
- Prioritize by: impact on target audience (teen → 50+), teachability via game mechanics
- Deliverable: content priority matrix with teaching approach per topic

### Goal 3 — AUDIENCE & PEDAGOGY
- Who is the audience: teens (13–18), young adults (18–30), middle-aged (30–50+)
- What financial mistakes does each group make most?
- Proven game-based learning techniques for financial topics
- Scaffolding: how to introduce complexity progressively (credit cards before options, etc.)
- Accessibility: literacy levels, attention spans, motivation drivers per age group
- Deliverable: audience persona breakdown + learning progression roadmap

### Goal 4 — PLATFORM & TECH STACK
- Target: web browser first (HTML/CSS/JS or lightweight framework), then iOS/Android via PWA or React Native
- Must be buildable with AI assistance only — no complex build systems, minimal dependencies
- Simulation engine: can vanilla JS handle portfolio simulation? What about charting?
- Candidates: vanilla HTML/CSS/JS, React, Svelte, Vue — evaluate for simplicity + AI-buildability
- Deliverable: stack decision with rationale (simplest that works)

### Goal 5 — BUSINESS STRATEGY & GO-TO-MARKET
- Free-to-play, impact-first — not VC-backed, not ad-supported
- Distribution: direct web, schools/teachers, financial literacy nonprofits, Reddit communities
- Monetization: optional donations, premium cosmetics, teacher/school subscriptions
- Comparable: Investopedia Simulator, MarketWatch virtual trading, Khan Academy, NerdWallet
- Partnerships: credit unions, nonprofit financial orgs, school districts
- Deliverable: GTM plan + sustainability model

### Goal 6 — GAME DESIGN SPEC
- Map each financial topic to a game mechanic (e.g., credit card debt → debt spiral mini-game)
- Progression system: start with budgeting → unlock credit → unlock investing → unlock options/futures
- Simulation fidelity: what needs to be realistic vs. simplified for teaching?
- Feedback loops: how does the game show consequences of financial decisions?
- Visual style: what art direction is feasible with AI-generated assets and simple HTML/CSS?
- Deliverable: game design document outline

---

## Research Pass Structure

### Pass 1 — Initial Research
- Web search each goal with current sources (2025–2026)
- Write raw findings to `.claude/research/pass1/<goal>.md`
- Commit after each goal is complete

### Pass 2 — Critique & Deepen
- Re-read Pass 1 findings for each goal
- Identify: weak assumptions, missing data, contradictions, underexplored angles
- Do additional targeted searches to fill gaps
- Write critique + updated findings to `.claude/research/pass2/<goal>.md`
- Commit after each goal is complete

### Pass 3 — Stress-Test & Finalize
- Play devil's advocate: what could go wrong with each recommendation?
- Check for: survivorship bias, missing failure cases, cost traps, technical risks
- Produce final confident recommendation per goal
- Write to `.claude/research/pass3/<goal>.md`
- Commit after each goal is complete

---

## Synthesizing Decisions

After all 3 passes are complete:
1. Write final decisions to `.claude/rules/decisions.md` (one section per goal)
2. Update this file: change "Current Phase" to EXECUTION
3. Update CLAUDE.md to reflect the new phase
4. Do NOT begin EXECUTION phase — await user confirmation

## Future Phase: EXECUTION

Agents build the app based on decisions locked in `.claude/rules/decisions.md`.
No revisiting decided items unless explicitly instructed by the user.
Key constraint: the app must be buildable as simple HTML/CSS/JS — no complex frameworks, no external APIs required to run.
