import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingJava = () => {
  const breadcrumbs = useBreadcrumb();
  const javaModule = modulesWithLessons.find(m => m.id === 'java');

  const concepts = [
    {
      title: 'Platform Independence',
      description: 'Write Once, Run Anywhere (WORA) en cualquier SO con JVM',
      icon: '🌍'
    },
    {
      title: 'Object-Oriented',
      description: 'Diseño orientado a objetos con abstracción y encapsulación',
      icon: '🏛️'
    },
    {
      title: 'Strong Typing',
      description: 'Type-safe programming que previene muchos errores en tiempo de compilación',
      icon: '🛡️'
    },
    {
      title: 'Automatic Memory Management',
      description: 'Garbage collection automático sin preocuparte por memoria',
      icon: '🧹'
    },
    {
      title: 'Multithreading',
      description: 'Soporte nativo para threads y programación concurrente',
      icon: '🔄'
    },
    {
      title: 'Rich Ecosystem',
      description: 'Maven, Gradle, Spring, Hibernate - herramientas maduras',
      icon: '🌲'
    },
    {
      title: 'Backward Compatible',
      description: 'Código de 20 años sigue funcionando en Java 21',
      icon: '🔙'
    },
    {
      title: 'Enterprise Ready',
      description: 'Usado en bancos, Google, Netflix, Amazon, etc.',
      icon: '💼'
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
      label: 'Spring Boot →',
      link: '/spring-boot/landing',
      bgColor: '#9c27b0',
      textColor: '#ffffff',
      bgColorHover: '#7b1fa2'
    }
  ];

  return (
    <LandingPageWithSections
      title="Programación en Java"
      intro="Java es el lenguaje de programación más popular en empresas. Aprende desde lo básico hasta programación avanzada con POO, lambdas y concurrencia"
      sections={javaModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#9c27b0"
      themeColorLight="#f3e5f5"
      themeColorBorder="2px solid #9c27b0"
      navigationButtons={navigationButtons}
    />
  );
};
