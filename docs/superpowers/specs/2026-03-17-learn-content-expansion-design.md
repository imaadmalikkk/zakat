# Learn Section Content Expansion

## Overview

Expand the learn section from 15 articles across 3 groups to 26 articles across 5 groups, adding spiritual/historical depth, a zakat recipients guide, and practical FAQ-style articles. Every ruling follows a **point → evidence → explain** structure: state the ruling plainly, cite the Quran/hadith/scholarly proof, then explain what it means in practice.

## Tone

Reflective and accessible — written for a layperson who may not know Arabic terms or fiqh jargon. But every claim is backed with evidence so it can't be disputed. Heart first, proof alongside.

---

## Learn Page Group Structure

The `/learn` index page reorganises from 3 groups to 5, creating a natural learning path from understanding zakat through calculating it to giving it.

| Group key | Display label | Articles |
|-----------|--------------|----------|
| `foundations` | Foundations | What is Zakat, The Nisab, The Hawl, **The Wisdom Behind Zakat** (new), **Zakat in the Time of the Prophet & the Khulafa** (new) |
| `wealth` | Your Wealth | Cash & Savings, Gold & Silver, Stocks & Investments, Business Assets, Cryptocurrency, Retirement Accounts, Rental Income, Debts Owed to You, Agricultural Produce, Livestock |
| `recipients` | Giving Your Zakat | **The Eight Recipients of Zakat** (new), **Fi Sabilillah — What It Covers** (new), **Al-Mu'allafah — Does This Still Apply?** (new), **Al-Gharimin — Helping Those in Debt** (new) |
| `practical` | Practical Questions | **Zakat on Your Home & Personal Items** (new), **Zakat and Debt in the West** (new), **Paying Zakat Early or in Instalments** (new), **Giving Zakat to Family** (new), **Zakat al-Fitr vs Zakat al-Mal** (new), Common Mistakes & Misconceptions (moved from `issues`) |
| `deductions` | Debts & Deductions | Deducting Debts from Zakat (moved from `issues`) |

**11 new articles. 2 existing articles moved to new groups. 10 existing asset articles have their `group` field changed from `"categories"` to `"wealth"`.**

The order shown in the table above is the intended display order in the `articles` array.

---

## New Articles

All 11 new articles are listed below with their `slug`, `title`, `description` (for the index page), and `heading` (for the article page). Where `title` and `heading` are the same, only `title` is listed.

### Foundations

#### The Wisdom Behind Zakat
- **Slug:** `wisdom-behind-zakat`
- **Title:** The Wisdom Behind Zakat
- **Description:** Why Allah legislated zakat — purification, solidarity, and the consequences of withholding it
- **Purpose:** Why Allah legislated zakat — the spiritual, social, and economic wisdom
- **Content scope:**
  - Purification of the soul and wealth — Surah at-Tawbah 9:103 ("Take from their wealth a charity to purify them and increase them")
  - Protection from greed and attachment to dunya — hadith on the dangers of hoarding
  - Social solidarity and closing the wealth gap — the communal obligation
  - Consequences of withholding zakat — hadith from Sahih Muslim on punishment, Abu Bakr's stance
  - Stories from the Sahaba giving generously (Abu Bakr giving all his wealth, Uthman funding the army of Tabuk)
- **Tone:** Reflective, warm, spiritually motivating. Still grounded in daleel.

#### Zakat in the Time of the Prophet & the Khulafa
- **Slug:** `zakat-in-history`
- **Title:** Zakat in the Time of the Prophet & the Khulafa
- **Description:** How zakat was collected and enforced from Madinah through the Rightly Guided Caliphs
- **Purpose:** Historical context showing zakat is non-negotiable and has always been systematically enforced
- **Content scope:**
  - How zakat was collected in Madinah — the Prophet sending collectors (hadith of Mu'adh ibn Jabal being sent to Yemen)
  - Abu Bakr's wars against those who refused to pay — "By Allah, if they withhold even a she-camel's hobbling rope..."
  - Umar's system of distribution and the bayt al-mal
  - Uthman and Ali's continuation of the system
  - What this means today — zakat is not optional charity, it's a right of the poor over the wealthy

### Giving Your Zakat (Recipients)

#### The Eight Recipients of Zakat
- **Slug:** `eight-recipients`
- **Title:** The Eight Recipients of Zakat
- **Description:** Who is eligible to receive your zakat — the 8 categories from Surah at-Tawbah
- **Purpose:** Comprehensive overview of all 8 categories from Surah at-Tawbah 9:60
- **Content scope:** For each of the 8 categories, point → evidence → explain:
  1. **Al-Fuqara (the poor)** — Those who cannot meet their basic needs. Definition from the scholars, difference between fuqara and masakin.
  2. **Al-Masakin (the needy)** — Those who have some but not enough. Scholarly distinction from al-fuqara.
  3. **Al-'Amilin (zakat collectors)** — Those appointed to collect and distribute. Paid from zakat funds.
  4. **Al-Mu'allafatu Qulubuhum (those whose hearts are to be reconciled)** — New Muslims or those inclined toward Islam. Summarise; deep dive in separate article.
  5. **Fi'r-Riqab (freeing slaves/captives)** — Historical context, modern application to freeing captives or bonded labourers.
  6. **Al-Gharimin (those in debt)** — People overwhelmed by debt. Summarise; deep dive in separate article.
  7. **Fi Sabilillah (in the path of Allah)** — The contested category. Summarise; deep dive in separate article.
  8. **Ibn as-Sabil (the traveller)** — Someone stranded away from home, even if wealthy at home.
- **Practical guidance:** Prioritise giving locally, give to the most categories you can, verify recipients.
- **Positions:** Classical view that zakat should be distributed locally vs allowing transfer to areas of greater need.

#### Fi Sabilillah — What It Covers
- **Slug:** `fi-sabilillah`
- **Title:** Fi Sabilillah — What It Covers
- **Heading:** Fi Sabilillah
- **Description:** Does "in the path of Allah" mean jihad only, or does it extend to dawah and Islamic education?
- **Purpose:** Deep dive into the most debated recipient category
- **Content scope:**
  - The ayah and its classical tafsir
  - **Position 1 (majority classical):** Refers specifically to military jihad — Imam al-Shafi'i, Imam Malik, Imam Ahmad, Abu Hanifa
  - **Position 2 (broader view):** Extends to all forms of striving for Allah's cause — dawah, Islamic education, building masajid. Ibn Taymiyyah's position, adopted by some contemporary scholars.
  - **Position 3 (modern expansive):** Some contemporary scholars include Hajj for the poor. Evidence and critique.
- **App position:** Position 1 (majority classical view) with `isAppPosition: true`. This app follows the majority of scholars that "fi sabilillah" refers to jihad specifically, while acknowledging the broader view.
- **Uses `positions` field** for the comparative fiqh display

#### Al-Mu'allafah — Does This Still Apply?
- **Slug:** `muallafah-qulubuhum`
- **Title:** Al-Mu'allafah — Does This Still Apply?
- **Heading:** Al-Mu'allafatu Qulubuhum
- **Description:** Those whose hearts are to be reconciled — did this category end, or does it remain until today?
- **Purpose:** Does this category still exist today?
- **Content scope:**
  - The ayah and hadith evidence for this category
  - **Hanafi position:** This category was abrogated after Islam became strong — based on Umar's reported refusal to give to certain people after the Prophet's death
  - **Majority position (Shafi'i, Maliki, Hanbali):** This category remains valid in all times — the ruling in the Quran is not abrogated. Ibn Taymiyyah's strong defence of this.
  - Practical modern application: new Muslims who need support, non-Muslims who may be drawn to Islam
- **App position:** Majority position (still applies) with `isAppPosition: true`. The Quranic text is not abrogated.
- **Uses `positions` field**

#### Al-Gharimin — Helping Those in Debt
- **Slug:** `gharimin-in-debt`
- **Title:** Al-Gharimin — Helping Those in Debt
- **Heading:** Al-Gharimin
- **Description:** Who qualifies as "in debt" for zakat purposes, and can you pay their creditor directly?
- **Purpose:** Who qualifies as "in debt" for zakat
- **Content scope:**
  - Two types of gharimin identified by scholars: those in debt for personal needs, and those in debt from reconciling between people
  - Conditions: the debt must be current, the person unable to repay, the debt not incurred for sinful purposes
  - Can you pay the creditor directly on their behalf? Scholarly positions.
  - Modern application: medical debt, students, those trapped in exploitative lending
- **App position:** Both types of gharimin are valid recipients. Paying the creditor directly is permissible (Ibn Uthaymeen's view) with `isAppPosition: true`.
- **Uses `positions` field**

### Practical Questions

#### Zakat on Your Home & Personal Items
- **Slug:** `home-and-personal-items`
- **Title:** Zakat on Your Home & Personal Items
- **Description:** Do you pay zakat on your house, car, or furniture? The answer is simpler than you think.
- **Purpose:** Clear up the most common confusion — do I pay zakat on my house/car/clothes?
- **Content scope:**
  - No zakat on personal-use assets: primary residence, car, furniture, clothing, tools of your trade
  - Evidence: hadith "there is no zakat on what a Muslim uses" and scholarly consensus
  - What IS zakatable if you have multiple properties (investment properties vs primary home)
  - Personal jewelry — summarise the existing gold & silver article's position on worn jewelry

#### Zakat and Debt in the West
- **Slug:** `zakat-and-western-debt`
- **Title:** Zakat and Debt in the West
- **Description:** Mortgages, student loans, and car finance — how do they affect your zakat calculation?
- **Purpose:** Address the reality that most Muslims in the West have mortgages, student loans, and car finance
- **Content scope:**
  - The general principle: debts reduce your zakatable wealth
  - **The key question:** Do you deduct the FULL remaining debt or only the next year's payments?
  - **Position 1 (deduct only upcoming payments):** Ibn Uthaymeen's view — you deduct only what's due in the next 12 months. Prevents people with large mortgages from never paying zakat.
  - **Position 2 (deduct the full debt):** Classical Hanbali view — all debts offset wealth.
  - **This app's position:** Follows Ibn Uthaymeen — deduct upcoming obligations only. Explain why.
  - Practical examples with numbers

#### Paying Zakat Early or in Instalments
- **Slug:** `paying-zakat-early`
- **Title:** Paying Zakat Early or in Instalments
- **Description:** Can you pay monthly? What about paying before your hawl date? The scholars' positions.
- **Purpose:** Can you spread zakat payments throughout the year?
- **Content scope:**
  - The default: zakat is due when one lunar year (hawl) completes
  - **Advance payment:** Permissible according to the majority — evidence from the hadith of Abbas (the Prophet allowed him to pay zakat in advance)
  - **Monthly instalments:** Permissible if you're paying in advance of your hawl date, not in arrears
  - **Important caveat:** You must still calculate at your hawl date and settle any difference
  - Hanafi, Shafi'i, Hanbali positions on advance payment. Maliki position (generally disliked).

#### Giving Zakat to Family
- **Slug:** `zakat-to-family`
- **Title:** Giving Zakat to Family
- **Description:** Which relatives can receive your zakat and which cannot — with the surprising exception.
- **Purpose:** Which relatives can and cannot receive your zakat
- **Content scope:**
  - **The rule:** You cannot give zakat to anyone you are obligated to financially support (parents, children, spouse)
  - **Evidence:** Scholarly consensus based on the principle that zakat must transfer wealth, not save you from an existing obligation
  - **The exception:** Relatives you are NOT obligated to support (siblings, uncles, cousins, in-laws) — giving to them is even more rewarding. Hadith of Zaynab bint Jahsh and Salman ibn Aamir.
  - Can a wife give zakat to her husband? Scholarly positions.
  - Practical guidance

#### Zakat al-Fitr vs Zakat al-Mal
- **Slug:** `fitr-vs-mal`
- **Title:** Zakat al-Fitr vs Zakat al-Mal
- **Description:** Two separate obligations that many Muslims confuse — how they differ and when each is due.
- **Purpose:** Many Muslims confuse these two obligations
- **Content scope:**
  - **Zakat al-Mal:** Wealth-based, 2.5%, requires nisab and hawl, paid any time of year
  - **Zakat al-Fitr:** Person-based, fixed amount (one sa' of food), due before Eid al-Fitr prayer, obligatory on every Muslim (even children — the guardian pays)
  - Evidence for each from the Sunnah
  - Can zakat al-fitr be paid in cash? The famous Hanafi vs majority disagreement.
  - Timing: when to pay, what happens if you miss the deadline

---

## Technical Changes

### Type changes (`src/lib/types.ts`)

**`ArticleMeta.group`** union type changes:

```
Before: "foundations" | "categories" | "issues"
After:  "foundations" | "wealth" | "recipients" | "practical" | "deductions"
```

**`ArticleContent`** — add two optional label override fields:

```typescript
interface ArticleContent {
  heading: string;
  subheading: string;
  rulingLabel?: string;    // NEW — defaults to "The Ruling" if omitted
  evidenceLabel?: string;  // NEW — defaults to "Evidence" if omitted
  rulingParts: { bold: string; normal?: string }[];
  evidence: string;
  citations: ScholarCitation[];
  positions?: ScholarlyPosition[];
}
```

This solves the problem that narrative/historical articles (e.g. "The Wisdom Behind Zakat", "Zakat in History") don't have "rulings" — they can set `rulingLabel: "Key Points"` and `evidenceLabel: "From the Quran & Sunnah"`. Fiqh articles omit these fields and keep the existing defaults.

### Renderer change (`src/app/learn/[slug]/page.tsx`)

Two lines change — the hardcoded "The Ruling" and "Evidence" headings become:

```tsx
{content.rulingLabel ?? "The Ruling"}
{content.evidenceLabel ?? "Evidence"}
```

No other renderer changes.

### Article metadata (`src/lib/articles.ts`)

- Add 11 new `ArticleMeta` entries (slugs must exactly match keys in `article-content.ts`)
- Change `group` on 10 existing asset articles from `"categories"` to `"wealth"`
- Change `group` on "Common Mistakes" from `"issues"` to `"practical"`
- Change `group` on "Deducting Debts" from `"issues"` to `"deductions"`

### Article content (`src/data/article-content.ts`)

- Add 11 new `ArticleContent` entries — this is the largest change, potentially 1000+ lines of content
- Each uses `rulingParts` with point → evidence → explain rhythm
- Narrative articles (wisdom, history) use `rulingLabel` / `evidenceLabel` overrides
- Recipients deep-dive articles use the `positions` field for comparative fiqh
- For multi-topic articles (e.g. "Eight Recipients"), each topic is a `rulingPart` where `bold` is the category name/point and `normal` contains the evidence and explanation. The main `evidence` field holds the primary ayah (Surah at-Tawbah 9:60).

### Learn index page (`src/app/learn/page.tsx`)

- Update group rendering to show 5 groups with correct labels and ordering:
  1. Foundations
  2. Your Wealth
  3. Giving Your Zakat
  4. Practical Questions
  5. Debts & Deductions

### Files that change (summary)

| File | Nature of change |
|------|-----------------|
| `src/lib/types.ts` | Add `rulingLabel?`, `evidenceLabel?` to `ArticleContent`; update `group` union |
| `src/lib/articles.ts` | Add 11 entries, update `group` on 12 existing entries |
| `src/data/article-content.ts` | Add 11 content entries (bulk of the work) |
| `src/app/learn/page.tsx` | Update group labels and ordering |
| `src/app/learn/[slug]/page.tsx` | Use optional label overrides (2 lines) |

---

## What This Does NOT Include

- No new components or pages (beyond data)
- No changes to the calculator
- No changes to the styling or layout
- No API integrations
- No i18n
