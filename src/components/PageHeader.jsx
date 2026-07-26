import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

export function PageHeader({ onMenuToggle, hasMenu = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHoveringMargin, setIsHoveringMargin] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (onMenuToggle) {
      onMenuToggle(!mobileMenuOpen);
    }
  };

  return (
    <header className="page-header">
      {/* Área invisible para detectar hover en margen izquierdo */}
      {hasMenu && (
        <div
          className="header-margin-trigger"
          onMouseEnter={() => setIsHoveringMargin(true)}
          onMouseLeave={() => setIsHoveringMargin(false)}
        />
      )}

      <div className="header-container">
        {/* Nombre de la web a la izquierda */}
        <Link to="/" className="header-brand">
          <span className="header-logo-icon"></span>
          <span className="header-brand-text">Fullstack Dev Lovers</span>
        </Link>

        {/* Botón burger a la derecha */}
        <div className={`header-right ${isHoveringMargin ? 'visible' : ''}`}>
          {hasMenu && (
            <button
              className={`menu-burger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={handleMenuClick}
              title="Abrir menú de índice"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
