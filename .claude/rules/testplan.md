# Test Plan — FinanceGame

All tests run via: `bash scripts/test.sh`
Screenshots saved to: `scripts/screenshots/`
Results JSON saved to: `scripts/test-results/latest.json`

Tests use Playwright (headless Chromium) against a local Python HTTP server.
Server starts on port 8765 for tests, stops after.

---

## Milestone 0 — Project Skeleton
**Target:** `index.html` exists and loads without errors

Tests:
- [ ] `index.html` exists
- [ ] Page loads (HTTP 200)
- [ ] No JS console errors on load
- [ ] Page title is set (not empty)
- [ ] Viewport renders correctly (1280x800 desktop, 390x844 iPhone)

Screenshot: `milestone-0-desktop.png`, `milestone-0-mobile.png`

---

## Milestone 1 — Main Menu / Home Screen
**Target:** Landing screen with game title, description, and "Start" button

Tests:
- [ ] Element with id `main-menu` or class `main-menu` is visible
- [ ] Game title text is present (contains "Finance" or "Money" or "Wealth")
- [ ] At least one button or link to start the game is visible
- [ ] Start button is clickable (no pointer-events: none, not hidden)
- [ ] Page is readable on mobile viewport

Screenshot: `milestone-1-desktop.png`, `milestone-1-mobile.png`

---

## Milestone 2 — Character / Profile Setup
**Target:** Player can enter their name and choose a starting scenario

Tests:
- [ ] Screen reachable after clicking Start
- [ ] Input field for player name is present and focusable
- [ ] At least 2 starting scenarios selectable (e.g., "Fresh Graduate", "Working Adult", "Pre-Retirement")
- [ ] Confirm/Continue button present
- [ ] Player name and scenario saved to localStorage on continue

Screenshot: `milestone-2-desktop.png`

---

## Milestone 3 — Financial Dashboard
**Target:** Main game dashboard showing player's financial snapshot

Tests:
- [ ] Dashboard screen reachable after profile setup
- [ ] Shows current balance (any dollar amount)
- [ ] Shows at least one debt/liability figure
- [ ] Shows current month/year or "Month 1"
- [ ] Navigation to sub-modules is visible (buttons/tabs for: Debt, Investing, Learn)
- [ ] All navigation links are clickable

Screenshot: `milestone-3-desktop.png`, `milestone-3-mobile.png`

---

## Milestone 4 — Credit Card Debt Module
**Target:** Functional credit card debt simulator

Tests:
- [ ] Module reachable from dashboard
- [ ] Shows credit card balance, APR, minimum payment
- [ ] Player can make a payment (input field or buttons)
- [ ] Math verification: if balance=$1000, APR=24%, monthly interest = $20 (±$1)
- [ ] Shows how many months until payoff given minimum payments
- [ ] "What if I pay more?" slider or input changes payoff timeline
- [ ] Consequences shown: paying minimum on $5000 @ 24% APR shows 20+ years to payoff

Screenshot: `milestone-4-desktop.png`

Financial math assertion (tested in JS eval):
```
APR = 24%, balance = 1000, monthly_rate = 0.02, min_payment = max(25, balance*0.02)
Expected interest charge month 1 = 20.00
```

---

## Milestone 5 — Mortgage Module
**Target:** Mortgage explainer + amortization simulator

Tests:
- [ ] Module reachable from dashboard
- [ ] Input: home price, down payment %, loan term, interest rate
- [ ] Shows: monthly payment, total interest paid, amortization breakdown
- [ ] Math verification: $300k loan, 30yr, 7% → monthly payment ≈ $1,996 (±$5)
- [ ] Shows first 12 months of amortization (principal vs interest split)
- [ ] Visual: shows how much of payment goes to interest vs principal in early years

Screenshot: `milestone-5-desktop.png`

Financial math assertion:
```
Principal=300000, rate=7%/12=0.5833%, n=360
Monthly payment = P * r*(1+r)^n / ((1+r)^n - 1)
Expected ≈ $1,996
```

---

## Milestone 6 — Stock Market Simulator
**Target:** Basic simulated portfolio with price movements

Tests:
- [ ] Module reachable from dashboard
- [ ] Shows at least 3 fictional stocks with ticker symbols and prices
- [ ] Player can buy and sell shares (with virtual money)
- [ ] Portfolio value updates after buy/sell
- [ ] Prices change when "Next Month" or "Next Day" is advanced
- [ ] Price simulation is seeded (not random every page load — same session = consistent)
- [ ] Portfolio P&L is calculated correctly

Screenshot: `milestone-6-desktop.png`

---

## Milestone 7 — Stock Options Module (The Wheel Strategy)
**Target:** Options explainer + interactive covered call / cash-secured put demo

Tests:
- [ ] Module reachable (may be locked until stock module is completed)
- [ ] Explains what a call option is (text present)
- [ ] Explains what a put option is (text present)
- [ ] Explains the wheel strategy (text present, mentions covered call AND cash-secured put)
- [ ] Interactive: player can "sell a covered call" on a position they own
- [ ] Shows: premium received, max profit, max loss, breakeven
- [ ] Shows outcome when stock price goes above/below strike at expiration

Screenshot: `milestone-7-desktop.png`

---

## Milestone 8 — Futures Module
**Target:** Futures basics explainer + simple futures simulation

Tests:
- [ ] Module reachable
- [ ] Explains what a futures contract is
- [ ] Explains leverage and margin in futures
- [ ] Shows a simulated futures trade with margin requirement
- [ ] Shows margin call scenario: if price moves against you, explains forced liquidation
- [ ] Appropriately warns about risk (text contains "high risk" or "leverage" warning)

Screenshot: `milestone-8-desktop.png`

---

## Milestone 9 — Life Event Scenario Cards
**Target:** Random life events that affect the player's financial state

Tests:
- [ ] At least 8 distinct scenario cards exist in the game data
- [ ] Cards cover: job loss, medical bill, car breakdown, raise, tax refund, credit card offer, market crash, housing opportunity
- [ ] Events trigger at appropriate game milestones (not all at once)
- [ ] Player must make a financial decision in response to each event
- [ ] Decision outcomes affect dashboard numbers correctly

Screenshot: `milestone-9-event-card.png`

---

## Milestone 10 — Progression & Completion
**Target:** Player can complete a full game loop (Month 1 → Month 24+)

Tests:
- [ ] Player can advance through at least 24 months
- [ ] Financial state changes realistically over time (debt decreasing, investments growing if good decisions)
- [ ] End state or summary screen reachable
- [ ] Summary shows: net worth change, decisions made, grade/score
- [ ] Game can be restarted from summary screen
- [ ] localStorage save/load works: refreshing page mid-game restores state

Screenshot: `milestone-10-summary.png`

---

## Regression Tests (run every milestone)

These run on every test invocation regardless of milestone:
- [ ] No broken internal links (all href="#section" or onclick handlers exist)
- [ ] No uncaught JavaScript exceptions on any screen
- [ ] All money displays use currency formatting ($X,XXX.XX)
- [ ] Mobile viewport (390px wide) does not have horizontal scroll
- [ ] Page loads in under 3 seconds on local server

---

## Test Result Format

`scripts/test-results/latest.json`:
```json
{
  "timestamp": "ISO string",
  "milestone": 3,
  "milestone_name": "Financial Dashboard",
  "passed": 5,
  "failed": 1,
  "warnings": 1,
  "tests": [
    { "name": "Dashboard screen reachable", "status": "PASS" },
    { "name": "Shows current balance", "status": "FAIL", "error": "Element #balance not found" },
    { "name": "Mobile no horizontal scroll", "status": "WARN", "message": "minor overflow detected" }
  ],
  "screenshots": ["milestone-3-desktop.png", "milestone-3-mobile.png"],
  "overall": "FAIL"
}
```
