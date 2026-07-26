import { LandingPageTemplate } from '../components';

export const LandingTailwindCSS = () => {
  const pageConfig = {
    title: 'Tailwind CSS',
    imageUrl: '/src/assets/images/logos/tailwind.png',
    imageAlt: 'Tailwind CSS',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/tailwind/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Tailwind CSS',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="tailwind" pageConfig={pageConfig} />;
};
