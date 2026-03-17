"use client";

import { AccordionSection } from "./accordion-section";
import { FiqhHint } from "./fiqh-hint";
import { CurrencyInput } from "./currency-input";
import { WhyExpander } from "./why-expander";
import { categoryHints } from "@/data/categories";
import type { DeductionInputs } from "@/lib/types";

interface DeductionsSectionProps {
  value: DeductionInputs;
  onChange: (value: DeductionInputs) => void;
}

export function DeductionsSection({ value, onChange }: DeductionsSectionProps) {
  const hint = categoryHints["deductions"];

  return (
    <AccordionSection title="Deductions" subtitle="Debts and expenses that reduce your zakatable wealth">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <CurrencyInput
          label="Immediate debts due"
          value={value.immediateDebts}
          onChange={(v) => onChange({ ...value, immediateDebts: v })}
        />
        <CurrencyInput
          label="Essential upcoming expenses"
          value={value.upcomingExpenses}
          onChange={(v) => onChange({ ...value, upcomingExpenses: v })}
        />
      </div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
