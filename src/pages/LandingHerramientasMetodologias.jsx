import { LandingPageTemplate } from '../components';

export const LandingHerramientasMetodologias = () => {
  const pageConfig = {
    title: 'Herramientas y Metodologías',
    imageUrl: '/src/assets/images/logos/herramientas-metodologias.png',
    imageAlt: 'Herramientas y Metodologías',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/metodologias/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Herramientas y Metodologías',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="herramientas-metodologias" pageConfig={pageConfig} />;
};
