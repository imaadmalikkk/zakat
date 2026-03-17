"use client";

import { AccordionSection } from "../accordion-section";
import { ToggleChoice } from "../toggle-choice";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { AgricultureInputs } from "@/lib/types";

interface AgricultureSectionProps {
  value: AgricultureInputs;
  onChange: (value: AgricultureInputs) => void;
}

export function AgricultureSection({ value, onChange }: AgricultureSectionProps) {
  const hint = categoryHints["agriculture"];

  return (
    <AccordionSection title="Agricultural Produce" subtitle="Crops and harvests subject to zakat at harvest time">
      <ToggleChoice
        question="How are your crops irrigated?"
        optionA="Artificial irrigation"
        optionB="Rain / natural sources"
        value={value.isIrrigated}
        onChange={(v) => onChange({ ...value, isIrrigated: v })}
      />
      <FiqhHint
        ruling={hint.ruling}
        detail={value.isIrrigated ? "5% rate applies for artificially irrigated crops" : "10% rate applies for rain-fed or naturally irrigated crops"}
      />
      <CurrencyInput
        label="Value of produce at harvest"
        value={value.produceValueOrWeight}
        onChange={(v) => onChange({ ...value, produceValueOrWeight: v })}
      />
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
