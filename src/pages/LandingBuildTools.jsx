import { LandingPageTemplate } from '../components';

export const LandingBuildTools = () => {
  const pageConfig = {
    title: 'Build Tools: Automatiza tu Workflow',
    subtitle: 'Webpack, Vite, Gulp: herramientas modernas de construcción',
    description: 'Build tools son esenciales para el desarrollo moderno. Aprende a configurar y optimizar webpack, Vite y otras herramientas de construcción. Automatiza tus procesos de desarrollo, testing y despliegue.',
    imageUrl: '/src/assets/images/logos/entornos-desarrollo.png',
    imageAlt: 'Build Tools',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/entornos/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Build Tools',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="herramientas-build" pageConfig={pageConfig} />;
};
