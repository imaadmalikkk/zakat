# Zakat Calculator — Design Spec

## Overview
A web-based zakat calculator grounded in the fiqh of the Salaf, citing Ibn Baz, Ibn Uthaymeen, Ibn Taymiyyah, and the Permanent Committee. Built for community use (masjid/community sharing). Fills the gap left by popular calculators that get key rulings wrong (e.g., zakat on investment profits vs. full value).

## Stack
- **Next.js** (static export) — matches hadith-check project
- **Tailwind CSS v4** — same design language as hadith-check
- **Fonts:** Inter (English), Noto Naskh Arabic (Arabic text)
- **No backend, no database, no auth** — fully client-side
- **Deploy:** Vercel (free tier)
- **Gold/silver price API:** Client-side fetch for live nisab calculation

## Design Language
Copied from hadith-check:
- Light mode only, `#fafafa` background, `#171717` text
- Neutral color palette (`neutral-50` through `neutral-900`)
- Semantic colors only where they carry meaning
- `max-w-2xl` centered layout, generous spacing
- Minimal cards with `border-neutral-200`, subtle hover states
- Academic/scholarly aesthetic, zero ornamental flourishes

## Pages

### 1. Calculate (Home — `/`)
Single scrolling page with collapsible accordion sections.

**Nisab Settings (top):**
- Toggle: gold standard (85g) vs silver standard (595g) — default silver
- Auto-fetch live prices from API with manual override option
- Display current nisab threshold in user's currency

**Asset Categories (accordion sections):**
Each section has:
- Fiqh-relevant questions that change what inputs appear (e.g., "Do you actively trade stocks?")
- Inline ruling hint (yellow box) — one bold sentence stating the ruling
- "Why?" expander — 2-3 sentence explanation with scholar citation
- "Read more →" link to full Learn article
- Dollar input fields appropriate to the ruling

Categories:
1. Cash & Savings — bank accounts, cash on hand, currencies
2. Gold & Silver — worn jewelry vs stored, bullion (with weight-to-value helper)
3. Stocks & Investments — fiqh question: trading vs long-term hold → full value vs profits only
4. Business Assets — inventory/trade goods vs fixed assets (equipment, property)
5. Cryptocurrency — treated analogously to trade goods or currency
6. Retirement Accounts — accessible vs locked funds (401k, IRA, pensions)
7. Rental Income & Property — zakat on net rental income, not property value
8. Debts Owed to You — collectible vs doubtful debts
9. Agricultural Produce — 5% (irrigated) vs 10% (rain-fed), separate nisab
10. Livestock — camels, cattle, sheep with traditional nisab thresholds from Sunnah

**Deductions:**
- Immediate debts due
- Basic living expenses due before zakat date

**Sticky Summary Bar:**
- Always visible while filling in
- Shows: total zakatable wealth, zakat due (2.5%), nisab status
- Updates live as user types

**Full Summary (bottom):**
- Nisab confirmation (green box)
- Large zakat due number
- Per-category breakdown with ruling basis noted on each line
- Contextual teaching callouts ("Why is your stocks zakat only $X?")
- Print/Save PDF, Share, Reset buttons
- Scholarly disclaimer

### 2. Learn (`/learn`)

**Index page** — three groups:
- **Foundations:** What is Zakat, The Nisab, The Hawl
- **Asset Categories:** One article per calculator category
- **Common Issues:** Mistakes & Misconceptions, Deducting Debts

**Article template** — each page includes:
- Breadcrumb navigation
- The ruling in a highlighted box
- Evidence section (fiqh reasoning, analogies)
- Scholar citations with direct quotes and source references (Majmu' Fatawa volume/page)
- Link back to calculator

## Nisab Logic
- Silver standard (default): 595g × current silver price/g
- Gold standard: 85g × current gold price/g
- User can toggle between standards
- Auto-fetch from free metals API, with manual price override
- Agricultural produce and livestock have their own separate nisab thresholds

## Zakat Calculation Rules

### Standard 2.5% Categories
- Cash & savings: 2.5% of total
- Gold & silver: 2.5% of value (all gold/silver, including worn jewelry per stronger position)
- Trading stocks: 2.5% of current market value
- Long-term investment stocks: 2.5% of profits/dividends received only
- Business inventory/trade goods: 2.5% of market value
- Crypto: 2.5% (treated as trade goods or currency depending on use)
- Retirement accounts: 2.5% of accessible portion
- Rental income: 2.5% of net rental income (not property value)
- Collectible debts owed to you: 2.5% of amount

### Agricultural Produce (separate rules)
- 10% if rain-fed / naturally irrigated
- 5% if artificially irrigated
- Nisab: 5 wasq (~653 kg) per crop type

### Livestock (separate rules)
- Specific thresholds from authenticated hadith
- Sheep: starts at 40 head
- Cattle: starts at 30 head
- Camels: starts at 5 head
- Detailed tables from Sunnah

### Deductions
- Immediate debts due reduce zakatable wealth
- Position of Ibn Taymiyyah on debt deduction

## Scholarly Sources
Primary references throughout:
- Shaykh Abdul-Aziz ibn Baz — Majmu' Fatawa Ibn Baz
- Shaykh Muhammad ibn Salih al-Uthaymeen — Majmu' Fatawa Ibn Uthaymeen, al-Sharh al-Mumti'
- Shaykh al-Islam Ibn Taymiyyah — Majmu' al-Fatawa
- The Permanent Committee for Scholarly Research and Ifta (al-Lajnah ad-Da'imah)

## Non-Goals
- No user accounts or authentication
- No hawl tracking or reminders
- No payment processing
- No dark mode (matching hadith-check)
- No mobile app — web only
