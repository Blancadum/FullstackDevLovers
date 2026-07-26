import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO } from '../components';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingNodejsModulos = () => {
  const landingTheme = getThemeByModule('nodejs');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqData = [
    { question: '¿Qué es un módulo en Node.js?', answer: 'Un módulo es un archivo JavaScript reutilizable que exporta funcionalidad. Node.js usa sistema de módulos CommonJS (require/module.exports) o ES Modules (import/export).' },
    { question: '¿Diferencia entre require y import?', answer: 'require es CommonJS síncrono. import es ES Modules asíncrono. import es estándar moderno, pero require aún funciona. Algunos proyectos usan ambos.' },
    { question: '¿Qué es module.exports?', answer: 'module.exports es el objeto que defines qué exporta un módulo. Puedes exportar funciones, objetos, clases. Los demás archivos lo importan con require().' },
    { question: '¿Qué son node_modules?', answer: 'Carpeta donde NPM descarga las librerías. Contiene todas las dependencias del proyecto y sus sub-dependencias. Generalmente se añade a .gitignore.' },
    { question: '¿Cómo importo módulos locales?', answer: 'Usa rutas relativas con require() o import. Por ejemplo: require("./utils") o import { myFunc } from "./utils.js".' },
    { question: '¿Qué es el wrapper function en CommonJS?', answer: 'Node.js envuelve cada archivo en una función IIFE que pasa (exports, require, module, __filename, __dirname). Esto asegura que variables locales no contaminen el scope global.' }
  ];

  return (
    <>
      <SEO title="Módulos y Require/Import - Sistema de Módulos Node.js | Guía Completa" description="Domina el sistema de módulos en Node.js: require, import, CommonJS, ES Modules, exports y buenas prácticas." keywords="módulos, require, import, commonjs, es modules, node.js, exports" url="https://fullstackdevlovers.com/backend/nodejs/modulos" />
      <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', 'name': 'Módulos y Require/Import en Node.js', 'provider': { '@type': 'Organization', 'name': 'Fullstack Dev Lovers' } })}</script>

      <div className="nodejs-modulos-landing">
        {/* Hero Section */}
        <LandingHero
          title="Módulos y Require/Import"
          subtitle="Sistema de Módulos en Node.js"
          description="Los módulos permiten dividir tu código en archivos reutilizables. Node.js usa un sistema de módulos que permite importar funcionalidad de otros archivos o paquetes NPM. Aprende CommonJS (require) y ES Modules (import) para organizar código profesionalmente."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Explorar Módulos →"
          primaryButtonLink="#faq"
          secondaryButtonText="Ver FAQ"
          secondaryButtonLink="#faq"
          imageUrl="/src/assets/images/logos/nodejs.png"
          imageAlt="Módulos Logo"
        />

        <section className="nodejs-modulos-content">
          <div className="content-container">
            <h2>¿Qué son los Módulos?</h2>
            <p className="intro-text">Los módulos permiten dividir tu código en archivos reutilizables. Node.js usa un sistema de módulos que permite importar funcionalidad de otros archivos o paquetes NPM.</p>
            <div className="features-grid">
              <div className="feature-card"><div className="feature-icon">📁</div><h3>Encapsulación</h3><p>Organiza tu código en archivos independientes y reutilizables</p></div>
              <div className="feature-card"><div className="feature-icon">🔄</div><h3>Reutilización</h3><p>Importa funcionalidad de otros módulos fácilmente</p></div>
              <div className="feature-card"><div className="feature-icon">⚙️</div><h3>Mantenibilidad</h3><p>Código más limpio, fácil de entender y modificar</p></div>
              <div className="feature-card"><div className="feature-icon">🛡️</div><h3>Aislamiento</h3><p>Variables locales no contaminan el scope global</p></div>
            </div>
          </div>
        </section>

        <section id="faq" className="nodejs-modulos-faq">
          <div className="content-container">
            <h2>Preguntas Frecuentes</h2>
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div key={faq.question} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="nodejs-modulos-cta">
          <div className="content-container">
            <h2>Domina el Sistema de Módulos</h2>
            <p>Estructura tu código profesionalmente con módulos</p>
            <div className="cta-buttons">
              <Link to="/backend/nodejs/modulos" className="btn-primary-large">Ir a Lecciones →</Link>
              <Link to="/backend/nodejs" className="btn-secondary-large">Ver Todas las Secciones</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
