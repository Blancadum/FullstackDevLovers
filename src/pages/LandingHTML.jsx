import { LandingPageTemplate } from '../components';

export const LandingHTML = () => {
  const pageConfig = {
    title: 'HTML',
    imageUrl: '/images/logos/html-logo.png',
    imageAlt: 'HTML',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '#learning-topics',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina HTML',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="html" pageConfig={pageConfig} />;
};
