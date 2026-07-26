import { useState } from 'react';
import DOMPurify from 'dompurify';
import { LessonLayout, LessonSection, ConceptCard, Exercise, KeyPoints, Summary, PageAnchors, DynamicDictionary, LessonSidebar } from './index';
import './LessonTemplate.css';

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
  glossary = [],
  moduleSections = [],
  themeColor = '#0066cc'
}) {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Generar título automático si no se proporciona
  const finalTitle = title || (sections.length > 0 ? sections[0].title : 'Lección');

  // Generar anclas disponibles
  const anchors = [];
  if (sections.length > 0) anchors.push({ label: 'Contenido', id: 'contenido' });
  if (concepts.length > 0) anchors.push({ label: conceptsLabel, id: 'conceptos' });
  if (exercises.length > 0) anchors.push({ label: 'Ejercicios', id: 'ejercicios' });

  return (
    <LessonLayout breadcrumbs={breadcrumbs} title={finalTitle}>
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
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
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
        <div id="conceptos" className="concepts-section">
          <h2 className="concepts-title">{conceptsLabel}</h2>
          <div className="concepts-grid">
            {concepts.map((concept, index) => (
              typeof concept === 'string' ? (
                <div key={index} className="concept-item">
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(concept) }} />
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
        <div id="ejercicios" className="exercises-section">
          <h2 className="exercises-title">Ejercicios</h2>

          <div className="exercise-buttons-container">
            {exercises.map((exercise, index) => (
              <button
                key={index}
                onClick={() => setSelectedExercise(selectedExercise === index ? null : index)}
                className={`exercise-button ${selectedExercise === index ? 'active' : ''}`}
              >
                {exercise.title}
              </button>
            ))}
          </div>

          {selectedExercise !== null && (
            <div className="exercise-content">
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

      {/* Render key points if provided */}
      {keyPoints.length > 0 && (
        <div id="puntos-clave">
          <KeyPoints keyPoints={keyPoints} />
        </div>
      )}

      {/* Render summary if provided */}
      {summary && (
        <div id="resumen">
          <Summary summary={summary} />
        </div>
      )}

      {/* Render glossary/dictionary if provided */}
      {glossary && glossary.length > 0 && (
        <div id="diccionario" className="glossary-section">
          <DynamicDictionary terms={glossary} />
        </div>
      )}
    </LessonLayout>
  );
}
