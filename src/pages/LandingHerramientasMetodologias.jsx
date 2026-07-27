import { LandingPageTemplate } from '../components';

export const LandingHerramientasMetodologias = () => {
  const pageConfig = {
    title: 'Herramientas y Metodologías: Excelencia en Desarrollo',
    subtitle: 'Clean Code, Testing, DevOps y Agile: convierte-te en un profesional completo',
    description: 'Combina las mejores herramientas y metodologías para escribir código excepcional. Domina Clean Code para mantener código limpio, Testing para garantizar calidad, Agile para gestionar proyectos y DevOps para despliegue profesional.',
    imageUrl: '/images/logos/procesos.png',
    imageAlt: 'Herramientas y Metodologías',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/metodologias/clean-code/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Excelencia en Desarrollo',
    ctaSubtitle: 'Aprende herramientas y metodologías que hacen la diferencia'
  };

  return <LandingPageTemplate moduleId="herramientas-metodologias" pageConfig={pageConfig} />;
};
