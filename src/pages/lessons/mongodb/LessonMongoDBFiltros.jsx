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

export function LessonMongoDBFiltros() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Los operadores de comparación ($gt, $lt, $in...) sustituyen a >, <, IN de SQL',
    'Los operadores lógicos $and, $or y $not combinan varias condiciones, igual que AND, OR y NOT',
    '$exists comprueba si un campo está presente en el documento, no si su valor es null',
    'Los operadores sobre arrays ($all, $elemMatch, $size) no tienen equivalente directo en SQL clásico',
    'Las expresiones regulares permiten búsquedas de texto flexibles con $regex',
    'Cuando un filtro no usa ningún operador especial, MongoDB asume igualdad exacta ($eq)'
  ];

  const exercises = [
    {
      title: 'Operadores de comparación',
      description: 'Busca los productos con precio mayor o igual a 20 y menor que 100.',
      solution: `db.productos.find({
  precio: { $gte: 20, $lt: 100 }
});`
    },
    {
      title: 'Operadores lógicos',
      description:
        'Busca los usuarios activos que además sean mayores de 18 años, usando $and de forma explícita.',
      solution: `db.usuarios.find({
  $and: [
    { activo: true },
    { edad: { $gt: 18 } }
  ]
});

// Nota: en este caso también funcionaría sin $and explícito,
// porque MongoDB combina con AND las condiciones de un mismo objeto:
db.usuarios.find({ activo: true, edad: { $gt: 18 } });`
    },
    {
      title: 'Filtrar por contenido de un array',
      description:
        'Busca los artículos que tengan la etiqueta "mongodb" entre sus tags.',
      solution: `db.articulos.find({ tags: "mongodb" });
// MongoDB compara automáticamente si "mongodb" está dentro del array tags`
    }
  ];

  const summary = `Los operadores de consulta permiten construir filtros tan expresivos como una cláusula WHERE de SQL:

• Comparación: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
• Lógicos: $and, $or, $not, $nor, para combinar varias condiciones
• Elemento: $exists (¿existe el campo?) y $type (¿de qué tipo es?)
• Array: $all, $elemMatch, $size para consultar dentro de listas de valores
• Expresiones regulares con $regex para búsquedas de texto flexibles
• Sin operador explícito, MongoDB asume igualdad exacta, como el = de SQL`;

  return (
    <>
      <LessonLayout
        title="Filtros y Operadores de Consulta"
        description="Operadores de comparación, lógicos y de array para consultas avanzadas en MongoDB"
        breadcrumbs={breadcrumbs}
        seoTitle="Filtros y Operadores de Consulta en MongoDB"
        seoDescription="Domina los operadores de consulta de MongoDB: $eq, $gt, $in, $and, $or y más para filtrar documentos con precisión."
        seoKeywords="mongodb operadores, mongodb filtros, query operators mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/consultas/filtros"
      >
        <p>
          Los operadores de consulta permiten filtrar documentos de MongoDB con condiciones precisas.
        </p>

        <LessonSection title="Operadores de comparación">
          <p>
            En las lecciones anteriores usaste filtros de igualdad simple, como{' '}
            <code>{'{ activo: true }'}</code>. Para comparaciones más ricas, MongoDB ofrece operadores que
            empiezan por <code>$</code>:
          </p>
          <Table
            headers={['Operador', 'Significado', 'Equivalente SQL']}
            rows={[
              ['$eq', 'Igual a', '='],
              ['$ne', 'Distinto de', '!='],
              ['$gt', 'Mayor que', '>'],
              ['$gte', 'Mayor o igual que', '>='],
              ['$lt', 'Menor que', '<'],
              ['$lte', 'Menor o igual que', '<='],
              ['$in', 'Está en una lista de valores', 'IN'],
              ['$nin', 'No está en una lista de valores', 'NOT IN']
            ]}
          />
          <CodeBlock
            language="javascript"
            code={`db.productos.find({ precio: { $gt: 50 } });
db.productos.find({ precio: { $gte: 20, $lt: 100 } }); // entre 20 y 100
db.usuarios.find({ pais: { $in: ["ES", "PT", "FR"] } });`}
          />
        </LessonSection>

        <LessonSection title="Operadores lógicos">
          <p>
            Cuando un objeto de filtro tiene varias claves, MongoDB las combina con <strong>AND</strong> de
            forma implícita. Para lógica más compleja, o para combinar condiciones sobre el mismo campo,
            usa <code>$and</code>, <code>$or</code>, <code>$not</code> y <code>$nor</code> de forma
            explícita:
          </p>
          <CodeBlock
            language="javascript"
            code={`// AND implícito: activo=true Y edad>18
db.usuarios.find({ activo: true, edad: { $gt: 18 } });

// OR explícito
db.usuarios.find({
  $or: [
    { nombre: "Ana" },
    { email: "ana@example.com" }
  ]
});

// NOT
db.usuarios.find({ edad: { $not: { $gt: 30 } } });`}
          />
        </LessonSection>

        <LessonSection title="Operadores de elemento: $exists y $type">
          <p>
            <code>$exists</code> comprueba si un campo está presente en el documento (independientemente de
            su valor), y <code>$type</code> comprueba el tipo BSON del campo:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Usuarios que tienen el campo "telefono"
db.usuarios.find({ telefono: { $exists: true } });

// Usuarios que NO tienen el campo "telefono"
db.usuarios.find({ telefono: { $exists: false } });

// Documentos donde "edad" es de tipo numérico
db.usuarios.find({ edad: { $type: "int" } });`}
          />
          <InfoBox type="info" title="$exists no es lo mismo que comprobar null">
            Un documento puede tener <code>{'{ telefono: null }'}</code> (el campo existe, pero vale null) o
            no tener el campo en absoluto. <code>$exists: true</code> detecta ambos casos como "presente";
            si quieres distinguir el valor <code>null</code>, combina <code>$exists</code> con otra
            condición.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Operadores sobre arrays">
          <p>
            MongoDB ofrece operadores específicos para consultar dentro de campos tipo array, algo que SQL
            clásico no resuelve de forma tan directa:
          </p>
          <Table
            headers={['Operador', 'Qué hace', 'Ejemplo']}
            rows={[
              ['(sin operador)', 'El array contiene ese valor', '{ tags: "mongodb" }'],
              ['$all', 'El array contiene todos los valores indicados', '{ tags: { $all: ["mongodb", "nosql"] } }'],
              ['$size', 'El array tiene exactamente ese tamaño', '{ tags: { $size: 3 } }'],
              ['$elemMatch', 'Al menos un elemento cumple varias condiciones a la vez', 'ver ejemplo abajo']
            ]}
          />
          <CodeBlock
            language="javascript"
            code={`// Pedidos con al menos una línea de más de 2 unidades y precio > 50
db.pedidos.find({
  lineas: {
    $elemMatch: { cantidad: { $gt: 2 }, precio: { $gt: 50 } }
  }
});`}
          />
        </LessonSection>

        <LessonSection title="Búsquedas de texto con expresiones regulares">
          <p>
            <code>$regex</code> permite buscar coincidencias parciales de texto, similar a un{' '}
            <code>LIKE</code> de SQL pero mucho más flexible:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Nombres que empiezan por "A" (insensible a mayúsculas)
db.usuarios.find({ nombre: { $regex: "^A", $options: "i" } });

// Emails que contienen "@example.com"
db.usuarios.find({ email: /@example\\.com$/ });`}
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
