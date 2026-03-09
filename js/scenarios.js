// scenarios.js — Life event cards for FinanceGame
// 20 cards, each with id, title, description, choices, and outcome functions.

'use strict';

const SCENARIO_CARDS = [
  {
    id: 'car_breakdown',
    title: 'Car Breakdown',
    emoji: '🚗',
    description: 'Your car broke down on the way to work. The mechanic says it needs $800 in repairs. Without it, you lose your job.',
    choices: [
      { text: 'Pay from emergency fund', key: 'emergency_fund',
        outcome: s => { s.cash -= 800; s.emergencyFund -= 800; return 'Used emergency fund. Smart — that\'s what it\'s for.'; } },
      { text: 'Put it on credit card', key: 'credit_card',
        outcome: s => { s.creditCardDebt += 800; return 'Added $800 to credit card debt at 24% APR.'; } },
      { text: 'Take a personal loan', key: 'personal_loan',
        outcome: s => { s.cash -= 50; s.creditCardDebt += 800; return 'Personal loan approved. $800 added to liabilities.'; } },
    ]
  },
  {
    id: 'medical_bill',
    title: 'Unexpected Medical Bill',
    emoji: '🏥',
    description: 'You received a $1,200 medical bill after a surprise ER visit. Insurance covered some, but not all.',
    choices: [
      { text: 'Pay in full from savings', key: 'pay_full',
        outcome: s => { s.cash -= 1200; return 'Paid in full. No interest, no stress.'; } },
      { text: 'Set up payment plan', key: 'payment_plan',
        outcome: s => { s.monthlyExpenses += 100; s.liabilities += 1200; return 'Payment plan: $100/month for 12 months. No interest.'; } },
      { text: 'Pay minimum credit card', key: 'credit_card',
        outcome: s => { s.creditCardDebt += 1200; return '$1,200 on credit card. At 24% APR, this costs ~$240/year in interest.'; } },
    ]
  },
  {
    id: 'raise',
    title: 'You Got a Raise!',
    emoji: '💰',
    description: 'Great news — your employer offered you a $400/month raise. What will you do with the extra income?',
    choices: [
      { text: 'Pay down credit card debt', key: 'debt',
        outcome: s => { s.income += 400; s.extraDebtPayment += 400; return 'Extra $400 attacks your debt. The avalanche method at work!'; } },
      { text: 'Boost emergency fund', key: 'emergency',
        outcome: s => { s.income += 400; s.emergencyFund += 400; return 'Building your safety net. Target: 3–6 months of expenses.'; } },
      { text: 'Invest in index funds', key: 'invest',
        outcome: s => { s.income += 400; s.portfolio += 400; return 'Invested in index fund. Compounding starts now!'; } },
    ]
  },
  {
    id: 'tax_refund',
    title: 'Tax Refund Arrived',
    emoji: '💵',
    description: 'You received a $1,800 tax refund. It\'s sitting in your account right now.',
    choices: [
      { text: 'Pay off credit card balance', key: 'credit_card',
        outcome: s => { const pay = Math.min(1800, s.creditCardDebt); s.cash -= pay; s.creditCardDebt -= pay; return `Paid $${pay.toFixed(0)} toward credit card. Interest savings add up fast.`; } },
      { text: 'Start Roth IRA contribution', key: 'roth',
        outcome: s => { s.portfolio += 1800; return '$1,800 in Roth IRA. Tax-free growth for decades.'; } },
      { text: 'Spend it (vacation)', key: 'spend',
        outcome: s => { s.cash -= 1800; return 'Vacation taken. The memories are real — but so is the lost compounding.'; } },
    ]
  },
  {
    id: 'credit_card_offer',
    title: 'Balance Transfer Offer',
    emoji: '💳',
    description: 'A new credit card offers 0% APR for 18 months on balance transfers. Your current card charges 24% APR.',
    choices: [
      { text: 'Transfer balance and pay aggressively', key: 'transfer_pay',
        outcome: s => { s.aprOverride = 0; s.aprOverrideTurns = 18; return '18 months at 0% APR. Every payment now hits principal!'; } },
      { text: 'Transfer but keep spending', key: 'transfer_spend',
        outcome: s => { s.aprOverride = 0; s.aprOverrideTurns = 18; s.creditCardDebt += 500; return 'Balance transferred, but new spending added $500. Be careful.'; } },
      { text: 'Ignore the offer', key: 'ignore',
        outcome: s => { return 'Kept current card. 24% APR continues.'; } },
    ]
  },
  {
    id: 'job_loss',
    title: 'Laid Off',
    emoji: '📋',
    description: 'Your company downsized. You have 2 weeks severance and need to find a new job.',
    choices: [
      { text: 'Draw from emergency fund', key: 'emergency',
        outcome: s => { s.income = 0; s.emergencyFundDrawing = true; return 'Emergency fund activated. This is exactly what it\'s for.'; } },
      { text: 'Take any job immediately', key: 'any_job',
        outcome: s => { s.income = Math.round(s.income * 0.7); return `Took a lower-paying job at $${s.income}/month. Back on track, but gap shows.`; } },
      { text: 'Go into debt while searching', key: 'debt',
        outcome: s => { s.income = 0; s.creditCardDebt += 1500; return 'Credit card covering expenses. Find work fast — interest compounds daily.'; } },
    ]
  },
  {
    id: 'market_crash',
    title: 'Stock Market Drop',
    emoji: '📉',
    description: 'Markets dropped 20% this month. Your portfolio is down $2,000. What\'s your move?',
    choices: [
      { text: 'Stay the course — don\'t panic sell', key: 'hold',
        outcome: s => { return 'Held positions. Historically, markets recover. Time in market beats timing the market.'; } },
      { text: 'Buy more while prices are low', key: 'buy',
        outcome: s => { s.portfolio += 1000; s.cash -= 1000; return 'Bought the dip. Dollar-cost averaging at work.'; } },
      { text: 'Sell everything to stop losses', key: 'sell',
        outcome: s => { s.portfolio *= 0.8; s.cash += s.portfolio * 0.2; return 'Sold at a loss. Locked in the decline. Very hard to recover from.'; } },
    ]
  },
  {
    id: 'housing_opportunity',
    title: 'First Home Available',
    emoji: '🏠',
    description: 'A starter home is listed at $280,000. With 20% down ($56,000), your mortgage would be ~$1,490/month at 7% APR.',
    choices: [
      { text: 'Buy (if you have the down payment)', key: 'buy',
        outcome: s => {
          if (s.cash >= 56000) {
            s.cash -= 56000;
            s.assets += 280000;
            s.liabilities += 224000;
            s.monthlyExpenses += 1490;
            return 'Home purchased! Monthly payment: $1,490. Building equity now.';
          }
          return 'Not enough cash for down payment. Keep saving!';
        }
      },
      { text: 'Keep renting and saving', key: 'rent',
        outcome: s => { return 'Continued renting. Less risk, more flexibility, building cash reserves.'; } },
      { text: 'Buy with only 3% down (PMI required)', key: 'fha',
        outcome: s => {
          s.cash -= 8400;
          s.assets += 280000;
          s.liabilities += 271600;
          s.monthlyExpenses += 1750;
          return 'Low down payment = PMI added. Monthly payment: $1,750 (includes $260 PMI).';
        }
      },
    ]
  },
  {
    id: 'emergency_fund_wipe',
    title: 'Roof Leak + AC Dies',
    emoji: '🌧️',
    description: 'Two appliances failed the same week. Total repair bill: $4,500. This is why you have an emergency fund.',
    choices: [
      { text: 'Use emergency fund', key: 'emergency',
        outcome: s => { const use = Math.min(4500, s.emergencyFund); s.emergencyFund -= use; s.creditCardDebt += Math.max(0, 4500 - use); return `Used $${use.toFixed(0)} of emergency fund. Remainder on credit card.`; } },
      { text: 'Finance through home equity line', key: 'heloc',
        outcome: s => { s.liabilities += 4500; s.monthlyExpenses += 80; return 'HELOC used. Lower rate than credit card, but more debt.'; } },
    ]
  },
  {
    id: 'student_loan_refi',
    title: 'Student Loan Refinance Offer',
    emoji: '🎓',
    description: 'A lender offers to refinance your student loans from 6.5% to 4.8% APR. Lower rate, but you lose federal protections.',
    choices: [
      { text: 'Refinance — save on interest', key: 'refi',
        outcome: s => { s.studentLoanApr = 0.048; return 'Refinanced! Monthly interest cost drops. You\'re saving ~1.7% annually.'; } },
      { text: 'Keep federal loans for protections', key: 'keep',
        outcome: s => { return 'Kept federal loans. Income-driven repayment and forgiveness options preserved.'; } },
    ]
  },
  {
    id: 'bonus',
    title: 'Year-End Bonus',
    emoji: '🎉',
    description: 'You earned a $3,000 year-end bonus. Rare windfall — make it count.',
    choices: [
      { text: 'Max out Roth IRA ($500 for the year)', key: 'roth',
        outcome: s => { s.portfolio += 500; s.cash += 2500; return '$500 to Roth IRA, rest to savings. Tax-advantaged investing locked in.'; } },
      { text: 'Throw it all at debt (avalanche)', key: 'debt',
        outcome: s => { const pay = Math.min(3000, s.creditCardDebt); s.creditCardDebt -= pay; s.cash -= pay; return `$${pay.toFixed(0)} off highest-interest debt. Pure progress.`; } },
      { text: 'Split: half debt, half invest', key: 'split',
        outcome: s => { s.creditCardDebt -= Math.min(1500, s.creditCardDebt); s.portfolio += 1500; return 'Balanced approach: debt down, portfolio up.'; } },
    ]
  },
  {
    id: '401k_match',
    title: 'Employer 401(k) Match',
    emoji: '🏦',
    description: 'HR just informed you — your employer matches 401(k) contributions 100% up to 4% of salary. You\'re not contributing yet.',
    choices: [
      { text: 'Contribute 4% to capture full match', key: 'full_match',
        outcome: s => { const contrib = s.income * 0.04; s.monthlyExpenses += contrib; s.portfolio += contrib * 2; return `Contributing $${contrib.toFixed(0)}/mo. Employer adds $${contrib.toFixed(0)} more. 100% instant return!`; } },
      { text: 'Can\'t afford it right now', key: 'skip',
        outcome: s => { return 'No contribution. You\'re leaving free money on the table — the highest-ROI action available.'; } },
    ]
  },
  {
    id: 'identity_theft',
    title: 'Identity Theft Alert',
    emoji: '🔐',
    description: 'A fraudulent credit card was opened in your name. $2,400 in charges you didn\'t make.',
    choices: [
      { text: 'File fraud report and dispute charges', key: 'dispute',
        outcome: s => { return 'Charges disputed. Fraud report filed. This takes 30–60 days to resolve.'; } },
      { text: 'Pay it to make it go away', key: 'pay',
        outcome: s => { s.cash -= 2400; return 'Paid the fraud. Should not have — you are not liable for fraudulent charges if reported.'; } },
    ]
  },
  {
    id: 'insurance_lapse',
    title: 'Missed Insurance Payment',
    emoji: '⚠️',
    description: 'You missed a health insurance premium payment. Coverage lapsed for 2 weeks. Minor illness required a doctor visit.',
    choices: [
      { text: 'Pay out-of-pocket ($350 visit)', key: 'pay',
        outcome: s => { s.cash -= 350; return 'Paid $350 out of pocket. Insurance reinstated. Always automate premium payments.'; } },
      { text: 'Delay care — hope it resolves', key: 'delay',
        outcome: s => { s.cash -= 800; return 'Delayed care worsened condition. Final bill: $800. Earlier care was cheaper.'; } },
    ]
  },
  {
    id: 'freelance_income',
    title: 'Freelance Side Income',
    emoji: '💻',
    description: 'A friend offered you a $1,500 freelance project. 20 hours of work over 2 weekends.',
    choices: [
      { text: 'Accept and use it for debt', key: 'debt',
        outcome: s => { s.cash += 1500; s.creditCardDebt -= Math.min(1500, s.creditCardDebt); return '$1,500 freelance income. Used for debt payoff. Effective hourly rate: $75.'; } },
      { text: 'Accept and invest it', key: 'invest',
        outcome: s => { s.portfolio += 1500; return '$1,500 invested. At 8% average annual return, this grows to ~$3,200 in 10 years.'; } },
      { text: 'Decline — too busy', key: 'decline',
        outcome: s => { return 'Declined. Time has value. Nothing wrong with protecting your bandwidth.'; } },
    ]
  },
  {
    id: 'college_fund',
    title: 'Start a 529 College Fund?',
    emoji: '📚',
    description: 'A financial advisor suggests opening a 529 college savings plan. State tax deduction available on contributions.',
    choices: [
      { text: 'Open 529, contribute $100/month', key: 'open',
        outcome: s => { s.monthlyExpenses += 100; s.portfolio += 100; return '529 opened. Tax-advantaged growth for education. Great long-term move.'; } },
      { text: 'Not a priority right now', key: 'skip',
        outcome: s => { return 'No 529 started. Prioritize your own emergency fund and retirement first.'; } },
    ]
  },
  {
    id: 'car_purchase',
    title: 'Car Lease Expiring',
    emoji: '🚙',
    description: 'Your car lease ends next month. Dealer offers to sell you the car at market value ($18,000) or lease a newer model.',
    choices: [
      { text: 'Buy used car outright (if you can)', key: 'buy',
        outcome: s => {
          if (s.cash >= 18000) {
            s.cash -= 18000;
            s.assets += 18000;
            return 'Bought outright. No monthly payment. Depreciation is a sunk cost, not new debt.';
          }
          return 'Not enough cash. Consider a shorter loan term if financing.';
        }
      },
      { text: 'Finance the purchase (5yr @ 7%)', key: 'finance',
        outcome: s => { s.liabilities += 18000; s.monthlyExpenses += 356; return 'Financed at 7%. Monthly payment: $356. Total interest over 5 years: ~$3,360.'; } },
      { text: 'Lease newer model', key: 'lease',
        outcome: s => { s.monthlyExpenses += 320; return 'New lease: $320/month. Convenience, but you never build equity.'; } },
    ]
  },
  {
    id: 'windfall',
    title: 'Inheritance',
    emoji: '📜',
    description: 'A relative left you $15,000. This is a rare, meaningful amount of money. What do you do?',
    choices: [
      { text: 'Pay off all high-interest debt first', key: 'debt',
        outcome: s => {
          const debtPay = Math.min(15000, s.creditCardDebt);
          s.creditCardDebt -= debtPay;
          s.cash += 15000 - debtPay;
          return `Paid off $${debtPay.toFixed(0)} of credit card debt. Guaranteed return = your APR (24%).`;
        }
      },
      { text: 'Split: 50% debt, 50% invest', key: 'split',
        outcome: s => { s.creditCardDebt -= Math.min(7500, s.creditCardDebt); s.portfolio += 7500; return 'Balanced move: debt down, investments up.'; } },
      { text: 'Invest all in index funds', key: 'invest',
        outcome: s => { s.portfolio += 15000; return '$15,000 invested. If high-interest debt exists, investing below that rate is suboptimal.'; } },
    ]
  },
  {
    id: 'subscription_audit',
    title: 'Subscription Creep',
    emoji: '📱',
    description: 'You review your bank statement and find $180/month in subscriptions you barely use.',
    choices: [
      { text: 'Cancel all unused — save $120/month', key: 'cancel',
        outcome: s => { s.monthlyExpenses -= 120; return '$120/month freed up. Over 10 years at 8% return: ~$22,000 in potential investment growth.'; } },
      { text: 'Cancel just a few — save $60/month', key: 'partial',
        outcome: s => { s.monthlyExpenses -= 60; return 'Partial cuts. $60/month saved. Better than nothing.'; } },
      { text: 'Keep them — they spark joy', key: 'keep',
        outcome: s => { return 'No change. At least now you know what you\'re paying for.'; } },
    ]
  },
  {
    id: 'overdraft',
    title: 'Bank Overdraft',
    emoji: '🏧',
    description: 'An automatic bill hit before your paycheck cleared. $35 overdraft fee charged.',
    choices: [
      { text: 'Call bank — request fee waiver', key: 'waive',
        outcome: s => { return 'Fee waived! One call saved $35. Banks often waive first-time fees.'; } },
      { text: 'Pay the fee, set up overdraft protection', key: 'protect',
        outcome: s => { s.cash -= 35; return '$35 paid. Overdraft protection set up. Move autopay dates 2 days after payday.'; } },
    ]
  }
];

/**
 * Shuffle array in-place using Fisher-Yates (seeded).
 */
function shuffleDeck(cards, seed) {
  const rng = seededRng(seed);
  const arr = cards.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
