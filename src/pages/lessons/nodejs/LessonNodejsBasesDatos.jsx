import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsBasesDatos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Conexión a bases de datos"
        description="Cómo conectar una aplicación Node.js a bases de datos SQL y NoSQL."
        breadcrumbs={breadcrumbs}
        seoTitle="Conexión a Bases de Datos en Node.js | Fullstack Dev Lovers"
        seoDescription="Aprende a conectar Node.js con bases de datos SQL y NoSQL: drivers, pools de conexión y buenas prácticas."
        seoKeywords="node.js, bases de datos, sql, nosql, conexión, driver"
        url="https://fullstackdevlovers.com/backend/nodejs/bases-datos"
      >
        <p>
          El array en memoria de la lección anterior tiene un problema evidente: cada vez
          que reinicias el servidor, se pierden todos los datos. Hoy vas a conectar tu API
          Express a una base de datos real, entender qué es un <strong>driver</strong>, por
          qué se usa un <strong>pool de conexiones</strong> y cómo mantener las credenciales
          fuera del código fuente.
        </p>

        <LessonSection title="De array en memoria a base de datos persistente" level={1}>
          <p>
            Node.js no incluye soporte nativo para bases de datos SQL o NoSQL. Para
            conectar con una necesitas un <strong>driver</strong>: un paquete de npm que
            sabe hablar el protocolo concreto de esa base de datos. Algunos de los más
            usados en el ecosistema Node.js son:
          </p>
          <ul>
            <li><code>pg</code>: driver oficial para PostgreSQL.</li>
            <li><code>mysql2</code>: driver para MySQL/MariaDB.</li>
            <li><code>mongodb</code>: driver oficial para MongoDB.</li>
          </ul>
          <InfoBox type="info">
            Un driver te da acceso a "bajo nivel": escribes las consultas SQL tú mismo y el
            driver se encarga de la comunicación con la base de datos. En la próxima lección
            verás Sequelize, un ORM que se construye por encima de un driver como{' '}
            <code>pg</code> para evitar escribir SQL a mano en cada operación.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Instalar el driver y conectar" level={1}>
          <p>Para PostgreSQL, instalas el paquete <code>pg</code>:</p>
          <CodeBlock language="bash" code="npm install pg" />
          <p>Y creas una conexión indicando host, puerto, usuario, contraseña y base de datos:</p>
          <CodeBlock
            language="javascript"
            title="db.js"
            code={`const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'secreto',
  database: 'tareas_db'
});

module.exports = pool;`}
          />
        </LessonSection>

        <LessonSection title="Pool de conexiones: por qué no abrir una conexión por petición" level={1}>
          <p>
            Abrir una conexión nueva a la base de datos en cada petición es lento y
            consume muchos recursos. Un <strong>pool de conexiones</strong> mantiene un
            conjunto de conexiones ya abiertas y las reparte entre las peticiones que van
            llegando: cuando una petición termina de usarla, la conexión vuelve al pool en
            lugar de cerrarse.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Con el pool creado una única vez al arrancar la app,
// cada consulta toma una conexión prestada y la devuelve al terminar
const resultado = await pool.query('SELECT * FROM tareas');
console.log(resultado.rows);`}
          />
          <InfoBox type="tip">
            El pool se crea <strong>una sola vez</strong> cuando arranca la aplicación, no
            en cada ruta. Por eso en el ejemplo se exporta desde <code>db.js</code>: el
            resto de módulos lo importan y reutilizan la misma instancia.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Usar la base de datos desde una ruta" level={1}>
          <CodeBlock
            language="javascript"
            title="routes/tareas.js"
            code={`const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM tareas');
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

router.post('/', async (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'El campo "titulo" es obligatorio' });
  }

  try {
    const resultado = await pool.query(
      'INSERT INTO tareas (titulo, completada) VALUES ($1, false) RETURNING *',
      [titulo]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

module.exports = router;`}
          />
          <InfoBox type="warning" title="Consultas parametrizadas">
            Fíjate en <code>$1</code> y el array de valores en el <code>INSERT</code>: nunca
            concatenes valores del usuario directamente en el SQL con plantillas de texto.
            Hacerlo así abre la puerta a <strong>inyección SQL</strong>. Los placeholders
            (<code>$1</code>, <code>$2</code>...) hacen que el driver escape los valores por ti.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Variables de entorno para las credenciales" level={1}>
          <p>
            El host, usuario y contraseña de la base de datos nunca deben ir escritos
            directamente en el código, y mucho menos subirse a un repositorio. Se cargan
            desde <strong>variables de entorno</strong> con el paquete <code>dotenv</code>.
          </p>
          <CodeBlock language="bash" code="npm install dotenv" />
          <CodeBlock
            language="text"
            title=".env"
            code={`DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=secreto
DB_NAME=tareas_db`}
          />
          <CodeBlock
            language="javascript"
            title="db.js"
            code={`require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = pool;`}
          />
          <InfoBox type="important">
            El fichero <code>.env</code> debe añadirse siempre a <code>.gitignore</code>.
            Cada desarrollador (y cada entorno: local, staging, producción) tiene su propio{' '}
            <code>.env</code> con sus propias credenciales.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Node.js necesita un driver de npm (<code>pg</code>, <code>mysql2</code>, <code>mongodb</code>...) para hablar con cada motor de base de datos.</li>
            <li>Un pool de conexiones evita abrir y cerrar una conexión nueva en cada petición.</li>
            <li>El pool se crea una vez al arrancar la aplicación y se reutiliza en todas las rutas.</li>
            <li>Las consultas parametrizadas (<code>$1</code>, <code>$2</code>...) previenen inyección SQL.</li>
            <li>Las credenciales se cargan con <code>dotenv</code> desde un fichero <code>.env</code> que nunca se sube al repositorio.</li>
            <li>Próximo paso: sustituir el SQL manual por un ORM como Sequelize.</li>
          </ul>
        </LessonSection>
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
