import { LandingPageTemplate } from '../components';

export const LandingHTML = () => {
  const pageConfig = {
    title: 'HTML',
    imageUrl: '/src/assets/images/logos/html.png',
    imageAlt: 'HTML',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/html/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina HTML',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="html" pageConfig={pageConfig} />;
};
