import { LandingPageTemplate } from '../components';

export const LandingBootstrap = () => {
  const pageConfig = {
    title: 'Bootstrap',
    imageUrl: '/images/logos/bootstrap.jpeg',
    imageAlt: 'Bootstrap',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '#learning-topics',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Bootstrap',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="bootstrap" pageConfig={pageConfig} />;
};
