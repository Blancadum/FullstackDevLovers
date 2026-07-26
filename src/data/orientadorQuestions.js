/**
 * Preguntas para el Orientador Interactivo
 * Quiz práctico basado en casos de uso reales
 * 3 preguntas que determinan la mejor pila tecnológica
 */

export const orientadorQuestions = [
  {
    id: 1,
    question: "¿Qué tipo de web quieres crear?",
    options: [
      { text: "Blog / Portafolio / Web (personal o de marca)", stack: "estatico" },
      { text: "Tienda online (con datos y pagos)", stack: "ecommerce" },
      { text: "App web interactiva (dinámica en tiempo real)", stack: "interactiva" },
      { text: "Red social / Plataforma (múltiples usuarios)", stack: "plataforma" }
    ]
  },
  {
    id: 2,
    question: "¿Necesitas mucha interactividad?",
    options: [
      { text: "No, contenido principalmente estático", stack: "estatico" },
      { text: "Algo de interactividad (formularios, búsqueda)", stack: "ecommerce" },
      { text: "Muy interactiva (actualizaciones, tiempo real)", stack: "interactiva" },
      { text: "Máxima interactividad (chat, notificaciones, datos en vivo)", stack: "plataforma" }
    ]
  },
  {
    id: 3,
    question: "¿Necesitas base de datos?",
    options: [
      { text: "No, sin datos dinámicos", stack: "estatico" },
      { text: "Sí, datos simples (usuarios, productos)", stack: "ecommerce" },
      { text: "Sí, datos con algunas relaciones", stack: "interactiva" },
      { text: "Sí, datos complejos (transacciones, relaciones, reportes)", stack: "plataforma" }
    ]
  }
];

/**
 * Stacks recomendados basados en el caso de uso
 */
export const stackRecommendations = {
  estatico: {
    id: "estatico",
    name: "Blog / Portafolio Estático",
    description: "Perfecto para contenido principalmente estático con diseño moderno y responsivo",
    emoji: "📝",
    color: "#10B981",
    frontend: {
      tech: ["HTML", "CSS", "React"],
      description: "Frontend ligero y rápido",
      links: [
        { text: "Aprender React", href: "/landing-react" },
        { text: "HTML/CSS", href: "/landing-html" }
      ]
    },
    backend: null,
    database: null,
    useCase: "Blogs personales, portafolios, documentación"
  },
  ecommerce: {
    id: "ecommerce",
    name: "Tienda Online",
    description: "Aplicación con datos moderados, autenticación y procesamiento de pagos",
    emoji: "🛍️",
    color: "#F59E0B",
    frontend: {
      tech: ["React", "Bootstrap / Tailwind"],
      description: "Interfaz interactiva para mostrar productos",
      links: [
        { text: "Aprender React", href: "/landing-react" },
        { text: "Bootstrap", href: "/landing-bootstrap" }
      ]
    },
    backend: {
      tech: ["Node.js", "Spring Boot"],
      description: "Lógica de negocio, APIs de productos y pagos",
      links: [
        { text: "Node.js", href: "/landing-nodejs" },
        { text: "Spring Boot", href: "/landing-springboot" }
      ]
    },
    database: {
      tech: ["SQL (MySQL/PostgreSQL)", "MongoDB"],
      description: "Datos de usuarios, productos, órdenes",
      links: [
        { text: "SQL", href: "/landing-sql" },
        { text: "MongoDB", href: "/landing-mongodb" }
      ]
    },
    useCase: "Tiendas online, marketplaces pequeños"
  },
  interactiva: {
    id: "interactiva",
    name: "App Web Interactiva",
    description: "Aplicación dinámica con actualizaciones en tiempo real",
    emoji: "⚡",
    color: "#8B5CF6",
    frontend: {
      tech: ["React", "WebSockets"],
      description: "Frontend altamente interactivo con actualizaciones en vivo",
      links: [
        { text: "Aprender React", href: "/landing-react" }
      ]
    },
    backend: {
      tech: ["Node.js", "Spring Boot"],
      description: "Servidor con soporte para conexiones en tiempo real",
      links: [
        { text: "Node.js", href: "/landing-nodejs" },
        { text: "Spring Boot", href: "/landing-springboot" }
      ]
    },
    database: {
      tech: ["MongoDB", "PostgreSQL"],
      description: "Datos con algunas relaciones complejas",
      links: [
        { text: "MongoDB", href: "/landing-mongodb" },
        { text: "PostgreSQL", href: "/landing-sql" }
      ]
    },
    useCase: "Dashboards, editores colaborativos, aplicaciones SaaS"
  },
  plataforma: {
    id: "plataforma",
    name: "Red Social / Plataforma",
    description: "Sistema complejo con múltiples usuarios, transacciones y datos relacionados",
    emoji: "🚀",
    color: "#EF4444",
    frontend: {
      tech: ["React", "Angular"],
      description: "Frontend escalable para soportar múltiples usuarios y características",
      links: [
        { text: "Aprender React", href: "/landing-react" },
        { text: "Angular", href: "/landing-angular" }
      ]
    },
    backend: {
      tech: ["Spring Boot", "Node.js (Arquitectura Microservicios)"],
      description: "Backend robusto con arquitectura escalable",
      links: [
        { text: "Spring Boot", href: "/landing-springboot" },
        { text: "Docker/Kubernetes", href: "/landing-kubernetes" }
      ]
    },
    database: {
      tech: ["PostgreSQL", "Redis"],
      description: "Base de datos relacional con caché para rendimiento",
      links: [
        { text: "PostgreSQL", href: "/landing-sql" },
        { text: "AWS/Cloud", href: "/landing-aws" }
      ]
    },
    useCase: "Redes sociales, plataformas de streaming, marketplaces complejos"
  }
};
