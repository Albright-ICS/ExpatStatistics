'use client';

import { useState } from 'react';
import { schoolProfiles } from '@shared/content/profiles';
import { ProfileSelector, HypothesisPanel, SectionHeader } from '@shared/components';

export function ProfileExperience() {
  const [activeProfileId, setActiveProfileId] = useState<string>(schoolProfiles[0]?.id ?? '');
  const activeProfile = schoolProfiles.find((profile) => profile.id === activeProfileId) ?? schoolProfiles[0];

  return (
    <div className="space-y-4">
      <SectionHeader
        eyebrow="Choose your school context"
        title="See how norms shift with community mix"
        description="Select a profile to view community snapshot, cost bundle, pressures, and caveats."
      />
      <ProfileSelector profiles={schoolProfiles} activeProfileId={activeProfileId} onSelect={setActiveProfileId} />
      {activeProfile ? <HypothesisPanel profile={activeProfile} /> : null}
    </div>
  );
}
