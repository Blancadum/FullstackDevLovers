import { LandingPageTemplate } from '../components';

export const LandingGitHub = () => {
  const pageConfig = {
    title: 'GitHub',
    subtitle: 'Plataforma colaborativa: repositorios, flujos de trabajo y colaboración en equipo',
    imageUrl: '/images/logos/github.jpeg',
    imageAlt: 'GitHub',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/control-versiones/github/basicos/intro',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina GitHub',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="github" pageConfig={pageConfig} />;
};
