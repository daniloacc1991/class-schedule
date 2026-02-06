interface HeaderProps {
  gradeName: string;
  year: number;
}

export default function Header({ gradeName, year }: HeaderProps) {
  return (
    <header className="text-center py-6 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        Horario de Sofía
      </h1>
      <p className="mt-2 text-lg font-display text-gray-500 dark:text-gray-400">
        {gradeName} — {year}
      </p>
      <div className="mt-1 flex justify-center gap-2 text-2xl" aria-hidden="true">
        <span>✨</span>
        <span>📚</span>
        <span>🌟</span>
      </div>
    </header>
  );
}
