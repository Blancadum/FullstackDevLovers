import { Link } from 'react-router-dom';
import './LessonNavigation.css';

export function LessonNavigation({ previousLink, previousTitle, nextLink, nextTitle }) {
  return (
    <nav className="lesson-navigation">
      {previousLink ? (
        <Link to={previousLink} className="nav-button nav-previous">
          <span className="nav-arrow">←</span>
          <span className="nav-title">{previousTitle}</span>
        </Link>
      ) : (
        <div className="nav-button-placeholder" />
      )}

      {nextLink ? (
        <Link to={nextLink} className="nav-button nav-next">
          <span className="nav-title">{nextTitle}</span>
          <span className="nav-arrow">→</span>
        </Link>
      ) : (
        <div className="nav-button-placeholder" />
      )}
    </nav>
  );
}
