import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO } from '../components';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingNodejsNPM = () => {
  const landingTheme = getThemeByModule('nodejs');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'NPM y Gestión de Paquetes - Node Package Manager en Profundidad',
    'description': 'Domina NPM: instalación de paquetes, gestión de dependencias, package.json, scripts, versionamiento semántico y mejores prácticas.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/backend/nodejs/npm'
  };

  const faqData = [
    {
      question: '¿Qué es NPM?',
      answer: 'NPM (Node Package Manager) es el gestor de paquetes para Node.js y JavaScript. Permite descargar, gestionar e instalar más de 1 millón de paquetes reutilizables que acelera tu desarrollo.'
    },
    {
      question: '¿Cuál es la diferencia entre dependencias y devDependencies?',
      answer: 'Las dependencias (dependencies) son necesarias para que tu aplicación funcione en producción. Las devDependencies son herramientas de desarrollo como testing frameworks o bundlers que solo necesitas durante el desarrollo.'
    },
    {
      question: '¿Qué es package.json y para qué sirve?',
      answer: 'package.json es el archivo que describe tu proyecto Node.js. Contiene metadatos, lista de dependencias, scripts personalizados, versionamiento y configuración específica de NPM.'
    },
    {
      question: '¿Qué es versionamiento semántico?',
      answer: 'Versionamiento semántico (MAJOR.MINOR.PATCH) es una convención para versionar librerías. MAJOR para cambios incompatibles, MINOR para nuevas funcionalidades compatibles, PATCH para bugfixes.'
    },
    {
      question: '¿Cuándo usar ^ y ~ en package.json?',
      answer: 'El operador ^ permite actualizaciones menores y patches (1.2.0 → 1.9.9). El operador ~ solo permite patches (1.2.0 → 1.2.9). Ambos tienen riesgos, considera usar versiones exactas en producción.'
    },
    {
      question: '¿Qué es npm install vs npm ci?',
      answer: 'npm install es flexible y actualiza versiones. npm ci (continuous integration) instala exactamente las versiones en package-lock.json, ideal para entornos de producción y CI/CD.'
    }
  ];

  return (
    <>
      <SEO
        title="NPM y Gestión de Paquetes - Node Package Manager | Guía Completa"
        description="Domina NPM: instalación, dependencias, package.json, scripts, versionamiento y mejores prácticas de gestión de paquetes en Node.js."
        keywords="npm, node package manager, dependencias, package.json, package-lock.json, versionamiento semántico"
        url="https://fullstackdevlovers.com/backend/nodejs/npm"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="nodejs-npm-landing">
        {/* Hero Section */}
        <LandingHero
          title="NPM y Gestión de Paquetes"
          subtitle="Domina Node Package Manager"
          description="NPM (Node Package Manager) es el ecosistema de paquetes más grande del mundo, con más de 1 millón de librerías. Es el gestor oficial de paquetes para Node.js y la herramienta esencial para cualquier desarrollador JavaScript moderno. Gestiona dependencias, versionamiento y automatiza tareas."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Explorar NPM →"
          primaryButtonLink="#learning-topics"
          secondaryButtonText="Ver FAQ"
          secondaryButtonLink="#faq"
          imageUrl="/src/assets/images/logos/nodejs.png"
          imageAlt="NPM Logo"
        />

        {/* Content Section */}
        <section className="nodejs-npm-content">
          <div className="content-container">
            <h2>¿Qué es NPM?</h2>
            <p className="intro-text">
              NPM (Node Package Manager) es el ecosistema de paquetes más grande del mundo, con más de 1 millón de librerías.
              Es el gestor oficial de paquetes para Node.js y la herramienta esencial para cualquier desarrollador JavaScript moderno.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>1M+ Paquetes</h3>
                <p>Más de un millón de librerías reutilizables para acelerar tu desarrollo</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3>Gestión de Dependencias</h3>
                <p>Instala, actualiza y gestiona dependencias de tu proyecto automáticamente</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Scripts Personalizados</h3>
                <p>Define y ejecuta scripts personalizados para automatizar tareas</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📌</div>
                <h3>Versionamiento Semántico</h3>
                <p>Controla qué versiones de paquetes tu proyecto puede usar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section id="learning-topics" className="nodejs-npm-learning">
          <div className="content-container">
            <h2>Conceptos Clave de NPM</h2>
            <p className="section-subtitle">Domina estos temas para usar NPM profesionalmente</p>

            <div className="topics-list">
              <div className="topic-item">
                <div className="topic-number">1</div>
                <div className="topic-content">
                  <h3>Instalación y Configuración</h3>
                  <p>Cómo instalar Node.js con NPM, configurar el registro y tu perfil</p>
                </div>
              </div>
              <div className="topic-item">
                <div className="topic-number">2</div>
                <div className="topic-content">
                  <h3>package.json - El Corazón del Proyecto</h3>
                  <p>Entiende la estructura del archivo package.json y sus campos principales</p>
                </div>
              </div>
              <div className="topic-item">
                <div className="topic-number">3</div>
                <div className="topic-content">
                  <h3>Dependencias vs DevDependencies</h3>
                  <p>Diferencia entre dependencias de producción y desarrollo</p>
                </div>
              </div>
              <div className="topic-item">
                <div className="topic-number">4</div>
                <div className="topic-content">
                  <h3>NPM Scripts - Automatización</h3>
                  <p>Crea scripts personalizados para automatizar tareas comunes</p>
                </div>
              </div>
              <div className="topic-item">
                <div className="topic-number">5</div>
                <div className="topic-content">
                  <h3>Versionamiento Semántico</h3>
                  <p>Entiende MAJOR.MINOR.PATCH y cómo funciona ^, ~, exactos</p>
                </div>
              </div>
              <div className="topic-item">
                <div className="topic-number">6</div>
                <div className="topic-content">
                  <h3>Seguridad y Auditoría</h3>
                  <p>Cómo mantener tus paquetes seguros y actualizar vulnerabilidades</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="nodejs-npm-faq">
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
        <section className="nodejs-npm-cta">
          <div className="content-container">
            <h2>Domina NPM Profesionalmente</h2>
            <p>Gestiona dependencias y automatiza tu flujo de trabajo como un experto</p>
            <div className="cta-buttons">
              <Link to="/backend/nodejs/npm" className="btn-primary-large">
                Ir a Lecciones →
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
