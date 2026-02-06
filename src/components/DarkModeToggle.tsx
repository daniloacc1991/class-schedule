interface DarkModeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ darkMode, onToggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <span
        className={`
          absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center text-sm
          ${darkMode ? 'left-7 bg-indigo-500' : 'left-1 bg-amber-400'}
        `}
      >
        {darkMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
