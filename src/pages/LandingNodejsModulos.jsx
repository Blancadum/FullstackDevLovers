import { LandingPageTemplate } from '../components';

export const LandingNodejsModulos = () => {
  const pageConfig = {
    title: 'Node.js Módulos',
    imageUrl: '/images/logos/nodejs.png',
    imageAlt: 'Node.js Módulos',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/modulos',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Node.js Módulos',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs-modulos" pageConfig={pageConfig} />;
};
