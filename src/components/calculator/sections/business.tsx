"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { BusinessInputs } from "@/lib/types";

interface BusinessSectionProps {
  value: BusinessInputs;
  onChange: (value: BusinessInputs) => void;
}

export function BusinessSection({ value, onChange }: BusinessSectionProps) {
  const hint = categoryHints["business"];

  return (
    <AccordionSection title="Business Assets" subtitle="Inventory, materials, and trade receivables">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <CurrencyInput
          label="Inventory value"
          value={value.inventoryValue}
          onChange={(v) => onChange({ ...value, inventoryValue: v })}
        />
        <CurrencyInput
          label="Raw materials"
          value={value.rawMaterials}
          onChange={(v) => onChange({ ...value, rawMaterials: v })}
        />
        <CurrencyInput
          label="Trade receivables"
          value={value.receivables}
          onChange={(v) => onChange({ ...value, receivables: v })}
        />
      </div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
