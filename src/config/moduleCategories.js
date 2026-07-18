/**
 * Categorización de módulos por tipo de tecnología
 * Reorganiza la plataforma sin cambiar modulesConfig.js
 * Permite navegación por categoría sin romper URLs existentes
 */

export const moduleCategories = [
  {
    id: 'backend',
    name: 'Backend & Aplicaciones',
    icon: '🔵',
    color: '#0066cc',
    description: 'Lenguajes y frameworks para desarrollo backend',
    modules: ['java', 'spring-boot'],
  },
  {
    id: 'datos',
    name: 'Datos & Almacenamiento',
    icon: '🗄️',
    color: '#FF6B6B',
    description: 'Bases de datos, SQL y persistencia de datos',
    modules: ['sql'],
  },
  {
    id: 'versionamiento',
    name: 'Control de Versiones',
    icon: '📦',
    color: '#F74E1E',
    description: 'Git, control de versiones y colaboración en equipo',
    modules: ['git'],
  },
  {
    id: 'containerizacion',
    name: 'Containerización & Orquestación',
    icon: '🐳',
    color: '#2496ED',
    description: 'Docker, Kubernetes y gestión de contenedores',
    modules: ['docker', 'kubernetes'],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infraestructura',
    icon: '☁️',
    color: '#FF9900',
    description: 'Servicios en la nube, DevOps, CI/CD e infraestructura',
    modules: ['aws'],
    devopsTopics: ['devops', 'ci-cd', 'infrastructure-as-code']
  },
  {
    id: 'herramientas',
    name: 'Herramientas Transversales',
    icon: '🛠️',
    color: '#9C27B0',
    description: 'IDEs, patrones, testing y herramientas de desarrollo',
    modules: ['entornos'],
  },
  {
    id: 'casos-practicos',
    name: 'Casos Prácticos',
    icon: '🎯',
    color: '#FF6B35',
    description: 'Proyectos integrados y casos de uso real',
    projects: [
      {
        id: 'proyecto-final-java',
        name: 'Proyecto Final: Sistema de Gestión Integral',
        description: 'Aplicación completa con Java, Spring Boot, SQL y despliegue',
        technologies: ['java', 'spring-boot', 'sql', 'docker', 'aws'],
        difficulty: 'advanced',
        estimatedTime: '3-4 semanas',
        link: '/proyecto/final-java'
      },
      {
        id: 'caso-practico-1',
        name: 'Caso Práctico: E-commerce Backend',
        description: 'Sistema real de tienda online con APIs REST',
        technologies: ['java', 'spring-boot', 'sql', 'docker'],
        difficulty: 'advanced',
        estimatedTime: '2-3 semanas',
        comingSoon: true
      },
      {
        id: 'caso-practico-2',
        name: 'Caso Práctico: Microservicios en AWS',
        description: 'Arquitectura de microservicios desplegados en AWS',
        technologies: ['java', 'docker', 'kubernetes', 'aws'],
        difficulty: 'expert',
        estimatedTime: '3-4 semanas',
        comingSoon: true
      }
    ]
  },
  {
    id: 'metodologias',
    name: 'Metodologías & Procesos',
    icon: '📚',
    color: '#4ECDC4',
    description: 'Agile, Clean Code, Testing y DevOps - Disciplinas transversales',
    modules: ['metodologias'],
    subCategories: [
      {
        id: 'agile-scrum',
        name: 'Agile/SCRUM',
        icon: '⚡',
        description: 'Metodología ágil para gestión de proyectos iterativos',
        topics: [
          'Principios Agile',
          'Roles en SCRUM (Product Owner, Scrum Master, Team)',
          'Sprints y Planning',
          'Daily Standup',
          'Retrospectivas',
          'Product Backlog'
        ],
        lessons: [
          { title: 'Introducción a Agile', link: '/metodologias/agile-scrum/introduccion' },
          { title: 'SCRUM Framework', link: '/metodologias/agile-scrum/scrum' },
          { title: 'Sprints y Planning', link: '/metodologias/agile-scrum/sprints' }
        ],
        featured: true
      },
      {
        id: 'clean-code',
        name: 'Clean Code',
        icon: '✨',
        description: 'Principios y prácticas para escribir código de calidad',
        topics: [
          'Nombres significativos',
          'Funciones pequeñas',
          'DRY (Don\'t Repeat Yourself)',
          'KISS (Keep It Simple)',
          'YAGNI (You Aren\'t Gonna Need It)',
          'SOLID',
          'Refactorización'
        ],
        lessons: [
          { title: 'Nombres Significativos', link: '/metodologias/clean-code/nombres' },
          { title: 'Funciones Limpias', link: '/metodologias/clean-code/funciones' },
          { title: 'Estructura y Formato', link: '/metodologias/clean-code/estructura' },
          { title: 'SOLID y Refactorización', link: '/metodologias/clean-code/solid' },
          { title: 'Patrones de Diseño', link: '/metodologias/clean-code/patrones' }
        ],
        featured: true
      },
      {
        id: 'testing',
        name: 'Testing',
        icon: '🧪',
        description: 'Estrategias y tipos de testing para garantizar calidad',
        topics: [
          'Testing Unitario',
          'Testing de Integración',
          'Testing de Aceptación',
          'JUnit',
          'Mockito',
          'Test Driven Development (TDD)',
          'Cobertura de código'
        ],
        lessons: [
          { title: 'Testing Unitario', link: '/metodologias/testing/unitario' },
          { title: 'Testing de Integración', link: '/metodologias/testing/integracion' },
          { title: 'Testing de Aceptación', link: '/metodologias/testing/aceptacion' }
        ],
        featured: false
      },
      {
        id: 'devops',
        name: 'DevOps',
        icon: '🚀',
        description: 'Prácticas para automatización, integración y despliegue continuo',
        topics: [
          'Principios DevOps',
          'Integración Continua (CI)',
          'Despliegue Continuo (CD)',
          'GitHub Actions',
          'Jenkins',
          'Pipelines',
          'Monitoreo y Logs'
        ],
        lessons: [
          { title: 'Introducción a DevOps', link: '/metodologias/devops/introduccion' },
          { title: 'CI/CD Pipelines', link: '/metodologias/devops/cicd' },
          { title: 'Monitoreo y Logs', link: '/metodologias/devops/monitoreo' }
        ],
        featured: false
      }
    ]
  }
];

/**
 * Helper: Obtener módulos por categoría
 */
export function getModulesByCategory(categoryId) {
  const category = moduleCategories.find(cat => cat.id === categoryId);
  return category ? category.modules : [];
}

/**
 * Helper: Obtener categoría de un módulo
 */
export function getCategoryByModule(moduleId) {
  return moduleCategories.find(cat => cat.modules && cat.modules.includes(moduleId));
}
