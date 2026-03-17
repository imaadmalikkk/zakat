import type { ArticleMeta } from "./types";

export const articles: ArticleMeta[] = [
  // Foundations
  { slug: "what-is-zakat", title: "What is Zakat?", description: "Pillar of Islam, conditions of obligation, who must pay", group: "foundations" },
  { slug: "the-nisab", title: "The Nisab", description: "Gold vs silver standard, evidence from the Sunnah", group: "foundations" },
  { slug: "the-hawl", title: "The Hawl (Lunar Year)", description: "When zakat becomes due, how to track your year", group: "foundations" },
  // Categories
  { slug: "cash-and-savings", title: "Cash & Savings", description: "Bank accounts, cash on hand, currencies", group: "categories" },
  { slug: "gold-and-silver", title: "Gold & Silver", description: "Jewelry worn vs stored, bullion, nisab weights", group: "categories" },
  { slug: "stocks-and-investments", title: "Stocks & Investments", description: "Trading vs long-term holding — zakat on profits vs full value", group: "categories" },
  { slug: "business-assets", title: "Business Assets", description: "Inventory, raw materials, trade goods vs fixed assets", group: "categories" },
  { slug: "cryptocurrency", title: "Cryptocurrency", description: "Contemporary rulings, analogies to trade goods", group: "categories" },
  { slug: "retirement-accounts", title: "Retirement Accounts", description: "401k, IRA, pensions — accessible vs locked funds", group: "categories" },
  { slug: "rental-income", title: "Rental Income & Property", description: "Zakat on rental income vs property value", group: "categories" },
  { slug: "debts-owed-to-you", title: "Debts Owed to You", description: "Collectible vs doubtful debts", group: "categories" },
  { slug: "agricultural-produce", title: "Agricultural Produce", description: "5% vs 10% rates, nisab for grains and fruits", group: "categories" },
  { slug: "livestock", title: "Livestock", description: "Camels, cattle, sheep — thresholds from the Sunnah", group: "categories" },
  // Issues
  { slug: "common-mistakes", title: "Common Mistakes & Misconceptions", description: "Errors in popular zakat calculators", group: "issues" },
  { slug: "deducting-debts", title: "Deducting Debts from Zakat", description: "Which debts reduce zakatable wealth", group: "issues" },
];
