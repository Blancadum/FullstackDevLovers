import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ModuleExpandable.css';

export function ModuleExpandable({ moduleId, title, description, icon, sections }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="module-expandable">
      <div className="module-header">
        <div className="module-icon-container">
          <div className="module-icon-circle">
            {icon && icon.includes && icon.includes('.') ? (
              <img src={icon} alt={title} className="module-logo" />
            ) : (
              icon
            )}
          </div>
        </div>

        <Link to={`/${moduleId}`} className="module-content">
          <div className="module-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>

        <button
          className="expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Colapsar' : 'Expandir'}
        >
          <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
            ▼
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className="lessons-list">
          {sections.map((section, idx) => (
            <Link
              key={idx}
              to={`/${moduleId}`}
              className="lesson-link"
            >
              <span className="lesson-number">{idx + 1}</span>
              <span className="lesson-title">{section.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
