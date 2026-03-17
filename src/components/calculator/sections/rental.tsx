"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { RentalInputs } from "@/lib/types";

interface RentalSectionProps {
  value: RentalInputs;
  onChange: (value: RentalInputs) => void;
}

export function RentalSection({ value, onChange }: RentalSectionProps) {
  const hint = categoryHints["rental"];

  return (
    <AccordionSection title="Rental Income" subtitle="Income from properties you rent out">
      <FiqhHint ruling={hint.ruling} />
      <CurrencyInput
        label="Net rental income this year"
        value={value.netRentalIncome}
        onChange={(v) => onChange({ ...value, netRentalIncome: v })}
      />
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
