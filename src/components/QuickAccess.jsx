import { Link } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';
import { MODULE_LOGOS } from '../constants/logos';
import './QuickAccess.css';

export function QuickAccess() {
  const getLogoForModule = (moduleId) => {
    return MODULE_LOGOS[moduleId] || null;
  };

  return (
    <section className="quick-access">
      <div className="container">
        <div className="access-grid">
          {modulesWithLessons.map((module) => {
            const logoSrc = getLogoForModule(module.id);
            return (
              <Link
                key={module.id}
                to={`/${module.id}`}
                className="access-item"
                title={module.name}
              >
                <div className="access-icon">
                  {logoSrc ? (
                    <img src={logoSrc} alt={module.name} />
                  ) : (
                    <span>{module.icon}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
