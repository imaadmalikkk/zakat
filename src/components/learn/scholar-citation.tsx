import type { ScholarCitation } from "@/lib/types";

interface ScholarCitationCardProps {
  citation: ScholarCitation;
}

export function ScholarCitationCard({ citation }: ScholarCitationCardProps) {
  return (
    <div className="border border-neutral-200 rounded-lg p-4">
      <div className="text-sm font-medium text-neutral-900">{citation.scholar}</div>
      <div className="text-sm text-neutral-500 italic mt-1">&ldquo;{citation.quote}&rdquo;</div>
      <div className="text-xs text-neutral-400 mt-1.5">{citation.source}</div>
    </div>
  );
}
