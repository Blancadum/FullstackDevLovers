import { useState } from 'react';

/**
 * Grid reutilizable de conceptos para lesson pages
 * Soporta múltiples variantes: grid, list, tabbed, card
 *
 * @param {Array} concepts - Array de conceptos
 * @param {String} variant - 'grid' (default), 'list', 'tabbed', 'card'
 * @param {String} themeColor - Color de tema para variantes (default: '#2196f3')
 */
export const LessonConceptGrid = ({ concepts = [], variant = 'grid', themeColor = '#2196f3' }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!concepts || concepts.length === 0) return null;

  // Grid variant (default)
  if (variant === 'grid') {
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
  }

  // List variant (simple list with title: description format)
  if (variant === 'list') {
    return (
      <ul className="concepts-list" style={{ '--theme-color': themeColor }}>
        {concepts.map((concept, idx) => (
          <li key={idx}>
            <strong>{concept.title}:</strong> {concept.description || concept.definition}
          </li>
        ))}
      </ul>
    );
  }

  // Tabbed variant (tabs with descriptions)
  if (variant === 'tabbed') {
    return (
      <div className="concepts-tabbed" style={{ '--theme-color': themeColor }}>
        <div className="concepts-tabs">
          {concepts.map((concept, idx) => (
            <button
              key={idx}
              className={`concept-tab ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
              data-active={activeTab === idx}
            >
              {concept.title}
            </button>
          ))}
        </div>
        <div className="concept-content">
          <div className="concept-description">
            {concepts[activeTab]?.description || concepts[activeTab]?.definition}
          </div>
        </div>
      </div>
    );
  }

  // Card variant (individual cards with icon, definition, example)
  if (variant === 'card') {
    return (
      <div className="concept-cards">
        {concepts.map((concept, idx) => (
          <div key={idx} className="concept-card-detailed">
            {concept.icon && <div className="concept-icon">{concept.icon}</div>}
            <h4>{concept.title}</h4>
            <div className="concept-definition">
              <strong>Definición:</strong>
              <p>{concept.definition}</p>
            </div>
            {concept.example && (
              <div className="concept-example">
                <strong>Ejemplo:</strong>
                <p>{concept.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Default fallback
  return <div className="concept-grid">{/* grid variant */}</div>;
};
