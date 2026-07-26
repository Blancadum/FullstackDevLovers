/**
 * Grid reutilizable de conceptos para lesson pages
 * Acepta array de conceptos y los renderiza en cards
 */
export const LessonConceptGrid = ({ concepts = [] }) => {
  if (!concepts || concepts.length === 0) return null;

  return (
    <div className="concept-grid">
      {concepts.map((concept, idx) => (
        <div key={idx} className="concept-card">
          <h4>{concept.title}</h4>
          {concept.definition && <p>{concept.definition}</p>}
          {concept.example && (
            <div style={{ marginTop: '0.8rem', fontSize: '0.9rem', color: '#7f8c8d' }}>
              <strong>Ejemplo:</strong> {concept.example}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
