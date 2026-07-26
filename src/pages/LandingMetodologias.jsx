import { LandingPageTemplate } from '../components';

export const LandingMetodologias = () => {
  const pageConfig = {
    title: 'Metodologías: Procesos Profesionales de Desarrollo',
    subtitle: 'Agile, Scrum y mejores prácticas de desarrollo de software',
    description: 'Aprende las metodologías que usan empresas modernas para gestionar proyectos de software. Desde Agile hasta DevOps, domina los procesos que aceleran la entrega de valor.',
    seoTitle: 'Metodologías Ágiles y Procesos de Desarrollo | Guía Completa',
    seoDescription: 'Domina Agile, Scrum, Kanban y metodologías modernas de desarrollo. Mejores prácticas en gestión de proyectos de software.',
    keywords: 'metodologias, agile, scrum, kanban, procesos, desarrollo, software',
    imageUrl: '/src/assets/images/logos/procesos.png',
    imageAlt: 'Metodologías Logo',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/metodologias/agile/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Metodologías Ágiles',
    ctaSubtitle: 'Mejora tus procesos de desarrollo'
  };

  return <LandingPageTemplate moduleId="metodologias" pageConfig={pageConfig} />;
};
