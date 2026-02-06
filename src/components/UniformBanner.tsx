import type { DayOfWeek, GradeId } from '../data/types';
import { uniforms } from '../data/uniforms';

interface UniformBannerProps {
  gradeId: GradeId;
  currentDay: DayOfWeek | null;
}

const UNIFORM_EMOJI: Record<string, string> = {
  'diario': '👔',
  'educacion-fisica': '🏃',
  'educacion-fisica-37': '👕',
};

export default function UniformBanner({ gradeId, currentDay }: UniformBannerProps) {
  if (!currentDay) return null;

  const gradeUniforms = uniforms[gradeId];
  if (!gradeUniforms) return null;

  const todayRule = gradeUniforms.rules.find((r) => r.day === currentDay);
  if (!todayRule) return null;

  const emoji = UNIFORM_EMOJI[todayRule.type] ?? '👔';

  return (
    <div className="mx-4 mt-4 mb-2 rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/30 p-3 text-center">
      <span className="text-2xl mr-2" aria-hidden="true">{emoji}</span>
      <span className="font-display font-semibold text-purple-700 dark:text-purple-300">
        Hoy: {todayRule.label}
      </span>
      <p className="text-sm text-purple-600/70 dark:text-purple-400/70 mt-1">
        {todayRule.description}
      </p>
    </div>
  );
}
