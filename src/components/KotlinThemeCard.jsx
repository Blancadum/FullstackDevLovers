import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './KotlinThemeCard.css';

export function KotlinThemeCard({
  icon,
  title,
  description,
  lessons,
  color = '#6366f1'
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`kotlin-theme-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Header */}
      <div
        className="theme-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="theme-icon">{icon}</div>
        <div className="theme-header-content">
          <h3 className="theme-title">{title}</h3>
          <p className="theme-description">{description}</p>
        </div>
        <button
          className="theme-toggle-btn"
          style={{ borderColor: color, color: color }}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {/* Contenido expandido */}
      <div className="theme-card-content">
        <div className="subtopics-grid">
          {lessons.map((lesson, idx) => (
            <Link
              key={idx}
              to={lesson.link}
              className="subtopic-item subtopic-link"
            >
              <div
                className="subtopic-number"
                style={{ backgroundColor: getColorForIndex(idx) }}
              >
                {idx + 1}
              </div>
              <div className="subtopic-content">
                <p className="subtopic-title">{lesson.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Función auxiliar para obtener colores alternados
function getColorForIndex(index) {
  const colors = [
    '#ff006e', // pink
    '#8b5cf6', // purple
    '#6366f1', // indigo
    '#0ea5e9', // cyan
    '#10b981', // emerald
  ];
  return colors[index % colors.length];
}
