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
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  const categoryCluster = [
    { id: 'java', title: 'Java', icon: '/images/logos/java-logo.png', link: '/backend/java' },
    { id: 'kotlin', title: 'Kotlin', icon: '/images/logos/kotlin.png', link: '/backend/kotlin' },
    { id: 'nodejs', title: 'Node.js', icon: '/images/logos/nodejs.png', link: '/backend/nodejs' },
    { id: 'spring-boot', title: 'Spring Boot', icon: '/images/logos/pringboot.png', link: '/backend/spring-boot' }
  ];

  return <LandingPageTemplate moduleId="backend" pageConfig={pageConfig} categoryCluster={categoryCluster} />;
};
