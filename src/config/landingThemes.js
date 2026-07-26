/**
 * Temas unificados para todas las landing pages
 * Reutilizar estos valores en lugar de hardcodear colores
 */

export const landingThemes = {
  docker: {
    primary: '#2196f3',
    dark: '#1976d2',
    lightGradient: '#2196f315'
  },
  kubernetes: {
    primary: '#9c27b0',
    dark: '#7b1fa2',
    lightGradient: '#9c27b015'
  },
  aws: {
    primary: '#ff9800',
    dark: '#f57c00',
    lightGradient: '#ff980015'
  },
  git: {
    primary: '#e8491f',
    dark: '#c73d18',
    lightGradient: '#e8491f15'
  },
  build: {
    primary: '#7b1fa2',
    dark: '#6a1b9a',
    lightGradient: '#7b1fa215'
  },
  devops: {
    primary: '#7b1fa2',
    dark: '#6a1b9a',
    lightGradient: '#7b1fa215'
  },
  sql: {
    primary: '#1976d2',
    dark: '#1565c0',
    lightGradient: '#1976d215'
  },
  mongodb: {
    primary: '#13aa52',
    dark: '#0d8c41',
    lightGradient: '#13aa5215'
  },
  html: {
    primary: '#e44d26',
    dark: '#c03d1a',
    lightGradient: '#e44d2615'
  },
  css: {
    primary: '#1572b6',
    dark: '#0e5e99',
    lightGradient: '#1572b615'
  },
  bootstrap: {
    primary: '#7b1fa2',
    dark: '#6a1b9a',
    lightGradient: '#7b1fa215'
  },
  react: {
    primary: '#61dafb',
    dark: '#21b4d5',
    lightGradient: '#61dafb15'
  },
  tailwindcss: {
    primary: '#0097a7',
    dark: '#00838f',
    lightGradient: '#0097a715'
  },
  metodologias: {
    primary: '#ff9800',
    dark: '#f57c00',
    lightGradient: '#ff980015'
  },
  proyecto: {
    primary: '#4caf50',
    dark: '#388e3c',
    lightGradient: '#4caf5015'
  },
  arquitectura: {
    primary: '#e91e63',
    dark: '#c2185b',
    lightGradient: '#e91e6315'
  },
  herramientas: {
    primary: '#ff9800',
    dark: '#f57c00',
    lightGradient: '#ff980015'
  },
  nodejs: {
    primary: '#68a063',
    dark: '#559350',
    lightGradient: '#68a06315'
  }
};

/**
 * Obtener tema por ID de módulo
 */
export const getThemeByModule = (moduleId) => {
  return landingThemes[moduleId] || landingThemes.docker; // fallback
};
