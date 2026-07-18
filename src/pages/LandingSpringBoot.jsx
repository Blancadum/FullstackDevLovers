import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingSpringBoot = () => {
  const breadcrumbs = useBreadcrumb();
  const springBootModule = modulesWithLessons.find(m => m.id === 'spring-boot');

  const concepts = [
    {
      title: 'Convention over Configuration',
      description: 'Spring Boot asume valores por defecto, tú solo configurar lo especial',
      icon: '⚡'
    },
    {
      title: 'Dependency Injection',
      description: 'Inyección de dependencias automática, sin new ni manejo manual',
      icon: '🔗'
    },
    {
      title: 'Embedded Server',
      description: 'Tomcat incluido, no necesitas servidor externo',
      icon: '🚀'
    },
    {
      title: 'Auto Configuration',
      description: 'Configura automáticamente beans según classpath',
      icon: '🤖'
    },
    {
      title: 'Starter Dependencies',
      description: 'Dependencias pre-configuradas para diferentes features',
      icon: '📦'
    },
    {
      title: 'Production Ready',
      description: 'Metrics, health checks, logging ya incluidos',
      icon: '📊'
    },
    {
      title: 'Microservices Ready',
      description: 'Perfecto para arquitecturas microservicios',
      icon: '🏗️'
    },
    {
      title: 'Cloud Native',
      description: 'Optimizado para despliegue en cloud y contenedores',
      icon: '☁️'
    }
  ];

  const navigationButtons = [
    {
      label: '← Volver a Java',
      link: '/java/landing',
      bgColor: '#f3e5f5',
      textColor: '#4a148c',
      bgColorHover: '#e1bee7',
      border: '2px solid #9c27b0'
    },
    {
      label: 'Proyecto →',
      link: '/proyecto/landing',
      bgColor: '#2196f3',
      textColor: '#ffffff',
      bgColorHover: '#1976d2'
    }
  ];

  return (
    <LandingPageWithSections
      title="Spring Boot - Desarrollo Web Profesional"
      intro="Spring Boot simplifica el desarrollo de aplicaciones Java empresariales. Aprende a construir APIs REST robustas, manejar bases de datos y seguridad"
      sections={springBootModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#2ecc71"
      themeColorLight="#e8f5e9"
      themeColorBorder="2px solid #27ae60"
      navigationButtons={navigationButtons}
    />
  );
};
