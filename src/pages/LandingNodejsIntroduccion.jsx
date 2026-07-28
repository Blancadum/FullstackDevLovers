import { LandingPageTemplate } from '../components';

export const LandingNodejsIntroduccion = () => {
  const pageConfig = {
    title: 'Node.js Introducción',
    imageUrl: '/images/logos/nodejs.png',
    imageAlt: 'Node.js Introducción',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Node.js Introducción',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs-introduccion" pageConfig={pageConfig} />;
};
