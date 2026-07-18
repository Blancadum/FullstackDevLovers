import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingDocker = () => {
  const breadcrumbs = useBreadcrumb();
  const dockerModule = modulesWithLessons.find(m => m.id === 'docker');

  const concepts = [
    {
      title: 'Consistencia de Entornos',
      description: 'Lo que funciona en desarrollo funciona en producción',
      icon: '✅'
    },
    {
      title: 'Portabilidad',
      description: 'Ejecuta contenedores en cualquier máquina con Docker instalado',
      icon: '🚚'
    },
    {
      title: 'Aislamiento',
      description: 'Procesos aislados sin interferencia entre aplicaciones',
      icon: '🔒'
    },
    {
      title: 'Escalabilidad',
      description: 'Despliega miles de contenedores en segundos',
      icon: '📈'
    },
    {
      title: 'Eficiencia de Recursos',
      description: 'Más ligero que máquinas virtuales, mejor que procesos locales',
      icon: '⚙️'
    },
    {
      title: 'Reproducibilidad',
      description: 'Exactamente el mismo entorno cada vez que ejecutas',
      icon: '🔄'
    },
    {
      title: 'Integración CI/CD',
      description: 'Se integra perfectamente en pipelines automatizados',
      icon: '🚀'
    },
    {
      title: 'Comunidad Masiva',
      description: 'Millones de imágenes prehechas en Docker Hub',
      icon: '🌟'
    }
  ];

  const navigationButtons = [
    {
      label: '← Volver a AWS',
      link: '/aws/landing',
      bgColor: '#fff3e0',
      textColor: '#e65100',
      bgColorHover: '#ffe0b2',
      border: '2px solid #ff9800'
    },
    {
      label: 'Kubernetes →',
      link: '/kubernetes/landing',
      bgColor: '#2196f3',
      textColor: '#ffffff',
      bgColorHover: '#1976d2'
    }
  ];

  return (
    <LandingPageWithSections
      title="Containerización con Docker"
      intro="Docker es la plataforma de containerización más popular del mundo. Aprende a empaquetar, distribuir y ejecutar aplicaciones en contenedores seguros y eficientes"
      sections={dockerModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#2196f3"
      themeColorLight="#e3f2fd"
      themeColorBorder="2px solid #2196f3"
      navigationButtons={navigationButtons}
    />
  );
};
