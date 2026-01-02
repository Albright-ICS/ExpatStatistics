import { feeStats, benchmarkNarrative } from '@shared/content/siteContent';
import { SectionHeader, StatTable, Callout } from '@shared/components';

export default function CostsIncomePage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Income signal"
        title="Tuition as a signal, not proof"
        description="Published fees show scale but do not prove individual household income."
      />
      <StatTable stats={feeStats} />
      <Callout title="Benchmark" tone="info">
        {benchmarkNarrative}
      </Callout>
      <Callout title="Reminder" tone="caution">
        Development levy for UWCSEA is recorded as TBD. // TODO: Fill from source manually when available.
      </Callout>
    </div>
  );
}
