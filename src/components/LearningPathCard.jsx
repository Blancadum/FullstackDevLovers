import { Link } from 'react-router-dom';
import './LearningPathCard.css';

/**
 * LearningPathCard - Ruta progresiva de aprendizaje con logos y niveles
 *
 * Props:
 * - title: Título de la sección
 * - description: Descripción general
 * - levels: Array de niveles
 *   - level: número o nombre del nivel (ej: "Nivel 1")
 *   - title: Título del nivel (ej: "Fundamentos")
 *   - technologies: Array de tecnologías con logo y link
 *     - id: identificador único
 *     - name: nombre de la tecnología
 *     - logo: URL del logo
 *     - color: color hex
 *     - link: enlace a la landing
 */
export function LearningPathCard({ title, description, levels = [] }) {
  return (
    <section className="learning-path-section">
      <div className="learning-path-container">
        <div className="learning-path-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="learning-path-levels">
          {levels.map((level, levelIdx) => (
            <div key={levelIdx} className="path-level">
              <div className="level-badge">
                <span className="level-label">{level.level}</span>
                <span className="level-title">{level.title}</span>
              </div>

              <div className="technologies-grid">
                {level.technologies.map((tech, techIdx) => (
                  <Link
                    key={techIdx}
                    to={tech.link || '#'}
                    className="tech-card"
                    style={{ '--tech-color': tech.color }}
                  >
                    <div className="tech-logo-container">
                      {tech.logo ? (
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="tech-logo"
                        />
                      ) : (
                        <span className="tech-icon">{tech.icon || '⚙️'}</span>
                      )}
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </Link>
                ))}
              </div>

              {levelIdx < levels.length - 1 && (
                <div className="level-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
