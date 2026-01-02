import { SchoolProfile } from '../types';

export type ProfileSelectorProps = {
  profiles: SchoolProfile[];
  activeProfileId: string;
  onSelect: (id: string) => void;
};

export function ProfileSelector({ profiles, activeProfileId, onSelect }: ProfileSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {profiles.map((profile) => {
        const isActive = profile.id === activeProfileId;
        return (
          <button
            key={profile.id}
            type="button"
            onClick={() => onSelect(profile.id)}
            className={`flex h-full flex-col rounded-xl border p-4 text-left shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              isActive ? 'border-indigo-400 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-200'
            }`}
            aria-pressed={isActive}
          >
            <span className="text-sm font-semibold text-slate-900">{profile.name}</span>
            <span className="mt-2 text-sm text-slate-700">{profile.composition[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
