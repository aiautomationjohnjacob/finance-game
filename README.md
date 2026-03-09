# FinanceGame — Learn Money, Play Smart

A free, browser-based financial literacy game for ages 13–50+. No signup, no ads, no downloads — open in any browser and play.

**Live:** https://aiautomationjohnjacob.github.io/finance-game/

---

## What It Teaches

Players navigate a life-sim where every month brings income, obligations, and unexpected events. The persistent consequence loop — debt you don't pay keeps growing — makes financial reality tangible in a way that quizzes cannot.

**V1 modules:**
- **Budget Baseline** — income, fixed expenses, cash flow
- **Credit Cards & Emergency Fund** — APR, minimum payments, debt clock slider (the "aha moment")
- **Debt Strategies** — avalanche vs. snowball side-by-side comparison
- **Index Funds** — index vs. stock-picker race, fee compounding visualization
- **401(k) & Employer Match** — match capture — highest-ROI action available
- **Mortgages** — amortization breakdown, fixed vs. ARM comparison
- **Stock Simulator** — buy/sell simulated stocks with seeded price movements
- **Life Event Cards** — 20 scenario cards (job loss, medical bills, raises, market crashes, and more)

**V2 (planned):** Options (the wheel strategy), futures with margin call simulation.

---

## How to Play

1. Open https://aiautomationjohnjacob.github.io/finance-game/ in any browser
2. Answer 5 placement questions → choose a starting scenario
3. Each turn = 1 month: receive income → pay obligations → respond to life events → make surplus allocation decisions
4. Track your net worth over 24+ months

No account required. Progress saves automatically in your browser via localStorage.

**Export/Import your save** — use the Save/Load buttons in the dashboard to back up or transfer progress.

---

## For Teachers

See [teachers.html](https://aiautomationjohnjacob.github.io/finance-game/teachers.html) for:
- **Teacher one-pager** — 50-minute class session plan
- **Jump$tart Coalition Standards Crosswalk** (6th Edition)
- **Module discussion guides** for all 8 content areas
- Suggested assessment approaches (no grading of game performance)

The game aligns with all 6 Jump$tart standards and covers the personal finance requirements in 30 states that now mandate graduation coursework.

---

## Starting Scenarios (verified against Fed SCF 2022)

| Scenario | Cash | Debt | Monthly Income |
|----------|------|------|---------------|
| Teen (Jordan) | $500 | $0 | $800 (part-time) |
| Young Adult (Alex) | $2,000 | $26,000 student loans | $3,500 |
| Adult (Morgan) | $8,000 | $220,000 mortgage | $6,500 |

---

## Technical Details

- **Stack:** Vanilla HTML5 / CSS3 / JavaScript (ES6+) — no build step required
- **Libraries:** Chart.js + Alpine.js, vendored locally (works offline)
- **Storage:** localStorage + Export/Import (no server, no accounts)
- **Accessibility:** WCAG 2.2 AA compliant (SC 2.5.8, 2.4.11, 2.4.13, 2.5.7)
- **Tested:** 34/34 automated Playwright tests passing across all 10 milestones

To run locally: `open index.html` in any browser, or serve with any static file server.

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Financial Math Accuracy

All simulations use standard formulas at real-world rates:
- APR: 24–25% (CFPB 2025 market rate — no softening)
- Mortgage payment: standard amortization formula (verified: $300k @ 7% 30yr = $1,996/mo)
- Market simulation: seeded pseudo-random walk (consistent within a session)

---

## Design Principles

- **No hard game-over states** — coaching screens instead of punishment
- **No pure-random cards** — shuffled deck prevents repeats
- **First decision within 60 seconds** — no tutorial wall
- **Just-in-time instruction** — financial concepts taught at the moment of decision (48% larger effect per Kaiser & Menkhoff, World Bank WPS8161)
- **Free forever** — no ads, no paywalled content, no accounts required

---

## Sustainability

Free for students and teachers. Future funding via credit union sponsorships ($500–$5,000/yr) and financial literacy grants (FINRA Foundation, NEFE, CalMoneySmart). See `decisions.md` for full GTM strategy.

---

## License

MIT. Free to use, fork, and adapt for educational purposes.
