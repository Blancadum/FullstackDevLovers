import { useState } from 'react';
import './TimelineTabbed.css';

export function TimelineTabbed() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: 'Fase 0',
      subtitle: 'Semana 1-2: Planning',
      color: '#6366f1',
      items: [
        'Elegir proyecto del catálogo',
        'Formar equipo y definir roles',
        'Crear documento de especificación',
        'Diseñar BD (ER diagram)',
        'Listar funcionalidades (EPICs + User Stories)'
      ]
    },
    {
      id: 1,
      title: 'Fase 1',
      subtitle: 'Semana 3-6: Sprint 1 - Fundación',
      color: '#3b82f6',
      items: [
        'Setup: Java Spring Boot + React + MySQL',
        'Implementar autenticación (login/registro)',
        'Crear catálogo básico de productos/contenido',
        'UI responsive en ambos dispositivos',
        'Entregable: Usuarios pueden navegar y loguearse'
      ]
    },
    {
      id: 2,
      title: 'Fase 2',
      subtitle: 'Semana 7-11: Sprint 2 - Funcionalidad Core',
      color: '#0ea5e9',
      items: [
        'Implementar carrito/compra (si aplica)',
        'APIs REST completamente funcionales',
        'Búsqueda y filtrados avanzados',
        'Admin panel básico',
        'Entregable: Flujo de compra/principal completo funciona'
      ]
    },
    {
      id: 3,
      title: 'Fase 3',
      subtitle: 'Semana 12-19: Sprint 3 - Diferenciador + Pulido',
      color: '#10b981',
      items: [
        'Integración API externa (tu diferenciador)',
        'Recomendaciones, algoritmos o analytics',
        'Tests (unitarios e integración)',
        'Documentación completa',
        'Deploy a cloud',
        'Entregable: Proyecto en vivo, funcionando y documentado'
      ]
    },
    {
      id: 4,
      title: 'Fase 4',
      subtitle: 'Semana 20-24: Finales',
      color: '#f59e0b',
      items: [
        'Videos demostrativos (2-3 min cada uno)',
        'Memoria TFC (20-40 páginas)',
        'Presentación ejecutiva (15-20 minutos)',
        'Code review final y fixes de bugs'
      ]
    }
  ];

  const currentPhase = phases[activePhase];

  return (
    <div className="timeline-tabbed">
      <div className="timeline-tabs">
        {phases.map((phase) => (
          <button
            key={phase.id}
            className={`timeline-tab ${activePhase === phase.id ? 'active' : ''}`}
            onClick={() => setActivePhase(phase.id)}
            style={{
              borderBottomColor: activePhase === phase.id ? phase.color : 'transparent'
            }}
          >
            <div className="tab-label">{phase.title}</div>
            <div className="tab-weeks">{phase.subtitle.split(':')[0]}</div>
          </button>
        ))}
      </div>

      <div className="timeline-content">
        <div
          className="timeline-header"
          style={{ borderLeftColor: currentPhase.color }}
        >
          <h3 className="timeline-title">{currentPhase.title}</h3>
          <p className="timeline-subtitle">{currentPhase.subtitle}</p>
        </div>

        <ul className="timeline-items">
          {currentPhase.items.map((item, index) => (
            <li key={index} className="timeline-item">
              <span
                className="timeline-bullet"
                style={{ backgroundColor: currentPhase.color }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
