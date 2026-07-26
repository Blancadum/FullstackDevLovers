import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { moduleCategories } from '../config/moduleCategories';
import { getTheme } from '../config/themeColors';
import { ModuleExpandable } from '../components/ModuleExpandable';
import './Home.css';

export const LandingHerramientasMetodologias = () => {
  const breadcrumbs = useBreadcrumb();
  const theme = getTheme('herramientas');
  const category = moduleCategories.find(c => c.id === 'herramientas');

  return (
    <>
      <div className="lesson-header" style={{ paddingTop: '1rem', marginBottom: '2rem' }}>
        <h1>{category.name}</h1>
        <p className="lesson-intro">{category.description}</p>
      </div>

      {/* Metodologías */}
      {category.subCategories && (
        <section className="lesson-section" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Metodologías</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {category.subCategories.map((methodology) => (
              <ModuleExpandable
                key={methodology.id}
                moduleId={methodology.id}
                title={methodology.name}
                description={methodology.description || ''}
                sections={methodology.lessons ? methodology.lessons.map(lesson => ({ name: lesson.title })) : []}
                themeColor={theme.primary}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
