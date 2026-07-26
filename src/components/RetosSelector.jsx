import { useState } from 'react';
import { retosData } from '../data/retosData';
import './RetosSelector.css';

export function RetosSelector() {
  const [selectedRetoId, setSelectedRetoId] = useState(null);

  const selectedReto = selectedRetoId ? retosData.find(r => r.number === selectedRetoId) : null;

  return (
    <div className="retos-container">
      <div className="retos-selector">
        <label htmlFor="reto-dropdown" className="retos-selector-label">
          Selecciona un reto:
        </label>
        <select
          id="reto-dropdown"
          value={selectedRetoId || ''}
          onChange={(e) => setSelectedRetoId(e.target.value ? parseInt(e.target.value) : null)}
          className="retos-selector-select"
        >
          <option value="">-- Selecciona un reto --</option>
          {retosData.map(reto => (
            <option key={reto.number} value={reto.number}>
              ️ Reto {reto.number}: {reto.title}
            </option>
          ))}
        </select>
      </div>

      {selectedReto && (
        <div className="reto-content">
          <div className="reto-header">
            <h3 className="reto-header-title">️ Reto {selectedReto.number}: {selectedReto.title}</h3>
            <p className="reto-header-description">{selectedReto.description}</p>
          </div>

          <div className="reto-info">
            <div className="info-badge">
              <span className="label">Plazo:</span>
              <span className="value">{selectedReto.deadline}</span>
            </div>
            <div className="info-badge">
              <span className="label">Puntos:</span>
              <span className="value">{selectedReto.points}</span>
            </div>
            <div className="info-badge">
              <span className="label">Tipo:</span>
              <span className="value">{selectedReto.duration}</span>
            </div>
          </div>

          <div className="reto-solution">
            <div className="reto-solution-text">
              {selectedReto.solution}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
