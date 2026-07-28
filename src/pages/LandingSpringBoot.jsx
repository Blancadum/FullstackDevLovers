import { LandingPageTemplate } from '../components';

export const LandingSpringBoot = () => {
  const pageConfig = {
    title: 'Spring Boot: Framework Backend Profesional',
    subtitle: 'El framework más usado en empresas Java empresariales',
    description: 'Spring Boot simplifica el desarrollo de aplicaciones Java empresa con configuración automática, embedded servers y enfoque opinionado. Es el estándar para APIs REST, microservicios y aplicaciones backend modernas.',
    seoTitle: 'Spring Boot - Framework Backend Profesional | Guía Completa',
    seoDescription: 'Aprende Spring Boot: APIs REST, JPA, transacciones, seguridad y arquitectura de microservicios. Domina el framework más demandado en Java.',
    keywords: 'spring boot, java, apis rest, microservicios, backend, jpa, transacciones',
    imageUrl: '/images/logos/backend.png',
    imageAlt: 'Spring Boot Logo',
    primaryButtonText: 'Comenzar con Spring Boot →',
    primaryButtonLink: '/backend/spring-boot/fundamentos/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Spring Boot',
    ctaSubtitle: 'Construye APIs profesionales y microservicios'
  };

  return <LandingPageTemplate moduleId="spring-boot" pageConfig={pageConfig} />;
};
