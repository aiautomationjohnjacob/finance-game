# Pass 2 Research Summary — Critique & Deepening

## Overview

Pass 2 validated the core architecture and most structural decisions from Pass 1 while surfacing a cluster of significant factual errors (wrong stats, a critical iOS API misunderstanding, and a company conflation) and several underexplored design tensions that Pass 1 glossed over. The most consequential new finding is that two of Pass 1's central design commitments — "zero sign-up" and "idle retention layer" — work against each other without a resolution, and that the 13–50+ age range as a single product target is harder to execute than Pass 1 acknowledged.

---

## Most Significant Corrections (across all goals)

1. **iOS PWA install prompt does not exist.** `beforeinstallprompt` has never been supported on iOS Safari and is not present in iOS 16.4+. The iOS install flow is always manual (Share → Add to Home Screen). A custom instructional banner is required, not optional.

2. **"Zero sign-up" and "idle retention mechanic" are in direct conflict.** The idle "come back tomorrow" mechanic's value depends on returning users who retain their game state. Without accounts, localStorage is wiped by browser data clears, private browsing, and device switches — eliminating the cross-session retention benefit. The fix: reframe idle as a within-session visual; prompt (don't require) optional account creation after the first completed session.

3. **Banzai.org and Banzai International (NASDAQ: BNZI) are completely different companies.** Pass 1 cited "Banzai" as a financial success case without distinguishing between the education nonprofit (Banzai.org, the correct reference) and the unrelated public SaaS company whose $53M acquisition collapsed in 2025. The Banzai.org credit union sponsorship model is validated; BNZI's financials are irrelevant and should not be cited.

4. **"90% of leveraged futures traders lose all money" is not a verified US regulatory figure.** ESMA (EU) data shows 70–80% of retail CFD accounts lose money. The CFTC publishes no equivalent aggregate stat for US futures retail accounts. The correct claim: "approximately 70–80% of retail derivatives traders lose money, per EU regulatory data."

5. **The 0.313 SD educational effect size is narrowly scoped.** It came from 15-year-olds in four European countries using a teacher-facilitated Financial Escape Room in a structured classroom setting — not a self-directed consumer app. The figure provides directional support but cannot be applied to adult behavior change in a voluntary US consumer app. The separate behavioral claim ("75% meet savings goals vs. 45%") has no verifiable source and should be dropped.

6. **Average APR for balance-carrying consumers is ~25%, not 22.3%.** The CFPB 2025 report cites 25.2% for general-purpose cards (the highest since at least 2015). The Fed's 22.3% series undercounts because it includes introductory-rate cards. Game simulations should use 25%.

7. **Young Adult student debt default of $38,000 is the 65–70th percentile, not the median.** Median student debt for borrowers under 30 is ~$24,000–$26,000 (Federal Reserve SCF 2022; EducationData.org 2025). $38,000 should be the hard-mode starting state, not the default.

8. **All four major grant programs require 501(c)(3) status or a fiscal sponsor.** FINRA Foundation, NEFE, CalMoneySmart, and Rose Foundation are each inaccessible to a for-profit or unaffiliated solo developer. Securing a fiscal sponsor (Fractured Atlas, Social Good Fund, Open Collective) is a prerequisite, not an afterthought.

---

## Per-Goal Changes

### Goal 1 — Game Type & Market

- The "43% longer session length for simulation games" figure is unverified and conflates genre categories; real educational game D30 retention is ~2–3% (far below Pass 1's implied baseline).
- Fingo — a direct "Duolingo for finance" competitor — launched, gained attention, and shut down (server offline as of early 2025). Its failure pattern (server costs + no revenue model) is exactly the failure mode the localStorage/no-backend architecture mitigates.
- Duolingo's DAU/MAU of 33–37% required $500M+ in funding and years of A/B testing. A new product should plan for 5–10% DAU/MAU, not Duolingo-tier metrics.
- Primary launch target should be narrowed to 18–35, with teen and 35–50+ paths as secondary tracks. Marketing to "ages 13–50+" risks owning no cohort deeply enough.
- The idle mechanic's within-session visual value (watching numbers update) is intact; its cross-session retention value without accounts is not.

### Goal 2 — Financial Topics

- Minimum payment share is 15% (general-purpose) and 20% (private-label) per CFPB 2025 — worse than Pass 1 stated.
- Three significant missing topics: **401(k) employer match** (highest ROI financial action for any employed adult; should be Tier 3), **taxes** (integrate into existing modules, not a standalone tier), and **insurance** (scenario cards throughout).
- "Top 10–15% of American adults" framing is misleading; accurate reframe: Tiers 1–3 address all 7 FINRA benchmark concepts; Tiers 4–5 go beyond any standard assessment.
- Just-in-time research confirms scenario cards are not just an engagement feature — delivering financial education at the moment of decision produces effects 48% larger than advance instruction. This is the strongest validation of the life event card mechanic.

### Goal 3 — Audience & Pedagogy

- Teens (13–18) should not be expected to produce durable behavior change; the prefrontal cortex matures around age 25. Jordan's success metric should be confidence gain and concept familiarity, not behavioral transformation.
- Alex (25) is the highest-probability user for durable behavior change — fully developed prefrontal cortex, real financial pressures, teachable moments actively occurring.
- Morgan (42) needs a concrete "skip narrative" escape valve to bypass teen-oriented framing and go directly to calculator/simulation mode. Without it, Morgan churns in the first 2 minutes.
- Leaderboards are specifically contra-indicated for adult learners (rated the least effective motivational element in adult gamification research).
- Session length targets revised: teens 3–6 min (not 5–8), adults 10–20 min (not 15–25 as a design target).
- The 80% mastery gate needs randomized question pools (15–20 per tier), mandatory wrong-answer review before retry, and explicit spaced repetition via life event cards that resurface earlier concepts in later tiers.

### Goal 4 — Platform & Stack

- iOS `beforeinstallprompt` support: **confirmed never existed, does not exist**. Remove any reference to it. Add iOS-specific "Add to Home Screen" instructional banner.
- JS file structure reduced from 8+ files to 4: `game.js`, `math.js`, `scenarios.js`, `charts.js`. Fewer files = better LLM context coherence and no ES module `file://` restrictions.
- Libraries should be vendored to a `vendor/` directory, not loaded exclusively from CDN. This satisfies the "open index.html and it works" constraint unconditionally.
- Add an Export/Import save button as an MVP feature (~20 lines of JS) to address localStorage data loss without requiring accounts.
- Alpine.js `x-if` and `x-for` must be on `<template>` tags — a common LLM-generation error that causes silent failures. Alpine should be used only for UI state; all financial logic stays in plain JS.
- localStorage cheating via DevTools is a non-issue for a single-player educational game with no leaderboard or rewards; do not add obfuscation.

### Goal 5 — Business Strategy

- State personal finance mandate count updated: 30 states as of October 2025 (up from Pass 1's 26), with ~10 fully implemented and 20 phasing in. The opportunity is larger than Pass 1 described.
- Banzai.org now reports 160,000+ teachers across all 50 states (up from Pass 1's 120,000). The model is validated; Banzai.org's financials are not public.
- Reddit launch channel risk understated: r/personalfinance auto-removes first-time posters' self-promotional links. Hacker News "Show HN" is the lower-risk equivalent for builder-launched free tools and has no karma requirement.
- Teacher infrastructure (standards crosswalk, answer keys, discussion guides) must exist on launch day, not be added later. The "launch without teacher materials" pattern is the most common free EdTech failure mode.
- Directory submissions (Jump$tart Clearinghouse, CFPB educator tools, Common Sense Education) should happen during beta, before public launch.
- Credit union outreach: start with institutions under $300M assets in states with newly enacted mandates; approach state credit union leagues for warm introductions rather than cold outreach.

### Goal 6 — Game Design

- Monthly turn cadence must mandate minimum decision density — every month must contain income allocation, at least 1 life event card, 1 optional investment/debt action, and a consequence reveal. "Fast-forward" for quiet DCA months actively hurts teen engagement; remove it.
- MVP screen count reduced from 10 to 5: Onboarding, Dashboard/Hub, Life Event Card (modal overlay), Financials View (tabbed: Debt/Portfolio/Budget), Month Summary. Learning Center, Achievement Grid, and Options Workshop defer to v1.1.
- Life event deck minimum raised from 12 to 20 cards to avoid visible repetition in a 24-month playthrough. Implement weighted draw (not pure random) based on financial state.
- Young Adult default student debt corrected to $26,000; Teen income corrected to $800/month; Teen starting cash corrected to $500.
- Options metaphor should split: covered call = rental income metaphor; cash-secured put = insurance seller metaphor. One metaphor does not cleanly cover both.
- Futures framing: keep farmer/bread company as introduction, but add an explicit "most futures traders are not farmers" transition card before the speculation/margin call content.
- Hard "game over" states must be replaced with educational intervention screens and a soft reset option.
- Onboarding target: first consequential financial decision within 60 seconds of page load, with no tutorial wall.

---

## What Pass 1 Got Right (Validated by Pass 2)

- Narrative life-sim + idle compounding hybrid is the correct core mechanic; no better alternative was found.
- Credit card debt as the #1 priority topic, with the minimum payment slider as the central "aha" mechanic.
- 5-tier mastery-gated content tree structure is pedagogically sound.
- Scenario cards (life events) as the delivery mechanism are validated by just-in-time learning research.
- Fictional tickers for the stock simulator are the correct call for a beginner-focused educational game.
- The "open index.html → it works" architecture constraint is confirmed as the right mitigation against the Fingo-style infrastructure failure mode.
- Vanilla JS + Chart.js + Alpine.js stack is correct; no better no-build-step alternative exists.
- localStorage 5 MB limit is not a constraint for this game's state size.
- Phaser.js rejection (overkill at ~980 KB) and Tailwind CDN rejection (dev-only, 350 KB) are confirmed correct.
- Anti-leaderboard recommendation is confirmed by adult learning research (leaderboards are the least effective motivational element for adult learners).
- No-account, no-ad, free-to-play model is confirmed as the right approach.
- Three-phase options progression (metaphor → mechanic → math) is pedagogically sound.
- The credit union CRA sponsorship model is confirmed as operational via Banzai.org's actual deployment.
- WCAG AA contrast throughout is confirmed as a genuine requirement, not a preference, for the 13–50+ age range.

---

## Open Questions for Pass 3

- **Age targeting specificity:** Should the primary launch persona be 18–25 (young adults, highest teachable-moment density) or 25–35 (higher income, stronger motivation for mortgage/options content)? Pass 2 recommends 18–35 as a band but does not resolve which sub-segment should drive design tie-breakers.
- **Monetization floor:** At what traffic level does credit union sponsorship revenue become meaningful enough to cover domain/maintenance costs? Is there a minimum viable scale below which the model doesn't activate at all?
- **Fingo failure specifics:** No post-mortem exists for Fingo's shutdown. Was the failure purely infrastructure costs, or were there product/engagement problems? The localStorage architecture eliminates the server cost failure mode, but not the engagement failure mode.
- **Morgan persona viability:** Almost no peer-reviewed research exists on game-based financial education for adults aged 30–50 specifically. The Morgan design is based on andragogy theory and UX best practices — not proven game examples. How much of the Morgan path can be validated before building?
- **Spaced repetition implementation:** Pass 2 recommends life event cards resurface earlier concepts in later tiers. How is this structured without making it feel like a test? What is the minimum card pool size to make this feel natural rather than repetitive?
- **401(k) module scope:** Pass 2 elevates this to a named Tier 3 module. What is the minimum viable 401(k) mechanic — employer match visualization only, or does it need to include vesting schedules and Traditional vs. Roth comparison?
- **Teacher materials scope:** Pass 2 mandates teacher infrastructure exists at launch. What is the minimum viable teacher package — a single standards crosswalk PDF, or does it need module-specific discussion guides and answer keys from day one?
- **Fiscal sponsor timing:** Should fiscal sponsor acquisition happen before the first playable build, or can it run in parallel with development without blocking the product launch?
