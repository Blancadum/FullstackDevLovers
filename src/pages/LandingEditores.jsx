import { LandingPageTemplate } from '../components';

export const LandingEditores = () => {
  const pageConfig = {
    title: 'Editores de Código: Herramientas Profesionales',
    subtitle: 'VS Code, IntelliJ IDEA, Eclipse: domina tu entorno de desarrollo',
    description: 'Los editores de código son la base de tu trabajo como desarrollador. Aprende a configurar y dominar VS Code para web, IntelliJ IDEA para backend con Java, y Eclipse para desarrollo empresarial. Optimiza tu productividad con extensiones, atajos y mejores prácticas.',
    imageUrl: '/src/assets/images/logos/editor-texto.png',
    imageAlt: 'Editores de Código',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/editores/vscode/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Editores Profesionales',
    ctaSubtitle: 'Aumenta tu productividad con las mejores herramientas'
  };

  return <LandingPageTemplate moduleId="editores" pageConfig={pageConfig} />;
};
