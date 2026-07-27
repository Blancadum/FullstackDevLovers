import { LandingPageTemplate } from '../components';

export const LandingBackend = () => {
  const pageConfig = {
    title: 'Backend: Construye Servidores Robustos',
    subtitle: 'Java, Spring Boot, Node.js y bases de datos: desarrolla aplicaciones profesionales',
    description: 'Backend es la columna vertebral de cualquier aplicación. Aprende a construir servidores escalables, APIs REST, gestionar bases de datos y deployar en producción. Domina Java, Spring Boot, Node.js y las mejores prácticas de desarrollo backend profesional.',
    imageUrl: '/images/logos/backend.png',
    imageAlt: 'Backend',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/java/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Backend',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    faqData: [
      {
        question: '¿Qué lenguaje backend debería aprender primero?',
        answer: 'Java con Spring Boot es una excelente puerta de entrada: tipado fuerte, muy demandado en empresas y con un ecosistema maduro. Node.js es una buena alternativa si ya conoces JavaScript del frontend.'
      },
      {
        question: '¿Necesito saber bases de datos para hacer backend?',
        answer: 'Sí, prácticamente todo backend interactúa con una base de datos. La ruta de Datos (SQL, MongoDB) complementa directamente lo que aprendes aquí.'
      },
      {
        question: '¿Qué diferencia hay entre Java, Kotlin y Node.js para backend?',
        answer: 'Java y Kotlin corren sobre la JVM y son habituales en sistemas empresariales grandes; Kotlin añade sintaxis más moderna y concisa. Node.js usa JavaScript, comparte lenguaje con el frontend y destaca en APIs ligeras y tiempo real.'
      },
      {
        question: '¿Hace falta saber Spring Boot desde el principio?',
        answer: 'No. Primero conviene dominar Java puro (tipos, POO, colecciones) y luego dar el salto a Spring Boot, que automatiza gran parte de la configuración de una aplicación backend real.'
      }
    ]
  };

  const categoryCluster = [
    { id: 'java', title: 'Java', icon: '/images/logos/java-logo.png', link: '/backend/java' },
    { id: 'kotlin', title: 'Kotlin', icon: '/images/logos/kotlin.png', link: '/backend/kotlin' },
    { id: 'nodejs', title: 'Node.js', icon: '/images/logos/nodejs.png', link: '/backend/nodejs' },
    { id: 'spring-boot', title: 'Spring Boot', icon: '/images/logos/pringboot.png', link: '/backend/spring-boot' }
  ];

  return <LandingPageTemplate moduleId="backend" pageConfig={pageConfig} categoryCluster={categoryCluster} />;
};
