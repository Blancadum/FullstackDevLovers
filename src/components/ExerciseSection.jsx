import { CodeBlock } from './CodeBlock';
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
  return (
    <li className="exercise-item">
      <div className="exercise-header">
        <span className="exercise-number">Ejercicio {number}</span>
        <span className="exercise-title">{exercise.title}</span>
      </div>

      <div className="exercise-description">
        {typeof exercise.description === 'string' ? (
          <p>{exercise.description}</p>
        ) : (
          exercise.description
        )}
      </div>

      {exercise.solution && (
        <div className="exercise-solution">
          {typeof exercise.solution === 'string' ? (
            <CodeBlock language="bash" code={exercise.solution} />
          ) : (
            exercise.solution
          )}
        </div>
      )}
    </li>
  );
}
