"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { CashInputs } from "@/lib/types";

interface CashSectionProps {
  value: CashInputs;
  onChange: (value: CashInputs) => void;
}

export function CashSection({ value, onChange }: CashSectionProps) {
  const hint = categoryHints["cash"];

  return (
    <AccordionSection title="Cash & Bank Accounts" subtitle="All liquid money in any currency">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <CurrencyInput
          label="Bank accounts"
          value={value.bankAccounts}
          onChange={(v) => onChange({ ...value, bankAccounts: v })}
        />
        <CurrencyInput
          label="Cash on hand"
          value={value.cashOnHand}
          onChange={(v) => onChange({ ...value, cashOnHand: v })}
        />
        <CurrencyInput
          label="Other currencies"
          value={value.otherCurrencies}
          onChange={(v) => onChange({ ...value, otherCurrencies: v })}
        />
      </div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
