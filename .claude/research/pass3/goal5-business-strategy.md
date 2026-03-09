# Goal 5 — Business Strategy (Pass 3 Final)

*Research date: 2026-03-09. Devil's advocate stress-test of Pass 1 and Pass 2 findings.*

---

## Stress-Test Results

### 1. The Credit Union Sponsorship Model — How Long Did Banzai Actually Take?

**Finding:** Banzai.org was founded in 2007. Their first product launched October 31, 2007. By the following spring (roughly 6 months post-launch), they were in approximately 40% of Utah high schools. Their credit union/bank sponsor model is confirmed at scale: 800+ sponsor institutions, 50% of all U.S. high schools, 10,000+ schools total.

**What this means for timeline:** Banzai did not start with credit union sponsors on day one. They went school-direct first (Utah), proved teacher adoption, then layered the sponsor model on top. The 2008 financial crisis accelerated their momentum by making financial literacy suddenly urgent — a favorable external event they could not have predicted.

**Critical gap:** No public data exists on when Banzai signed their first credit union deal or how many schools they had at that moment. The available evidence shows they grew school adoption first in a single state, then scaled sponsorships. This is the correct sequence: proof of teacher adoption precedes sponsor sales.

**Realistic timeline for a solo developer:**
- Months 1–3: Launch, organic adoption, 0 sponsor conversations
- Months 3–6: With 200–500 teachers using the tool, begin first 3–5 CU conversations
- Months 4–8: First signed deal (small CU, under $300M assets, marketing director has spending authority, $500–$1,000 deal, 6–14 week cycle from first contact to signature)
- Month 12: 5–10 CU sponsors is an achievable target if teacher adoption is demonstrable

**Verdict:** The model is real and proven. The timeline to first revenue is 6–9 months post-launch minimum. Anyone expecting revenue in the first 90 days will be disappointed. This is a slow-burn institutional channel, not a B2C conversion funnel.

---

### 2. Teacher Infrastructure on Day One — Necessary or Premature Optimization?

**Finding:** The "launch-without-teachers error" is the most empirically documented failure mode for free EdTech tools (Northwestern University research; EdSurge Nov 2024). NGPF's own success is inseparable from their teacher support materials — they produced a 16-page Jump$tart crosswalk, unit plans with lesson-level time estimates, and downloadable materials before meaningful scale.

**The real question is scope:** A full-scale teacher infrastructure would include a standards crosswalk (Jump$tart National Standards, 6 topics × multiple outcomes), a lesson guide with discussion questions for each game module, a pacing guide, and a "share with your department" one-pager. The NGPF crosswalk model runs 16 pages.

**Time estimate for a solo developer:**
- Jump$tart National Standards crosswalk: 1–2 days (standards are publicly available; it's a mapping exercise, not original writing)
- Discussion guide for each module (5 tiers × 3–5 questions each): 1 day
- Teacher one-pager (what the game covers, how to use it, no-account play): 4 hours
- Total: 3–4 working days for minimum viable teacher materials

**Verdict: This is not premature optimization. It is a 3–4 day insurance policy against the most common EdTech failure mode.** A teacher who discovers the game on launch day and finds no classroom materials bookmarks it and never returns. A teacher who finds a crosswalk and discussion guide uses it that week. The asymmetry is extreme. Build the minimal set (crosswalk + one discussion guide per module + one-pager) before launch.

**What can wait:** A teacher dashboard, progress tracking, class management tools, full standards alignment reports — these are Month 4+ features. Day-one teacher infrastructure is documents, not software.

---

### 3. Show HN Traffic — Does the Audience Convert to Financial Literacy Users?

**Finding:** Confirmed traffic data from Show HN front-page posts:
- Median successful Show HN front-page appearance: 3,500–8,000 unique visitors in 24–48 hours
- Top-of-front-page placement: 20,000–30,000 visitors (rare)
- Typical pattern: massive 24-hour spike → 100–150 daily visitors → slow decay over weeks

**Audience demographics:** HN readership is primarily engineers and technical founders, concentrated in California, US-dominant (largest single cluster), with strong secondary clusters in UK, Germany, Canada. macOS users dominate. This is not the financial literacy game's primary target audience (teens, young adults, teachers).

**However, the HN audience is useful for a different reason than direct conversion:**
1. Engineers share tools with family and friends — secondary diffusion to non-engineer audience
2. Teachers and educators do read HN (the "Show HN: I made a sandbox game to help with financial planning" post from 2021 reached HN front page and generated comments from teachers)
3. HN coverage triggers secondary pickup — Product Hunt, newsletters like TLDR, Indie Hackers — which collectively reaches a broader audience than HN alone
4. Feedback quality from HN is high: you will receive detailed, critical, and accurate feedback on game mechanics, math correctness, and UX — all valuable early

**The conversion problem is real:** An audience of engineers will not organically become the teacher distribution channel you need. A successful Show HN post gets you 5,000–20,000 one-time visitors with a ~20% engagement rate (those who do more than land and leave). That is 1,000–4,000 engaged visitors. If 2% become repeat users, that is 20–80 return users. This is a launch signal, not a user base.

**Verdict:** Show HN is the right launch channel for a solo developer with no existing audience — no karma requirement, builder-made tools are welcomed, feedback is high quality. But it generates awareness and feedback, not sustained teacher adoption. It is the starting gun, not the race itself. Use it to get your first 20 real users and a batch of quality feedback. Do not expect it to produce your first credit union sponsor.

**The correct complementary channel:** Post simultaneously to r/Teachers (more lenient on sharing, directly relevant audience) and LinkedIn with teacher-focused framing. A single tech-educator with 5,000 followers sharing the tool is worth more than a front-page HN post for teacher adoption.

---

### 4. Free Tool, No Accounts — How Does Any User Base Get Built?

**The problem stated plainly:** Zero email list. Zero ability to contact past users. Zero retention mechanism beyond bookmarking. Zero data on who is using the tool. This describes Wikipedia, Desmos, the New York Times Spelling Bee (pre-paywall), and every state financial literacy resource page. These tools are not small.

**How tools with this model build an audience:**

1. **SEO compound effect:** Each month of organic traffic + backlinks from resource lists builds domain authority. The game does not need to retain users in the traditional sense if search traffic is continuously sending new users. Financial literacy is a perennial search category — "how does compound interest work," "what happens if I only pay minimums," "personal finance game for students" — these searches happen year-round, every year, from new people who just turned 16 or just got their first credit card.

2. **Directory listings as permanent referral traffic:** A listing in Jump$tart Clearinghouse, CFPB educator tools, Common Sense Education, and Teachers Pay Teachers generates steady inbound teacher traffic indefinitely. These are permanent referrals, not one-time spikes.

3. **Teacher word-of-mouth has a longer half-life than consumer word-of-mouth:** A teacher who uses the game in September shares it at a department meeting in October, a colleague uses it in November, that colleague shares it at a January professional development day. The diffusion cycle is months, not hours. A no-account tool that teachers find useful will grow through this channel steadily, without any mechanism for the developer to track or accelerate it.

4. **Classroom use creates a natural return trigger:** A teacher who uses the game in their fall personal finance unit will search for it again the following fall. They do not need to be on an email list. The game needs to be findable (SEO + directory listings) and stable (always-on hosting).

5. **The retention metric that matters for this model:** Not day-7 or day-30 retention in the consumer app sense, but "teacher re-adoption rate" — how many teachers who used it last semester use it again. This is unmeasurable without accounts, but it is the right north star.

**Verdict:** The no-account model trades short-term retention metrics for long-term institutional embeddedness. This is the right trade for a school-facing tool. The growth mechanism is SEO + directory listings + teacher word-of-mouth, not email marketing or push notifications. The downside is that you cannot measure or accelerate it easily. The upside is that it compounds without ongoing effort and eliminates all privacy/FERPA friction.

---

### 5. Fiscal Sponsorship — How Long, and Is There a Faster Path?

**Finding — CRITICAL UPDATE:** Open Collective Foundation, cited as a fiscal sponsor option in Passes 1 and 2, dissolved effective December 31, 2024. It is gone. All Pass 1/2 references to it are invalid.

**Active alternatives (confirmed 2025–2026):**
- **Fractured Atlas:** Approval within a few days, max 2 weeks. No application fee. Primary focus is arts, but they sponsor technology projects with a public benefit mission. Rush review service available.
- **Social Good Fund:** Response within 5 business days, approval within ~1 month. No application fee. Accepts ~100 new projects per year from ~1,000 applications — 10% acceptance rate. Accepts education technology projects.
- **Fiscal Sponsorship Allies:** 501(c)(3) public charity, Model C fiscal sponsorship, software-powered process, wide mission range.
- **Edward Charles Foundation:** 501(c)(3) registered in 41 jurisdictions, has relationships with other fiscal sponsors for referrals.

**Fastest path:** Fractured Atlas — days to approval, no fee, accepts technology projects. Apply immediately after launch. The 5–8% fee on funds received is the only cost.

**The faster path to grant eligibility than fiscal sponsorship:** Target grants that explicitly accept fiscal sponsors (Rose Foundation, FINRA Foundation when submitting concept form) rather than waiting for 501(c)(3) incorporation (12–18 months minimum, $300–$600 filing cost). Fiscal sponsorship is available within weeks and unlocks the same grants.

**Verdict:** Fiscal sponsorship is fast (days to weeks, not months). The blocker identified in Pass 2 is real but not as severe as framed. Apply to Fractured Atlas on launch day or the week before. The dissolved OCF is a trap — do not reference it. Social Good Fund is a legitimate but competitive alternative (10% acceptance rate).

---

### 6. Worst Case: 500 Users. Then What?

**The actual failure mode to avoid:** 500 total users (not 500 teachers, not 500 weekly active users — 500 people who played once) with no measurable teacher adoption and no repeat use. This is the outcome of a tool that launched without teacher materials, was not listed in any directory, and got a one-time HN spike with no secondary diffusion.

**What 500 users actually means in different compositions:**
- 500 random visitors who played once → worthless for credit union pitch
- 50 teachers who used it in at least one class → credible pilot proof
- 5 teachers in 3 different states, with one who can write a testimonial → barely credible
- 500 students through 20 classrooms with one teacher who has documented outcomes → strong pilot

**Minimum viable traction for a credit union pitch:** See section below. The number itself matters far less than the story around it.

**If the worst case happens:** 500 users, no teacher adoption, no secondary pickup after HN. The correct response is:
1. Do not approach credit unions — you have nothing credible to offer
2. Submit to Jump$tart Clearinghouse immediately (if not already done) — this is the single highest-leverage free action
3. Identify 3–5 financial literacy teachers on LinkedIn/TikTok and send them a direct message with the URL — personal outreach to motivated teachers is more effective than any marketing channel at 500 users
4. Check the game's SEO footprint — if "financial literacy game" searches don't surface the game in the first 3 pages, fix the on-page SEO and publish 2 content posts targeting teacher-intent queries
5. Re-evaluate in 60 days before any sponsor outreach

---

## Realistic Timeline to First Revenue

Based on evidence from Banzai's growth trajectory, credit union sales cycles, and EdTech adoption patterns:

| Milestone | Realistic Timeframe |
|-----------|-------------------|
| Launch | Day 0 |
| 50 teachers using the tool | Month 1–3 (with Jump$tart listing + r/Teachers + teacher outreach) |
| 200 teachers using the tool | Month 3–6 |
| First credit union conversations | Month 3–4 (begin when you have 50+ teachers) |
| First signed CU deal ($500–$1,000) | Month 6–9 (6–14 week sales cycle from first contact) |
| 5 CU sponsors ($2,500–$5,000/year total) | Month 9–15 |
| FINRA Foundation concept form submission | Month 4–6 (requires fiscal sponsor in place) |
| FINRA grant decision | Month 8–14 (FINRA responds within 1 month to concept form, full proposal takes additional months) |
| $10,000+ annual recurring revenue | Month 12–18 |

**The hard truth:** First revenue is 6–9 months away at minimum, and $10K+ ARR is a 12–18 month project. Anyone planning to cover even modest hosting costs from credit union revenue in the first 6 months should have a bridge plan (personal funds, small donations, or a fiscal sponsor in place to receive any early grants).

**Hosting costs reality check:** A static web game (HTML/CSS/JS, no backend) hosted on Netlify, Vercel, or GitHub Pages costs $0–$20/month. The first credit union deal at $500/year more than covers costs. The financial urgency is low; the timeline pressure is about impact, not survival.

---

## Teacher Infrastructure: Day 1 vs Later

### What must exist on day one (3–4 working days to produce):

1. **Jump$tart National Standards crosswalk** — A table mapping each game module to the Jump$tart standard it addresses. The standards are public (6 topics, multiple benchmarks per topic). This is a mapping exercise, not original research. Output: a single downloadable PDF or Google Doc linked from the site. **Time: 1–2 days.**

2. **Discussion guide** — 3–5 discussion questions per game module (not per level — per topic: credit cards, debt, stocks, mortgage, options, futures). Format: one-page printable per module. **Time: 1 day.**

3. **Teacher one-pager** — What the game covers, how to use it without accounts, grade level suitability, privacy statement (no student data collected), and a link to the above materials. **Time: 4 hours.**

4. **"Classroom mode" language on the site** — A section of the landing page explicitly addressed to teachers. This costs nothing but signals that the tool is classroom-ready. **Time: 2 hours.**

### What can wait (Month 3+):

- Teacher dashboard / progress tracking (requires backend — do not build yet)
- State-by-state standards crosswalks (do national/Jump$tart first, expand to individual states as those states' teachers start using the tool)
- Lesson plans / full pacing guides (these are nice-to-have; the discussion guide is sufficient for day one)
- Curriculum integration documents for specific textbooks or courses

**Verdict:** Do not launch without the 4 day-one items. Do not build a teacher dashboard before you have teachers. The sequence is: documents → directory listings → teacher adoption → then software features for teachers.

---

## Launch Sequence (First 30 Days)

### Pre-launch (1–2 weeks before public launch):

- [ ] Produce teacher materials (crosswalk + discussion guide + one-pager) — 3–4 days
- [ ] Submit to Jump$tart Clearinghouse — self-serve, 20 minutes to submit; review takes 1–3 weeks
- [ ] Submit to CFPB educator tools page — submit during beta so listing goes live at or near launch
- [ ] Submit to Common Sense Education — review process; submit early
- [ ] Apply for Fractured Atlas fiscal sponsorship — days to approval
- [ ] Identify 10 financial literacy teacher accounts on LinkedIn and TikTok to contact at launch

### Launch day:

- [ ] Post Show HN — title should describe what it does and who it's for: "Show HN: Free financial literacy game for high school students – no accounts, no ads"
- [ ] Post to r/Teachers — frame as sharing a free classroom resource, not promoting a product
- [ ] Post to r/personalfinance — this will likely be removed by automoderator unless account has history; use as a test, not a primary channel
- [ ] Direct message the 10 teacher contacts identified pre-launch with a personal note, not a broadcast
- [ ] Tweet / LinkedIn post if developer has existing audience

### Week 2:

- [ ] Respond to all HN comments and teacher feedback
- [ ] Fix any bugs surfaced by first wave of users
- [ ] Contact 2 state Jump$tart affiliates (start with states with newest mandates: Indiana, Oregon, Louisiana) and ask for newsletter inclusion

### Week 3–4:

- [ ] Contact 3 small credit unions (under $300M assets) in states with new mandates — ask if they have a financial literacy program for local schools; introduce the game as a free resource they can sponsor
- [ ] Publish one SEO-targeted blog post: "Free financial literacy game for high school classrooms" targeting teacher-intent searches
- [ ] Monitor where traffic is coming from — identify which directory or community drove the most engaged users

---

## First 5 Post-Launch Actions (Priority Ordered)

**Priority 1: Apply for Fractured Atlas fiscal sponsorship**
Do this the week of launch or the week before. It takes days to approve, costs nothing, and unlocks access to every major grant program. Without it, all grant programs are inaccessible. This is the single highest-leverage administrative action.

**Priority 2: Submit to Jump$tart Clearinghouse**
The single highest-leverage distribution action. 51 state affiliates actively use this directory. Teachers searching for classroom tools find it here. It is free, self-serve, and permanent. Submit before or on launch day. The review takes 1–3 weeks, so submit early.

**Priority 3: Direct outreach to 10 financial literacy teachers**
Not broadcast marketing. Individual, personalized messages to teachers already publicly posting about financial literacy education on LinkedIn or TikTok. The goal is 3–5 genuine teacher users in the first 2 weeks who can provide authentic word-of-mouth. One teacher with 5,000 followers sharing the tool is worth more than any advertising.

**Priority 4: Post Show HN + r/Teachers simultaneously on launch day**
HN generates initial visibility, technical feedback, and secondary press coverage. r/Teachers reaches the actual teacher audience directly. Both channels are free, require no existing audience, and take 10 minutes each to execute. The HN post is the launch signal; the r/Teachers post is the teacher acquisition attempt.

**Priority 5: Contact 3 small credit unions in mandate states (start Month 2–3)**
Only after Priority 1–4 are done and the tool has at least 50 documented teacher users. The pitch requires evidence of adoption. The conversation is: "We have [N] teachers using this across [states]. We're offering local credit unions the ability to sponsor the schools in their field of membership — they get CRA credit documentation and co-branded landing page for $[500–1,000]/year." Start with credit unions under $300M in assets in Indiana, Oregon, or Louisiana, where mandates are newest and community institutions are actively looking for financial literacy tools.

---

## Minimum Viable Traction Definition

**For credit union pitch credibility (not VC investment — this is institutional partnership):**

The minimum credible position is not a user count — it is a story:
- At least 3 named teachers in at least 2 different states who have used the game in an actual class
- At least one teacher willing to be quoted or named as a reference
- Jump$tart Clearinghouse listing (signals institutional legitimacy)
- A documented student reach number ("approximately [X] students have played through at least one module")

**Threshold estimate:** 50 documented teacher users + 1,000 estimated student sessions + 1 teacher willing to provide a reference = minimum viable for a small credit union conversation. This is achievable in 2–4 months post-launch with active teacher outreach.

**For FINRA Foundation concept form submission:**
- Fiscal sponsor in place (Fractured Atlas or Social Good Fund)
- Documented impact claim with some evidence (teacher testimonials, session count)
- A measurable research component (even a simple pre/post quiz showing knowledge gain)
- 501(c)(3) eligibility via fiscal sponsor

This does not require large user numbers — FINRA evaluates program design and impact methodology, not scale. A well-designed concept form from a fiscally sponsored project with 200 teacher users and a pre/post quiz component is a legitimate submission.

**For any press or media coverage:**
- A single compelling data point: "X students have learned about compound interest through [game name]"
- A teacher willing to be quoted
- A clean, working URL with no login required

**The 500-user worst case is only fatal if:** there are zero teachers in those 500 and zero repeat sessions. 500 users including 20 teachers and 300 student sessions is a legitimate pilot story.

---

## Final GTM Plan (Definitive)

### Model: Prove adoption with teachers first. Monetize with institutions second.

The Banzai precedent, NGPF model, and EVERFI structure all confirm the same sequence: free to teachers → institutional distribution → sponsor/grant revenue. Reversing this order (seek revenue before adoption) produces nothing because the institutional pitch requires adoption evidence.

### Phase 0 — Pre-Launch (2 weeks before shipping)

**Goal:** Be ready to distribute on day one.

Actions:
1. Produce teacher materials: Jump$tart crosswalk (2 days), discussion guide (1 day), teacher one-pager (4 hours). Host as downloadable PDFs linked from the site.
2. Submit to Jump$tart Clearinghouse. Submit to CFPB educator tools page.
3. Apply for Fractured Atlas fiscal sponsorship.
4. Identify 10 financial literacy teacher accounts (LinkedIn, TikTok) to contact at launch.

Cost: $0. Time: 1.5 weeks.

### Phase 1 — Launch and Seed Adoption (Months 1–3)

**Goal:** 50+ genuine teacher users in at least 3 states.

Actions:
1. Show HN post + r/Teachers post on launch day.
2. Personal outreach to 10 teacher contacts.
3. Contact 2 state Jump$tart affiliates for newsletter mention (Oregon, Indiana — new mandates, active coalitions).
4. Publish 2 SEO blog posts targeting teacher-intent search queries.
5. Fix all bugs surfaced by first wave; iterate on game mechanics based on HN feedback.

**Do not do yet:** Credit union outreach, grant applications (fiscal sponsor may not be approved yet), press pitches.

Success metric: 50 teachers, 1,000 student sessions, 1 teacher testimonial.

### Phase 2 — Institutional Outreach (Months 3–9)

**Goal:** First credit union sponsor. FINRA concept form submitted.

Actions:
1. Begin credit union outreach with adoption evidence in hand. Start with 3 small CUs in mandate states. Pitch: co-branded landing page, CRA documentation, $500–$1,000/year.
2. Submit FINRA Foundation concept form (rolling submission; requires fiscal sponsor in place).
3. Contact remaining state Jump$tart affiliates.
4. Apply to NGPF Arcade listing — requires teacher support materials and quality bar. If listing granted, this is the single highest-leverage distribution event possible.
5. Apply to EdTech Index (ISTE/EdSurge partnership) for listing.

Success metric: 1 signed CU sponsor, FINRA concept form submitted, 200 teachers.

### Phase 3 — Scale Distribution (Months 9–24)

**Goal:** 5–10 CU sponsors, 1,000+ teachers, first grant received.

Actions:
1. Approach state credit union leagues (GoWest, MCUL, CCUA) for "recommended vendor" status — this triggers warm introductions to hundreds of member CUs simultaneously.
2. FINRA grant received (if concept form progressed to full proposal) — use funds to build teacher dashboard (progress tracking, class management).
3. Apply to Rose Foundation Consumer Financial Education Fund when cycle opens.
4. Apply to CalMoneySmart (CA DFPI) when 2026 cycle opens — requires fiscal sponsor serving unbanked Californians.
5. Approach CUNA Strategic Services for listing — this is the Goalsetter model and provides credit union distribution at scale.

Success metric: $5,000–$10,000 annual revenue, 1,000+ teachers, NGPF Arcade listing.

### Sustainability Model (Year 2+)

Revenue streams in priority order:

1. **Credit union sponsorships (primary):** $500–$1,000/year per sponsor × 10–50 sponsors = $5,000–$50,000/year. Covers all hosting and development costs. Proven model.
2. **Foundation grants (secondary):** FINRA ($50K–$100K), Rose Foundation (up to $100K), CalMoneySmart (up to $200K) — applied for sequentially once fiscal sponsorship and adoption evidence exist. Non-recurring but fund major feature development.
3. **Optional donations (supplemental):** Small donation flow after game completion. At 2% conversion and $10 average, needs ~10,000 annual engaged users to generate $2,000. Meaningful at scale, negligible at launch.
4. **District-level premium tier (Year 3+):** If teacher dashboard is built (grant-funded), offer school districts an analytics/reporting tier at $2,000–$5,000/year. Individual teachers remain free forever.

**What this project should explicitly never do:** VC funding, ads, charge individual teachers, build native apps before the web version has proven adoption.

### Critical Risks and Mitigations

| Risk | Probability | Mitigation |
|------|-------------|------------|
| Show HN gets no traction (< 500 visits) | Medium | Launch simultaneously to r/Teachers + teacher outreach; HN is one of 4 launch channels, not the only one |
| Credit union sales stall at "board approval" stage | High at larger CUs | Target only CUs under $300M assets where marketing director has direct authority; build a pipeline of 10 prospects to ensure 1–2 convert |
| Fiscal sponsor application rejected (Social Good Fund has 10% acceptance) | Medium | Apply to Fractured Atlas as primary; Social Good Fund as backup; both accept education technology projects |
| Open Collective Foundation (cited in Passes 1–2) | Already dissolved Dec 2024 | Do not use. Fractured Atlas is the correct primary option. |
| Teacher materials scope creep delays launch | High | Hard cap: teacher materials are documents, not software. 3–4 working days maximum. Ship with minimal viable documents. |
| 501(c)(3) still needed for some grants | Low (fiscal sponsor covers this) | Fractured Atlas provides 501(c)(3) umbrella for all grants that accept fiscal sponsors |
| NGPF listing rejected (quality bar too high) | Medium | Launch first, fix quality issues surfaced by real users, reapply at Month 6 |

---

## Sources

- [Banzai.org — Sponsor Model](https://banzai.org/sponsors)
- [First United Bank + Banzai partnership blog post](https://blog.banzai.org/first-united-bank-makes-award-winning-financial-literacy-program-free-for-local-classrooms/)
- [Banzai founding timeline — Finovate archive](https://finovate.com/category/banzai/)
- [Show HN traffic statistics — marcotm.com](https://marcotm.com/articles/stats-of-being-on-the-hacker-news-front-page/)
- [HN front page postmortem — Indie Hackers](https://www.indiehackers.com/post/front-page-of-hn-the-full-postmortem-traffic-lessons-surprises-cbe9e0a7f6)
- [What happens when you're #1 on Hacker News — levels.io](https://levels.io/hacker-news-number-one/)
- [Show HN: financial planning sandbox game (HN thread, 2021)](https://news.ycombinator.com/item?id=26900079)
- [Fractured Atlas — Fiscal Sponsorship application process](https://www.fracturedatlas.org/fiscal-sponsorship)
- [Fractured Atlas — Application Process timeline](https://fracturedatlas.zendesk.com/hc/en-us/articles/115002837393-The-Application-Process)
- [Social Good Fund — Apply for Sponsorship](https://www.socialgoodfund.org/fiscal-sponsorship/apply-for-sponsorship/)
- [Social Good Fund — FAQ (10% acceptance rate, 5-day response)](https://www.socialgoodfund.org/fiscal-sponsorship/faq/)
- [Open Collective Foundation — Dissolution announcement, effective Dec 31 2024](https://opencollective.com/foundation/updates/announcement-we-are-dissolving-open-collective-foundation-at-the-end-of-this-year)
- [Open Collective Foundation Shutdown Explainer — Community Over Code](https://communityovercode.com/2024/02/open-collective-foundation-shutdown-explainer/)
- [Fiscal Sponsorship Allies — alternative to OCF](https://blog.opencollective.com/fiscal-hosting-options/)
- [NGPF National Standards Crosswalk for Semester Course](https://www.ngpf.org/blog/curriculum-announcements/national-standards-crosswalk-for-ngpf-semester-course/)
- [NGPF Jump$tart Standards alignment blog](https://www.ngpf.org/blog/new-products/curriculum-updates-jumpstart-standards/)
- [PersonalFinanceLab — CRA-Eligible Programs + school sponsor model](https://www.personalfinancelab.com/sponsor-school/)
- [Jump$tart — Financial Literacy Standards crosswalk (PersonalFinanceLab)](https://www.personalfinancelab.com/standards-alignment/national/personal-finance/)
- [EdTech pilot credibility — The Edvocate](https://www.theedadvocate.org/pilot-edtech-product/)
- [EdTech traction metrics — Qubit Capital](https://qubit.capital/blog/how-to-build-investor-trust-edtech)
- [HN audience demographics thread](https://news.ycombinator.com/item?id=4397332)
- [HN traffic analysis — Vincent Schmalbach](https://www.vincentschmalbach.com/analyzing-a-year-of-hacker-news-traffic/)
- [Show HN guidelines — Hacker News](https://news.ycombinator.com/showhn.html)
