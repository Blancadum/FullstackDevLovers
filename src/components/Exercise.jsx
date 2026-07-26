import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import './Exercise.css';

export function Exercise({ number, title, description, code, language = 'bash', solution, hint, difficulty }) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="exercise">
      <div className="exercise-header">
        {number && <span className="exercise-number">Ejercicio {number}</span>}
        <span className="exercise-title">{title}</span>
      </div>

      {description && (
        <div className="exercise-description">
          <p>{description}</p>
        </div>
      )}

      {hint && (
        <div>
          <button
            className="exercise-toggle-btn"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? 'Ocultar Pista' : 'Mostrar Pista'}
          </button>
          {showHint && (
            <div className="exercise-description exercise-hint">
              <p><strong>Pista:</strong> {hint}</p>
            </div>
          )}
        </div>
      )}

      {(code || solution) && (
        <div>
          <button
            className="exercise-toggle-btn"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? 'Ocultar Solución' : 'Mostrar Solución'}
          </button>
          {showSolution && (
            <div className="exercise-code">
              <CodeBlock language={language} code={code || solution} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
