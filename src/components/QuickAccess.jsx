import { Link } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';
import './QuickAccess.css';

export function QuickAccess() {
  return (
    <section className="quick-access">
      <div className="container">
        <div className="access-grid">
          {modulesWithLessons.map((module) => (
            <Link
              key={module.id}
              to={`/${module.id}`}
              className="access-item"
              title={module.name}
            >
              <div className="access-icon">
                {typeof module.icon === 'string' && module.icon.includes('.') ? (
                  <img src={module.icon} alt={module.name} />
                ) : (
                  <span>{module.icon}</span>
                )}
              </div>
              <p className="access-label">{module.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
