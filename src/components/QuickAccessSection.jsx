import { ClusterCards } from './ClusterCards';

export function QuickAccessSection() {
  const quickAccessCards = [
    {
      id: 'backend',
      title: 'Backend',
      icon: '/images/logos/backend.png',
      color: '#9c27b0',
      stackCategory: 'backend'
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: '/images/logos/frontend.jpeg',
      color: '#61dafb',
      stackCategory: 'frontend'
    },
    {
      id: 'datos',
      title: 'Datos',
      icon: '/images/logos/database.png',
      color: '#1976d2',
      stackCategory: 'datos'
    },
    {
      id: 'cloud',
      title: 'Cloud computing',
      icon: '/images/logos/cloud-computing.jpg',
      color: '#ff9800',
      stackCategory: 'containerizacion'
    },
    {
      id: 'versionamiento',
      title: 'Versiones',
      icon: '/images/logos/git-logo.png',
      color: '#e8491f',
      stackCategory: 'versionamiento'
    },
    {
      id: 'metodologias',
      title: 'Metodologías',
      icon: '/images/logos/metodologias-procesos.png',
      color: '#ff9800',
      stackCategory: 'herramientas'
    },
    {
      id: 'editores',
      title: 'Editores',
      icon: '/images/logos/editor-texto.png',
      color: '#3f51b5',
      stackCategory: 'editores'
    },
    {
      id: 'hosting',
      title: 'Hosting',
      icon: '/images/logos/hosting.png',
      color: '#00bcd4',
      stackCategory: 'hosting'
    },
    {
      id: 'ia',
      title: 'IA',
      icon: '/images/logos/ia.png',
      color: '#9c27b0',
      stackCategory: 'ia'
    },
    {
      id: 'contenidos',
      title: 'Contenidos',
      icon: '/images/logos/contenidos.png',
      color: '#ff5722',
      stackCategory: 'contenidos'
    }
  ];

  const handleCardClick = (card) => {
    if (card.stackCategory) {
      const element = document.querySelector(`#stack-category-${card.stackCategory}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <ClusterCards
      title="Elige Tu Especialidad en Tech"
      cards={quickAccessCards}
      columns={4}
      variant="image"
      onCardClick={handleCardClick}
    />
  );
}
