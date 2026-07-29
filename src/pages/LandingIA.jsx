import { LandingPageTemplate } from '../components';

export const LandingIA = () => {
  const pageConfig = {
    title: 'Inteligencia Artificial: 3 Rutas de Aprendizaje',
    subtitle: 'Desde IA Generativa hasta Agentes Autónomos y Enterprise',
    description: 'La Inteligencia Artificial revoluciona el desarrollo. Aprende en 3 rutas progresivas: 🟢 Básico (APIs, Prompting, Casos Prácticos), 🟡 Intermedio (Agentes, OpenClaw, Hermes), 🔴 Avanzado (Producción, soul.md, MCP). Integra IA desde cero hasta soluciones empresariales.',
    imageUrl: '/images/logos/ia.png',
    imageAlt: 'Inteligencia Artificial',
    primaryButtonText: 'Comenzar: Nivel Básico →',
    primaryButtonLink: '/ia/basico/fundamentos/que-es-ia-generativa',
    secondaryButtonText: 'Ver todas las rutas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Inteligencia Artificial en 3 Niveles',
    ctaSubtitle: 'De API calls a agentes autónomos en producción',
    faqData: [
      {
        question: '¿Cuál es la diferencia entre los 3 niveles?',
        answer: '🟢 Básico: Integración de APIs (Claude, OpenAI), Prompt Engineering, Chatbots. 🟡 Intermedio: Agentes autónomos (OpenClaw, Hermes), Reasoning Loops, Arquitectura. 🔴 Avanzado: soul.md, memory.md, MCP, Despliegue en Producción con monitoreo.'
      },
      {
        question: '¿Por dónde empiezo?',
        answer: 'Comienza en Nivel Básico (🟢) incluso si ya integras APIs. Entenderás qué es la IA generativa, los LLMs y cómo funcionan los prompts. Luego avanza a Intermedio cuando quieras construir agentes autónomos.'
      },
      {
        question: '¿Puedo saltar directamente a Intermedio o Avanzado?',
        answer: 'Sí si ya conoces APIs de IA y Prompt Engineering. Pero recomendamos la progresión: el Nivel Básico establece fundamentos, Intermedio introduce agentes, y Avanzado te prepara para producción enterprise.'
      },
      {
        question: '¿Qué herramientas cubro?',
        answer: 'Claude API, OpenAI API, OpenClaw (desarrollo real-time), Hermes (automatización 24/7), Model Context Protocol (MCP) para integraciones. Todo con ejemplos prácticos y casos reales.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="ia" pageConfig={pageConfig} />;
};
