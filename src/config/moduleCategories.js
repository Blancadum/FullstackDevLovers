/**
 * Categorización de módulos por tipo de tecnología
 * Reorganiza la plataforma sin cambiar modulesConfig.js
 * Permite navegación por categoría sin romper URLs existentes
 */

export const moduleCategories = [
  {
    id: 'backend',
    name: 'Backend & Aplicaciones',
    logoSrc: '/images/logos/backend.png',
    color: '#0066cc',
    description: 'Java, Kotlin, Node.js, Spring Boot y desarrollo backend/móvil',
    modules: ['java', 'kotlin', 'nodejs', 'spring-boot']},
  {
    id: 'frontend',
    name: 'Frontend & Desarrollo Web',
    logoSrc: '/images/logos/frontpage.png',
    color: '#F39C12',
    description: 'React, Angular, HTML, CSS, Bootstrap, Tailwind y frameworks web',
    modules: ['react', 'angular', 'html', 'css', 'bootstrap', 'tailwindcss']},
  {
    id: 'datos',
    name: 'Datos & Almacenamiento',
    logoSrc: '/images/logos/database.png',
    color: '#FF6B6B',
    description: 'SQL, MongoDB y bases de datos relacionales y NoSQL',
    modules: ['sql', 'mongodb']},
  {
    id: 'versionamiento',
    name: 'Control de Versiones',
    logoSrc: '/images/logos/git-github.png',
    color: '#F74E1E',
    description: 'Git, control de versiones y colaboración en equipo',
    modules: ['git', 'github']},
  {
    id: 'containerizacion',
    name: 'Containerización, Orquestación & Cloud Computing',
    logoSrc: '/images/logos/cloud-computing.jpg',
    color: '#2496ED',
    description: 'Docker, Kubernetes, AWS y gestión de contenedores en la nube',
    modules: ['docker', 'kubernetes', 'aws'],
    hidden: true},
  {
    id: 'herramientas',
    name: 'Herramientas & Metodologías',
    logoSrc: '/images/logos/procesos.png',
    color: '#9C27B0',
    description: 'Herramientas de desarrollo, patrones, testing y metodologías transversales',
    modules: ['entornos', 'metodologias'],
    hidden: true,
    subCategories: [
      {
        id: 'agile-scrum',
        name: 'Agile/SCRUM',
        description: 'Metodología ágil para gestión de proyectos iterativos',
        logoSrc: '/images/logos/agile.png',
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
        description: 'Principios y prácticas para escribir código de calidad',
        logoSrc: '/images/logos/clean-code.png',
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
        description: 'Estrategias y tipos de testing para garantizar calidad',
        logoSrc: '/images/logos/testing.png',
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
        description: 'Prácticas para automatización, integración y despliegue continuo',
        logoSrc: '/images/logos/devops.png',
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
  },
  {
    id: 'ia',
    name: 'Inteligencia Artificial',
    logoSrc: '/images/logos/ia.png',
    color: '#7C3AED',
    description: 'Machine Learning, Deep Learning, LLMs, ChatGPT y aplicaciones de IA',
    modules: ['ia'],
    hidden: true
  },
  {
    id: 'ciberseguridad',
    name: 'Ciberseguridad',
    logoSrc: '/images/logos/ciberseguridad.png',
    color: '#DC2626',
    description: 'Fundamentos de seguridad web, OWASP Top 10, autenticación y buenas prácticas para desarrolladores',
    modules: ['ciberseguridad'],
    hidden: true
  },
  {
    id: 'seo',
    name: 'SEO & Analytics',
    logoSrc: '/images/logos/seo.png',
    color: '#059669',
    description: 'Posicionamiento en buscadores, analytics y optimización web',
    modules: ['seo'],
    hidden: true
  },
  {
    id: 'casos-practicos',
    name: 'Casos Prácticos',
    color: '#FF6B35',
    description: 'Proyectos integrados y casos de uso real',
    hidden: true,
    projects: [
      {
        id: 'tfc-java',
        name: 'TFC: Sistema de Gestión Integral',
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

/**
 * Helper: Obtener una metodología por ID
 * Usado por MethodologyWrapper para evitar búsquedas repetidas
 */
export function getMethodologyById(methodologyId) {
  const metodologiasCategory = moduleCategories.find(c => c.subCategories);
  return metodologiasCategory?.subCategories?.find(m => m.id === methodologyId);
}
