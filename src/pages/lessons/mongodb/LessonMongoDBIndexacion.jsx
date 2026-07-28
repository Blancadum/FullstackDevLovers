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

export function LessonMongoDBIndexacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Sin índice, MongoDB recorre toda la colección para resolver una consulta (COLLSCAN)',
    'createIndex({ campo: 1 }) crea un índice ascendente sobre ese campo',
    'Un índice compuesto abarca varios campos y respeta el orden en que se declaran',
    'Un índice único ({ unique: true }) impide insertar dos documentos con el mismo valor en ese campo',
    'explain() muestra si una consulta usa un índice (IXSCAN) o recorre toda la colección (COLLSCAN)',
    'Los índices aceleran lecturas pero ralentizan escrituras: cada insert/update debe actualizarlos también'
  ];

  const exercises = [
    {
      title: 'Crear un índice simple',
      description: 'Crea un índice sobre el campo "email" de la colección "usuarios" para acelerar las búsquedas por email.',
      solution: `db.usuarios.createIndex({ email: 1 });`
    },
    {
      title: 'Índice único',
      description: 'Asegura que no puede haber dos usuarios con el mismo email, usando un índice único.',
      solution: `db.usuarios.createIndex({ email: 1 }, { unique: true });`
    },
    {
      title: 'Comprobar si una consulta usa índice',
      description:
        'Comprueba con explain() si una búsqueda por email está usando el índice que acabas de crear.',
      solution: `db.usuarios.find({ email: "ana@example.com" }).explain("executionStats");
// Revisa el campo "stage": IXSCAN indica que usó el índice,
// COLLSCAN indica que recorrió toda la colección`
    }
  ];

  const summary = `Los índices en MongoDB aceleran las consultas a cambio de un coste en escritura y espacio:

• Sin índice, una consulta recorre toda la colección: un COLLSCAN, tanto más lento cuantos más documentos haya
• createIndex({ campo: 1 }) crea un índice simple (1 ascendente, -1 descendente)
• Un índice compuesto ({ campo1: 1, campo2: 1 }) acelera consultas que filtran por varios campos a la vez, en ese orden
• { unique: true } convierte el índice en una restricción de unicidad, similar a UNIQUE en SQL
• explain() revela si una consulta usa un índice (IXSCAN) o no (COLLSCAN)
• getIndexes() lista los índices existentes; dropIndex() elimina uno que ya no se necesite
• Cada índice adicional ralentiza las escrituras, así que conviene crear solo los que realmente usan tus consultas`;

  return (
    <>
      <LessonLayout
        title="Indexación y Optimización"
        description="Cómo crear índices en MongoDB para mejorar el rendimiento de las consultas"
        breadcrumbs={breadcrumbs}
        seoTitle="Indexación y Optimización en MongoDB - createIndex"
        seoDescription="Aprende a crear índices simples, compuestos y de texto en MongoDB para optimizar el rendimiento de tus consultas."
        seoKeywords="mongodb indices, mongodb createindex, optimizacion mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/consultas/indexacion"
      >
        <p>
          Los índices aceleran las búsquedas en MongoDB a cambio de un coste adicional en escritura.
        </p>

        <LessonSection title="¿Por qué necesitamos índices?">
          <p>
            Sin un índice, MongoDB tiene que examinar <strong>todos</strong> los documentos de la colección
            para encontrar los que cumplen un filtro: es lo que se conoce como <code>COLLSCAN</code>{' '}
            (collection scan). Con miles o millones de documentos, esto se vuelve lento. Un índice funciona
            igual que el de un libro: una estructura ordenada que permite saltar directamente a los datos
            relevantes, en vez de leer página por página.
          </p>
        </LessonSection>

        <LessonSection title="Crear índices simples">
          <p>
            <code>createIndex()</code> crea un índice sobre uno o varios campos. El valor <code>1</code>{' '}
            indica orden ascendente, <code>-1</code> descendente:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Índice ascendente sobre "email"
db.usuarios.createIndex({ email: 1 });

// Índice descendente sobre "fecha" (útil para "más recientes primero")
db.pedidos.createIndex({ fecha: -1 });`}
          />
        </LessonSection>

        <LessonSection title="Índices compuestos">
          <p>
            Un <strong>índice compuesto</strong> abarca varios campos. El orden de declaración importa: el
            índice es más eficaz cuando la consulta filtra (al menos) por el primer campo del índice.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.pedidos.createIndex({ cliente_id: 1, fecha: -1 });

// Este índice ayuda a consultas como:
db.pedidos.find({ cliente_id: 42 }).sort({ fecha: -1 });`}
          />
        </LessonSection>

        <LessonSection title="Índices únicos">
          <p>
            Un índice con <code>{'{ unique: true }'}</code> impide insertar dos documentos con el mismo
            valor en ese campo, de forma similar a una restricción <code>UNIQUE</code> en SQL:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.createIndex({ email: 1 }, { unique: true });

// Insertar un segundo documento con el mismo email lanzará un error
// MongoServerError: E11000 duplicate key error`}
          />
        </LessonSection>

        <LessonSection title="Analizar consultas con explain()">
          <p>
            <code>explain()</code> muestra cómo MongoDB va a ejecutar (o ejecutó) una consulta, incluyendo
            si usó un índice:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.find({ email: "ana@example.com" }).explain("executionStats");`}
          />
          <Table
            headers={['stage', 'Significado']}
            rows={[
              ['COLLSCAN', 'Recorrió toda la colección: sin índice adecuado'],
              ['IXSCAN', 'Usó un índice para localizar los documentos directamente']
            ]}
          />
        </LessonSection>

        <LessonSection title="Gestionar índices existentes">
          <CodeBlock
            language="javascript"
            code={`// Listar los índices de una colección
db.usuarios.getIndexes();

// Eliminar un índice por nombre
db.usuarios.dropIndex("email_1");`}
          />
          <InfoBox type="warning" title="Los índices no son gratis">
            Cada índice ocupa espacio en disco y en memoria, y MongoDB debe actualizarlo en cada{' '}
            <code>insert</code>, <code>update</code> o <code>delete</code> que afecte a ese campo. Crea
            solo los índices que realmente respaldan tus patrones de consulta.
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
