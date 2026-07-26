import { LessonTemplate, CodeBlock, Table, InfoBox, LessonConceptGrid, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonSQLJOINs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      title: 'JOIN',
      definition: 'Combina datos de múltiples tablas relacionadas',
      example: 'SELECT * FROM usuarios JOIN pedidos ON usuarios.id = pedidos.usuario_id'
    },
    {
      title: 'INNER JOIN',
      definition: 'Retorna solo registros que coinciden en ambas tablas',
      example: 'Usuarios que tienen pedidos'
    },
    {
      title: 'LEFT JOIN',
      definition: 'Retorna todos los registros de la tabla izquierda más coincidencias',
      example: 'Todos los usuarios, incluso sin pedidos'
    }
  ];

  const exercises = [
    {
      title: 'INNER JOIN básico',
      description: 'Obtén usuarios y sus pedidos',
      solution: `SELECT u.nombre, p.id AS pedido_id, p.total
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;`
    },
    {
      title: 'LEFT JOIN',
      description: 'Obtén todos los usuarios y sus pedidos (si existen)',
      solution: `SELECT u.nombre, COUNT(p.id) AS num_pedidos
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;`
    },
    {
      title: 'JOIN múltiple',
      description: 'Obtén usuarios, pedidos y productos',
      solution: `SELECT u.nombre, p.id, pr.nombre AS producto
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
INNER JOIN productos pr ON p.producto_id = pr.id;`
    }
  ];

  const keyPoints = [
    'INNER JOIN: registros que coinciden en ambas tablas',
    'LEFT JOIN: todos de la izquierda + coincidencias',
    'RIGHT JOIN: todos de la derecha + coincidencias',
    'FULL OUTER JOIN: todos de ambas tablas',
    'CROSS JOIN: producto cartesiano (todos con todos)',
    'La condición ON especifica cómo relacionar tablas',
    'Los alias (AS) hacen consultas más legibles',
    'Se pueden hacer múltiples JOINs en una consulta',
    'GROUP BY agrupa resultados',
    'Pueden combinarse con WHERE para filtrar'
  ];

  const sections = [
    {
      title: '¿Qué son los JOINs?',
      content: (
        <p>
          Los <strong>JOINs</strong> combinan datos de múltiples <strong>tablas</strong> relacionadas mediante <strong>claves externas</strong> (<strong>Foreign Keys</strong>).
          Son fundamentales para trabajar con <strong>bases de datos</strong> normalizadas.
        </p>
      )
    },
    {
      title: 'INNER JOIN',
      content: (
        <>
          <p><strong>INNER JOIN</strong> retorna solo los <strong>registros</strong> que tienen coincidencias en ambas <strong>tablas</strong>:</p>
          <CodeBlock
            language="sql"
            code={`SELECT u.nombre, p.id, p.fecha
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

-- Equivalente (sintaxis antigua)
SELECT u.nombre, p.id, p.fecha
FROM usuarios u, pedidos p
WHERE u.id = p.usuario_id;`}
          />
          <InfoBox type="info">
            <strong>INNER JOIN</strong> es el más usado. Solo obtiene usuarios que tienen al menos un pedido.
          </InfoBox>
        </>
      )
    },
    {
      title: 'LEFT JOIN (LEFT OUTER JOIN)',
      content: (
        <>
          <p><strong>LEFT JOIN</strong> retorna todos los <strong>registros</strong> de la <strong>tabla</strong> izquierda, más coincidencias de la derecha:</p>
          <CodeBlock
            language="sql"
            code={`-- Todos los usuarios, incluso sin pedidos
SELECT u.nombre, COUNT(p.id) AS num_pedidos
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;

-- Con filtro
SELECT u.nombre, p.id
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
WHERE p.id IS NULL;  -- Usuarios sin pedidos`}
          />
        </>
      )
    },
    {
      title: 'RIGHT JOIN y FULL OUTER JOIN',
      content: (
        <>
          <p><strong>RIGHT JOIN</strong> es lo opuesto de <strong>LEFT JOIN</strong>. <strong>FULL OUTER JOIN</strong> retorna todos de ambas <strong>tablas</strong>:</p>
          <CodeBlock
            language="sql"
            code={`-- RIGHT JOIN: todos de pedidos, incluso sin usuario
SELECT u.nombre, p.id
FROM usuarios u
RIGHT JOIN pedidos p ON u.id = p.usuario_id;

-- FULL OUTER JOIN: todos de ambas tablas
SELECT u.nombre, p.id
FROM usuarios u
FULL OUTER JOIN pedidos p ON u.id = p.usuario_id;`}
          />
          <InfoBox type="warning">
            <strong>RIGHT JOIN</strong> y <strong>FULL OUTER JOIN</strong> no están disponibles en MySQL. Usa <strong>LEFT JOIN</strong> o <strong>UNION</strong> en su lugar.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Múltiples JOINs',
      content: (
        <>
          <p>Puedes combinar más de dos <strong>tablas</strong>:</p>
          <CodeBlock
            language="sql"
            code={`-- Usuarios, pedidos y productos
SELECT
  u.nombre AS usuario,
  p.id AS pedido,
  pr.nombre AS producto,
  pr.precio
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
INNER JOIN productos pr ON p.producto_id = pr.id
ORDER BY u.nombre, p.id;

-- Con LEFT JOINs para incluir registros sin coincidencias
SELECT u.nombre, p.id, pr.nombre
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
LEFT JOIN productos pr ON p.producto_id = pr.id;`}
          />
        </>
      )
    },
    {
      title: 'Aliases y Condiciones Complejas',
      content: (
        <>
          <p>Los <strong>aliases</strong> hacen consultas más legibles. Puedes usar condiciones complejas:</p>
          <CodeBlock
            language="sql"
            code={`-- Con aliases
SELECT
  u.nombre AS usuario,
  p.id AS pedido_id,
  p.total AS total_pedido,
  pr.nombre AS producto
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
INNER JOIN productos pr ON p.producto_id = pr.id
WHERE p.total > 100 AND p.fecha > '2024-01-01'
ORDER BY p.total DESC;

-- Autocombinación (tabla consigo misma)
SELECT
  e.nombre AS empleado,
  m.nombre AS manager
FROM empleados e
LEFT JOIN empleados m ON e.manager_id = m.id;`}
          />
        </>
      )
    }
  ];

  const summary = `Los JOINs combinan datos de múltiples tablas:

• INNER JOIN: solo coincidencias en ambas tablas
• LEFT JOIN: todos de la izquierda + coincidencias
• RIGHT JOIN: todos de la derecha + coincidencias
• FULL OUTER JOIN: todos de ambas tablas
• CROSS JOIN: producto cartesiano
• Usa ON para especificar la relación
• Los aliases mejoran legibilidad
• Puedes hacer múltiples JOINs
• Combina con WHERE, ORDER BY, GROUP BY
• La clave externa (Foreign Key) establece relaciones`;

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