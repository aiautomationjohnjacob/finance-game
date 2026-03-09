# Goal 3 — Audience & Pedagogy (Pass 3 Final)

---

## Stress-Test Results

### Question 1: If teen education decays, why build for teens at all?

**Verdict: Keep teens in scope, but demote them from co-equal to secondary audience.**

The decay argument (knowledge fades within 12–18 months, no behavioral change at 16) is real and documented. But the strongest counterargument is not pedagogical — it is strategic and structural:

**The pipeline argument:** Financial institutions invest heavily in teen financial products (Greenlight, Step, Chase First Banking, Apple's teen card) precisely because habit and brand formation at 13–18 predicts adult loyalty. The same logic applies to a game: a player who learns with FinanceGame at 16 and finds it useful at 22 is a retained adult user, not a failed teen intervention. The product's lifetime value is not measured at the teen's graduation day.

**The EVERFI longitudinal finding:** A three-year longitudinal study (MassMutual Foundation / EVERFI, 2025) found that *multiple* financial education interventions — not single-shot courses — produce lasting improvement in financial confidence that persists even after courses end. The design implication is not "skip teens" but "make teens want to return." A teen who completes Tier 1 at 16, gets a credit card offer at 18, and returns to FinanceGame for Tier 2 at that teachable moment is exactly the use case the game's life-event card structure is designed to support.

**The market access argument:** State financial literacy mandates now cover 26 states (up from 8 in 2020), creating 20,000+ teachers who need curriculum tools. Teen users are the most accessible institutional channel in the GTM plan (Goal 5). Cutting teens cuts the primary B2B2C distribution path.

**The anxiety reduction argument:** Even if teens don't retain specific formulas, early exposure reduces financial anxiety and builds schema familiarity — the "I've seen this before" effect that accelerates adult learning when concepts recur. Frontiers in Education (2024) found that youth financial programs consistently improve financial self-efficacy even when knowledge gains decay.

**Design consequence:** Teens should NOT be designed for as learners who will change behavior at 16. They should be designed for as learners who will: (a) have reduced anxiety, (b) have vocabulary familiarity, and (c) return to the game at the teachable moment. The game must be compelling enough that they come back voluntarily at 18+ — which means the teen experience must feel rewarding, not remedial.

---

### Question 2: Is there RCT evidence for self-directed financial literacy games producing measurable outcomes in adults?

**Verdict: The honest answer is "limited, not conclusive" — but this is not fatal to the project.**

**What exists:**
- The EFFECT study (0.313 SD, 2024) remains the strongest RCT evidence, but it is teacher-facilitated, school-based, 15-year-olds, four European countries. It is not evidence for self-directed adult apps.
- The Happy Life Game (Springer, 2021) is a financial literacy game designed for young adults that was piloted in a self-directed format. Pilot results showed positive engagement, flow, and discussion — but the sample was small and highly educated, no RCT was conducted, and no long-term behavioral outcomes were measured.
- PersonalFinanceLab (2024) reports measurable pre/post knowledge gains across investing, credit, and savings/income for students in self-directed use — but these are corporate-reported metrics, not independent RCTs.
- SSRN (2025 working paper, "Simulating Financial Behaviors and Decision-Making") found financial knowledge weakly but positively correlated with game performance, but no significant relationship between game performance and self-reported financial behavior. This is a direct warning: knowledge gains from self-directed play may not translate to behavior change.

**The survivorship bias problem:** The studies that exist on self-directed financial games almost uniformly test motivated participants (students enrolled in a course, people who opted into a study). The population that voluntarily downloads a financial literacy game is already more motivated than average — which inflates apparent effectiveness. FinanceGame's effectiveness on the general adult population is genuinely unknown.

**What this means for design:** The absence of strong RCT evidence for self-directed adult financial games is a gap in the literature, not proof of ineffectiveness. The mechanisms that made the EFFECT study work (consequential decisions, immediate feedback, narrative context) can be replicated in a self-directed format. The key uncertainty is retention without institutional accountability — no teacher, no classroom, no grade. This elevates the importance of intrinsic motivation design (narrative, progress visibility, practical relevance) over extrinsic compliance.

**Revised claim for FinanceGame:** The game can legitimately claim "game-based financial education approach with RCT support in school settings" but should not claim proven behavior change in self-directed adult users. The honest design goal is knowledge gain + self-efficacy increase, with behavior change as a hoped-for downstream effect that the game's teachable-moment structure makes more plausible.

---

### Question 3: Do adults (30–50) actually play educational games voluntarily?

**Verdict: They do, but the conditions are specific and demanding.**

**What the evidence shows:**
- YNAB reports a 90% user retention rate through education-first gamification — but YNAB is a paid subscription tool that users have already committed money to. Voluntary free-to-play educational engagement is a much harder bar.
- Gamified fintech broadly reports 40% retention increases (industry sources, 2024), but these studies almost always test captive audiences (employer wellness programs, bank app users) rather than voluntary cold-start educational games.
- Serious games research (Frontiers in Education, 2025 systematic review) confirms that voluntary participation in serious game programs is achievable — studies have recruited adult participants via social media with no monetary incentives — but sample sizes are small and dropout rates are not prominently reported.
- The vocational/professional upskilling literature (PMC systematic review on gamification in VET, 2023) finds adults 30–50 engage with game-based learning when: (a) the content directly maps to a current professional challenge, (b) the time investment is proportionate to the perceived payoff, (c) the aesthetic is not juvenile.

**The critical condition:** Adults in this age range do not play educational games out of curiosity. They play them because a problem is pressing and the tool appears to address it directly. The entry point matters enormously: "Play a financial game" will not convert a 42-year-old. "Find out if your retirement is actually on track" or "See what that options trade would have cost you" will.

**Implication for FinanceGame:** Morgan (42) will not reach the game through organic app discovery. Morgan reaches the game through a specific pain point: a Reddit thread about refinancing, a teacher recommendation, a credit union link, a news article about retirement readiness. The GTM plan must drive contextual entry (deep links into specific modules) rather than expecting adults to start at the main menu out of general interest.

---

### Question 4: What are the actual behavioral clusters, and can onboarding design for them?

**Verdict: Three clusters are well-supported; onboarding can address them without adding complexity.**

**The three clusters (ScienceDirect ML study, 2025, n=1,067 adults):**

| Cluster | Size | Profile | Design implication |
|---|---|---|---|
| Support-needed | ~60% | Low financial knowledge, low confidence, avoids financial decisions, high financial anxiety | Needs safe failure environment, reduced jargon, anxiety-first framing, immediate wins |
| Transitional | ~30% | Moderate knowledge, inconsistent behavior, knows "what" but not "how," selective engagement | Needs practical scenario modeling, decision-support tools, clear consequence feedback |
| High-literacy | ~10% | High knowledge, confident, mostly makes good decisions but has specific gap areas | Needs expert content access, no condescension, can go directly to Tier 4–5, skip-ahead option |

**Key finding:** These clusters are not age-correlated. A 16-year-old can be in the transitional cluster; a 45-year-old can be in the support-needed cluster. Age is a weak axis. Behavioral confidence and prior product experience are strong axes.

**Onboarding design implication:** The current "pick a starting scenario" onboarding (Teen / Young Adult / Adult) is a proxy for behavioral cluster, but a blunt one. The 5–7 question placement assessment is a better behavioral classifier if it asks about:
1. "Have you ever carried a credit card balance?" (product experience signal)
2. "Do you know roughly what your net worth is?" (financial engagement signal)
3. "When you hear the word 'investing,' do you feel confident or anxious?" (confidence signal)

These three questions, framed as a "financial snapshot" not a test, are sufficient to route users into one of three tracks without requiring users to self-identify as beginners. This avoids the shame trigger that causes the support-needed cluster (the largest cluster, 60%) to drop out of tools that make their lack of knowledge visible upfront.

**Behavioral approach labels (internal use, not shown to users):**
- Track A: "Start Here" (support-needed) — anxiety-reduction first, gentle scaffolding, micro-session focus
- Track B: "Fill the Gaps" (transitional) — scenario modeling, decision tools, practical consequence feedback
- Track C: "Go Deep" (high-literacy) — direct access to Tier 3+, embedded calculators, skip scaffolding

---

### Question 5: What does WCAG 2.2 AA actually require that a typical web dev would miss?

**Verdict: Four requirements specific to WCAG 2.2 are high miss-rate items for game developers.**

**Standard requirements (known, but commonly botched in games):**
- Color contrast 4.5:1 minimum for normal text, 3:1 for large text (18pt+ or 14pt+ bold). This is the most frequently violated WCAG criterion: WebAIM's Million study found contrast issues on 96% of homepages tested. Games are worse — red/green feedback (gain/loss coloring) is the most common failure point. Red-green colorblind users (8% of males) cannot distinguish loss from gain if color alone is used.
- Keyboard navigability: every interactive element reachable by keyboard. Games routinely create keyboard traps — modals, card overlays, and custom UI elements that can be tab-entered but not tab-exited.
- Scalable text: no fixed-height containers that clip text at 200% browser zoom. This is routinely broken in card-based layouts.

**WCAG 2.2 NEW requirements (high miss-rate, introduced October 2023):**

| Criterion | Requirement | What developers miss |
|---|---|---|
| 2.5.8 Target Size (Minimum) — AA | Touch targets must be at least 24×24 CSS pixels; if smaller, must have 24px offset spacing from adjacent targets | Developers set 24×24 and consider it done, but miss the *spacing* rule: a 20×20 button is compliant only if no other target is within its 24px radius. Game button clusters (multiple choices on a life event card) frequently fail this. |
| 2.4.11 Focus Not Obscured (Minimum) — AA | When a component receives keyboard focus, it must not be entirely hidden by author-created content | Game overlays and sticky headers that slide over focused elements. Full-screen card overlays that hide the previously focused element are a direct violation. |
| 2.4.12 Focus Not Obscured (Enhanced) — AAA | Focused component not partially hidden (AAA, but many aim for it) | Distinguished from 2.4.11: AA requires "not entirely hidden," AAA requires "not partially hidden." AA is the requirement; AAA is best practice. |
| 2.4.13 Focus Appearance — AA | Focus indicator must have minimum pixel area and 3:1 contrast ratio | Developers often use the browser default focus ring, which fails in high-contrast or custom-color-palette contexts. The new criterion requires the focus indicator itself to meet contrast requirements — the indicator must be visible against both the background AND the focused element. |

**Game-specific items most commonly missed:**
1. No time limits: games routinely add timed mechanics (e.g., "decide in 30 seconds"). WCAG 2.2 SC 2.2.1 requires that any time limit can be turned off, adjusted, or extended. For FinanceGame specifically: if any life event card has a decision timer, it must have a pause mechanism.
2. Flashing/animation: CSS animations used for feedback (pulsing alerts, gain/loss animations) must not flash more than 3 times per second (SC 2.3.1). The `prefers-reduced-motion` CSS media query must suppress all non-essential animation.
3. Drag operations: WCAG 2.2 SC 2.5.7 requires that any drag operation also have a single-pointer alternative. If the payment slider on the debt module is drag-only, it fails. It needs +/- buttons or a numeric input as alternative.
4. Focus order in dynamically rendered content: when a life event card appears (dynamically inserted into DOM), focus must move to the card, not remain on the triggering button behind the overlay. This is routinely missed in JS-rendered card systems.

**Practical WCAG 2.2 AA checklist for FinanceGame (what to audit before launch):**
- [ ] All text: 4.5:1 contrast minimum (use Colour Contrast Analyser or browser DevTools)
- [ ] Red/green financial feedback: always paired with an icon or label (never color-only)
- [ ] Touch targets: minimum 24×24px with 24px offset spacing (44×44 preferred for primary actions)
- [ ] Keyboard trap test: tab through every screen, every modal, every card overlay
- [ ] Focus indicator: visible at 3:1 contrast against surrounding colors on every interactive element
- [ ] Focus not obscured: no sticky element covers the focused component (test by zooming to 200%)
- [ ] Timer check: if any decision card has a time limit, add pause/extend control
- [ ] Drag alternatives: every slider has numeric input or button alternative
- [ ] Reduced motion: `@media (prefers-reduced-motion: reduce)` suppresses all decorative animation
- [ ] Dynamic content focus: card overlay appearance moves focus to the card; dismissal returns focus to trigger
- [ ] 200% zoom: no horizontal scroll at 200% zoom on 1280px viewport
- [ ] Screen reader test: VoiceOver (iOS), TalkBack (Android) can read all financial figures and navigate all screens

---

### Question 6: Who is the primary target user?

See "Final Primary Audience" section below.

---

## Case For/Against Teen Inclusion

### Case FOR (keeping teens in scope)

1. **Pipeline value, not immediate impact.** Teens who engage with FinanceGame at 16–18 are the game's future adult users. The product is designed to grow with them (five tiers), so retaining a teen user is not a short-term intervention — it is a long-term relationship.
2. **Teachable moment design mitigates decay.** The life event card system (credit card offer at 18, student loan decision before college) means teen users encounter content at the moment they actually face the decision — which is when the World Bank meta-analysis shows 48% larger effects. This is not advance classroom instruction; it is contextual just-in-time intervention.
3. **Distribution access.** State mandates cover 26 states. Teachers are the fastest distribution channel. B2B2C via school/credit union sponsorship (Goal 5) only works if the product is viable for teen classroom use. Cutting teens cuts the primary GTM path.
4. **Market size and motivation.** 68% of teens report wanting financial education; only 31% can access it. This is a large, underserved, motivated segment. The desire-to-access gap is a direct opportunity.
5. **Anxiety reduction has real value.** Even if knowledge decays, reduced financial anxiety among teens — measured by EVERFI's longitudinal study as persistently improved financial self-efficacy — produces better adult decision-making when real decisions arrive.

### Case AGAINST (dropping teens)

1. **Low immediate behavioral impact.** The neuroscience is clear: prefrontal cortex immaturity means teens make financial decisions primarily with the limbic system. Games cannot override this developmental reality.
2. **Design tension.** Optimal teen UX (short sessions, badges, streaks, low text) is in tension with optimal adult UX (long sessions, calculators, professional aesthetic). Building for both requires deliberate design bifurcation.
3. **Decay problem is real.** If a teen completes Tier 1 and doesn't return, the knowledge decays and nothing changed. The game must solve for retention, not just completion.

### Resolution

Keep teens in scope as a **secondary audience with institutional access priority**. Primary design and pedagogical decisions should optimize for Alex (25) and Morgan (42). Teen-specific features (streaks, badge emphasis, shorter sessions, simpler narrative) should be additive overlays, not foundational constraints on the adult experience. The onboarding placement assessment is the mechanism that bifurcates the experience without requiring two separate products.

---

## Evidence for Self-Directed Adult Financial Games

**Available evidence (honest assessment):**

| Evidence Type | Finding | Limitation |
|---|---|---|
| EFFECT RCT, 2024 (0.313 SD) | Game-based financial education works in school settings | Teacher-facilitated, 15-year-olds, European schools — not self-directed adults |
| Happy Life Game pilot, 2021 | Positive engagement, flow, discussion in self-directed young adult play | Small n, highly educated sample, no behavioral outcomes, no RCT |
| YNAB retention data (90%) | Gamified finance education retains adult users long-term | Paid product with sunk-cost commitment; not comparable to free voluntary app |
| NEFE survey (54% reported improvement) | Self-reported financial literacy improvement from gamified apps | Self-report bias; not a controlled experiment |
| PersonalFinanceLab pre/post tests (2024) | Measurable knowledge gains in self-directed student use | Institution-enrolled students (captive audience), not general public |
| SSRN working paper, 2025 | Financial knowledge positively correlated with game performance | No significant relationship between game performance and actual financial behavior |
| Serious games VET review (PMC, 2023) | Voluntary participation achievable in adult serious games without incentives | Small samples, specific professional contexts |

**Honest conclusion:** There is no strong RCT evidence that a self-directed financial literacy game for voluntary adult users produces measurable real-world behavior change. The evidence base supports:
- Knowledge gains in game-based financial education (confirmed)
- Improved self-efficacy and reduced anxiety (confirmed in youth; directional for adults)
- Engagement and retention with gamified financial tools when properly motivated (confirmed in fintech apps)
- Behavior change from self-directed free-to-play consumer apps specifically: **not established**

This is an honest gap. The design response is not to abandon the project but to: (a) not overclaim in marketing, (b) design for the mechanisms most likely to bridge knowledge to behavior (teachable moments, consequential simulation, real scenario modeling), and (c) treat FinanceGame as a first-intervention tool that should direct users to professional resources for major decisions.

---

## Final Primary Audience (Definitive)

**Primary audience: Alex — ages 22–35, actively facing financial decisions, with real stakes and no trusted guidance.**

The evidence across all three passes converges on this:

- Prefrontal cortex fully developed at 25 → behavior change from learning is neurologically possible
- Real, active financial pressures exist: student debt, first investments, credit management, 401(k) decisions
- Pass 2's World Bank finding (teachable-moment effect, 48% larger impact when education occurs at the point of real decision) is maximized for this age group — they are facing the decisions right now
- The 2014 meta-analysis showing financial education explains only 0.1% of behavioral variance applies to advance instruction; Alex's decisions are concurrent with learning, which changes the mechanism
- Behavioral cluster distribution suggests ~60% of any audience is "support-needed" — Alex is more likely to be transitional or high-literacy, meaning content can be more consequential and less hand-holding

**Secondary audience: Morgan — ages 36–52, mid-career, with expensive knowledge gaps in mortgages, investing, and tax strategy.**

Morgan is harder to acquire, harder to retain, and has fewer tailored game-based options in the market (making the gap real). Design must respect Morgan's time and expertise. Morgan's highest-value content is Tiers 3B–5. Morgan's dropout risk is highest in the first two minutes if the game feels juvenile.

**Tertiary audience: Jordan — ages 15–21, seeking exposure, habit formation, and anxiety reduction.**

Jordan's primary value to the product is institutional access (school mandates, teacher distribution). Jordan's primary benefit from the product is schema familiarity and anxiety reduction, not immediate behavior change. Jordan should be a first-class citizen of the UI but should not drive core pedagogical tradeoffs.

---

## Final Pedagogical Approach (Definitive)

### The five non-negotiable design rules (all three passes agree):

**Rule 1: Consequential simulation over trivia.**
Players must make decisions that produce visible financial consequences, not answer quiz questions about definitions. The debt clock, the amortization slider, the portfolio outcome — these are the pedagogical instruments. A "what is compound interest?" quiz question is near-worthless compared to watching a simulated $5,000 balance grow to $12,000 at 18% APR over five years while the player chose minimum payments.

**Rule 2: Teachable-moment structure.**
Life event cards must fire at the point of real decision encounter, not in advance. The credit score module fires when the player gets a simulated credit card offer, not as Lesson 3 in a curriculum sequence. This is the mechanism that produces the 48% effect-size advantage of contextual over advance instruction.

**Rule 3: Three behavioral tracks, not three age groups.**
Onboarding routes users by financial confidence and prior experience, not by age. The "Teen / Young Adult / Adult" starting scenario selection sets narrative framing and financial starting state. The 5-question placement assessment sets content entry point. These are two separate decisions with two separate mechanisms.

**Rule 4: Spaced repetition via scenario recurrence.**
The 80% mastery gate prevents progression; it does not prevent decay. Life event cards must revisit earlier concepts in later tiers (compound interest reappears as a mortgage amortization problem at Tier 3B; credit utilization reappears as a business credit line decision at Tier 4). This is the only mechanism in the architecture that addresses knowledge decay without requiring a formal re-test module.

**Rule 5: Skip scaffolding without penalty.**
Morgan must be able to bypass Tier 1–2 content immediately. The placement assessment must route correctly. A 42-year-old who lands in the budgeting module will leave. High-literacy users (10% of audience) who are routed correctly to their actual gap content are the most monetizable and most vocal word-of-mouth advocates for the product.

### The revised session length design targets (evidence-adjusted):

| Audience | Session target | Design basis |
|---|---|---|
| Jordan (16) | 3–6 minutes, multiple per day | Duolingo micro-session data; revised down from Pass 1's 5–8 |
| Alex (25) | 10–18 minutes | Commute-length mobile learning; practical task completion |
| Morgan (42) | 10–20 minutes | Not 15–25: cold-start adults begin shorter, expand with motivation; 25 min assumes established habit |

---

## Accessibility Requirements Checklist

This is the definitive implementation checklist synthesized across all three passes.

### Typography and Readability

- [ ] Minimum 16px body font everywhere; 18px preferred for primary reading content
- [ ] Line height: 1.5× minimum for body text
- [ ] Maximum line length: 65–75 characters for reading blocks (prevents cognitive overload at adult reading levels)
- [ ] Grade 6–8 reading level for foundational content; Grade 9–11 for intermediate; adult for advanced (use Hemingway App to check)
- [ ] No all-caps text blocks (reduces reading speed by ~13%)

### Color and Contrast

- [ ] Text: 4.5:1 contrast ratio against background (use browser DevTools or Colour Contrast Analyser)
- [ ] Large text (18pt+ or 14pt+ bold): 3:1 minimum
- [ ] Non-text UI components (icons, chart axes, button borders): 3:1 minimum
- [ ] Financial gain/loss: never use color as the only differentiator — pair with icon (↑/↓) or label ("GAIN" / "LOSS")
- [ ] Test all screens against Deuteranopia (red-green) and Protanopia simulation (browser extensions available)

### Touch and Pointer Targets

- [ ] Primary action buttons: 44×44 CSS px minimum (iOS HIG standard; more forgiving than WCAG 2.5.8 minimum)
- [ ] Secondary controls: 24×24 CSS px minimum with 24px spacing offset from adjacent targets (WCAG 2.5.8)
- [ ] Payment slider (debt module): must have numeric input or +/- button alternative — drag-only fails WCAG 2.5.7
- [ ] Minimum 8px spacing between adjacent touch targets; 12–16px preferred

### Keyboard and Focus (WCAG 2.2 new requirements)

- [ ] All interactive elements keyboard-reachable (Tab, Shift+Tab navigation)
- [ ] No keyboard traps: every modal, card overlay, and dropdown can be exited with Escape or Tab-out
- [ ] Focus indicator visible at 3:1 contrast against both background and element color (WCAG 2.4.13)
- [ ] Focus not entirely hidden when element is focused behind sticky header or overlay (WCAG 2.4.11)
- [ ] When card overlay appears: focus moves to the card; when dismissed: focus returns to the trigger element
- [ ] Tab order matches visual reading order on all screens

### Animation and Motion

- [ ] All decorative animation suppressed by `@media (prefers-reduced-motion: reduce)`
- [ ] No content flashes more than 3 times per second (SC 2.3.1)
- [ ] Debt clock and compound interest animations: provide a static fallback (chart showing final state without animation) under reduced-motion

### Time Limits

- [ ] If any life event card has a decision timer: provide pause, extend, or disable option (WCAG SC 2.2.1)
- [ ] Recommendation: do not use decision timers in FinanceGame — the adult audience (Morgan) will find time pressure alienating, not engaging

### Zoom and Scaling

- [ ] 200% browser zoom: no horizontal scroll on 1280px viewport; all text remains readable
- [ ] No fixed-pixel-height containers that clip text at zoom (use min-height instead of height)
- [ ] System font stack (already decided in Goal 4) avoids the font substitution accessibility issues of custom web fonts

### Screen Reader

- [ ] All chart visualizations have text alternatives (summary of key figures in plain text adjacent to chart)
- [ ] Financial figures use `aria-label` with plain language ("Net worth: forty-two thousand dollars", not "$42,000")
- [ ] Dynamic content changes (new life event card, balance update): announced via `aria-live` region
- [ ] Icon-only buttons have `aria-label` text
- [ ] Progress bars have `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

### Cognitive Accessibility

- [ ] No more than 3 options on a single decision screen (reduces choice paralysis for support-needed cluster)
- [ ] Error states: plain language explanation + specific correction instruction (not just "Error" or a red border)
- [ ] Consistent navigation: the same back button / home button appears in the same position on all screens
- [ ] No autoplay audio or video

---

## Sources

- [The impact of an online game-based financial education course: Multi-country experimental evidence — ScienceDirect / Journal of Comparative Economics 2024](https://www.sciencedirect.com/science/article/pii/S0147596724000441)
- [Youth, money, and behavior: the impact of financial literacy programs — Frontiers in Education 2024](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1397060/full)
- [Is School-Based Financial Education Effective? Immediate and Long-Lasting Impacts on High School Students — Oxford Economic Journal 2023](https://academic.oup.com/ej/article/133/651/1147/6840224)
- [The Relationship Between Financial Education in Young Adults and Financial Literacy — Accounting Perspectives, Wiley 2025](https://onlinelibrary.wiley.com/doi/full/10.1111/1911-3838.12366)
- [New Study by EVERFI and the MassMutual Foundation Underscores the Critical Importance of Multiple Financial Educational Interventions — BusinessWire 2025](https://www.businesswire.com/news/home/20250818305073/en/New-Study-by-EVERFI-and-the-MassMutual-Foundation-Underscores-the-Critical-Importance-of-Multiple-Financial-Educational-Interventions)
- [Teen Financial Literacy in 2025 — EVERFI State of Financial Literacy Research Report](https://everfi.com/wp-content/uploads/2025/03/state-of-financial-literacy-research-report-2025.pdf)
- [Development and Pilot Testing of a Financial Literacy Game for Young Adults: The Happy Life Game — Springer 2021](https://link.springer.com/chapter/10.1007/978-3-030-75142-5_4)
- [Simulating Financial Behaviors and Decision-Making: The Relationship between Decision Quality, Financial Literacy and Perceived Self-Efficacy — SSRN 2025](https://papers.ssrn.com/sol3/Delivery.cfm/fbeb8176-9a96-487b-8227-576fa1d14680-MECA.pdf?abstractid=5924122&mirid=1)
- [Modeling financial literacy through explainable machine learning and behavioral segmentation — ScienceDirect 2025](https://www.sciencedirect.com/science/article/pii/S2451958825003410)
- [A Behavioral Science Approach to Financial Literacy Games — Center for Advanced Hindsight, Duke University](https://advanced-hindsight.com/wp-content/uploads/2022/03/CAH-NOVA.pdf)
- [Gamification and Game Based Learning for Vocational Education and Training: A Systematic Literature Review — PMC 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9838474/)
- [WCAG 2.2 Checklist: Complete 2026 Compliance Guide — Level Access](https://www.levelaccess.com/blog/wcag-2-2-aa-summary-and-checklist-for-website-orders/)
- [What's New in WCAG 2.2 — W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [WCAG 2.2 Updates and Code Examples — Deque University](https://dequeuniversity.com/resources/wcag-2.2/)
- [Accessibility Terms for Game Developers: A WCAG 2.1 AA Glossary — Filament Games](https://www.filamentgames.com/blog/accessibility-terms-for-game-developers-a-wcag-2-1-aa-glossary/)
- [WCAG 2.2 AA Compliance Guide: Accessible Touchscreen Displays 2026 — TouchWall](https://touchwall.us/blog/wcag-2-2-aa-accessibility-touchscreen-displays-complete-guide/)
- [YNAB User Retention and Gamified Budgeting — Gamified Budgeting Apps: Making Finance Management Entertaining and Effective (Smartico)](https://www.smartico.ai/blog-post/gamified-budgeting-apps)
- [A New Playbook for Youth Banking: What Fintechs Got Right — The Financial Brand](https://thefinancialbrand.com/news/gen-z-banking/a-new-playbook-for-youth-banking-what-fintechs-got-right-and-how-to-catch-up-193618)
- [A review of youth financial education: Effects and evidence — CFPB](https://files.consumerfinance.gov/f/documents/cfpb_youth-financial-education_lit-review.pdf)
- [The Long-Term Impact of High School Financial Education: Evidence from Brazil — CFPB Working Paper](https://files.consumerfinance.gov/f/documents/cfpb_bruhn-et-al-conference.pdf)
- [The use of serious games for psychological education and training: a systematic review — Frontiers in Education 2025](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1511729/full)
