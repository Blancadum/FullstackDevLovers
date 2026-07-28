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

export function LessonMongoDBIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'NoSQL significa "Not Only SQL": modelos de datos alternativos al relacional, no una negación de SQL',
    'MongoDB es una base de datos NoSQL orientada a documentos: cada registro es un documento tipo JSON',
    'MongoDB almacena internamente los documentos en BSON, una versión binaria de JSON con más tipos de datos',
    'Una colección agrupa documentos, igual que una tabla agrupa filas, pero sin exigir un esquema fijo',
    'MongoDB escala horizontalmente mediante sharding, repartiendo los datos entre varios servidores',
    'No sustituye a SQL: es una herramienta más que conviene elegir según el problema, no por moda'
  ];

  const exercises = [
    {
      title: 'Explorar bases de datos y colecciones',
      description:
        'Desde el shell de MongoDB (mongosh), lista las bases de datos disponibles, cambia a una llamada "tienda" y lista sus colecciones.',
      solution: `show dbs

use tienda

show collections`
    },
    {
      title: 'Tu primer documento',
      description:
        'Inserta un documento en una colección "productos" con nombre, precio y una lista de etiquetas, y recupéralo con find().',
      solution: `db.productos.insertOne({
  nombre: "Teclado mecánico",
  precio: 79.99,
  etiquetas: ["periféricos", "oferta"]
});

db.productos.find();`
    }
  ];

  const summary = `MongoDB es una base de datos NoSQL orientada a documentos, pensada para modelos de datos flexibles:

• NoSQL agrupa varias familias de bases de datos (documentales, clave-valor, columnares, de grafos) pensadas para casos que el modelo relacional no resuelve bien
• MongoDB guarda la información en documentos tipo JSON, almacenados internamente en formato binario BSON
• Los documentos se agrupan en colecciones, y las colecciones en bases de datos
• No exige un esquema fijo: dos documentos de la misma colección pueden tener campos distintos
• Escala horizontalmente repartiendo datos entre servidores (sharding), en lugar de depender solo de máquinas más potentes
• Es una herramienta más del ecosistema, no un sustituto universal de SQL: la siguiente lección compara ambos modelos en detalle`;

  return (
    <>
      <LessonLayout
        title="Introducción a MongoDB y NoSQL"
        description="Qué es MongoDB, el modelo de datos NoSQL orientado a documentos y por qué se usa"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a MongoDB y NoSQL - Guía para Principiantes"
        seoDescription="Descubre qué es MongoDB, el modelo NoSQL orientado a documentos y por qué es una alternativa flexible a las bases de datos relacionales."
        seoKeywords="mongodb, nosql, introduccion mongodb, bases de datos documentales"
        url="https://fullstackdevlovers.com/datos/mongodb/introduccion"
      >
        <p>
          MongoDB es una base de datos NoSQL orientada a documentos. En esta lección conocerás sus
          fundamentos y en qué se diferencia de los sistemas relacionales tradicionales.
        </p>

        <LessonSection title="¿Qué significa NoSQL?">
          <p>
            Vienes de trabajar con bases de datos relacionales, así que ya conoces tablas, filas y
            columnas. <strong>NoSQL</strong> ("Not Only SQL") es un término paraguas que agrupa motores de
            base de datos que <strong>no</strong> siguen el modelo relacional clásico. No es una tecnología
            única, sino varias familias distintas, cada una pensada para un tipo de problema:
          </p>
          <Table
            headers={['Familia NoSQL', 'Unidad de dato', 'Ejemplo de motor']}
            rows={[
              ['Documental', 'Documento tipo JSON', 'MongoDB'],
              ['Clave-valor', 'Par clave/valor', 'Redis'],
              ['Columnar', 'Columnas por familia', 'Cassandra'],
              ['Grafos', 'Nodos y relaciones', 'Neo4j']
            ]}
          />
          <p>MongoDB pertenece a la familia documental, la más parecida en uso diario al modelo relacional.</p>
        </LessonSection>

        <LessonSection title="¿Qué es MongoDB?">
          <p>
            <strong>MongoDB</strong> es una base de datos NoSQL orientada a documentos. En lugar de guardar
            la información en filas de una tabla, la guarda en <strong>documentos</strong> con una
            estructura parecida a JSON, que pueden anidar objetos y listas:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Un documento de la colección "usuarios"
{
  _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  nombre: "Ana García",
  email: "ana@example.com",
  edad: 27,
  activo: true,
  direccion: {
    ciudad: "Valencia",
    pais: "España"
  },
  intereses: ["backend", "bases de datos"]
}`}
          />
          <p>
            Internamente, MongoDB no guarda ese documento como texto JSON, sino en{' '}
            <strong>BSON (Binary JSON)</strong>: un formato binario más compacto y rápido de procesar, que
            además añade tipos que JSON no tiene, como fechas o identificadores únicos (
            <code>ObjectId</code>).
          </p>
        </LessonSection>

        <LessonSection title="Documentos, colecciones y bases de datos">
          <p>La organización de MongoDB tiene tres niveles, de menor a mayor:</p>
          <Table
            headers={['Nivel', 'Qué es']}
            rows={[
              ['Documento', 'Un registro individual, tipo JSON (equivalente aproximado a una fila)'],
              ['Colección', 'Un conjunto de documentos (equivalente aproximado a una tabla)'],
              ['Base de datos', 'Un conjunto de colecciones']
            ]}
          />
          <InfoBox type="info" title="Sin esquema fijo por defecto">
            A diferencia de una tabla SQL, una colección no obliga a que todos sus documentos tengan los
            mismos campos. Es habitual, sin embargo, mantener una estructura coherente dentro de una misma
            colección para que el código que la consume sea predecible.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Un primer vistazo al shell">
          <p>
            El shell de MongoDB (<code>mongosh</code>) permite explorar bases de datos y colecciones, y
            ejecutar operaciones directamente:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Listar bases de datos
show dbs

// Cambiar (o crear) una base de datos
use tienda

// Listar colecciones de la base de datos actual
show collections

// Insertar un documento (la colección se crea si no existe)
db.productos.insertOne({ nombre: "Ratón inalámbrico", precio: 19.99 });

// Consultar los documentos de la colección
db.productos.find();`}
          />
        </LessonSection>

        <LessonSection title="¿Cuándo tiene sentido usar MongoDB?">
          <p>MongoDB encaja bien en escenarios como:</p>
          <ul>
            <li>Datos con estructura variable o que evoluciona rápido (catálogos, contenido de usuarios).</li>
            <li>Documentos que agrupan de forma natural toda la información relacionada (un pedido con sus líneas).</li>
            <li>Aplicaciones que necesitan escalar horizontalmente a gran volumen de escritura o lectura.</li>
            <li>Prototipado rápido, donde el esquema todavía no está cerrado.</li>
          </ul>
          <p>
            En cambio, si tu dominio depende de relaciones muy normalizadas, transacciones complejas entre
            muchas tablas o informes con muchos <code>JOIN</code>, un motor relacional suele seguir siendo
            la opción más natural. La próxima lección compara ambos modelos con más detalle.
          </p>
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
