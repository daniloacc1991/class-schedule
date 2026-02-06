import { useEffect, useState } from 'react';
import type { DayOfWeek } from '../data/types';

const DAY_MAP: Record<number, DayOfWeek> = {
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
};

interface CurrentPeriod {
  day: DayOfWeek | null;
  currentTimeMinutes: number;
  isSchoolDay: boolean;
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function useCurrentPeriod(): CurrentPeriod {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const jsDay = now.getDay();
  const day = DAY_MAP[jsDay] ?? null;
  const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();
  const isSchoolDay = day !== null;

  return { day, currentTimeMinutes, isSchoolDay };
}

export function isCurrentSlot(
  currentTimeMinutes: number,
  slotStart: string,
  slotEnd: string,
): boolean {
  const start = timeToMinutes(slotStart);
  const end = timeToMinutes(slotEnd);
  return currentTimeMinutes >= start && currentTimeMinutes < end;
}
