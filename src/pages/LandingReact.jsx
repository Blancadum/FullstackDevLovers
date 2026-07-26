import { LandingPageTemplate, ModuleIntroSection } from '../components';

export const LandingReact = () => {
  const pageConfig = {
    title: 'React',
    imageUrl: '/src/assets/images/logos/react.png',
    imageAlt: 'React',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/frontend/react/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina React',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    moduleIntro: {
      title: '¿Qué es React?',
      description: 'React es una librería de JavaScript que revoluciona la forma en que construimos interfaces de usuario. Permite crear componentes reutilizables que se actualizan automáticamente cuando cambian los datos, haciendo tus aplicaciones más rápidas, predecibles y fáciles de mantener.',
      highlights: [
        'Componentes reutilizables que simplifican la arquitectura',
        'Virtual DOM para un rendimiento superior',
        'Gestión de estado predecible y transparente',
        'Comunidad global activa con miles de recursos',
        'Empleabilidad altísima en la industria tech'
      ],
      image: '/src/assets/images/logos/react.png'
    }
  };

  // Module switch configuration para StackSection
  const moduleSwitch = {
    title: 'Domina React - La Ruta Completa',
    subtitle: 'De principiante a profesional: fundamentos, hooks, routing, state management y patrones avanzados. Construye aplicaciones web modernas y escalables.',
    categories: [
      {
        id: 'react-learning',
        name: 'React',
        logoSrc: '/src/assets/images/logos/react.png',
        color: '#61DAFB',
        description: 'Aprende React desde lo básico hasta nivel profesional',
        modules: ['react']
      }
    ]
  };

  // Contenido educativo adicional para la landing
  const landingContent = {
    whyReact: {
      title: '¿Por qué React?',
      subtitle: 'La librería JavaScript más robusta para construir interfaces dinámicas',
      benefits: [
        {
          id: 'components',
          title: 'Componentes reutilizables',
          description: 'Construye tu interfaz con bloques independientes y autocontenidos. Cada componente gestiona su propio estado y lógica, eliminando código duplicado y reduciendo el tiempo de desarrollo.'
        },
        {
          id: 'performance',
          title: 'Rendimiento optimizado',
          description: 'React utiliza un Virtual DOM que calcula eficientemente qué cambios son necesarios en la interfaz. Solo actualiza lo que realmente cambió, garantizando una experiencia de usuario fluida incluso en aplicaciones complejas.'
        },
        {
          id: 'state',
          title: 'Gestión de estado predecible',
          description: 'El flujo unidireccional de datos (one-way data binding) hace tu código más predecible y fácil de depurar. Entiende exactamente cómo fluyen los datos a través de tu aplicación sin comportamientos inesperados.'
        },
        {
          id: 'ecosystem',
          title: 'Ecosistema maduro y profesional',
          description: 'Amplio conjunto de librerías complementarias (Redux, React Router, Next.js) y herramientas de desarrollo. Comunidad global activa garantiza soluciones rápidas y best practices consolidadas.'
        },
        {
          id: 'jobs',
          title: 'Demanda laboral altísima',
          description: 'React es la librería más solicitada en ofertas de empleo para desarrolladores frontend. Dominarla te abre puertas a empresas tech líderes y startups innovadoras en todo el mundo.'
        },
        {
          id: 'learning',
          title: 'Curva de aprendizaje accesible',
          description: 'No necesitas ser un experto en programación avanzada. Sus conceptos fundamentales son claros y el progreso es gradual: desde componentes simples hasta arquitecturas escalables.'
        }
      ]
    },
    whatIsReact: {
      title: '¿Para qué sirve React?',
      subtitle: 'Soluciones reales que React resuelve',
      description: 'React es una librería de JavaScript para construir interfaces de usuario interactivas y dinámicas. Se utiliza para crear aplicaciones web donde el usuario interactúa constantemente con la interfaz, generando cambios en tiempo real sin recargar la página.',
      useCases: [
        {
          id: 'spas',
          title: 'Single Page Applications (SPAs)',
          description: 'Aplicaciones que cargan una sola página HTML y actualizan dinámicamente el contenido mediante JavaScript. Ejemplos: Gmail, Twitter, Trello.'
        },
        {
          id: 'dashboards',
          title: 'Dashboards y paneles administrativos',
          description: 'Interfaces que muestran datos en tiempo real, con gráficos, tablas interactivas y actualizaciones frecuentes.'
        },
        {
          id: 'realtime',
          title: 'Aplicaciones en tiempo real',
          description: 'Chats, sistemas de notificaciones, plataformas colaborativas. React maneja eficientemente los cambios constantes de datos.'
        },
        {
          id: 'mobile',
          title: 'Aplicaciones móviles',
          description: 'Con React Native, reutilizas tu conocimiento de React para crear apps nativas en iOS y Android usando JavaScript.'
        },
        {
          id: 'education',
          title: 'Plataformas educativas',
          description: 'Sistemas de aprendizaje interactivo, quizzes, ejercicios de código con experiencias inmersivas y responsive.'
        }
      ]
    },
    prerequisites: {
      title: 'Conocimientos previos para usar React',
      subtitle: 'Fundamentos que debes dominar',
      description: 'React es una librería de JavaScript, no es un lenguaje independiente. Para aprender React con solidez, necesitas tener una base sólida en tecnologías web fundamentales. No es obligatorio ser un experto en todas ellas, pero debes estar cómodo con los conceptos básicos. Esta plataforma te acompañará en el repaso de cualquier tema que necesites reforzar.',
      detailedExplanation: 'React se ejecuta en el navegador y manipula el HTML. Entender cómo funcionan HTML, CSS y JavaScript es fundamental para comprender qué hace React exactamente. Git te ayudará a versionar tu código como un profesional. Aunque puedes aprender React sin Node.js, lo utilizarás en casi todos los proyectos reales. Si vienes de un bootcamp, probablemente ya conoces la mayoría de estos, así que este es un buen momento para consolidar tu conocimiento.',
      technologies: [
        {
          id: 'html5',
          title: 'HTML5',
          logo: '/src/assets/images/logos/html-logo.png',
          color: '#E34C26',
          description: 'Estructura base de las páginas web. React genera HTML dinámicamente.',
          link: '/frontend/html'
        },
        {
          id: 'css3',
          title: 'CSS3',
          logo: '/src/assets/images/logos/css.png',
          color: '#563D7C',
          description: 'Estilos y presentación. Flexbox, Grid, media queries y estilos en componentes.',
          link: '/frontend/css'
        },
        {
          id: 'javascript',
          title: 'JavaScript (ES6+)',
          logo: '/src/assets/images/logos/js.png',
          color: '#F7DF1E',
          description: 'Arrow functions, destructuring, spread operator, async/await, Promises.'
        },
        {
          id: 'git',
          title: 'Git & GitHub',
          logo: '/src/assets/images/logos/git-logo.png',
          color: '#F1502F',
          description: 'Control de versiones. Commits limpios, ramas y pulls requests.',
          link: '/control-versiones/git'
        },
        {
          id: 'nodejs',
          title: 'Node.js & npm',
          logo: '/src/assets/images/logos/nodejs.png',
          color: '#68A063',
          description: 'Gestión de dependencias y herramientas de desarrollo. package.json esencial.',
          link: '/backend/nodejs'
        },
        {
          id: 'rest-api',
          title: 'APIs REST & HTTP',
          logo: '/src/assets/images/logos/api-rest.png',
          color: '#0066CC',
          description: 'GET/POST, respuestas JSON. Conexión servidor-cliente.'
        },
        {
          id: 'json',
          title: 'JSON',
          logo: '/src/assets/images/logos/json.jpeg',
          color: '#000000',
          description: 'Formato de intercambio de datos. APIs devuelven JSON.'
        },
        {
          id: 'dom',
          title: 'DOM & BOM',
          logo: '/src/assets/images/logos/dom.png',
          color: '#FF6B00',
          description: 'Modelo de Objetos del Documento. Cómo el navegador estructura las páginas.'
        }
      ]
    }
  };

  return (
    <LandingPageTemplate
      moduleId="react"
      pageConfig={pageConfig}
      moduleSwitch={moduleSwitch}
      landingContent={landingContent}
    />
  );
};
