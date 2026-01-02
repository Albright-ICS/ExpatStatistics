export function SectionHeader({ title, eyebrow, description }: { title: string; eyebrow?: string; description?: string }) {
  return (
    <div className="space-y-1">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {description ? <p className="text-sm text-slate-700">{description}</p> : null}
    </div>
  );
}
