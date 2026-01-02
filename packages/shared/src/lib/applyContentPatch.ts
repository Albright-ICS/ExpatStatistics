import { SchoolProfile } from '../types';
import { schoolProfiles } from '../content/profiles';

type Patch = {
  profiles: Record<string, Partial<SchoolProfile>>;
};

export function applyContentPatch(patch: Patch) {
  const mergedProfiles: SchoolProfile[] = schoolProfiles.map((profile) => {
    const updates = patch.profiles?.[profile.id];
    if (!updates) return profile;
    return {
      ...profile,
      ...updates,
      composition: updates.composition ?? profile.composition,
      costBundle: updates.costBundle ?? profile.costBundle,
      hypotheses: updates.hypotheses ?? profile.hypotheses,
      caveats: updates.caveats ?? profile.caveats
    };
  });

  return { profiles: mergedProfiles };
}
