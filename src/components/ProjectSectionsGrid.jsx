import { Link } from 'react-router-dom';
import './ProjectSectionsGrid.css';

export function ProjectSectionsGrid({ sections, moduleId = 'proyecto' }) {
  return (
    <div className="project-sections-container">
      <div className="project-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="project-section-card"
            style={{ borderTopColor: section.color || '#4ECDC4' }}
          >
            <div className="section-header">
              <div className="section-icon">{section.icon}</div>
              <div className="section-info">
                <h3>{section.fullName || section.name}</h3>
                <p>{section.description}</p>
              </div>
            </div>

            <div className="section-lessons">
              <ul>
                {section.lessons.map((lesson, idx) => (
                  <li key={idx}>
                    <Link to={lesson.link} className="lesson-link">
                      {lesson.icon && <span className="lesson-icon">{lesson.icon}</span>}
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-footer">
              <span className="lesson-count">
                {section.lessons.length} lección{section.lessons.length !== 1 ? 'es' : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
