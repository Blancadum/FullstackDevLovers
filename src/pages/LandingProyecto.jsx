import { LandingPageTemplate } from '../components';

export const LandingProyecto = () => {
  const pageConfig = {
    title: 'Proyecto Final',
    imageUrl: '/src/assets/images/logos/proyecto.png',
    imageAlt: 'Proyecto Final',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/proyecto/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Proyecto Final',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="proyecto" pageConfig={pageConfig} />;
};
