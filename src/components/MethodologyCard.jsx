import { Link } from 'react-router-dom';
import './MethodologyCard.css';

export function MethodologyCard({ methodology }) {
  const hasLessons = methodology.lessons && methodology.lessons.length > 0;

  return (
    <div className={`methodology-card ${!hasLessons ? 'coming-soon' : ''}`}>
      <div className="methodology-header">
        <div className="methodology-icon">{methodology.icon}</div>
        <div className="methodology-title-section">
          <h4>{methodology.name}</h4>
          {!hasLessons && <span className="coming-soon-badge">Coming Soon</span>}
        </div>
      </div>

      <p className="methodology-description">{methodology.description}</p>

      {hasLessons ? (
        <div className="methodology-lessons">
          <h5>Lecciones:</h5>
          <ul>
            {methodology.lessons.map((lesson, idx) => (
              <li key={idx}>
                <Link to={lesson.link} className="lesson-link">
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="methodology-topics">
          <h5>Temas a cubrir:</h5>
          <ul>
            {methodology.topics.map((topic, idx) => (
              <li key={idx}>
                <span className="topic-bullet">•</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!hasLessons && (
        <div className="methodology-footer">
          <p className="info-text">📚 Contenido en desarrollo</p>
        </div>
      )}
    </div>
  );
}
