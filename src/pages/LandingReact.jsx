import { LandingPageTemplate } from '../components';

export const LandingReact = () => {
  const pageConfig = {
    title: 'React',
    imageUrl: '/src/assets/images/logos/react.png',
    imageAlt: 'React',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/react/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina React',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="react" pageConfig={pageConfig} />;
};
