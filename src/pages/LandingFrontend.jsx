import { LandingPageTemplate, LearningPathCard } from '../components';

export const LandingFrontend = () => {
  const pageConfig = {
    title: 'Frontend: Construye Interfaces Modernas',
    subtitle: 'De HTML & CSS hasta React y Angular: domina el desarrollo web profesional',
    description: 'Frontend es el arte de crear experiencias de usuario excepcionales. Aprende desde los fundamentos (HTML, CSS, JavaScript) hasta los frameworks modernos (React, Angular) y herramientas profesionales. Conviértete en un desarrollador frontend altamente demandado.',
    imageUrl: '/images/logos/frontpage.png',
    imageAlt: 'Frontend',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/react/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Frontend',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    learningPath: {
      title: 'Tu Ruta de Aprendizaje Frontend',
      description: 'Progresa de forma estructurada desde los fundamentos hasta proyectos profesionales',
      levels: [
        {
          level: 'Nivel 1',
          title: 'Fundamentos',
          technologies: [
            {
              id: 'html',
              name: 'HTML5',
              logo: '/images/logos/html-logo.png',
              color: '#E34C26',
              link: '/frontend/html'
            },
            {
              id: 'css',
              name: 'CSS3',
              logo: '/images/logos/css.png',
              color: '#563D7C',
              link: '/frontend/css'
            },
            {
              id: 'js',
              name: 'JavaScript',
              logo: '/images/logos/js.png',
              color: '#F7DF1E',
              link: '/frontend/javascript'
            }
          ]
        },
        {
          level: 'Nivel 2',
          title: 'Frameworks Modernos',
          technologies: [
            {
              id: 'react',
              name: 'React',
              logo: '/images/logos/react.png',
              color: '#61DAFB',
              link: '/frontend/react'
            },
            {
              id: 'angular',
              name: 'Angular',
              logo: '/images/logos/angular-logo.jpeg',
              color: '#DD0031',
              link: '/frontend/angular'
            }
          ]
        },
        {
          level: 'Nivel 3',
          title: 'Herramientas & Frameworks CSS',
          technologies: [
            {
              id: 'bootstrap',
              name: 'Bootstrap',
              logo: '/images/logos/bootstrap.jpeg',
              color: '#7952B3',
              link: '/frontend/bootstrap'
            },
            {
              id: 'tailwind',
              name: 'Tailwind CSS',
              logo: '/images/logos/tailwindcss.jpg',
              color: '#06B6D4',
              link: '/frontend/tailwindcss'
            }
          ]
        },
        {
          level: 'Nivel 4',
          title: 'Herramientas Avanzadas',
          technologies: [
            {
              id: 'nodejs',
              name: 'Node.js',
              logo: '/images/logos/nodejs.png',
              color: '#68A063',
              link: '/backend/nodejs'
            },
            {
              id: 'git',
              name: 'Git',
              logo: '/images/logos/git-logo.png',
              color: '#F1502F',
              link: '/control-versiones/git'
            }
          ]
        }
      ]
    }
  };

  return (
    <>
      <LandingPageTemplate moduleId="frontend" pageConfig={pageConfig} />
      {pageConfig.learningPath && (
        <LearningPathCard
          title={pageConfig.learningPath.title}
          description={pageConfig.learningPath.description}
          levels={pageConfig.learningPath.levels}
        />
      )}
    </>
  );
};
