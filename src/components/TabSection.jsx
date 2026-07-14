import { useState } from 'react';
import './TabSection.css';

export function TabSection({ sections = [], tabs = [] }) {
  // Aceptar tanto 'sections' como 'tabs' como prop
  const itemsToUse = sections.length > 0 ? sections : tabs;

  if (itemsToUse.length === 0) {
    return null;
  }

  // Expandir el primer item por defecto
  const [expandedId, setExpandedId] = useState(itemsToUse[0]?.id || itemsToUse[0]?.label || 0);

  const toggleTimeline = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="timeline-section">
      {itemsToUse.map((item, idx) => {
        const itemId = item.id || item.label || idx;
        const isExpanded = expandedId === itemId;
        const isLast = idx === itemsToUse.length - 1;

        return (
          <div key={itemId} className="timeline-item">
            {/* Círculo numerado */}
            <div className="timeline-marker">
              <div className="timeline-number">{idx + 1}</div>
              {!isLast && <div className="timeline-line"></div>}
            </div>

            {/* Contenido */}
            <div className="timeline-content-wrapper">
              <button
                className={`timeline-header ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleTimeline(itemId)}
              >
                <span className="timeline-title">{item.title || item.label}</span>
                <span className="timeline-icon">▼</span>
              </button>

              {isExpanded && (
                <div className="timeline-content">
                  {item.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
