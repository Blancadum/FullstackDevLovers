import { LandingPageTemplate } from '../components';

export const LandingArquitectura = () => {
  const pageConfig = {
    title: 'Arquitectura de Software',
    imageUrl: null,
    imageAlt: null,
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/arquitectura/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Arquitectura de Software',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="arquitectura" pageConfig={pageConfig} />;
};
