"use client";

import { formatCurrency } from "@/lib/format";
import { useCurrency } from "@/lib/currency-context";
import type { ZakatSummary } from "@/lib/types";

interface FullSummaryProps {
  summary: ZakatSummary;
  onReset: () => void;
}

export function FullSummary({ summary, onReset }: FullSummaryProps) {
  const { currency } = useCurrency();
  const fmt = (n: number) => formatCurrency(n, currency);
  const standardCategories = summary.categories.filter(
    (c) => c.categoryId !== "livestock" && c.categoryId !== "agriculture"
  );
  const agriculture = summary.categories.find((c) => c.categoryId === "agriculture");
  const livestock = summary.categories.find((c) => c.categoryId === "livestock");

  return (
    <div className="mt-8 mb-24">
      {/* Nisab status */}
      {summary.meetsNisab ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
          <div className="text-sm font-medium text-emerald-800">Your wealth exceeds the nisab &mdash; zakat is obligatory</div>
          <div className="text-xs text-emerald-700 mt-1">
            Nisab: {fmt(summary.nisabThreshold)} ({summary.nisabStandard} standard) &middot; Your zakatable wealth: {fmt(summary.netZakatableWealth)}
          </div>
        </div>
      ) : (
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-6">
          <div className="text-sm font-medium text-neutral-700">Your wealth is below the nisab &mdash; no zakat is due</div>
          <div className="text-xs text-neutral-500 mt-1">
            Nisab: {fmt(summary.nisabThreshold)} ({summary.nisabStandard} standard) &middot; Your zakatable wealth: {fmt(summary.netZakatableWealth)}
          </div>
        </div>
      )}

      {/* Main number */}
      <div className="text-center py-5 mb-6">
        <div className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">Your Zakat Due</div>
        <div className="text-4xl font-bold text-neutral-900 tracking-tight">{fmt(summary.totalZakatDue)}</div>
        <div className="text-sm text-neutral-500 mt-1">2.5% of {fmt(summary.netZakatableWealth)}</div>
      </div>

      {/* Breakdown */}
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Breakdown by Category</div>
        <div className="divide-y divide-neutral-100">
          {standardCategories.filter((c) => c.zakatableAmount > 0).map((cat) => (
            <div key={cat.categoryId} className="flex justify-between items-center py-2.5">
              <div>
                <div className="text-sm text-neutral-900">{cat.label}</div>
                <div className="text-xs text-neutral-400">
                  2.5% of {fmt(cat.zakatableAmount)}
                  {cat.note && ` (${cat.note})`}
                </div>
              </div>
              <div className="text-sm font-medium text-neutral-900">{fmt(cat.zakatDue)}</div>
            </div>
          ))}

          {agriculture && agriculture.zakatableAmount > 0 && (
            <div className="flex justify-between items-center py-2.5">
              <div>
                <div className="text-sm text-neutral-900">{agriculture.label}</div>
                <div className="text-xs text-neutral-400">{agriculture.note}</div>
              </div>
              <div className="text-sm font-medium text-neutral-900">{fmt(agriculture.zakatDue)}</div>
            </div>
          )}

          {livestock && livestock.note && (
            <div className="flex justify-between items-center py-2.5">
              <div>
                <div className="text-sm text-neutral-900">{livestock.label}</div>
                <div className="text-xs text-neutral-400">{livestock.note}</div>
              </div>
              <div className="text-xs font-medium text-neutral-500">See note</div>
            </div>
          )}

          {summary.totalDeductions > 0 && (
            <div className="flex justify-between items-center py-2.5">
              <div>
                <div className="text-sm text-red-600">Less: Debts &amp; Liabilities</div>
                <div className="text-xs text-neutral-400">Deductions: {fmt(summary.totalDeductions)}</div>
              </div>
              <div className="text-sm font-medium text-red-600">&minus;{fmt(summary.totalDeductions * 0.025)}</div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => window.print()} className="flex-1 bg-neutral-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-neutral-800 transition-colors">
          Print / Save as PDF
        </button>
        <button onClick={onReset} className="flex-1 border border-neutral-200 text-neutral-600 text-sm font-medium py-3 rounded-lg hover:border-neutral-300 transition-colors">
          Reset
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-neutral-400 leading-relaxed text-center">
        This calculator is based on the positions of Shaykh Ibn Baz, Shaykh Ibn Uthaymeen, and Shaykh al-Islam Ibn Taymiyyah (rahimahumullah). For complex cases, consult a scholar directly.
      </p>
    </div>
  );
}
