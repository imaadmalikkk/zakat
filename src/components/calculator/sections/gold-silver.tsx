"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import { useCurrency } from "@/lib/currency-context";
import { formatCurrency } from "@/lib/format";
import type { GoldSilverInputs } from "@/lib/types";

interface GoldSilverSectionProps {
  value: GoldSilverInputs;
  onChange: (value: GoldSilverInputs) => void;
  goldPrice: number;
  silverPrice: number;
}

export function GoldSilverSection({ value, onChange, goldPrice, silverPrice }: GoldSilverSectionProps) {
  const { currency } = useCurrency();
  const hint = categoryHints["gold-silver"];

  return (
    <AccordionSection title="Gold & Silver" subtitle="Including jewelry, coins, and bullion">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-neutral-500 block mb-1.5">Gold weight (grams)</label>
          <div className="flex">
            <input
              type="text"
              inputMode="decimal"
              value={value.goldWeightGrams > 0 ? value.goldWeightGrams : ""}
              onChange={(e) => onChange({ ...value, goldWeightGrams: parseFloat(e.target.value) || 0 })}
              placeholder="0"
              className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
            />
          </div>
          {value.goldWeightGrams > 0 && (
            <div className="text-xs text-neutral-400 mt-1">
              Value: {formatCurrency(value.goldWeightGrams * goldPrice, currency)}
            </div>
          )}
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-500 block mb-1.5">Silver weight (grams)</label>
          <div className="flex">
            <input
              type="text"
              inputMode="decimal"
              value={value.silverWeightGrams > 0 ? value.silverWeightGrams : ""}
              onChange={(e) => onChange({ ...value, silverWeightGrams: parseFloat(e.target.value) || 0 })}
              placeholder="0"
              className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
            />
          </div>
          {value.silverWeightGrams > 0 && (
            <div className="text-xs text-neutral-400 mt-1">
              Value: {formatCurrency(value.silverWeightGrams * silverPrice, currency)}
            </div>
          )}
        </div>
        <CurrencyInput
          label="Gold jewelry value"
          value={value.goldJewelryValue}
          onChange={(v) => onChange({ ...value, goldJewelryValue: v })}
        />
        <CurrencyInput
          label="Silver jewelry value"
          value={value.silverJewelryValue}
          onChange={(v) => onChange({ ...value, silverJewelryValue: v })}
        />
      </div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
