import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingAWS = () => {
  const breadcrumbs = useBreadcrumb();
  const awsModule = modulesWithLessons.find(m => m.id === 'aws');

  const concepts = [
    {
      title: 'Pay-As-You-Go',
      description: 'Paga solo lo que usas, sin compromisos ni cargos iniciales',
      icon: '💰'
    },
    {
      title: 'Global Infrastructure',
      description: 'Despliega en 30+ regiones para baja latencia y redundancia',
      icon: '🌐'
    },
    {
      title: 'Escalabilidad Automática',
      description: 'Tu aplicación crece o se reduce automáticamente según demanda',
      icon: '📈'
    },
    {
      title: 'Seguridad Multicapa',
      description: 'Protección de datos en tránsito y en reposo con encriptación',
      icon: '🛡️'
    },
    {
      title: 'Reliability & Durability',
      description: 'Diseñado para 99.99% uptime y máxima protección de datos',
      icon: '✅'
    },
    {
      title: 'Managed Services',
      description: 'AWS gestiona infraestructura, tú solo te enfocas en código',
      icon: '🎯'
    },
    {
      title: 'API-First',
      description: 'Todos los servicios accesibles vía API REST o CLI',
      icon: '🔌'
    },
    {
      title: 'Cost Optimization',
      description: 'Herramientas para monitorear y optimizar gastos en la nube',
      icon: '📉'
    }
  ];

  const navigationButtons = [
    {
      label: '← Volver a Proyecto',
      link: '/proyecto/landing',
      bgColor: '#e8f5e9',
      textColor: '#1b5e20',
      bgColorHover: '#c8e6c9',
      border: '2px solid #4caf50'
    },
    {
      label: 'Herramientas →',
      link: '/entornos/herramientas/landing',
      bgColor: '#ff9800',
      textColor: '#ffffff',
      bgColorHover: '#f57c00'
    }
  ];

  return (
    <LandingPageWithSections
      title="Cloud Computing with AWS"
      intro="Amazon Web Services es la plataforma cloud más utilizada del mundo. Aprende a desplegar, escalar y gestionar aplicaciones con los servicios más poderosos de la industria"
      sections={awsModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#ff9800"
      themeColorLight="#fff3e0"
      themeColorBorder="2px solid #ff9800"
      navigationButtons={navigationButtons}
    />
  );
};
