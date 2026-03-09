# Goal 4 — Platform & Stack (Pass 3 Final)

**Research Date:** 2026-03-09
**Stress-tests Pass 2 findings dated:** 2026-03-09

---

## Stress-Test Results

### ST-1: Alpine.js "LLM-Friendly" Claim — Verdict: Partially False, But Still Justified

Pass 2 correctly identified that LLMs generate Alpine-specific bugs. The `x-if` / `x-for` template-tag requirement is confirmed as the single most common Alpine error in AI-generated code. The Alpine.js GitHub issue tracker contains multiple bugs filed by developers who were surprised that `x-if` on a `<div>` silently fails — this is not a hypothetical risk.

The stress-test question was: would pure vanilla JS (event listeners + innerHTML) be *more* reliable for LLM generation?

**Findings:**

1. The template literal + `innerHTML` pattern is genuinely simpler for LLMs to generate correctly. There is no special syntax — `element.innerHTML = \`<div>${state.value}</div>\`` is universally understood across all LLM training data. No gotchas.

2. However, Alpine.js's use case in this project is narrow and well-bounded: tab switching, modal show/hide, form value binding. These are exactly the components where Alpine reduces ~30 lines of boilerplate event listener code to ~3 lines of HTML attributes. The error risk is contained when Alpine is used only for UI plumbing.

3. A hybrid is the right architecture regardless: Alpine handles structural UI toggles; all rendering of data-driven content (scenario cards, portfolio figures, debt tables) uses `innerHTML` / `textContent` via plain JS. LLMs generate both patterns correctly when the division of responsibility is explicit.

4. Alpine.js has one confirmed performance risk: it slows down when applied to large DOM trees or inside loops with many elements. Chart.js creates hundreds of canvas-internal DOM nodes — Alpine must never be applied to chart container elements.

**Verdict: Keep Alpine.js, but enforce a hard rule in the codebase architecture: Alpine is for structural UI state (visible/hidden/active) only. No Alpine inside data-rendered content. No Alpine around chart containers.**

---

### ST-2: 4-File Structure and LLM Context — Verdict: 4 Files Is the Right Call, With a Size Budget

The concern was that a 1,500-line `game.js` might exceed coherent LLM editing range.

**Findings:**

Modern frontier LLMs (Claude Sonnet, GPT-4o) handle 200,000+ token context windows — a 1,500-line JS file is approximately 4,000–6,000 tokens, well within single-turn context. The risk is not raw token count; it is *attention diffusion* — LLMs produce less coherent edits when the file contains many unrelated concerns mixed together.

The 4-file split mitigates this precisely because each file has a single, coherent purpose:
- `game.js` — state and navigation (cohesive)
- `math.js` — pure functions (most cohesive; no DOM, no imports)
- `scenarios.js` — card data (mostly data, very low edit frequency)
- `charts.js` — Chart.js wrappers (isolated from game logic)

A single 2,500-line monolith would mix navigation logic, financial math, chart rendering, and card data — four different domains in one context. That is the scenario that degrades LLM coherence. The 4-file split avoids it.

**Size budget per file (estimated at implementation):**
- `game.js`: target under 600 lines (state shape, localStorage I/O, screen router, Alpine component initializers)
- `math.js`: target under 400 lines (all formulas are short; this file should never need Alpine or DOM references)
- `scenarios.js`: target under 400 lines (mostly data arrays with minimal logic)
- `charts.js`: target under 300 lines (one wrapper function per chart type)

If any file exceeds ~700 lines, it should be split before continuing.

**Verdict: 4-file structure confirmed. Add explicit line-count budgets as a development guideline.**

---

### ST-3: localStorage + Export/Import — Is It User-Friendly Enough?

The stress-test claim: real users don't know to export saves. Is there a simpler solution?

**URL-encoded state analysis:**

Base64 encoding adds ~33% overhead. A moderately complex game state — player name, scenario, month counter, debt array (3–5 items), portfolio array (3–5 stocks), card history (12+ events), achievement flags — will reach 3–8 KB of JSON easily. Base64-encoded: 4–11 KB. URL-safe encoded as a query string: 4,000–11,000 characters.

The practical URL sharing limit varies by platform:
- Email clients: ~2,000 characters before wrapping/truncation
- SMS: ~1,000 characters
- Twitter/X: 280 characters total
- Browser address bar: technically no limit, but Chrome shows a warning past ~32,000 characters

**Conclusion on URL state:** viable for a "share your current snapshot" feature (a dedicated Share button that generates a URL), but not viable as the primary save mechanism. A full game state with 24 months of history will routinely exceed email-safe URL lengths.

**"Save codes" alternative:** A compressed save code (e.g., LZ-string compression of JSON, Base64-encoded) could shorten a 5 KB state to ~1–2 KB → ~1,400–2,700 character code. This is copy-pasteable but not user-friendly for non-technical users. LZ-string adds a 3rd vendor dependency.

**Export/Import stays as the MVP mechanism.** The in-app warning ("Your progress is saved in this browser — use Export Save to keep it safe") makes the risk visible. This is the same pattern used by successful single-player browser games (Universal Paperclips, Candy Box, A-Dark-Room). Users who care about save persistence learn to export; users who don't care will replay.

**Optional enhancement (post-MVP):** Add a Share Snapshot button that generates a URL with just the current net worth + month + scenario — not the full save state. Useful for the year-end summary screen.

**Verdict: localStorage + Export/Import confirmed for MVP. No LZ-string dependency. Optional URL snapshot on summary screen only.**

---

### ST-4: Chart.js Vendor File Size — Measured, Not Estimated

**Actual measured sizes (downloaded from jsDelivr, 2026-03-09):**
- `chart.umd.min.js`: **204 KB on disk** (208,522 bytes exact)
- `alpinejs.cdn.min.js`: **46 KB on disk** (46,632 bytes exact)
- **Combined vendor payload: ~250 KB on disk**

**Impact assessment for USB/email distribution:**

A 250 KB vendor folder is negligible by any measure:
- A typical JPEG photo from a smartphone is 3–6 MB
- A single Word document with embedded images is commonly 500 KB–2 MB
- USB drives today have a minimum of 2 GB; 250 KB is 0.01% of a 2 GB stick
- Email attachment limits are typically 10–25 MB; a 250 KB zip of the entire game project is trivially small

The "open `index.html` and it works" experience for teachers distributing via USB is fully intact. The vendored files load from the local filesystem with no network request.

**One practical note:** When opening `index.html` from the filesystem (`file://` protocol), the browser serves all vendor files from local disk. There is no CDN dependency. The only thing that will not work on `file://` is the service worker (PWA), which requires `https://` or `localhost`. Game logic, charts, and Alpine.js all function correctly from `file://`.

**Verdict: 250 KB vendor payload is not a distribution concern. Vendor both libraries. Confirmed.**

---

### ST-5: PWA in V1 — Not Worth It

**The question:** What % of target users (25–45 adults) would actually install a PWA vs. bookmark a website?

**Data found:**

The 2025 Web Almanac reports that only 3.3% of desktop websites and 3.5% of mobile websites have implemented both the service worker AND manifest required for full PWA installation. This reflects developer adoption, not user install rates.

User-side install rates for PWAs are not published by any major study in accessible form. However, several proxy signals are informative:

1. Desktop PWA notification requests: 78% of desktop users *dismiss* PWA notification prompts; only 6% accept. This suggests strong user indifference to PWA installation prompts on desktop.
2. Mobile notification acceptance is higher (16%), but this is a different audience (users who have already accepted app-like behavior from a site).
3. The target user (25–45 adults using a financial literacy tool) is likely accessing this via a desktop or laptop browser at work or home — not primarily via a mobile home screen.
4. iOS still requires the manual Share → Add to Home Screen flow. No evidence from any source that adult casual users complete this without explicit prompting.

**PWA implementation cost for v1:**
- `manifest.json`: 20 lines, trivial
- `sw.js` (minimal cache): ~30 lines, trivial
- iOS install guidance banner: ~40 lines HTML/CSS/JS
- Icon assets: 192px and 512px PNGs

**The real cost is not code — it is distraction.** PWA work during v1 development consumes time that should go to financial content, game loop, and chart rendering. The PWA layer provides zero benefit when the game is distributed via USB (service workers require HTTPS or localhost). It provides marginal benefit for web-hosted users who would need to actively seek out and complete an install flow.

**Verdict: Do NOT implement PWA in v1. Add the manifest and service worker only after the core game loop (Milestones 1–6) is complete and deployed at a real HTTPS URL. This defers ~2 hours of implementation work to after the game is actually playable.**

---

## Alpine.js vs Pure Vanilla JS — Final Call

**Decision: Keep Alpine.js, with a hard scope boundary.**

The argument for dropping Alpine.js entirely and using pure vanilla JS:

- No Alpine-specific gotchas for LLMs to hit
- `document.getElementById`, `addEventListener`, `classList.toggle` are universally understood
- Template literals + `innerHTML` handle all data rendering correctly
- Fewer vendor files (drops 46 KB from the vendor folder)

The argument for keeping Alpine.js:

- The UI interaction patterns in this game (show/hide tabs, modal overlays, form input binding for the payment slider, toggle active states on scenario cards) are exactly the boilerplate that Alpine eliminates
- Implementing tab switching and modal management in raw vanilla JS correctly (including keyboard accessibility, focus trapping, ARIA state updates) is 60–100 lines of DOM manipulation per component — Alpine does it in 3–5 HTML attributes
- The LLM error risk is contained when Alpine scope is explicit: Alpine touches `display` state only; it never touches financial data

**The compromise that eliminates the risk:** The codebase will have an explicit comment block at the top of `index.html` that reads:

```
Alpine.js is used ONLY for UI state (show/hide screens, tab switching, modal toggles).
All financial data rendering uses plain JS (innerHTML, textContent).
Never put financial logic inside x-data objects.
Never use x-if or x-for inside data-rendered content.
```

This constraint, documented in the file, is something an LLM can be given in context and will respect. It limits Alpine to the 5–8 structural components where it saves the most code, keeping it away from the complex rendering paths where errors matter.

**Final answer: Alpine.js is kept. Its scope is explicitly constrained to UI state management only.**

---

## File Structure — Final Decision

```
/finance-game/
  index.html              ← markup + Alpine.js x-data for screen navigation only
  css/
    style.css             ← all styles, CSS custom properties design tokens
  js/
    game.js               ← screen router, localStorage I/O, game loop, turn logic
    math.js               ← ALL financial formulas (pure functions, zero DOM access)
    scenarios.js          ← life event card data array + card selection logic
    charts.js             ← Chart.js wrapper functions (one per chart type)
  vendor/
    chart.umd.min.js      ← Chart.js 4.x vendored (204 KB, served from local disk)
    alpinejs.cdn.min.js   ← Alpine.js 3.x vendored (46 KB, served from local disk)
  assets/
    icon-192.png          ← PWA icon (add when PWA is implemented, post-v1)
    icon-512.png          ← PWA icon (add when PWA is implemented, post-v1)
```

**Not in v1 (added post-v1 when deployed to HTTPS):**
- `manifest.json`
- `sw.js`

**Line count budgets (enforced discipline, not hard limits):**
- `game.js`: under 600 lines
- `math.js`: under 400 lines
- `scenarios.js`: under 400 lines
- `charts.js`: under 300 lines

**ES module note:** The 4 JS files are loaded as plain `<script>` tags in order, not as ES modules. This avoids the `file://` protocol restriction that blocks ES module imports in Chromium. Each file uses the module-revealing pattern (IIFE or top-level const objects) to avoid global namespace collision.

```html
<!-- In index.html, load order matters -->
<script src="vendor/chart.umd.min.js"></script>
<script defer src="vendor/alpinejs.cdn.min.js"></script>
<script src="js/math.js"></script>
<script src="js/scenarios.js"></script>
<script src="js/charts.js"></script>
<script src="js/game.js"></script>
```

---

## Storage Strategy — Final Decision

**Primary: localStorage**

- Single JSON blob under key `financeGame_save`
- Serialized on every meaningful state change (after each turn, after each allocation)
- Deserialized on page load; fresh game state created if key is absent

**MVP feature: Export/Import save (~20 lines)**

Export:
```js
function exportSave() {
  const data = localStorage.getItem('financeGame_save') || '{}';
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'finance-game-save.json';
  a.click();
  URL.revokeObjectURL(a.href);
}
```

Import:
```js
function importSave(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      JSON.parse(e.target.result); // validate before writing
      localStorage.setItem('financeGame_save', e.target.result);
      location.reload();
    } catch { alert('Invalid save file.'); }
  };
  reader.readAsText(file);
}
```

**In-app warning (shown on first load if no save exists):**
> "Your progress is saved in this browser. Use **Export Save** to keep a backup — clearing your browser data will erase your progress."

**URL snapshot (post-MVP, summary screen only):**
A Share button on the year-end summary screen encodes only: player name, scenario, month count, net worth, and grade as a URL query string. This is informational only — not a full save restore mechanism.

**Not using:** IndexedDB (unnecessary complexity for this data volume), LZ-string compression (adds a 3rd vendor dependency for marginal benefit).

---

## PWA — Include in V1 or Not?

**Decision: No PWA in v1.**

Rationale:
1. The game's primary distribution in early phases is via direct URL sharing and USB (teacher use case). Neither benefits from a service worker.
2. iOS PWA adoption requires manual user action and an instructional UI — this is non-trivial UX work that delays core game content.
3. PWA notification acceptance rates (6% desktop, 16% mobile) indicate the target demographic does not actively seek PWA installation.
4. The game works fully offline from local files without a service worker — the offline use case is already satisfied by the vendored library approach.
5. Implementation cost is low (~50 lines + icons) but the opportunity cost during v1 development is real.

**When to add PWA:** After Milestones 1–6 are passing and the game is deployed to an HTTPS URL. At that point, add `manifest.json` + minimal `sw.js` + iOS install guidance banner in a single focused session.

---

## Final Stack (Definitive — No Optionals)

| Layer | Decision | Rationale |
|-------|----------|-----------|
| **Markup** | HTML5, semantic elements | No framework required |
| **Style** | CSS3, custom properties design system | No Tailwind, no CSS-in-JS |
| **Interaction framework** | Alpine.js 3.x (vendored, 46 KB) | UI state only — tabs, modals, toggles |
| **Charting** | Chart.js 4.x (vendored, 204 KB) | Best LLM-generated API; declarative config |
| **Financial math** | Vanilla JS in `math.js` | No library needed; all formulas fit in <400 lines |
| **Game logic** | Vanilla JS in `game.js` | Turn loop, state, localStorage I/O |
| **Scenario data** | Plain JS arrays in `scenarios.js` | No CMS, no JSON file — inline for `file://` compatibility |
| **Storage** | localStorage + Export/Import button | Sufficient for single-player progression |
| **Module loading** | Plain `<script>` tags (no ES modules) | Avoids `file://` import restriction |
| **Vendor strategy** | Self-hosted in `vendor/` folder | CDN-independent; works offline; works on USB |
| **PWA** | Deferred to post-v1 | Zero benefit during initial development and distribution |
| **Animation** | CSS keyframes + transitions | GSAP not needed for this scope |
| **Celebration** | CSS only or 1 canvas-confetti call | Optional; add if needed, no dependency yet |
| **Audio** | None in v1 | Out of scope |
| **Build tools** | None | `open index.html` → works |
| **Testing** | Playwright via `scripts/test.sh` | Separate from app; not bundled |

**Explicitly excluded (with reasons):**
- React / Vue / Svelte — require npm build step
- Phaser.js — 980 KB game engine for a DOM card game
- Tailwind CDN — 350 KB, dev-only support
- External APIs — no live market data, no auth
- IndexedDB — unnecessary for <50 KB state
- LZ-string — 3rd dependency for marginal URL compression benefit
- GSAP — CSS handles all animation needs in this scope

**Total vendor payload on disk:** 250 KB (204 KB Chart.js + 46 KB Alpine.js)
**Network download on first visit (gzipped):** ~80 KB estimated (Chart.js ~65 KB gzip + Alpine.js ~15 KB gzip)
**Subsequent visits:** 0 KB network (browser cache + local vendor files)

---

## Sources

- [Alpine.js Official Templating Docs — x-if and x-for template tag requirement](https://alpinejs.dev/essentials/templating)
- [Alpine.js — x-if directive](https://alpinejs.dev/directives/if)
- [Alpine.js — x-for directive](https://alpinejs.dev/directives/for)
- [Alpine.js GitHub: Pitfalls and Honest Drawbacks (Discussion #749)](https://github.com/alpinejs/alpine/discussions/749)
- [Alpine.js GitHub: Performance Issues with Large DOM (Issue #566)](https://github.com/alpinejs/alpine/issues/566)
- [Alpine.js — Benefits and Limitations | Henrik Sommerfeld](https://www.henriksommerfeld.se/alpinejs-benefits-and-limitations/)
- [3 Reasons Why Alpine.js Won't Beat jQuery | Erwin Hofman](https://www.erwinhofman.com/blog/3-reasons-why-alpinejs-wont-beat-jquery-core-web-vitals-included/)
- [What is Alpine.js? Comparison with Vanilla JS](https://blog.mikihands.com/en/whitedec/2025/11/24/alpine-js-what-is-vs-vanilla-js/)
- [Alpine.js GitHub Discussion: How Come Alpine Beats Vanilla JS? (#3891)](https://github.com/alpinejs/alpine/discussions/3891)
- [State Management in Vanilla JS | DEV Community](https://dev.to/godofgeeks/state-management-in-vanilla-js-51dg)
- [State Management in Vanilla JS: 2026 Trends | Medium](https://medium.com/@chirag.dave/state-management-in-vanilla-js-2026-trends-f9baed7599de)
- [HTML Templates with Vanilla JavaScript | Go Make Things](https://gomakethings.com/html-templates-with-vanilla-javascript/)
- [Chart.js Installation](https://www.chartjs.org/docs/latest/getting-started/installation.html)
- [Chart.js Releases — GitHub](https://github.com/chartjs/Chart.js/releases)
- [Share Your Web App State via URL — No Backend Required | DEV Community](https://dev.to/maxxmini/share-your-web-app-state-via-url-no-backend-required-1806)
- [PWA | 2025 | The Web Almanac by HTTP Archive](https://almanac.httparchive.org/en/2025/pwa)
- [PWA Stats](https://www.pwastats.com/)
- [Installing and Uninstalling Web Apps — MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing)
- [Why Build Progressive Web Apps: If It's Just a Bookmark, It's Not a PWA | Thomas Steiner](https://medium.com/dev-channel/why-build-progressive-web-apps-if-its-just-a-bookmark-it-s-not-a-pwa-video-write-up-7ccca1c58034)
- [LLM Context Windows Explained | Unstructured](https://unstructured.io/insights/llm-context-windows-explained-a-developer-s-guide)
- [LLM Prompt Best Practices for Large Context Windows | Winder.ai](https://winder.ai/llm-prompt-best-practices-large-context-windows/)
- [PWA on iOS — Current Status and Limitations (2025) | Brainhub](https://brainhub.eu/library/pwa-on-ios)
- [Chart.js — Libraries — cdnjs](https://cdnjs.com/libraries/Chart.js/)
- [RxDB: Using localStorage in Modern Applications](https://rxdb.info/articles/localstorage.html)
- File sizes measured directly: `chart.umd.min.js` = 208,522 bytes; `alpinejs.cdn.min.js` = 46,632 bytes (downloaded from jsDelivr 2026-03-09)
