import React from 'react';
import { LessonLayout } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

// Contenido de lecciones de Angular
const ANGULAR_LESSONS = {
  '/frontend/angular/introduccion': {
    title: 'Introducción a Angular',
    description: 'Aprende los fundamentos de Angular',
    seoTitle: 'Introducción a Angular - Guía Completa',
    seoDescription: 'Fundamentos de Angular: historia, características, instalación y primer proyecto',
    seoKeywords: 'angular, introducción, framework, spa, typescript',
    content: (
      <>
        <p>
          Angular es un framework full-featured desarrollado por Google para construir aplicaciones web profesionales.
          Proporciona herramientas completas para desarrollar SPAs escalables.
        </p>
        <h2>¿Qué es Angular?</h2>
        <p>
          Angular es un framework TypeScript que te permite crear aplicaciones web dinámicas. Con arquitectura modular,
          inyección de dependencias integrada y herramientas potentes, Angular es ideal para proyectos empresariales complejos.
        </p>
        <h2>Características principales</h2>
        <ul>
          <li><strong>TypeScript nativo:</strong> Seguridad de tipos integrada</li>
          <li><strong>Routing completo:</strong> Router profesional incluido</li>
          <li><strong>Formularios reactivos:</strong> Validación avanzada</li>
          <li><strong>RxJS:</strong> Programación reactiva con Observables</li>
          <li><strong>CLI potente:</strong> Angular CLI para productividad</li>
        </ul>
      </>
    )
  },
  '/frontend/angular/componentes': {
    title: 'Componentes y Templates',
    description: 'Estructuras base de Angular',
    seoTitle: 'Componentes en Angular',
    seoDescription: 'Cómo crear y usar componentes, templates y property binding',
    seoKeywords: 'angular, componentes, templates, decorators',
    content: (
      <>
        <p>Los componentes son la unidad básica de Angular. Cada componente encapsula lógica y presentación.</p>
        <h2>¿Qué es un Componente?</h2>
        <p>
          Un componente en Angular es una clase TypeScript decorada con @Component que define una vista (template HTML)
          y lógica asociada. Los componentes son reutilizables y pueden estar anidados.
        </p>
        <h2>Estructura de un Componente</h2>
        <ul>
          <li>Clase con lógica</li>
          <li>Decorador @Component</li>
          <li>Template HTML</li>
          <li>Estilos CSS</li>
        </ul>
      </>
    )
  },
  '/frontend/angular/data-binding': {
    title: 'Data Binding',
    description: 'Vinculación de datos en Angular',
    seoTitle: 'Data Binding en Angular',
    seoDescription: 'Interpolación, property binding, event binding y two-way binding',
    seoKeywords: 'angular, data binding, property binding, two-way',
    content: (
      <>
        <p>Data binding permite sincronizar automáticamente datos entre el componente y el template.</p>
        <h2>Tipos de Data Binding</h2>
        <ul>
          <li><strong>Interpolation:</strong> {'{{ variable }}'}</li>
          <li><strong>Property Binding:</strong> [property]="value"</li>
          <li><strong>Event Binding:</strong> (event)="handler()"</li>
          <li><strong>Two-Way Binding:</strong> [(ngModel)]="property"</li>
        </ul>
      </>
    )
  },
  '/frontend/angular/servicios': {
    title: 'Servicios en Angular',
    description: 'Compartir lógica entre componentes',
    seoTitle: 'Servicios en Angular',
    seoDescription: 'Inyección de dependencias y reutilización de código',
    seoKeywords: 'angular, servicios, inyección dependencias, DI',
    content: (
      <>
        <p>Los servicios en Angular permiten compartir lógica entre múltiples componentes.</p>
        <h2>¿Qué es un Servicio?</h2>
        <p>
          Un servicio es una clase TypeScript que encapsula lógica reutilizable. Se inyecta en componentes que lo necesitan
          a través de Angular Dependency Injection.
        </p>
        <h2>Casos de uso</h2>
        <ul>
          <li>Comunicación con APIs</li>
          <li>Almacenamiento de datos</li>
          <li>Autenticación</li>
          <li>Validaciones compartidas</li>
        </ul>
      </>
    )
  },
  '/frontend/angular/dependency-injection': {
    title: 'Inyección de Dependencias',
    description: 'Sistema DI de Angular',
    seoTitle: 'Inyección de Dependencias en Angular',
    seoDescription: 'Cómo funciona el sistema DI y mejores prácticas',
    seoKeywords: 'angular, dependency injection, di, providers',
    content: (
      <>
        <p>Angular proporciona un sistema completo de inyección de dependencias (DI).</p>
        <h2>¿Por qué Inyección de Dependencias?</h2>
        <p>
          DI permite desacoplar componentes, facilita testing, y mejora la mantenibilidad del código.
          Angular maneja automáticamente las dependencias.
        </p>
        <h2>Cómo funciona</h2>
        <ul>
          <li>Definir proveedores en módulos</li>
          <li>Inyectar en componentes vía constructor</li>
          <li>Angular resuelve las dependencias automáticamente</li>
        </ul>
      </>
    )
  },
  '/frontend/angular/httpclient': {
    title: 'HttpClient y APIs',
    description: 'Comunicación con servidores',
    seoTitle: 'HttpClient en Angular',
    seoDescription: 'Hacer peticiones HTTP a APIs REST',
    seoKeywords: 'angular, httpclient, api, rest, requests',
    content: (
      <>
        <p>HttpClient es el servicio de Angular para hacer peticiones HTTP a APIs.</p>
        <h2>Características de HttpClient</h2>
        <ul>
          <li>Métodos para GET, POST, PUT, DELETE</li>
          <li>Soporte para Observables y Promises</li>
          <li>Interceptores para transformar peticiones</li>
          <li>Manejo de errores integrado</li>
        </ul>
        <h2>Usar HttpClient</h2>
        <p>
          HttpClient se inyecta en servicios. Retorna Observables que se suscriben en componentes
          para manejar respuestas.
        </p>
      </>
    )
  }
};

export function LessonAngularGeneric() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const { pathname } = window.location;
  
  const lesson = ANGULAR_LESSONS[pathname];

  if (!lesson) {
    return <div>Lección no encontrada</div>;
  }

  return (
    <LessonLayout
      title={lesson.title}
      description={lesson.description}
      breadcrumbs={breadcrumbs}
      nextLesson={nav?.next}
      previousLesson={nav?.previous}
      seoTitle={lesson.seoTitle}
      seoDescription={lesson.seoDescription}
      seoKeywords={lesson.seoKeywords}
      url={`https://fullstackdevlovers.com${pathname}`}
    >
      {lesson.content}
    </LessonLayout>
  );
}
