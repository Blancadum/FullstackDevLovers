import { LandingPageTemplate } from '../components';

export const LandingDatos = () => {
  const pageConfig = {
    title: 'Datos: Gestiona la Información',
    subtitle: 'SQL, MongoDB y bases de datos: domina el almacenamiento y consulta de datos',
    description: 'Los datos son el activo más valioso en cualquier empresa. Aprende a diseñar bases de datos eficientes, escribir queries complejas, optimizar performance y elegir entre SQL y NoSQL. Domina SQL, MongoDB y conviértete en experto en gestión de datos.',
    imageUrl: '/images/logos/database.png',
    imageAlt: 'Datos',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/datos/sql/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Datos',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  const categoryCluster = [
    { id: 'sql', title: 'SQL', icon: '/images/logos/mysql.png', link: '/datos/sql' },
    { id: 'mongodb', title: 'MongoDB', icon: '/images/logos/mongodb.png', link: '/datos/mongodb' }
  ];

  return <LandingPageTemplate moduleId="datos" pageConfig={pageConfig} categoryCluster={categoryCluster} />;
};
