import type { GradeId } from '../data/types';

interface GradeTabsProps {
  selected: GradeId;
  onSelect: (id: GradeId) => void;
}

const grades: { id: GradeId; label: string; emoji: string }[] = [
  { id: 'primero-b', label: 'Primero B (2025)', emoji: '1️⃣' },
  { id: 'segundo-a', label: 'Segundo A (2026)', emoji: '2️⃣' },
];

export default function GradeTabs({ selected, onSelect }: GradeTabsProps) {
  return (
    <div className="flex justify-center gap-3 px-4" role="tablist" aria-label="Seleccionar grado">
      {grades.map((g) => (
        <button
          key={g.id}
          role="tab"
          aria-selected={selected === g.id}
          onClick={() => onSelect(g.id)}
          className={`
            pill font-display text-base
            ${
              selected === g.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-300 dark:shadow-purple-900 pill-active ring-purple-400'
                : 'bg-white/70 text-gray-600 hover:bg-white dark:bg-gray-800/70 dark:text-gray-300 dark:hover:bg-gray-800'
            }
          `}
        >
          <span aria-hidden="true">{g.emoji}</span>
          <span className="hidden sm:inline">{g.label}</span>
          <span className="sm:hidden">{g.id === 'primero-b' ? '1°B' : '2°A'}</span>
        </button>
      ))}
    </div>
  );
}
