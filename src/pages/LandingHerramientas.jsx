import { LandingPageTemplate } from '../components';

export const LandingHerramientas = () => {
  const pageConfig = {
    title: 'Herramientas',
    imageUrl: '/src/assets/images/logos/herramientas.png',
    imageAlt: 'Herramientas',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Herramientas',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="herramientas" pageConfig={pageConfig} />;
};
