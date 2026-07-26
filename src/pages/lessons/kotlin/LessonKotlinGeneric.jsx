import React from 'react';
import { LessonLayout } from '../../../components';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

// Contenido de lecciones de Kotlin
const KOTLIN_LESSONS = {
  '/backend/kotlin/introduccion': {
    title: 'Introducción a Kotlin',
    description: 'Aprende los fundamentos de Kotlin',
    seoTitle: 'Introducción a Kotlin - Guía Completa',
    seoDescription: 'Fundamentos de Kotlin: sintaxis, ventajas, historia y cómo empezar',
    seoKeywords: 'kotlin, introducción, jvm, lenguaje, programación',
    content: (
      <>
        <p>
          Kotlin es un lenguaje de programación moderno que fue creado por JetBrains. Está diseñado para ser más conciso, seguro y productivo que Java.
        </p>
        <h2>¿Qué es Kotlin?</h2>
        <p>
          Kotlin es un lenguaje de tipado estático que corre en la máquina virtual de Java (JVM). Fue oficialmente anunciado como lenguaje recomendado por Google para desarrollo Android en 2017.
        </p>
        <h2>Ventajas principales</h2>
        <ul>
          <li><strong>Null Safety:</strong> Elimina NullPointerException</li>
          <li><strong>Conciso:</strong> Menos boilerplate que Java</li>
          <li><strong>Interoperable:</strong> Funciona con código Java</li>
          <li><strong>Corrutinas:</strong> Asincronía nativa</li>
          <li><strong>Extensiones:</strong> Extiende clases sin herencia</li>
        </ul>
      </>
    )
  },
  '/backend/kotlin/kotlin-vs-java': {
    title: 'Kotlin vs Java',
    description: 'Comparación entre Kotlin y Java',
    seoTitle: 'Kotlin vs Java - Diferencias y Ventajas',
    seoDescription: 'Comparación detallada: sintaxis, seguridad, productividad',
    seoKeywords: 'kotlin, java, comparación, diferencias',
    content: (
      <>
        <p>Aunque Kotlin corre en la JVM como Java, hay diferencias significativas en su diseño.</p>
        <h2>Sintaxis</h2>
        <p>Kotlin es más conciso. Una clase simple en Kotlin es mucho más corta que en Java.</p>
        <h2>Null Safety</h2>
        <p>Java permite null en cualquier variable, causando NullPointerException. Kotlin diferencia entre tipos nullable y non-nullable.</p>
      </>
    )
  },
  '/backend/kotlin/sintaxis': {
    title: 'Sintaxis Básica',
    description: 'Aprende la sintaxis fundamental de Kotlin',
    seoTitle: 'Sintaxis Básica de Kotlin',
    seoDescription: 'Variables, tipos, funciones y control de flujo',
    seoKeywords: 'kotlin, sintaxis, variables, funciones',
    content: (
      <>
        <p>Kotlin tiene una sintaxis limpia y moderna.</p>
        <h2>Variables</h2>
        <p>Kotlin usa val para variables inmutables y var para mutables.</p>
        <h2>Funciones</h2>
        <p>Las funciones en Kotlin son de primera clase y pueden ser asignadas a variables.</p>
      </>
    )
  },
  '/backend/kotlin/null-safety': {
    title: 'Null Safety',
    description: 'El sistema de tipos de Kotlin para evitar null',
    seoTitle: 'Null Safety en Kotlin',
    seoDescription: 'Cómo Kotlin elimina NullPointerException',
    seoKeywords: 'kotlin, null, safety, nullable',
    content: (
      <>
        <p>Null Safety es una de las características más poderosas de Kotlin.</p>
        <h2>Tipos Nullable</h2>
        <p>El signo ? indica que una variable puede ser null.</p>
        <h2>Elvis Operator</h2>
        <p>El operador ?: proporciona un valor por defecto cuando la variable es null.</p>
      </>
    )
  },
  '/backend/kotlin/extension-functions': {
    title: 'Funciones de Extensión',
    description: 'Extiende clases existentes sin herencia',
    seoTitle: 'Funciones de Extensión en Kotlin',
    seoDescription: 'Cómo añadir métodos a clases existentes',
    seoKeywords: 'kotlin, extensiones, functions, clases',
    content: (
      <>
        <p>Las funciones de extensión permiten añadir métodos a una clase sin herencia.</p>
        <h2>Sintaxis</h2>
        <p>Se definen fuera de la clase con la sintaxis: fun NombreClase.nombreMetodo()</p>
      </>
    )
  },
  '/backend/kotlin/lambdas': {
    title: 'Lambdas y Funciones Literales',
    description: 'Funciones anónimas y expresiones lambda',
    seoTitle: 'Lambdas en Kotlin',
    seoDescription: 'Funciones anónimas y programación funcional',
    seoKeywords: 'kotlin, lambda, funcional, anonymous',
    content: (
      <>
        <p>Las lambdas son funciones anónimas que puedes pasar como argumentos.</p>
        <h2>Sintaxis Lambda</h2>
        <p>Se encierran en llaves: {'{ parametros -> cuerpo }'}</p>
      </>
    )
  },
  '/backend/kotlin/corrutinas': {
    title: 'Corrutinas',
    description: 'Programación asincrónica en Kotlin',
    seoTitle: 'Corrutinas en Kotlin',
    seoDescription: 'Concurrencia ligera y asincronía',
    seoKeywords: 'kotlin, coroutines, async, concurrency',
    content: (
      <>
        <p>Las corrutinas son una forma ligera de manejar tareas asincrónicas.</p>
        <h2>Launch vs Async</h2>
        <p>launch no retorna valor, async sí.</p>
      </>
    )
  },
  '/backend/kotlin/clases-objetos': {
    title: 'Clases y Objetos',
    description: 'POO en Kotlin',
    seoTitle: 'Clases y Objetos en Kotlin',
    seoDescription: 'Programación orientada a objetos',
    seoKeywords: 'kotlin, clases, objetos, oop',
    content: (
      <>
        <p>Kotlin es un lenguaje orientado a objetos con características funcionales.</p>
        <h2>Clases</h2>
        <p>Las clases en Kotlin son más simples que en Java.</p>
      </>
    )
  },
  '/backend/kotlin/scope-functions': {
    title: 'Scope Functions',
    description: 'Funciones de alcance: let, run, with, apply, also',
    seoTitle: 'Scope Functions en Kotlin',
    seoDescription: 'let, run, with, apply, also explicados',
    seoKeywords: 'kotlin, scope, functions, let, run',
    content: (
      <>
        <p>Las scope functions permiten ejecutar código en el contexto de un objeto.</p>
        <h2>Tipos de Scope Functions</h2>
        <ul>
          <li>let: acceso como parámetro</li>
          <li>run: acceso como this</li>
          <li>with: acceso como this (sin retorno)</li>
          <li>apply: retorna el objeto</li>
          <li>also: retorna el objeto (lado a lado)</li>
        </ul>
      </>
    )
  },
  '/backend/kotlin/dsls': {
    title: 'DSLs en Kotlin',
    description: 'Domain Specific Languages',
    seoTitle: 'DSLs en Kotlin',
    seoDescription: 'Crear lenguajes específicos de dominio',
    seoKeywords: 'kotlin, dsl, domain, language',
    content: (
      <>
        <p>Kotlin permite crear DSLs (Domain Specific Languages) de forma elegante.</p>
        <h2>Builders</h2>
        <p>Los builders son patrones DSL comunes en Kotlin.</p>
      </>
    )
  }
};

export function LessonKotlinGeneric() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const { pathname } = window.location;
  
  const lesson = KOTLIN_LESSONS[pathname];

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
