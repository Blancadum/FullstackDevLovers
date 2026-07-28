/**
 * Configuración de navegación para todas las lecciones
 * Define las rutas anterior y siguiente para cada lección
 */

export const lessonNavigationMap = {
  // Git - Básicos
  '/control-versiones/git/basicos/configuracion-inicial': {
    previous: null,
    previousTitle: null,
    next: '/control-versiones/git/basicos/crear-clonar-repos',
    nextTitle: 'Crear y clonar repositorios'
  },
  '/control-versiones/git/basicos/crear-clonar-repos': {
    previous: '/control-versiones/git/basicos/configuracion-inicial',
    previousTitle: 'Configuración inicial de Git',
    next: '/control-versiones/git/basicos/commits',
    nextTitle: 'Commits y mensajes claros'
  },
  '/control-versiones/git/basicos/commits': {
    previous: '/control-versiones/git/basicos/crear-clonar-repos',
    previousTitle: 'Crear y clonar repositorios',
    next: '/control-versiones/git/basicos/branches',
    nextTitle: 'Ramas (branches)'
  },
  '/control-versiones/git/basicos/branches': {
    previous: '/control-versiones/git/basicos/commits',
    previousTitle: 'Commits y mensajes claros',
    next: '/control-versiones/git/basicos/merge',
    nextTitle: 'Merge y resolución de conflictos'
  },
  '/control-versiones/git/basicos/merge': {
    previous: '/control-versiones/git/basicos/branches',
    previousTitle: 'Ramas (branches)',
    next: '/control-versiones/git/basicos/alias',
    nextTitle: 'Configuración de Alias en Git'
  },
  '/control-versiones/git/basicos/alias': {
    previous: '/control-versiones/git/basicos/merge',
    previousTitle: 'Merge y resolución de conflictos',
    next: '/control-versiones/git/basicos/errores-comunes',
    nextTitle: 'Errores Comunes en Git'
  },
  '/control-versiones/git/basicos/errores-comunes': {
    previous: '/control-versiones/git/basicos/alias',
    previousTitle: 'Configuración de Alias en Git',
    next: '/control-versiones/git/practicas/configura-tu-git',
    nextTitle: 'Practica: Configura tu Git'
  },

  // Git - Prácticas
  '/control-versiones/git/practicas/configura-tu-git': {
    previous: '/control-versiones/git/basicos/errores-comunes',
    previousTitle: 'Errores Comunes en Git',
    next: '/control-versiones/git/practicas/crea-tu-primer-repositorio',
    nextTitle: 'Practica: Crea tu primer repositorio'
  },
  '/control-versiones/git/practicas/crea-tu-primer-repositorio': {
    previous: '/control-versiones/git/practicas/configura-tu-git',
    previousTitle: 'Practica: Configura tu Git',
    next: '/control-versiones/git/practicas/haz-tus-primeros-commits',
    nextTitle: 'Practica: Haz tus primeros commits'
  },
  '/control-versiones/git/practicas/haz-tus-primeros-commits': {
    previous: '/control-versiones/git/practicas/crea-tu-primer-repositorio',
    previousTitle: 'Practica: Crea tu primer repositorio',
    next: '/control-versiones/git/practicas/trabaja-con-ramas',
    nextTitle: 'Practica: Trabaja con ramas'
  },
  '/control-versiones/git/practicas/trabaja-con-ramas': {
    previous: '/control-versiones/git/practicas/haz-tus-primeros-commits',
    previousTitle: 'Practica: Haz tus primeros commits',
    next: '/control-versiones/git/practicas/resuelve-conflictos-de-merge',
    nextTitle: 'Practica: Resuelve conflictos de merge'
  },
  '/control-versiones/git/practicas/resuelve-conflictos-de-merge': {
    previous: '/control-versiones/git/practicas/trabaja-con-ramas',
    previousTitle: 'Practica: Trabaja con ramas',
    next: '/control-versiones/git/avanzado/push-pull-fetch',
    nextTitle: 'Push, Pull y Fetch'
  },

  // Git - Avanzado
  '/control-versiones/git/avanzado/push-pull-fetch': {
    previous: '/control-versiones/git/practicas/resuelve-conflictos-de-merge',
    previousTitle: 'Practica: Resuelve conflictos de merge',
    next: '/control-versiones/git/avanzado/pull-requests',
    nextTitle: 'Pull requests y colaboración'
  },
  '/control-versiones/git/avanzado/pull-requests': {
    previous: '/control-versiones/git/avanzado/push-pull-fetch',
    previousTitle: 'Push, Pull y Fetch',
    next: '/control-versiones/git/avanzado/plataformas-remotas',
    nextTitle: 'GitHub, GitLab y Bitbucket'
  },
  '/control-versiones/git/avanzado/plataformas-remotas': {
    previous: '/control-versiones/git/avanzado/pull-requests',
    previousTitle: 'Pull requests y colaboración',
    next: '/control-versiones/git/avanzado/workflow',
    nextTitle: 'Git Workflow y Conventional Commits'
  },
  '/control-versiones/git/avanzado/workflow': {
    previous: '/control-versiones/git/avanzado/plataformas-remotas',
    previousTitle: 'GitHub, GitLab y Bitbucket',
    next: '/control-versiones/git/avanzado/github',
    nextTitle: 'GitHub'
  },
  '/control-versiones/git/avanzado/github': {
    previous: '/control-versiones/git/avanzado/workflow',
    previousTitle: 'Git Workflow y Conventional Commits',
    next: '/control-versiones/git/avanzado/gitlab',
    nextTitle: 'GitLab'
  },
  '/control-versiones/git/avanzado/gitlab': {
    previous: '/control-versiones/git/avanzado/github',
    previousTitle: 'GitHub',
    next: '/control-versiones/git/avanzado/bitbucket',
    nextTitle: 'Bitbucket'
  },
  '/control-versiones/git/avanzado/bitbucket': {
    previous: '/control-versiones/git/avanzado/gitlab',
    previousTitle: 'GitLab',
    next: null,
    nextTitle: null
  },

  // Java - Básico
  '/backend/java/basico/funcionamiento': {
    previous: null,
    previousTitle: null,
    next: '/backend/java/basico/tipos-datos',
    nextTitle: 'Tipos de Datos'
  },
  '/backend/java/basico/tipos-datos': {
    previous: '/backend/java/basico/funcionamiento',
    previousTitle: 'Funcionamiento Interno de Java',
    next: '/backend/java/basico/control-flujo',
    nextTitle: 'Control de Flujo'
  },
  '/backend/java/basico/control-flujo': {
    previous: '/backend/java/basico/tipos-datos',
    previousTitle: 'Tipos de Datos',
    next: '/backend/java/basico/strings',
    nextTitle: 'Strings y Texto'
  },
  '/backend/java/basico/strings': {
    previous: '/backend/java/basico/control-flujo',
    previousTitle: 'Control de Flujo',
    next: '/backend/java/basico/arrays',
    nextTitle: 'Arrays y Matrices'
  },
  '/backend/java/basico/arrays': {
    previous: '/backend/java/basico/strings',
    previousTitle: 'Strings y Texto',
    next: '/backend/java/basico/scanner',
    nextTitle: 'Scanner e Entrada'
  },
  '/backend/java/basico/scanner': {
    previous: '/backend/java/basico/arrays',
    previousTitle: 'Arrays y Matrices',
    next: '/backend/java/basico/excepciones',
    nextTitle: 'Excepciones'
  },
  '/backend/java/basico/excepciones': {
    previous: '/backend/java/basico/scanner',
    previousTitle: 'Scanner e Entrada',
    next: '/backend/java/basico/operadores',
    nextTitle: 'Operadores'
  },
  '/backend/java/basico/operadores': {
    previous: '/backend/java/basico/excepciones',
    previousTitle: 'Excepciones',
    next: '/backend/java/poo/clases-objetos',
    nextTitle: 'Clases y Objetos'
  },

  // Java - POO
  '/backend/java/poo/clases-objetos': {
    previous: '/backend/java/basico/operadores',
    previousTitle: 'Operadores',
    next: '/backend/java/poo/clases-abstractas',
    nextTitle: 'Clases Abstractas'
  },
  '/backend/java/poo/clases-abstractas': {
    previous: '/backend/java/poo/clases-objetos',
    previousTitle: 'Clases y Objetos',
    next: '/backend/java/poo/herencia',
    nextTitle: 'Herencia'
  },
  '/backend/java/poo/herencia': {
    previous: '/backend/java/poo/clases-abstractas',
    previousTitle: 'Clases Abstractas',
    next: '/backend/java/poo/polimorfismo',
    nextTitle: 'Polimorfismo'
  },
  '/backend/java/poo/polimorfismo': {
    previous: '/backend/java/poo/herencia',
    previousTitle: 'Herencia',
    next: '/backend/java/poo/interfaces-abstractas',
    nextTitle: 'Interfaces y Clases Abstractas'
  },
  '/backend/java/poo/interfaces-abstractas': {
    previous: '/backend/java/poo/polimorfismo',
    previousTitle: 'Polimorfismo',
    next: '/backend/java/avanzado/jvm',
    nextTitle: 'Fundamentos de la Máquina de Java'
  },

  // Java - Avanzado
  '/backend/java/avanzado/jvm': {
    previous: '/backend/java/poo/interfaces-abstractas',
    previousTitle: 'Interfaces y Clases Abstractas',
    next: '/backend/java/avanzado/colecciones',
    nextTitle: 'Colecciones en Java'
  },
  '/backend/java/avanzado/colecciones': {
    previous: '/backend/java/avanzado/jvm',
    previousTitle: 'Fundamentos de la Máquina de Java',
    next: '/backend/java/avanzado/lambdas',
    nextTitle: 'Expresiones Lambda'
  },
  '/backend/java/avanzado/lambdas': {
    previous: '/backend/java/avanzado/colecciones',
    previousTitle: 'Colecciones en Java',
    next: '/backend/java/avanzado/streams',
    nextTitle: 'Streams API'
  },
  '/backend/java/avanzado/streams': {
    previous: '/backend/java/avanzado/lambdas',
    previousTitle: 'Expresiones Lambda',
    next: '/backend/java/avanzado/genericos',
    nextTitle: 'Genéricos'
  },
  '/backend/java/avanzado/genericos': {
    previous: '/backend/java/avanzado/streams',
    previousTitle: 'Streams API',
    next: '/backend/java/bd/jdbc',
    nextTitle: 'JDBC - Conectar a Bases de Datos'
  },

  // Java - BD
  '/backend/java/bd/jdbc': {
    previous: '/backend/java/avanzado/genericos',
    previousTitle: 'Genéricos',
    next: '/backend/java/bd/crud',
    nextTitle: 'CRUD y Transacciones'
  },
  '/backend/java/bd/crud': {
    previous: '/backend/java/bd/jdbc',
    previousTitle: 'JDBC - Conectar a Bases de Datos',
    next: '/herramientas/entornos/herramientas/concepto',
    nextTitle: 'Concepto de Entorno de Desarrollo'
  },

  // Entornos - Herramientas
  '/herramientas/entornos/herramientas/concepto': {
    previous: '/backend/java/bd/crud',
    previousTitle: 'CRUD y Transacciones',
    next: '/herramientas/entornos/herramientas/ides',
    nextTitle: 'IDEs y Editores'
  },
  '/herramientas/entornos/herramientas/ides': {
    previous: '/herramientas/entornos/herramientas/concepto',
    previousTitle: 'Concepto de Entorno de Desarrollo',
    next: '/herramientas/entornos/herramientas/ides/eclipse',
    nextTitle: 'Eclipse IDE'
  },
  '/herramientas/entornos/herramientas/ides/eclipse': {
    previous: '/herramientas/entornos/herramientas/ides',
    previousTitle: 'IDEs y Editores',
    next: '/herramientas/entornos/herramientas/ides/intellij',
    nextTitle: 'IntelliJ IDEA'
  },
  '/herramientas/entornos/herramientas/ides/intellij': {
    previous: '/herramientas/entornos/herramientas/ides/eclipse',
    previousTitle: 'Eclipse IDE',
    next: '/herramientas/entornos/herramientas/ides/vscode',
    nextTitle: 'Visual Studio Code'
  },
  '/herramientas/entornos/herramientas/ides/vscode': {
    previous: '/herramientas/entornos/herramientas/ides/intellij',
    previousTitle: 'IntelliJ IDEA',
    next: '/herramientas/entornos/herramientas/ides/vscode-extensions',
    nextTitle: 'VS Code Extensions'
  },
  '/herramientas/entornos/herramientas/ides/vscode-extensions': {
    previous: '/herramientas/entornos/herramientas/ides/vscode',
    previousTitle: 'Visual Studio Code',
    next: '/herramientas/entornos/herramientas/codeium',
    nextTitle: 'Codeium AI'
  },
  '/herramientas/entornos/herramientas/codeium': {
    previous: '/herramientas/entornos/herramientas/ides/vscode-extensions',
    previousTitle: 'VS Code Extensions',
    next: '/herramientas/entornos/arquitectura/uml',
    nextTitle: 'UML y Diagramas'
  },

  // Entornos - Arquitectura
  '/herramientas/entornos/arquitectura/uml': {
    previous: '/herramientas/entornos/herramientas/codeium',
    previousTitle: 'Codeium AI',
    next: '/herramientas/entornos/arquitectura/patrones',
    nextTitle: 'Patrones de Diseño'
  },
  '/herramientas/entornos/arquitectura/patrones': {
    previous: '/herramientas/entornos/arquitectura/uml',
    previousTitle: 'UML y Diagramas',
    next: '/herramientas/entornos/arquitectura/conceptos',
    nextTitle: 'Conceptos de Desarrollo'
  },
  '/herramientas/entornos/arquitectura/conceptos': {
    previous: '/herramientas/entornos/arquitectura/patrones',
    previousTitle: 'Patrones de Diseño',
    next: '/herramientas/entornos/arquitectura/testing',
    nextTitle: 'Testing y QA'
  },
  '/herramientas/entornos/arquitectura/testing': {
    previous: '/herramientas/entornos/arquitectura/conceptos',
    previousTitle: 'Conceptos de Desarrollo',
    next: '/herramientas/entornos/arquitectura/refactoring',
    nextTitle: 'Refactorización y SOLID'
  },
  '/herramientas/entornos/arquitectura/refactoring': {
    previous: '/herramientas/entornos/arquitectura/testing',
    previousTitle: 'Testing y QA',
    next: '/herramientas/entornos/build/bash',
    nextTitle: 'Bash & Shell - Automatización'
  },

  // Entornos - Build
  '/herramientas/entornos/build/bash': {
    previous: '/herramientas/entornos/arquitectura/refactoring',
    previousTitle: 'Refactorización y SOLID',
    next: '/herramientas/entornos/build/maven',
    nextTitle: 'Maven - Gestión de Proyectos'
  },
  '/herramientas/entornos/build/maven': {
    previous: '/herramientas/entornos/build/bash',
    previousTitle: 'Bash & Shell - Automatización',
    next: '/herramientas/entornos/build/gradle',
    nextTitle: 'Gradle - Build Avanzado'
  },
  '/herramientas/entornos/build/gradle': {
    previous: '/herramientas/entornos/build/maven',
    previousTitle: 'Maven - Gestión de Proyectos',
    next: '/herramientas/entornos/build/dependencias',
    nextTitle: 'Gestión de Dependencias'
  },
  '/herramientas/entornos/build/dependencias': {
    previous: '/herramientas/entornos/build/gradle',
    previousTitle: 'Gradle - Build Avanzado',
    next: '/cloud/docker/fundamentales/intro',
    nextTitle: 'Docker - Introducción'
  },

  // Docker - Fundamentales
  '/cloud/docker/fundamentales/intro': {
    previous: '/herramientas/entornos/build/dependencias',
    previousTitle: 'Gestión de Dependencias',
    next: '/cloud/docker/fundamentales/conceptos',
    nextTitle: 'Conceptos Clave de Docker'
  },
  '/cloud/docker/fundamentales/conceptos': {
    previous: '/cloud/docker/fundamentales/intro',
    previousTitle: 'Docker - Introducción',
    next: '/cloud/docker/fundamentales/dockerfile',
    nextTitle: 'Dockerfile y Construcción de Imágenes'
  },
  '/cloud/docker/fundamentales/dockerfile': {
    previous: '/cloud/docker/fundamentales/conceptos',
    previousTitle: 'Conceptos Clave de Docker',
    next: '/cloud/docker/fundamentales/comandos',
    nextTitle: 'Comandos Docker Esenciales'
  },
  '/cloud/docker/fundamentales/comandos': {
    previous: '/cloud/docker/fundamentales/dockerfile',
    previousTitle: 'Dockerfile y Construcción de Imágenes',
    next: '/cloud/docker/composicion/compose',
    nextTitle: 'Docker Compose'
  },

  // Docker - Composición
  '/cloud/docker/composicion/compose': {
    previous: '/cloud/docker/fundamentales/comandos',
    previousTitle: 'Comandos Docker Esenciales',
    next: '/cloud/docker/composicion/networking',
    nextTitle: 'Networking en Docker'
  },
  '/cloud/docker/composicion/networking': {
    previous: '/cloud/docker/composicion/compose',
    previousTitle: 'Docker Compose',
    next: '/cloud/docker/composicion/volumenes',
    nextTitle: 'Volúmenes y Persistencia'
  },
  '/cloud/docker/composicion/volumenes': {
    previous: '/cloud/docker/composicion/networking',
    previousTitle: 'Networking en Docker',
    next: '/cloud/docker/avanzado/multistage',
    nextTitle: 'Multi-stage Builds'
  },

  // Docker - Avanzado
  '/cloud/docker/avanzado/multistage': {
    previous: '/cloud/docker/composicion/volumenes',
    previousTitle: 'Volúmenes y Persistencia',
    next: '/cloud/docker/avanzado/optimizacion',
    nextTitle: 'Optimización de Imágenes'
  },
  '/cloud/docker/avanzado/optimizacion': {
    previous: '/cloud/docker/avanzado/multistage',
    previousTitle: 'Multi-stage Builds',
    next: '/cloud/docker/avanzado/debugging',
    nextTitle: 'Debugging en Docker'
  },
  '/cloud/docker/avanzado/debugging': {
    previous: '/cloud/docker/avanzado/optimizacion',
    previousTitle: 'Optimización de Imágenes',
    next: '/cloud/docker/avanzado/practicas',
    nextTitle: 'Mejores Prácticas'
  },
  '/cloud/docker/avanzado/practicas': {
    previous: '/cloud/docker/avanzado/debugging',
    previousTitle: 'Debugging en Docker',
    next: '/cloud/docker/frameworks/python',
    nextTitle: 'Docker con Python'
  },

  // Docker - Frameworks
  '/cloud/docker/frameworks/python': {
    previous: '/cloud/docker/avanzado/practicas',
    previousTitle: 'Mejores Prácticas',
    next: '/cloud/docker/frameworks/java',
    nextTitle: 'Docker con Java'
  },
  '/cloud/docker/frameworks/java': {
    previous: '/cloud/docker/frameworks/python',
    previousTitle: 'Docker con Python',
    next: '/cloud/docker/frameworks/frontend',
    nextTitle: 'Docker con Frontend'
  },
  '/cloud/docker/frameworks/frontend': {
    previous: '/cloud/docker/frameworks/java',
    previousTitle: 'Docker con Java',
    next: '/cloud/docker/frameworks/nodejs',
    nextTitle: 'Docker con Node.js'
  },
  '/cloud/docker/frameworks/nodejs': {
    previous: '/cloud/docker/frameworks/frontend',
    previousTitle: 'Docker con Frontend',
    next: '/cloud/docker/comparacion-s3-vs-docker',
    nextTitle: 'S3 vs Docker'
  },

  // Docker - Comparaciones
  '/cloud/docker/comparacion-s3-vs-docker': {
    previous: '/cloud/docker/frameworks/nodejs',
    previousTitle: 'Docker con Node.js',
    next: '/cloud/docker/comparacion-docker-vs-kubernetes',
    nextTitle: 'Docker vs Kubernetes'
  },
  '/cloud/docker/comparacion-docker-vs-kubernetes': {
    previous: '/cloud/docker/comparacion-s3-vs-docker',
    previousTitle: 'S3 vs Docker',
    next: '/herramientas/entornos/devops/docker',
    nextTitle: 'Docker - Containerización'
  },

  // Entornos - DevOps
  '/herramientas/entornos/devops/docker': {
    previous: '/cloud/docker/comparacion-docker-vs-kubernetes',
    previousTitle: 'Docker vs Kubernetes',
    next: '/herramientas/entornos/devops/docker-compose',
    nextTitle: 'Docker Compose (DevOps)'
  },
  '/herramientas/entornos/devops/docker-compose': {
    previous: '/herramientas/entornos/devops/docker',
    previousTitle: 'Docker - Containerización',
    next: '/herramientas/entornos/devops/cicd',
    nextTitle: 'CI/CD - Automatización'
  },
  '/herramientas/entornos/devops/cicd': {
    previous: '/herramientas/entornos/devops/docker',
    previousTitle: 'Docker - Containerización',
    next: '/herramientas/entornos/devops/github-actions',
    nextTitle: 'GitHub Actions'
  },
  '/herramientas/entornos/devops/github-actions': {
    previous: '/herramientas/entornos/devops/cicd',
    previousTitle: 'CI/CD - Automatización',
    next: '/herramientas/entornos/devops/cloud-deployment',
    nextTitle: 'Despliegue en Cloud'
  },
  '/herramientas/entornos/devops/cloud-deployment': {
    previous: '/herramientas/entornos/devops/github-actions',
    previousTitle: 'GitHub Actions',
    next: '/metodologias/agile-scrum/introduccion',
    nextTitle: 'Introducción a Agile'
  },

  // Metodologías
  '/metodologias/agile-scrum/introduccion': {
    previous: '/herramientas/entornos/devops/cloud-deployment',
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
    next: '/backend/spring-boot/fundamentos/introduccion',
    nextTitle: 'Introducción a Spring Boot'
  },

  // SQL - Introducción
  '/datos/sql/introduccion': {
    previous: null,
    previousTitle: null,
    next: '/datos/sql/ddl',
    nextTitle: 'DDL - Definición de Datos'
  },
  '/datos/sql/ddl': {
    previous: '/datos/sql/introduccion',
    previousTitle: 'Introducción a SQL',
    next: '/datos/sql/dml',
    nextTitle: 'DML - Manipulación de Datos'
  },
  '/datos/sql/dml': {
    previous: '/datos/sql/ddl',
    previousTitle: 'DDL - Definición de Datos',
    next: '/datos/sql/joins',
    nextTitle: 'JOINs - Unión de Tablas'
  },
  '/datos/sql/joins': {
    previous: '/datos/sql/dml',
    previousTitle: 'DML - Manipulación de Datos',
    next: '/datos/sql/consultas-avanzadas',
    nextTitle: 'Consultas Avanzadas'
  },
  '/datos/sql/consultas-avanzadas': {
    previous: '/datos/sql/joins',
    previousTitle: 'JOINs - Unión de Tablas',
    next: '/datos/sql/gestion/crear-bases-datos',
    nextTitle: 'Crear Bases de Datos'
  },

  // SQL - Gestión
  '/datos/sql/gestion/crear-bases-datos': {
    previous: '/datos/sql/consultas-avanzadas',
    previousTitle: 'Consultas Avanzadas',
    next: '/datos/sql/gestion/usuarios-permisos',
    nextTitle: 'Usuarios y Permisos'
  },
  '/datos/sql/gestion/usuarios-permisos': {
    previous: '/datos/sql/gestion/crear-bases-datos',
    previousTitle: 'Crear Bases de Datos',
    next: '/datos/sql/gestion/backup-recuperacion',
    nextTitle: 'Backup y Recuperación'
  },
  '/datos/sql/gestion/backup-recuperacion': {
    previous: '/datos/sql/gestion/usuarios-permisos',
    previousTitle: 'Usuarios y Permisos',
    next: '/datos/sql/lenguajes/sql-nosql',
    nextTitle: 'SQL vs NoSQL'
  },

  // SQL - Lenguajes y Sabores
  '/datos/sql/lenguajes/sql-nosql': {
    previous: '/datos/sql/gestion/backup-recuperacion',
    previousTitle: 'Backup y Recuperación',
    next: '/datos/sql/lenguajes/mysql',
    nextTitle: 'MySQL'
  },
  '/datos/sql/lenguajes/mysql': {
    previous: '/datos/sql/lenguajes/sql-nosql',
    previousTitle: 'SQL vs NoSQL',
    next: '/datos/sql/lenguajes/postgresql',
    nextTitle: 'PostgreSQL'
  },
  '/datos/sql/lenguajes/postgresql': {
    previous: '/datos/sql/lenguajes/mysql',
    previousTitle: 'MySQL',
    next: '/datos/sql/lenguajes/mongodb',
    nextTitle: 'MongoDB'
  },
  '/datos/sql/lenguajes/mongodb': {
    previous: '/datos/sql/lenguajes/postgresql',
    previousTitle: 'PostgreSQL',
    next: '/backend/spring-boot/fundamentos/introduccion',
    nextTitle: 'Introducción a Spring Boot'
  },

  // MongoDB - Introducción
  '/datos/mongodb/introduccion': {
    previous: null,
    previousTitle: null,
    next: '/datos/mongodb/comparativa',
    nextTitle: 'MongoDB vs SQL - Comparativa'
  },
  '/datos/mongodb/comparativa': {
    previous: '/datos/mongodb/introduccion',
    previousTitle: 'Introducción a MongoDB y NoSQL',
    next: '/datos/mongodb/documentos',
    nextTitle: 'Documentos y Colecciones'
  },
  '/datos/mongodb/documentos': {
    previous: '/datos/mongodb/comparativa',
    previousTitle: 'MongoDB vs SQL - Comparativa',
    next: '/datos/mongodb/operaciones/create',
    nextTitle: 'Insertar Documentos (Create)'
  },

  // MongoDB - Operaciones Básicas
  '/datos/mongodb/operaciones/create': {
    previous: '/datos/mongodb/documentos',
    previousTitle: 'Documentos y Colecciones',
    next: '/datos/mongodb/operaciones/read',
    nextTitle: 'Consultar Documentos (Read)'
  },
  '/datos/mongodb/operaciones/read': {
    previous: '/datos/mongodb/operaciones/create',
    previousTitle: 'Insertar Documentos (Create)',
    next: '/datos/mongodb/operaciones/update',
    nextTitle: 'Actualizar Documentos (Update)'
  },
  '/datos/mongodb/operaciones/update': {
    previous: '/datos/mongodb/operaciones/read',
    previousTitle: 'Consultar Documentos (Read)',
    next: '/datos/mongodb/operaciones/delete',
    nextTitle: 'Eliminar Documentos (Delete)'
  },
  '/datos/mongodb/operaciones/delete': {
    previous: '/datos/mongodb/operaciones/update',
    previousTitle: 'Actualizar Documentos (Update)',
    next: '/datos/mongodb/consultas/filtros',
    nextTitle: 'Filtros y Operadores de Consulta'
  },

  // MongoDB - Consultas Avanzadas
  '/datos/mongodb/consultas/filtros': {
    previous: '/datos/mongodb/operaciones/delete',
    previousTitle: 'Eliminar Documentos (Delete)',
    next: '/datos/mongodb/consultas/agregacion',
    nextTitle: 'Agregación con Pipeline'
  },
  '/datos/mongodb/consultas/agregacion': {
    previous: '/datos/mongodb/consultas/filtros',
    previousTitle: 'Filtros y Operadores de Consulta',
    next: '/datos/mongodb/consultas/indexacion',
    nextTitle: 'Indexación y Optimización'
  },
  '/datos/mongodb/consultas/indexacion': {
    previous: '/datos/mongodb/consultas/agregacion',
    previousTitle: 'Agregación con Pipeline',
    next: '/datos/mongodb/modelado/esquemas',
    nextTitle: 'Esquemas en MongoDB'
  },

  // MongoDB - Modelado de Datos
  '/datos/mongodb/modelado/esquemas': {
    previous: '/datos/mongodb/consultas/indexacion',
    previousTitle: 'Indexación y Optimización',
    next: '/datos/mongodb/modelado/relaciones',
    nextTitle: 'Relaciones: Embedding vs Referencing'
  },
  '/datos/mongodb/modelado/relaciones': {
    previous: '/datos/mongodb/modelado/esquemas',
    previousTitle: 'Esquemas en MongoDB',
    next: '/datos/mongodb/modelado/validacion',
    nextTitle: 'Validación de Documentos'
  },
  '/datos/mongodb/modelado/validacion': {
    previous: '/datos/mongodb/modelado/relaciones',
    previousTitle: 'Relaciones: Embedding vs Referencing',
    next: null,
    nextTitle: null
  },

  // Spring Boot - Fundamentos
  '/backend/spring-boot/fundamentos/introduccion': {
    previous: '/datos/sql/lenguajes/mongodb',
    previousTitle: 'MongoDB',
    next: '/backend/spring-boot/fundamentos/configuracion',
    nextTitle: 'Setup y Configuración'
  },
  '/backend/spring-boot/fundamentos/configuracion': {
    previous: '/backend/spring-boot/fundamentos/introduccion',
    previousTitle: 'Introducción a Spring Boot',
    next: '/backend/spring-boot/fundamentos/controladores',
    nextTitle: 'Controladores REST'
  },
  '/backend/spring-boot/fundamentos/controladores': {
    previous: '/backend/spring-boot/fundamentos/configuracion',
    previousTitle: 'Setup y Configuración',
    next: '/backend/spring-boot/avanzado/servicios',
    nextTitle: 'Servicios y Capas'
  },

  // Spring Boot - Avanzado
  '/backend/spring-boot/avanzado/servicios': {
    previous: '/backend/spring-boot/fundamentos/controladores',
    previousTitle: 'Controladores REST',
    next: '/backend/spring-boot/avanzado/jpa-hibernate',
    nextTitle: 'JPA y Hibernate'
  },
  '/backend/spring-boot/avanzado/jpa-hibernate': {
    previous: '/backend/spring-boot/avanzado/servicios',
    previousTitle: 'Servicios y Capas',
    next: '/backend/spring-boot/avanzado/validacion',
    nextTitle: 'Validación'
  },
  '/backend/spring-boot/avanzado/validacion': {
    previous: '/backend/spring-boot/avanzado/jpa-hibernate',
    previousTitle: 'JPA y Hibernate',
    next: '/backend/spring-boot/avanzado/testing',
    nextTitle: 'Testing'
  },
  '/backend/spring-boot/avanzado/testing': {
    previous: '/backend/spring-boot/avanzado/validacion',
    previousTitle: 'Validación',
    next: '/backend/spring-boot/avanzado/spring-security',
    nextTitle: 'Spring Security'
  },
  '/backend/spring-boot/avanzado/spring-security': {
    previous: '/backend/spring-boot/avanzado/testing',
    previousTitle: 'Testing',
    next: '/backend/spring-boot/avanzado/oauth2-jwt',
    nextTitle: 'OAuth2 y JWT'
  },
  '/backend/spring-boot/avanzado/oauth2-jwt': {
    previous: '/backend/spring-boot/avanzado/spring-security',
    previousTitle: 'Spring Security',
    next: '/proyecto/planificacion/definicion',
    nextTitle: 'Definición del Proyecto'
  },

  // Proyecto - Planificación
  '/proyecto/planificacion/definicion': {
    previous: '/backend/spring-boot/avanzado/oauth2-jwt',
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
    next: '/proyecto/planificacion/ejemplos',
    nextTitle: 'Ejemplos de Proyectos'
  },
  '/proyecto/planificacion/ejemplos': {
    previous: '/proyecto/planificacion/arquitectura',
    previousTitle: 'Arquitectura y Diseño',
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
    next: '/proyecto/retos/:retoId',
    nextTitle: 'Retos Dinámicos'
  },
  '/proyecto/retos/:retoId': {
    previous: '/proyecto/retos/8',
    previousTitle: 'Reto 8: Sprint Final & Deployment',
    next: null,
    nextTitle: null
  },
  '/proyecto/ejemplos/:id': {
    previous: null,
    previousTitle: null,
    next: null,
    nextTitle: null
  },

  // AWS - Fundamentales
  '/cloud/aws/fundamentales/intro': {
    previous: null,
    previousTitle: null,
    next: '/cloud/aws/fundamentales/arquitectura',
    nextTitle: 'Arquitectura de AWS'
  },
  '/cloud/aws/fundamentales/arquitectura': {
    previous: '/cloud/aws/fundamentales/intro',
    previousTitle: 'Qué es AWS y por qué usarlo',
    next: '/cloud/aws/fundamentales/conceptos',
    nextTitle: 'Conceptos Clave: Regiones, AZ, VPC'
  },
  '/cloud/aws/fundamentales/conceptos': {
    previous: '/cloud/aws/fundamentales/arquitectura',
    previousTitle: 'Arquitectura de AWS',
    next: '/cloud/aws/fundamentales/iam',
    nextTitle: 'Gestión de Identidad y Acceso (IAM)'
  },
  '/cloud/aws/fundamentales/iam': {
    previous: '/cloud/aws/fundamentales/conceptos',
    previousTitle: 'Conceptos Clave: Regiones, AZ, VPC',
    next: '/cloud/aws/fundamentales/pricing',
    nextTitle: 'Pricing y Estimador de Costos'
  },
  '/cloud/aws/fundamentales/pricing': {
    previous: '/cloud/aws/fundamentales/iam',
    previousTitle: 'Gestión de Identidad y Acceso (IAM)',
    next: '/cloud/aws/servicios/ec2',
    nextTitle: 'EC2 - Máquinas Virtuales'
  },

  // AWS - Servicios Principales
  '/cloud/aws/servicios/ec2': {
    previous: '/cloud/aws/fundamentales/pricing',
    previousTitle: 'Pricing y Estimador de Costos',
    next: '/cloud/aws/servicios/rds',
    nextTitle: 'RDS - Bases de Datos Relacionales'
  },
  '/cloud/aws/servicios/rds': {
    previous: '/cloud/aws/servicios/ec2',
    previousTitle: 'EC2 - Máquinas Virtuales',
    next: '/cloud/aws/servicios/s3',
    nextTitle: 'S3 - Almacenamiento de Objetos'
  },
  '/cloud/aws/servicios/s3': {
    previous: '/cloud/aws/servicios/rds',
    previousTitle: 'RDS - Bases de Datos Relacionales',
    next: '/cloud/aws/servicios/lambda',
    nextTitle: 'Lambda - Serverless Computing'
  },
  '/cloud/aws/servicios/lambda': {
    previous: '/cloud/aws/servicios/s3',
    previousTitle: 'S3 - Almacenamiento de Objetos',
    next: '/cloud/aws/servicios/dynamodb',
    nextTitle: 'DynamoDB - NoSQL'
  },
  '/cloud/aws/servicios/dynamodb': {
    previous: '/cloud/aws/servicios/lambda',
    previousTitle: 'Lambda - Serverless Computing',
    next: '/cloud/aws/servicios/almacenamiento',
    nextTitle: 'Servicios de Almacenamiento'
  },
  '/cloud/aws/servicios/almacenamiento': {
    previous: '/cloud/aws/servicios/dynamodb',
    previousTitle: 'DynamoDB - NoSQL',
    next: '/cloud/aws/comparacion-ec2-vs-lambda',
    nextTitle: 'EC2 vs Lambda'
  },

  // AWS - Comparaciones
  '/cloud/aws/comparacion-ec2-vs-lambda': {
    previous: '/cloud/aws/servicios/almacenamiento',
    previousTitle: 'Servicios de Almacenamiento',
    next: '/cloud/aws/comparacion-rds-vs-dynamodb',
    nextTitle: 'RDS vs DynamoDB'
  },
  '/cloud/aws/comparacion-rds-vs-dynamodb': {
    previous: '/cloud/aws/comparacion-ec2-vs-lambda',
    previousTitle: 'EC2 vs Lambda',
    next: '/cloud/aws/redes/vpc',
    nextTitle: 'VPC - Redes Virtuales'
  },

  // AWS - Redes
  '/cloud/aws/redes/vpc': {
    previous: '/cloud/aws/comparacion-rds-vs-dynamodb',
    previousTitle: 'RDS vs DynamoDB',
    next: '/cloud/aws/deployment/cicd',
    nextTitle: 'CI/CD en AWS'
  },

  // AWS - Deployment
  '/cloud/aws/deployment/cicd': {
    previous: '/cloud/aws/redes/vpc',
    previousTitle: 'VPC - Redes Virtuales',
    next: '/cloud/aws/deployment/beanstalk',
    nextTitle: 'Elastic Beanstalk - Deploy Simplificado'
  },
  '/cloud/aws/deployment/beanstalk': {
    previous: '/cloud/aws/deployment/cicd',
    previousTitle: 'CI/CD en AWS',
    next: '/cloud/aws/deployment/ecs',
    nextTitle: 'ECS - Contenedores en AWS'
  },
  '/cloud/aws/deployment/ecs': {
    previous: '/cloud/aws/deployment/beanstalk',
    previousTitle: 'Elastic Beanstalk - Deploy Simplificado',
    next: '/cloud/aws/deployment/cloudfront',
    nextTitle: 'CloudFront - CDN Global'
  },
  '/cloud/aws/deployment/cloudfront': {
    previous: '/cloud/aws/deployment/ecs',
    previousTitle: 'ECS - Contenedores en AWS',
    next: '/cloud/aws/operaciones/cloudwatch',
    nextTitle: 'CloudWatch - Monitoreo y Logs'
  },

  // AWS - Operaciones & Seguridad
  '/cloud/aws/operaciones/cloudwatch': {
    previous: '/cloud/aws/deployment/cloudfront',
    previousTitle: 'CloudFront - CDN Global',
    next: '/cloud/aws/operaciones/seguridad',
    nextTitle: 'Security Groups y VPC'
  },
  '/cloud/aws/operaciones/seguridad': {
    previous: '/cloud/aws/operaciones/cloudwatch',
    previousTitle: 'CloudWatch - Monitoreo y Logs',
    next: '/cloud/aws/operaciones/backup',
    nextTitle: 'Backup y Recuperación'
  },
  '/cloud/aws/operaciones/backup': {
    previous: '/cloud/aws/operaciones/seguridad',
    previousTitle: 'Security Groups y VPC',
    next: '/cloud/aws/operaciones/practicas',
    nextTitle: 'Mejores Prácticas en AWS'
  },
  '/cloud/aws/operaciones/practicas': {
    previous: '/cloud/aws/operaciones/backup',
    previousTitle: 'Backup y Recuperación',
    next: '/cloud/aws/integracion/java',
    nextTitle: 'AWS con Java'
  },

  // AWS - Integración
  '/cloud/aws/integracion/java': {
    previous: '/cloud/aws/operaciones/practicas',
    previousTitle: 'Mejores Prácticas en AWS',
    next: '/cloud/aws/proyecto/final',
    nextTitle: 'Proyecto Final AWS'
  },

  // AWS - Proyecto
  '/cloud/aws/proyecto/final': {
    previous: '/cloud/aws/integracion/java',
    previousTitle: 'AWS con Java',
    next: '/cloud/aws/casos-reales/ec2',
    nextTitle: 'Caso Real: EC2'
  },

  // AWS - Casos Reales
  '/cloud/aws/casos-reales/ec2': {
    previous: '/cloud/aws/proyecto/final',
    previousTitle: 'Proyecto Final AWS',
    next: '/cloud/aws/casos-reales/rds',
    nextTitle: 'Caso Real: RDS'
  },
  '/cloud/aws/casos-reales/rds': {
    previous: '/cloud/aws/casos-reales/ec2',
    previousTitle: 'Caso Real: EC2',
    next: '/cloud/aws/casos-reales/lambda',
    nextTitle: 'Caso Real: Lambda'
  },
  '/cloud/aws/casos-reales/lambda': {
    previous: '/cloud/aws/casos-reales/rds',
    previousTitle: 'Caso Real: RDS',
    next: '/cloud/aws/casos-reales/s3',
    nextTitle: 'Caso Real: S3'
  },
  '/cloud/aws/casos-reales/s3': {
    previous: '/cloud/aws/casos-reales/lambda',
    previousTitle: 'Caso Real: Lambda',
    next: '/cloud/aws/casos-reales/dynamodb',
    nextTitle: 'Caso Real: DynamoDB'
  },
  '/cloud/aws/casos-reales/dynamodb': {
    previous: '/cloud/aws/casos-reales/s3',
    previousTitle: 'Caso Real: S3',
    next: null,
    nextTitle: null
  },

  // Kubernetes - Fundamentales
  '/cloud/kubernetes/fundamentales/intro': {
    previous: '/kubernetes',
    previousTitle: 'Volver a Kubernetes',
    next: '/cloud/kubernetes/fundamentales/pods',
    nextTitle: 'Pods: La unidad más pequeña'
  },
  '/cloud/kubernetes/fundamentales/pods': {
    previous: '/cloud/kubernetes/fundamentales/intro',
    previousTitle: 'Introducción: Qué es Kubernetes',
    next: '/cloud/kubernetes/fundamentales/deployments',
    nextTitle: 'Deployments: Gestión de réplicas'
  },
  '/cloud/kubernetes/fundamentales/deployments': {
    previous: '/cloud/kubernetes/fundamentales/pods',
    previousTitle: 'Pods: La unidad más pequeña',
    next: null,
    nextTitle: null
  },

  // Contacto - General
  '/contacto/general/email': {
    previous: null,
    previousTitle: null,
    next: '/contacto/general/formulario',
    nextTitle: 'Formulario de Contacto'
  },
  '/contacto/general/formulario': {
    previous: '/contacto/general/email',
    previousTitle: 'Email y Newsletter',
    next: '/contacto/general/faq',
    nextTitle: 'Preguntas Frecuentes'
  },
  '/contacto/general/faq': {
    previous: '/contacto/general/formulario',
    previousTitle: 'Formulario de Contacto',
    next: null,
    nextTitle: null
  }};

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
    nextTitle: null};
}
