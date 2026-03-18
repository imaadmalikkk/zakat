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

  "wisdom-behind-zakat": {
    heading: "The Wisdom Behind Zakat",
    subheading: "Why Allah legislated this pillar — purification, solidarity, and a warning against withholding",
    rulingLabel: "Key Points",
    evidenceLabel: "From the Quran & Sunnah",
    rulingParts: [
      { bold: "Zakat purifies the soul and the wealth.", normal: "Allah says: \"Take from their wealth a charity by which you purify them and cause them increase\" (at-Tawbah 9:103). The word 'zakat' itself comes from the root meaning purification and growth. When you give, your remaining wealth is blessed, and your heart is cleansed of attachment to the dunya." },
      { bold: "It is a protection from greed and hoarding.", normal: "The Prophet (pbuh) said: \"Beware of greed, for it destroyed those before you. It commanded them to be miserly, and they were miserly; it commanded them to cut ties of kinship, and they cut them; it commanded them to act wickedly, and they acted wickedly\" (Sunan Abu Dawud 1698). Zakat forces the wealth to circulate and prevents the believer from falling into the trap of loving wealth more than loving Allah." },
      { bold: "It creates social solidarity and closes the gap between rich and poor.", normal: "Allah says: \"So that it does not become a perpetual distribution among the rich from among you\" (al-Hashr 59:7). Zakat is not a favour from the rich to the poor — it is a right that Allah established. The poor have a known share in the wealth of the rich, and the community is bound together by this mutual responsibility." },
      { bold: "Withholding zakat carries severe consequences.", normal: "The Prophet (pbuh) said: \"Whoever is given wealth by Allah and does not pay its zakat — on the Day of Resurrection his wealth will be made into a bald-headed poisonous snake with two black spots over its eyes, which will encircle his neck and bite his cheeks and say: 'I am your wealth, I am your treasure'\" (Sahih al-Bukhari 1403). Abu Bakr al-Siddiq went to war against those who refused to pay it, saying: \"By Allah, I will fight whoever differentiates between prayer and zakat.\"" },
      { bold: "The Sahaba understood this deeply and gave without hesitation.", normal: "Abu Bakr gave all of his wealth in the path of Allah. When the Prophet asked him what he left for his family, he said: \"Allah and His Messenger.\" Uthman ibn Affan single-handedly funded the army of Tabuk — one of the largest military expeditions in early Islam — from his own wealth. This was the generation that understood that wealth is a trust from Allah, not a personal possession." },
    ],
    evidence:
      "Allah says: \"Take from their wealth a charity by which you purify them and cause them increase, and invoke blessings upon them. Indeed, your invocations are reassurance for them\" (at-Tawbah 9:103). And He says: \"And what you give in zakat, desiring the countenance of Allah — those are the multipliers\" (ar-Rum 30:39). And He warns: \"And those who hoard gold and silver and spend it not in the way of Allah — give them tidings of a painful punishment\" (at-Tawbah 9:34).",
    citations: [
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The soul that gives becomes purified, and giving cleanses it from miserliness and sin just as water cleanses dirt. It is not that the wealth decreases by giving zakat, but rather it increases — both in blessing and in quantity — as the Prophet informed us.",
        source: "Majmu' al-Fatawa, vol. 25, p. 8",
      },
      {
        scholar: "Imam Ibn al-Qayyim (rahimahullah)",
        quote: "Zakat is one of the bridges between the servant and his Lord. It bridges the gap between the rich and the poor, purifies the wealth from impurity, and protects the giver from the punishment of the Fire. Its benefit returns to the giver more than it benefits the receiver.",
        source: "Zad al-Ma'ad, vol. 2, p. 5",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The wisdom behind the obligation of zakat includes: purification of the soul from the disease of miserliness, assisting the poor and needy, expressing gratitude for the blessing of wealth, and increasing what remains through the barakah of giving.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 324",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Zakat has wisdom regarding the giver, the receiver, and the wealth itself. For the giver, it purifies him from miserliness and accustoms him to generosity. For the receiver, it frees him from need and envy. For the wealth, it causes it to grow and be blessed.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 7",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "Allah made zakat obligatory to purify the wealthy and benefit the poor. It is a bridge of mercy between the two, and through it the wealth is cleansed and the society is strengthened. Whoever withholds it has wronged both himself and the poor.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 7",
      },
    ],
  },

  "zakat-in-history": {
    heading: "Zakat in the Time of the Prophet & the Khulafa",
    subheading: "How the early Muslims collected, enforced, and distributed zakat — and what it means for us today",
    rulingLabel: "Key Points",
    evidenceLabel: "Historical Evidence",
    rulingParts: [
      { bold: "The Prophet (pbuh) sent zakat collectors across the Muslim lands.", normal: "Zakat was not left to individual discretion. The Prophet appointed specific collectors and sent them to the tribes with clear instructions. When he sent Mu'adh ibn Jabal to Yemen, he told him: \"Inform them that Allah has made zakat obligatory upon them — to be taken from their rich and given to their poor\" (Sahih al-Bukhari 1395, Sahih Muslim 19). This established that zakat is a systematic, state-administered obligation, not a private act of charity." },
      { bold: "Abu Bakr fought those who refused to pay it.", normal: "After the Prophet's death, some tribes acknowledged the prayer but refused to pay zakat. Abu Bakr declared: \"By Allah, if they withhold even a she-camel's hobbling rope that they used to pay to the Messenger of Allah, I will fight them for it\" (Sahih al-Bukhari 1399, 1400). When Umar questioned him, Abu Bakr said: \"How can I differentiate between prayer and zakat? By Allah, I will fight whoever differentiates between them.\" This consensus among the Companions proved that refusing zakat is tantamount to apostasy." },
      { bold: "Umar ibn al-Khattab established the bayt al-mal.", normal: "Umar systematised the collection and distribution of zakat through the bayt al-mal (public treasury). He appointed governors and collectors, kept records, and ensured that zakat reached all eight categories of recipients mentioned in the Quran. His administration was so effective that in some years, there were no poor people left to receive zakat in certain regions — the system worked." },
      { bold: "Uthman and Ali continued the system without interruption.", normal: "Under Uthman's caliphate, the zakat system expanded to match the growing Muslim territories. Ali ibn Abi Talib, the fourth caliph, maintained strict enforcement. Neither of them considered zakat optional or subject to personal choice. Every single one of the Rightly Guided Caliphs treated zakat as a non-negotiable pillar of governance." },
      { bold: "This means zakat is not optional charity — it is a right of the poor.", normal: "The consistent practice of the Prophet and his successors establishes beyond any doubt that zakat is mandatory, enforceable, and not subject to personal whim. It is a right that the poor have over the wealth of the rich. The fact that Abu Bakr went to war over it — and every Companion agreed — shows its gravity in Islam." },
    ],
    evidence:
      "The Prophet (pbuh) said to Mu'adh ibn Jabal: \"You are going to a people from the People of the Book. Let the first thing you call them to be the worship of Allah. If they acknowledge Allah, then inform them that Allah has made five daily prayers obligatory upon them. If they accept that, then inform them that Allah has made zakat obligatory upon their wealth — to be taken from their rich and given to their poor\" (Sahih al-Bukhari 1395, Sahih Muslim 19). And Abu Bakr said: \"By Allah, I will fight whoever differentiates between prayer and zakat, for zakat is the right due on wealth\" (Sahih al-Bukhari 1399, 1400).",
    citations: [
      {
        scholar: "Imam Ibn Hajar al-Asqalani (rahimahullah)",
        quote: "Abu Bakr's resolve to fight those who withheld zakat became the consensus of the Companions. None of them disagreed after he explained his reasoning. This is one of the clearest proofs that withholding zakat — while acknowledging its obligation — is a sin that warrants state enforcement.",
        source: "Fath al-Bari, vol. 3, p. 262",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The scholars are agreed that if a group of people refuse to pay zakat while acknowledging its obligation, the imam is to fight them until they pay. This is based on Abu Bakr's fighting of the apostates and the consensus of the Companions on this matter.",
        source: "Sharh Sahih Muslim, vol. 1, p. 209",
      },
      {
        scholar: "Imam Ibn Kathir (rahimahullah)",
        quote: "Abu Bakr al-Siddiq proved the truthfulness of his title when he stood firm on the obligation of zakat. His stance became one of the greatest acts of the Companions after the death of the Prophet, preserving the foundations of Islam at their most vulnerable moment.",
        source: "al-Bidayah wa al-Nihayah, vol. 6",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The fighting of Abu Bakr against those who withheld zakat is proof that zakat is a pillar of Islam that cannot be abandoned. If a group withholds it while having the ability to pay, they are to be fought — just as those who abandon the prayer are fought. The Companions were unanimous on this.",
        source: "Majmu' al-Fatawa, vol. 28, p. 503",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The wars against those who refused zakat in the time of Abu Bakr are a lesson for every Muslim. Zakat is not a voluntary donation — it is an obligation established by Allah. The Islamic state has the right and duty to collect it, and the individual has no right to withhold it.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 14",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // YOUR WEALTH
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
  // GIVING YOUR ZAKAT
  // ─────────────────────────────────────────────

  "eight-recipients": {
    heading: "The Eight Recipients of Zakat",
    subheading: "Allah specified exactly who may receive zakat — eight categories, no more and no less",
    rulingParts: [
      { bold: "Al-Fuqara (the poor):", normal: "Those who cannot meet their basic needs — food, clothing, shelter. The fuqara are in a worse condition than the masakin. Imam al-Shafi'i defined them as those who have nothing or almost nothing, and who cannot earn enough to sustain themselves. If a person lacks the means to survive, they are from the fuqara and entitled to zakat." },
      { bold: "Al-Masakin (the needy):", normal: "Those who have some income or wealth but not enough to cover their basic needs. The distinction between fuqara and masakin is debated — the majority of scholars (Shafi'i, Hanbali) say the fuqara are in worse condition, while Imam Abu Hanifa reversed the order. In practice, both categories receive zakat to cover what they lack." },
      { bold: "Al-'Amilin 'Alayha (zakat collectors):", normal: "Those appointed by the ruler or authority to collect and distribute zakat. They are paid from zakat funds for their work, even if they are wealthy. The Prophet (pbuh) appointed collectors and instructed them: \"Do not take the best of their property, and beware of the supplication of the oppressed\" (Sahih al-Bukhari 1496)." },
      { bold: "Al-Mu'allafatu Qulubuhum (those whose hearts are to be reconciled):", normal: "New Muslims who need support to strengthen their faith, or non-Muslims whose goodwill benefits the Muslim community. This category is debated — the Hanafi school considers it abrogated, while the majority say it remains valid.", link: { label: "Read the full discussion", href: "/learn/muallafah-qulubuhum" } },
      { bold: "Fi'r-Riqab (freeing slaves and captives):", normal: "Historically, this meant purchasing slaves to free them. Today, scholars apply this to freeing captives, helping bonded labourers, and assisting those trapped in modern forms of servitude. Ibn Taymiyyah extended this to ransoming prisoners of war." },
      { bold: "Al-Gharimin (those in debt):", normal: "People overwhelmed by debt who cannot repay it. Scholars identified two types: those in debt for personal needs, and those who incurred debt to reconcile between people. The debt must not have been incurred for sinful purposes.", link: { label: "Read about conditions and modern application", href: "/learn/gharimin-in-debt" } },
      { bold: "Fi Sabilillah (in the path of Allah):", normal: "The most debated category. The majority of classical scholars restrict this to those fighting in jihad. Ibn Taymiyyah and some contemporary scholars broaden it to include all forms of striving for Allah's cause — dawah, education, and building masajid.", link: { label: "Read the full discussion", href: "/learn/fi-sabilillah" } },
      { bold: "Ibn as-Sabil (the stranded traveller):", normal: "A traveller who is stranded away from home and cannot access their funds, even if they are wealthy in their hometown. They receive enough zakat to return home. The Prophet's community took care of travellers as a matter of course — this category ensures no Muslim is left stranded in a foreign land." },
    ],
    evidence:
      "Allah says: \"Zakat expenditures are only for the poor and for the needy and for those employed to collect it and for bringing hearts together and for freeing captives and for those in debt and for the cause of Allah and for the stranded traveller — an obligation imposed by Allah. And Allah is Knowing and Wise\" (at-Tawbah 9:60). This ayah is the foundation of all zakat distribution — Allah Himself specified the eight categories, and the scholars unanimously agree that zakat may only be given to these categories.",
    citations: [
      {
        scholar: "Imam al-Shafi'i (rahimahullah)",
        quote: "Allah did not accept regarding zakat the judgment of anyone other than Himself. He did not delegate it to His Prophet or to anyone else. He divided it into eight categories, and each one of these categories has a right to a share of the zakat.",
        source: "al-Umm, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "The poor (fuqara) are those who do not find enough to suffice them. The needy (masakin) are those who find most of what they need but not all of it. Both categories deserve zakat to bring them to a level of sufficiency.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The eight categories mentioned in the ayah are categories of need, not categories of people in a fixed sense. A person may fall into more than one category, and the division is meant to ensure that zakat reaches all forms of genuine need in the community.",
        source: "Majmu' al-Fatawa, vol. 25, p. 71",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Allah specified the categories of zakat recipients Himself and did not leave it to anyone else. This indicates the great importance of zakat and the necessity of directing it to the right people. Giving zakat to someone outside these eight categories is not valid.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 331",
      },
      {
        scholar: "Imam Malik ibn Anas (rahimahullah)",
        quote: "Zakat is to be distributed among the eight categories according to what the ruler or the one distributing it sees as the greatest need. It is not required to divide it equally among all eight if some categories are more in need than others.",
        source: "al-Mudawwanah, vol. 1, Kitab al-Zakat",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The scholars are agreed that zakat may not be given to build mosques, shroud the dead, or pay off the debt of a deceased person, because these do not fall within the eight categories. The categories are restrictive, not illustrative.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 228",
      },
    ],
    positions: [
      {
        position: "Zakat should be distributed locally — it is not transferred to another region unless the local needs are met",
        scholars: ["Imam Abu Hanifa", "Imam Malik", "Imam Ahmad ibn Hanbal", "Shaykh Ibn Uthaymeen"],
        school: "Majority view",
        evidence: "The Prophet (pbuh) told Mu'adh: \"It is to be taken from their rich and given to their poor\" — the pronoun 'their' refers to the same community, establishing that local distribution is the default.",
        isAppPosition: true,
      },
      {
        position: "Zakat may be transferred to another region if the need there is greater",
        scholars: ["Imam al-Shafi'i (one view)", "Shaykh al-Islam Ibn Taymiyyah", "Shaykh Ibn Baz"],
        school: "Permitted by some scholars",
        evidence: "If there is greater need in another region — such as famine, war, or extreme poverty — transferring zakat there is permissible, as the purpose of zakat is to address need wherever it is most acute.",
      },
    ],
  },

  "fi-sabilillah": {
    heading: "Fi Sabilillah",
    subheading: "The most debated category of zakat recipients — does \"in the path of Allah\" mean jihad only?",
    rulingParts: [
      { bold: "\"Fi sabilillah\" literally means \"in the path of Allah\".", normal: "It is the seventh category of zakat recipients mentioned in Surah at-Tawbah 9:60. The phrase is used in the Quran in multiple contexts, but when it comes to zakat distribution, the scholars have differed significantly on its scope." },
      { bold: "The majority of classical scholars restrict it to military jihad.", normal: "Imam al-Shafi'i, Imam Malik, Imam Ahmad, and Imam Abu Hanifa all understood \"fi sabilillah\" in the context of zakat to mean those who fight in the path of Allah — the mujahidun. They are given from zakat to fund their equipment, transport, and provisions, even if they are wealthy. This is the position of the four madhahib." },
      { bold: "Ibn Taymiyyah and some scholars broaden it to include all forms of striving for Allah's cause.", normal: "Shaykh al-Islam Ibn Taymiyyah argued that \"fi sabilillah\" encompasses Hajj and all acts that draw one closer to Allah, including seeking knowledge, dawah, and building masajid. Some contemporary scholars — particularly in contexts where military jihad is not applicable — have adopted this broader view to allow zakat to fund Islamic education, dawah organisations, and community infrastructure." },
      { bold: "A minority of contemporary scholars include Hajj for the poor.", normal: "Based on the hadith in which a woman asked the Prophet (pbuh) about her father who was too old for Hajj, some scholars extend \"fi sabilillah\" to include funding Hajj for those who cannot afford it. However, the majority consider this a weak application of the category, as the hadith does not specifically address zakat funds." },
    ],
    evidence:
      "Allah says: \"...and for the cause of Allah...\" (at-Tawbah 9:60). Imam Ahmad narrated from Abu Sa'id al-Khudri that the Prophet (pbuh) said: \"Zakat is not permissible for a rich person except for five cases\" — and he mentioned \"fi sabilillah\" as one of them (Sunan Abu Dawud 1635). The classical tafsir works consistently interpret this phrase in the context of zakat as referring to jihad specifically.",
    citations: [
      {
        scholar: "Imam al-Shafi'i (rahimahullah)",
        quote: "Fi sabilillah refers to those who fight voluntarily, not as professional soldiers. They are given from zakat what suffices them for their expedition, whether they are rich or poor, because they are fighting for the sake of the community.",
        source: "al-Umm, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Fi sabilillah refers to the warriors who are not in the regular army — those who volunteer to fight. They are given from zakat what they need for their expedition: weapons, provisions, and transport. This is the view of the majority of scholars.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "Fi sabilillah in the Book of Allah is not restricted to fighting alone. It includes Hajj, seeking knowledge, and every act of obedience that draws one closer to Allah. However, the most common usage in the context of the ayah of zakat refers to jihad.",
        source: "Majmu' al-Fatawa, vol. 28, p. 367",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "The correct view is that fi sabilillah refers to jihad in the path of Allah specifically, not to every good deed. If we were to expand it to every good deed, the categories would lose their meaning, and there would be no distinction between this category and general charity.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 368",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The most correct opinion is that fi sabilillah refers to jihad. This is the well-known position of the scholars, and it is the strongest in terms of evidence. As for expanding it to include every good deed, this has no strong basis in the texts.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 294",
      },
    ],
    positions: [
      {
        position: "Fi sabilillah refers specifically to military jihad — those who fight voluntarily in the path of Allah",
        scholars: ["Imam Abu Hanifa", "Imam Malik", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Baz", "Shaykh Ibn Uthaymeen"],
        school: "Majority classical view (all four madhahib)",
        evidence: "The classical tafsir works unanimously interpret this in the context of zakat as referring to jihad. Expanding it further would make the categories meaningless.",
        isAppPosition: true,
      },
      {
        position: "Fi sabilillah extends to all striving for Allah's cause — dawah, Islamic education, building masajid",
        scholars: ["Shaykh al-Islam Ibn Taymiyyah", "Some contemporary scholars"],
        school: "Broader view",
        evidence: "The Quranic phrase is general and not restricted. In modern contexts where military jihad may not be applicable, zakat can fund other forms of beneficial work for Islam.",
      },
      {
        position: "Fi sabilillah includes funding Hajj for the poor",
        scholars: ["Imam Ahmad (one narration)", "Some Hanbali scholars"],
        school: "Minority view",
        evidence: "Based on the general meaning of the phrase and a hadith about Hajj being \"jihad without fighting.\" However, the majority reject using zakat funds for this purpose.",
      },
    ],
  },

  "muallafah-qulubuhum": {
    heading: "Al-Mu'allafatu Qulubuhum",
    subheading: "Those whose hearts are to be reconciled — did this category end after the Prophet, or does it continue?",
    rulingParts: [
      { bold: "Al-Mu'allafatu Qulubuhum are the fourth category of zakat recipients.", normal: "They are people whose hearts need to be brought closer to Islam — either new Muslims who need support to strengthen their faith, or non-Muslims whose goodwill benefits the Muslim community and may lead them to accept Islam. The Prophet (pbuh) gave generously from war spoils and zakat to win hearts, most famously at the Battle of Hunayn." },
      { bold: "The Hanafi school considers this category abrogated.", normal: "The Hanafi position is based on a report that Umar ibn al-Khattab refused to give zakat to certain people who had been receiving it in the Prophet's time, saying: \"We do not give anything for Islam. Whoever wishes, let him believe, and whoever wishes, let him disbelieve.\" The Hanafis argue that after Islam became strong, there was no longer a need to win hearts through financial incentives." },
      { bold: "The majority of scholars say this category remains valid in all times.", normal: "The Shafi'i, Maliki, and Hanbali schools hold that the Quran cannot be abrogated by the action of a Companion, even Umar. The ayah in Surah at-Tawbah is clear and unconditional. Ibn Taymiyyah strongly defended this position, arguing that the ruling stands as long as the need exists — new Muslims may need financial support, and non-Muslims may be drawn to Islam through generosity." },
      { bold: "Modern application includes supporting new Muslims and building bridges.", normal: "In communities where new Muslims face financial hardship, social isolation, or family rejection because of their conversion, zakat can be used to support them. Some scholars also permit giving to non-Muslims who are genuinely inclined toward Islam, though this requires careful judgment by the one distributing zakat." },
    ],
    evidence:
      "Allah says: \"...and for bringing hearts together...\" (at-Tawbah 9:60). The Prophet (pbuh) gave Safwan ibn Umayyah a valley full of sheep after the Battle of Hunayn. Safwan said: \"Muhammad gave me what he gave me, and he was the most hated of people to me. He kept giving until he became the most beloved of people to me\" (Sahih Muslim 2313). Anas ibn Malik reported that the Prophet never refused anyone who asked him for the sake of Islam (Sahih Muslim 2312).",
    citations: [
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The position that this category has been abrogated is weak. The Quran established it as one of the eight categories, and the action of one Companion — even Umar — does not abrogate the Book of Allah. The ruling remains in effect whenever the need exists.",
        source: "Majmu' al-Fatawa, vol. 25, p. 73",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The correct position in the Shafi'i school is that al-mu'allafatu qulubuhum still exist and may still be given from zakat. This is based on the generality of the ayah, and it has not been abrogated.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 196",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "If we find people today whose hearts need to be reconciled — either new Muslims in need of support or non-Muslims whom we hope will accept Islam — then they should be given from zakat, because the ayah is general and applies to all times.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "The Hanafi position is that this share was specifically for the time of the Prophet (pbuh). After Islam became strong and prevalent, the need to win hearts through wealth no longer exists. Umar dropped this category, and no Companion objected.",
        source: "Bada'i al-Sana'i, vol. 2, p. 45",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "The correct view is that this category continues. If there are people whose hearts need to be reconciled, they are given from zakat. The ayah in the Quran is not abrogated, and Umar's action was based on his ijtihad for his specific context, not a universal ruling.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 340",
      },
    ],
    positions: [
      {
        position: "This category was abrogated after Islam became strong — it no longer applies",
        scholars: ["Imam Abu Hanifa", "Many Hanafi scholars"],
        school: "Hanafi view",
        evidence: "Based on Umar ibn al-Khattab's refusal to give to al-mu'allafah during his caliphate, and the reasoning that Islam no longer needs to win hearts through financial incentives.",
      },
      {
        position: "This category remains valid in all times — the Quran is not abrogated by a Companion's action",
        scholars: ["Imam al-Shafi'i", "Imam Malik", "Imam Ahmad", "Ibn Taymiyyah", "Ibn Uthaymeen"],
        school: "Majority view (Shafi'i, Maliki, Hanbali)",
        evidence: "The Quranic text is clear and unconditional. Umar's action was ijtihad for his context, not a permanent abrogation. The ruling applies whenever the need exists — including supporting new Muslims today.",
        isAppPosition: true,
      },
    ],
  },

  "gharimin-in-debt": {
    heading: "Al-Gharimin",
    subheading: "Helping those overwhelmed by debt — who qualifies and how zakat can be given to them",
    rulingParts: [
      { bold: "Al-Gharimin are the sixth category of zakat recipients.", normal: "They are people burdened by debt who cannot repay it from their own resources. Allah placed them among the eight categories to ensure that Muslims trapped in debt are not left to suffer. The word 'gharimin' comes from 'ghurm' — a loss or liability that weighs a person down." },
      { bold: "Scholars identify two types of gharimin.", normal: "First: those who incurred debt for their own personal needs — food, medical care, housing, or other necessities — and cannot repay it. Second: those who incurred debt to reconcile between people or resolve disputes in the community. Both types are entitled to zakat according to the majority of scholars, including Imam al-Shafi'i, Imam Ahmad, and Imam Abu Hanifa." },
      { bold: "There are conditions for receiving zakat as a gharim.", normal: "The debt must be current and due, not a future obligation. The person must be unable to repay it from their own wealth. The debt must not have been incurred for sinful purposes — if someone borrowed money for gambling or haram activities, they are not eligible. The scholars also stipulate that the person must be Muslim and that the amount given should not exceed the actual debt." },
      { bold: "You may pay the creditor directly on behalf of the debtor.", normal: "Shaykh Ibn Uthaymeen held that it is permissible — and sometimes preferable — to pay the creditor directly rather than giving the money to the debtor, because this ensures the zakat is actually used to clear the debt. This is especially relevant in modern contexts where debts are owed to institutions (hospitals, banks) rather than individuals." },
    ],
    evidence:
      "Allah says: \"...and for those in debt...\" (at-Tawbah 9:60). The Prophet (pbuh) said: \"Asking for money is not permissible except in three cases: a man who has incurred a debt (gharamah), a man whose wealth has been destroyed by a calamity, and a man who has been afflicted by poverty\" (Sahih Muslim 1044). Abu Sa'id al-Khudri reported that a man was struck by a calamity that destroyed his harvest, and the Prophet told the people: \"Give charity to him\" until his debt was settled (Sahih Muslim 1044).",
    citations: [
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Al-gharimin are of two types: those who incurred debt for their own needs and cannot repay it, and those who incurred debt to reconcile between people. Both are given from zakat — the first to settle their debt, and the second to reimburse them for what they spent in the public interest.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "It is permissible to pay the debt directly to the creditor on behalf of the debtor. In fact, this may be better in some cases because it guarantees that the zakat is used for its intended purpose — settling the debt — rather than being spent on something else.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 392",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The condition for the gharim to receive zakat is that they do not possess wealth sufficient to repay their debt. If they have some wealth but it is less than the debt, they are given the difference. If their wealth equals or exceeds the debt, they are not given from zakat for this purpose.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 208",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "Those in debt who cannot repay their debts are among the most deserving of zakat. It is a duty upon the wealthy to help them, especially when they incurred the debt for legitimate needs. The Muslim community must not allow its members to be crushed by debt while wealth circulates only among the rich.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 283",
      },
      {
        scholar: "Imam al-Kasani (rahimahullah)",
        quote: "The gharim is the one who owes a debt and does not possess, beyond the debt, wealth equal to the nisab. Such a person is given zakat to pay off their debt, because they are in genuine need even if they appear to have some assets.",
        source: "Bada'i al-Sana'i, vol. 2, p. 46",
      },
    ],
    positions: [
      {
        position: "Both types of gharimin are valid recipients — zakat can be paid directly to the creditor on their behalf",
        scholars: ["Imam al-Shafi'i", "Imam Ahmad", "Ibn Qudamah", "Shaykh Ibn Uthaymeen"],
        school: "Majority view",
        evidence: "The Quranic category is general and covers all forms of legitimate debt. Paying the creditor directly ensures the zakat achieves its purpose.",
        isAppPosition: true,
      },
      {
        position: "Zakat should be given to the debtor personally, not paid directly to the creditor",
        scholars: ["Some Hanafi scholars"],
        school: "Minority view",
        evidence: "Zakat must involve transferring ownership (tamlik) to the recipient. Paying the creditor directly bypasses this requirement.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRACTICAL QUESTIONS
  // ─────────────────────────────────────────────

  "home-and-personal-items": {
    heading: "Zakat on Your Home & Personal Items",
    subheading: "Your house, car, furniture, and clothes are not subject to zakat — here is the evidence",
    rulingParts: [
      { bold: "There is no zakat on personal-use assets.", normal: "Your primary residence, car, furniture, clothing, books, tools of your trade, and household items are all exempt from zakat by scholarly consensus. The Prophet (pbuh) said: \"There is no sadaqah (zakat) on a Muslim's slave or his horse\" (Sahih al-Bukhari 1464, Sahih Muslim 982). The scholars derived from this that any asset used for personal needs — not for trade or investment — is exempt." },
      { bold: "This includes expensive personal items.", normal: "Even if your house is worth millions or your car is luxury, there is no zakat on them as long as they are for personal use, not for trade. Imam al-Nawawi stated that the scholarly consensus is that personal-use items are exempt regardless of their value. The key distinction is the intention behind ownership — personal use vs. trade." },
      { bold: "Investment properties ARE subject to zakat.", normal: "If you own a second property that you rent out, the rental income is zakatable. If you own property that you bought to resell at a profit, the full market value is zakatable as a trade good. The exemption applies only to property you live in or use personally — not to property held for income or resale." },
      { bold: "Personal jewelry is the one area of scholarly disagreement.", normal: "Gold and silver jewelry worn regularly by women is exempt according to the Shafi'i and Hanbali schools, but obligatory according to the Hanafi school. This calculator follows the position of Shaykh Ibn Baz and Shaykh Ibn Uthaymeen that zakat is due on gold and silver jewelry.", link: { label: "Read the Gold & Silver article", href: "/learn/gold-and-silver" } },
    ],
    evidence:
      "The Prophet (pbuh) said: \"There is no sadaqah (zakat) on a Muslim's slave or his horse\" (Sahih al-Bukhari 1464, Sahih Muslim 982). The scholars understood this to mean that assets used for personal service are exempt. Imam al-Nawawi said: \"The scholars are unanimously agreed that there is no zakat on what a Muslim uses for personal purposes — his dwelling, his clothing, his furniture, and his riding animal.\"",
    citations: [
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "There is consensus among the scholars that there is no zakat on dwellings, clothing, furniture, riding animals, slaves used for personal service, weapons for personal use, and similar items that are owned for personal benefit, not for trade.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 5, p. 332",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "A person's house, car, furniture, and personal belongings are not subject to zakat, even if they are of great value. Zakat is only on wealth that is held for growth or trade. Personal-use items are excluded by consensus.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 42",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "There is no zakat on a person's dwelling or their personal clothing, furniture, riding animals, weapons, or tools of their trade. This is the view of the generality of scholars, and we know of no disagreement on this matter.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "What a person owns for personal use — their home, car, clothing, and furniture — has no zakat. But what is owned for trade and profit is treated as trade goods and is subject to zakat when it reaches the nisab and a year passes.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 73",
      },
    ],
  },

  "zakat-and-western-debt": {
    heading: "Zakat and Debt in the West",
    subheading: "How mortgages, student loans, and car finance affect your zakat calculation",
    rulingParts: [
      { bold: "The general principle: debts reduce your zakatable wealth.", normal: "If you owe money, that amount is deducted from your total assets before calculating zakat. The Prophet (pbuh) established this principle, and the scholars of all four madhahib agree on it. If your debts equal or exceed your assets, you do not pay zakat — because your net wealth is below the nisab." },
      { bold: "The key question for modern Muslims: do you deduct the FULL remaining debt, or only the next year's payments?", normal: "This is where it matters most. Many Muslims in the West have long-term debts — a 25-year mortgage, a 3-year car loan, student loans spanning decades. If you deduct the full remaining balance of a £200,000 mortgage, you will likely never pay zakat. This cannot be right, because it would exempt the majority of homeowners permanently." },
      { bold: "The stronger position: deduct only what is due in the next 12 months.", normal: "Shaykh Ibn Uthaymeen and many contemporary scholars hold that you only deduct the portion of debt that is due within the coming year — your upcoming monthly payments. This prevents long-term debt from permanently exempting wealthy people from zakat. A person with £500,000 in savings and a £200,000 mortgage is clearly wealthy, and should pay zakat on the net amount after deducting only the next year's repayments." },
      { bold: "Practical example:", normal: "You have £50,000 in savings. You have a mortgage with £180,000 remaining, monthly payments of £900 (£10,800/year). You also have student loan deductions of £200/month (£2,400/year). Following Ibn Uthaymeen's position: deduct £10,800 + £2,400 = £13,200. Your zakatable wealth is £50,000 − £13,200 = £36,800. If this exceeds the nisab, you pay 2.5% = £920." },
    ],
    evidence:
      "The Prophet (pbuh) instructed his collectors to account for debts when assessing zakat. Uthman ibn Affan said: \"This is the month of your zakat. Whoever has a debt, let him pay it off so that you may assess your wealth and pay zakat on it\" (al-Muwatta of Imam Malik). The principle of debt deduction is established — the scholarly difference is only about how much to deduct when the debt is long-term.",
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "The correct view regarding debts that are paid in instalments is that one only deducts from their zakatable wealth the amount that is due in the coming year. If we were to deduct the entire remaining debt, many people would never pay zakat, which contradicts the purpose of the legislation.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 39",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "If a person has wealth that reaches the nisab but also has debts, they should deduct their debts from their wealth. If the remainder reaches the nisab, they pay zakat on it. If not, they are exempt.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 51",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Debt prevents the obligation of zakat in the view of Imam Ahmad. A person who owes debts that consume their wealth or reduce it below the nisab does not pay zakat. This applies to all types of zakatable wealth.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "The scholars differed regarding the effect of debt on zakat. The strongest position is that debt prevents zakat if it reduces the wealth below the nisab. This is the view of the majority of the Companions and the scholars after them.",
        source: "Majmu' al-Fatawa, vol. 25, p. 46",
      },
    ],
    positions: [
      {
        position: "Deduct only the upcoming 12 months of payments from zakatable wealth",
        scholars: ["Shaykh Ibn Uthaymeen", "Many contemporary scholars and fatwa bodies"],
        school: "Contemporary majority position",
        evidence: "Long-term debts (mortgages, student loans) would permanently exempt wealthy individuals from zakat if fully deducted. Deducting only upcoming payments preserves the purpose of the legislation.",
        isAppPosition: true,
      },
      {
        position: "Deduct the full remaining debt from zakatable wealth",
        scholars: ["Imam Ahmad ibn Hanbal", "Ibn Qudamah", "Classical Hanbali scholars"],
        school: "Classical Hanbali view",
        evidence: "The texts are general — debt reduces wealth, regardless of when it is due. A person in debt is genuinely burdened and should not be obligated to pay zakat on wealth they effectively owe to others.",
      },
    ],
  },

  "paying-zakat-early": {
    heading: "Paying Zakat Early or in Instalments",
    subheading: "Can you pay monthly? What about paying before your hawl date?",
    rulingParts: [
      { bold: "The default: zakat becomes due when one full lunar year (hawl) passes over your wealth.", normal: "Once your wealth reaches the nisab and a complete lunar year has passed, the zakat is immediately due and must be paid promptly. Delaying it without valid reason is sinful according to the majority of scholars. This is the baseline — all the discussion below is about paying BEFORE this deadline, not after." },
      { bold: "Paying zakat in advance is permissible according to the majority of scholars.", normal: "The evidence is the hadith of Abbas ibn Abd al-Muttalib, who asked the Prophet (pbuh) about paying his zakat in advance before the hawl was complete. The Prophet allowed it (reported by Abu Dawud, al-Tirmidhi, and Ibn Majah). The Hanafi, Shafi'i, and Hanbali schools all permit advance payment based on this hadith." },
      { bold: "Monthly instalments are permissible — as advance payments, not delayed ones.", normal: "If you divide your estimated annual zakat into 12 monthly payments and pay them throughout the year BEFORE your hawl date, this is valid advance payment. However, you must still calculate your actual zakat at your hawl date and settle any difference. If your wealth grew and you owe more, pay the remainder. If it decreased, the excess counts as sadaqah." },
      { bold: "The Maliki school generally dislikes advance payment.", normal: "Imam Malik held that zakat should not be paid before its time, just as prayer should not be performed before its time. He considered the obligation to be tied to the completion of the hawl, and paying before that is paying before the obligation exists. However, even in the Maliki school, there is flexibility in practice." },
    ],
    evidence:
      "Abbas ibn Abd al-Muttalib asked the Prophet (pbuh) about paying his zakat in advance, and the Prophet permitted him (Sunan Abu Dawud 1624, Sunan al-Tirmidhi 678, Sunan Ibn Majah 1795). Ali ibn Abi Talib also reported that the Prophet allowed Abbas to pay his zakat for two years in advance (Sunan Abu Dawud 1625).",
    citations: [
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The Shafi'i school permits paying zakat in advance if the nisab is already possessed. The hadith of Abbas is clear evidence for this. If a person pays in advance and then their wealth decreases below the nisab before the hawl, what they paid is considered voluntary charity.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 148",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Paying zakat in advance for one or two years is permissible if the nisab is already complete. This is the view of Ahmad, Abu Hanifa, and al-Shafi'i. The evidence is the hadith of Abbas. However, if it is paid more than two years in advance, there is disagreement.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "There is no harm in paying zakat in advance, whether in one lump sum or in monthly instalments. The important thing is to settle the account at the end of the hawl. If you paid more than required, the excess is sadaqah. If you paid less, you must pay the remainder.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 282",
      },
      {
        scholar: "Imam Malik ibn Anas (rahimahullah)",
        quote: "Zakat is not to be paid before its time becomes due, just as prayer is not performed before its time. The obligation is connected to the completion of the hawl, and paying before that is paying before the obligation exists.",
        source: "al-Mudawwanah, vol. 1, Kitab al-Zakat",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "If a Muslim wishes to pay their zakat in advance — before the hawl is complete — this is permissible and there is no harm in it, as established by the hadith of Abbas. Many scholars permit advance payment for up to two years.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 49",
      },
    ],
    positions: [
      {
        position: "Advance payment of zakat is permissible — including monthly instalments before the hawl",
        scholars: ["Imam Abu Hanifa", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Baz", "Shaykh Ibn Uthaymeen"],
        school: "Majority view (Hanafi, Shafi'i, Hanbali)",
        evidence: "The Prophet (pbuh) permitted Abbas to pay his zakat in advance. This is clear and authentic evidence. The obligation exists once the nisab is possessed — paying before the hawl completes is prepaying an existing obligation.",
        isAppPosition: true,
      },
      {
        position: "Zakat should not be paid before the hawl is complete",
        scholars: ["Imam Malik"],
        school: "Maliki view",
        evidence: "The obligation is tied to the completion of the hawl, similar to how prayer is tied to its time. Paying before the time arrives is paying before the obligation exists.",
      },
    ],
  },

  "zakat-to-family": {
    heading: "Giving Zakat to Family",
    subheading: "Which relatives can receive your zakat — and which cannot",
    rulingParts: [
      { bold: "You cannot give zakat to anyone you are obligated to financially support.", normal: "This means your parents, grandparents (and upward), your children, grandchildren (and downward), and your spouse. The reason is that giving zakat to these people effectively saves you from spending your own money on them — so the zakat is benefiting you, not them. The scholars are agreed on this principle." },
      { bold: "You CAN give zakat to relatives you are not obligated to support — and it is even more rewarding.", normal: "Your siblings, aunts, uncles, cousins, in-laws, and other relatives who are not your financial dependents can receive your zakat if they are eligible (i.e., they fall into one of the eight categories). In fact, giving zakat to such relatives carries a double reward — one for the zakat itself, and one for maintaining ties of kinship." },
      { bold: "The Prophet (pbuh) specifically encouraged this.", normal: "Zaynab, the wife of Abdullah ibn Mas'ud, asked the Prophet whether she could give her zakat to her husband and the orphans in her care. He said: \"She will have two rewards: the reward of kinship and the reward of charity\" (Sahih al-Bukhari 1466, Sahih Muslim 1000). Salman ibn Aamir reported that the Prophet said: \"Charity given to a poor person is charity, and charity given to a relative is two things: charity and maintaining ties of kinship\" (al-Tirmidhi 658)." },
      { bold: "Can a wife give zakat to her husband?", normal: "The majority of scholars — including the Hanafi and Shafi'i schools — permit a wife to give her zakat to her husband if he is poor, because she is not obligated to support him financially. The hadith of Zaynab supports this. However, some Maliki and Hanbali scholars disallowed it, arguing that the benefit returns to her indirectly through the household. The stronger position is that it is permissible." },
    ],
    evidence:
      "Zaynab, the wife of Abdullah ibn Mas'ud, asked the Prophet (pbuh): \"O Messenger of Allah, can I give my charity to my husband and the orphans in my care?\" He said: \"She will have two rewards: the reward of kinship and the reward of charity\" (Sahih al-Bukhari 1466, Sahih Muslim 1000). The Prophet (pbuh) also said: \"Charity given to a relative is two things: charity and maintaining ties of kinship\" (al-Tirmidhi 658, al-Nasa'i 2582).",
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "It is not permissible to give zakat to one's parents, grandparents, children, or grandchildren, because spending on them is already obligatory. But giving to brothers, sisters, uncles, aunts, and their children is permissible and carries a double reward.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 415",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "If a person has relatives who are poor and are not among those they are obligated to support, it is better to give zakat to them than to strangers, because it combines charity with maintaining family ties.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 229",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "A woman may give her zakat to her husband if he is poor, based on the hadith of Zaynab. She is not obligated to spend on him, so her zakat to him is valid. This is the stronger view.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 300",
      },
      {
        scholar: "Imam Ibn Qudamah (rahimahullah)",
        quote: "Zakat may not be given to one's parents or children because these are people one is obligated to support. Giving them zakat would relieve the giver of their own obligation, which defeats the purpose of zakat as a transfer of wealth to those in need.",
        source: "al-Mughni, vol. 2, Kitab al-Zakat",
      },
    ],
  },

  "fitr-vs-mal": {
    heading: "Zakat al-Fitr vs Zakat al-Mal",
    subheading: "Two separate obligations that every Muslim should understand — they are not the same thing",
    rulingParts: [
      { bold: "Zakat al-Mal is the zakat on wealth.", normal: "This is the zakat calculated on your accumulated wealth — savings, gold, silver, investments, business assets, and other forms of wealth. It requires reaching the nisab and the passage of one lunar year (hawl). The rate is 2.5% for most categories. This is what the calculator on this site computes." },
      { bold: "Zakat al-Fitr is a per-person obligation at the end of Ramadan.", normal: "It is obligatory upon every Muslim — man, woman, child, free or enslaved — at the end of Ramadan. The head of the household pays on behalf of dependents. It is not based on wealth accumulation but on being alive and Muslim at the time of Eid. Ibn Umar reported: \"The Prophet (pbuh) made zakat al-fitr obligatory: one sa' of dates or one sa' of barley, upon the slave and the free, the male and the female, the young and the old among the Muslims\" (Sahih al-Bukhari 1503, Sahih Muslim 984)." },
      { bold: "The key differences:", normal: "Zakat al-mal is wealth-based (2.5% of accumulated wealth above nisab). Zakat al-fitr is person-based (one sa' of staple food per person, approximately 2.5-3 kg). Zakat al-mal can be paid any time of year when the hawl completes. Zakat al-fitr must be paid before the Eid al-Fitr prayer — the Prophet said it is accepted as zakat if paid before the prayer, and as ordinary charity if paid after (Sunan Abu Dawud 1609)." },
      { bold: "The purpose of zakat al-fitr:", normal: "Ibn Abbas said: \"The Prophet (pbuh) made zakat al-fitr obligatory as a purification for the fasting person from idle talk and obscenity, and as food for the poor\" (Sunan Abu Dawud 1609). It purifies the fast from any deficiencies and ensures the poor can celebrate Eid with dignity." },
      { bold: "Can zakat al-fitr be paid in cash?", normal: "This is a famous scholarly disagreement. The majority (Maliki, Shafi'i, Hanbali) say it must be paid in food, following the literal wording of the hadith. The Hanafi school permits paying in cash — the monetary equivalent of one sa' of food — arguing that the purpose is to meet the needs of the poor, and cash may be more useful to them. Both views have strong evidence." },
    ],
    evidence:
      "Ibn Umar reported: \"The Messenger of Allah made zakat al-fitr obligatory: one sa' of dates or one sa' of barley, upon the slave and the free, the male and the female, the young and the old among the Muslims. And he commanded that it be given before the people go out to the prayer\" (Sahih al-Bukhari 1503, Sahih Muslim 984). Ibn Abbas said: \"The Prophet made zakat al-fitr obligatory as a purification for the fasting person from idle talk and obscenity, and as food for the poor. Whoever pays it before the prayer, it is accepted zakat. Whoever pays it after the prayer, it is ordinary charity\" (Sunan Abu Dawud 1609).",
    citations: [
      {
        scholar: "Shaykh Muhammad ibn Salih al-Uthaymeen (rahimahullah)",
        quote: "Zakat al-fitr is obligatory upon every Muslim who has enough food for himself and his family on the day and night of Eid. He pays on behalf of himself and everyone he is responsible for — his wife, children, and anyone under his care.",
        source: "Majmu' Fatawa Ibn Uthaymeen, vol. 18, p. 259",
      },
      {
        scholar: "Imam al-Nawawi (rahimahullah)",
        quote: "The obligation of zakat al-fitr is established by the Sunnah and by the consensus of the scholars. It is obligatory upon every free Muslim who has surplus food beyond what is needed for the day and night of Eid. It must be paid in food, not in cash, according to the majority.",
        source: "al-Majmu' Sharh al-Muhadhdhab, vol. 6, p. 103",
      },
      {
        scholar: "Imam Abu Hanifa (rahimahullah)",
        quote: "It is permissible to pay the value of zakat al-fitr in cash rather than food, because the purpose is to enrich the poor on the day of Eid, and cash may better serve this purpose than food in many cases.",
        source: "Reported in al-Mabsut of al-Sarakhsi, vol. 3",
      },
      {
        scholar: "Shaykh Abdul-Aziz ibn Baz (rahimahullah)",
        quote: "The Sunnah is to pay zakat al-fitr in food — one sa' of dates, barley, wheat, rice, or the staple food of the land. Paying in cash is not sufficient according to the stronger opinion, because the Prophet specified food, and we should not deviate from what he specified.",
        source: "Majmu' Fatawa Ibn Baz, vol. 14, p. 200",
      },
      {
        scholar: "Shaykh al-Islam Ibn Taymiyyah (rahimahullah)",
        quote: "Paying the value in cash is permissible when there is a need or benefit — such as when the poor person prefers cash or when food is not readily available. But the default is to follow the Sunnah and pay in food.",
        source: "Majmu' al-Fatawa, vol. 25, p. 68",
      },
    ],
    positions: [
      {
        position: "Zakat al-fitr must be paid in food — one sa' of the staple food of the land",
        scholars: ["Imam Malik", "Imam al-Shafi'i", "Imam Ahmad", "Shaykh Ibn Baz", "Shaykh Ibn Uthaymeen"],
        school: "Majority view (Maliki, Shafi'i, Hanbali)",
        evidence: "The Prophet (pbuh) specified food in the hadith and commanded it to be given as food. The Companions paid it in food. We should not deviate from the explicit Sunnah.",
        isAppPosition: true,
      },
      {
        position: "Zakat al-fitr may be paid in cash — the monetary equivalent of one sa' of food",
        scholars: ["Imam Abu Hanifa", "Sufyan al-Thawri", "Shaykh al-Islam Ibn Taymiyyah (when there is need)"],
        school: "Hanafi view",
        evidence: "The purpose is to meet the needs of the poor on the day of Eid. Cash may be more beneficial to them than food, especially in modern economies. The Prophet specified food because it was the medium of exchange in his time.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // DEBTS & DEDUCTIONS
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
