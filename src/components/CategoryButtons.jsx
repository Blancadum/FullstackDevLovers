import { Link } from 'react-router-dom';
import { moduleCategories } from '../config/moduleCategories';
import './CategoryButtons.css';

const categoryRoutes = {
  'backend': '/backend',
  'frontend': '/frontend',
  'datos': '/datos',
  'cloud': '/cloud',
  'versionamiento': '/control-versiones',
  'herramientas': '/metodologias-herramientas'
};

export function CategoryButtons() {
  // Filtrar solo categorías principales (no casos prácticos)
  const mainCategories = moduleCategories.filter(cat =>
    !['casos-practicos'].includes(cat.id)
  );

  return (
    <section className="category-buttons">
      <div className="container">
        <div className="buttons-grid">
          {mainCategories.map((category) => (
            <Link
              key={category.id}
              to={categoryRoutes[category.id] || '/'}
              className="category-btn"
              style={{ '--btn-color': category.color }}
              title={category.description}
            >
              {category.logoSrc ? (
                <img src={category.logoSrc} alt={category.name} className="btn-logo" />
              ) : (
                <span className="btn-icon">{category.icon}</span>
              )}
              <span className="btn-text">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
