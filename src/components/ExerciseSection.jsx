import { useState } from 'react';
import './ExerciseSection.css';

export function ExerciseSection({ title, exercises = [] }) {
  return (
    <section className="exercise-section">
      <h3>{title}</h3>
      <ul className="exercises-list">
        {exercises.map((exercise, idx) => (
          <ExerciseItem key={idx} number={idx + 1} exercise={exercise} />
        ))}
      </ul>
    </section>
  );
}

function ExerciseItem({ number, exercise }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="exercise-item">
      <button
        className="exercise-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="exercise-number">Ejercicio {number}</span>
        <span className="exercise-title">{exercise.title}</span>
        <span className={`exercise-toggle ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <>
          <div className="exercise-description">
            <h4>Descripción</h4>
            {typeof exercise.description === 'string' ? (
              <p>{exercise.description}</p>
            ) : (
              exercise.description
            )}
          </div>

          {exercise.hint && (
            <details className="exercise-hint">
              <summary>Pista</summary>
              {typeof exercise.hint === 'string' ? (
                <p>{exercise.hint}</p>
              ) : (
                exercise.hint
              )}
            </details>
          )}

          {exercise.solution && (
            <details className="exercise-solution">
              <summary>Solución</summary>
              {typeof exercise.solution === 'string' ? (
                <pre className="solution-code"><code>{exercise.solution}</code></pre>
              ) : (
                exercise.solution
              )}
            </details>
          )}
        </>
      )}
    </li>
  );
}
