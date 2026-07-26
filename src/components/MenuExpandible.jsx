import { useState } from 'react';
import { Link } from 'react-router-dom';
import { moduleCategories } from '../config/moduleCategories';
import { modulesWithLessons } from '../config/modulesConfig';
import './MenuExpandible.css';

/**
 * MenuExpandible - Menú desplegable con todas las categorías y links a landings
 *
 * Props:
 * - defaultOpen (string, optional): ID de categoría para abrir por defecto
 *
 * Estructura:
 * - Renderiza todas las categorías de moduleCategories
 * - Cada categoría es un botón expandible
 * - Dentro de cada categoría: lista de módulos/apartados con links a landings
 * - Click en apartado → Link a landing (ej: /backend/java, /datos/sql, etc)
 *
 * Estado: qué categoría está expandida (una a la vez)
 */
export function MenuExpandible({ defaultOpen = null }) {
  const [expandedCategory, setExpandedCategory] = useState(defaultOpen);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  /**
   * Obtiene el módulo por ID desde modulesWithLessons
   */
  const getModuleById = (moduleId) => {
    return modulesWithLessons.find((m) => m.id === moduleId);
  };

  /**
   * Construye el link a la landing page
   * Si el módulo tiene landingPage definida, usarla
   * Si no, construir ruta estándar basada en categoría/módulo
   */
  const getLandingLink = (module, categoryId) => {
    if (module && module.landingPage) {
      return module.landingPage;
    }
    // Fallback: /categoryId/moduleId
    return `/${categoryId}/${module?.id || ''}`;
  };

  return (
    <div id="menu" className="menu-expandible">
      <div className="menu-expandible-container">
        {moduleCategories.map((category) => {
          const isExpanded = expandedCategory === category.id;
          const categoryModules = (category.modules || [])
            .map((moduleId) => getModuleById(moduleId))
            .filter(Boolean);

          // Si la categoría tiene subCategorías, mostrar esas
          const hasSubCategories = category.subCategories && category.subCategories.length > 0;

          return (
            <div
              key={category.id}
              className="menu-category"
              style={{ '--category-color': category.color || '#999' }}
            >
              <button
                className={`menu-category-header ${isExpanded ? 'active' : ''}`}
                onClick={() => toggleCategory(category.id)}
              >
                <span className="menu-category-name">{category.name}</span>
                <span className="menu-category-icon">
                  {isExpanded ? '▼' : '▶'}
                </span>
              </button>

              {isExpanded && (
                <div className="menu-category-content">
                  {/* Módulos estándar */}
                  {categoryModules.length > 0 && (
                    <div className="menu-modules-list">
                      {categoryModules.map((module) => (
                        <Link
                          key={module.id}
                          to={getLandingLink(module, category.id)}
                          className="menu-module-link"
                        >
                          <span className="menu-module-name">{module.name}</span>
                          <span className="menu-module-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* SubCategorías (para Herramientas & Metodologías) */}
                  {hasSubCategories && (
                    <div className="menu-subcategories-list">
                      {category.subCategories.map((subCat) => (
                        <Link
                          key={subCat.id}
                          to={`/metodologias/${subCat.id}`}
                          className="menu-subcategory-link"
                        >
                          <span className="menu-subcategory-name">{subCat.name}</span>
                          <span className="menu-subcategory-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Proyectos (para Casos Prácticos) */}
                  {category.projects && category.projects.length > 0 && (
                    <div className="menu-projects-list">
                      {category.projects.map((project) => (
                        <Link
                          key={project.id}
                          to={project.link || '#'}
                          className={`menu-project-link ${project.comingSoon ? 'coming-soon' : ''}`}
                        >
                          <span className="menu-project-name">{project.name}</span>
                          {project.comingSoon && (
                            <span className="menu-badge">Próximamente</span>
                          )}
                          <span className="menu-project-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
