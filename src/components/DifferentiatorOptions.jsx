import { useState } from 'react';
import './DifferentiatorOptions.css';

export function DifferentiatorOptions() {
  const [activeOption, setActiveOption] = useState(0);

  const options = [
    {
      id: 0,
      title: 'Integración con APIs Externas',
      impact: 'Muy impresionante',
      items: [
        'Google Maps API: ubicaciones, rutas, distancias (PropertyHub, TravelDiaries)',
        'OpenWeather API: recomendaciones por clima (SportGear)',
        'Twitch API: integración de streamers en vivo (GamerHub)',
        'Spotify API: playlists y música integrada',
        'Google Books API: búsqueda automática de libros (LibroHub)'
      ]
    },
    {
      id: 1,
      title: 'Recomendaciones Inteligentes',
      impact: 'Muestra lógica de algoritmo',
      items: [
        '"Productos similares" (basado en género/categoría)',
        'Matching automático entre ofertas y candidatos',
        '"Gente que sigue esto también sigue..." (usuarios con intereses similares)'
      ]
    },
    {
      id: 2,
      title: 'Analytics & Reportes',
      impact: 'Bueno, muestra análisis de datos',
      items: [
        'Dashboards con gráficas (Chart.js, D3.js)',
        'Exportar reportes (PDF, Excel)',
        'Análisis de datos en tiempo real'
      ]
    },
    {
      id: 3,
      title: 'Gamificación',
      impact: 'Bueno, aumenta engagement',
      items: [
        'Sistema de puntos y badges desbloqueables',
        'Rankings/Leaderboards de usuarios',
        'Niveles progresivos (Novato → Intermedio → Avanzado)',
        'Programa de referidos con incentivos'
      ]
    },
    {
      id: 4,
      title: 'Tiempo Real',
      impact: 'Muy impresionante',
      items: [
        'WebSockets para notificaciones instantáneas',
        'Chat en tiempo real entre usuarios',
        'Actualizaciones dinámicas sin refresh'
      ]
    }
  ];

  const currentOption = options[activeOption];

  return (
    <div className="diff-options">
      <div className="diff-tabs">
        {options.map((option) => (
          <button
            key={option.id}
            className={`diff-tab ${activeOption === option.id ? 'active' : ''}`}
            onClick={() => setActiveOption(option.id)}
          >
            {option.title}
          </button>
        ))}
      </div>

      <div className="diff-content">
        <div className="diff-header">
          <h3 className="diff-title">{currentOption.title}</h3>
          <p className="diff-impact">{currentOption.impact}</p>
        </div>

        <ul className="diff-items">
          {currentOption.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
