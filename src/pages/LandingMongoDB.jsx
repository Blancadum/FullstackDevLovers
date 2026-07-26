import { LandingPageTemplate } from '../components';

export const LandingMongoDB = () => {
  const pageConfig = {
    title: 'MongoDB',
    imageUrl: '/src/assets/images/logos/mongodb.png',
    imageAlt: 'MongoDB',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/datos/mongodb/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina MongoDB',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="mongodb" pageConfig={pageConfig} />;
};
