# Learn Content Expansion Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the learn section from 15 to 26 articles across 5 groups, adding spiritual/historical content, a zakat recipients guide, and practical FAQ-style articles.

**Architecture:** All content lives in data files (`articles.ts`, `article-content.ts`). One type change adds optional label overrides to `ArticleContent`. One renderer change uses those overrides. The learn index page updates its group filtering. No new components or pages.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS. Static export with `generateStaticParams`.

**Spec:** `docs/superpowers/specs/2026-03-17-learn-content-expansion-design.md`

**Content note:** Article content tasks (4-14) provide detailed briefs. The implementer must research and write authentic Islamic scholarly content following the point → evidence → explain pattern. Each `rulingPart` should have `bold` as the point and `normal` containing the evidence and explanation. Organise new entries in `article-content.ts` under section comments matching the group names (`// FOUNDATIONS`, `// YOUR WEALTH`, `// GIVING YOUR ZAKAT`, `// PRACTICAL QUESTIONS`, `// DEBTS & DEDUCTIONS`).

---

## Chunk 1: Type & Infrastructure Changes

### Task 1: Update types, metadata, renderer, and learn index page

All infrastructure changes are made together to avoid a broken build window.

**Files:**
- Modify: `src/lib/types.ts:120` (group union)
- Modify: `src/lib/types.ts:131-138` (ArticleContent interface)
- Modify: `src/app/learn/[slug]/page.tsx:31,42` (label overrides)
- Modify: `src/lib/articles.ts` (full rewrite)
- Modify: `src/app/learn/page.tsx` (update group filtering and labels)

- [ ] **Step 1: Update `ArticleMeta.group` union**

In `src/lib/types.ts`, change line 120 from:
```typescript
  group: "foundations" | "categories" | "issues";
```
to:
```typescript
  group: "foundations" | "wealth" | "recipients" | "practical" | "deductions";
```

- [ ] **Step 2: Add optional label overrides to `ArticleContent`**

In `src/lib/types.ts`, change the `ArticleContent` interface (lines 131-138) to:
```typescript
export interface ArticleContent {
  heading: string;
  subheading: string;
  rulingLabel?: string;
  evidenceLabel?: string;
  rulingParts: { bold: string; normal?: string }[];
  evidence: string;
  citations: ScholarCitation[];
  positions?: ScholarlyPosition[];
}
```

- [ ] **Step 3: Update "The Ruling" heading in renderer**

In `src/app/learn/[slug]/page.tsx`, change line 31 from:
```tsx
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">The Ruling</div>
```
to:
```tsx
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">{content.rulingLabel ?? "The Ruling"}</div>
```

- [ ] **Step 4: Update "Evidence" heading in renderer**

In `src/app/learn/[slug]/page.tsx`, change line 42 from:
```tsx
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Evidence</div>
```
to:
```tsx
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">{content.evidenceLabel ?? "Evidence"}</div>
```

- [ ] **Step 5: Rewrite `src/lib/articles.ts`**

Replace the entire file contents with:

```typescript
import type { ArticleMeta } from "./types";

export const articles: ArticleMeta[] = [
  // Foundations
  { slug: "what-is-zakat", title: "What is Zakat?", description: "Pillar of Islam, conditions of obligation, who must pay", group: "foundations" },
  { slug: "the-nisab", title: "The Nisab", description: "Gold vs silver standard, evidence from the Sunnah", group: "foundations" },
  { slug: "the-hawl", title: "The Hawl (Lunar Year)", description: "When zakat becomes due, how to track your year", group: "foundations" },
  { slug: "wisdom-behind-zakat", title: "The Wisdom Behind Zakat", description: "Why Allah legislated zakat — purification, solidarity, and the consequences of withholding it", group: "foundations" },
  { slug: "zakat-in-history", title: "Zakat in the Time of the Prophet & the Khulafa", description: "How zakat was collected and enforced from Madinah through the Rightly Guided Caliphs", group: "foundations" },
  // Your Wealth
  { slug: "cash-and-savings", title: "Cash & Savings", description: "Bank accounts, cash on hand, currencies", group: "wealth" },
  { slug: "gold-and-silver", title: "Gold & Silver", description: "Jewelry worn vs stored, bullion, nisab weights", group: "wealth" },
  { slug: "stocks-and-investments", title: "Stocks & Investments", description: "Trading vs long-term holding — zakat on profits vs full value", group: "wealth" },
  { slug: "business-assets", title: "Business Assets", description: "Inventory, raw materials, trade goods vs fixed assets", group: "wealth" },
  { slug: "cryptocurrency", title: "Cryptocurrency", description: "Contemporary rulings, analogies to trade goods", group: "wealth" },
  { slug: "retirement-accounts", title: "Retirement Accounts", description: "401k, IRA, pensions — accessible vs locked funds", group: "wealth" },
  { slug: "rental-income", title: "Rental Income & Property", description: "Zakat on rental income vs property value", group: "wealth" },
  { slug: "debts-owed-to-you", title: "Debts Owed to You", description: "Collectible vs doubtful debts", group: "wealth" },
  { slug: "agricultural-produce", title: "Agricultural Produce", description: "5% vs 10% rates, nisab for grains and fruits", group: "wealth" },
  { slug: "livestock", title: "Livestock", description: "Camels, cattle, sheep — thresholds from the Sunnah", group: "wealth" },
  // Giving Your Zakat
  { slug: "eight-recipients", title: "The Eight Recipients of Zakat", description: "Who is eligible to receive your zakat — the 8 categories from Surah at-Tawbah", group: "recipients" },
  { slug: "fi-sabilillah", title: "Fi Sabilillah — What It Covers", description: "Does \"in the path of Allah\" mean jihad only, or does it extend to dawah and Islamic education?", group: "recipients" },
  { slug: "muallafah-qulubuhum", title: "Al-Mu'allafah — Does This Still Apply?", description: "Those whose hearts are to be reconciled — did this category end, or does it remain until today?", group: "recipients" },
  { slug: "gharimin-in-debt", title: "Al-Gharimin — Helping Those in Debt", description: "Who qualifies as \"in debt\" for zakat purposes, and can you pay their creditor directly?", group: "recipients" },
  // Practical Questions
  { slug: "home-and-personal-items", title: "Zakat on Your Home & Personal Items", description: "Do you pay zakat on your house, car, or furniture? The answer is simpler than you think.", group: "practical" },
  { slug: "zakat-and-western-debt", title: "Zakat and Debt in the West", description: "Mortgages, student loans, and car finance — how do they affect your zakat calculation?", group: "practical" },
  { slug: "paying-zakat-early", title: "Paying Zakat Early or in Instalments", description: "Can you pay monthly? What about paying before your hawl date? The scholars' positions.", group: "practical" },
  { slug: "zakat-to-family", title: "Giving Zakat to Family", description: "Which relatives can receive your zakat and which cannot — with the surprising exception.", group: "practical" },
  { slug: "fitr-vs-mal", title: "Zakat al-Fitr vs Zakat al-Mal", description: "Two separate obligations that many Muslims confuse — how they differ and when each is due.", group: "practical" },
  { slug: "common-mistakes", title: "Common Mistakes & Misconceptions", description: "Errors in popular zakat calculators", group: "practical" },
  // Debts & Deductions
  { slug: "deducting-debts", title: "Deducting Debts from Zakat", description: "Which debts reduce zakatable wealth", group: "deductions" },
];
```

- [ ] **Step 6: Update `src/app/learn/page.tsx`**

Replace the entire file contents with:

```tsx
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function LearnPage() {
  const groups = [
    { key: "foundations", label: "Foundations" },
    { key: "wealth", label: "Your Wealth" },
    { key: "recipients", label: "Giving Your Zakat" },
    { key: "practical", label: "Practical Questions" },
    { key: "deductions", label: "Debts & Deductions" },
  ] as const;

  function ArticleGroup({ label, items }: { label: string; items: typeof articles }) {
    return (
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">{label}</div>
        <div className="flex flex-col gap-2">
          {items.map((article) => (
            <Link key={article.slug} href={`/learn/${article.slug}`} className="border border-neutral-200 rounded-lg p-4 hover:border-neutral-300 transition-colors">
              <div className="text-sm font-medium text-neutral-900">{article.title}</div>
              <div className="text-xs text-neutral-500 mt-0.5">{article.description}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 sm:pt-12 pb-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Understanding Zakat</h1>
      <p className="text-sm text-neutral-500 mt-1.5 mb-8">Rulings and evidence from the Quran, Sunnah, and the scholars of the Salaf</p>
      {groups.map((g) => (
        <ArticleGroup key={g.key} label={g.label} items={articles.filter((a) => a.group === g.key)} />
      ))}
    </div>
  );
}
```

- [ ] **Step 7: Verify build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds. The 11 new slugs in `articles.ts` have no matching `articleContent` entries yet, but Next.js static export with `notFound()` will skip those pages gracefully. Existing 15 articles should all generate.

- [ ] **Step 8: Commit**

```bash
git add src/lib/types.ts src/app/learn/[slug]/page.tsx src/lib/articles.ts src/app/learn/page.tsx
git commit -m "feat: restructure learn section into 5 groups with label overrides and 11 new article entries"
```

---

## Chunk 2: Foundations Articles

### Task 2: Add "The Wisdom Behind Zakat" article content

**Files:**
- Modify: `src/data/article-content.ts` (add new entry after "the-hawl")

- [ ] **Step 1: Add article content**

Add the following entry to the `articleContent` object in `src/data/article-content.ts`, after the `"the-hawl"` entry. Use `rulingLabel: "Key Points"` and `evidenceLabel: "From the Quran & Sunnah"` since this is a reflective article, not a fiqh ruling.

Content requirements:
- **Slug key:** `"wisdom-behind-zakat"`
- **Heading:** `"The Wisdom Behind Zakat"`
- **Subheading:** Something capturing the spiritual and social wisdom
- **rulingLabel:** `"Key Points"`
- **evidenceLabel:** `"From the Quran & Sunnah"`
- **rulingParts** (5 points, point → evidence → explain):
  1. Zakat purifies the soul and wealth — cite Surah at-Tawbah 9:103
  2. It protects from greed and attachment to dunya — cite hadith on hoarding (Sahih Muslim)
  3. It creates social solidarity and closes the wealth gap — the communal obligation
  4. Withholding zakat carries severe consequences — cite hadith from Sahih Muslim on punishment
  5. The Sahaba understood this deeply — Abu Bakr's giving, Uthman funding Tabuk
- **evidence:** Primary Quranic text — Surah at-Tawbah 9:103 and Surah al-Hashr 59:7
- **citations:** 4-6 citations from scholars (Ibn Taymiyyah, Ibn al-Qayyim, al-Nawawi, Ibn Uthaymeen, etc.)
- **No `positions` field** (not a comparative fiqh article)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'The Wisdom Behind Zakat' article"
```

---

### Task 3: Add "Zakat in the Time of the Prophet & the Khulafa" article content

**Files:**
- Modify: `src/data/article-content.ts` (add new entry after "wisdom-behind-zakat")

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"zakat-in-history"`
- **Heading:** `"Zakat in the Time of the Prophet & the Khulafa"`
- **Subheading:** Something capturing the historical enforcement
- **rulingLabel:** `"Key Points"`
- **evidenceLabel:** `"Historical Evidence"`
- **rulingParts** (5 points, point → evidence → explain):
  1. The Prophet sent collectors to gather zakat — hadith of Mu'adh ibn Jabal sent to Yemen (Bukhari & Muslim)
  2. Abu Bakr fought those who refused to pay — "By Allah, if they withhold even a she-camel's hobbling rope that they used to pay to the Messenger of Allah, I will fight them for it" (Bukhari)
  3. Umar established the bayt al-mal for systematic distribution
  4. Uthman and Ali continued the system — zakat was never optional
  5. This shows zakat is not voluntary charity — it is a right of the poor over the wealthy
- **evidence:** The key hadith of Abu Bakr's stance (Sahih al-Bukhari 1399, 1400)
- **citations:** 4-6 citations (Ibn Kathir, Ibn Hajar, al-Nawawi, Ibn Taymiyyah on the riddah wars and obligation of zakat)
- **No `positions` field**

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Zakat in the Time of the Prophet' article"
```

---

## Chunk 3: Recipients Articles

### Task 4: Add "The Eight Recipients of Zakat" article content

**Files:**
- Modify: `src/data/article-content.ts` (add under `// GIVING YOUR ZAKAT` section)

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"eight-recipients"`
- **Heading:** `"The Eight Recipients of Zakat"`
- **Subheading:** Something about who is eligible from Surah at-Tawbah
- **rulingParts** (8 points — one per category, point → evidence → explain):
  1. **Al-Fuqara (the poor)** — those who cannot meet basic needs. Scholarly definition.
  2. **Al-Masakin (the needy)** — those who have some but not enough. Distinction from fuqara.
  3. **Al-'Amilin (zakat collectors)** — those appointed to collect/distribute. Paid from zakat.
  4. **Al-Mu'allafatu Qulubuhum** — new Muslims or those inclined toward Islam. Brief summary, link to deep dive.
  5. **Fi'r-Riqab (freeing slaves/captives)** — historical context, modern application to bonded labour.
  6. **Al-Gharimin (those in debt)** — overwhelmed by debt. Brief summary, link to deep dive.
  7. **Fi Sabilillah (in the path of Allah)** — contested category. Brief summary, link to deep dive.
  8. **Ibn as-Sabil (the traveller)** — stranded away from home, even if wealthy at home.
- **evidence:** Surah at-Tawbah 9:60 (full ayah text)
- **citations:** 5-7 citations from the 4 imams and classical scholars on recipient definitions
- **positions:** 2 positions:
  1. Zakat should be distributed locally (majority view) — `isAppPosition: true`
  2. Zakat may be transferred to areas of greater need (permitted by some scholars)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'The Eight Recipients of Zakat' article"
```

---

### Task 5: Add "Fi Sabilillah" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"fi-sabilillah"`
- **Heading:** `"Fi Sabilillah"`
- **Subheading:** The most debated category of zakat recipients
- **rulingParts** (3-4 points covering the debate)
- **evidence:** Surah at-Tawbah 9:60 and relevant hadith
- **citations:** 5-7 citations from classical and contemporary scholars
- **positions:** 3 positions:
  1. Refers specifically to jihad (majority classical — Shafi'i, Maliki, Hanbali, Hanafi) — `isAppPosition: true`
  2. Extends to all striving for Allah's cause — dawah, education, masajid (Ibn Taymiyyah, some contemporary scholars)
  3. Includes Hajj for the poor (minority contemporary view)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Fi Sabilillah' article"
```

---

### Task 6: Add "Al-Mu'allafah" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"muallafah-qulubuhum"`
- **Heading:** `"Al-Mu'allafatu Qulubuhum"`
- **Subheading:** Those whose hearts are to be reconciled — does this still apply?
- **rulingParts** (3-4 points)
- **evidence:** Surah at-Tawbah 9:60, relevant hadith and athar
- **citations:** 4-6 citations
- **positions:** 2 positions:
  1. Abrogated after Islam became strong (Hanafi view based on Umar's reported stance)
  2. Remains valid in all times — the Quran is not abrogated (Shafi'i, Maliki, Hanbali, Ibn Taymiyyah) — `isAppPosition: true`

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Al-Mu'allafah' article"
```

---

### Task 7: Add "Al-Gharimin" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"gharimin-in-debt"`
- **Heading:** `"Al-Gharimin"`
- **Subheading:** Helping those overwhelmed by debt
- **rulingParts** (3-4 points covering types, conditions, direct payment)
- **evidence:** Surah at-Tawbah 9:60, relevant hadith
- **citations:** 4-6 citations
- **positions:** 2 positions:
  1. Both types valid (personal debt + debt from reconciling). Direct payment to creditor permissible (Ibn Uthaymeen) — `isAppPosition: true`
  2. Must give to the debtor directly, not the creditor (minority view)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Al-Gharimin' article"
```

---

## Chunk 4: Practical Questions Articles

### Task 8: Add "Zakat on Your Home & Personal Items" article content

**Files:**
- Modify: `src/data/article-content.ts` (add under `// PRACTICAL QUESTIONS` section)

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"home-and-personal-items"`
- **Heading:** `"Zakat on Your Home & Personal Items"`
- **Subheading:** What you don't owe zakat on
- **rulingParts** (3-4 points): no zakat on primary residence/car/furniture/clothing/tools; evidence from hadith; investment properties ARE zakatable; personal jewelry summary
- **evidence:** Hadith "there is no zakat on what a Muslim uses" and scholarly consensus
- **citations:** 4-5 citations
- **No `positions` field** (scholarly consensus, no real disagreement)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Zakat on Home & Personal Items' article"
```

---

### Task 9: Add "Zakat and Debt in the West" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"zakat-and-western-debt"`
- **Heading:** `"Zakat and Debt in the West"`
- **Subheading:** Mortgages, student loans, and car finance
- **rulingParts** (3-4 points): general principle of debt deduction; the key question (full debt vs next year's payments); practical examples
- **evidence:** Relevant hadith and scholarly statements
- **citations:** 4-5 citations (Ibn Uthaymeen, Ibn Baz, contemporary fatwa bodies)
- **positions:** 2 positions:
  1. Deduct only upcoming 12 months of payments (Ibn Uthaymeen) — `isAppPosition: true`
  2. Deduct full remaining debt (classical Hanbali view)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Zakat and Debt in the West' article"
```

---

### Task 10: Add "Paying Zakat Early or in Instalments" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"paying-zakat-early"`
- **Heading:** `"Paying Zakat Early or in Instalments"`
- **Subheading:** Can you spread your payments throughout the year?
- **rulingParts** (3-4 points): default is at hawl; advance payment permissible; monthly instalments as advance; must settle at hawl date
- **evidence:** Hadith of Abbas (the Prophet allowed him to pay zakat in advance)
- **citations:** 4-5 citations
- **positions:** 2 positions:
  1. Advance payment permissible (Hanafi, Shafi'i, Hanbali majority) — `isAppPosition: true`
  2. Advance payment generally disliked (Maliki view)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Paying Zakat Early' article"
```

---

### Task 11: Add "Giving Zakat to Family" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"zakat-to-family"`
- **Heading:** `"Giving Zakat to Family"`
- **Subheading:** Which relatives can receive your zakat
- **rulingParts** (3-4 points): cannot give to dependents (parents, children, spouse); can give to non-dependents (siblings, uncles, cousins) with extra reward; hadith of Zaynab bint Jahsh; can a wife give to her husband?
- **evidence:** Hadith of Zaynab bint Jahsh and Salman ibn Aamir
- **citations:** 4-5 citations
- **No `positions` field** (or positions on wife→husband question if significant disagreement)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Giving Zakat to Family' article"
```

---

### Task 12: Add "Zakat al-Fitr vs Zakat al-Mal" article content

**Files:**
- Modify: `src/data/article-content.ts`

- [ ] **Step 1: Add article content**

Content requirements:
- **Slug key:** `"fitr-vs-mal"`
- **Heading:** `"Zakat al-Fitr vs Zakat al-Mal"`
- **Subheading:** Two separate obligations that many Muslims confuse
- **rulingParts** (4-5 points): zakat al-mal definition and rules; zakat al-fitr definition and rules; key differences (wealth-based vs person-based, ongoing vs annual); timing; amount
- **evidence:** Hadith on zakat al-fitr (Bukhari & Muslim — Ibn Umar narration)
- **citations:** 4-5 citations
- **positions:** 2 positions (on paying fitr in cash):
  1. Must be paid in food (majority — Maliki, Shafi'i, Hanbali) — `isAppPosition: true`
  2. May be paid in cash (Hanafi view, adopted by some contemporary scholars)

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/data/article-content.ts
git commit -m "feat: add 'Zakat al-Fitr vs Zakat al-Mal' article"
```

---

## Chunk 5: Final Verification

### Task 13: Full build and route verification

**Files:** None (verification only)

- [ ] **Step 1: Full build**

Run: `npm run build 2>&1 | tail -20`
Expected: All 26 routes generate successfully. Check for `/learn/[slug]` showing `[+22 more paths]` or similar.

- [ ] **Step 2: Serve and verify all new routes return 200**

```bash
npx serve@latest out -p 3850 &
sleep 2

# Test all 11 new slugs
for slug in wisdom-behind-zakat zakat-in-history eight-recipients fi-sabilillah muallafah-qulubuhum gharimin-in-debt home-and-personal-items zakat-and-western-debt paying-zakat-early zakat-to-family fitr-vs-mal; do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3850/learn/$slug)
  echo "$slug: $code"
done

kill %1
```
Expected: All 11 return `200`.

- [ ] **Step 3: Verify learn index page shows 5 groups**

```bash
npx serve@latest out -p 3850 &
sleep 2
curl -s http://localhost:3850/learn | grep -o 'Foundations\|Your Wealth\|Giving Your Zakat\|Practical Questions\|Debts &amp; Deductions' | sort -u
kill %1
```
Expected: All 5 group labels appear.

- [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add src/data/article-content.ts src/lib/articles.ts src/app/learn/page.tsx src/app/learn/[slug]/page.tsx src/lib/types.ts
git commit -m "fix: address any issues found during verification"
```

- [ ] **Step 5: Push to main**

```bash
git push
```
