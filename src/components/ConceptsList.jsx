/**
 * DEPRECATED: Use LessonConceptGrid with variant="list" instead
 * This is now an alias to LessonConceptGrid for backward compatibility
 */
import { LessonConceptGrid } from './LessonConceptGrid';
import './ConceptsList.css';

export function ConceptsList({ concepts, themeColor = '#2196f3' }) {
  return <LessonConceptGrid concepts={concepts} variant="list" themeColor={themeColor} />;
}
