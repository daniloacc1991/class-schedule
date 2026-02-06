import type { GradeSchedule, ScheduleEntry, DaySchedule } from './types';

function cls(
  subjectId: string,
  start: string,
  end: string,
  period: number,
  pe = false,
): ScheduleEntry {
  return {
    type: 'class',
    subjectId,
    label: '',
    time: { start, end },
    periodNumber: period,
    requiresPEUniform: pe,
  };
}

function special(subjectId: string, start: string, end: string): ScheduleEntry {
  return {
    type: 'special',
    subjectId,
    label: '',
    time: { start, end },
  };
}

const PRAYER = (s = '06:15', e = '06:45') => special('prayer', s, e);
const BREAK = (s = '08:15', e = '08:40') => special('break', s, e);
const FRUIT = (s = '10:55', e = '11:15') => special('fruit-time', s, e);
const HOME = (s = '13:30', e = '13:30') => special('go-home', s, e);
const CLUB = (s = '14:00', e = '17:00') => special('club-de-tareas', s, e);
const CLUBES = (s = '14:00', e = '17:00') => special('clubes', s, e);

// ─── PRIMERO B (2025) ───────────────────────────────────────────────────────

const primeroMonday: DaySchedule = {
  day: 'monday',
  entries: [
    PRAYER(),
    cls('english', '06:45', '07:30', 1),
    cls('english', '07:30', '08:15', 2),
    BREAK(),
    cls('educacion-fisica', '08:40', '09:25', 3, true),
    cls('educacion-fisica', '09:25', '10:10', 4, true),
    cls('pensamiento-creativo', '10:10', '10:55', 5),
    FRUIT(),
    cls('science', '11:15', '12:00', 6),
    cls('science', '12:00', '12:45', 7),
    cls('escritura-creativa', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const primeroTuesday: DaySchedule = {
  day: 'tuesday',
  entries: [
    PRAYER(),
    cls('leng-castellana', '06:45', '07:30', 1),
    cls('leng-castellana', '07:30', '08:15', 2),
    BREAK(),
    cls('english', '08:40', '09:25', 3),
    cls('ciencias-naturales', '09:25', '10:10', 4),
    cls('ciencias-naturales', '10:10', '10:55', 5),
    FRUIT(),
    cls('ciencias-sociales', '11:15', '12:00', 6),
    cls('ciencias-sociales', '12:00', '12:45', 7),
    cls('lectura-critica', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const primeroWednesday: DaySchedule = {
  day: 'wednesday',
  entries: [
    PRAYER(),
    cls('english', '06:45', '07:30', 1),
    cls('english', '07:30', '08:15', 2),
    BREAK(),
    cls('matematicas', '08:40', '09:25', 3),
    cls('matematicas', '09:25', '10:10', 4),
    cls('science', '10:10', '10:55', 5),
    FRUIT(),
    cls('etica', '11:15', '12:00', 6),
    cls('social-studies', '12:00', '12:45', 7),
    cls('social-studies', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const primeroThursday: DaySchedule = {
  day: 'thursday',
  entries: [
    PRAYER(),
    cls('danza', '06:45', '07:30', 1, true),
    cls('conversation', '07:30', '08:15', 2),
    BREAK(),
    cls('leng-castellana', '08:40', '09:25', 3),
    cls('leng-castellana', '09:25', '10:10', 4),
    cls('music', '10:10', '10:55', 5),
    FRUIT(),
    cls('english', '11:15', '12:00', 6),
    cls('english', '12:00', '12:45', 7),
    cls('religion', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const primeroFriday: DaySchedule = {
  day: 'friday',
  entries: [
    PRAYER(),
    cls('matematicas', '06:45', '07:30', 1),
    cls('matematicas', '07:30', '08:15', 2),
    BREAK(),
    cls('geometry', '08:40', '09:25', 3),
    cls('social-studies', '09:25', '10:10', 4),
    cls('english', '10:10', '10:55', 5),
    FRUIT(),
    cls('art', '11:15', '12:00', 6),
    cls('robotics', '12:00', '12:45', 7),
    cls('robotics', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

// ─── SEGUNDO A (2026) ───────────────────────────────────────────────────────

const segundoMonday: DaySchedule = {
  day: 'monday',
  entries: [
    PRAYER(),
    cls('ciencias-sociales', '06:45', '07:30', 1),
    cls('ciencias-sociales', '07:30', '08:15', 2),
    BREAK(),
    cls('english', '08:40', '09:25', 3),
    cls('english', '09:25', '10:10', 4),
    cls('art', '10:10', '10:55', 5),
    FRUIT(),
    cls('leng-castellana', '11:15', '12:00', 6),
    cls('leng-castellana', '12:00', '12:45', 7),
    cls('conversation', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const segundoTuesday: DaySchedule = {
  day: 'tuesday',
  entries: [
    PRAYER(),
    cls('matematicas', '06:45', '07:30', 1),
    cls('matematicas', '07:30', '08:15', 2),
    BREAK(),
    cls('lectura-critica-2', '08:40', '09:25', 3),
    cls('english', '09:25', '10:10', 4),
    cls('english', '10:10', '10:55', 5),
    FRUIT(),
    cls('religion', '11:15', '12:00', 6),
    cls('science', '12:00', '12:45', 7),
    cls('science', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const segundoWednesday: DaySchedule = {
  day: 'wednesday',
  entries: [
    PRAYER(),
    cls('leng-castellana', '06:45', '07:30', 1),
    cls('leng-castellana', '07:30', '08:15', 2),
    BREAK(),
    cls('robotics', '08:40', '09:25', 3),
    cls('robotics', '09:25', '10:10', 4),
    cls('social-studies', '10:10', '10:55', 5),
    FRUIT(),
    cls('danza', '11:15', '12:00', 6, true),
    cls('english', '12:00', '12:45', 7),
    cls('english', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const segundoThursday: DaySchedule = {
  day: 'thursday',
  entries: [
    PRAYER(),
    cls('english', '06:45', '07:30', 1),
    cls('english', '07:30', '08:15', 2),
    BREAK(),
    cls('ciencias-naturales', '08:40', '09:25', 3),
    cls('ciencias-naturales', '09:25', '10:10', 4),
    cls('music', '10:10', '10:55', 5),
    FRUIT(),
    cls('matematicas', '11:15', '12:00', 6),
    cls('matematicas', '12:00', '12:45', 7),
    cls('science', '12:45', '13:30', 8),
    HOME(),
    CLUB(),
  ],
};

const segundoFriday: DaySchedule = {
  day: 'friday',
  entries: [
    PRAYER(),
    cls('social-studies', '06:45', '07:30', 1),
    cls('social-studies', '07:30', '08:15', 2),
    BREAK(),
    cls('educacion-fisica', '08:40', '09:25', 3, true),
    cls('educacion-fisica', '09:25', '10:10', 4, true),
    cls('pensamiento-creativo', '10:10', '10:55', 5),
    FRUIT(),
    cls('etica', '11:15', '12:00', 6),
    cls('escritura-creativa', '12:00', '12:45', 7),
    cls('geometry', '12:45', '13:30', 8),
    HOME(),
    CLUBES(),
  ],
};

// ─── Exports ────────────────────────────────────────────────────────────────

export const primeroB: GradeSchedule = {
  id: 'primero-b',
  name: 'Primero B',
  year: 2025,
  days: [primeroMonday, primeroTuesday, primeroWednesday, primeroThursday, primeroFriday],
};

export const segundoA: GradeSchedule = {
  id: 'segundo-a',
  name: 'Segundo A',
  year: 2026,
  days: [segundoMonday, segundoTuesday, segundoWednesday, segundoThursday, segundoFriday],
};

export const schedules: Record<string, GradeSchedule> = {
  'primero-b': primeroB,
  'segundo-a': segundoA,
};

export const ALL_DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'] as const;

export const DAY_LABELS: Record<string, string> = {
  monday: 'Lunes',
  tuesday: 'Martes',
  wednesday: 'Miércoles',
  thursday: 'Jueves',
  friday: 'Viernes',
};

export const DAY_LABELS_SHORT: Record<string, string> = {
  monday: 'Lun',
  tuesday: 'Mar',
  wednesday: 'Mié',
  thursday: 'Jue',
  friday: 'Vie',
};

export function getSubjectsForGrade(gradeId: string): string[] {
  const grade = schedules[gradeId];
  if (!grade) return [];
  const ids = new Set<string>();
  for (const day of grade.days) {
    for (const entry of day.entries) {
      if (entry.type === 'class') {
        ids.add(entry.subjectId);
      }
    }
  }
  return Array.from(ids);
}
