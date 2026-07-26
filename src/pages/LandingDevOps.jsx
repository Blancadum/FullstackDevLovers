import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingDevOps = () => {
  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('devops');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const theme = getTheme('devops');
  const entornosModule = getModule('entornos');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!entornosModule) return null;

  // Get only the devops section
  const devopsSection = entornosModule.sections.find(s => s.id === 'devops');
  const sectionsToShow = devopsSection ? [devopsSection] : [];

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'DevOps - Docker, CI/CD y Despliegue Profesional',
    'description': 'Domina DevOps: containerización con Docker, CI/CD, automatización y despliegue en cloud. Acelera tu carrera con prácticas modernas de operaciones.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/herramientas/entornos/devops',
    'hasPart': devopsSection ? devopsSection.lessons.map((lesson, idx) => ({
      '@type': 'LearningResource',
      'name': lesson.title,
      'url': `https://fullstackdevlovers.com${lesson.link}`
    })) : []
  };

  const faqData = [
    {
      question: '¿Qué es DevOps y por qué es importante?',
      answer: 'DevOps es la combinación de desarrollo (Dev) y operaciones (Ops) para mejorar velocidad, calidad y confiabilidad. No es solo tecnología, es una mentalidad: que desarrolladores y ops trabajen juntos. DevOps engineers ganan 20-40% más que desarrolladores normales.'
    },
    {
      question: '¿DevOps vs SRE vs Platform Engineering: Cuál aprender?',
      answer: 'DevOps es amplio (Dev + Ops colaborando). SRE (Site Reliability Engineering) es más específico (confiabilidad operacional). Platform Engineering es construir plataformas internas. Aprende DevOps primero, luego especialízate. DevOps abre puertas a SRE y Platform Engineering.'
    },
    {
      question: '¿Necesito saber programación antes de aprender DevOps?',
      answer: 'Ayuda mucho. DevOps requiere entender desarrollo, pero no necesitas ser experto. Conocimientos básicos de scripting, Docker y conceptos de infraestructura son suficientes. La combinación Dev+Ops es lo importante.'
    },
    {
      question: '¿Cuánto tiempo se tarda en dominar DevOps?',
      answer: 'Docker básico: 1-2 semanas. CI/CD pipeline simple: 3-4 semanas. Kubernetes y orquestación: 2-3 meses. Dominio completo (infraestructura cloud, monitoring, seguridad): 6-12 meses. Pero puedes ser productivo en 2 meses.'
    },
    {
      question: '¿Docker es suficiente o necesito Kubernetes?',
      answer: 'Docker es para una máquina. Kubernetes (K8s) orquesta múltiples contenedores en clusters. Para 1-2 aplicaciones, Docker + Docker Compose es suficiente. Kubernetes es para escala enterprise (Netflix, Google). Aprende Docker primero, Kubernetes después si lo necesitas.'
    },
    {
      question: '¿Puedo ser DevOps sin cloud (AWS, Azure, GCP)?',
      answer: 'Sí, puedes aprender DevOps on-premise (servidores locales). Pero la industria se movió a cloud. AWS domina (30% de mercado), Azure (20%), GCP (10%). Aprender cloud es prácticamente obligatorio hoy. Comienza con uno, los conceptos son similares.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Enfoque',
      devops: 'Colaboración Dev+Ops, automatización todo',
      sre: 'Confiabilidad y uptime sistema',
      platform: 'Plataforma interna para dev teams'
    },
    {
      feature: 'Responsabilidades',
      devops: 'CI/CD, Deploy, Monitoring, Infra',
      sre: 'Alertas, Oncall, Post-mortems, SLOs',
      platform: 'APIs internas, self-service, DX'
    },
    {
      feature: 'Automatización',
      devops: 'Builds, deploys, testing',
      sre: 'Remediation automática, runbooks',
      platform: 'Infrastructure provisioning'
    },
    {
      feature: 'Scope',
      devops: 'Todo el ciclo desarrollo→producción',
      sre: 'Solo confiabilidad en producción',
      platform: 'Solo herramientas para desarrolladores'
    },
    {
      feature: 'Oncall',
      devops: 'Moderada (shared)',
      sre: 'Alta (24/7 rotación)',
      platform: 'Baja o ninguna'
    },
    {
      feature: 'Salario Promedio',
      devops: '$120-160K',
      sre: '$140-180K',
      platform: '$130-170K'
    },
    {
      feature: 'Demanda',
      devops: 'Muy alta (todas empresas)',
      sre: 'Alta (startups+)',
      platform: 'Media (grandes tech)'
    },
    {
      feature: 'Empleabilidad',
      devops: 'Máxima (skill universal)',
      sre: 'Alta (especializados)',
      platform: 'Alta (senior role)'
    }
  ];

  return (
    <>
      <SEO
        title="DevOps - Docker, CI/CD y Despliegue Profesional | Guía Completa"
        description="Domina DevOps: containerización con Docker, CI/CD, automatización y despliegue en cloud. Acelera tu carrera con prácticas modernas de operaciones profesionales."
        keywords="devops, docker, ci/cd, automatización, kubernetes, despliegue, github actions, cloud, aws"
        url="https://fullstackdevlovers.com/herramientas/entornos/devops"
        image="/og-devops.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="devops-landing">
        {/* Hero Section */}
        <LandingHero
          title="DevOps: Despliegue Profesional Moderno"
          subtitle="Automatización, containerización y operaciones escalables"
          description="DevOps combina desarrollo y operaciones para acelerar entregas, mejorar calidad y escalar infraestructura. Con Docker, CI/CD y cloud, reduces tiempo de despliegue de meses a minutos, y aumentas confiabilidad de sistemas críticos. DevOps engineers son los más demandados y mejor pagados."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Comenzar con Docker →"
          primaryButtonLink="/herramientas/entornos/devops/docker"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
          imageUrl="/src/assets/images/logos/docker-lgo.png"
          imageAlt="DevOps Logo"
        />

        {/* What is DevOps Section */}
        <section className="devops-content">
          <div className="content-container">
            <h2>¿Qué es DevOps?</h2>
            <p className="intro-text">
              DevOps es una mentalidad, cultura y conjunto de prácticas que rompe la barrera entre desarrollo y operaciones.
              Los equipos trabajan juntos para automatizar build, test, deploy y operaciones, logrando ciclos de liberación más rápidos
              y sistemas más confiables.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🐳</div>
                <h3>Containerización</h3>
                <p>Docker empaqueta apps en contenedores portátiles y reproducibles</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>CI/CD Automático</h3>
                <p>Integración y despliegue continuo: push → test → deploy en minutos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Escalabilidad Automática</h3>
                <p>Adapta recursos según demanda, crece automáticamente bajo carga</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Monitoreo y Observabilidad</h3>
                <p>Supervisa aplicaciones en tiempo real, detecta problemas al instante</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Zero-Downtime Deployment</h3>
                <p>Actualiza sin interrumpir el servicio, usuarios no notan cambios</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>Infrastructure as Code</h3>
                <p>Define toda infraestructura en código versionable y reproducible</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina DevOps con una progresión estructurada desde containerización hasta orquestación y despliegue
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
            <h2>DevOps vs SRE vs Platform Engineering</h2>
            <p className="intro-text">
              Comparativa detallada de prácticas y roles relacionados con operaciones modernas
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>DevOps</th>
                    <th>SRE</th>
                    <th>Platform Engineering</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="devops-col">{row.devops}</td>
                      <td>{row.sre}</td>
                      <td>{row.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige DevOps si:</strong> Quieres combinación perfecta de desarrollo y operaciones, automatizar todo,
                trabajar en multiple roles, tener máxima empleabilidad. DevOps es la ruta más flexible y versátil.
              </p>
              <p>
                <strong>✅ Elige SRE si:</strong> Te fascina la confiabilidad, estabilidad, investigar causas raíz, trabajar oncall.
                SRE es más especializado pero mejor pagado. Requiere experiencia DevOps primero.
              </p>
              <p>
                <strong>✅ Elige Platform Engineering si:</strong> Prefieres construir herramientas para developers que mantener
                sistemas en producción. Es un rol más nuevo, muy valorado en grandes tech companies.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use DevOps */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar DevOps?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>Cualquier proyecto moderno</li>
                  <li>Equipos que quieren velocidad</li>
                  <li>Aplicaciones que necesitan escalar</li>
                  <li>Sistemas que requieren alta disponibilidad</li>
                  <li>Cualquier empresa que compite en velocidad</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Proyecto monolítico legacy que no se toca (aunque DevOps aún ayuda)</li>
                  <li>Hardware on-premise sin cloud (pero Docker local funciona)</li>
                  <li>Team muy pequeño con 1-2 desarrolladores (aún beneficia)</li>
                  <li>Startup MVP ultra-temprano (comienza sin DevOps, después agrega)</li>
                  <li>Proyecto único que nunca se actualiza (pero mejora calidad igual)</li>
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
        <section className="devops-cta">
          <div className="cta-content">
            <h2>Comienza tu Viaje en DevOps Hoy</h2>
            <p>Automatiza deployments, escala infraestructura y acelera tu carrera</p>
            <Link to="/herramientas/entornos/devops/docker" className="cta-button">
              Ir a Docker →
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
    'devops': '🚀',
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#7b1fa2', '#6a1b9a'];
  return colors[index % colors.length];
}
