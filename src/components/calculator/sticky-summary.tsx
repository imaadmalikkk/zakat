"use client";

import { formatCurrency } from "@/lib/format";
import { useCurrency } from "@/lib/currency-context";
import type { ZakatSummary } from "@/lib/types";

interface StickySummaryProps {
  summary: ZakatSummary;
}

export function StickySummary({ summary }: StickySummaryProps) {
  const { currency } = useCurrency();
  const fmt = (n: number) => formatCurrency(n, currency);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div>
          <div className="text-xs text-neutral-500">Total Zakatable Wealth</div>
          <div className="text-lg font-semibold text-neutral-900">{fmt(summary.netZakatableWealth)}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-neutral-500">Zakat Due (2.5%)</div>
          <div className="text-lg font-semibold text-neutral-900">{fmt(summary.totalZakatDue)}</div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-[env(safe-area-inset-bottom,8px)]">
        <div className="text-xs text-neutral-400">
          Nisab: {fmt(summary.nisabThreshold)} ({summary.nisabStandard} standard)
          {summary.meetsNisab ? " · You meet the nisab \u2713" : " · Below nisab \u2014 no zakat due"}
        </div>
      </div>
    </div>
  );
}
