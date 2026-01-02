import { useMemo, useState } from 'react';
import { applyContentPatch } from '@shared/lib/applyContentPatch';
import { schoolProfiles } from '@shared/content/profiles';
import { SchoolProfile } from '@shared/types';
import { HypothesisPanel, ProfileSelector, SectionHeader, DataCard, Callout } from '@shared/components';

function createPatch(profiles: SchoolProfile[]) {
  return {
    profiles: profiles.reduce<Record<string, Partial<SchoolProfile>>>((acc, profile) => {
      acc[profile.id] = {
        composition: profile.composition,
        costBundle: profile.costBundle,
        hypotheses: profile.hypotheses,
        caveats: profile.caveats
      };
      return acc;
    }, {})
  };
}

export default function App() {
  const [editableProfiles, setEditableProfiles] = useState<SchoolProfile[]>(schoolProfiles);
  const [activeProfileId, setActiveProfileId] = useState<string>(schoolProfiles[0]?.id ?? '');

  const activeProfile = editableProfiles.find((profile) => profile.id === activeProfileId) ?? editableProfiles[0];

  const contentPatch = useMemo(() => createPatch(editableProfiles), [editableProfiles]);

  const updateField = (profileId: string, field: keyof SchoolProfile, idx: number, value: string) => {
    setEditableProfiles((prev) =>
      prev.map((profile) => {
        if (profile.id !== profileId) return profile;
        const arr = [...(profile[field] as string[])];
        arr[idx] = value;
        return { ...profile, [field]: arr };
      })
    );
  };

  const resetProfiles = () => setEditableProfiles(schoolProfiles);

  const downloadPatch = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(contentPatch, null, 2))}`;
    const anchor = document.createElement('a');
    anchor.href = dataStr;
    anchor.download = 'contentPatch.json';
    anchor.click();
  };

  const mergedPreview = applyContentPatch(contentPatch);

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <header className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Front-End Design Studio</h1>
        <p className="text-sm text-slate-700">
          Tweak profile narratives, preview hypotheses, and export a deterministic content patch for the main site.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <button
            onClick={downloadPatch}
            className="rounded-lg bg-indigo-600 px-3 py-2 font-semibold text-white shadow hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export contentPatch.json
          </button>
          <button
            onClick={resetProfiles}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-900 shadow-sm hover:border-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Reset to default
          </button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Edit"
            title="Profile text"
            description="Update snapshot, cost bundle, hypotheses, and caveats."
          />
          {editableProfiles.map((profile) => (
            <DataCard key={profile.id} title={profile.name} eyebrow="Editable fields">
              {(['composition', 'costBundle', 'hypotheses', 'caveats'] as (keyof SchoolProfile)[]).map((field) => (
                <div key={field} className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{field}</p>
                  {(profile[field] as string[]).map((entry, idx) => (
                    <input
                      key={`${profile.id}-${field}-${idx}`}
                      value={entry}
                      onChange={(e) => updateField(profile.id, field, idx, e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
                    />
                  ))}
                </div>
              ))}
            </DataCard>
          ))}
        </div>
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Preview"
            title="Live hypothesis view"
            description="Select a profile to see the rendered student-facing component."
          />
          <ProfileSelector profiles={mergedPreview.profiles} activeProfileId={activeProfileId} onSelect={setActiveProfileId} />
          {activeProfile ? <HypothesisPanel profile={mergedPreview.profiles.find((p) => p.id === activeProfileId)!} /> : null}
          <Callout title="Apply Patch" tone="info">
            Use the exported <code>contentPatch.json</code> with <code>applyContentPatch</code> in dev to preview changes, or feed it to a
            CLI updater for production content.
          </Callout>
        </div>
      </div>
    </div>
  );
}
