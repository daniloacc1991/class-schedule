import { getSubject } from '../data/subjects';

interface SubjectFilterProps {
  subjectIds: string[];
  activeFilter: string | null;
  onFilter: (id: string | null) => void;
}

export default function SubjectFilter({ subjectIds, activeFilter, onFilter }: SubjectFilterProps) {
  return (
    <div className="overflow-x-auto hide-scrollbar py-1">
      <div className="flex gap-2 px-4 min-w-max">
        <button
          onClick={() => onFilter(null)}
          className={`
            pill text-xs
            ${activeFilter === null
              ? 'bg-purple-600 text-white shadow-md pill-active ring-purple-400'
              : 'bg-white/70 text-gray-600 hover:bg-white dark:bg-gray-800/70 dark:text-gray-300 dark:hover:bg-gray-800'}
          `}
        >
          Todas
        </button>
        {subjectIds.map((id) => {
          const subj = getSubject(id);
          const isActive = activeFilter === id;
          return (
            <button
              key={id}
              onClick={() => onFilter(isActive ? null : id)}
              className={`
                pill text-xs
                ${isActive
                  ? `${subj.colorLight} ${subj.colorDark} shadow-md pill-active ring-current`
                  : 'bg-white/70 text-gray-600 hover:bg-white dark:bg-gray-800/70 dark:text-gray-300 dark:hover:bg-gray-800'}
              `}
            >
              <span aria-hidden="true">{subj.emoji}</span>
              <span className="hidden sm:inline">{subj.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
