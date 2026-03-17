"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { RetirementInputs } from "@/lib/types";

interface RetirementSectionProps {
  value: RetirementInputs;
  onChange: (value: RetirementInputs) => void;
}

export function RetirementSection({ value, onChange }: RetirementSectionProps) {
  const hint = categoryHints["retirement"];

  return (
    <AccordionSection title="Retirement Accounts" subtitle="401(k), IRA, and pension funds">
      <FiqhHint ruling={hint.ruling} />
      <CurrencyInput
        label="Accessible balance"
        value={value.accessibleBalance}
        onChange={(v) => onChange({ ...value, accessibleBalance: v })}
      />
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
