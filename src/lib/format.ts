export function formatCurrency(amount: number, currencyCode: string = "GBP"): string {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(amount: number): string {
  return new Intl.NumberFormat("en").format(amount);
}

export function parseCurrencyInput(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}
