import { LandingPageTemplate } from '../components';

export const LandingHerramientasMetodologias = () => {
  const pageConfig = {
    title: 'Herramientas y Metodologías: Excelencia en Desarrollo',
    subtitle: 'Clean Code, Testing, DevOps y Agile: convierte-te en un profesional completo',
    description: 'Combina las mejores herramientas y metodologías para escribir código excepcional. Domina Clean Code para mantener código limpio, Testing para garantizar calidad, Agile para gestionar proyectos y DevOps para despliegue profesional.',
    imageUrl: '/images/logos/procesos.png',
    imageAlt: 'Herramientas y Metodologías',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/metodologias/agile-scrum/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Excelencia en Desarrollo',
    ctaSubtitle: 'Aprende herramientas y metodologías que hacen la diferencia',
    faqData: [
      {
        question: '¿Qué es Clean Code y por qué importa?',
        answer: 'Es un conjunto de principios para escribir código legible, mantenible y fácil de modificar por otros (o por ti mismo meses después). No es opcional en equipos: código difícil de leer cuesta tiempo y genera bugs.'
      },
      {
        question: '¿Necesito certificarme en Scrum para trabajar con Agile?',
        answer: 'No es obligatorio. Entender los principios de Agile y cómo funciona un sprint es suficiente para trabajar en la mayoría de equipos. La certificación aporta más en roles de gestión de proyectos.'
      },
      {
        question: '¿Testing y DevOps son cosa de otro equipo o debo saberlo yo?',
        answer: 'Cada vez más se espera que cualquier desarrollador sepa escribir tests básicos y entienda el flujo de CI/CD. No hace falta ser especialista, pero sí manejar los fundamentos.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="herramientas-metodologias" pageConfig={pageConfig} />;
};
