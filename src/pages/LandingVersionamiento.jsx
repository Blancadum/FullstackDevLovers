import { LandingPageTemplate } from '../components';

export const LandingVersionamiento = () => {
  const pageConfig = {
    title: 'Control de Versiones: Colabora sin Conflictos',
    subtitle: 'Git, GitHub y workflows profesionales: versionado distribuido',
    description: 'Control de versiones es la base del desarrollo en equipo. Aprende Git y GitHub para rastrear cambios, colaborar sin conflictos y mantener un historial limpio. Domina ramas, merge, pull requests y workflows profesionales como GitFlow.',
    imageUrl: '/images/logos/git-github.png',
    imageAlt: 'Control de Versiones',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/control-versiones/git/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Control de Versiones',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    faqData: [
      {
        question: '¿Git y GitHub son lo mismo?',
        answer: 'No. Git es el sistema de control de versiones que corre en tu ordenador; GitHub es una plataforma online que aloja repositorios Git y añade colaboración, pull requests y CI/CD sobre esa base.'
      },
      {
        question: '¿Necesito aprender la línea de comandos de Git o basta con un cliente visual?',
        answer: 'Conviene dominar la línea de comandos primero: te da control total y entiendes qué hace realmente cada acción. Después, un cliente visual (o el integrado en tu editor) puede acelerar tu día a día.'
      },
      {
        question: '¿Qué pasa si tengo un conflicto de merge, es grave?',
        answer: 'No, es normal y ocurre constantemente en equipos. Se resuelve editando el archivo en conflicto para decidir qué cambios conservar y luego confirmando el merge. Lo cubrimos con ejercicios prácticos.'
      }
    ]
  };

  const categoryCluster = [
    { id: 'git', title: 'Git', icon: '/images/logos/git-logo.png', link: '/control-versiones/git' },
    { id: 'github', title: 'GitHub', icon: '/images/logos/github.jpeg', link: '/control-versiones/github' }
  ];

  return <LandingPageTemplate moduleId="versionamiento" pageConfig={pageConfig} categoryCluster={categoryCluster} />;
};
