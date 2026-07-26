import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente reutilizable para botones en hero de landing pages
 * Soluciona el problema de layout de botones de forma general
 */
export const LandingHeroButtons = ({
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  thirdButtonText,
  thirdButtonLink
}) => {
  return (
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
      {thirdButtonLink && (
        typeof thirdButtonLink === 'string' && thirdButtonLink.startsWith('#') ? (
          <a href={thirdButtonLink} className="landing-btn landing-btn-tertiary">
            {thirdButtonText}
          </a>
        ) : (
          <Link to={thirdButtonLink} className="landing-btn landing-btn-tertiary">
            {thirdButtonText}
          </Link>
        )
      )}
    </div>
  );
};
