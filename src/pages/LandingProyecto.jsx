import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingProyecto = () => {
  const navigate = useNavigate();

  const lessons = [
    // Planificación
    {
      title: 'Definición del Proyecto',
      description: 'Idea, alcance y objetivos de tu Trabajo Fin de Ciclo',
      icon: '🎯',
      link: '/proyecto/planificacion/definicion',
      category: 'Planificación'
    },
    {
      title: 'Requisitos y Especificaciones',
      description: 'Define qué debe hacer el proyecto y cómo se evaluará',
      icon: '📋',
      link: '/proyecto/planificacion/requisitos',
      category: 'Planificación'
    },
    {
      title: 'Arquitectura y Diseño',
      description: 'Diseño de la solución técnica y base de datos',
      icon: '🏗️',
      link: '/proyecto/planificacion/arquitectura',
      category: 'Planificación'
    },
    {
      title: 'Ejemplos de Proyectos TFC',
      description: '12+ proyectos viables y desarrollables',
      icon: '💡',
      link: '/proyecto/planificacion/ejemplos',
      category: 'Planificación'
    },
    // Metodología
    {
      title: 'Agile y SCRUM',
      description: 'Metodología iterativa para gestionar tu proyecto',
      icon: '⚡',
      link: '/proyecto/metodologia/agile-scrum',
      category: 'Metodología'
    },
    {
      title: 'Sprint 1',
      description: 'Primer sprint: features básicas y MVP',
      icon: '🚀',
      link: '/proyecto/metodologia/sprint-1',
      category: 'Metodología'
    },
    {
      title: 'Sprint 2',
      description: 'Segundo sprint: features avanzadas y optimización',
      icon: '🚀',
      link: '/proyecto/metodologia/sprint-2',
      category: 'Metodología'
    },
    // Desarrollo
    {
      title: 'Setup del Proyecto',
      description: 'Configuración inicial: Git, IDE, frameworks, BD',
      icon: '⚙️',
      link: '/proyecto/desarrollo/setup',
      category: 'Desarrollo'
    },
    {
      title: 'Desarrollo Backend',
      description: 'Implementación con Java, Spring Boot y APIs REST',
      icon: '🔧',
      link: '/proyecto/desarrollo/backend',
      category: 'Desarrollo'
    },
    {
      title: 'Base de Datos',
      description: 'Diseño y implementación con MySQL o PostgreSQL',
      icon: '🗄️',
      link: '/proyecto/desarrollo/database',
      category: 'Desarrollo'
    },
    {
      title: 'APIs REST',
      description: 'Creación de endpoints REST para frontend y móvil',
      icon: '🌐',
      link: '/proyecto/desarrollo/apis',
      category: 'Desarrollo'
    },
    // Testing
    {
      title: 'Testing Unitario',
      description: 'Pruebas de funciones individuales con JUnit',
      icon: '🧪',
      link: '/proyecto/testing/unitario',
      category: 'Testing'
    },
    {
      title: 'Testing de Integración',
      description: 'Pruebas de componentes integrados y APIs',
      icon: '🔗',
      link: '/proyecto/testing/integracion',
      category: 'Testing'
    },
    {
      title: 'Validación Final',
      description: 'Testing de aceptación y validación de requisitos',
      icon: '✔️',
      link: '/proyecto/testing/validacion',
      category: 'Testing'
    },
    // Despliegue
    {
      title: 'Empaquetado y Build',
      description: 'Maven/Gradle: genera JAR y WAR para producción',
      icon: '📦',
      link: '/proyecto/despliegue/build',
      category: 'Despliegue'
    },
    {
      title: 'Documentación',
      description: 'README, API docs con Swagger, manual de usuario',
      icon: '📖',
      link: '/proyecto/despliegue/documentacion',
      category: 'Despliegue'
    },
    {
      title: 'Despliegue en Cloud',
      description: 'Deploy a Heroku, AWS, o Azure con CI/CD',
      icon: '☁️',
      link: '/proyecto/despliegue/cloud',
      category: 'Despliegue'
    },
    // Retos
    {
      title: 'REPTE 1: Especificación',
      description: 'Define el proyecto con requisitos y criterios',
      icon: '📋',
      link: '/proyecto/retos/1',
      category: 'Retos'
    },
    {
      title: 'REPTE 2: Especificación Técnica',
      description: 'Arquitectura, base de datos, stack tecnológico',
      icon: '⚙️',
      link: '/proyecto/retos/2',
      category: 'Retos'
    },
    {
      title: 'REPTE 3: Elevator Pitch',
      description: 'Presenta tu proyecto en menos de 2 minutos',
      icon: '🎤',
      link: '/proyecto/retos/3',
      category: 'Retos'
    },
    {
      title: 'REPTE 4: Organización Equipo',
      description: 'Define roles, responsabilidades y comunicación',
      icon: '👥',
      link: '/proyecto/retos/4',
      category: 'Retos'
    },
    {
      title: 'REPTE 5: Agile & SCRUM',
      description: 'Configura Taiga y planifica sprints',
      icon: '⚡',
      link: '/proyecto/retos/5',
      category: 'Retos'
    },
    {
      title: 'REPTE 6: Sprint 1',
      description: 'Primer sprint: 40-50% de funcionalidad',
      icon: '🚀',
      link: '/proyecto/retos/6',
      category: 'Retos'
    },
    {
      title: 'REPTE 7: Sprint 2',
      description: 'Segundo sprint: 90-100% de funcionalidad',
      icon: '🚀',
      link: '/proyecto/retos/7',
      category: 'Retos'
    },
    {
      title: 'REPTE 8: Sprint Final',
      description: 'Testing final, documentación y despliegue',
      icon: '🎯',
      link: '/proyecto/retos/8',
      category: 'Retos'
    }
  ];

  const concepts = [
    {
      title: 'MVP (Mínimo Viable)',
      description: 'Entrega lo mínimo funcional para validar la idea',
      icon: '🎯'
    },
    {
      title: 'Iteración',
      description: 'Ciclos cortos de desarrollo, testing y feedback',
      icon: '🔄'
    },
    {
      title: 'Documentación',
      description: 'README, API docs, manual de usuario profesional',
      icon: '📖'
    },
    {
      title: 'Testing',
      description: 'Pruebas automáticas desde el inicio del desarrollo',
      icon: '✅'
    },
    {
      title: 'Despliegue',
      description: 'CI/CD: automatiza build, test y deploy a producción',
      icon: '🚀'
    },
    {
      title: 'Presentación',
      description: 'Demo ejecutable y pitch convincente del proyecto',
      icon: '🎤'
    }
  ];

  const categories = [
    {
      id: 'planificacion',
      name: 'Planificación',
      icon: '📋',
      color: '#ff9800',
      lessons: 4,
      description: 'Define tu proyecto'
    },
    {
      id: 'metodologia',
      name: 'Metodología',
      icon: '⚡',
      color: '#ff9800',
      lessons: 3,
      description: 'Organiza el trabajo'
    },
    {
      id: 'desarrollo',
      name: 'Desarrollo',
      icon: '💻',
      color: '#ff9800',
      lessons: 4,
      description: 'Implementa la solución'
    },
    {
      id: 'testing',
      name: 'Testing',
      icon: '✅',
      color: '#ff9800',
      lessons: 3,
      description: 'Asegura la calidad'
    },
    {
      id: 'despliegue',
      name: 'Despliegue',
      icon: '📦',
      color: '#ff9800',
      lessons: 3,
      description: 'Lleva a producción'
    },
    {
      id: 'retos',
      name: '8 Retos DAW',
      icon: '🎯',
      color: '#ff9800',
      lessons: 8,
      description: 'Cumple requisitos'
    }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Trabajo Fin de Ciclo (TFC)</h1>
        <p className="lesson-intro">
          Guía completa para desarrollar tu Trabajo Fin de Ciclo integrando Java, Spring Boot, Bases de Datos, Testing y Despliegue profesional
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es un TFC?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          El <strong>Trabajo Fin de Ciclo (TFC)</strong> es un proyecto integrador donde aplicas todo lo aprendido durante la formación. No es solo código;
          es una <strong>demostración profesional de tus habilidades técnicas, capacidad de gestión y trabajo en equipo</strong>. Las empresas evaluarán tu TFC
          para decidir si te contratan.
        </p>

        <div style={{
          backgroundColor: '#fff3e0',
          border: '2px solid #ff9800',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#ff9800' }}>Requisitos Mínimos de un TFC</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Backend profesional:</strong> Java + Spring Boot con APIs REST</li>
            <li><strong>Base de datos:</strong> MySQL o PostgreSQL con diseño relacional</li>
            <li><strong>Testing:</strong> Pruebas unitarias e integración automáticas</li>
            <li><strong>Documentación:</strong> README, API docs con Swagger, manual de usuario</li>
            <li><strong>Despliegue:</strong> Disponible en cloud (Heroku, AWS, Azure)</li>
            <li><strong>Control de versiones:</strong> GitHub con commits limpios y documentados</li>
            <li><strong>Presentación:</strong> Demo ejecutable y pitch profesional</li>
          </ul>
        </div>

        <h3>Impacto en tu Futuro</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            { icon: '💼', title: 'Portafolio', desc: 'Tu TFC es tu mejor portafolio para entrevistas' },
            { icon: '🎓', title: 'Certificación', desc: 'Requisito para obtener el título oficial' },
            { icon: '🚀', title: 'Confianza', desc: 'Demuestra que puedes desarrollar un proyecto completo' },
            { icon: '💰', title: 'Oportunidades', desc: 'Mejor posición de negociación salarial' }
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
        <h2>Conceptos Clave de un TFC</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff3e0',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#ff9800' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Ciclo Completo del TFC (3-4 meses)</h2>
        <div style={{
          backgroundColor: '#f5f5f5',
          border: '3px solid #ff9800',
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
│        CICLO COMPLETO DEL TFC (90 DÍAS)         │
├──────────────────────────────────────────────────┤
│                                                  │
│  FASE 1: PLANIFICACIÓN (Semana 1-2)             │
│  └─ Idea → Requisitos → Arquitectura            │
│                                                  │
│  FASE 2: SPRINT 1 (Semana 3-6)                  │
│  └─ MVP: 40-50% features + Setup completo      │
│                                                  │
│  FASE 3: SPRINT 2 (Semana 7-10)                 │
│  └─ Completar: 90-100% features + Testing      │
│                                                  │
│  FASE 4: FINALIZACIÓN (Semana 11-12)            │
│  └─ Testing final → Documentación → Deploy     │
│                                                  │
│  FASE 5: PRESENTACIÓN (Semana 12+)              │
│  └─ Demo ejecutable + Pitch profesional        │
│                                                  │
└──────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Estructura de 6 Áreas de Aprendizaje</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {categories.map((cat, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff3e0',
              border: `3px solid ${cat.color}`,
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,152,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
              <h4 style={{ margin: '0 0 0.3rem 0', color: cat.color }}>{cat.name}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 0.5rem 0' }}>{cat.lessons} lecciones</p>
              <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Todas las Lecciones</h2>
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
              e.currentTarget.style.borderColor = '#ff9800';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,152,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#ddd';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{lesson.icon}</div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{lesson.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.5rem' }}>
                {lesson.category}
              </p>
              <p style={{ flex: 1, fontSize: '0.95rem', color: '#666', marginBottom: '1rem' }}>
                {lesson.description}
              </p>
              <button
                onClick={() => navigate(lesson.link)}
                style={{
                  backgroundColor: '#ff9800',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e22'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff9800'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#fff3e0',
        border: '2px solid #ff9800',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>Ruta de Aprendizaje Recomendada</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Sigue este orden para desarrollar un TFC profesional desde cero:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>1. Definición del Proyecto</strong> → Idea clara y alcance definido</li>
          <li><strong>2. Requisitos y Especificaciones</strong> → Qué debe hacer tu proyecto</li>
          <li><strong>3. Arquitectura y Diseño</strong> → Cómo lo vas a construir</li>
          <li><strong>4. Ejemplos de Proyectos TFC</strong> → Inspírate con 12+ ideas viables</li>
          <li><strong>5. Setup del Proyecto</strong> → Configura tu ambiente de desarrollo</li>
          <li><strong>6. Agile y SCRUM</strong> → Organiza el trabajo en sprints</li>
          <li><strong>7. Desarrollo Backend</strong> → Implementa con Java + Spring Boot</li>
          <li><strong>8. Base de Datos</strong> → Diseña e implementa tu BD</li>
          <li><strong>9. APIs REST</strong> → Crea endpoints para frontend</li>
          <li><strong>10. Testing</strong> → Pruebas unitarias e integración</li>
          <li><strong>11. Documentación</strong> → README, API docs, manual</li>
          <li><strong>12. Despliegue</strong> → Publica en cloud (Heroku, AWS)</li>
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
          Tu TFC es tu tarjeta de presentación ante el mundo laboral. <strong>Invierte tiempo en calidad, no en cantidad</strong>.
          Una aplicación simple, bien hecha, con buena documentación y despliegue en producción impresiona mucho más que un proyecto
          gigante abandonado en el repositorio.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: 0 }}>
          Recuerda: las empresas no solo ven el código; ven tu capacidad de comunicación, organización y profesionalismo.
        </p>
      </section>
    </div>
  );
};
