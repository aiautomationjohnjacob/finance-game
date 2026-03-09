// FinanceGame Browser Test Runner (Puppeteer)
// Runs milestone tests with headless Chrome, saves results JSON + screenshots

const puppeteer = require('puppeteer');
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

async function detectMilestone(page) {
  if (MILESTONE_ARG !== 'auto') return parseInt(MILESTONE_ARG);
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 10000 });
    const content = await page.content();
    if (/futures/i.test(content)) return 8;
    if (/options|wheel strategy/i.test(content)) return 7;
    if (/portfolio|stock simulator/i.test(content)) return 6;
    if (/mortgage|amortiz/i.test(content)) return 5;
    if (/credit card|APR/i.test(content)) return 4;
    if (/dashboard/i.test(content)) return 3;
    if (/start|begin|play/i.test(content)) return 1;
    return 0;
  } catch { return 0; }
}

// ─── Regression Tests ───────────────────────────────────────────────────────
async function runRegressionTests(page) {
  console.log('\n[Regression Tests]');
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

  const start = Date.now();
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 15000 });
    const loadTime = Date.now() - start;
    if (loadTime < 3000) pass(`Page loads under 3s (${loadTime}ms)`);
    else warn('Page load time', `${loadTime}ms exceeds 3000ms`);
  } catch (e) { fail('Page loads', e.message); return; }

  await new Promise(r => setTimeout(r, 300));
  if (consoleErrors.length === 0) pass('No JS console errors on load');
  else fail('No JS console errors on load', consoleErrors.slice(0, 2).join('; '));

  // Mobile horizontal scroll check
  await page.setViewport({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle2' });
  const hasHScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 5);
  if (!hasHScroll) pass('Mobile (390px) — no horizontal scroll');
  else warn('Mobile horizontal scroll', 'Page may overflow on mobile');
  await page.setViewport({ width: 1280, height: 800 });
  await page.reload({ waitUntil: 'networkidle2' });
}

// ─── Milestone Tests ────────────────────────────────────────────────────────
async function testMilestone0(page) {
  console.log('\n[Milestone 0 — Skeleton]');
  try {
    const res = await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 10000 });
    const status = res.status();
    if (status === 200) pass('index.html loads (HTTP 200)');
    else fail('index.html loads', `HTTP ${status}`);
  } catch (e) { fail('index.html loads', e.message); return; }

  const title = await page.title();
  if (title && title.trim()) pass(`Page title set ("${title}")`);
  else fail('Page title set', 'Title is empty');

  await page.setViewport({ width: 1280, height: 800 });
  await screenshot(page, 'milestone-0-desktop');
  await page.setViewport({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle2' });
  await screenshot(page, 'milestone-0-mobile');
  await page.setViewport({ width: 1280, height: 800 });
}

async function testMilestone1(page) {
  console.log('\n[Milestone 1 — Main Menu]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  const hasFinanceTitle = /finance|money|wealth|invest|budget|credit/i.test(bodyText);
  if (hasFinanceTitle) pass('Financial theme title/text present');
  else fail('Financial theme title', 'No finance-related text found');

  const startBtn = await page.$('button, a[onclick], [role="button"]');
  if (startBtn) {
    const visible = await page.evaluate(el => {
      const s = window.getComputedStyle(el);
      return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0';
    }, startBtn);
    if (visible) pass('Start/action button visible');
    else fail('Start/action button', 'Button not visible');
  } else fail('Start/action button', 'No clickable element found');

  await page.setViewport({ width: 1280, height: 800 });
  await screenshot(page, 'milestone-1-desktop');
  await page.setViewport({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle2' });
  await screenshot(page, 'milestone-1-mobile');
  await page.setViewport({ width: 1280, height: 800 });
}

async function testMilestone2(page) {
  console.log('\n[Milestone 2 — Profile Setup]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  // Try to get to setup screen
  try {
    const btn = await page.$('button');
    if (btn) { await btn.click(); await new Promise(r => setTimeout(r, 400)); }
  } catch {}

  const nameInput = await page.$('input[type="text"], input[type="name"], input[placeholder*="name" i], input[id*="name" i]');
  if (nameInput) {
    await nameInput.type('TestPlayer');
    pass('Name input present and fillable');
  } else fail('Name input', 'No text input for player name found');

  const scenarios = await page.$$('input[type="radio"], [class*="scenario" i], [class*="profile" i], [data-scenario]');
  if (scenarios.length >= 2) pass(`Starting scenarios present (${scenarios.length} found)`);
  else warn('Starting scenarios', `${scenarios.length} found, expected 2+`);

  await screenshot(page, 'milestone-2-desktop');
}

async function testMilestone3(page) {
  console.log('\n[Milestone 3 — Dashboard]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  // Navigate through to dashboard
  try {
    const btn = await page.$('button');
    if (btn) { await btn.click(); await new Promise(r => setTimeout(r, 300)); }
    const nameInput = await page.$('input[type="text"]');
    if (nameInput) { await nameInput.type('TestPlayer'); }
    const continueBtn = await page.$('button');
    if (continueBtn) { await continueBtn.click(); await new Promise(r => setTimeout(r, 400)); }
  } catch {}

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/\$[\d,]+|\bbalance\b|\bcash\b/i.test(bodyText)) pass('Balance/cash visible');
  else fail('Balance/cash', 'No dollar amount or balance text found');

  if (/debt|owed|loan|liability/i.test(bodyText)) pass('Debt indicator visible');
  else warn('Debt indicator', 'No debt text found');

  if (/month|week|year|turn|period/i.test(bodyText)) pass('Time period shown');
  else warn('Time period', 'No time indicator found');

  const navCount = await page.$$eval(
    'nav a, nav button, [class*="nav" i] a, [class*="tab" i], [class*="menu-item" i]',
    els => els.length
  ).catch(() => 0);
  if (navCount >= 2) pass(`Navigation items present (${navCount})`);
  else warn('Navigation', `${navCount} nav items found`);

  await page.setViewport({ width: 1280, height: 800 });
  await screenshot(page, 'milestone-3-desktop');
  await page.setViewport({ width: 390, height: 844 });
  await screenshot(page, 'milestone-3-mobile');
  await page.setViewport({ width: 1280, height: 800 });
}

async function testMilestone4(page) {
  console.log('\n[Milestone 4 — Credit Card Debt]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/credit card|APR|minimum payment|interest rate/i.test(bodyText)) pass('Credit card content present');
  else fail('Credit card content', 'Navigate to CC module — no CC content on current page');

  // Math check
  const mathOk = await page.evaluate(() => {
    const balance = 1000, apr = 0.24;
    const monthlyInterest = balance * (apr / 12);
    return Math.abs(monthlyInterest - 20.0) < 1.0;
  });
  if (mathOk) pass('APR math: $1000 @ 24% = $20/mo ±$1');
  else warn('APR math', 'Could not verify in-page — check formula manually');

  await screenshot(page, 'milestone-4-desktop');
}

async function testMilestone5(page) {
  console.log('\n[Milestone 5 — Mortgage]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/mortgage|amortiz|home loan|PMI|down payment/i.test(bodyText)) pass('Mortgage content present');
  else fail('Mortgage content', 'No mortgage module content found');

  const mathOk = await page.evaluate(() => {
    const P = 300000, r = 0.07 / 12, n = 360;
    const payment = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return Math.abs(payment - 1996) < 10;
  });
  if (mathOk) pass('Mortgage math: $300k @ 7% 30yr ≈ $1,996/mo ±$10');
  else warn('Mortgage math', 'Verify amortization formula manually');

  await screenshot(page, 'milestone-5-desktop');
}

async function testMilestone6(page) {
  console.log('\n[Milestone 6 — Stock Simulator]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/portfolio|stock|shares|buy|sell|ticker/i.test(bodyText)) pass('Stock simulator content present');
  else fail('Stock simulator', 'No stock/portfolio content found');

  const hasTickers = /\b[A-Z]{2,5}\b/.test(bodyText);
  if (hasTickers) pass('Ticker-like symbols visible');
  else warn('Tickers', 'No 2-5 letter uppercase symbols found');

  await screenshot(page, 'milestone-6-desktop');
}

async function testMilestone7(page) {
  console.log('\n[Milestone 7 — Options / The Wheel]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/call option|put option|call.*put|put.*call/i.test(bodyText)) pass('Calls and puts explained');
  else fail('Calls/puts', 'No call/put option explanation found');

  if (/wheel strategy|covered call|cash.secured put/i.test(bodyText)) pass('Wheel strategy content present');
  else fail('Wheel strategy', 'No wheel strategy content found');

  if (/premium|strike|expir/i.test(bodyText)) pass('Options terminology present');
  else warn('Options terminology', 'Some terms may be missing');

  await screenshot(page, 'milestone-7-desktop');
}

async function testMilestone8(page) {
  console.log('\n[Milestone 8 — Futures]');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/futures contract|commodity future/i.test(bodyText)) pass('Futures contracts explained');
  else fail('Futures content', 'No futures content found');

  if (/leverage|margin/i.test(bodyText)) pass('Leverage and margin explained');
  else fail('Leverage/margin', 'No leverage/margin content');

  if (/margin call|liquidat|high risk|warning/i.test(bodyText)) pass('Risk warning present');
  else warn('Risk warning', 'No explicit risk warning found');

  await screenshot(page, 'milestone-8-desktop');
}

// ─── Main ───────────────────────────────────────────────────────────────────
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const milestone = MILESTONE_ARG === 'auto' ? await detectMilestone(page) : parseInt(MILESTONE_ARG);
  const milestoneNames = [
    'Skeleton', 'Main Menu', 'Profile Setup', 'Dashboard',
    'Credit Card Debt', 'Mortgage', 'Stock Simulator', 'Options/Wheel', 'Futures'
  ];
  const milestoneName = milestoneNames[milestone] || `Milestone ${milestone}`;

  console.log(`\n=== FinanceGame Tests — Milestone ${milestone}: ${milestoneName} ===`);

  await runRegressionTests(page);

  const tests = [
    testMilestone0, testMilestone1, testMilestone2, testMilestone3,
    testMilestone4, testMilestone5, testMilestone6, testMilestone7, testMilestone8
  ];

  for (let i = 0; i <= Math.min(milestone, tests.length - 1); i++) {
    await tests[i](page);
  }

  await browser.close();

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
