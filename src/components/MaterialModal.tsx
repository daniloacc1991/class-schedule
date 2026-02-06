import { useEffect, useRef, useState } from 'react';
import { getSubject } from '../data/subjects';

interface MaterialModalProps {
  subjectId: string;
  onClose: () => void;
}

function getStorageKey(subjectId: string): string {
  return `materials-checked-${subjectId}`;
}

function getTodayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadChecked(subjectId: string): Record<number, boolean> {
  try {
    const raw = localStorage.getItem(getStorageKey(subjectId));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.date === getTodayStr()) {
        return parsed.items;
      }
      localStorage.removeItem(getStorageKey(subjectId));
    }
  } catch { /* ignore */ }
  return {};
}

function saveChecked(subjectId: string, checked: Record<number, boolean>) {
  localStorage.setItem(
    getStorageKey(subjectId),
    JSON.stringify({ date: getTodayStr(), items: checked }),
  );
}

export default function MaterialModal({ subjectId, onClose }: MaterialModalProps) {
  const subject = getSubject(subjectId);
  const [checked, setChecked] = useState(() => loadChecked(subjectId));
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      const focusable = el.querySelectorAll<HTMLElement>('button, [tabindex], input');
      if (focusable.length > 0) focusable[0].focus();
    }
  }, []);

  const toggleItem = (idx: number) => {
    setChecked((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      saveChecked(subjectId, next);
      return next;
    });
  };

  const allChecked = subject.materials.length > 0 && subject.materials.every((_, i) => checked[i]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="modal-backdrop animate-slide-up"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Materiales de ${subject.name}`}
        className="
          modal-content animate-bounce-in
          bottom-0 left-0 right-0 rounded-b-none max-h-[80vh]
          sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
          sm:rounded-2xl sm:max-w-md sm:w-full
        "
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b ${subject.colorLight} ${subject.colorDark}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{subject.emoji}</span>
              <div>
                <h2 className="text-xl font-display font-bold">{subject.name}</h2>
                {subject.nameAlt && (
                  <p className="text-sm opacity-60">{subject.nameAlt}</p>
                )}
                <p className="text-sm opacity-70">Materiales necesarios</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto max-h-[50vh] bg-white dark:bg-gray-800">
          {subject.materials.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              No se requieren materiales especiales ✨
            </p>
          ) : (
            <ul className="space-y-3">
              {subject.materials.map((mat, idx) => (
                <li key={idx}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={!!checked[idx]}
                      onChange={() => toggleItem(idx)}
                      className="sr-only peer"
                    />
                    <div className="w-6 h-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center transition-all peer-checked:bg-green-500 peer-checked:border-green-500 peer-focus:ring-2 peer-focus:ring-purple-400 group-hover:border-purple-400">
                      {checked[idx] && <span className="text-white text-sm">✓</span>}
                    </div>
                    <span className="text-lg" aria-hidden="true">{mat.emoji}</span>
                    <span className={`font-medium ${checked[idx] ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-200'}`}>
                      {mat.name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          )}

          {allChecked && subject.materials.length > 0 && (
            <div className="mt-4 text-center text-green-600 dark:text-green-400 font-display font-semibold animate-bounce-in">
              🎉 ¡Todo listo!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
