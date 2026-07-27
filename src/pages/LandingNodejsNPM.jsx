import { LandingPageTemplate } from '../components';

export const LandingNodejsNPM = () => {
  const pageConfig = {
    title: 'NPM',
    imageUrl: '/images/logos/npm-node.png',
    imageAlt: 'NPM',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/basico/npm',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina NPM',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs-npm" pageConfig={pageConfig} />;
};
