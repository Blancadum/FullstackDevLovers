import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsRestApis() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="APIs REST"
        description="Diseño y construcción de APIs REST con Node.js y Express."
        breadcrumbs={breadcrumbs}
        seoTitle="Cómo Construir APIs REST con Node.js | Fullstack Dev Lovers"
        seoDescription="Aprende a diseñar y construir APIs REST con Node.js y Express: verbos HTTP, códigos de estado y buenas prácticas."
        seoKeywords="node.js, api rest, express, rest api, backend"
        url="https://fullstackdevlovers.com/backend/nodejs/rest-apis"
      >
        <p>
          Ya sabes definir rutas, usar middleware y organizarlas con <code>Router()</code>.
          Ahora toca aplicar todo eso siguiendo unas convenciones concretas: las de{' '}
          <strong>REST</strong>. Vas a construir un CRUD completo sobre un recurso, con las
          rutas, verbos y códigos de estado que se esperan de cualquier API profesional.
        </p>

        <LessonSection title="¿Qué es REST?" level={1}>
          <p>
            <strong>REST</strong> (Representational State Transfer) es un estilo de diseño
            de APIs, no un protocolo ni una librería. Define un conjunto de convenciones
            sobre cómo nombrar rutas y qué verbo HTTP usar para cada operación, de forma que
            cualquier desarrollador que conozca REST pueda entender tu API sin leer
            documentación extra.
          </p>
          <ul>
            <li><strong>Recursos:</strong> todo gira en torno a sustantivos (<code>/tareas</code>, <code>/usuarios</code>), no a verbos en la URL.</li>
            <li><strong>Verbos HTTP con significado:</strong> el verbo indica la acción, no la URL.</li>
            <li><strong>Sin estado (stateless):</strong> cada petición contiene toda la información necesaria; el servidor no guarda "sesión" entre peticiones.</li>
            <li><strong>Representaciones:</strong> el recurso se envía normalmente como JSON.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Verbos HTTP y su significado en REST" level={1}>
          <Table
            headers={['Verbo', 'Acción', 'Ejemplo']}
            rows={[
              ['GET', 'Leer un recurso o una colección', 'GET /tareas, GET /tareas/3'],
              ['POST', 'Crear un recurso nuevo', 'POST /tareas'],
              ['PUT', 'Reemplazar un recurso completo', 'PUT /tareas/3'],
              ['PATCH', 'Modificar parcialmente un recurso', 'PATCH /tareas/3'],
              ['DELETE', 'Eliminar un recurso', 'DELETE /tareas/3']
            ]}
          />
          <InfoBox type="tip">
            Regla práctica: si la acción se puede describir con un verbo HTTP y un
            sustantivo en la URL (<code>DELETE /tareas/3</code>), vas por buen camino. Si
            necesitas meter un verbo en la URL (<code>/borrarTarea?id=3</code>), probablemente
            no estás siguiendo REST.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Códigos de estado que debes conocer" level={1}>
          <Table
            headers={['Código', 'Significado', 'Cuándo usarlo']}
            rows={[
              ['200 OK', 'Éxito genérico', 'GET, PUT o PATCH que terminan bien'],
              ['201 Created', 'Recurso creado', 'Respuesta a un POST que crea algo'],
              ['204 No Content', 'Éxito sin cuerpo', 'DELETE que termina bien'],
              ['400 Bad Request', 'Petición inválida', 'Datos de entrada incorrectos'],
              ['401 Unauthorized', 'Falta autenticación', 'No se ha enviado token válido'],
              ['404 Not Found', 'Recurso inexistente', 'GET /tareas/999 si no existe'],
              ['500 Internal Server Error', 'Error del servidor', 'Excepción no controlada']
            ]}
          />
        </LessonSection>

        <LessonSection title="CRUD completo con Express" level={1}>
          <p>
            Vamos a construir una pequeña API de tareas usando, de momento, un array en
            memoria como almacén de datos. En la próxima lección sustituirás ese array por
            una base de datos real; la estructura de las rutas apenas cambiará.
          </p>
          <CodeBlock
            language="javascript"
            title="routes/tareas.js"
            code={`const express = require('express');
const router = express.Router();

let tareas = [
  { id: 1, titulo: 'Aprender Express', completada: false }
];
let siguienteId = 2;

// GET /tareas - listar todas
router.get('/', (req, res) => {
  res.json(tareas);
});

// GET /tareas/:id - obtener una
router.get('/:id', (req, res) => {
  const tarea = tareas.find((t) => t.id === Number(req.params.id));
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(tarea);
});

// POST /tareas - crear
router.post('/', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'El campo "titulo" es obligatorio' });
  }

  const nuevaTarea = { id: siguienteId++, titulo, completada: false };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// PUT /tareas/:id - reemplazar
router.put('/:id', (req, res) => {
  const indice = tareas.findIndex((t) => t.id === Number(req.params.id));
  if (indice === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const { titulo, completada } = req.body;
  tareas[indice] = { id: tareas[indice].id, titulo, completada };
  res.json(tareas[indice]);
});

// DELETE /tareas/:id - eliminar
router.delete('/:id', (req, res) => {
  const existe = tareas.some((t) => t.id === Number(req.params.id));
  if (!existe) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tareas = tareas.filter((t) => t.id !== Number(req.params.id));
  res.status(204).send();
});

module.exports = router;`}
          />
        </LessonSection>

        <LessonSection title="Validación de entrada" level={1}>
          <p>
            Fíjate en el <code>POST</code> del ejemplo anterior: antes de crear la tarea se
            comprueba que <code>titulo</code> exista. Validar la entrada a mano funciona,
            pero en APIs con muchos campos se vuelve repetitivo y propenso a errores.
          </p>
          <InfoBox type="info">
            En proyectos reales se suelen usar librerías de validación como{' '}
            <code>express-validator</code> o <code>zod</code>, que permiten declarar las
            reglas de cada campo una sola vez y reutilizarlas en varias rutas.
            No entraremos en detalle aquí, pero es lo primero que
            deberías investigar al construir una API con más de dos o tres campos por
            recurso.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>REST es una convención de diseño: recursos como sustantivos en la URL y verbos HTTP con significado.</li>
            <li>GET lee, POST crea, PUT reemplaza, PATCH modifica parcialmente y DELETE elimina.</li>
            <li>Los códigos de estado comunican el resultado: 200/201/204 para éxito, 400/401/404 para errores del cliente, 500 para errores del servidor.</li>
            <li>Un CRUD REST típico define cinco rutas sobre un mismo recurso: listar, obtener uno, crear, actualizar y borrar.</li>
            <li>Validar la entrada antes de procesarla evita guardar datos incompletos o corruptos.</li>
            <li>Próximo paso: sustituir el array en memoria por una base de datos real.</li>
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
