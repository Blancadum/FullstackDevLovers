import { LandingPageTemplate } from '../components';

export const LandingDocker = () => {
  const pageConfig = {
    title: 'Docker: La Revolución del Deployment',
    subtitle: 'Usado por Netflix, Uber, Spotify y empresas Fortune 500',
    description: 'Docker es el estándar de la industria para containerización y deployment moderno. Empaqueta tu aplicación con todas sus dependencias en contenedores aislados que se ejecutan idénticamente en cualquier lugar: tu laptop, servidor de staging o producción. Sin sorpresas, sin incompatibilidades.',
    seoTitle: 'Docker - Containerización Profesional | Guía Completa',
    seoDescription: 'Aprende Docker: contenerización, imágenes, Dockerfile, Docker Compose y orquestación. Domina la tecnología esencial para deployment moderno y CI/CD.',
    keywords: 'docker, containerización, dockerfile, docker compose, contenedores, deployment, devops, ci/cd',
    image: '/og-docker.png',
    imageUrl: '/src/assets/images/logos/docker-lgo.png',
    imageAlt: 'Docker Logo',
    primaryButtonText: 'Comenzar con Docker →',
    primaryButtonLink: '/cloud/docker/fundamentales/intro',
    secondaryButtonText: 'Ver comparativa',
    secondaryButtonLink: '#comparativa',
    features: [
      {
        icon: '📦',
        title: 'Portabilidad Total',
        description: 'Tu aplicación se ejecuta idénticamente en desarrollo, testing y producción'
      },
      {
        icon: '⚡',
        title: 'Lightweight & Rápido',
        description: 'MB de tamaño, inicia en segundos. Mucho más eficiente que máquinas virtuales'
      },
      {
        icon: '🔒',
        title: 'Aislamiento Seguro',
        description: 'Procesos completamente aislados sin interferencia entre contenedores'
      },
      {
        icon: '🛠️',
        title: 'Dockerfile - IaC',
        description: 'Define tu entorno como código reproducible y versionable'
      },
      {
        icon: '📈',
        title: 'Escalabilidad Sencilla',
        description: 'Lanza múltiples contenedores de la misma imagen en segundos'
      },
      {
        icon: '🌐',
        title: 'Ecosystem Masivo',
        description: 'Docker Hub: 11M+ imágenes públicas. Comunidad gigante de soporte'
      }
    ],
    faqData: [
    {
      question: '¿Qué es Docker y por qué lo necesito?',
      answer: 'Docker es una plataforma de containerización que empaqueta tu aplicación con todas sus dependencias en un contenedor aislado. Permite que el código se ejecute de forma idéntica en cualquier máquina (desarrollo, testing, producción), eliminando el problema "pero en mi máquina funciona". Es el estándar de la industria para deployment moderno.'
    },
    {
      question: '¿Docker vs Máquinas Virtuales: Cuál es la diferencia?',
      answer: 'Las máquinas virtuales (VM) virtualizan hardware completo (SO incluido), consumiendo GB de RAM cada una. Docker virtualiza solo el sistema de archivos, compartiendo el kernel del SO, siendo mucho más ligero (~MB). Docker es 10x más rápido de iniciar y consume 10x menos recursos. Para aplicaciones modernas, Docker es la opción correcta.'
    },
    {
      question: '¿Necesito aprender Kubernetes si uso Docker?',
      answer: 'No es obligatorio. Docker es perfecto para desarrollo y máquinas individuales. Kubernetes es para orquestación a escala empresarial (cientos de contenedores en múltiples servidores). Si tu startup tiene un servidor o uses PaaS (Heroku, Vercel), Docker es suficiente. Kubernetes lo aprendes solo si lo necesitas realmente.'
    },
    {
      question: '¿Puedo correr contenedores en Windows o Mac?',
      answer: 'Sí. Docker Desktop (Windows/Mac) instala automáticamente una máquina virtual Linux ligera que corre los contenedores. En producción usas Linux puro. Para desarrollo, Docker Desktop funciona perfectamente y se integra nativamente con WSL2 en Windows 11.'
    },
    {
      question: '¿Cuál es la diferencia entre una imagen y un contenedor?',
      answer: 'Una imagen Docker es como un "molde" o "snapshot" (archivo de solo lectura). Un contenedor es una instancia ejecutándose de esa imagen. Analógicamente: la imagen es el plano de una casa, el contenedor es la casa construida. Puedes tener múltiples contenedores corriendo de la misma imagen.'
    },
    {
      question: '¿Dónde almaceno mis imágenes Docker?',
      answer: 'Docker Hub es el registro público central (como GitHub para imágenes). Ahí encuentras imágenes oficiales (nginx, postgres, redis, etc). También puedes crear un registro privado (AWS ECR, Azure Container Registry) para tus imágenes propietarias. Las empresas típicamente usan registros privados.'
    }
    ],
    comparisonData: [
    {
      feature: 'Concepto Base',
      docker: 'Contenerización',
      podman: 'Contenerización (daemon-less)',
      containerd: 'Container Runtime (bajo nivel)'
    },
    {
      feature: 'Arquitectura',
      docker: 'Cliente-Servidor (daemon)',
      podman: 'Sin daemon (rootless)',
      containerd: 'Especifico para orquestadores'
    },
    {
      feature: 'Facilidad de Uso',
      docker: 'Muy fácil (principiantes)',
      podman: 'Muy similar a Docker',
      containerd: 'Para expertos/herramientas'
    },
    {
      feature: 'Compatibilidad',
      docker: 'Estándar industria',
      podman: 'Compatible Docker (casi)',
      containerd: 'Bajo nivel (no interactivo)'
    },
    {
      feature: 'Seguridad Rootless',
      docker: 'Experimental',
      podman: 'Nativa',
      containerd: 'Soportado'
    },
    {
      feature: 'Comunidad',
      docker: 'Masiva (11M+ imágenes Hub)',
      podman: 'Creciente (RedHat)',
      containerd: 'Desarrolladores'
    },
    {
      feature: 'Costo',
      docker: 'Gratis (Desktop $12/mes pro)',
      podman: 'Gratis',
      containerd: 'Gratis'
    }
    ],
    compareWith: ['Docker', 'Podman', 'Containerd'],
    comparisonTitle: 'Docker vs Podman vs Containerd',
    comparisonSubtitle: 'Comparativa detallada de Docker con otras plataformas de containerización',
    comparisonConclusion: [
      'Elige Docker si: Eres principiante, necesitas comunidad masiva, quieres el estándar de facto, o trabajarás en empresas (95% usan Docker). Docker Desktop te simplifica la vida.',
      'Elige Podman si: Prefieres rootless por defecto, quieres daemon-less, o trabajas en RedHat/Kubernetes. Podman es casi idéntico a Docker (comandos intercambiables).',
      'Elige Containerd si: Eres experto en infraestructura, trabajas directamente con Kubernetes, o necesitas un runtime de bajo nivel sin interfaz de usuario.'
    ],
    whenToUse: {
      ideal: [
        'Desarrollo local que replicar en producción',
        'Microservicios y arquitectura distribuida',
        'CI/CD pipelines automatizados',
        'Orquestación con Kubernetes',
        'Equipos trabajando en diferentes OS'
      ],
      alternatives: [
        'Tu aplicación es monolítica y no se mueve',
        'Necesitas overhead bajo (aplicaciones embebidas/IoT)',
        'Usas PaaS (Heroku, Vercel) que manejan deployment',
        'Tu infra es legacy y no soporta contenedores',
        'Tienes equipo sin experiencia en DevOps'
      ]
    },
    ctaTitle: 'Comienza tu Viaje en Docker Hoy',
    ctaSubtitle: 'Aprende desde conceptos básicos hasta arquitecturas profesionales de microservicios'
  };

  return <LandingPageTemplate moduleId="docker" pageConfig={pageConfig} />;
};
