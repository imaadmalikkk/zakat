import { CalculatorState, CategoryResult, ZakatSummary } from "./types";
import { getNisabThreshold } from "./nisab";
import {
  getSheepZakat,
  getCattleZakat,
  getCamelZakat,
} from "../data/livestock-tables";

const STANDARD_RATE = 0.025;

function calcCash(inputs: CalculatorState["cash"]): CategoryResult {
  const total =
    inputs.bankAccounts + inputs.cashOnHand + inputs.otherCurrencies;
  return {
    categoryId: "cash",
    label: "Cash & Savings",
    zakatableAmount: total,
    zakatDue: total * STANDARD_RATE,
    rate: STANDARD_RATE,
  };
}

function calcGoldSilver(
  inputs: CalculatorState["goldSilver"],
): CategoryResult {
  const total = inputs.goldValue + inputs.silverValue;
  return {
    categoryId: "gold-silver",
    label: "Gold & Silver",
    zakatableAmount: total,
    zakatDue: total * STANDARD_RATE,
    rate: STANDARD_RATE,
  };
}

function calcStocks(inputs: CalculatorState["stocks"]): CategoryResult {
  if (inputs.isActiveTrader) {
    return {
      categoryId: "stocks",
      label: "Stocks & Investments",
      zakatableAmount: inputs.tradingPortfolioValue,
      zakatDue: inputs.tradingPortfolioValue * STANDARD_RATE,
      rate: STANDARD_RATE,
      note: "full market value — active trading",
    };
  }
  return {
    categoryId: "stocks",
    label: "Stocks & Investments",
    zakatableAmount: inputs.profitsAndDividends,
    zakatDue: inputs.profitsAndDividends * STANDARD_RATE,
    rate: STANDARD_RATE,
    note: "profits only — long-term hold",
  };
}

function calcBusiness(inputs: CalculatorState["business"]): CategoryResult {
  const total =
    inputs.inventoryValue + inputs.rawMaterials + inputs.receivables;
  return {
    categoryId: "business",
    label: "Business Assets",
    zakatableAmount: total,
    zakatDue: total * STANDARD_RATE,
    rate: STANDARD_RATE,
  };
}

function calcCrypto(inputs: CalculatorState["crypto"]): CategoryResult {
  return {
    categoryId: "crypto",
    label: "Cryptocurrency",
    zakatableAmount: inputs.totalValue,
    zakatDue: inputs.totalValue * STANDARD_RATE,
    rate: STANDARD_RATE,
  };
}

function calcRetirement(
  inputs: CalculatorState["retirement"]
): CategoryResult {
  return {
    categoryId: "retirement",
    label: "Retirement Accounts",
    zakatableAmount: inputs.accessibleBalance,
    zakatDue: inputs.accessibleBalance * STANDARD_RATE,
    rate: STANDARD_RATE,
    note: "accessible portion only",
  };
}

function calcRental(inputs: CalculatorState["rental"]): CategoryResult {
  return {
    categoryId: "rental",
    label: "Rental Income",
    zakatableAmount: inputs.netRentalIncome,
    zakatDue: inputs.netRentalIncome * STANDARD_RATE,
    rate: STANDARD_RATE,
    note: "net rental income — not property value",
  };
}

function calcDebtsOwed(
  inputs: CalculatorState["debtsOwed"]
): CategoryResult {
  return {
    categoryId: "debts-owed",
    label: "Debts Owed to You",
    zakatableAmount: inputs.collectibleDebts,
    zakatDue: inputs.collectibleDebts * STANDARD_RATE,
    rate: STANDARD_RATE,
    note: "collectible debts only",
  };
}

function calcAgriculture(
  inputs: CalculatorState["agriculture"]
): CategoryResult {
  const rate = inputs.isIrrigated ? 0.05 : 0.1;
  return {
    categoryId: "agriculture",
    label: "Agricultural Produce",
    zakatableAmount: inputs.produceValueOrWeight,
    zakatDue: inputs.produceValueOrWeight * rate,
    rate,
    note: inputs.isIrrigated
      ? "5% — artificially irrigated"
      : "10% — rain-fed",
  };
}

function calcLivestock(
  inputs: CalculatorState["livestock"]
): CategoryResult {
  const parts: string[] = [];
  if (inputs.sheepCount > 0)
    parts.push(
      `Sheep (${inputs.sheepCount}): ${getSheepZakat(inputs.sheepCount)}`
    );
  if (inputs.cattleCount > 0)
    parts.push(
      `Cattle (${inputs.cattleCount}): ${getCattleZakat(inputs.cattleCount)}`
    );
  if (inputs.camelCount > 0)
    parts.push(
      `Camels (${inputs.camelCount}): ${getCamelZakat(inputs.camelCount)}`
    );
  return {
    categoryId: "livestock",
    label: "Livestock",
    zakatableAmount: 0,
    zakatDue: 0,
    rate: 0,
    note: parts.length > 0 ? parts.join("; ") : undefined,
  };
}

export function calculateZakat(state: CalculatorState): ZakatSummary {
  const categories: CategoryResult[] = [
    calcCash(state.cash),
    calcGoldSilver(state.goldSilver),
    calcStocks(state.stocks),
    calcBusiness(state.business),
    calcCrypto(state.crypto),
    calcRetirement(state.retirement),
    calcRental(state.rental),
    calcDebtsOwed(state.debtsOwed),
    calcAgriculture(state.agriculture),
    calcLivestock(state.livestock),
  ];

  const totalZakatableWealth = categories.reduce(
    (sum, c) => sum + c.zakatableAmount,
    0
  );
  const totalDeductions =
    state.deductions.immediateDebts + state.deductions.upcomingExpenses;
  const netZakatableWealth = Math.max(0, totalZakatableWealth - totalDeductions);
  const nisabThreshold = getNisabThreshold(state.nisab);
  const meetsNisab = netZakatableWealth >= nisabThreshold;

  const standardCategoryIds = [
    "cash",
    "gold-silver",
    "stocks",
    "business",
    "crypto",
    "retirement",
    "rental",
    "debts-owed",
  ];
  const standardTotal = categories
    .filter((c) => standardCategoryIds.includes(c.categoryId))
    .reduce((sum, c) => sum + c.zakatableAmount, 0);
  const netStandardTotal = Math.max(0, standardTotal - totalDeductions);
  const standardZakat = meetsNisab ? netStandardTotal * STANDARD_RATE : 0;

  const agResult = categories.find((c) => c.categoryId === "agriculture")!;
  const totalZakatDue = meetsNisab ? standardZakat + agResult.zakatDue : 0;

  return {
    totalZakatableWealth,
    totalDeductions,
    netZakatableWealth,
    totalZakatDue,
    meetsNisab,
    nisabThreshold,
    nisabStandard: state.nisab.standard,
    categories,
  };
}
