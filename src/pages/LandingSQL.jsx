import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingSQL = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: 'Introducción a SQL y Bases de Datos',
      description: 'Entiende qué es una base de datos relacional y los conceptos fundamentales de SQL',
      icon: '📚',
      link: '/sql/basicos/introduccion'
    },
    {
      title: 'DDL - Data Definition Language',
      description: 'CREATE, ALTER, DROP: Define y modifica la estructura de tus bases de datos',
      icon: '⚙️',
      link: '/sql/basicos/ddl'
    },
    {
      title: 'DML - Data Manipulation Language',
      description: 'INSERT, UPDATE, DELETE, SELECT: Manipula y consulta datos en tus tablas',
      icon: '✏️',
      link: '/sql/basicos/dml'
    },
    {
      title: 'JOINs - Combinando Tablas',
      description: 'INNER, LEFT, RIGHT, FULL: Relaciona datos de múltiples tablas',
      icon: '🔗',
      link: '/sql/avanzado/joins'
    },
    {
      title: 'Consultas Avanzadas',
      description: 'GROUP BY, HAVING, Subconsultas: Análisis complejos de datos',
      icon: '🔍',
      link: '/sql/avanzado/consultas-avanzadas'
    },
    {
      title: 'Crear y Administrar Bases de Datos',
      description: 'Gestiona bases de datos: creación, modificación, optimización',
      icon: '➕',
      link: '/sql/gestion/crear-bases-datos'
    },
    {
      title: 'Usuarios y Permisos',
      description: 'Control de acceso: crea usuarios y asigna permisos específicos',
      icon: '🔐',
      link: '/sql/gestion/usuarios-permisos'
    },
    {
      title: 'Backup y Recuperación',
      description: 'Protege tus datos: estrategias de backup y recuperación ante fallos',
      icon: '💾',
      link: '/sql/gestion/backup-recuperacion'
    },
    {
      title: 'SQL vs NoSQL - Comparativa',
      description: 'Entiende las diferencias y cuándo usar cada tecnología',
      icon: '⚖️',
      link: '/sql/lenguajes/sql-nosql'
    },
    {
      title: 'MySQL - SQL Relacional',
      description: 'El gestor SQL más popular: instalación, configuración y uso',
      icon: '🐬',
      link: '/sql/lenguajes/mysql'
    },
    {
      title: 'PostgreSQL - SQL Avanzado',
      description: 'El gestor SQL más potente: características avanzadas y escalabilidad',
      icon: '🐘',
      link: '/sql/lenguajes/postgresql'
    },
    {
      title: 'MongoDB - NoSQL Flexible',
      description: 'Bases de datos no relacionales: documentos, escalabilidad horizontal',
      icon: '🍃',
      link: '/sql/lenguajes/mongodb'
    }
  ];

  const concepts = [
    {
      title: 'Relaciones y Claves',
      description: 'Foreign Keys, Primary Keys y relaciones entre tablas',
      icon: '🔑'
    },
    {
      title: 'Normalización',
      description: 'Estructura de datos eficiente para evitar redundancia y anomalías',
      icon: '📐'
    },
    {
      title: 'Índices',
      description: 'Optimización de consultas mediante índices estratégicos',
      icon: '⚡'
    },
    {
      title: 'Transacciones',
      description: 'ACID: garantiza consistencia e integridad de datos',
      icon: '🔄'
    },
    {
      title: 'Vistas y Procedimientos',
      description: 'Consultas reutilizables y lógica en la base de datos',
      icon: '👁️'
    },
    {
      title: 'Escalabilidad',
      description: 'Crecimiento: replicación, particionamiento y clustering',
      icon: '📈'
    }
  ];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>SQL - Bases de Datos</h1>
        <p className="lesson-intro">
          Domina SQL: desde consultas básicas hasta administración profesional de bases de datos. Aprende a diseñar, optimizar y gestionar datos de forma eficiente
        </p>
      </div>

      <section className="lesson-section">
        <h2>¿Qué es SQL y por qué es importante?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <strong>SQL (Structured Query Language)</strong> es el lenguaje universal para gestionar <strong>bases de datos relacionales</strong>. No es un lenguaje de programación, sino un lenguaje de <strong>consulta y manipulación de datos</strong> usado por millones de desarrolladores y empresas en todo el mundo.
        </p>

        <div style={{
          backgroundColor: '#f0f4ff',
          border: '2px solid #2196F3',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#2196F3' }}>¿Por qué Aprender SQL?</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.9', marginBottom: 0 }}>
            <li><strong>Industria:</strong> Todas las empresas usan bases de datos relacionales</li>
            <li><strong>Backend Profesional:</strong> Todo desarrollador debe dominar SQL</li>
            <li><strong>Análisis de Datos:</strong> Los analistas viven en SQL y Excel</li>
            <li><strong>Carrera:</strong> Habilidad fundamental para cualquier posición técnica</li>
            <li><strong>Rendimiento:</strong> Optimizar consultas es parte del trabajo diario</li>
          </ul>
        </div>

        <h3>Impacto en tu Carrera</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            { icon: '💼', title: 'Requisito Base', desc: 'Todas las ofertas de empleo lo exigen' },
            { icon: '📊', title: 'Toma de Decisiones', desc: 'Accede a datos para análisis y reporting' },
            { icon: '⚡', title: 'Rendimiento', desc: 'Optimiza consultas para aplicaciones rápidas' },
            { icon: '🔒', title: 'Seguridad', desc: 'Gestiona permisos y controla acceso a datos' }
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
        <h2>Conceptos Clave de SQL</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {concepts.map((concept, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f0f4ff',
              border: '2px solid #2196F3',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{concept.icon}</div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#2196F3' }}>{concept.title}</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <h2>Ciclo de Vida de una Consulta SQL</h2>
        <div style={{
          backgroundColor: '#f5f5f5',
          border: '3px solid #2196F3',
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
{`┌──────────────────────────────────────────────┐
│        CICLO DE VIDA DE UNA CONSULTA         │
├──────────────────────────────────────────────┤
│                                              │
│  1️⃣  PARSING       → Verificar sintaxis      │
│       ↓                                     │
│  2️⃣  VALIDACIÓN    → Tablas y columnas      │
│       ↓                                     │
│  3️⃣  OPTIMIZACIÓN  → Plan de ejecución     │
│       ↓                                     │
│  4️⃣  COMPILACIÓN   → Código máquina        │
│       ↓                                     │
│  5️⃣  EJECUCIÓN     → Acceso a índices      │
│       ↓                                     │
│  6️⃣  RECUPERACIÓN  → Retorna resultados    │
│                                              │
│  SQL ágil = Índices buenos + Queries bien   │
└──────────────────────────────────────────────┘`}
          </pre>
        </div>

        <h3>Modelos de Datos: Relacional vs NoSQL</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#4CAF50' }}>✅ SQL Relacional (Tabla)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Estructura fija con esquema</li>
              <li>Relaciones definidas (Foreign Keys)</li>
              <li>Transacciones ACID garantizadas</li>
              <li>Ideal para datos estructurados</li>
              <li>Ejemplos: MySQL, PostgreSQL, Oracle</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ marginTop: 0, color: '#ff9800' }}>✅ NoSQL (Documentos/Clave-Valor)</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Esquema flexible (documentos JSON)</li>
              <li>Sin relaciones predefinidas</li>
              <li>Escalabilidad horizontal</li>
              <li>Ideal para datos no estructurados</li>
              <li>Ejemplos: MongoDB, Redis, DynamoDB</li>
            </ul>
          </div>
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
              e.currentTarget.style.borderColor = '#2196F3';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(33,150,243,0.15)';
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
                  backgroundColor: '#2196F3',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1565C0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
              >
                Ver Lección →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section" style={{
        backgroundColor: '#e8f5ff',
        border: '2px solid #2196F3',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2>Ruta de Aprendizaje Recomendada</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si eres nuevo en SQL, te recomendamos este orden para aprender de forma progresiva:
        </p>
        <ol style={{ fontSize: '1rem', lineHeight: '2', marginBottom: 0 }}>
          <li><strong>1. Introducción a SQL y Bases de Datos</strong> → Entiende qué es una BD relacional</li>
          <li><strong>2. DDL - Data Definition Language</strong> → Crea y modifica tablas</li>
          <li><strong>3. DML - Data Manipulation Language</strong> → Inserta, actualiza y consulta datos</li>
          <li><strong>4. JOINs - Combinando Tablas</strong> → Relaciona datos de múltiples tablas</li>
          <li><strong>5. Consultas Avanzadas</strong> → GROUP BY, HAVING y subconsultas</li>
          <li><strong>6. MySQL o PostgreSQL</strong> → Practica en un motor SQL real</li>
          <li><strong>7. Gestión y Usuarios</strong> → Administración profesional</li>
          <li><strong>8. NoSQL (MongoDB)</strong> → Entiende la alternativa moderna</li>
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
          En la práctica profesional, pasarás más tiempo <strong>optimizando consultas lentes que escribiendo SQL</strong>.
          Aprende a usar EXPLAIN, índices y a analizar planes de ejecución desde el inicio. Un desarrollador que escribe
          consultas eficientes vale mucho más que uno que solo escribe código correcto.
        </p>
      </section>
    </div>
  );
};
