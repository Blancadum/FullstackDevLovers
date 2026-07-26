import { LandingPageTemplate } from '../components';

export const LandingNodejsIntroduccion = () => {
  const pageConfig = {
    title: 'Node.js Introducción',
    imageUrl: '/src/assets/images/logos/nodejs-introduccion.png',
    imageAlt: 'Node.js Introducción',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Node.js Introducción',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs-introduccion" pageConfig={pageConfig} />;
};
