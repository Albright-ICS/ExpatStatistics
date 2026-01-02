import { Stat } from '../types';
import { CitationLink } from './CitationLink';

export function StatRow({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
        <p className="text-xs text-slate-600">{stat.description}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-slate-900">{stat.value}</p>
        <p className="text-xs text-slate-600">
          {stat.year} • <CitationLink sourceId={stat.sourceId}>Source</CitationLink>
        </p>
      </div>
    </div>
  );
}
