import { schoolModelStats } from '@shared/content/siteContent';
import { SectionHeader, StatTable, Callout } from '@shared/components';

export default function SchoolModelsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Contrast"
        title="International vs. local-international mixes"
        description="Different school compositions create different spending reference points."
      />
      <StatTable stats={schoolModelStats} />
      <Callout title="Interpretation" tone="caution">
        Nationality mix does not automatically indicate income mix. Explore how transport, housing, and enrichment choices shape consumer norms.
      </Callout>
    </div>
  );
}
