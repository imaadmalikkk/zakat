"use client";

import { useState } from "react";
import type { ScholarCitation } from "@/lib/types";
import Link from "next/link";

interface WhyExpanderProps {
  explanation: string;
  citation: ScholarCitation;
  learnSlug: string;
}

export function WhyExpander({ explanation, citation, learnSlug }: WhyExpanderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2">
      <div className="flex gap-3 text-xs">
        <button onClick={() => setOpen(!open)} className="text-neutral-500 hover:text-neutral-700 transition-colors underline underline-offset-2 decoration-neutral-300">
          {open ? "Hide explanation \u2191" : "Why? \u2193"}
        </button>
        <span className="text-neutral-300">&middot;</span>
        <Link href={`/learn/${learnSlug}`} className="text-neutral-500 hover:text-neutral-700 transition-colors underline underline-offset-2 decoration-neutral-300">
          Read full article &rarr;
        </Link>
      </div>
      {open && (
        <div className="mt-3 border-l-2 border-neutral-200 pl-3.5">
          <p className="text-sm text-neutral-600 leading-relaxed mb-2.5">{explanation}</p>
          <div className="bg-neutral-50 border border-neutral-200 rounded-md p-3">
            <div className="text-xs font-medium text-neutral-900">{citation.scholar}</div>
            <div className="text-xs text-neutral-500 italic mt-1">&ldquo;{citation.quote}&rdquo;</div>
            <div className="text-[11px] text-neutral-400 mt-1">{citation.source}</div>
          </div>
        </div>
      )}
    </div>
  );
}
