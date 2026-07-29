import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que hace scroll automático al top cuando cambia la ruta
 * Con transición suave (smooth) para un efecto más relajado.
 * Si la URL incluye un ancla (#id) y existe un elemento con ese id,
 * hace scroll hasta él en vez de al top.
 */
export function AutoScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname, location.hash]);

  return null;
}
