import { useState } from 'react';
import './DropdownSection.css';

export function DropdownSection({ sections }) {
  const [selectedId, setSelectedId] = useState(sections[0]?.id || null);

  const selectedSection = sections.find(s => s.id === selectedId);

  return (
    <div className="dropdown-section">
      <div className="dropdown-selector">
        <label htmlFor="section-select">Selecciona un tema:</label>
        <select
          id="section-select"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="dropdown-select"
        >
          {sections.map(section => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-content">
        <h4>{selectedSection?.title}</h4>
        {selectedSection?.content}
      </div>
    </div>
  );
}
