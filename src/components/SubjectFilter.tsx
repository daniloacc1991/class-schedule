import { useState, useRef, useEffect } from 'react';
import { getSubject } from '../data/subjects';

interface SubjectFilterProps {
  subjectIds: string[];
  activeFilter: string | null;
  onFilter: (id: string | null) => void;
}

export default function SubjectFilter({ subjectIds, activeFilter, onFilter }: SubjectFilterProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const activeSubject = activeFilter ? getSubject(activeFilter) : null;

  return (
    <div ref={containerRef} className="relative px-4 flex justify-center">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold font-display
          transition-all duration-200
          ${activeFilter
            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 shadow-md'
            : 'bg-white/80 text-gray-700 hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'}
        `}
      >
        {activeSubject ? (
          <>
            <span aria-hidden="true">{activeSubject.emoji}</span>
            <span>{activeSubject.name}</span>
            <span
              role="button"
              aria-label="Limpiar filtro"
              onClick={(e) => {
                e.stopPropagation();
                onFilter(null);
                setOpen(false);
              }}
              className="ml-1 w-5 h-5 flex items-center justify-center rounded-full bg-purple-200 text-purple-700 hover:bg-purple-300 dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700 text-xs"
            >
              ✕
            </span>
          </>
        ) : (
          <>
            <span>Filtrar materia</span>
            <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full mt-2 w-64 max-h-72 overflow-y-auto rounded-xl border bg-white border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 z-50">
          {subjectIds.map((id) => {
            const subj = getSubject(id);
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                onClick={() => {
                  onFilter(isActive ? null : id);
                  setOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors
                  ${isActive
                    ? 'bg-purple-100 text-purple-800 font-semibold dark:bg-purple-900/50 dark:text-purple-200'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'}
                `}
              >
                <span aria-hidden="true" className="text-base">{subj.emoji}</span>
                <span className="flex flex-col">
                  <span>{subj.name}</span>
                  {subj.nameAlt && <span className="text-xs opacity-60">{subj.nameAlt}</span>}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
