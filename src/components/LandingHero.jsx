import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Hero reutilizable para landing pages
 * Diseño: Título completo ancho → Contenido (texto + imagen 2 col) → Botones
 */
export const LandingHero = ({
  title,
  subtitle,
  description,
  primaryColor,
  darkColor,
  lightGradientColor,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl,
  imageAlt
}) => {
  const heroStyle = {
    '--primary-color': primaryColor,
    '--dark-color': darkColor,
    '--light-gradient': lightGradientColor || `${primaryColor}15`,
  };

  return (
    <section className="landing-hero" style={heroStyle}>
      <div className="landing-hero-content">
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>

        <div className="hero-text">
          <p className="hero-description">{description}</p>
        </div>

        {imageUrl && (
          <div className="hero-icon">
            <img src={imageUrl} alt={imageAlt || title} />
          </div>
        )}

        <div className="landing-hero-buttons">
          {primaryButtonLink && (
            <Link to={primaryButtonLink} className="landing-btn landing-btn-primary">
              {primaryButtonText}
            </Link>
          )}
          {secondaryButtonLink && (
            typeof secondaryButtonLink === 'string' && secondaryButtonLink.startsWith('#') ? (
              <a href={secondaryButtonLink} className="landing-btn landing-btn-secondary">
                {secondaryButtonText}
              </a>
            ) : (
              <Link to={secondaryButtonLink} className="landing-btn landing-btn-secondary">
                {secondaryButtonText}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};
