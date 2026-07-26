import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MethodologyCard.css';

const METHODOLOGY_LOGOS = {
  'agile-scrum': '/src/assets/images/logos/procesos.png',
  'clean-code': '/src/assets/images/logos/procesos.png',
  'testing': '/src/assets/images/logos/procesos.png',
  'devops': '/src/assets/images/logos/aws.png'
};

export function MethodologyCard({ methodology, themeColor = '#9C27B0' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasLessons = methodology.lessons && methodology.lessons.length > 0;
  const logoSrc = METHODOLOGY_LOGOS[methodology.id];

  return (
    <div className={`methodology-card ${!hasLessons ? 'coming-soon' : ''}`}>
      <Link to={`/${methodology.id}`} className="methodology-header">
        <div className="methodology-icon">
          {logoSrc ? (
            <img src={logoSrc} alt={methodology.name} />
          ) : (
            <span>{methodology.icon}</span>
          )}
        </div>
        <div className="methodology-content">
          <h3>{methodology.name}</h3>
          <p>{methodology.description}</p>
        </div>
        {hasLessons && (
          <button
            className="expand-button"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            title={isExpanded ? 'Colapsar' : 'Expandir'}
          >
            <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
              ▼
            </span>
          </button>
        )}
      </Link>

      {isExpanded && hasLessons && (
        <div className="methodology-lessons">
          {methodology.lessons.map((lesson, idx) => (
            <Link
              key={idx}
              to={lesson.link}
              className="lesson-item"
              style={{ '--lesson-color': themeColor }}
            >
              <span className="lesson-number">{idx + 1}</span>
              <span className="lesson-title">{lesson.title}</span>
              <span className="lesson-chevron">▶</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
