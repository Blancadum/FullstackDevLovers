import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { CategorySectionsGrid } from '../components/CategorySectionsGrid';
import { moduleCategories } from '../config/moduleCategories';
import { modulesWithLessons } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';

export const LandingCloud = () => {
  const breadcrumbs = useBreadcrumb();
  const theme = getTheme('containerizacion');
  const category = moduleCategories.find(c => c.id === 'containerizacion');

  // Obtener módulos de la categoría Containerización
  const modules = category.modules
    .map(id => modulesWithLessons.find(m => m.id === id))
    .filter(Boolean);

  const categoryData = {
    ...category,
    modules: modules
  };

  return (
    <>
      <div className="lesson-header" style={{ paddingTop: '1rem', marginBottom: '2rem' }}>
        <h1>{category.name}</h1>
        <p className="lesson-intro">{category.description}</p>
      </div>

      <CategorySectionsGrid
        categoryData={categoryData}
        theme={theme}
      />
    </>
  );
};
