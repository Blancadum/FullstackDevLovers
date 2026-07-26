import { useEffect } from 'react';

/**
 * Hook para aplicar tema dinámico a una landing page
 * Configura las variables CSS globales basadas en los colores del tema
 */
export const useLandingTheme = (primaryColor, darkColor, lightGradientColor) => {
  useEffect(() => {
    // Aplicar variables CSS al documento raíz
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--dark-color', darkColor);
    document.documentElement.style.setProperty('--light-gradient', lightGradientColor || `${primaryColor}15`);

    // Cleanup: restaurar valores por defecto
    return () => {
      document.documentElement.style.removeProperty('--primary-color');
      document.documentElement.style.removeProperty('--dark-color');
      document.documentElement.style.removeProperty('--light-gradient');
    };
  }, [primaryColor, darkColor, lightGradientColor]);
};
