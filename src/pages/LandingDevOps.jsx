import { LandingPageTemplate } from '../components';

export const LandingDevOps = () => {
  const pageConfig = {
    title: 'DevOps',
    imageUrl: '/images/logos/devops.png',
    imageAlt: 'DevOps',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/entornos/devops/docker',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina DevOps',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="devops" pageConfig={pageConfig} />;
};
