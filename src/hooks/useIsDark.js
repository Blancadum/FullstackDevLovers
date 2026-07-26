import { useState, useEffect } from 'react';

/**
 * Hook personalizado que detecta si el usuario prefiere modo oscuro
 * Se actualiza reactivamente cuando el usuario cambia la preferencia de tema del sistema
 *
 * Uso: const isDark = useIsDark();
 *
 * Retorna: boolean - true si prefers-color-scheme es 'dark', false en caso contrario
 */
export function useIsDark() {
  // Estado inicial detecta la preferencia al renderizar
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false; // SSR safety
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // SSR safety: no hacer nada si window no existe
    if (typeof window === 'undefined') {
      return;
    }

    // Crear el media query listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Función handler para detectar cambios de tema
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    // Agregar listener para el evento change
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup: remover listener al desmontar o cuando dependencies cambien
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isDark;
}
