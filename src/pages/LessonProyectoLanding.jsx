import { Link } from 'react-router-dom';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import './LessonProyectoLanding.css';

export function LessonProyectoLanding() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <div className="proyecto-landing">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div style={{
          padding: '0 20px',
          marginTop: '1rem',
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: '#7f8c8d',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {breadcrumbs.map((crumb, index) => (
            <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {index > 0 && <span style={{ color: '#bdc3c7' }}>›</span>}
              <a href={crumb.url || '#'} style={{
                color: '#3498db',
                textDecoration: 'none',
                fontWeight: index === breadcrumbs.length - 1 ? 'bold' : 'normal'
              }}>
                {crumb.label}
              </a>
            </span>
          ))}
        </div>
      )}
      {/* Hero Section */}
      <section className="proyecto-hero">
        <div className="container">
          <h1>TFC</h1>
          <p className="subtitle">Crea tu Trabajo Fin de Ciclo desde cero hasta producción</p>
          <p className="description">
            Una guía completa que te enseña a planificar, desarrollar, testear y desplegar un proyecto web full-stack.
            Basado en metodología SCRUM con 8 retos prácticos del currículo DAW.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="proyecto-content">
        <div className="container">
          <div className="content-grid">
            {/* Left Column */}
            <div className="content-left">
              <h2>¿Qué Aprenderás?</h2>

              <div className="learning-blocks">
                <div className="learning-block">
                  <h3>Planificación</h3>
                  <p>Define requisitos, especificaciones y arquitectura de tu proyecto. Análisis de viabilidad y diseño.</p>
                  <Link to="/proyecto/planificacion/definicion" className="link-btn">
                    Explorar →
                  </Link>
                </div>

                <div className="learning-block">
                  <h3>Metodología SCRUM</h3>
                  <p>Aprende Agile, estructura sprints, define user stories y usa Taiga para gestión del proyecto.</p>
                  <Link to="/proyecto/metodologia/agile-scrum" className="link-btn">
                    Explorar →
                  </Link>
                </div>

                <div className="learning-block">
                  <h3>Desarrollo</h3>
                  <p>Implementa backend con Spring Boot, diseña APIs REST, gestiona bases de datos y seguridad.</p>
                  <Link to="/proyecto/desarrollo/setup" className="link-btn">
                    Explorar →
                  </Link>
                </div>

                <div className="learning-block">
                  <h3>Testing</h3>
                  <p>Tests unitarios con JUnit, integración con MockMvc, validación E2E antes de producción.</p>
                  <Link to="/proyecto/testing/unitario" className="link-btn">
                    Explorar →
                  </Link>
                </div>

                <div className="learning-block">
                  <h3>Despliegue</h3>
                  <p>Build con Maven, documentación profesional, deployment en AWS/cloud y monitoreo.</p>
                  <Link to="/proyecto/despliegue/build" className="link-btn">
                    Explorar →
                  </Link>
                </div>

                <div className="learning-block">
                  <h3>Ejemplos TFC</h3>
                  <p>12+ proyectos viables para tu Trabajo de Fin de Curso con diferenciadores reales.</p>
                  <Link to="/proyecto/planificacion/ejemplos" className="link-btn">
                    Explorar →
                  </Link>
                </div>

                <div className="learning-block">
                  <h3>Retos DAW</h3>
                  <p>Los 8 Retos oficiales del currículo con especificaciones completas y soluciones recomendadas.</p>
                  <Link to="/proyecto/retos" className="link-btn">
                    Ver Retos →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="content-right">
              <div className="info-card">
                <h3>Estructura</h3>
                <div className="info-item">
                  <span className="label">Secciones:</span>
                  <span className="value">6</span>
                </div>
                <div className="info-item">
                  <span className="label">Lecciones:</span>
                  <span className="value">14</span>
                </div>
                <div className="info-item">
                  <span className="label">Retos DAW:</span>
                  <span className="value">8</span>
                </div>
                <div className="info-item">
                  <span className="label">Ejemplos TFC:</span>
                  <span className="value">12+</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Caso de Estudio</h3>
                <p>
                  <strong>JoMa E-commerce</strong>
                </p>
                <p className="small-text">
                  Proyecto completo de tienda online con 3 sprints de desarrollo, implementado por Marc (Frontend) y Jonathan (Backend). Incluye autenticación, catálogo, carrito y checkout.
                </p>
              </div>

              <div className="info-card">
                <h3>Tiempo Estimado</h3>
                <p className="highlight">5-6 meses</p>
                <p className="small-text">
                  Dedicando 20 horas/semana por persona en un equipo de 2-3 desarrolladores.
                </p>
              </div>

              <div className="info-card">
                <h3>Tecnologías</h3>
                <div className="tech-list">
                  <span className="tech-tag">Java 17</span>
                  <span className="tech-tag">Spring Boot</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">JPA/Hibernate</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">JUnit 5</span>
                  <span className="tech-tag">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="proyecto-links">
        <div className="container">
          <h2>Comienza Aquí</h2>
          <div className="links-grid">
            <Link to="/proyecto/planificacion/definicion" className="quick-link">
              <span className="icon">📋</span>
              <span className="text">Definir Proyecto</span>
            </Link>
            <Link to="/proyecto/planificacion/ejemplos" className="quick-link">
              <span className="icon">💡</span>
              <span className="text">Ver Ejemplos TFC</span>
            </Link>
            <Link to="/proyecto/metodologia/agile-scrum" className="quick-link">
              <span className="icon">⚡</span>
              <span className="text">Aprender SCRUM</span>
            </Link>
            <Link to="/proyecto/metodologia/sprint-1" className="quick-link">
              <span className="icon">🚀</span>
              <span className="text">Ver Sprint 1</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
