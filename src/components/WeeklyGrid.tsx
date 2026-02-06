import type { DayOfWeek, DaySchedule, GradeSchedule, ScheduleEntry } from '../data/types';
import { ALL_DAYS, DAY_LABELS } from '../data/schedules';
import ScheduleCell from './ScheduleCell';
import SpecialRow from './SpecialRow';
import { isCurrentSlot } from '../hooks/useCurrentPeriod';

interface WeeklyGridProps {
  schedule: GradeSchedule;
  currentDay: DayOfWeek | null;
  currentTimeMinutes: number;
  subjectFilter: string | null;
  onCellClick: (subjectId: string, day: DayOfWeek, period: number) => void;
}

interface TimeRow {
  time: string;
  type: 'class' | 'special';
  entries: Map<DayOfWeek, ScheduleEntry>;
}

function buildTimeRows(schedule: GradeSchedule): TimeRow[] {
  // Build unified rows from all days. Use the first day's entry order as template.
  const refDay = schedule.days[0];
  if (!refDay) return [];

  const rows: TimeRow[] = [];
  const dayMap = new Map<DayOfWeek, DaySchedule>();
  for (const d of schedule.days) {
    dayMap.set(d.day, d);
  }

  for (let i = 0; i < refDay.entries.length; i++) {
    const refEntry = refDay.entries[i];
    const entries = new Map<DayOfWeek, ScheduleEntry>();

    for (const day of ALL_DAYS) {
      const ds = dayMap.get(day);
      if (ds && ds.entries[i]) {
        entries.set(day, ds.entries[i]);
      }
    }

    rows.push({
      time: `${refEntry.time.start} - ${refEntry.time.end}`,
      type: refEntry.type,
      entries,
    });
  }

  return rows;
}

const DAY_EMOJIS: Record<string, string> = {
  monday: '🟣',
  tuesday: '🔵',
  wednesday: '🟢',
  thursday: '🟠',
  friday: '🔴',
};

export default function WeeklyGrid({
  schedule,
  currentDay,
  currentTimeMinutes,
  subjectFilter,
  onCellClick,
}: WeeklyGridProps) {
  const rows = buildTimeRows(schedule);

  return (
    <div className="overflow-x-auto px-2 sm:px-4">
      <div className="min-w-[700px]">
        {/* Header */}
        <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-2 mb-2">
          <div className="text-xs font-display font-semibold text-gray-500 dark:text-gray-500 text-center py-2">
            Hora
          </div>
          {ALL_DAYS.map((day) => (
            <div
              key={day}
              className={`
                text-center py-2 rounded-xl font-display font-semibold text-sm
                ${currentDay === day
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                  : 'text-gray-700 dark:text-gray-400'}
              `}
            >
              <span className="mr-1" aria-hidden="true">{DAY_EMOJIS[day]}</span>
              {DAY_LABELS[day]}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, rowIdx) => {
          const refEntry = row.entries.get('monday') ?? row.entries.values().next().value;
          if (!refEntry) return null;

          // Special row spans all columns
          if (row.type === 'special') {
            const isCurrent =
              currentDay !== null &&
              isCurrentSlot(currentTimeMinutes, refEntry.time.start, refEntry.time.end);

            return (
              <div key={rowIdx} className="grid grid-cols-[80px_1fr] gap-2 mb-2">
                <div className="text-xs text-gray-400 dark:text-gray-500 text-center flex items-center justify-center">
                  {refEntry.time.start === refEntry.time.end ? refEntry.time.start : `${refEntry.time.start}`}
                </div>
                <SpecialRow entry={refEntry} isCurrent={isCurrent} />
              </div>
            );
          }

          // Class row — one cell per day
          return (
            <div key={rowIdx} className="grid grid-cols-[80px_repeat(5,1fr)] gap-2 mb-2">
              <div className="text-xs text-gray-400 dark:text-gray-500 text-center flex flex-col items-center justify-center leading-tight">
                <span>{refEntry.time.start}</span>
                <span className="text-[10px]">—</span>
                <span>{refEntry.time.end}</span>
              </div>
              {ALL_DAYS.map((day) => {
                const entry = row.entries.get(day);
                if (!entry) return <div key={day} />;

                const isCurrent =
                  currentDay === day &&
                  isCurrentSlot(currentTimeMinutes, entry.time.start, entry.time.end);

                const isDimmed = subjectFilter !== null && entry.subjectId !== subjectFilter;

                return (
                  <ScheduleCell
                    key={day}
                    entry={entry}
                    day={day}
                    isCurrent={isCurrent}
                    isDimmed={isDimmed}
                    onClick={() => onCellClick(entry.subjectId, day, entry.periodNumber ?? 0)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
