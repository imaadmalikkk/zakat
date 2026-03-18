import { articles } from "@/lib/articles";
import { articleContent } from "@/data/article-content";
import { ScholarCitationCard } from "@/components/learn/scholar-citation";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = articleContent[slug];
  if (!content) notFound();

  return (
    <div className="pt-8 sm:pt-12 pb-12">
      <div className="text-xs text-neutral-400 mb-6">
        <Link href="/learn" className="hover:text-neutral-600 transition-colors">Learn</Link>
        {" \u2192 "}{article.title}
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">{content.heading}</h1>
      <p className="text-base text-neutral-500 mt-2 mb-8">{content.subheading}</p>

      {/* Ruling / Key Points */}
      <div className="mb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">{content.rulingLabel ?? "The Ruling"}</div>
        <div className="flex flex-col gap-5">
          {content.rulingParts.map((part, i) => (
            <div key={i} className="border-l-2 border-neutral-200 pl-4">
              <p className="text-base text-neutral-900 leading-relaxed">
                <strong>{part.bold}</strong>
                {part.normal && <span className="text-neutral-700"> {part.normal}</span>}
              </p>
              {part.link && (
                <Link href={part.link.href} className="inline-block mt-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 border border-neutral-200 rounded-md px-3 py-1.5 transition-colors">
                  {part.link.label} &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Evidence */}
      <div className="mb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">{content.evidenceLabel ?? "Evidence"}</div>
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
          <p className="text-base text-neutral-700 leading-relaxed">{content.evidence}</p>
        </div>
      </div>

      {/* Scholarly positions */}
      {content.positions && content.positions.length > 0 && (
        <div className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Scholarly Positions</div>
          <div className="flex flex-col gap-3">
            {content.positions.map((pos, i) => (
              <div
                key={i}
                className={`border rounded-lg p-5 ${
                  pos.isAppPosition
                    ? "border-emerald-200 bg-emerald-50/50"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {pos.isAppPosition && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded mb-3">
                    Position used by this calculator
                  </span>
                )}
                {pos.school && (
                  <div className="text-xs font-medium text-neutral-400 mb-1">{pos.school}</div>
                )}
                <p className="text-base font-medium text-neutral-900 mb-2">{pos.position}</p>
                <div className="text-sm text-neutral-500">
                  {pos.scholars.join(" · ")}
                </div>
                {pos.evidence && (
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{pos.evidence}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed citations */}
      <div className="mb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Detailed Citations</div>
        <div className="flex flex-col gap-3">
          {content.citations.map((citation, i) => (
            <ScholarCitationCard key={i} citation={citation} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-100 pt-6 flex justify-between items-center">
        <Link href="/learn" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">&larr; Back to Learn</Link>
        <Link href="/" className="bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-neutral-800 transition-colors">Calculate Your Zakat &rarr;</Link>
      </div>
    </div>
  );
}
