import { LessonLayout, ConceptCard, Exercise, KeyPoints } from './index';
import './NarrativeLessonTemplate.css';

/**
 * NarrativeLessonTemplate - Componente reutilizable para lecciones narrativas
 * Optimizado para lecciones con contenido detallado (IDEs, herramientas, etc.)
 *
 * Uso:
 * <NarrativeLessonTemplate
 *   title="Eclipse"
 *   breadcrumbs={breadcrumbs}
 *   conceptCards={[...]}
 *   children={<>Contenido JSX...</>}
 *   exercises={[...]}
 *   keyPoints={[...]}
 * />
 */
export function NarrativeLessonTemplate({
  title,
  breadcrumbs,
  conceptCards = [],
  exercises = [],
  keyPoints = [],
  children
}) {
  return (
    <div className="narrative-lesson-wrapper">
      <LessonLayout breadcrumbs={breadcrumbs} title={title}>
        {/* Concept cards grid si existen */}
        {conceptCards.length > 0 && (
          <div className="narrative-concept-cards">
            {conceptCards.map((card, idx) => (
              <ConceptCard key={idx} {...card} />
            ))}
          </div>
        )}

        {/* Contenido personalizado */}
        {children}

        {/* Ejercicios si existen */}
        {exercises.length > 0 && (
          <div className="narrative-exercises">
            <Exercise exercises={exercises} />
          </div>
        )}

        {/* Key points */}
        {keyPoints.length > 0 && (
          <div className="narrative-keypoints">
            <KeyPoints points={keyPoints} />
          </div>
        )}
      </LessonLayout>
    </div>
  );
}
