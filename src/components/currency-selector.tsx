"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useCurrency } from "@/lib/currency-context";

interface CurrencyOption {
  code: string;
  name: string;
}

function getAllCurrencies(): CurrencyOption[] {
  try {
    const codes = Intl.supportedValuesOf("currency");
    const displayNames = new Intl.DisplayNames("en", { type: "currency" });
    return codes.map((code) => ({
      code,
      name: displayNames.of(code) ?? code,
    }));
  } catch {
    return [
      { code: "GBP", name: "British Pound Sterling" },
      { code: "USD", name: "US Dollar" },
      { code: "EUR", name: "Euro" },
    ];
  }
}

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const currencies = useMemo(getAllCurrencies, []);

  const filtered = useMemo(() => {
    if (!search) return currencies;
    const q = search.toLowerCase();
    return currencies.filter(
      (c) => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
    );
  }, [search, currencies]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-xs font-medium text-neutral-500 hover:text-neutral-700 transition-colors py-2 pr-1"
      >
        {currency} <span className="text-[10px]">&#9662;</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2 border-b border-neutral-100">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search currencies..."
              className="w-full text-sm px-2.5 py-2 border border-neutral-200 rounded-md focus:border-neutral-400 focus:outline-none"
            />
          </div>
          <div className="max-h-64 overflow-y-auto">
            {filtered.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  setCurrency(c.code);
                  setOpen(false);
                  setSearch("");
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 transition-colors flex justify-between items-center ${
                  c.code === currency ? "bg-neutral-50 font-medium" : ""
                }`}
              >
                <span className="text-neutral-900">{c.code}</span>
                <span className="text-neutral-400 text-xs truncate ml-2">{c.name}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-3 py-4 text-sm text-neutral-400 text-center">No currencies found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
