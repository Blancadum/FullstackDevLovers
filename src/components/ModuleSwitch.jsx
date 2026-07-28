import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { ModuleExpandable } from './ModuleExpandable';
import { CasesPracticalCard } from './CasesPracticalCard';
import { modulesWithLessons, getModule } from '../config/modulesConfig';
import { moduleCategories } from '../config/moduleCategories';
import './ModuleSwitch.css';

// Mapeo de categoryId a landing route
const CATEGORY_LANDING_ROUTES = {
  backend: '/backend',
  frontend: '/frontend',
  datos: '/datos',
  versionamiento: '/control-versiones',
  containerizacion: '/cloud',
  herramientas: '/metodologias'
};

/**
 * ModuleSwitch - Componente reutilizable para mostrar categorías/stacks de contenido
 * Flexible para usar en Home (todas las categorías), landings específicas, o páginas de módulos
 *
 * Props:
 *  - moduleSwitch (optional): Custom content configuration. If not provided, uses moduleCategories
 *  - moduleId (optional): Si se proporciona, muestra solo las secciones de ese módulo
 *  - title (optional): Custom title. Default: "Un stack para conquistar el mundo"
 *  - subtitle (optional): Custom subtitle. Default: Generic stack message
 */
export function ModuleSwitch({ moduleSwitch, moduleId, title, subtitle }) {
  // Si moduleId está proporcionado, mostrar secciones de ese módulo
  let categories;
  if (moduleId) {
    const module = getModule(moduleId);
    if (!module || !module.sections) {
      return null;
    }

    // Crear una categoría virtual con las secciones del módulo
    categories = [
      {
        id: moduleId,
        name: module.name,
        description: module.description,
        color: '#0066cc',
        modules: [moduleId],
        landingPage: module.landingPage,
        virtualSections: module.sections // Marcar como secciones virtuales
      }
    ];
  } else {
    // Usar moduleSwitch personalizado o moduleCategories por defecto
    categories = (moduleSwitch?.categories || moduleSwitch) || moduleCategories;
  }

  // Títulos por defecto si no se proporcionan
  const defaultTitle = "Un stack para conquistar el mundo";
  const defaultSubtitle = "Conquista todas las tecnologías que necesitas para conquistar el mundo del desarrollo. Desde Backend hasta Cloud, aquí está el stack completo.";

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  // Memoizar búsqueda de módulos para evitar O(n) en cada render
  const modulesMap = useMemo(() => {
    const map = new Map();
    modulesWithLessons.forEach(m => map.set(m.id, m));
    return map;
  }, []);

  const getModulesByIds = useMemo(() => {
    return (moduleIds) => {
      return moduleIds
        .map(id => modulesMap.get(id))
        .filter(Boolean);
    };
  }, [modulesMap]);

  const getCategoryLandingRoute = (categoryId) => {
    return CATEGORY_LANDING_ROUTES[categoryId] || '/';
  };

  return (
    <section className="stack-domination">
      <div className="container">
        <div className="stack-domination-header">
          <h2>{displayTitle}</h2>
          <p className="section-subtitle">
            {displaySubtitle.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx === 0 && displaySubtitle.includes('\n') && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="stack-grid">
          {categories.filter(cat => !cat.hidden).map((category) => (
            <div
              key={category.id}
              id={`stack-category-${category.id}`}
              className="stack-card"
              style={{ '--stack-color': category.color }}
            >
              <Link
                to={getCategoryLandingRoute(category.id)}
                className="stack-header-link"
              >
                <div className="stack-header">
                  <div className="stack-icon">
                    {category.logoSrc ? (
                      <img
                        src={category.logoSrc}
                        alt={category.name}
                        className={category.id === 'containerizacion' ? 'logo-kubernetes' : ''}
                      />
                    ) : (
                      category.icon
                    )}
                  </div>
                  <div className="stack-info">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              </Link>

              {/* Render secciones virtuales (cuando se muestra un módulo específico) */}
              {category.virtualSections && category.virtualSections.length > 0 && (
                <div className="stack-modules">
                  {category.virtualSections.map((section) => (
                    <div
                      key={section.id}
                      className="module-expandable"
                      style={{ '--theme-color': category.color }}
                    >
                      <Link
                        to={`${category.landingPage || `/${moduleId}`}/${section.id}`}
                        className="module-content"
                      >
                        <div className="module-text">
                          <h3>{section.fullName || section.name}</h3>
                          <p>{section.description}</p>
                        </div>
                      </Link>
                      <div className="lessons-list">
                        {section.lessons?.map((lesson, idx) => (
                          <Link
                            key={idx}
                            to={lesson.link}
                            className="lesson-link"
                          >
                            <span className="lesson-number">{idx + 1}</span>
                            <span className="lesson-title">{lesson.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Render módulos regulares */}
              {category.modules && category.modules.length > 0 && !category.projects && !category.subCategories && !category.virtualSections && (
                <div className="stack-modules">
                  {getModulesByIds(category.modules).map((module) => (
                    module?.sections ? (
                      <ModuleExpandable
                        key={module.id}
                        moduleId={module.id}
                        title={module.name}
                        description={module.description}
                        icon={module.icon}
                        sections={module.sections}
                        themeColor={category.color}
                        compact={true}
                        basePath={getCategoryLandingRoute(category.id)}
                      />
                    ) : null
                  ))}
                </div>
              )}

              {/* Render Casos Prácticos */}
              {category.projects && (
                <div className="stack-projects">
                  {category.projects.map((project) => (
                    <CasesPracticalCard key={project.id} project={project} />
                  ))}
                </div>
              )}

              {/* Render Metodologías */}
              {category.subCategories && (
                <div className="stack-methodologies">
                  {category.subCategories.map((methodology) => (
                    <ModuleExpandable
                      key={methodology.id}
                      moduleId={methodology.id}
                      title={methodology.name}
                      description={methodology.description}
                      icon={methodology.logoSrc}
                      sections={methodology.lessons ? methodology.lessons.map(lesson => ({ name: lesson.title, link: lesson.link })) : []}
                      themeColor={category.color}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
