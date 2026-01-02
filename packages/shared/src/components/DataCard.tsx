import { ReactNode } from 'react';

export type DataCardProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function DataCard({ title, eyebrow, children }: DataCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{eyebrow}</p>
      ) : null}
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </section>
  );
}
