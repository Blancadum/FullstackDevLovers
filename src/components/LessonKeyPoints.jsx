/**
 * Componente reutilizable para mostrar puntos clave en lesson pages
 */
export const LessonKeyPoints = ({ points = [], title = 'Puntos Clave' }) => {
  if (!points || points.length === 0) return null;

  return (
    <div className="key-points">
      <h3>{title}</h3>
      <ul>
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
