import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingMetodologias = () => {  const theme = getTheme('metodologias');
  const metodologiasModule = getModule('metodologias');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('metodologias');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);

  if (!metodologiasModule) return null;

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Metodologías de Desarrollo - Procesos y Frameworks',
    'description': 'Aprende Agile, Scrum, Kanban, Clean Code, Testing y DevOps. Frameworks que estructuran el desarrollo de software y mejoran la comunicación de equipos.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/herramientas/metodologias',
    'hasPart': metodologiasModule.sections.flatMap((section, idx) =>
      section.lessons.map((lesson, lidx) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    )
  };

  const faqData = [
    {
      question: '¿Qué diferencia hay entre Agile y Scrum?',
      answer: 'Agile es una filosofía/mentalidad basada en iteración rápida, feedback y adaptación. Scrum es un framework específico que implementa Agile con roles (Product Owner, Scrum Master, equipo), ceremonias (Sprint Planning, Daily Standup, Review, Retrospective) y artefactos (Product Backlog, Sprint Backlog, Increment). Agile es el concepto; Scrum es una forma de practicarlo.'
    },
    {
      question: '¿Necesito Agile o Waterfall es suficiente?',
      answer: 'Waterfall (fases secuenciales) funciona si: (1) Requisitos son claros y no cambian, (2) Proyecto es pequeño/fijo, (3) Cliente no necesita versiones intermedias. Usa Agile si: (1) Requisitos evolucionan, (2) Necesitas feedback frecuente, (3) Trabajas con stakeholders activos, (4) Entregas incrementales agregan valor. Hoy 95% de equipos usan Agile por su flexibilidad.'
    },
    {
      question: '¿Cuál es la curva de aprendizaje de Agile?',
      answer: 'Conceptos básicos: 1-2 semanas. Primer sprint completo: 1 mes. Madurez real: 3-6 meses. El error común es pensar que Agile es usar Jira + sprints de 2 semanas. La verdadera madurez viene cuando el equipo auto-se-organiza, el feedback loop es real, y adaptas el proceso continuamente. Recomendación: empieza simple, agrega complejidad según necesidad.'
    },
    {
      question: '¿Agile vs Kanban: cuál elegir?',
      answer: 'Scrum: sprints, roles definidos, ideal para equipos nuevos. Kanban: flujo continuo, WIP limitado, ideal cuando necesitas flexibilidad extrema. Muchos equipos usan Scrumban (Scrum + Kanban). Para startups: Kanban es más flexible. Para empresas medianas: Scrum da estructura. No son opciones mutuamente excluyentes; elige basado en tu flujo de trabajo.'
    },
    {
      question: '¿Necesito Clean Code si tengo Agile?',
      answer: 'Sí. Agile acelera iteraciones; Clean Code protege la calidad a largo plazo. Sin Clean Code, Agile se convierte en deuda técnica acumulativa. Agile te dice QUÉ construir rápido; Clean Code te dice CÓMO hacerlo sostenible. Ambos son necesarios. Usa Testing unitario, Refactorización constante y Code Review para mantener Clean Code en Agile.'
    },
    {
      question: '¿Cómo implemento DevOps en Agile?',
      answer: 'DevOps es la evolución natural de Agile. Agile optimiza desarrollo; DevOps une desarrollo y operaciones. En Agile puro sin DevOps, terminas con código en ramas esperando deploy. Con DevOps: CI/CD, automated testing, deployment múltiple por día. Herramientas: Jenkins, GitLab CI, GitHub Actions. El objetivo: que cualquier commit pueda llegar a producción en minutos, no meses.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Concepto Base',
      kubernetes: 'Iteraciones de 2-4 semanas',
      dockerSwarm: 'Flujo continuo de trabajo',
      nomad: 'Fases secuenciales y planificadas'
    },
    {
      feature: 'Complejidad',
      kubernetes: 'Media (requiere entrenamiento)',
      dockerSwarm: 'Baja (fácil de implementar)',
      nomad: 'Alta (muy plan-driven)'
    },
    {
      feature: 'Flexibilidad',
      kubernetes: 'Alta (adapta requisitos)',
      dockerSwarm: 'Muy alta (cambios en tiempo real)',
      nomad: 'Baja (cambios = problema)'
    },
    {
      feature: 'Feedback del cliente',
      kubernetes: 'Cada 2 semanas (Sprint Review)',
      dockerSwarm: 'Continuo en el flujo',
      nomad: 'Al final de fases'
    },
    {
      feature: 'Documentación',
      kubernetes: 'Mínima (código es docs)',
      dockerSwarm: 'Mínima (flujo es self-explanatory)',
      nomad: 'Exhaustiva (requiere especificación)'
    },
    {
      feature: 'Adopción Industria',
      kubernetes: 'Startups, empresas dinámicas (80%)',
      dockerSwarm: 'Empresas con DevOps maduro',
      nomad: 'Proyectos gubernamentales, legacy'
    },
    {
      feature: 'Riesgo de Cambios',
      kubernetes: 'Bajo (feedback temprano)',
      dockerSwarm: 'Muy bajo (adapta continuamente)',
      nomad: 'Alto (cambios son costosos)'
    },
    {
      feature: 'Mejor para equipos',
      kubernetes: 'Medianos (5-10 personas)',
      dockerSwarm: 'Pequeños y ágiles (2-5 personas)',
      nomad: 'Grandes con especialistas'
    }
  ];

  return (
    <>
      <SEO
        title="Metodologías de Desarrollo - Agile, Scrum, Clean Code y DevOps"
        description="Aprende metodologías de desarrollo: Agile, Scrum, Kanban, Clean Code, Testing y DevOps. Frameworks que estructuran equipos y entregan valor continuamente."
        keywords="metodologías, agile, scrum, kanban, clean code, testing, devops, desarrollo, procesos"
        url="https://fullstackdevlovers.com/herramientas/metodologias"
        image="/og-metodologias.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="metodologias-landing">        {/* Hero Section */}
        <LandingHero
          title="Metodologías: Procesos de Desarrollo"
          subtitle="Frameworks para desarrollo exitoso de proyectos"
          description="Aprende Agile, Scrum, Kanban y otras metodologías modernas. Estos procesos estructuran el desarrollo de software, mejoran la comunicación de equipos, y entregan valor continuamente en ciclos cortos."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Comenzar con Metodologías →"
          primaryButtonLink="/herramientas/metodologias/agile-scrum/introduccion"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
          imageUrl="/src/assets/images/logos/metodologias-procesos.png"
          imageAlt="Metodologías Logo"
        />

        {/* Methodologies Section */}
        <section className="metodologias-content">
          <div className="content-container">
            <h2>¿Qué son las Metodologías de Desarrollo?</h2>
            <p className="intro-text">
              Las metodologías de desarrollo son frameworks y procesos que estructuran cómo los equipos construyen software.
              Definen roles, ceremonias, entregables y ciclos de trabajo. Mejoran la comunicación, reducen riesgos y permiten entregar
              valor continuamente. Desde Agile y Scrum hasta Clean Code y DevOps, cada metodología resuelve desafíos específicos.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Iteraciones Cortas</h3>
                <p>Sprints de 1-4 semanas que entregan valor incrementalmente</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Trabajo Colaborativo</h3>
                <p>Equipos auto-organizados con comunicación constante</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Calidad Continua</h3>
                <p>Clean Code, Testing y Refactorización permanente</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Feedback Loop</h3>
                <p>Retrospectivas y adaptación basada en aprendizaje</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Deployment Frecuente</h3>
                <p>DevOps y CI/CD para entregar múltiples veces por día</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Métricas y Datos</h3>
                <p>Decisiones basadas en datos, no en intuición</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Áreas de Metodologías</h2>
            <p className="intro-text">
              Domina metodologías con una progresión desde Agile/Scrum hasta DevOps y excelencia en código
            </p>

            <div className="theme-cards-container">
              {metodologiasModule.sections.map((section, idx) => (
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
            <h2>Comparativa de Marcos de Trabajo</h2>
            <p className="intro-text">
              Entiende las diferencias entre Agile, Scrum, Kanban y otras metodologías
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Kubernetes</th>
                    <th>Docker Swarm</th>
                    <th>Nomad</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="metodologias-col">{row.kubernetes}</td>
                      <td>{row.dockerSwarm}</td>
                      <td>{row.nomad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige Scrum si:</strong> Trabajas en startup/empresa mediana con requisitos dinámicos, necesitas estructura clara
                y feedback frecuente del cliente, o tienes equipos semi-distribuidos que necesitan sincronización.
              </p>
              <p>
                <strong>✅ Elige Kanban si:</strong> Tu flujo es continuo, necesitas máxima flexibilidad, trabajas con soporte/mantenimiento,
                o requieres cambios en cualquier momento. Excelente para equipos pequeños y ágiles.
              </p>
              <p>
                <strong>✅ Elige Waterfall si:</strong> Requisitos son cristal claro y NO van a cambiar, proyecto es crítico/regulado (banca, aeronáutica),
                o necesitas documentación exhaustiva. Rara vez la mejor opción hoy día.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Methodologies */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Aplicar Metodologías?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Aplica Agile/Scrum si:</h3>
                <ul>
                  <li>Necesitas iteraciones rápidas y feedback constante</li>
                  <li>Los requisitos cambian frecuentemente</li>
                  <li>Tienes equipos pequeños/medianos (5-15 personas)</li>
                  <li>Requieres entrega incremental de valor</li>
                  <li>Trabajas con stakeholders involucrados</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>✅ Aplica Clean Code/Testing si:</h3>
                <ul>
                  <li>El proyecto será mantenido por años</li>
                  <li>Múltiples desarrolladores tocan el código</li>
                  <li>Calidad y mantenibilidad son críticos</li>
                  <li>Necesitas reducir bugs en producción</li>
                  <li>El costo de fallos es alto</li>
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
        <section className="metodologias-cta">
          <div className="cta-content">
            <h2>Comienza tu Viaje en Metodologías Hoy</h2>
            <p>Domina Agile, Scrum, Clean Code y DevOps para estructurar tu desarrollo</p>
            <Link to="/herramientas/metodologias/agile-scrum/introduccion" className="cta-button">
              Ir a Agile & Scrum →
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
