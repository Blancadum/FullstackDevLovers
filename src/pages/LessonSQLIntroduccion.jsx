import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🗄️',
      title: 'Base de Datos Relacional',
      definition: 'Conjunto organizado de tablas con relaciones entre sí, almacenando información estructurada',
      example: 'Tablas: Usuarios, Productos, Pedidos con relaciones entre ellas',
    },
    {
      icon: '📋',
      title: 'Tabla',
      definition: 'Estructura con filas (registros) y columnas (campos), similar a una hoja de cálculo',
      example: 'Tabla Usuarios: id, nombre, email, fecha_registro',
    },
    {
      icon: '🔑',
      title: 'Clave Primaria (Primary Key)',
      definition: 'Identificador único de cada fila en la tabla, no puede repetirse ni ser nulo',
      example: 'id es clave primaria en tabla Usuarios',
    },
    {
      icon: '🔗',
      title: 'Clave Foránea (Foreign Key)',
      definition: 'Campo que referencia la clave primaria de otra tabla, estableciendo relaciones',
      example: 'usuario_id en Pedidos referencia id en Usuarios',
    },
  ];

  const exercises = [
    {
      title: 'Identificar componentes de una BD',
      description: 'Dado un diagrama de BD, identifica tablas, claves primarias y foráneas',
      solution: `Tabla Usuarios:
- id (PK)
- nombre
- email

Tabla Pedidos:
- id (PK)
- usuario_id (FK → Usuarios.id)
- fecha
- total`,
    },
    {
      title: 'Diseñar estructura de tablas',
      description: 'Diseña una BD para una tienda online con usuarios y productos',
      solution: `Tabla Usuarios:
- id (PK, INT, AUTO_INCREMENT)
- nombre (VARCHAR 100)
- email (VARCHAR 100, UNIQUE)
- fecha_registro (DATETIME)

Tabla Productos:
- id (PK, INT, AUTO_INCREMENT)
- nombre (VARCHAR 100)
- precio (DECIMAL 10,2)

Tabla Pedidos:
- id (PK, INT, AUTO_INCREMENT)
- usuario_id (FK)
- fecha (DATETIME)
- total (DECIMAL 10,2)`,
    },
  ];

  const sections = [
    {
      title: 'Qué es una Base de Datos',
      content: (
        <>
          <p>
            Una base de datos es un conjunto de datos organizados de manera estructurada, almacenados
            en un sistema que permite acceder, modificar y mantener esa información de forma eficiente.
          </p>
          <InfoBox type="info">
            <strong>Tipos de Bases de Datos:</strong>
            <ul>
              <li><strong>Relacionales (SQL):</strong> Datos organizados en tablas con relaciones</li>
              <li><strong>NoSQL:</strong> MongoDB, Cassandra (flexibles, sin esquema fijo)</li>
              <li><strong>Otros:</strong> Grafos, búsqueda, en memoria</li>
            </ul>
          </InfoBox>
          <p>En este curso nos enfocaremos en <strong>Bases de Datos Relacionales con SQL</strong>.</p>
        </>
      ),
    },

    {
      title: 'Conceptos Fundamentales',
      content: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            {concepts.map((concept, index) => (
              <div key={index} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{concept.icon}</div>
                <h4 style={{ margin: '0.5rem 0' }}>{concept.title}</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Def:</strong> {concept.definition}</p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Ej:</strong> {concept.example}</p>
              </div>
            ))}
          </div>
          <InfoBox type="warning" style={{ marginTop: '2rem' }}>
            <strong>Normalización:</strong> Es el proceso de organizar datos en tablas para reducir redundancia
            y mejorar la integridad de datos. Existen diferentes niveles (1FN, 2FN, 3FN, etc.)
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Estructura de una Tabla',
      content: (
        <>
          <p>Una tabla está compuesta por:</p>
          <ul>
            <li><strong>Columnas (Campos):</strong> Definen qué datos se almacenan</li>
            <li><strong>Filas (Registros):</strong> Cada fila es una instancia de datos</li>
            <li><strong>Tipos de Datos:</strong> VARCHAR, INT, DATETIME, DECIMAL, etc.</li>
            <li><strong>Restricciones:</strong> PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL</li>
          </ul>

          <CodeBlock code={`-- Ejemplo de estructura de tabla
Tabla: Usuarios
┌────┬─────────┬──────────────┬───────────────────┐
│ id │ nombre  │ email        │ fecha_registro    │
├────┼─────────┼──────────────┼───────────────────┤
│ 1  │ Juan    │ juan@ex.com  │ 2026-01-15        │
│ 2  │ María   │ maria@ex.com │ 2026-01-16        │
└────┴─────────┴──────────────┴───────────────────┘

Columnas: id, nombre, email, fecha_registro
Filas: 2 registros de usuario`} />
        </>
      ),
    },

    {
      title: 'Relaciones entre Tablas',
      content: (
        <>
          <p>Las relaciones conectan tablas permitiendo consultas complejas:</p>

          <ul>
            <li><strong>Uno a Muchos (1:N):</strong> Un usuario puede tener muchos pedidos</li>
            <li><strong>Muchos a Muchos (N:M):</strong> Un producto en muchos pedidos, un pedido con muchos productos</li>
            <li><strong>Uno a Uno (1:1):</strong> Un usuario con un perfil</li>
          </ul>

          <CodeBlock code={`-- Relación 1:N - Un usuario, muchos pedidos
Tabla Usuarios
┌─────┬────────┐
│ id  │ nombre │
├─────┼────────┤
│ 1   │ Juan   │
│ 2   │ María  │
└─────┴────────┘

Tabla Pedidos
┌────┬───────────┬────────┐
│ id │ usuario_id│ total  │
├────┼───────────┼────────┤
│ 1  │ 1 (Juan)  │ $100   │
│ 2  │ 1 (Juan)  │ $200   │
│ 3  │ 2 (María) │ $150   │
└────┴───────────┴────────┘

usuario_id es clave foránea que referencia Usuarios.id`} />
        </>
      ),
    },
  ];

  const keyPoints = [
    'Una BD relacional almacena datos en tablas con filas y columnas',
    'La clave primaria identifica únicamente cada fila',
    'Las claves foráneas crean relaciones entre tablas',
    'La normalización reduce redundancia y mejora integridad',
    'Las relaciones permiten consultas complejas y eficientes',
    'Existen relaciones 1:N, N:M y 1:1',
    'Los tipos de datos comunes: INT, VARCHAR, DATETIME, DECIMAL',
    'Restricciones: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL',
  ];

  const summary = `Aprendiste los conceptos fundamentales de bases de datos relacionales:
tablas, registros, campos, claves primarias, claves foráneas y relaciones.

Próxima lección: DDL - Aprenderás a crear y modificar tablas.`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}