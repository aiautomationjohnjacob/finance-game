// math.js — All financial formulas for FinanceGame
// No external dependencies. All pure JS math.

'use strict';

// ─── Credit Card / Debt ──────────────────────────────────────────────────────

/**
 * Monthly interest charge on a balance.
 * @param {number} balance
 * @param {number} apr  decimal e.g. 0.24
 */
function monthlyInterest(balance, apr) {
  return balance * (apr / 12);
}

/**
 * Minimum payment: max($25, 2% of balance). Industry standard.
 */
function minPayment(balance) {
  return Math.max(25, balance * 0.02);
}

/**
 * Months to pay off a balance at a fixed monthly payment.
 * Returns Infinity if payment <= monthly interest.
 * @param {number} balance
 * @param {number} apr
 * @param {number} payment monthly payment amount
 */
function monthsToPayoff(balance, apr, payment) {
  const r = apr / 12;
  if (r === 0) return Math.ceil(balance / payment);
  if (payment <= balance * r) return Infinity;
  return Math.ceil(-Math.log(1 - (balance * r) / payment) / Math.log(1 + r));
}

/**
 * Total interest paid over the life of a loan at fixed payment.
 */
function totalInterestPaid(balance, apr, payment) {
  const months = monthsToPayoff(balance, apr, payment);
  if (!isFinite(months)) return Infinity;
  return payment * months - balance;
}

/**
 * Generate amortization table for a credit card/loan.
 * Returns array of { month, payment, interest, principal, balance }
 * @param {number} balance
 * @param {number} apr
 * @param {number} payment  fixed monthly payment
 * @param {number} maxMonths  safety cap
 */
function amortizationTable(balance, apr, payment, maxMonths = 600) {
  const r = apr / 12;
  const rows = [];
  let bal = balance;
  for (let m = 1; m <= maxMonths && bal > 0.01; m++) {
    const interest = bal * r;
    const effectivePay = Math.min(payment, bal + interest);
    const principal = effectivePay - interest;
    bal = Math.max(0, bal - principal);
    rows.push({ month: m, payment: effectivePay, interest, principal, balance: bal });
  }
  return rows;
}

// ─── Mortgage ────────────────────────────────────────────────────────────────

/**
 * Standard mortgage monthly payment (P&I only, no taxes/insurance).
 * @param {number} principal  loan amount
 * @param {number} annualRate decimal e.g. 0.07
 * @param {number} termMonths e.g. 360
 */
function mortgagePayment(principal, annualRate, termMonths) {
  if (annualRate === 0) return principal / termMonths;
  const r = annualRate / 12;
  return principal * r * Math.pow(1 + r, termMonths) / (Math.pow(1 + r, termMonths) - 1);
}

/**
 * Total interest paid on a mortgage.
 */
function mortgageTotalInterest(principal, annualRate, termMonths) {
  const pmt = mortgagePayment(principal, annualRate, termMonths);
  return pmt * termMonths - principal;
}

/**
 * First N months of mortgage amortization.
 * Returns array of { month, payment, interest, principal, balance }
 */
function mortgageAmortization(principal, annualRate, termMonths, months = 12) {
  const r = annualRate / 12;
  const pmt = mortgagePayment(principal, annualRate, termMonths);
  const rows = [];
  let bal = principal;
  for (let m = 1; m <= months && bal > 0.01; m++) {
    const interest = bal * r;
    const princ = pmt - interest;
    bal = Math.max(0, bal - princ);
    rows.push({ month: m, payment: pmt, interest, principal: princ, balance: bal });
  }
  return rows;
}

// ─── Compound Interest / Investing ──────────────────────────────────────────

/**
 * Future value of a lump sum: FV = PV*(1+r)^n
 */
function futureValue(pv, annualRate, years) {
  return pv * Math.pow(1 + annualRate, years);
}

/**
 * Future value of regular monthly contributions.
 * FV = PMT * ((1+r)^n - 1) / r
 */
function futureValueSeries(monthlyContrib, annualRate, years) {
  const r = annualRate / 12;
  const n = years * 12;
  if (r === 0) return monthlyContrib * n;
  return monthlyContrib * (Math.pow(1 + r, n) - 1) / r;
}

/**
 * Compound growth over months, returns array of monthly balances.
 */
function compoundGrowthMonthly(initial, annualRate, months, monthlyContrib = 0) {
  const r = annualRate / 12;
  const vals = [];
  let bal = initial;
  for (let m = 0; m < months; m++) {
    bal = bal * (1 + r) + monthlyContrib;
    vals.push(bal);
  }
  return vals;
}

// ─── Stock Simulation (seeded PRNG) ─────────────────────────────────────────

/**
 * Seeded pseudo-random number generator (mulberry32).
 * Returns a function that yields [0, 1) deterministically.
 */
function seededRng(seed) {
  let s = seed >>> 0;
  return function () {
    s += 0x6D2B79F5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Simulate N months of stock prices via random walk.
 * Returns array of closing prices.
 * @param {number} startPrice
 * @param {number} drift  annual drift e.g. 0.08
 * @param {number} volatility  annual vol e.g. 0.20
 * @param {number} months
 * @param {number} seed
 */
function simulateStockPrices(startPrice, drift, volatility, months, seed) {
  const rng = seededRng(seed);
  const mu = drift / 12;
  const sigma = volatility / Math.sqrt(12);
  const prices = [startPrice];
  for (let i = 1; i <= months; i++) {
    // Box-Muller approximation via sum of uniform samples
    let z = 0;
    for (let j = 0; j < 6; j++) z += rng() - 0.5;
    z *= Math.sqrt(12 / 6); // normalize
    const ret = mu + sigma * z;
    prices.push(Math.max(0.01, prices[prices.length - 1] * (1 + ret)));
  }
  return prices;
}

// ─── Options ────────────────────────────────────────────────────────────────

/**
 * Covered call P&L at expiration.
 * @param {number} stockBasis  cost basis of 100 shares
 * @param {number} strikePrice
 * @param {number} premium  received per share
 * @param {number} priceAtExpiry
 */
function coveredCallPnl(stockBasis, strikePrice, premium, priceAtExpiry) {
  const stockPnl = Math.min(priceAtExpiry, strikePrice) - stockBasis;
  return (stockPnl + premium) * 100;
}

/**
 * Cash-secured put P&L at expiration.
 */
function cashSecuredPutPnl(strikePrice, premium, priceAtExpiry) {
  if (priceAtExpiry >= strikePrice) return premium * 100; // put expires worthless
  return (priceAtExpiry - strikePrice + premium) * 100;  // assigned, own stock at discount
}

// ─── Futures ────────────────────────────────────────────────────────────────

/**
 * Futures P&L. Long position.
 * @param {number} entryPrice
 * @param {number} exitPrice
 * @param {number} contractSize  e.g. 50 (ES mini = 50x index)
 * @param {number} numContracts
 */
function futuresPnl(entryPrice, exitPrice, contractSize, numContracts = 1) {
  return (exitPrice - entryPrice) * contractSize * numContracts;
}

/**
 * Margin call check: returns true if account equity < maintenance margin.
 */
function isMarginCall(accountEquity, maintenanceMargin) {
  return accountEquity < maintenanceMargin;
}

// ─── Budget / Cash Flow ──────────────────────────────────────────────────────

/**
 * Monthly cash flow = income - fixed expenses - debt payments.
 */
function cashFlow(income, expenses, debtPayments) {
  return income - expenses - debtPayments;
}

/**
 * Net worth = assets - liabilities.
 */
function netWorth(assets, liabilities) {
  return assets - liabilities;
}

/**
 * Savings rate as a percentage of income.
 */
function savingsRate(savings, income) {
  if (income === 0) return 0;
  return (savings / income) * 100;
}

// ─── Formatting Helpers ──────────────────────────────────────────────────────

/**
 * Format a number as USD currency string.
 */
function formatCurrency(n) {
  const abs = Math.abs(n);
  const formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (n < 0 ? '-$' : '$') + formatted;
}

/**
 * Format a percentage.
 */
function formatPct(n, decimals = 1) {
  return n.toFixed(decimals) + '%';
}
