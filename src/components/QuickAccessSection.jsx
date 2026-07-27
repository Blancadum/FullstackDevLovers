import { ClusterCards } from './ClusterCards';

export function QuickAccessSection() {
  const quickAccessCards = [
    {
      id: 'backend',
      title: 'Backend',
      icon: '/images/logos/backend.png',
      color: '#9c27b0',
      link: '/backend'
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: '/images/logos/frontend.jpeg',
      color: '#61dafb',
      link: '/frontend'
    },
    {
      id: 'datos',
      title: 'Datos',
      icon: '/images/logos/database.png',
      color: '#1976d2',
      link: '/datos'
    },
    {
      id: 'cloud',
      title: 'Cloud computing',
      icon: '/images/logos/cloud-computing.jpg',
      color: '#ff9800',
      link: '/cloud'
    },
    {
      id: 'versionamiento',
      title: 'Versiones',
      icon: '/images/logos/git-logo.png',
      color: '#e8491f',
      link: '/control-versiones'
    },
    {
      id: 'metodologias',
      title: 'Metodologías',
      icon: '/images/logos/metodologias-procesos.png',
      color: '#ff9800',
      link: '/metodologias'
    },
    {
      id: 'editores',
      title: 'Editores',
      icon: '/images/logos/editor-texto.png',
      color: '#3f51b5',
      link: '/editores'
    },
    {
      id: 'hosting',
      title: 'Hosting',
      icon: '/images/logos/hosting.png',
      color: '#00bcd4',
      link: '/hosting'
    },
    {
      id: 'ia',
      title: 'IA',
      icon: '/images/logos/ia.png',
      color: '#9c27b0',
      link: '/ia'
    },
    {
      id: 'contenidos',
      title: 'Contenidos',
      icon: '/images/logos/contenidos.png',
      color: '#ff5722',
      link: '/contenidos'
    }
  ];

  return (
    <ClusterCards
      title="Elige Tu Especialidad en Tech"
      cards={quickAccessCards}
      columns={4}
      variant="image"
    />
  );
}
