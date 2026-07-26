import { Link } from 'react-router-dom';
import './CasesPracticalCard.css';

const PROJECT_LOGOS = {
  'tfc-java': '/src/assets/images/logos/pringboot.png',
  'caso-practico-1': '/src/assets/images/logos/java-logo.png',
  'caso-practico-2': '/src/assets/images/logos/docker-lgo.png'};

export function CasesPracticalCard({ project }) {
  const logoSrc = PROJECT_LOGOS[project.id];

  if (project.comingSoon) {
    return (
      <div className="case-practical-card coming-soon">
        <div className="case-header">
          <div className="case-icon">
            {logoSrc ? (
              <img src={logoSrc} alt={project.name} />
            ) : (
              ''
            )}
          </div>
          <div className="case-title-section">
            <h4>{project.name}</h4>
            <span className="coming-soon-badge">Coming Soon</span>
          </div>
        </div>
        <p className="case-description">{project.description}</p>
        <div className="case-footer">
          <div className="case-tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="case-meta">
            <span className="difficulty">{project.difficulty}</span>
            <span className="time">⏱️ {project.estimatedTime}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={project.link} className="case-link">
      <div className="case-practical-card">
        <div className="case-header">
          <div className="case-icon">
            {logoSrc ? (
              <img src={logoSrc} alt={project.name} />
            ) : (
              ''
            )}
          </div>
          <div className="case-title-section">
            <h4>{project.name}</h4>
          </div>
        </div>
        <p className="case-description">{project.description}</p>
        <div className="case-footer">
          <div className="case-tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="case-meta">
            <span className="difficulty">{project.difficulty}</span>
            <span className="time">⏱️ {project.estimatedTime}</span>
          </div>
        </div>
        <div className="case-action">
          <span>Ver Proyecto →</span>
        </div>
      </div>
    </Link>
  );
}
