import { LandingPageTemplate } from '../components';

export const LandingCloud = () => {
  const pageConfig = {
    title: 'Cloud Computing: Infraestructura en la Nube',
    subtitle: 'Docker, Kubernetes, AWS: domina la containerización y orquestación',
    description: 'Cloud Computing es el futuro del desarrollo. Aprende a containerizar aplicaciones con Docker, orquestar con Kubernetes y desplegar en AWS. Construye infraestructura escalable, resiliente y profesional en la nube.',
    imageUrl: '/images/logos/cloud-computing.jpg',
    imageAlt: 'Cloud Computing',
    primaryButtonText: 'Comenzar →',
    primaryButtonLink: '/cloud/docker/basico/introduccion',
    secondaryButtonText: 'Ver temas',
    secondaryButtonLink: '#learning-topics',
    ctaTitle: 'Domina Cloud Computing',
    ctaSubtitle: 'Aprende desde lo básico hasta nivel profesional'
  };

  return <LandingPageTemplate moduleId="cloud" pageConfig={pageConfig} />;
};
