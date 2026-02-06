export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

export type GradeId = 'primero-b' | 'segundo-a';

export type ViewMode = 'weekly' | 'daily';

export interface TimeSlot {
  start: string;
  end: string;
}

export interface MaterialItem {
  name: string;
  emoji: string;
}

export interface SubjectDefinition {
  id: string;
  name: string;
  nameAlt?: string;
  emoji: string;
  colorLight: string;
  colorDark: string;
  materials: MaterialItem[];
}

export type ScheduleEntryType = 'class' | 'special';

export interface ScheduleEntry {
  type: ScheduleEntryType;
  subjectId: string;
  label: string;
  time: TimeSlot;
  periodNumber?: number;
  requiresPEUniform?: boolean;
  extraMaterials?: MaterialItem[];
}

export interface DaySchedule {
  day: DayOfWeek;
  entries: ScheduleEntry[];
}

export interface GradeSchedule {
  id: GradeId;
  name: string;
  year: number;
  days: DaySchedule[];
}

export interface UniformRule {
  day: DayOfWeek;
  type: 'diario' | 'educacion-fisica' | 'educacion-fisica-37';
  label: string;
  description: string;
}

export interface GradeUniforms {
  gradeId: GradeId;
  rules: UniformRule[];
  notes: string[];
}

export interface AppState {
  selectedGrade: GradeId;
  viewMode: ViewMode;
  selectedDay: DayOfWeek;
  subjectFilter: string | null;
  darkMode: boolean;
  modalSubjectId: string | null;
  modalDay: DayOfWeek | null;
  modalPeriod: number | null;
}

export type AppAction =
  | { type: 'SET_GRADE'; payload: GradeId }
  | { type: 'SET_VIEW_MODE'; payload: ViewMode }
  | { type: 'SET_SELECTED_DAY'; payload: DayOfWeek }
  | { type: 'SET_SUBJECT_FILTER'; payload: string | null }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'OPEN_MODAL'; payload: { subjectId: string; day: DayOfWeek; period: number } }
  | { type: 'CLOSE_MODAL' };
