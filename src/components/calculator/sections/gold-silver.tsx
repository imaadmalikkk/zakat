"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { GoldSilverInputs } from "@/lib/types";

interface GoldSilverSectionProps {
  value: GoldSilverInputs;
  onChange: (value: GoldSilverInputs) => void;
}

export function GoldSilverSection({ value, onChange }: GoldSilverSectionProps) {
  const hint = categoryHints["gold-silver"];

  return (
    <AccordionSection title="Gold & Silver" subtitle="Including jewelry, coins, and bullion">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <CurrencyInput
          label="Gold — current value"
          value={value.goldValue}
          onChange={(v) => onChange({ ...value, goldValue: v })}
        />
        <CurrencyInput
          label="Silver — current value"
          value={value.silverValue}
          onChange={(v) => onChange({ ...value, silverValue: v })}
        />
      </div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
