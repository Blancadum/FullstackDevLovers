import { LandingPageTemplate } from '../components';

export const LandingBackend = () => {
  const pageConfig = {
    title: 'Backend',
    imageUrl: '/src/assets/images/logos/backend.png',
    imageAlt: 'Backend',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Backend',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="backend" pageConfig={pageConfig} />;
};
