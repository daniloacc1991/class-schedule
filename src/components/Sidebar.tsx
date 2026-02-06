import { useEffect, useRef } from 'react';
import type { DayOfWeek, GradeId } from '../data/types';
import { uniforms } from '../data/uniforms';
import DarkModeToggle from './DarkModeToggle';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedGrade: GradeId;
  onSelectGrade: (id: GradeId) => void;
  currentDay: DayOfWeek | null;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const grades: { id: GradeId; label: string; year: number; emoji: string }[] = [
  { id: 'primero-b', label: 'Primero B', year: 2025, emoji: '1️⃣' },
  { id: 'segundo-a', label: 'Segundo A', year: 2026, emoji: '2️⃣' },
];

const UNIFORM_EMOJI: Record<string, string> = {
  diario: '👔',
  'educacion-fisica': '🏃',
  'educacion-fisica-37': '👕',
};

export default function Sidebar({
  isOpen,
  onClose,
  selectedGrade,
  onSelectGrade,
  currentDay,
  darkMode,
  onToggleDarkMode,
}: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const firstFocusable = sidebarRef.current?.querySelector<HTMLElement>('button');
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusables = sidebarRef.current?.querySelectorAll<HTMLElement>(
          'button, [tabindex="0"], input',
        );
        if (!focusables || focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Uniform info for today
  const gradeUniforms = uniforms[selectedGrade];
  const todayRule = currentDay
    ? gradeUniforms?.rules.find((r) => r.day === currentDay)
    : null;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm backdrop-enter"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        id="sidebar-menu"
        className="fixed left-0 top-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl sidebar-enter flex flex-col"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-200"
          aria-label="Cerrar menú"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 flex flex-col flex-1 overflow-y-auto">
          {/* Branding */}
          <div>
            <h2 className="text-lg font-display font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Horario de Sofía ✨
            </h2>
          </div>

          {/* Grade selector */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Grado
            </p>
            <div className="mt-3 space-y-3">
              {grades.map((g) => {
                const isActive = selectedGrade === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => {
                      onSelectGrade(g.id);
                      setTimeout(onClose, 150);
                    }}
                    className={`
                      w-full rounded-xl p-4 text-left flex items-center gap-3
                      font-display font-semibold transition-all duration-200
                      ${isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/30 dark:shadow-purple-900/30 ring-2 ring-purple-400 ring-offset-2 dark:ring-offset-gray-900'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
                    `}
                  >
                    <span className="text-2xl" aria-hidden="true">{g.emoji}</span>
                    <div>
                      <div className="text-base">{g.label}</div>
                      <div className={`text-sm font-body font-normal ${isActive ? 'opacity-80' : 'text-gray-500 dark:text-gray-400'}`}>
                        {g.year}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Today's uniform */}
          {todayRule && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Hoy
              </p>
              <div className="mt-3 rounded-xl p-4 bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">{UNIFORM_EMOJI[todayRule.type] ?? '👔'}</span>
                  <div>
                    <div className="font-display font-semibold text-purple-700 dark:text-purple-300 text-sm">
                      {todayRule.label}
                    </div>
                    <div className="text-xs text-purple-600/70 dark:text-purple-400/70 mt-0.5">
                      {todayRule.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Dark mode toggle */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Modo oscuro
            </span>
            <DarkModeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />
          </div>
        </div>
      </aside>
    </>
  );
}
