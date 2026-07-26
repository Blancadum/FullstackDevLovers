import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingGit = () => {
  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('git');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const theme = getTheme('git');
  const gitModule = getModule('git');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!gitModule) return null;

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Git - Control de Versiones y Colaboración Profesional',
    'description': 'Domina Git: versionado distribuido, ramas, merge, pull requests y workflows profesionales. Sistema de control de versiones más usado en el mundo.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/control-versiones/git',
    'hasPart': gitModule.sections.flatMap((section, idx) =>
      section.lessons.map((lesson, lidx) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    )
  };

  const faqData = [
    {
      question: '¿Qué es Git y por qué es importante?',
      answer: 'Git es el sistema de control de versiones más popular del mundo, creado por Linus Torvalds. Permite a los equipos colaborar en código, rastrear cambios, y volver a versiones anteriores. Es estándar en la industria: 90%+ de proyectos open source usan Git.'
    },
    {
      question: '¿Git vs SVN vs Mercurial: Cuál debo aprender?',
      answer: 'Git domina con 95%+ de mercado. SVN es legado (sistemas antiguos). Mercurial es similar pero menos usado. Aprender Git te abre todas las puertas profesionales y acceso a GitHub, GitLab, Bitbucket. Es la elección inevitable.'
    },
    {
      question: '¿Necesito saber programación para aprender Git?',
      answer: 'No. Git es independiente del lenguaje de programación. Lo puedes aprender sin saber programar. De hecho, Git se usa en equipos de documentación, design, etc. Aunque es más valioso cuando trabajas en proyectos de código.'
    },
    {
      question: '¿Cuánto tiempo se tarda en dominar Git?',
      answer: 'Lo básico (init, add, commit, push, pull) se domina en 2-3 horas. Ramas y merges: 1 semana. Workflows profesionales (GitFlow, trunk-based): 2-3 semanas. El verdadero dominio viene con la práctica en proyectos reales.'
    },
    {
      question: '¿Git es solo para repositorios remotos?',
      answer: 'No. Git funciona perfectamente local sin servidor remoto. Es un VCS distribuido: tienes el repositorio completo en tu máquina. GitHub, GitLab, etc. son solo servidores remotos opcionales. Puedes usar Git 100% offline.'
    },
    {
      question: '¿Cuál es la diferencia entre Git y GitHub?',
      answer: 'Git es el software de control de versiones. GitHub es una plataforma web donde alojas repositorios Git (propiedad de Microsoft). Otras opciones: GitLab, Bitbucket. Podrías usar Git sin GitHub, pero no GitHub sin Git.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Distribución',
      git: 'Distribuido (copia local completa)',
      svn: 'Centralizado (1 servidor)',
      mercurial: 'Distribuido (similar a Git)'
    },
    {
      feature: 'Velocidad',
      git: 'Muy rápida (todo local)',
      svn: 'Lenta (depende de red)',
      mercurial: 'Rápida'
    },
    {
      feature: 'Branching',
      git: 'Ligero y rápido (milisegundos)',
      svn: 'Pesado (copia de carpetas)',
      mercurial: 'Ligero'
    },
    {
      feature: 'Merging',
      git: 'Inteligente (algoritmo 3-way)',
      svn: 'Básico',
      mercurial: 'Bueno'
    },
    {
      feature: 'Comunidad',
      git: 'Masiva (90%+ proyectos)',
      svn: 'Pequeña (legado)',
      mercurial: 'Pequeña'
    },
    {
      feature: 'Plataformas',
      git: 'GitHub, GitLab, Bitbucket, Gitea',
      svn: 'VisualSVN, Assembla',
      mercurial: 'Bitbucket'
    },
    {
      feature: 'Empleabilidad',
      git: 'Obligatorio en 100% ofertas',
      svn: 'Raramente pedido',
      mercurial: 'Muy raro'
    },
    {
      feature: 'Historial Offline',
      git: 'Accesible localmente (100%)',
      svn: 'No (requiere servidor)',
      mercurial: 'Sí (accesible localmente)'
    }
  ];

  return (
    <>
      <SEO
        title="Git - Control de Versiones y Colaboración Profesional | Guía Completa"
        description="Domina Git: versionado distribuido, ramas, merge, pull requests y workflows profesionales. El sistema de control de versiones más usado en el mundo."
        keywords="git, control de versiones, github, versionado, ramas, colaboración, desarrollo, repositorio, commits"
        url="https://fullstackdevlovers.com/control-versiones/git"
        image="/og-git.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="git-landing">
        <LandingHero
          title="Git: Control de Versiones Profesional"
          subtitle="Usado por 90%+ de proyectos en el mundo"
          description="Git es el estándar de la industria para control de versiones distribuido. Domina ramas, merges, pull requests y colaboración remota con GitHub, GitLab o Bitbucket. Esencial para trabajar en equipos y mantener históricos de código."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          imageUrl="/src/assets/images/logos/git-logo.png"
          imageAlt="Git Logo"
          primaryButtonText="Comenzar con Git →"
          primaryButtonLink="/control-versiones/git/basicos/configuracion-inicial"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
        />

        {/* What is Git Section */}
        <section className="git-content">
          <div className="content-container">
            <h2>¿Qué es Git?</h2>
            <p className="intro-text">
              Git es un sistema de control de versiones distribuido que permite a equipos colaborar en proyectos, rastrear cambios en código,
              y mantener un historial completo de todas las modificaciones. Cada desarrollador tiene una copia completa del repositorio.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Versionado Distribuido</h3>
                <p>Cada desarrollador tiene un repositorio completo, sin punto único de fallo</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌿</div>
                <h3>Ramificación Ligera</h3>
                <p>Crea ramas en milisegundos para trabajar en features aisladas</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏮️</div>
                <h3>Historial Completo</h3>
                <p>Viaja en el tiempo del código, revisa cualquier punto en la historia</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Colaboración Eficiente</h3>
                <p>Múltiples desarrolladores trabajando sin conflictos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>Seguridad Intrínseca</h3>
                <p>Cada commit es criptográficamente seguro e inmutable</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Workflows Flexibles</h3>
                <p>Adapta Git a tu equipo: GitFlow, GitHub Flow, trunk-based, etc.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina Git con una progresión estructurada desde fundamentos hasta colaboración profesional
            </p>

            <div className="theme-cards-container">
              {gitModule.sections.map((section, idx) => (
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
            <h2>Git vs SVN vs Mercurial</h2>
            <p className="intro-text">
              Comparativa detallada de Git con otros sistemas de control de versiones
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Git</th>
                    <th>SVN</th>
                    <th>Mercurial</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="git-col">{row.git}</td>
                      <td>{row.svn}</td>
                      <td>{row.mercurial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige Git si:</strong> Quieres trabajar en cualquier proyecto profesional moderno,
                colaborar en open source, o aprender el estándar de la industria. Git es la opción única correcta hoy.
              </p>
              <p>
                <strong>⚠️ SVN solo si:</strong> Tu empresa es muy antigua o usa mainframe con sistemas legados.
                Pero incluso en esos casos, Git es preferible. Casi no hay nuevos proyectos en SVN.
              </p>
              <p>
                <strong>ℹ️ Mercurial es</strong> similar a Git pero 100x menos popular. No vale la pena aprenderlo
                a menos que trabajes específicamente en Firefox o Rust (raros casos).
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Git */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar Git?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>Cualquier proyecto de software</li>
                  <li>Equipos de cualquier tamaño</li>
                  <li>Proyectos open source</li>
                  <li>Desarrollo colaborativo remoto</li>
                  <li>Mantener históricos confiables</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Trabajas con binarios gigantes (usa Git LFS)</li>
                  <li>Necesitas control de acceso granular (usa GitHub Enterprise)</li>
                  <li>Usas mainframe (pero aún Git funciona)</li>
                  <li>Trabajas solo en pequeños scripts (aunque Git aún ayuda)</li>
                  <li>Acceso a red es inexistente (Git local funciona offline)</li>
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
        <section className="git-cta">
          <div className="cta-content">
            <h2>Comienza tu Viaje con Git Hoy</h2>
            <p>Aprende desde configuración básica hasta colaboración profesional en equipos</p>
            <Link to="/control-versiones/git/basicos/configuracion-inicial" className="cta-button">
              Ir a Fundamentos de Git →
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
    'basicos': '📚',
    'avanzado': '🚀',
    'practicas': '💻'
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#e8491f', '#c73d18'];
  return colors[index % colors.length];
}
