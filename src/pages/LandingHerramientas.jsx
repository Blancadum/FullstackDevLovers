import { LandingPageTemplate } from '../components';

export const LandingHerramientas = () => {
  const pageConfig = {
    title: 'Herramientas & Metodologías: Trabaja como Profesional',
    subtitle: 'Agile, Clean Code, Testing, DevOps: mejora tu craft de desarrollo',
    description: 'Las herramientas y metodologías transforman buenos desarrolladores en excepcionales. Aprende Agile y SCRUM para gestión de proyectos, Clean Code para escribir código mantenible, Testing para garantizar calidad y DevOps para despliegue continuo.',
    imageUrl: '/images/logos/procesos.png',
    imageAlt: 'Herramientas & Metodologías',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/metodologias/agile-scrum/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Mejora tu Craft',
    ctaSubtitle: 'Conviértete en desarrollador profesional con mejores prácticas'
  };

  return <LandingPageTemplate moduleId="herramientas" pageConfig={pageConfig} />;
};
