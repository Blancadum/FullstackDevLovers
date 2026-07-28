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

export function LessonMongoDBUpdate() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'updateOne() modifica el primer documento que cumple el filtro',
    'updateMany() modifica todos los documentos que cumplen el filtro',
    '$set actualiza (o añade) campos concretos sin tocar el resto del documento',
    '$inc, $push y $unset son otros operadores habituales de actualización',
    'replaceOne() sustituye el documento entero, no solo algunos campos',
    'La opción { upsert: true } inserta un documento nuevo si el filtro no encuentra ninguno'
  ];

  const exercises = [
    {
      title: 'Actualizar un campo',
      description: 'Marca como inactivo al usuario con email "ana@example.com".',
      solution: `db.usuarios.updateOne(
  { email: "ana@example.com" },
  { $set: { activo: false } }
);`
    },
    {
      title: 'Actualizar varios documentos e incrementar un contador',
      description:
        'Añade 1 al campo "visitas" de todos los productos de la categoría "electrónica".',
      solution: `db.productos.updateMany(
  { categoria: "electrónica" },
  { $inc: { visitas: 1 } }
);`
    },
    {
      title: 'Upsert',
      description:
        'Actualiza la configuración del usuario "carlos"; si no existe ningún documento de configuración para él, créalo.',
      solution: `db.configuraciones.updateOne(
  { usuario: "carlos" },
  { $set: { tema: "oscuro", idioma: "es" } },
  { upsert: true }
);`
    }
  ];

  const summary = `La operación Update en MongoDB se basa en updateOne(), updateMany() y operadores de actualización:

• updateOne(filtro, actualización) modifica el primer documento que coincide con el filtro
• updateMany(filtro, actualización) modifica todos los documentos que coinciden
• $set actualiza campos concretos sin sobrescribir el resto del documento
• $unset elimina un campo, $inc incrementa un número, $push añade un elemento a un array
• replaceOne() sustituye el documento completo, a diferencia de $set que solo toca lo indicado
• { upsert: true } convierte la actualización en "actualizar o crear si no existe"`;

  return (
    <>
      <LessonLayout
        title="Actualizar Documentos (Update)"
        description="Cómo actualizar documentos en MongoDB con updateOne, updateMany y operadores como $set"
        breadcrumbs={breadcrumbs}
        seoTitle="Actualizar Documentos en MongoDB - updateOne y updateMany"
        seoDescription="Aprende a modificar documentos existentes en MongoDB usando updateOne, updateMany y operadores de actualización."
        seoKeywords="mongodb updateone, mongodb updatemany, actualizar documentos mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/operaciones/update"
      >
        <p>
          La operación Update permite modificar documentos ya existentes en una colección de MongoDB.
        </p>

        <LessonSection title="updateOne(): actualizar un documento">
          <p>
            <code>updateOne()</code> recibe un filtro (qué documento buscar) y una actualización (qué
            cambiar). Es el equivalente aproximado a un <code>UPDATE ... WHERE ...</code> de SQL limitado a
            una fila.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.updateOne(
  { email: "ana@example.com" },
  { $set: { edad: 28, activo: false } }
);

// Resultado aproximado:
// { acknowledged: true, matchedCount: 1, modifiedCount: 1 }`}
          />
          <InfoBox type="warning" title="No olvides el operador">
            <code>{'{ $set: { edad: 28 } }'}</code> actualiza el campo <code>edad</code>. Si escribes{' '}
            <code>{'{ edad: 28 }'}</code> sin <code>$set</code>, MongoDB interpreta que quieres{' '}
            <strong>reemplazar todo el documento</strong> por ese objeto.
          </InfoBox>
        </LessonSection>

        <LessonSection title="updateMany(): actualizar varios documentos">
          <p>
            <code>updateMany()</code> aplica la misma actualización a todos los documentos que cumplen el
            filtro:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.productos.updateMany(
  { categoria: "electrónica" },
  { $set: { enOferta: true } }
);`}
          />
        </LessonSection>

        <LessonSection title="Operadores de actualización más comunes">
          <Table
            headers={['Operador', 'Qué hace', 'Ejemplo']}
            rows={[
              ['$set', 'Añade o actualiza campos', '{ $set: { estado: "activo" } }'],
              ['$unset', 'Elimina un campo', '{ $unset: { telefono: "" } }'],
              ['$inc', 'Incrementa (o decrementa) un número', '{ $inc: { visitas: 1 } }'],
              ['$push', 'Añade un elemento a un array', '{ $push: { tags: "nuevo" } }'],
              ['$pull', 'Elimina elementos de un array que cumplen una condición', '{ $pull: { tags: "obsoleto" } }'],
              ['$addToSet', 'Añade a un array solo si no existe ya', '{ $addToSet: { tags: "backend" } }']
            ]}
          />
          <CodeBlock
            language="javascript"
            code={`db.articulos.updateOne(
  { _id: 1 },
  {
    $set: { titulo: "MongoDB para backend" },
    $inc: { visitas: 1 },
    $push: { tags: "nosql" }
  }
);`}
          />
        </LessonSection>

        <LessonSection title="replaceOne(): sustituir el documento completo">
          <p>
            A diferencia de <code>$set</code>, que actualiza campos concretos, <code>replaceOne()</code>{' '}
            sustituye <strong>todo el documento</strong> (excepto <code>_id</code>) por el que le pases:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.replaceOne(
  { _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1") },
  { nombre: "Ana García", email: "ana@example.com", activo: true }
);
// Cualquier campo que no esté en el nuevo objeto desaparece`}
          />
        </LessonSection>

        <LessonSection title="Upsert: actualizar o crear">
          <p>
            Con la opción <code>{'{ upsert: true }'}</code>, si el filtro no encuentra ningún documento,
            MongoDB crea uno nuevo combinando el filtro y la actualización:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.contadores.updateOne(
  { nombre: "visitas_home" },
  { $inc: { valor: 1 } },
  { upsert: true }
);
// Si no existía el documento, lo crea con { nombre: "visitas_home", valor: 1 }`}
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
