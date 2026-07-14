import { LessonLayout, ConceptCard, Exercise, KeyPoints } from './index';

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LessonLayout breadcrumbs={breadcrumbs} title={title}>
        {/* Concept cards grid si existen */}
        {conceptCards.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {conceptCards.map((card, idx) => (
              <ConceptCard key={idx} {...card} />
            ))}
          </div>
        )}

        {/* Contenido personalizado */}
        {children}

        {/* Ejercicios si existen */}
        {exercises.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <Exercise exercises={exercises} />
          </div>
        )}

        {/* Key points */}
        {keyPoints.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <KeyPoints points={keyPoints} />
          </div>
        )}
      </LessonLayout>
    </div>
  );
}
