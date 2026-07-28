import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsSequelize() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Sequelize y ORMs"
        description="Uso de Sequelize y otros ORMs para trabajar con bases de datos en Node.js."
        breadcrumbs={breadcrumbs}
        seoTitle="Sequelize y ORMs en Node.js | Fullstack Dev Lovers"
        seoDescription="Aprende a usar Sequelize y otros ORMs en Node.js para modelar datos y evitar SQL manual repetitivo."
        seoKeywords="node.js, sequelize, orm, modelos, base de datos"
        url="https://fullstackdevlovers.com/backend/nodejs/sequelize"
      >
        <p>
          En la lección anterior escribiste SQL a mano con <code>pool.query()</code>. Funciona,
          pero cada consulta nueva significa escribir más SQL, mapear filas a objetos y
          repetir validaciones. Un <strong>ORM</strong> (Object-Relational Mapper) automatiza
          buena parte de eso. Hoy vas a instalar <strong>Sequelize</strong>, el ORM más usado
          en el ecosistema Node.js, definir tu primer modelo y hacer un CRUD sin escribir una
          sola sentencia SQL.
        </p>

        <LessonSection title="¿Qué es un ORM y qué problema resuelve?" level={1}>
          <p>
            Un ORM traduce entre dos mundos que no encajan de forma natural: las{' '}
            <strong>tablas</strong> de una base de datos relacional y los{' '}
            <strong>objetos</strong> de JavaScript. En lugar de escribir{' '}
            <code>SELECT * FROM tareas WHERE id = 3</code>, escribes{' '}
            <code>Tarea.findByPk(3)</code>, y el ORM genera el SQL por ti y te devuelve
            directamente un objeto JavaScript.
          </p>
          <ul>
            <li>Evita repetir SQL casi idéntico en cada operación CRUD.</li>
            <li>Reduce el riesgo de inyección SQL (el ORM parametriza las consultas automáticamente).</li>
            <li>Permite cambiar de motor de base de datos (PostgreSQL, MySQL, SQLite...) con cambios mínimos.</li>
            <li>Facilita definir validaciones y relaciones entre tablas de forma declarativa.</li>
          </ul>
          <InfoBox type="info">
            Un ORM no sustituye entender SQL: para consultas complejas (informes, agregaciones
            pesadas) sigue siendo útil, y a veces necesario, escribir SQL directamente. Pero
            para el CRUD del día a día, un ORM ahorra mucho código repetitivo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Instalación y conexión" level={1}>
          <CodeBlock language="bash" code="npm install sequelize pg" />
          <p>
            Sequelize necesita el driver del motor concreto (<code>pg</code> para
            PostgreSQL) además del propio paquete <code>sequelize</code>.
          </p>
          <CodeBlock
            language="javascript"
            title="db.js"
            code={`require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false // desactiva el log de cada SQL generado
  }
);

module.exports = sequelize;`}
          />
        </LessonSection>

        <LessonSection title="Definir un modelo" level={1}>
          <p>
            Un <strong>modelo</strong> en Sequelize representa una tabla. Se define con{' '}
            <code>sequelize.define()</code>, indicando el nombre de cada columna y su tipo.
          </p>
          <CodeBlock
            language="javascript"
            title="models/Tarea.js"
            code={`const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tarea = sequelize.define('Tarea', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Tarea;`}
          />
          <p>
            Con <code>sequelize.sync()</code> Sequelize puede crear la tabla automáticamente
            si no existe, comparando el modelo con la base de datos real:
          </p>
          <CodeBlock
            language="javascript"
            code={`const sequelize = require('./db');

sequelize.sync()
  .then(() => console.log('Tablas sincronizadas'))
  .catch((error) => console.error('Error al sincronizar', error));`}
          />
          <InfoBox type="warning">
            <code>sequelize.sync()</code> es cómodo en desarrollo, pero en producción se
            gestionan los cambios de esquema con{' '}
            <strong>migraciones</strong> versionadas, no dejando que el ORM modifique tablas
            automáticamente.
          </InfoBox>
        </LessonSection>

        <LessonSection title="CRUD con Sequelize" level={1}>
          <p>
            Cada operación CRUD tiene su método correspondiente en el modelo, todos
            devuelven promesas:
          </p>
          <CodeBlock
            language="javascript"
            title="routes/tareas.js"
            code={`const express = require('express');
const Tarea = require('../models/Tarea');
const router = express.Router();

// Listar todas
router.get('/', async (req, res) => {
  const tareas = await Tarea.findAll();
  res.json(tareas);
});

// Obtener una por id
router.get('/:id', async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(tarea);
});

// Crear
router.post('/', async (req, res) => {
  try {
    const nuevaTarea = await Tarea.create({ titulo: req.body.titulo });
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  await tarea.update(req.body);
  res.json(tarea);
});

// Eliminar
router.delete('/:id', async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  await tarea.destroy();
  res.status(204).send();
});

module.exports = router;`}
          />
          <p>
            Compara este código con el de la lección anterior: no hay ni una sola cadena
            SQL. <code>findAll()</code>, <code>findByPk()</code>, <code>create()</code>,{' '}
            <code>update()</code> y <code>destroy()</code> son los cinco métodos que cubren
            el CRUD básico de cualquier modelo.
          </p>
        </LessonSection>

        <LessonSection title="Asociaciones entre modelos" level={1}>
          <p>
            Sequelize también sabe modelar relaciones entre tablas. Por ejemplo, si cada
            tarea pertenece a un usuario:
          </p>
          <CodeBlock
            language="javascript"
            code={`Usuario.hasMany(Tarea);
Tarea.belongsTo(Usuario);

// Con la asociación definida, puedes pedir las tareas de un usuario:
const usuario = await Usuario.findByPk(1, { include: Tarea });
console.log(usuario.Tareas); // array de tareas de ese usuario`}
          />
          <InfoBox type="tip">
            Existen cuatro tipos de asociación: <code>hasOne</code>, <code>hasMany</code>,{' '}
            <code>belongsTo</code> y <code>belongsToMany</code>. Elegir la correcta depende
            de la cardinalidad real de la relación (uno a uno, uno a muchos o muchos a
            muchos), igual que al diseñar el modelo entidad-relación.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Un ORM mapea filas de tablas a objetos JavaScript, evitando escribir SQL repetitivo.</li>
            <li>Sequelize se conecta a la base de datos con <code>new Sequelize(...)</code> usando el driver del motor concreto.</li>
            <li>Un modelo se define con <code>sequelize.define()</code>, indicando columnas y tipos con <code>DataTypes</code>.</li>
            <li><code>findAll()</code>, <code>findByPk()</code>, <code>create()</code>, <code>update()</code> y <code>destroy()</code> cubren el CRUD básico.</li>
            <li>Las asociaciones (<code>hasMany</code>, <code>belongsTo</code>...) modelan relaciones entre tablas de forma declarativa.</li>
            <li>Próximo paso: qué pasa cuando una operación necesita modificar varias tablas a la vez sin dejar datos a medias.</li>
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
