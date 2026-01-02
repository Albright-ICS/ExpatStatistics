import { Stat } from '../types';
import { CitationLink } from './CitationLink';

export function StatTable({ stats }: { stats: Stat[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
              Label
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
              Value
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
              Year
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-700">
              Source
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {stats.map((stat) => (
            <tr key={stat.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 text-sm font-medium text-slate-900">{stat.label}</td>
              <td className="px-4 py-3 text-sm text-slate-700">{stat.value}</td>
              <td className="px-4 py-3 text-sm text-slate-700">{stat.year}</td>
              <td className="px-4 py-3 text-sm text-indigo-700">
                <CitationLink sourceId={stat.sourceId}>View</CitationLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
