import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { Breadcrumb } from '../components/Breadcrumb';

export const LandingDocker = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lessons = [
    {
      title: 'Introducción a Docker',
      description: 'Qué es containerización y por qué Docker revolucionó el deployment',
      icon: '📚',
      link: '/docker/fundamentales/intro'
    },
    {
      title: 'Conceptos Fundamentales',
      description: 'Imágenes, contenedores, registros y diferencias con máquinas virtuales',
      icon: '🏗️',
      link: '/docker/fundamentales/conceptos'
    },
    {
      title: 'Dockerfile',
      description: 'Escribe archivos Dockerfile para construir imágenes personalizadas',
      icon: '📝',
      link: '/docker/fundamentales/dockerfile'
    },
    {
      title: 'Comandos de Docker',
      description: 'run, exec, build, push, pull y otros comandos esenciales',
      icon: '⌨️',
      link: '/docker/fundamentales/comandos'
    },
    {
      title: 'Docker Compose',
      description: 'Orquesta múltiples contenedores con YAML',
      icon: '🔗',
      link: '/docker/composicion/compose'
    },
    {
      title: 'Networking',
      description: 'Conecta contenedores entre sí y con aplicaciones externas',
      icon: '🌐',
      link: '/docker/composicion/networking'
    },
    {
      title: 'Volúmenes y Persistencia',
      description: 'Gestiona datos persistentes en contenedores',
      icon: '💾',
      link: '/docker/composicion/volumenes'
    },
    {
      title: 'Multistage Builds',
      description: 'Optimiza imágenes usando builds de múltiples etapas',
      icon: '⚡',
      link: '/docker/avanzado/multistage'
    },
    {
      title: 'Optimización de Imágenes',
      description: 'Reduce tamaño de imágenes y mejora rendimiento',
      icon: '📉',
      link: '/docker/avanzado/optimizacion'
    },
    {
      title: 'Docker para Java',
      description: 'Containeriza aplicaciones Java con Spring Boot',
      icon: '☕',
      link: '/docker/frameworks/java'
    },
    {
      title: 'Docker para Node.js',
      description: 'Despliega aplicaciones Node y Express en contenedores',
      icon: '📦',
      link: '/docker/frameworks/nodejs'
    },
    {
      title: 'Debugging y Troubleshooting',
      description: 'Resuelve problemas en contenedores',
      icon: '🔧',
      link: '/docker/avanzado/debugging'
    }
  ];

  const concepts = [
    {
      title: 'Consistencia de Entornos',
      description: 'Lo que funciona en desarrollo funciona en producción',
      icon: '✅'
    },
    {
      title: 'Portabilidad',
      description: 'Ejecuta contenedores en cualquier máquina con Docker instalado',
      icon: '🚚'
    },
    {
      title: 'Aislamiento',
      description: 'Procesos aislados sin interferencia entre aplicaciones',
      icon: '🔒'
    },
    {
      title: 'Escalabilidad',
      description: 'Despliega miles de contenedores en segundos',
      icon: '📈'
    },
    {
      title: 'Eficiencia de Recursos',
      description: 'Más ligero que máquinas virtuales, mejor que procesos locales',
      icon: '⚙️'
    },
    {
      title: 'Reproducibilidad',
      description: 'Exactamente el mismo entorno cada vez que ejecutas',
      icon: '🔄'
    },
    {
      title: 'Integración CI/CD',
      description: 'Se integra perfectamente en pipelines automatizados',
      icon: '🚀'
    },
    {
      title: 'Comunidad Masiva',
      description: 'Millones de imágenes prehechas en Docker Hub',
      icon: '🌟'
    }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
      <div className="lesson-header">
        <h1>Containerización con Docker</h1>
        <p className="lesson-intro">
          Docker es la plataforma de containerización más popular del mundo. Aprende a empaquetar, distribuir y ejecutar aplicaciones en contenedores seguros y eficientes
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es Docker?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>Docker</strong> es una plataforma de containerización que te permite empaquetar tu aplicación, dependencias y ambiente en una unidad autocontenida llamada contenedor. Es como un "mini-SO" con todo lo que necesita tu app para funcionar.
        </p>

        <div style={{
          backgroundColor: '#e3f2fd',
          border: '2px solid #2196f3',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#2196f3' }}>Revolución de Docker</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Problema Resuelto:</strong> "En mi máquina funciona" ya no es excusa</li>
            <li><strong>Velocidad:</strong> Deploy en segundos en lugar de horas</li>
            <li><strong>Escalabilidad:</strong> De 1 a 1,000 instancias sin cambios</li>
            <li><strong>Eficiencia:</strong> Usa 50-80% menos recursos que VMs</li>
            <li><strong>Estandarización:</strong> Todo el equipo usa el mismo ambiente</li>
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
            { icon: '💼', title: 'Skill Esencial', desc: 'Todo desarrollador moderno debe saber Docker' },
            { icon: '🚀', title: 'DevOps Gateway', desc: 'Puerta de entrada al mundo DevOps y Cloud' },
            { icon: '🌍', title: 'Portabilidad Profesional', desc: 'Aplica mismo conocimiento en cualquier proyecto' },
            { icon: '💡', title: 'Problem Solver', desc: 'Resuelve problemas de entornos automáticamente' }
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
        <h2>Conceptos Clave de Docker</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f3e5f5',
              border: '2px solid #2196f3',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#2196f3' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Ciclo de vida de un Contenedor Docker</h2>
        <div style={{
          backgroundColor: '#e8f5e9',
          border: '3px solid #2196f3',
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
{`┌──────────────────────────────────────────────────────┐
│        CICLO DE VIDA DE UN CONTENEDOR DOCKER         │
├──────────────────────────────────────────────────────┤
│                                                      │
│  1️⃣  ESCRIBIR DOCKERFILE                           │
│      • FROM ubuntu:22.04                           │
│      • RUN apt-get install java                    │
│      • COPY app.jar /app/                          │
│      • CMD ["java", "-jar", "app.jar"]             │
│       ↓                                             │
│  2️⃣  BUILD IMAGEN                                  │
│      docker build -t mi-app:1.0 .                  │
│       ↓                                             │
│  3️⃣  PUSH A REGISTRY (Opcional)                    │
│      docker push docker.io/mi-app:1.0              │
│       ↓                                             │
│  4️⃣  RUN CONTENEDOR                                │
│      docker run -p 8080:8080 mi-app:1.0            │
│       ↓                                             │
│  5️⃣  CONTENEDOR EJECUTÁNDOSE                       │
│      • Aislado en su propio ambiente               │
│      • Accesible vía puertos especificados         │
│      • Puede escalarse con Docker Compose          │
│       ↓                                             │
│  6️⃣  MONITOREO Y LOGS                              │
│      docker logs <container-id>                    │
│      docker exec <container-id> /bin/bash          │
│       ↓                                             │
│  7️⃣  STOP Y CLEANUP                                │
│      docker stop <container-id>                    │
│      docker rm <container-id>                      │
│                                                      │
└──────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Docker vs Máquinas Virtuales</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#ffebee',
            border: '2px solid #d32f2f',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#d32f2f' }}>Máquinas Virtuales</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Emula hardware completo</li>
              <li>Incluye SO completo (GBs)</li>
              <li>Tarda minutos en iniciarse</li>
              <li>Alto consumo de recursos</li>
              <li>Portabilidad limitada</li>
              <li>Escalamiento lento</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Docker Containers</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Aislamiento a nivel SO</li>
              <li>Mínimo overhead (MBs)</li>
              <li>Inicia en milisegundos</li>
              <li>Eficiencia de recursos</li>
              <li>Totalmente portátil</li>
              <li>Escalamiento instantáneo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Lecciones de Docker</h2>
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
              e.currentTarget.style.borderColor = '#2196f3';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(33,150,243,0.15)';
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
                  backgroundColor: '#2196f3',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1976d2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2196f3'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#e3f2fd',
        border: '2px solid #2196f3',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>¿Por dónde empezar?</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Sigue esta ruta de aprendizaje progresivo:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>Introducción</strong> → Entiende qué es Docker y cómo funciona</li>
          <li><strong>Conceptos Fundamentales</strong> → Imágenes, contenedores y registros</li>
          <li><strong>Dockerfile</strong> → Aprende a escribir Dockerfiles</li>
          <li><strong>Comandos de Docker</strong> → Domina los comandos esenciales</li>
          <li><strong>Docker Compose</strong> → Orquesta múltiples contenedores localmente</li>
          <li><strong>Networking</strong> → Conecta contenedores entre sí</li>
          <li><strong>Optimización</strong> → Reduce tamaño y mejora rendimiento</li>
          <li><strong>Frameworks</strong> → Containeriza tus aplicaciones reales (Java, Node, etc.)</li>
        </ol>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/aws/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff3e0',
            color: '#e65100',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #ff9800'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#ffe0b2'} onMouseOut={(e) => e.target.style.backgroundColor = '#fff3e0'}>
            ← Volver a AWS
          </a>
          <a href="/kubernetes/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2196f3',
            color: '#ffffff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#1976d2'} onMouseOut={(e) => e.target.style.backgroundColor = '#2196f3'}>
            Kubernetes →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
