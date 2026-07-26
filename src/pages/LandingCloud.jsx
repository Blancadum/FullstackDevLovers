import { LandingPageTemplate } from '../components';

export const LandingCloud = () => {
  const pageConfig = {
    title: 'Cloud Computing',
    imageUrl: '/src/assets/images/logos/cloud.png',
    imageAlt: 'Cloud Computing',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/cloud/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Cloud Computing',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="cloud" pageConfig={pageConfig} />;
};
