/**
 * DEPRECATED: Use LessonKeyPoints instead
 * This is now an alias to LessonKeyPoints for backward compatibility
 */
import { LessonKeyPoints } from './LessonKeyPoints';
import './KeyPoints.css';

export function KeyPoints({ points, title = 'Puntos Clave' }) {
  return <LessonKeyPoints points={points} title={title} />;
}
