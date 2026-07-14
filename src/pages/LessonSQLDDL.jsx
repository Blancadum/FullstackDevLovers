import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLDDL() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📋',
      title: 'DDL',
      definition: 'Data Definition Language - Define la estructura de la base de datos',
      example: 'CREATE, ALTER, DROP, TRUNCATE'
    },
    {
      icon: '📊',
      title: 'Tabla',
      definition: 'Estructura que almacena datos en filas y columnas',
      example: 'CREATE TABLE usuarios (id INT, nombre VARCHAR(50))'
    },
    {
      icon: '🔑',
      title: 'Restricción',
      definition: 'Regla que valida la integridad de los datos',
      example: 'PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL'
    }
  ];

  const exercises = [
    {
      title: 'Crear tabla de usuarios',
      description: 'Crea una tabla usuarios con id, nombre, email y edad',
      solution: `CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  edad INT CHECK (edad >= 18),
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
    },
    {
      title: 'Crear tabla de productos',
      description: 'Crea tabla productos con precio y stock mínimo',
      solution: `CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  categoria VARCHAR(50) NOT NULL
);`
    }
  ];

  const keyPoints = [
    'CREATE TABLE crea una nueva tabla',
    'ALTER TABLE modifica la estructura existente',
    'DROP TABLE elimina la tabla completamente',
    'TRUNCATE borra datos pero mantiene la estructura',
    'PRIMARY KEY: identifica cada fila de forma única',
    'FOREIGN KEY: referencia a otra tabla',
    'NOT NULL: el campo no puede estar vacío',
    'UNIQUE: los valores deben ser únicos',
    'DEFAULT: valor predeterminado si no se especifica',
    'AUTO_INCREMENT: genera números secuenciales automáticamente'
  ];

  const sections = [
    {
      title: '¿Qué es DDL?',
      content: (
        <p>
          DDL (Data Definition Language) son los comandos SQL que definen la estructura y esquema de la base de datos.
          No modifican los datos, sino la forma en que se almacenan.
        </p>
      )
    },
    {
      title: 'Crear Tablas (CREATE)',
      content: (
        <>
          <p>El comando CREATE TABLE define una nueva tabla con sus columnas y restricciones:</p>
          <CodeBlock
            language="sql"
            code={`CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  edad INT,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
          />
          <InfoBox type="info">
            <strong>Tipos de datos comunes:</strong> INT (números), VARCHAR (texto variable), DECIMAL (decimales),
            DATE (fechas), BOOLEAN (verdadero/falso)
          </InfoBox>
        </>
      )
    },
    {
      title: 'Restricciones (Constraints)',
      content: (
        <>
          <p>Las restricciones aseguran la integridad y validez de los datos:</p>
          <Table
            headers={['Restricción', 'Descripción', 'Ejemplo']}
            rows={[
              ['PRIMARY KEY', 'Identifica cada fila únicamente', 'id INT PRIMARY KEY'],
              ['FOREIGN KEY', 'Referencia a otra tabla', 'usuario_id INT FOREIGN KEY REFERENCES usuarios(id)'],
              ['NOT NULL', 'El campo es obligatorio', 'nombre VARCHAR(50) NOT NULL'],
              ['UNIQUE', 'Valores no repetidos', 'email VARCHAR(100) UNIQUE'],
              ['CHECK', 'Valida una condición', 'edad INT CHECK (edad >= 18)'],
              ['DEFAULT', 'Valor por defecto', 'estado VARCHAR(20) DEFAULT "activo"']
            ]}
          />
        </>
      )
    },
    {
      title: 'Modificar Tablas (ALTER)',
      content: (
        <>
          <p>ALTER TABLE permite cambiar la estructura de una tabla existente:</p>
          <CodeBlock
            language="sql"
            code={`-- Agregar una columna
ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(20);

-- Eliminar una columna
ALTER TABLE usuarios DROP COLUMN telefono;

-- Modificar tipo de dato
ALTER TABLE usuarios MODIFY COLUMN edad INT;

-- Renombrar columna
ALTER TABLE usuarios RENAME COLUMN edad TO años;

-- Agregar restricción
ALTER TABLE usuarios ADD CONSTRAINT chk_edad CHECK (edad >= 0);`}
          />
        </>
      )
    },
    {
      title: 'Eliminar Tablas (DROP vs TRUNCATE)',
      content: (
        <>
          <CodeBlock
            language="sql"
            code={`-- DROP: Elimina la tabla completamente
DROP TABLE usuarios;

-- TRUNCATE: Elimina datos pero mantiene estructura
TRUNCATE TABLE usuarios;

-- DROP con seguridad
DROP TABLE IF EXISTS usuarios;`}
          />
          <InfoBox type="warning" title="Diferencia importante">
            DROP elimina la tabla y su estructura. TRUNCATE solo vacía los datos pero la estructura permanece.
            TRUNCATE es más rápido pero no se puede deshacer fácilmente.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Crear Índices (INDEX)',
      content: (
        <>
          <p>Los índices mejoran la velocidad de búsqueda:</p>
          <CodeBlock
            language="sql"
            code={`-- Crear índice simple
CREATE INDEX idx_email ON usuarios(email);

-- Crear índice único
CREATE UNIQUE INDEX idx_username ON usuarios(username);

-- Crear índice compuesto (múltiples columnas)
CREATE INDEX idx_nombre_apellido ON usuarios(nombre, apellido);

-- Eliminar índice
DROP INDEX idx_email ON usuarios;`}
          />
        </>
      )
    }
  ];

  const summary = `DDL es fundamental para crear y gestionar la estructura de bases de datos:

• CREATE TABLE define nuevas tablas con columnas y restricciones
• PRIMARY KEY identifica filas únicamente
• FOREIGN KEY crea relaciones entre tablas
• NOT NULL, UNIQUE, CHECK validan datos
• ALTER TABLE modifica tablas existentes
• DROP TABLE elimina tablas completamente
• TRUNCATE vacía datos pero mantiene estructura
• Los índices aceleran búsquedas
• AUTO_INCREMENT genera IDs automáticamente`;

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