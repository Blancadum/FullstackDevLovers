/**
 * Componente reutilizable para la sección de texto en hero de landing pages
 * Estructura correcta: h1, subtitle y description en el mismo nivel
 */
export const LandingHeroText = ({
  title,
  subtitle,
  description
}) => {
  return (
    <div className="landing-hero-text">
      <h1 className="landing-hero-title">{title}</h1>
      {subtitle && <p className="landing-hero-subtitle">{subtitle}</p>}
      {description && <p className="landing-hero-description">{description}</p>}
    </div>
  );
};
