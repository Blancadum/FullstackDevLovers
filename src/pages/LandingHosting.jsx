import { LandingPageTemplate } from '../components';

export const LandingHosting = () => {
  const pageConfig = {
    title: 'Hosting y Despliegue: Lleva tu Código a Producción',
    subtitle: 'Vercel, Netlify, Heroku: despliegue fácil y profesional',
    description: 'Desplegar es más que subir código a un servidor. Aprende a configurar hosting para aplicaciones web, bases de datos, APIs y contenedores. Desde plataformas simples como Vercel y Netlify hasta infraestructura compleja con AWS, domina todas las opciones de despliegue.',
    imageUrl: '/images/logos/cloud-computing.jpg',
    imageAlt: 'Hosting y Despliegue',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/entornos/devops/cloud-deployment',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Hosting y Despliegue',
    ctaSubtitle: 'Lleva tus aplicaciones a producción con confianza',
    faqData: [
      {
        question: '¿Vercel/Netlify o AWS para mi primer proyecto?',
        answer: 'Para un proyecto personal o frontend, Vercel o Netlify son mucho más simples: conectas tu repositorio y despliegan automáticamente. AWS tiene sentido cuando necesitas control total sobre infraestructura backend, bases de datos o escalado avanzado.'
      },
      {
        question: '¿Cuánto cuesta desplegar una aplicación real?',
        answer: 'Muchas plataformas (Vercel, Netlify, Heroku, el Free Tier de AWS) ofrecen niveles gratuitos suficientes para proyectos pequeños o de aprendizaje. Los costes aparecen al escalar tráfico, almacenamiento o cómputo.'
      },
      {
        question: '¿Necesito saber Docker para desplegar?',
        answer: 'No siempre. Plataformas como Vercel o Netlify no lo requieren. Pero si despliegas en AWS o cualquier infraestructura propia, containerizar con Docker simplifica mucho el proceso y lo hace reproducible.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="hosting" pageConfig={pageConfig} />;
};
