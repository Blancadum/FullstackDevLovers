import { LandingPageTemplate } from '../components';

export const LandingVersionamiento = () => {
  const pageConfig = {
    title: 'Versionamiento',
    imageUrl: '/src/assets/images/logos/versionamiento.png',
    imageAlt: 'Versionamiento',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/control-versiones/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Versionamiento',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="versionamiento" pageConfig={pageConfig} />;
};
