import { LandingPageTemplate } from '../components';

export const LandingProyecto = () => {
  const pageConfig = {
    title: 'Proyecto Final',
    imageUrl: null,
    imageAlt: null,
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/proyecto/planificacion/definicion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Proyecto Final',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="proyecto" pageConfig={pageConfig} />;
};
