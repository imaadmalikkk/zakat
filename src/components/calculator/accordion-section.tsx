"use client";

import { useState } from "react";

interface AccordionSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionSection({ title, subtitle, children, defaultOpen = false }: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-neutral-200 rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left">
        <div>
          <div className="text-base font-semibold text-neutral-900">{title}</div>
          <div className="text-sm text-neutral-500 mt-0.5">{subtitle}</div>
        </div>
        <span className="text-neutral-400 text-sm ml-4">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-neutral-100">
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  );
}
