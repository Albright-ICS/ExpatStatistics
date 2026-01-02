import { ReactNode } from 'react';

export function Accordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
        {title}
        <span className="text-xs text-slate-500 group-open:hidden" aria-hidden>
          +
        </span>
        <span className="text-xs text-slate-500 group-open:block hidden" aria-hidden>
          −
        </span>
      </summary>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </details>
  );
}
