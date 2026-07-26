import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { ModuleExpandable } from './ModuleExpandable';
import { CasesPracticalCard } from './CasesPracticalCard';
import { modulesWithLessons } from '../config/modulesConfig';
import { moduleCategories } from '../config/moduleCategories';
import './StackDominationSection.css';

// Mapeo de categoryId a landing route
const CATEGORY_LANDING_ROUTES = {
  backend: '/backend',
  frontend: '/frontend',
  datos: '/datos',
  versionamiento: '/control-versiones',
  containerizacion: '/cloud',
  herramientas: '/metodologias-herramientas'
};

/**
 * StackDominationSection - "Un stack para dominar el mundo"
 * Versión mejorada de ModulesSection con mejor visualización y messaging
 *
 * Props:
 *  - content (optional): Custom content configuration. If not provided, uses moduleCategories
 */
export function StackDominationSection({ content }) {
  // Usar content personalizado o moduleCategories por defecto
  const categories = content || moduleCategories;

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
          <h2>Un stack para dominar el mundo</h2>
          <p className="section-subtitle">
            Conquista todas las tecnologías que necesitas para dominar el mundo del desarrollo.
            <br />
            Desde Backend hasta Cloud, aquí está el stack completo.
          </p>
        </div>

        <div className="stack-grid">
          {categories.map((category) => (
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

              {/* Render módulos regulares */}
              {category.modules && category.modules.length > 0 && !category.projects && !category.subCategories && (
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
