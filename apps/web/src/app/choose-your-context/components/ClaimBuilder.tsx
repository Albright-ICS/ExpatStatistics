'use client';

import { useMemo, useState } from 'react';
import { claimToolkit } from '@shared/content/claimToolkit';
import { SectionHeader, Callout, DataCard, StatRow } from '@shared/components';

export function ClaimBuilder() {
  const [firstId, setFirstId] = useState<string>(claimToolkit.claimOptions[0]?.id ?? '');
  const [secondId, setSecondId] = useState<string>(claimToolkit.claimOptions[1]?.id ?? '');
  const [caveat, setCaveat] = useState<string>(claimToolkit.caveatTemplates[0]);

  const selectedA = useMemo(() => claimToolkit.claimOptions.find((c) => c.id === firstId), [firstId]);
  const selectedB = useMemo(() => claimToolkit.claimOptions.find((c) => c.id === secondId), [secondId]);

  const claimText = useMemo(() => {
    if (!selectedA || !selectedB) return 'Select two data points to build your claim.';
    return claimToolkit.claimTemplate
      .replace('{{statA}}', selectedA.label)
      .replace('{{statB}}', selectedB.label);
  }, [selectedA, selectedB]);

  return (
    <div className="space-y-4">
      <SectionHeader
        eyebrow="Make a claim + caveat"
        title="Build a careful statement"
        description="Pick two data points, draft a claim, and choose a caveat that keeps you honest."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <DataCard title="Data point A">
          <select
            className="w-full rounded-lg border border-slate-300 p-2 text-sm"
            value={firstId}
            onChange={(e) => setFirstId(e.target.value)}
          >
            {claimToolkit.claimOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          {selectedA ? (
            <div className="mt-2">
              <StatRow stat={selectedA.stat} />
            </div>
          ) : null}
        </DataCard>
        <DataCard title="Data point B">
          <select
            className="w-full rounded-lg border border-slate-300 p-2 text-sm"
            value={secondId}
            onChange={(e) => setSecondId(e.target.value)}
          >
            {claimToolkit.claimOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          {selectedB ? (
            <div className="mt-2">
              <StatRow stat={selectedB.stat} />
            </div>
          ) : null}
        </DataCard>
        <DataCard title="Caveat">
          <select
            className="w-full rounded-lg border border-slate-300 p-2 text-sm"
            value={caveat}
            onChange={(e) => setCaveat(e.target.value)}
          >
            {claimToolkit.caveatTemplates.map((template, idx) => (
              <option key={idx} value={template}>
                {template}
              </option>
            ))}
          </select>
          <Callout title="Reminder" tone="caution">
            Avoid overclaiming. Name what your data cannot prove.
          </Callout>
        </DataCard>
      </div>
      <Callout title="Your draft" tone="info">
        {claimText}
        <br />
        Caveat: {caveat}
      </Callout>
    </div>
  );
}
