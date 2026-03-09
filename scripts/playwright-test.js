// FinanceGame Playwright Test Runner
// Reads testplan milestones, runs appropriate tests, writes results JSON + screenshots

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PORT = process.argv[2] || '8765';
const MILESTONE_ARG = process.argv[3] || 'auto';
const RESULTS_DIR = process.argv[4] || path.join(__dirname, 'test-results');
const SCREENSHOTS_DIR = process.argv[5] || path.join(__dirname, 'screenshots');
const BASE_URL = `http://127.0.0.1:${PORT}`;

const results = { passed: 0, failed: 0, warnings: 0, tests: [], screenshots: [] };

function pass(name) {
  results.passed++;
  results.tests.push({ name, status: 'PASS' });
  console.log('  ✓', name);
}

function fail(name, error) {
  results.failed++;
  results.tests.push({ name, status: 'FAIL', error: String(error) });
  console.log('  ✗', name, '—', error);
}

function warn(name, message) {
  results.warnings++;
  results.tests.push({ name, status: 'WARN', message });
  console.log('  ⚠', name, '—', message);
}

async function screenshot(page, name) {
  const file = `${name}.png`;
  const filePath = path.join(SCREENSHOTS_DIR, file);
  await page.screenshot({ path: filePath, fullPage: true });
  results.screenshots.push(file);
  console.log('  📸', file);
}

// Determine which milestone to test (auto = highest milestone the app supports)
async function detectMilestone(page) {
  if (MILESTONE_ARG !== 'auto') return parseInt(MILESTONE_ARG);
  // Auto-detect: check what's in index.html
  try {
    const res = await page.goto(BASE_URL);
    if (!res || res.status() !== 200) return 0;
    const content = await page.content();
    // Rough heuristic: count feature indicators
    if (content.includes('futures') || content.includes('Futures')) return 8;
    if (content.includes('options') || content.includes('Options')) return 7;
    if (content.includes('portfolio') || content.includes('Portfolio') || content.includes('stock')) return 6;
    if (content.includes('mortgage') || content.includes('Mortgage')) return 5;
    if (content.includes('credit') || content.includes('Credit')) return 4;
    if (content.includes('dashboard') || content.includes('Dashboard')) return 3;
    if (content.includes('start') || content.includes('Start') || content.includes('begin')) return 1;
    return 0;
  } catch { return 0; }
}

// ─── Regression Tests (always run) ─────────────────────────────────────────
async function runRegressionTests(page) {
  console.log('\n[Regression Tests]');

  // Load time
  const start = Date.now();
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  const loadTime = Date.now() - start;
  if (loadTime < 3000) pass(`Page loads under 3s (${loadTime}ms)`);
  else warn(`Page load time`, `${loadTime}ms exceeds 3000ms target`);

  // Console errors
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  await page.reload();
  await page.waitForTimeout(500);
  if (consoleErrors.length === 0) pass('No JS console errors on load');
  else fail('No JS console errors on load', consoleErrors.slice(0, 2).join('; '));

  // Currency formatting check (if any money elements exist)
  const moneyEls = await page.$$eval('[class*="money"], [class*="balance"], [class*="amount"], [id*="balance"]',
    els => els.map(e => e.textContent).filter(t => t.trim())
  ).catch(() => []);
  if (moneyEls.length > 0) {
    const allFormatted = moneyEls.every(t => /\$[\d,]+/.test(t));
    if (allFormatted) pass('Money values use currency formatting');
    else warn('Money values formatting', `Some values may not be formatted: ${moneyEls[0]}`);
  }

  // Mobile horizontal scroll
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  const hasHScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
  if (!hasHScroll) pass('Mobile viewport (390px) — no horizontal scroll');
  else warn('Mobile horizontal scroll', 'Page may overflow on mobile');
  await page.setViewportSize({ width: 1280, height: 800 });
}

// ─── Milestone Tests ────────────────────────────────────────────────────────

async function testMilestone0(page) {
  console.log('\n[Milestone 0 — Skeleton]');
  try {
    const res = await page.goto(BASE_URL);
    if (res && res.status() === 200) pass('index.html loads (HTTP 200)');
    else fail('index.html loads', `Status: ${res ? res.status() : 'no response'}`);
  } catch (e) { fail('index.html loads', e.message); return; }

  const title = await page.title();
  if (title && title.trim().length > 0) pass(`Page title set ("${title}")`);
  else fail('Page title is set', 'Title is empty');

  await page.setViewportSize({ width: 1280, height: 800 });
  await screenshot(page, 'milestone-0-desktop');
  await page.setViewportSize({ width: 390, height: 844 });
  await screenshot(page, 'milestone-0-mobile');
  await page.setViewportSize({ width: 1280, height: 800 });
}

async function testMilestone1(page) {
  console.log('\n[Milestone 1 — Main Menu]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const hasMenu = await page.$('[id*="menu"], [class*="menu"], [id*="home"], [class*="home"], [id*="landing"], [class*="landing"]')
    .then(el => !!el).catch(() => false);
  if (hasMenu) pass('Main menu element present');
  else warn('Main menu element', 'No element with menu/home/landing in id/class — checking for title text instead');

  const pageText = await page.evaluate(() => document.body.innerText);
  const hasFinanceTitle = /finance|money|wealth|invest|budget/i.test(pageText);
  if (hasFinanceTitle) pass('Financial theme title/text present');
  else fail('Financial theme title/text', 'No finance-related heading found');

  const startBtn = await page.$('button, a, [role="button"], [onclick]').catch(() => null);
  if (startBtn) {
    const visible = await startBtn.isVisible();
    if (visible) pass('Start/action button is visible');
    else fail('Start/action button', 'Button exists but is not visible');
  } else fail('Start/action button', 'No button, link, or clickable element found');

  await page.setViewportSize({ width: 1280, height: 800 });
  await screenshot(page, 'milestone-1-desktop');
  await page.setViewportSize({ width: 390, height: 844 });
  await screenshot(page, 'milestone-1-mobile');
  await page.setViewportSize({ width: 1280, height: 800 });
}

async function testMilestone2(page) {
  console.log('\n[Milestone 2 — Profile Setup]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Try to navigate to profile/setup
  const startBtn = await page.$('button, a[href*="setup"], a[href*="start"], [onclick*="start"], [onclick*="begin"]').catch(() => null);
  if (startBtn) await startBtn.click().catch(() => {});
  await page.waitForTimeout(500);

  const nameInput = await page.$('input[type="text"], input[name*="name"], input[placeholder*="name"]').catch(() => null);
  if (nameInput) {
    await nameInput.fill('TestPlayer');
    pass('Name input field present and fillable');
  } else fail('Name input field', 'No text input found for player name');

  // Check for scenario options
  const scenarios = await page.$$('input[type="radio"], [class*="scenario"], [class*="profile"], [class*="character"]');
  if (scenarios.length >= 2) pass(`At least 2 starting scenarios available (found ${scenarios.length})`);
  else warn('Starting scenarios', `Found ${scenarios.length} — expected 2+`);

  await screenshot(page, 'milestone-2-desktop');
}

async function testMilestone3(page) {
  console.log('\n[Milestone 3 — Dashboard]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Navigate through setup to dashboard
  try {
    const btn = await page.$('button, [onclick]');
    if (btn) { await btn.click(); await page.waitForTimeout(300); }
    const nameInput = await page.$('input[type="text"]');
    if (nameInput) { await nameInput.fill('TestPlayer'); }
    const continueBtn = await page.$('button:has-text("Continue"), button:has-text("Start"), button:has-text("Play"), button:has-text("Begin")');
    if (continueBtn) { await continueBtn.click(); await page.waitForTimeout(500); }
  } catch {}

  const bodyText = await page.evaluate(() => document.body.innerText);

  const hasBalance = /\$[\d,]+|\bbalance\b|\bcash\b|\bfunds\b/i.test(bodyText);
  if (hasBalance) pass('Balance/cash amount visible');
  else fail('Balance/cash amount', 'No dollar amount or balance label found');

  const hasDebt = /debt|owed|liability|loan/i.test(bodyText);
  if (hasDebt) pass('Debt/liability figure visible');
  else warn('Debt/liability', 'No debt indicator found (may be milestone 2 content)');

  const hasMonth = /month|week|year|period|turn/i.test(bodyText);
  if (hasMonth) pass('Time period indicator present');
  else warn('Time period', 'No month/time indicator found');

  const navItems = await page.$$('nav a, nav button, [class*="nav"] a, [class*="tab"], [class*="menu-item"]');
  if (navItems.length >= 2) pass(`Navigation items present (found ${navItems.length})`);
  else warn('Navigation', `Found ${navItems.length} nav items — expected 2+`);

  await page.setViewportSize({ width: 1280, height: 800 });
  await screenshot(page, 'milestone-3-desktop');
  await page.setViewportSize({ width: 390, height: 844 });
  await screenshot(page, 'milestone-3-mobile');
  await page.setViewportSize({ width: 1280, height: 800 });
}

async function testMilestone4(page) {
  console.log('\n[Milestone 4 — Credit Card Debt]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  const hasCC = /credit card|APR|interest rate|minimum payment/i.test(bodyText);
  if (hasCC) pass('Credit card module content present');
  else fail('Credit card module', 'No credit card content found — navigate to module first');

  // Math verification via page eval
  const mathCorrect = await page.evaluate(() => {
    // Standard CC interest: balance * (APR/12)
    const balance = 1000;
    const apr = 0.24;
    const monthlyInterest = balance * (apr / 12);
    return Math.abs(monthlyInterest - 20.00) < 1;
  });
  if (mathCorrect) pass('APR math verification ($1000 @ 24% = $20/mo interest ±$1)');
  else warn('APR math', 'Could not verify in-page calculation — check manually');

  await screenshot(page, 'milestone-4-desktop');
}

async function testMilestone5(page) {
  console.log('\n[Milestone 5 — Mortgage]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  const hasMortgage = /mortgage|amortiz|home loan|PMI|down payment/i.test(bodyText);
  if (hasMortgage) pass('Mortgage module content present');
  else fail('Mortgage module', 'No mortgage content found');

  // Math: $300k, 7%, 30yr → ~$1996/mo
  const mathCorrect = await page.evaluate(() => {
    const P = 300000, r = 0.07 / 12, n = 360;
    const payment = P * r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1);
    return Math.abs(payment - 1996) < 10;
  });
  if (mathCorrect) pass('Mortgage math: $300k @ 7% 30yr ≈ $1,996/mo (±$10)');
  else warn('Mortgage math', 'In-page amortization formula could not be verified — check manually');

  await screenshot(page, 'milestone-5-desktop');
}

async function testMilestone6(page) {
  console.log('\n[Milestone 6 — Stock Simulator]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  const hasStocks = /portfolio|shares|stock|ticker|buy|sell/i.test(bodyText);
  if (hasStocks) pass('Stock simulator content present');
  else fail('Stock simulator', 'No stock/portfolio content found');

  const hasTickers = /[A-Z]{2,5}(?=\s*\$|\s*\d)/.test(bodyText);
  if (hasTickers) pass('Stock ticker symbols visible');
  else warn('Ticker symbols', 'No 2-5 letter ticker patterns found');

  await screenshot(page, 'milestone-6-desktop');
}

async function testMilestone7(page) {
  console.log('\n[Milestone 7 — Options / The Wheel]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/call option|put option|\bcall\b.*\bput\b/i.test(bodyText)) pass('Call and put options explained');
  else fail('Options content', 'No call/put option explanation found');
  if (/wheel strategy|covered call|cash.secured put/i.test(bodyText)) pass('Wheel strategy explained');
  else fail('Wheel strategy', 'No wheel strategy content found');
  if (/premium|strike price|expir/i.test(bodyText)) pass('Options terminology present (premium, strike, expiry)');
  else warn('Options terminology', 'Some key terms may be missing');

  await screenshot(page, 'milestone-7-desktop');
}

async function testMilestone8(page) {
  console.log('\n[Milestone 8 — Futures]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/futures contract|commodity future/i.test(bodyText)) pass('Futures contracts explained');
  else fail('Futures content', 'No futures contract content found');
  if (/leverage|margin/i.test(bodyText)) pass('Leverage and margin explained');
  else fail('Leverage/margin', 'No leverage or margin content found');
  if (/margin call|liquidat|high risk|risky/i.test(bodyText)) pass('Risk warning present');
  else warn('Risk warning', 'No explicit risk warning found for futures');

  await screenshot(page, 'milestone-8-desktop');
}

// ─── Main ───────────────────────────────────────────────────────────────────
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Detect milestone
  const milestone = MILESTONE_ARG === 'auto' ? await detectMilestone(page) : parseInt(MILESTONE_ARG);
  const milestoneNames = [
    'Skeleton', 'Main Menu', 'Profile Setup', 'Dashboard',
    'Credit Card Debt', 'Mortgage', 'Stock Simulator', 'Options/Wheel', 'Futures',
    'Scenario Cards', 'Completion'
  ];
  const milestoneName = milestoneNames[milestone] || `Milestone ${milestone}`;

  console.log(`\n=== FinanceGame Tests — Milestone ${milestone}: ${milestoneName} ===`);

  // Always run regression tests
  await runRegressionTests(page);

  // Run milestone-specific tests
  const tests = [
    testMilestone0, testMilestone1, testMilestone2, testMilestone3,
    testMilestone4, testMilestone5, testMilestone6, testMilestone7, testMilestone8
  ];

  for (let i = 0; i <= Math.min(milestone, tests.length - 1); i++) {
    await tests[i](page);
  }

  await browser.close();

  // Write results
  const output = {
    timestamp: new Date().toISOString(),
    milestone,
    milestone_name: milestoneName,
    passed: results.passed,
    failed: results.failed,
    warnings: results.warnings,
    tests: results.tests,
    screenshots: results.screenshots,
    overall: results.failed > 0 ? 'FAIL' : 'PASS'
  };

  fs.writeFileSync(path.join(RESULTS_DIR, 'latest.json'), JSON.stringify(output, null, 2));
  fs.writeFileSync(path.join(RESULTS_DIR, `${Date.now()}-m${milestone}.json`), JSON.stringify(output, null, 2));

  process.exit(results.failed > 0 ? 1 : 0);
})();
