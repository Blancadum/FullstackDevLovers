import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingDocker = () => {
  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('docker');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const theme = getTheme('docker');
  const dockerModule = getModule('docker');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!dockerModule) return null;

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Docker - Containerización Profesional',
    'description': 'Aprende Docker: contenerización, imágenes, Dockerfile, Docker Compose y orquestación para aplicaciones escalables',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/cloud/docker',
    'hasPart': dockerModule.sections.flatMap((section, idx) =>
      section.lessons.map((lesson, lidx) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    )
  };

  const faqData = [
    {
      question: '¿Qué es Docker y por qué lo necesito?',
      answer: 'Docker es una plataforma de containerización que empaqueta tu aplicación con todas sus dependencias en un contenedor aislado. Permite que el código se ejecute de forma idéntica en cualquier máquina (desarrollo, testing, producción), eliminando el problema "pero en mi máquina funciona". Es el estándar de la industria para deployment moderno.'
    },
    {
      question: '¿Docker vs Máquinas Virtuales: Cuál es la diferencia?',
      answer: 'Las máquinas virtuales (VM) virtualizan hardware completo (SO incluido), consumiendo GB de RAM cada una. Docker virtualiza solo el sistema de archivos, compartiendo el kernel del SO, siendo mucho más ligero (~MB). Docker es 10x más rápido de iniciar y consume 10x menos recursos. Para aplicaciones modernas, Docker es la opción correcta.'
    },
    {
      question: '¿Necesito aprender Kubernetes si uso Docker?',
      answer: 'No es obligatorio. Docker es perfecto para desarrollo y máquinas individuales. Kubernetes es para orquestación a escala empresarial (cientos de contenedores en múltiples servidores). Si tu startup tiene un servidor o uses PaaS (Heroku, Vercel), Docker es suficiente. Kubernetes lo aprendes solo si lo necesitas realmente.'
    },
    {
      question: '¿Puedo correr contenedores en Windows o Mac?',
      answer: 'Sí. Docker Desktop (Windows/Mac) instala automáticamente una máquina virtual Linux ligera que corre los contenedores. En producción usas Linux puro. Para desarrollo, Docker Desktop funciona perfectamente y se integra nativamente con WSL2 en Windows 11.'
    },
    {
      question: '¿Cuál es la diferencia entre una imagen y un contenedor?',
      answer: 'Una imagen Docker es como un "molde" o "snapshot" (archivo de solo lectura). Un contenedor es una instancia ejecutándose de esa imagen. Analógicamente: la imagen es el plano de una casa, el contenedor es la casa construida. Puedes tener múltiples contenedores corriendo de la misma imagen.'
    },
    {
      question: '¿Dónde almaceno mis imágenes Docker?',
      answer: 'Docker Hub es el registro público central (como GitHub para imágenes). Ahí encuentras imágenes oficiales (nginx, postgres, redis, etc). También puedes crear un registro privado (AWS ECR, Azure Container Registry) para tus imágenes propietarias. Las empresas típicamente usan registros privados.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Concepto Base',
      docker: 'Contenerización',
      podman: 'Contenerización (daemon-less)',
      containerd: 'Container Runtime (bajo nivel)'
    },
    {
      feature: 'Arquitectura',
      docker: 'Cliente-Servidor (daemon)',
      podman: 'Sin daemon (rootless)',
      containerd: 'Especifico para orquestadores'
    },
    {
      feature: 'Facilidad de Uso',
      docker: 'Muy fácil (principiantes)',
      podman: 'Muy similar a Docker',
      containerd: 'Para expertos/herramientas'
    },
    {
      feature: 'Compatibilidad',
      docker: 'Estándar industria',
      podman: 'Compatible Docker (casi)',
      containerd: 'Bajo nivel (no interactivo)'
    },
    {
      feature: 'Seguridad Rootless',
      docker: 'Experimental',
      podman: 'Nativa',
      containerd: 'Soportado'
    },
    {
      feature: 'Comunidad',
      docker: 'Masiva (11M+ imágenes Hub)',
      podman: 'Creciente (RedHat)',
      containerd: 'Desarrolladores'
    },
    {
      feature: 'Caso de Uso',
      docker: 'Desarrollo y producción',
      podman: 'Alternativa Docker pura',
      containerd: 'Backend de Kubernetes'
    },
    {
      feature: 'Costo',
      docker: 'Gratis (Desktop $12/mes pro)',
      podman: 'Gratis',
      containerd: 'Gratis'
    }
  ];

  return (
    <>
      <SEO
        title="Docker - Containerización Profesional | Guía Completa"
        description="Aprende Docker: contenerización, imágenes, Dockerfile, Docker Compose y orquestación. Domina la tecnología esencial para deployment moderno y CI/CD."
        keywords="docker, containerización, dockerfile, docker compose, contenedores, deployment, devops, ci/cd"
        url="https://fullstackdevlovers.com/cloud/docker"
        image="/og-docker.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="docker-landing">
        <LandingHero
          title="Docker: La Revolución del Deployment"
          subtitle="Usado por Netflix, Uber, Spotify y empresas Fortune 500"
          description="Docker es el estándar de la industria para containerización y deployment moderno. Empaqueta tu aplicación con todas sus dependencias en contenedores aislados que se ejecutan idénticamente en cualquier lugar: tu laptop, servidor de staging o producción. Sin sorpresas, sin incompatibilidades."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          imageUrl="/src/assets/images/logos/docker-lgo.png"
          imageAlt="Docker Logo"
          primaryButtonText="Comenzar con Docker →"
          primaryButtonLink="/cloud/docker/fundamentales/intro"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
        />

        {/* What is Docker Section */}
        <section className="docker-content">
          <div className="content-container">
            <h2>¿Qué es Docker?</h2>
            <p className="intro-text">
              Docker es una plataforma de containerización que permite empaquetar aplicaciones con todas sus dependencias
              (librerías, runtimes, configuración) en un contenedor aislado. El contenedor es lightweight (MB, no GB),
              portátil (corre en cualquier OS) y reproducible (mismo comportamiento siempre).
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Portabilidad Total</h3>
                <p>Tu aplicación se ejecuta idénticamente en desarrollo, testing y producción</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Lightweight & Rápido</h3>
                <p>MB de tamaño, inicia en segundos. Mucho más eficiente que máquinas virtuales</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Aislamiento Seguro</h3>
                <p>Procesos completamente aislados sin interferencia entre contenedores</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛠️</div>
                <h3>Dockerfile - IaC</h3>
                <p>Define tu entorno como código reproducible y versionable</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Escalabilidad Sencilla</h3>
                <p>Lanza múltiples contenedores de la misma imagen en segundos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Ecosystem Masivo</h3>
                <p>Docker Hub: 11M+ imágenes públicas. Comunidad gigante de soporte</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina Docker con una progresión estructurada desde contenerización básica hasta orquestación avanzada
            </p>

            <div className="theme-cards-container">
              {dockerModule.sections.map((section, idx) => (
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
            <h2>Docker vs Podman vs Containerd</h2>
            <p className="intro-text">
              Comparativa detallada de Docker con otras plataformas de containerización
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Docker</th>
                    <th>Podman</th>
                    <th>Containerd</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="docker-col">{row.docker}</td>
                      <td>{row.podman}</td>
                      <td>{row.containerd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige Docker si:</strong> Eres principiante, necesitas comunidad masiva, quieres el estándar de facto,
                o trabajarás en empresas (95% usan Docker). Docker Desktop te simplifica la vida.
              </p>
              <p>
                <strong>✅ Elige Podman si:</strong> Prefieres rootless por defecto, quieres daemon-less, o trabajas en RedHat/Kubernetes.
                Podman es casi idéntico a Docker (comandos intercambiables).
              </p>
              <p>
                <strong>✅ Elige Containerd si:</strong> Eres experto en infraestructura, trabajas directamente con Kubernetes,
                o necesitas un runtime de bajo nivel sin interfaz de usuario.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Docker */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar Docker?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>Desarrollo local que replicar en producción</li>
                  <li>Microservicios y arquitectura distribuida</li>
                  <li>CI/CD pipelines automatizados</li>
                  <li>Orquestación con Kubernetes</li>
                  <li>Equipos trabajando en diferentes OS</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Tu aplicación es monolítica y no se mueve</li>
                  <li>Necesitas overhead bajo (aplicaciones embebidas/IoT)</li>
                  <li>Usas PaaS (Heroku, Vercel) que manejan deployment</li>
                  <li>Tu infra es legacy y no soporta contenedores</li>
                  <li>Tienes equipo sin experiencia en DevOps</li>
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
        <section className="docker-cta">
          <div className="cta-content">
            <h2>Comienza tu Viaje en Docker Hoy</h2>
            <p>Aprende desde conceptos básicos hasta arquitecturas profesionales de microservicios</p>
            <Link to="/cloud/docker/fundamentales/intro" className="cta-button">
              Ir a Fundamentos de Docker →
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
    'composicion': '🔗',
    'avanzado': '🚀',
    'frameworks': '🛠️'
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#2196f3', '#1976d2'];
  return colors[index % colors.length];
}
