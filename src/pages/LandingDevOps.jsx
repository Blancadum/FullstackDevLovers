import { LandingPageTemplate } from '../components';

export const LandingDevOps = () => {
  const pageConfig = {
    title: 'DevOps',
    imageUrl: '/src/assets/images/logos/devops.png',
    imageAlt: 'DevOps',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/devops/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina DevOps',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="devops" pageConfig={pageConfig} />;
};
