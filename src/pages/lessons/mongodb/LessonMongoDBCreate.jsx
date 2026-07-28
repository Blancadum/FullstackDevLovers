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

export function LessonMongoDBCreate() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'insertOne() añade un único documento a una colección',
    'insertMany() añade varios documentos en una sola operación',
    'La colección se crea automáticamente la primera vez que insertas un documento en ella',
    'Si no indicas _id, MongoDB genera un ObjectId automáticamente',
    'insertMany() es ordenado por defecto: si un documento falla, se detiene y no inserta los siguientes',
    'Insertar un _id duplicado lanza un error de clave duplicada, igual que una PRIMARY KEY repetida en SQL'
  ];

  const exercises = [
    {
      title: 'Insertar un único documento',
      description: 'Inserta un documento en la colección "clientes" con nombre, email y fecha de alta.',
      solution: `db.clientes.insertOne({
  nombre: "Laura Pérez",
  email: "laura@example.com",
  fechaAlta: new Date()
});`
    },
    {
      title: 'Insertar varios documentos a la vez',
      description: 'Inserta tres productos distintos en la colección "productos" con una sola llamada.',
      solution: `db.productos.insertMany([
  { nombre: "Teclado", precio: 79.99 },
  { nombre: "Ratón", precio: 19.99 },
  { nombre: "Monitor", precio: 249.99 }
]);`
    }
  ];

  const summary = `La operación Create en MongoDB se realiza con insertOne() e insertMany():

• insertOne() inserta un único documento y devuelve su _id (generado o proporcionado)
• insertMany() inserta un array de documentos en una sola operación
• No necesitas crear la colección de antemano: se crea la primera vez que insertas en ella
• Por defecto insertMany() es ordenado: si un documento falla, se detienen las inserciones restantes
• Puedes usar { ordered: false } para que continúe insertando el resto aunque alguno falle
• Insertar un _id que ya existe produce un error de clave duplicada`;

  return (
    <>
      <LessonLayout
        title="Insertar Documentos (Create)"
        description="Cómo insertar documentos en una colección de MongoDB con insertOne e insertMany"
        breadcrumbs={breadcrumbs}
        seoTitle="Insertar Documentos en MongoDB - insertOne e insertMany"
        seoDescription="Aprende a crear documentos en MongoDB usando insertOne e insertMany, la primera operación del CRUD."
        seoKeywords="mongodb insertone, mongodb insertmany, crear documentos mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/operaciones/create"
      >
        <p>
          La operación Create permite añadir nuevos documentos a una colección de MongoDB.
        </p>

        <LessonSection title="insertOne(): insertar un documento">
          <p>
            <code>insertOne()</code> añade un único documento a la colección. Es el equivalente aproximado a
            un <code>INSERT INTO ... VALUES (...)</code> de SQL para una sola fila.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.clientes.insertOne({
  nombre: "Laura Pérez",
  email: "laura@example.com",
  edad: 32
});

// Resultado aproximado:
// {
//   acknowledged: true,
//   insertedId: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1")
// }`}
          />
        </LessonSection>

        <LessonSection title="insertMany(): insertar varios documentos">
          <p>
            <code>insertMany()</code> recibe un array de documentos y los inserta en una sola operación,
            algo más eficiente que llamar a <code>insertOne()</code> repetidamente.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.productos.insertMany([
  { nombre: "Teclado", precio: 79.99 },
  { nombre: "Ratón", precio: 19.99 },
  { nombre: "Monitor", precio: 249.99 }
]);

// Resultado aproximado:
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("..."),
//     '1': ObjectId("..."),
//     '2': ObjectId("...")
//   }
// }`}
          />
          <InfoBox type="warning" title="Orden de inserción">
            Por defecto, <code>insertMany()</code> es <strong>ordenado</strong>: si el segundo documento
            falla (por ejemplo, por un <code>_id</code> duplicado), MongoDB no intentará insertar el
            tercero. Con la opción <code>{'{ ordered: false }'}</code> se insertan todos los documentos
            posibles, ignorando los que fallen.
          </InfoBox>
        </LessonSection>

        <LessonSection title="El _id al insertar">
          <p>
            Puedes dejar que MongoDB genere el <code>_id</code> automáticamente, o proporcionarlo tú mismo
            si tu dominio ya tiene un identificador natural:
          </p>
          <CodeBlock
            language="javascript"
            code={`// _id automático (ObjectId)
db.usuarios.insertOne({ nombre: "Carlos" });

// _id explícito
db.usuarios.insertOne({ _id: "carlos_2026", nombre: "Carlos" });

// Insertar un _id ya existente lanza un error de clave duplicada
db.usuarios.insertOne({ _id: "carlos_2026", nombre: "Otro Carlos" });
// MongoServerError: E11000 duplicate key error`}
          />
        </LessonSection>

        <LessonSection title="La colección se crea sola">
          <p>
            A diferencia de SQL, donde necesitas un <code>CREATE TABLE</code> previo, en MongoDB no hace
            falta crear la colección antes de insertar: se crea automáticamente en el primer{' '}
            <code>insertOne()</code> o <code>insertMany()</code> que la referencie.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Si "pedidos" no existía, se crea aquí mismo
db.pedidos.insertOne({ cliente: "Ana", total: 59.9 });`}
          />
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />
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
