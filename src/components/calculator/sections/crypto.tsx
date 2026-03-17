"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { CryptoInputs } from "@/lib/types";

interface CryptoSectionProps {
  value: CryptoInputs;
  onChange: (value: CryptoInputs) => void;
}

export function CryptoSection({ value, onChange }: CryptoSectionProps) {
  const hint = categoryHints["crypto"];

  return (
    <AccordionSection title="Cryptocurrency" subtitle="Bitcoin, Ethereum, and other digital assets">
      <FiqhHint ruling={hint.ruling} />
      <CurrencyInput
        label="Total current value"
        value={value.totalValue}
        onChange={(v) => onChange({ ...value, totalValue: v })}
      />
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
