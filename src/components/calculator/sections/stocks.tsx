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
  const hint = value.isActiveTrader ? categoryHints["stocks-trading"] : categoryHints["stocks-holding"];

  return (
    <AccordionSection title="Stocks & Investments" subtitle="Zakat depends on whether you trade or hold long-term">
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
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
