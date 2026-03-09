# Goal 3 — Audience & Pedagogy (Pass 2 Critique)

---

## What Pass 1 Got Right

**The financial knowledge gap data is solid.** The PISA 2022 and NFCS figures are primary-source citations with large sample sizes; the specific knowledge gaps for teens (compound interest, credit scores) are well-supported. These can be used with confidence.

**The five-layer scaffold is pedagogically coherent.** The dependency graph framing (options requires stocks requires diversification) reflects standard instructional design practice. Bloom's Taxonomy application is a recognized framework, not a speculation.

**The 0.313 SD effect size is real and correctly attributed.** The EFFECT project study is confirmed: a peer-reviewed RCT published in the *Journal of Comparative Economics* (2024), lead authors Cannistrà, De Beckker, Agasisti, Amagir, Põder, Vartiak, and De Witte. DOI: 10.1016/j.jce.2024.08.001. It is not a single obscure blog citation; it went through formal peer review. Source data confirmed at SSRN and the KU Leuven LEER Center policy brief.

**Motivation drivers are directionally correct.** Streak-based engagement for teens (Duolingo model), utility-framing for young adults, and ROI-framing for middle-aged adults align with published adult learning theory (andragogy / Knowles) and with the game design literature.

---

## Weak Assumptions / Unverified Claims

### 1. The 0.313 SD figure: significant caveats omitted

Pass 1 presents this as "a meaningful, replicable effect." The full picture is more complicated:

- **Population is 15-year-old students in secondary schools** across Belgium, Estonia, Italy, and Slovakia — not US users, not adults, not mixed-age audiences. Generalization to ages 13–50+ in a US context is an extrapolation, not a confirmed finding.
- **Country variation is extreme:** Belgium = 0.618 SD, Slovakia = 0.334 SD, Italy = 0.242 SD, Estonia = 0.182 SD. The headline 0.313 is an average masking a 3.4x variation between the best and worst country. The effect size is not uniformly "robust" — it depends heavily on prior exposure, curriculum context, and possibly teacher facilitation.
- **The game is a single specific product (Financial Escape Room)** in a structured school setting with teacher involvement. It was not a self-directed consumer app used at home. Translating this effect to a free-to-play mobile game played independently is a significant methodological leap.
- **Knowledge vs. behavior gap:** A separate 2014 meta-analysis of 201 financial education studies found that all financial education combined explains only 0.1% of the variance in actual financial behavior. The EFFECT study measures knowledge gain, not long-term behavior change. Pass 1's claim that "75% of users meet savings goals compared to 45% without game elements" is an unsourced claim repeated in industry marketing materials — no verifiable RCT was found for this specific figure.

**Revised claim:** The 0.313 SD finding is real but scope-limited to a structured school intervention with 15-year-olds. It provides directional support for game-based financial education but cannot be applied to adult behavior change outcomes. The behavioral impact claim (75% savings goal attainment) should be dropped until sourced.

---

### 2. The three personas are constructed archetypes, not empirically derived

Pass 1 does not cite any behavioral segmentation study that produced "Jordan / Alex / Morgan" as distinct segments. The personas are internally consistent composites built from demographic statistics (PISA age groups, Fed income data, NFCS financial literacy rates) but are not validated via a psychographic study.

**What the research actually shows about segmentation:**
- A 2025 machine learning study (ScienceDirect) analyzed 1,067 adults and identified **three behavioral clusters** in financial literacy: a support group requiring intensive intervention (~60%), a transitional group (~30%), and a high-literacy group (~10%). These clusters correlated with behavioral style, not primarily with age.
- Adolescent financial behavior research (Self-Determination Theory, Park et al., 2021) confirms motivation mediates behavior — but motivation patterns correlate imperfectly with age. Some 16-year-olds are "utility-motivated"; some 42-year-olds respond to social proof.
- **Age alone is a weak segmentation axis.** Financial behavior researchers consistently find that financial confidence, prior experience with financial products, and household income are stronger predictors of engagement than age per se.

**Revised claim:** The three personas are useful design fiction — they give concrete, memorable targets for UI and content decisions. But they should be treated as illustrations of behavioral types, not empirically validated demographic segments. The game's onboarding placement (by scenario, not by age) partially corrects for this — that design decision is sound.

---

### 3. Session length claims lack direct empirical support for this specific use case

Pass 1 asserts: "5–8 minutes (teens), 8–15 minutes (young adults), 15–25 minutes (adults)."

**What the evidence actually shows:**
- Duolingo's public data: the average lesson takes approximately 5 minutes 29 seconds; daily users average 15 minutes/day across multiple sessions. Sessions are not 5–8 minutes of a single sitting; they are ~5 minute micro-sessions stacked.
- Research on attention and session length for educational apps specifically is limited. The "8-second attention span" figure widely cited in marketing is derived from a Microsoft study later widely criticized for methodological flaws; it does not map directly to educational engagement time.
- For structured educational contexts (vs. passive media), attention spans are measurably longer. A learner engaged with an interactive simulation sustains attention at higher rates than one watching a video.
- For adults 40+, the serious games research literature notes that motivation shifts to "meaningful challenges" and that adult learners — when properly motivated — will sustain longer sessions than the literature on teen social media use predicts.

**What the numbers probably should be:**
- Teens: **3–5 minute micro-sessions, multiple per day.** The 5–8 minute claim may be slightly high for casual first-time users; it's more accurate for retained users with a habit established.
- Young Adults: The 8–15 minute range is plausible; commute-sized sessions of ~12 minutes align with observed mobile learning behavior.
- Adults 30–50+: The 15–25 minute claim assumes high motivation. Cold-start adult users are more likely to start with shorter sessions and expand as familiarity grows. Design should accommodate 10–20 minutes as the realistic range, with 25+ minutes possible for motivated "catch-up" sessions but not the design target.

**Verdict:** The session length figures in Pass 1 are reasonable starting assumptions but are not empirically verified for this exact product type. They should be treated as design targets to validate with user testing, not as research-confirmed facts.

---

### 4. The 80% mastery gate: pedagogically defensible but not precisely calibrated

Pass 1 states: "80% quiz score required to unlock next tier." This is presented as if it is a research-validated specific threshold.

**What the research actually shows:**
- Bloom's mastery learning literature defines mastery as 80–90% correct, with the exact threshold being a practical decision, not a precise empirical finding. Bloom showed that mastery-based instruction produces 2 SD improvements in tutorial settings, but the 80% vs. 85% vs. 90% threshold is implementation-specific.
- A 2022 Educational Data Mining study ("Does Practice Make Perfect?") found that while higher mastery thresholds correlate with initial knowledge retention, the advantage largely disappears after several weeks without continued practice. This is the knowledge-decay problem: passing a gate at 80% does not guarantee retention at the time of the next module.
- Khan Academy uses mastery learning but does not use a single fixed threshold; it uses a weighted moving average of recent performance across multiple exercise types.
- ITS research shows that **adaptive gating** — adjusting the threshold based on item difficulty and learner history — outperforms fixed 80% gates for long-term retention.

**Revised claim:** The 80% threshold is a reasonable default aligned with standard mastery learning practice. However, it should be:
1. Applied to a minimum of 5 questions (as stated) — too few items make 80% noisy.
2. Accompanied by mandatory review of wrong answers, not just "try again" retries.
3. Not treated as a guarantee of retention — the game's spaced repetition (re-encountering concepts in later life events) is the mechanism that bridges this gap, and should be explicitly designed as such.

---

### 5. Adult motivation: the Pass 1 picture is incomplete

Pass 1 gives solid detail on teens and young adults but the 30–50+ motivation treatment is somewhat generic. The gap: **almost no published research on game-based financial education for adults in the 30–50 age band specifically.** Most serious games research on older adults covers 60+ (health and cognitive training). The 30–50 range is genuinely underresearched.

**What the evidence does show for this band:**
- Andragogy (Knowles, 1970s, still foundational): adults learn best when (1) they understand why they need to learn something, (2) it connects to their experience, (3) they have autonomy, (4) it is relevant to real problems, (5) it is intrinsically motivated. All five principles favor the utility/ROI framing Pass 1 recommends.
- A 2024 Springer study on gamification for adult learners found the most effective elements for adults are **problem-solving challenges, progress visibility, and narrative context** — not badges and leaderboards. Leaderboards were rated lowest by adult learners as motivational elements.
- The PMC systematic review (2023) of serious games for older adults (60+) found social interaction and meaningful challenge are the primary sustained motivators — but also found that **technology unfamiliarity and design paternalism** ("talking down to users") are the largest dropout triggers.
- Workplace financial wellness programs using gamification show 45% participation increase (Gallup 2022 figure cited in industry sources) — but these are typically employer-mandated programs with captive audiences, not voluntary consumer apps. Transfer to voluntary engagement is uncertain.

**Critical gap for FinanceGame:** Morgan (age 42) is the persona most at risk of dropout because:
- The game format itself may feel unfamiliar or juvenile.
- Content that accurately serves Morgan must cover complex topics (mortgage refinancing math, options Greeks) that are hard to gamify without feeling like a calculator with a skin.
- The "avoid condescending content" guidance in Pass 1 is correct but needs a concrete design consequence: Morgan should be able to skip the narrative framing and go directly to the simulation/calculator mode if preferred.

---

### 6. Neuroscience problem with teen financial education timing (unaddressed in Pass 1)

Pass 1 does not address a significant counter-argument from developmental neuroscience: **teaching financial concepts to 13–16 year olds may be poorly timed relative to prefrontal cortex development.**

The prefrontal cortex — governing long-term consequence modeling and impulse control — does not reach full maturity until approximately age 25. Adolescents make financial decisions with a limbic system (immediate reward, emotional salience) that matures faster than the executive function system. Research shows:
- A World Bank 2019 meta-analysis found that financial education delivered at the **teachable moment** (when the user is actually facing the decision) produces effects 48% larger than advance classroom instruction.
- Studies of mandatory high school personal finance courses in 26 states found no measurable impact on adult retirement savings or wealth accumulation.
- Financial knowledge taught at 16 decays significantly within 12–18 months without reinforcement at the point of real decision.

**This does not invalidate targeting teens.** It changes *how* the game should work for teens:
- For teens (13–18): the game's value is building **familiarity and reduced anxiety** (the "I've seen compound interest before" effect), not permanently installing financial decision-making skills. The habits/streaks approach may matter more than the content depth for this group.
- The teachable-moment advantage means the game should trigger relevant modules contextually (e.g., "You just got your first credit card offer" life event card that teaches credit scores *in the moment*) rather than front-loading didactic content.
- For adults (25+), when the prefrontal cortex is fully developed, game-based financial education is more likely to produce durable behavior change. This makes Morgan (42) and partially Alex (25) the highest-impact users — a finding Pass 1 does not highlight.

---

## New Research Findings

### On the EFFECT Study Conditions (Critical for Claims)

The 0.313 SD result came from:
- A **Financial Escape Room** (browser-based puzzle game) played in **school settings with teacher involvement**
- Students ages approximately 15 in Belgium, Estonia, Italy, Slovakia
- **Randomized at the school level** — schools assigned to treatment or control, not individual students
- Short intervention: the game was used as a **single curriculum supplement**, not an ongoing product
- Country range: 0.182 SD (Estonia) to 0.618 SD (Belgium)

The game tested is structurally different from FinanceGame: it is a puzzle-solving exercise, not a life simulation. The mechanisms that drove the Belgium result (likely prior teacher priming, curriculum alignment) may not transfer to a self-directed US consumer app context.

### On Mastery Learning Thresholds in Practice

- Bloom's original formulation uses 80–90% as a range, not a single value, and requires **multiple assessment forms** (not repeated versions of the same questions).
- The Educational Data Mining literature suggests that for **long-term retention**, the key variable is not the pass threshold but the number of practice repetitions distributed over time (spaced repetition).
- Khan Academy's mastery model uses a **probabilistic knowledge estimate** (Knowledge Component model) rather than a fixed percentage. For a simple HTML/JS game, a fixed 80% on 5 questions is a reasonable approximation — but the game should include **spaced review** via returning life event cards that revisit earlier concepts.

### On Adult Game-Based Learning (30–50)

- The most applicable research is the **andragogy literature** (Knowles) and the **professional upskilling game design** research (ScienceDirect 2022 systematic review).
- Professional upskilling games that work for 30–50 adults share: (a) real-world fidelity to the decision being modeled, (b) control over pacing, (c) visible progress tied to practical outcomes, (d) low "game-iness" (minimal cartoon aesthetics, no childlike reward sounds).
- The barrier most cited in serious games adoption by adults is **perceived age-appropriateness** — adults often feel games are not designed for them. A clean, data-forward aesthetic (per the current game design decisions) directly addresses this.

### On Accessibility Requirements

For a 13–50+ audience, the following are genuinely necessary (not just best practices):

| Requirement | Rationale |
|---|---|
| WCAG 2.2 AA color contrast (4.5:1 text, 3:1 large text) | Covers 8% of males with color vision deficiency; critical for Morgan-age users |
| Minimum 16px body font (18px preferred) | Vision begins declining from mid-30s; 13px font is common but problematic for 40+ users |
| Touch target minimum 44px (iOS) / 48px (Android) | Motor precision declines with age; critical for 50+ users |
| No time-limited interactions (without pause) | Older users need more processing time for complex financial info |
| Scalable text (no fixed pixel heights that break at 200% zoom) | Required for WCAG 2.2 AA |
| Keyboard navigability | Required for users with motor disabilities; also improves desktop usability for Morgan |
| Reduced motion option | Vestibular disorders become more common 40+; CSS `prefers-reduced-motion` media query |
| Plain language standard for core explanations | Grade 8 reading level for foundational content (aligns with Pass 1 guidance) |

The existing architecture decision (WCAG AA contrast minimum throughout) is confirmed correct. The specific requirements above extend Pass 1's generic table with actionable minimums.

---

## Persona Validation or Revision

### Jordan (16) — Validated with one significant revision

The core profile is well-grounded in PISA 2022 data and teen financial behavior research. **Revision required:**

The game cannot reasonably expect durable financial behavior change from Jordan. The neuroscience evidence suggests Jordan's primary benefit is anxiety reduction and familiarity-building, not behavioral transformation. Design implication: Jordan's success metric should be **confidence gain and concept exposure**, not "Jordan will now make better credit decisions at 18." The game should make Jordan feel competent and curious, which primes better behavior when real decisions arrive with Jordan's more developed prefrontal cortex at 20–25.

Streak mechanics and social sharing remain valid. Session length revision: **3–6 minutes per session** (slightly shorter than Pass 1's 5–8) is more defensible given Duolingo micro-session data.

### Alex (25) — Validated, minimal revision

The 25-year-old profile is the best-supported by research: prefrontal cortex is fully (or nearly) developed, real financial pressures exist, and the teachable-moment effect is strongest because real decisions are actively occurring. Alex is the highest-probability user for durable behavior change. This should be emphasized more strongly in design prioritization.

Scenario simulation ("What happens if I put $200/month into index funds vs. extra loan payments?") is confirmed as the highest-engagement mechanic for this group. Pass 1's guidance here is correct.

### Morgan (42) — Validated with two additions

1. **Add a "skip narrative" option.** Morgan's stated aversion to condescending content requires a concrete escape valve: the ability to bypass the life-sim framing and go directly to the calculator/simulation mode. Without this, the game risks losing Morgan in the first 2 minutes when the teen-oriented narrative framing appears.

2. **Leaderboards are contra-indicated.** The adult learning research confirms that leaderboards are the *least* effective motivational element for adult learners. Pass 1's guidance (benchmark vs. national averages, not global leaderboards) is correct. Reinforce this in design decisions.

Morgan is genuinely underserved by game-based financial education research. The FinanceGame design is largely working from andragogy theory and UX best practices, not from proven game-based financial education examples at this age. This is a gap to monitor — Morgan's content should be the most carefully playtested.

---

## Updated Scaffold Recommendations

### 1. Retain the five-layer scaffold with one structural addition

Add **spaced repetition via life event cards** as an explicit scaffold mechanism. The mastery gate (80% quiz score) prevents progression, but knowledge decay begins immediately after. Life event cards that revisit earlier concepts in later tiers provide the distributed practice that makes learning durable. This is not currently explicit in Pass 1's design.

Example: A player who completes the compound interest module in Tier 1 should encounter a "your friend wants to buy a new car on a 24% APR loan — what do you tell them?" life event card in Tier 3, resurfacing the concept without a formal re-test.

### 2. Onboarding placement assessment is essential, not optional

The 5–7 question "financial snapshot" is the key mechanism that makes the single game work for ages 13–50+. Without it, Jordan is frustrated by content below her level and Morgan is insulted by Tier 1 content. Pass 1 mentions this but it should be elevated to a hard requirement.

Design implication: the placement assessment must be **framed as a snapshot, not a test** (Pass 1 correctly identifies this), and should route users to the first *gap* they have, not the first tier they don't know. A 42-year-old who knows budgeting but not mortgage refinancing should land in Tier 4, skipping Tiers 1–3.

### 3. Teachable moment design for teens

For Jordan specifically, the life event card sequence should mirror real teen financial moments in chronological order:
- First job → paycheck, taxes, spending choices (foundational)
- Credit card offer at 18 → credit score explained *at that decision point*
- Applying to college → student loan cost modeling *before* signing

This is not just narrative flavor — it directly exploits the teachable-moment effect that produces 48% larger educational gains than advance instruction.

### 4. The 80% mastery gate: refine implementation

- **Randomize questions** across a larger pool (15–20 per tier minimum) to prevent pure memorization of specific answer positions.
- **Require review of wrong answers** before retake, not just a "retry" button.
- **Allow partial progression** — a player at 60% should be nudged to review specific concepts, not simply blocked. Hard blocking at 80% is appropriate only if the next tier genuinely requires the prior knowledge (which the five-layer scaffold confirms it does).
- Retain 5 questions minimum; 8–10 would be more statistically reliable but risks frustrating users. 5 with randomized question banks is the practical trade-off.

---

## Sources

- [The impact of an online game-based financial education course: Multi-country experimental evidence — ScienceDirect / Journal of Comparative Economics 2024](https://www.sciencedirect.com/science/article/pii/S0147596724000441)
- [EFFECT Project Policy Brief No. 6, 2024 — KU Leuven LEER Center](https://feb.kuleuven.be/drc/LEER/effect-project/policy_brief/6-policy_brief_financial-education.pdf)
- [The impact of an online game-based financial education course — SSRN preprint](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4929717)
- [Exploring the effectiveness of gamification in adult education — ScienceDirect 2025](https://www.sciencedirect.com/science/article/pii/S2666374025000317)
- [The evaluation of gamification implementation for adult learners based on andragogical principles — Springer 2024](https://link.springer.com/article/10.1007/s10639-024-12561-x)
- [Designing digital game-based learning for professional upskilling: A systematic literature review — ScienceDirect 2022](https://www.sciencedirect.com/science/article/abs/pii/S0360131522000896)
- [Mastery Learning — Wikipedia](https://en.wikipedia.org/wiki/Mastery_learning)
- [The effects of various mastery criteria on student performance — Springer](https://link.springer.com/article/10.1007/BF02768360)
- [Does Practice Make Perfect? Analyzing the Relationship Between Higher Mastery and Forgetting in an Adaptive Learning System — Educational Data Mining 2022](https://educationaldatamining.org/edm2022/proceedings/2022.EDM-short-papers.27/index.html)
- [Meaningful learning: motivations of older adults in serious games — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10012313/)
- [Use of serious games with older adults: systematic literature review — Nature / Humanities and Social Sciences Communications 2023](https://www.nature.com/articles/s41599-023-02432-0)
- [Modeling financial literacy through explainable machine learning and behavioral segmentation — ScienceDirect 2025](https://www.sciencedirect.com/science/article/pii/S2451958825003410)
- [Why We Teach Financial Literacy to Teenagers at the Worst Possible Time — GetOutOfDebt.org](https://getoutofdebt.org/244362/teen-brain-financial-literacy-neuroscience)
- [The neuroscience of adolescent decision-making — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4671080/)
- [Financial behavior among young adult consumers: the influence of self-determination — Self-Determination Theory / Park et al. 2021](https://selfdeterminationtheory.org/wp-content/uploads/2024/03/2021_Park_YC.pdf)
- [Understanding Duolingo's Time Spent Learning Well Metric — Duolingo Blog](https://blog.duolingo.com/time-spent-learning-well/)
- [Older Users and Web Accessibility: Meeting the Needs of Ageing Web Users — W3C WAI](https://www.w3.org/WAI/older-users/)
- [Web Content Accessibility Guidelines (WCAG) 2.2 — W3C](https://www.w3.org/TR/WCAG21/)
- [Gamification in Online Adult Learning — JITE 2024](https://www.jite.org/documents/Vol24/JITE-Rv24Art022Kostas11517.pdf)
- [The Role of Attention in Learning in the Digital Age — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6430174/)
- [Youth, money, and behavior: the impact of financial literacy programs — Frontiers in Education 2024](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1397060/full)
