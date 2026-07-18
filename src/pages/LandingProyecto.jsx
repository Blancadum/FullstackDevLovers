import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingProyecto = () => {
  const breadcrumbs = useBreadcrumb();
  const proyectoModule = modulesWithLessons.find(m => m.id === 'proyecto');

  const concepts = [
    {
      title: 'Integración Full-Stack',
      description: 'Combina Backend Java, Spring Boot, SQL, Git y metodologías',
      icon: '⚙️'
    },
    {
      title: 'Proyecto Real',
      description: 'Construcción de una aplicación completa usable en producción',
      icon: '🚀'
    },
    {
      title: 'Práctica Profesional',
      description: 'Sigue las prácticas empresariales reales: testing, CI/CD, deployment',
      icon: '💼'
    },
    {
      title: 'Portfolio Profesional',
      description: 'Tu TFC es tu proyecto más importante para mostrar a empleadores',
      icon: '🎓'
    },
    {
      title: 'Gestión Ágil',
      description: 'Planifica, organiza y ejecuta con metodología SCRUM',
      icon: '📋'
    },
    {
      title: 'Desde Cero',
      description: 'Desde planificación hasta despliegue en producción',
      icon: '🔧'
    },
    {
      title: 'Ejemplos Viables',
      description: '12+ ideas de proyectos completos y desarrollables',
      icon: '💡'
    },
    {
      title: 'Mentoría Completa',
      description: 'Guía paso a paso en cada fase del proyecto',
      icon: '📚'
    }
  ];

  const navigationButtons = [
    {
      label: '← Volver a Metodologías',
      link: '/metodologias/landing',
      bgColor: '#e1f5fe',
      textColor: '#01579b',
      bgColorHover: '#b3e5fc',
      border: '2px solid #03a9f4'
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
      title="Trabajo Fin de Ciclo - TFC"
      intro="Tu proyecto integrador: construye una aplicación completa combinando Java, Spring Boot, SQL, Git y metodologías profesionales"
      sections={proyectoModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#2196f3"
      themeColorLight="#e3f2fd"
      themeColorBorder="2px solid #2196f3"
      navigationButtons={navigationButtons}
    />
  );
};
