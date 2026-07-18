import { CodeBlock } from './CodeBlock';
import './Exercise.css';

export function Exercise({ number, title, description, code, language = 'bash' }) {
  return (
    <div className="exercise">
      <div className="exercise-header">
        <span className="exercise-number">Ejercicio {number}</span>
        <span className="exercise-title">{title}</span>
      </div>

      {description && (
        <div className="exercise-description">
          <p>{description}</p>
        </div>
      )}

      {code && (
        <div className="exercise-code">
          <CodeBlock language={language} code={code} />
        </div>
      )}
    </div>
  );
}
