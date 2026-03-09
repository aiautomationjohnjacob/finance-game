# Goal 4 — Platform & Tech Stack (Pass 1)

**Research Date:** 2026-03-08
**Constraint:** Must open as `index.html` in a browser — no npm, no build tools, no bundlers.

---

## Vanilla JS Capability Assessment

### What Can Be Built Without Any Framework

Vanilla HTML/CSS/JavaScript is fully capable of delivering every core feature this game requires. The browser runtime in 2025/2026 is extraordinarily powerful — there is no feature on the game's planned roadmap that requires a framework or build tool.

**Confirmed capable in vanilla JS:**

- **Scenario card system** — DOM manipulation with `createElement`, `classList`, event listeners. Cards can be data-driven from a plain JS array of objects.
- **Portfolio simulation** — Arrays of asset objects, arithmetic on closing prices, `Math.random()` for price drift, `requestAnimationFrame` for animation loops.
- **Debt simulator / amortization** — Pure arithmetic: `payment = P * (r * (1+r)^n) / ((1+r)^n - 1)`. A complete amortization schedule iterates this loop. No library needed.
- **Compound interest** — `A = P * (1 + r/n)^(n*t)`. Single-line formula, trivially implemented.
- **Progress tracking / leveling** — Plain JS objects + localStorage serialized as JSON.
- **Tab/screen navigation** — CSS `display:none`/`display:block` toggling, or CSS custom properties for animated transitions. Full SPA feel without a router library.
- **Modal dialogs and overlays** — Pure HTML + CSS + 10 lines of JS.
- **Responsive layout** — CSS Grid and Flexbox, CSS custom properties, media queries. No CSS framework needed.
- **Animations** — CSS keyframes, CSS transitions, and the Web Animations API (`element.animate()`). All built into modern browsers.

**Where vanilla JS has friction (but not blockers):**

- **State management at scale** — Without a reactive framework, updating the DOM when data changes requires manual work. Manageable if a simple publish-subscribe pattern or module pattern is adopted from the start. Alpine.js solves this for ~15 KB.
- **Charts/graphs** — The Canvas 2D API can draw charts from scratch, but Chart.js removes hundreds of lines of boilerplate for zero tradeoff at this project scale.
- **Complex animations** — CSS handles 90% of cases well. GSAP is optional enhancement only.

**Verdict:** Vanilla JS is the correct base. The project does not need React, Vue, or any SPA framework. The browser itself provides everything required.

---

## CDN Library Evaluation

All libraries below can be loaded via a `<script src="...">` tag. No npm, no bundler, no CLI required.

---

### Chart.js — RECOMMENDED

**CDN URL:**
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
```

**Bundle size:** ~200 KB minified, ~60–70 KB gzipped. (Full UMD build; tree-shaking available only via npm, but the CDN UMD build is a one-time download cached by the browser.)

**Assessment:**
- Renders line, bar, pie, doughnut, scatter, and bubble charts via `<canvas>`.
- Responsive by default, with built-in animations.
- Simple declarative API: pass a config object with `type`, `data`, and `options`.
- Ideal for portfolio performance graphs, debt payoff curves, compound interest visualizations, and Monte Carlo result distributions.
- Works perfectly from a CDN `<script>` tag — the global `Chart` constructor is available immediately.
- Active maintenance, v4.x as of 2024–2025.
- **For this project:** Chart.js is the right charting choice. It covers every visualization need in the game roadmap.

**Use cases in the game:**
- Portfolio value over time (line chart)
- Asset allocation (doughnut chart)
- Debt amortization curve (line chart showing principal vs. interest)
- Monte Carlo simulation fan chart (line chart, multiple datasets)

---

### Alpine.js — RECOMMENDED (optional but valuable)

**CDN URL:**
```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js"></script>
```

**Bundle size:** ~15 KB minified and gzipped.

**Assessment:**
- Alpine.js is a lightweight (~15 KB) reactive framework that works entirely in HTML attributes: `x-data`, `x-bind`, `x-on`, `x-model`, `x-show`, `x-if`, `x-for`.
- No build step required. The CDN script is self-contained.
- Described as "Vue written in HTML" — you declare reactive state directly on DOM elements.
- Zero configuration: `<div x-data="{ score: 0 }"><button @click="score++">Add</button><span x-text="score"></span></div>` works out of the box.
- Ideal for managing UI state: showing/hiding panels, toggling modals, binding form inputs to simulation variables.
- Used successfully in production apps as a jQuery-like enhancement layer without a full SPA architecture.

**Verdict for this project:** Alpine.js is the "sweet spot" option. It eliminates the most painful parts of raw DOM manipulation (manual event binding, manual re-rendering) while adding only 15 KB and zero build complexity. It is particularly well-suited for AI-assisted development because its HTML-first syntax is easy to read and modify.

---

### Phaser.js — NOT RECOMMENDED

**CDN URL:** `https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js`

**Bundle size:** ~980 KB minified (full build). Custom builds can reach ~150 KB gzipped, but require a build pipeline.

**Assessment:**
- Phaser is a full 2D game engine with physics, scene management, sprite sheets, tilemaps, WebGL/Canvas rendering, input handling, audio, and particle systems.
- It is designed for games with sprites, tiles, and real-time physics — things like platformers, top-down shooters, and arcade games.
- For a **card-and-simulation financial literacy game**, Phaser is significant overkill. None of its core value propositions (sprite physics, scene graph, WebGL rendering) apply.
- The ~980 KB full CDN bundle is heavy for a project that only needs DOM cards and canvas charts.
- Phaser 4 (a full TypeScript rewrite with WebGPU focus) is expected in late 2025, but remains unavailable.

**Verdict:** Do not include Phaser. The game is DOM-based, not canvas-sprite-based. The added weight and complexity would hinder AI-assisted development with no benefit.

---

### GSAP (GreenSock Animation Platform) — OPTIONAL

**CDN URL:**
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
```

**Bundle size:** ~60 KB minified (core), ~23 KB gzipped.

**Licensing:** As of late 2024, Webflow acquired GSAP and made it **100% free for all uses including commercial**, with all plugins (SplitText, MorphSVG, ScrollTrigger, etc.) now freely available.

**Assessment:**
- GSAP is the industry standard for high-performance JavaScript animation. Used on 11M+ sites.
- Provides smooth, cross-browser tweens for any CSS property, SVG attribute, or JS value.
- Particularly good for: card flip animations, number counters, progress bar fills, scenario reveal sequences, and dashboard "level up" celebrations.
- CSS animations alone can handle most of the game's needs. GSAP is an enhancement, not a requirement.
- Zero dependencies; works from a CDN script tag.

**Verdict:** Include GSAP if the team wants polished animations (card reveals, score counters, transitions). It is small, free, and simple. However, it is genuinely optional — CSS keyframes and transitions can cover most cases.

---

### Tailwind CSS via CDN — CONDITIONAL RECOMMENDATION

**CDN URL (v4 Play CDN):**
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

**Alternative (v3, stable for production-like use):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@3/dist/tailwind.min.css">
```

**Assessment:**
- **Play CDN (v4):** The official v4 CDN is explicitly labeled "for development and experimentation only." It works by scanning the DOM at runtime and injecting styles — this is not a stable approach for a shipped product and degrades performance.
- **v3 full CDN:** The complete pre-compiled Tailwind stylesheet is ~3.7 MB uncompressed, ~350 KB gzipped. This loads every utility class whether used or not. Acceptable for a game that doesn't serve millions of users but heavier than necessary.
- **Tailwind's real value** (CLI purging to produce tiny CSS files) requires npm and a build step — exactly what this project avoids.
- For a simple game, a hand-crafted CSS file using CSS custom properties (variables) for the design system is more maintainable, smaller, and requires no CDN dependency.

**Verdict:** Skip Tailwind for this project. Use hand-written CSS with CSS custom properties for color palette, spacing, and typography tokens. The CSS needed for a card-and-simulation game is not large enough to justify Tailwind's trade-offs in a no-build context.

---

### Other Libraries Worth Noting

| Library | CDN Size (gzip) | Verdict |
|---|---|---|
| **Confetti.js** (`canvas-confetti`) | ~6 KB | Great for celebration effects — recommended for "level up" moments |
| **Howler.js** | ~10 KB | Audio library if game sounds are needed |
| **Day.js** | ~2 KB | Date formatting if needed (alternative to Moment.js) |
| **Lodash (individual functions)** | Variable | Avoid — native JS handles all needed array/object operations |
| **jQuery** | ~30 KB | Avoid — adds nothing over vanilla JS in 2025 |

---

## PWA Feasibility

### Can a Static HTML/CSS/JS App Be a PWA?

**Yes, fully.** A PWA is defined by behavior, not by framework. Any static HTML/CSS/JS app can be made installable as a PWA.

### Minimum Requirements for Installation

To be installable on both iOS and Android, the app needs exactly three things:

1. **`manifest.json`** (linked from `index.html`):
   ```json
   {
     "name": "Finance Quest",
     "short_name": "FinQuest",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#1a1a2e",
     "theme_color": "#0f3460",
     "icons": [
       { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
       { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
     ]
   }
   ```

2. **A service worker** (`sw.js`) — even a minimal one that caches the app shell enables offline mode and satisfies Android's install prompt:
   ```js
   self.addEventListener('install', e => {
     e.waitUntil(caches.open('v1').then(c => c.addAll(['./', './index.html'])));
   });
   self.addEventListener('fetch', e => {
     e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
   });
   ```

3. **HTTPS** — required in production. For local development, `localhost` is sufficient.

### Platform Behavior

**Android:**
- Chrome, Firefox, Edge, and Samsung Internet all support automatic "Add to Home Screen" prompts triggered via the `beforeinstallprompt` event.
- The installed PWA opens in its own window (no browser chrome) in `standalone` display mode.
- Works offline via service worker cache.

**iOS (Safari 16.4+):**
- No automatic install prompt. Users must manually tap Share → "Add to Home Screen."
- Once installed, app opens in standalone mode (no Safari URL bar).
- Service workers function on iOS 16+ with some limitations.
- Push notifications supported since iOS 16.4 (requires home screen install and user permission).
- **Key iOS limitation:** Cache storage limit is approximately 50 MB per PWA, and cached data may be evicted if the PWA is unused for 7+ days. For a game that stores state in localStorage/IndexedDB (not service worker cache), this is not a concern.
- **Key iOS limitation:** No `beforeinstallprompt` — cannot programmatically trigger install. Must guide users with instructional UI ("Tap Share then Add to Home Screen").

### Local Development (Open `index.html` in Browser)

The PWA features (service workers, install prompt) require a server. However, the game logic itself must work when `index.html` is opened directly as a file (`file:///...`). Service worker registration will simply be skipped in that context. This is the correct approach: design the game to work without a service worker, then layer the PWA manifest and service worker on top for the hosted version.

### Verdict

PWA wrapping is entirely feasible with minimal effort. The service worker adds ~30 lines of boilerplate. The manifest is a simple JSON file. No framework required. The main user experience limitation is iOS's manual install process.

---

## Financial Math in JS

### What Math Is Needed and Can JS Handle It?

JavaScript's `Math` object and 64-bit IEEE 754 floating point arithmetic are sufficient for all financial calculations this game requires. There are no precision or performance limitations that would necessitate a specialized math library.

---

### Amortization (Loan / Debt Simulator)

**Formula:**
```
monthlyPayment = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
```
Where P = principal, r = monthly interest rate (annual / 12), n = number of payments.

**JS implementation:** `Math.pow()` handles the exponentiation. The full amortization schedule (balance, interest paid, principal paid per period) is a simple loop, trivially fast even for 360 iterations (30-year mortgage).

---

### Compound Interest

**Formula:**
```
A = P * (1 + r/n)^(n * t)
```
Where P = principal, r = annual rate, n = compounding periods per year, t = years.

**JS implementation:** One line using `Math.pow()`. No library needed.

---

### Black-Scholes (Options Pricing)

**Formula:** Requires the cumulative normal distribution function (CDF), which is not built into JavaScript's `Math` object. However, the CDF can be approximated with a simple polynomial (Abramowitz and Stegun approximation, error < 1.5×10⁻⁷), implemented in ~15 lines of vanilla JS.

```js
function normCDF(x) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const poly = t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  const result = 1 - (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x) * poly;
  return x >= 0 ? result : 1 - result;
}
```

With this helper, Black-Scholes call/put prices, delta, gamma, and theta (the Greeks) are all straightforward arithmetic — no library required. Multiple open-source vanilla JS implementations exist on GitHub and CodePen confirming this.

---

### Monte Carlo Simulation (Stock Price / Portfolio)

**Method:** Geometric Brownian Motion (GBM) is the standard model:
```
S(t+1) = S(t) * exp((μ - σ²/2) * dt + σ * √dt * Z)
```
Where μ = drift (expected return), σ = volatility, Z = standard normal random variable.

**Generating a standard normal Z:** The Box-Muller transform converts two uniform random numbers from `Math.random()` to a standard normal variate — ~5 lines of JS, no library.

**Browser performance:** 1,000 simulations × 252 trading days = 252,000 iterations. This runs in under 10 ms on any modern device. Even 10,000 simulations (2.52M iterations) completes in well under 100 ms. For a game context (not a production risk system), 500–1,000 paths is visually compelling and computationally trivial.

**Rendering limitation:** Plotting 10,000 simulation paths on a Chart.js line chart would create rendering lag (too many datasets). Practical approach: run 1,000 simulations, display 20–50 representative paths, and show summary statistics (median, 5th/95th percentile bands).

---

### Summary: JS Financial Math Coverage

| Calculation | Vanilla JS Feasible? | Notes |
|---|---|---|
| Compound interest | Yes | `Math.pow()`, one line |
| Simple/compound inflation | Yes | Same formula |
| Loan amortization schedule | Yes | Loop with `Math.pow()` |
| Mortgage payment | Yes | Standard formula |
| Black-Scholes options pricing | Yes | Needs ~15-line CDF approximation |
| Monte Carlo (GBM) | Yes | Box-Muller + loop; 1K paths < 10ms |
| Portfolio return / Sharpe ratio | Yes | Basic arithmetic |
| Time value of money (NPV, IRR) | Yes | Iterative; IRR needs Newton-Raphson (~10 lines) |
| Tax-advantaged account growth | Yes | Modified compound interest |

**No external math library is required.** `Math.js` or similar libraries would add weight without benefit for the formulas this game uses.

---

## Stack Recommendation

### Recommended Stack: "Vanilla-Plus"

The simplest viable stack that delivers all planned features:

#### Core (Zero CDN Dependencies)
- **HTML5** — semantic markup, `<canvas>` for charts
- **CSS3** — CSS custom properties for the design system, CSS Grid + Flexbox for layout, CSS keyframes for animations
- **Vanilla JavaScript (ES2020+)** — all game logic, all financial math, DOM manipulation, state management via a simple module pattern

#### Optional CDN Enhancements (loaded via `<script>` / `<link>`)

| Library | CDN Tag | Purpose | Required? |
|---|---|---|---|
| **Chart.js 4** | `<script src="cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js">` | Portfolio graphs, debt curves, Monte Carlo visualization | Strongly recommended |
| **Alpine.js 3** | `<script defer src="cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js">` | Reactive UI state (show/hide panels, bind inputs) | Recommended |
| **GSAP 3** | `<script src="cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js">` | Card reveal, score counter, celebration animations | Optional |
| **canvas-confetti** | `<script src="cdn.jsdelivr.net/npm/canvas-confetti@1/dist/confetti.browser.min.js">` | Achievement celebrations | Optional |

#### PWA Layer (for deployed version)
- `manifest.json` — app identity, icons, display mode
- `sw.js` — minimal service worker for offline caching
- Two PNG icons (192px and 512px)

#### Storage
- **localStorage** — primary game state storage (portfolio, debt, progress, settings). 5 MB limit is more than sufficient; game state as JSON will be under 50 KB.
- **IndexedDB** — if a transaction history grows large (hundreds of entries), migrate that specific store to IndexedDB while keeping lightweight state in localStorage. Not needed at launch.

---

### File Structure

```
/finance-game/
  index.html          ← single entry point; open this in any browser
  manifest.json       ← PWA manifest
  sw.js               ← service worker (optional for local dev)
  /css/
    main.css          ← all styles, CSS custom properties
  /js/
    app.js            ← main entry, init
    state.js          ← localStorage read/write, state shape
    scenarios.js      ← scenario card data and logic
    portfolio.js      ← portfolio simulation math
    debt.js           ← amortization, debt simulator
    options.js        ← Black-Scholes, simplified options
    montecarlo.js     ← GBM simulation
    charts.js         ← Chart.js wrapper functions
    ui.js             ← DOM helpers, Alpine components
  /assets/
    icon-192.png
    icon-512.png
```

Each JS file uses `export`/`import` (ES modules) or is simply organized as self-contained scripts loaded in order. ES modules work from `file://` in modern browsers when served locally, or via any static file server.

---

### Why Not a Framework?

| Consideration | Verdict |
|---|---|
| **React/Vue/Svelte** | All require npm and a build step. Eliminated by constraint. |
| **Preact CDN** | ~4 KB, works from CDN. But Alpine.js is simpler for this use case and better suited to AI-assisted development of HTML-first UI. |
| **htmx** | Server-side-first library; not relevant for a client-only game. |
| **Lit (Web Components)** | Viable from CDN, but adds complexity without clear benefit over Alpine.js for this use case. |

### Total CDN Payload (if all recommended libraries included)

| Library | Gzipped |
|---|---|
| Chart.js 4 | ~65 KB |
| Alpine.js 3 | ~15 KB |
| GSAP 3 (optional) | ~23 KB |
| canvas-confetti (optional) | ~6 KB |
| **Total** | **~109 KB** (or ~80 KB without GSAP/confetti) |

This is a one-time download, cached by the browser. Subsequent visits load from cache.

---

### Impressive Precedents (Vanilla JS Only)

These demonstrate that complex, visually rich applications can be built without a framework:

- **Financial Futures Simulator** (Devpost) — portfolio tracker with market events in vanilla JS + Tailwind CDN
- **LitCoin** (ConUHacks) — stock market simulation game in vanilla JS + HTML + CSS
- **Night of the Living Debt** (NMSU, October 2024) — web-based financial literacy game, no framework
- **NGPF Arcade** — free browser-based financial mini-games for students
- **DOM-based platformer engines** — full physics, gravity, collision detection in pure JS (proving the runtime is capable of far more than a card-simulation game demands)

---

## Sources

- [Chart.js Installation Docs](https://www.chartjs.org/docs/latest/getting-started/installation.html)
- [Chart.js CDN on jsDelivr](https://cdn.jsdelivr.net/npm/chart.js@latest/dist/)
- [Chart.js on cdnjs](https://cdnjs.com/libraries/Chart.js/)
- [Alpine.js Official Site](https://alpinejs.dev/)
- [Alpine.js Start Here](https://alpinejs.dev/start-here)
- [Alpine.js Reactivity Docs](https://alpinejs.dev/advanced/reactivity)
- [Alpine.js for Home-Cooked Apps — blakewatson.com](https://blakewatson.com/journal/alpinejs-for-home-cooked-apps/)
- [GSAP Homepage](https://gsap.com/)
- [GSAP Now 100% Free — CSS-Tricks](https://css-tricks.com/gsap-is-now-completely-free-even-for-commercial-use/)
- [Webflow Makes GSAP 100% Free — Webflow Blog](https://webflow.com/blog/gsap-becomes-free)
- [GSAP on cdnjs](https://cdnjs.com/libraries/gsap)
- [Phaser.js Official Site](https://phaser.io/)
- [Phaser Custom Build (size reduction)](https://github.com/phaserjs/custom-build)
- [Phaser Compressor Released (2024)](https://phaser.io/news/2024/05/phaser-compressor-released)
- [Best JavaScript HTML5 Game Engines 2025 — LogRocket](https://blog.logrocket.com/best-javascript-html5-game-engines-2025/)
- [Tailwind CSS Play CDN Docs](https://tailwindcss.com/docs/installation/play-cdn)
- [Tailwind CSS v4 CDN Setup — Tailkits](https://tailkits.com/blog/tailwind-css-v4-cdn-setup/)
- [MDN: Making PWAs Installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [PWA on iOS — Current Status & Limitations (2025)](https://brainhub.eu/library/pwa-on-ios)
- [PWA Capabilities — Progressier](https://progressier.com/pwa-capabilities/installation)
- [How to Install a PWA on iOS, Android — Bitcot (2025)](https://www.bitcot.com/how-to-install-a-pwa-to-your-device/)
- [Master PWA Installs on iOS & Android (2025) — JunKangWorld](https://junkangworld.com/blog/master-pwa-installs-on-ios-android-the-2025-guide)
- [MDN: Storage Quotas and Eviction Criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [localStorage vs IndexedDB — DEV Community](https://dev.to/tene/localstorage-vs-indexeddb-javascript-guide-storage-limits-best-practices-fl5)
- [Using localStorage in Modern Applications — RxDB](https://rxdb.info/articles/localstorage.html)
- [Black-Scholes in JavaScript — Scribbler](https://scribbler.live/2023/04/06/Option-Pricing-using-Black-Scholes-in-JavaScript.html)
- [Black-Scholes JS Calculator — CodePen](https://codepen.io/79man/pen/RjgeLN)
- [BlackScholesJS — GitHub](https://github.com/colbyhemond/BlackScholesJS)
- [How to Create a JS Option Pricing Calculator — Mescius](https://developer.mescius.com/blogs/how-to-create-javascript-option-pricing-calculator-black-scholes-model)
- [Monte Carlo Simulation in JavaScript — Scribbler (2024)](https://scribbler.live/2024/04/09/Monte-Carlo-Simulation-in-JavaScript.html)
- [Simulate Stocks with JavaScript — dlibin.net](https://dlibin.net/posts/stock-market-simulation-javascript)
- [Financial Futures Simulator — Devpost](https://devpost.com/software/financial-futures-simulator)
- [Financial Life Simulator — Devpost](https://devpost.com/software/financial-life-simulator)
- [LitCoin Stock Market Simulator — GitHub](https://github.com/ConUHacks/LitCoin)
- [GitHub: html-css-javascript-games topic](https://github.com/topics/html-css-javascript-games)
- [42 JavaScript Games — freefrontend.com](https://freefrontend.com/javascript-games/)
- [Browser Game Development 2025 — Playgama](https://playgama.com/blog/general/guide-to-developing-browser-games-using-html-css-and-javascript/)
- [NGPF Financial Literacy Arcade](https://www.ngpf.org/arcade/)
- [Night of the Living Debt — NMSU (2024)](https://newsroom.nmsu.edu/news/nmsu-extension-launches-web-version-of-financial-literacy-game/s/a461ac10-42cf-48dc-9190-64d7040f61fe)
- [JS Amortization Calculator — SitePoint](https://www.sitepoint.com/javascript-interest-loan-calculator-algorithm/)
- [JS Amortization Calculator Gist](https://gist.github.com/jgornick/323115)
- [React vs. Vanilla JavaScript 2025 — DEV Community](https://dev.to/purushoth_26/react-vs-vanilla-javascript-what-to-choose-in-2025-5ejb)
- [Master Browser Storage 2025 — Medium](https://medium.com/@osamajavaid/master-browser-storage-in-2025-the-ultimate-guide-for-front-end-developers-7b2735b4cc13)
