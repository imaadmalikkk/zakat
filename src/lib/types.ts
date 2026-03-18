export type NisabStandard = "silver" | "gold";

export interface NisabConfig {
  standard: NisabStandard;
  goldPricePerGram: number;
  silverPricePerGram: number;
  manualOverride: boolean;
}

export interface CategoryResult {
  categoryId: string;
  label: string;
  zakatableAmount: number;
  zakatDue: number;
  rate: number;
  note?: string;
}

export interface ZakatSummary {
  totalZakatableWealth: number;
  totalDeductions: number;
  netZakatableWealth: number;
  totalZakatDue: number;
  meetsNisab: boolean;
  nisabThreshold: number;
  nisabStandard: NisabStandard;
  categories: CategoryResult[];
}

export interface CashInputs {
  bankAccounts: number;
  cashOnHand: number;
  otherCurrencies: number;
}

export interface GoldSilverInputs {
  goldValue: number;
  silverValue: number;
}

export interface StocksInputs {
  isActiveTrader: boolean;
  tradingPortfolioValue: number;
  profitsAndDividends: number;
}

export interface BusinessInputs {
  inventoryValue: number;
  rawMaterials: number;
  receivables: number;
}

export interface CryptoInputs {
  totalValue: number;
}

export interface RetirementInputs {
  accessibleBalance: number;
}

export interface RentalInputs {
  netRentalIncome: number;
}

export interface DebtsOwedInputs {
  collectibleDebts: number;
  doubtfulDebts: number;
}

export interface AgricultureInputs {
  isIrrigated: boolean;
  produceValueOrWeight: number;
}

export interface LivestockInputs {
  sheepCount: number;
  cattleCount: number;
  camelCount: number;
}

export interface DeductionInputs {
  immediateDebts: number;
  upcomingExpenses: number;
}

export interface CalculatorState {
  nisab: NisabConfig;
  cash: CashInputs;
  goldSilver: GoldSilverInputs;
  stocks: StocksInputs;
  business: BusinessInputs;
  crypto: CryptoInputs;
  retirement: RetirementInputs;
  rental: RentalInputs;
  debtsOwed: DebtsOwedInputs;
  agriculture: AgricultureInputs;
  livestock: LivestockInputs;
  deductions: DeductionInputs;
}

export interface ScholarCitation {
  scholar: string;
  quote: string;
  source: string;
}

export interface FiqhHint {
  ruling: string;
  explanation: string;
  citation: ScholarCitation;
  learnSlug: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  group: "foundations" | "wealth" | "recipients" | "practical" | "deductions";
}

export interface ScholarlyPosition {
  position: string;
  scholars: string[];
  school?: string;
  evidence?: string;
  isAppPosition?: boolean;
}

export interface ArticleContent {
  heading: string;
  subheading: string;
  rulingLabel?: string;
  evidenceLabel?: string;
  rulingParts: { bold: string; normal?: string; link?: { label: string; href: string } }[];
  evidence: string;
  citations: ScholarCitation[];
  positions?: ScholarlyPosition[];
}
