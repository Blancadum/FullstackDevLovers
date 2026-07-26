import { ClusterCards } from './ClusterCards';

export function QuickAccessSection() {
  const quickAccessCards = [
    {
      id: 'backend',
      title: 'Backend',
      icon: '/src/assets/images/logos/backend.png',
      color: '#9c27b0',
      onClickScroll: '#menu'
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: '/src/assets/images/logos/frontend.jpeg',
      color: '#61dafb',
      onClickScroll: '#menu'
    },
    {
      id: 'datos',
      title: 'Datos',
      icon: '/src/assets/images/logos/database.png',
      color: '#1976d2',
      onClickScroll: '#menu'
    },
    {
      id: 'cloud',
      title: 'Cloud computing',
      icon: '/src/assets/images/logos/cloud-computing.jpeg',
      color: '#ff9800',
      onClickScroll: '#menu'
    },
    {
      id: 'versionamiento',
      title: 'Versiones',
      icon: '/src/assets/images/logos/git-logo.png',
      color: '#e8491f',
      onClickScroll: '#menu'
    },
    {
      id: 'metodologias',
      title: 'Metodologías',
      icon: '/src/assets/images/logos/metodologias-procesos.png',
      color: '#ff9800',
      onClickScroll: '#menu'
    },
    {
      id: 'editores',
      title: 'Editores',
      icon: '/src/assets/images/logos/editor.png',
      color: '#3f51b5',
      onClickScroll: '#menu'
    },
    {
      id: 'hosting',
      title: 'Hosting',
      icon: '/src/assets/images/logos/hosting.png',
      color: '#00bcd4',
      onClickScroll: '#menu'
    },
    {
      id: 'contenidos',
      title: 'Contenidos',
      icon: '/src/assets/images/logos/contenidos.png',
      color: '#ff5722',
      onClickScroll: '#menu'
    }
  ];

  const handleCardClick = (card) => {
    if (card.onClickScroll) {
      const element = document.querySelector(card.onClickScroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
