import { LandingPageTemplate } from '../components';

export const LandingAngular = () => {
  const pageConfig = {
    title: 'Angular',
    imageUrl: '/src/assets/images/logos/angular.png',
    imageAlt: 'Angular',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/angular/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Angular',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="angular" pageConfig={pageConfig} />;
};
