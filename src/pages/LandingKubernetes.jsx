import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { Breadcrumb } from '../components/Breadcrumb';

export const LandingKubernetes = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lessons = [
    {
      title: 'Introducción: Qué es Kubernetes',
      description: 'Conceptos básicos, arquitectura y por qué necesitas Kubernetes',
      icon: '☸️',
      link: '/kubernetes/fundamentales/intro'
    },
    {
      title: 'Pods: La unidad más pequeña',
      description: 'Entiende qué es un Pod y cómo funcionan los contenedores',
      icon: '📦',
      link: '/kubernetes/fundamentales/pods'
    },
    {
      title: 'Deployments: Gestión de réplicas',
      description: 'Despliegue automático, escalado y actualizaciones sin downtime',
      icon: '🚀',
      link: '/kubernetes/fundamentales/deployments'
    },
    {
      title: 'Docker vs Kubernetes',
      description: 'Entiende cuándo usar Docker y cuándo Kubernetes',
      icon: '🔄',
      link: '/docker/comparacion-docker-vs-kubernetes'
    }
  ];

  const concepts = [
    {
      title: 'Orquestación',
      description: 'Gestiona automáticamente múltiples contenedores en múltiples servidores',
      icon: '🎼'
    },
    {
      title: 'Auto-escalado',
      description: 'Aumenta o reduce réplicas automáticamente según la carga',
      icon: '📈'
    },
    {
      title: 'Alta Disponibilidad',
      description: 'Recuperación automática ante fallos de servidores o contenedores',
      icon: '🛡️'
    },
    {
      title: 'Rolling Updates',
      description: 'Actualiza versiones sin interrumpir el servicio',
      icon: '🔄'
    },
    {
      title: 'Balanceo de Carga',
      description: 'Distribuye tráfico automáticamente entre réplicas',
      icon: '⚖️'
    },
    {
      title: 'Gestión de Recursos',
      description: 'CPU, memoria y almacenamiento distribuido eficientemente',
      icon: '⚙️'
    }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
      <div className="lesson-header">
        <h1>Kubernetes</h1>
        <p className="lesson-intro">
          Orquestación de contenedores a escala empresarial. Automatiza el despliegue, escalado y gestión de aplicaciones en producción
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es Kubernetes?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>Kubernetes (K8s)</strong> es un <strong>orquestador de contenedores</strong> que automatiza el despliegue, escalado y gestión de aplicaciones.
          Mientras que Docker empaqueta tu aplicación en contenedores, Kubernetes gestiona <strong>cientos o miles de contenedores</strong> en múltiples servidores
          de forma automática, garantizando alta disponibilidad y rendimiento óptimo.
        </p>

        <div style={{
          backgroundColor: '#f0f4ff',
          border: '2px solid #9c27b0',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#9c27b0' }}>¿Por qué Kubernetes?</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Producción a Escala:</strong> Gestiona miles de contenedores automáticamente</li>
            <li><strong>Alta Disponibilidad:</strong> Recuperación automática ante fallos</li>
            <li><strong>Escalabilidad:</strong> Aumenta/reduce recursos según la demanda</li>
            <li><strong>Despliegues Seguros:</strong> Rolling updates sin downtime</li>
            <li><strong>Estándar Industria:</strong> Usado por Google, Amazon, Microsoft y Netflix</li>
            <li><strong>Open Source:</strong> Comunidad global y soporte empresarial</li>
          </ul>
        </div>

        <h3>Por qué aprender Kubernetes</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            { icon: '💼', title: 'Demanda Laboral', desc: 'Las grandes empresas requieren engineers K8s' },
            { icon: '📈', title: 'Carrera Premium', desc: 'Especialidad bien remunerada y en crecimiento' },
            { icon: '🌍', title: 'Relevancia Global', desc: 'Estándar de facto para DevOps moderno' },
            { icon: '🚀', title: 'Impacto Directo', desc: 'Tus decisiones afectan toda la infraestructura' }
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
        <h2>Conceptos Clave de Kubernetes</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f0f4ff',
              border: '2px solid #9c27b0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#9c27b0' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Arquitectura de Kubernetes</h2>
        <div style={{
          backgroundColor: '#f5f5f5',
          border: '3px solid #9c27b0',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <pre style={{
            fontSize: '0.9rem',
            lineHeight: '1.6',
            margin: 0,
            overflow: 'auto'
          }}>
{`┌──────────────────────────────────────────────────┐
│       ARQUITECTURA DE KUBERNETES CLUSTER         │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌─────────────────────────────────────┐         │
│  │     CONTROL PLANE (Master)          │         │
│  ├─────────────────────────────────────┤         │
│  │ • API Server    → REST API central  │         │
│  │ • etcd          → Base de datos     │         │
│  │ • Scheduler     → Asigna Pods       │         │
│  │ • Controllers   → Gestiona estado   │         │
│  └─────────────────────────────────────┘         │
│              ↓ ↓ ↓                               │
│  ┌─────────────────────────────────────┐         │
│  │      WORKER NODES (Servidores)      │         │
│  ├─────────────────────────────────────┤         │
│  │ Nodo 1        Nodo 2        Nodo 3  │         │
│  │ ┌─────────┐  ┌─────────┐  ┌──────┐ │         │
│  │ │ Pod 🐳  │  │ Pod 🐳  │  │Pod 🐳│ │         │
│  │ │ Pod 🐳  │  │ Pod 🐳  │  │Pod 🐳│ │         │
│  │ └─────────┘  └─────────┘  └──────┘ │         │
│  │ • Kubelet    (Agent en cada nodo)   │         │
│  │ • Container Runtime (Docker, etc)   │         │
│  └─────────────────────────────────────┘         │
│                                                  │
│  Todo coordenado automáticamente por K8s        │
└──────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Docker vs Kubernetes</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#2196F3' }}>Docker</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Empaqueta código en contenedores</li>
              <li>Para desarrollo y testing local</li>
              <li>Un servidor o máquina</li>
              <li>Gestión manual de contenedores</li>
              <li>Perfecto para comenzar</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            border: '2px solid #9c27b0',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#9c27b0' }}>Kubernetes</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Orquesta contenedores Docker</li>
              <li>Para producción a escala</li>
              <li>Múltiples servidores (cluster)</li>
              <li>Gestión automática completa</li>
              <li>Necesario para empresas</li>
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
              e.currentTarget.style.borderColor = '#9c27b0';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,39,176,0.15)';
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
                  backgroundColor: '#9c27b0',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#7b1fa2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#9c27b0'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#f3e5f5',
        border: '2px solid #9c27b0',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>Ruta de Aprendizaje Recomendada</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si eres nuevo en Kubernetes, te recomendamos este orden:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>Domina Docker primero</strong> → Entiende contenedores completamente</li>
          <li><strong>Introducción: Qué es Kubernetes</strong> → Aprende la arquitectura</li>
          <li><strong>Pods: La unidad más pequeña</strong> → Entiende los bloques básicos</li>
          <li><strong>Deployments: Gestión de réplicas</strong> → Despliegues automáticos</li>
          <li><strong>Docker vs Kubernetes</strong> → Clarifica cuándo usar cada uno</li>
          <li><strong>Práctica local</strong> → Usa Minikube o Docker Desktop para practicar</li>
        </ol>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#fff9c4',
        border: '2px solid #fbc02d',
        borderRadius: '8px',
        padding: '1.5rem'
      }}>
        <h3 style={{ marginTop: 0, color: '#f57f17' }}>Consejo Profesional</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
          No es necesario aprender Kubernetes si estás comenzando. Primero domina Docker completamente y asegúrate de que realmente lo necesitas.
          Kubernetes añade complejidad significativa pero es imprescindible para infraestructuras empresariales.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: 0 }}>
          Muchos equipos usan PaaS (como Heroku o Vercel) en lugar de Kubernetes porque gestionan la orquestación por ti.
          Elige lo que se adapte a tu escala y necesidades reales.
        </p>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/docker/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#333',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #ddd'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'} onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}>
            ← Volver a Docker
          </a>
          <a href="/docker/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#9c27b0',
            color: '#ffffff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#7b1fa2'} onMouseOut={(e) => e.target.style.backgroundColor = '#9c27b0'}>
            Más sobre Docker →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
