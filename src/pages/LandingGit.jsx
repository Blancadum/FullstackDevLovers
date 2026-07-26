import { LandingPageTemplate } from '../components';

export const LandingGit = () => {
  const pageConfig = {
    title: 'Git: Control de Versiones Profesional',
    subtitle: 'El sistema de control de versiones usado por 95% de desarrolladores',
    description: 'Git es el sistema de control de versiones distribuido más popular del mundo. Permite colaboración en equipo, rastreo de cambios y versionado profesional. Esencial para cualquier desarrollador moderno.',
    seoTitle: 'Git - Control de Versiones Profesional | Guía Completa',
    seoDescription: 'Domina Git: versionado distribuido, ramas, merge, pull requests y workflows profesionales. Sistema de control de versiones más usado en el mundo.',
    keywords: 'git, control de versiones, github, gitlab, bitbucket, versionado, colaboración',
    imageUrl: '/src/assets/images/logos/git-logo.png',
    imageAlt: 'Git Logo',
    primaryButtonText: 'Comenzar con Git →',
    primaryButtonLink: '/control-versiones/git/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    faqData: [
      {
        question: '¿Qué es Git y por qué es importante?',
        answer: 'Git es el sistema de control de versiones más popular del mundo, creado por Linus Torvalds. Permite a los equipos colaborar en código, rastrear cambios, y volver a versiones anteriores. Es estándar en la industria: 90%+ de proyectos open source usan Git.'
      },
      {
        question: '¿Git vs SVN vs Mercurial: Cuál debo aprender?',
        answer: 'Git domina con 95%+ de mercado. SVN es legado (sistemas antiguos). Mercurial es similar pero menos usado. Aprender Git te abre todas las puertas profesionales y acceso a GitHub, GitLab, Bitbucket. Es la elección inevitable.'
      },
      {
        question: '¿Necesito saber programación para aprender Git?',
        answer: 'No. Git es independiente del lenguaje de programación. Lo puedes aprender sin saber programar. De hecho, Git se usa en equipos de documentación, design, etc. Aunque es más valioso cuando trabajas en proyectos de código.'
      },
      {
        question: '¿Cuánto tiempo se tarda en dominar Git?',
        answer: 'Lo básico (init, add, commit, push, pull) se domina en 2-3 horas. Ramas y merges: 1 semana. Workflows profesionales (GitFlow, trunk-based): 2-3 semanas. El verdadero dominio viene con la práctica en proyectos reales.'
      },
      {
        question: '¿Git es solo para repositorios remotos?',
        answer: 'No. Git funciona perfectamente local sin servidor remoto. Es un VCS distribuido: tienes el repositorio completo en tu máquina. GitHub, GitLab, etc. son solo servidores remotos opcionales. Puedes usar Git 100% offline.'
      }
    ],
    ctaTitle: 'Domina Git Hoy',
    ctaSubtitle: 'Aprende desde lo básico hasta workflows profesionales'
  };

  return <LandingPageTemplate moduleId="git" pageConfig={pageConfig} />;
};
