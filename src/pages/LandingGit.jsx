import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingGit = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: 'Configuración Inicial',
      description: 'Instala Git, configura usuario, SSH keys y primeros pasos',
      icon: '⚙️',
      link: '/git/basicos/configuracion-inicial'
    },
    {
      title: 'Crear y Clonar Repositorios',
      description: 'git init, git clone y conceptos de local vs remoto',
      icon: '📂',
      link: '/git/basicos/crear-clonar-repos'
    },
    {
      title: 'Commits y Staging',
      description: 'git add, git commit, historial y mensajes de calidad',
      icon: '💾',
      link: '/git/basicos/commits'
    },
    {
      title: 'Branches y Ramas',
      description: 'git branch, switching, creación y gestión de ramas',
      icon: '🌿',
      link: '/git/basicos/branches'
    },
    {
      title: 'Merge y Conflictos',
      description: 'Fusiona ramas, resuelve conflictos, merge strategies',
      icon: '🔀',
      link: '/git/basicos/merge'
    },
    {
      title: 'Push, Pull y Fetch',
      description: 'Sincroniza con repositorio remoto (origin)',
      icon: '↔️',
      link: '/git/avanzado/push-pull-fetch'
    },
    {
      title: 'Pull Requests',
      description: 'Colaboración profesional con code review',
      icon: '🔄',
      link: '/git/avanzado/pull-requests'
    },
    {
      title: 'GitHub',
      description: 'La plataforma #1 para alojar repositorios',
      icon: '🐙',
      link: '/git/avanzado/github'
    },
    {
      title: 'GitLab',
      description: 'Alternativa empresarial a GitHub',
      icon: '🦊',
      link: '/git/avanzado/gitlab'
    },
    {
      title: 'Git Workflow',
      description: 'Git Flow, GitHub Flow y estrategias de branching',
      icon: '📋',
      link: '/git/avanzado/workflow'
    },
    {
      title: 'Git Alias y Trucos',
      description: 'Atajos útiles y comandos avanzados',
      icon: '⚡',
      link: '/git/basicos/alias'
    },
    {
      title: 'Errores Comunes',
      description: 'Soluciona problemas típicos y recuperación de datos',
      icon: '🚨',
      link: '/git/basicos/errores-comunes'
    }
  ];

  const concepts = [
    {
      title: 'Control de Versiones',
      description: 'Mantén historial completo de cambios en tu código',
      icon: '📜'
    },
    {
      title: 'Colaboración',
      description: 'Múltiples desarrolladores trabajando en simultaneo',
      icon: '👥'
    },
    {
      title: 'Branching',
      description: 'Trabajar en paralelo sin afectar código principal',
      icon: '🌳'
    },
    {
      title: 'Distributed System',
      description: 'Cada desarrollador tiene copia completa del repo',
      icon: '🔄'
    },
    {
      title: 'Code Review',
      description: 'Pull Requests para asegurar calidad de código',
      icon: '👀'
    },
    {
      title: 'Auditability',
      description: 'Quién cambió qué, cuándo y por qué',
      icon: '📋'
    },
    {
      title: 'Recovery',
      description: 'Revierte cambios o recupera versiones antiguas',
      icon: '🔙'
    },
    {
      title: 'Integration',
      description: 'Integración con CI/CD, webhooks, etc.',
      icon: '🔌'
    }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Control de Versiones con Git</h1>
        <p className="lesson-intro">
          Git es la herramienta de control de versiones más usada en el mundo. Aprende desde lo básico hasta flujos profesionales de colaboración
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es Git?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>Git</strong> es un sistema de control de versiones distribuido creado por Linus Torvalds (creador de Linux). Permite a múltiples desarrolladores trabajar en el mismo proyecto sin pisarse, manteniendo un historial completo de cambios.
        </p>

        <div style={{
          backgroundColor: '#f0f4f8',
          border: '2px solid #0066cc',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#0066cc' }}>¿Por qué Git es Esencial?</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Standard de la Industria:</strong> 97% de profesionales lo usan</li>
            <li><strong>Colaboración:</strong> Múltiples desarrolladores sincronizados</li>
            <li><strong>Seguridad:</strong> Historial inmutable de cambios</li>
            <li><strong>Recuperación:</strong> Vuelve atrás si algo sale mal</li>
            <li><strong>Productividad:</strong> Trabaja sin miedo a perder código</li>
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
            { icon: '📌', title: 'Requisito Fundamental', desc: 'Ningún trabajo sin Git. Es como el aire.' },
            { icon: '👥', title: 'Colaboración Profesional', desc: 'Aprende a trabajar en equipos reales' },
            { icon: '🔍', title: 'Debugging Detective', desc: 'Encuentra dónde se introdujo un bug fácilmente' },
            { icon: '😌', title: 'Peace of Mind', desc: 'Nunca pierdes código, siempre puedes recuperar' }
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
        <h2>Conceptos Clave de Git</h2>
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
        <h2>Flujo Típico de Git en un Proyecto</h2>
        <div style={{
          backgroundColor: '#f9f3e6',
          border: '3px solid #0066cc',
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
{`┌────────────────────────────────────────────────────┐
│          FLUJO DIARIO CON GIT                       │
├────────────────────────────────────────────────────┤
│                                                    │
│  MAÑANA: Comienzo del día                         │
│  ────────────────────────────────────             │
│  1️⃣  git pull origin main                         │
│      ↓ Obtén cambios del equipo                   │
│                                                    │
│  DURANTE EL DÍA: Desarrollo                       │
│  ──────────────────────────────────                │
│  2️⃣  git checkout -b feature/login                │
│      ↓ Crea rama para nueva feature               │
│  3️⃣  (Haces cambios al código)                    │
│  4️⃣  git add . && git commit -m "..."             │
│      ↓ Registra cambios localmente                │
│  5️⃣  git push origin feature/login                │
│      ↓ Sube cambios a GitHub                      │
│                                                    │
│  TARDE: Code Review                               │
│  ──────────────────────────────────                │
│  6️⃣  Creas Pull Request en GitHub                 │
│      ↓ Colegas revisan tu código                  │
│  7️⃣  Aplicas feedback                             │
│      ↓ git add . && git commit                    │
│      ↓ git push origin feature/login              │
│  8️⃣  Merge a main (alguien hace clic)             │
│      ↓ Tu código ahora en producción             │
│                                                    │
│  CLEANUP:                                          │
│  ──────────────────────────────────                │
│  9️⃣  git checkout main                            │
│  10️⃣  git pull origin main (ahora main actualizado)│
│  11️⃣  git branch -d feature/login (limpia rama)   │
│                                                    │
│  Next day: Vuelve a paso 1️⃣                       │
│                                                    │
└────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Git sin experiencia vs Con Git profesional</h3>
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
            <h4 style={{ marginTop: 0, color: '#d32f2f' }}>Sin Git / Con ZIP Files</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Proyecto_v1.zip, Proyecto_v2.zip 😫</li>
              <li>¿Quién cambió qué? No lo sé...</li>
              <li>Un desarrollador bloquea al otro</li>
              <li>Imposible revertir cambios</li>
              <li>Fusionar código: pesadilla</li>
              <li>Sin historial de cambios</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Con Git Profesional</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Un repositorio central 🎯</li>
              <li>Historial claro de quién cambió qué</li>
              <li>Múltiples en paralelo sin conflicto</li>
              <li>Revert en 1 segundo</li>
              <li>Merge automático en la mayoría de casos</li>
              <li>Trazabilidad completa</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Lecciones de Git</h2>
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
        backgroundColor: '#f0f4f8',
        border: '2px solid #0066cc',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>¿Por dónde empezar?</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Sigue este orden para aprender Git profundamente:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>1. Configuración Inicial</strong> → Instala Git y configúrate</li>
          <li><strong>2. Crear y Clonar Repos</strong> → Tu primer repositorio local</li>
          <li><strong>3. Commits</strong> → Registra cambios con mensajes claros</li>
          <li><strong>4. Branches</strong> → Trabaja en paralelo sin miedo</li>
          <li><strong>5. Merge</strong> → Fusiona ramas y resuelve conflictos</li>
          <li><strong>6. Push/Pull/Fetch</strong> → Sincroniza con repositorio remoto</li>
          <li><strong>7. GitHub</strong> → Aloha tu código en la nube</li>
          <li><strong>8. Pull Requests</strong> → Colabora profesionalmente</li>
          <li><strong>9. Workflow</strong> → Aprende estrategias de branching</li>
          <li><strong>10. Alias y Trucos</strong> → Domina Git como profesional</li>
        </ol>
      </section>
    </div>
  );
};
