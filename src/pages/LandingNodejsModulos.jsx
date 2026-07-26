import { LandingPageTemplate } from '../components';

export const LandingNodejsModulos = () => {
  const pageConfig = {
    title: 'Node.js Módulos',
    imageUrl: '/src/assets/images/logos/nodejs-modulos.png',
    imageAlt: 'Node.js Módulos',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/basico/modulos',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Node.js Módulos',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs-modulos" pageConfig={pageConfig} />;
};
