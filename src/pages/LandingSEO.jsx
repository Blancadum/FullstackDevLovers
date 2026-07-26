import { LandingPageTemplate } from '../components';

export const LandingSEO = () => {
  const pageConfig = {
    title: 'SEO & Analytics: Optimiza tu Presencia Online',
    subtitle: 'Google Analytics, Search Console, Posicionamiento: domina el tráfico orgánico',
    description: 'SEO y Analytics son fundamentales para que tu aplicación llegue a usuarios. Aprende a optimizar para buscadores, entender el comportamiento de usuarios con Google Analytics, mejorar Core Web Vitals, y construir estrategias de crecimiento basadas en datos. Convierte visitas en conversiones.',
    imageUrl: '/src/assets/images/logos/seo.png',
    imageAlt: 'SEO & Analytics',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/seo/fundamentos/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina SEO y Analytics',
    ctaSubtitle: 'Aumenta tu tráfico orgánico y convierte visitantes'
  };

  return <LandingPageTemplate moduleId="seo" pageConfig={pageConfig} />;
};
