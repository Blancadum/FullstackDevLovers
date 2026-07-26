import { LandingPageTemplate } from '../components';

export const LandingFrontend = () => {
  const pageConfig = {
    title: 'Frontend',
    imageUrl: '/src/assets/images/logos/frontend.png',
    imageAlt: 'Frontend',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Frontend',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="frontend" pageConfig={pageConfig} />;
};
