import { useState } from 'react';
import './Exercise.css';

export function Exercise({ title, description, difficulty, hint, solution }) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="exercise">
      <div className="exercise-header">
        <div>
          <h4>📝 {title}</h4>
        </div>
        <span className={`difficulty difficulty-${difficulty.toLowerCase()}`}>{difficulty}</span>
      </div>

      <div className="exercise-description">
        <p>{description}</p>
      </div>

      <div className="exercise-buttons">
        {hint && (
          <button
            className={`btn-exercise ${showHint ? 'active' : ''}`}
            onClick={() => setShowHint(!showHint)}
          >
            💡 {showHint ? 'Ocultar Pista' : 'Mostrar Pista'}
          </button>
        )}
        {solution && (
          <button
            className={`btn-exercise ${showSolution ? 'active' : ''}`}
            onClick={() => setShowSolution(!showSolution)}
          >
            ✅ {showSolution ? 'Ocultar Solución' : 'Ver Solución'}
          </button>
        )}
      </div>

      {showHint && hint && (
        <div className="exercise-hint">
          <strong>💡 Pista</strong>
          <p>{hint}</p>
        </div>
      )}

      {showSolution && solution && (
        <div className="exercise-solution">
          <strong>✅ Solución</strong>
          <pre>{solution}</pre>
        </div>
      )}
    </div>
  );
}
