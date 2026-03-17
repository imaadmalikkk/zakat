# Currency Selector

## Problem

The app is hardcoded to USD. Users in the UK, Europe, Middle East, and Asia need to enter values in their local currency. Default should be GBP.

## Approach

Option A: currency selection changes **display and formatting only**. The user enters values in their local currency. Metal prices are fetched in that currency. No exchange-rate conversion layer.

## What Changes

### 1. New state field

Add `currency: string` to `CalculatorState` with default `"GBP"`. Persisted to `localStorage`.

### 2. `src/lib/format.ts`

- `formatCurrency(amount, currencyCode)` — use `Intl.NumberFormat` with the provided currency code
- `getCurrencySymbol(currencyCode)` — extract symbol via `Intl.NumberFormat` for use in input prefixes
- Remove hardcoded `"USD"` and `"en-US"`

### 3. `src/lib/nisab.ts`

- `fetchMetalPrices(currencyCode)` — pass currency as `base` param to the metal prices API
- Fallback prices only used on API failure (kept as approximate USD values)

### 4. `src/components/calculator/currency-input.tsx`

- Accept `currencySymbol` prop instead of hardcoded `$`

### 5. `src/components/calculator/nisab-settings.tsx`

- Replace hardcoded `$/g` labels with dynamic `{symbol}/g`

### 6. New: `src/components/currency-selector.tsx`

- Searchable dropdown in the header
- Uses `Intl.DisplayNames("en", { type: "currency" })` to get all currency names
- Uses `Intl.supportedValuesOf("currency")` to enumerate all currency codes
- Displays as `GBP ▾` in collapsed state
- Dropdown: searchable list filtering by code or name (e.g. typing "pound" shows GBP)
- Compact — sits in the header next to nav

### 7. `src/app/layout.tsx`

- Currency selector rendered in header bar next to `<Nav />`
- Since layout is a server component and currency is client state, the selector is a client component

### 8. Threading currency through components

- `page.tsx` passes `currency` to all section components
- Each section passes the currency symbol to `CurrencyInput`
- Summary components receive currency code for `formatCurrency()`
- Alternative: React context. Given every component already receives props from page.tsx, context avoids prop drilling through 12+ sections.

**Decision: use React context.** A `CurrencyProvider` wrapping the calculator page provides `{ currency, setCurrency, symbol }` to all descendants. `formatCurrency` and `CurrencyInput` consume it via `useCurrency()` hook.

### 9. Persistence

- On currency change: `localStorage.setItem("zakat-currency", code)`
- On mount: read from `localStorage`, default to `"GBP"` if not set

## What Does NOT Change

- All internal values remain plain `number` types
- Zakat calculation logic (`zakat-rules.ts`) is untouched
- Article/learn section content unchanged
- No exchange rate conversion

## Currency List Source

`Intl.supportedValuesOf("currency")` returns all ISO 4217 codes (~160 currencies). Combined with `Intl.DisplayNames` for human-readable names. No hardcoded list to maintain.

## Files to Create

- `src/components/currency-selector.tsx` — searchable dropdown
- `src/lib/currency-context.tsx` — React context provider + hook

## Files to Modify

- `src/lib/format.ts` — parameterise currency code
- `src/lib/nisab.ts` — parameterise API base currency
- `src/lib/types.ts` — add currency to state
- `src/app/page.tsx` — wrap in CurrencyProvider, initialise from localStorage
- `src/app/layout.tsx` — add selector to header
- `src/components/calculator/currency-input.tsx` — dynamic symbol
- `src/components/calculator/nisab-settings.tsx` — dynamic symbol in labels
- `src/components/calculator/sticky-summary.tsx` — use context
- `src/components/calculator/full-summary.tsx` — use context
- All 10 section components — pass through context (no manual prop changes needed with context)
