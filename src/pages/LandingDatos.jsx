import { LandingPageTemplate } from '../components';

export const LandingDatos = () => {
  const pageConfig = {
    title: 'Datos',
    imageUrl: '/src/assets/images/logos/datos.png',
    imageAlt: 'Datos',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/datos/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Datos',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="datos" pageConfig={pageConfig} />;
};
