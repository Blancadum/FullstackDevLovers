import { LandingPageTemplate } from '../components';

export const LandingContenidos = () => {
  const pageConfig = {
    title: 'Contenidos Educativos: Aprende a Crear y Compartir',
    subtitle: 'Blogs, Documentación, Videos: domina la comunicación técnica',
    description: 'El conocimiento solo vale si puedes compartirlo. Aprende a crear contenidos educativos de calidad, escribir documentación técnica clara, grabar tutoriales efectivos y compartir tu conocimiento en blogs. Conviértete en educator y amplifica tu impacto en la comunidad tech.',
    imageUrl: '/images/logos/contenidos.png',
    imageAlt: 'Contenidos Educativos',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/contenidos/blog/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina la Creación de Contenidos',
    ctaSubtitle: 'Comparte tu conocimiento con el mundo'
  };

  return <LandingPageTemplate moduleId="contenidos" pageConfig={pageConfig} />;
};
