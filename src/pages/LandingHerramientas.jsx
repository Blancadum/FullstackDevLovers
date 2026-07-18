import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { Breadcrumb } from '../components/Breadcrumb';

export const LandingHerramientas = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lessons = [
    {
      title: 'Concepto de Entorno de Desarrollo',
      description: 'Entiende qué es un entorno de desarrollo y por qué es importante',
      icon: '🎯',
      link: '/entornos/herramientas/concepto'
    },
    {
      title: 'IDEs y Editores',
      description: 'Herramientas: IntelliJ IDEA, Eclipse, VS Code y más',
      icon: '💻',
      link: '/entornos/herramientas/ides'
    },
    {
      title: 'Codeium AI',
      description: 'Asistente de IA para escribir código más rápido',
      icon: '🤖',
      link: '/entornos/herramientas/codeium'
    }
  ];

  const tools = [
    { title: 'IDE (Integrated Development Environment)', description: 'Entorno completo con editor, compilador y debugger', icon: '🖥️' },
    { title: 'Editor de Código', description: 'Editor ligero y rápido para cualquier lenguaje', icon: '📝' },
    { title: 'Terminal/Shell', description: 'Línea de comandos para ejecutar comandos y scripts', icon: '⌨️' },
    { title: 'Compilador/Intérprete', description: 'Convierte código fuente a ejecutable', icon: '⚙️' },
    { title: 'Debugger', description: 'Herramienta para encontrar y corregir errores', icon: '🔍' },
    { title: 'Control de Versiones', description: 'Git y herramientas para gestionar código', icon: '🔗' },
    { title: 'Build Tools', description: 'Maven, Gradle para compilar y empaquetar', icon: '🔨' },
    { title: 'AI Assistants', description: 'Codeium, Copilot para autocompletar código', icon: '🤖' }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
      <div className="lesson-header">
        <h1>Herramientas de Desarrollo</h1>
        <p className="lesson-intro">
          Domina los IDEs, editores y herramientas esenciales para ser un desarrollador productivo
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué son las Herramientas de Desarrollo?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Un <strong>entorno de desarrollo profesional</strong> no es solo un editor de texto. Es un ecosistema completo de herramientas que te permiten escribir, compilar, probar y desplegar código eficientemente. Las herramientas correctas pueden <strong>multiplicar tu productividad</strong> entre 2x y 5x.
        </p>

        <div style={{
          backgroundColor: '#f0f4f8',
          border: '2px solid #0066cc',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#0066cc' }}>Herramientas Esenciales</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>IDE:</strong> Todo integrado (IntelliJ, Eclipse, VS Code)</li>
            <li><strong>Terminal:</strong> Para comandos y scripts</li>
            <li><strong>Git:</strong> Control de versiones</li>
            <li><strong>Build Tools:</strong> Maven o Gradle</li>
            <li><strong>Debugger:</strong> Para encontrar errores</li>
            <li><strong>AI Assistants:</strong> Para escribir código más rápido</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Herramientas Clave</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {tools.map((tool, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f0f4f8',
              border: '2px solid #0066cc',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#0066cc' }}>{tool.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>IDEs más Populares</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          {[
            { name: 'IntelliJ IDEA', best: 'Java', icon: '🔵', pros: ['Mejor autocompletar', 'Refactoring avanzado', 'Plugins abundantes'] },
            { name: 'VS Code', best: 'Web/Polivalente', icon: '🔷', pros: ['Ligero y rápido', 'Muchas extensiones', 'Gratis y open source'] },
            { name: 'Eclipse', best: 'Java (legacy)', icon: '🔴', pros: ['Históricamente popular', 'Muchos plugins', 'Gratis'] },
            { name: 'Android Studio', best: 'Mobile/Android', icon: '📱', pros: ['Especializado en Android', 'Emulador integrado', 'Gratis'] }
          ].map((ide, idx) => (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '2px solid #ddd',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{ide.icon}</div>
              <h4 style={{ margin: '0.5rem 0' }}>{ide.name}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.5rem 0' }}><strong>Mejor para:</strong> {ide.best}</p>
              <ul style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                {ide.pros.map((pro, i) => <li key={i}>✅ {pro}</li>)}
              </ul>
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
        <h2>¿Qué Necesito Instalar?</h2>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>Java JDK</strong> → Para ejecutar y compilar Java</li>
          <li><strong>IDE</strong> → IntelliJ IDEA o VS Code</li>
          <li><strong>Git</strong> → Para control de versiones</li>
          <li><strong>Maven o Gradle</strong> → Para gestionar dependencias</li>
          <li><strong>Terminal/Shell</strong> → Ya viene con tu SO</li>
          <li><strong>Codeium</strong> → Opcional pero recomendado (IA para autocompletar)</li>
        </ol>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/proyecto/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e8f5e9',
            color: '#1b5e20',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #4caf50'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#c8e6c9'} onMouseOut={(e) => e.target.style.backgroundColor = '#e8f5e9'}>
            ← Volver a Proyecto
          </a>
          <a href="/entornos/arquitectura/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e0f2f1',
            color: '#004d40',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #009688'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#b2dfdb'} onMouseOut={(e) => e.target.style.backgroundColor = '#e0f2f1'}>
            Arquitectura →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
