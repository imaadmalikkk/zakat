import { NisabConfig } from "./types";

const GOLD_NISAB_GRAMS = 85;
const SILVER_NISAB_GRAMS = 595;

export function getNisabThreshold(config: NisabConfig): number {
  if (config.standard === "gold") {
    return GOLD_NISAB_GRAMS * config.goldPricePerGram;
  }
  return SILVER_NISAB_GRAMS * config.silverPricePerGram;
}

export async function fetchMetalPrices(): Promise<{
  goldPerGram: number;
  silverPerGram: number;
}> {
  try {
    const res = await fetch(
      "https://api.metalpriceapi.com/v1/latest?api_key=demo&base=USD&currencies=XAU,XAG"
    );
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    const goldPerGram = 1 / data.rates.XAU / 31.1035;
    const silverPerGram = 1 / data.rates.XAG / 31.1035;
    return { goldPerGram, silverPerGram };
  } catch {
    return { goldPerGram: 90, silverPerGram: 1.0 };
  }
}
