import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingBuildTools = () => {
  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('build');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const theme = getTheme('buildtools');
  const buildModule = getModule('entornos');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!buildModule) return null;

  // Get only the build-tools section
  const buildSection = buildModule.sections.find(s => s.id === 'build-tools');
  const sectionsToShow = buildSection ? [buildSection] : [];

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Build Tools - Maven, Gradle y Construcción de Proyectos Profesionales',
    'description': 'Domina Maven y Gradle: automatiza compilación, testing, empaquetado y despliegue. Gestión de dependencias para proyectos Java profesionales.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/herramientas/entornos/build',
    'hasPart': buildSection ? buildSection.lessons.map((lesson, idx) => ({
      '@type': 'LearningResource',
      'name': lesson.title,
      'url': `https://fullstackdevlovers.com${lesson.link}`
    })) : []
  };

  const faqData = [
    {
      question: '¿Qué es un Build Tool y por qué lo necesito?',
      answer: 'Un build tool automatiza todo el proceso de compilación, testing, empaquetado y despliegue. Sin él, compilarías manualmente cada archivo, resolverías dependencias a mano, ejecutarías tests uno por uno. Maven/Gradle hace todo con un comando: "mvn clean package".'
    },
    {
      question: '¿Maven vs Gradle: Cuál debo aprender?',
      answer: 'Maven es más popular (80% de empresas Java), usa XML, curva de aprendizaje moderada. Gradle es moderno, usa Groovy/Kotlin, más flexible y rápido, preferido en Android. Aprende Maven primero (es más común), luego Gradle (es la tendencia). Ambos son valiosos.'
    },
    {
      question: '¿Necesito aprender ambos Maven y Gradle?',
      answer: 'No es estrictamente necesario en día uno. Maven domina la industria, aprende eso primero. Gradle está creciendo. Si trabajas en Android, Gradle es obligatorio. En backend Java, Maven es suficiente. Pero dominar ambos te hace más empleable.'
    },
    {
      question: '¿Cuánto tiempo se tarda en dominar un Build Tool?',
      answer: 'Lo básico (compilar, test, empaquetar) se domina en 2-3 horas. Gestión de dependencias y plugins: 1 semana. Configuración avanzada (multi-módulo, custom tasks): 2-3 semanas. El verdadero dominio viene con proyectos reales.'
    },
    {
      question: '¿Puedo compilar Java sin Maven o Gradle?',
      answer: 'Sí, técnicamente: usarías "javac" directamente. Pero es tedioso: compilar cada archivo, resolver dependencias manualmente, crear JARs... Maven/Gradle automatiza todo esto. Es como preguntarse si puedes programar sin IDE: técnicamente sí, pero es tortuga.'
    },
    {
      question: '¿Maven es solo para Java?',
      answer: 'Principalmente Java, pero Maven funciona con C#, Ruby, Scala, Clojure, etc. Gradle es agnóstico de lenguaje: Java, Kotlin, Groovy, C++, JavaScript, etc. Maven está optimizado para Java, Gradle es más general.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Configuración',
      maven: 'XML (pom.xml)',
      make: 'Makefile (script)',
      gradle: 'Groovy/Kotlin DSL'
    },
    {
      feature: 'Curva Aprendizaje',
      maven: 'Moderada',
      make: 'Baja (básica)',
      gradle: 'Empinada'
    },
    {
      feature: 'Velocidad',
      maven: 'Lenta (maven-clean)',
      make: 'Muy rápida (incremental)',
      gradle: 'Muy rápida (caché)'
    },
    {
      feature: 'Flexibilidad',
      maven: 'Rígida (convención)',
      make: 'Flexible (scripts shell)',
      gradle: 'Muy flexible (DSL)'
    },
    {
      feature: 'Popularidad Java',
      maven: 'Histórica (80%+)',
      make: 'Legado',
      gradle: 'Moderna (creciente)'
    },
    {
      feature: 'Gestión Dependencias',
      maven: 'Excelente (Maven Central)',
      make: 'Manual',
      gradle: 'Excelente (Maven Central)'
    },
    {
      feature: 'Ecosistema',
      maven: 'Maduro (plugins establecidos)',
      make: 'Ninguno',
      gradle: 'Moderno (creciendo)'
    },
    {
      feature: 'Integración CI/CD',
      maven: 'Perfecta (Jenkins, GitLab)',
      make: 'Básica',
      gradle: 'Perfecta (moderno)'
    }
  ];

  return (
    <>
      <SEO
        title="Build Tools - Maven, Gradle y Construcción Profesional | Guía Completa"
        description="Domina Maven y Gradle: automatiza compilación, testing, empaquetado y despliegue. Gestión de dependencias para proyectos Java profesionales escalables."
        keywords="maven, gradle, build tools, java, compilación, testing, empaquetado, dependencias, automatización"
        url="https://fullstackdevlovers.com/herramientas/entornos/build"
        image="/og-build-tools.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="buildtools-landing">
        {/* Hero Section */}
        <LandingHero
          title="Build Tools: Automatización de Proyectos"
          subtitle="Compila, testa y empaqueta en un comando"
          description="Los Build Tools como Maven y Gradle automatizan todo el ciclo de vida del proyecto: compilación, testing, empaquetado, y despliegue. Eliminan tareas repetitivas y garantizan builds consistentes en todos los equipos."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Comenzar con Maven →"
          primaryButtonLink="/herramientas/entornos/build/maven"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
          imageUrl="/src/assets/images/logos/maven.png"
          imageAlt="Build Tools Logo"
        />

        {/* What is Build Tools Section */}
        <section className="buildtools-content">
          <div className="content-container">
            <h2>¿Qué es un Build Tool?</h2>
            <p className="intro-text">
              Un Build Tool es un software que automatiza el proceso completo de transformar código fuente en una aplicación ejecutable.
              Maneja compilación, testing, empaquetado, gestión de dependencias, documentación y despliegue.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Compilación Automática</h3>
                <p>Compila código fuente a bytecode (.class) automáticamente</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Empaquetado</h3>
                <p>Crea JAR, WAR, o archivos ejecutables automáticamente</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧪</div>
                <h3>Testing Automático</h3>
                <p>Ejecuta tests unitarios e integración en cada build</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3>Gestión de Dependencias</h3>
                <p>Descarga e integra librerías automáticamente de repositorios</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📖</div>
                <h3>Documentación</h3>
                <p>Genera Javadoc y documentación automáticamente</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Despliegue</h3>
                <p>Automatiza envío a repositorios y servidores</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina los Build Tools con una progresión estructurada desde fundamentos
            </p>

            <div className="theme-cards-container">
              {sectionsToShow.map((section, idx) => (
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
            <h2>Maven vs Make vs Gradle</h2>
            <p className="intro-text">
              Comparativa detallada de los principales sistemas de construcción
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Maven</th>
                    <th>Make</th>
                    <th>Gradle</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="buildtools-col">{row.maven}</td>
                      <td>{row.make}</td>
                      <td>{row.gradle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige Maven si:</strong> Trabajas en proyectos Java empresariales, necesitas máxima compatibilidad,
                tu equipo es tradicional, o requieres el estándar de la industria. Maven es sólido y confiable.
              </p>
              <p>
                <strong>✅ Elige Gradle si:</strong> Quieres flexibilidad moderna, trabajas en Android, buscas builds más rápidos,
                o prefieres DSLs sobre XML. Gradle es el futuro.
              </p>
              <p>
                <strong>⚠️ Make solo si:</strong> Trabajas en C/C++ o legacy Unix. Para Java, es obsoleto. No vale la pena.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Build Tools */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar Build Tools?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>Cualquier proyecto Java</li>
                  <li>Equipos con múltiples desarrolladores</li>
                  <li>CI/CD y automatización</li>
                  <li>Proyectos con muchas dependencias</li>
                  <li>Builds consistentes entre máquinas</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Script único muy simple (aunque Maven aún ayuda)</li>
                  <li>No tienes dependencias (aunque Maven las descubre)</li>
                  <li>Trabajas en lenguajes no-JVM (usa tool específico)</li>
                  <li>Entorno con restricciones de red (Maven caché offline)</li>
                  <li>Aprendiz absoluto (aunque conceptos son universales)</li>
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
        <section className="buildtools-cta">
          <div className="cta-content">
            <h2>Comienza con Build Tools Hoy</h2>
            <p>Automatiza tu flujo de desarrollo y aumenta tu productividad</p>
            <Link to="/herramientas/entornos/build/maven" className="cta-button">
              Ir a Maven →
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
    'build-tools': '📦',
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#7b1fa2', '#6a1b9a'];
  return colors[index % colors.length];
}
