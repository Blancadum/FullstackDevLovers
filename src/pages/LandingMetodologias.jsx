import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingMetodologias = () => {
  const breadcrumbs = useBreadcrumb();
  const metodologiasModule = modulesWithLessons.find(m => m.id === 'metodologias');

  const concepts = [
    {
      title: 'Iteración Continua',
      description: 'Desarrolla en ciclos cortos con retroalimentación constantemente',
      icon: '🔄'
    },
    {
      title: 'Respuesta al Cambio',
      description: 'Adapta el proyecto a cambios de requisitos y mercado',
      icon: '📈'
    },
    {
      title: 'Calidad de Código',
      description: 'Clean Code asegura mantenibilidad y escalabilidad a largo plazo',
      icon: '✨'
    },
    {
      title: 'Testing Constante',
      description: 'Unit, integration y acceptance tests previenen bugs',
      icon: '✅'
    },
    {
      title: 'Automatización Total',
      description: 'DevOps: CI/CD pipelines que despliegan código automáticamente',
      icon: '🤖'
    },
    {
      title: 'Comunicación Eficiente',
      description: 'Reuniones enfocadas y documentación clara para el equipo',
      icon: '💬'
    },
    {
      title: 'Cultura de Mejora',
      description: 'Retrospectivas frecuentes para aprender y crecer como equipo',
      icon: '📚'
    },
    {
      title: 'Entrega Rápida',
      description: 'Despliegas con confianza y frecuencia a producción',
      icon: '🚀'
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
      label: 'AWS →',
      link: '/aws/landing',
      bgColor: '#fff3e0',
      textColor: '#e65100',
      bgColorHover: '#ffe0b2',
      border: '2px solid #ff9800'
    }
  ];

  return (
    <LandingPageWithSections
      title="Metodologías y Procesos"
      intro="Aprende las metodologías, prácticas y procesos que usan las empresas profesionales. Agile, SCRUM, Clean Code, Testing y DevOps"
      sections={metodologiasModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#03a9f4"
      themeColorLight="#e1f5fe"
      themeColorBorder="2px solid #03a9f4"
      navigationButtons={navigationButtons}
    />
  );
};
