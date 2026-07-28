import { LandingPageTemplate } from '../components';

export const LandingCloud = () => {
  const pageConfig = {
    title: 'Cloud Computing: Infraestructura en la Nube',
    subtitle: 'Docker, Kubernetes, AWS: domina la containerización y orquestación',
    description: 'Cloud Computing es el futuro del desarrollo. Aprende a containerizar aplicaciones con Docker, orquestar con Kubernetes y desplegar en AWS. Construye infraestructura escalable, resiliente y profesional en la nube.',
    imageUrl: '/images/logos/cloud-computing.jpg',
    imageAlt: 'Cloud Computing',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/cloud/docker/fundamentales/intro',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Cloud Computing',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional',
    faqData: [
      {
        question: '¿Por dónde empiezo: Docker, Kubernetes o AWS?',
        answer: 'Por Docker. Es la base para entender qué es un contenedor y cómo empaquetar una aplicación. Kubernetes orquesta muchos contenedores a la vez, y AWS es donde normalmente se despliega todo eso en producción — tiene más sentido aprenderlos en ese orden.'
      },
      {
        question: '¿Necesito una cuenta de AWS de pago para aprender?',
        answer: 'No para empezar. AWS tiene una capa gratuita (Free Tier) suficiente para practicar con EC2, S3, RDS y Lambda sin coste, siempre que vigiles los límites de uso.'
      },
      {
        question: '¿Cuándo necesito Kubernetes y cuándo me sobra con Docker Compose?',
        answer: 'Docker Compose es suficiente para desarrollo local o aplicaciones pequeñas con pocos contenedores. Kubernetes tiene sentido cuando necesitas escalar automáticamente, alta disponibilidad o gestionar muchos servicios en producción.'
      }
    ]
  };

  const categoryCluster = [
    { id: 'docker', title: 'Docker', icon: '/images/logos/docker-lgo.png', link: '/cloud/docker' },
    { id: 'kubernetes', title: 'Kubernetes', icon: '/images/logos/kubernetes-logo.png', link: '/cloud/kubernetes' },
    { id: 'aws', title: 'AWS', icon: '/images/logos/aws.png', link: '/cloud/aws' }
  ];

  return <LandingPageTemplate moduleId="cloud" pageConfig={pageConfig} categoryCluster={categoryCluster} />;
};
