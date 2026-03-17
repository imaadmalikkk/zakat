"use client";

import { AccordionSection } from "../accordion-section";
import { FiqhHint } from "../fiqh-hint";
import { WhyExpander } from "../why-expander";
import { categoryHints } from "@/data/categories";
import type { LivestockInputs } from "@/lib/types";

interface LivestockSectionProps {
  value: LivestockInputs;
  onChange: (value: LivestockInputs) => void;
}

export function LivestockSection({ value, onChange }: LivestockSectionProps) {
  const hint = categoryHints["livestock"];

  return (
    <AccordionSection title="Livestock" subtitle="Free-grazing animals kept for breeding or dairy">
      <FiqhHint ruling={hint.ruling} />
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-neutral-500 block mb-1.5">Sheep / goat count</label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={value.sheepCount > 0 ? value.sheepCount : ""}
            onChange={(e) => onChange({ ...value, sheepCount: parseInt(e.target.value) || 0 })}
            placeholder="0"
            className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-500 block mb-1.5">Cattle count</label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={value.cattleCount > 0 ? value.cattleCount : ""}
            onChange={(e) => onChange({ ...value, cattleCount: parseInt(e.target.value) || 0 })}
            placeholder="0"
            className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-500 block mb-1.5">Camel count</label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={value.camelCount > 0 ? value.camelCount : ""}
            onChange={(e) => onChange({ ...value, camelCount: parseInt(e.target.value) || 0 })}
            placeholder="0"
            className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
          />
        </div>
      </div>
      <WhyExpander explanation={hint.explanation} citation={hint.citation} learnSlug={hint.learnSlug} />
    </AccordionSection>
  );
}
