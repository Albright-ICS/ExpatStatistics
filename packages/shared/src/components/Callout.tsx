import { ReactNode } from 'react';

const toneClasses: Record<string, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-900',
  caution: 'border-amber-200 bg-amber-50 text-amber-900',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900'
};

export function Callout({
  title,
  tone = 'info',
  children
}: {
  title: string;
  tone?: 'info' | 'caution' | 'success';
  children: ReactNode;
}) {
  const toneClass = toneClasses[tone];
  return (
    <div className={`rounded-xl border p-4 shadow-sm ${toneClass}`}>
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
