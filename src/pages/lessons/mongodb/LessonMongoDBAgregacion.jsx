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

export function LessonMongoDBAgregacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'aggregate() ejecuta un pipeline: una secuencia de etapas que transforman los documentos paso a paso',
    '$match filtra documentos, de forma parecida a WHERE (o HAVING, según en qué punto del pipeline se use)',
    '$group agrupa documentos y calcula acumulados, igual que GROUP BY con funciones como SUM o AVG',
    '$sort, $limit y $skip ordenan y paginan resultados dentro del propio pipeline',
    '$project selecciona o calcula campos, similar a elegir columnas (y expresiones) en un SELECT',
    '$lookup combina documentos de otra colección, siendo el equivalente más cercano a un JOIN de SQL'
  ];

  const exercises = [
    {
      title: 'Total gastado por cliente',
      description:
        'Usando la colección "pedidos" (con campos cliente_id y total), calcula el total gastado por cada cliente.',
      solution: `db.pedidos.aggregate([
  {
    $group: {
      _id: "$cliente_id",
      totalGastado: { $sum: "$total" },
      numeroPedidos: { $sum: 1 }
    }
  }
]);`
    },
    {
      title: 'Filtrar, agrupar y ordenar',
      description:
        'De los pedidos con estado "completado", calcula el total por cliente y muestra solo los 5 clientes que más han gastado.',
      solution: `db.pedidos.aggregate([
  { $match: { estado: "completado" } },
  {
    $group: {
      _id: "$cliente_id",
      totalGastado: { $sum: "$total" }
    }
  },
  { $sort: { totalGastado: -1 } },
  { $limit: 5 }
]);`
    },
    {
      title: 'Combinar dos colecciones con $lookup',
      description:
        'Añade a cada pedido los datos del cliente correspondiente, cruzando "pedidos" (cliente_id) con "clientes" (_id).',
      solution: `db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente"
    }
  },
  { $unwind: "$cliente" }
]);`
    }
  ];

  const summary = `El pipeline de agregación transforma y analiza datos en varias etapas encadenadas:

• aggregate([etapa1, etapa2, ...]) procesa los documentos en el orden de las etapas
• $match filtra documentos que entran al resto del pipeline
• $group agrupa por un valor y calcula acumulados: $sum, $avg, $min, $max, $push
• $sort, $limit y $skip ordenan y paginan los resultados intermedios o finales
• $project selecciona, renombra o calcula campos
• $lookup combina datos de otra colección, el equivalente más cercano a un JOIN
• $unwind "desdobla" un array en un documento por cada elemento, útil tras un $lookup o con arrays anidados`;

  return (
    <>
      <LessonLayout
        title="Agregación con Pipeline"
        description="El pipeline de agregación de MongoDB: $match, $group, $sort, $lookup y más"
        breadcrumbs={breadcrumbs}
        seoTitle="Agregación con Pipeline en MongoDB - Aggregation Framework"
        seoDescription="Aprende a usar el pipeline de agregación de MongoDB con $match, $group, $sort y $lookup para analizar datos."
        seoKeywords="mongodb aggregate, mongodb pipeline, aggregation framework"
        url="https://fullstackdevlovers.com/datos/mongodb/consultas/agregacion"
      >
        <p>
          El pipeline de agregación es la herramienta más potente de MongoDB para transformar y analizar
          datos.
        </p>

        <LessonSection title="¿Qué es un pipeline de agregación?">
          <p>
            Un <strong>pipeline</strong> es una secuencia de etapas (<em>stages</em>) que se ejecutan en
            orden: cada etapa recibe los documentos que salen de la anterior, los transforma y pasa el
            resultado a la siguiente. Es conceptualmente parecido a encadenar <code>WHERE</code>,{' '}
            <code>GROUP BY</code>, <code>ORDER BY</code> y <code>SELECT</code> en un único flujo explícito.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.pedidos.aggregate([
  { $match: { estado: "completado" } },
  { $group: { _id: "$cliente_id", total: { $sum: "$monto" } } },
  { $sort: { total: -1 } }
]);`}
          />
        </LessonSection>

        <LessonSection title="$match: filtrar documentos">
          <p>
            <code>$match</code> filtra qué documentos continúan en el pipeline. Usa la misma sintaxis de
            filtros que <code>find()</code>, y conviene colocarlo lo antes posible para reducir el volumen
            de datos que procesan las siguientes etapas.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.pedidos.aggregate([
  { $match: { fecha: { $gte: new Date("2026-01-01") } } }
]);`}
          />
        </LessonSection>

        <LessonSection title="$group: agrupar y acumular">
          <p>
            <code>$group</code> agrupa documentos por el valor de <code>_id</code> que definas, y calcula
            valores acumulados sobre cada grupo con <strong>acumuladores</strong>:
          </p>
          <Table
            headers={['Acumulador', 'Equivalente SQL', 'Qué calcula']}
            rows={[
              ['$sum', 'SUM()', 'Suma de valores (o cuenta, con $sum: 1)'],
              ['$avg', 'AVG()', 'Media de valores'],
              ['$min', 'MIN()', 'Valor mínimo'],
              ['$max', 'MAX()', 'Valor máximo'],
              ['$push', '(sin equivalente directo)', 'Acumula los valores en un array']
            ]}
          />
          <CodeBlock
            language="javascript"
            code={`db.pedidos.aggregate([
  {
    $group: {
      _id: "$cliente_id",
      totalGastado: { $sum: "$monto" },
      numeroPedidos: { $sum: 1 },
      pedidoPromedio: { $avg: "$monto" }
    }
  }
]);`}
          />
        </LessonSection>

        <LessonSection title="$sort, $limit y $skip">
          <p>Igual que en un cursor de find(), estas etapas ordenan y paginan resultados dentro del pipeline:</p>
          <CodeBlock
            language="javascript"
            code={`db.pedidos.aggregate([
  { $group: { _id: "$cliente_id", total: { $sum: "$monto" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);`}
          />
        </LessonSection>

        <LessonSection title="$project: seleccionar y calcular campos">
          <p>
            <code>$project</code> controla qué campos pasan a la siguiente etapa, y permite calcular campos
            nuevos con expresiones:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.aggregate([
  {
    $project: {
      nombre: 1,
      email: 1,
      esMayorDeEdad: { $gte: ["$edad", 18] }
    }
  }
]);`}
          />
        </LessonSection>

        <LessonSection title="$lookup y $unwind: combinar colecciones">
          <p>
            <code>$lookup</code> es el equivalente más cercano a un <code>JOIN</code> de SQL: combina cada
            documento con los documentos relacionados de otra colección, añadiéndolos como un array.{' '}
            <code>$unwind</code> "desdobla" ese array, generando un documento por cada elemento.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente"
    }
  },
  { $unwind: "$cliente" }, // "cliente" pasa de array a objeto único
  {
    $project: {
      nombreCliente: "$cliente.nombre",
      total: "$monto"
    }
  }
]);`}
          />
          <InfoBox type="tip" title="Cuándo usar $lookup vs embedding">
            <code>$lookup</code> es útil cuando necesitas combinar datos puntualmente, pero cada llamada
            tiene un coste. Si esa relación se consulta muy a menudo, plantéate si conviene anidar (embed)
            parte de la información, como verás en la lección de embedding vs referencing.
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
