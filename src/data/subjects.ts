import type { SubjectDefinition } from './types';

export const subjects: Record<string, SubjectDefinition> = {
  english: {
    id: 'english',
    name: 'English',
    emoji: '🇬🇧',
    colorLight: 'bg-sky-200 text-sky-900 border-sky-400',
    colorDark: 'dark:bg-sky-900/40 dark:text-sky-200 dark:border-sky-700',
    materials: [
      { name: '2 Libros Power UP', emoji: '📚' },
      { name: 'Diccionario', emoji: '📖' },
      { name: 'Cuaderno', emoji: '📓' },
      { name: 'Audífonos', emoji: '🎧' },
    ],
  },
  'leng-castellana': {
    id: 'leng-castellana',
    name: 'Leng. Castellana',
    emoji: '📝',
    colorLight: 'bg-emerald-200 text-emerald-900 border-emerald-400',
    colorDark: 'dark:bg-emerald-900/40 dark:text-emerald-200 dark:border-emerald-700',
    materials: [
      { name: 'Libro Lenguaje', emoji: '📕' },
      { name: 'Cuaderno', emoji: '📓' },
    ],
  },
  matematicas: {
    id: 'matematicas',
    name: 'Matemáticas',
    emoji: '🔢',
    colorLight: 'bg-orange-200 text-orange-900 border-orange-400',
    colorDark: 'dark:bg-orange-900/40 dark:text-orange-200 dark:border-orange-700',
    materials: [
      { name: 'Libro Matemáticas', emoji: '📘' },
      { name: 'Cuaderno', emoji: '📓' },
    ],
  },
  geometry: {
    id: 'geometry',
    name: 'Geometry',
    emoji: '📐',
    colorLight: 'bg-amber-200 text-amber-900 border-amber-400',
    colorDark: 'dark:bg-amber-900/40 dark:text-amber-200 dark:border-amber-700',
    materials: [
      { name: 'Cuaderno', emoji: '📓' },
    ],
  },
  science: {
    id: 'science',
    name: 'Science',
    emoji: '🧪',
    colorLight: 'bg-teal-200 text-teal-900 border-teal-400',
    colorDark: 'dark:bg-teal-900/40 dark:text-teal-200 dark:border-teal-700',
    materials: [
      { name: 'Libro Science Workbook 2', emoji: '📗' },
      { name: 'Diccionario', emoji: '📖' },
      { name: 'Cuaderno', emoji: '📓' },
      { name: 'Bata', emoji: '🥼' },
    ],
  },
  'ciencias-naturales': {
    id: 'ciencias-naturales',
    name: 'Ciencias Naturales',
    emoji: '🌿',
    colorLight: 'bg-lime-200 text-lime-900 border-lime-400',
    colorDark: 'dark:bg-lime-900/40 dark:text-lime-200 dark:border-lime-700',
    materials: [
      { name: 'Cuaderno', emoji: '📓' },
      { name: 'Bata', emoji: '🥼' },
    ],
  },
  'ciencias-sociales': {
    id: 'ciencias-sociales',
    name: 'Ciencias Sociales',
    emoji: '🌍',
    colorLight: 'bg-yellow-200 text-yellow-900 border-yellow-400',
    colorDark: 'dark:bg-yellow-900/40 dark:text-yellow-200 dark:border-yellow-700',
    materials: [
      { name: 'Cuaderno', emoji: '📓' },
    ],
  },
  'social-studies': {
    id: 'social-studies',
    name: 'Social Studies',
    emoji: '🗺️',
    colorLight: 'bg-amber-200 text-amber-900 border-amber-400',
    colorDark: 'dark:bg-amber-900/40 dark:text-amber-200 dark:border-amber-700',
    materials: [
      { name: 'Cuaderno', emoji: '📓' },
      { name: 'Diccionario', emoji: '📖' },
    ],
  },
  conversation: {
    id: 'conversation',
    name: 'Conversation',
    emoji: '💬',
    colorLight: 'bg-indigo-200 text-indigo-900 border-indigo-400',
    colorDark: 'dark:bg-indigo-900/40 dark:text-indigo-200 dark:border-indigo-700',
    materials: [],
  },
  music: {
    id: 'music',
    name: 'Music',
    emoji: '🎵',
    colorLight: 'bg-pink-200 text-pink-900 border-pink-400',
    colorDark: 'dark:bg-pink-900/40 dark:text-pink-200 dark:border-pink-700',
    materials: [
      { name: 'Flauta', emoji: '🎶' },
      { name: 'Cuaderno', emoji: '📓' },
    ],
  },
  art: {
    id: 'art',
    name: 'Art',
    emoji: '🎨',
    colorLight: 'bg-rose-200 text-rose-900 border-rose-400',
    colorDark: 'dark:bg-rose-900/40 dark:text-rose-200 dark:border-rose-700',
    materials: [
      { name: 'Materiales por la plataforma', emoji: '🖌️' },
    ],
  },
  robotics: {
    id: 'robotics',
    name: 'Robotics I.C.T',
    emoji: '🤖',
    colorLight: 'bg-blue-200 text-blue-900 border-blue-400',
    colorDark: 'dark:bg-blue-900/40 dark:text-blue-200 dark:border-blue-700',
    materials: [],
  },
  'educacion-fisica': {
    id: 'educacion-fisica',
    name: 'Educación Física',
    emoji: '⚽',
    colorLight: 'bg-red-200 text-red-900 border-red-400',
    colorDark: 'dark:bg-red-900/40 dark:text-red-200 dark:border-red-700',
    materials: [
      { name: 'Uniforme de deportes completo', emoji: '👟' },
    ],
  },
  danza: {
    id: 'danza',
    name: 'Danza',
    emoji: '💃',
    colorLight: 'bg-fuchsia-200 text-fuchsia-900 border-fuchsia-400',
    colorDark: 'dark:bg-fuchsia-900/40 dark:text-fuchsia-200 dark:border-fuchsia-700',
    materials: [
      { name: 'Uniforme de educación física', emoji: '👟' },
    ],
  },
  etica: {
    id: 'etica',
    name: 'Ética',
    emoji: '⚖️',
    colorLight: 'bg-violet-200 text-violet-900 border-violet-400',
    colorDark: 'dark:bg-violet-900/40 dark:text-violet-200 dark:border-violet-700',
    materials: [
      { name: 'Libro Diseño Original', emoji: '📕' },
    ],
  },
  religion: {
    id: 'religion',
    name: 'Religión',
    emoji: '🙏',
    colorLight: 'bg-purple-200 text-purple-900 border-purple-400',
    colorDark: 'dark:bg-purple-900/40 dark:text-purple-200 dark:border-purple-700',
    materials: [],
  },
  'escritura-creativa': {
    id: 'escritura-creativa',
    name: 'Escritura Creativa',
    emoji: '✍️',
    colorLight: 'bg-cyan-200 text-cyan-900 border-cyan-400',
    colorDark: 'dark:bg-cyan-900/40 dark:text-cyan-200 dark:border-cyan-700',
    materials: [
      { name: 'Cuaderno', emoji: '📓' },
    ],
  },
  'lectura-critica': {
    id: 'lectura-critica',
    name: 'Lectura Crítica',
    emoji: '📖',
    colorLight: 'bg-stone-200 text-stone-900 border-stone-400',
    colorDark: 'dark:bg-stone-900/40 dark:text-stone-200 dark:border-stone-700',
    materials: [
      { name: '2 Libros Enlaces y Pruebas Saber', emoji: '📚' },
    ],
  },
  'lectura-critica-2': {
    id: 'lectura-critica-2',
    name: 'Lectura Crítica',
    emoji: '📖',
    colorLight: 'bg-stone-200 text-stone-900 border-stone-400',
    colorDark: 'dark:bg-stone-900/40 dark:text-stone-200 dark:border-stone-700',
    materials: [
      { name: 'Libro Magia de Leer', emoji: '📚' },
    ],
  },
  'pensamiento-creativo': {
    id: 'pensamiento-creativo',
    name: 'Pensamiento Creativo',
    emoji: '💡',
    colorLight: 'bg-yellow-200 text-yellow-900 border-yellow-400',
    colorDark: 'dark:bg-yellow-900/40 dark:text-yellow-200 dark:border-yellow-700',
    materials: [
      { name: 'Libro Divermat', emoji: '📘' },
    ],
  },
  // Special entries
  prayer: {
    id: 'prayer',
    name: 'Prayer / Brain Gym / Reading',
    emoji: '🙏',
    colorLight: 'bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 border-purple-300',
    colorDark: 'dark:bg-gradient-to-r dark:from-blue-950/30 dark:to-purple-950/30 dark:text-purple-300 dark:border-purple-800',
    materials: [
      { name: 'Agenda Escolar', emoji: '📅' },
      { name: 'Libro de Cuentos', emoji: '📖' },
    ],
  },
  break: {
    id: 'break',
    name: 'Break',
    emoji: '🎉',
    colorLight: 'bg-green-100 text-green-800 border-green-300',
    colorDark: 'dark:bg-green-950/30 dark:text-green-300 dark:border-green-800',
    materials: [],
  },
  'fruit-time': {
    id: 'fruit-time',
    name: 'Fruit Time',
    emoji: '🍎',
    colorLight: 'bg-red-100 text-red-700 border-red-300',
    colorDark: 'dark:bg-red-950/30 dark:text-red-300 dark:border-red-800',
    materials: [],
  },
  'go-home': {
    id: 'go-home',
    name: 'Go Home',
    emoji: '🏠',
    colorLight: 'bg-slate-100 text-slate-700 border-slate-300',
    colorDark: 'dark:bg-slate-800/30 dark:text-slate-300 dark:border-slate-700',
    materials: [],
  },
  'club-de-tareas': {
    id: 'club-de-tareas',
    name: 'Club de Tareas',
    emoji: '📚',
    colorLight: 'bg-gray-100 text-gray-700 border-gray-300',
    colorDark: 'dark:bg-gray-800/30 dark:text-gray-300 dark:border-gray-700',
    materials: [],
  },
  clubes: {
    id: 'clubes',
    name: 'Clubes',
    emoji: '🎯',
    colorLight: 'bg-gray-100 text-gray-700 border-gray-300',
    colorDark: 'dark:bg-gray-800/30 dark:text-gray-300 dark:border-gray-700',
    materials: [],
  },
};

export const classSubjectIds = Object.keys(subjects).filter(
  (id) => !['prayer', 'break', 'fruit-time', 'go-home', 'club-de-tareas', 'clubes'].includes(id)
);

export function getSubject(id: string): SubjectDefinition {
  return subjects[id] ?? {
    id,
    name: id,
    emoji: '📋',
    colorLight: 'bg-gray-200 text-gray-800 border-gray-400',
    colorDark: 'dark:bg-gray-800/40 dark:text-gray-200 dark:border-gray-700',
    materials: [],
  };
}
