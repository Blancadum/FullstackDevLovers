/**
 * Contenido optimizado para SEO de landing pages por categoría
 * Incluye: hero, beneficios, roadmap, comparativas, FAQ, etc.
 * Sin emojis, usando colores corporativos
 */

export const categoryLandingContent = {
  backend: {
    id: 'backend',
    name: 'Backend & Aplicaciones',
    slug: 'backend',
    metaTitle: 'Backend & Aplicaciones: Java, Spring Boot, Node.js | Fullstack Dev Lovers',
    metaDescription: 'Domina desarrollo backend con Java, Kotlin, Spring Boot y Node.js. Roadmap completo, comparativas técnicas y oportunidades laborales.',
    metaKeywords: 'backend development, java tutorial, spring boot, node.js, kotlin, api rest, desarrollo backend',
    ogImage: '/src/assets/images/logos/backend.png',

    hero: {
      title: 'Backend & Aplicaciones',
      subtitle: 'Domina el desarrollo de servidores, APIs y aplicaciones empresariales',
      description: 'Java, Kotlin, Node.js, Spring Boot y desarrollo backend/móvil. Aprende desde fundamentos hasta arquitecturas avanzadas.',
      cta: 'Comenzar a aprender'
    },

    whyLearn: {
      title: '¿Por qué aprender Backend?',
      items: [
        {
          title: 'Demanda laboral excepcional',
          description: 'Backend developers tienen los salarios más altos en la industria. La demanda supera la oferta en un 3:1'
        },
        {
          title: 'Tecnologías estables',
          description: 'Java lleva 25+ años siendo líder. Spring Boot es el framework más usado en empresas Fortune 500'
        },
        {
          title: 'Escalabilidad masiva',
          description: 'Aprende a construir sistemas que sirven millones de usuarios simultáneamente'
        },
        {
          title: 'Fundamentos universales',
          description: 'Los principios del backend aplican a todas las tecnologías. Inversión a largo plazo'
        }
      ]
    },

    mainTechnologies: {
      title: 'Lenguajes y Frameworks principales',
      description: 'Las tecnologías más demandadas en la industria',
      technologies: [
        {
          name: 'Java',
          description: 'Lenguaje robusto y escalable, usado en 90% de empresas Fortune 500',
          purpose: 'Sistemas empresariales, aplicaciones de banca, seguros y finanzas. Infraestructura crítica que debe funcionar 24/7',
          logo: '/src/assets/images/logos/java-logo.png',
          learningPath: '/backend/java',
          demand: 'Muy alta'
        },
        {
          name: 'Spring Boot',
          description: 'Framework Java que simplifica desarrollo de aplicaciones empresariales',
          purpose: 'APIs REST, microservicios, aplicaciones web profesionales. Acelera desarrollo 10x comparado con Java puro',
          logo: '/src/assets/images/logos/backend.png',
          learningPath: '/backend/spring-boot',
          demand: 'Muy alta'
        },
        {
          name: 'Node.js',
          description: 'JavaScript en servidor. Ideal para startups y aplicaciones en tiempo real',
          purpose: 'Aplicaciones de tiempo real, APIs rápidas, startups con ritmo acelerado. Excelente para MVP y prototipado',
          logo: '/src/assets/images/logos/nodejs.png',
          learningPath: '/backend/nodejs',
          demand: 'Alta'
        },
        {
          name: 'Kotlin',
          description: 'Lenguaje moderno que corre en la JVM. Más conciso que Java, igual de poderoso',
          purpose: 'Desarrollo Android moderno, aplicaciones JVM contemporáneas. Menos código, más seguridad que Java',
          logo: '/src/assets/images/logos/kotlin.png',
          learningPath: '/backend/kotlin',
          demand: 'Creciente'
        }
      ]
    },

    roadmap: {
      title: 'Roadmap recomendado de aprendizaje',
      description: 'Flujo lógico desde conceptos básicos hasta arquitecturas avanzadas',
      phases: [
        {
          phase: 'Fundamentos',
          duration: '1-2 meses',
          topics: ['Tipos de datos', 'Control de flujo', 'POO básica', 'Colecciones'],
          goal: 'Entender sintaxis y conceptos básicos'
        },
        {
          phase: 'Nivel Intermedio',
          duration: '2-3 meses',
          topics: ['Patrones de diseño', 'APIs REST', 'Bases de datos', 'Testing'],
          goal: 'Construir aplicaciones funcionales'
        },
        {
          phase: 'Nivel Avanzado',
          duration: '3+ meses',
          topics: ['Microservicios', 'Docker/Kubernetes', 'Cloud (AWS)', 'DevOps'],
          goal: 'Arquitecturas escalables en producción'
        },
        {
          phase: 'Especialización',
          duration: 'Continuos',
          topics: ['Machine Learning', 'IoT', 'Blockchain', 'Desarrollo móvil'],
          goal: 'Nicho especializado'
        }
      ]
    },

    comparison: {
      title: 'Comparativa técnica: ¿Cuál elegir?',
      comparisons: [
        {
          title: 'Java vs Kotlin',
          table: [
            { aspect: 'Curva de aprendizaje', java: 'Media', kotlin: 'Media' },
            { aspect: 'Rendimiento', java: 'Muy alto', kotlin: 'Muy alto (igual a Java)' },
            { aspect: 'Madurez', java: 'Extrema (25 años)', kotlin: 'Alta (10 años)' },
            { aspect: 'Sintaxis', java: 'Verbosa', kotlin: 'Concisa' },
            { aspect: 'Demanda laboral', java: 'Excepcional', kotlin: 'Creciente' }
          ]
        },
        {
          title: 'Spring Boot vs Node.js',
          table: [
            { aspect: 'Tipo', spring: 'Framework Backend', nodejs: 'Runtime JavaScript' },
            { aspect: 'Escalabilidad', spring: 'Vertical y horizontal', nodejs: 'Horizontal (mejor)' },
            { aspect: 'Para startups', spring: 'Robusto', nodejs: 'Rápido de desarrollar' },
            { aspect: 'Ecosistema', spring: 'Maduro', nodejs: 'Joven pero vasto' },
            { aspect: 'Curva aprendizaje', spring: 'Media-Alta', nodejs: 'Baja' }
          ]
        }
      ]
    },

    jobOpportunities: {
      title: 'Oportunidades laborales en Backend',
      stats: [
        { metric: 'Salario promedio (España)', value: '€45,000 - €60,000' },
        { metric: 'Salario promedio (Latinoamérica)', value: '$2,500 - $4,500 USD' },
        { metric: 'Demanda vs oferta', value: '3:1 (alta demanda)' },
        { metric: 'Roles disponibles', value: 'Senior, Mid-level, Junior' }
      ],
      roles: [
        { title: 'Backend Developer', companies: 'Bancos, Startups, Tech' },
        { title: 'Full Stack Developer', companies: 'Agencias, Startups' },
        { title: 'DevOps Engineer', companies: 'Cloud providers, Enterprise' },
        { title: 'Solutions Architect', companies: 'Consulting, Enterprise' }
      ]
    },

    faqs: [
      {
        question: '¿Por dónde empiezo si nunca programé?',
        answer: 'Comienza con Java Fundamentos. Aprenderás conceptos universales que aplican a cualquier lenguaje. No necesitas experiencia previa.'
      },
      {
        question: '¿Cuánto tiempo tarda aprender Backend?',
        answer: 'Fundamentos sólidos: 3-6 meses. Junior competitivo: 1 año. Experto: 3-5 años. Pero puedes conseguir tu primer trabajo después de 6-8 meses de estudio dedicado.'
      },
      {
        question: '¿Java está muerto? ¿Debería aprender Node.js en su lugar?',
        answer: 'No. Java es más vivo que nunca. Pero no es "Java vs Node.js", es sobre cuándo usar cada uno. Java para sistemas robustos a escala. Node.js para prototipos rápidos y real-time.'
      },
      {
        question: '¿Necesito aprender todas estas tecnologías?',
        answer: 'No. Elige un path: Java + Spring Boot (Empresas), Node.js (Startups), o Kotlin (Moderno). Los principios son iguales, herramientas diferentes.'
      },
      {
        question: '¿Qué viene después de Backend?',
        answer: 'DevOps (Docker, Kubernetes, AWS), Microservicios, o especialización (ML, Blockchain). Backend es la base para todo.'
      }
    ]
  },

  frontend: {
    id: 'frontend',
    name: 'Frontend & Desarrollo Web',
    slug: 'frontend',
    metaTitle: 'Frontend & Desarrollo Web: React, Angular, HTML, CSS | Fullstack Dev Lovers',
    metaDescription: 'Domina desarrollo frontend con React, Angular, HTML, CSS y Tailwind. Desde diseño responsivo hasta aplicaciones interactivas modernas.',
    metaKeywords: 'frontend development, react tutorial, angular, html css, web development, responsive design',
    ogImage: '/src/assets/images/logos/frontend.jpeg',

    hero: {
      title: 'Frontend & Desarrollo Web',
      subtitle: 'Crea interfaces visuales que enamoran a usuarios',
      description: 'React, Angular, HTML, CSS, Bootstrap, Tailwind y frameworks web modernos. Aprende a construir experiencias de usuario excepcionales.',
      cta: 'Comenzar a aprender'
    },

    whyLearn: {
      title: '¿Por qué aprender Frontend?',
      items: [
        {
          title: 'Impacto visual inmediato',
          description: 'Ves tus cambios en tiempo real en el navegador. Feedback inmediato y motivante'
        },
        {
          title: 'Demanda creciente',
          description: 'Más empresas invierten en experiencia de usuario. Salarios competitivos y crecientes'
        },
        {
          title: 'Carrera versátil',
          description: 'Frontend web, móvil (React Native), desktop (Electron). Opciones ilimitadas'
        },
        {
          title: 'Comunidad activa',
          description: 'React y Angular tienen comunidades enormes. Recursos, librerías y soporte infinito'
        }
      ]
    },

    mainTechnologies: {
      title: 'Lenguajes y Frameworks principales',
      description: 'Las tecnologías más demandadas en desarrollo web',
      technologies: [
        {
          name: 'React',
          description: 'Librería JavaScript más popular. Componentes reutilizables y gestión de estado eficiente',
          purpose: 'Aplicaciones web interactivas modernas. Startups tech, fintechs, plataformas SaaS. Componentes reutilizables y performance',
          logo: '/src/assets/images/logos/react.png',
          learningPath: '/frontend/react',
          demand: 'Muy alta'
        },
        {
          name: 'Angular',
          description: 'Framework completo empresarial. Usado en grandes corporaciones y bancos',
          purpose: 'Grandes aplicaciones empresariales con equipos grandes. Estructura garantizada, TypeScript integrado, excelente para corporaciones',
          logo: '/src/assets/images/logos/angular-logo.jpeg',
          learningPath: '/frontend/angular',
          demand: 'Alta'
        },
        {
          name: 'HTML & CSS',
          description: 'Fundamentos web. Dominarlos es esencial antes de frameworks',
          purpose: 'Base de toda página web. HTML estructura contenido, CSS lo estiliza. Necesario antes de cualquier framework',
          logo: '/src/assets/images/logos/html-logo.png',
          learningPath: '/frontend/html',
          demand: 'Fundamental'
        },
        {
          name: 'Tailwind CSS',
          description: 'Framework de utilidades CSS. Desarrollo rápido y diseños consistentes',
          purpose: 'Construcción rápida de interfaces hermosas. Evita escribir CSS puro. Ideal para prototipado y MVPs',
          logo: '/src/assets/images/logos/tailwindcss.png',
          learningPath: '/frontend/tailwindcss',
          demand: 'Creciente'
        },
        {
          name: 'Bootstrap',
          description: 'Framework CSS más popular. Componentes prediseñados y responsive',
          purpose: 'Construcción rápida de sitios web profesionales. Componentes prediseñados, grid system robusto, compatible con todos los navegadores',
          logo: '/src/assets/images/logos/bootstrap.jpeg',
          learningPath: '/frontend/bootstrap',
          demand: 'Alta'
        }
      ]
    },

    roadmap: {
      title: 'Roadmap recomendado de aprendizaje',
      description: 'Flujo lógico para dominar Frontend',
      phases: [
        {
          phase: 'Fundamentos Web',
          duration: '3-4 semanas',
          topics: ['HTML semántico', 'CSS moderno', 'Flexbox/Grid', 'Responsive Design'],
          goal: 'Entender la web base'
        },
        {
          phase: 'JavaScript ES6+',
          duration: '4-6 semanas',
          topics: ['Sintaxis moderna', 'DOM API', 'Async/Await', 'Modularidad'],
          goal: 'Dominar JavaScript'
        },
        {
          phase: 'React/Angular Basics',
          duration: '6-8 semanas',
          topics: ['Componentes', 'Props/State', 'Hooks', 'Routing'],
          goal: 'Primeras apps interactivas'
        },
        {
          phase: 'Nivel Producción',
          duration: '8+ semanas',
          topics: ['Testing', 'Performance', 'DevTools', 'Build tools'],
          goal: 'Aplicaciones profesionales'
        }
      ]
    },

    comparison: {
      title: 'Comparativa técnica: ¿Cuál elegir?',
      comparisons: [
        {
          title: 'React vs Angular',
          table: [
            { aspect: 'Tipo', react: 'Librería', angular: 'Framework completo' },
            { aspect: 'Curva aprendizaje', react: 'Media', angular: 'Alta' },
            { aspect: 'Flexibilidad', react: 'Extrema', angular: 'Limitada (pero estructurada)' },
            { aspect: 'Comunidad', react: 'Enorme', angular: 'Grande (corporativa)' },
            { aspect: 'Para startups', react: 'Perfecto', angular: 'Overhead innecesario' }
          ]
        }
      ]
    },

    jobOpportunities: {
      title: 'Oportunidades laborales en Frontend',
      stats: [
        { metric: 'Salario promedio (España)', value: '€38,000 - €50,000' },
        { metric: 'Salario promedio (Latinoamérica)', value: '$2,000 - $3,500 USD' },
        { metric: 'Demanda vs oferta', value: '2:1 (buena demanda)' },
        { metric: 'Roles disponibles', value: 'React, Angular, Full Stack' }
      ],
      roles: [
        { title: 'Frontend Developer', companies: 'Agencias, Startups, Tech' },
        { title: 'React Specialist', companies: 'Tech companies, Startups' },
        { title: 'UI/UX Developer', companies: 'Design studios, Companies' },
        { title: 'Full Stack Developer', companies: 'Startups, Agencies' }
      ]
    },

    faqs: [
      {
        question: '¿Necesito aprender diseño para ser Frontend Developer?',
        answer: 'No, pero ayuda. Mínimo debes entender UX/UI basics. Muchos diseñadores y developers trabajan juntos; no son la misma cosa.'
      },
      {
        question: '¿React o Angular? ¿Cuál debería aprender?',
        answer: 'React: Startups, rápido desarrollo, comunidad enorme. Angular: Empresas grandes, estructura garantizada. Aprende React primero, es más fácil.'
      },
      {
        question: '¿Puedo hacer Frontend sin JavaScript?',
        answer: 'No. JavaScript es obligatorio. HTML y CSS son la base, pero JavaScript da interactividad. Es el núcleo del frontend moderno.'
      },
      {
        question: '¿Qué es más fácil: Frontend o Backend?',
        answer: 'Frontend: Más rápido ver resultados (motivante). Backend: Conceptos más complejos. Ideal: aprender ambos (Full Stack).'
      },
      {
        question: '¿Hay futuro en Frontend?',
        answer: 'Sí. Cada vez más empresas invierten en experiencia de usuario. Web, móvil, desktop: el frontend está en todas partes.'
      }
    ]
  },

  datos: {
    id: 'datos',
    name: 'Datos & Almacenamiento',
    slug: 'datos',
    metaTitle: 'Bases de Datos: SQL, MongoDB, DynamoDB | Fullstack Dev Lovers',
    metaDescription: 'Domina gestión de datos con SQL, MongoDB, PostgreSQL y DynamoDB. Diseño de bases de datos, optimización de queries y NoSQL.',
    metaKeywords: 'sql tutorial, mongodb, database, postgresql, dynamodb, database design',
    ogImage: '/src/assets/images/logos/database.png',

    hero: {
      title: 'Datos & Almacenamiento',
      subtitle: 'El corazón de toda aplicación moderna',
      description: 'SQL, MongoDB, PostgreSQL, DynamoDB. Aprende a diseñar, optimizar y escalar bases de datos para cualquier aplicación.',
      cta: 'Comenzar a aprender'
    },

    whyLearn: {
      title: '¿Por qué aprender Bases de Datos?',
      items: [
        {
          title: 'Habilidad transversal',
          description: 'Aplicable a Backend, Frontend (con APIs), Data Science, DevOps. Nunca pasa de moda'
        },
        {
          title: 'Diferenciadoras del mercado',
          description: 'Muchos developers no dominan bases de datos bien. Especializarse aquí te hace valioso'
        },
        {
          title: 'Performance crítico',
          description: 'Una query lenta = app lenta = usuarios insatisfechos. Optimizar es un superpoder'
        },
        {
          title: 'Escalabilidad sin límites',
          description: 'Aprende a soportar millones de registros y queries simultáneas'
        }
      ]
    },

    mainTechnologies: {
      title: 'Tecnologías principales',
      description: 'Bases de datos relacionales y NoSQL',
      technologies: [
        {
          name: 'SQL (PostgreSQL)',
          description: 'Relacional maduro. Estándar en empresas. Transacciones ACID garantizadas',
          purpose: 'Datos estructurados, relaciones complejas, finanzas. Apps empresariales donde integridad es critica',
          logo: '/src/assets/images/logos/database.png',
          learningPath: '/datos/sql',
          demand: 'Muy alta'
        },
        {
          name: 'MongoDB',
          description: 'NoSQL flexible. JSON-like. Ideal para datos no estructurados',
          purpose: 'Startups, datos cambiantes, prototipado rápido. Documentos JSON nativos, sin schema rígido',
          logo: '/src/assets/images/logos/mongodb.png',
          learningPath: '/datos/mongodb',
          demand: 'Alta'
        },
        {
          name: 'DynamoDB',
          description: 'Servicio AWS serverless. Escalado automático. Caro pero confiable',
          purpose: 'Apps serverless en AWS, escalado automático. IoT, mobile backends, aplicaciones con picos de carga',
          logo: '/src/assets/images/logos/aws.png',
          learningPath: '/cloud/aws',
          demand: 'Creciente'
        }
      ]
    },

    roadmap: {
      title: 'Roadmap recomendado de aprendizaje',
      description: 'De conceptos a optimización avanzada',
      phases: [
        {
          phase: 'Fundamentos SQL',
          duration: '3-4 semanas',
          topics: ['DDL/DML', 'JOINs', 'Índices básicos', 'Normalización'],
          goal: 'Manejar SQL con soltura'
        },
        {
          phase: 'Diseño de BD',
          duration: '2-3 semanas',
          topics: ['Normalización', 'Entity-Relationship', 'Constraints', 'Integridad'],
          goal: 'Diseñar bien desde el inicio'
        },
        {
          phase: 'NoSQL',
          duration: '2-3 semanas',
          topics: ['MongoDB basics', 'Aggregation', 'Indexing NoSQL'],
          goal: 'Entender alternativas'
        },
        {
          phase: 'Optimización y Escalado',
          duration: '4+ semanas',
          topics: ['Query optimization', 'Replicación', 'Sharding', 'Caché'],
          goal: 'Bases de datos de producción'
        }
      ]
    },

    comparison: {
      title: 'Comparativa técnica: ¿Cuál elegir?',
      comparisons: [
        {
          title: 'SQL vs NoSQL',
          table: [
            { aspect: 'Estructura', sql: 'Rígida (tablas)', nosql: 'Flexible (documentos)' },
            { aspect: 'Transacciones', sql: 'ACID garantizado', nosql: 'Eventualmente consistente' },
            { aspect: 'Escalabilidad', sql: 'Vertical', nosql: 'Horizontal' },
            { aspect: 'Queries complejas', sql: 'Excelente (JOINs)', nosql: 'Limitado' },
            { aspect: 'Mejor para', sql: 'Datos relacionados', nosql: 'Datos no estructurados' }
          ]
        }
      ]
    },

    jobOpportunities: {
      title: 'Oportunidades laborales en Datos',
      stats: [
        { metric: 'Demanda especialista BD', value: 'Muy alta (escasez)' },
        { metric: 'Salario DBA Senior', value: '€50,000 - €70,000+' },
        { metric: 'Especializaciones', value: 'Data Engineer, DBA, Analytics' },
        { metric: 'Sectores demandantes', value: 'Fintech, Healthcare, E-commerce' }
      ],
      roles: [
        { title: 'Database Administrator (DBA)', companies: 'Enterprises, Banks' },
        { title: 'Data Engineer', companies: 'Tech, BigData, Analytics' },
        { title: 'Backend + BD Specialist', companies: 'Startups, Tech' }
      ]
    },

    faqs: [
      {
        question: '¿SQL sigue siendo relevante en 2024?',
        answer: 'Más que nunca. SQL es el estándar en empresas. Incluso NoSQL se está "SQLificando" (ej: MongoDB agregations). Aprendetlo sin dudas.'
      },
      {
        question: '¿Puedo usar solo NoSQL?',
        answer: 'Técnicamente sí. Pero SQL es más seguro y eficiente para datos relacionados. Lo ideal es dominar ambos.'
      },
      {
        question: '¿Qué aprendo primero: SQL o NoSQL?',
        answer: 'SQL primero. Los conceptos de bases de datos vienen de SQL (normalización, índices, etc.). NoSQL es una alternativa, no un reemplazo.'
      },
      {
        question: '¿Necesito aprender DBA?',
        answer: 'No es obligatorio, pero es una carrera muy bien pagada. Como developer, entender performance y optimización es suficiente.'
      }
    ]
  },

  versionamiento: {
    id: 'versionamiento',
    name: 'Control de Versiones',
    slug: 'versionamiento',
    metaTitle: 'Control de Versiones: Git, GitHub, GitLab | Fullstack Dev Lovers',
    metaDescription: 'Domina Git y control de versiones. Aprende workflows, branching strategies y colaboración en equipo con GitHub y GitLab.',
    metaKeywords: 'git tutorial, github, gitlab, control de versiones, colaboracion desarrollo',
    ogImage: '/src/assets/images/logos/git-logo.png',

    hero: {
      title: 'Control de Versiones',
      subtitle: 'Gestiona código, colabora en equipo y mantén historial completo',
      description: 'Git, GitHub y GitLab. Aprende workflows profesionales, branching strategies y mejores prácticas de colaboración en equipo.',
      cta: 'Comenzar a aprender'
    },

    whyLearn: {
      title: '¿Por qué aprender Control de Versiones?',
      items: [
        {
          title: 'Herramienta imprescindible',
          description: 'No existe proyecto profesional sin control de versiones. Es fundamental en cualquier empresa o equipo'
        },
        {
          title: 'Colaboración sin conflictos',
          description: 'Múltiples desarrolladores trabajando simultáneamente sin pisar cambios mutuamente'
        },
        {
          title: 'Historial y trazabilidad',
          description: 'Cada cambio está documentado: qué cambió, quién lo hizo, cuándo y por qué'
        },
        {
          title: 'Recuperación ante errores',
          description: 'Vuelve a cualquier versión anterior en segundos. Seguridad total para el código'
        }
      ]
    },

    mainTechnologies: {
      title: 'Tecnologías y plataformas',
      description: 'Herramientas más usadas en la industria',
      technologies: [
        {
          name: 'Git',
          description: 'Sistema de control de versiones distribuido. Estándar de la industria desde hace 15 años',
          purpose: 'Gestionar código en equipo sin perder cambios. Historial completo, rollback, ramas para features paralelos',
          logo: '/src/assets/images/logos/git-logo.png',
          learningPath: '/control-versiones/git',
          demand: 'Fundamental'
        },
        {
          name: 'GitHub',
          description: 'Plataforma colaborativa. Estándar en open source y empresas tech',
          purpose: 'Compartir código público/privado, colaboración en equipo. Pull requests, code review, integración con CI/CD',
          logo: '/src/assets/images/logos/git-logo.png',
          learningPath: '/control-versiones/git',
          demand: 'Muy alta'
        },
        {
          name: 'GitLab',
          description: 'Alternativa empresarial con CI/CD integrado. Popular en grandes organizaciones',
          purpose: 'Empresas con requisitos de privacidad. CI/CD, issue tracking, wiki. Solución all-in-one on-premise',
          logo: '/src/assets/images/logos/git-logo.png',
          learningPath: '/control-versiones/git',
          demand: 'Alta'
        }
      ]
    },

    roadmap: {
      title: 'Roadmap recomendado de aprendizaje',
      description: 'De usuario básico a maestro de Git',
      phases: [
        {
          phase: 'Configuración Inicial',
          duration: '1 semana',
          topics: ['Instalación', 'Configuración', 'Primeros comandos', 'Conceptos básicos'],
          goal: 'Tener Git listo y funcionando'
        },
        {
          phase: 'Operaciones Diarias',
          duration: '2-3 semanas',
          topics: ['add/commit', 'push/pull', 'branches', 'merges básicos'],
          goal: 'Trabajar con flujos simples'
        },
        {
          phase: 'Workflows Profesionales',
          duration: '2-3 semanas',
          topics: ['Git Flow', 'GitHub Flow', 'Pull Requests', 'Code Review'],
          goal: 'Colaborar en equipos'
        },
        {
          phase: 'Dominio Avanzado',
          duration: '4+ semanas',
          topics: ['Rebase', 'Cherry-pick', 'Stash', 'Resolución de conflictos complejos'],
          goal: 'Manejar situaciones difíciles'
        }
      ]
    },

    comparison: {
      title: 'Comparativa técnica: Plataformas',
      comparisons: [
        {
          title: 'GitHub vs GitLab',
          table: [
            { aspect: 'Modelo', github: 'Nube (Microsoft)', gitlab: 'Nube + On-premise' },
            { aspect: 'CI/CD', github: 'GitHub Actions (extra)', gitlab: 'Integrado (gratis)' },
            { aspect: 'Comunidad', github: 'Enorme (open source)', gitlab: 'Creciente (empresas)' },
            { aspect: 'Precio', github: 'Freemium', gitlab: 'Freemium + Enterprise' },
            { aspect: 'Para startups', github: 'Perfecto', gitlab: 'Más overkill' }
          ]
        }
      ]
    },

    jobOpportunities: {
      title: 'Oportunidades laborales',
      stats: [
        { metric: 'Git es requisito', value: '100% de puestos tech' },
        { metric: 'Flujo Git profesional', value: 'Diferencia senior/junior' },
        { metric: 'Especialización posible', value: 'Release manager, DevOps' },
        { metric: 'Impacto en carrera', value: 'Critico desde día 1' }
      ],
      roles: [
        { title: 'Developer (cualquier nivel)', companies: 'Todas las empresas tech' },
        { title: 'Release Manager', companies: 'Grandes empresas, Devops' },
        { title: 'DevOps/SRE', companies: 'Tech companies, Infrastructure' }
      ]
    },

    faqs: [
      {
        question: '¿Puedo aprender sin Git?',
        answer: 'No. Git es obligatorio en la industria. Desde proyecto trivial hasta Fortune 500, todos usan Git. Aprendetlo desde el inicio.'
      },
      {
        question: '¿GitHub vs GitLab? ¿Cuál debo aprender?',
        answer: 'GitHub primero. Es el estándar y donde está el 90% del open source. GitLab es parecido, aprender uno facilita el otro.'
      },
      {
        question: '¿Necesito memorizar todos los comandos?',
        answer: 'No. Necesitas los 5-6 principales (add, commit, push, pull, branch, merge). El resto los buscas cuando los necesitas.'
      },
      {
        question: '¿Qué pasa si hago un error en Git?',
        answer: 'Git es muy seguro. Casi todos los errores se pueden revertir. Estudia rebase y reflog cuando domines lo básico.'
      },
      {
        question: '¿Es lo mismo Git que GitHub?',
        answer: 'No. Git es la herramienta local. GitHub es una plataforma en la nube. Git funciona sin GitHub, pero GitHub necesita Git.'
      }
    ]
  },

  containerizacion: {
    id: 'containerizacion',
    name: 'Containerización, Orquestación & Cloud',
    slug: 'cloud',
    metaTitle: 'Docker, Kubernetes & AWS | Containerización y Cloud Computing | Fullstack Dev Lovers',
    metaDescription: 'Domina Docker, Kubernetes y AWS. Aprende a containerizar aplicaciones, orquestar microservicios y desplegar en la nube.',
    metaKeywords: 'docker tutorial, kubernetes, aws, containerizacion, cloud computing, microservicios',
    ogImage: '/src/assets/images/logos/cloud-computing.jpeg',

    hero: {
      title: 'Containerización, Orquestación & Cloud',
      subtitle: 'Empaca, escala y despliega aplicaciones en cualquier lugar',
      description: 'Docker, Kubernetes y AWS. Aprende containerización, orquestación de microservicios y arquitecturas cloud modernas.',
      cta: 'Comenzar a aprender'
    },

    whyLearn: {
      title: '¿Por qué aprender Cloud & Containers?',
      items: [
        {
          title: 'Industria en transición',
          description: 'El 70% de nuevos proyectos usan containers. Saltar al cloud es la norma ahora'
        },
        {
          title: 'Escalabilidad automática',
          description: 'Desde 1 a 1 millón de usuarios sin tocar código. Orquestación automática'
        },
        {
          title: 'Reducción de costos',
          description: 'Paga solo lo que usas. No mantengas servidores ociosos'
        },
        {
          title: 'DevOps y carrera lucrativa',
          description: 'Los salarios más altos están en cloud. Especialización valorada'
        }
      ]
    },

    mainTechnologies: {
      title: 'Tecnologías principales',
      description: 'Stack moderno de containerización y cloud',
      technologies: [
        {
          name: 'Docker',
          description: 'Containerización. Empaca tu app con todas sus dependencias. Corre igual en laptop y producción',
          purpose: 'Eliminar "funciona en mi máquina". Deployment consistente. Microservicios, desarrollo local realista',
          logo: '/src/assets/images/logos/docker-lgo.png',
          learningPath: '/cloud/docker',
          demand: 'Muy alta'
        },
        {
          name: 'Kubernetes',
          description: 'Orquestación de containers. Gestiona miles de containers automáticamente',
          purpose: 'Escalar automáticamente con demanda. Self-healing, rollouts sin downtime. Infraestructura cloud nativa',
          logo: '/src/assets/images/logos/kubernetes-logo.png',
          learningPath: '/cloud/kubernetes',
          demand: 'Muy alta'
        },
        {
          name: 'AWS',
          description: 'Plataforma cloud más grande. EC2, Lambda, RDS, S3. Domina aquí y trasladate a Azure/GCP',
          purpose: 'Infraestructura mundial, escalado automático, paga lo que usas. Desde startups a Fortune 500',
          logo: '/src/assets/images/logos/aws.png',
          learningPath: '/cloud/aws',
          demand: 'Excepcional'
        }
      ]
    },

    roadmap: {
      title: 'Roadmap recomendado de aprendizaje',
      description: 'Desde containers simples a arquitecturas cloud complejas',
      phases: [
        {
          phase: 'Docker Fundamentos',
          duration: '2-3 semanas',
          topics: ['Imágenes', 'Containers', 'Dockerfile', 'Docker Compose'],
          goal: 'Containerizar una app simple'
        },
        {
          phase: 'Docker Avanzado',
          duration: '2-3 semanas',
          topics: ['Optimización', 'Networking', 'Volúmenes', 'Multi-stage builds'],
          goal: 'Producción-ready containers'
        },
        {
          phase: 'Kubernetes Basics',
          duration: '3-4 semanas',
          topics: ['Pods', 'Services', 'Deployments', 'ConfigMaps'],
          goal: 'Orquestar múltiples containers'
        },
        {
          phase: 'Cloud (AWS)',
          duration: '4+ semanas',
          topics: ['EC2', 'Lambda', 'RDS', 'S3', 'Auto-scaling'],
          goal: 'Arquitecturas en producción'
        }
      ]
    },

    comparison: {
      title: 'Comparativa técnica: Opciones',
      comparisons: [
        {
          title: 'Docker vs VM tradicionales',
          table: [
            { aspect: 'Tamaño', docker: '100MB - 1GB', vm: '5-50GB' },
            { aspect: 'Startup time', docker: 'Milisegundos', vm: 'Minutos' },
            { aspect: 'Densidad', docker: '100+ por servidor', vm: '5-10 por servidor' },
            { aspect: 'Overhead', docker: 'Mínimo', vm: 'Alto' },
            { aspect: 'Portabilidad', docker: 'Perfecta', vm: 'Limitada' }
          ]
        },
        {
          title: 'Kubernetes vs Docker Swarm',
          table: [
            { aspect: 'Madurez', kubernetes: 'Extrema', swarm: 'Deprecated' },
            { aspect: 'Adopción', kubernetes: 'Estándar industria', swarm: 'Casi nada' },
            { aspect: 'Curva aprendizaje', kubernetes: 'Alta', swarm: 'Baja' },
            { aspect: 'Poder', kubernetes: 'Excepcional', swarm: 'Limitado' },
            { aspect: 'Comunidad', kubernetes: 'Gigante', swarm: 'Pequeña' }
          ]
        }
      ]
    },

    jobOpportunities: {
      title: 'Oportunidades laborales en Cloud',
      stats: [
        { metric: 'Salario DevOps (España)', value: '€45,000 - €65,000' },
        { metric: 'Salario Cloud Architect', value: '€60,000 - €90,000+' },
        { metric: 'Demanda vs oferta', value: '5:1 (escasez crítica)' },
        { metric: 'Crecimiento anual', value: '25%+ en especialistas' }
      ],
      roles: [
        { title: 'DevOps Engineer', companies: 'Tech companies, Startups' },
        { title: 'Cloud Architect', companies: 'Enterprise, Consulting' },
        { title: 'SRE (Site Reliability)', companies: 'Big Tech, Infrastructure' },
        { title: 'Platform Engineer', companies: 'Tech-forward companies' }
      ]
    },

    faqs: [
      {
        question: '¿Necesito aprender Docker antes de Kubernetes?',
        answer: 'Sí. Kubernetes orquesta Docker containers. Primero domina Docker (2-3 semanas), luego Kubernetes.'
      },
      {
        question: '¿Qué cloud elegir: AWS, Azure o GCP?',
        answer: 'AWS es estándar de facto. Aprende AWS primero. Azure y GCP comparten 80% de conceptos, cambiar es fácil.'
      },
      {
        question: '¿Es Kubernetes overkill para mi startup?',
        answer: 'Probablemente. Empieza con Docker en EC2 o Heroku. Kubernetes cuando tengas 10+ microservicios y millones de requests.'
      },
      {
        question: '¿Puedo aprender cloud sin backend?',
        answer: 'Sí, pero es subóptimo. Cloud es donde corre el backend. Ideal: aprende backend + docker + cloud como stack.'
      },
      {
        question: '¿Cuál es mejor: Lambda (serverless) o EC2?',
        answer: 'Depende. Lambda para APIs stateless y picos de carga. EC2 para apps que corren constantemente. Muchas veces necesitas ambas.'
      }
    ]
  },

  herramientas: {
    id: 'herramientas',
    name: 'Herramientas & Metodologías',
    slug: 'metodologias-herramientas',
    metaTitle: 'Metodologías Agile, Clean Code, Testing | Fullstack Dev Lovers',
    metaDescription: 'Domina Agile/SCRUM, Clean Code, Testing y mejores prácticas de desarrollo. Soft skills y patrones profesionales.',
    metaKeywords: 'agile scrum, clean code, testing, desarrollo software, metodologias, patrones diseno',
    ogImage: '/src/assets/images/logos/procesos.png',

    hero: {
      title: 'Herramientas & Metodologías',
      subtitle: 'Escribe código limpio, colabora efectivamente y entrega software de calidad',
      description: 'Agile/SCRUM, Clean Code, Testing, patrones de diseño y mejores prácticas profesionales de desarrollo.',
      cta: 'Comenzar a aprender'
    },

    whyLearn: {
      title: '¿Por qué aprender Metodologías?',
      items: [
        {
          title: 'Carrera profesional',
          description: 'Metodologías te dan estructura y credibilidad. Empresas buscan developers que saben trabajar en equipo'
        },
        {
          title: 'Eficiencia del equipo',
          description: 'Agile acelera entregas, reduce bugs y mejora comunicación. No es solo teórico, es práctica'
        },
        {
          title: 'Código mantenible',
          description: 'Clean Code y patrones hacen código legible. Ahorra días de debugging en mantenimiento'
        },
        {
          title: 'Confianza en releases',
          description: 'Testing = dormir tranquilo. Deploy a producción sin miedo'
        }
      ]
    },

    mainTechnologies: {
      title: 'Áreas principales',
      description: 'Competencias y metodologías que diferencian seniors de juniors',
      technologies: [
        {
          name: 'Agile & SCRUM',
          description: 'Metodología ágil para gestión de proyectos iterativos y entregas frecuentes',
          purpose: 'Organizar equipos, entregar rápido, adaptarse a cambios. Sprints, daily standups, retrospectivas',
          logo: '/src/assets/images/logos/procesos.png',
          learningPath: '/herramientas/metodologias',
          demand: 'Fundamental'
        },
        {
          name: 'Clean Code',
          description: 'Principios SOLID, naming, funciones pequeñas. Código que otros desarrolladores entienden',
          purpose: 'Código mantenible, reducir bugs, facilitar refactoring. Ahorra horas en debugging y maintenance',
          logo: '/src/assets/images/logos/procesos.png',
          learningPath: '/herramientas/metodologias',
          demand: 'Muy alta'
        },
        {
          name: 'Software Testing',
          description: 'Unit testing, integration testing, TDD. Garantiza calidad y previene bugs',
          purpose: 'Deployments confiables, menos bugs en producción. Tests actúan como documentación',
          logo: '/src/assets/images/logos/procesos.png',
          learningPath: '/herramientas/metodologias',
          demand: 'Alta'
        }
      ]
    },

    roadmap: {
      title: 'Roadmap recomendado de aprendizaje',
      description: 'De developer solitario a profesional empresarial',
      phases: [
        {
          phase: 'Fundamentos Agile',
          duration: '1-2 semanas',
          topics: ['Valores Agile', 'SCRUM basics', 'Sprints', 'Daily standup'],
          goal: 'Entender filosofía ágil'
        },
        {
          phase: 'Clean Code',
          duration: '2-3 semanas',
          topics: ['Nombres significativos', 'Funciones pequeñas', 'SOLID', 'Refactoring'],
          goal: 'Escribir código legible'
        },
        {
          phase: 'Testing',
          duration: '3-4 semanas',
          topics: ['Unit tests', 'Mocking', 'TDD', 'Coverage'],
          goal: 'Tests como standard'
        },
        {
          phase: 'Patrones Avanzados',
          duration: '4+ semanas',
          topics: ['Design patterns', 'Architecture', 'Antipatterns', 'Code review'],
          goal: 'Guiar a otros developers'
        }
      ]
    },

    comparison: {
      title: 'Comparativa: Methodologies',
      comparisons: [
        {
          title: 'Agile vs Waterfall',
          table: [
            { aspect: 'Enfoque', agile: 'Iterativo (sprints)', waterfall: 'Secuencial (fases)' },
            { aspect: 'Feedback', agile: 'Continuo cada sprint', waterfall: 'Al final del proyecto' },
            { aspect: 'Cambios', agile: 'Bienvenidos', waterfall: 'Costosos' },
            { aspect: 'Documentación', agile: 'Mínima', waterfall: 'Exhaustiva' },
            { aspect: 'Para startups', agile: 'Perfecto', waterfall: 'Raramente usado' }
          ]
        }
      ]
    },

    jobOpportunities: {
      title: 'Oportunidades laborales',
      stats: [
        { metric: 'Agile obligatorio en', value: '90% empresas tech' },
        { metric: 'Clean Code valora', value: 'Diferencia senior/mid 10%+ salario' },
        { metric: 'Testing knowledge', value: 'Requisito en startups serias' },
        { metric: 'Scrum Master salario', value: '€40,000 - €55,000' }
      ],
      roles: [
        { title: 'Developer (cualquier nivel)', companies: 'Todas las empresas ágiles' },
        { title: 'Scrum Master', companies: 'Equipos ágiles, Coaching' },
        { title: 'Agile Coach', companies: 'Consulting, Transformation' },
        { title: 'QA Engineer / Tester', companies: 'Software houses, QA teams' }
      ]
    },

    faqs: [
      {
        question: '¿Agile es obligatorio?',
        answer: 'Sí. 90% de empresas tech usa Agile/SCRUM. Es muy raro encontrar proyecto con Waterfall hoy.'
      },
      {
        question: '¿Clean Code ralentiza desarrollo?',
        answer: 'Al inicio parece lento. A largo plazo ahorra tiempo masivamente. Refactoring es más fácil, bugs menos comunes.'
      },
      {
        question: '¿TDD es práctico?',
        answer: 'Sí y requiere disciplina. Escribir test primero evita muchos bugs. Empresas serias lo hacen.'
      },
      {
        question: '¿Qué es más importante: testing o clean code?',
        answer: 'Ambos. Clean Code sin tests es frágil. Tests sin clean code son caros de mantener. Necesitas ambos.'
      },
      {
        question: '¿Cuándo debo aprender esto?',
        answer: 'Ahora. Estas metodologías aplican desde proyecto trivial. Es inversión desde día 1, no después.'
      }
    ]
  }
};
