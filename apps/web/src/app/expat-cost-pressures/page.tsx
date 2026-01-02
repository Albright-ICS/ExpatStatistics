import { perceptionStats } from '@shared/content/siteContent';
import { SectionHeader, StatTable, Callout } from '@shared/components';

export default function ExpatCostPressuresPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Survey perceptions"
        title="How expats perceive cost pressures"
        description="InterNations 2024 results capture feelings about cost of living, not exact budgets."
      />
      <StatTable stats={perceptionStats} />
      <Callout title="Read with care" tone="caution">
        Survey results depend on who responded. Pair perceptions with policy and tuition data before making claims.
      </Callout>
    </div>
  );
}
