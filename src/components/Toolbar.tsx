import type { ViewMode } from '../data/types';
import ViewToggle from './ViewToggle';
import SubjectFilter from './SubjectFilter';

interface ToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  subjectIds: string[];
  activeFilter: string | null;
  onFilter: (id: string | null) => void;
}

export default function Toolbar({
  viewMode,
  onViewModeChange,
  subjectIds,
  activeFilter,
  onFilter,
}: ToolbarProps) {
  return (
    <div className="sticky top-0 z-30 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200/50 dark:border-gray-700/50 py-3 space-y-3">
      <div className="flex items-center justify-center px-4">
        <ViewToggle viewMode={viewMode} onToggle={onViewModeChange} />
      </div>
      <SubjectFilter subjectIds={subjectIds} activeFilter={activeFilter} onFilter={onFilter} />
    </div>
  );
}
