import { ModuleExpandable } from './ModuleExpandable';
import { CasesPracticalCard } from './CasesPracticalCard';
import { MethodologyCard } from './MethodologyCard';
import { modulesWithLessons } from '../config/modulesConfig';
import { moduleCategories } from '../config/moduleCategories';
import './ModulesSection.css';

export function ModulesSection() {
  const getModulesByIds = (moduleIds) => {
    return moduleIds
      .map(id => modulesWithLessons.find(m => m.id === id))
      .filter(Boolean);
  };

  return (
    <section className="categories">
      <div className="container">
        <h2>Catálogo de Tecnologías</h2>
        <p className="section-subtitle">Agrupado por área de conocimiento</p>

        <div className="categories-grid">
          {moduleCategories.map((category) => (
            <div key={category.id} className="category-card" style={{ borderTopColor: category.color }}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

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
                    <MethodologyCard key={methodology.id} methodology={methodology} />
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
