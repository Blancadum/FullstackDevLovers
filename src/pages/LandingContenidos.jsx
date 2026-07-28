import { LandingPageTemplate } from '../components';

export const LandingContenidos = () => {
  const pageConfig = {
    title: 'Contenidos Educativos: Aprende a Crear y Compartir',
    subtitle: 'Blogs, Documentación, Videos: domina la comunicación técnica',
    description: 'El conocimiento solo vale si puedes compartirlo. Aprende a crear contenidos educativos de calidad, escribir documentación técnica clara, grabar tutoriales efectivos y compartir tu conocimiento en blogs. Conviértete en educator y amplifica tu impacto en la comunidad tech.',
    imageUrl: '/images/logos/contenidos.png',
    imageAlt: 'Contenidos Educativos',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '#learning-topics',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina la Creación de Contenidos',
    ctaSubtitle: 'Comparte tu conocimiento con el mundo',
    faqData: [
      {
        question: '¿Por qué un desarrollador debería aprender a crear contenido?',
        answer: 'Escribir y explicar lo que aprendes consolida tu conocimiento, construye tu marca profesional y suele abrir oportunidades laborales que el código por sí solo no genera.'
      },
      {
        question: '¿Qué formato es mejor para empezar: blog o vídeo?',
        answer: 'El blog suele ser más accesible para empezar: no requiere edición de vídeo y es más fácil de iterar. El vídeo tiene mayor alcance pero exige más tiempo de producción.'
      },
      {
        question: '¿Necesito ser un experto en un tema antes de escribir sobre él?',
        answer: 'No. Documentar lo que estás aprendiendo (aunque seas principiante) suele ser tan valioso como el contenido de un experto, porque conecta mejor con otros principiantes.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="contenidos" pageConfig={pageConfig} />;
};
