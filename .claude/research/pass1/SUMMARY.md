# Pass 1 Research Summary

## Overview

Pass 1 covered all six foundational research goals for FinanceGame: market landscape and game mechanics, financial topic scope, audience and pedagogy, platform and tech stack, business strategy, and game design. Across all goals, the research points consistently toward a single product archetype: a free, web-first, narrative-wrapped life simulation with mastery-gated content tiers, targeting the full 13–50+ age range in a market where no competitor currently occupies that position.

---

## Goal 1 — Game Type & Market

- No existing product combines all of: free, web-first, no sign-up required, ages 13–50+, credit cards through options/futures. This is the clearest market gap.
- Simulation games produce the highest educational transfer of any format (0.313 SD improvement in RCT, 2024); quiz-only formats test knowledge but do not build it.
- The recommended primary mechanic is narrative-wrapped life simulation — scenario cards drive emotional stakes, simulation engine handles consequences. Idle/incremental compounding adds a retention layer without complexity.
- Card games, pure tycoon, and quiz-only formats are explicitly unsuitable as primary mechanics for this audience and topic set.
- Financial literacy app market is growing at 13.9% CAGR ($4.1B → $10.2B by 2033); the free/impact-first segment is nearly empty.

## Goal 2 — Financial Topics & Content

- The baseline is severe: 73% of Americans scored below 57% on FINRA's 7-question financial literacy quiz (2025). The game must assume near-zero prior knowledge.
- Priority order by urgency and teachability: (1) credit card debt — $1.277T total, 47% carry a balance, minimum payment trap is a visceral simulation mechanic; (2) debt simulation (avalanche/snowball, emergency fund); (3) stock basics/index funds; (4) mortgages; (5) options/wheel strategy; (6) futures (expert/opt-in only).
- Each topic has a natural game mechanic: debt clock + payment slider for credit cards; amortization bar for mortgages; paper trading with scripted news events for stocks; three-phase metaphor-to-mechanic-to-math progression for options.
- Players completing all five tiers would land in the top 10–15% of American adult financial literacy by FINRA benchmarks.
- Simulation fidelity requirements vary: credit card math is simple arithmetic; options require a Black-Scholes approximation; futures must accurately model mark-to-market and margin calls.

## Goal 3 — Audience & Pedagogy

- Three distinct personas with different motivations: Jordan (16, wants streaks/badges/social proof), Alex (25, wants practical utility and scenario modeling), Morgan (42, wants ROI framing, calculators, and no condescension).
- 68% of teens want financial education but only 31% can access it — a motivated underserved audience.
- Aligned game mechanics (player makes the decision, sees the consequence) outperform quiz-only formats by a wide margin; mechanic-content alignment is critical — a shooting mechanic for a budgeting concept produces weaker transfer than a resource allocation interface.
- Key failure modes to avoid: front-loading complexity, quiz-only design, global leaderboards, one-time interventions without return loops.
- Scaffolding should follow a dependency graph: budgeting → debt → investing → options → futures. Players cannot and should not skip layers.

## Goal 4 — Platform & Stack

- Vanilla HTML/CSS/JavaScript (ES2020+) is fully sufficient for all planned game features — amortization, compound interest, Black-Scholes approximation, and Monte Carlo simulation (1,000 paths × 252 days runs in under 10ms in browser).
- Recommended CDN additions: Chart.js (~65 KB gzip) for all charts; Alpine.js (~15 KB gzip) for reactive UI state. Total CDN payload ~80–109 KB — a single cached download.
- Explicitly excluded: React/Vue/Svelte (require build steps), Phaser.js (980 KB, built for sprites/physics), Tailwind CDN (350 KB, dev-only).
- PWA wrapping (manifest.json + ~30-line service worker) enables mobile install on both Android and iOS 16.4+; this is a layer added after the core game, not a prerequisite.
- localStorage is sufficient for all game state; IndexedDB not needed at launch.

## Goal 5 — Business Strategy

- 26 states now mandate personal finance for high school graduation (up from 8 in 2020), requiring up to 20,000 new teachers — a structural tailwind for free educational tools.
- Best-fit GTM path: B2C launch (no friction, no accounts), then B2B2C monetization via credit union sponsorships ($500–$5,000/year per CU, modeled on Banzai), then grants.
- Key grant sources: FINRA Foundation ($50K–$100K, rolling); CalMoneySmart/CA DFPI (up to $200K, cycle opens early 2026); NEFE (research-oriented); Rose Foundation (up to $100K).
- Distribution levers available immediately: Jump$tart Clearinghouse (free listing, reaches 51 state coalitions), CFPB educator tools page, r/personalfinance (21.4M members), teacher-influencer outreach.
- Precedents validate the model: NGPF reached 127,000 educators via teacher word-of-mouth; Banzai reached 70% of U.S. schools via credit union sponsors; Visa's Financial Football reached 10M+ plays via government partnership.

## Goal 6 — Game Design

- Core loop: monthly turns — receive income → pay obligations → allocate discretionary money → draw life event card → decide → see net worth delta → advance.
- 10 screens identified: onboarding, dashboard (hub), life event card overlay, debt tracker, portfolio, learning center, module detail, achievement grid, year-end summary, quiz.
- Mastery-gated tiers (not time-gated): 80% quiz score required to unlock next tier, mirroring Khan Academy's competency model.
- Reward system: knowledge badges (labeled, specific), net worth milestones, life event trophies, streaks with shields (low-pressure), avatar cosmetics (research-backed for intrinsic motivation). No global leaderboards — self-comparison and optional classroom mode only.
- Visual style achievable without a designer: flat card-based layout, CSS Grid, system fonts, emoji as semantic icons, Chart.js for data visualization, SVG for decorative charts.
- Life event card deck anchors the game's emotional core — Spent's sparse scenario-card model (situation + 2–4 choices + immediate cost preview) is the proven template.

---

## Top Recommendations Emerging from Pass 1

1. **Build a narrative life simulation, not a quiz game.** Simulation with consequence modeling is the only mechanic proven to transfer to real financial behavior. Quiz-only products (Zogo, Financial Football) have scale but no behavioral impact.
2. **Start with credit card debt as the entry mechanic.** It is the highest-urgency topic, the most teachable via simulation (debt clock + payment slider), and the entry point accessible to all three personas at age 13+.
3. **Gate all content by demonstrated mastery (80% quiz threshold), not time.** This is the key pedagogical decision — it prevents players from reaching options content unprepared and mirrors the only models (Khan Academy, NGPF) that have shown sustained educational impact at scale.
4. **Launch with zero friction — no sign-up required for students.** Every extra step (account creation, app install, school login) cuts the addressable audience. The competitive advantage is accessibility.
5. **Use the Banzai credit union sponsorship model for sustainability.** It is the only proven path to both free-for-schools access AND financial sustainability without VC or ads. The CRA compliance motive makes credit unions self-motivated partners.
6. **Restrict the tech stack to vanilla JS + Chart.js + Alpine.js.** All financial math is implementable without libraries. Keeping the stack minimal is essential for AI-assisted development and zero-dependency deployment.
7. **Design for Morgan (the 42-year-old) as a quality bar, not an afterthought.** If the content and UI work for a financially experienced adult without condescension, it will work for the full 13–50+ range. Many products fail by designing down to the youngest user and alienating everyone else.

---

## Gaps & Questions Flagged for Pass 2

- **Options mechanic fidelity vs. simplicity tradeoff** — Pass 1 recommends a three-phase progression (metaphor → mechanic → math) but does not resolve how much Black-Scholes detail to expose. Pass 2 should research what options educators consider the minimum viable mathematical exposure for a general audience.
- **Futures module justification** — The research shows 90% of leveraged futures traders lose everything. Pass 1 recommends including futures as an opt-in expert tier but does not fully examine whether this serves the audience or risks normalizing a high-harm product. Pass 2 should stress-test this decision.
- **Session length vs. monthly turn pacing** — The 12-month game structure (one turn per player session) is proposed but not validated. Pass 2 should check: do players in comparable games (Banzai, Financial Football) complete single sessions in one sitting or return across multiple days? The turn structure may need adjustment.
- **Credit union outreach specifics** — Pass 1 names potential CU partners (MSU Federal, Colorado CU, OnPoint) but does not confirm their active interest in new tools or validate the $500–$5,000 sponsorship price point. Pass 2 should find comparable Banzai pricing disclosures or CU partnership terms.
- **FERPA/COPPA compliance scope** — If teachers create accounts but students play anonymously, the compliance burden is minimal. Pass 1 mentions this but does not fully resolve what constitutes "collecting student data" under COPPA for a game where no account is required. Pass 2 should verify the anonymous-play model is genuinely compliant.
- **Competitor trajectory** — Pass 1 analyzed competitors at a point in time. Pass 2 should check whether any (particularly NGPF or EverFi) have announced features that would close the identified gaps, specifically: web-first + no sign-up + options/futures content.
- **Mobile-first vs. web-first tension** — The CLAUDE.md spec says "mobile-first: iOS + Android" but decisions.md resolves to web-first with PWA upgrade. Pass 2 should confirm whether the target audience (teens in particular) will engage meaningfully with a browser game on mobile, or whether the PWA install step is necessary for retention.
