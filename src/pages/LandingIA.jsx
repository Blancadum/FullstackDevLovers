import { LandingPageTemplate } from '../components';

export const LandingIA = () => {
  const pageConfig = {
    title: 'Inteligencia Artificial: Integra IA en tus Aplicaciones',
    subtitle: 'Claude API, OpenAI, Modelos de Lenguaje: construye con IA',
    description: 'La Inteligencia Artificial revoluciona el desarrollo. Aprende a integrar modelos de lenguaje como Claude en tus aplicaciones, crear chatbots inteligentes, automatizar procesos con IA y construir soluciones impulsadas por aprendizaje automático. Desde APIs hasta fine-tuning, domina el futuro del desarrollo.',
    imageUrl: '/images/logos/ia.png',
    imageAlt: 'Inteligencia Artificial',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '#learning-topics',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Inteligencia Artificial',
    ctaSubtitle: 'Construye el futuro con AI integrada',
    faqData: [
      {
        question: '¿Necesito saber machine learning para integrar IA en mis apps?',
        answer: 'No para empezar. Integrar modelos de lenguaje como Claude vía API es principalmente trabajo de backend: llamadas HTTP, gestión de prompts y manejo de respuestas. El machine learning "desde cero" es un campo aparte, más orientado a investigación.'
      },
      {
        question: '¿Qué necesito saber antes de empezar con IA aplicada?',
        answer: 'Con conocimientos básicos de backend (llamadas a APIs, JSON, autenticación) ya puedes empezar a integrar modelos de lenguaje en tus aplicaciones. No hace falta matemáticas avanzadas para este enfoque práctico.'
      },
      {
        question: '¿Qué es el fine-tuning y cuándo lo necesito?',
        answer: 'Es el proceso de especializar un modelo ya entrenado con tus propios datos para una tarea concreta. La mayoría de aplicaciones no lo necesitan al principio: primero se explora con prompting y APIs, y el fine-tuning se reserva para casos muy específicos.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="ia" pageConfig={pageConfig} />;
};
