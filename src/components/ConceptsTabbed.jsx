import React, { useState } from 'react';
import './ConceptsTabbed.css';

export function ConceptsTabbed({ concepts, themeColor = '#2196f3' }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!concepts || concepts.length === 0) {
    return null;
  }

  return (
    <div className="concepts-tabbed" style={{ '--theme-color': themeColor }}>
      {/* Pestañas */}
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

      {/* Contenido de la pestaña activa */}
      <div className="concept-content">
        <div className="concept-description">
          {concepts[activeTab].description}
        </div>
      </div>
    </div>
  );
}
