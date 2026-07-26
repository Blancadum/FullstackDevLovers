import React from 'react';
import './ConceptsList.css';

export function ConceptsList({ concepts, themeColor = '#2196f3' }) {
  if (!concepts || concepts.length === 0) {
    return null;
  }

  return (
    <ul className="concepts-list" style={{ '--theme-color': themeColor }}>
      {concepts.map((concept, idx) => (
        <li key={idx}>
          <strong>{concept.title}:</strong> {concept.description}
        </li>
      ))}
    </ul>
  );
}
