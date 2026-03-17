"use client";

interface ToggleChoiceProps {
  question: string;
  optionA: string;
  optionB: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function ToggleChoice({ question, optionA, optionB, value, onChange }: ToggleChoiceProps) {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-4">
      <div className="text-sm font-medium text-neutral-900 mb-3">{question}</div>
      <div className="flex gap-2">
        <button onClick={() => onChange(true)} className={`flex-1 rounded-md px-3 py-3 text-sm text-center transition-colors border ${value ? "border-neutral-900 text-neutral-900 font-medium bg-white" : "border-neutral-200 text-neutral-500 bg-white hover:border-neutral-300"}`}>
          {optionA}
        </button>
        <button onClick={() => onChange(false)} className={`flex-1 rounded-md px-3 py-3 text-sm text-center transition-colors border ${!value ? "border-neutral-900 text-neutral-900 font-medium bg-white" : "border-neutral-200 text-neutral-500 bg-white hover:border-neutral-300"}`}>
          {optionB}
        </button>
      </div>
    </div>
  );
}
