import { NarrativeLessonTemplate, LessonSection, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { Link } from 'react-router-dom';

export function LessonIDEs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'IDE (Integrated Development Environment): herramienta completa para desarrollo',
    'Funciones clave: editor, compilador/intérprete, depurador, gestión de proyectos',
    'Proporciona autocompletado, resaltado de sintaxis, compilación automática',
    'Eclipse: modular, libre, basado en plugins, ideal para Java empresarial',
    'IntelliJ IDEA: profesional, análisis inteligente, refactoring avanzado',
    'VS Code: ligero, versátil, ideal para múltiples lenguajes',
    'Elegir IDE según: tipo de proyecto, tamaño del equipo, requisitos de performance',
    'Todos tienen: editor de código, compilador integrado, depurador, gestión de proyectos',
    'Los IDEs reducen significativamente el tiempo de desarrollo',
    'Familiarización: cada IDE tiene curva de aprendizaje, pero productividad compensa'
  ];

  return (
    <>
      <NarrativeLessonTemplate
      title="Entornos de Desarrollo - IDEs"
      breadcrumbs={breadcrumbs}
      keyPoints={keyPoints}
    >
      <LessonSection title="¿Qué es un IDE?" level={1}>
        <p>
          Un <strong>IDE (Integrated Development Environment)</strong> es una herramienta integrada que reúne
          todo lo necesario para desarrollar software en un solo lugar. Aumenta significativamente la productividad
          del programador.
        </p>

        <h3>Funciones clave de un IDE</h3>
        <p>
          Un IDE moderno proporciona múltiples funcionalidades integradas que hacen el desarrollo mucho más eficiente
          y productivo. Veamos las principales características que debe tener todo IDE:
        </p>

        <h4>1. Editor de Código</h4>
        <p>
          El editor es la base de todo IDE. Debe proporcionar:
        </p>
        <ul>
          <li><strong>Resaltado de sintaxis:</strong> palabras clave, comentarios y operadores en diferentes colores para mejor legibilidad</li>
          <li><strong>Autocompletado inteligente:</strong> cuando escribes, el IDE sugiere métodos, variables y clases disponibles (Ctrl+Space)</li>
          <li><strong>Formatteo automático:</strong> indentación y espaciado automático para mantener código legible</li>
        </ul>

        <h4>2. Compilador / Intérprete Integrado</h4>
        <p>
          El IDE compila tu código automáticamente mientras escribes, sin necesidad de comandos manuales:
        </p>
        <ul>
          <li><strong>Compilación automática:</strong> se ejecuta al guardar el archivo</li>
          <li><strong>Errores en tiempo real:</strong> verás líneas rojas indicando problemas antes de ejecutar</li>
          <li><strong>Sugerencias rápidas:</strong> el IDE puede sugerir fixes automáticos para errores comunes</li>
        </ul>

        <h4>3. Depurador (Debugger)</h4>
        <p>
          Cuando tu programa no funciona como esperado, el depurador te permite inspeccionar lo que ocurre internamente:
        </p>
        <ul>
          <li><strong>Breakpoints:</strong> pausar la ejecución en líneas específicas para inspeccionar el estado</li>
          <li><strong>Ejecución paso a paso:</strong> ejecutar línea por línea (step over) o entrar en métodos (step into)</li>
          <li><strong>Inspección de variables:</strong> ver valores actuales de todas las variables en memoria</li>
        </ul>

        <h4>4. Gestión de Proyectos</h4>
        <p>
          Los IDEs organizan el código en estructuras jerarquizadas y gestionan dependencias:
        </p>
        <ul>
          <li><strong>Organización de ficheros:</strong> ver la estructura del proyecto en un árbol (Package Explorer, Project Explorer)</li>
          <li><strong>Gestión de dependencias:</strong> agregar librerías externas (.jar, Maven, Gradle)</li>
          <li><strong>Builds automatizados:</strong> compilar, empaquetar y ejecutar tests con un click</li>
        </ul>

        <h4>5. Asistentes (Wizards)</h4>
        <p>
          Los asistentes automatizan tareas repetitivas:
        </p>
        <ul>
          <li><strong>Crear proyectos:</strong> wizard que configura la estructura inicial</li>
          <li><strong>Crear clases e interfaces:</strong> generar esqueletos automáticamente</li>
          <li><strong>Generadores de código:</strong> crear getters/setters, constructores, equals(), etc. automáticamente</li>
        </ul>

        <h4>6. Integración con Herramientas Externas</h4>
        <p>
          Los IDEs modernos se integran con muchas herramientas profesionales:
        </p>
        <ul>
          <li><strong>Control de versiones:</strong> Git, SVN integrados para trabajar con repositorios</li>
          <li><strong>Servidores de aplicaciones:</strong> Tomcat, JBoss, configurables desde el IDE</li>
          <li><strong>Generadores de documentación:</strong> Javadoc para crear documentación HTML automáticamente</li>
          <li><strong>Analizadores de código:</strong> SonarQube, Findbugs para detectar problemas de calidad</li>
        </ul>

        <h4>7. Sistema de Plugins</h4>
        <p>
          Los IDEs modernos son extensibles mediante un sistema de plugins:
        </p>
        <ul>
          <li><strong>Ampliar funcionalidades:</strong> instalar plugins nuevos sin reiniciar el IDE</li>
          <li><strong>Ejemplos prácticos:</strong> Papyrus para crear diagramas UML, WindowBuilder para interfaces gráficas</li>
          <li><strong>Comunidad activa:</strong> miles de plugins disponibles para diferentes propósitos</li>
        </ul>
      </LessonSection>

      <LessonSection title="Los IDEs más conocidos" level={1}>
        <p>
          Existen varios IDEs populares para desarrollo Java y otras tecnologías.
          Los más utilizados en la industria son:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          margin: '2rem 0'
        }}>
          {[
            { icon: '🌙', name: 'Eclipse', link: '/entornos/herramientas/ides/eclipse', desc: 'Libre, modular, basado en plugins' },
            { icon: '💡', name: 'IntelliJ IDEA', link: '/entornos/herramientas/ides/intellij', desc: 'Profesional, potente, enfoque UX' },
            { icon: '📝', name: 'VS Code', link: '/entornos/herramientas/ides/vscode', desc: 'Ligero, versátil, múltiples lenguajes' }
          ].map((ide, idx) => (
            <Link
              key={idx}
              to={ide.link}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                border: '2px solid #ff006e',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(255, 0, 110, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{ide.icon}</div>
                <h4 style={{ margin: '0.5rem 0', color: '#1a1a1a' }}>{ide.name}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{ide.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </LessonSection>

      <LessonSection title="Cuándo usar cada IDE" level={1}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          margin: '2rem 0'
        }}>
          {[
            {
              name: 'VS Code',
              icon: '📝',
              color: '#0078d4',
              features: [
                'Proyecto pequeño/mediano',
                'Rapidez (inicia en segundos)',
                'Terminal y línea de comandos',
                'Múltiples lenguajes (Java + Python + JS)',
                'Servidores remotos (SSH integrado)',
                'Interfaz minimalista y configurable'
              ]
            },
            {
              name: 'Eclipse',
              icon: '🌙',
              color: '#2c2255',
              features: [
                'Proyecto Java puro',
                'IDE basado en plugins personalizable',
                'Equipos grandes con configs complejas',
                'Licencia totalmente libre',
                'Extensibilidad avanzada',
                'Comunidad Java consolidada'
              ]
            },
            {
              name: 'IntelliJ IDEA',
              icon: '💡',
              color: '#f97100',
              features: [
                'Proyecto grande y complejo',
                'Herramientas integradas completas',
                'Trabajo principalmente con Java',
                'IDE "todo en uno" sin extensiones',
                'Spring Boot/frameworks integrados',
                'Refactoring avanzado e inteligente'
              ]
            }
          ].map((ide, idx) => (
            <div key={idx} style={{
              border: `2px solid ${ide.color}`,
              borderRadius: '12px',
              padding: '2rem',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 8px 20px ${ide.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{ide.icon}</div>
              <h3 style={{ color: ide.color, margin: '0.5rem 0 1.5rem', fontSize: '1.3rem' }}>
                Usar {ide.name}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {ide.features.map((feature, fidx) => (
                  <li key={fidx} style={{
                    margin: '0.8rem 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <span style={{
                      color: ide.color,
                      fontWeight: 'bold',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>✓</span>
                    <span style={{ color: '#333', lineHeight: '1.4' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3>Comparativa rápida</h3>
        <div style={{ margin: '2rem 0' }}>
          {[
            {
              category: '🚀 Rendimiento',
              scores: { 'VS Code': 95, 'IntelliJ': 70, 'Eclipse': 60 }
            },
            {
              category: '📚 Curva de aprendizaje (mayor = más fácil)',
              scores: { 'VS Code': 90, 'IntelliJ': 60, 'Eclipse': 55 }
            },
            {
              category: '☕ Funcionalidades Java',
              scores: { 'VS Code': 50, 'IntelliJ': 100, 'Eclipse': 85 }
            },
            {
              category: '🔌 Extensibilidad',
              scores: { 'VS Code': 85, 'IntelliJ': 60, 'Eclipse': 100 }
            },
            {
              category: '🔄 Refactoring',
              scores: { 'VS Code': 60, 'IntelliJ': 100, 'Eclipse': 75 }
            },
            {
              category: '💰 Costo (mayor = más barato)',
              scores: { 'VS Code': 100, 'IntelliJ': 75, 'Eclipse': 100 }
            }
          ].map((metric, idx) => (
            <div key={idx} style={{ marginBottom: '2rem' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#1a1a1a', fontSize: '1rem' }}>
                {metric.category}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { name: 'VS Code', color: '#0078d4' },
                  { name: 'IntelliJ', color: '#f97100' },
                  { name: 'Eclipse', color: '#2c2255' }
                ].map((ide) => (
                  <div key={ide.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '100px',
                      textAlign: 'right',
                      fontWeight: '500',
                      color: ide.color,
                      fontSize: '0.9rem'
                    }}>
                      {ide.name}
                    </div>
                    <div style={{
                      flex: 1,
                      height: '28px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${metric.scores[ide.name]}%`,
                        backgroundColor: ide.color,
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '8px',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        transition: 'width 0.4s ease'
                      }}>
                        {metric.scores[ide.name] > 30 && `${metric.scores[ide.name]}%`}
                      </div>
                      {metric.scores[ide.name] <= 30 && (
                        <div style={{
                          position: 'absolute',
                          left: '8px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          color: '#666'
                        }}>
                          {metric.scores[ide.name]}%
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </LessonSection>
    </NarrativeLessonTemplate>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
