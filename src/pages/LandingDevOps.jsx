import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingDevOps = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: 'Docker - Containerización',
      description: 'Empaqueta aplicaciones en contenedores para garantizar consistencia entre entornos',
      icon: '🐳',
      link: '/entornos/devops/docker'
    },
    {
      title: 'Docker Compose - Multi-contenedor',
      description: 'Orquesta múltiples contenedores con configuración simple en YAML',
      icon: '🔗',
      link: '/entornos/devops/docker-compose'
    },
    {
      title: 'CI/CD - Automatización',
      description: 'Automatiza pruebas y despliegues para entregas más rápidas y seguras',
      icon: '⚙️',
      link: '/entornos/devops/cicd'
    },
    {
      title: 'GitHub Actions',
      description: 'Configura pipelines directamente en tu repositorio GitHub',
      icon: '🤖',
      link: '/entornos/devops/github-actions'
    },
    {
      title: 'Despliegue en Cloud',
      description: 'Despliega aplicaciones en Vercel, Heroku, AWS o Azure',
      icon: '☁️',
      link: '/entornos/devops/cloud-deployment'
    }
  ];

  const concepts = [
    {
      title: 'Containerización',
      description: 'Empaqueta código, dependencias y ambiente en una unidad autocontenida',
      icon: '📦'
    },
    {
      title: 'CI/CD',
      description: 'Integración continua y despliegue continuo para automatizar el flujo de desarrollo',
      icon: '🔄'
    },
    {
      title: 'Infraestructura como Código',
      description: 'Define toda la infraestructura en archivos versionables',
      icon: '📄'
    },
    {
      title: 'Monitoreo y Observabilidad',
      description: 'Supervisa aplicaciones en producción para detectar problemas rápidamente',
      icon: '📊'
    },
    {
      title: 'Escalabilidad Automática',
      description: 'Adapta recursos automáticamente según la demanda',
      icon: '⚡'
    },
    {
      title: 'Despliegue Zero-Downtime',
      description: 'Actualiza aplicaciones sin interrumpir el servicio',
      icon: '🚀'
    }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>🚀 DevOps & Deployment</h1>
        <p className="lesson-intro">
          Automatización, containerización y despliegue profesional. Aprende a llevar aplicaciones a producción de forma segura y eficiente
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es DevOps?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>DevOps</strong> es una práctica que combina desarrollo (Dev) y operaciones (Ops) para mejorar la velocidad, calidad y confiabilidad del software. No es solo tecnología; es una <strong>mentalidad y conjunto de prácticas</strong> para que los equipos trabajen más eficientemente.
        </p>

        <div style={{
          backgroundColor: '#f8f9ff',
          border: '2px solid #0066cc',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#0066cc' }}>Objetivos Principales</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Velocidad:</strong> Desplegar cambios rápidamente sin comprometer la calidad</li>
            <li><strong>Confiabilidad:</strong> Minimizar errores y downtime en producción</li>
            <li><strong>Automatización:</strong> Reducir trabajo manual y humano en procesos repetitivos</li>
            <li><strong>Observabilidad:</strong> Monitorear y entender lo que sucede en producción</li>
            <li><strong>Colaboración:</strong> Que desarrolladores y DevOps trabajen como un solo equipo</li>
          </ul>
        </div>

        <h3>Beneficios para tu Carrera</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            { icon: '💼', title: 'Alta Demanda', desc: 'Las empresas buscan desesperadamente engineers con DevOps' },
            { icon: '💰', title: 'Mejor Salario', desc: 'DevOps engineers ganan 20-40% más que desarrolladores' },
            { icon: '🌍', title: 'Trabajo Remoto', desc: 'La mayoría de posiciones DevOps son 100% remoto' },
            { icon: '🚀', title: 'Impacto Directo', desc: 'Tu trabajo determina qué tan rápido la empresa innova' }
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Conceptos Clave</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f0f4f8',
              border: '2px solid #0066cc',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#0066cc' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>El Flujo DevOps (Ciclo Infinito)</h2>
        <div style={{
          backgroundColor: '#fff9e6',
          border: '3px solid #ff9800',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <pre style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            margin: 0,
            overflow: 'auto'
          }}>
{`┌─────────────────────────────────────────────────────────┐
│                    CICLO DevOps                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1️⃣  PLAN        → Requisitos y diseño                │
│       ↓                                                │
│  2️⃣  CODE        → Desarrollo en rama (Dev)           │
│       ↓                                                │
│  3️⃣  BUILD       → Compilar y empaquetar             │
│       ↓                                                │
│  4️⃣  TEST        → Pruebas automáticas                │
│       ↓                                                │
│  5️⃣  RELEASE     → Preparar para producción          │
│       ↓                                                │
│  6️⃣  DEPLOY      → Desplegar a producción            │
│       ↓                                                │
│  7️⃣  OPERATE     → Mantener en vivo                  │
│       ↓                                                │
│  8️⃣  MONITOR     → Observar y alertas                │
│       ↓                                                │
│  ↻  Feedback → Mejoras → Vuelta a PLAN              │
│                                                         │
│  Todo automatizado = Ciclo completo en minutos        │
└─────────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>¿Por qué DevOps?</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#ffe6e6',
            border: '2px solid #d32f2f',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#d32f2f' }}>❌ Sin DevOps (Tradicional)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Despliegues cada 6 meses 😫</li>
              <li>Semanas de testing manual</li>
              <li>Miedo a cambios en producción</li>
              <li>Horas de downtime en deployment</li>
              <li>Desarrolladores culpan a Ops y viceversa</li>
              <li>Bugs llevan días en detectarse</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#e6ffe6',
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#28a745' }}>✅ Con DevOps (Moderno)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Despliegues cada hora 🚀</li>
              <li>Tests automáticos en minutos</li>
              <li>Confianza en cambios pequeños</li>
              <li>Zero-downtime deployments</li>
              <li>Un equipo, un objetivo común</li>
              <li>Bugs detectados en segundos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Lecciones</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {lessons.map((lesson, idx) => (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '2px solid #ddd',
              borderRadius: '8px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0066cc';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,102,204,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#ddd';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{lesson.icon}</div>
              <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.1rem' }}>{lesson.title}</h3>
              <p style={{ flex: 1, fontSize: '0.95rem', color: '#666', marginBottom: '1rem' }}>
                {lesson.description}
              </p>
              <button
                onClick={() => navigate(lesson.link)}
                style={{
                  backgroundColor: '#0066cc',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0052a3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0066cc'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#e7f3ff',
        border: '2px solid #0066cc',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>¿Por dónde empezar?</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si eres nuevo en DevOps, te recomendamos este orden:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>1. Docker - Containerización</strong> → Entiende cómo empaquetar aplicaciones</li>
          <li><strong>2. Docker Compose</strong> → Coordina múltiples contenedores localmente</li>
          <li><strong>3. CI/CD - Automatización</strong> → Automatiza el flujo de desarrollo</li>
          <li><strong>4. GitHub Actions</strong> → Implementa CI/CD en tu repositorio</li>
          <li><strong>5. Despliegue en Cloud</strong> → Lleva tu aplicación a producción</li>
        </ol>
      </section>
    </div>
  );
};
