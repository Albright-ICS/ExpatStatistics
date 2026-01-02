import { sources } from '@shared/content/sources';
import { SectionHeader } from '@shared/components';

export default function SourcesPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="References"
        title="Sources registry"
        description="Each statistic cites a source ID that links here for transparency."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {sources.map((source) => (
          <article
            key={source.id}
            id={`source-${source.id}`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-slate-900">{source.title}</h3>
            <p className="mt-1 text-sm text-slate-700">{source.annotation}</p>
            <a
              className="mt-2 inline-block text-sm font-semibold text-indigo-700 underline underline-offset-4 hover:text-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href={source.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit source
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
