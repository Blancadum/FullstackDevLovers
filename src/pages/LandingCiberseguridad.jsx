import { LandingPageTemplate } from '../components';

export const LandingCiberseguridad = () => {
  const pageConfig = {
    title: 'Ciberseguridad: Protege tus Aplicaciones Web',
    subtitle: 'OWASP Top 10, autenticación segura y buenas prácticas para desarrolladores',
    description: 'La ciberseguridad ya no es opcional en el desarrollo web. Aprende los principios fundamentales de seguridad, identifica y previene las vulnerabilidades más comunes del OWASP Top 10, implementa autenticación y comunicación segura con JWT y HTTPS, y adopta las buenas prácticas que protegen tus aplicaciones en producción.',
    imageUrl: '/images/logos/ciberseguridad.png',
    imageAlt: 'Ciberseguridad',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/ciberseguridad/fundamentos/que-es-ciberseguridad',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina la Ciberseguridad',
    ctaSubtitle: 'Construye aplicaciones seguras desde el primer día',
    faqData: [
      {
        question: '¿Necesito ser un experto en seguridad para aplicar estos conocimientos?',
        answer: 'No. Este módulo está pensado para desarrolladores backend y fullstack que quieren incorporar buenas prácticas de seguridad en su día a día: prevenir inyección SQL, XSS o CSRF, gestionar contraseñas correctamente y proteger APIs. No hace falta ser un especialista en ciberseguridad ni pentester.'
      },
      {
        question: '¿Qué es el OWASP Top 10 y por qué es tan importante?',
        answer: 'Es una lista de referencia mantenida por la comunidad OWASP con los diez riesgos de seguridad más críticos en aplicaciones web, actualizada periódicamente. Conocerla te permite anticipar y prevenir las vulnerabilidades más explotadas en producción, como la inyección de código o el control de acceso roto.'
      },
      {
        question: '¿Estos conceptos aplican a cualquier lenguaje o framework?',
        answer: 'Sí. Los principios de seguridad (autenticación, validación de inputs, gestión de secretos, HTTPS, hashing de contraseñas...) son transversales a cualquier stack tecnológico. Los ejemplos se explican de forma práctica para que puedas aplicarlos independientemente del lenguaje o framework que uses.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="ciberseguridad" pageConfig={pageConfig} />;
};
