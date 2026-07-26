import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * Componente para transiciones suaves entre páginas
 * Fade-out + fade-in (sin scroll)
 */
export function PageTransition({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fade-out (150ms)
    setIsTransitioning(true);

    const fadeOutTimer = setTimeout(() => {
      // Fade-in (300ms) - sin scroll
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(fadeOutTimer);
  }, [location.pathname]);

  return (
    <div className={`page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
      {children}
    </div>
  );
}
