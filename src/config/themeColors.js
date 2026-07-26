/**
 * Tema centralizado para todas las landing pages
 * Define colores primarios, secundarios y bordes para cada módulo
 */
export const THEME_COLORS = {
  backend: {
    primary: '#6366f1',
    light: '#e0e7ff',
    border: '2px solid #6366f1',
    navButtons: []
  },
  frontend: {
    primary: '#3b82f6',
    light: '#dbeafe',
    border: '2px solid #3b82f6',
    navButtons: []
  },
  datos: {
    primary: '#ec4899',
    light: '#fbcfe8',
    border: '2px solid #ec4899',
    navButtons: []
  },
  versionamiento: {
    primary: '#ef4444',
    light: '#fee2e2',
    border: '2px solid #ef4444',
    navButtons: []
  },
  cloud: {
    primary: '#0ea5e9',
    light: '#cffafe',
    border: '2px solid #0ea5e9',
    navButtons: []
  },
  'metodologias-herramientas': {
    primary: '#f59e0b',
    light: '#fef3c7',
    border: '2px solid #f59e0b',
    navButtons: []
  },
  aws: {
    primary: '#ff9800',
    light: '#fff3e0',
    border: '2px solid #ff9800',
    navButtons: [
      {
        label: '← Volver a Proyecto',
        link: '/proyecto',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      },
      {
        label: 'Herramientas →',
        link: '/entornos/herramientas',
        bgColor: '#ff9800',
        textColor: '#ffffff',
        bgColorHover: '#f57c00'
      }
    ]
  },
  arquitectura: {
    primary: '#e91e63',
    light: '#fce4ec',
    border: '2px solid #e91e63',
    navButtons: [
      {
        label: '← AWS',
        link: '/aws',
        bgColor: '#fff3e0',
        textColor: '#ff9800',
        bgColorHover: '#ffe0b2',
        border: '2px solid #ff9800'
      },
      {
        label: 'Build Tools →',
        link: '/build-tools',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      }
    ]
  },
  docker: {
    primary: '#2196f3',
    light: '#e3f2fd',
    border: '2px solid #2196f3',
    navButtons: [
      {
        label: '← Build Tools',
        link: '/build-tools',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      },
      {
        label: 'Kubernetes →',
        link: '/kubernetes',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      }
    ]
  },
  git: {
    primary: '#e8491f',
    light: '#ffe5d9',
    border: '2px solid #e8491f',
    navButtons: [
      {
        label: '← Herramientas',
        link: '/entornos/herramientas',
        bgColor: '#fff3e0',
        textColor: '#ff9800',
        bgColorHover: '#ffe0b2',
        border: '2px solid #ff9800'
      },
      {
        label: 'Java →',
        link: '/java',
        bgColor: '#f3e5f5',
        textColor: '#9c27b0',
        bgColorHover: '#e1bee7',
        border: '2px solid #9c27b0'
      }
    ]
  },
  java: {
    primary: '#9c27b0',
    light: '#f3e5f5',
    border: '2px solid #9c27b0',
    navButtons: [
      {
        label: '← Kotlin',
        link: '/kotlin',
        bgColor: '#f3e5f5',
        textColor: '#7f52ff',
        bgColorHover: '#e8d5f5',
        border: '2px solid #7f52ff'
      },
      {
        label: 'Spring Boot →',
        link: '/spring-boot',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      }
    ]
  },
  kotlin: {
    primary: '#7f52ff',
    light: '#f3e5f5',
    border: '2px solid #7f52ff',
    navButtons: [
      {
        label: '← MongoDB',
        link: '/mongodb',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      },
      {
        label: 'Node.js →',
        link: '/nodejs',
        bgColor: '#fffde7',
        textColor: '#f57f17',
        bgColorHover: '#fff9c4'
      }
    ]
  },
  nodejs: {
    primary: '#76c041',
    light: '#f1f8e9',
    border: '2px solid #76c041',
    navButtons: [
      {
        label: '← Kotlin',
        link: '/kotlin',
        bgColor: '#f3e5f5',
        textColor: '#7f52ff',
        bgColorHover: '#e8d5f5',
        border: '2px solid #7f52ff'
      },
      {
        label: 'React →',
        link: '/react',
        bgColor: '#e1f5fe',
        textColor: '#0277bd',
        bgColorHover: '#b3e5fc',
        border: '2px solid #0277bd'
      }
    ]
  },
  react: {
    primary: '#61dafb',
    light: '#e0f7fa',
    border: '2px solid #61dafb',
    navButtons: [
      {
        label: '← Node.js',
        link: '/nodejs',
        bgColor: '#f1f8e9',
        textColor: '#76c041',
        bgColorHover: '#dcedc8',
        border: '2px solid #76c041'
      },
      {
        label: 'Angular →',
        link: '/angular',
        bgColor: '#ffebee',
        textColor: '#c41c3b',
        bgColorHover: '#ffcdd2',
        border: '2px solid #c41c3b'
      }
    ]
  },
  angular: {
    primary: '#dd0031',
    light: '#ffebee',
    border: '2px solid #dd0031',
    navButtons: [
      {
        label: '← React',
        link: '/react',
        bgColor: '#e0f7fa',
        textColor: '#61dafb',
        bgColorHover: '#b3e5fc',
        border: '2px solid #61dafb'
      },
      {
        label: 'HTML →',
        link: '/html',
        bgColor: '#fff3e0',
        textColor: '#ff9800',
        bgColorHover: '#ffe0b2',
        border: '2px solid #ff9800'
      }
    ]
  },
  html: {
    primary: '#e44d26',
    dark: '#c03d1a',
    light: '#fce4ec',
    border: '2px solid #e44d26',
    navButtons: [
      {
        label: '← Angular',
        link: '/angular',
        bgColor: '#ffebee',
        textColor: '#dd0031',
        bgColorHover: '#ffcdd2',
        border: '2px solid #dd0031'
      },
      {
        label: 'CSS →',
        link: '/css',
        bgColor: '#e3f2fd',
        textColor: '#1572b6',
        bgColorHover: '#bbdefb',
        border: '2px solid #1572b6'
      }
    ]
  },
  css: {
    primary: '#1572b6',
    dark: '#0e5e99',
    light: '#e3f2fd',
    border: '2px solid #1572b6',
    navButtons: [
      {
        label: '← HTML',
        link: '/html',
        bgColor: '#fce4ec',
        textColor: '#e44d26',
        bgColorHover: '#f8bbd0',
        border: '2px solid #e44d26'
      },
      {
        label: 'Bootstrap →',
        link: '/bootstrap',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      }
    ]
  },
  bootstrap: {
    primary: '#7b1fa2',
    dark: '#6a1b9a',
    light: '#f3e5f5',
    border: '2px solid #7b1fa2',
    navButtons: [
      {
        label: '← CSS',
        link: '/css',
        bgColor: '#e3f2fd',
        textColor: '#1572b6',
        bgColorHover: '#bbdefb',
        border: '2px solid #1572b6'
      },
      {
        label: 'Tailwind CSS →',
        link: '/tailwindcss',
        bgColor: '#ecf9ff',
        textColor: '#004d7a',
        bgColorHover: '#b3e5fc',
        border: '2px solid #0097a7'
      }
    ]
  },
  tailwindcss: {
    primary: '#0097a7',
    light: '#ecf9ff',
    border: '2px solid #0097a7',
    navButtons: [
      {
        label: '← Bootstrap',
        link: '/bootstrap',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      },
      {
        label: 'MongoDB →',
        link: '/mongodb',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      }
    ]
  },
  mongodb: {
    primary: '#13aa52',
    light: '#e8f5e9',
    border: '2px solid #13aa52',
    navButtons: [
      {
        label: '← Tailwind CSS',
        link: '/tailwindcss',
        bgColor: '#ecf9ff',
        textColor: '#004d7a',
        bgColorHover: '#b3e5fc',
        border: '2px solid #0097a7'
      },
      {
        label: 'Kotlin →',
        link: '/kotlin',
        bgColor: '#f3e5f5',
        textColor: '#7f52ff',
        bgColorHover: '#e8d5f5',
        border: '2px solid #7f52ff'
      }
    ]
  },
  sql: {
    primary: '#1976d2',
    light: '#e3f2fd',
    border: '2px solid #2196f3',
    navButtons: [
      {
        label: '← DevOps',
        link: '/devops',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      },
      {
        label: 'Spring Boot →',
        link: '/spring-boot',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      }
    ]
  },
  springboot: {
    primary: '#4caf50',
    light: '#e8f5e9',
    border: '2px solid #4caf50',
    navButtons: [
      {
        label: '← SQL',
        link: '/sql',
        bgColor: '#e3f2fd',
        textColor: '#1976d2',
        bgColorHover: '#bbdefb',
        border: '2px solid #2196F3'
      },
      {
        label: 'DevOps →',
        link: '/devops',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      }
    ]
  },
  devops: {
    primary: '#7b1fa2',
    light: '#f3e5f5',
    border: '2px solid #7b1fa2',
    navButtons: [
      {
        label: '← Spring Boot',
        link: '/spring-boot',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      },
      {
        label: 'Metodologías →',
        link: '/metodologias',
        bgColor: '#fff3e0',
        textColor: '#ff9800',
        bgColorHover: '#ffe0b2',
        border: '2px solid #ff9800'
      }
    ]
  },
  metodologias: {
    primary: '#ff9800',
    light: '#fff3e0',
    border: '2px solid #ff9800',
    navButtons: [
      {
        label: '← DevOps',
        link: '/devops',
        bgColor: '#f3e5f5',
        textColor: '#7b1fa2',
        bgColorHover: '#e1bee7',
        border: '2px solid #7b1fa2'
      },
      {
        label: 'Proyecto →',
        link: '/proyecto',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      }
    ]
  },
  proyecto: {
    primary: '#4caf50',
    light: '#e8f5e9',
    border: '2px solid #4caf50',
    navButtons: [
      {
        label: '← Metodologías',
        link: '/metodologias',
        bgColor: '#fff3e0',
        textColor: '#ff9800',
        bgColorHover: '#ffe0b2',
        border: '2px solid #ff9800'
      },
      {
        label: 'Herramientas →',
        link: '/entornos/herramientas',
        bgColor: '#fff3e0',
        textColor: '#ff9800',
        bgColorHover: '#ffe0b2',
        border: '2px solid #ff9800'
      }
    ]
  },
  buildtools: {
    primary: '#7b1fa2',
    light: '#f3e5f5',
    border: '2px solid #7b1fa2',
    navButtons: [
      {
        label: '← Arquitectura',
        link: '/arquitectura',
        bgColor: '#fce4ec',
        textColor: '#e91e63',
        bgColorHover: '#f8bbd0',
        border: '2px solid #e91e63'
      },
      {
        label: 'Docker →',
        link: '/docker',
        bgColor: '#e3f2fd',
        textColor: '#2196f3',
        bgColorHover: '#bbdefb',
        border: '2px solid #2196f3'
      }
    ]
  },
  kubernetes: {
    primary: '#9c27b0',
    light: '#f3e5f5',
    border: '2px solid #9c27b0',
    navButtons: [
      {
        label: '← Volver a Docker',
        link: '/docker',
        bgColor: '#e3f2fd',
        textColor: '#2196f3',
        bgColorHover: '#bbdefb',
        border: '2px solid #2196f3'
      },
      {
        label: 'Más sobre AWS →',
        link: '/aws',
        bgColor: '#9c27b0',
        textColor: '#ffffff',
        bgColorHover: '#7b1fa2'
      }
    ]
  },
  herramientas: {
    primary: '#ff9800',
    light: '#fff3e0',
    border: '2px solid #ff9800',
    navButtons: [
      {
        label: '← Proyecto',
        link: '/proyecto',
        bgColor: '#e8f5e9',
        textColor: '#1b5e20',
        bgColorHover: '#c8e6c9',
        border: '2px solid #4caf50'
      },
      {
        label: 'Git →',
        link: '/git',
        bgColor: '#ffe5d9',
        textColor: '#e8491f',
        bgColorHover: '#ffd9c6',
        border: '2px solid #e8491f'
      }
    ]
  }
};

/**
 * Obtiene el tema para un módulo por ID
 * @param {string} moduleId - ID del módulo (ej: 'aws', 'docker', 'java')
 * @returns {object} Tema del módulo con colores y botones de navegación
 */
export const getTheme = (moduleId) => {
  return THEME_COLORS[moduleId] || THEME_COLORS.aws;
};
