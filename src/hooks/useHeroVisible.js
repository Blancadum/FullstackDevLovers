import { useState, useEffect } from 'react';

/**
 * Hook que detecta si el elemento Hero está visible en el viewport
 * Retorna true si es visible, false si no
 */
export function useHeroVisible() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Buscar el elemento Hero en el DOM (Home usa .hero-enhanced, las landings usan .landing-hero)
    const heroElement = document.querySelector('.hero-enhanced, [class$="-hero"]');

    if (!heroElement) {
      setIsVisible(false);
      return;
    }

    // Usar Intersection Observer para detectar cuando Hero entra/sale del viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
      observer.disconnect();
    };
  }, []);

  return isVisible;
}
