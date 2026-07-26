/**
 * DEPRECATED: Use LessonConceptGrid with variant="tabbed" instead
 * This is now an alias to LessonConceptGrid for backward compatibility
 */
import { LessonConceptGrid } from './LessonConceptGrid';
import './ConceptsTabbed.css';

export function ConceptsTabbed({ concepts, themeColor = '#2196f3' }) {
  return <LessonConceptGrid concepts={concepts} variant="tabbed" themeColor={themeColor} />;
}
