import { LandingPageTemplate } from '../components';

export const LandingNodejsEventLoop = () => {
  const pageConfig = {
    title: 'Node.js Event Loop',
    imageUrl: '/images/logos/nodejs.png',
    imageAlt: 'Node.js Event Loop',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/nodejs/event-loop',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Node.js Event Loop',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="nodejs-event-loop" pageConfig={pageConfig} />;
};
