import { LandingPageTemplate } from '../components';

export const LandingAWS = () => {
  const pageConfig = {
    title: 'AWS: El Estándar de Cloud Computing',
    subtitle: 'Usado por Netflix, Uber, Airbnb y 87% de Fortune 500',
    description: 'Amazon Web Services es el proveedor de cloud computing líder del mercado (32% de cuota). Con 200+ servicios, presencia global en 30+ regiones y documentación de clase mundial, AWS te permite construir, escalar y desplegar aplicaciones empresariales con confianza.',
    seoTitle: 'AWS - Cloud Computing Profesional | Guía Completa',
    seoDescription: 'Aprende AWS: EC2, RDS, S3, Lambda, DynamoDB, VPC e IAM. Domina la plataforma cloud más demandada en empresas Fortune 500.',
    keywords: 'aws, cloud, ec2, s3, rds, lambda, dynamodb, iam, vpc, cloud computing',
    image: '/og-aws.png',
    imageUrl: '/src/assets/images/logos/aws.png',
    imageAlt: 'AWS Logo',
    primaryButtonText: 'Comenzar con AWS →',
    primaryButtonLink: '/cloud/aws/fundamentales/intro',
    secondaryButtonText: 'Ver comparativa',
    secondaryButtonLink: '#comparativa',
    features: [
      {
        icon: '💰',
        title: 'Pay-As-You-Go',
        description: 'Paga solo lo que usas, sin compromisos ni cargos iniciales'
      },
      {
        icon: '🌐',
        title: 'Global Infrastructure',
        description: 'Despliega en 30+ regiones para baja latencia y redundancia global'
      },
      {
        icon: '📈',
        title: 'Escalabilidad Automática',
        description: 'Tu aplicación crece o se reduce automáticamente según demanda'
      },
      {
        icon: '🛡️',
        title: 'Seguridad Multicapa',
        description: 'Protección de datos en tránsito y en reposo con encriptación'
      },
      {
        icon: '✅',
        title: '99.99% Uptime',
        description: 'Diseñado para alta disponibilidad y máxima protección de datos'
      },
      {
        icon: '🎯',
        title: 'Managed Services',
        description: 'AWS gestiona infraestructura, tú solo enfócate en código'
      }
    ],
    faqData: [
      {
        question: '¿Qué es AWS y por qué es el #1 en cloud?',
        answer: 'Amazon Web Services es el proveedor de cloud computing líder con 32% del mercado global. Fue pionero (lanzado 2006) y tiene el ecosistema más maduro: 200+ servicios, presencia global (30+ regiones), mejores prácticas documentadas, y adopción masiva de Fortune 500 (Netflix, Uber, LinkedIn, etc). AWS es la opción más segura y demandada en empleabilidad.'
      },
      {
        question: '¿AWS vs Google Cloud vs Azure: cuál aprender?',
        answer: 'AWS es #1: mejor documentación, comunidad más grande, más servicios. Google Cloud es #2: especializado en datos/ML. Azure es #3: mejor si tu empresa usa stack Microsoft. Recomendación: aprende AWS primero. Las skills son 80% transferibles entre clouds. Domina conceptos cloud (VPC, balanceo carga, auto-scaling) y luego otros clouds son fáciles.'
      },
      {
        question: '¿Cuánto cuesta AWS? ¿Puedo quebrarme?',
        answer: 'AWS tiene modelo pay-as-you-go: pagas solo lo que usas. Para desarrollo pequeño (tier gratuita): ~$0. Para producción: depende de uso (app grande: $100-10000/mes). Recomendación: (1) Usa free tier mientras aprendes, (2) Configura alertas de billing, (3) Entiende EC2 spot instances para ahorrar 70%, (4) No dejes recursos activos. No te quebraras si eres cuidadoso.'
      },
      {
        question: '¿Qué servicio AWS debo aprender primero?',
        answer: 'Ruta recomendada: (1) Conceptos: IAM, Regiones, VPC, (2) Compute: EC2 (máquinas virtuales), (3) Storage: S3 (almacenamiento), (4) Database: RDS (SQL), (5) Serverless: Lambda (funciones), (6) Avanzado: Kubernetes (EKS), Microservicios. No intentes aprender todo de una. EC2 + S3 cubre 80% de casos de uso.'
      },
      {
        question: '¿Necesito certificación AWS? ¿Vale la pena?',
        answer: 'Certificación AWS (Solutions Architect, Developer, SysOps) es valiosa para empleabilidad si buscas rol DevOps/Cloud. No es obligatoria para uso básico. Si aprendes sin certificación y haces proyectos reales, eso es más valioso. Certificación cuesta $150 y es prueba de competencia. Recomendación: aprende bien primero, luego considera certificación si la necesitas laboralmente.'
      },
      {
        question: '¿Por qué no simplemente usar Heroku o Firebase?',
        answer: 'Heroku/Firebase son PaaS más simples pero tienen desventajas: (1) Caro a escala (10x más que AWS), (2) Vendor lock-in severo, (3) Menos control, (4) No escalas tanto. AWS es más complejo al inicio pero es inversión que te da skills transferibles, control total y economía. Para MVP: Heroku. Para producción/escala: AWS. Aprende AWS.'
      }
    ],
    comparisonData: [
      {
        feature: 'Tamaño de Mercado',
        aws: '32% (líder)',
        googlecloud: '11% (en crecimiento)',
        azure: '23% (enterprise)'
      },
      {
        feature: 'Cantidad de Servicios',
        aws: '200+ servicios',
        googlecloud: '100+ servicios',
        azure: '150+ servicios'
      },
      {
        feature: 'Documentación',
        aws: 'Excelente (mejor del mercado)',
        googlecloud: 'Buena',
        azure: 'Buena (orientada a Enterprise)'
      },
      {
        feature: 'Comunidad',
        aws: 'Masiva (millones de devs)',
        googlecloud: 'Creciente (DataScience)',
        azure: 'Enterprise'
      },
      {
        feature: 'Precio',
        aws: 'Competitivo',
        googlecloud: 'Generalmente más barato',
        azure: 'Más barato si usas Microsoft'
      },
      {
        feature: 'Especialidad',
        aws: 'Propósito general (todo)',
        googlecloud: 'Data, AI/ML, Kubernetes',
        azure: 'Enterprise, Office 365'
      },
      {
        feature: 'Curva de Aprendizaje',
        aws: 'Media (complejo)',
        googlecloud: 'Media',
        azure: 'Media-Alta'
      },
      {
        feature: 'Adopción Industria',
        aws: 'Netflix, Uber, Airbnb, LinkedIn',
        googlecloud: 'Google, Spotify, eBay',
        azure: 'Microsoft, Intel, GE'
      }
    ],
    compareWith: ['AWS', 'Google Cloud', 'Azure'],
    comparisonTitle: 'AWS vs Google Cloud vs Azure',
    comparisonSubtitle: 'Comparativa detallada de AWS con otros proveedores de cloud',
    comparisonConclusion: [
      'Elige AWS si: Quieres las mejores oportunidades laborales, necesitas la mejor documentación, quieres el estándar de facto, o trabajas en startups/grandes empresas.',
      'Elige Google Cloud si: Eres especialista en Data Science/Machine Learning, trabajas con big data, o necesitas análisis avanzados. Google creó TensorFlow.',
      'Elige Azure si: Tu empresa usa stack Microsoft (Windows, Office, .NET), necesitas integración Enterprise, o trabajas en corporativos legacy.'
    ],
    ctaTitle: 'Comienza tu Viaje en AWS Hoy',
    ctaSubtitle: 'Aprende desde conceptos básicos hasta arquitectura empresarial compleja'
  };

  return <LandingPageTemplate moduleId="aws" pageConfig={pageConfig} />;
};
