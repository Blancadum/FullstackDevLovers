import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingAngular = () => {
  const theme = getTheme('angular');
  const angularModule = getModule('angular');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('angular');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);

  if (!angularModule) return null;

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Angular - Framework Web Profesional | Guía Completa',
    'description': 'Aprende Angular: TypeScript, components, services, routing y desarrollo web empresarial escalable.',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/frontend/angular',
    'hasPart': angularModule.sections.flatMap((section, idx) =>
      section.lessons.map((lesson, lidx) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    )
  };

  const faqData = [
    {
      question: '¿Qué es Kubernetes y por qué lo necesito?',
      answer: 'Kubernetes (K8s) es un orquestador de contenedores que automatiza deployment, escalado y gestión de aplicaciones containerizadas. Mientras Docker maneja un contenedor en una máquina, Kubernetes gestiona cientos o miles de contenedores en múltiples servidores, garantizando alta disponibilidad, actualizaciones sin downtime y auto-healing automático.'
    },
    {
      question: '¿Necesito Kubernetes o Docker es suficiente?',
      answer: 'Docker es suficiente si: (1) Tu infra es una o pocas máquinas, (2) Usas PaaS (Heroku, Vercel, AWS Elastic Beanstalk), (3) Tu equipo no tiene expertise en DevOps. Necesitas Kubernetes si: (1) Tienes múltiples servidores, (2) Necesitas auto-escalado, (3) Trabajas en startup/empresa con crecimiento rápido, (4) Usas on-premise infrastructure.'
    },
    {
      question: '¿Cuál es la curva de aprendizaje de Kubernetes?',
      answer: 'Kubernetes tiene una curva empinada. Básicos: 2-4 semanas. Profundidad media: 2-3 meses. Expertise: 6-12 meses con proyectos reales. Recomendación: domina Docker 100% primero. Aprende Kubernetes solo cuando realmente lo necesites. Un 70% de equipos pequeños están sobre-ingenierizados con K8s cuando Docker+PaaS sería suficiente.'
    },
    {
      question: '¿Angular vs React vs Vue: cuál elegir?',
      answer: 'Docker Swarm: más simple, integrado en Docker, pero limitado. Kubernetes: estándar industria, masiva comunidad, curva empinada, pero definitivamente vale la pena. Nomad: agnóstico (no solo contenedores), flexible, pero menos comunidad. Para 99% de casos, Kubernetes es la respuesta. Es el estándar de facto.'
    },
    {
      question: '¿Puedo correr Kubernetes localmente en desarrollo?',
      answer: 'Sí. Tienes varias opciones: (1) Minikube - VM local con K8s completo (recomendado para aprender), (2) Docker Desktop - K8s integrado en Windows/Mac, (3) Kind - Kubernetes en Docker (perfecto para testing). Para desarrollo inicial, Minikube es lo mejor. Aprendes en tu laptop sin necesidad de infraestructura cloud.'
    },
    {
      question: '¿Kubernetes en cloud: AWS (EKS) vs Azure (AKS) vs Google (GKE)?',
      answer: 'Los tres son excelentes. Google GKE es el más maduro (Google creó K8s). AWS EKS es el que usarás si estás en AWS. Azure AKS si estás en Azure. El servicio de K8s manejado abstrae la complejidad de mantener el control plane. 95% de empresas usan Kubernetes manejado, no auto-hospedado.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Concepto Base',
      kubernetes: 'Orquestación de contenedores',
      dockerSwarm: 'Orquestación simplificada',
      nomad: 'Orquestador agnóstico'
    },
    {
      feature: 'Complejidad',
      kubernetes: 'Alta (curva empinada)',
      dockerSwarm: 'Baja (muy simple)',
      nomad: 'Media'
    },
    {
      feature: 'Comunidad',
      kubernetes: 'Masiva (CNCF)',
      dockerSwarm: 'Pequeña',
      nomad: 'Creciente (HashiCorp)'
    },
    {
      feature: 'Escalabilidad',
      kubernetes: '5000+ nodos',
      dockerSwarm: '1000+ nodos',
      nomad: '10000+ nodos'
    },
    {
      feature: 'Auto-escalado',
      kubernetes: 'Nativo y avanzado',
      dockerSwarm: 'Manual/limitado',
      nomad: 'Bueno'
    },
    {
      feature: 'Rolling Updates',
      kubernetes: 'Sofisticado (canary, blue/green)',
      dockerSwarm: 'Básico',
      nomad: 'Avanzado'
    },
    {
      feature: 'Ecosystem',
      kubernetes: 'Enorme (Helm, Istio, Prometheus)',
      dockerSwarm: 'Minimal',
      nomad: 'HashiCorp suite'
    },
    {
      feature: 'Adopción Industria',
      kubernetes: 'Google, Amazon, Microsoft, Netflix',
      dockerSwarm: 'Pocas empresas',
      nomad: 'Empresas DevOps forward'
    }
  ];

  return (
    <>
      <SEO
        title="Angular - Framework Web Profesional | Guía Completa | Guía Completa"
        description="Aprende Kubernetes: orquestación, Pods, Deployments, escalado automático, alta disponibilidad y gestión de infraestructura a escala empresarial."
        keywords="angular, framework, typescript, spa, frontend, componentes, servicios, inyección de dependencias"
        url="https://fullstackdevlovers.com/frontend/angular"
        image="/og-kubernetes.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="angular-landing">        {/* Hero Section */}
        <LandingHero
          title="Angular: Framework Web Profesional para SPAs"
          subtitle="Desarrollado y mantenido por Google"
          description="Angular es el framework full-featured para construir aplicaciones web profesionales y escalables. Con inyección de dependencias, templating robusto, TypeScript integrado y CLI poderoso, Angular es la opción para equipos que requieren estructura, tooling enterprise-grade y arquitectura escalable."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          primaryButtonText="Comenzar con Angular →"
          primaryButtonLink="/frontend/angular/introduccion"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
          imageUrl="/src/assets/images/logos/angular-logo.jpeg"
          imageAlt="Angular Logo"
        />

        {/* What is Kubernetes Section */}
        <section className="angular-content">
          <div className="content-container">
            <h2>¿Qué es Angular?</h2>
            <p className="intro-text">
              Angular es un framework TypeScript open-source para construir aplicaciones web single-page (SPAs) empresariales. Creado y mantenido por Google, Angular proporciona una estructura completa con components, services, routing, y tooling que facilita el desarrollo de aplicaciones complejas. para gestionar aplicaciones containerizadas
              a escala. Automatiza el deployment, escalado horizontal y gestión de cientos o miles de contenedores en múltiples servidores,
              garantizando alta disponibilidad, recuperación ante fallos y optimización de recursos.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎼</div>
                <h3>Orquestación Automática</h3>
                <p>Gestiona automáticamente deployment y posicionamiento de contenedores</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Auto-escalado</h3>
                <p>Aumenta o reduce replicas automáticamente según CPU y memoria</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Alta Disponibilidad</h3>
                <p>Recuperación automática ante fallos de nodos y contenedores</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Rolling Updates</h3>
                <p>Actualiza versiones sin downtime con rollback automático</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Balanceo de Carga</h3>
                <p>Distribuye tráfico automáticamente entre replicas</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h3>Gestión de Recursos</h3>
                <p>CPU, memoria y almacenamiento distribuido eficientemente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina Angular con una progresión estructurada desde conceptos básicos hasta orquestación avanzada
            </p>

            <div className="theme-cards-container">
              {angularModule.sections.map((section, idx) => (
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
            <h2>Angular vs React vs Vue</h2>
            <p className="intro-text">
              Comparativa detallada de Angular con otras plataformas de orquestación
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
                      <td className="angular-col">{row.kubernetes}</td>
                      <td>{row.dockerSwarm}</td>
                      <td>{row.nomad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige Kubernetes si:</strong> Trabajas en empresa con infraestructura compleja, necesitas auto-escalado sofisticado,
                quieres estándar de facto con masiva comunidad, o tienes roadmap de crecimiento.
              </p>
              <p>
                <strong>✅ Elige Docker Swarm si:</strong> Tu infra es pequeña, necesitas simplicidad extrema, o ya inversión en Docker.
                Nota: Swarm está en mantenimiento, no recomendado para nuevo.
              </p>
              <p>
                <strong>✅ Elige Nomad si:</strong> Necesitas agnóstico (no solo contenedores), trabajas con VMs/binarios también,
                o prefieres HashiCorp stack completo.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Kubernetes */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar Kubernetes?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>Múltiples servidores/cluster distribuido</li>
                  <li>Aplicaciones que necesitan auto-escalado</li>
                  <li>Alta disponibilidad y uptime 99.99%</li>
                  <li>Microservicios complejos con muchos servicios</li>
                  <li>Infraestructura empresarial crítica</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Tu equipo no tiene expertise en DevOps</li>
                  <li>Usas PaaS (Heroku, Vercel, AWS Beanstalk)</li>
                  <li>Tienes un único servidor o máquina</li>
                  <li>Es startup muy pequeño sin presupuesto DevOps</li>
                  <li>Tu aplicación es simple/monolítica</li>
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
        <section className="angular-cta">
          <div className="cta-content">
            <h2>Comienza tu Viaje con Angular</h2>
            <p>Aprende desde conceptos básicos hasta nivel profesional</p>
            <Link to="/frontend/angular/introduccion" className="cta-button">
              Ir a Fundamentos de Angular →
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
