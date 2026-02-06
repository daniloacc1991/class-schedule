import { getSubject } from '../data/subjects';
import type { ScheduleEntry } from '../data/types';

interface SpecialRowProps {
  entry: ScheduleEntry;
  colSpan?: number;
  isCurrent: boolean;
}

export default function SpecialRow({ entry, isCurrent }: SpecialRowProps) {
  const subject = getSubject(entry.subjectId);
  const isHome = entry.subjectId === 'go-home';
  const isClub = entry.subjectId === 'club-de-tareas' || entry.subjectId === 'clubes';

  return (
    <div
      className={`
        special-row ${subject.colorLight} ${subject.colorDark}
        ${isCurrent ? 'glow-current ring-2 ring-indigo-400 dark:ring-indigo-500' : ''}
        ${isClub ? 'border-dashed' : ''}
      `}
    >
      <span className="text-lg mr-2" aria-hidden="true">{subject.emoji}</span>
      <span className="font-display font-semibold">
        {subject.name}
      </span>
      {!isHome && (
        <span className="text-xs ml-2 opacity-60">
          {entry.time.start} - {entry.time.end}
        </span>
      )}
      {isHome && (
        <span className="text-xs ml-2 opacity-60">{entry.time.start}</span>
      )}
    </div>
  );
}
