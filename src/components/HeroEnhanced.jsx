import { useEffect, useState } from 'react';
import { ClusterSearch } from './ClusterSearch';
import './HeroEnhanced.css';

/**
 * HeroEnhanced Component
 *
 * Componente Hero mejorado con:
 * - Contenedor de texto (título, subtítulo, descripción)
 * - Búsqueda integrada (ClusterSearch)
 * - Botones CTA con anclas
 * - Background parallax
 * - Diseño responsive
 * - Animaciones sutiles
 *
 * Props:
 * @param {string} title - Título principal (H1)
 * @param {string} subtitle - Subtítulo
 * @param {string} description - Descripción adicional
 * @param {string} searchPlaceholder - Placeholder del buscador
 */
export function HeroEnhanced({
  title = 'Fullstack Dev Lovers',
  subtitle = 'Conquista Backend, DevOps y Cloud',
  description = 'Java, Spring Boot, Docker, AWS y mucho más',
  searchPlaceholder = 'Busca una tecnología...'
}) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setScrollY(window.scrollY);

      // Reset scrolling state para evitar re-renders constantes
      setTimeout(() => setIsScrolling(false), 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAnchorClick = (anchorId) => {
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-enhanced">
      {/* Background parallax pseudo-elemento */}
      <div className="hero-enhanced-bg" style={{
        backgroundPosition: `center ${scrollY * 0.5}px`
      }} />

      {/* Overlay para mejorar legibilidad */}
      <div className="hero-enhanced-overlay" />

      {/* Contenedor principal - Texto y botones */}
      <div className="hero-enhanced-container">
        {/* Sección de texto */}
        <div className="hero-enhanced-content">
          <h1 className="hero-enhanced-title">
            <span className="hero-enhanced-highlight">{title}</span>
          </h1>

          <p className="hero-enhanced-subtitle">{subtitle}</p>

          <p className="hero-enhanced-description">{description}</p>

          {/* Botones CTA */}
          <div className="hero-enhanced-buttons">
            <button
              className="hero-enhanced-btn hero-enhanced-btn--primary"
              onClick={() => handleAnchorClick('#menu')}
              aria-label={isMobile ? "Ir a explorar" : "Ir a aprende ya"}
            >
              {isMobile ? 'Go' : 'Aprende ya'}
            </button>

            <button
              className="hero-enhanced-btn hero-enhanced-btn--secondary"
              onClick={() => handleAnchorClick('#orientador')}
              aria-label={isMobile ? "Realizar test" : "Realizar test rápido"}
            >
              {isMobile ? 'Test' : 'Test rápido'}
            </button>
          </div>
        </div>
      </div>

      {/* Sección de búsqueda - Ancho completo */}
      <div className="hero-enhanced-search-wrapper">
        <ClusterSearch />
      </div>

      {/* Marco visual decorativo */}
      <div className="hero-enhanced-frame" />
    </header>
  );
}
