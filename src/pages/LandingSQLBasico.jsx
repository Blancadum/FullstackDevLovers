import { LandingPageTemplate } from '../components';

export const LandingSQLBasico = () => {
  const pageConfig = {
    title: 'SQL Básico',
    imageUrl: '/src/assets/images/logos/sql-basico.png',
    imageAlt: 'SQL Básico',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/datos/sql/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina SQL Básico',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="sql-basico" pageConfig={pageConfig} />;
};
