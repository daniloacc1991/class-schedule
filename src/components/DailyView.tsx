import type { DayOfWeek, GradeSchedule } from '../data/types';
import { ALL_DAYS, DAY_LABELS } from '../data/schedules';
import ScheduleCell from './ScheduleCell';
import SpecialRow from './SpecialRow';
import { isCurrentSlot } from '../hooks/useCurrentPeriod';

interface DailyViewProps {
  schedule: GradeSchedule;
  selectedDay: DayOfWeek;
  onSelectDay: (day: DayOfWeek) => void;
  currentDay: DayOfWeek | null;
  currentTimeMinutes: number;
  subjectFilter: string | null;
  onCellClick: (subjectId: string, day: DayOfWeek, period: number) => void;
}

const DAY_EMOJIS: Record<string, string> = {
  monday: '🟣',
  tuesday: '🔵',
  wednesday: '🟢',
  thursday: '🟠',
  friday: '🔴',
};

export default function DailyView({
  schedule,
  selectedDay,
  onSelectDay,
  currentDay,
  currentTimeMinutes,
  subjectFilter,
  onCellClick,
}: DailyViewProps) {
  const daySchedule = schedule.days.find((d) => d.day === selectedDay);
  if (!daySchedule) return null;

  return (
    <div className="px-4 space-y-4">
      {/* Day selector pills */}
      <div className="flex justify-center gap-2 flex-wrap">
        {ALL_DAYS.map((day) => (
          <button
            key={day}
            onClick={() => onSelectDay(day)}
            className={`
              pill text-sm
              ${selectedDay === day
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-300 dark:shadow-purple-900 pill-active ring-purple-400'
                : currentDay === day
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                  : 'bg-white/70 text-gray-700 hover:bg-white dark:bg-gray-800/70 dark:text-gray-300 dark:hover:bg-gray-800'}
            `}
          >
            <span aria-hidden="true">{DAY_EMOJIS[day]}</span>
            {DAY_LABELS[day]}
          </button>
        ))}
      </div>

      {/* Entries */}
      <div className="max-w-lg mx-auto space-y-2">
        {daySchedule.entries.map((entry, idx) => {
          const isCurrent =
            currentDay === selectedDay &&
            isCurrentSlot(currentTimeMinutes, entry.time.start, entry.time.end);

          if (entry.type === 'special') {
            return (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 30}ms` }}>
                <SpecialRow entry={entry} isCurrent={isCurrent} />
              </div>
            );
          }

          const isDimmed = subjectFilter !== null && entry.subjectId !== subjectFilter;

          return (
            <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 30}ms` }}>
              <ScheduleCell
                entry={entry}
                day={selectedDay}
                isCurrent={isCurrent}
                isDimmed={isDimmed}
                onClick={() => onCellClick(entry.subjectId, selectedDay, entry.periodNumber ?? 0)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
