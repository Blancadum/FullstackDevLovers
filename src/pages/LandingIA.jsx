import { LandingPageTemplate } from '../components';

export const LandingIA = () => {
  const pageConfig = {
    title: 'Inteligencia Artificial: Integra IA en tus Aplicaciones',
    subtitle: 'Claude API, OpenAI, Modelos de Lenguaje: construye con IA',
    description: 'La Inteligencia Artificial revoluciona el desarrollo. Aprende a integrar modelos de lenguaje como Claude en tus aplicaciones, crear chatbots inteligentes, automatizar procesos con IA y construir soluciones impulsadas por aprendizaje automático. Desde APIs hasta fine-tuning, domina el futuro del desarrollo.',
    imageUrl: '/src/assets/images/logos/ia.png',
    imageAlt: 'Inteligencia Artificial',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/ia/claude-api/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Inteligencia Artificial',
    ctaSubtitle: 'Construye el futuro con AI integrada'
  };

  return <LandingPageTemplate moduleId="ia" pageConfig={pageConfig} />;
};
