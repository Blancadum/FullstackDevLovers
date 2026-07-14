import { useState } from 'react';
import { retosData } from '../data/retosData';
import './RetosSelector.css';

export function RetosSelector() {
  const [selectedRetoId, setSelectedRetoId] = useState(null);

  const selectedReto = selectedRetoId ? retosData.find(r => r.number === selectedRetoId) : null;

  return (
    <div className="retos-container">
      <div className="retos-selector">
        <label htmlFor="reto-dropdown" style={{ display: 'block', marginBottom: '12px', fontWeight: '600' }}>
          Selecciona un reto:
        </label>
        <select
          id="reto-dropdown"
          value={selectedRetoId || ''}
          onChange={(e) => setSelectedRetoId(e.target.value ? parseInt(e.target.value) : null)}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '10px 12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            backgroundColor: '#fff',
            cursor: 'pointer'
          }}
        >
          <option value="">-- Selecciona un reto --</option>
          {retosData.map(reto => (
            <option key={reto.number} value={reto.number}>
              🏋️ Reto {reto.number}: {reto.title}
            </option>
          ))}
        </select>
      </div>

      {selectedReto && (
        <div className="reto-content">
          <div className="reto-header">
            <h3 style={{ margin: '0 0 8px 0' }}>🏋️ Reto {selectedReto.number}: {selectedReto.title}</h3>
            <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>{selectedReto.description}</p>
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
            <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'system-ui', fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
              {selectedReto.solution}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
