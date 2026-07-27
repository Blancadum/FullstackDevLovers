import { LandingPageTemplate } from '../components';

export const LandingKubernetes = () => {
  const pageConfig = {
    title: 'Kubernetes: Orquestación a Escala Empresarial',
    subtitle: 'Usado por Google, Amazon, Microsoft y Netflix',
    description: 'Kubernetes es un orquestador de contenedores open-source creado por Google para gestionar aplicaciones containerizadas a escala. Automatiza el deployment, escalado horizontal y gestión de cientos o miles de contenedores en múltiples servidores, garantizando alta disponibilidad, recuperación ante fallos y optimización de recursos.',
    seoTitle: 'Kubernetes - Orquestación de Contenedores Empresarial | Guía Completa',
    seoDescription: 'Aprende Kubernetes: orquestación, Pods, Deployments, escalado automático, alta disponibilidad y gestión de infraestructura a escala empresarial.',
    keywords: 'kubernetes, k8s, orquestación, contenedores, pods, deployments, devops, cloud, escalado automático',
    image: '/og-kubernetes.png',
    imageUrl: '/images/logos/kubernetes-logo.png',
    imageAlt: 'Kubernetes Logo',
    primaryButtonText: 'Comenzar con Kubernetes →',
    primaryButtonLink: '/cloud/kubernetes/fundamentales/intro',
    secondaryButtonText: 'Ver comparativa',
    secondaryButtonLink: '#comparativa',
    faqData: [
      {
        question: '¿Qué es Kubernetes y por qué lo necesito?',
        answer: 'Kubernetes (K8s) es un orquestador de contenedores que automatiza deployment, escalado y gestión de aplicaciones containerizadas. Mientras Docker maneja un contenedor en una máquina, Kubernetes gestiona cientos o miles de contenedores en múltiples servidores, garantizando alta disponibilidad, actualizaciones sin downtime y auto-healing automático.'
      },
      {
        question: '¿Necesito Kubernetes o Docker es suficiente?',
        answer: 'Docker es suficiente si: (1) Tu infra es una o pocas máquinas, (2) Usas PaaS (Heroku, Vercel, AWS Elastic Beanstalk), (3) Tu equipo no tiene expertise en DevOps. Necesitas Kubernetes si: (1) Tienes múltiples servidores, (2) Necesitas auto-escalado, (3) Trabajas en startup/empresa con crecimiento rápido, (4) Usas on-premise infrastructure.'
      },
      {
        question: '¿Cuál es la curva de aprendizaje de Kubernetes?',
        answer: 'Kubernetes tiene una curva empinada. Básicos: 2-4 semanas. Profundidad media: 2-3 meses. Expertise: 6-12 meses con proyectos reales. Recomendación: domina Docker 100% primero. Aprende Kubernetes solo cuando realmente lo necesites. Un 70% de equipos pequeños están sobre-ingenierizados con K8s cuando Docker+PaaS sería suficiente.'
      },
      {
        question: '¿Kubernetes vs Docker Swarm vs Nomad: cuál elegir?',
        answer: 'Docker Swarm: más simple, integrado en Docker, pero limitado. Kubernetes: estándar industria, masiva comunidad, curva empinada, pero definitivamente vale la pena. Nomad: agnóstico (no solo contenedores), flexible, pero menos comunidad. Para 99% de casos, Kubernetes es la respuesta. Es el estándar de facto.'
      },
      {
        question: '¿Puedo correr Kubernetes localmente en desarrollo?',
        answer: 'Sí. Tienes varias opciones: (1) Minikube - VM local con K8s completo (recomendado para aprender), (2) Docker Desktop - K8s integrado en Windows/Mac, (3) Kind - Kubernetes en Docker (perfecto para testing). Para desarrollo inicial, Minikube es lo mejor. Aprendes en tu laptop sin necesidad de infraestructura cloud.'
      },
      {
        question: '¿Kubernetes en cloud: AWS (EKS) vs Azure (AKS) vs Google (GKE)?',
        answer: 'Los tres son excelentes. Google GKE es el más maduro (Google creó K8s). AWS EKS es el que usarás si estás en AWS. Azure AKS si estás en Azure. El servicio de K8s manejado abstrae la complejidad de mantener el control plane. 95% de empresas usan Kubernetes manejado, no auto-hospedado.'
      }
    ],
    comparisonData: [
      {
        feature: 'Concepto Base',
        kubernetes: 'Orquestación de contenedores',
        dockerswarm: 'Orquestación simplificada',
        nomad: 'Orquestador agnóstico'
      },
      {
        feature: 'Complejidad',
        kubernetes: 'Alta (curva empinada)',
        dockerswarm: 'Baja (muy simple)',
        nomad: 'Media'
      },
      {
        feature: 'Comunidad',
        kubernetes: 'Masiva (CNCF)',
        dockerswarm: 'Pequeña',
        nomad: 'Creciente (HashiCorp)'
      },
      {
        feature: 'Escalabilidad',
        kubernetes: '5000+ nodos',
        dockerswarm: '1000+ nodos',
        nomad: '10000+ nodos'
      },
      {
        feature: 'Auto-escalado',
        kubernetes: 'Nativo y avanzado',
        dockerswarm: 'Manual/limitado',
        nomad: 'Bueno'
      },
      {
        feature: 'Rolling Updates',
        kubernetes: 'Sofisticado (canary, blue/green)',
        dockerswarm: 'Básico',
        nomad: 'Avanzado'
      },
      {
        feature: 'Ecosystem',
        kubernetes: 'Enorme (Helm, Istio, Prometheus)',
        dockerswarm: 'Minimal',
        nomad: 'HashiCorp suite'
      },
      {
        feature: 'Adopción Industria',
        kubernetes: 'Google, Amazon, Microsoft, Netflix',
        dockerswarm: 'Pocas empresas',
        nomad: 'Empresas DevOps forward'
      }
    ],
    compareWith: ['Kubernetes', 'Docker Swarm', 'Nomad'],
    comparisonTitle: 'Kubernetes vs Docker Swarm vs Nomad',
    comparisonSubtitle: 'Comparativa detallada de Kubernetes con otras plataformas de orquestación',
    comparisonConclusion: [
      'Elige Kubernetes si: Trabajas en empresa con infraestructura compleja, necesitas auto-escalado sofisticado, quieres estándar de facto con masiva comunidad, o tienes roadmap de crecimiento.',
      'Elige Docker Swarm si: Tu infra es pequeña, necesitas simplicidad extrema, o ya inversión en Docker. Nota: Swarm está en mantenimiento, no recomendado para nuevo.',
      'Elige Nomad si: Necesitas agnóstico (no solo contenedores), trabajas con VMs/binarios también, o prefieres HashiCorp stack completo.'
    ],
    whenToUse: {
      ideal: [
        'Múltiples servidores/cluster distribuido',
        'Aplicaciones que necesitan auto-escalado',
        'Alta disponibilidad y uptime 99.99%',
        'Microservicios complejos con muchos servicios',
        'Infraestructura empresarial crítica'
      ],
      alternatives: [
        'Tu equipo no tiene expertise en DevOps',
        'Usas PaaS (Heroku, Vercel, AWS Beanstalk)',
        'Tienes un único servidor o máquina',
        'Es startup muy pequeño sin presupuesto DevOps',
        'Tu aplicación es simple/monolítica'
      ]
    },
    ctaTitle: 'Comienza tu Viaje en Kubernetes Hoy',
    ctaSubtitle: 'Aprende desde conceptos básicos hasta orquestación profesional a escala'
  };

  return <LandingPageTemplate moduleId="kubernetes" pageConfig={pageConfig} />;
};
