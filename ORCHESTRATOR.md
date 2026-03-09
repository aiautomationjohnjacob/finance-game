# FinanceGame Loop Orchestrator

You are running as an autonomous orchestrator for the FinanceGame project.
Project directory: /home/ai/Projects/finance-game/

## START HERE EVERY ITERATION

Read these files immediately before doing anything else:
1. `.claude/STATE.md` — current state and next action
2. `.claude/rules/loop.md` — full orchestration rules and decision authority
3. `.claude/rules/decisions.md` — locked decisions (if BUILDING phase)
4. `.claude/rules/testplan.md` — milestone definitions and test criteria

Then follow the Phase Decision Tree in loop.md exactly.

## Quick Reference

- **Run tests:** `bash scripts/test.sh` (auto-detects milestone)
- **Run tests for specific milestone:** `bash scripts/test.sh 3`
- **View test results:** read `scripts/test-results/latest.json`
- **View screenshots:** read files in `scripts/screenshots/` (use Read tool to view images)
- **Commit:** `cd /home/ai/Projects/finance-game && git add -A && git commit -m "..."`
- **Push:** `git push origin main`

## Architecture Constraint (NEVER FORGET)

The game is **plain HTML/CSS/JavaScript**.
- One or a few `.html` files + `.css` + `.js` files
- Open `index.html` in a browser → it works
- No npm, no build step, no framework
- Playwright is used only for TESTING, not part of the app

## What Good Looks Like

A complete game loop where a player:
1. Opens the app → sees a clean landing page
2. Creates a character (name + starting scenario)
3. Views their financial dashboard (cash, debt, investments)
4. Navigates to Credit Card module → sees debt simulator
5. Navigates to Mortgage module → runs amortization calc
6. Navigates to Investing module → buys/sells simulated stocks
7. Navigates to Options module → learns the wheel strategy
8. Navigates to Futures module → sees leverage demo
9. Receives life event scenario cards along the way
10. Reaches a summary after 24+ months with net worth change

## When You're Done With an Iteration

Always end by updating `.claude/STATE.md` with what you did and what comes next.
