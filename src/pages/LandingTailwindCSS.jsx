import { LandingPageTemplate } from '../components';

export const LandingTailwindCSS = () => {
  const pageConfig = {
    title: 'Tailwind CSS',
    imageUrl: '/images/logos/tailwindcss.jpg',
    imageAlt: 'Tailwind CSS',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/tailwindcss/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Tailwind CSS',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="tailwind" pageConfig={pageConfig} />;
};
