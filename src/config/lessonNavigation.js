/**
 * Configuración de navegación para todas las lecciones
 * Define las rutas anterior y siguiente para cada lección
 */

export const lessonNavigationMap = {
  // Git - Básicos
  '/git/basicos/configuracion-inicial': {
    previous: null,
    previousTitle: null,
    next: '/git/basicos/crear-clonar-repos',
    nextTitle: 'Crear y clonar repositorios'
  },
  '/git/basicos/crear-clonar-repos': {
    previous: '/git/basicos/configuracion-inicial',
    previousTitle: 'Configuración inicial de Git',
    next: '/git/basicos/commits',
    nextTitle: 'Commits y mensajes claros'
  },
  '/git/basicos/commits': {
    previous: '/git/basicos/crear-clonar-repos',
    previousTitle: 'Crear y clonar repositorios',
    next: '/git/basicos/branches',
    nextTitle: 'Ramas (branches)'
  },
  '/git/basicos/branches': {
    previous: '/git/basicos/commits',
    previousTitle: 'Commits y mensajes claros',
    next: '/git/basicos/merge',
    nextTitle: 'Merge y resolución de conflictos'
  },
  '/git/basicos/merge': {
    previous: '/git/basicos/branches',
    previousTitle: 'Ramas (branches)',
    next: '/git/avanzado/push-pull-fetch',
    nextTitle: 'Push, Pull y Fetch'
  },

  // Git - Avanzado
  '/git/avanzado/push-pull-fetch': {
    previous: '/git/basicos/merge',
    previousTitle: 'Merge y resolución de conflictos',
    next: '/git/avanzado/pull-requests',
    nextTitle: 'Pull requests y colaboración'
  },
  '/git/avanzado/pull-requests': {
    previous: '/git/avanzado/push-pull-fetch',
    previousTitle: 'Push, Pull y Fetch',
    next: '/git/avanzado/plataformas-remotas',
    nextTitle: 'GitHub, GitLab y Bitbucket'
  },
  '/git/avanzado/plataformas-remotas': {
    previous: '/git/avanzado/pull-requests',
    previousTitle: 'Pull requests y colaboración',
    next: '/git/avanzado/workflow',
    nextTitle: 'Git Workflow y Conventional Commits'
  },
  '/git/avanzado/workflow': {
    previous: '/git/avanzado/plataformas-remotas',
    previousTitle: 'GitHub, GitLab y Bitbucket',
    next: '/git/avanzado/github',
    nextTitle: 'GitHub'
  },
  '/git/avanzado/github': {
    previous: '/git/avanzado/workflow',
    previousTitle: 'Git Workflow y Conventional Commits',
    next: '/git/avanzado/gitlab',
    nextTitle: 'GitLab'
  },
  '/git/avanzado/gitlab': {
    previous: '/git/avanzado/github',
    previousTitle: 'GitHub',
    next: '/git/avanzado/bitbucket',
    nextTitle: 'Bitbucket'
  },
  '/git/avanzado/bitbucket': {
    previous: '/git/avanzado/gitlab',
    previousTitle: 'GitLab',
    next: null,
    nextTitle: null
  },

  // Java - Básico
  '/java/basico/funcionamiento': {
    previous: null,
    previousTitle: null,
    next: '/java/basico/tipos-datos',
    nextTitle: 'Tipos de Datos'
  },
  '/java/basico/tipos-datos': {
    previous: '/java/basico/funcionamiento',
    previousTitle: 'Funcionamiento Interno de Java',
    next: '/java/basico/control-flujo',
    nextTitle: 'Control de Flujo'
  },
  '/java/basico/control-flujo': {
    previous: '/java/basico/tipos-datos',
    previousTitle: 'Tipos de Datos',
    next: '/java/basico/strings',
    nextTitle: 'Strings y Texto'
  },
  '/java/basico/strings': {
    previous: '/java/basico/control-flujo',
    previousTitle: 'Control de Flujo',
    next: '/java/basico/arrays',
    nextTitle: 'Arrays y Matrices'
  },
  '/java/basico/arrays': {
    previous: '/java/basico/strings',
    previousTitle: 'Strings y Texto',
    next: '/java/basico/scanner',
    nextTitle: 'Scanner e Entrada'
  },
  '/java/basico/scanner': {
    previous: '/java/basico/arrays',
    previousTitle: 'Arrays y Matrices',
    next: '/java/basico/excepciones',
    nextTitle: 'Excepciones'
  },
  '/java/basico/excepciones': {
    previous: '/java/basico/scanner',
    previousTitle: 'Scanner e Entrada',
    next: '/java/basico/operadores',
    nextTitle: 'Operadores'
  },
  '/java/basico/operadores': {
    previous: '/java/basico/excepciones',
    previousTitle: 'Excepciones',
    next: '/java/poo/clases-objetos',
    nextTitle: 'Clases y Objetos'
  },

  // Java - POO
  '/java/poo/clases-objetos': {
    previous: '/java/basico/operadores',
    previousTitle: 'Operadores',
    next: '/java/poo/herencia',
    nextTitle: 'Herencia'
  },
  '/java/poo/herencia': {
    previous: '/java/poo/clases-objetos',
    previousTitle: 'Clases y Objetos',
    next: '/java/poo/polimorfismo',
    nextTitle: 'Polimorfismo'
  },
  '/java/poo/polimorfismo': {
    previous: '/java/poo/herencia',
    previousTitle: 'Herencia',
    next: '/java/poo/interfaces-abstractas',
    nextTitle: 'Interfaces y Clases Abstractas'
  },
  '/java/poo/interfaces-abstractas': {
    previous: '/java/poo/polimorfismo',
    previousTitle: 'Polimorfismo',
    next: '/java/avanzado/jvm',
    nextTitle: 'Fundamentos de la Máquina de Java'
  },

  // Java - Avanzado
  '/java/avanzado/jvm': {
    previous: '/java/poo/interfaces-abstractas',
    previousTitle: 'Interfaces y Clases Abstractas',
    next: '/java/avanzado/colecciones',
    nextTitle: 'Colecciones en Java'
  },
  '/java/avanzado/colecciones': {
    previous: '/java/avanzado/jvm',
    previousTitle: 'Fundamentos de la Máquina de Java',
    next: '/java/avanzado/lambdas',
    nextTitle: 'Expresiones Lambda'
  },
  '/java/avanzado/lambdas': {
    previous: '/java/avanzado/colecciones',
    previousTitle: 'Colecciones en Java',
    next: '/java/avanzado/streams',
    nextTitle: 'Streams API'
  },
  '/java/avanzado/streams': {
    previous: '/java/avanzado/lambdas',
    previousTitle: 'Expresiones Lambda',
    next: '/java/avanzado/genericos',
    nextTitle: 'Genéricos'
  },
  '/java/avanzado/genericos': {
    previous: '/java/avanzado/streams',
    previousTitle: 'Streams API',
    next: '/java/bd/jdbc',
    nextTitle: 'JDBC - Conectar a Bases de Datos'
  },

  // Java - BD
  '/java/bd/jdbc': {
    previous: '/java/avanzado/genericos',
    previousTitle: 'Genéricos',
    next: '/java/bd/crud',
    nextTitle: 'CRUD y Transacciones'
  },
  '/java/bd/crud': {
    previous: '/java/bd/jdbc',
    previousTitle: 'JDBC - Conectar a Bases de Datos',
    next: '/entornos/herramientas/concepto',
    nextTitle: 'Concepto de Entorno de Desarrollo'
  },

  // Entornos - Herramientas
  '/entornos/herramientas/concepto': {
    previous: '/java/bd/crud',
    previousTitle: 'CRUD y Transacciones',
    next: '/entornos/herramientas/ides',
    nextTitle: 'IDEs y Editores'
  },
  '/entornos/herramientas/ides': {
    previous: '/entornos/herramientas/concepto',
    previousTitle: 'Concepto de Entorno de Desarrollo',
    next: '/entornos/herramientas/codeium',
    nextTitle: 'Codeium AI'
  },
  '/entornos/herramientas/codeium': {
    previous: '/entornos/herramientas/ides',
    previousTitle: 'IDEs y Editores',
    next: '/entornos/arquitectura/uml',
    nextTitle: 'UML y Diagramas'
  },

  // Entornos - Arquitectura
  '/entornos/arquitectura/uml': {
    previous: '/entornos/herramientas/codeium',
    previousTitle: 'Codeium AI',
    next: '/entornos/arquitectura/patrones',
    nextTitle: 'Patrones de Diseño'
  },
  '/entornos/arquitectura/patrones': {
    previous: '/entornos/arquitectura/uml',
    previousTitle: 'UML y Diagramas',
    next: '/entornos/arquitectura/conceptos',
    nextTitle: 'Conceptos de Desarrollo'
  },
  '/entornos/arquitectura/conceptos': {
    previous: '/entornos/arquitectura/patrones',
    previousTitle: 'Patrones de Diseño',
    next: '/entornos/arquitectura/testing',
    nextTitle: 'Testing y QA'
  },
  '/entornos/arquitectura/testing': {
    previous: '/entornos/arquitectura/conceptos',
    previousTitle: 'Conceptos de Desarrollo',
    next: '/entornos/arquitectura/refactoring',
    nextTitle: 'Refactorización y SOLID'
  },
  '/entornos/arquitectura/refactoring': {
    previous: '/entornos/arquitectura/testing',
    previousTitle: 'Testing y QA',
    next: '/entornos/build/bash',
    nextTitle: 'Bash & Shell - Automatización'
  },

  // Entornos - Build
  '/entornos/build/bash': {
    previous: '/entornos/arquitectura/refactoring',
    previousTitle: 'Refactorización y SOLID',
    next: '/entornos/build/maven',
    nextTitle: 'Maven - Gestión de Proyectos'
  },
  '/entornos/build/maven': {
    previous: '/entornos/build/bash',
    previousTitle: 'Bash & Shell - Automatización',
    next: '/entornos/build/gradle',
    nextTitle: 'Gradle - Build Avanzado'
  },
  '/entornos/build/gradle': {
    previous: '/entornos/build/maven',
    previousTitle: 'Maven - Gestión de Proyectos',
    next: '/entornos/build/dependencias',
    nextTitle: 'Gestión de Dependencias'
  },
  '/entornos/build/dependencias': {
    previous: '/entornos/build/gradle',
    previousTitle: 'Gradle - Build Avanzado',
    next: '/entornos/devops/docker',
    nextTitle: 'Docker - Containerización'
  },

  // Entornos - DevOps
  '/entornos/devops/docker': {
    previous: '/entornos/build/dependencias',
    previousTitle: 'Gestión de Dependencias',
    next: '/entornos/devops/cicd',
    nextTitle: 'CI/CD - Automatización'
  },
  '/entornos/devops/cicd': {
    previous: '/entornos/devops/docker',
    previousTitle: 'Docker - Containerización',
    next: '/entornos/devops/github-actions',
    nextTitle: 'GitHub Actions'
  },
  '/entornos/devops/github-actions': {
    previous: '/entornos/devops/cicd',
    previousTitle: 'CI/CD - Automatización',
    next: '/entornos/devops/cloud-deployment',
    nextTitle: 'Despliegue en Cloud'
  },
  '/entornos/devops/cloud-deployment': {
    previous: '/entornos/devops/github-actions',
    previousTitle: 'GitHub Actions',
    next: '/metodologias/agile-scrum/introduccion',
    nextTitle: 'Introducción a Agile'
  },

  // Metodologías
  '/metodologias/agile-scrum/introduccion': {
    previous: '/entornos/devops/cloud-deployment',
    previousTitle: 'Despliegue en Cloud',
    next: '/metodologias/agile-scrum/scrum',
    nextTitle: 'SCRUM Framework'
  },
  '/metodologias/agile-scrum/scrum': {
    previous: '/metodologias/agile-scrum/introduccion',
    previousTitle: 'Introducción a Agile',
    next: '/metodologias/agile-scrum/sprints',
    nextTitle: 'Sprints y Planning'
  },
  '/metodologias/agile-scrum/sprints': {
    previous: '/metodologias/agile-scrum/scrum',
    previousTitle: 'SCRUM Framework',
    next: '/metodologias/clean-code/nombres',
    nextTitle: 'Nombres Significativos'
  },
  '/metodologias/clean-code/nombres': {
    previous: '/metodologias/agile-scrum/sprints',
    previousTitle: 'Sprints y Planning',
    next: '/metodologias/clean-code/funciones',
    nextTitle: 'Funciones Limpias'
  },
  '/metodologias/clean-code/funciones': {
    previous: '/metodologias/clean-code/nombres',
    previousTitle: 'Nombres Significativos',
    next: '/metodologias/clean-code/estructura',
    nextTitle: 'Estructura y Formato'
  },
  '/metodologias/clean-code/estructura': {
    previous: '/metodologias/clean-code/funciones',
    previousTitle: 'Funciones Limpias',
    next: '/metodologias/clean-code/solid',
    nextTitle: 'SOLID y Refactorización'
  },
  '/metodologias/clean-code/solid': {
    previous: '/metodologias/clean-code/estructura',
    previousTitle: 'Estructura y Formato',
    next: '/metodologias/clean-code/patrones',
    nextTitle: 'Patrones de Diseño'
  },
  '/metodologias/clean-code/patrones': {
    previous: '/metodologias/clean-code/solid',
    previousTitle: 'SOLID y Refactorización',
    next: '/metodologias/clean-code/antipatrones',
    nextTitle: 'Antipatrones: Qué NO Hacer'
  },
  '/metodologias/clean-code/antipatrones': {
    previous: '/metodologias/clean-code/patrones',
    previousTitle: 'Patrones de Diseño',
    next: '/metodologias/testing/unitario',
    nextTitle: 'Testing Unitario'
  },
  '/metodologias/testing/unitario': {
    previous: '/metodologias/clean-code/antipatrones',
    previousTitle: 'Antipatrones: Qué NO Hacer',
    next: '/metodologias/testing/integracion',
    nextTitle: 'Testing de Integración'
  },
  '/metodologias/testing/integracion': {
    previous: '/metodologias/testing/unitario',
    previousTitle: 'Testing Unitario',
    next: '/metodologias/testing/aceptacion',
    nextTitle: 'Testing de Aceptación'
  },
  '/metodologias/testing/aceptacion': {
    previous: '/metodologias/testing/integracion',
    previousTitle: 'Testing de Integración',
    next: '/metodologias/devops/introduccion',
    nextTitle: 'Introducción a DevOps'
  },
  '/metodologias/devops/introduccion': {
    previous: '/metodologias/testing/aceptacion',
    previousTitle: 'Testing de Aceptación',
    next: '/metodologias/devops/cicd',
    nextTitle: 'CI/CD Pipelines'
  },
  '/metodologias/devops/cicd': {
    previous: '/metodologias/devops/introduccion',
    previousTitle: 'Introducción a DevOps',
    next: '/metodologias/devops/monitoreo',
    nextTitle: 'Monitoreo y Logs'
  },
  '/metodologias/devops/monitoreo': {
    previous: '/metodologias/devops/cicd',
    previousTitle: 'CI/CD Pipelines',
    next: '/spring-boot/fundamentos/introduccion',
    nextTitle: 'Introducción a Spring Boot'
  },

  // Spring Boot - Fundamentos
  '/spring-boot/fundamentos/introduccion': {
    previous: '/metodologias/devops/monitoreo',
    previousTitle: 'Monitoreo y Logs',
    next: '/spring-boot/fundamentos/configuracion',
    nextTitle: 'Setup y Configuración'
  },
  '/spring-boot/fundamentos/configuracion': {
    previous: '/spring-boot/fundamentos/introduccion',
    previousTitle: 'Introducción a Spring Boot',
    next: '/spring-boot/fundamentos/controladores',
    nextTitle: 'Controladores REST'
  },
  '/spring-boot/fundamentos/controladores': {
    previous: '/spring-boot/fundamentos/configuracion',
    previousTitle: 'Setup y Configuración',
    next: '/spring-boot/avanzado/servicios',
    nextTitle: 'Servicios y Capas'
  },

  // Spring Boot - Avanzado
  '/spring-boot/avanzado/servicios': {
    previous: '/spring-boot/fundamentos/controladores',
    previousTitle: 'Controladores REST',
    next: '/spring-boot/avanzado/jpa-hibernate',
    nextTitle: 'JPA y Hibernate'
  },
  '/spring-boot/avanzado/jpa-hibernate': {
    previous: '/spring-boot/avanzado/servicios',
    previousTitle: 'Servicios y Capas',
    next: '/spring-boot/avanzado/validacion',
    nextTitle: 'Validación'
  },
  '/spring-boot/avanzado/validacion': {
    previous: '/spring-boot/avanzado/jpa-hibernate',
    previousTitle: 'JPA y Hibernate',
    next: '/spring-boot/avanzado/testing',
    nextTitle: 'Testing'
  },
  '/spring-boot/avanzado/testing': {
    previous: '/spring-boot/avanzado/validacion',
    previousTitle: 'Validación',
    next: '/spring-boot/avanzado/spring-security',
    nextTitle: 'Spring Security'
  },
  '/spring-boot/avanzado/spring-security': {
    previous: '/spring-boot/avanzado/testing',
    previousTitle: 'Testing',
    next: '/spring-boot/avanzado/oauth2-jwt',
    nextTitle: 'OAuth2 y JWT'
  },
  '/spring-boot/avanzado/oauth2-jwt': {
    previous: '/spring-boot/avanzado/spring-security',
    previousTitle: 'Spring Security',
    next: '/proyecto/planificacion/definicion',
    nextTitle: 'Definición del Proyecto'
  },

  // Proyecto - Planificación
  '/proyecto/planificacion/definicion': {
    previous: '/spring-boot/avanzado/oauth2-jwt',
    previousTitle: 'OAuth2 y JWT',
    next: '/proyecto/planificacion/requisitos',
    nextTitle: 'Requisitos y Especificaciones'
  },
  '/proyecto/planificacion/requisitos': {
    previous: '/proyecto/planificacion/definicion',
    previousTitle: 'Definición del Proyecto',
    next: '/proyecto/planificacion/arquitectura',
    nextTitle: 'Arquitectura y Diseño'
  },
  '/proyecto/planificacion/arquitectura': {
    previous: '/proyecto/planificacion/requisitos',
    previousTitle: 'Requisitos y Especificaciones',
    next: '/proyecto/metodologia/agile-scrum',
    nextTitle: 'Agile y SCRUM'
  },

  // Proyecto - Metodología
  '/proyecto/metodologia/agile-scrum': {
    previous: '/proyecto/planificacion/arquitectura',
    previousTitle: 'Arquitectura y Diseño',
    next: '/proyecto/metodologia/sprint-1',
    nextTitle: 'Sprint 1'
  },
  '/proyecto/metodologia/sprint-1': {
    previous: '/proyecto/metodologia/agile-scrum',
    previousTitle: 'Agile y SCRUM',
    next: '/proyecto/metodologia/sprint-2',
    nextTitle: 'Sprint 2'
  },
  '/proyecto/metodologia/sprint-2': {
    previous: '/proyecto/metodologia/sprint-1',
    previousTitle: 'Sprint 1',
    next: '/proyecto/desarrollo/setup',
    nextTitle: 'Setup del Proyecto'
  },

  // Proyecto - Desarrollo
  '/proyecto/desarrollo/setup': {
    previous: '/proyecto/metodologia/sprint-2',
    previousTitle: 'Sprint 2',
    next: '/proyecto/desarrollo/backend',
    nextTitle: 'Desarrollo Backend'
  },
  '/proyecto/desarrollo/backend': {
    previous: '/proyecto/desarrollo/setup',
    previousTitle: 'Setup del Proyecto',
    next: '/proyecto/desarrollo/database',
    nextTitle: 'Base de Datos'
  },
  '/proyecto/desarrollo/database': {
    previous: '/proyecto/desarrollo/backend',
    previousTitle: 'Desarrollo Backend',
    next: '/proyecto/desarrollo/apis',
    nextTitle: 'APIs REST'
  },
  '/proyecto/desarrollo/apis': {
    previous: '/proyecto/desarrollo/database',
    previousTitle: 'Base de Datos',
    next: '/proyecto/testing/unitario',
    nextTitle: 'Testing Unitario'
  },

  // Proyecto - Testing
  '/proyecto/testing/unitario': {
    previous: '/proyecto/desarrollo/apis',
    previousTitle: 'APIs REST',
    next: '/proyecto/testing/integracion',
    nextTitle: 'Testing de Integración'
  },
  '/proyecto/testing/integracion': {
    previous: '/proyecto/testing/unitario',
    previousTitle: 'Testing Unitario',
    next: '/proyecto/testing/validacion',
    nextTitle: 'Validación Final'
  },
  '/proyecto/testing/validacion': {
    previous: '/proyecto/testing/integracion',
    previousTitle: 'Testing de Integración',
    next: '/proyecto/despliegue/build',
    nextTitle: 'Build del Proyecto'
  },

  // Proyecto - Despliegue
  '/proyecto/despliegue/build': {
    previous: '/proyecto/testing/validacion',
    previousTitle: 'Validación Final',
    next: '/proyecto/despliegue/documentacion',
    nextTitle: 'Documentación'
  },
  '/proyecto/despliegue/documentacion': {
    previous: '/proyecto/despliegue/build',
    previousTitle: 'Build del Proyecto',
    next: '/proyecto/despliegue/cloud',
    nextTitle: 'Despliegue en Cloud'
  },
  '/proyecto/despliegue/cloud': {
    previous: '/proyecto/despliegue/documentacion',
    previousTitle: 'Documentación',
    next: '/proyecto/retos/1',
    nextTitle: 'Reto 1: Especificación'
  },
  '/proyecto/retos/1': {
    previous: '/proyecto/despliegue/cloud',
    previousTitle: 'Despliegue en Cloud',
    next: '/proyecto/retos/2',
    nextTitle: 'Reto 2: Especificación Técnica'
  },
  '/proyecto/retos/2': {
    previous: '/proyecto/retos/1',
    previousTitle: 'Reto 1: Especificación',
    next: '/proyecto/retos/3',
    nextTitle: 'Reto 3: Elevator Pitch'
  },
  '/proyecto/retos/3': {
    previous: '/proyecto/retos/2',
    previousTitle: 'Reto 2: Especificación Técnica',
    next: '/proyecto/retos/4',
    nextTitle: 'Reto 4: Organización Equipo'
  },
  '/proyecto/retos/4': {
    previous: '/proyecto/retos/3',
    previousTitle: 'Reto 3: Elevator Pitch',
    next: '/proyecto/retos/5',
    nextTitle: 'Reto 5: Agile & SCRUM Planning'
  },
  '/proyecto/retos/5': {
    previous: '/proyecto/retos/4',
    previousTitle: 'Reto 4: Organización Equipo',
    next: '/proyecto/retos/6',
    nextTitle: 'Reto 6: Sprint 1 Development'
  },
  '/proyecto/retos/6': {
    previous: '/proyecto/retos/5',
    previousTitle: 'Reto 5: Agile & SCRUM Planning',
    next: '/proyecto/retos/7',
    nextTitle: 'Reto 7: Sprint 2 Development'
  },
  '/proyecto/retos/7': {
    previous: '/proyecto/retos/6',
    previousTitle: 'Reto 6: Sprint 1 Development',
    next: '/proyecto/retos/8',
    nextTitle: 'Reto 8: Sprint Final & Deployment'
  },
  '/proyecto/retos/8': {
    previous: '/proyecto/retos/7',
    previousTitle: 'Reto 7: Sprint 2 Development',
    next: null,
    nextTitle: null
  },

  // AWS - Fundamentales
  '/aws/fundamentales/intro': {
    previous: null,
    previousTitle: null,
    next: '/aws/fundamentales/conceptos',
    nextTitle: 'Conceptos Clave: Regiones, AZ, VPC'
  },
  '/aws/fundamentales/conceptos': {
    previous: '/aws/fundamentales/intro',
    previousTitle: 'Qué es AWS y por qué usarlo',
    next: '/aws/fundamentales/iam',
    nextTitle: 'Gestión de Identidad y Acceso (IAM)'
  },
  '/aws/fundamentales/iam': {
    previous: '/aws/fundamentales/conceptos',
    previousTitle: 'Conceptos Clave: Regiones, AZ, VPC',
    next: '/aws/fundamentales/pricing',
    nextTitle: 'Pricing y Estimador de Costos'
  },
  '/aws/fundamentales/pricing': {
    previous: '/aws/fundamentales/iam',
    previousTitle: 'Gestión de Identidad y Acceso (IAM)',
    next: '/aws/servicios/ec2',
    nextTitle: 'EC2 - Máquinas Virtuales'
  },

  // AWS - Servicios Principales
  '/aws/servicios/ec2': {
    previous: '/aws/fundamentales/pricing',
    previousTitle: 'Pricing y Estimador de Costos',
    next: '/aws/servicios/rds',
    nextTitle: 'RDS - Bases de Datos Relacionales'
  },
  '/aws/servicios/rds': {
    previous: '/aws/servicios/ec2',
    previousTitle: 'EC2 - Máquinas Virtuales',
    next: '/aws/servicios/s3',
    nextTitle: 'S3 - Almacenamiento de Objetos'
  },
  '/aws/servicios/s3': {
    previous: '/aws/servicios/rds',
    previousTitle: 'RDS - Bases de Datos Relacionales',
    next: '/aws/servicios/dynamodb',
    nextTitle: 'DynamoDB - NoSQL'
  },
  '/aws/servicios/dynamodb': {
    previous: '/aws/servicios/s3',
    previousTitle: 'S3 - Almacenamiento de Objetos',
    next: '/aws/deployment/beanstalk',
    nextTitle: 'Elastic Beanstalk - Deploy Simplificado'
  },

  // AWS - Deployment
  '/aws/deployment/beanstalk': {
    previous: '/aws/servicios/dynamodb',
    previousTitle: 'DynamoDB - NoSQL',
    next: '/aws/deployment/ecs',
    nextTitle: 'ECS - Contenedores en AWS'
  },
  '/aws/deployment/ecs': {
    previous: '/aws/deployment/beanstalk',
    previousTitle: 'Elastic Beanstalk - Deploy Simplificado',
    next: '/aws/deployment/lambda',
    nextTitle: 'Lambda - Serverless Computing'
  },
  '/aws/deployment/lambda': {
    previous: '/aws/deployment/ecs',
    previousTitle: 'ECS - Contenedores en AWS',
    next: '/aws/deployment/cloudfront',
    nextTitle: 'CloudFront - CDN Global'
  },
  '/aws/deployment/cloudfront': {
    previous: '/aws/deployment/lambda',
    previousTitle: 'Lambda - Serverless Computing',
    next: '/aws/operaciones/cloudwatch',
    nextTitle: 'CloudWatch - Monitoreo y Logs'
  },

  // AWS - Operaciones & Seguridad
  '/aws/operaciones/cloudwatch': {
    previous: '/aws/deployment/cloudfront',
    previousTitle: 'CloudFront - CDN Global',
    next: '/aws/operaciones/seguridad',
    nextTitle: 'Security Groups y VPC'
  },
  '/aws/operaciones/seguridad': {
    previous: '/aws/operaciones/cloudwatch',
    previousTitle: 'CloudWatch - Monitoreo y Logs',
    next: '/aws/operaciones/backup',
    nextTitle: 'Backup y Recuperación'
  },
  '/aws/operaciones/backup': {
    previous: '/aws/operaciones/seguridad',
    previousTitle: 'Security Groups y VPC',
    next: '/aws/operaciones/practicas',
    nextTitle: 'Mejores Prácticas en AWS'
  },
  '/aws/operaciones/practicas': {
    previous: '/aws/operaciones/backup',
    previousTitle: 'Backup y Recuperación',
    next: null,
    nextTitle: null
  },

  // Kubernetes - Fundamentales
  '/kubernetes/fundamentales/intro': {
    previous: '/kubernetes',
    previousTitle: 'Volver a Kubernetes',
    next: '/kubernetes/fundamentales/pods',
    nextTitle: 'Pods: La unidad más pequeña'
  },
  '/kubernetes/fundamentales/pods': {
    previous: '/kubernetes/fundamentales/intro',
    previousTitle: 'Introducción: Qué es Kubernetes',
    next: '/kubernetes/fundamentales/deployments',
    nextTitle: 'Deployments: Gestión de réplicas'
  },
  '/kubernetes/fundamentales/deployments': {
    previous: '/kubernetes/fundamentales/pods',
    previousTitle: 'Pods: La unidad más pequeña',
    next: null,
    nextTitle: null
  },
};

/**
 * Hook para obtener las rutas de navegación para una lección específica
 */
export function useNavigation(pathname) {
  // Buscar en el mapa de navegación
  const nav = lessonNavigationMap[pathname];

  if (nav) {
    return nav;
  }

  // Si no encuentra una coincidencia exacta, retornar null para ambos
  return {
    previous: null,
    previousTitle: null,
    next: null,
    nextTitle: null,
  };
}
