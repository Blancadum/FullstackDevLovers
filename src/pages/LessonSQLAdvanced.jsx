import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLAdvanced() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📊',
      title: 'Subconsulta',
      definition: 'Una consulta dentro de otra consulta',
      example: 'SELECT * FROM usuarios WHERE id IN (SELECT usuario_id FROM pedidos)'
    },
    {
      icon: '🔢',
      title: 'GROUP BY',
      definition: 'Agrupa registros y aplica funciones de agregación',
      example: 'SELECT ciudad, COUNT(*) FROM usuarios GROUP BY ciudad'
    },
    {
      icon: '👁️',
      title: 'Vista (VIEW)',
      definition: 'Consulta guardada que se comporta como una tabla',
      example: 'CREATE VIEW usuarios_activos AS SELECT * FROM usuarios WHERE estado="activo"'
    }
  ];

  const exercises = [
    {
      title: 'Subconsulta con IN',
      description: 'Obtén usuarios que tienen pedidos mayores a $100',
      solution: `SELECT nombre, email
FROM usuarios
WHERE id IN (
  SELECT DISTINCT usuario_id
  FROM pedidos
  WHERE total > 100
);`
    },
    {
      title: 'GROUP BY con agregación',
      description: 'Obtén el total de ventas por ciudad',
      solution: `SELECT
  u.ciudad,
  COUNT(p.id) AS num_pedidos,
  SUM(p.total) AS total_ventas,
  AVG(p.total) AS promedio
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.ciudad
HAVING SUM(p.total) > 500
ORDER BY total_ventas DESC;`
    },
    {
      title: 'Crear vista',
      description: 'Crea una vista de productos con precio >= $50',
      solution: `CREATE VIEW productos_premium AS
SELECT id, nombre, precio, categoria
FROM productos
WHERE precio >= 50
ORDER BY precio DESC;

-- Usar la vista
SELECT * FROM productos_premium WHERE categoria = 'Electrónica';`
    }
  ];

  const keyPoints = [
    'Subconsultas en WHERE, FROM, SELECT',
    'IN, EXISTS, ANY, ALL para subconsultas',
    'GROUP BY agrupa por columna',
    'HAVING filtra después de GROUP BY',
    'COUNT cuenta registros',
    'SUM suma valores',
    'AVG calcula promedio',
    'MAX/MIN encuentran máximo/mínimo',
    'ORDER BY ordena resultados',
    'Las vistas simplifican consultas complejas'
  ];

  const sections = [
    {
      title: 'Consultas Avanzadas',
      content: (
        <p>
          Las consultas avanzadas combinan múltiples técnicas para extraer datos complejos y
          realizar análisis sofisticados. Son fundamentales para reporting y análisis de datos.
        </p>
      )
    },
    {
      title: 'Subconsultas (Subqueries)',
      content: (
        <>
          <p>Una subconsulta es una consulta dentro de otra:</p>
          <CodeBlock
            language="sql"
            code={`-- Subconsulta en WHERE
SELECT nombre, email
FROM usuarios
WHERE id IN (
  SELECT usuario_id FROM pedidos WHERE total > 100
);

-- Subconsulta con EXISTS
SELECT u.nombre
FROM usuarios u
WHERE EXISTS (
  SELECT 1 FROM pedidos p WHERE p.usuario_id = u.id
);

-- Subconsulta en FROM (tabla derivada)
SELECT promedio_edad, ciudad
FROM (
  SELECT AVG(edad) AS promedio_edad, ciudad
  FROM usuarios
  GROUP BY ciudad
) AS resumen
WHERE promedio_edad > 30;

-- Subconsulta correlacionada
SELECT u.nombre, (
  SELECT COUNT(*) FROM pedidos WHERE usuario_id = u.id
) AS num_pedidos
FROM usuarios u;`}
          />
          <InfoBox type="info">
            Las subconsultas correlacionadas hacen una subconsulta por cada fila (lento).
            Prefiere JOINs cuando sea posible.
          </InfoBox>
        </>
      )
    },
    {
      title: 'GROUP BY y HAVING',
      content: (
        <>
          <p>GROUP BY agrupa registros. HAVING filtra grupos (como WHERE pero para agregaciones):</p>
          <CodeBlock
            language="sql"
            code={`-- GROUP BY básico
SELECT ciudad, COUNT(*) AS num_usuarios
FROM usuarios
GROUP BY ciudad;

-- Con múltiples columnas
SELECT ciudad, estado, COUNT(*) AS total
FROM usuarios
GROUP BY ciudad, estado;

-- Con agregaciones y HAVING
SELECT
  categor­ia,
  COUNT(*) AS num_productos,
  AVG(precio) AS precio_promedio,
  MAX(precio) AS precio_máximo
FROM productos
GROUP BY categoria
HAVING COUNT(*) > 5 AND AVG(precio) > 50
ORDER BY num_productos DESC;

-- Con JOIN y GROUP BY
SELECT
  u.ciudad,
  COUNT(DISTINCT u.id) AS num_usuarios,
  COUNT(p.id) AS num_pedidos,
  SUM(p.total) AS total_ventas
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.ciudad
HAVING SUM(p.total) > 1000;`}
          />
        </>
      )
    },
    {
      title: 'Funciones de Agregación',
      content: (
        <>
          <Table
            headers={['Función', 'Descripción', 'Ejemplo']}
            rows={[
              ['COUNT(*)', 'Cuenta todas las filas', 'SELECT COUNT(*) FROM usuarios'],
              ['COUNT(columna)', 'Cuenta no nulos', 'SELECT COUNT(email) FROM usuarios'],
              ['SUM(columna)', 'Suma valores numéricos', 'SELECT SUM(total) FROM pedidos'],
              ['AVG(columna)', 'Promedio de valores', 'SELECT AVG(edad) FROM usuarios'],
              ['MAX(columna)', 'Valor máximo', 'SELECT MAX(precio) FROM productos'],
              ['MIN(columna)', 'Valor mínimo', 'SELECT MIN(precio) FROM productos'],
              ['GROUP_CONCAT()', 'Concatena valores', 'SELECT GROUP_CONCAT(nombre) FROM usuarios']
            ]}
          />
        </>
      )
    },
    {
      title: 'Vistas (Views)',
      content: (
        <>
          <p>Las vistas son consultas guardadas que funcionan como tablas virtuales:</p>
          <CodeBlock
            language="sql"
            code={`-- Crear vista simple
CREATE VIEW usuarios_activos AS
SELECT id, nombre, email, fecha_registro
FROM usuarios
WHERE estado = 'activo';

-- Usar la vista
SELECT * FROM usuarios_activos WHERE nombre LIKE 'J%';

-- Crear vista con JOIN
CREATE VIEW resumen_pedidos AS
SELECT
  u.nombre AS usuario,
  COUNT(p.id) AS num_pedidos,
  SUM(p.total) AS total_gastado,
  AVG(p.total) AS ticket_promedio
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;

-- Usar vista
SELECT * FROM resumen_pedidos ORDER BY total_gastado DESC;

-- Modificar vista
ALTER VIEW usuarios_activos AS
SELECT id, nombre, email, fecha_registro, ciudad
FROM usuarios
WHERE estado = 'activo' AND fecha_registro > '2024-01-01';

-- Eliminar vista
DROP VIEW usuarios_activos;`}
          />
          <InfoBox type="tip">
            Las vistas simplifican consultas complejas y reutilizables. Úsalas para mantener código limpio.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Window Functions (Funciones de Ventana)',
      content: (
        <>
          <p>Window functions operan sobre un conjunto de filas relacionadas:</p>
          <CodeBlock
            language="sql"
            code={`-- Ranking
SELECT
  nombre,
  edad,
  ROW_NUMBER() OVER (ORDER BY edad DESC) AS ranking,
  RANK() OVER (ORDER BY edad DESC) AS rank,
  DENSE_RANK() OVER (ORDER BY edad DESC) AS dense_rank
FROM usuarios;

-- Running total
SELECT
  nombre,
  total,
  SUM(total) OVER (ORDER BY fecha) AS total_acumulado
FROM pedidos
ORDER BY fecha;

-- Lag/Lead (valores anteriores/siguientes)
SELECT
  fecha,
  total,
  LAG(total) OVER (ORDER BY fecha) AS total_anterior,
  LEAD(total) OVER (ORDER BY fecha) AS total_siguiente
FROM pedidos;`}
          />
        </>
      )
    }
  ];

  const summary = `Las consultas avanzadas resuelven problemas complejos:

• Subconsultas permiten consultas anidadas
• EXISTS verifica si existen registros
• GROUP BY agrupa por columna(s)
• HAVING filtra grupos (después de GROUP BY)
• COUNT, SUM, AVG, MAX, MIN hacen cálculos
• Las vistas simplifican consultas reutilizables
• Window functions operan sobre filas relacionadas
• ORDER BY controla el orden de resultados
• DISTINCT elimina duplicados
• UNION combina resultados de múltiples consultas`;

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