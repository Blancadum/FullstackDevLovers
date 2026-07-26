import './KeyPoints.css';

export function KeyPoints({ points }) {
  return (
    <div className="key-points-container">
      <h3 className="key-points-title">Puntos Clave</h3>
      <ul className="key-points-list">
        {points.map((point, index) => (
          <li key={index} className="key-points-item">
            <span className="key-points-number">{index + 1}</span>
            <span className="key-points-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
