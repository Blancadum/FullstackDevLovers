import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO } from '../components';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingNodejsEventLoop = () => {
  const landingTheme = getThemeByModule('nodejs');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqData = [
    { question: '¿Qué es el Event Loop?', answer: 'El Event Loop es el mecanismo que permite que Node.js maneje múltiples operaciones sin bloquearse. Ejecuta callbacks, procesa tareas, y gestiona la concurrencia de forma no-bloqueante.' },
    { question: '¿Por qué Node.js es no-bloqueante?', answer: 'Node.js usa el event loop y callbacks para no bloquear el hilo principal. Operaciones I/O (lectura de archivos, requests HTTP) se delegan a threads del pool, liberando el event loop para otras tareas.' },
    { question: '¿Qué es asincronía?', answer: 'Asincronía significa que operaciones se ejecutan en el futuro, no inmediatamente. En Node.js usamos callbacks, Promises, y async/await para manejar código asincrónico elegantemente.' },
    { question: '¿Diferencia entre callbacks y Promises?', answer: 'Callbacks son funciones pasadas como argumentos. Promises encapsulan valores futuros. Promises tienen mejor manejo de errores y legibilidad. async/await es azúcar sintáctico sobre Promises.' },
    { question: '¿Qué es async/await?', answer: 'async/await es sintaxis que permite escribir código asincrónico que se ve síncrono. async marca funciones que retornan Promises. await pausa hasta que la Promise se resuelva.' },
    { question: '¿Cómo funciona el setTimeout en Node.js?', answer: 'setTimeout usa el Event Loop. El delay es mínimo (mínimo ~1ms). El callback se ejecuta cuando el Event Loop lo procesa, no exactamente después del delay especificado.' }
  ];

  return (
    <>
      <SEO title="Event Loop y Asincronía - Corazón de Node.js | Guía Completa" description="Domina el Event Loop y asincronía: callbacks, Promises, async/await, y cómo Node.js maneja operaciones no-bloqueantes." keywords="event loop, asincronía, callbacks, promises, async await, node.js, no-bloqueante" url="https://fullstackdevlovers.com/backend/nodejs/event-loop" />
      <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', 'name': 'Event Loop y Asincronía en Node.js', 'provider': { '@type': 'Organization', 'name': 'Fullstack Dev Lovers' } })}</script>

      <div className="nodejs-eventloop-landing">
        {/* Hero Section */}
        <LandingHero
          title="Event Loop y Asincronía"
          subtitle="El Corazón de Node.js"
          description="El Event Loop es el motor que permite que Node.js maneje múltiples operaciones concurrentes sin bloquear el hilo principal. Es fundamental para entender cómo Node.js ejecuta callbacks, Promises y async/await de forma no-bloqueante."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Explorar Event Loop →"
          primaryButtonLink="#faq"
          secondaryButtonText="Ver FAQ"
          secondaryButtonLink="#faq"
          imageUrl="/src/assets/images/logos/nodejs.png"
          imageAlt="Event Loop Logo"
        />

        <section className="nodejs-eventloop-content">
          <div className="content-container">
            <h2>¿Qué es el Event Loop?</h2>
            <p className="intro-text">El Event Loop es el motor que permite que Node.js maneje múltiples operaciones concurrentes sin bloquear el hilo principal. Es fundamental para entender cómo funciona Node.js.</p>
            <div className="features-grid">
              <div className="feature-card"><div className="feature-icon">⚡</div><h3>No-Bloqueante</h3><p>No esperes operaciones I/O, continúa con otros trabajos</p></div>
              <div className="feature-card"><div className="feature-icon">🔄</div><h3>Concurrencia</h3><p>Maneja múltiples solicitudes simultáneamente</p></div>
              <div className="feature-card"><div className="feature-icon">📊</div><h3>Escalabilidad</h3><p>Soporta miles de conexiones con bajo uso de memoria</p></div>
              <div className="feature-card"><div className="feature-icon">🎯</div><h3>Eficiencia</h3><p>Un solo hilo ejecuta miles de operaciones en paralelo</p></div>
            </div>
          </div>
        </section>

        <section id="faq" className="nodejs-eventloop-faq">
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

        <section className="nodejs-eventloop-cta">
          <div className="content-container">
            <h2>Domina el Event Loop</h2>
            <p>Escribe código asincrónico eficiente y entiende cómo funciona Node.js internamente</p>
            <div className="cta-buttons">
              <Link to="/backend/nodejs/event-loop" className="btn-primary-large">Ir a Lecciones →</Link>
              <Link to="/backend/nodejs" className="btn-secondary-large">Ver Todas las Secciones</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
