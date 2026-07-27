import { LandingPageTemplate } from '../components';

export const LandingKotlin = () => {
  const pageConfig = {
    title: 'Kotlin',
    imageUrl: '/images/logos/kotlin.png',
    imageAlt: 'Kotlin',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/backend/kotlin/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Kotlin',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="kotlin" pageConfig={pageConfig} />;
};
