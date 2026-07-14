import { useState } from 'react';
import { LessonLayout, LessonSection, ConceptCard, Exercise, KeyPoints, Summary, PageAnchors, DynamicDictionary } from './index';

/**
 * LessonTemplate - Componente reutilizable para lecciones
 * Reduce duplicación en las 30+ lecciones existentes
 *
 * Uso:
 * <LessonTemplate
 *   title="Tipos de Datos"
 *   breadcrumbs={breadcrumbs}
 *   sections={[...]}
 *   concepts={[...]}
 *   exercises={[...]}
 *   keyPoints={[...]}
 *   glossary={[...]}  // Opcional: diccionario de términos
 * />
 */
export function LessonTemplate({
  title,
  breadcrumbs,
  sections = [],
  concepts = [],
  conceptsLabel = 'Conceptos',
  exercises = [],
  keyPoints = [],
  summary = '',
  glossary = []
}) {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Generar anclas disponibles
  const anchors = [];
  if (sections.length > 0) anchors.push({ label: 'Contenido', id: 'contenido' });
  if (concepts.length > 0) anchors.push({ label: conceptsLabel, id: 'conceptos' });
  if (exercises.length > 0) anchors.push({ label: 'Ejercicios', id: 'ejercicios' });

  return (
    <LessonLayout breadcrumbs={breadcrumbs} title={title}>
      {anchors.length > 0 && <PageAnchors anchors={anchors} />}
      {/* Render custom sections */}
      {sections.length > 0 && (
        <div id="contenido">
          {sections.map((section, index) => (
            <LessonSection
              key={index}
              id={section.id}
              title={section.title}
              description={section.description}
            >
              {Array.isArray(section.content) ? (
                <>
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {typeof item === 'string' ? (
                        <p dangerouslySetInnerHTML={{ __html: item }} />
                      ) : (
                        item
                      )}
                    </div>
                  ))}
                </>
              ) : (
                section.content
              )}
            </LessonSection>
          ))}
        </div>
      )}

      {/* Render concepts grid if provided */}
      {concepts.length > 0 && (
        <div id="conceptos" style={{ marginTop: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>{conceptsLabel}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {concepts.map((concept, index) => (
              typeof concept === 'string' ? (
                <div key={index} style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <p style={{ margin: 0, color: '#2c3e50', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: concept }} />
                </div>
              ) : (
                <ConceptCard key={index} {...concept} />
              )
            ))}
          </div>
        </div>
      )}

      {/* Render exercises if provided */}
      {exercises.length > 0 && (
        <div id="ejercicios" style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>Ejercicios</h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {exercises.map((exercise, index) => (
              <button
                key={index}
                onClick={() => setSelectedExercise(selectedExercise === index ? null : index)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: selectedExercise === index ? '2px solid #ff006e' : '2px solid #ddd',
                  backgroundColor: selectedExercise === index ? '#ff006e' : 'white',
                  color: selectedExercise === index ? 'white' : '#333',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedExercise !== index) {
                    e.target.style.borderColor = '#ff006e';
                    e.target.style.color = '#ff006e';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedExercise !== index) {
                    e.target.style.borderColor = '#ddd';
                    e.target.style.color = '#333';
                  }
                }}
              >
                {exercise.title}
              </button>
            ))}
          </div>

          {selectedExercise !== null && (
            <div style={{ marginTop: '1.5rem' }}>
              <Exercise
                title={exercises[selectedExercise].title}
                description={exercises[selectedExercise].description}
                difficulty={exercises[selectedExercise].difficulty || 'Intermedio'}
                hint={exercises[selectedExercise].hint}
                solution={exercises[selectedExercise].solution}
              />
            </div>
          )}
        </div>
      )}

      {/* Puntos Clave y Resumen deshabilitados - Usuario prefiere interfaz más limpia */}

      {/* Render glossary/dictionary if provided */}
      {glossary && glossary.length > 0 && (
        <div id="diccionario" style={{ marginTop: '4rem' }}>
          <DynamicDictionary terms={glossary} />
        </div>
      )}
    </LessonLayout>
  );
}
