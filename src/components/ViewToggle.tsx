import type { ViewMode } from '../data/types';

interface ViewToggleProps {
  viewMode: ViewMode;
  onToggle: (mode: ViewMode) => void;
}

export default function ViewToggle({ viewMode, onToggle }: ViewToggleProps) {
  return (
    <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1" role="radiogroup" aria-label="Modo de vista">
      <button
        role="radio"
        aria-checked={viewMode === 'weekly'}
        onClick={() => onToggle('weekly')}
        className={`
          px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200
          ${viewMode === 'weekly'
            ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}
        `}
      >
        📅 Semanal
      </button>
      <button
        role="radio"
        aria-checked={viewMode === 'daily'}
        onClick={() => onToggle('daily')}
        className={`
          px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200
          ${viewMode === 'daily'
            ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}
        `}
      >
        📋 Diario
      </button>
    </div>
  );
}
