import { LandingPageTemplate } from '../components';

export const LandingMetodologias = () => {
  const pageConfig = {
    title: 'Metodologías: Procesos Profesionales de Desarrollo',
    subtitle: 'Agile, Scrum y mejores prácticas de desarrollo de software',
    description: 'Aprende las metodologías que usan empresas modernas para gestionar proyectos de software. Desde Agile hasta DevOps, domina los procesos que aceleran la entrega de valor.',
    seoTitle: 'Metodologías Ágiles y Procesos de Desarrollo | Guía Completa',
    seoDescription: 'Domina Agile, Scrum, Kanban y metodologías modernas de desarrollo. Mejores prácticas en gestión de proyectos de software.',
    keywords: 'metodologias, agile, scrum, kanban, procesos, desarrollo, software',
    imageUrl: '/images/logos/procesos.png',
    imageAlt: 'Metodologías Logo',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/metodologias/agile-scrum/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Metodologías Ágiles',
    ctaSubtitle: 'Mejora tus procesos de desarrollo',
    faqData: [
      {
        question: '¿Qué diferencia hay entre Agile y Scrum?',
        answer: 'Agile es una filosofía/conjunto de valores para gestionar proyectos de forma iterativa; Scrum es un marco de trabajo concreto que implementa esos valores con roles, ceremonias y artefactos específicos (sprints, daily, retrospectivas).'
      },
      {
        question: '¿Necesito certificarme para trabajar con metodologías ágiles?',
        answer: 'No es un requisito para empezar a trabajar en un equipo ágil. Entender los conceptos y participar en las ceremonias es suficiente; la certificación aporta más valor en roles de Scrum Master o Product Owner.'
      },
      {
        question: '¿Kanban y Scrum son excluyentes?',
        answer: 'No, muchos equipos combinan ambos (a veces llamado Scrumban). Scrum aporta la estructura de sprints con objetivos fijos; Kanban aporta un flujo continuo visual sin iteraciones cerradas.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="metodologias" pageConfig={pageConfig} />;
};
