import { useState, useEffect } from 'react';

/**
 * Hook personalizado que detecta si la pantalla es móvil (≤768px)
 * Se actualiza reactivamente cuando el usuario redimensiona la ventana o rota el dispositivo
 *
 * Uso: const isMobile = useIsMobile();
 *
 * Retorna: boolean - true si window.innerWidth <= 768, false en caso contrario
 */
export function useIsMobile() {
  // Estado inicial detecta el tamaño al renderizar
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') {
      return false; // SSR safety
    }
    return window.innerWidth <= 768;
  });

  useEffect(() => {
    // SSR safety: no hacer nada si window no existe
    if (typeof window === 'undefined') {
      return;
    }

    // Función handler para detectar cambios de tamaño
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Agregar listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Cleanup: remover listener al desmontar o cuando dependencies cambien
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
