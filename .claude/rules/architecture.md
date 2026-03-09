# Architecture Constraints

## Core Requirement: Simple, AI-Buildable
The game MUST be buildable as plain HTML/CSS/JavaScript.
No build tools, no bundlers, no package managers required to run.
Open index.html in a browser → it works.

## Allowed
- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Single-file or multi-file static HTML/JS/CSS
- Inline SVG for graphics
- CSS animations for visual feedback
- localStorage for saving game state
- Chart.js or similar CDN-hosted charting library (one dependency max, loaded via CDN)

## Not Allowed (during initial build)
- React, Vue, Svelte, or any framework requiring npm/build step
- External APIs (no live stock prices, no auth services)
- Databases or server-side code
- Native mobile SDKs

## Simulation Approach
- All financial simulations run in-browser with JS math
- Stock prices: seeded pseudo-random walk, not live data
- Interest calculations: standard amortization formulas in JS
- Portfolio tracking: localStorage or in-memory state

## Progressive Enhancement Path
- Phase 1: Static web app (HTML/CSS/JS)
- Phase 2: PWA wrapper for mobile install
- Phase 3: Optional backend for leaderboards/accounts (future, not now)

## Visual Style
- Flat design, limited color palette
- No images required — use CSS shapes, SVG icons, emoji as fallback
- Must render acceptably on mobile browsers without native app
