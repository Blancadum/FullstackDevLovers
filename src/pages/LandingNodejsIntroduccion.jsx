import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingNodejsIntroduccion = () => {
  const theme = getTheme('nodejs');
  const landingTheme = getThemeByModule('nodejs');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Introducción a Node.js - Fundamentos de JavaScript en el Servidor',
    'description': 'Aprende los fundamentos de Node.js: qué es, por qué es importante, diferencias con el navegador, y primeros pasos en el desarrollo backend con JavaScript.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/backend/nodejs/introduccion',
    'hasPart': [
      {
        '@type': 'LearningResource',
        'name': 'Introducción a Node.js',
        'url': 'https://fullstackdevlovers.com/backend/nodejs/introduccion'
      }
    ]
  };

  const faqData = [
    {
      question: '¿Qué es Node.js exactamente?',
      answer: 'Node.js es un entorno de ejecución (runtime) de JavaScript basado en el motor V8 de Google. Te permite ejecutar código JavaScript fuera del navegador, principalmente en el servidor, para construir aplicaciones backend, APIs, y herramientas de línea de comandos.'
    },
    {
      question: '¿Cuál es la diferencia entre Node.js y JavaScript en el navegador?',
      answer: 'Ambos usan JavaScript, pero Node.js no tiene acceso al DOM ni a APIs del navegador (como document, window). En cambio, Node.js tiene acceso al sistema de archivos, procesos del SO, y puertos de red. Node.js es ideal para backend; el navegador para frontend.'
    },
    {
      question: '¿Por qué usar JavaScript en el backend?',
      answer: 'Usar JavaScript en frontend y backend (Full-Stack) permite: reutilizar código, un solo lenguaje para aprender, isomorfismo (código que corre en ambos lados), comunidad grande, y ecosistema NPM masivo con 1+ millón de paquetes.'
    },
    {
      question: '¿Necesito ser experto en JavaScript para aprender Node.js?',
      answer: 'No, pero sí necesitas sólidos fundamentos de JavaScript: variables, funciones, callbacks, async/await y Promises. Si no dominas JavaScript, será muy difícil entender Node.js. Recomendamos aprender JavaScript antes.'
    },
    {
      question: '¿Node.js es seguro para usar en producción?',
      answer: 'Sí, Node.js es usado en producción por empresas como Netflix, Uber, Airbnb y LinkedIn. Es estable, maduro, y tiene versiones LTS (Long Term Support) con soporte garantizado. Es importante seguir mejores prácticas y mantener Node.js actualizado.'
    },
    {
      question: '¿Cuál es la curva de aprendizaje de Node.js?',
      answer: 'Si tienes JavaScript fuerte, Node.js conceptualmente es fácil (baja-media curva). Los primeros pasos toman 1-2 semanas. Sin embargo, dominar arquitectura backend profesional toma meses. La práctica constante es clave.'
    }
  ];

  const introductionLessons = [
    {
      id: 'intro-nodejs',
      title: 'Introducción a Node.js',
      description: 'Conceptos fundamentales: qué es, arquitectura, y por qué es importante',
      icon: '⚙️',
      color: '#61dafb',
      link: '/backend/nodejs/introduccion'
    },
    {
      id: 'npm-packages',
      title: 'NPM y Gestión de Paquetes',
      description: 'Cómo usar NPM, instalar dependencias, y gestionar package.json',
      icon: '📦',
      color: '#cb3837',
      link: '/backend/nodejs/npm'
    },
    {
      id: 'modules-require',
      title: 'Módulos y Require/Import',
      description: 'Sistema de módulos CommonJS y ES Modules en Node.js',
      icon: '🔗',
      color: '#68a063',
      link: '/backend/nodejs/modulos'
    },
    {
      id: 'event-loop',
      title: 'Event Loop y Asincronía',
      description: 'Cómo funciona el event loop y la programación asincrónica',
      icon: '🔄',
      color: '#f0db4f',
      link: '/backend/nodejs/event-loop'
    }
  ];

  return (
    <>
      <SEO
        title="Introducción a Node.js - Fundamentos de Backend JavaScript | Guía Completa"
        description="Aprende los fundamentos de Node.js: qué es, cómo funciona, diferencias con el navegador, y primeros pasos en el desarrollo backend con JavaScript."
        keywords="node.js, introducción, fundamentos, javascript, backend, runtime, v8, conceptos básicos"
        url="https://fullstackdevlovers.com/backend/nodejs/introduccion"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="nodejs-intro-landing">
        {/* Hero Section */}
        <LandingHero
          title="Introducción a Node.js"
          subtitle="Fundamentos de JavaScript en el Servidor"
          description="Node.js es un entorno de ejecución que permite ejecutar código JavaScript fuera del navegador. Está basado en el motor V8 de Google y permite crear aplicaciones backend completas, APIs REST, microservicios y herramientas de línea de comandos usando únicamente JavaScript."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Explorar Fundamentos →"
          primaryButtonLink="#learning-topics"
          secondaryButtonText="Preguntas Frecuentes"
          secondaryButtonLink="#faq"
          imageUrl="/src/assets/images/logos/nodejs.png"
          imageAlt="Node.js Logo"
        />

        {/* What is Node.js Section */}
        <section className="nodejs-intro-content">
          <div className="content-container">
            <h2>¿Qué es Node.js?</h2>
            <p className="intro-text">
              Node.js es un entorno de ejecución (runtime) que permite ejecutar código JavaScript fuera del navegador.
              Está basado en el motor V8 de Google y permite a los desarrolladores JavaScript crear aplicaciones backend completas,
              APIs REST, microservicios, y herramientas de línea de comandos usando únicamente JavaScript.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Event-Driven</h3>
                <p>Arquitectura basada en eventos que permite manejar operaciones I/O de forma no-bloqueante</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Altamente Performante</h3>
                <p>Motor V8 compilado a código máquina para máxima velocidad y eficiencia</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Ecosistema NPM</h3>
                <p>Acceso a 1+ millón de paquetes para acelerar tu desarrollo</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Async/Await</h3>
                <p>Manejo elegante de operaciones asincrónicas con async/await</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section id="learning-topics" className="nodejs-intro-learning">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="section-subtitle">Domina los fundamentos de Node.js con estos temas esenciales</p>

            <div className="learning-grid">
              {introductionLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={lesson.link}
                  className="learning-card"
                  style={{ '--card-color': lesson.color }}
                >
                  <div className="learning-icon">{lesson.icon}</div>
                  <div className="learning-content">
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                  </div>
                  <div className="learning-arrow">→</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="nodejs-intro-comparison">
          <div className="content-container">
            <h2>¿Por Qué Aprender Node.js?</h2>
            <p className="section-subtitle">Ventajas clave de Node.js para desarrollo backend</p>

            <div className="comparison-table">
              <div className="comparison-row">
                <div className="comparison-feature">Un solo lenguaje</div>
                <p>Usa JavaScript en frontend y backend para compartir código y lógica</p>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">No-Bloqueante</div>
                <p>Maneja miles de conexiones simultáneas sin bloquear operaciones</p>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Comunidad Activa</div>
                <p>Millones de desarrolladores y un ecosistema NPM masivo</p>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Escalable</div>
                <p>Diseñado para aplicaciones de gran escala con bajo consumo de memoria</p>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Rápido de Aprender</div>
                <p>Si dominas JavaScript, Node.js es relativamente fácil de aprender</p>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Usado en Producción</div>
                <p>Netflix, Uber, Airbnb, LinkedIn y miles de empresas usan Node.js</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="nodejs-intro-faq">
          <div className="content-container">
            <h2>Preguntas Frecuentes</h2>
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="nodejs-intro-cta">
          <div className="content-container">
            <h2>Comienza Tu Viaje con Node.js</h2>
            <p>Domina los fundamentos y prepárate para crear aplicaciones backend profesionales</p>
            <div className="cta-buttons">
              <Link to="/backend/nodejs/introduccion" className="btn-primary-large">
                Iniciar Lecciones →
              </Link>
              <Link to="/backend/nodejs" className="btn-secondary-large">
                Ver Todas las Secciones
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
