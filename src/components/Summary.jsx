/**
 * DEPRECATED: Use LessonSummary instead
 * This is now an alias to LessonSummary for backward compatibility
 */
import { LessonSummary } from './LessonSummary';
import './Summary.css';

export function Summary({ title, content, children }) {
  // Support both 'title' and 'summary' props for backward compatibility
  const summaryText = content || children;
  return <LessonSummary summary={summaryText} title={title || 'Resumen'} />;
}
