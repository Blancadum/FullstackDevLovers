import { LandingPageTemplate } from '../components';

export const LandingBuildTools = () => {
  const pageConfig = {
    title: 'Build Tools',
    imageUrl: '/src/assets/images/logos/herramientas-build.png',
    imageAlt: 'Build Tools',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/herramientas-build/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Build Tools',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="herramientas-build" pageConfig={pageConfig} />;
};
