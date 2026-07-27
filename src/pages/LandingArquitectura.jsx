import { LandingPageTemplate } from '../components';

export const LandingArquitectura = () => {
  const pageConfig = {
    title: 'Arquitectura de Software',
    imageUrl: null,
    imageAlt: null,
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/arquitectura/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Arquitectura de Software',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    faqData: [
      {
        question: '¿Cuándo debería empezar a preocuparme por la arquitectura de un proyecto?',
        answer: 'Desde el diseño inicial, aunque sea a pequeña escala. Decisiones tempranas (cómo se organizan las capas, cómo se comunican los componentes) son mucho más caras de cambiar una vez el proyecto crece.'
      },
      {
        question: '¿Necesito saber patrones de diseño para hacer buena arquitectura?',
        answer: 'Ayudan mucho: los patrones de diseño son soluciones probadas a problemas recurrentes. No hace falta memorizarlos todos, pero reconocer cuándo aplican evita reinventar soluciones peores.'
      },
      {
        question: '¿Qué diferencia hay entre arquitectura y patrones de diseño?',
        answer: 'La arquitectura define la estructura global del sistema (cómo se organizan sus piezas principales); los patrones de diseño resuelven problemas concretos dentro de esa estructura, a nivel de clases y componentes.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="arquitectura" pageConfig={pageConfig} />;
};
