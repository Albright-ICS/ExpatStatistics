import { SchoolProfile } from '../types';

export function HypothesisPanel({ profile }: { profile: SchoolProfile }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Community Snapshot</h3>
        <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-slate-700">
          {profile.composition.map((item, idx) => (
            <li key={`${profile.id}-composition-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Cost Bundle</h3>
        <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-slate-700">
          {profile.costBundle.map((item, idx) => (
            <li key={`${profile.id}-cost-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">Likely Consumer Pressures</h3>
        <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-slate-700">
          {profile.hypotheses.map((item, idx) => (
            <li key={`${profile.id}-hyp-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-amber-900">What this does NOT prove</h3>
        <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-amber-900">
          {profile.caveats.map((item, idx) => (
            <li key={`${profile.id}-caveat-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
