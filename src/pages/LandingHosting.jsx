import { LandingPageTemplate } from '../components';

export const LandingHosting = () => {
  const pageConfig = {
    title: 'Hosting y Despliegue: Lleva tu Código a Producción',
    subtitle: 'Vercel, Netlify, Heroku: despliegue fácil y profesional',
    description: 'Desplegar es más que subir código a un servidor. Aprende a configurar hosting para aplicaciones web, bases de datos, APIs y contenedores. Desde plataformas simples como Vercel y Netlify hasta infraestructura compleja con AWS, domina todas las opciones de despliegue.',
    imageUrl: '/images/logos/cloud-computing.jpg',
    imageAlt: 'Hosting y Despliegue',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/hosting/vercel/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Hosting y Despliegue',
    ctaSubtitle: 'Lleva tus aplicaciones a producción con confianza'
  };

  return <LandingPageTemplate moduleId="hosting" pageConfig={pageConfig} />;
};
