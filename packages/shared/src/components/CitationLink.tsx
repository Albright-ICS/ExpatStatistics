import { ReactNode } from 'react';

export function CitationLink({ sourceId, children }: { sourceId: string; children?: ReactNode }) {
  return (
    <a
      className="font-semibold text-indigo-700 underline underline-offset-4 hover:text-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      href={`/sources#source-${sourceId}`}
    >
      {children ?? 'Source'}
    </a>
  );
}
