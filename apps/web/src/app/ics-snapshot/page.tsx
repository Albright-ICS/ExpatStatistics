import { icsStats } from '@shared/content/siteContent';
import { DataCard, SectionHeader, StatRow, StatTable, Callout } from '@shared/components';

export default function IcsSnapshotPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="ICS profile"
        title="International Community School snapshot"
        description="ICS is multinational with an American plurality; nationality does not equal income."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {icsStats.slice(0, 2).map((stat) => (
          <DataCard key={stat.id} title={stat.label} eyebrow={stat.year}>
            <StatRow stat={stat} />
          </DataCard>
        ))}
        <Callout title="Interpretation" tone="info">
          ICS reports 28 nationalities with a mix of passports and visa types. A plurality is American, but multiple Asian and local groups appear.
        </Callout>
      </div>
      <div className="space-y-3">
        <SectionHeader title="Nationality shares" description="Percent of students by selected nationalities." />
        <StatTable stats={icsStats.filter((stat) => stat.id.endsWith('share'))} />
      </div>
    </div>
  );
}
