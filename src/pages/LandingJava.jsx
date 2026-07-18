import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { Breadcrumb } from '../components/Breadcrumb';

export const LandingJava = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lessons = [
    {
      title: 'Funcionamiento de Java',
      description: 'JVM, bytecode, compilación y ejecución. Entender la magia detrás de Java',
      icon: '⚙️',
      link: '/java/basico/funcionamiento'
    },
    {
      title: 'Tipos de Datos',
      description: 'Primitivos, referencias, conversiones y boxing/unboxing',
      icon: '📊',
      link: '/java/basico/tipos-datos'
    },
    {
      title: 'Control de Flujo',
      description: 'if, switch, loops, condicionales avanzados',
      icon: '🔀',
      link: '/java/basico/control-flujo'
    },
    {
      title: 'Strings y Operadores',
      description: 'Manipulación de strings, operadores aritméticos y lógicos',
      icon: '📝',
      link: '/java/basico/strings'
    },
    {
      title: 'Arrays y Colecciones',
      description: 'Arrays, Lists, Sets, Maps y operaciones comunes',
      icon: '📦',
      link: '/java/basico/arrays'
    },
    {
      title: 'POO - Clases y Objetos',
      description: 'Diseño orientado a objetos, encapsulación, atributos y métodos',
      icon: '🏗️',
      link: '/java/poo/clases-objetos'
    },
    {
      title: 'Herencia y Polimorfismo',
      description: 'Extensión de clases, métodos sobrecargados y sobreescritos',
      icon: '🔗',
      link: '/java/poo/herencia'
    },
    {
      title: 'Interfaces y Clases Abstractas',
      description: 'Contratos y diseño flexible con interfaces',
      icon: '🎭',
      link: '/java/poo/interfaces-abstractas'
    },
    {
      title: 'JVM y Performance',
      description: 'Entender la máquina virtual, garbage collection y optimización',
      icon: '🚀',
      link: '/java/avanzado/jvm'
    },
    {
      title: 'Collections Framework',
      description: 'ArrayList, HashMap, TreeSet y mejores prácticas',
      icon: '🎪',
      link: '/java/avanzado/colecciones'
    },
    {
      title: 'Lambdas y Streams',
      description: 'Programación funcional, Stream API y expresiones lambda',
      icon: '⚡',
      link: '/java/avanzado/streams'
    },
    {
      title: 'Excepciones',
      description: 'Try-catch-finally, custom exceptions y best practices',
      icon: '⚠️',
      link: '/java/basico/excepciones'
    }
  ];

  const concepts = [
    {
      title: 'Platform Independence',
      description: 'Write Once, Run Anywhere (WORA) en cualquier SO con JVM',
      icon: '🌍'
    },
    {
      title: 'Object-Oriented',
      description: 'Diseño orientado a objetos con abstracción y encapsulación',
      icon: '🏛️'
    },
    {
      title: 'Strong Typing',
      description: 'Type-safe programming que previene muchos errores en tiempo de compilación',
      icon: '🛡️'
    },
    {
      title: 'Automatic Memory Management',
      description: 'Garbage collection automático sin preocuparte por memoria',
      icon: '🧹'
    },
    {
      title: 'Multithreading',
      description: 'Soporte nativo para threads y programación concurrente',
      icon: '🔄'
    },
    {
      title: 'Rich Ecosystem',
      description: 'Maven, Gradle, Spring, Hibernate - herramientas maduras',
      icon: '🌲'
    },
    {
      title: 'Backward Compatible',
      description: 'Código de 20 años sigue funcionando en Java 21',
      icon: '🔙'
    },
    {
      title: 'Enterprise Ready',
      description: 'Usado en bancos, Google, Netflix, Amazon, etc.',
      icon: '💼'
    }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
      <div className="lesson-header">
        <h1>Programación en Java</h1>
        <p className="lesson-intro">
          Java es el lenguaje de programación más popular en empresas. Aprende desde lo básico hasta programación avanzada con POO, lambdas y concurrencia
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es Java?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>Java</strong> es un lenguaje de programación orientado a objetos, fuertemente tipado y multiplataforma. Creado en 1995 por Sun Microsystems (ahora propiedad de Oracle), es uno de los lenguajes más usados en el mundo empresarial y desarrollo backend.
        </p>

        <div style={{
          backgroundColor: '#f3e5f5',
          border: '2px solid #9c27b0',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#9c27b0' }}>¿Por qué Java es Relevante?</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Demanda Masiva:</strong> 9+ millones de desarrolladores Java en el mundo</li>
            <li><strong>Salarios Altos:</strong> Java developers ganan 20-35% más que promedio</li>
            <li><strong>Enterprise Ready:</strong> 87% de Fortune 500 usa Java</li>
            <li><strong>Evolución Constante:</strong> Java 21 con features modernas cada 6 meses</li>
            <li><strong>Ecosistema Vasto:</strong> Spring Boot, Hibernate, Jakarta EE, Quarkus</li>
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
            { icon: '💼', title: 'Puertas Abiertas', desc: 'Empresas grandes pagan bien por Java experts' },
            { icon: '📚', title: 'Aprende POO Real', desc: 'Entiende OOP profundamente, no just syntax' },
            { icon: '🔧', title: 'Herramientas Maduras', desc: 'IDEs y frameworks que hacen tu vida fácil' },
            { icon: '🚀', title: 'Backend Profesional', desc: 'Construye APIs escalables y producción-ready' }
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
        <h2>Conceptos Clave de Java</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f3e5f5',
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
        <h2>Arquitectura y Ciclo de Ejecución en Java</h2>
        <div style={{
          backgroundColor: '#f3e5f5',
          border: '3px solid #9c27b0',
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
│         CICLO DE EJECUCIÓN DE JAVA                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  1️⃣  ESCRIBIR CÓDIGO                                │
│      public class HelloWorld {                      │
│        public static void main(String[] args) {     │
│          System.out.println("Hola!");               │
│        }                                            │
│      }                                              │
│       ↓                                              │
│  2️⃣  COMPILACIÓN                                    │
│      javac HelloWorld.java                          │
│      → Genera: HelloWorld.class (bytecode)          │
│       ↓                                              │
│  3️⃣  JVM EJECUTA                                    │
│      java HelloWorld                                │
│       ↓                                              │
│  4️⃣  JVM INTERPRETA BYTECODE                        │
│      • Carga clase en memoria                       │
│      • JIT compilation a código nativo              │
│      • Execution en tu SO                           │
│       ↓                                              │
│  5️⃣  OUTPUT                                         │
│      Hola!                                          │
│                                                      │
│  ✨ WORA: Mismo .class en Windows, Linux, Mac      │
│                                                      │
└──────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Pilares de la POO en Java</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Encapsulación</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: '0.5rem 0' }}>
              Oculta detalles internos, expone solo interfaz pública
            </p>
            <pre style={{ fontSize: '0.85rem', backgroundColor: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', overflow: 'auto' }}>
{`private int saldo;
public void depositar(int monto) {
  saldo += monto;
}`}
            </pre>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Herencia</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: '0.5rem 0' }}>
              Reutiliza código compartido entre clases relacionadas
            </p>
            <pre style={{ fontSize: '0.85rem', backgroundColor: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', overflow: 'auto' }}>
{`class Vehiculo { ... }
class Auto extends Vehiculo {
  // Hereda de Vehiculo
}`}
            </pre>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Polimorfismo</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: '0.5rem 0' }}>
              Un mismo método se comporta diferente según el objeto
            </p>
            <pre style={{ fontSize: '0.85rem', backgroundColor: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', overflow: 'auto' }}>
{`animal.hacer_ruido(); // Gato: Miau
animal.hacer_ruido(); // Perro: Guau`}
            </pre>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Abstracción</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: '0.5rem 0' }}>
              Define contratos que las clases deben cumplir
            </p>
            <pre style={{ fontSize: '0.85rem', backgroundColor: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', overflow: 'auto' }}>
{`interface Animal {
  void hacer_ruido();
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Lecciones de Java</h2>
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
        <h2>¿Por dónde empezar?</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Aprende Java en este orden progresivo:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>Funcionamiento de Java</strong> → Entiende JVM, bytecode y compilation</li>
          <li><strong>Tipos de Datos</strong> → Primitivos, referencias, operaciones básicas</li>
          <li><strong>Control de Flujo</strong> → if, loops, switch statements</li>
          <li><strong>Strings y Arrays</strong> → Manipulación de datos</li>
          <li><strong>Clases y Objetos</strong> → Comienzo de POO</li>
          <li><strong>Herencia y Polimorfismo</strong> → POO avanzada</li>
          <li><strong>Interfaces y Abstracción</strong> → Diseño flexible</li>
          <li><strong>Collections</strong> → Listas, Maps, Sets</li>
          <li><strong>Lambdas y Streams</strong> → Programación funcional moderna</li>
          <li><strong>Excepciones</strong> → Manejo robusto de errores</li>
        </ol>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/kubernetes/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3e5f5',
            color: '#4a148c',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #9c27b0'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#e1bee7'} onMouseOut={(e) => e.target.style.backgroundColor = '#f3e5f5'}>
            ← Volver a Kubernetes
          </a>
          <a href="/spring-boot/landing" style={{
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
            Spring Boot →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
