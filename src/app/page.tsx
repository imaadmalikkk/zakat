"use client";

import { useState, useMemo, useEffect } from "react";
import { NisabSettings } from "@/components/calculator/nisab-settings";
import { CashSection } from "@/components/calculator/sections/cash";
import { GoldSilverSection } from "@/components/calculator/sections/gold-silver";
import { StocksSection } from "@/components/calculator/sections/stocks";
import { BusinessSection } from "@/components/calculator/sections/business";
import { CryptoSection } from "@/components/calculator/sections/crypto";
import { RetirementSection } from "@/components/calculator/sections/retirement";
import { RentalSection } from "@/components/calculator/sections/rental";
import { DebtsOwedSection } from "@/components/calculator/sections/debts-owed";
import { AgricultureSection } from "@/components/calculator/sections/agriculture";
import { LivestockSection } from "@/components/calculator/sections/livestock";
import { DeductionsSection } from "@/components/calculator/deductions";
import { StickySummary } from "@/components/calculator/sticky-summary";
import { FullSummary } from "@/components/calculator/full-summary";
import { calculateZakat } from "@/lib/zakat-rules";
import { fetchMetalPrices } from "@/lib/nisab";
import { useCurrency } from "@/lib/currency-context";
import type { CalculatorState } from "@/lib/types";

const initialState: CalculatorState = {
  nisab: { standard: "silver", goldPricePerGram: 120, silverPricePerGram: 1.9, manualOverride: false },
  cash: { bankAccounts: 0, cashOnHand: 0, otherCurrencies: 0 },
  goldSilver: { goldValue: 0, silverValue: 0 },
  stocks: { isActiveTrader: false, tradingPortfolioValue: 0, profitsAndDividends: 0 },
  business: { inventoryValue: 0, rawMaterials: 0, receivables: 0 },
  crypto: { totalValue: 0 },
  retirement: { accessibleBalance: 0 },
  rental: { netRentalIncome: 0 },
  debtsOwed: { collectibleDebts: 0, doubtfulDebts: 0 },
  agriculture: { isIrrigated: false, produceValueOrWeight: 0 },
  livestock: { sheepCount: 0, cattleCount: 0, camelCount: 0 },
  deductions: { immediateDebts: 0, upcomingExpenses: 0 },
};

export default function CalculatorPage() {
  const [state, setState] = useState<CalculatorState>(initialState);
  const { currency } = useCurrency();

  useEffect(() => {
    if (!state.nisab.manualOverride) {
      fetchMetalPrices(currency).then((prices) => {
        setState((prev) => ({
          ...prev,
          nisab: { ...prev.nisab, goldPricePerGram: prices.goldPerGram, silverPricePerGram: prices.silverPerGram },
        }));
      });
    }
  }, [currency]);

  const summary = useMemo(() => calculateZakat(state), [state]);

  function update<K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="pt-8 sm:pt-12 pb-8">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Calculate Your Zakat</h1>
      <p className="text-sm text-neutral-500 mt-1.5 mb-8">Based on the Quran, Sunnah, and rulings of the Salaf. Open only the sections that apply to you.</p>

      <div className="flex flex-col gap-3">
        <NisabSettings value={state.nisab} onChange={(v) => update("nisab", v)} />
        <CashSection value={state.cash} onChange={(v) => update("cash", v)} />
        <GoldSilverSection value={state.goldSilver} onChange={(v) => update("goldSilver", v)} />
        <StocksSection value={state.stocks} onChange={(v) => update("stocks", v)} />
        <BusinessSection value={state.business} onChange={(v) => update("business", v)} />
        <CryptoSection value={state.crypto} onChange={(v) => update("crypto", v)} />
        <RetirementSection value={state.retirement} onChange={(v) => update("retirement", v)} />
        <RentalSection value={state.rental} onChange={(v) => update("rental", v)} />
        <DebtsOwedSection value={state.debtsOwed} onChange={(v) => update("debtsOwed", v)} />
        <AgricultureSection value={state.agriculture} onChange={(v) => update("agriculture", v)} />
        <LivestockSection value={state.livestock} onChange={(v) => update("livestock", v)} />
        <DeductionsSection value={state.deductions} onChange={(v) => update("deductions", v)} />
      </div>

      <FullSummary summary={summary} onReset={() => setState(initialState)} />
      <StickySummary summary={summary} />
    </div>
  );
}
