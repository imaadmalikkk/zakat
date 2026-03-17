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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Zakat is obligatory upon every Muslim who possesses the nisab, whether male or female, young or old, sane or insane. If the owner is not able to handle the duty themselves, their guardian must pay it on their behalf.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 16",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "Whoever denies the obligation of zakat while knowing it is obligatory has disbelieved, and whoever is stingy with it or reduces what is due is among the wrongdoers who will face a painful punishment.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 12",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The scholars are unanimously agreed that zakat is one of the five pillars of Islam. Its obligation is established by the Quran, the Sunnah, and the consensus (ijma') of the entire Ummah.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 326",
      },
      {
        scholar: "Imam Ibn al-Qayyim (rahimahullah)",
        quote: "Zakat is the bridge between prayer and fasting in the pillars of Islam. It purifies the wealth and the soul, protects the poor, and binds the community together in mutual responsibility.",
        source: "Zad al-Ma'ad, vol. 2, p. 5",
      },
      {
        scholar: "Ibn Rushd (rahimahullah)",
        quote: "Their disagreement arises from whether zakat is considered an act of worship or a right established in wealth for the poor. Those who see it as a right for the poor argue that the creditor's right is prior to the right of the poor. Those who view zakat as an act of worship contend that it is obligatory on whoever possesses wealth, and the right of Allah is more deserving of being fulfilled.",
        source: "Bidayat al-Mujtahid wa Nihayat al-Muqtasid, Book of Zakat",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "Zakat is obligatory because wealth beyond basic needs is a blessing that enables one to enjoy surplus, necessitating the expression of gratitude by allocating a portion of it to the poor — whether one holds it for trade, expenditure, adornment, or without any specific intention.",
        source: "Bada'i al-Sana'i fi Tartib al-Shara'i, vol. 2, p. 17",
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
    positions: [
      {
        position: "Gold and silver are combined when calculating nisab — if the sum of both reaches either threshold, zakat is due.",
        scholars: ["Imam Abu Hanifa"],
        school: "Hanafi",
        evidence: "Gold and silver are both forms of currency and serve the same purpose. They should be combined just as different currencies are combined.",
      },
      {
        position: "Gold and silver are assessed separately — each must independently reach its own nisab.",
        scholars: ["Imam Malik", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Uthaymeen", "Shaykh Ibn Baz"],
        school: "Maliki, Shafi'i & Hanbali (majority)",
        evidence: "They are two distinct types of wealth, each with its own nisab established by the Prophet (pbuh). The gold nisab and silver nisab are independent thresholds.",
        isAppPosition: true,
      },
    ],
    citations: [
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "The nisab of gold is twenty mithqal, which is equivalent to 11 3/7 Saudi pounds, or approximately 85 grams of pure gold. The nisab of silver is 200 dirhams, which is equivalent to 56 Saudi riyals of silver, or approximately 595 grams of pure silver.",
        source: "Fatawa al-Lajnah ad-Da'imah, vol. 9, no. 2476",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "If a person has cash and wants to know whether it reaches the nisab, he should evaluate it against silver. If it equals the value of 595 grams of silver, then zakat is due. This is more cautious and more beneficial for the recipients of zakat.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 55",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The nisab for currency notes is the equivalent of the nisab of silver, because this is more beneficial for the poor and more precautionary for the one paying zakat.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 48",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Gold and silver are not combined with each other for the purpose of nisab according to the madhhab of Ahmad, Malik, and al-Shafi'i. Each is assessed independently. Abu Hanifa held they are combined because they serve the same function.",
        source: "al-Mughni, vol. 2, p. 620",
      },
      {
        scholar: "Imam Malik (rahimahullah)",
        quote: "The agreed sunna with us is that zakat has to be paid on twenty dinars of gold, in the same way as it has to be paid on two hundred dirhams of silver.",
        source: "al-Muwatta, Kitab al-Zakat (Book 17)",
      },
      {
        scholar: "Imam al-Shafi'i (rahimahullah)",
        quote: "If a man has twenty mithqals of gold minus a carat, or five awqiya of silver minus a carat, then no zakat is due on either of them. Gold should not be combined with silver for the calculation of zakat.",
        source: "Kitab al-Umm, Book of Zakat",
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
    positions: [
      {
        position: "If wealth drops below the nisab at any point during the year, the hawl restarts when it returns to the nisab.",
        scholars: ["Imam Malik", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Uthaymeen", "Shaykh Ibn Baz"],
        school: "Maliki, Shafi'i & Hanbali (majority)",
        evidence: "The condition of possessing the nisab must be met for a continuous year. Any interruption breaks the continuity and resets the clock.",
        isAppPosition: true,
      },
      {
        position: "Only the beginning and end of the hawl matter — temporary drops below nisab during the year do not interrupt it.",
        scholars: ["Imam Abu Hanifa"],
        school: "Hanafi",
        evidence: "Tracking wealth continuously throughout the year would be an undue hardship. What matters is that the nisab is met at the start and end of the year.",
      },
    ],
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "The hawl is a condition for the obligation of zakat on gold, silver, cash, trade goods, and livestock. It is not a condition for agricultural produce or minerals, as their zakat is due at the time of harvest or extraction.",
        source: "al-Sharh al-Mumti', vol. 6, p. 30",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "It is recommended for a Muslim to set a specific date each year — such as Ramadan — to calculate and pay their zakat. If they pay slightly early, that is permissible and may be better.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 52",
      },
      {
        scholar: "Shaykh Salih al-Fawzan (hafidhahullah)",
        quote: "The hawl begins from the time the wealth reaches the nisab. If the wealth decreases below the nisab during the year, then increases again, the hawl starts anew from the time it returned to the nisab.",
        source: "al-Mulakhas al-Fiqhi, vol. 1, p. 213",
      },
      {
        scholar: "Imam Ibn al-Qayyim (rahimahullah)",
        quote: "Its obligation every month or every Friday would harm the owners of wealth, and its obligation once in a lifetime would harm the needy. So it was not fairer than its obligation once every year — this is the most just and balanced of rulings.",
        source: "Zad al-Ma'ad, vol. 2",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "When newly acquired wealth comes from the growth of wealth already in the person's possession — such as profit from trade capital — it is joined to the original wealth, and the hawl of the original applies to both. We know of no disagreement on this.",
        source: "al-Mughni, vol. 2",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "It is not necessary to own zakatable assets above the nisab for the entire lunar year. Zakat is payable as long as one owns wealth equaling the nisab at the beginning and end of the year. Fluctuations during the year are overlooked, unless the total reaches zero — in which case a new hawl commences.",
        source: "Bada'i al-Sana'i fi Tartib al-Shara'i",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Paper money has taken the place of gold and silver as a medium of exchange. It carries the same rulings as gold and silver in all matters of zakat. There is no difference between cash in your hand and cash in your bank account — all of it is zakatable if it reaches the nisab and the hawl passes.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 93",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "Zakat is obligatory on cash money — whether in paper notes or coins — if it reaches the nisab of silver (the value of 595 grams of silver) or the nisab of gold (the value of 85 grams of gold), and a full lunar year has passed upon it.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 44",
      },
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "All types of cash that a person owns — whether in their possession, in a bank, or owed to them as a collectible debt — must be combined when calculating the nisab for zakat.",
        source: "Fatawa al-Lajnah ad-Da'imah, vol. 9, no. 1879",
      },
      {
        scholar: "Shaykh Salih al-Fawzan (hafidhahullah)",
        quote: "Paper currency is a form of independent money with the legal rulings of gold and silver. The four schools of thought agree by analogy that whatever serves as a medium of exchange is subject to zakat.",
        source: "al-Mulakhas al-Fiqhi, vol. 1, p. 218",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The Shariah has not defined any specific condition or definition for currency and money, and has instead left it to custom. The physical body of money is never the objective of acquiring money — rather, it is the counter-exchange which is the objective and benefit of money.",
        source: "Majmu' al-Fatawa, vol. 29, p. 469",
      },
      {
        scholar: "Imam Malik (rahimahullah)",
        quote: "Anyone who has unminted gold or silver, or gold and silver jewellery which is not used for wearing, must pay zakat on it every year. It is weighed and one-fortieth is taken, unless it falls short of twenty dinars of gold or two hundred dirhams of silver.",
        source: "al-Muwatta, Kitab al-Zakat (Book 17)",
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
    positions: [
      {
        position: "Zakat IS due on gold jewelry even if it is regularly worn.",
        scholars: ["Imam Abu Hanifa", "Shaykh al-Islam Ibn Taymiyyah", "Shaykh Ibn Baz", "Shaykh Ibn Uthaymeen", "Shaykh al-Albani"],
        school: "Hanafi + major Salafi scholars",
        evidence: "Based on the hadith of the woman with two gold bangles (Abu Dawud 1563) and the hadith of Umm Salamah (Abu Dawud 1564). The texts are explicit and have no authentic counter-evidence.",
        isAppPosition: true,
      },
      {
        position: "Worn jewelry intended for personal adornment is exempt from zakat.",
        scholars: ["Imam Malik", "Imam al-Shafi'i", "Imam Ahmad", "Imam al-Nawawi", "Imam Ibn Qudamah", "Shaykh Salih al-Fawzan"],
        school: "Maliki, Shafi'i & Hanbali",
        evidence: "Based on the report of Jabir that the Prophet (pbuh) said there is no zakat on jewelry, and the practice of Aisha (RA) who did not pay zakat on the jewelry of her nieces. They argue the hadiths requiring zakat are weak or abrogated.",
      },
    ],
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "The correct view is that zakat is obligatory on gold jewelry even if it is worn, because of the authentic hadiths that clearly indicate this. The hadith of the woman with the two bangles is explicit, and there is no authentic evidence that exempts worn jewelry from zakat.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 137",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The most correct scholarly opinion, and the one supported by the evidence, is that zakat is obligatory on gold and silver jewelry that women wear if it reaches the nisab — which is 85 grams for gold and 595 grams for silver. The hadiths on this matter are clear and authentic.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 82",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "Zakat on jewelry is the position of Abu Hanifah and a group of the Salaf, and it is supported by the apparent meaning of the texts. This is the stronger opinion.",
        source: "Majmu' al-Fatawa, vol. 25, p. 16",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The correct and well-known position of our madhhab [Shafi'i] is that there is no zakat on jewelry that is permissible and prepared for use. This is the position of Malik, Ahmad, and the majority of scholars.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 32",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "There is no zakat on jewelry prepared for personal use according to the majority of scholars, including Malik, al-Shafi'i, Ahmad, and Ishaq. This was narrated from five of the Companions with no known opposition among them.",
        source: "al-Mughni, vol. 3, p. 42",
      },
      {
        scholar: "Shaykh Muhammad Nasir al-Din al-Albani (rahimahullah)",
        quote: "The hadiths requiring zakat on jewelry are authentic, and the hadiths exempting it are weak. Therefore zakat is obligatory on gold and silver jewelry if it reaches the nisab.",
        source: "Irwa' al-Ghalil, no. 818",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "Ornaments are considered surplus wealth beyond basic necessities, as the preparation for beautification indicates excess over primary needs. Thus it becomes a blessing, obligating the expression of gratitude by allocating a portion of it to the poor — whether one holds it for trade, expenditure, or adornment.",
        source: "Bada'i al-Sana'i fi Tartib al-Shara'i, vol. 2, p. 17",
      },
      {
        scholar: "Ibn Rushd (rahimahullah)",
        quote: "The scholars agree unanimously that zakat is obligatory on gold and silver. Their disagreement on jewelry centers on whether gold fashioned for personal adornment retains its character as growth-generating wealth, or whether it becomes personal property exempt from zakat like clothing and tools.",
        source: "Bidayat al-Mujtahid wa Nihayat al-Muqtasid, Book of Zakat",
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
    positions: [
      {
        position: "Long-term holders pay zakat on dividends and profits only, not on the underlying share value.",
        scholars: ["Shaykh Ibn Uthaymeen", "Shaykh Ibn Baz", "The Permanent Committee"],
        school: "Traditional Salafi scholars",
        evidence: "Shares held for yield are analogous to rental property — zakat on income, not the asset. Active traders pay on full market value as trade goods.",
        isAppPosition: true,
      },
      {
        position: "All shareholders should calculate zakat using the CRI (Current Ratio Indicator) method on the company's zakatable assets.",
        scholars: ["Fiqh Council of North America", "AAOIFI", "Islamic Fiqh Academy (OIC)"],
        school: "Institutional / modern fiqh bodies",
        evidence: "The shareholder owns a proportional share of the company's zakatable assets (cash, receivables, inventory). Zakat is calculated on that proportion regardless of trading intent.",
      },
    ],
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Whoever buys shares in order to benefit from their annual returns (dividends), they are like fixed assets — zakat is due on the dividends only if they reach the nisab and a year passes. But whoever buys shares to trade them, buying and selling for profit, then they are trade goods and zakat is due on their market value.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 226",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "If the shareholder intends to hold the shares as an investment to benefit from the annual dividends, then zakat is only on the dividends and profits if they reach the nisab. He is not required to pay zakat on the shares themselves. But if his intention is to trade them — buying low and selling high — then they are trade goods and zakat is due on their full market value.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 190",
      },
      {
        scholar: "The Permanent Committee (al-Lajnah ad-Da'imah)",
        quote: "Shares purchased for trading are valued at their market price at the end of the year and zakat of 2.5% is paid on that. Shares held for investment (not for trading) — zakat is on the revenue (dividends and profits) they yield, not the value of the shares themselves.",
        source: "Fatawa al-Lajnah ad-Da'imah, vol. 9, no. 4269",
      },
      {
        scholar: "Islamic Fiqh Academy (OIC), Resolution No. 28 (3/4)",
        quote: "If the shareholder is able to determine his share of the company's zakatable assets, he pays zakat on that share. If he cannot, and the company does not pay zakat, he applies 2.5% to the market value of shares intended for trading, or to the dividends of shares held for investment.",
        source: "Islamic Fiqh Academy, Jeddah, Resolution 28 (3/4), 1988",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Trade goods are everything a person has prepared for buying and selling to make a profit. They are valued at the end of the year at market price, and 2.5% is paid. Fixed assets used in the business — such as machinery and buildings — are not subject to zakat.",
        source: "al-Sharh al-Mumti', vol. 6, p. 140",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The merchant must assess the value of all his trade goods at the end of the year at their current market value, add that to his cash and debts owed to him, subtract debts he owes, and then pay 2.5% on the total.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 165",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Trade goods are assessed at their current market value at the end of the year, whether that value is more or less than the purchase price. This is the position of the majority of scholars including Malik, al-Shafi'i, and Ahmad.",
        source: "al-Mughni, vol. 3, p. 31",
      },
      {
        scholar: "Shaykh Salih al-Fawzan (hafidhahullah)",
        quote: "Fixed assets used in business operations — machinery, tools, vehicles — are not subject to zakat. Only goods prepared for sale are zakatable. The business owner values his inventory at the current selling price, not the purchase price.",
        source: "al-Mulakhas al-Fiqhi, vol. 1, p. 235",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The four imams and the rest of the ummah — except those who held odd views — are agreed that it is obligatory to give zakat on trade goods.",
        source: "Majmu' al-Fatawa, vol. 25",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "Zakat is obligatory on trade goods according to the correct madhhab. The hadith of Abu Dharr about garments requiring zakat indicates this obligation, because no zakat is due on garments unless they are for trade.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 4",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Anything that people take as money and use as a medium of exchange takes the ruling of gold and silver in zakat. The form does not matter — what matters is the function.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 95 (applied by analogy to digital currencies)",
      },
      {
        scholar: "Islamic Fiqh Academy (OIC)",
        quote: "Digital currencies that have accepted market value and are used as a medium of exchange or investment are subject to zakat according to their nature — as currency if they function as money, or as trade goods if held for trading.",
        source: "Islamic Fiqh Academy, contemporary fatawa on digital assets",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "Whatever people adopt as a medium of exchange for their transactions takes the rulings of the established currencies in all matters, including zakat. The underlying material is not the determining factor — the function is.",
        source: "Majmu' al-Fatawa, vol. 29, p. 469 (applied by analogy to digital currencies)",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "If wealth is in the person's possession and they can dispose of it, zakat is due on it. If it is held by another and they cannot access it, it is like a debt — if it is expected to be returned, they pay zakat when they receive it for the past years.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 24",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "Wealth that the owner can access and withdraw from is zakatable. What they cannot access is not subject to zakat until it comes into their possession.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 56",
      },
      {
        scholar: "Fiqh Council of North America",
        quote: "Retirement accounts such as 401(k) and IRA should be assessed based on accessibility. The vested, withdrawable balance is zakatable. Employer contributions that have not vested are not counted until they vest.",
        source: "Fiqh Council of North America, Resolution on Retirement Accounts",
      },
      {
        scholar: "Shaykh Salih al-Fawzan (hafidhahullah)",
        quote: "Wealth that is detained or withheld from its owner — such that he cannot access it or benefit from it — is not subject to zakat during the period of inaccessibility. When he regains access, he pays zakat for one year.",
        source: "al-Mulakhas al-Fiqhi, vol. 1, p. 214",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Whoever owns real estate that they rent out does not pay zakat on the property itself. They pay zakat on the rental income. The rental income is added to the person's other cash, and if the total reaches the nisab and a year passes, zakat is due.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 205",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "Buildings and land prepared for rent are not subject to zakat on their value. However, if rent is collected and it remains for a full year while reaching the nisab — either alone or when combined with other money — then zakat is due on it.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 167",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "Fixed assets that generate income — like rental properties, workshops, and agricultural land — are not themselves subject to zakat. The zakat obligation is on the income and profits they produce, treated like any other cash.",
        source: "Majmu' al-Fatawa, vol. 25, p. 15",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "There is no zakat on houses, shops, or properties that are not intended for sale, even if their value is enormous. Zakat is on the proceeds and income they generate.",
        source: "al-Mughni, vol. 3, p. 28",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "If a person decides to keep for personal use goods originally acquired for trade, they become personal property and are no longer subject to trade-goods zakat. Intention determines whether property is zakatable as trade goods or exempt as personal-use property.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 49",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "A debt owed to you by a solvent person who acknowledges it — you must pay zakat on it every year, because it is like money you have deposited with someone. But a debt owed by an insolvent person or one who denies it — you pay zakat for one year only when you receive it.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 30",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "If the debt is with someone who is able to pay and acknowledges it, zakat is due each year. If it is a lost or doubtful debt, the person pays zakat for one year when they receive it according to the stronger opinion.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 42",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "Debts owed to a person are of two types: a debt owed by a solvent person — zakat is due on it each year according to the stronger position. And a debt owed by an insolvent person — it is like lost wealth, and zakat is due for one year when recovered.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 361",
      },
      {
        scholar: "Imam Ibn al-Qayyim (rahimahullah)",
        quote: "The principle is that a creditor's wealth includes what is owed to him by others. If the debtor is able to pay, the creditor is considered the owner of that wealth and must pay zakat on it annually.",
        source: "Zad al-Ma'ad, vol. 2, p. 16",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Debts owed to a person are of two types: a debt hoped to be repaid — because the debtor acknowledges it and is willing and able to pay — and a debt with no hope of repayment. For the first, zakat is due annually. For the second, no zakat is due until receipt, then one pays for a single year.",
        source: "al-Mughni, vol. 2",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "Debt receivables are of three tiers: strong debt from loans or trade — zakat accrues from the moment of liability. Intermediate debt from sale of personal property — zakat matures upon possessing the full nisab. Weak debt not from exchange of wealth, such as mahr — zakat begins only upon actual receipt.",
        source: "Bada'i al-Sana'i fi Tartib al-Shara'i",
      },
      {
        scholar: "Imam Malik (rahimahullah)",
        quote: "The lender of a debt does not pay zakat on it until he gets it back. If years have passed, he pays zakat for one year only upon receipt. For trade debts, the merchant pays zakat every year on the amount owed to him.",
        source: "al-Muwatta, Kitab al-Zakat (Book 17)",
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
    positions: [
      {
        position: "Zakat is only on storable grains and fruits (wheat, barley, dates, raisins, etc.) with a nisab of five wasq (~653 kg).",
        scholars: ["Imam Malik", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Uthaymeen", "Shaykh Ibn Baz"],
        school: "Maliki, Shafi'i & Hanbali (majority)",
        evidence: "The hadith specifies five wasq as a minimum. The majority limit it to crops that can be dried and stored, based on the types mentioned in the Sunnah.",
        isAppPosition: true,
      },
      {
        position: "Zakat is due on ALL produce from the earth — vegetables, fruits, and grains — with no nisab requirement.",
        scholars: ["Imam Abu Hanifa"],
        school: "Hanafi",
        evidence: "Based on the general meaning of the verse: \"Give its due on the day of its harvest\" (6:141). Abu Hanifa applied no minimum threshold and included all produce.",
      },
    ],
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Zakat on crops and fruits is due at the time of harvest, as Allah says: 'And give its due on the day of its harvest' (al-An'am 6:141). There is no condition of the passage of a year for agricultural produce.",
        source: "al-Sharh al-Mumti', vol. 6, p. 70",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The nisab for grains and fruits is five wasq, which is 300 sa' according to the Prophetic measure, approximately 653 kilograms. Anything less than this does not require zakat.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 70",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "Our madhhab [Shafi'i] holds that zakat is obligatory on staple foods that can be dried and stored — such as wheat, barley, rice, dates, and raisins. Vegetables and perishable fruits do not have zakat.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 440",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "There is no zakat on vegetables, whether or not they can be stored. This is the position of the majority of scholars. Abu Hanifa alone held that zakat is due on everything that grows from the earth.",
        source: "al-Mughni, vol. 2, p. 694",
      },
      {
        scholar: "Ibn Rushd (rahimahullah)",
        quote: "The difference of opinion lies in the fact that some jurists confine the paying of zakat to only those items of consumption which are generally agreed upon, while others go beyond those items and include dried fruits too. The crux is: what qualifies the four edible items — wheat, barley, dates, and dried grapes — for zakat?",
        source: "Bidayat al-Mujtahid wa Nihayat al-Muqtasid, vol. 1",
      },
      {
        scholar: "Imam Ibn al-Qayyim (rahimahullah)",
        quote: "It was not his practice to levy zakat on vegetables, melons, cucumbers, and fruits which cannot be stored or measured by capacity. Increase in crops and fruits is more than increase in trade, therefore its obligation is greater than that of trade goods.",
        source: "Zad al-Ma'ad, vol. 2",
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
    positions: [
      {
        position: "Zakat is only on free-grazing (sa'imah) livestock — animals fed with purchased feed are exempt from livestock zakat.",
        scholars: ["Imam Abu Hanifa", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Uthaymeen", "Shaykh Ibn Baz"],
        school: "Hanafi, Shafi'i & Hanbali (majority)",
        evidence: "The hadith of Abu Bakr (RA) specifies \"sa'imah\" (free-grazing) as a condition. Animals fed at the owner's expense do not meet this condition.",
        isAppPosition: true,
      },
      {
        position: "Zakat is due on all livestock regardless of whether they graze freely or are fed with purchased feed.",
        scholars: ["Imam Malik"],
        school: "Maliki",
        evidence: "Imam Malik did not consider free-grazing a condition, holding that the general texts on livestock zakat apply to all animals kept for breeding and dairy.",
      },
    ],
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "The condition for livestock zakat is that the animals are sa'imah — meaning they graze on natural pastures for all or most of the year. If the owner feeds them from his own wealth for most of the year, there is no zakat on them as livestock.",
        source: "al-Sharh al-Mumti', vol. 6, p. 48",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The nisab for sheep is 40. Whoever has fewer than 40 free-grazing sheep has no zakat obligation on them. When they reach 40, one sheep is due in zakat.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 93",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "There is no zakat on livestock that are not sa'imah (free-grazing). This is the position of Abu Hanifa, al-Shafi'i, and Ahmad. The condition of sa'imah is indicated by the hadith of Abu Bakr (RA).",
        source: "al-Mughni, vol. 2, p. 574",
      },
      {
        scholar: "Shaykh Salih al-Fawzan (hafidhahullah)",
        quote: "Sa'imah livestock are those that graze on natural public pastures for all or most of the year. If the owner feeds them with purchased fodder for most of the year, they are not sa'imah and there is no zakat on them unless they are trade goods.",
        source: "al-Mulakhas al-Fiqhi, vol. 1, p. 227",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The Muslims unanimously agreed that zakat is due on camels, cattle, and sheep. As for horses, mules, donkeys, and the like, no zakat is due on them.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 311",
      },
      {
        scholar: "Ibn Rushd (rahimahullah)",
        quote: "Malik and al-Layth say that livestock is subject to zakat whether it be grazing or fodder-fed, used for carrying loads or not. The majority hold that zakat is only on free-grazing livestock based on the specification of 'sa'imah' in the hadith of Abu Bakr.",
        source: "Bidayat al-Mujtahid wa Nihayat al-Muqtasid, vol. 1",
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
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Whoever buys shares in order to benefit from their annual returns, they are like fixed assets — zakat is due on the dividends only. But whoever buys shares to trade them, then they are trade goods and zakat is due on their market value.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 226",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The most correct scholarly opinion is that zakat is obligatory on gold jewelry that women wear if it reaches the nisab. Buildings prepared for rent are not subject to zakat on their value — zakat is on the rental income.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, pp. 82, 167",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "Debts that are established and due reduce one's zakatable wealth. A person subtracts what they owe from what they own, and pays zakat on the remainder if it reaches the nisab.",
        source: "Majmu' al-Fatawa, vol. 25, p. 48",
      },
      {
        scholar: "Shaykh Salih al-Fawzan (hafidhahullah)",
        quote: "It is essential that Muslims learn the detailed rulings of zakat for each type of wealth. Applying a single flat rate to all assets without distinguishing between trade goods, fixed assets, and income-generating property leads to significant errors.",
        source: "al-Mulakhas al-Fiqhi, vol. 1, p. 210",
      },
      {
        scholar: "Imam Ibn Hazm (rahimahullah)",
        quote: "There is no zakat except on the specific categories established by the texts: gold, silver, camels, cattle, sheep, wheat, barley, dates, and trade goods. Each has its own conditions and rates that must be followed precisely.",
        source: "al-Muhalla, vol. 5, p. 234",
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
    positions: [
      {
        position: "Debts are deducted from all types of zakatable wealth — whether apparent (zahir) or hidden (batin).",
        scholars: ["Imam Ahmad", "Shaykh al-Islam Ibn Taymiyyah", "Shaykh Ibn Uthaymeen", "Shaykh Ibn Baz"],
        school: "Hanbali",
        evidence: "Based on the athar of Uthman (RA) and the general principle that one only pays zakat on wealth they fully own. This is the broadest application of debt deduction.",
        isAppPosition: true,
      },
      {
        position: "Debts are deducted from hidden wealth (cash, gold) only, not from apparent wealth (livestock, crops).",
        scholars: ["Imam Malik"],
        school: "Maliki",
        evidence: "Distinguishes between wealth visible to the ruler (who would collect zakat on it regardless) and hidden wealth where the individual self-assesses.",
      },
      {
        position: "Debts do NOT reduce zakatable wealth. Zakat is due on gross assets regardless of debts owed.",
        scholars: ["Imam al-Shafi'i", "Imam al-Nawawi"],
        school: "Shafi'i",
        evidence: "Zakat and debt are two independent obligations. The right of the poor to zakat is not negated by the debtor's personal obligations to creditors.",
      },
      {
        position: "Debts owed to other people are deducted, but divine obligations (like unpaid kaffarat or zakat from past years) are not.",
        scholars: ["Imam Abu Hanifa"],
        school: "Hanafi",
        evidence: "Distinguishes between debts owed to humans (huquq al-'ibad), which reduce wealth, and debts owed to Allah, which do not affect the zakat calculation.",
      },
    ],
    citations: [
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The correct view is that debt prevents the obligation of zakat — meaning it is deducted from one's wealth. If what remains after the deduction reaches the nisab, zakat is due on it. If not, then no zakat is due. This applies to all types of zakatable wealth.",
        source: "Majmu' al-Fatawa, vol. 25, p. 48",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "If a person has wealth that reaches the nisab but he also owes a debt that would reduce it below the nisab, then there is no zakat on him. He subtracts his debts from his wealth and pays zakat on the remainder. However, for long-term debts, only the current installment is deducted, not the entire amount.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 38",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The scholars have differed on whether debt prevents zakat, but the stronger view — and it is the view of the majority of scholars — is that debts which are due are deducted from one's zakatable wealth.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 39",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The correct position in our madhhab [Shafi'i] is that debt does not prevent the obligation of zakat, whether the wealth is apparent or hidden. This is because zakat is a right related to the wealth itself, and the debtor still owns the wealth.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 344",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Debt that consumes the nisab or reduces it below the threshold prevents the obligation of zakat. This is the position of Uthman, Ibn Umar, and the majority of the Tabi'in, and it is the madhhab of Ahmad.",
        source: "al-Mughni, vol. 2, p. 633",
      },
      {
        scholar: "Ibn Rushd (rahimahullah)",
        quote: "Their disagreement arises from whether zakat is an act of worship or a right for the poor. Those who view it as a right say the creditor's claim is prior. Those who view it as worship say the right of Allah is more deserving of being fulfilled — thus debt does not prevent zakat.",
        source: "Bidayat al-Mujtahid wa Nihayat al-Muqtasid, Book of Zakat",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "Debt prevents the obligation of zakat except in the case of crops and fruits. A person burdened by debts equaling or exceeding their wealth is needy — and the needy are not obligated to pay zakat.",
        source: "Bada'i al-Sana'i fi Tartib al-Shara'i, vol. 2",
      },
    ],
  },
};
