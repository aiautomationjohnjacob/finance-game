// charts.js — Chart.js wrappers for FinanceGame
// Alpine.js NEVER calls these. Only called from game.js or direct DOM events.
// All chart containers are plain <canvas> elements.

'use strict';

const activeCharts = {};

function destroyChart(id) {
  if (activeCharts[id]) {
    activeCharts[id].destroy();
    delete activeCharts[id];
  }
}

function getCtx(canvasId) {
  const el = document.getElementById(canvasId);
  if (!el) return null;
  return el.getContext('2d');
}

const CHART_COLORS = {
  blue:   '#3B82F6',
  red:    '#EF4444',
  green:  '#10B981',
  yellow: '#F59E0B',
  gray:   '#6B7280',
  purple: '#8B5CF6',
  teal:   '#14B8A6',
  orange: '#F97316',
};

const BASE_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { labels: { color: '#1F2937', font: { size: 12 } } } },
  scales: {
    x: { ticks: { color: '#6B7280' }, grid: { color: '#E5E7EB' } },
    y: { ticks: { color: '#6B7280' }, grid: { color: '#E5E7EB' } }
  }
};

// ─── Debt Payoff Chart ────────────────────────────────────────────────────────
function renderDebtPayoffChart(canvasId, balance, apr, payment) {
  destroyChart(canvasId);
  const ctx = getCtx(canvasId);
  if (!ctx) return;

  const rows = amortizationTable(balance, apr, payment, 360);
  const labels = rows.map(r => `M${r.month}`);
  const balances = rows.map(r => r.balance);

  activeCharts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Remaining Balance',
        data: balances,
        borderColor: CHART_COLORS.red,
        backgroundColor: 'rgba(239,68,68,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 0,
      }]
    },
    options: {
      ...BASE_OPTIONS,
      plugins: { ...BASE_OPTIONS.plugins, title: { display: true, text: 'Debt Payoff Timeline', color: '#1F2937' } },
      scales: {
        ...BASE_OPTIONS.scales,
        y: { ...BASE_OPTIONS.scales.y, ticks: { ...BASE_OPTIONS.scales.y.ticks, callback: v => '$' + v.toLocaleString() } }
      }
    }
  });
}

// ─── Amortization Bar Chart (mortgage) ───────────────────────────────────────
function renderAmortizationChart(canvasId, principal, annualRate, termMonths) {
  destroyChart(canvasId);
  const ctx = getCtx(canvasId);
  if (!ctx) return;

  const rows = mortgageAmortization(principal, annualRate, termMonths, 24);
  const labels = rows.map(r => `M${r.month}`);

  activeCharts[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Principal',
          data: rows.map(r => r.principal),
          backgroundColor: CHART_COLORS.green,
        },
        {
          label: 'Interest',
          data: rows.map(r => r.interest),
          backgroundColor: CHART_COLORS.red,
        }
      ]
    },
    options: {
      ...BASE_OPTIONS,
      plugins: { ...BASE_OPTIONS.plugins, title: { display: true, text: 'Amortization (First 24 Months)', color: '#1F2937' } },
      scales: {
        x: { ...BASE_OPTIONS.scales.x, stacked: true },
        y: { ...BASE_OPTIONS.scales.y, stacked: true, ticks: { callback: v => '$' + v.toLocaleString() } }
      }
    }
  });
}

// ─── Portfolio Growth Chart ───────────────────────────────────────────────────
function renderPortfolioChart(canvasId, priceHistory, label) {
  destroyChart(canvasId);
  const ctx = getCtx(canvasId);
  if (!ctx) return;

  const labels = priceHistory.map((_, i) => `M${i}`);

  activeCharts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: label || 'Price',
        data: priceHistory,
        borderColor: CHART_COLORS.blue,
        backgroundColor: 'rgba(59,130,246,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 0,
      }]
    },
    options: {
      ...BASE_OPTIONS,
      scales: {
        ...BASE_OPTIONS.scales,
        y: { ...BASE_OPTIONS.scales.y, ticks: { callback: v => '$' + v.toFixed(2) } }
      }
    }
  });
}

// ─── Net Worth Timeline ───────────────────────────────────────────────────────
function renderNetWorthChart(canvasId, history) {
  destroyChart(canvasId);
  const ctx = getCtx(canvasId);
  if (!ctx) return;

  const labels = history.map((_, i) => `Month ${i + 1}`);

  activeCharts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Net Worth',
        data: history,
        borderColor: CHART_COLORS.green,
        backgroundColor: 'rgba(16,185,129,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 2,
      }]
    },
    options: {
      ...BASE_OPTIONS,
      plugins: { ...BASE_OPTIONS.plugins, title: { display: true, text: 'Net Worth Over Time', color: '#1F2937' } },
      scales: {
        ...BASE_OPTIONS.scales,
        y: { ...BASE_OPTIONS.scales.y, ticks: { callback: v => '$' + v.toLocaleString() } }
      }
    }
  });
}

// ─── Compound Growth Comparison ───────────────────────────────────────────────
function renderCompoundChart(canvasId, initialInvest, monthly, years) {
  destroyChart(canvasId);
  const ctx = getCtx(canvasId);
  if (!ctx) return;

  const months = years * 12;
  const withIndex = compoundGrowthMonthly(initialInvest, 0.08, months, monthly);
  const withSavings = compoundGrowthMonthly(initialInvest, 0.02, months, monthly);
  const contributed = Array.from({ length: months }, (_, i) => initialInvest + monthly * (i + 1));
  const labels = Array.from({ length: months }, (_, i) => `Y${Math.floor(i / 12) + 1}`);

  activeCharts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Index Fund (8%)', data: withIndex, borderColor: CHART_COLORS.green, backgroundColor: 'transparent', tension: 0.3, pointRadius: 0 },
        { label: 'Savings Account (2%)', data: withSavings, borderColor: CHART_COLORS.blue, backgroundColor: 'transparent', tension: 0.3, pointRadius: 0 },
        { label: 'Contributions Only', data: contributed, borderColor: CHART_COLORS.gray, borderDash: [5, 5], backgroundColor: 'transparent', tension: 0, pointRadius: 0 },
      ]
    },
    options: {
      ...BASE_OPTIONS,
      plugins: { ...BASE_OPTIONS.plugins, title: { display: true, text: `${years}-Year Growth Comparison`, color: '#1F2937' } },
      scales: {
        ...BASE_OPTIONS.scales,
        y: { ...BASE_OPTIONS.scales.y, ticks: { callback: v => '$' + v.toLocaleString() } }
      }
    }
  });
}
