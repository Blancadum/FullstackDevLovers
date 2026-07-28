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

export function LessonMongoDBRead() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'find() devuelve un cursor con todos los documentos que cumplen el filtro',
    'findOne() devuelve un único documento (el primero que coincide) o null si no hay ninguno',
    'find({}) sin filtro devuelve todos los documentos de la colección',
    'La proyección (segundo argumento) elige qué campos devolver, igual que un SELECT columna1, columna2',
    'Los métodos de cursor sort(), limit() y skip() se encadenan para paginar y ordenar resultados',
    'countDocuments() cuenta cuántos documentos cumplen un filtro sin traerlos todos a memoria'
  ];

  const exercises = [
    {
      title: 'Consulta básica con filtro',
      description: 'Recupera todos los usuarios activos (activo: true) de la colección "usuarios".',
      solution: `db.usuarios.find({ activo: true });`
    },
    {
      title: 'Proyección y un único documento',
      description:
        'Busca el primer usuario llamado "Ana" y devuelve solo su nombre y su email (sin el _id).',
      solution: `db.usuarios.findOne(
  { nombre: "Ana" },
  { nombre: 1, email: 1, _id: 0 }
);`
    },
    {
      title: 'Ordenar y paginar',
      description:
        'Obtén los 5 productos más caros de la colección "productos", ordenados de mayor a menor precio.',
      solution: `db.productos.find()
  .sort({ precio: -1 })
  .limit(5);`
    }
  ];

  const summary = `La operación Read en MongoDB se realiza principalmente con find() y findOne():

• find(filtro) devuelve un cursor con todos los documentos que cumplen el filtro
• findOne(filtro) devuelve un único documento, o null si ninguno coincide
• find({}) sin argumentos devuelve toda la colección
• La proyección (segundo argumento) controla qué campos vienen en la respuesta
• sort(), limit() y skip() se encadenan sobre el cursor para ordenar y paginar resultados
• countDocuments(filtro) cuenta documentos sin traerlos a memoria
• Los filtros de esta lección son básicos: la siguiente lección profundiza en los operadores de consulta`;

  return (
    <>
      <LessonLayout
        title="Consultar Documentos (Read)"
        description="Cómo consultar documentos en MongoDB con find y findOne"
        breadcrumbs={breadcrumbs}
        seoTitle="Consultar Documentos en MongoDB - find y findOne"
        seoDescription="Aprende a leer y consultar documentos en MongoDB usando find y findOne, la operación Read del CRUD."
        seoKeywords="mongodb find, mongodb findone, consultar documentos mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/operaciones/read"
      >
        <p>
          La operación Read permite recuperar documentos almacenados en una colección de MongoDB.
        </p>

        <LessonSection title="find(): recuperar varios documentos">
          <p>
            <code>find()</code> es el equivalente aproximado a un <code>SELECT * FROM ...</code>. Devuelve
            un <strong>cursor</strong>, una especie de puntero perezoso sobre los resultados que puedes
            recorrer o convertir en array.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Todos los documentos de la colección
db.usuarios.find();

// Documentos que cumplen un filtro
db.usuarios.find({ activo: true });

// En el driver de Node.js normalmente se convierte a array
const usuarios = await db.collection('usuarios').find({ activo: true }).toArray();`}
          />
        </LessonSection>

        <LessonSection title="findOne(): recuperar un único documento">
          <p>
            <code>findOne()</code> devuelve el primer documento que cumple el filtro, o <code>null</code> si
            ninguno coincide. Es el equivalente aproximado a añadir <code>LIMIT 1</code> a una consulta SQL.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.findOne({ email: "ana@example.com" });
// Devuelve un único objeto, o null si no existe`}
          />
        </LessonSection>

        <LessonSection title="Proyección: elegir qué campos devolver">
          <p>
            El segundo argumento de <code>find()</code> y <code>findOne()</code> es la{' '}
            <strong>proyección</strong>: indica qué campos incluir (<code>1</code>) o excluir (
            <code>0</code>), igual que elegir columnas en un <code>SELECT</code>.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Solo nombre y email, sin _id
db.usuarios.find({}, { nombre: 1, email: 1, _id: 0 });

// Todos los campos excepto la contraseña
db.usuarios.find({}, { password: 0 });`}
          />
          <InfoBox type="info">
            No se pueden mezclar proyecciones de inclusión y exclusión en el mismo objeto, salvo para{' '}
            <code>_id</code>, que es la única excepción.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Ordenar, limitar y paginar resultados">
          <p>
            Los métodos de cursor se encadenan sobre <code>find()</code> para controlar el orden y el
            tamaño de los resultados:
          </p>
          <Table
            headers={['Método', 'Equivalente en SQL', 'Ejemplo']}
            rows={[
              ['sort({ campo: 1 })', 'ORDER BY campo ASC', 'sort({ precio: 1 })'],
              ['sort({ campo: -1 })', 'ORDER BY campo DESC', 'sort({ precio: -1 })'],
              ['limit(n)', 'LIMIT n', 'limit(10)'],
              ['skip(n)', 'OFFSET n', 'skip(20)']
            ]}
          />
          <CodeBlock
            language="javascript"
            code={`// Página 3 de resultados, 10 por página, ordenados por fecha descendente
db.pedidos.find()
  .sort({ fecha: -1 })
  .skip(20)
  .limit(10);`}
          />
        </LessonSection>

        <LessonSection title="Contar documentos">
          <p>
            <code>countDocuments()</code> cuenta cuántos documentos cumplen un filtro, sin necesidad de
            traerlos todos a memoria:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.countDocuments({ activo: true });
// 42`}
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
