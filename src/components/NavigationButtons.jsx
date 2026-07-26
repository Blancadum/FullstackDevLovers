import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButtons.css';

/**
 * Componente reutilizable para botones de navegación
 * Botón izquierdo y derecho que no wrappean, adaptables al contenido
 */
export const NavigationButtons = ({ buttons = [] }) => {
  const navigate = useNavigate();

  if (!buttons || buttons.length === 0) return null;

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="navigation-buttons-wrapper">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className={`nav-btn ${idx === 0 ? 'nav-btn-left' : 'nav-btn-right'}`}
          onClick={() => handleClick(btn.link)}
          style={{
            '--btn-bg-color': btn.bgColor || '#f5f5f5',
            '--btn-text-color': btn.textColor || '#333',
            '--btn-border-color': btn.border || '2px solid #ddd',
            '--btn-hover-bg': btn.bgColorHover || '#e8e8e8'
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
