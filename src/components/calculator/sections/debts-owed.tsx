"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { CurrencyInput } from "../currency-input";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { DebtsOwedInputs } from "@/lib/types";

interface DebtsOwedSectionProps {
  value: DebtsOwedInputs;
  onChange: (value: DebtsOwedInputs) => void;
}

export function DebtsOwedSection({ value, onChange }: DebtsOwedSectionProps) {
  const hint = categoryHints["debts-owed"];

  return (
    <AccordionSection title="Debts Owed to You" subtitle="Money others owe you">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <CurrencyInput
          label="Collectible debts (solvent debtors)"
          value={value.collectibleDebts}
          onChange={(v) => onChange({ ...value, collectibleDebts: v })}
        />
        <CurrencyInput
          label="Doubtful debts (unlikely to be repaid)"
          value={value.doubtfulDebts}
          onChange={(v) => onChange({ ...value, doubtfulDebts: v })}
        />
      </div>
      <div className="text-xs text-neutral-400 mt-2 mb-1">Only collectible debts are included in your zakatable total.</div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
