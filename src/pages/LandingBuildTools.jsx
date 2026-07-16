import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingBuildTools = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: 'Maven - Gestión de Proyectos',
      description: 'Build tool y gestor de dependencias más popular en Java',
      icon: '📦',
      link: '/entornos/build/maven'
    },
    {
      title: 'Gradle - Build Avanzado',
      description: 'Build tool moderno y flexible, alternativa a Maven',
      icon: '⚙️',
      link: '/entornos/build/gradle'
    },
    {
      title: 'Gestión de Dependencias',
      description: 'Cómo manejar librerías externas en tu proyecto',
      icon: '🔗',
      link: '/entornos/build/dependencias'
    }
  ];

  const tools = [
    { title: 'Compilación', description: 'Convierte código Java a bytecode (.class)', icon: '⚙️' },
    { title: 'Empaquetado', description: 'Crea JAR, WAR o archivos ejecutables', icon: '📦' },
    { title: 'Testing', description: 'Ejecuta tests automáticamente', icon: '🧪' },
    { title: 'Dependencias', description: 'Descarga e integra librerías automáticamente', icon: '🔗' },
    { title: 'Documentación', description: 'Genera Javadoc y documentación automática', icon: '📖' },
    { title: 'Despliegue', description: 'Automatiza deployment a repositorios', icon: '🚀' }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>🔨 Build & Herramientas</h1>
        <p className="lesson-intro">
          Automatiza compilación, testing y despliegue con Maven y Gradle
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es un Build Tool?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Un <strong>build tool</strong> automatiza todo el proceso de transformar tu código fuente en una aplicación ejecutable. Sin él, harías manualmente:
        </p>

        <div style={{
          backgroundColor: '#fff3e0',
          border: '2px solid #ff9800',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#ff9800' }}>Sin Build Tool (❌ Tedioso):</h3>
          <pre style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
{`1. Compilar cada archivo Java → javac
2. Resolver dependencias manualmente
3. Crear carpeta de clases
4. Empaquetar en JAR
5. Ejecutar tests manualmente
6. Subir a repositorio
7. Documentar cambios`}
          </pre>
        </div>

        <div style={{
          backgroundColor: '#e8f5e9',
          border: '2px solid #28a745',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#28a745' }}>Con Build Tool (✅ Automático):</h3>
          <pre style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
{`mvn clean package  # O "gradle build"

Automáticamente:
✓ Compila todo el código
✓ Descarga dependencias
✓ Ejecuta tests
✓ Crea JAR/WAR
✓ Valida calidad
✓ Genera documentación`}
          </pre>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Responsabilidades del Build Tool</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {tools.map((tool, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff3e0',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#ff9800' }}>{tool.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Maven vs Gradle</h2>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1.5rem',
          backgroundColor: '#ffffff'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#fff3e0', borderBottom: '2px solid #ff9800' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Maven</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Gradle</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: 'Configuración', maven: 'XML (pom.xml)', gradle: 'Groovy/Kotlin' },
              { aspect: 'Curva aprendizaje', maven: 'Moderada', gradle: 'Empinada' },
              { aspect: 'Velocidad', maven: 'Más lenta', gradle: 'Más rápida' },
              { aspect: 'Flexibilidad', maven: 'Menos', gradle: 'Muy flexible' },
              { aspect: 'Popularidad', maven: 'Histórica', gradle: 'Moderna' },
              { aspect: 'Android', maven: 'No recomendado', gradle: '✅ Estándar' }
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.aspect}</td>
                <td style={{ padding: '1rem' }}>{row.maven}</td>
                <td style={{ padding: '1rem' }}>{row.gradle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>Estructura de Proyecto</h2>
        <div style={{
          backgroundColor: '#e3f2fd',
          border: '2px solid #2196f3',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <pre style={{
            fontSize: '0.9rem',
            lineHeight: '1.6',
            margin: 0,
            overflow: 'auto'
          }}>
{`mi-proyecto/
├── pom.xml (o build.gradle)         ← Configuración
├── src/
│   ├── main/
│   │   ├── java/                    ← Tu código
│   │   │   └── com/ejemplo/App.java
│   │   └── resources/               ← Configuraciones
│   └── test/
│       ├── java/                    ← Tests
│       │   └── com/ejemplo/AppTest.java
│       └── resources/
└── target/                          ← Generado por Maven
    ├── classes/                     ← .class compilados
    └── mi-proyecto.jar              ← JAR ejecutable`}
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
              e.currentTarget.style.borderColor = '#ff9800';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,152,0,0.15)';
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
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f57c00'}
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
        <h2>Comandos Esenciales (Maven)</h2>
        <pre style={{
          fontSize: '0.95rem',
          lineHeight: '1.8',
          marginBottom: 0,
          overflow: 'auto'
        }}>
{`mvn clean              → Elimina carpeta target
mvn compile            → Compila el código
mvn test               → Ejecuta tests
mvn package            → Crea JAR/WAR
mvn clean package      → Limpia + compila + tests + empaqueta
mvn install            → Instala en repositorio local
mvn deploy             → Sube a repositorio remoto
mvn spring-boot:run    → Ejecuta aplicación directamente`}
        </pre>
      </section>
    </div>
  );
};
