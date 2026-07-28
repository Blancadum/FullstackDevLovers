import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  Table,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonMongoDBDocumentos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Un documento es la unidad básica de MongoDB: una estructura clave-valor tipo JSON',
    'Internamente los documentos se guardan en BSON, que añade tipos como ObjectId, Date o Decimal128',
    'Todo documento tiene un campo _id que actúa como identificador único dentro de la colección',
    'Si no proporcionas un _id, MongoDB genera automáticamente un ObjectId',
    'Los documentos pueden anidar objetos y arrays, algo que una fila SQL no puede hacer',
    'Una colección agrupa documentos; por convención comparten estructura, aunque no es obligatorio'
  ];

  const exercises = [
    {
      title: 'Modelar un documento anidado',
      description:
        'Diseña (sin ejecutarlo aún) el documento de un "pedido" con un array de líneas de pedido, cada una con producto y cantidad, y un objeto anidado con los datos de envío.',
      solution: `{
  _id: ObjectId(),
  cliente: "Ana García",
  lineas: [
    { producto: "Teclado", cantidad: 1, precio: 79.99 },
    { producto: "Ratón", cantidad: 2, precio: 19.99 }
  ],
  envio: {
    calle: "Calle Mayor 10",
    ciudad: "Valencia",
    codigoPostal: "46001"
  },
  fecha: new Date()
}`
    },
    {
      title: 'Identificar tipos BSON',
      description:
        'Indica qué tipo BSON corresponde a cada valor del documento anterior: _id, cliente, lineas, envio, fecha.',
      solution: `_id     -> ObjectId
cliente -> String
lineas  -> Array
envio   -> Object (documento embebido)
fecha   -> Date`
    }
  ];

  const summary = `Documentos y colecciones son la base de cómo MongoDB almacena información:

• Un documento es una estructura clave-valor tipo JSON, con posibilidad de anidar objetos y arrays
• MongoDB guarda cada documento en BSON, un formato binario con más tipos que el JSON estándar
• Todo documento tiene un _id único; si no lo indicas, MongoDB genera un ObjectId automáticamente
• Una colección es un conjunto de documentos, normalmente con una estructura similar entre ellos
• Una base de datos agrupa colecciones, igual que en SQL agrupa tablas
• Modelar bien un documento (qué anidar, qué separar) es la base del diseño de datos en MongoDB`;

  return (
    <>
      <LessonLayout
        title="Documentos y Colecciones"
        description="Cómo se organizan los datos en MongoDB: documentos BSON y colecciones"
        breadcrumbs={breadcrumbs}
        seoTitle="Documentos y Colecciones en MongoDB - Estructura de Datos"
        seoDescription="Aprende cómo MongoDB organiza la información en documentos BSON agrupados en colecciones, sin esquema fijo."
        seoKeywords="mongodb documentos, colecciones mongodb, bson"
        url="https://fullstackdevlovers.com/datos/mongodb/documentos"
      >
        <p>
          Los documentos y las colecciones son las piezas fundamentales para almacenar información en
          MongoDB.
        </p>

        <LessonSection title="El documento: unidad básica de MongoDB">
          <p>
            Un <strong>documento</strong> es el equivalente aproximado a una fila en SQL, pero mucho más
            expresivo: es una estructura clave-valor que admite objetos anidados y arrays, similar a un
            objeto JSON.
          </p>
          <CodeBlock
            language="javascript"
            code={`{
  _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  nombre: "Ana García",
  edad: 27,
  activo: true,
  direccion: {
    ciudad: "Valencia",
    pais: "España"
  },
  intereses: ["backend", "bases de datos", "testing"]
}`}
          />
          <p>
            Fíjate en <code>direccion</code>: es un objeto embebido dentro del documento. Y en{' '}
            <code>intereses</code>: es un array. Ninguna de las dos cosas es directamente posible dentro de
            una sola fila SQL sin una tabla adicional.
          </p>
        </LessonSection>

        <LessonSection title="El campo _id">
          <p>
            Todo documento de MongoDB tiene un campo <code>_id</code> que lo identifica de forma única
            dentro de la colección, de forma parecida a una <code>PRIMARY KEY</code>. Si no lo especificas
            al insertar, MongoDB genera automáticamente un <code>ObjectId</code>.
          </p>
          <CodeBlock
            language="javascript"
            code={`// _id generado automáticamente
db.usuarios.insertOne({ nombre: "Carlos" });
// { _id: ObjectId("..."), nombre: "Carlos" }

// _id definido explícitamente (por ejemplo, un código propio)
db.usuarios.insertOne({ _id: "user_carlos", nombre: "Carlos" });`}
          />
          <InfoBox type="info" title="¿Qué es un ObjectId?">
            Un <code>ObjectId</code> es un identificador de 12 bytes generado a partir del timestamp de
            creación, información de la máquina y un contador. Es único con altísima probabilidad, sin
            necesidad de coordinarse con el servidor como haría un <code>AUTO_INCREMENT</code>.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Tipos de datos en BSON">
          <p>
            MongoDB almacena los documentos en <strong>BSON (Binary JSON)</strong>, que añade tipos que el
            JSON estándar no tiene:
          </p>
          <Table
            headers={['Tipo BSON', 'Descripción', 'Ejemplo']}
            rows={[
              ['String', 'Texto UTF-8', '"Ana García"'],
              ['Int32 / Int64 / Double', 'Números enteros o decimales', '27, 3.14'],
              ['Boolean', 'Verdadero o falso', 'true, false'],
              ['Date', 'Fecha y hora', 'new Date("2026-01-15")'],
              ['ObjectId', 'Identificador único de 12 bytes', 'ObjectId("64f1a2b3...")'],
              ['Array', 'Lista ordenada de valores', '["backend", "testing"]'],
              ['Object', 'Documento embebido', '{ ciudad: "Valencia" }'],
              ['Null', 'Ausencia de valor', 'null']
            ]}
          />
        </LessonSection>

        <LessonSection title="Colecciones: agrupar documentos">
          <p>
            Una <strong>colección</strong> agrupa documentos relacionados, de forma similar a como una tabla
            agrupa filas. La diferencia clave es que MongoDB no obliga a que todos los documentos de la
            colección compartan exactamente los mismos campos.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Crear una colección explícitamente (opcional, se crea sola al insertar)
db.createCollection("usuarios");

// Listar las colecciones de la base de datos actual
show collections

// Ver cuántos documentos tiene una colección
db.usuarios.countDocuments();`}
          />
          <InfoBox type="tip" title="Buena práctica">
            Aunque MongoDB no lo exija, mantener una estructura coherente dentro de una colección facilita
            enormemente el código que la consume. La flexibilidad de MongoDB es una herramienta, no una
            excusa para el caos.
          </InfoBox>
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
