import { useLocation } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';

/**
 * Hook para generar breadcrumbs automáticamente basado en la ruta actual
 * Uso: const breadcrumbs = useBreadcrumb();
 *
 * Ejemplos de salida:
 * /git → [{ label: 'Git', link: null }]
 * /git/basicos/configuracion-inicial →
 *   [
 *     { label: 'Git', link: '/git' },
 *     { label: 'Configuración inicial de Git', link: null }
 *   ]
 */
export function useBreadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const paths = pathname.split('/').filter(Boolean);

  if (paths.length === 0) {
    return [];
  }

  const breadcrumbs = [];

  // Agregar Home
  breadcrumbs.push({
    label: 'Home',
    link: '/'
  });

  const moduleId = paths[0];
  const module = modulesWithLessons.find(m => m.id === moduleId);

  if (!module) {
    return breadcrumbs;
  }

  // Caso 1: Solo módulo (/git)
  if (paths.length === 1) {
    breadcrumbs.push({
      label: module.name,
      link: null  // No hacer link, es la página actual
    });
    return breadcrumbs;
  }

  // Agregamos el módulo con enlace
  breadcrumbs.push({
    label: module.name,
    link: `/${moduleId}`
  });

  // Caso 2: Módulo + sección + lección (/git/avanzado/pull-requests)
  if (paths.length >= 2) {
    const sectionId = paths[1];
    let section = null;

    if (module.sections) {
      section = module.sections.find(s => s.id === sectionId);
    }

    if (section) {
      // Si hay una tercera parte (lección), agregamos la sección con enlace
      if (paths.length >= 3) {
        // Para módulos con sections (git, java), usar query params
        // Para otros módulos, usar ruta tradicional
        const sectionLink = module.sections
          ? `/${moduleId}?section=${sectionId}`
          : `/${moduleId}/${sectionId}`;

        breadcrumbs.push({
          label: section.name,
          link: sectionLink
        });

        // Buscamos la lección
        const lessonPath = `/${paths.join('/')}`;
        const lesson = section.lessons.find(l => l.link === lessonPath);

        if (lesson) {
          breadcrumbs.push({
            label: lesson.title,
            link: null
          });
        }
      } else {
        // Solo sección, sin enlace
        breadcrumbs.push({
          label: section.name,
          link: null
        });
      }
    }
  }

  return breadcrumbs;
}
