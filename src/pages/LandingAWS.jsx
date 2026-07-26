import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHero, SEO, KotlinThemeCard } from '../components';
import { getModule } from '../config/modulesConfig';
import { getTheme } from '../config/themeColors';
import { useLandingTheme } from '../hooks/useLandingTheme';
import { getThemeByModule } from '../config/landingThemes';

export const LandingAWS = () => {
  // Aplicar tema dinámico con variables CSS
  const landingTheme = getThemeByModule('aws');
  useLandingTheme(landingTheme.primary, landingTheme.dark, landingTheme.lightGradient);
  const theme = getTheme('aws');
  const awsModule = getModule('aws');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!awsModule) return null;

  // Schema Markup para JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'AWS - Cloud Computing Profesional',
    'description': 'Aprende AWS: EC2, RDS, S3, Lambda, DynamoDB, VPC, IAM y arquitectura cloud empresarial a escala',
    'provider': {
      '@type': 'Organization',
      'name': 'Fullstack Dev Lovers',
      'url': 'https://fullstackdevlovers.com'
    },
    'url': 'https://fullstackdevlovers.com/cloud/aws',
    'hasPart': awsModule.sections.flatMap((section, idx) =>
      section.lessons.map((lesson, lidx) => ({
        '@type': 'LearningResource',
        'name': lesson.title,
        'url': `https://fullstackdevlovers.com${lesson.link}`
      }))
    )
  };

  const faqData = [
    {
      question: '¿Qué es AWS y por qué es el #1 en cloud?',
      answer: 'Amazon Web Services es el proveedor de cloud computing líder con 32% del mercado global. Fue pionero (lanzado 2006) y tiene el ecosistema más maduro: 200+ servicios, presencia global (30+ regiones), mejores prácticas documentadas, y adopción masiva de Fortune 500 (Netflix, Uber, LinkedIn, etc). AWS es la opción más segura y demandada en empleabilidad.'
    },
    {
      question: '¿AWS vs Google Cloud vs Azure: cuál aprender?',
      answer: 'AWS es #1: mejor documentación, comunidad más grande, más servicios. Google Cloud es #2: especializado en datos/ML. Azure es #3: mejor si tu empresa usa stack Microsoft. Recomendación: aprende AWS primero. Las skills son 80% transferibles entre clouds. Domina conceptos cloud (VPC, balanceo carga, auto-scaling) y luego otros clouds son fáciles.'
    },
    {
      question: '¿Cuánto cuesta AWS? ¿Puedo quebrarme?',
      answer: 'AWS tiene modelo pay-as-you-go: pagas solo lo que usas. Para desarrollo pequeño (tier gratuita): ~$0. Para producción: depende de uso (app grande: $100-10000/mes). Recomendación: (1) Usa free tier mientras aprendes, (2) Configura alertas de billing, (3) Entiende EC2 spot instances para ahorrar 70%, (4) No dejes recursos activos. No te quebraras si eres cuidadoso.'
    },
    {
      question: '¿Qué servicio AWS debo aprender primero?',
      answer: 'Ruta recomendada: (1) Conceptos: IAM, Regiones, VPC, (2) Compute: EC2 (máquinas virtuales), (3) Storage: S3 (almacenamiento), (4) Database: RDS (SQL), (5) Serverless: Lambda (funciones), (6) Avanzado: Kubernetes (EKS), Microservicios. No intentes aprender todo de una. EC2 + S3 cubre 80% de casos de uso.'
    },
    {
      question: '¿Necesito certificación AWS? ¿Vale la pena?',
      answer: 'Certificación AWS (Solutions Architect, Developer, SysOps) es valiosa para empleabilidad si buscas rol DevOps/Cloud. No es obligatoria para uso básico. Si aprendes sin certificación y haces proyectos reales, eso es más valioso. Certificación cuesta $150 y es prueba de competencia. Recomendación: aprende bien primero, luego considera certificación si la necesitas laboralmente.'
    },
    {
      question: '¿Por qué no simplemente usar Heroku o Firebase?',
      answer: 'Heroku/Firebase son PaaS más simples pero tienen desventajas: (1) Caro a escala (10x más que AWS), (2) Vendor lock-in severo, (3) Menos control, (4) No escalas tanto. AWS es más complejo al inicio pero es inversión que te da skills transferibles, control total y economía. Para MVP: Heroku. Para producción/escala: AWS. Aprende AWS.'
    }
  ];

  const comparisonData = [
    {
      feature: 'Tamaño de Mercado',
      aws: '32% (líder)',
      googleCloud: '11% (en crecimiento)',
      azure: '23% (enterprise)'
    },
    {
      feature: 'Cantidad de Servicios',
      aws: '200+ servicios',
      googleCloud: '100+ servicios',
      azure: '150+ servicios'
    },
    {
      feature: 'Documentación',
      aws: 'Excelente (mejor del mercado)',
      googleCloud: 'Buena',
      azure: 'Buena (orientada a Enterprise)'
    },
    {
      feature: 'Comunidad',
      aws: 'Masiva (millones de devs)',
      googleCloud: 'Creciente (DataScience)',
      azure: 'Enterprise'
    },
    {
      feature: 'Precio',
      aws: 'Competitivo',
      googleCloud: 'Generalmente más barato',
      azure: 'Más barato si usas Microsoft'
    },
    {
      feature: 'Especialidad',
      aws: 'Propósito general (todo)',
      googleCloud: 'Data, AI/ML, Kubernetes',
      azure: 'Enterprise, Office 365'
    },
    {
      feature: 'Curva de Aprendizaje',
      aws: 'Media (complejo)',
      googleCloud: 'Media',
      azure: 'Media-Alta'
    },
    {
      feature: 'Adopción Industria',
      aws: 'Netflix, Uber, Airbnb, LinkedIn',
      googleCloud: 'Google, Spotify, eBay',
      azure: 'Microsoft, Intel, GE'
    }
  ];

  return (
    <>
      <SEO
        title="AWS - Cloud Computing Profesional | Guía Completa"
        description="Aprende AWS: EC2, RDS, S3, Lambda, DynamoDB, VPC e IAM. Domina la plataforma cloud más demandada en empresas Fortune 500."
        keywords="aws, cloud, ec2, s3, rds, lambda, dynamodb, iam, vpc, cloud computing"
        url="https://fullstackdevlovers.com/cloud/aws"
        image="/og-aws.png"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="aws-landing">
        <LandingHero
          title="AWS: El Estándar de Cloud Computing"
          subtitle="Usado por Netflix, Uber, Airbnb y 87% de Fortune 500"
          description="Amazon Web Services es el proveedor de cloud computing líder del mercado (32% de cuota). Con 200+ servicios, presencia global en 30+ regiones y documentación de clase mundial, AWS te permite construir, escalar y desplegar aplicaciones empresariales con confianza."
          primaryColor={landingTheme.primary}
          darkColor={landingTheme.dark}
          lightGradientColor={landingTheme.lightGradient}
          imageUrl="/src/assets/images/logos/aws.png"
          imageAlt="AWS Logo"
          primaryButtonText="Comenzar con AWS →"
          primaryButtonLink="/cloud/aws/fundamentales/intro"
          secondaryButtonText="Ver comparativa"
          secondaryButtonLink="#comparativa"
        />

        {/* What is AWS Section */}
        <section className="aws-content">
          <div className="content-container">
            <h2>¿Qué es AWS?</h2>
            <p className="intro-text">
              AWS es una plataforma de cloud computing que proporciona infraestructura, plataforma y software como servicio (IaaS, PaaS, SaaS).
              En lugar de comprar servidores físicos, usas los servidores de Amazon bajo demanda, pagando solo por lo que usas.
              Diseñado para startup hasta empresas Fortune 500, con escalabilidad, seguridad y confiabilidad de clase mundial.
            </p>

            {/* Key Features */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Pay-As-You-Go</h3>
                <p>Paga solo lo que usas, sin compromisos ni cargos iniciales</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Global Infrastructure</h3>
                <p>Despliega en 30+ regiones para baja latencia y redundancia global</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Escalabilidad Automática</h3>
                <p>Tu aplicación crece o se reduce automáticamente según demanda</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Seguridad Multicapa</h3>
                <p>Protección de datos en tránsito y en reposo con encriptación</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>99.99% Uptime</h3>
                <p>Diseñado para alta disponibilidad y máxima protección de datos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Managed Services</h3>
                <p>AWS gestiona infraestructura, tú solo enfócate en código</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="learning-topics">
          <div className="content-container">
            <h2>Temas de Aprendizaje</h2>
            <p className="intro-text">
              Domina AWS con una progresión estructurada desde conceptos fundamentales hasta arquitectura empresarial compleja
            </p>

            <div className="theme-cards-container">
              {awsModule.sections.map((section, idx) => (
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
            <h2>AWS vs Google Cloud vs Azure</h2>
            <p className="intro-text">
              Comparativa detallada de AWS con otros proveedores de cloud
            </p>

            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>AWS</th>
                    <th>Google Cloud</th>
                    <th>Azure</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name">{row.feature}</td>
                      <td className="aws-col">{row.aws}</td>
                      <td>{row.googleCloud}</td>
                      <td>{row.azure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-conclusion">
              <p>
                <strong>✅ Elige AWS si:</strong> Quieres las mejores oportunidades laborales, necesitas la mejor documentación,
                buscas ecosistema más maduro, o tu empresa ya está en AWS.
              </p>
              <p>
                <strong>✅ Elige Google Cloud si:</strong> Tu especialidad es Data Science/ML, necesitas máximo precio competitivo,
                o trabajas en empresa que usa Google stack.
              </p>
              <p>
                <strong>✅ Elige Azure si:</strong> Tu empresa usa Microsoft stack (Office 365, Dynamics), necesitas integración Enterprise,
                o prefieres soporte local Microsoft.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use AWS */}
        <section className="when-to-use">
          <div className="content-container">
            <h2>¿Cuándo Usar AWS?</h2>

            <div className="use-case-grid">
              <div className="use-case">
                <h3>✅ Ideal para:</h3>
                <ul>
                  <li>Aplicaciones que necesitan escalar globalmente</li>
                  <li>Microservicios y arquitectura distribuida</li>
                  <li>Big Data y procesamiento masivo</li>
                  <li>Aplicaciones empresariales críticas</li>
                  <li>Startups que crecen rápidamente</li>
                </ul>
              </div>
              <div className="use-case">
                <h3>⚠️ Considera alternativas si:</h3>
                <ul>
                  <li>Es MVP o prototipo rápido (usa PaaS: Heroku, Vercel)</li>
                  <li>Tu equipo no tiene expertise en DevOps</li>
                  <li>Tu app es simple y no necesita escala</li>
                  <li>Necesitas máxima simplicidad (Firebase/Serverless)</li>
                  <li>Tienes presupuesto muy limitado (AWS puede ser caro)</li>
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
        <section className="aws-cta">
          <div className="cta-content">
            <h2>Comienza tu Viaje en AWS Hoy</h2>
            <p>Aprende desde conceptos básicos hasta arquitectura profesional en cloud</p>
            <Link to="/cloud/aws/fundamentales/intro" className="cta-button">
              Ir a Fundamentos de AWS →
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
    'servicios': '🔧',
    'redes': '🌐',
    'deployment': '🚀',
    'operaciones': '⚙️',
    'integracion': '🔌',
    'proyecto': '🏗️'
  };
  return icons[sectionId] || '📄';
}

function getColorForSection(index) {
  const colors = ['#ff9800', '#f57c00'];
  return colors[index % colors.length];
}
