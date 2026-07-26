import { LandingPageTemplate } from '../components';

export const LandingSQL = () => {
  const pageConfig = {
    title: 'SQL: Lenguaje de Bases de Datos Profesional',
    subtitle: 'El estándar de facto para gestión de datos estructurados',
    description: 'SQL es el lenguaje universal para consultar y manipular bases de datos relacionales. Desde startups hasta Fortune 500, SQL es esencial para cualquier desarrollador backend.',
    seoTitle: 'SQL - Bases de Datos Relacionales | Guía Completa',
    seoDescription: 'Domina SQL: SELECT, JOINs, transacciones y optimización. Aprende la habilidad más demandada en backend development.',
    keywords: 'sql, bases de datos, postgresql, mysql, consultas, transacciones, normalizacion',
    imageUrl: '/src/assets/images/logos/database.png',
    imageAlt: 'SQL Logo',
    primaryButtonText: 'Comenzar con SQL →',
    primaryButtonLink: '/datos/sql/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina SQL',
    ctaSubtitle: 'Conviértete en experto en bases de datos'
  };

  return <LandingPageTemplate moduleId="sql" pageConfig={pageConfig} />;
};
