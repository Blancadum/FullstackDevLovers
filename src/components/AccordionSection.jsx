import { useState } from 'react';
import './AccordionSection.css';

const ACCORDION_ICONS = {
  EXPANDED: '▼',
  COLLAPSED: '▶'
};

export function AccordionSection({ items }) {
  const [expanded, setExpanded] = useState(null);

  const toggleItem = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-item"
          style={{ '--item-color': item.color || '#0066cc' }}
        >
          <button
            className={`accordion-header ${expanded === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <span className="accordion-number">{index + 1}</span>
            <span className="accordion-title">{item.label}</span>
            <span className="accordion-icon">
              {item.icon || (expanded === index ? ACCORDION_ICONS.EXPANDED : ACCORDION_ICONS.COLLAPSED)}
            </span>
          </button>
          {expanded === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
