# Zakat Calculator Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a comprehensive, salafi-fiqh-grounded zakat calculator web app with inline teaching and a full reference section.

**Architecture:** Next.js static site with client-side calculation logic. Single-page accordion calculator with live-updating sticky summary. Separate `/learn` section with pre-rendered articles. Gold/silver prices fetched client-side.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, Inter + Noto Naskh Arabic fonts. No backend.

---

## File Structure

```
zakat-calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, nav, footer)
│   │   ├── globals.css             # Tailwind + CSS vars (from hadith-check)
│   │   ├── page.tsx                # Calculator home page
│   │   ├── learn/
│   │   │   ├── page.tsx            # Learn index
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual learn articles
│   ├── components/
│   │   ├── nav.tsx                 # Top navigation (Calculate | Learn)
│   │   ├── calculator/
│   │   │   ├── nisab-settings.tsx  # Gold/silver toggle, price fetch, manual override
│   │   │   ├── accordion-section.tsx # Reusable collapsible section wrapper
│   │   │   ├── currency-input.tsx  # Dollar input with formatting
│   │   │   ├── fiqh-hint.tsx       # Yellow ruling hint box
│   │   │   ├── why-expander.tsx    # "Why?" expandable with scholar citation
│   │   │   ├── toggle-choice.tsx   # Binary fiqh question (e.g. trade vs hold)
│   │   │   ├── sections/
│   │   │   │   ├── cash.tsx
│   │   │   │   ├── gold-silver.tsx
│   │   │   │   ├── stocks.tsx
│   │   │   │   ├── business.tsx
│   │   │   │   ├── crypto.tsx
│   │   │   │   ├── retirement.tsx
│   │   │   │   ├── rental.tsx
│   │   │   │   ├── debts-owed.tsx
│   │   │   │   ├── agriculture.tsx
│   │   │   │   └── livestock.tsx
│   │   │   ├── deductions.tsx      # Debts you owe section
│   │   │   ├── sticky-summary.tsx  # Floating bottom bar with live totals
│   │   │   └── full-summary.tsx    # Detailed breakdown at page bottom
│   │   └── learn/
│   │       ├── article-card.tsx    # Card for learn index
│   │       └── scholar-citation.tsx # Reusable citation block
│   ├── lib/
│   │   ├── types.ts                # All TypeScript types
│   │   ├── zakat-rules.ts          # Calculation logic (pure functions)
│   │   ├── nisab.ts                # Nisab calculation + price fetching
│   │   ├── format.ts               # Currency/number formatting
│   │   └── articles.ts             # Learn article content/metadata
│   └── data/
│       ├── categories.ts           # Asset category definitions + fiqh hints
│       ├── article-content.ts      # Full article content for learn section
│       └── livestock-tables.ts     # Livestock zakat thresholds from Sunnah
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Chunk 1: Project Scaffolding & Layout

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`

- [ ] **Step 1: Create Next.js app**

```bash
cd /Users/imaadmalik/Developer/zakat-calculator
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --no-turbopack
```

Select defaults. If prompted about overwriting existing files, allow it (only the docs folder exists).

- [ ] **Step 2: Install exact versions to match hadith-check**

```bash
npm install next@16 react@19 react-dom@19
npm install -D tailwindcss@4 @tailwindcss/postcss@4 typescript@5
```

- [ ] **Step 3: Configure next.config.ts for static export**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```

- [ ] **Step 4: Configure postcss.config.mjs**

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```
Expected: Server starts on localhost:3000 without errors.

- [ ] **Step 6: Initialize git and commit**

```bash
git init
echo "node_modules\n.next\nout\n.superpowers" > .gitignore
git add -A
git commit -m "chore: initialize Next.js project"
```

---

### Task 2: Set up globals.css and fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Write globals.css matching hadith-check**

```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
  --background: #fafafa;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
  --font-mono: ui-monospace, SFMono-Regular, monospace;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
}

[lang="ar"],
[dir="rtl"] {
  font-family: var(--font-arabic), "Noto Naskh Arabic", serif;
}
```

- [ ] **Step 2: Write root layout with fonts and shell**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zakat Calculator",
  description:
    "Calculate your zakat based on the Quran, Sunnah, and the rulings of Ibn Baz, Ibn Uthaymeen, and Ibn Taymiyyah.",
  openGraph: {
    title: "Zakat Calculator",
    description:
      "Accurate zakat calculation grounded in the teachings of the Salaf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoNaskhArabic.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6">
            <div className="pt-8 sm:pt-12 flex items-center justify-between">
              <a
                href="/"
                className="text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors"
              >
                Zakat Calculator
              </a>
              <Nav />
            </div>
            {children}
          </main>

          <footer className="border-t border-neutral-100 py-8 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs text-neutral-500 leading-relaxed">
                Based on the rulings of Shaykh Ibn Baz, Shaykh Ibn Uthaymeen,
                and Shaykh al-Islam Ibn Taymiyyah (rahimahumullah). Not a
                substitute for consulting a scholar directly.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify fonts load and layout renders**

```bash
npm run dev
```
Open localhost:3000 — should see "Zakat Calculator" header with Inter font, footer disclaimer.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: add layout with fonts and footer matching hadith-check"
```

---

### Task 3: Navigation component

**Files:**
- Create: `src/components/nav.tsx`

- [ ] **Step 1: Create nav component**

```tsx
// src/components/nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { label: "Calculate", href: "/", active: pathname === "/" },
    { label: "Learn", href: "/learn", active: pathname.startsWith("/learn") },
  ];

  return (
    <nav className="flex gap-6 text-sm">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`transition-colors ${
            link.active
              ? "text-neutral-900 font-medium"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
```

- [ ] **Step 2: Verify navigation renders**

Expected: "Calculate" and "Learn" links in header. Calculate active (bold) on home page.

- [ ] **Step 3: Commit**

```bash
git add src/components/nav.tsx
git commit -m "feat: add navigation component"
```

---

## Chunk 2: Core Types, Calculation Logic & Data

### Task 4: TypeScript types

**Files:**
- Create: `src/lib/types.ts`

- [ ] **Step 1: Define all types**

```ts
// src/lib/types.ts

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
  goldWeightGrams: number;
  silverWeightGrams: number;
  goldJewelryValue: number;
  silverJewelryValue: number;
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
  group: "foundations" | "categories" | "issues";
}

export interface ArticleContent {
  heading: string;
  subheading: string;
  rulingParts: { bold: string; normal?: string }[];
  evidence: string;
  citations: ScholarCitation[];
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/types.ts
git commit -m "feat: add TypeScript types for calculator state and zakat rules"
```

---

### Task 5: Zakat calculation logic (pure functions)

**Files:**
- Create: `src/lib/zakat-rules.ts`
- Create: `src/lib/nisab.ts`
- Create: `src/lib/format.ts`
- Create: `src/data/livestock-tables.ts`

- [ ] **Step 1: Write nisab calculation and price fetching**

```ts
// src/lib/nisab.ts
import { NisabConfig } from "./types";

const GOLD_NISAB_GRAMS = 85;
const SILVER_NISAB_GRAMS = 595;

export function getNisabThreshold(config: NisabConfig): number {
  if (config.standard === "gold") {
    return GOLD_NISAB_GRAMS * config.goldPricePerGram;
  }
  return SILVER_NISAB_GRAMS * config.silverPricePerGram;
}

export async function fetchMetalPrices(): Promise<{
  goldPerGram: number;
  silverPerGram: number;
}> {
  try {
    const res = await fetch(
      "https://api.metalpriceapi.com/v1/latest?api_key=demo&base=USD&currencies=XAU,XAG"
    );
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    const goldPerGram = 1 / data.rates.XAU / 31.1035;
    const silverPerGram = 1 / data.rates.XAG / 31.1035;
    return { goldPerGram, silverPerGram };
  } catch {
    return { goldPerGram: 90, silverPerGram: 1.0 };
  }
}
```

- [ ] **Step 2: Write livestock zakat tables**

```ts
// src/data/livestock-tables.ts

export function getSheepZakat(count: number): string {
  if (count < 40) return "No zakat due";
  if (count <= 120) return "1 sheep";
  if (count <= 200) return "2 sheep";
  if (count <= 399) return "3 sheep";
  return `${Math.floor(count / 100)} sheep`;
}

export function getCattleZakat(count: number): string {
  if (count < 30) return "No zakat due";
  if (count <= 39) return "1 tabi' (1-year-old calf)";
  if (count <= 59) return "1 musinnah (2-year-old cow)";
  if (count <= 69) return "2 tabi'";
  if (count <= 79) return "1 tabi' + 1 musinnah";
  return "For every 30 head: 1 tabi'. For every 40 head: 1 musinnah.";
}

export function getCamelZakat(count: number): string {
  if (count < 5) return "No zakat due";
  if (count <= 9) return "1 sheep";
  if (count <= 14) return "2 sheep";
  if (count <= 19) return "3 sheep";
  if (count <= 24) return "4 sheep";
  if (count <= 35) return "1 bint makhad (1-year-old she-camel)";
  if (count <= 45) return "1 bint labun (2-year-old she-camel)";
  if (count <= 60) return "1 hiqqah (3-year-old she-camel)";
  if (count <= 75) return "1 jadh'ah (4-year-old she-camel)";
  if (count <= 90) return "2 bint labun";
  if (count <= 120) return "2 hiqqah";
  return "Consult a scholar for herds above 120";
}
```

- [ ] **Step 3: Write main zakat calculation logic**

```ts
// src/lib/zakat-rules.ts
import { CalculatorState, CategoryResult, ZakatSummary } from "./types";
import { getNisabThreshold } from "./nisab";
import { getSheepZakat, getCattleZakat, getCamelZakat } from "../data/livestock-tables";

const STANDARD_RATE = 0.025;

function calcCash(inputs: CalculatorState["cash"]): CategoryResult {
  const total = inputs.bankAccounts + inputs.cashOnHand + inputs.otherCurrencies;
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
  goldPrice: number,
  silverPrice: number
): CategoryResult {
  const goldValue = inputs.goldWeightGrams * goldPrice + inputs.goldJewelryValue;
  const silverValue = inputs.silverWeightGrams * silverPrice + inputs.silverJewelryValue;
  const total = goldValue + silverValue;
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
  const total = inputs.inventoryValue + inputs.rawMaterials + inputs.receivables;
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

function calcRetirement(inputs: CalculatorState["retirement"]): CategoryResult {
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

function calcDebtsOwed(inputs: CalculatorState["debtsOwed"]): CategoryResult {
  return {
    categoryId: "debts-owed",
    label: "Debts Owed to You",
    zakatableAmount: inputs.collectibleDebts,
    zakatDue: inputs.collectibleDebts * STANDARD_RATE,
    rate: STANDARD_RATE,
    note: "collectible debts only",
  };
}

function calcAgriculture(inputs: CalculatorState["agriculture"]): CategoryResult {
  const rate = inputs.isIrrigated ? 0.05 : 0.1;
  return {
    categoryId: "agriculture",
    label: "Agricultural Produce",
    zakatableAmount: inputs.produceValueOrWeight,
    zakatDue: inputs.produceValueOrWeight * rate,
    rate,
    note: inputs.isIrrigated ? "5% — artificially irrigated" : "10% — rain-fed",
  };
}

function calcLivestock(inputs: CalculatorState["livestock"]): CategoryResult {
  const parts: string[] = [];
  if (inputs.sheepCount > 0)
    parts.push(`Sheep (${inputs.sheepCount}): ${getSheepZakat(inputs.sheepCount)}`);
  if (inputs.cattleCount > 0)
    parts.push(`Cattle (${inputs.cattleCount}): ${getCattleZakat(inputs.cattleCount)}`);
  if (inputs.camelCount > 0)
    parts.push(`Camels (${inputs.camelCount}): ${getCamelZakat(inputs.camelCount)}`);

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
    calcGoldSilver(state.goldSilver, state.nisab.goldPricePerGram, state.nisab.silverPricePerGram),
    calcStocks(state.stocks),
    calcBusiness(state.business),
    calcCrypto(state.crypto),
    calcRetirement(state.retirement),
    calcRental(state.rental),
    calcDebtsOwed(state.debtsOwed),
    calcAgriculture(state.agriculture),
    calcLivestock(state.livestock),
  ];

  const totalZakatableWealth = categories.reduce((sum, c) => sum + c.zakatableAmount, 0);
  const totalDeductions = state.deductions.immediateDebts + state.deductions.upcomingExpenses;
  const netZakatableWealth = Math.max(0, totalZakatableWealth - totalDeductions);
  const nisabThreshold = getNisabThreshold(state.nisab);
  const meetsNisab = netZakatableWealth >= nisabThreshold;

  const standardCategoryIds = [
    "cash", "gold-silver", "stocks", "business", "crypto",
    "retirement", "rental", "debts-owed",
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
```

- [ ] **Step 4: Write format utilities**

```ts
// src/lib/format.ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(amount: number): string {
  return new Intl.NumberFormat("en-US").format(amount);
}

export function parseCurrencyInput(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/ src/data/
git commit -m "feat: add zakat calculation logic, types, nisab, and livestock tables"
```

---

## Chunk 3: Shared Calculator UI Components

### Task 6: Reusable calculator components

**Files:**
- Create: `src/components/calculator/accordion-section.tsx`
- Create: `src/components/calculator/currency-input.tsx`
- Create: `src/components/calculator/fiqh-hint.tsx`
- Create: `src/components/calculator/why-expander.tsx`
- Create: `src/components/calculator/toggle-choice.tsx`

- [ ] **Step 1: Create accordion section**

```tsx
// src/components/calculator/accordion-section.tsx
"use client";

import { useState } from "react";

interface AccordionSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionSection({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-neutral-200 rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <div>
          <div className="text-base font-semibold text-neutral-900">{title}</div>
          <div className="text-sm text-neutral-500 mt-0.5">{subtitle}</div>
        </div>
        <span className="text-neutral-400 text-sm ml-4">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-neutral-100">
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create currency input**

```tsx
// src/components/calculator/currency-input.tsx
"use client";

import { parseCurrencyInput, formatNumber } from "@/lib/format";
import { useState } from "react";

interface CurrencyInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export function CurrencyInput({ label, value, onChange, placeholder = "0.00" }: CurrencyInputProps) {
  const [display, setDisplay] = useState(value > 0 ? formatNumber(value) : "");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setDisplay(raw);
    onChange(parseCurrencyInput(raw));
  }

  function handleBlur() {
    if (value > 0) setDisplay(formatNumber(value));
  }

  return (
    <div>
      <label className="text-xs font-medium text-neutral-500 block mb-1.5">{label}</label>
      <div className="flex">
        <span className="bg-neutral-50 border border-neutral-200 border-r-0 rounded-l-md px-3 py-2.5 text-sm text-neutral-500">$</span>
        <input
          type="text"
          inputMode="decimal"
          value={display}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full border border-neutral-200 rounded-r-md px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create fiqh hint (yellow ruling box)**

```tsx
// src/components/calculator/fiqh-hint.tsx
interface FiqhHintProps {
  ruling: string;
  detail?: string;
}

export function FiqhHint({ ruling, detail }: FiqhHintProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
      <p className="text-sm text-amber-900">
        <strong>{ruling}</strong>
        {detail && <span className="font-normal"> — {detail}</span>}
      </p>
    </div>
  );
}
```

- [ ] **Step 4: Create "Why?" expander with scholar citation**

```tsx
// src/components/calculator/why-expander.tsx
"use client";

import { useState } from "react";
import type { ScholarCitation } from "@/lib/types";
import Link from "next/link";

interface WhyExpanderProps {
  explanation: string;
  citation: ScholarCitation;
  learnSlug: string;
}

export function WhyExpander({ explanation, citation, learnSlug }: WhyExpanderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2">
      <div className="flex gap-3 text-xs">
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-500 hover:text-neutral-700 transition-colors underline underline-offset-2 decoration-neutral-300"
        >
          {open ? "Hide explanation ↑" : "Why? ↓"}
        </button>
        <span className="text-neutral-300">·</span>
        <Link
          href={`/learn/${learnSlug}`}
          className="text-neutral-500 hover:text-neutral-700 transition-colors underline underline-offset-2 decoration-neutral-300"
        >
          Read full article →
        </Link>
      </div>
      {open && (
        <div className="mt-3 border-l-2 border-neutral-200 pl-3.5">
          <p className="text-sm text-neutral-600 leading-relaxed mb-2.5">{explanation}</p>
          <div className="bg-neutral-50 border border-neutral-200 rounded-md p-3">
            <div className="text-xs font-medium text-neutral-900">{citation.scholar}</div>
            <div className="text-xs text-neutral-500 italic mt-1">&ldquo;{citation.quote}&rdquo;</div>
            <div className="text-[11px] text-neutral-400 mt-1">{citation.source}</div>
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Create toggle choice (binary fiqh question)**

```tsx
// src/components/calculator/toggle-choice.tsx
"use client";

interface ToggleChoiceProps {
  question: string;
  optionA: string;
  optionB: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function ToggleChoice({ question, optionA, optionB, value, onChange }: ToggleChoiceProps) {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-4">
      <div className="text-sm font-medium text-neutral-900 mb-3">{question}</div>
      <div className="flex gap-2">
        <button
          onClick={() => onChange(true)}
          className={`flex-1 rounded-md px-3 py-2.5 text-sm text-center transition-colors border ${
            value
              ? "border-neutral-900 text-neutral-900 font-medium bg-white"
              : "border-neutral-200 text-neutral-500 bg-white hover:border-neutral-300"
          }`}
        >
          {optionA}
        </button>
        <button
          onClick={() => onChange(false)}
          className={`flex-1 rounded-md px-3 py-2.5 text-sm text-center transition-colors border ${
            !value
              ? "border-neutral-900 text-neutral-900 font-medium bg-white"
              : "border-neutral-200 text-neutral-500 bg-white hover:border-neutral-300"
          }`}
        >
          {optionB}
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/calculator/
git commit -m "feat: add shared calculator UI components"
```

---

## Chunk 4: Asset Category Sections

### Task 7: Build all 10 category sections + deductions

**Files:**
- Create: `src/data/categories.ts` (fiqh hints and citations per category)
- Create: all 10 section components in `src/components/calculator/sections/`
- Create: `src/components/calculator/deductions.tsx`

- [ ] **Step 1: Create categories data file with all fiqh hints and citations**

Create `src/data/categories.ts` with a `categoryHints` record. Each key maps to a `FiqhHint` with `ruling`, `explanation`, `citation` (scholar, quote, source), and `learnSlug`. Keys: `cash`, `gold-silver`, `stocks-trading`, `stocks-holding`, `business`, `crypto`, `retirement`, `rental`, `debts-owed`, `agriculture-irrigated`, `agriculture-rainfed`, `livestock`, `deductions`.

Use accurate scholarly citations from:
- Ibn Baz: Majmu' Fatawa Ibn Baz
- Ibn Uthaymeen: Majmu' Fatawa Ibn Uthaymeen, al-Sharh al-Mumti'
- Ibn Taymiyyah: Majmu' al-Fatawa
- Permanent Committee: Fatawa al-Lajnah ad-Da'imah
- Hadith sources: Sahih al-Bukhari, Sahih Muslim

- [ ] **Step 2: Build each section component**

Each section follows the same pattern as the stocks section example:
1. `AccordionSection` with title and subtitle
2. Optional `ToggleChoice` for fiqh-relevant question
3. `FiqhHint` showing the ruling
4. `CurrencyInput` field(s) — or number inputs for livestock
5. `WhyExpander` with citation and learn link

Sections with toggles: stocks (trade vs hold), agriculture (irrigated vs rain-fed)
Sections with multiple inputs: cash (3 fields), gold-silver (4 fields), business (3 fields), debts-owed (2 fields), livestock (3 number fields)
Simple sections (1 input): crypto, retirement, rental

Example — stocks section:

```tsx
// src/components/calculator/sections/stocks.tsx
"use client";

import { AccordionSection } from "../accordion-section";
import { ToggleChoice } from "../toggle-choice";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { StocksInputs } from "@/lib/types";

interface StocksSectionProps {
  value: StocksInputs;
  onChange: (value: StocksInputs) => void;
}

export function StocksSection({ value, onChange }: StocksSectionProps) {
  const hint = value.isActiveTrader
    ? categoryHints["stocks-trading"]
    : categoryHints["stocks-holding"];

  return (
    <AccordionSection
      title="Stocks & Investments"
      subtitle="Zakat depends on whether you trade or hold long-term"
    >
      <ToggleChoice
        question="Do you buy and sell stocks regularly for profit?"
        optionA="Yes — I actively trade"
        optionB="No — I hold long-term"
        value={value.isActiveTrader}
        onChange={(v) => onChange({ ...value, isActiveTrader: v })}
      />
      <FiqhHint ruling={hint.ruling} />
      {value.isActiveTrader ? (
        <CurrencyInput
          label="Current market value of trading portfolio"
          value={value.tradingPortfolioValue}
          onChange={(v) => onChange({ ...value, tradingPortfolioValue: v })}
        />
      ) : (
        <CurrencyInput
          label="Profits & dividends received this year"
          value={value.profitsAndDividends}
          onChange={(v) => onChange({ ...value, profitsAndDividends: v })}
        />
      )}
      <WhyExpander
        explanation={hint.explanation}
        citation={hint.citation}
        learnSlug={hint.learnSlug}
      />
    </AccordionSection>
  );
}
```

Build all remaining sections following this pattern.

- [ ] **Step 3: Build deductions section**

Same pattern but with two currency inputs (immediate debts, upcoming expenses).

- [ ] **Step 4: Commit**

```bash
git add src/components/calculator/sections/ src/components/calculator/deductions.tsx src/data/categories.ts
git commit -m "feat: add all asset category sections with fiqh hints and citations"
```

---

## Chunk 5: Summary Components & Calculator Page Assembly

### Task 8: Sticky summary bar and full summary

**Files:**
- Create: `src/components/calculator/sticky-summary.tsx`
- Create: `src/components/calculator/full-summary.tsx`

- [ ] **Step 1: Create sticky summary bar**

Fixed to bottom of viewport. Shows total zakatable wealth, zakat due (2.5%), and nisab status. Updates live.

- [ ] **Step 2: Create full summary breakdown**

Placed at the bottom of the page. Includes:
- Nisab confirmation box (green if meets, neutral if below)
- Large zakat due number centered
- Per-category breakdown table — each row shows label, `rate% of $amount (note)`, and zakat due
- Deductions row in red if present
- Contextual teaching callout for categories where this calculator differs from others
- Print/Save PDF button (calls `window.print()`), Reset button
- Scholarly disclaimer text

- [ ] **Step 3: Commit**

```bash
git add src/components/calculator/sticky-summary.tsx src/components/calculator/full-summary.tsx
git commit -m "feat: add sticky summary bar and full breakdown components"
```

---

### Task 9: Assemble the calculator page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/calculator/nisab-settings.tsx`

- [ ] **Step 1: Create NisabSettings component**

Shows gold/silver standard toggle, current threshold, manual override checkbox with price inputs, and a note about which standard is recommended.

- [ ] **Step 2: Write the main calculator page**

`"use client"` page that:
- Holds all form state in a single `useState<CalculatorState>` with zero-initialized defaults
- Fetches metal prices on mount via `useEffect` (unless manual override)
- Computes summary via `useMemo(() => calculateZakat(state), [state])`
- Renders: heading, subtitle, NisabSettings, all 10 sections + deductions as accordion, FullSummary, StickySummary
- Generic `update` helper: `function update<K extends keyof CalculatorState>(key: K, value: CalculatorState[K])`

- [ ] **Step 3: Verify the full calculator renders and calculates**

```bash
npm run dev
```
Test: expand Cash, enter $10,000 in bank accounts. Sticky bar should show $10,000 zakatable, $250.00 zakat due. Expand Stocks, select "No — I hold long-term", enter $2,000 profits. Summary should update to $12,000 / $300.00.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/components/calculator/nisab-settings.tsx
git commit -m "feat: assemble calculator page with all sections and live summary"
```

---

## Chunk 6: Learn Section

### Task 10: Learn article data and pages

**Files:**
- Create: `src/lib/articles.ts`
- Create: `src/data/article-content.ts`
- Create: `src/app/learn/page.tsx`
- Create: `src/app/learn/[slug]/page.tsx`
- Create: `src/components/learn/scholar-citation.tsx`

- [ ] **Step 1: Create article metadata**

```ts
// src/lib/articles.ts
import type { ArticleMeta } from "./types";

export const articles: ArticleMeta[] = [
  // Foundations
  { slug: "what-is-zakat", title: "What is Zakat?", description: "Pillar of Islam, conditions of obligation, who must pay", group: "foundations" },
  { slug: "the-nisab", title: "The Nisab", description: "Gold vs silver standard, evidence from the Sunnah", group: "foundations" },
  { slug: "the-hawl", title: "The Hawl (Lunar Year)", description: "When zakat becomes due, how to track your year", group: "foundations" },
  // Categories (one per calculator section)
  { slug: "cash-and-savings", title: "Cash & Savings", description: "Bank accounts, cash on hand, currencies", group: "categories" },
  { slug: "gold-and-silver", title: "Gold & Silver", description: "Jewelry worn vs stored, bullion, nisab weights", group: "categories" },
  { slug: "stocks-and-investments", title: "Stocks & Investments", description: "Trading vs long-term holding — zakat on profits vs full value", group: "categories" },
  { slug: "business-assets", title: "Business Assets", description: "Inventory, raw materials, trade goods vs fixed assets", group: "categories" },
  { slug: "cryptocurrency", title: "Cryptocurrency", description: "Contemporary rulings, analogies to trade goods", group: "categories" },
  { slug: "retirement-accounts", title: "Retirement Accounts", description: "401k, IRA, pensions — accessible vs locked funds", group: "categories" },
  { slug: "rental-income", title: "Rental Income & Property", description: "Zakat on rental income vs property value", group: "categories" },
  { slug: "debts-owed-to-you", title: "Debts Owed to You", description: "Collectible vs doubtful debts", group: "categories" },
  { slug: "agricultural-produce", title: "Agricultural Produce", description: "5% vs 10% rates, nisab for grains and fruits", group: "categories" },
  { slug: "livestock", title: "Livestock", description: "Camels, cattle, sheep — thresholds from the Sunnah", group: "categories" },
  // Issues
  { slug: "common-mistakes", title: "Common Mistakes & Misconceptions", description: "Errors in popular zakat calculators", group: "issues" },
  { slug: "deducting-debts", title: "Deducting Debts from Zakat", description: "Which debts reduce zakatable wealth", group: "issues" },
];
```

- [ ] **Step 2: Create scholar citation component**

Reusable card showing scholar name, quoted text, and source reference.

- [ ] **Step 3: Create learn index page**

Groups articles under "Foundations", "Asset Categories", "Common Issues" headers using the `group` field. Each article is a linked card with title and description.

- [ ] **Step 4: Create article page template**

Dynamic `[slug]` page with `generateStaticParams`. Layout: breadcrumb, heading, subheading, ruling box (using React elements — no dangerouslySetInnerHTML), evidence section, scholar citation cards, back link + "Calculate Your Zakat" CTA button.

The ruling box renders `content.rulingParts` as a series of `<p>` elements where each part has a bold portion and optional normal text:

```tsx
{content.rulingParts.map((part, i) => (
  <p key={i} className="text-sm text-neutral-900 leading-relaxed">
    <strong>{part.bold}</strong>
    {part.normal && <span> {part.normal}</span>}
  </p>
))}
```

- [ ] **Step 5: Create article content data file**

Create `src/data/article-content.ts` with an `articleContent` record mapping slug to `ArticleContent`. Write full, accurate fiqh content for: `stocks-and-investments`, `gold-and-silver`, `cash-and-savings`, `the-nisab`, `common-mistakes`, `deducting-debts`. Shorter but accurate content for the remaining articles to be expanded later.

- [ ] **Step 6: Verify learn section renders**

```bash
npm run dev
```
Navigate to /learn — all articles should be listed. Click stocks article — should show ruling box, evidence, Ibn Uthaymeen and Ibn Baz citations. Click "Calculate Your Zakat" — should navigate to /.

- [ ] **Step 7: Commit**

```bash
git add src/app/learn/ src/lib/articles.ts src/data/article-content.ts src/components/learn/
git commit -m "feat: add learn section with article index and detailed pages"
```

---

## Chunk 7: Polish & Static Export

### Task 11: Final polish and build

- [ ] **Step 1: Test full flow end to end**

```bash
npm run dev
```
Test: Fill in cash ($10,000), stocks (long-term, $2,000 profits), toggle nisab standard, verify summary updates live, verify sticky bar, verify print button, verify learn links work from calculator "Why?" expanders.

- [ ] **Step 2: Test static export builds**

```bash
npm run build
```
Expected: `out/` directory generated with all static pages including all `/learn/[slug]` pages. No errors.

- [ ] **Step 3: Test the static export locally**

```bash
npx serve out
```
Navigate through all pages, verify everything works without a server.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete zakat calculator with all categories, learn section, and static export"
```

---

## Execution Notes

- **Section components** (Task 7): All follow the stocks pattern. Simpler ones skip ToggleChoice. Agriculture has irrigated/rain-fed toggle. Livestock uses plain number inputs instead of CurrencyInput.
- **Article content** (Task 10): Fiqh content must be accurate. The stocks article should prominently address the "profits only" position. The common-mistakes article should call out specific errors in popular calculators.
- **Metal prices API**: Uses a demo key — before deploying, either get a free-tier key or add a more reliable data source. Fallback prices should be updated periodically.
- **GoldSilver section** needs `goldPrice` and `silverPrice` props passed from the calculator page (from nisab config).
