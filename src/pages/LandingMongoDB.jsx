import { LandingPageTemplate } from '../components';

export const LandingMongoDB = () => {
  const pageConfig = {
    title: 'MongoDB',
    imageUrl: '/images/logos/mongodb.png',
    imageAlt: 'MongoDB',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '#learning-topics',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina MongoDB',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="mongodb" pageConfig={pageConfig} />;
};
