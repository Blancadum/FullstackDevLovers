/**
 * Componente reutilizable para mostrar ejercicios en lesson pages
 */
export const LessonExercises = ({ exercises = [], title = 'Ejercicios' }) => {
  if (!exercises || exercises.length === 0) return null;

  return (
    <div className="exercises-section">
      <h3>{title}</h3>
      {exercises.map((exercise, idx) => (
        <div key={idx} className="exercise-item">
          <h4>
            {idx + 1}. {exercise.title}
          </h4>
          {exercise.description && <p>{exercise.description}</p>}
          {exercise.solution && (
            <details className="exercise-solution">
              <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#3498db' }}>
                Ver Solución
              </summary>
              <div style={{ marginTop: '1rem' }}>
                {typeof exercise.solution === 'string' ? (
                  <p>{exercise.solution}</p>
                ) : (
                  exercise.solution
                )}
              </div>
            </details>
          )}
        </div>
      ))}
    </div>
  );
};
