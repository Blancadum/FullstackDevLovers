/**
 * DEPRECATED: Use LessonExercises instead
 * This is now an alias to LessonExercises for backward compatibility
 */
import { LessonExercises } from './LessonExercises';
import './ExerciseSection.css';

export function ExerciseSection({ title = 'Ejercicios', exercises = [] }) {
  return <LessonExercises exercises={exercises} title={title} />;
}
