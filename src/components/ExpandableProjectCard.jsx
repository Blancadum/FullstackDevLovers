import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import './ExpandableProjectCard.css';

export function ExpandableProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable-project-card">
      <button
        className={`project-header ${isExpanded ? 'active' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="toggle-icon">▼</span>
        <div className="project-header-content">
          <div className="project-title-section">
            <div className="project-titles">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
          </div>
          <div className="project-metadata">
            <span className="badge category">{project.category}</span>
            <span className="badge complexity">{project.complexity}</span>
            <span className="badge duration">{project.duration}</span>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="project-content">
          <div className="project-description">
            <p><strong>Descripción:</strong> {project.description}</p>
          </div>

          <CodeBlock
            language="text"
            code={project.content}
          />

          <div className="project-quick-info">
            <div className="info-item">
              <span className="label">Complejidad:</span>
              <span className="value">{project.complexity}</span>
            </div>
            <div className="info-item">
              <span className="label">Duración:</span>
              <span className="value">{project.duration}</span>
            </div>
            <div className="info-item">
              <span className="label">Equipo:</span>
              <span className="value">{project.teamSize}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
