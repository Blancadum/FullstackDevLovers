import { Link } from 'react-router-dom';
import { memo } from 'react';
import './ClusterCards.css';

/**
 * ClusterCards - Componente genérico reutilizable de tarjetas en grid
 *
 * Propósito: Reutilizar en múltiples lugares con diferente contenido
 * - QuickAccessSection (6 cards con imágenes grandes)
 * - Feature cards en landings
 * - Metodologías cards
 * - Secciones de categorías
 *
 * Props:
 * @param {string} title - Título de la sección
 * @param {string} subtitle - Subtítulo/descripción (opcional)
 * @param {array} cards - Array de cards { icon, title, description, color, link, variant }
 * @param {number} columns - Número de columnas (3, 4, 6, etc.)
 * @param {string} variant - 'image' | 'emoji' | 'icon' | 'logo'
 * @param {function} onCardClick - Callback al hacer click en tarjeta (opcional)
 */
export function ClusterCards({
  title,
  subtitle,
  cards = [],
  columns = 3,
  variant = 'image',
  onCardClick
}) {
  const containerClass = `cluster-cards cluster-cards--${columns}cols cluster-cards--${variant}`;

  return (
    <section className={containerClass}>
      <div className="cluster-cards-container">
        {(title || subtitle) && (
          <div className="cluster-cards-header">
            {title && <h2 className="cluster-cards-title">{title}</h2>}
            {subtitle && <p className="cluster-cards-subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="cluster-cards-grid">
          {cards.map((card, index) => (
            <div
              key={card.id || index}
              className="cluster-card"
              style={{ '--card-color': card.color }}
              data-delay={index}
            >
              {/* Link wrapper si tiene link */}
              {card.link ? (
                <Link to={card.link} className="cluster-card-link">
                  <CardContent card={card} variant={variant} />
                </Link>
              ) : (
                <button
                  className="cluster-card-button"
                  onClick={() => onCardClick?.(card)}
                >
                  <CardContent card={card} variant={variant} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * CardVisual - Componente memoizado para renderizar visual de card
 */
const CardVisual = memo(function CardVisual({ icon, title, variant, logo }) {
  return (
    <div className="card-visual">
      {variant === 'image' && icon && (
        <img src={icon} alt={title} className="card-image" />
      )}
      {variant === 'emoji' && icon && (
        <span className="card-emoji">{icon}</span>
      )}
      {variant === 'icon' && icon && (
        <span className="card-icon">{icon}</span>
      )}
      {variant === 'logo' && logo && (
        <img src={logo} alt={title} className="card-logo" />
      )}
    </div>
  );
});

/**
 * CardContent - Componente memoizado para renderizar contenido de card
 */
const CardContent = memo(function CardContent({ card, variant }) {
  return (
    <>
      <CardVisual
        icon={card.icon}
        title={card.title}
        variant={variant}
        logo={card.logo}
      />

      {/* Contenido */}
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        {card.description && (
          <p className="card-description">{card.description}</p>
        )}
        {card.meta && (
          <span className="card-meta">{card.meta}</span>
        )}
      </div>
    </>
  );
});
