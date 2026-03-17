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
