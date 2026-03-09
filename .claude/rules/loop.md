# Autonomous Loop Orchestrator Instructions

This file is read at the start of EVERY loop iteration.
You are the orchestrator. Work autonomously. Make decisions. Build. Test. Commit. Repeat.

---

## Your Job Each Iteration

1. **READ STATE** — Check what phase you're in and what was last done
2. **DO THE NEXT THING** — One meaningful unit of work per iteration
3. **TEST** — Run the browser test suite if app files exist
4. **EVALUATE** — Look at test results and screenshots, make judgment calls
5. **COMMIT** — Commit all progress with a descriptive message
6. **UPDATE STATE** — Write what you did to `.claude/STATE.md`

---

## How to Determine Current State

Read these files in order:
1. `.claude/STATE.md` — what was done last, what's next
2. `.claude/rules/phases.md` — what phase we're in
3. `.claude/rules/decisions.md` — what decisions are locked

If `.claude/STATE.md` doesn't exist, you are at the very beginning. Start with RESEARCH SYNTHESIS.

---

## Phase Decision Tree

```
STATE says RESEARCH_PENDING:
  → Check if all 6 pass1 research files exist in .claude/research/pass1/
  → If yes: synthesize into decisions.md, move to BUILDING
  → If no: write a note in STATE.md about what's missing, skip to BUILDING with best available info

STATE says BUILDING (or no STATE yet, decisions.md has content):
  → Read decisions.md to understand what we're building
  → Read testplan.md to know what the current build target is
  → Check which milestone in testplan.md is not yet PASSING
  → Build the next milestone
  → Run: bash scripts/test.sh
  → Read test results from scripts/test-results/
  → Look at screenshots in scripts/screenshots/
  → Fix any FAILING tests before moving to next milestone
  → Commit when a milestone passes

STATE says MILESTONE_FAILED:
  → Read the last test results
  → Look at the screenshot
  → Diagnose and fix
  → Re-run tests
  → If still failing after 2 fixes: write diagnosis to STATE.md, mark as BLOCKED, stop iteration

STATE says BLOCKED:
  → Write a clear explanation of what's blocked and why to STATE.md
  → Do NOT loop further — stop and let user know
```

---

## Decision Authority

You have full authority to make these calls WITHOUT asking the user:
- Which specific UI layout to use (within the architecture constraints)
- What color palette, typography, or visual style
- How to structure JavaScript modules within a single file
- Which exact wording to use for financial explanations
- Order of screens and navigation flow
- Specific game mechanic parameters (starting balance, APR rates used, stock price volatility)
- Whether to use emoji, SVG, or CSS shapes for icons
- How to structure localStorage save data

You must NOT change these without user input:
- The fundamental tech stack (must stay HTML/CSS/JS, no frameworks)
- The core financial topics to cover (set in decisions.md)
- The free-to-play, no-ads model
- The audience (13–50+)

---

## Test Evaluation Rules

After running `bash scripts/test.sh`, read `scripts/test-results/latest.json`.

**If a test FAILS:**
- Look at the screenshot in `scripts/screenshots/`
- Read the error message
- Fix the specific issue — do not rewrite everything
- Re-run tests before committing

**If ALL tests in the current milestone PASS:**
- Commit with message: `milestone: <milestone-name> — all tests passing`
- Update STATE.md to next milestone
- If this was the last milestone: write COMPLETE to STATE.md

**Judgment calls on test failures:**
- Console errors that don't affect user-visible functionality → WARN, don't block
- Missing localStorage → acceptable, treat as fresh start
- Layout slightly off on mobile → note it, don't block milestone
- Financial math wrong → ALWAYS fix before passing milestone
- Broken navigation (can't reach a screen) → ALWAYS fix before passing milestone

---

## Commit Discipline

- Commit after every meaningful unit: a new screen, a passing milestone, a bug fix
- Message format: `type: short description`
  - `feat: add debt simulator screen`
  - `fix: correct APR calculation formula`
  - `milestone: credit-card-module — all tests passing`
  - `research: synthesize pass1 findings into decisions`
- Push to origin after every commit: `git push origin main`

---

## File You Must Update Every Iteration

Write to `.claude/STATE.md` at the END of every iteration:

```markdown
# Loop State

## Last Updated
[timestamp]

## Current Phase
[RESEARCH_PENDING | BUILDING | MILESTONE_FAILED | BLOCKED | COMPLETE]

## Last Action
[what you did this iteration]

## Current Milestone
[which testplan milestone you're working on]

## Last Test Result
[PASS / FAIL / NOT_RUN]

## Next Action
[what the next iteration should do]

## Notes
[anything relevant for next iteration]
```

---

## If You Are Truly Stuck

Write to STATE.md with phase BLOCKED and a clear diagnosis.
Do not thrash. Do not retry the same fix 3 times.
One diagnosis, one attempt, then BLOCKED.
