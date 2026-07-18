import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingMetodologias = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: 'Introducción a Agile',
      description: 'Concepto de metodología ágil y su importancia en desarrollo moderno',
      icon: '📖',
      link: '/metodologias/agile-scrum/introduccion'
    },
    {
      title: 'SCRUM Framework',
      description: 'Marco de trabajo iterativo: roles, ceremonias y sprints',
      icon: '🎯',
      link: '/metodologias/agile-scrum/scrum'
    },
    {
      title: 'Sprints y Planning',
      description: 'Planificación de sprints, estimación de tareas y seguimiento',
      icon: '📅',
      link: '/metodologias/agile-scrum/sprints'
    },
    {
      title: 'Nombres Significativos',
      description: 'El arte de nombrar variables, funciones y clases claramente',
      icon: '📝',
      link: '/metodologias/clean-code/nombres'
    },
    {
      title: 'Funciones Limpias',
      description: 'Escritura de funciones pequeñas, enfocadas y reutilizables',
      icon: '⚙️',
      link: '/metodologias/clean-code/funciones'
    },
    {
      title: 'Estructura y Formato',
      description: 'Indentación, espacios y organización visual del código',
      icon: '🏗️',
      link: '/metodologias/clean-code/estructura'
    },
    {
      title: 'SOLID y Refactorización',
      description: 'Principios SOLID para diseño de software escalable y mantenible',
      icon: '🎯',
      link: '/metodologias/clean-code/solid'
    },
    {
      title: 'Patrones de Diseño',
      description: 'Soluciones reutilizables para problemas comunes en arquitectura',
      icon: '🎨',
      link: '/metodologias/clean-code/patrones'
    },
    {
      title: 'Antipatrones: Qué NO Hacer',
      description: 'Malas prácticas a evitar: código spaghetti, duplicación, acoplamiento',
      icon: '⛔',
      link: '/metodologias/clean-code/antipatrones'
    },
    {
      title: 'Testing Unitario',
      description: 'Pruebas de funciones individuales: JUnit, Mockito y buenas prácticas',
      icon: '🔍',
      link: '/metodologias/testing/unitario'
    },
    {
      title: 'Testing de Integración',
      description: 'Pruebas entre componentes: BDs, APIs, servicios externos',
      icon: '🔗',
      link: '/metodologias/testing/integracion'
    },
    {
      title: 'Testing de Aceptación',
      description: 'Validación de requisitos con usuarios y stakeholders',
      icon: '✅',
      link: '/metodologias/testing/aceptacion'
    },
    {
      title: 'Introducción a DevOps',
      description: 'Integración entre desarrolladores y operaciones para automatización',
      icon: '📖',
      link: '/metodologias/devops/introduccion'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Automatización de build, test y deployment',
      icon: '⚙️',
      link: '/metodologias/devops/cicd'
    },
    {
      title: 'Monitoreo y Logs',
      description: 'Observabilidad en producción: métricas, alertas y debugging remoto',
      icon: '📊',
      link: '/metodologias/devops/monitoreo'
    }
  ];

  const concepts = [
    {
      title: 'Iteración',
      description: 'Desarrollo en ciclos cortos para feedback rápido',
      icon: '🔄'
    },
    {
      title: 'Calidad',
      description: 'Testing y revisión de código constantes para evitar bugs',
      icon: '✨'
    },
    {
      title: 'Colaboración',
      description: 'Equipos auto-organizados que trabajan juntos hacia objetivos',
      icon: '👥'
    },
    {
      title: 'Automatización',
      description: 'Reducir trabajo manual: testing, builds, despliegues automáticos',
      icon: '🤖'
    },
    {
      title: 'Feedback',
      description: 'Aprender del cliente y adaptar rápidamente basado en datos',
      icon: '💬'
    },
    {
      title: 'Documentación',
      description: 'Código limpio es mejor documentación que comentarios largos',
      icon: '📚'
    }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Metodologías & Procesos</h1>
        <p className="lesson-intro">
          Aprende las mejores prácticas, metodologías ágiles y procesos profesionales para desarrollar software de calidad
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué son las Metodologías de Desarrollo?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Una <strong>metodología de desarrollo</strong> es un conjunto de <strong>procesos, prácticas y herramientas</strong> que guían cómo un equipo organiza,
          planifica, desarrolla y entrega software. No es suficiente escribir código que funcione; necesitas hacerlo de forma <strong>ordenada, eficiente y con calidad</strong>.
        </p>

        <div style={{
          backgroundColor: '#f0f8f0',
          border: '2px solid #4CAF50',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#4CAF50' }}>Pillares de Desarrollo Profesional</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Agile/SCRUM:</strong> Metodología iterativa para adaptarse rápidamente a cambios</li>
            <li><strong>Clean Code:</strong> Escribir código legible, mantenible y eficiente</li>
            <li><strong>Testing:</strong> Automatizar pruebas para garantizar calidad</li>
            <li><strong>DevOps:</strong> Automatizar despliegue y operaciones en producción</li>
            <li><strong>Colaboración:</strong> Comunicación efectiva en equipos distribuidos</li>
          </ul>
        </div>

        <h3>Por qué las Metodologías Importan</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            { icon: '⚡', title: 'Velocidad', desc: 'Entregar features sin esperar 6 meses' },
            { icon: '🎯', title: 'Precisión', desc: 'Menos bugs, mejor calidad de código' },
            { icon: '💼', title: 'Profesional', desc: 'Las empresas exigen metodologías ágiles' },
            { icon: '🤝', title: 'Equipo', desc: 'Mejor comunicación y menos conflictos' }
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
              backgroundColor: '#f0f8f0',
              border: '2px solid #4CAF50',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#4CAF50' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>El Ciclo Agile Completo</h2>
        <div style={{
          backgroundColor: '#f5f5f5',
          border: '3px solid #4CAF50',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <pre style={{
            fontSize: '0.9rem',
            lineHeight: '1.7',
            margin: 0,
            overflow: 'auto'
          }}>
{`┌──────────────────────────────────────────────────┐
│        CICLO AGILE (2-4 semanas)                │
├──────────────────────────────────────────────────┤
│                                                  │
│  1️⃣  SPRINT PLANNING    → Define tareas        │
│       ↓                                         │
│  2️⃣  DESARROLLO        → Escribe código       │
│       ↓                                         │
│  3️⃣  TESTING           → Pruebas continuas    │
│       ↓                                         │
│  4️⃣  DAILY STANDUP     → Sincronización      │
│       ↓                                         │
│  5️⃣  CODE REVIEW       → Revisión de pares   │
│       ↓                                         │
│  6️⃣  SPRINT REVIEW     → Demostración        │
│       ↓                                         │
│  7️⃣  RETROSPECTIVA     → Mejoras proceso     │
│       ↓                                         │
│  ↻  SIGUIENTE SPRINT → Iteración continua      │
│                                                  │
│  Cambios rápidos = Valor al cliente rápido      │
└──────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Agile vs Waterfall</h3>
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
            <h4 style={{ marginTop: 0, color: '#d32f2f' }}>❌ Waterfall (Tradicional)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Plan lineal: diseño → código → test</li>
              <li>Cambios lentos y costosos</li>
              <li>Feedback al final (meses/años)</li>
              <li>Alto riesgo de sorpresas</li>
              <li>Documentación exhaustiva</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#e6ffe6',
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#28a745' }}>✅ Agile (Iterativo)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Ciclos cortos (sprints de 2-4 semanas)</li>
              <li>Cambios rápidos y fáciles</li>
              <li>Feedback continuo del cliente</li>
              <li>Bajo riesgo por entregas frecuentes</li>
              <li>Código es la documentación</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>4 Áreas Principales</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {[
            {
              title: 'Agile/SCRUM',
              icon: '⚡',
              lessons: '3 lecciones',
              color: '#4CAF50'
            },
            {
              title: 'Clean Code',
              icon: '✨',
              lessons: '6 lecciones',
              color: '#4CAF50'
            },
            {
              title: 'Testing',
              icon: '🧪',
              lessons: '3 lecciones',
              color: '#4CAF50'
            },
            {
              title: 'DevOps',
              icon: '🚀',
              lessons: '3 lecciones',
              color: '#4CAF50'
            }
          ].map((area, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f0f8f0',
              border: `2px solid ${area.color}`,
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{area.icon}</div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: area.color }}>{area.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>{area.lessons}</p>
            </div>
          ))}
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
              e.currentTarget.style.borderColor = '#4CAF50';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(76,175,80,0.15)';
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
                  backgroundColor: '#4CAF50',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#e8f5e9',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>Ruta de Aprendizaje Recomendada</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Te recomendamos este orden para convertirte en un desarrollador profesional:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>1. Introducción a Agile</strong> → Entiende la mentalidad ágil</li>
          <li><strong>2. SCRUM Framework</strong> → Aprende los roles y ceremonias</li>
          <li><strong>3. Sprints y Planning</strong> → Planifica y estima trabajo real</li>
          <li><strong>4. Nombres Significativos</strong> → Escribe código legible desde el inicio</li>
          <li><strong>5. Funciones Limpias</strong> → Diseña funciones pequeñas y enfocadas</li>
          <li><strong>6. Testing Unitario</strong> → Automatiza pruebas desde el inicio</li>
          <li><strong>7. SOLID y Refactorización</strong> → Diseña software escalable</li>
          <li><strong>8. Testing Integración & DevOps</strong> → Automatiza todo el ciclo</li>
        </ol>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#fff9c4',
        border: '2px solid #fbc02d',
        borderRadius: '8px',
        padding: '1.5rem'
      }}>
        <h3 style={{ marginTop: 0, color: '#f57f17' }}>Consejo Profesional</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: 0 }}>
          Las empresas no contratan solo por skills técnicas, sino por cómo trabajas en equipo.
          Domina estas metodologías y serás invaluable. Agile no es solo reuniones; es una <strong>mentalidad de mejora continua</strong>.
        </p>
      </section>
    </div>
  );
};
