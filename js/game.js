// game.js — Core game loop, state, and navigation for FinanceGame
// Alpine.js handles UI state only. All financial logic is plain JS.

'use strict';

// ─── Starting Scenarios ──────────────────────────────────────────────────────
const SCENARIOS = {
  teen: {
    id: 'teen',
    name: 'Jordan — High School Senior',
    description: 'Part-time job, no debt, learning the basics.',
    cash: 500,
    income: 800,
    monthlyExpenses: 200,
    creditCardDebt: 0,
    studentLoanDebt: 0,
    mortgage: 0,
    portfolio: 0,
    emergencyFund: 0,
    primaryMetric: 'savingsRate',
    apr: 0.24,
    studentLoanApr: 0,
  },
  youngAdult: {
    id: 'youngAdult',
    name: 'Alex — Recent Graduate',
    description: '$26,000 in student loans, starting career.',
    cash: 2000,
    income: 3500,
    monthlyExpenses: 1800,
    creditCardDebt: 3200,
    studentLoanDebt: 26000,
    mortgage: 0,
    portfolio: 0,
    emergencyFund: 500,
    primaryMetric: 'cashFlow',
    apr: 0.245,
    studentLoanApr: 0.065,
  },
  adult: {
    id: 'adult',
    name: 'Morgan — Established Professional',
    description: 'Homeowner with mortgage, building wealth.',
    cash: 8000,
    income: 6500,
    monthlyExpenses: 3200,
    creditCardDebt: 4800,
    studentLoanDebt: 0,
    mortgage: 220000,
    portfolio: 15000,
    emergencyFund: 6000,
    primaryMetric: 'netWorth',
    apr: 0.24,
    studentLoanApr: 0,
  }
};

// ─── Game State ───────────────────────────────────────────────────────────────
function createInitialState(scenarioId, playerName) {
  const base = SCENARIOS[scenarioId];
  const initialAssets = base.cash + base.emergencyFund + base.portfolio + (base.mortgage > 0 ? base.mortgage + 60000 : 0);
  const initialLiabilities = base.creditCardDebt + base.studentLoanDebt + base.mortgage;
  return {
    playerName,
    scenarioId,
    month: 1,
    ...JSON.parse(JSON.stringify(base)),
    assets: initialAssets,
    liabilities: initialLiabilities,
    initialNetWorth: initialAssets - initialLiabilities,
    extraDebtPayment: 0,
    aprOverride: null,
    aprOverrideTurns: 0,
    netWorthHistory: [],
    cashFlowHistory: [],
    decisionLog: [],
    scenarioDeck: null,
    scenarioIndex: 0,
    portfolioPositions: {},
    lastEventId: null,
    lastEventOutcome: null,
    monthSummary: null,
  };
}

function saveState(state) {
  localStorage.setItem('financeGame_state', JSON.stringify(state));
}

function loadState() {
  try {
    const raw = localStorage.getItem('financeGame_state');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function exportState(state) {
  const data = JSON.stringify(state);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `financegame-save-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importState(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try { callback(JSON.parse(ev.target.result)); } catch { alert('Invalid save file.'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ─── Month Advance Logic ──────────────────────────────────────────────────────
function advanceMonth(state) {
  const s = { ...state };
  const summary = { month: s.month, events: [], decisions: [] };

  // 1. Income
  let income = s.income;
  summary.income = income;

  // 2. Fixed expenses
  let expenses = s.monthlyExpenses;
  summary.expenses = expenses;

  // 3. Debt interest
  const effectiveApr = (s.aprOverride !== null && s.aprOverrideTurns > 0) ? s.aprOverride : s.apr;
  const ccInterest = monthlyInterest(s.creditCardDebt, effectiveApr);
  const slInterest = monthlyInterest(s.studentLoanDebt, s.studentLoanApr || 0);
  const mortgageMonthly = s.mortgage > 0 ? mortgagePayment(s.mortgage, 0.07, 360) : 0;

  // 4. Minimum payments
  const ccMinPay = minPayment(s.creditCardDebt);
  const slMinPay = s.studentLoanDebt > 0 ? Math.max(100, s.studentLoanDebt * 0.01) : 0;

  const totalDebtPayments = ccMinPay + slMinPay + mortgageMonthly;
  summary.debtPayments = totalDebtPayments;

  // 5. Update debt
  s.creditCardDebt = Math.max(0, s.creditCardDebt + ccInterest - ccMinPay - (s.extraDebtPayment || 0));
  s.studentLoanDebt = Math.max(0, s.studentLoanDebt + slInterest - slMinPay);
  if (s.mortgage > 0) {
    const mortInterest = s.mortgage * (0.07 / 12);
    const mortPrincipal = mortgageMonthly - mortInterest;
    s.mortgage = Math.max(0, s.mortgage - mortPrincipal);
  }

  // 6. APR override countdown
  if (s.aprOverrideTurns > 0) {
    s.aprOverrideTurns--;
    if (s.aprOverrideTurns === 0) s.aprOverride = null;
  }

  // 7. Portfolio growth (seeded random walk)
  if (s.portfolio > 0) {
    const seed = s.month * 7919 + (s.scenarioId === 'adult' ? 1000 : 0);
    const rng = seededRng(seed);
    const monthReturn = 0.08 / 12 + (rng() - 0.5) * 0.06;
    s.portfolio = s.portfolio * (1 + monthReturn);
  }

  // 8. Cash flow
  const cf = income - expenses - totalDebtPayments;
  s.cash += cf;
  summary.cashFlow = cf;
  s.cashFlowHistory = [...(s.cashFlowHistory || []), cf];

  // 9. Net worth snapshot
  s.assets = s.cash + s.emergencyFund + s.portfolio + (s.mortgage > 0 ? s.mortgage + 60000 : 0);
  s.liabilities = s.creditCardDebt + s.studentLoanDebt + s.mortgage;
  const nw = netWorth(s.assets, s.liabilities);
  s.netWorthHistory = [...(s.netWorthHistory || []), nw];

  // 10. Draw scenario card every 2–3 months
  if (s.month % 2 === 0 && !s.pendingEvent) {
    if (!s.scenarioDeck || s.scenarioIndex >= s.scenarioDeck.length) {
      s.scenarioDeck = shuffleDeck(SCENARIO_CARDS, s.month * 13).map(c => c.id);
      s.scenarioIndex = 0;
    }
    s.pendingEvent = s.scenarioDeck[s.scenarioIndex];
    s.scenarioIndex++;
  }

  s.month++;
  s.monthSummary = summary;
  s.extraDebtPayment = 0;
  return s;
}

// ─── Alpine.js App ────────────────────────────────────────────────────────────
function gameApp() {
  return {
    // UI state (Alpine manages this)
    screen: 'home',          // home | onboarding | dashboard | event | financials | summary
    financialsTab: 'debt',   // debt | portfolio | budget
    playerName: '',
    selectedScenario: 'youngAdult',
    setupComplete: false,

    // Game state (plain JS, NOT Alpine reactive for financial data)
    state: null,

    init() {
      const saved = loadState();
      if (saved && saved.month > 1) {
        this.state = saved;
        this.screen = 'dashboard';
        this.setupComplete = true;
        this.$nextTick(() => this.refreshCharts());
      }
    },

    // ── Navigation ─────────────────────────────────────────────────────────

    startGame() {
      if (!this.playerName.trim()) { this.playerName = 'Player'; }
      this.state = createInitialState(this.selectedScenario, this.playerName);
      // Initialize scenario deck
      this.state.scenarioDeck = shuffleDeck(SCENARIO_CARDS, Date.now()).map(c => c.id);
      saveState(this.state);
      this.setupComplete = true;
      this.screen = 'dashboard';
      this.$nextTick(() => this.refreshCharts());
    },

    goToFinancials(tab) {
      this.financialsTab = tab || 'debt';
      this.screen = 'financials';
      this.$nextTick(() => this.renderFinancialCharts());
    },

    goToDashboard() {
      this.screen = 'dashboard';
      this.$nextTick(() => this.refreshCharts());
    },

    // ── Month Advance ───────────────────────────────────────────────────────

    advanceMonth() {
      this.state = advanceMonth(this.state);
      saveState(this.state);
      if (this.state.pendingEvent) {
        this.screen = 'event';
      } else {
        this.screen = 'summary';
        this.$nextTick(() => this.renderNetWorthChart());
      }
    },

    resolveEvent(choiceKey) {
      const card = SCENARIO_CARDS.find(c => c.id === this.state.pendingEvent);
      if (!card) { this.state.pendingEvent = null; this.screen = 'summary'; return; }
      const choice = card.choices.find(c => c.key === choiceKey);
      if (!choice) return;
      const s = { ...this.state };
      const outcome = choice.outcome(s);
      s.lastEventId = card.id;
      s.lastEventOutcome = outcome;
      s.pendingEvent = null;
      s.decisionLog = [...(s.decisionLog || []), { month: s.month - 1, event: card.title, choice: choice.text, outcome }];
      this.state = s;
      saveState(this.state);
      this.screen = 'summary';
      this.$nextTick(() => this.renderNetWorthChart());
    },

    continueSummary() {
      this.state.monthSummary = null;
      this.state.lastEventId = null;
      this.state.lastEventOutcome = null;
      saveState(this.state);
      this.screen = 'dashboard';
      this.$nextTick(() => this.refreshCharts());
    },

    // ── Computed Display Values ─────────────────────────────────────────────

    get primaryMetricLabel() {
      if (!this.state) return '';
      const m = this.state.primaryMetric;
      if (m === 'cashFlow') return 'Monthly Cash Flow';
      if (m === 'netWorth') return 'Net Worth';
      return 'Savings Rate';
    },

    get primaryMetricValue() {
      if (!this.state) return '$0';
      const s = this.state;
      if (s.primaryMetric === 'cashFlow') {
        const cf = s.income - s.monthlyExpenses - minPayment(s.creditCardDebt);
        return formatCurrency(cf);
      }
      if (s.primaryMetric === 'netWorth') {
        return formatCurrency(netWorth(s.assets, s.liabilities));
      }
      const sr = savingsRate(s.cash * 0.3, s.income);
      return formatPct(sr);
    },

    get currentCard() {
      if (!this.state || !this.state.pendingEvent) return null;
      return SCENARIO_CARDS.find(c => c.id === this.state.pendingEvent) || null;
    },

    get currentScenarioName() {
      if (!this.state) return '';
      return SCENARIOS[this.state.scenarioId]?.name || '';
    },

    // ── Debt Calculator (standalone slider) ────────────────────────────────

    debtCalcBalance: 5000,
    debtCalcApr: 24,
    debtCalcPayment: 100,

    get debtCalcResults() {
      const bal = parseFloat(this.debtCalcBalance) || 0;
      const apr = parseFloat(this.debtCalcApr) / 100 || 0;
      const pay = parseFloat(this.debtCalcPayment) || 0;
      const interest = monthlyInterest(bal, apr);
      const months = monthsToPayoff(bal, apr, pay);
      const totalInt = totalInterestPaid(bal, apr, pay);
      return {
        monthlyInterest: formatCurrency(interest),
        months: isFinite(months) ? months : '∞',
        totalInterest: isFinite(totalInt) ? formatCurrency(totalInt) : '∞',
        minPayment: formatCurrency(minPayment(bal)),
        warning: pay <= interest,
      };
    },

    // ── Mortgage Calculator ──────────────────────────────────────────────────

    mortCalcPrincipal: 300000,
    mortCalcRate: 7,
    mortCalcYears: 30,

    get mortCalcResults() {
      const P = parseFloat(this.mortCalcPrincipal) || 0;
      const r = parseFloat(this.mortCalcRate) / 100 || 0;
      const n = parseFloat(this.mortCalcYears) * 12 || 360;
      const pmt = mortgagePayment(P, r, n);
      const totalInt = mortgageTotalInterest(P, r, n);
      return {
        monthly: formatCurrency(pmt),
        totalInterest: formatCurrency(totalInt),
        totalPaid: formatCurrency(pmt * n),
      };
    },

    // ── Stock Simulator ──────────────────────────────────────────────────────

    stocks: [
      { ticker: 'IDXF', name: 'Index Fund ETF', price: 100, shares: 0, seed: 42, drift: 0.08, vol: 0.15 },
      { ticker: 'TECH', name: 'Tech Growth Co.', price: 85, shares: 0, seed: 137, drift: 0.12, vol: 0.35 },
      { ticker: 'BOND', name: 'Bond Fund', price: 50, shares: 0, seed: 256, drift: 0.03, vol: 0.05 },
      { ticker: 'DIVD', name: 'Dividend Stock', price: 65, shares: 0, seed: 501, drift: 0.06, vol: 0.12 },
    ],
    stockMonth: 0,
    virtualCash: 10000,
    stockTradeMsg: '',

    get stockPortfolioValue() {
      return this.stocks.reduce((sum, s) => sum + s.price * s.shares, 0);
    },

    get stockPnl() {
      return this.stocks.reduce((sum, s) => {
        return sum + (s.shares > 0 ? (s.price - s.avgCost || 0) * s.shares : 0);
      }, 0);
    },

    buyStock(ticker) {
      const s = this.stocks.find(x => x.ticker === ticker);
      if (!s || this.virtualCash < s.price) { this.stockTradeMsg = 'Not enough cash.'; return; }
      s.shares = (s.shares || 0) + 1;
      const prev = s.avgCost || s.price;
      s.avgCost = ((prev * (s.shares - 1)) + s.price) / s.shares;
      this.virtualCash -= s.price;
      this.stockTradeMsg = `Bought 1 ${ticker} @ ${formatCurrency(s.price)}`;
    },

    sellStock(ticker) {
      const s = this.stocks.find(x => x.ticker === ticker);
      if (!s || (s.shares || 0) < 1) { this.stockTradeMsg = 'No shares to sell.'; return; }
      s.shares--;
      this.virtualCash += s.price;
      this.stockTradeMsg = `Sold 1 ${ticker} @ ${formatCurrency(s.price)}`;
    },

    advanceStockMonth() {
      this.stockMonth++;
      this.stocks = this.stocks.map(s => {
        const prices = simulateStockPrices(s.price, s.drift, s.vol, 1, s.seed + this.stockMonth * 31);
        return { ...s, price: parseFloat(prices[1].toFixed(2)) };
      });
      this.$nextTick(() => this.renderStockChart());
    },

    // ── Options Module ───────────────────────────────────────────────────────

    optStockPrice: 50,
    optStrike: 55,
    optPremium: 2,
    optExpiry: 50,

    get coveredCallResults() {
      const sp = parseFloat(this.optStockPrice) || 50;
      const str = parseFloat(this.optStrike) || 55;
      const prem = parseFloat(this.optPremium) || 2;
      const exp = parseFloat(this.optExpiry) || 50;
      const pnl = coveredCallPnl(sp, str, prem, exp);
      const maxProfit = (str - sp + prem) * 100;
      const breakeven = sp - prem;
      return {
        pnl: formatCurrency(pnl),
        maxProfit: formatCurrency(maxProfit),
        breakeven: formatCurrency(breakeven),
        premiumReceived: formatCurrency(prem * 100),
        outcome: exp >= str ? 'Called away — shares sold at strike price.' : 'Call expired worthless — kept premium + shares.',
      };
    },

    // ── Futures Module ───────────────────────────────────────────────────────

    futEntry: 4500,
    futExit: 4550,
    futContracts: 1,
    futMargin: 11000,
    futAccountEquity: 12000,

    get futuresResults() {
      const entry = parseFloat(this.futEntry) || 4500;
      const exit = parseFloat(this.futExit) || 4550;
      const contracts = parseInt(this.futContracts) || 1;
      const margin = parseFloat(this.futMargin) || 11000;
      const equity = parseFloat(this.futAccountEquity) || 12000;
      const pnl = futuresPnl(entry, exit, 50, contracts);
      const leverage = (entry * 50 * contracts) / margin;
      const maintenanceMargin = margin * 0.75;
      const marginCallTriggered = isMarginCall(equity + pnl, maintenanceMargin);
      return {
        pnl: formatCurrency(pnl),
        leverage: leverage.toFixed(1) + 'x',
        contractValue: formatCurrency(entry * 50 * contracts),
        marginRequired: formatCurrency(margin),
        maintenanceMargin: formatCurrency(maintenanceMargin),
        marginCall: marginCallTriggered,
        marginCallMsg: marginCallTriggered ? 'MARGIN CALL — Position liquidated!' : 'No margin call.',
      };
    },

    // ── Chart Rendering ──────────────────────────────────────────────────────

    refreshCharts() {
      // Debt clock chart on dashboard
      if (this.state && document.getElementById('chart-debt-clock')) {
        const bal = this.state.creditCardDebt;
        const pay = minPayment(bal) + 50;
        renderDebtPayoffChart('chart-debt-clock', bal, this.state.apr, pay);
      }
    },

    renderNetWorthChart() {
      if (this.state && this.state.netWorthHistory.length > 1) {
        renderNetWorthChart('chart-networth', this.state.netWorthHistory);
      }
    },

    renderFinancialCharts() {
      if (!this.state) return;
      if (this.financialsTab === 'debt' && document.getElementById('chart-amort')) {
        renderDebtPayoffChart('chart-amort', this.state.creditCardDebt, this.state.apr, minPayment(this.state.creditCardDebt) + 100);
      }
      if (this.financialsTab === 'portfolio' && document.getElementById('chart-portfolio')) {
        renderCompoundChart('chart-portfolio', this.state.portfolio, 200, 20);
      }
    },

    renderStockChart() {
      if (document.getElementById('chart-stock')) {
        const s = this.stocks[0];
        const history = simulateStockPrices(100, s.drift, s.vol, this.stockMonth + 12, s.seed);
        renderPortfolioChart('chart-stock', history.slice(0, this.stockMonth + 13), 'IDXF Price');
      }
    },

    renderDebtCalcChart() {
      const bal = parseFloat(this.debtCalcBalance) || 0;
      const apr = parseFloat(this.debtCalcApr) / 100 || 0;
      const pay = parseFloat(this.debtCalcPayment) || 0;
      if (bal > 0 && pay > 0 && document.getElementById('chart-debt-calc')) {
        renderDebtPayoffChart('chart-debt-calc', bal, apr, pay);
      }
    },

    renderMortgageChart() {
      const P = parseFloat(this.mortCalcPrincipal) || 0;
      const r = parseFloat(this.mortCalcRate) / 100 || 0;
      const n = parseFloat(this.mortCalcYears) * 12 || 360;
      if (P > 0 && document.getElementById('chart-mortgage')) {
        renderAmortizationChart('chart-mortgage', P, r, n);
      }
    },

    // ── Save / Load ──────────────────────────────────────────────────────────

    exportSave() { if (this.state) exportState(this.state); },
    importSave() {
      importState(loaded => {
        this.state = loaded;
        this.setupComplete = true;
        this.screen = 'dashboard';
        saveState(loaded);
        this.$nextTick(() => this.refreshCharts());
      });
    },

    resetGame() {
      if (!confirm('Start over? Current progress will be lost.')) return;
      localStorage.removeItem('financeGame_state');
      this.state = null;
      this.setupComplete = false;
      this.screen = 'home';
      this.playerName = '';
      this.selectedScenario = 'youngAdult';
    },
  };
}

document.addEventListener('alpine:init', () => {
  Alpine.data('gameApp', gameApp);
});
