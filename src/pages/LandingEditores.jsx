import { LandingPageTemplate } from '../components';

export const LandingEditores = () => {
  const pageConfig = {
    title: 'Editores de Código: Herramientas Profesionales',
    subtitle: 'VS Code, IntelliJ IDEA, Eclipse: domina tu entorno de desarrollo',
    description: 'Los editores de código son la base de tu trabajo como desarrollador. Aprende a configurar y dominar VS Code para web, IntelliJ IDEA para backend con Java, y Eclipse para desarrollo empresarial. Optimiza tu productividad con extensiones, atajos y mejores prácticas.',
    imageUrl: '/images/logos/editor-texto.png',
    imageAlt: 'Editores de Código',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/herramientas/entornos/herramientas/ides',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Editores Profesionales',
    ctaSubtitle: 'Aumenta tu productividad con las mejores herramientas',
    faqData: [
      {
        question: '¿VS Code, IntelliJ IDEA o Eclipse? ¿Cuál elijo?',
        answer: 'VS Code es ligero y muy versátil, ideal para frontend y proyectos multi-lenguaje. IntelliJ IDEA está pensado específicamente para Java y ofrece el mejor soporte para Spring Boot. Eclipse sigue siendo habitual en entornos empresariales grandes.'
      },
      {
        question: '¿Merece la pena aprender atajos de teclado?',
        answer: 'Sí, es una de las inversiones con mejor retorno: dominar los atajos básicos de navegación y refactorización ahorra horas a la semana una vez se convierten en hábito.'
      },
      {
        question: '¿Qué extensiones son imprescindibles al empezar?',
        answer: 'Depende del stack, pero como mínimo: una extensión de linting/formateo automático, integración con Git y, si programas en Java, el soporte oficial de Spring Boot en tu editor.'
      }
    ]
  };

  return <LandingPageTemplate moduleId="editores" pageConfig={pageConfig} />;
};
