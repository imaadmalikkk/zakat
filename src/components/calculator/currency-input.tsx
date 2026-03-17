"use client";

import { parseCurrencyInput, formatNumber } from "@/lib/format";
import { useCurrency } from "@/lib/currency-context";
import { useState } from "react";

interface CurrencyInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export function CurrencyInput({ label, value, onChange, placeholder = "0.00" }: CurrencyInputProps) {
  const { symbol } = useCurrency();
  const [display, setDisplay] = useState(value > 0 ? formatNumber(value) : "");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setDisplay(raw);
    onChange(parseCurrencyInput(raw));
  }

  function handleBlur() {
    if (value > 0) setDisplay(formatNumber(value));
  }

  return (
    <div>
      <label className="text-xs font-medium text-neutral-500 block mb-1.5">{label}</label>
      <div className="flex">
        <span className="bg-neutral-50 border border-neutral-200 border-r-0 rounded-l-md px-3 py-3 text-sm text-neutral-500">{symbol}</span>
        <input type="text" inputMode="decimal" value={display} onChange={handleChange} onBlur={handleBlur} placeholder={placeholder} className="w-full border border-neutral-200 rounded-r-md px-3 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors" />
      </div>
    </div>
  );
}
