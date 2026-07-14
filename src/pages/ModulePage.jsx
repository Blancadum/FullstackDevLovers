import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SEO, Breadcrumb, generateBreadcrumbItems } from '../components';
import blancaJavaImg from '../assets/images/header/blancajava.jpeg';
import './ModulePage.css';

const AVAILABLE_MODULES = [
  { id: 'git', name: 'Git', icon: '🌳' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'docker', name: 'Docker', icon: '🐳' },
  { id: 'aws', name: 'Amazon Web Services', icon: '☁️' },
  { id: 'entornos', name: 'Entornos', icon: '🛠️' },
  { id: 'spring-boot', name: 'Spring Boot', icon: '🚀' },
  { id: 'sql', name: 'SQL', icon: '🗄️' },
  { id: 'proyecto', name: 'Proyecto', icon: '🎯' },
  { id: 'metodologias', name: 'Metodologías & Procesos', icon: '📊' },
  { id: 'contacto', name: 'Contacto', icon: '📧' },
];

const moduleContent = {
  docker: {
    title: 'Docker - Containerización',
    icon: '🐳',
    description: 'Containerización, deployment y orquestación profesional',
    sections: [
      {
        id: 'fundamentales',
        name: 'Fundamentales',
        fullName: 'Docker Fundamentales',
        icon: '📖',
        description: 'Aprende desde cero: qué es Docker, conceptos clave, tu primer contenedor y Dockerfile.',
        lessons: [
          { title: 'Qué es Docker y por qué lo necesitas', link: '/docker/fundamentales/intro', icon: '🐳' },
          { title: 'Conceptos: Imágenes, Contenedores, Volúmenes', link: '/docker/fundamentales/conceptos', icon: '📦' },
          { title: 'Tu primer Dockerfile', link: '/docker/fundamentales/dockerfile', icon: '📝' },
          { title: 'Comandos Esenciales de Docker', link: '/docker/fundamentales/comandos', icon: '⌨️' },
        ],
      },
      {
        id: 'composicion',
        name: 'Multi-Contenedor',
        fullName: 'Docker Compose',
        icon: '🔗',
        description: 'Docker Compose, networking, comunicación entre contenedores y volúmenes avanzados.',
        lessons: [
          { title: 'Docker Compose: Orquestación', link: '/docker/composicion/compose', icon: '🔗' },
          { title: 'Networking y DNS Interno', link: '/docker/composicion/networking', icon: '🌐' },
          { title: 'Volúmenes: Persistencia de Datos', link: '/docker/composicion/volumenes', icon: '💾' },
        ],
      },
      {
        id: 'avanzado',
        name: 'Avanzado',
        fullName: 'Docker Avanzado',
        icon: '⚡',
        description: 'Multi-stage builds, optimización, seguridad, debugging y mejores prácticas.',
        lessons: [
          { title: 'Multi-Stage Builds - Reducir Tamaño', link: '/docker/avanzado/multistage', icon: '⚙️' },
          { title: 'Optimización y Seguridad', link: '/docker/avanzado/optimizacion', icon: '🔒' },
          { title: 'Debugging y Troubleshooting', link: '/docker/avanzado/debugging', icon: '🔍' },
          { title: 'Buenas Prácticas', link: '/docker/avanzado/practicas', icon: '✅' },
        ],
      },
      {
        id: 'frameworks',
        name: 'Frameworks Populares',
        fullName: 'Dockerizar Frameworks',
        icon: '🚀',
        description: 'Dockerizar aplicaciones: Python/FastAPI, Java/Spring, Frontend/React, Node.js.',
        lessons: [
          { title: 'Backend: Python & FastAPI', link: '/docker/frameworks/python', icon: '🐍' },
          { title: 'Backend: Java & Spring Boot', link: '/docker/frameworks/java', icon: '☕' },
          { title: 'Frontend: React, Angular, Vue', link: '/docker/frameworks/frontend', icon: '⚛️' },
          { title: 'Node.js & Express', link: '/docker/frameworks/nodejs', icon: '📦' },
        ],
      },
    ],
    topics: [],
    lessons: [
      { title: 'Introducción: Qué es Docker y por qué lo necesitas', link: '/docker/fundamentales/intro' },
      { title: 'Conceptos: Imágenes, Contenedores, Volúmenes y Capas', link: '/docker/fundamentales/conceptos' },
      { title: 'Tu primer Dockerfile - Instrucciones principales', link: '/docker/fundamentales/dockerfile' },
      { title: 'Comandos Esenciales de Docker - Build, Run, Logs', link: '/docker/fundamentales/comandos' },
      { title: 'Docker Compose: Orquestación de Múltiples Contenedores', link: '/docker/composicion/compose' },
      { title: 'Networking y DNS Interno entre Contenedores', link: '/docker/composicion/networking' },
      { title: 'Volúmenes: Persistencia de Datos (Named vs Bind)', link: '/docker/composicion/volumenes' },
      { title: 'Multi-Stage Builds - Reducir Tamaño de Imágenes', link: '/docker/avanzado/multistage' },
      { title: 'Optimización: Alpine, Caché, Seguridad', link: '/docker/avanzado/optimizacion' },
      { title: 'Debugging y Troubleshooting - Logs, Exec, Stats', link: '/docker/avanzado/debugging' },
      { title: 'Buenas Prácticas Profesionales y Checklist', link: '/docker/avanzado/practicas' },
      { title: 'Backend: Python & FastAPI en Docker', link: '/docker/frameworks/python' },
      { title: 'Backend: Java & Spring Boot Multi-Stage', link: '/docker/frameworks/java' },
      { title: 'Frontend: React, Angular, Vue - Multi-Stage', link: '/docker/frameworks/frontend' },
      { title: 'Node.js & Express - Alpine y Producción', link: '/docker/frameworks/nodejs' },
    ],
  },
  git: {
    title: 'Git - Control de Versiones',
    icon: '🌳',
    description: 'Domina el control de versiones con Git',
    sections: [
      {
        id: 'basicos',
        name: 'Git Básicos',
        icon: '📖',
        description: 'Domina los fundamentos: configuración, repositorios, commits, ramas y merge. Todo lo que necesitas para comenzar con Git.',
        lessons: [
          { title: 'Configuración inicial de Git', link: '/git/basicos/configuracion-inicial', icon: '⚙️' },
          { title: 'Configuración de Alias en Git', link: '/git/basicos/alias', icon: '🏷️' },
          { title: 'Crear y clonar repositorios', link: '/git/basicos/crear-clonar-repos', icon: '📁' },
          { title: 'Commits y mensajes claros', link: '/git/basicos/commits', icon: '💾' },
          { title: 'Ramas (branches)', link: '/git/basicos/branches', icon: '🌿' },
          { title: 'Merge y resolución de conflictos', link: '/git/basicos/merge', icon: '🔀' },
          { title: 'Errores Comunes en Git', link: '/git/basicos/errores-comunes', icon: '⚠️' },
        ],
      },
      {
        id: 'avanzado',
        name: 'Remoto y Colaboración',
        icon: '⚡',
        description: 'Sincronización remota, pull requests y plataformas colaborativas. Aprende a trabajar en equipo y gestionar proyectos profesionales.',
        lessons: [
          { title: 'Push, Pull y Fetch', link: '/git/avanzado/push-pull-fetch', icon: '⬆️' },
          { title: 'Pull requests y colaboración', link: '/git/avanzado/pull-requests', icon: '🤝' },
          { title: 'GitHub, GitLab y Bitbucket', link: '/git/avanzado/plataformas-remotas', icon: '🌐' },
        ],
      },
      {
        id: 'practicas',
        name: 'Prácticas con Git',
        icon: '💪',
        description: 'Ejercicios prácticos para poner en práctica lo aprendido. Realiza tareas reales de configuración y uso de Git.',
        lessons: [
          { title: 'Práctica: Configura tu Git', link: '/git/practicas/configura-tu-git', icon: '⚙️' },
          { title: 'Práctica: Crea tu Primer Repositorio', link: '/git/practicas/crea-tu-primer-repositorio', icon: '📁' },
          { title: 'Práctica: Haz tus Primeros Commits', link: '/git/practicas/haz-tus-primeros-commits', icon: '💾' },
          { title: 'Práctica: Trabaja con Ramas', link: '/git/practicas/trabaja-con-ramas', icon: '🌿' },
          { title: 'Práctica: Resuelve Conflictos de Merge', link: '/git/practicas/resuelve-conflictos-de-merge', icon: '🔀' },
        ],
      },
    ],
    topics: [],
    lessons: [],
    faq: [
      {
        question: '¿Cómo configuro Git por primera vez en mi ordenador?',
        answer: 'Necesitas configurar tu nombre de usuario y email en Git para que aparezcan en tus commits. Esto es fundamental para identificar quién hizo cada cambio en el repositorio.',
        links: [
          { title: 'Configuración inicial de Git', url: '/git/basicos/configuracion-inicial' },
        ],
      },
      {
        question: '¿Cuál es la diferencia entre git clone, git fork y git pull?',
        answer: 'Clone descarga un repositorio completo, Pull descarga cambios del remoto, y Fork crea una copia del repositorio en tu cuenta. Aprende cuándo usar cada uno y cómo colaborar efectivamente.',
        links: [
          { title: 'Crear y clonar repositorios', url: '/git/basicos/crear-clonar-repos' },
          { title: 'Push, Pull y Fetch', url: '/git/avanzado/push-pull-fetch' },
        ],
      },
      {
        question: '¿Cómo creo ramas y evito conflictos al trabajar en equipo?',
        answer: 'Las ramas te permiten trabajar en paralelo sin afectar el código principal. Es esencial crear ramas para cada feature y hacer merge ordenadamente para evitar conflictos.',
        links: [
          { title: 'Ramas (branches)', url: '/git/basicos/branches' },
          { title: 'Merge y resolución de conflictos', url: '/git/basicos/merge' },
        ],
      },
      {
        question: '¿Qué es un Pull Request y cómo lo uso?',
        answer: 'Un Pull Request es una solicitud para fusionar cambios. Permite que otros revisen tu código antes de hacer merge, garantizando calidad y conocimiento compartido del proyecto.',
        links: [
          { title: 'Pull requests y colaboración', url: '/git/avanzado/pull-requests' },
        ],
      },
      {
        question: '¿Cómo escribo buenos commits?',
        answer: 'Un buen commit tiene un mensaje claro y conciso que explique QUÉ y POR QUÉ. Esto facilita el historial y debugging. Sigue convenciones de mensajes de commit.',
        links: [
          { title: 'Commits y mensajes claros', url: '/git/basicos/commits' },
        ],
      },
      {
        question: '¿Cuáles son las diferencias entre GitHub, GitLab y Bitbucket?',
        answer: 'Todos son plataformas para alojar repositorios, pero tienen diferencias en características, precios y integraciones. Conoce cuál es mejor para tu proyecto.',
        links: [
          { title: 'GitHub, GitLab y Bitbucket', url: '/git/avanzado/plataformas-remotas' },
        ],
      },
    ],
  },
  'java': {
    title: 'Java',
    icon: '☕',
    description: 'Domina Java: desde fundamentos hasta patrones avanzados y persistencia de datos',
    sections: [
      {
        id: 'basico',
        name: 'Básico',
        fullName: 'Java Básico',
        description: 'Fundamentos esenciales: tipos de datos, control de flujo, strings, arrays y excepciones.',
        lessons: [
          { title: 'Funcionamiento Interno de Java', link: '/java/basico/funcionamiento', icon: '⚙️' },
          { title: 'Tipos de Datos', link: '/java/basico/tipos-datos', icon: '🔢' },
          { title: 'Control de Flujo', link: '/java/basico/control-flujo', icon: '🔀' },
          { title: 'Strings y Texto', link: '/java/basico/strings', icon: '📝' },
          { title: 'Arrays y Matrices', link: '/java/basico/arrays', icon: '📊' },
          { title: 'Scanner e Entrada', link: '/java/basico/scanner', icon: '⌨️' },
          { title: 'Excepciones', link: '/java/basico/excepciones', icon: '⚠️' },
        ],
      },
      {
        id: 'poo',
        name: 'POO',
        fullName: 'Programación Orientada a Objetos',
        description: 'Domina los pilares de la POO: clases, herencia, polimorfismo e interfaces.',
        lessons: [
          { title: 'Clases y Objetos', link: '/java/poo/clases-objetos', icon: '📦' },
          { title: 'Herencia', link: '/java/poo/herencia', icon: '🧬' },
          { title: 'Polimorfismo', link: '/java/poo/polimorfismo', icon: '🔄' },
          { title: 'Interfaces y Clases Abstractas', link: '/java/poo/interfaces-abstractas', icon: '🎭' },
        ],
      },
      {
        id: 'avanzado',
        name: 'Avanzado',
        fullName: 'Java Avanzado',
        description: 'Conceptos avanzados: colecciones, lambdas, streams y genéricos.',
        lessons: [
          { title: 'Colecciones en Java', link: '/java/avanzado/colecciones', icon: '📦' },
          { title: 'Expresiones Lambda', link: '/java/avanzado/lambdas', icon: 'λ' },
          { title: 'Streams API', link: '/java/avanzado/streams', icon: '🌊' },
          { title: 'Genéricos', link: '/java/avanzado/genericos', icon: '<>' },
        ],
      },
      {
        id: 'bd',
        name: 'BD',
        fullName: 'Conexión a BD',
        description: 'JDBC, CRUD y persistencia: gestiona datos en bases de datos.',
        lessons: [
          { title: 'JDBC - Conectar a Bases de Datos', link: '/java/bd/jdbc', icon: '🔌' },
          { title: 'CRUD y Transacciones', link: '/java/bd/crud', icon: '💾' },
        ],
      },
      {
        id: 'internals',
        name: 'JVM',
        fullName: 'Java Internals',
        description: 'Entiende cómo funciona Java: JVM, memoria, compilación y garbage collection.',
        lessons: [
          { title: 'Cómo funciona la JVM', link: '/java/internals/jvm', icon: '⚙️' },
          { title: 'Memoria: Heap y Stack', link: '/java/internals/memoria', icon: '💾' },
          { title: 'Garbage Collection', link: '/java/internals/gc', icon: '🧹' },
          { title: 'Bytecode y Compilación', link: '/java/internals/bytecode', icon: '⚡' },
          { title: 'Threads y Concurrencia', link: '/java/internals/threads', icon: '🔄' },
        ],
      },
    ],
    topics: [],
    lessons: [],
    faq: [
      {
        question: '¿Cuál es la diferencia entre compilación e interpretación en Java?',
        answer: 'Java se compila a bytecode y luego se interpreta en la JVM. Esto permite que el código sea portable: "Write Once, Run Anywhere" (WORA). El bytecode es independiente de la plataforma.',
        links: [
          { title: 'Fundamentos de la Máquina de Java', url: '/java/avanzado/jvm' },
        ],
      },
      {
        question: '¿Cómo funciona la herencia en Java?',
        answer: 'La herencia permite que una clase herede propiedades y métodos de otra clase padre. Promueve la reutilización de código. Java solo soporta herencia simple de clases, pero múltiple de interfaces.',
        links: [
          { title: 'Herencia', url: '/java/poo/herencia' },
          { title: 'Interfaces y Clases Abstractas', url: '/java/poo/interfaces-abstractas' },
        ],
      },
      {
        question: '¿Qué es el polimorfismo y para qué sirve?',
        answer: 'El polimorfismo permite que objetos de diferentes clases se usen de la misma manera. Es fundamental para escribir código flexible y escalable. Hay polimorfismo de compilación (sobrecarga) y runtime (sobreescritura).',
        links: [
          { title: 'Polimorfismo', url: '/java/poo/polimorfismo' },
        ],
      },
      {
        question: '¿Cómo manejo excepciones correctamente en Java?',
        answer: 'Usa try-catch-finally para manejar errores. Captura excepciones específicas, no genéricas. Usa finally para limpiar recursos. Considera usar try-with-resources para AutoCloseable.',
        links: [
          { title: 'Excepciones', url: '/java/basico/excepciones' },
        ],
      },
      {
        question: '¿Cuál es la diferencia entre == y .equals() en Java?',
        answer: '== compara referencias de objetos, mientras que .equals() compara contenido. Para comparar strings y objetos, siempre usa .equals(). Los strings se deben comparar con .equals().',
        links: [
          { title: 'Strings y Texto', url: '/java/basico/strings' },
        ],
      },
      {
        question: '¿Cuándo usar Colecciones, Lambdas y Streams?',
        answer: 'Colecciones para almacenar datos (List, Set, Map), Lambdas para crear funciones anónimas concisas, y Streams para procesamiento funcional de colecciones. Streams son más declarativos y eficientes.',
        links: [
          { title: 'Colecciones en Java', url: '/java/avanzado/colecciones' },
          { title: 'Expresiones Lambda', url: '/java/avanzado/lambdas' },
          { title: 'Streams API', url: '/java/avanzado/streams' },
        ],
      },
    ],
  },
  'sql': {
    title: 'SQL - Bases de Datos',
    icon: '🗄️',
    description: 'Aprende SQL: desde consultas básicas hasta optimización de bases de datos',
    sections: [
      {
        id: 'basicos',
        name: 'SQL Básico',
        fullName: 'SQL Básico',
        description: 'Fundamentos de SQL: DDL, DML, consultas básicas y estructuras de datos.',
        lessons: [
          { title: 'Introducción a SQL y Bases de Datos', link: '/sql/basicos/introduccion', icon: '📚' },
          { title: 'DDL - Data Definition Language', link: '/sql/basicos/ddl', icon: '⚙️' },
          { title: 'DML - Data Manipulation Language', link: '/sql/basicos/dml', icon: '✏️' },
        ],
      },
      {
        id: 'avanzado',
        name: 'SQL Avanzado',
        fullName: 'SQL Avanzado',
        description: 'Conceptos avanzados: JOINs, GROUP BY, subconsultas y optimización.',
        lessons: [
          { title: 'JOINs - Combinando Tablas', link: '/sql/avanzado/joins', icon: '🔗' },
          { title: 'Consultas Avanzadas', link: '/sql/avanzado/consultas-avanzadas', icon: '🔍' },
        ],
      },
    ],
    topics: [],
    lessons: [],
    faq: [
      {
        question: '¿Cuál es la diferencia entre SQL y NoSQL?',
        answer: 'SQL usa tablas relacionales con esquemas predefinidos, ideal para datos estructurados. NoSQL es flexible, sin esquema fijo, mejor para datos no estructurados. Elige según tus necesidades.',
        links: [
          { title: 'SQL vs NoSQL - Comparativa', url: '/sql/lenguajes/sql-nosql' },
        ],
      },
      {
        question: '¿Qué es un JOIN y para qué sirve?',
        answer: 'Un JOIN combina filas de múltiples tablas basado en una condición. INNER JOIN (solo coincidencias), LEFT JOIN (todas de la izquierda), RIGHT JOIN (todas de la derecha), FULL JOIN (todas).',
        links: [
          { title: 'JOINs - Combinando Tablas', url: '/sql/avanzado/joins' },
        ],
      },
      {
        question: '¿Cómo optimizo mis consultas SQL?',
        answer: 'Usa índices en columnas frecuentemente consultadas, evita SELECT *, usa EXPLAIN PLAN para analizar, normaliza datos, y crea vistas para consultas complejas frecuentes.',
        links: [
          { title: 'Consultas Avanzadas', url: '/sql/avanzado/consultas-avanzadas' },
        ],
      },
      {
        question: '¿Qué es normalización en bases de datos?',
        answer: 'Normalización organiza datos para reducir redundancia y mejorar integridad. Hay niveles: 1NF (elimina datos repetidos), 2NF (dependencias parciales), 3NF (dependencias transitivas).',
        links: [
          { title: 'Crear y Administrar Bases de Datos', url: '/sql/gestion/crear-bases-datos' },
        ],
      },
      {
        question: '¿Cómo manejo transacciones y ACID en SQL?',
        answer: 'Las transacciones garantizan Atomicidad (todo o nada), Consistencia, Aislamiento y Durabilidad. Usa BEGIN, COMMIT, ROLLBACK para controlar transacciones.',
        links: [
          { title: 'CRUD y Transacciones', url: '/java/bd/crud' },
        ],
      },
      {
        question: '¿Cuál es la diferencia entre MySQL, PostgreSQL y MongoDB?',
        answer: 'MySQL: SQL tradicional, rápido, ampliamente soportado. PostgreSQL: SQL avanzado, características empresariales. MongoDB: NoSQL, flexible, documentos JSON.',
        links: [
          { title: 'MySQL - SQL Relacional', url: '/sql/lenguajes/mysql' },
          { title: 'PostgreSQL - SQL Avanzado', url: '/sql/lenguajes/postgresql' },
          { title: 'MongoDB - NoSQL Flexible', url: '/sql/lenguajes/mongodb' },
        ],
      },
    ],
  },
  'spring-boot': {
    title: 'Spring Boot',
    icon: '🚀',
    description: 'Desarrolla aplicaciones web profesionales',
    sections: [
      {
        id: 'fundamentos',
        name: 'Fundamentos',
        fullName: 'Spring Boot Fundamentos',
        description: 'Introducción a Spring Boot, configuración y controladores REST básicos.',
        lessons: [
          { title: 'Introducción a Spring Boot', link: '/spring-boot/fundamentos/introduccion', icon: '🎯' },
          { title: 'Configuración y Setup', link: '/spring-boot/fundamentos/configuracion', icon: '⚙️' },
          { title: 'Controladores REST', link: '/spring-boot/fundamentos/controladores', icon: '🔌' },
        ],
      },
      {
        id: 'avanzado',
        name: 'Avanzado',
        fullName: 'Spring Boot Avanzado',
        description: 'Servicios, JPA/Hibernate, validación, testing y seguridad.',
        lessons: [
          { title: 'Servicios y Capas', link: '/spring-boot/avanzado/servicios', icon: '🏗️' },
          { title: 'JPA & Hibernate', link: '/spring-boot/avanzado/jpa-hibernate', icon: '🗄️' },
          { title: 'Validación', link: '/spring-boot/avanzado/validacion', icon: '✅' },
          { title: 'Testing', link: '/spring-boot/avanzado/testing', icon: '🧪' },
          { title: 'Spring Security', link: '/spring-boot/avanzado/spring-security', icon: '🔐' },
          { title: 'OAuth2 & JWT', link: '/spring-boot/avanzado/oauth2-jwt', icon: '🔑' },
        ],
      },
    ],
    topics: [],
    lessons: [],
    faq: [
      {
        question: '¿Qué es Spring Boot y por qué lo usamos?',
        answer: 'Spring Boot simplifica la creación de aplicaciones Spring proporcionando configuración automática (auto-configuration) y dependencias integradas (starters). Reduce código boilerplate significativamente.',
        links: [
          { title: 'Introducción a Spring Boot', url: '/spring-boot/fundamentos/introduccion' },
        ],
      },
      {
        question: '¿Cómo creo mi primer proyecto de Spring Boot?',
        answer: 'Usa Spring Initializr (start.spring.io) o tu IDE para crear un nuevo proyecto. Selecciona dependencias, descarga el proyecto y ejecuta `mvn spring-boot:run`. ¡Eso es todo!',
        links: [
          { title: 'Setup y Configuración', url: '/spring-boot/fundamentos/configuracion' },
        ],
      },
      {
        question: '¿Cuál es la diferencia entre @Controller y @RestController?',
        answer: '@Controller devuelve vistas (HTML), @RestController devuelve JSON/XML. @RestController es @Controller + @ResponseBody, ideal para APIs REST.',
        links: [
          { title: 'Controladores y Rutas', url: '/spring-boot/fundamentos/controladores' },
        ],
      },
      {
        question: '¿Cómo manejo la persistencia de datos en Spring Boot?',
        answer: 'Usa Spring Data JPA con Hibernate. Define entidades con @Entity, repositorios con extends JpaRepository, y Spring maneja CRUD automáticamente. Configura conexión en application.properties.',
        links: [
          { title: 'Acceso a Datos con JPA', url: '/spring-boot/avanzado/jpa-hibernate' },
        ],
      },
      {
        question: '¿Cómo valido datos en Spring Boot?',
        answer: 'Usa anotaciones como @NotNull, @Email, @Length en tus modelos. En controladores, añade @Valid en parámetros y BindingResult para capturar errores. Spring Boot maneja el resto.',
        links: [
          { title: 'Validación y Manejo de Errores', url: '/spring-boot/avanzado/validacion' },
        ],
      },
      {
        question: '¿Cómo implemento seguridad en Spring Boot?',
        answer: 'Usa Spring Security con @EnableWebSecurity. Configura autenticación (usuarios, contraseñas), autorización (roles, permisos) y protege tus endpoints. Considera JWT/OAuth2 para APIs.',
        links: [
          { title: 'Seguridad con Spring Security', url: '/spring-boot/avanzado/spring-security' },
          { title: 'OAuth2 & JWT - Autenticación Profesional', url: '/spring-boot/avanzado/oauth2-jwt' },
        ],
      },
    ],
  },
  'entornos': {
    title: 'Entornos de Desarrollo',
    icon: '🛠️',
    description: 'Herramientas, IDEs, arquitectura y mejores prácticas profesionales',
    intro: 'Un entorno de desarrollo es el conjunto de herramientas, frameworks y configuraciones que utilizamos para escribir, probar y ejecutar código Java de forma profesional. Incluye desde IDEs (como IntelliJ IDEA o Eclipse) hasta frameworks de trabajo como Spring Boot, y herramientas de compilación como Maven o Gradle. Dominar estos entornos es esencial para convertirse en un desarrollador Java competente y productivo.',
    sections: [
      {
        id: 'herramientas',
        name: 'Herramientas',
        icon: '🔧',
        description: 'IDEs, editores y herramientas esenciales de desarrollo',
        lessons: [
          { title: 'Concepto de Entorno de Desarrollo', link: '/entornos/herramientas/concepto', icon: '🎯' },
          { title: 'IDEs y Editores', link: '/entornos/herramientas/ides', icon: '💻' },
          { title: 'Codeium AI', link: '/entornos/herramientas/codeium', icon: '🤖' },
        ],
      },
      {
        id: 'arquitectura',
        name: 'Arquitectura y Patrones',
        icon: '🏗️',
        description: 'Arquitectura de software, patrones y mejores prácticas',
        lessons: [
          { title: 'UML y Diagramas', link: '/entornos/arquitectura/uml', icon: '📐' },
          { title: 'Patrones de Diseño', link: '/entornos/arquitectura/patrones', icon: '🎯' },
          { title: 'Conceptos de Desarrollo', link: '/entornos/arquitectura/conceptos', icon: '📚' },
          { title: 'Testing y QA', link: '/entornos/arquitectura/testing', icon: '✅' },
          { title: 'Refactorización y SOLID', link: '/entornos/arquitectura/refactoring', icon: '🔄' },
        ],
      },
      {
        id: 'build-tools',
        name: 'Build & Herramientas',
        icon: '🔨',
        description: 'Maven, Gradle y construcción de proyectos profesionales',
        lessons: [
          { title: 'Bash & Shell - Automatización', link: '/entornos/build/bash', icon: '⌨️' },
          { title: 'Maven - Gestión de Proyectos', link: '/entornos/build/maven', icon: '📦' },
          { title: 'Gradle - Build Avanzado', link: '/entornos/build/gradle', icon: '⚙️' },
          { title: 'Gestión de Dependencias', link: '/entornos/build/dependencias', icon: '🔗' },
        ],
      },
      {
        id: 'devops',
        name: 'DevOps & Deployment',
        icon: '🚀',
        description: 'Docker, CI/CD, containerización y despliegue profesional',
        lessons: [
          { title: 'Docker - Containerización', link: '/entornos/devops/docker', icon: '🐳' },
          { title: 'Docker Compose - Multi-contenedor', link: '/entornos/devops/docker-compose', icon: '🔗' },
          { title: 'CI/CD - Automatización', link: '/entornos/devops/cicd', icon: '⚙️' },
          { title: 'GitHub Actions', link: '/entornos/devops/github-actions', icon: '🤖' },
          { title: 'Despliegue en Cloud', link: '/entornos/devops/cloud-deployment', icon: '☁️' },
        ],
      },
    ],
    topics: [],
    lessons: [
      { title: 'Concepto de Entorno de Desarrollo', link: '/entornos/herramientas/concepto' },
      { title: 'IDEs y Editores', link: '/entornos/herramientas/ides' },
      { title: 'Codeium AI', link: '/entornos/herramientas/codeium' },
      { title: 'UML y Diagramas', link: '/entornos/arquitectura/uml' },
      { title: 'Patrones de Diseño', link: '/entornos/arquitectura/patrones' },
      { title: 'Conceptos de Desarrollo', link: '/entornos/arquitectura/conceptos' },
      { title: 'Testing y QA', link: '/entornos/arquitectura/testing' },
      { title: 'Refactorización y SOLID', link: '/entornos/arquitectura/refactoring' },
      { title: 'Maven - Gestión de Proyectos', link: '/entornos/build/maven' },
      { title: 'Gradle - Build Avanzado', link: '/entornos/build/gradle' },
      { title: 'Gestión de Dependencias', link: '/entornos/build/dependencias' },
      { title: 'Docker - Containerización', link: '/entornos/devops/docker' },
      { title: 'Docker Compose - Multi-contenedor', link: '/entornos/devops/docker-compose' },
      { title: 'CI/CD - Automatización', link: '/entornos/devops/cicd' },
      { title: 'GitHub Actions', link: '/entornos/devops/github-actions' },
      { title: 'Despliegue en Cloud (Vercel, Heroku, AWS, Azure)', link: '/entornos/devops/cloud-deployment' },
    ],
  },
  proyecto: {
    title: 'Proyecto Integrador',
    icon: '🎯',
    description: 'Proyecto final integrando Java Backend, Spring Boot, Bases de Datos y más',
    sections: [
      {
        id: 'planificacion',
        name: 'Planificación',
        fullName: 'Planificación',
        icon: '📋',
        description: 'Definición de requisitos, arquitectura y diseño del proyecto',
        lessons: [
          { title: 'Definición del Proyecto', link: '/proyecto/planificacion/definicion', icon: '🎯' },
          { title: 'Requisitos y Especificaciones', link: '/proyecto/planificacion/requisitos', icon: '📋' },
          { title: 'Arquitectura y Diseño', link: '/proyecto/planificacion/arquitectura', icon: '🏗️' },
          { title: 'Ejemplos de Proyectos TFC', link: '/proyecto/planificacion/ejemplos', icon: '💡' },
        ],
      },
      {
        id: 'metodologia',
        name: 'Metodología',
        fullName: 'Metodología SCRUM',
        icon: '⚡',
        description: 'Agile, SCRUM y gestión del proyecto con Taiga',
        lessons: [
          { title: 'Agile y SCRUM', link: '/proyecto/metodologia/agile-scrum', icon: '⚡' },
          { title: 'Sprint 1', link: '/proyecto/metodologia/sprint-1', icon: '🚀' },
          { title: 'Sprint 2', link: '/proyecto/metodologia/sprint-2', icon: '🚀' },
        ],
      },
      {
        id: 'desarrollo',
        name: 'Desarrollo',
        fullName: 'Desarrollo Backend',
        icon: '💻',
        description: 'Implementación del backend con Java y Spring Boot',
        lessons: [
          { title: 'Setup del Proyecto', link: '/proyecto/desarrollo/setup', icon: '⚙️' },
          { title: 'Desarrollo Backend', link: '/proyecto/desarrollo/backend', icon: '🔧' },
          { title: 'Base de Datos', link: '/proyecto/desarrollo/database', icon: '🗄️' },
          { title: 'APIs REST', link: '/proyecto/desarrollo/apis', icon: '🌐' },
        ],
      },
      {
        id: 'testing',
        name: 'Testing',
        fullName: 'Testing y Validación',
        icon: '✅',
        description: 'Pruebas unitarias, integración y validación',
        lessons: [
          { title: 'Testing Unitario', link: '/proyecto/testing/unitario', icon: '🧪' },
          { title: 'Testing de Integración', link: '/proyecto/testing/integracion', icon: '🔗' },
          { title: 'Validación Final', link: '/proyecto/testing/validacion', icon: '✔️' },
        ],
      },
      {
        id: 'despliegue',
        name: 'Despliegue',
        fullName: 'Despliegue en Producción',
        icon: '📦',
        description: 'Empaquetado, documentación y despliegue a producción',
        lessons: [
          { title: 'Empaquetado y Build', link: '/proyecto/despliegue/build', icon: '📦' },
          { title: 'Documentación', link: '/proyecto/despliegue/documentacion', icon: '📖' },
          { title: 'Despliegue en Cloud', link: '/proyecto/despliegue/cloud', icon: '☁️' },
        ],
      },
      {
        id: 'retos',
        name: 'Retos DAW',
        fullName: 'Retos del Currículo',
        icon: '🎯',
        description: 'Los 8 Retos del currículo con especificaciones y soluciones',
        lessons: [
          { title: 'REPTE 1: Especificación del Proyecto', link: '/proyecto/retos/1', icon: '📋' },
          { title: 'REPTE 2: Especificación de Requisitos', link: '/proyecto/retos/2', icon: '📋' },
          { title: 'REPTE 3: Diseño de Arquitectura y BD', link: '/proyecto/retos/3', icon: '🏗️' },
          { title: 'REPTE 4: Prototipo y Diseño Visual', link: '/proyecto/retos/4', icon: '🎨' },
          { title: 'REPTE 5: Configuración Agile/SCRUM', link: '/proyecto/retos/5', icon: '⚡' },
          { title: 'REPTE 6: Primer Sprint Development', link: '/proyecto/retos/6', icon: '💻' },
          { title: 'REPTE 7: Second Sprint Development', link: '/proyecto/retos/7', icon: '💻' },
          { title: 'REPTE 8: Final Sprint & Deployment', link: '/proyecto/retos/8', icon: '🚀' },
        ],
      },
      {
        id: 'ejemplos',
        name: 'Ejemplos de TFC',
        fullName: 'Proyectos Viables para TFC',
        icon: '💡',
        description: '12+ proyectos desarrollados y viables para tu Trabajo de Fin de Curso',
        lessons: [
          { title: 'LibroHub - Marketplace de Libros Usados', link: '/proyecto/ejemplos/1', icon: '📚' },
          { title: 'SportGear - E-commerce de Equipamiento', link: '/proyecto/ejemplos/2', icon: '🏃' },
          { title: 'ClinicaPro - Gestión de Clínica Médica', link: '/proyecto/ejemplos/3', icon: '🏥' },
          { title: 'PropertyHub - Plataforma de Alquiler', link: '/proyecto/ejemplos/4', icon: '🏘️' },
          { title: 'GamerHub - Red Social de Gamers', link: '/proyecto/ejemplos/5', icon: '🎮' },
          { title: 'TravelDiaries - Red de Viajeros', link: '/proyecto/ejemplos/6', icon: '✈️' },
          { title: 'CodeLearning - Plataforma de Cursos', link: '/proyecto/ejemplos/7', icon: '💻' },
          { title: 'JobMatch - Portal de Empleo', link: '/proyecto/ejemplos/8', icon: '💼' },
          { title: 'ExpenseSplitter - Gestor de Gastos', link: '/proyecto/ejemplos/9', icon: '💰' },
          { title: 'TaskFlow - Gestor de Proyectos', link: '/proyecto/ejemplos/10', icon: '📊' },
          { title: 'RecipeShare - Red de Recetas', link: '/proyecto/ejemplos/11', icon: '🍳' },
          { title: 'PetCare - Red Social de Mascotas', link: '/proyecto/ejemplos/12', icon: '🐕' },
        ],
      },
    ],
    topics: [],
    lessons: [
      { title: 'Definición del Proyecto', link: '/proyecto/planificacion/definicion' },
      { title: 'Requisitos y Especificaciones', link: '/proyecto/planificacion/requisitos' },
      { title: 'Arquitectura y Diseño', link: '/proyecto/planificacion/arquitectura' },
      { title: 'Ejemplos de Proyectos TFC', link: '/proyecto/planificacion/ejemplos' },
      { title: 'Agile y SCRUM', link: '/proyecto/metodologia/agile-scrum' },
      { title: 'Sprint 1', link: '/proyecto/metodologia/sprint-1' },
      { title: 'Sprint 2', link: '/proyecto/metodologia/sprint-2' },
      { title: 'Setup del Proyecto', link: '/proyecto/desarrollo/setup' },
      { title: 'Desarrollo Backend', link: '/proyecto/desarrollo/backend' },
      { title: 'Base de Datos', link: '/proyecto/desarrollo/database' },
      { title: 'APIs REST', link: '/proyecto/desarrollo/apis' },
      { title: 'Testing Unitario', link: '/proyecto/testing/unitario' },
      { title: 'Testing de Integración', link: '/proyecto/testing/integracion' },
      { title: 'Validación Final', link: '/proyecto/testing/validacion' },
      { title: 'Empaquetado y Build', link: '/proyecto/despliegue/build' },
      { title: 'Documentación', link: '/proyecto/despliegue/documentacion' },
      { title: 'Despliegue en Cloud', link: '/proyecto/despliegue/cloud' },
      { title: 'REPTE 1: Especificación del Proyecto', link: '/proyecto/retos/1' },
      { title: 'REPTE 2: Especificación de Requisitos', link: '/proyecto/retos/2' },
      { title: 'REPTE 3: Diseño de Arquitectura y BD', link: '/proyecto/retos/3' },
      { title: 'REPTE 4: Prototipo y Diseño Visual', link: '/proyecto/retos/4' },
      { title: 'REPTE 5: Configuración Agile/SCRUM', link: '/proyecto/retos/5' },
      { title: 'REPTE 6: Primer Sprint Development', link: '/proyecto/retos/6' },
      { title: 'REPTE 7: Second Sprint Development', link: '/proyecto/retos/7' },
      { title: 'REPTE 8: Final Sprint & Deployment', link: '/proyecto/retos/8' },
      { title: 'LibroHub - Marketplace de Libros Usados', link: '/proyecto/ejemplos/1' },
      { title: 'SportGear - E-commerce de Equipamiento', link: '/proyecto/ejemplos/2' },
      { title: 'ClinicaPro - Gestión de Clínica Médica', link: '/proyecto/ejemplos/3' },
      { title: 'PropertyHub - Plataforma de Alquiler', link: '/proyecto/ejemplos/4' },
      { title: 'GamerHub - Red Social de Gamers', link: '/proyecto/ejemplos/5' },
      { title: 'TravelDiaries - Red de Viajeros', link: '/proyecto/ejemplos/6' },
      { title: 'CodeLearning - Plataforma de Cursos', link: '/proyecto/ejemplos/7' },
      { title: 'JobMatch - Portal de Empleo', link: '/proyecto/ejemplos/8' },
      { title: 'ExpenseSplitter - Gestor de Gastos', link: '/proyecto/ejemplos/9' },
      { title: 'TaskFlow - Gestor de Proyectos', link: '/proyecto/ejemplos/10' },
      { title: 'RecipeShare - Red de Recetas', link: '/proyecto/ejemplos/11' },
      { title: 'PetCare - Red Social de Mascotas', link: '/proyecto/ejemplos/12' },
    ],
  },
  metodologias: {
    title: 'Metodologías & Procesos',
    icon: '📊',
    description: 'Prácticas, metodologías y procesos para desarrollo profesional',
    sections: [
      {
        id: 'agile-scrum',
        name: 'Agile/SCRUM',
        fullName: 'Metodología Agile y SCRUM',
        icon: '⚡',
        description: 'Metodología ágil para gestión de proyectos iterativos',
        lessons: [
          { title: 'Introducción a Agile', link: '/metodologias/agile-scrum/introduccion', icon: '📖' },
          { title: 'SCRUM Framework', link: '/metodologias/agile-scrum/scrum', icon: '🎯' },
          { title: 'Sprints y Planning', link: '/metodologias/agile-scrum/sprints', icon: '📅' },
        ],
      },
      {
        id: 'clean-code',
        name: 'Clean Code',
        fullName: 'Código Limpio y Mantenible',
        icon: '✨',
        description: 'Principios y prácticas para escribir código de calidad',
        lessons: [
          { title: 'Nombres Significativos', link: '/metodologias/clean-code/nombres', icon: '📝' },
          { title: 'Funciones Limpias', link: '/metodologias/clean-code/funciones', icon: '⚙️' },
          { title: 'Estructura y Formato', link: '/metodologias/clean-code/estructura', icon: '🏗️' },
          { title: 'SOLID y Refactorización', link: '/metodologias/clean-code/solid', icon: '🎯' },
          { title: 'Patrones de Diseño', link: '/metodologias/clean-code/patrones', icon: '🎨' },
          { title: 'Antipatrones: Qué NO Hacer', link: '/metodologias/clean-code/antipatrones', icon: '⛔' },
        ],
      },
      {
        id: 'testing',
        name: 'Testing',
        fullName: 'Pruebas de Software',
        icon: '🧪',
        description: 'Estrategias y tipos de testing para garantizar calidad',
        lessons: [
          { title: 'Testing Unitario', link: '/metodologias/testing/unitario', icon: '🔍' },
          { title: 'Testing de Integración', link: '/metodologias/testing/integracion', icon: '🔗' },
          { title: 'Testing de Aceptación', link: '/metodologias/testing/aceptacion', icon: '✅' },
        ],
      },
      {
        id: 'devops',
        name: 'DevOps',
        fullName: 'DevOps y CI/CD',
        icon: '🚀',
        description: 'Prácticas para automatización, integración y despliegue continuo',
        lessons: [
          { title: 'Introducción a DevOps', link: '/metodologias/devops/introduccion', icon: '📖' },
          { title: 'CI/CD Pipelines', link: '/metodologias/devops/cicd', icon: '⚙️' },
          { title: 'Monitoreo y Logs', link: '/metodologias/devops/monitoreo', icon: '📊' },
        ],
      },
    ],
    topics: [],
    lessons: [
      { title: 'Introducción a Agile', link: '/metodologias/agile-scrum/introduccion' },
      { title: 'SCRUM Framework', link: '/metodologias/agile-scrum/scrum' },
      { title: 'Sprints y Planning', link: '/metodologias/agile-scrum/sprints' },
      { title: 'Nombres Significativos', link: '/metodologias/clean-code/nombres' },
      { title: 'Funciones Limpias', link: '/metodologias/clean-code/funciones' },
      { title: 'Estructura y Formato', link: '/metodologias/clean-code/estructura' },
      { title: 'SOLID y Refactorización', link: '/metodologias/clean-code/solid' },
      { title: 'Patrones de Diseño', link: '/metodologias/clean-code/patrones' },
      { title: 'Testing Unitario', link: '/metodologias/testing/unitario' },
      { title: 'Testing de Integración', link: '/metodologias/testing/integracion' },
      { title: 'Testing de Aceptación', link: '/metodologias/testing/aceptacion' },
      { title: 'Introducción a DevOps', link: '/metodologias/devops/introduccion' },
      { title: 'CI/CD Pipelines', link: '/metodologias/devops/cicd' },
      { title: 'Monitoreo y Logs', link: '/metodologias/devops/monitoreo' },
    ],
  },
  contacto: {
    title: 'Contacto',
    icon: '📧',
    description: 'Información de contacto y soporte',
    sections: [
      {
        id: 'general',
        name: 'General',
        fullName: 'Información General',
        icon: '📧',
        description: 'Datos de contacto e información general',
        lessons: [
          { title: 'Email y Redes', link: '/contacto/general/email', icon: '📧' },
          { title: 'Formulario de Contacto', link: '/contacto/general/formulario', icon: '📝' },
          { title: 'Preguntas Frecuentes', link: '/contacto/general/faq', icon: '❓' },
        ],
      },
    ],
    topics: [],
    lessons: [
      { title: 'Email y Redes', link: '/contacto/general/email' },
      { title: 'Formulario de Contacto', link: '/contacto/general/formulario' },
      { title: 'Preguntas Frecuentes', link: '/contacto/general/faq' },
    ],
  },
  aws: {
    title: 'Amazon Web Services',
    icon: '☁️',
    description: 'Servicios en la nube: EC2, RDS, S3, Lambda y despliegue profesional',
    sections: [
      {
        id: 'fundamentales',
        name: 'Fundamentales',
        fullName: 'AWS Fundamentales',
        icon: '📖',
        description: 'Qué es AWS, conceptos clave, cuenta, IAM y pricing',
        lessons: [
          { title: 'Qué es AWS y por qué usarlo', link: '/aws/fundamentales/intro', icon: '☁️' },
          { title: 'Conceptos Clave: Regiones, AZ, VPC', link: '/aws/fundamentales/conceptos', icon: '🗺️' },
          { title: 'Gestión de Identidad y Acceso (IAM)', link: '/aws/fundamentales/iam', icon: '🔐' },
          { title: 'Pricing y Estimador de Costos', link: '/aws/fundamentales/pricing', icon: '💰' },
        ],
      },
      {
        id: 'servicios',
        name: 'Servicios Principales',
        fullName: 'AWS Servicios Principales',
        icon: '⚙️',
        description: 'Servicios más usados: EC2, RDS, S3, DynamoDB',
        lessons: [
          { title: 'EC2 - Máquinas Virtuales', link: '/aws/servicios/ec2', icon: '🖥️' },
          { title: 'RDS - Bases de Datos Relacionales', link: '/aws/servicios/rds', icon: '🗄️' },
          { title: 'S3 - Almacenamiento de Objetos', link: '/aws/servicios/s3', icon: '📦' },
          { title: 'DynamoDB - NoSQL', link: '/aws/servicios/dynamodb', icon: '⚡' },
        ],
      },
      {
        id: 'deployment',
        name: 'Deployment',
        fullName: 'AWS Deployment',
        icon: '🚀',
        description: 'Desplegar aplicaciones: Elastic Beanstalk, ECS, Lambda',
        lessons: [
          { title: 'Elastic Beanstalk - Deploy Simplificado', link: '/aws/deployment/beanstalk', icon: '🌱' },
          { title: 'ECS - Contenedores en AWS', link: '/aws/deployment/ecs', icon: '📦' },
          { title: 'Lambda - Serverless Computing', link: '/aws/deployment/lambda', icon: '⚡' },
          { title: 'CloudFront - CDN Global', link: '/aws/deployment/cloudfront', icon: '🌍' },
        ],
      },
      {
        id: 'operaciones',
        name: 'Operaciones & Seguridad',
        fullName: 'AWS Operaciones & Seguridad',
        icon: '🔒',
        description: 'CloudWatch, Security Groups, Backup y mejores prácticas',
        lessons: [
          { title: 'CloudWatch - Monitoreo y Logs', link: '/aws/operaciones/cloudwatch', icon: '📊' },
          { title: 'Security Groups y VPC', link: '/aws/operaciones/seguridad', icon: '🔐' },
          { title: 'Backup y Recuperación', link: '/aws/operaciones/backup', icon: '💾' },
          { title: 'Mejores Prácticas en AWS', link: '/aws/operaciones/practicas', icon: '✅' },
        ],
      },
    ],
    topics: [],
    lessons: [
      { title: 'Qué es AWS y por qué usarlo', link: '/aws/fundamentales/intro' },
      { title: 'Conceptos Clave: Regiones, AZ, VPC', link: '/aws/fundamentales/conceptos' },
      { title: 'Gestión de Identidad y Acceso (IAM)', link: '/aws/fundamentales/iam' },
      { title: 'Pricing y Estimador de Costos', link: '/aws/fundamentales/pricing' },
      { title: 'EC2 - Máquinas Virtuales', link: '/aws/servicios/ec2' },
      { title: 'RDS - Bases de Datos Relacionales', link: '/aws/servicios/rds' },
      { title: 'S3 - Almacenamiento de Objetos', link: '/aws/servicios/s3' },
      { title: 'DynamoDB - NoSQL', link: '/aws/servicios/dynamodb' },
      { title: 'Elastic Beanstalk - Deploy Simplificado', link: '/aws/deployment/beanstalk' },
      { title: 'ECS - Contenedores en AWS', link: '/aws/deployment/ecs' },
      { title: 'Lambda - Serverless Computing', link: '/aws/deployment/lambda' },
      { title: 'CloudFront - CDN Global', link: '/aws/deployment/cloudfront' },
      { title: 'CloudWatch - Monitoreo y Logs', link: '/aws/operaciones/cloudwatch' },
      { title: 'Security Groups y VPC', link: '/aws/operaciones/seguridad' },
      { title: 'Backup y Recuperación', link: '/aws/operaciones/backup' },
      { title: 'Mejores Prácticas en AWS', link: '/aws/operaciones/practicas' },
    ],
    faq: [
      {
        question: '¿Es AWS realmente más barato que infraestructura on-premise?',
        answer: 'Depende. Para cargas variables y startups, AWS es más económico (pay-as-you-go). Para cargas predecibles 24/7, on-premise puede ser más barato. Usa la Calculadora de AWS para estimar costos.',
        links: [
          { title: 'Pricing y Estimador de Costos', url: '/aws/fundamentales/pricing' },
        ],
      },
      {
        question: '¿Cómo hago mi infraestructura segura en AWS?',
        answer: 'Usa IAM para controlar acceso, Security Groups para firewall, VPC para aislar redes, encriptación de datos, y habilita logging (CloudTrail, CloudWatch). La seguridad es responsabilidad compartida.',
        links: [
          { title: 'Gestión de Identidad y Acceso (IAM)', url: '/aws/fundamentales/iam' },
          { title: 'Security Groups y VPC', url: '/aws/operaciones/seguridad' },
        ],
      },
      {
        question: '¿Qué debo elegir: EC2 o Elastic Beanstalk?',
        answer: 'EC2 te da control total (configura todo), Beanstalk es más simple (AWS configura la infraestructura). Elige EC2 si necesitas control, Beanstalk si quieres rapidez.',
        links: [
          { title: 'EC2 - Máquinas Virtuales', url: '/aws/servicios/ec2' },
          { title: 'Elastic Beanstalk - Deploy Simplificado', url: '/aws/deployment/beanstalk' },
        ],
      },
      {
        question: '¿Dónde almaceno mis datos: S3, RDS o DynamoDB?',
        answer: 'S3 para archivos (documentos, imágenes), RDS para datos relacionales (SQL), DynamoDB para datos NoSQL (escalabilidad extrema). Cada uno tiene un propósito diferente.',
        links: [
          { title: 'S3 - Almacenamiento de Objetos', url: '/aws/servicios/s3' },
          { title: 'RDS - Bases de Datos Relacionales', url: '/aws/servicios/rds' },
          { title: 'DynamoDB - NoSQL', url: '/aws/servicios/dynamodb' },
        ],
      },
      {
        question: '¿Cómo escalo mi aplicación automáticamente en AWS?',
        answer: 'Usa Auto Scaling Group con políticas basadas en CPU, memoria o tráfico. Elastic Load Balancer distribuye tráfico entre instancias. Lambda escala automáticamente sin gestionar servidores.',
        links: [
          { title: 'EC2 - Máquinas Virtuales', url: '/aws/servicios/ec2' },
          { title: 'Lambda - Serverless Computing', url: '/aws/deployment/lambda' },
        ],
      },
      {
        question: '¿Qué monitoreo necesito en AWS?',
        answer: 'CloudWatch para métricas y logs, CloudTrail para auditoría, Cost Explorer para monitorear gastos. Configura alertas para notificaciones cuando algo sale mal.',
        links: [
          { title: 'CloudWatch - Monitoreo y Logs', url: '/aws/operaciones/cloudwatch' },
        ],
      },
    ],
  },
};

export function ModulePage({ moduleId }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showModuleDropdown, setShowModuleDropdown] = useState(false);

  // Obtener sección desde query params (ej: ?section=basico)
  const sectionParam = searchParams.get('section');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [moduleId]);

  const content = moduleContent[moduleId] || {
    title: 'Módulo no encontrado',
    icon: '❌',
    description: 'Este módulo no existe',
    topics: [],
    lessons: [],
  };

  useEffect(() => {
    // Si hay un parámetro de sección, establecer activeTab
    if (sectionParam && content.sections) {
      const sectionIndex = content.sections.findIndex(s => s.id === sectionParam);
      if (sectionIndex !== -1) {
        setActiveTab(sectionIndex);
      }
    }
  }, [sectionParam, content]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const breadcrumbs = generateBreadcrumbItems(`/${moduleId}`);

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        url={`https://javabackendlearning.com/${moduleId}`}
      />
      <div className="breadcrumb-section">
        <Breadcrumb items={breadcrumbs} />
        <div className="module-dropdown-container">
          <button
            className="module-dropdown-toggle"
            onClick={() => setShowModuleDropdown(!showModuleDropdown)}
          >
            Otras secciones ▼
          </button>
          {showModuleDropdown && (
            <div className="module-dropdown-menu">
              {AVAILABLE_MODULES.map(mod => (
                <button
                  key={mod.id}
                  className={`dropdown-item ${mod.id === moduleId ? 'active' : ''}`}
                  onClick={() => {
                    navigate(`/${mod.id}`);
                    setShowModuleDropdown(false);
                  }}
                >
                  {mod.icon} {mod.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="module-page">
      <div className="module-header">
        <div className="module-header-content">
          <div className="module-icon-large">{content.icon}</div>
          <div>
            <h1>{content.title}</h1>
            <p className="module-description">{content.description}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="module-content">
          {content.intro && (
            <div className="module-intro">
              <p>{content.intro}</p>
            </div>
          )}
          {content.sections ? (
            // Si tiene secciones, mostrar tabs + cluster activo
            <>
              <div className="tabs-container">
                {content.sections.map((section, idx) => (
                  <button
                    key={idx}
                    className={`tab ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {section.name}
                  </button>
                ))}
              </div>

              <section className="topics-section">
                <h2>
                  {content.sections[activeTab].fullName || content.sections[activeTab].name}
                </h2>
                <p className="section-description">{content.sections[activeTab].description}</p>
                <div className="all-topics-list">
                  {content.sections[activeTab].lessons.map((lesson, lessonIndex) => (
                    <Link
                      key={lessonIndex}
                      to={lesson.link}
                      className="all-topic-item"
                    >
                      <span className="all-topic-number">{lessonIndex + 1}</span>
                      <span className="all-topic-title">{lesson.title}</span>
                      <span className="all-topic-arrow">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          ) : (
            // Si no tiene secciones, mostrar topics normalmente
            <section className="topics-section">
              <h2>📖 Temas Principales</h2>
              <div className="topics-cluster">
                {content.topics.map((topic, index) => (
                  <Link
                    key={index}
                    to={typeof topic === 'string' ? '#' : topic.link}
                    className="topic-card"
                  >
                    {typeof topic === 'object' && topic.icon && (
                      <span className="topic-icon">{topic.icon}</span>
                    )}
                    <span className="topic-number">{index + 1}</span>
                    <span className="topic-title">
                      {typeof topic === 'string' ? topic : topic.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {content.faq && (
            <section className="faq-section">
              <h2>❓ Preguntas Frecuentes</h2>
              <div className="faq-container">
                {content.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={(e) => {
                        const currentButton = e.currentTarget;
                        const container = currentButton.closest('.faq-container');
                        const allQuestions = container.querySelectorAll('.faq-question');

                        allQuestions.forEach(q => {
                          if (q !== currentButton) {
                            q.classList.remove('active');
                            q.nextElementSibling.classList.remove('show');
                          }
                        });

                        currentButton.classList.toggle('active');
                        const answer = currentButton.nextElementSibling;
                        answer.classList.toggle('show');
                      }}
                    >
                      <span className="faq-title">{item.question}</span>
                      <span className="faq-toggle"></span>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                      {item.links && item.links.length > 0 && (
                        <div className="faq-links">
                          <p><strong>Temas relacionados:</strong></p>
                          <ul>
                            {item.links.map((link, idx) => (
                              <li key={idx}>
                                <Link to={link.url}>{link.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="navigation-section">
            <Link to="/" className="btn btn-back">
              ← Volver al Inicio
            </Link>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
