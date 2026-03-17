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
      <div className="text-xs text-neutral-400 mb-4">
        <Link href="/learn" className="hover:text-neutral-600 transition-colors">Learn</Link>
        {" \u2192 "}{article.title}
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">{content.heading}</h1>
      <p className="text-sm text-neutral-500 mt-1.5 mb-6">{content.subheading}</p>

      {/* Ruling box */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">The Ruling</div>
        {content.rulingParts.map((part, i) => (
          <p key={i} className="text-sm text-neutral-900 leading-relaxed">
            <strong>{part.bold}</strong>
            {part.normal && <span> {part.normal}</span>}
          </p>
        ))}
      </div>

      {/* Evidence */}
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Evidence</div>
        <div className="border-l-2 border-neutral-200 pl-3.5 text-sm text-neutral-600 leading-relaxed">{content.evidence}</div>
      </div>

      {/* Scholarly positions (comparative view — only shown when positions exist) */}
      {content.positions && content.positions.length > 0 && (
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Scholarly Positions</div>
          <div className="flex flex-col gap-2.5">
            {content.positions.map((pos, i) => (
              <div
                key={i}
                className={`border rounded-lg p-4 ${
                  pos.isAppPosition
                    ? "border-emerald-200 bg-emerald-50/50"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {pos.isAppPosition && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded mb-2">
                    Position used by this calculator
                  </span>
                )}
                {pos.school && (
                  <div className="text-xs font-medium text-neutral-400 mb-1">{pos.school}</div>
                )}
                <p className="text-sm font-medium text-neutral-900 mb-1.5">{pos.position}</p>
                <div className="text-xs text-neutral-500">
                  {pos.scholars.join(" · ")}
                </div>
                {pos.evidence && (
                  <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">{pos.evidence}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed citations */}
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Detailed Citations</div>
        <div className="flex flex-col gap-2.5">
          {content.citations.map((citation, i) => (
            <ScholarCitationCard key={i} citation={citation} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-100 pt-4 flex justify-between items-center">
        <Link href="/learn" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">&larr; Back to Learn</Link>
        <Link href="/" className="bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors">Calculate Your Zakat &rarr;</Link>
      </div>
    </div>
  );
}
