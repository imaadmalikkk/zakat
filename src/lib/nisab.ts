import { NisabConfig } from "./types";

const GOLD_NISAB_GRAMS = 85;
const SILVER_NISAB_GRAMS = 595;

export function getNisabThreshold(config: NisabConfig): number {
  if (config.standard === "gold") {
    return GOLD_NISAB_GRAMS * config.goldPricePerGram;
  }
  return SILVER_NISAB_GRAMS * config.silverPricePerGram;
}

const TROY_OZ_TO_GRAMS = 31.1035;

export async function fetchMetalPrices(baseCurrency: string = "GBP"): Promise<{
  goldPerGram: number;
  silverPerGram: number;
}> {
  try {
    const currencyKey = baseCurrency.toLowerCase();
    const [goldRes, silverRes] = await Promise.all([
      fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.json"),
      fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xag.json"),
    ]);
    if (!goldRes.ok || !silverRes.ok) throw new Error("API error");
    const [goldData, silverData] = await Promise.all([goldRes.json(), silverRes.json()]);
    const goldPerOz = goldData.xau?.[currencyKey];
    const silverPerOz = silverData.xag?.[currencyKey];
    if (!goldPerOz || !silverPerOz) throw new Error("Currency not found");
    return {
      goldPerGram: goldPerOz / TROY_OZ_TO_GRAMS,
      silverPerGram: silverPerOz / TROY_OZ_TO_GRAMS,
    };
  } catch {
    return { goldPerGram: 120, silverPerGram: 1.9 };
  }
}
