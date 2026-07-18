import { Link } from 'react-router-dom';
import './CasesPracticalCard.css';

export function CasesPracticalCard({ project }) {
  if (project.comingSoon) {
    return (
      <div className="case-practical-card coming-soon">
        <div className="case-header">
          <div className="case-icon">📋</div>
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
    <Link to={project.link} style={{ textDecoration: 'none' }}>
      <div className="case-practical-card">
        <div className="case-header">
          <div className="case-icon">🏆</div>
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
