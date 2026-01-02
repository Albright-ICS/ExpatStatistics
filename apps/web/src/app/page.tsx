import Link from 'next/link';
import {
  heroContent,
  framingPoints,
  populationStats,
  participationStats,
  benchmarkNarrative
} from '@shared/content/siteContent';
import { DataCard, SectionHeader, StatRow, Callout, CitationLink } from '@shared/components';

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-8 shadow-sm md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Student briefing</p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{heroContent.title}</h1>
          <p className="text-base text-slate-700">{heroContent.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            {heroContent.actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Why this matters</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            {framingPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Population context"
          title="Residents vs. non-residents"
          description="Non-resident totals include many visa types and are not the same as high-income expatriates."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {populationStats.map((stat) => (
            <DataCard key={stat.id} title={stat.label} eyebrow={stat.year}>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-700">{stat.description}</p>
              <p className="mt-2 text-xs text-slate-600">
                <CitationLink sourceId={stat.sourceId}>View source</CitationLink>
              </p>
            </DataCard>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Policy indicator"
          title="International school participation"
          description="Citizens generally need waivers to enroll in Foreign System Schools."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {participationStats.map((stat) => (
            <DataCard key={stat.id} title={stat.label} eyebrow={stat.year}>
              <StatRow stat={stat} />
            </DataCard>
          ))}
          <Callout title="Interpret carefully" tone="caution">
            Less than 0.5% does not mean zero demand; waivers and policy shape who appears in the data.
          </Callout>
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader
          eyebrow="Income signal benchmark"
          title="Tuition vs. median income"
          description="Use the benchmark to compare scale, but avoid assuming every family pays sticker price."
        />
        <DataCard title="Scale comparison" eyebrow="Benchmark">
          <p className="text-sm text-slate-700">{benchmarkNarrative}</p>
        </DataCard>
      </section>
    </div>
  );
}
