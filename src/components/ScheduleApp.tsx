import { useCallback, useEffect, useReducer, useState } from 'react';
import type { AppAction, AppState, DayOfWeek, GradeId, ViewMode } from '../data/types';
import { schedules, getSubjectsForGrade } from '../data/schedules';
import { useCurrentPeriod } from '../hooks/useCurrentPeriod';
import { useDarkMode } from '../hooks/useDarkMode';
import Header from './Header';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import WeeklyGrid from './WeeklyGrid';
import DailyView from './DailyView';
import MaterialModal from './MaterialModal';
import UniformBanner from './UniformBanner';

function getInitialDay(): DayOfWeek {
  const dayMap: Record<number, DayOfWeek> = {
    1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday',
  };
  return dayMap[new Date().getDay()] ?? 'monday';
}

const initialState: AppState = {
  selectedGrade: 'segundo-a',
  viewMode: 'weekly',
  selectedDay: getInitialDay(),
  subjectFilter: null,
  darkMode: false,
  modalSubjectId: null,
  modalDay: null,
  modalPeriod: null,
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_GRADE':
      return { ...state, selectedGrade: action.payload, subjectFilter: null };
    case 'SET_VIEW_MODE':
      return { ...state, viewMode: action.payload };
    case 'SET_SELECTED_DAY':
      return { ...state, selectedDay: action.payload };
    case 'SET_SUBJECT_FILTER':
      return { ...state, subjectFilter: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'OPEN_MODAL':
      return {
        ...state,
        modalSubjectId: action.payload.subjectId,
        modalDay: action.payload.day,
        modalPeriod: action.payload.period,
      };
    case 'CLOSE_MODAL':
      return { ...state, modalSubjectId: null, modalDay: null, modalPeriod: null };
    default:
      return state;
  }
}

export default function ScheduleApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { day: currentDay, currentTimeMinutes } = useCurrentPeriod();
  const { darkMode, toggle: toggleDarkMode } = useDarkMode();

  // Auto-switch to daily view on mobile
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && state.viewMode === 'weekly') {
        dispatch({ type: 'SET_VIEW_MODE', payload: 'daily' });
      }
    };
    handler(mq);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const schedule = schedules[state.selectedGrade];
  const subjectIds = getSubjectsForGrade(state.selectedGrade);

  const handleCellClick = useCallback((subjectId: string, day: DayOfWeek, period: number) => {
    dispatch({ type: 'OPEN_MODAL', payload: { subjectId, day, period } });
  }, []);

  if (!schedule) return null;

  return (
    <div className="min-h-screen pb-8">
      <Header
        gradeName={schedule.name}
        year={schedule.year}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        selectedGrade={state.selectedGrade}
        onSelectGrade={(id) => dispatch({ type: 'SET_GRADE', payload: id })}
        currentDay={currentDay}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="mt-2">
        <Toolbar
          viewMode={state.viewMode}
          onViewModeChange={(mode) => dispatch({ type: 'SET_VIEW_MODE', payload: mode })}
          subjectIds={subjectIds}
          activeFilter={state.subjectFilter}
          onFilter={(id) => dispatch({ type: 'SET_SUBJECT_FILTER', payload: id })}
        />
      </div>

      <UniformBanner gradeId={state.selectedGrade} currentDay={currentDay} />

      <div className="mt-4">
        {state.viewMode === 'weekly' ? (
          <WeeklyGrid
            schedule={schedule}
            currentDay={currentDay}
            currentTimeMinutes={currentTimeMinutes}
            subjectFilter={state.subjectFilter}
            onCellClick={handleCellClick}
          />
        ) : (
          <DailyView
            schedule={schedule}
            selectedDay={state.selectedDay}
            onSelectDay={(day) => dispatch({ type: 'SET_SELECTED_DAY', payload: day })}
            currentDay={currentDay}
            currentTimeMinutes={currentTimeMinutes}
            subjectFilter={state.subjectFilter}
            onCellClick={handleCellClick}
          />
        )}
      </div>

      {state.modalSubjectId && (
        <MaterialModal
          subjectId={state.modalSubjectId}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
}
