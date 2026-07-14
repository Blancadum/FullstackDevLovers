import { useState } from 'react';
import './ViabilityChecklist.css';

export function ViabilityChecklist() {
  const [activeCriteria, setActiveCriteria] = useState(0);

  const criteria = [
    {
      id: 0,
      title: 'Scope Manageable',
      questions: [
        '¿Se puede hacer en 5-6 meses?',
        '¿No requiere tecnologías completamente nuevas (AI/Blockchain)?',
        '¿La BD es normalizable sin complejidad extrema?'
      ]
    },
    {
      id: 1,
      title: 'Funcionalidades Suficientes',
      questions: [
        'Mínimo 3 EPICS (autenticación, catálogo, transacción)',
        'Mínimo 8-10 User Stories totales',
        'Mínimo 5 tablas en BD',
        'APIs REST con 10+ endpoints'
      ]
    },
    {
      id: 2,
      title: 'Diferenciador Claro',
      questions: [
        '¿Qué hace ÚNICO tu proyecto vs JoMa?',
        '¿Incluye integración con API externa?',
        '¿Tiene recomendaciones inteligentes o algo de gamificación?'
      ]
    },
    {
      id: 3,
      title: 'Equipo Alineado (Crítico)',
      questions: [
        '¿Todos los miembros quieren realmente hacer este proyecto?',
        '¿Todos entienden el dominio y el contexto?',
        '¿Hay repartición clara (frontend/backend)?',
        '¿Todos pueden dedicar 20+ horas/semana?'
      ]
    },
    {
      id: 4,
      title: 'Herramientas Disponibles',
      questions: [
        '¿Hay servidor donde deployar? (AWS, Heroku, Google Cloud, etc)',
        '¿BD SQL disponible? (MySQL, PostgreSQL)',
        '¿APIs externas que pueda usar?'
      ]
    }
  ];

  const currentCriteria = criteria[activeCriteria];

  return (
    <div className="viability-checklist">
      <div className="viability-tabs">
        {criteria.map((criterion) => (
          <button
            key={criterion.id}
            className={`viability-tab ${activeCriteria === criterion.id ? 'active' : ''}`}
            onClick={() => setActiveCriteria(criterion.id)}
          >
            {criterion.title}
          </button>
        ))}
      </div>

      <div className="viability-content">
        <h3 className="viability-title">{currentCriteria.title}</h3>

        <ul className="viability-items">
          {currentCriteria.questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
