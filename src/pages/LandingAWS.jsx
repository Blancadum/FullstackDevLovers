import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { Breadcrumb } from '../components/Breadcrumb';

export const LandingAWS = () => {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();

  const lessons = [
    {
      title: 'Introducción a AWS',
      description: 'Conoce qué es AWS, su modelo de servicios y por qué es el líder en cloud computing',
      icon: '📚',
      link: '/aws/fundamentales/intro'
    },
    {
      title: 'Conceptos Fundamentales',
      description: 'Regiones, zonas de disponibilidad, elastic computing y escalabilidad',
      icon: '🌍',
      link: '/aws/fundamentales/conceptos'
    },
    {
      title: 'EC2 - Servidores Virtuales',
      description: 'Despliega aplicaciones en instancias seguras y escalables',
      icon: '🖥️',
      link: '/aws/servicios/ec2'
    },
    {
      title: 'RDS - Bases de Datos Relacionales',
      description: 'Gestiona bases de datos SQL sin preocuparte por infraestructura',
      icon: '🗄️',
      link: '/aws/servicios/rds'
    },
    {
      title: 'S3 - Almacenamiento en la Nube',
      description: 'Almacena archivos, imágenes y datos con durabilidad del 99.999999999%',
      icon: '📦',
      link: '/aws/servicios/s3'
    },
    {
      title: 'Lambda - Computación Serverless',
      description: 'Ejecuta código sin gestionar servidores, paga solo por lo que usas',
      icon: '⚡',
      link: '/aws/servicios/lambda'
    },
    {
      title: 'DynamoDB - NoSQL',
      description: 'Base de datos NoSQL rápida y escalable para aplicaciones modernas',
      icon: '⚙️',
      link: '/aws/servicios/dynamodb'
    },
    {
      title: 'VPC - Redes Privadas',
      description: 'Crea redes aisladas y seguras en la nube de AWS',
      icon: '🔒',
      link: '/aws/redes/vpc'
    },
    {
      title: 'CloudWatch - Monitoreo',
      description: 'Supervisa tus aplicaciones y recibe alertas en tiempo real',
      icon: '📊',
      link: '/aws/operaciones/cloudwatch'
    },
    {
      title: 'IAM - Gestión de Acceso',
      description: 'Control granular de permisos y seguridad de tu cuenta',
      icon: '🔐',
      link: '/aws/fundamentales/iam'
    },
    {
      title: 'CI/CD en AWS',
      description: 'Automatiza despliegues con CodePipeline y CodeDeploy',
      icon: '🚀',
      link: '/aws/deployment/cicd'
    },
    {
      title: 'Proyecto Final AWS',
      description: 'Aplica todos los conocimientos en un proyecto integral',
      icon: '🎯',
      link: '/aws/proyecto/final'
    }
  ];

  const concepts = [
    {
      title: 'Pay-As-You-Go',
      description: 'Paga solo lo que usas, sin compromisos ni cargos iniciales',
      icon: '💰'
    },
    {
      title: 'Global Infrastructure',
      description: 'Despliega en 30+ regiones para baja latencia y redundancia',
      icon: '🌐'
    },
    {
      title: 'Escalabilidad Automática',
      description: 'Tu aplicación crece o se reduce automáticamente según demanda',
      icon: '📈'
    },
    {
      title: 'Seguridad Multicapa',
      description: 'Protección de datos en tránsito y en reposo con encriptación',
      icon: '🛡️'
    },
    {
      title: 'Reliability & Durability',
      description: 'Diseñado para 99.99% uptime y máxima protección de datos',
      icon: '✅'
    },
    {
      title: 'Managed Services',
      description: 'AWS gestiona infraestructura, tú solo te enfocas en código',
      icon: '🎯'
    },
    {
      title: 'API-First',
      description: 'Todos los servicios accesibles vía API REST o CLI',
      icon: '🔌'
    },
    {
      title: 'Cost Optimization',
      description: 'Herramientas para monitorear y optimizar gastos en la nube',
      icon: '📉'
    }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <div className="lesson-container">
      <div className="lesson-header">
        <h1>Cloud Computing with AWS</h1>
        <p className="lesson-intro">
          Amazon Web Services es la plataforma cloud más utilizada del mundo. Aprende a desplegar, escalar y gestionar aplicaciones con los servicios más poderosos de la industria
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es AWS?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>Amazon Web Services (AWS)</strong> es una plataforma de computación en la nube que proporciona más de 200 servicios para infraestructura, plataforma y software. Es el proveedor cloud más confiable y usado por empresas como Netflix, Airbnb, Spotify y Dropbox.
        </p>

        <div style={{
          backgroundColor: '#fff3e0',
          border: '2px solid #ff9800',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#ff9800' }}>Por qué AWS es Diferente</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Liderazgo de Mercado:</strong> 32% market share en cloud computing (2024)</li>
            <li><strong>Madurez de Servicios:</strong> Servicios probados a escala global durante 18 años</li>
            <li><strong>Innovación Constante:</strong> Lanza múltiples servicios nuevos cada mes</li>
            <li><strong>Ecosistema Vasto:</strong> Partners, herramientas e integraciones en todos lados</li>
            <li><strong>Documentación Exhaustiva:</strong> Comunidad gigante, cursos y recursos abundantes</li>
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
            { icon: '💼', title: 'Demanda Exponencial', desc: 'AWS engineers son los más solicitados en tech' },
            { icon: '💰', title: 'Salarios Premium', desc: 'AWS specialists ganan 15-30% más que promedio' },
            { icon: '🌍', title: 'Oportunidades Globales', desc: 'Trabajo remoto con empresas de todo el mundo' },
            { icon: '🚀', title: 'Escalabilidad Profesional', desc: 'Sigue creciendo en cloud: GCP, Azure, Kubernetes' }
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
        <h2>Conceptos Clave de AWS</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f3e5f5',
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
        <h2>Arquitectura de Aplicaciones en AWS</h2>
        <div style={{
          backgroundColor: '#fce4ec',
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
{`┌─────────────────────────────────────────────────────────┐
│           FLUJO DE APLICACIÓN EN AWS                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Cliente (Web/Mobile)                                  │
│       ↓                                                │
│  CloudFront (CDN)        ← Caché global               │
│       ↓                                                │
│  Route 53 (DNS)          ← Enrutamiento inteligente   │
│       ↓                                                │
│  Load Balancer (ELB)     ← Distribución de carga      │
│       ↓                                                │
│  Auto Scaling Group      ← EC2 instances escalables   │
│       ↓ ↓ ↓              ← Múltiples instancias       │
│  VPC (Red Privada)       ← Seguridad                  │
│       ↓                                                │
│  ┌─────────────────────────────────────┐             │
│  │  Aplicación (Java, Python, Node)    │             │
│  └─────────────────────────────────────┘             │
│       ↓                                                │
│  ┌──────────────────┬──────────────────┐             │
│  │                  │                  │             │
│  │  RDS (SQL)       │  DynamoDB (NoSQL)│             │
│  │  PostgreSQL      │  Real-time       │             │
│  │  MySQL           │  Flexible Schema │             │
│  │                  │                  │             │
│  └──────────────────┴──────────────────┘             │
│       ↓                                                │
│  ┌──────────────────┬──────────────────┐             │
│  │                  │                  │             │
│  │  S3 (Storage)    │  ElastiCache     │             │
│  │  Files/Images    │  Redis/Memcached │             │
│  │  Backups         │  Performance     │             │
│  │                  │                  │             │
│  └──────────────────┴──────────────────┘             │
│       ↓                                                │
│  CloudWatch        ← Monitoreo y alertas              │
│  SNS/SES           ← Notificaciones                   │
│                                                         │
└─────────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Comparación: Antes vs Después de AWS</h3>
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
            <h4 style={{ marginTop: 0, color: '#d32f2f' }}>On-Premise (Tradicional)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Comprar servidores físicos 😫</li>
              <li>Espacio y enfriamiento costoso</li>
              <li>Capital inicial enorme (CapEx)</li>
              <li>Escalamiento lento (semanas/meses)</li>
              <li>Mantenimiento y soporte propio</li>
              <li>Riesgo total si falla un servidor</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #388e3c',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#388e3c' }}>AWS (Cloud)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Provisionar en minutos 🚀</li>
              <li>Sin costos de infraestructura</li>
              <li>Pagar solo lo que usas (OpEx)</li>
              <li>Escalamiento en segundos/minutos</li>
              <li>AWS gestiona todo</li>
              <li>Redundancia automática global</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Lecciones de AWS</h2>
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
        <h2>¿Por dónde empezar?</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si eres nuevo en AWS, sigue este orden recomendado:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>Introducción a AWS</strong> → Entiende qué es AWS y sus servicios principales</li>
          <li><strong>Conceptos Fundamentales</strong> → Regiones, zonas y modelos de computación</li>
          <li><strong>EC2</strong> → Despliega tu primera aplicación en servidor virtual</li>
          <li><strong>RDS o DynamoDB</strong> → Conecta una base de datos a tu aplicación</li>
          <li><strong>S3</strong> → Aprende a almacenar archivos en la nube</li>
          <li><strong>VPC e IAM</strong> → Configura seguridad y redes</li>
          <li><strong>Lambda</strong> → Experimenta con serverless computing</li>
          <li><strong>CloudWatch</strong> → Monitorea y optimiza costos</li>
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
          <a href="/entornos/herramientas/landing" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff9800',
            color: '#ffffff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#f57c00'} onMouseOut={(e) => e.target.style.backgroundColor = '#ff9800'}>
            Herramientas →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
