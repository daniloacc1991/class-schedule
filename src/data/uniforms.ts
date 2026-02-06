import type { GradeUniforms } from './types';

export const uniformsPrimeroB: GradeUniforms = {
  gradeId: 'primero-b',
  rules: [
    {
      day: 'monday',
      type: 'educacion-fisica',
      label: 'Uniforme de Deportes',
      description: 'Ed. Física hoy — Uniforme de deportes completo',
    },
    {
      day: 'tuesday',
      type: 'diario',
      label: 'Uniforme de Diario',
      description: 'Uniforme de diario',
    },
    {
      day: 'wednesday',
      type: 'diario',
      label: 'Uniforme de Diario',
      description: 'Uniforme de diario',
    },
    {
      day: 'thursday',
      type: 'educacion-fisica',
      label: 'Uniforme de Deportes',
      description: 'Danza hoy — Uniforme de deportes completo',
    },
    {
      day: 'friday',
      type: 'educacion-fisica-37',
      label: 'Uniforme Ed. Física + Camiseta 37',
      description: 'Sudadera de Ed. Física + camiseta con el número 37 (no polo)',
    },
  ],
  notes: [
    'Los días de Danza y Ed. Física: uniforme de deportes completo.',
    'Viernes: sudadera Ed. Física + camiseta #37 (no polo).',
    'La chaqueta institucional se puede usar con uniforme de diario en días fríos.',
    'Adornos de cabello: azul, blanco o rojo.',
  ],
};

export const uniformsSegundoA: GradeUniforms = {
  gradeId: 'segundo-a',
  rules: [
    {
      day: 'monday',
      type: 'diario',
      label: 'Uniforme de Diario',
      description: 'Uniforme de diario',
    },
    {
      day: 'tuesday',
      type: 'diario',
      label: 'Uniforme de Diario',
      description: 'Uniforme de diario',
    },
    {
      day: 'wednesday',
      type: 'educacion-fisica',
      label: 'Uniforme de Deportes',
      description: 'Danza hoy — Uniforme de educación física',
    },
    {
      day: 'thursday',
      type: 'diario',
      label: 'Uniforme de Diario',
      description: 'Uniforme de diario',
    },
    {
      day: 'friday',
      type: 'educacion-fisica-37',
      label: 'Uniforme Ed. Física + Camiseta 37',
      description: 'Sudadera de Ed. Física + camiseta con el número 37 (no polo)',
    },
  ],
  notes: [
    'Los días de Danza y Ed. Física: uniforme de deportes completo.',
    'Viernes: sudadera Ed. Física + camiseta #37 (no polo).',
    'La chaqueta institucional se puede usar con uniforme de diario en días fríos.',
    'Adornos de cabello: azul, blanco o rojo.',
  ],
};

export const uniforms: Record<string, GradeUniforms> = {
  'primero-b': uniformsPrimeroB,
  'segundo-a': uniformsSegundoA,
};
