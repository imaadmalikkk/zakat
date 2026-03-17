import type { FiqhHint } from "@/lib/types";

export const categoryHints: Record<string, FiqhHint> = {
  cash: {
    ruling: "Paper currency is treated like gold and silver for zakat purposes.",
    explanation:
      "Modern scholars unanimously agree that paper money takes the ruling of gold and silver because it serves the same function as a medium of exchange and store of value. Zakat is due at 2.5% on cash holdings that meet the nisab threshold and have been held for one lunar year.",
    citation: {
      scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
      quote:
        "Paper currency takes the ruling of gold and silver, because it has replaced them as a medium of exchange. Zakat is obligatory on it when it reaches the nisab and a full year passes.",
      source: "Majmu' Fatawa Ibn Uthaymeen, 18/153",
    },
    learnSlug: "cash-and-savings",
  },
  "gold-silver": {
    ruling: "Zakat is due on gold and silver, including jewelry worn regularly.",
    explanation:
      "Gold and silver are the original zakatable assets mentioned in the Quran and Sunnah. The majority of scholars, including the Hanafi school, hold that zakat is due on gold jewelry even if it is worn regularly. The nisab for gold is 85 grams and for silver is 595 grams.",
    citation: {
      scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
      quote:
        "The correct view is that zakat is obligatory on gold jewelry that is prepared for wearing, because of the general evidence that indicates that zakat is obligatory on gold and silver without exception.",
      source: "al-Sharh al-Mumti', 6/264",
    },
    learnSlug: "gold-and-silver",
  },
  "stocks-trading": {
    ruling: "Stocks held for trading are zakatable at full market value.",
    explanation:
      "Shares purchased with the intention of resale for profit are considered trade goods ('urud al-tijarah). Their zakat is calculated on the full current market value at the end of the lunar year, just like any other merchandise held for trade.",
    citation: {
      scholar: "Shaykh Abdul-Aziz ibn Baz",
      quote:
        "Whoever buys shares for the purpose of trading, he must pay zakat on their market value at the end of the year, just as he would pay zakat on any other trade goods.",
      source: "Majmu' Fatawa Ibn Baz, 14/190",
    },
    learnSlug: "stocks-and-investments",
  },
  "stocks-holding": {
    ruling: "Long-term stocks: zakat is due only on profits and dividends received.",
    explanation:
      "When shares are purchased as a long-term investment and not for active trading, zakat is not due on the share value itself. Instead, zakat is calculated on the profits and dividends actually received during the year, as these represent the zakatable income from the investment.",
    citation: {
      scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
      quote:
        "If the shares are not intended for trade but rather for benefiting from their annual returns, then zakat is due on the profits only, not on the original shares.",
      source: "Majmu' Fatawa Ibn Uthaymeen, 18/226",
    },
    learnSlug: "stocks-and-investments",
  },
  business: {
    ruling: "Trade goods are valued at current market price for zakat.",
    explanation:
      "Business inventory, raw materials, and trade receivables are all considered trade goods in Islamic law. At the end of each lunar year, their current market value is assessed and zakat of 2.5% is due on the total. Fixed assets used in the business (equipment, property) are exempt.",
    citation: {
      scholar: "Shaykh Abdul-Aziz ibn Baz",
      quote:
        "Trade goods are assessed at their current market value at the end of the year, and zakat of 2.5% is paid on that value, regardless of the purchase price.",
      source: "Majmu' Fatawa Ibn Baz, 14/155",
    },
    learnSlug: "business-assets",
  },
  crypto: {
    ruling: "Cryptocurrency is treated as a trade asset subject to 2.5% zakat.",
    explanation:
      "Although cryptocurrency is a modern asset class, scholars apply the established principle that any asset held for trade or as a store of value is subject to zakat. Since crypto functions similarly to currency and trade goods, its current market value is zakatable at 2.5%.",
    citation: {
      scholar: "Permanent Committee for Scholarly Research and Ifta",
      quote:
        "Whatever is prepared for sale is considered trade goods, and zakat is obligatory on it when it reaches the nisab, whether it is real estate, animals, foodstuffs, or any other type of goods.",
      source: "Fatawa al-Lajnah al-Da'imah, 9/183",
    },
    learnSlug: "cryptocurrency",
  },
  retirement: {
    ruling: "Zakat is due only on the accessible portion of retirement funds.",
    explanation:
      "Retirement accounts that cannot be withdrawn without penalty are considered inaccessible wealth. Many scholars hold that zakat is not obligatory on wealth one cannot freely access. However, once funds become accessible (e.g., after retirement age or through withdrawal options), zakat becomes due on that portion.",
    citation: {
      scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
      quote:
        "Wealth that a person cannot access or benefit from is like a debt owed by an insolvent person — zakat is not due on it until he is able to access it.",
      source: "Majmu' Fatawa Ibn Uthaymeen, 18/24",
    },
    learnSlug: "retirement-accounts",
  },
  rental: {
    ruling: "Zakat is due on net rental income, not on the property value itself.",
    explanation:
      "Rental property used to generate income is not itself subject to zakat because it is not a trade good. However, the rental income received is treated like any other cash earnings. After deducting property-related expenses, zakat of 2.5% is due on the net rental income that remains at the end of the year.",
    citation: {
      scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen",
      quote:
        "There is no zakat on buildings and properties that are prepared for renting, but zakat is due on the rent collected if it reaches the nisab and a year passes on it.",
      source: "Majmu' Fatawa Ibn Uthaymeen, 18/232",
    },
    learnSlug: "rental-income",
  },
  "debts-owed": {
    ruling: "Debts owed to you by solvent debtors are zakatable assets.",
    explanation:
      "If someone owes you money and is capable of repaying, that debt is considered part of your zakatable wealth. Debts owed by insolvent or doubtful debtors are not counted until they are actually received. Scholars recommend paying zakat on collectible debts each year.",
    citation: {
      scholar: "Shaykh Abdul-Aziz ibn Baz",
      quote:
        "If the debtor is solvent and acknowledges the debt, then zakat is due on it every year, because it is wealth that the creditor is able to collect.",
      source: "Majmu' Fatawa Ibn Baz, 14/42",
    },
    learnSlug: "debts-owed-to-you",
  },
  agriculture: {
    ruling: "Agricultural produce is subject to either 5% or 10% zakat at harvest.",
    explanation:
      "Zakat on agricultural produce is due at the time of harvest, not on an annual cycle. The rate depends on the method of irrigation: 10% for crops watered naturally by rain or rivers, and 5% for crops irrigated artificially with purchased water or machinery. The nisab is 5 awsuq (approximately 653 kg).",
    citation: {
      scholar: "Prophet Muhammad \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645",
      quote:
        "On that which is irrigated by rain, springs, or natural water channels, one-tenth is due. On that which is irrigated by wells (i.e., with effort and expense), one-twentieth is due.",
      source: "Sahih al-Bukhari, 1483",
    },
    learnSlug: "agricultural-produce",
  },
  livestock: {
    ruling: "Free-grazing livestock held for breeding are subject to zakat.",
    explanation:
      "Zakat on livestock applies to animals that graze freely on public pastureland for most of the year and are kept for breeding or dairy, not for trade. The nisab for sheep is 40 head, for cattle is 30 head, and for camels is 5 head. Specific amounts are due at each threshold as detailed in the prophetic traditions.",
    citation: {
      scholar: "Hadith of Anas ibn Malik (RA)",
      quote:
        "For every forty sheep grazing freely, one sheep is due as zakat. This is what Abu Bakr al-Siddiq prescribed as the zakat that the Messenger of Allah had ordained.",
      source: "Sahih al-Bukhari, 1454",
    },
    learnSlug: "livestock",
  },
  deductions: {
    ruling: "Immediate debts and essential expenses may be deducted before calculating zakat.",
    explanation:
      "Many scholars, following the Hanafi position, allow deducting debts that are immediately due and essential living expenses from one's total zakatable wealth before determining whether the nisab threshold is met. This ensures that zakat is only paid on genuinely surplus wealth.",
    citation: {
      scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
      quote:
        "Debts that are due reduce zakatable wealth, because the debtor's ownership of that portion is incomplete, and zakat is only obligatory on wealth that one fully owns.",
      source: "Majmu' al-Fatawa, 25/48",
    },
    learnSlug: "deducting-debts",
  },
};
