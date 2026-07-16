import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingArquitectura = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: 'UML y Diagramas',
      description: 'Documenta arquitectura con diagramas UML profesionales',
      icon: '📐',
      link: '/entornos/arquitectura/uml'
    },
    {
      title: 'Patrones de Diseño',
      description: 'Soluciones probadas para problemas comunes: Singleton, Factory, Strategy, etc.',
      icon: '🎯',
      link: '/entornos/arquitectura/patrones'
    },
    {
      title: 'Conceptos de Desarrollo',
      description: 'SOLID, DRY, KISS y principios fundamentales de código limpio',
      icon: '📚',
      link: '/entornos/arquitectura/conceptos'
    },
    {
      title: 'Testing y QA',
      description: 'Unit testing, integración y aseguramiento de calidad',
      icon: '✅',
      link: '/entornos/arquitectura/testing'
    },
    {
      title: 'Refactorización y SOLID',
      description: 'Mejora código existente aplicando principios SOLID',
      icon: '🔄',
      link: '/entornos/arquitectura/refactoring'
    }
  ];

  const patterns = [
    { title: 'Creacionales', description: 'Singleton, Factory, Builder, Prototype', icon: '🏭' },
    { title: 'Estructurales', description: 'Adapter, Decorator, Facade, Proxy', icon: '🏗️' },
    { title: 'Comportamiento', description: 'Strategy, Observer, Command, State', icon: '🔄' },
    { title: 'Arquitectónicos', description: 'MVC, Repository, Dependency Injection', icon: '🏛️' },
    { title: 'Enterprise', description: 'Service Locator, DAO, Value Object', icon: '🏢' },
    { title: 'Concurrencia', description: 'Producer-Consumer, Thread Pool, Active Object', icon: '⚡' }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>🏗️ Arquitectura y Patrones</h1>
        <p className="lesson-intro">
          Diseña software escalable y mantenible aplicando patrones de diseño y principios sólidos
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Por qué importa la Arquitectura?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          La diferencia entre código que funciona y código <strong>profesional</strong> es la arquitectura. Un código bien arquitecturado:
        </p>

        <div style={{
          backgroundColor: '#f0f4f8',
          border: '2px solid #9c27b0',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li>✅ <strong>Es mantenible:</strong> Otros entienden tu código fácilmente</li>
            <li>✅ <strong>Es escalable:</strong> Crece sin necesidad de reescribir</li>
            <li>✅ <strong>Es testeable:</strong> Puedes escribir tests efectivos</li>
            <li>✅ <strong>Es reutilizable:</strong> Partes del código sirven en otros proyectos</li>
            <li>✅ <strong>Cuesta menos:</strong> Menos bugs = menos mantenimiento</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Patrones de Diseño (GoF)</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {patterns.map((pattern, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f5f1ff',
              border: '2px solid #9c27b0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{pattern.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#9c27b0' }}>{pattern.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{pattern.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Principios SOLID</h2>
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
{`S - Single Responsibility    → Una clase, una responsabilidad
O - Open/Closed             → Abierto para extensión, cerrado para modificación
L - Liskov Substitution     → Subclases intercambiables con superclases
I - Interface Segregation   → Interfaces específicas sobre genéricas
D - Dependency Inversion    → Depender de abstracciones, no implementaciones

Ejemplo: Un usuario que paga
❌ MALO:
  class Usuario {
    pagar() { /* lógica de pago */ }  // Responsabilidad mixta
    enviarEmail() { /* email */ }
    registrarAuditoria() { /* logs */ }
  }

✅ CORRECTO:
  class Usuario {
    pagar(servicioPago: ServicioPago) { }  // Inyección de dependencia
  }
  class ServicioPago { pagar() { } }
  class ServicioEmail { enviar() { } }
  class ServicioAuditoria { registrar() { } }`}
          </pre>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Arquitectura Común: MVC</h2>
        <div style={{
          backgroundColor: '#e8f4f8',
          border: '2px solid #0066cc',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <pre style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            margin: 0,
            overflow: 'auto'
          }}>
{`┌─────────────────────────────────────┐
│ Vista (View)                        │
│ - Interfaz de usuario               │
│ - HTML/CSS/JavaScript o JSX         │
└────────────┬────────────────────────┘
             │
             ▼ (Usuario interactúa)
┌─────────────────────────────────────┐
│ Controlador (Controller)            │
│ - Maneja eventos                    │
│ - Valida entrada                    │
│ - Llama al modelo                   │
└────────────┬────────────────────────┘
             │
             ▼ (Lógica de negocio)
┌─────────────────────────────────────┐
│ Modelo (Model)                      │
│ - Datos                             │
│ - Lógica de negocio                 │
│ - Base de datos                     │
└─────────────────────────────────────┘`}
          </pre>
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
        backgroundColor: '#f5f1ff',
        border: '2px solid #9c27b0',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>Ruta de Aprendizaje</h2>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>UML y Diagramas</strong> → Visualiza la arquitectura</li>
          <li><strong>Conceptos</strong> → Aprende SOLID, DRY, KISS</li>
          <li><strong>Patrones de Diseño</strong> → Soluciones probadas</li>
          <li><strong>Refactorización</strong> → Mejora código existente</li>
          <li><strong>Testing</strong> → Valida que funciona correctamente</li>
        </ol>
      </section>
    </div>
  );
};
