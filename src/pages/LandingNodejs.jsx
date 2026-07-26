import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingNodejs = () => {
  const theme = getTheme('nodejs');
  const nodejsModule = getModule('nodejs');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('nodejs');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);

  if (!nodejsModule) return null;

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Node.js - JavaScript en el Backend',
    'description': 'Domina Node.js: runtime JavaScript, event loop, async/await, NPM y desarrollo de APIs. Crea aplicaciones backend escalables con JavaScript.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/backend/nodejs',
    'hasPart': nodejsModule.sections.flatMap((section, idx) =>
      section.lessons.map((lesson, lidx) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    )
  };

  const faqData = [
    {
      question: '¿Qué es Node.js exactamente?',
      answer: 'Node.js es un entorno de ejecución (runtime) de JavaScript basado en el motor V8 de Google. Te permite ejecutar código JavaScript fuera del navegador, principalmente en el servidor, para construir aplicaciones backend, APIs, y herramientas de línea de comandos.'
    },
    {
      question: '¿Cuál es la diferencia entre Node.js y JavaScript en el navegador?',
      answer: 'Ambos usan JavaScript, pero Node.js no tiene acceso al DOM ni a APIs del navegador. En cambio, Node.js tiene acceso al sistema de archivos, procesos del SO, y puertos de red. Node.js es ideal para backend; el navegador para frontend.'
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

  const comparisonData = [
    {
      feature: 'Lenguaje',
      nodejs: 'JavaScript',
      python: 'Python',
      java: 'Java'
    },
    {
      feature: 'Punto Fuerte',
      nodejs: 'APIs en tiempo real, aplicaciones I/O intensivas',
      python: 'Data science, machine learning, scripts',
      java: 'Aplicaciones empresariales grandes, microservicios'
    },
    {
      feature: 'Curva Aprendizaje',
      nodejs: 'Baja (si conoces JavaScript)',
      python: 'Baja',
      java: 'Media-Alta'
    },
    {
      feature: 'Rendimiento',
      nodejs: 'Alto (V8 compilado)',
      python: 'Bajo (interpretado)',
      java: 'Alto (JIT compilado)'
    },
    {
      feature: 'Concurrencia',
      nodejs: 'Event-driven, single-threaded',
      python: 'Threads, asyncio, celery',
      java: 'Threads nativas, virtual threads'
    },
    {
      feature: 'Ecosistema',
      nodejs: '1M+ paquetes NPM',
      python: 'Excelente (pip, conda)',
      java: 'Maven Central, Gradle'
    },
    {
      feature: 'Comunidad',
      nodejs: 'Muy grande y activa',
      python: 'Masiva (ciencia de datos)',
      java: 'Masiva (empresas)'
    },
    {
      feature: 'Empleabilidad',
      nodejs: 'Muy alta (startups, full-stack)',
      python: 'Muy alta (data, DevOps)',
      java: 'Muy alta (empresas grandes)'
    }
  ];

  return (
    <>
      <SEO
        title="Node.js - JavaScript en el Backend | Guía Completa"
        description="Domina Node.js: runtime JavaScript, event loop, async/await, NPM y desarrollo de APIs. Crea aplicaciones backend escalables con JavaScript."
        keywords="node.js, javascript, backend, runtime, v8, npm, async await, event loop, apis"
        url="https://fullstackdevlovers.com/backend/nodejs"
        image="/og-nodejs.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="nodejs-landing">        {/* Hero Section */}
        <LandingHero
          title="Node.js: JavaScript en el Backend"
          subtitle="Runtime JavaScript potente y escalable"
          description="Node.js permite ejecutar JavaScript fuera del navegador, creando servidores web y APIs rápidas. Con npm, async/await y event-driven architecture, Node.js es ideal para aplicaciones escalables en tiempo real."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Comenzar con Node.js →"
          primaryButtonLink="/backend/nodejs/introduccion"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
          imageUrl="/src/assets/images/logos/nodejs.png"
          imageAlt="Node.js Logo"
        />

        {/* What is Node.js Section */}
        <section className="nodejs-content">
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
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Full-Stack JavaScript</h3>
                <p>Usa JavaScript tanto en frontend como backend para máxima consistencia</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Escalabilidad</h3>
                <p>Soporta miles de conexiones simultáneas con bajo consumo de memoria</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina Node.js con una progresión estructurada desde fundamentos hasta aplicaciones backend profesionales
            </p>

            <div className="theme-cards-container">
              {nodejsModule.sections.map((section, idx) => (
                <KotlinThemeCard
                  key={idx}
                  icon={getIconForSection(section.id)}
                  title={section.name}
                  description={section.description}
                  lessons={section.lessons}
                  color={getColorForSection(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="comparison-section" id="comparativa">
          <div className="content-container">
            <h2>Node.js vs Python vs Java</h2>
            <p className="intro-text">
              Comparativa detallada de Node.js con otros backends populares
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Node.js</th>
                    <th>Python</th>
                    <th>Java</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="nodejs-col">{row.nodejs}</td>
                      <td>{row.python}</td>
                      <td>{row.java}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige Node.js si:</strong> Quieres full-stack JavaScript, construir APIs en tiempo real, apps I/O intensivas, o eres startup que necesita velocidad.
              </p>
              <p>
                <strong>✅ Elige Python si:</strong> Te interesa data science, machine learning, automatización, o preferencia por sintaxis limpia.
              </p>
              <p>
                <strong>✅ Elige Java si:</strong> Trabajas en empresa grande, necesitas alta seguridad, tipos estáticos, o ecosistema empresarial establecido.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Node.js */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar Node.js?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>APIs REST y GraphQL</li>
                  <li>Aplicaciones en tiempo real (chat, notificaciones)</li>
                  <li>Aplicaciones I/O intensivas (lectura de archivos, BD)</li>
                  <li>Full-stack JavaScript (frontend + backend)</li>
                  <li>Startups que necesitan velocidad de desarrollo</li>
                  <li>Microservicios escalables</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Necesitas CPU intensiva (cálculos complejos)</li>
                  <li>Requieres tipado fuerte (Java, TypeScript strict)</li>
                  <li>Trabajas en data science/ML (Python)</li>
                  <li>Necesitas frameworks legacy de Java</li>
                  <li>Tu equipo no domina JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="content-container">
            <h2>Preguntas Frecuentes</h2>

            <div className="faq-list">
              {faqData.map((faq, idx) => (
                <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                  <button
                    className="faq-summary"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">+</span>
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
        <section className="nodejs-cta">
          <div className="cta-content">
            <h2>Comienza Tu Viaje en Node.js Hoy</h2>
            <p>Domina JavaScript en el backend y crea aplicaciones escalables</p>
            <Link to="/backend/nodejs/introduccion" className="cta-button">
              Ir a Fundamentos de Node.js →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

// Funciones auxiliares
function getIconForSection(sectionId) {
  const icons = {
    'fundamentales': '📚',
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#9c27b0', '#7b1fa2'];
  return colors[index % colors.length];
}
