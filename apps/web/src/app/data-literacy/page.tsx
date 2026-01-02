import { glossary } from '@shared/content/glossary';
import { SectionHeader, StatTable, Callout } from '@shared/components';

export default function DataLiteracyPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Data toolkit"
        title="Read the numbers carefully"
        description="Use these terms to avoid overstating what the data can prove."
      />
      {glossary.stats ? <StatTable stats={glossary.stats} /> : null}
      <Callout title="Next step" tone="info">
        Pair every claim with a caveat. Ask: who is missing from the dataset? What proxies are you using?
      </Callout>
    </div>
  );
}
