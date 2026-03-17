"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";

interface CurrencyContextValue {
  currency: string;
  setCurrency: (code: string) => void;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "GBP",
  setCurrency: () => {},
  symbol: "£",
});

function getSymbol(code: string): string {
  try {
    return new Intl.NumberFormat("en", { style: "currency", currency: code })
      .formatToParts(0)
      .find((p) => p.type === "currency")?.value ?? code;
  } catch {
    return code;
  }
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState("GBP");

  useEffect(() => {
    const saved = localStorage.getItem("zakat-currency");
    if (saved) setCurrencyState(saved);
  }, []);

  function setCurrency(code: string) {
    setCurrencyState(code);
    localStorage.setItem("zakat-currency", code);
  }

  const symbol = useMemo(() => getSymbol(currency), [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
