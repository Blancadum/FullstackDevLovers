import React from 'react';
import { ModuleExpandable } from './ModuleExpandable';
import { ConceptsTabbed } from './ConceptsTabbed';
import { ConceptsList } from './ConceptsList';
import { NavigationButtons } from './NavigationButtons';
import './LandingPageAccordion.css';

/**
 * Componente reutilizable para landing pages con acordeón expandible
 * Muestra las secciones como items expandibles con sus lecciones
 */
export const LandingPageAccordion = ({
  title,
  intro,
  sections,
  concepts,
  breadcrumbs,
  themeColor = '#2196f3',
  themeColorLight = '#e3f2fd',
  themeColorBorder = '2px solid #2196f3',
  navigationButtons,
  conceptsView = 'tabbed'
}) => {

  return (
    <div className="lesson-container">
        <div className="lesson-header">
          <h1>{title}</h1>
          <p className="lesson-intro">{intro}</p>
        </div>

        {/* Lecciones agrupadas por secciones */}
        <section className="lesson-section">
          {sections.map((section) => (
            <ModuleExpandable
              key={section.id}
              moduleId={section.id}
              title={section.name}
              description={section.description || ''}
              sections={section.lessons ? section.lessons.map(lesson => ({ name: lesson.title })) : []}
              themeColor={themeColor}
            />
          ))}
        </section>

        {/* Conceptos Clave (Opcional) */}
        {concepts && concepts.length > 0 && (
          <section className="lesson-section">
            <h2>Conceptos Clave</h2>
            {conceptsView === 'list' ? (
              <ConceptsList concepts={concepts} themeColor={themeColor} />
            ) : (
              <ConceptsTabbed concepts={concepts} themeColor={themeColor} />
            )}
          </section>
        )}

        {/* Botones de Navegación */}
        {navigationButtons && navigationButtons.length > 0 && (
          <section className="lesson-section">
            <NavigationButtons buttons={navigationButtons} />
          </section>
        )}
      </div>
  );
};
