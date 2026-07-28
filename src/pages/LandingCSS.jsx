import { LandingPageTemplate } from '../components';

export const LandingCSS = () => {
  const pageConfig = {
    title: 'CSS',
    imageUrl: '/images/logos/css.png',
    imageAlt: 'CSS',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/css/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina CSS',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="css" pageConfig={pageConfig} />;
};
