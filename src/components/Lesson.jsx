import { Link } from 'react-router-dom';
import { AuthorHeader } from './index';
import { CodeBlock } from './CodeBlock';
import { HighlightBox } from './HighlightBox';
import { LessonSection } from './LessonSection';
import './Lesson.css';

export function Lesson({
  title,
  description,
  children,
  previousLesson,
  nextLesson,
  showAuthorHeader = true
}) {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>{title}</h1>
        {description && <p className="lesson-intro">{description}</p>}
      </div>

      {showAuthorHeader && <AuthorHeader />}

      <div className="lesson-content">{children}</div>

      <div className="lesson-navigation">
        {previousLesson ? (
          <Link to={previousLesson.link} className="btn btn-secondary">
            ← {previousLesson.label}
          </Link>
        ) : (
          <div></div>
        )}
        {nextLesson ? (
          <Link to={nextLesson.link} className="btn btn-primary">
            {nextLesson.label} →
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export { CodeBlock, HighlightBox, LessonSection };
