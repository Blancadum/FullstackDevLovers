import { Link } from 'react-router-dom';
import './LandingHero.css';

const ButtonLink = ({ href, to, className, children }) =>
  href?.startsWith('#') ? (
    <a href={href} className={className}>{children}</a>
  ) : (
    <Link to={to || href} className={className}>{children}</Link>
  );

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
  const colors = {
    '--primary-color': primaryColor,
    '--dark-color': darkColor,
    '--light-gradient': lightGradientColor || `${primaryColor}15`,
  };

  return (
    <section className="landing-hero" style={colors}>
      <div className="landing-hero-content">
        {/* Text Section - 70% */}
        <div className="hero-text-section">
          <h1>{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {description && <p className="hero-description">{description}</p>}
        </div>

        {/* Image Section - 30% */}
        {imageUrl && (
          <div className="hero-image-section">
            <img src={imageUrl} alt={imageAlt || title} className="hero-image" />
          </div>
        )}
      </div>

      {/* Buttons - Full Width Below */}
      <div className="landing-hero-buttons">
        {primaryButtonLink && (
          <ButtonLink to={primaryButtonLink} className="landing-btn landing-btn-primary">
            {primaryButtonText}
          </ButtonLink>
        )}
        {secondaryButtonLink && (
          <ButtonLink href={secondaryButtonLink} className="landing-btn landing-btn-secondary">
            {secondaryButtonText}
          </ButtonLink>
        )}
      </div>
    </section>
  );
};
