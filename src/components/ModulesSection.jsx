import { Link } from 'react-router-dom';
import { ModuleExpandable } from './ModuleExpandable';
import { CasesPracticalCard } from './CasesPracticalCard';
import { modulesWithLessons } from '../config/modulesConfig';
import { moduleCategories } from '../config/moduleCategories';
import './ModulesSection.css';

// Mapeo de categoryId a landing route
const CATEGORY_LANDING_ROUTES = {
  backend: '/backend',
  frontend: '/frontend',
  datos: '/datos',
  versionamiento: '/control-versiones',
  containerizacion: '/cloud',
  herramientas: '/metodologias-herramientas'
};

export function ModulesSection() {
  const getModulesByIds = (moduleIds) => {
    return moduleIds
      .map(id => modulesWithLessons.find(m => m.id === id))
      .filter(Boolean);
  };

  const getCategoryLandingRoute = (categoryId) => {
    return CATEGORY_LANDING_ROUTES[categoryId] || '/';
  };

  return (
    <section className="categories">
      <div className="container">
        <h2>Catálogo de Tecnologías</h2>
        <p className="section-subtitle">Agrupado por área de conocimiento</p>

        <div className="categories-grid">
          {moduleCategories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="category-card"
              style={{ '--category-color': category.color }}
            >
              <Link
                to={getCategoryLandingRoute(category.id)}
                className="category-header-link"
              >
                <div className="category-header">
                  <div className="category-icon">
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
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              </Link>

              {/* Render módulos regulares */}
              {category.modules && category.modules.length > 0 && !category.projects && !category.subCategories && (
                <div className="category-modules">
                  {getModulesByIds(category.modules).map((module) => (
                    module.sections ? (
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
                <div className="category-projects">
                  {category.projects.map((project) => (
                    <CasesPracticalCard key={project.id} project={project} />
                  ))}
                </div>
              )}

              {/* Render Metodologías */}
              {category.subCategories && (
                <div className="category-methodologies">
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
