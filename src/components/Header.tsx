interface HeaderProps {
  gradeName: string;
  year: number;
  onOpenSidebar: () => void;
}

export default function Header({ gradeName, year, onOpenSidebar }: HeaderProps) {
  return (
    <header className="text-center py-6 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        Horario de Sofía
      </h1>
      <button
        onClick={onOpenSidebar}
        aria-haspopup="dialog"
        aria-controls="sidebar-menu"
        aria-label={`Grado actual: ${gradeName}. Abrir menú de navegación`}
        className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-display font-semibold text-base hover:bg-purple-200 dark:hover:bg-purple-900/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        <span aria-hidden="true">📚</span>
        {gradeName} — {year}
        <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </header>
  );
}
