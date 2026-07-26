import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LessonLayout } from './LessonLayout';
import { AccordionSection } from './AccordionSection';
import { ConceptsTabbed } from './ConceptsTabbed';
import { NavigationButtons } from './NavigationButtons';

export const MethodologyPage = ({ methodology, concepts, navigationButtons, themeColor, themeColorLight }) => {
  // Memoize accordion items to prevent unnecessary re-renders
  const lessonItems = useMemo(
    () => methodology.lessons?.map((lesson) => ({
      label: lesson.title,
      content: (
        <Link to={lesson.link} style={{ color: themeColor, textDecoration: 'none' }}>
          {lesson.title}
        </Link>
      ),
      color: themeColor
    })) || [],
    [methodology.lessons, themeColor]
  );

  return (
    <LessonLayout breadcrumbs={[]} title={methodology.name}>
      {/* Descripción */}
      <section className="lesson-section">
        <p className="lesson-intro">{methodology.description}</p>
      </section>

      {/* Tópicos */}
      {methodology.topics && methodology.topics.length > 0 && (
        <section className="lesson-section">
          <h2>Tópicos Principales</h2>
          <ul className="topics-list">
            {methodology.topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Conceptos */}
      {concepts && concepts.length > 0 && (
        <section className="lesson-section">
          <h2>Conceptos Clave</h2>
          <ConceptsTabbed
            concepts={concepts}
            themeColor={themeColor}
          />
        </section>
      )}

      {/* Lecciones */}
      {methodology.lessons && methodology.lessons.length > 0 && (
        <section className="lesson-section">
          <h2>Lecciones</h2>
          <AccordionSection items={lessonItems} />
        </section>
      )}

      {/* Botones de navegación */}
      {navigationButtons && navigationButtons.length > 0 && (
        <section className="lesson-section">
          <NavigationButtons buttons={navigationButtons} />
        </section>
      )}
    </LessonLayout>
  );
};
