import { getSubject } from '../data/subjects';
import type { DayOfWeek, ScheduleEntry } from '../data/types';

interface ScheduleCellProps {
  entry: ScheduleEntry;
  day: DayOfWeek;
  isCurrent: boolean;
  isDimmed: boolean;
  onClick: () => void;
}

export default function ScheduleCell({ entry, isCurrent, isDimmed, onClick }: ScheduleCellProps) {
  const subject = getSubject(entry.subjectId);

  return (
    <button
      onClick={onClick}
      aria-label={`${subject.name} — ${entry.time.start} a ${entry.time.end}. Clic para ver materiales.`}
      className={`
        schedule-cell text-left w-full border-2
        ${subject.colorLight} ${subject.colorDark}
        ${isCurrent ? 'glow-current ring-2 ring-indigo-400 dark:ring-indigo-500' : ''}
        ${isDimmed ? 'opacity-30 scale-[0.97]' : ''}
        ${!isDimmed ? 'hover:shadow-lg' : ''}
      `}
    >
      <div className="flex items-start gap-1.5">
        <span className="text-lg flex-shrink-0" aria-hidden="true">{subject.emoji}</span>
        <div className="min-w-0">
          <div className="font-semibold text-sm leading-tight truncate">{subject.name}</div>
          <div className="text-xs opacity-70 mt-0.5">
            {entry.time.start} - {entry.time.end}
          </div>
          {entry.requiresPEUniform && (
            <div className="text-xs mt-1 flex items-center gap-1">
              <span aria-hidden="true">👟</span>
              <span className="opacity-80">Uniforme deportes</span>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
