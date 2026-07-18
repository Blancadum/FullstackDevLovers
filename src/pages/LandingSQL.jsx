import React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { LandingPageWithSections } from '../components/LandingPageWithSections';
import { modulesWithLessons } from '../config/modulesConfig';

export const LandingSQL = () => {
  const breadcrumbs = useBreadcrumb();
  const sqlModule = modulesWithLessons.find(m => m.id === 'sql');

  const concepts = [
    {
      title: 'ACID Transactions',
      description: 'Garantiza integridad de datos: Atomicity, Consistency, Isolation, Durability',
      icon: '🔐'
    },
    {
      title: 'Normalización',
      description: 'Organiza datos eficientemente eliminando redundancia',
      icon: '📊'
    },
    {
      title: 'Índices y Optimización',
      description: 'Acceso rápido a datos incluso en millones de registros',
      icon: '⚡'
    },
    {
      title: 'Relaciones y Integridad',
      description: 'Foreign keys garantizan consistencia entre tablas',
      icon: '🔗'
    },
    {
      title: 'Escalabilidad Empresarial',
      description: 'Maneja terabytes de datos con millones de transacciones',
      icon: '📈'
    },
    {
      title: 'Seguridad Robusta',
      description: 'Control granular de permisos y encriptación de datos',
      icon: '🛡️'
    },
    {
      title: 'Backup y Recovery',
      description: 'Protege datos con backups automáticos y recuperación rápida',
      icon: '💾'
    },
    {
      title: 'Industria Estándar',
      description: 'SQL es el lenguaje universal para todas las bases de datos',
      icon: '🌍'
    }
  ];

  const navigationButtons = [
    {
      label: '← Volver a Git',
      link: '/git/landing',
      bgColor: '#ffebee',
      textColor: '#b71c1c',
      bgColorHover: '#ffcdd2',
      border: '2px solid #f05033'
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
      title="SQL - Bases de Datos"
      intro="SQL es el lenguaje universal para trabajar con bases de datos. Domina DDL, DML, JOINs, consultas complejas y administración de datos"
      sections={sqlModule.sections}
      concepts={concepts}
      breadcrumbs={breadcrumbs}
      themeColor="#4caf50"
      themeColorLight="#e8f5e9"
      themeColorBorder="2px solid #4caf50"
      navigationButtons={navigationButtons}
    />
  );
};
