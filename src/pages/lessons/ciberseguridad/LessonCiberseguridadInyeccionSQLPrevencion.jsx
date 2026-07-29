import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCiberseguridadInyeccionSQLPrevencion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Inyección SQL: cómo prevenirla';

  const keyPoints = [
    'La inyección SQL ocurre cuando un input del usuario se incorpora a una consulta SQL de forma que el motor de base de datos lo interpreta como código y no como un simple dato',
    'La causa casi siempre es la misma: construir queries concatenando strings en lugar de usar consultas parametrizadas',
    'Las consultas parametrizadas (prepared statements) separan la estructura de la query de los datos: el driver se encarga de enviarlos de forma segura, nunca como parte del texto SQL',
    'En Node.js con el driver pg, esto se hace con placeholders como $1, $2... y un array de valores como segundo argumento de pool.query()',
    'Un ORM como Sequelize parametriza automáticamente las consultas que generas a través de sus métodos (findOne, create...), pero si usas sequelize.query() con SQL concatenado a mano, la protección desaparece',
    'Ningún ORM ni framework te protege al 100% si tú mismo reintroduces concatenación de strings en algún punto del código'
  ];

  const exercises = [
    {
      title: 'Convierte esta ruta vulnerable en segura',
      description:
        'La siguiente ruta busca productos por categoría concatenando el valor recibido en la query. Reescríbela usando una consulta parametrizada con el driver pg.',
      solution: `// Versión vulnerable de partida:
router.get('/productos', async (req, res) => {
  const { categoria } = req.query;
  const query = \`SELECT * FROM productos WHERE categoria = '\${categoria}'\`;
  const resultado = await pool.query(query);
  res.json(resultado.rows);
});

// Versión segura:
router.get('/productos', async (req, res) => {
  const { categoria } = req.query;
  const resultado = await pool.query(
    'SELECT * FROM productos WHERE categoria = $1',
    [categoria]
  );
  res.json(resultado.rows);
});`
    },
    {
      title: 'Detecta el fallo en una consulta con Sequelize',
      description:
        'Este fragmento usa Sequelize, pero sigue siendo vulnerable a inyección SQL. Localiza el problema y corrígelo usando "replacements".',
      solution: `// Vulnerable: aunque el proyecto usa Sequelize, esta línea concreta
// concatena el input directamente en el SQL crudo.
const resultado = await sequelize.query(
  \`SELECT * FROM pedidos WHERE estado = '\${req.query.estado}'\`
);

// Corregido: se usa "replacements" para parametrizar la consulta cruda.
const { QueryTypes } = require('sequelize');

const resultado = await sequelize.query(
  'SELECT * FROM pedidos WHERE estado = :estado',
  {
    replacements: { estado: req.query.estado },
    type: QueryTypes.SELECT
  }
);

// El problema no era "usar Sequelize", sino seguir concatenando
// strings dentro de una consulta cruda con sequelize.query().`
    }
  ];

  const summary = `La inyección SQL es una de las vulnerabilidades más antiguas y, aun así, más frecuentes en aplicaciones web:

• Se produce cuando un input del usuario se concatena en una query SQL y el motor de base de datos acaba interpretando parte de ese input como código
• La prevención principal son las consultas parametrizadas (prepared statements): la estructura de la query y los datos viajan separados
• Con el driver pg en Node.js, esto se traduce en usar placeholders ($1, $2...) y pasar los valores como array, nunca con plantillas de texto
• Los ORMs como Sequelize parametrizan automáticamente las consultas generadas a través de sus métodos, pero no protegen el SQL crudo escrito a mano con concatenación de strings
• La regla que nunca falla: los datos del usuario nunca deben formar parte del texto de la query, siempre deben viajar como parámetros`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es la inyección SQL, cómo se explota y las técnicas para prevenirla en tus aplicaciones"
        breadcrumbs={breadcrumbs}
        seoTitle="Inyección SQL: cómo prevenirla | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Aprende qué es la inyección SQL, cómo se produce este ataque y las técnicas más efectivas para prevenirla: consultas parametrizadas, ORMs y validación de inputs."
        seoKeywords="inyeccion sql, sql injection, prevenir inyeccion sql, consultas parametrizadas"
        url="https://fullstackdevlovers.com/ciberseguridad/owasp/inyeccion-sql-prevencion"
      >
        <p>
          En la lección anterior viste la categoría <strong>A03: Inyección</strong> del OWASP Top 10 de
          pasada. Toca profundizar en su variante más conocida: la <strong>inyección SQL</strong>. Es un
          fallo con más de veinte años de antigüedad y, aun así, sigue apareciendo en aplicaciones nuevas,
          porque su causa suele reducirse a un único mal hábito: construir queries pegando strings.
        </p>

        <LessonSection title="¿Qué es una inyección SQL?">
          <p>
            Una <strong>inyección SQL</strong> ocurre cuando una aplicación incorpora un dato que viene del
            usuario (un parámetro de la URL, un campo de un formulario, una cabecera...) directamente en el
            texto de una consulta SQL, sin separar claramente "esto es código" de "esto es un dato". Si el
            usuario incluye en ese dato fragmentos de SQL válido, el motor de base de datos los ejecuta como
            si formaran parte de la consulta original.
          </p>
          <p>
            El resultado puede ir desde leer datos que no deberían ser visibles, hasta modificar o borrar
            información, o incluso, en los casos más graves, ejecutar comandos sobre el propio servidor de
            base de datos {/* TODO-verificar: alcance exacto depende de la configuración y permisos del motor concreto */}.
          </p>
        </LessonSection>

        <LessonSection title="Código vulnerable: concatenar strings en la query">
          <p>
            Imagina una ruta Express que busca un usuario por su email, usando el driver <code>pg</code>{' '}
            para PostgreSQL que ya conoces de lecciones anteriores:
          </p>
          <CodeBlock
            language="javascript"
            title="routes/usuarios.js (VULNERABLE)"
            code={`const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/usuarios', async (req, res) => {
  const { email } = req.query;

  // VULNERABLE: el valor de "email" se concatena directamente en el SQL
  const query = \`SELECT id, nombre, email FROM usuarios WHERE email = '\${email}'\`;

  try {
    const resultado = await pool.query(query);
    res.json(resultado.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar usuarios' });
  }
});

module.exports = router;`}
          />
          <p>
            Con un email normal, por ejemplo <code>ana@example.com</code>, la query resultante es la
            esperada. El problema aparece si alguien envía, como valor de <code>email</code>, algo como:
          </p>
          <CodeBlock language="sql" code={`' OR '1'='1`} />
          <p>
            La query construida queda así, con la condición <code>WHERE</code> siempre verdadera:
          </p>
          <CodeBlock
            language="sql"
            code={`SELECT id, nombre, email FROM usuarios WHERE email = '' OR '1'='1'`}
          />
          <p>
            El resultado es que la consulta devuelve <strong>todos</strong> los usuarios de la tabla, no
            solo el que coincide con ese email. Con un input algo más agresivo (por ejemplo, encadenando un{' '}
            <code>; DROP TABLE usuarios; --</code>) el daño puede ser mucho mayor{' '}
            {/* TODO-verificar: si múltiples sentencias están habilitadas en la configuración concreta del driver/motor */}.
          </p>
          <InfoBox type="warning" title="El problema no es 'olvidar validar', es la construcción de la query">
            Aunque valides que <code>email</code> "parece" un email con una expresión regular, si sigues
            concatenando el valor en el SQL, un input bien construido puede seguir colándose. La validación
            de formato es útil, pero no sustituye a parametrizar la consulta.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Código seguro: consultas parametrizadas">
          <p>
            La solución no es "escapar comillas a mano": es dejar que el driver separe, desde el principio,
            la <strong>estructura</strong> de la consulta de los <strong>datos</strong>. Con <code>pg</code>{' '}
            esto se hace con placeholders (<code>$1</code>, <code>$2</code>...) y pasando los valores como un
            array en el segundo argumento de <code>pool.query()</code>:
          </p>
          <CodeBlock
            language="javascript"
            title="routes/usuarios.js (seguro)"
            code={`router.get('/usuarios', async (req, res) => {
  const { email } = req.query;

  try {
    const resultado = await pool.query(
      'SELECT id, nombre, email FROM usuarios WHERE email = $1',
      [email]
    );
    res.json(resultado.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar usuarios' });
  }
});`}
          />
          <p>
            Con esta forma de escribir la consulta, el valor de <code>email</code> viaja al motor de base de
            datos <strong>siempre como dato</strong>, nunca como parte del texto SQL. Aunque el usuario envíe{' '}
            <code>' OR '1'='1</code>, el motor lo tratará como el literal de texto que es, y buscará (sin
            éxito) un usuario cuyo email sea exactamente esa cadena rara.
          </p>
          <InfoBox type="tip" title="Mismo patrón para INSERT, UPDATE y DELETE">
            Esto no se aplica solo a los <code>SELECT</code>: cualquier consulta que reciba datos del
            usuario (<code>INSERT INTO tareas (titulo) VALUES ($1)</code>,{' '}
            <code>DELETE FROM sesiones WHERE id = $1</code>...) debe parametrizarse igual, como ya viste en
            la lección de conexión a bases de datos.
          </InfoBox>
        </LessonSection>

        <LessonSection title="¿Y los ORMs? Ayudan, pero no son garantía automática">
          <p>
            Cuando usas un ORM como <strong>Sequelize</strong> a través de sus métodos habituales (
            <code>findOne</code>, <code>create</code>, <code>update</code>...), las consultas generadas ya
            van parametrizadas por debajo, sin que tengas que pensar en ello:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Seguro: Sequelize parametriza automáticamente la consulta generada
const usuario = await Usuario.findOne({ where: { email } });`}
          />
          <p>
            El problema aparece cuando, dentro de un proyecto con ORM, se necesita una consulta más compleja
            (un informe, una agregación específica) y se recurre a SQL crudo con{' '}
            <code>sequelize.query()</code>. Si en ese punto se vuelve a concatenar el input del usuario, la
            protección del ORM desaparece por completo, porque ya no se está usando su capa de
            parametrización:
          </p>
          <CodeBlock
            language="javascript"
            code={`// VULNERABLE, a pesar de usar un ORM: se concatena el input dentro de SQL crudo
const resultado = await sequelize.query(
  \`SELECT * FROM pedidos WHERE estado = '\${req.query.estado}'\`
);

// Seguro: SQL crudo, pero con la consulta parametrizada mediante "replacements"
const { QueryTypes } = require('sequelize');

const resultado = await sequelize.query(
  'SELECT * FROM pedidos WHERE estado = :estado',
  {
    replacements: { estado: req.query.estado },
    type: QueryTypes.SELECT
  }
);`}
          />
          <InfoBox type="important" title="El ORM no es una barrera mágica">
            Un ORM reduce muchísimo la superficie de riesgo porque, en el uso normal, ya parametriza por ti.
            Pero en cuanto escribes SQL crudo dentro de él (algo habitual para consultas complejas), vuelves
            a ser responsable de parametrizar tú mismo, exactamente igual que con un driver puro.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/* AVISO: no se encontró un criterio específico en docs/criterios/ciberseguridad.md (ni la carpeta docs/criterios/) en el
            repositorio en el momento de redactar esta lección. Se han aplicado las reglas base del redactor de contenidos (tono
            cercano y riguroso, progresión simple->compleja, estructura introducción/conceptos/ejemplos/resumen y marcado de
            afirmaciones no garantizadas con TODO-verificar). */}
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
