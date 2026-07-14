import './ConceptCard.css';

export function ConceptCard({ icon, title, definition, example }) {
  return (
    <div className="concept-card">
      <div className="concept-icon">{icon}</div>
      <h4>{title}</h4>
      <div className="concept-definition">
        <strong>Definición:</strong>
        <p>{definition}</p>
      </div>
      {example && (
        <div className="concept-example">
          <strong>Ejemplo:</strong>
          <p>{example}</p>
        </div>
      )}
    </div>
  );
}
