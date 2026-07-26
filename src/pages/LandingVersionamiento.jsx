import { LandingPageTemplate } from '../components';

export const LandingVersionamiento = () => {
  const pageConfig = {
    title: 'Control de Versiones: Colabora sin Conflictos',
    subtitle: 'Git, GitHub y workflows profesionales: versionado distribuido',
    description: 'Control de versiones es la base del desarrollo en equipo. Aprende Git y GitHub para rastrear cambios, colaborar sin conflictos y mantener un historial limpio. Domina ramas, merge, pull requests y workflows profesionales como GitFlow.',
    imageUrl: '/src/assets/images/logos/git-github.png',
    imageAlt: 'Control de Versiones',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/control-versiones/git/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Control de Versiones',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="versionamiento" pageConfig={pageConfig} />;
};
