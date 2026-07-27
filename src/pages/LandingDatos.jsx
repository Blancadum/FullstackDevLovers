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
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    faqData: [
      {
        question: '¿SQL o NoSQL? ¿Cuál aprendo primero?',
        answer: 'SQL primero. Es la base de casi todos los sistemas de datos relacionales y te enseña a pensar en modelos de datos estructurados. MongoDB (NoSQL) es más fácil de aprender después, cuando ya entiendes por qué existe la alternativa.'
      },
      {
        question: '¿Necesito instalar un servidor de bases de datos para practicar?',
        answer: 'Sí, para practicar de verdad conviene tener MySQL, PostgreSQL o MongoDB corriendo localmente (o vía Docker). Las lecciones incluyen guías de instalación paso a paso.'
      },
      {
        question: '¿Para qué sirve saber optimizar consultas si soy principiante?',
        answer: 'Una consulta mal escrita puede tardar segundos en vez de milisegundos al crecer los datos. Entender índices y planes de ejecución desde el principio evita malos hábitos difíciles de corregir después.'
      }
    ]
  };

  const categoryCluster = [
    { id: 'sql', title: 'SQL', icon: '/images/logos/mysql.png', link: '/datos/sql' },
    { id: 'mongodb', title: 'MongoDB', icon: '/images/logos/mongodb.png', link: '/datos/mongodb' }
  ];

  return <LandingPageTemplate moduleId="datos" pageConfig={pageConfig} categoryCluster={categoryCluster} />;
};
