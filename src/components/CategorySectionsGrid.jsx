import { Link } from 'react-router-dom';
import { moduleCategories } from '../config/moduleCategories';
import './CategorySectionsGrid.css';

export function CategorySectionsGrid({ sections, categoryId }) {
  // Obtener color de la categoría desde moduleCategories
  const category = moduleCategories.find(cat => cat.id === categoryId);
  const defaultColor = category?.color || '#4ECDC4';

  return (
    <div className="category-sections-container">
      <div className="sections-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="section-card"
            style={{ borderTopColor: section.color || defaultColor }}
          >
            <div className="card-header">
              <div className="card-icon">{section.icon}</div>
              <div className="card-info">
                <h3>{section.fullName || section.name}</h3>
                <p>{section.description}</p>
              </div>
            </div>

            <div className="card-lessons">
              <ul>
                {section.lessons?.map((lesson, idx) => (
                  <li key={idx}>
                    <Link to={lesson.link} className="lesson-link">
                      {lesson.icon && <span className="lesson-icon">{lesson.icon}</span>}
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-footer">
              <span className="lesson-count">
                {section.lessons?.length || 0} lección{section.lessons?.length !== 1 ? 'es' : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
