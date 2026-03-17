import type { ArticleContent } from "@/lib/types";

export const articleContent: Record<string, ArticleContent> = {
  // ─────────────────────────────────────────────
  // FOUNDATIONS
  // ─────────────────────────────────────────────

  "what-is-zakat": {
    heading: "What is Zakat?",
    subheading: "The third pillar of Islam — a mandatory act of worship through wealth",
    rulingParts: [
      { bold: "Zakat is obligatory (fard)", normal: "upon every free Muslim who possesses wealth at or above the nisab threshold for one lunar year (hawl)." },
      { bold: "It is not charity (sadaqah).", normal: "It is a right that the poor have over the wealth of the rich. Withholding it is a major sin by consensus of the scholars." },
    ],
    evidence:
      "Allah says: \"And establish prayer and give zakat\" (al-Baqarah 2:43). The Prophet (pbuh) said: \"Islam is built upon five pillars: the testimony that there is no god but Allah and Muhammad is the Messenger of Allah, establishing the prayer, paying the zakat, performing Hajj, and fasting Ramadan\" (Sahih al-Bukhari 8, Sahih Muslim 16).",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Zakat is obligatory upon every Muslim who possesses the nisab, whether male or female, young or old, sane or insane. If the owner is not able to handle the duty themselves, their guardian must pay it on their behalf.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 16",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "Whoever denies the obligation of zakat while knowing it is obligatory has disbelieved, and whoever is stingy with it or reduces what is due is among the wrongdoers who will face a painful punishment.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 12",
      },
    ],
  },

  "the-nisab": {
    heading: "The Nisab",
    subheading: "The minimum threshold of wealth at which zakat becomes obligatory",
    rulingParts: [
      { bold: "The nisab for gold is 20 mithqal (approximately 85 grams).", normal: "The nisab for silver is 200 dirhams (approximately 595 grams). Whoever possesses wealth equal to the value of either threshold must pay zakat." },
      { bold: "When gold and silver nisab values differ,", normal: "the more cautious (and more beneficial to the poor) approach is to use the silver standard, as it results in a lower threshold and more people paying zakat. This is the position of the Permanent Committee and the majority of contemporary scholars." },
      { bold: "Cash, stocks, and other monetary assets", normal: "are measured against whichever standard you adopt. The silver standard almost always results in a lower threshold (often around $400\u2013$600 USD) compared to gold (often $5,000\u2013$7,000 USD)." },
    ],
    evidence:
      "The Prophet (pbuh) said: \"There is no zakat on less than five awaq of silver\" (Sahih al-Bukhari 1459, Sahih Muslim 979). Five awaq equals 200 dirhams, which is approximately 595 grams of pure silver. For gold, the Prophet (pbuh) established the nisab at 20 dinars (Sunan Abu Dawud 1573), equivalent to approximately 85 grams of pure gold.",
    citations: [
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "The nisab of gold is twenty mithqal, which is equivalent to 11 3/7 Saudi pounds, or approximately 85 grams of pure gold. The nisab of silver is 200 dirhams, which is equivalent to 56 Saudi riyals of silver, or approximately 595 grams of pure silver.",
        source: "Fatawa al-Lajnah ad-Da'imah, vol. 9, no. 2476",
      },
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "If a person has cash and wants to know whether it reaches the nisab, he should evaluate it against silver. If it equals the value of 595 grams of silver, then zakat is due. This is more cautious and more beneficial for the recipients of zakat.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 55",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The nisab for currency notes is the equivalent of the nisab of silver, because this is more beneficial for the poor and more precautionary for the one paying zakat.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 48",
      },
    ],
  },

  "the-hawl": {
    heading: "The Hawl (Lunar Year)",
    subheading: "Zakat is due once a full lunar year passes while you possess the nisab",
    rulingParts: [
      { bold: "One full lunar year (hawl) must pass", normal: "on wealth at or above the nisab before zakat becomes due. The lunar year is approximately 354 days." },
      { bold: "If wealth drops below the nisab during the year and then returns,", normal: "the majority position is that the hawl restarts from the date it returned to the nisab." },
    ],
    evidence:
      "The Prophet (pbuh) said: \"There is no zakat on wealth until a year has passed on it\" (Sunan Abu Dawud 1573, graded sahih by al-Albani). Ali ibn Abi Talib (RA) narrated that the Prophet (pbuh) said: \"If you have 200 dirhams and a year passes on them, then five dirhams are due. And you owe nothing until you have 20 dinars; if you have 20 dinars and a year passes, then half a dinar is due\" (Sunan Abu Dawud 1573).",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "The hawl is a condition for the obligation of zakat on gold, silver, cash, trade goods, and livestock. It is not a condition for agricultural produce or minerals, as their zakat is due at the time of harvest or extraction.",
        source: "al-Sharh al-Mumti', vol. 6, p. 30",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "It is recommended for a Muslim to set a specific date each year — such as Ramadan — to calculate and pay their zakat. If they pay slightly early, that is permissible and may be better.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 52",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ASSET CATEGORIES
  // ─────────────────────────────────────────────

  "cash-and-savings": {
    heading: "Cash & Savings",
    subheading: "Paper currency holds the same zakat ruling as gold and silver",
    rulingParts: [
      { bold: "Paper currency is analogous to gold and silver", normal: "because it serves as the medium of exchange and store of value that gold and silver historically served. The scholars are unanimously agreed that zakat is obligatory on paper currency." },
      { bold: "All cash holdings are combined:", normal: "bank accounts (checking, savings, money market), cash on hand, and foreign currencies. The total is measured against the nisab." },
      { bold: "The rate is 2.5% (1/40th)", normal: "of the total cash holdings once the nisab is met and a full lunar year has passed." },
    ],
    evidence:
      "Allah says: \"And those who hoard gold and silver and do not spend them in the way of Allah — give them tidings of a painful punishment\" (at-Tawbah 9:34). The scholars have unanimously agreed that this ruling extends to paper currency because it fulfills the same function as gold and silver in serving as a medium of exchange. The Islamic Fiqh Academy (Majma' al-Fiqh al-Islami) resolved in its third session (1986) that paper currency is a form of independent money with the full rulings of gold and silver regarding zakat.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Paper money has taken the place of gold and silver as a medium of exchange. It carries the same rulings as gold and silver in all matters of zakat. There is no difference between cash in your hand and cash in your bank account — all of it is zakatable if it reaches the nisab and the hawl passes.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 93",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "Zakat is obligatory on cash money — whether in paper notes or coins — if it reaches the nisab of silver (the value of 595 grams of silver) or the nisab of gold (the value of 85 grams of gold), and a full lunar year has passed upon it.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 44",
      },
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "All types of cash that a person owns — whether in their possession, in a bank, or owed to them as a collectible debt — must be combined when calculating the nisab for zakat.",
        source: "Fatawa al-Lajnah ad-Da'imah, vol. 9, no. 1879",
      },
    ],
  },

  "gold-and-silver": {
    heading: "Gold & Silver",
    subheading: "Zakat on bullion, coins, and jewelry — including jewelry that is worn",
    rulingParts: [
      { bold: "Zakat is due on all gold and silver", normal: "that reaches the nisab (85g gold / 595g silver), whether it is bullion, coins, or jewelry — including jewelry that is regularly worn by women." },
      { bold: "Worn jewelry is zakatable.", normal: "This is the position of Abu Hanifah, and it was chosen by Ibn Taymiyyah, Ibn Uthaymeen, and Ibn Baz. The evidence from the Sunnah clearly indicates that women's gold jewelry is subject to zakat even if it is worn and used, not just stored." },
      { bold: "The rate is 2.5%", normal: "of the market value of all gold and silver once the nisab is met and the hawl has passed." },
    ],
    evidence:
      "The Prophet (pbuh) saw two gold bangles on a woman's wrists and said: \"Do you pay the zakat on these?\" She said no. He said: \"Would you like Allah to put two bangles of fire on you on the Day of Judgment?\" So she took them off and gave them to the Prophet (pbuh) (Sunan Abu Dawud 1563, Sunan an-Nasa'i 2479, graded sahih by al-Albani). Umm Salamah (RA) used to wear gold jewelry and asked: \"O Messenger of Allah, is this considered kanz (hoarded treasure)?\" He said: \"Whatever reaches the amount upon which zakat is due and zakat is paid on it, then it is not kanz\" (Sunan Abu Dawud 1564, graded hasan by al-Albani).",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "The correct view is that zakat is obligatory on gold jewelry even if it is worn, because of the authentic hadiths that clearly indicate this. The hadith of the woman with the two bangles is explicit, and there is no authentic evidence that exempts worn jewelry from zakat.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 137",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The most correct scholarly opinion, and the one supported by the evidence, is that zakat is obligatory on gold and silver jewelry that women wear if it reaches the nisab — which is 85 grams for gold and 595 grams for silver. The hadiths on this matter are clear and authentic.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 82",
      },
      {
        scholar: "Ibn Taymiyyah (rahimahullah)",
        quote: "Zakat on jewelry is the position of Abu Hanifah and a group of the Salaf, and it is supported by the apparent meaning of the texts. This is the stronger opinion.",
        source: "Majmu' al-Fatawa, vol. 25, p. 16",
      },
    ],
  },

  "stocks-and-investments": {
    heading: "Stocks & Investments",
    subheading: "The critical distinction: active trading vs. long-term holding",
    rulingParts: [
      { bold: "Active traders pay 2.5% on the full market value", normal: "of their portfolio. If you buy and sell stocks frequently with the intention of profiting from price changes, your stocks are trade goods ('urud at-tijarah) and the entire portfolio value is zakatable." },
      { bold: "Long-term holders pay 2.5% on profits and dividends only,", normal: "not on the full portfolio value. If you buy stocks to hold for their returns (dividends, long-term growth) and not to trade, your stocks are analogous to rental property or fixed assets. Zakat is due on the income they generate, not on the underlying asset." },
      { bold: "This distinction is the key ruling most calculators get wrong.", normal: "Many popular zakat calculators apply 2.5% to the total portfolio for all stockholders, which is incorrect for long-term investors and leads to massively overpaying zakat." },
    ],
    evidence:
      "The Prophet (pbuh) said: \"Zakat is due on trade goods\" — meaning items acquired with the intention of resale for profit. The scholars distinguished between assets held for trading (where zakat is on the full value) and assets held for their yield (where zakat is on the income). This is analogous to rental property: you do not pay zakat on the property itself, but you do pay zakat on the rental income. Similarly, a long-term stock investor pays zakat on dividends and realized profits, not on the shares themselves.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Whoever buys shares in order to benefit from their annual returns (dividends), they are like fixed assets — zakat is due on the dividends only if they reach the nisab and a year passes. But whoever buys shares to trade them, buying and selling for profit, then they are trade goods and zakat is due on their market value.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 226",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "If the shareholder intends to hold the shares as an investment to benefit from the annual dividends, then zakat is only on the dividends and profits if they reach the nisab. He is not required to pay zakat on the shares themselves. But if his intention is to trade them — buying low and selling high — then they are trade goods and zakat is due on their full market value.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 190",
      },
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "Shares purchased for trading are valued at their market price at the end of the year and zakat of 2.5% is paid on that. Shares held for investment (not for trading) — zakat is on the revenue (dividends and profits) they yield, not the value of the shares themselves.",
        source: "Fatawa al-Lajnah ad-Da'imah, vol. 9, no. 4269",
      },
    ],
  },

  "business-assets": {
    heading: "Business Assets",
    subheading: "Zakat on trade inventory, receivables, and raw materials",
    rulingParts: [
      { bold: "Zakat is due on trade goods ('urud at-tijarah):", normal: "inventory held for sale, raw materials intended for products to be sold, and receivables from customers. These are valued at current market price." },
      { bold: "Fixed assets are exempt:", normal: "buildings, machinery, vehicles, and equipment used in the business are not zakatable. Only goods intended for sale and liquid assets are subject to zakat." },
    ],
    evidence:
      "Samurah ibn Jundub (RA) said: \"The Messenger of Allah (pbuh) used to command us to pay zakat on what we prepared for sale\" (Sunan Abu Dawud 1562, graded hasan). Umar ibn al-Khattab (RA) said: \"Assess the goods and give zakat on them\" — i.e., evaluate trade inventory at market value and pay zakat accordingly.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Trade goods are everything a person has prepared for buying and selling to make a profit. They are valued at the end of the year at market price, and 2.5% is paid. Fixed assets used in the business — such as machinery and buildings — are not subject to zakat.",
        source: "al-Sharh al-Mumti', vol. 6, p. 140",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The merchant must assess the value of all his trade goods at the end of the year at their current market value, add that to his cash and debts owed to him, subtract debts he owes, and then pay 2.5% on the total.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 165",
      },
    ],
  },

  "cryptocurrency": {
    heading: "Cryptocurrency",
    subheading: "Contemporary rulings on digital assets and tokens",
    rulingParts: [
      { bold: "Cryptocurrency held for trading is treated as trade goods", normal: "and zakat is due on the full market value at 2.5%. If you actively buy and sell crypto for profit, it is 'urud at-tijarah." },
      { bold: "Cryptocurrency held as a long-term store of value", normal: "is analogous to cash or gold, and zakat is due on its total value if it reaches the nisab and the hawl passes." },
    ],
    evidence:
      "While cryptocurrency did not exist at the time of the Prophet (pbuh), scholars apply qiyas (analogy) to classify it. Most contemporary scholars treat it as either a form of money (like cash) or as trade goods, depending on the holder's intention. In either case, zakat is obligatory when the nisab and hawl conditions are met.",
    citations: [
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "Any form of wealth that has value and can be exchanged is subject to the general rulings of zakat if it meets the conditions. This applies to new forms of wealth that did not exist previously.",
        source: "Fatawa al-Lajnah ad-Da'imah, general principle on novel assets",
      },
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Anything that people take as money and use as a medium of exchange takes the ruling of gold and silver in zakat. The form does not matter — what matters is the function.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 95 (applied by analogy to digital currencies)",
      },
    ],
  },

  "retirement-accounts": {
    heading: "Retirement Accounts",
    subheading: "401(k), IRA, pensions — zakat depends on accessibility",
    rulingParts: [
      { bold: "Accessible retirement funds are zakatable.", normal: "If you can withdraw from the account (even with penalties), the accessible balance is subject to zakat. This includes vested 401(k) balances and IRA accounts." },
      { bold: "Locked or inaccessible funds are not zakatable", normal: "until they become accessible. Employer-contributed amounts that have not vested, or government pensions you cannot access until a specific age, are treated like doubtful debts — zakat is not due until they are received." },
    ],
    evidence:
      "The principle is that zakat is due on wealth over which one has full ownership and control. Wealth that is locked or inaccessible is analogous to a debt owed by someone who may or may not pay. The scholars differed on debts, but the majority hold that wealth one cannot access is not subject to zakat until it is received.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "If wealth is in the person's possession and they can dispose of it, zakat is due on it. If it is held by another and they cannot access it, it is like a debt — if it is expected to be returned, they pay zakat when they receive it for the past years.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 24",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "Wealth that the owner can access and withdraw from is zakatable. What they cannot access is not subject to zakat until it comes into their possession.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 56",
      },
    ],
  },

  "rental-income": {
    heading: "Rental Income & Property",
    subheading: "Zakat on rental income — not on the property itself",
    rulingParts: [
      { bold: "Rental properties are not zakatable assets.", normal: "A building, apartment, or house that you own and rent out is not subject to zakat on its value — it is a fixed asset, not a trade good." },
      { bold: "Zakat is due on the net rental income", normal: "after expenses, if it reaches the nisab and the hawl passes (or is added to your other cash and collectively reaches the nisab). The rate is 2.5%." },
    ],
    evidence:
      "The scholars distinguish between assets acquired for trade (trade goods) and assets acquired for their yield (rental property, farms, etc.). The Prophet (pbuh) did not impose zakat on the dwellings people lived in or rented out, but zakat applies to the income they generate as part of one's overall wealth.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Whoever owns real estate that they rent out does not pay zakat on the property itself. They pay zakat on the rental income. The rental income is added to the person's other cash, and if the total reaches the nisab and a year passes, zakat is due.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 205",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "Buildings and land prepared for rent are not subject to zakat on their value. However, if rent is collected and it remains for a full year while reaching the nisab — either alone or when combined with other money — then zakat is due on it.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 167",
      },
    ],
  },

  "debts-owed-to-you": {
    heading: "Debts Owed to You",
    subheading: "Zakat on money others owe you depends on whether you expect to collect it",
    rulingParts: [
      { bold: "Collectible debts (dayn marjuw) are zakatable.", normal: "If someone owes you money and you expect them to pay — they are solvent and acknowledge the debt — you must pay zakat on that amount each year." },
      { bold: "Doubtful debts (dayn ghayr marjuw) are not zakatable", normal: "until actually received. If the debtor is insolvent, disputes the debt, or you have no expectation of repayment, you do not pay zakat on it. When (and if) you eventually receive it, you pay zakat for one past year only." },
    ],
    evidence:
      "Uthman ibn Affan (RA) used to say: \"This is the month of your zakat. Whoever has a debt, let him pay it off so that you can properly assess your wealth and pay zakat on it.\" The distinction between collectible and doubtful debts is based on the principle that one should not be obligated to pay zakat on wealth they may never receive.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "A debt owed to you by a solvent person who acknowledges it — you must pay zakat on it every year, because it is like money you have deposited with someone. But a debt owed by an insolvent person or one who denies it — you pay zakat for one year only when you receive it.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 30",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "If the debt is with someone who is able to pay and acknowledges it, zakat is due each year. If it is a lost or doubtful debt, the person pays zakat for one year when they receive it according to the stronger opinion.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 42",
      },
    ],
  },

  "agricultural-produce": {
    heading: "Agricultural Produce",
    subheading: "Zakat rates of 5% or 10% on grains, fruits, and crops at harvest",
    rulingParts: [
      { bold: "Zakat on agricultural produce is due at harvest,", normal: "not after a lunar year. There is no hawl requirement for crops." },
      { bold: "The rate is 10% if the land is irrigated naturally", normal: "(rain, rivers, springs) and 5% if irrigated artificially (pumps, purchased water, etc.). If mixed, 7.5%." },
      { bold: "The nisab for agricultural produce is five wasq,", normal: "approximately 653 kg of the crop. This applies to grains (wheat, barley, rice) and fruits (dates, raisins) that can be dried and stored." },
    ],
    evidence:
      "The Prophet (pbuh) said: \"On what is watered by the sky and springs, or is self-irrigating, the zakat is one-tenth (10%). On what is watered by irrigation, the zakat is one-twentieth (5%)\" (Sahih al-Bukhari 1483). He also said: \"There is no zakat on less than five wasq of dates\" (Sahih al-Bukhari 1459, Sahih Muslim 979).",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Zakat on crops and fruits is due at the time of harvest, as Allah says: 'And give its due on the day of its harvest' (al-An'am 6:141). There is no condition of the passage of a year for agricultural produce.",
        source: "al-Sharh al-Mumti', vol. 6, p. 70",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The nisab for grains and fruits is five wasq, which is 300 sa' according to the Prophetic measure, approximately 653 kilograms. Anything less than this does not require zakat.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 70",
      },
    ],
  },

  "livestock": {
    heading: "Livestock",
    subheading: "Zakat on camels, cattle, and sheep — specific thresholds from the Sunnah",
    rulingParts: [
      { bold: "Zakat is due on free-grazing (sa'imah) livestock only,", normal: "meaning animals that graze freely for most or all of the year. Animals fed primarily by purchased feed are not subject to livestock zakat (though they may be trade goods if held for sale)." },
      { bold: "Sheep: the nisab is 40 head.", normal: "From 40\u2013120 sheep, one sheep is due. From 121\u2013200, two sheep. From 201\u2013300, three sheep. Then one additional sheep for every additional 100." },
      { bold: "Cattle: the nisab is 30 head.", normal: "For every 30, a one-year-old calf (tabi'). For every 40, a two-year-old (musinnah)." },
      { bold: "Camels: the nisab is 5 camels.", normal: "The thresholds and amounts due are detailed in the hadith of Abu Bakr (RA) on zakat, found in Sahih al-Bukhari." },
    ],
    evidence:
      "Abu Bakr as-Siddiq (RA) wrote the detailed zakat schedule that the Prophet (pbuh) had established, which includes the specific thresholds for camels, cattle, and sheep (Sahih al-Bukhari 1454). The Prophet (pbuh) said: \"Any owner of camels, cattle, or sheep who does not pay their zakat — on the Day of Resurrection they will be made larger and fatter than they were, and they will trample him with their hooves\" (Sahih al-Bukhari 1460, Sahih Muslim 987).",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "The condition for livestock zakat is that the animals are sa'imah — meaning they graze on natural pastures for all or most of the year. If the owner feeds them from his own wealth for most of the year, there is no zakat on them as livestock.",
        source: "al-Sharh al-Mumti', vol. 6, p. 48",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The nisab for sheep is 40. Whoever has fewer than 40 free-grazing sheep has no zakat obligation on them. When they reach 40, one sheep is due in zakat.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 93",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // COMMON ISSUES
  // ─────────────────────────────────────────────

  "common-mistakes": {
    heading: "Common Mistakes & Misconceptions",
    subheading: "Errors that cause Muslims to significantly overpay or underpay their zakat",
    rulingParts: [
      { bold: "Mistake 1: Charging 2.5% on the full stock portfolio for long-term holders.", normal: "Many popular zakat calculators ask for your total portfolio value and apply 2.5%. This is only correct for active traders. Long-term investors should pay zakat on dividends and realized profits only, not on the full value of shares held for investment. This error can cause someone to overpay by thousands of dollars." },
      { bold: "Mistake 2: Ignoring zakat on worn gold jewelry.", normal: "Some calculators exclude jewelry that women wear regularly. The stronger opinion, held by Ibn Baz, Ibn Uthaymeen, and Ibn Taymiyyah (based on explicit hadiths), is that worn gold jewelry above the nisab (85g) is subject to zakat." },
      { bold: "Mistake 3: Not deducting qualifying debts.", normal: "Debts that are due within the year — such as mortgage payments, credit card balances, and loan installments — can be deducted from your zakatable wealth before calculating zakat. Many calculators ignore this entirely." },
      { bold: "Mistake 4: Using the gold nisab standard for cash.", normal: "The gold nisab (approximately $5,000\u2013$7,000 USD) is much higher than the silver nisab (approximately $400\u2013$600 USD). Some calculators default to gold. The more cautious and beneficial approach is the silver standard, which ensures more people fulfill their obligation." },
      { bold: "Mistake 5: Paying zakat on the value of rental properties.", normal: "Zakat is due on net rental income only, not on the market value of the property. A calculator that asks for property value and charges 2.5% is incorrect." },
    ],
    evidence:
      "Each of these mistakes stems from not distinguishing between asset categories in Islamic law. The Prophet (pbuh) established different rules for trade goods, personal property, and income-generating assets. A one-size-fits-all approach — applying 2.5% to everything — contradicts the detailed fiqh that the scholars have derived from the Quran and Sunnah.",
    citations: [
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "Whoever buys shares in order to benefit from their annual returns, they are like fixed assets — zakat is due on the dividends only. But whoever buys shares to trade them, then they are trade goods and zakat is due on their market value.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 226",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The most correct scholarly opinion is that zakat is obligatory on gold jewelry that women wear if it reaches the nisab. Buildings prepared for rent are not subject to zakat on their value — zakat is on the rental income.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, pp. 82, 167",
      },
      {
        scholar: "Ibn Taymiyyah (rahimahullah)",
        quote: "Debts that are established and due reduce one's zakatable wealth. A person subtracts what they owe from what they own, and pays zakat on the remainder if it reaches the nisab.",
        source: "Majmu' al-Fatawa, vol. 25, p. 48",
      },
    ],
  },

  "deducting-debts": {
    heading: "Deducting Debts from Zakat",
    subheading: "Which debts reduce your zakatable wealth — and which do not",
    rulingParts: [
      { bold: "Debts that are due and established may be deducted", normal: "from your zakatable wealth before calculating zakat. This means you subtract what you owe from what you own, and pay zakat on the remainder if it still reaches the nisab." },
      { bold: "Qualifying debts include:", normal: "credit card balances, loan payments due within the year, rent due, immediate bills, and other obligations that are presently owed or soon due." },
      { bold: "Long-term debt (like a full mortgage balance) is not deducted in full.", normal: "Only the installments due within the current year are deducted. You do not subtract your entire $300,000 mortgage from your zakatable wealth — only the payments that are due now or within the year." },
      { bold: "This is the position of Ibn Taymiyyah", normal: "and is the most balanced approach: debts reduce zakatable wealth, but only the portions that are currently due, preventing abuse while protecting those genuinely burdened by debt." },
    ],
    evidence:
      "Uthman ibn Affan (RA) said during Ramadan: \"This is the month of your zakat. Whoever has a debt, let him pay it off so that you can assess your wealth and pay zakat on what remains.\" This athar indicates that debts reduce zakatable wealth. The scholars of the Hanbali madhhab, including Ibn Taymiyyah, held that debts owed by a person reduce their zakatable wealth, whether the wealth is apparent (zahir) or hidden (batin).",
    citations: [
      {
        scholar: "Ibn Taymiyyah (rahimahullah)",
        quote: "The correct view is that debt prevents the obligation of zakat — meaning it is deducted from one's wealth. If what remains after the deduction reaches the nisab, zakat is due on it. If not, then no zakat is due. This applies to all types of zakatable wealth.",
        source: "Majmu' al-Fatawa, vol. 25, p. 48",
      },
      {
        scholar: "Ibn Uthaymeen (rahimahullah)",
        quote: "If a person has wealth that reaches the nisab but he also owes a debt that would reduce it below the nisab, then there is no zakat on him. He subtracts his debts from his wealth and pays zakat on the remainder. However, for long-term debts, only the current installment is deducted, not the entire amount.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 38",
      },
      {
        scholar: "Ibn Baz (rahimahullah)",
        quote: "The scholars have differed on whether debt prevents zakat, but the stronger view — and it is the view of the majority of scholars — is that debts which are due are deducted from one's zakatable wealth.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 39",
      },
    ],
  },
};
