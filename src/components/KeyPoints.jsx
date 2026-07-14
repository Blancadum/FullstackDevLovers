import './KeyPoints.css';

export function KeyPoints({ points }) {
  return (
    <div className="key-points">
      <h3>🔑 Puntos Clave</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>
            <span className="point-number">{index + 1}</span>
            <span className="point-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
