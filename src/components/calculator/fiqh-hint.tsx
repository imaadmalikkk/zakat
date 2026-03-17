interface FiqhHintProps {
  ruling: string;
  detail?: string;
}

export function FiqhHint({ ruling, detail }: FiqhHintProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
      <p className="text-sm text-amber-900">
        <strong>{ruling}</strong>
        {detail && <span className="font-normal"> &mdash; {detail}</span>}
      </p>
    </div>
  );
}
