import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingGit = () => {
  const breadcrumbs = useBreadcrumb();
  const gitModule = modulesWithLessons.find(m => m.id === 'git');

  const concepts = [
    {
      title: 'Versionado Distribuido',
      description: 'Cada desarrollador tiene un repositorio completo, sin punto único de fallo',
      icon: '🔄'
    },
    {
      title: 'Ramificación Ligera',
      description: 'Crea ramas en milisegundos para trabajar en features aisladas',
      icon: '🌿'
    },
    {
      title: 'Historial Completo',
      description: 'Viaja en el tiempo del código, revisa cualquier punto en la historia',
      icon: '⏮️'
    },
    {
      title: 'Colaboración Eficiente',
      description: 'Múltiples desarrolladores trabajando sin conflictos',
      icon: '👥'
    },
    {
      title: 'Seguridad Intrínseca',
      description: 'Cada commit es criptográficamente seguro e inmutable',
      icon: '🔐'
    },
    {
      title: 'Workflows Flexibles',
      description: 'Adapt Git a tu equipo: GitFlow, GitHub Flow, trunk-based, etc.',
      icon: '⚙️'
    },
    {
      title: 'CI/CD Integration',
      description: 'Se integra con cualquier pipeline de automatización',
      icon: '🚀'
    },
    {
      title: 'Open Source Gold Standard',
      description: 'Usado en 90%+ de proyectos open source del mundo',
      icon: '⭐'
    }
  ];

  const navigationButtons = [
    {
      label: '← Volver a SQL',
      link: '/sql/landing',
      bgColor: '#e8f5e9',
      textColor: '#1b5e20',
      bgColorHover: '#c8e6c9',
      border: '2px solid #4caf50'
    },
    {
      label: 'Java →',
      link: '/java/landing',
      bgColor: '#f3e5f5',
      textColor: '#4a148c',
      bgColorHover: '#e1bee7',
      border: '2px solid #9c27b0'
    }
  ];

  return (
    <LandingPageWithSections
      title="Control de Versiones con Git"
      intro="Git es el sistema de control de versiones más usado en el mundo. Domina los fundamentos, colaboración remota y prácticas profesionales"
      sections={gitModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#f05033"
      themeColorLight="#ffebee"
      themeColorBorder="2px solid #f05033"
      navigationButtons={navigationButtons}
    />
  );
};
