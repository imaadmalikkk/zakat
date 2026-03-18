import Link from "next/link";
import { articles } from "@/lib/articles";

const parts: { label: string; slugs: string[] }[] = [
  {
    label: "The Foundations",
    slugs: ["what-is-zakat", "wisdom-behind-zakat", "zakat-in-history"],
  },
  {
    label: "The Thresholds",
    slugs: ["the-nisab", "the-hawl"],
  },
  {
    label: "Assessing Your Wealth",
    slugs: [
      "cash-and-savings",
      "gold-and-silver",
      "stocks-and-investments",
      "business-assets",
      "cryptocurrency",
      "retirement-accounts",
      "rental-income",
      "debts-owed-to-you",
      "agricultural-produce",
      "livestock",
      "home-and-personal-items",
    ],
  },
  {
    label: "Debts & Deductions",
    slugs: ["zakat-and-western-debt", "deducting-debts"],
  },
  {
    label: "Who Receives It",
    slugs: [
      "eight-recipients",
      "fi-sabilillah",
      "muallafah-qulubuhum",
      "gharimin-in-debt",
    ],
  },
  {
    label: "Practical Matters",
    slugs: [
      "zakat-to-family",
      "paying-zakat-early",
      "fitr-vs-mal",
      "common-mistakes",
    ],
  },
];

export default function LearnPage() {
  let chapter = 0;

  return (
    <div className="pt-8 sm:pt-12 pb-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
        Understanding Zakat
      </h1>
      <p className="text-sm text-neutral-500 mt-1.5 mb-10">
        A complete guide — from the foundations to the finer points
      </p>

      {parts.map((part, i) => (
        <div key={part.label}>
          <div
            className={`text-xs font-semibold uppercase tracking-wider text-neutral-400 pt-6 pb-3${
              i > 0 ? " border-t border-neutral-200" : ""
            }`}
          >
            Part {toRoman(i + 1)} · {part.label}
          </div>

          {part.slugs.map((slug) => {
            chapter++;
            const article = articles.find((a) => a.slug === slug);
            if (!article) return null;
            const num = String(chapter).padStart(2, "0");

            return (
              <Link
                key={slug}
                href={`/learn/${slug}`}
                className="flex items-baseline gap-4 py-3 group"
              >
                <span className="text-sm font-medium text-neutral-300 min-w-[28px]">
                  {num}
                </span>
                <div>
                  <span className="text-sm font-medium text-neutral-900 group-hover:text-neutral-500 transition-colors">
                    {article.title}
                  </span>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {article.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ))}

      <div className="mt-12 pt-8 border-t border-neutral-200">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
        >
          Calculate Your Zakat →
        </Link>
      </div>
    </div>
  );
}

function toRoman(n: number): string {
  const numerals: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (const [value, symbol] of numerals) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}
