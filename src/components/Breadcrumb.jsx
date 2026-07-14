import { Link, useLocation } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';
import './Breadcrumb.css';

export function Breadcrumb({ items }) {
  const location = useLocation();

  // Si se proporcionan items, usarlos; si no, generar automáticamente
  const breadcrumbItems = items && items.length > 0
    ? items
    : generateBreadcrumbFromPath(location.pathname);

  // Mostrar breadcrumb solo si hay items y no está vacío
  if (!breadcrumbItems || breadcrumbItems.length === 0) {
    return (
      <nav className="breadcrumb" aria-label="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Genera breadcrumbs automáticamente desde la URL actual
 * Ejemplos:
 * /git → Git
 * /git/basicos/configuracion-inicial → Git > Configuración Inicial
 * /java-fundamentos → Java 1 - Fundamentos
 * /java-fundamentos/tipos-datos → Java 1 - Fundamentos > Tipos de Datos
 */
export function generateBreadcrumbFromPath(pathname) {
  const paths = pathname.split('/').filter(Boolean);

  if (paths.length === 0) {
    return [];
  }

  const breadcrumbs = [];

  // Siempre añadir Home como primer item
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
      link: null
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
        breadcrumbs.push({
          label: section.name,
          link: `/${moduleId}/${sectionId}`
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

export function generateBreadcrumbItems(pathname) {
  return generateBreadcrumbFromPath(pathname);
}
