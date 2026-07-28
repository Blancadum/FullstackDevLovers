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

export function LessonMongoDBRelaciones() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Embedding anida los datos relacionados dentro del mismo documento: una sola lectura basta',
    'Referencing guarda solo el _id del documento relacionado, en otra colección, y requiere una consulta (o $lookup) para combinarlos',
    'Embedding es ideal para relaciones 1:1 y 1:pocos donde los datos se leen siempre juntos',
    'Referencing es preferible en relaciones 1:muchos grandes, muchos:muchos, o cuando los datos cambian con frecuencia',
    'Un documento tiene un límite de 16 MB: el embedding sin control puede acercarse a ese límite',
    'No es una decisión de "todo o nada": muchos diseños combinan embedding para lo frecuente y referencing para el resto'
  ];

  const exercises = [
    {
      title: 'Elegir embedding o referencing',
      description:
        'Para cada caso, decide si usarías embedding o referencing: (1) las direcciones de envío de un cliente (2-3 como mucho), (2) los millones de comentarios de un vídeo muy popular.',
      solution: `1) Direcciones de un cliente: EMBEDDING.
   Son pocas, cambian poco, y se leen siempre junto al cliente.

2) Comentarios de un vídeo popular: REFERENCING.
   Pueden ser millones, crecen sin límite y normalmente se paginan
   (no se cargan todos a la vez), así que conviene una colección
   "comentarios" separada, referenciando el vídeo por su _id.`
    },
    {
      title: 'Modelar con embedding',
      description:
        'Modela un documento "usuario" con sus 2 direcciones habituales (casa y trabajo) usando embedding.',
      solution: `{
  _id: ObjectId(),
  nombre: "Ana García",
  direcciones: [
    { tipo: "casa", calle: "Calle Mayor 10", ciudad: "Valencia" },
    { tipo: "trabajo", calle: "Av. Empresas 5", ciudad: "Valencia" }
  ]
}`
    },
    {
      title: 'Modelar con referencing',
      description:
        'Modela la relación entre "autores" y sus "libros" (un autor puede tener cientos de libros) usando referencing.',
      solution: `// Colección "autores"
{ _id: ObjectId("autor1"), nombre: "Isabel Allende" }

// Colección "libros"
{
  _id: ObjectId(),
  titulo: "La casa de los espíritus",
  autor_id: ObjectId("autor1")
}

// Para combinarlos cuando haga falta:
db.libros.aggregate([
  { $match: { autor_id: ObjectId("autor1") } }
]);`
    }
  ];

  const summary = `Embedding y referencing son las dos estrategias de MongoDB para modelar relaciones entre datos:

• Embedding: anida los datos relacionados en el mismo documento. Una sola lectura, ideal para relaciones 1:1 y 1:pocos que se consultan siempre juntas
• Referencing: guarda el _id del documento relacionado en otra colección. Evita duplicación y documentos gigantes, a cambio de una consulta adicional (o un $lookup)
• Usa embedding cuando los datos son pequeños, cambian poco y se leen siempre juntos
• Usa referencing cuando la relación es 1:muchos grande, muchos:muchos, o los datos cambian con frecuencia de forma independiente
• El límite de 16 MB por documento es una restricción práctica que descarta el embedding sin control
• Muchos diseños reales combinan ambas estrategias según cada relación concreta del dominio`;

  return (
    <>
      <LessonLayout
        title="Relaciones: Embedding vs Referencing"
        description="Cuándo anidar documentos (embedding) y cuándo referenciarlos en MongoDB"
        breadcrumbs={breadcrumbs}
        seoTitle="Embedding vs Referencing en MongoDB - Relaciones entre Documentos"
        seoDescription="Aprende cuándo usar embedding (anidación) y cuándo usar referencing en MongoDB para modelar relaciones entre documentos."
        seoKeywords="mongodb embedding, mongodb referencing, relaciones mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/modelado/relaciones"
      >
        <p>
          MongoDB ofrece dos estrategias principales para relacionar datos: anidar documentos (embedding)
          o referenciarlos (referencing).
        </p>

        <LessonSection title="Embedding: anidar los datos relacionados">
          <p>
            <strong>Embedding</strong> consiste en incluir los datos relacionados directamente dentro del
            documento principal, como un objeto o un array anidado. Toda la información llega en{' '}
            <strong>una sola lectura</strong>.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Un pedido con sus líneas embebidas
{
  _id: ObjectId(),
  cliente: "Ana García",
  lineas: [
    { producto: "Teclado", cantidad: 1, precio: 79.99 },
    { producto: "Ratón", cantidad: 1, precio: 19.99 }
  ],
  total: 99.98
}

// Una sola consulta trae el pedido completo, líneas incluidas
db.pedidos.findOne({ _id: ObjectId("...") });`}
          />
        </LessonSection>

        <LessonSection title="Referencing: guardar una referencia (_id)">
          <p>
            <strong>Referencing</strong> guarda solo el <code>_id</code> del documento relacionado, que
            vive en otra colección independiente. Recuperar ambos datos juntos requiere una consulta
            adicional (en el driver) o un <code>$lookup</code> (en agregación).
          </p>
          <CodeBlock
            language="javascript"
            code={`// Colección "clientes"
{ _id: ObjectId("cliente1"), nombre: "Ana García", email: "ana@example.com" }

// Colección "pedidos", referenciando al cliente
{
  _id: ObjectId(),
  cliente_id: ObjectId("cliente1"),
  total: 99.98
}

// Combinarlos cuando haga falta
db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente"
    }
  }
]);`}
          />
        </LessonSection>

        <LessonSection title="Comparativa y criterios de decisión">
          <Table
            headers={['Criterio', 'Embedding', 'Referencing']}
            rows={[
              ['Cardinalidad', '1:1 y 1:pocos', '1:muchos grande, muchos:muchos'],
              ['Lecturas', 'Una sola consulta', 'Puede requerir varias consultas o $lookup'],
              ['Duplicación', 'Puede duplicar datos', 'Evita duplicación'],
              ['Tamaño', 'Riesgo si el array crece sin límite', 'Cada documento se mantiene pequeño'],
              ['Cambios frecuentes', 'Actualizar en varios sitios si se duplica', 'Se actualiza en un único lugar']
            ]}
          />
          <InfoBox type="tip" title="Regla práctica">
            Pregúntate: "¿Se consultan estos datos siempre juntos, y son pocos y estables?" Si la respuesta
            es sí, embebe. Si la relación puede crecer mucho, cambiar con frecuencia, o consultarse desde
            varios sitios de forma independiente, referencia.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Diseños mixtos: lo mejor de ambos mundos">
          <p>
            No es una decisión de todo o nada. Es habitual embeber la información que casi siempre se
            necesita junta, y referenciar el resto:
          </p>
          <CodeBlock
            language="javascript"
            code={`{
  _id: ObjectId(),
  titulo: "Modelado de datos en MongoDB",
  // Embedding: se muestra siempre junto al artículo, y son pocos datos
  autor: { id: ObjectId("autor1"), nombre: "Ana García" },
  // Referencing: los comentarios pueden ser miles y se paginan aparte
  comentarios_count: 128
}

// Los comentarios viven en su propia colección, referenciando el artículo
{ _id: ObjectId(), articulo_id: ObjectId("..."), texto: "Muy útil, gracias" }`}
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
