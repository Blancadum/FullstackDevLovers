import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { Breadcrumb } from '../components/Breadcrumb';

export const LandingSpringBoot = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lessons = [
    {
      title: 'Introducción a Spring Boot',
      description: 'Qué es Spring Boot y cómo simplifica el desarrollo de aplicaciones Java',
      icon: '📚',
      link: '/spring-boot/fundamentos/introduccion'
    },
    {
      title: 'Configuración y Setup',
      description: 'Crear proyecto, propiedades, perfiles y configuración automática',
      icon: '⚙️',
      link: '/spring-boot/fundamentos/configuracion'
    },
    {
      title: 'REST Controllers',
      description: 'Construye APIs REST con endpoints HTTP robustos',
      icon: '🔌',
      link: '/spring-boot/fundamentos/controladores'
    },
    {
      title: 'Servicios y Capas',
      description: 'Arquitectura de 3 capas: Controller -> Service -> Repository',
      icon: '🏗️',
      link: '/spring-boot/avanzado/servicios'
    },
    {
      title: 'JPA y Hibernate',
      description: 'Mapeo objeto-relacional y persistencia de datos',
      icon: '🗄️',
      link: '/spring-boot/avanzado/jpa-hibernate'
    },
    {
      title: 'Validación',
      description: 'Valida datos con anotaciones y reglas personalizadas',
      icon: '✓',
      link: '/spring-boot/avanzado/validacion'
    },
    {
      title: 'Spring Security',
      description: 'Autenticación y autorización profesional',
      icon: '🔐',
      link: '/spring-boot/avanzado/spring-security'
    },
    {
      title: 'OAuth2 y JWT',
      description: 'Token-based authentication para APIs modernas',
      icon: '🔑',
      link: '/spring-boot/avanzado/oauth2-jwt'
    },
    {
      title: 'Testing',
      description: 'Unit tests, integration tests y test coverage',
      icon: '✅',
      link: '/spring-boot/avanzado/testing'
    }
  ];

  const concepts = [
    {
      title: 'Convention over Configuration',
      description: 'Spring Boot asume valores por defecto, tú solo configurar lo especial',
      icon: '⚡'
    },
    {
      title: 'Dependency Injection',
      description: 'Inyección de dependencias automática, sin new ni manejo manual',
      icon: '🔗'
    },
    {
      title: 'Embedded Server',
      description: 'Tomcat incluido, no necesitas servidor externo',
      icon: '🚀'
    },
    {
      title: 'Auto Configuration',
      description: 'Configura automáticamente beans según classpath',
      icon: '🤖'
    },
    {
      title: 'Starter Dependencies',
      description: 'Dependencias pre-configuradas para diferentes features',
      icon: '📦'
    },
    {
      title: 'Production Ready',
      description: 'Metrics, health checks, logging ya incluidos',
      icon: '📊'
    },
    {
      title: 'Microservices Ready',
      description: 'Perfecto para arquitecturas microservicios',
      icon: '🏘️'
    },
    {
      title: 'Cloud Native',
      description: 'Diseñado para Docker, Kubernetes y cloud deployment',
      icon: '☁️'
    }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
      <div className="lesson-header">
        <h1>Backend Moderno con Spring Boot</h1>
        <p className="lesson-intro">
          Spring Boot es el framework más popular para aplicaciones Java en empresas. Construye APIs REST escalables, seguras y producción-ready en minutos
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es Spring Boot?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>Spring Boot</strong> es un framework opinionado construido sobre Spring Framework que simplifica el desarrollo de aplicaciones Java. Su lema es "Opinionated Convention over Configuration": te proporciona defaults inteligentes mientras permita personalización cuando sea necesaria.
        </p>

        <div style={{
          backgroundColor: '#e3f2fd',
          border: '2px solid #1976d2',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#1976d2' }}>¿Por qué Spring Boot?</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Productividad:</strong> Desarrolla APIs REST en horas, no días</li>
            <li><strong>Comunidad:</strong> Millones de desarrolladores, infinitos recursos</li>
            <li><strong>Ecosistema:</strong> Spring Data, Spring Cloud, Spring Security integrados</li>
            <li><strong>Industria:</strong> Netflix, Twitter, Spotify, Google usan Spring Boot</li>
            <li><strong>Evolución:</strong> Actualizado constantemente con Java latest features</li>
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
            { icon: '💼', title: 'Empleabilidad Premium', desc: 'Spring Boot es muy demandado en Europa y América' },
            { icon: '📖', title: 'Aprende Bien', desc: 'Entiende arquitectura real de aplicaciones profesionales' },
            { icon: '🚀', title: 'Startup Ready', desc: 'Inicia startups con Spring Boot rápidamente' },
            { icon: '🌟', title: 'Senior Track', desc: 'Avanza a arquitecto e ingeniero senior' }
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
        <h2>Conceptos Clave de Spring Boot</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#1976d2' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Arquitectura de una Aplicación Spring Boot</h2>
        <div style={{
          backgroundColor: '#e3f2fd',
          border: '3px solid #1976d2',
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
│    ARQUITECTURA SPRING BOOT (3 CAPAS)              │
├────────────────────────────────────────────────────┤
│                                                    │
│  CLIENTE (Web/Mobile/Desktop)                     │
│       ↓ (HTTP requests)                            │
│                                                    │
│  ┌──────────────────────────────────────────────┐│
│  │ 1️⃣  PRESENTATION LAYER (Controller)          ││
│  │  @RestController                             ││
│  │  @GetMapping("/api/users/{id}")              ││
│  │  • Recibe HTTP requests                      ││
│  │  • Valida entrada básica                     ││
│  │  • Retorna JSON responses                    ││
│  └──────────────────────────────────────────────┘│
│       ↓ (Lógica a Service)                        │
│                                                    │
│  ┌──────────────────────────────────────────────┐│
│  │ 2️⃣  BUSINESS LOGIC LAYER (Service)          ││
│  │  @Service                                    ││
│  │  @Transactional                              ││
│  │  • Lógica de negocio                         ││
│  │  • Validaciones complejas                    ││
│  │  • Orquestación de datos                     ││
│  │  • Llamadas a APIs externas                  ││
│  └──────────────────────────────────────────────┘│
│       ↓ (Acceso a datos)                          │
│                                                    │
│  ┌──────────────────────────────────────────────┐│
│  │ 3️⃣  DATA ACCESS LAYER (Repository)          ││
│  │  extends JpaRepository<User, Long>           ││
│  │  • Queries a base de datos                   ││
│  │  • CRUD operations                           ││
│  │  • ORM Hibernate mapping                     ││
│  └──────────────────────────────────────────────┘│
│       ↓                                            │
│                                                    │
│  DATABASE (PostgreSQL, MySQL, etc.)              │
│                                                    │
└────────────────────────────────────────────────────┘

Flujo Ejemplo: GET /api/usuarios/123
1. Controller recibe request
2. Valida que 123 es número
3. Llama UserService.getUser(123)
4. Service obtiene user vía UserRepository
5. Repository ejecuta: SELECT * FROM users WHERE id = 123
6. Service retorna UserDTO
7. Controller serializa a JSON
8. Response: { "id": 123, "name": "John", ... }`}
          </pre>
        </div>

        <h3>Spring Boot vs Spring Framework</h3>
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
            <h4 style={{ marginTop: 0, color: '#d32f2f' }}>Spring Framework (Tradicional)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Configuración XML manual</li>
              <li>Necesitas tomcat externo</li>
              <li>Muchas líneas de configuración</li>
              <li>Más control pero más complejo</li>
              <li>Desarrollo lento al inicio</li>
              <li>Curva de aprendizaje pronunciada</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>Spring Boot (Moderno)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Auto-configuration inteligente</li>
              <li>Tomcat embebido incluido</li>
              <li>Mínima configuración necesaria</li>
              <li>Opinionated defaults inteligentes</li>
              <li>Desarrollo rápido desde el inicio</li>
              <li>Curva de aprendizaje suave</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Lecciones de Spring Boot</h2>
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
              e.currentTarget.style.borderColor = '#1976d2';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(25,118,210,0.15)';
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
                  backgroundColor: '#1976d2',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1565c0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1976d2'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#e3f2fd',
        border: '2px solid #1976d2',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>¿Por dónde empezar?</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Recomendamos este camino de aprendizaje:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>Introducción</strong> → Entiende qué es Spring Boot y sus beneficios</li>
          <li><strong>Setup</strong> → Crea tu primer proyecto con Spring Boot</li>
          <li><strong>Controllers</strong> → Construye tu primer endpoint REST</li>
          <li><strong>Servicios</strong> → Separa lógica en capas profesionales</li>
          <li><strong>JPA y Hibernate</strong> → Persiste datos en base de datos</li>
          <li><strong>Validación</strong> → Valida datos correctamente</li>
          <li><strong>Spring Security</strong> → Asegura tu API</li>
          <li><strong>JWT y OAuth2</strong> → Implementa autenticación moderna</li>
          <li><strong>Testing</strong> → Escribe tests unitarios e integration</li>
        </ol>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/java/landing" style={{
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
            ← Volver a Java
          </a>
          <a href="/git/landing" style={{
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
            Git →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
