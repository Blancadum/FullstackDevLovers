import { LandingPageTemplate } from '../components';

export const LandingSEO = () => {
  const pageConfig = {
    title: 'SEO & Analytics: Optimiza tu Presencia Online',
    subtitle: 'Google Analytics, Search Console, Posicionamiento: domina el tráfico orgánico',
    description: 'SEO y Analytics son fundamentales para que tu aplicación llegue a usuarios. Aprende a optimizar para buscadores, entender el comportamiento de usuarios con Google Analytics, mejorar Core Web Vitals, y construir estrategias de crecimiento basadas en datos. Convierte visitas en conversiones.',
    imageUrl: '/images/logos/seo.png',
    imageAlt: 'SEO & Analytics',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/seo/fundamentos/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina SEO y Analytics',
    ctaSubtitle: 'Aumenta tu tráfico orgánico y convierte visitantes',
    faqData: [
      {
        question: '¿Por qué un desarrollador necesita saber SEO?',
        answer: 'Porque muchas decisiones técnicas (renderizado, velocidad de carga, estructura de URLs, metadatos) afectan directamente al posicionamiento. Sin estos fundamentos, hasta la mejor aplicación puede ser invisible en buscadores.'
      },
      {
        question: '¿Qué son los Core Web Vitals?',
        answer: 'Son métricas de Google que miden la experiencia real de carga, interactividad y estabilidad visual de una página. Afectan tanto al SEO como a la experiencia de usuario, así que optimizarlas beneficia en ambos frentes.'
      },
      {
        question: '¿Necesito Google Analytics desde el primer proyecto?',
        answer: 'Para aprender, sí conviene practicar con Analytics y Search Console cuanto antes: entender de dónde viene el tráfico y cómo se comporta es una habilidad que se construye con la práctica, no solo con teoría.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="seo" pageConfig={pageConfig} />;
};
