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

export function LessonMongoDBDelete() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'deleteOne() elimina el primer documento que cumple el filtro',
    'deleteMany() elimina todos los documentos que cumplen el filtro',
    'deleteMany({}) elimina absolutamente todos los documentos de la colección: úsalo con mucho cuidado',
    'drop() elimina la colección entera, incluidos sus índices, no solo los documentos',
    'No existe un ROLLBACK como en SQL: sin transacción explícita, un delete se aplica de inmediato',
    'El borrado lógico (marcar un campo "eliminado: true") es una alternativa habitual al borrado físico'
  ];

  const exercises = [
    {
      title: 'Eliminar un documento concreto',
      description: 'Elimina el usuario cuyo email es "spam@example.com".',
      solution: `db.usuarios.deleteOne({ email: "spam@example.com" });`
    },
    {
      title: 'Eliminar varios documentos',
      description: 'Elimina todos los pedidos con estado "cancelado".',
      solution: `db.pedidos.deleteMany({ estado: "cancelado" });`
    },
    {
      title: 'Vaciar una colección sin eliminarla',
      description:
        'Elimina todos los documentos de la colección "logs_temporales" pero conserva la colección (y sus índices) para seguir usándola.',
      solution: `db.logs_temporales.deleteMany({});
// La colección sigue existiendo, solo queda vacía de documentos`
    }
  ];

  const summary = `La operación Delete en MongoDB se realiza con deleteOne() y deleteMany():

• deleteOne(filtro) elimina el primer documento que cumple el filtro
• deleteMany(filtro) elimina todos los documentos que cumplen el filtro
• deleteMany({}) elimina todos los documentos de la colección: revisa siempre el filtro antes de ejecutar
• drop() elimina la colección completa, con su estructura e índices, no solo los documentos
• No hay ROLLBACK automático fuera de una transacción explícita: un delete se aplica de inmediato
• El borrado lógico (un campo booleano "eliminado") suele ser más seguro que el borrado físico en producción`;

  return (
    <>
      <LessonLayout
        title="Eliminar Documentos (Delete)"
        description="Cómo eliminar documentos en MongoDB con deleteOne y deleteMany"
        breadcrumbs={breadcrumbs}
        seoTitle="Eliminar Documentos en MongoDB - deleteOne y deleteMany"
        seoDescription="Aprende a eliminar documentos en MongoDB usando deleteOne y deleteMany, la última operación del CRUD."
        seoKeywords="mongodb deleteone, mongodb deletemany, eliminar documentos mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/operaciones/delete"
      >
        <p>
          La operación Delete permite eliminar documentos de una colección de MongoDB.
        </p>

        <LessonSection title="deleteOne(): eliminar un documento">
          <p>
            <code>deleteOne()</code> elimina el primer documento que cumple el filtro. Es el equivalente
            aproximado a un <code>DELETE FROM ... WHERE ...</code> limitado a una fila.
          </p>
          <CodeBlock
            language="javascript"
            code={`db.usuarios.deleteOne({ email: "spam@example.com" });

// Resultado aproximado:
// { acknowledged: true, deletedCount: 1 }`}
          />
        </LessonSection>

        <LessonSection title="deleteMany(): eliminar varios documentos">
          <p>
            <code>deleteMany()</code> elimina todos los documentos que cumplen el filtro:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.pedidos.deleteMany({ estado: "cancelado" });

// Resultado aproximado:
// { acknowledged: true, deletedCount: 14 }`}
          />
          <InfoBox type="warning" title="Cuidado con el filtro vacío">
            <code>{'db.pedidos.deleteMany({})'}</code> elimina <strong>todos</strong> los documentos de la
            colección. Es una operación tan potente como fácil de escribir por error: revisa siempre el
            filtro antes de ejecutar un <code>deleteMany()</code> en producción.
          </InfoBox>
        </LessonSection>

        <LessonSection title="drop(): eliminar la colección completa">
          <p>
            Si en lugar de vaciar los documentos quieres eliminar la colección entera (estructura, índices
            y datos), usa <code>drop()</code>, equivalente aproximado a <code>DROP TABLE</code>:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.logs_temporales.drop();
// La colección deja de existir por completo`}
          />
        </LessonSection>

        <LessonSection title="Borrado físico vs borrado lógico">
          <p>
            En muchos sistemas en producción, en lugar de eliminar el documento físicamente, se marca como
            eliminado con un campo booleano. Así conservas el historial y puedes recuperarlo si hace falta:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Borrado lógico: no se elimina, se marca
db.usuarios.updateOne(
  { _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1") },
  { $set: { eliminado: true, fechaEliminacion: new Date() } }
);

// Las consultas normales filtran los documentos marcados como eliminados
db.usuarios.find({ eliminado: { $ne: true } });`}
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
