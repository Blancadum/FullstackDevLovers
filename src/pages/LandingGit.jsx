import { LandingPageTemplate, ModuleIntroSection } from '../components';

export const LandingGit = () => {
  const pageConfig = {
    title: 'Git: Control de Versiones Profesional',
    subtitle: 'El sistema de control de versiones usado por 95% de desarrolladores',
    description: 'Git es el sistema de control de versiones distribuido más popular del mundo. Permite colaboración en equipo, rastreo de cambios y versionado profesional. Esencial para cualquier desarrollador moderno.',
    seoTitle: 'Git - Control de Versiones Profesional | Guía Completa',
    seoDescription: 'Domina Git: versionado distribuido, ramas, merge, pull requests y workflows profesionales. Sistema de control de versiones más usado en el mundo.',
    keywords: 'git, control de versiones, github, gitlab, bitbucket, versionado, colaboración',
    imageUrl: '/images/logos/git-logo.png',
    imageAlt: 'Git Logo',
    primaryButtonText: 'Comenzar con Git →',
    primaryButtonLink: '/control-versiones/git/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    moduleIntro: {
      title: '¿Qué es Git?',
      description: 'Git es el sistema de control de versiones distribuido más popular del mundo. Creado por Linus Torvalds, permite a equipos colaborar sin fricción, rastrear cada cambio en el código y volver a versiones anteriores cuando sea necesario. Es el estándar profesional en la industria.',
      highlights: [
        'Control de versiones distribuido: repositorio completo en tu máquina',
        'Colaboración sin conflictos: ramas independientes para cada tarea',
        'Historial completo: revisa cualquier cambio realizado',
        'Estándar industrial: usado en 95%+ de proyectos profesionales',
        'Integración perfecta: GitHub, GitLab, Bitbucket'
      ],
      image: '/images/logos/git-logo.png'
    },
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

  return (
    <>
      <LandingPageTemplate moduleId="git" pageConfig={pageConfig} />
      {pageConfig.moduleIntro && (
        <ModuleIntroSection
          title={pageConfig.moduleIntro.title}
          description={pageConfig.moduleIntro.description}
          highlights={pageConfig.moduleIntro.highlights}
          image={pageConfig.moduleIntro.image}
        />
      )}
    </>
  );
};
