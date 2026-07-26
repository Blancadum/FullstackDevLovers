import { LessonTemplate, CodeBlock, Table, InfoBox, LessonConceptGrid, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonSQLDML() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      title: 'DML',
      definition: 'Data Manipulation Language - Modifica datos en la base de datos',
      example: 'INSERT, UPDATE, DELETE, SELECT'
    },
    {
      title: 'INSERT',
      definition: 'Añade nuevos registros a una tabla',
      example: 'INSERT INTO usuarios VALUES (1, "Juan")'
    },
    {
      title: 'UPDATE',
      definition: 'Modifica datos existentes',
      example: 'UPDATE usuarios SET edad = 30 WHERE id = 1'
    }
  ];

  const exercises = [
    {
      title: 'Insertar registros',
      description: 'Añade 3 usuarios a la tabla usuarios',
      solution: `INSERT INTO usuarios (nombre, email, edad) VALUES
('Juan Pérez', 'juan@email.com', 28),
('María García', 'maria@email.com', 32),
('Carlos López', 'carlos@email.com', 25);`
    },
    {
      title: 'Actualizar múltiples registros',
      description: 'Aumenta la edad de todos los usuarios en 1',
      solution: `UPDATE usuarios SET edad = edad + 1;`
    },
    {
      title: 'Eliminar con condición',
      description: 'Elimina usuarios menores de 18 años',
      solution: `DELETE FROM usuarios WHERE edad < 18;`
    }
  ];

  const keyPoints = [
    'INSERT agrega nuevos datos',
    'UPDATE modifica datos existentes',
    'DELETE elimina registros',
    'SELECT obtiene y muestra datos',
    'WHERE especifica qué registros modificar',
    'VALUES proporciona los datos a insertar',
    'SET actualiza columnas específicas',
    'Las transacciones garantizan integridad',
    'COMMIT confirma cambios',
    'ROLLBACK deshace cambios'
  ];

  const sections = [
    {
      title: '¿Qué es DML?',
      content: (
        <p>
          <strong>DML (Data Manipulation Language)</strong> son los comandos que permiten <strong>insertar</strong>, <strong>actualizar</strong>, <strong>eliminar</strong> y
          recuperar datos de la <strong>base de datos</strong>. Son las operaciones más comunes en aplicaciones.
        </p>
      )
    },
    {
      title: 'Insertar Datos (INSERT)',
      content: (
        <>
          <p><strong>INSERT</strong> agrega nuevos <strong>registros</strong> a una <strong>tabla</strong>:</p>
          <CodeBlock
            language="sql"
            code={`-- Insertar un registro
INSERT INTO usuarios (nombre, email, edad)
VALUES ('Juan', 'juan@email.com', 28);

-- Insertar múltiples registros
INSERT INTO usuarios (nombre, email, edad) VALUES
('María', 'maria@email.com', 32),
('Carlos', 'carlos@email.com', 25),
('Ana', 'ana@email.com', 29);

-- Insertar sin especificar columnas (debe incluir todas)
INSERT INTO usuarios
VALUES (1, 'Pedro', 'pedro@email.com', 30, CURRENT_TIMESTAMP);`}
          />
          <InfoBox type="tip">
            Especificar las columnas es más seguro y legible que no hacerlo.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Actualizar Datos (UPDATE)',
      content: (
        <>
          <p><strong>UPDATE</strong> modifica datos existentes:</p>
          <CodeBlock
            language="sql"
            code={`-- Actualizar un registro
UPDATE usuarios SET edad = 30 WHERE id = 1;

-- Actualizar múltiples columnas
UPDATE usuarios
SET edad = 31, email = 'juan_nuevo@email.com'
WHERE nombre = 'Juan';

-- Actualizar todos los registros
UPDATE usuarios SET estado = 'activo';

-- Usar expresiones
UPDATE productos SET precio = precio * 1.1;

-- Condiciones complejas
UPDATE usuarios
SET premium = true
WHERE edad > 25 AND ciudad = 'Madrid';`}
          />
          <InfoBox type="error" title="¡CUIDADO!">
            Siempre usa <strong>WHERE</strong> para especificar qué <strong>registros</strong> actualizar. Sin <strong>WHERE</strong> se actualizan TODOS.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Eliminar Datos (DELETE)',
      content: (
        <>
          <p><strong>DELETE</strong> elimina <strong>registros</strong> de una <strong>tabla</strong>:</p>
          <CodeBlock
            language="sql"
            code={`-- Eliminar un registro
DELETE FROM usuarios WHERE id = 5;

-- Eliminar con múltiples condiciones
DELETE FROM usuarios
WHERE edad < 18 AND ciudad = 'Barcelona';

-- Eliminar todos los registros
DELETE FROM usuarios;

-- Usar IN para múltiples valores
DELETE FROM usuarios WHERE id IN (1, 3, 5);

-- Usar NOT para condición inversa
DELETE FROM usuarios WHERE NOT (ciudad = 'Madrid');`}
          />
          <InfoBox type="error" title="PELIGRO">
            <strong>DELETE</strong> sin <strong>WHERE</strong> elimina todos los <strong>registros</strong>. Siempre verifica tu <strong>WHERE</strong> antes de ejecutar.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Recuperar Datos (SELECT)',
      content: (
        <>
          <p><strong>SELECT</strong> obtiene y muestra datos:</p>
          <CodeBlock
            language="sql"
            code={`-- Seleccionar todas las columnas
SELECT * FROM usuarios;

-- Seleccionar columnas específicas
SELECT nombre, email FROM usuarios;

-- Con condición WHERE
SELECT * FROM usuarios WHERE edad > 25;

-- Ordenar resultados
SELECT * FROM usuarios ORDER BY nombre ASC;
SELECT * FROM usuarios ORDER BY edad DESC;

-- Limitar resultados
SELECT * FROM usuarios LIMIT 10;
SELECT * FROM usuarios LIMIT 10 OFFSET 20;

-- Contar registros
SELECT COUNT(*) FROM usuarios;

-- Valores únicos
SELECT DISTINCT ciudad FROM usuarios;`}
          />
        </>
      )
    },
    {
      title: 'Transacciones (Seguridad)',
      content: (
        <>
          <p>Las <strong>transacciones</strong> garantizan que múltiples operaciones se completen exitosamente juntas:</p>
          <CodeBlock
            language="sql"
            code={`-- Iniciar transacción
BEGIN TRANSACTION;

-- Operaciones
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;

-- Confirmar cambios (COMMIT)
COMMIT;

-- O deshacer (ROLLBACK)
ROLLBACK;`}
          />
          <InfoBox type="info">
            <strong>COMMIT</strong> confirma los cambios, <strong>ROLLBACK</strong> los deshace. Es útil para operaciones donde un error
            requiere deshacer todo.
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `DML permite manipular datos en la base de datos:

• INSERT agrega nuevos registros
• UPDATE modifica datos existentes
• DELETE elimina registros
• SELECT recupera y muestra datos
• WHERE especifica qué registros afectar
• Siempre usa WHERE en UPDATE y DELETE (excepto cuando sea intencional)
• Las transacciones garantizan integridad de datos
• COMMIT confirma cambios, ROLLBACK deshace
• COUNT, SUM, AVG, MAX, MIN hacen cálculos
• ORDER BY, LIMIT controlan presentación de resultados`;

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