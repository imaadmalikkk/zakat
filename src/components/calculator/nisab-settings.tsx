"use client";

import type { NisabConfig } from "@/lib/types";
import { formatCurrency } from "@/lib/format";
import { getNisabThreshold } from "@/lib/nisab";

interface NisabSettingsProps {
  value: NisabConfig;
  onChange: (value: NisabConfig) => void;
}

export function NisabSettings({ value, onChange }: NisabSettingsProps) {
  const threshold = getNisabThreshold(value);

  return (
    <div className="border border-neutral-200 rounded-lg p-5 sm:p-6 mb-2">
      <div className="text-base font-semibold text-neutral-900 mb-1">Nisab Standard</div>
      <div className="text-sm text-neutral-500 mb-4">Current nisab threshold: {formatCurrency(threshold)}</div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => onChange({ ...value, standard: "silver" })} className={`flex-1 rounded-md px-3 py-2.5 text-sm text-center transition-colors border ${value.standard === "silver" ? "border-neutral-900 text-neutral-900 font-medium" : "border-neutral-200 text-neutral-500 hover:border-neutral-300"}`}>
          Silver (595g)
        </button>
        <button onClick={() => onChange({ ...value, standard: "gold" })} className={`flex-1 rounded-md px-3 py-2.5 text-sm text-center transition-colors border ${value.standard === "gold" ? "border-neutral-900 text-neutral-900 font-medium" : "border-neutral-200 text-neutral-500 hover:border-neutral-300"}`}>
          Gold (85g)
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <input type="checkbox" id="manual-override" checked={value.manualOverride} onChange={(e) => onChange({ ...value, manualOverride: e.target.checked })} className="rounded border-neutral-300" />
        <label htmlFor="manual-override" className="text-xs text-neutral-500">Override with custom prices</label>
      </div>

      {value.manualOverride && (
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-xs text-neutral-500 block mb-1">Gold ($/g)</label>
            <input type="number" step="0.01" value={value.goldPricePerGram} onChange={(e) => onChange({ ...value, goldPricePerGram: parseFloat(e.target.value) || 0 })} className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none" />
          </div>
          <div className="flex-1">
            <label className="text-xs text-neutral-500 block mb-1">Silver ($/g)</label>
            <input type="number" step="0.01" value={value.silverPricePerGram} onChange={(e) => onChange({ ...value, silverPricePerGram: parseFloat(e.target.value) || 0 })} className="w-full border border-neutral-200 rounded-md px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none" />
          </div>
        </div>
      )}

      <p className="text-[11px] text-neutral-400 mt-3">
        {value.standard === "silver" ? "Silver standard is the more cautious position \u2014 recommended by Ibn Baz and Ibn Uthaymeen for cash and monetary assets." : "Gold standard gives a higher threshold. Some scholars prefer it for high-value currencies."}
      </p>
    </div>
  );
}
