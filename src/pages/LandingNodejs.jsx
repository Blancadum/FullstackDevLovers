import { LandingPageTemplate } from '../components';

export const LandingNodejs = () => {
  const pageConfig = {
    title: 'Node.js',
    imageUrl: '/images/logos/nodejs.png',
    imageAlt: 'Node.js',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Node.js',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs" pageConfig={pageConfig} />;
};
