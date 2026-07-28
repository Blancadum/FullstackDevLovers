import { LandingPageTemplate } from '../components';

/**
 * Java Landing Page
 * Uses the generic LandingPageTemplate with Java-specific configuration
 */
export const LandingJava = () => {
  const pageConfig = {
    title: 'Java: Lenguaje Profesional para Empresas',
    subtitle: 'Usado por 87% de Fortune 500',
    description: 'Java es el estándar de la industria para desarrollo backend empresarial a escala. Con la JVM, orientación a objetos profunda, ecosistema maduro, y herramientas como Spring Boot, Java permite construir sistemas de misión crítica que procesan millones de transacciones diarias.',
    primaryButtonText: 'Comenzar con Java →',
    primaryButtonLink: '/backend/java/introduccion/funcionamiento',
    secondaryButtonText: 'Ver comparativa',
    secondaryButtonLink: '#comparativa',
    imageUrl: '/images/logos/java-logo.png',
    imageAlt: 'Java Logo',
    seoTitle: 'Java - Programación Orientada a Objetos Profesional | Guía Completa',
    seoDescription: 'Aprende Java: JVM, POO, colecciones, lambdas, concurrencia y desarrollo backend empresarial. Domina el lenguaje más demandado en empresas Fortune 500.',
    keywords: 'java, programación, oop, jvm, backend, desarrollo empresarial, java tutorial, colecciones, lambdas, concurrencia',

    features: [
      {
        icon: '🏛️',
        title: 'Orientación a Objetos Profunda',
        description: 'Clases, herencia, polimorfismo y encapsulación como conceptos centrales'
      },
      {
        icon: '⚙️',
        title: 'JVM - Máquina Virtual',
        description: 'Compila una vez, ejecuta en cualquier lugar. Independencia de plataforma real'
      },
      {
        icon: '📚',
        title: 'Ecosistema Maduro',
        description: 'Librerías consolidadas para cada caso de uso. Maven, Gradle, Spring Framework'
      },
      {
        icon: '🚀',
        title: 'Spring Boot',
        description: 'Framework profesional para APIs REST, microservicios y aplicaciones empresariales'
      },
      {
        icon: '🔒',
        title: 'Type-Safe',
        description: 'Tipado fuerte previene errores en compilación, no en runtime'
      },
      {
        icon: '⚡',
        title: 'Performance',
        description: 'JIT compilation y optimizaciones de runtime hacen Java muy rápido'
      }
    ],

    faqData: [
      {
        question: '¿Qué es Java y por qué es tan popular?',
        answer: 'Java es un lenguaje compilado, orientado a objetos, que se ejecuta en la Máquina Virtual Java (JVM). Es el lenguaje más usado en empresas Fortune 500 porque: (1) es robusto y type-safe, (2) la JVM garantiza "write once, run anywhere", (3) tiene ecosistema maduro con Spring Boot, Hibernate, etc., (4) ofrece excelente performance, (5) tiene comunidad masiva.'
      },
      {
        question: '¿Qué es la JVM y por qué importa?',
        answer: 'La Máquina Virtual Java es una máquina abstracta que ejecuta bytecode compilado. Su valor: (1) portabilidad - el mismo .class funciona en Windows, Mac, Linux, (2) performance - JIT compilation optimiza código en runtime, (3) seguridad - sandbox de la JVM, (4) garbage collection automático, (5) múltiples lenguajes corren en JVM (Java, Kotlin, Scala, Groovy).'
      },
      {
        question: '¿Debo aprender Java o Python/Go directamente?',
        answer: 'Java es ideal si: buscas empleabilidad (más ofertas de backend en empresas), trabajarás con sistemas heredados empresariales, quieres aprender OOP profundamente, o construirás microservicios en Spring Boot. Python si: prefieres sintaxis simple o machine learning. Go si: enfoque en concurrencia o DevOps. Para backend empresarial, Java es la mejor opción.'
      },
      {
        question: '¿Cuál es la curva de aprendizaje de Java?',
        answer: 'Java tiene curva moderada: sintaxis básica: 1-2 semanas, OOP fundamentos: 4-6 semanas, Spring Boot: 8-12 semanas, productividad real: 3-6 meses. Es más verbose que Python pero menos que C++. El tipado fuerte ayuda porque el compilador te atrapa errores temprano. Recomendación: dedica tiempo extra a OOP, es fundamental.'
      },
      {
        question: '¿Java tiene futuro? ¿No está muerto?',
        answer: 'Java está más vivo que nunca. Estadísticas 2024: es el #1 en empresas, 9+ millones de desarrolladores worldwide, adopción masiva en cloud (AWS, Azure, Google Cloud todos soportan Java nativamente), Spring Boot es el framework más usado para APIs. Las nuevas versiones (21, 22) traen features modernas. Java no desaparece mientras existan sistemas empresariales.'
      },
      {
        question: '¿Java vs Spring Boot? ¿Son lo mismo?',
        answer: 'No. Java es el lenguaje. Spring Boot es un framework que corre EN Java. Analogía: JavaScript es el lenguaje, React/Vue son frameworks. Spring Boot simplifica enormemente desarrollo de APIs REST y microservicios. Si aprendes Java sin Spring, eres un 20% productivo. Con Spring Boot, eres 100% productivo en aplicaciones empresariales.'
      }
    ],

    comparisonData: [
      {
        feature: 'Concepto Base',
        java: 'Lenguaje compilado a bytecode, ejecuta en JVM',
        python: 'Lenguaje interpretado dinámico',
        go: 'Lenguaje compilado a binario nativo'
      },
      {
        feature: 'Tipado',
        java: 'Fuerte y estático (obligatorio)',
        python: 'Dinámico (opcional con type hints)',
        go: 'Fuerte y estático (casi obligatorio)'
      },
      {
        feature: 'Sintaxis',
        java: 'Verbose, explícita, ceremonial',
        python: 'Limpia, concisa, Pythonic',
        go: 'Simple, minimalista, rápida de leer'
      },
      {
        feature: 'OOP',
        java: 'Soporte completo y profundo',
        python: 'OOP pero no fuerza el paradigma',
        go: 'Sin clases, pero interfaces implícitas'
      },
      {
        feature: 'Performance',
        java: 'Excelente (JIT compilation)',
        python: 'Lento (interpretado)',
        go: 'Muy rápido (compilado nativo)'
      },
      {
        feature: 'Concurrencia',
        java: 'Threads explícitos, muy maduro',
        python: 'GIL limita verdadera concurrencia',
        go: 'Goroutines, excelente para concurrencia'
      },
      {
        feature: 'Ecosistema Backend',
        java: 'Spring Boot, masivo, maduro',
        python: 'Django, Flask, bueno pero menos empresarial',
        go: 'Gin, Echo, minimalista y rápido'
      },
      {
        feature: 'Machine Learning',
        java: 'Limitado, no es el enfoque',
        python: 'Excelente (NumPy, Pandas, TensorFlow)',
        go: 'No es el enfoque, ML es Python'
      },
      {
        feature: 'Empleabilidad Backend',
        java: '★★★★★ (9+ millones de desarrolladores)',
        python: '★★★★☆ (muy usado pero menos backend)',
        go: '★★★☆☆ (creciente pero más nicho)'
      },
      {
        feature: 'Curva de Aprendizaje',
        java: '★★★☆☆ (moderada, OOP es clave)',
        python: '★★★★★ (muy fácil para empezar)',
        go: '★★★★☆ (fácil, menos conceptos)'
      }
    ],

    compareWith: ['Java', 'Python', 'Go'],

    comparisonTitle: 'Java vs Python vs Go',
    comparisonSubtitle: 'Comparativa detallada para elegir el lenguaje backend correcto',

    comparisonConclusion: [
      '✅ Elige Java si: trabajarás en empresa Fortune 500, quieres el mejor ecosistema backend empresarial, prefieres type-safety fuerte, o usarás Spring Boot/microservicios.',
      '✅ Elige Python si: enfoque en machine learning, startup ágil que necesita MVP rápido, o prefieres sintaxis simple sobre performance.',
      '✅ Elige Go si: necesitas máximo performance, concurrencia nativa, binario único auto-contenido, o trabajarás en DevOps/infrastructure.'
    ],

    whenToUse: {
      ideal: [
        'Sistemas backend empresariales a escala',
        'Microservicios con Spring Boot',
        'APIs REST de alto tráfico',
        'Aplicaciones que procesarán millones de transacciones',
        'Equipos grandes que necesitan type-safety'
      ],
      alternatives: [
        'Tienes equipo de 1-2 personas (usa Go o Python)',
        'Es startup sin experiencia DevOps (usa managed services)',
        'Tu foco principal es Machine Learning (usa Python)',
        'Necesitas binario ultra-ligero (usa Go)',
        'Tu aplicación es simple CRUD (cualquier lenguaje funciona)'
      ]
    },

    whenToUseTitle: '¿Cuándo Usar Java?',

    ctaTitle: 'Comienza tu Viaje con Java',
    ctaSubtitle: 'Aprende desde conceptos básicos hasta nivel profesional con Spring Boot'
  };

  return <LandingPageTemplate moduleId="java" pageConfig={pageConfig} />;
};
