import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLPostgreSQL() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🐘',
      title: 'PostgreSQL',
      definition: 'Base de datos SQL avanzada, open source, con características empresariales',
      example: 'Soporte completo ACID, types complejos, extensiones, JSON nativo'
    },
    {
      icon: '🎯',
      title: 'Tipos de Datos Avanzados',
      definition: 'Tipos complejos: arrays, rangos, geometría, UUID, tipos custom',
      example: 'INT[], RANGE, POINT, POLYGON, UUID, JSONB'
    },
    {
      icon: '🧩',
      title: 'Extensiones (Extensions)',
      definition: 'Módulos que agregan funcionalidad a PostgreSQL',
      example: 'PostGIS (geoespacial), pgcrypto (criptografía), uuid-ossp'
    },
    {
      icon: '🚀',
      title: 'Características Avanzadas',
      definition: 'Funcionalidades de nivel empresarial',
      example: 'CTE, Window Functions, JSON, Full-text search, Particionamiento'
    },
    {
      icon: '📊',
      title: 'Vistas Materializadas',
      definition: 'Vistas que se guardan como tablas para mejor performance',
      example: 'Precalcular resultados complejos y refrescarlos periódicamente'
    },
    {
      icon: '🔍',
      title: 'Full-Text Search',
      definition: 'Búsqueda de texto completo optimizada en PostgreSQL',
      example: 'Vectores de texto, búsqueda multiidioma, rankings'
    }
  ];

  const exercises = [
    {
      title: 'Usar tipos de datos avanzados de PostgreSQL',
      description: 'Aprovecha tipos de datos especiales: arrays, rangos, UUID, JSON',
      solution: `-- Crear tabla con tipos avanzados
CREATE TABLE usuarios_avanzado (
  -- UUID como identificador
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Texto
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,

  -- Array de números
  numeros_telefonicos TEXT[],

  -- Array de JSON
  direcciones JSONB[],

  -- Rango de números (edad entre 18 y 65)
  edad_permitida INT4RANGE,

  -- Tipo enum personalizado
  estado estado_usuario,

  -- Punto geográfico
  ubicacion POINT,

  -- Intervalo de tiempo
  duracion_contrato INTERVAL,

  -- Timestamp con zona horaria
  fecha_registro TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos con arrays
INSERT INTO usuarios_avanzado (nombre, email, numeros_telefonicos)
VALUES ('Juan', 'juan@example.com', ARRAY['123456789', '987654321']);

-- Insertar datos con UUID
INSERT INTO usuarios_avanzado (nombre, email)
VALUES ('María', 'maria@example.com');

-- Consultar arrays
SELECT nombre, numeros_telefonicos[1] as primer_telefono
FROM usuarios_avanzado;

-- Usando rango
INSERT INTO usuarios_avanzado (nombre, edad_permitida)
VALUES ('Carlos', '[18,65)'::int4range);

SELECT * FROM usuarios_avanzado
WHERE edad_permitida @> 25;  -- Contiene el número 25`
    },
    {
      title: 'Crear y usar extensiones en PostgreSQL',
      description: 'Instala y utiliza extensiones útiles como PostGIS, pgcrypto',
      solution: `-- Ver extensiones disponibles
SELECT * FROM pg_available_extensions;

-- Crear extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear extensión de criptografía
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Crear extensión PostGIS (geoespacial)
CREATE EXTENSION IF NOT EXISTS postgis;

-- Usar uuid-ossp para generar UUIDs
SELECT uuid_generate_v1();
SELECT uuid_generate_v4();

-- Usar pgcrypto para hash de contraseñas
CREATE TABLE usuarios_seguro (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  password_hash TEXT
);

INSERT INTO usuarios_seguro (email, password_hash)
VALUES ('juan@example.com', crypt('mi_contraseña', gen_salt('bf')));

-- Verificar contraseña
SELECT * FROM usuarios_seguro
WHERE email = 'juan@example.com'
  AND password_hash = crypt('mi_contraseña', password_hash);

-- Usar PostGIS para consultas geoespaciales
CREATE TABLE ubicaciones (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  punto GEOMETRY(POINT, 4326)  -- Latitud, Longitud
);

INSERT INTO ubicaciones (nombre, punto)
VALUES ('Madrid', ST_GeomFromText('POINT(40.4168 -3.7038)', 4326));

-- Consultas geoespaciales
SELECT nombre,
  ST_Distance(punto, ST_GeomFromText('POINT(40.4168 -3.7038)', 4326)) as distancia_metros
FROM ubicaciones
ORDER BY distancia_metros LIMIT 5;`
    },
    {
      title: 'Implementar Full-Text Search avanzado',
      description: 'Crear búsqueda de texto completo en PostgreSQL',
      solution: `-- Crear tabla con soporte FTS
CREATE TABLE articulos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  contenido TEXT NOT NULL,
  -- Vector de búsqueda precompilado
  busqueda_vector TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('spanish', titulo || ' ' || contenido)
  ) STORED
);

-- Crear índice GIN para búsqueda rápida
CREATE INDEX idx_busqueda ON articulos USING GIN (busqueda_vector);

-- Insertar datos
INSERT INTO articulos (titulo, contenido) VALUES
('Introduccion a PostgreSQL', 'PostgreSQL es una base de datos...'),
('Optimizacion de queries', 'Las queries lentas pueden optimizarse...');

-- Búsqueda simple
SELECT id, titulo
FROM articulos
WHERE busqueda_vector @@ to_tsquery('spanish', 'PostgreSQL');

-- Búsqueda con operadores
SELECT id, titulo,
  ts_rank(busqueda_vector, query) as relevancia
FROM articulos,
  to_tsquery('spanish', 'PostgreSQL | optimizacion') as query
WHERE busqueda_vector @@ query
ORDER BY relevancia DESC;

-- Búsqueda con prefijo (cualquier palabra que inicie con 'post')
SELECT * FROM articulos
WHERE busqueda_vector @@ to_tsquery('spanish', 'post:*');

-- Búsqueda con distancia (palabras cercanas)
SELECT * FROM articulos
WHERE busqueda_vector @@ to_tsquery('spanish', 'PostgreSQL <-> base');`
    },
    {
      title: 'Usar Window Functions para análisis',
      description: 'Implementar funciones de ventana para cálculos complejos',
      solution: `-- Crear tabla de ventas
CREATE TABLE ventas (
  id SERIAL PRIMARY KEY,
  vendedor VARCHAR(100),
  fecha DATE,
  monto DECIMAL(10,2)
);

-- Insertar datos
INSERT INTO ventas (vendedor, fecha, monto) VALUES
('Juan', '2024-01-01', 1000),
('Juan', '2024-01-02', 1500),
('María', '2024-01-01', 2000),
('María', '2024-01-02', 2500);

-- Window Function: ROW_NUMBER (ranking sin empates)
SELECT
  vendedor, fecha, monto,
  ROW_NUMBER() OVER (ORDER BY monto DESC) as ranking
FROM ventas;

-- Window Function: RANK (ranking con empates)
SELECT
  vendedor, fecha, monto,
  RANK() OVER (PARTITION BY vendedor ORDER BY monto DESC) as ranking_por_vendedor
FROM ventas;

-- Window Function: SUM acumulativo
SELECT
  vendedor, fecha, monto,
  SUM(monto) OVER (
    PARTITION BY vendedor
    ORDER BY fecha
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) as acumulado
FROM ventas
ORDER BY vendedor, fecha;

-- Window Function: LAG y LEAD (valores anteriores/siguientes)
SELECT
  vendedor, fecha, monto,
  LAG(monto) OVER (PARTITION BY vendedor ORDER BY fecha) as monto_anterior,
  LEAD(monto) OVER (PARTITION BY vendedor ORDER BY fecha) as monto_siguiente,
  monto - LAG(monto) OVER (PARTITION BY vendedor ORDER BY fecha) as diferencia
FROM ventas
ORDER BY vendedor, fecha;

-- Window Function: PERCENT_RANK
SELECT
  vendedor, fecha, monto,
  PERCENT_RANK() OVER (ORDER BY monto) as percentil
FROM ventas;`
    }
  ];

  const keyPoints = [
    'PostgreSQL es el SGBDR más avanzado: complejo pero poderoso',
    'Soporta tipos de datos complejos: arrays, rangos, JSON, geometría',
    'Extensiones agregan funcionalidad: PostGIS, pgcrypto, uuid-ossp',
    'Window Functions permiten análisis de datos complejos sin GROUP BY',
    'CTEs (Common Table Expressions) mejoran legibilidad de queries complejas',
    'Full-Text Search es nativo y optimizado con índices GIN',
    'JSONB permite almacenar y consultar datos semiestructurados',
    'Vistas materializadas precalculan resultados complejos',
    'Herencia de tablas permite reutilización de estructura',
    'Triggers y procedimientos almacenados en PL/pgSQL'
  ];

  const sections = [
    {
      title: 'Introduccion a PostgreSQL',
      content: (
        <>
          <p>
            PostgreSQL es un sistema de gestión de bases de datos relacional-objeto (ORDBMS) de código abierto.
            Es conocido por su robustez, características avanzadas y cumplimiento de estándares SQL.
          </p>
          <CodeBlock
            language="sql"
            code={`-- Conectar a PostgreSQL
psql -U postgres -d nombre_base

-- Crear base de datos
CREATE DATABASE tienda OWNER postgres
  TEMPLATE template0
  ENCODING 'UTF8'
  LC_COLLATE 'es_ES.UTF-8'
  LC_CTYPE 'es_ES.UTF-8';

-- Conectar a base de datos
\\c tienda

-- Ver versión
SELECT version();

-- Ver caracteres disponibles
\\encoding

-- Ver tablas
\\dt

-- Ver esquemas
\\dn`}
          />
          <InfoBox type="info">
            <strong>Ventajas de PostgreSQL:</strong> ACID completo, tipos avanzados, extensiones,
            mejor para datos complejos que MySQL
          </InfoBox>
        </>
      )
    },
    {
      title: 'Tipos de Datos Avanzados',
      content: (
        <>
          <p>PostgreSQL ofrece una gama completa de tipos de datos, incluyendo algunos únicos:</p>
          <Table
            headers={['Categoría', 'Tipo', 'Descripción', 'Ejemplo']}
            rows={[
              ['Numéricos', 'SERIAL/BIGSERIAL', 'Auto-incremento automático', 'SERIAL PRIMARY KEY'],
              ['Numéricos', 'NUMERIC(p,s)', 'Exacto con precisión definida', 'NUMERIC(10,2)'],
              ['Texto', 'TEXT', 'Texto sin límite de longitud', 'TEXT'],
              ['Texto', 'VARCHAR(n)', 'Texto variable hasta n', 'VARCHAR(100)'],
              ['Fecha', 'TIMESTAMP', 'Fecha y hora', 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'],
              ['Fecha', 'TIMESTAMPTZ', 'Con zona horaria', 'TIMESTAMPTZ'],
              ['Especial', 'UUID', 'Identificador único universal', 'UUID DEFAULT gen_random_uuid()'],
              ['Especial', 'JSONB', 'JSON binario optimizado', 'JSONB DEFAULT \'{}\''],
              ['Especial', 'INT4RANGE', 'Rango de números', 'INT4RANGE \'[1,10)\''],
              ['Especial', 'ARRAY', 'Array de cualquier tipo', 'INTEGER[] ARRAY[1,2,3]'],
              ['Geo', 'POINT', 'Punto geográfico', 'POINT(40.4168, -3.7038)'],
              ['Geo', 'POLYGON', 'Polígono geográfico', 'POLYGON((0,0), (1,0), (1,1))']
            ]}
          />
        </>
      )
    },
    {
      title: 'Extensiones (Extensions)',
      content: (
        <>
          <p>Las extensiones agregan funcionalidad especializada a PostgreSQL:</p>
          <Table
            headers={['Extensión', 'Propósito', 'Comandos']}
            rows={[
              ['uuid-ossp', 'Generar UUIDs', 'uuid_generate_v1(), uuid_generate_v4()'],
              ['pgcrypto', 'Criptografía y hash', 'crypt(), gen_salt(), digest()'],
              ['PostGIS', 'Datos geoespaciales', 'ST_Distance(), ST_Contains()'],
              ['hstore', 'Pares clave-valor', 'HSTORE type (deprecado, usar JSONB)'],
              ['pg_trgm', 'Búsqueda de similitud', 'similarity(), %% operator'],
              ['plpgsql', 'Procedimientos en PL/pgSQL', 'CREATE FUNCTION'],
              ['citext', 'Text case-insensitive', 'CITEXT type para búsquedas'],
              ['intarray', 'Funciones de arrays', 'array_intersect(), array_union()']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- Ver extensiones instaladas
\\dx

-- Ver extensiones disponibles
SELECT * FROM pg_available_extensions;

-- Instalar extensión
CREATE EXTENSION IF NOT EXISTS uuid-ossp;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS postgis;`}
          />
        </>
      )
    },
    {
      title: 'CTEs y Consultas Complejas',
      content: (
        <>
          <p>
            Common Table Expressions (CTEs) hacen las queries complejas más legibles y mantenibles.
          </p>
          <CodeBlock
            language="sql"
            code={`-- CTE simple (WITH)
WITH vendedores_top AS (
  SELECT vendedor, SUM(monto) as total
  FROM ventas
  GROUP BY vendedor
  ORDER BY total DESC
  LIMIT 5
)
SELECT * FROM vendedores_top;

-- CTE recursiva (jerarquías)
WITH RECURSIVE empleados_jerarquia AS (
  -- Base: empleados sin jefe (directores)
  SELECT id, nombre, jefe_id, 1 as nivel
  FROM empleados
  WHERE jefe_id IS NULL

  UNION ALL

  -- Recursión: empleados con jefe
  SELECT e.id, e.nombre, e.jefe_id, ej.nivel + 1
  FROM empleados e
  INNER JOIN empleados_jerarquia ej ON e.jefe_id = ej.id
)
SELECT * FROM empleados_jerarquia
ORDER BY nivel, nombre;

-- Múltiples CTEs
WITH cte1 AS (
  SELECT id, nombre FROM usuarios WHERE activo = TRUE
),
cte2 AS (
  SELECT usuario_id, SUM(monto) as total FROM pedidos GROUP BY usuario_id
)
SELECT c1.nombre, c2.total
FROM cte1 c1
LEFT JOIN cte2 c2 ON c1.id = c2.usuario_id
ORDER BY c2.total DESC;`}
          />
        </>
      )
    },
    {
      title: 'Vistas Materializadas y Rendimiento',
      content: (
        <>
          <p>Las vistas materializadas almacenan resultados para mejor rendimiento:</p>
          <CodeBlock
            language="sql"
            code={`-- Vista normal (calcula siempre)
CREATE VIEW usuarios_activos AS
SELECT id, nombre, email FROM usuarios WHERE activo = TRUE;

-- Vista materializada (guarda resultados)
CREATE MATERIALIZED VIEW usuarios_activos_mat AS
SELECT id, nombre, email FROM usuarios WHERE activo = TRUE;

-- Refrescar vista materializada
REFRESH MATERIALIZED VIEW usuarios_activos_mat;

-- Refrescar sin bloquear (PostgreSQL 9.5+)
REFRESH MATERIALIZED VIEW CONCURRENTLY usuarios_activos_mat;

-- Crear índice en vista materializada
CREATE UNIQUE INDEX idx_mat_email ON usuarios_activos_mat(email);

-- Comparar rendimiento
EXPLAIN ANALYZE
SELECT * FROM usuarios_activos WHERE email = 'juan@example.com';

EXPLAIN ANALYZE
SELECT * FROM usuarios_activos_mat WHERE email = 'juan@example.com';`}
          />
        </>
      )
    },
    {
      title: 'Procedimientos y Triggers',
      content: (
        <>
          <p>PostgreSQL permite crear lógica de base de datos con procedimientos y triggers:</p>
          <CodeBlock
            language="sql"
            code={`-- Crear función/procedimiento simple
CREATE FUNCTION obtener_edad(fecha_nacimiento DATE) RETURNS INT AS
  SELECT EXTRACT(YEAR FROM AGE(fecha_nacimiento))::INT;
LANGUAGE SQL;

-- Usar función
SELECT obtener_edad('1990-05-15');

-- Función con PL/pgSQL
CREATE FUNCTION actualizar_stock(producto_id INT, cantidad INT) RETURNS BOOLEAN AS
$$
DECLARE
  stock_actual INT;
BEGIN
  SELECT stock INTO stock_actual FROM productos WHERE id = producto_id;

  IF stock_actual < cantidad THEN
    RETURN FALSE;
  END IF;

  UPDATE productos SET stock = stock - cantidad WHERE id = producto_id;
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

-- Trigger automático
CREATE TRIGGER actualizar_timestamp
BEFORE UPDATE ON usuarios
FOR EACH ROW
EXECUTE FUNCTION actualizar_fecha_actualizacion();

-- Función para trigger
CREATE FUNCTION actualizar_fecha_actualizacion() RETURNS TRIGGER AS
$$
BEGIN
  NEW.actualizado_en = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`}
          />
        </>
      )
    }
  ];

  const summary = `PostgreSQL es la base de datos SQL más avanzada del mundo:

• Soporte completo ACID con el mejor cumplimiento de estándares SQL
• Tipos de datos complejos: arrays, JSON, rangos, geometría, UUID
• Extensiones agregan funcionalidad: PostGIS, pgcrypto, uuid-ossp
• Window Functions permiten análisis sin GROUP BY complicados
• CTEs (Common Table Expressions) mejoran legibilidad de queries
• Full-Text Search nativo con índices GIN optimizados
• Vistas materializadas precalculan resultados costosos
• Procedimientos almacenados con PL/pgSQL
• Triggers automáticos para lógica de negocio
• Mejor opción para datos complejos que MySQL`;

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