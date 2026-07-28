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

export function LessonMongoDBEsquemas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'En SQL diseñas el esquema antes de tener datos; en MongoDB conviene diseñarlo pensando en las consultas que harás',
    '"Schema-less" no significa "sin diseño": significa que la estructura vive en el código, no en el motor',
    'La normalización de SQL busca evitar duplicación; en MongoDB a veces conviene duplicar para leer más rápido',
    'Piensa primero en cómo tu aplicación va a leer los datos, y diseña el documento para esa lectura',
    'Mantener consistencia de campos dentro de una colección facilita el código, aunque MongoDB no lo obligue',
    'Herramientas como Mongoose (Node.js) permiten definir un esquema explícito por encima de MongoDB'
  ];

  const exercises = [
    {
      title: 'Diseñar pensando en la consulta',
      description:
        'Vas a mostrar siempre el nombre del autor junto al título de cada artículo de un blog. Diseña el documento de "articulo" pensando en minimizar consultas adicionales.',
      solution: `// Se incluye el nombre del autor directamente en el documento,
// para no tener que consultar la colección "autores" en cada lectura
{
  _id: ObjectId(),
  titulo: "Modelado de datos en MongoDB",
  autor: {
    id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
    nombre: "Ana García"
  },
  contenido: "...",
  publicadoEn: new Date()
}`
    },
    {
      title: 'Identificar un mal diseño',
      description:
        'Explica qué problema tiene guardar TODO el historial de pedidos de un cliente dentro del propio documento del cliente.',
      solution: `Problema: un documento de MongoDB tiene un límite de tamaño (16 MB).
Un cliente con muchos años de pedidos podría acercarse a ese límite,
y además cada lectura del cliente traería también todo su historial,
aunque no se necesite. Mejor: guardar los pedidos en su propia colección,
referenciando al cliente por su _id.`
    }
  ];

  const summary = `Diseñar esquemas en MongoDB es distinto a diseñar tablas en SQL, aunque igual de importante:

• MongoDB no exige un esquema fijo, pero eso no significa que el diseño de datos deje de importar
• El punto de partida no es "qué entidades hay", sino "qué va a consultar mi aplicación y con qué frecuencia"
• A diferencia de la normalización SQL (evitar duplicación), en MongoDB a veces conviene duplicar datos para leer más rápido
• Mantener consistencia de campos dentro de una colección, aunque no sea obligatoria, simplifica mucho el código
• Documentos muy grandes o que crecen sin límite (arrays ilimitados) son una señal de alerta en el diseño
• Herramientas como Mongoose permiten definir un esquema explícito a nivel de aplicación sobre una base de datos flexible`;

  return (
    <>
      <LessonLayout
        title="Esquemas en MongoDB"
        description="Diseño de esquemas flexibles en MongoDB y patrones de modelado de datos"
        breadcrumbs={breadcrumbs}
        seoTitle="Esquemas en MongoDB - Diseño de Modelado de Datos"
        seoDescription="Aprende a diseñar esquemas flexibles en MongoDB y los patrones más habituales para modelar datos NoSQL."
        seoKeywords="mongodb esquemas, schema design mongodb, modelado de datos"
        url="https://fullstackdevlovers.com/datos/mongodb/modelado/esquemas"
      >
        <p>
          Aunque MongoDB no impone un esquema fijo, diseñar bien la estructura de los documentos es clave
          para el rendimiento.
        </p>

        <LessonSection title="Schema-less no significa 'sin diseño'">
          <p>
            En SQL, el diseño del esquema es un paso obligatorio: no puedes insertar una fila sin haber
            definido antes la tabla. En MongoDB puedes insertar un documento sin definir nada de antemano,
            pero eso no significa que el diseño deje de importar: simplemente se traslada del motor de base
            de datos al código de la aplicación (y, opcionalmente, a reglas de validación explícitas, como
            verás en la última lección de este bloque).
          </p>
        </LessonSection>

        <LessonSection title="Diseña pensando en las consultas, no solo en las entidades">
          <p>
            El proceso de diseño en SQL suele partir de identificar entidades y normalizarlas para evitar
            duplicación. En MongoDB, el punto de partida recomendado es distinto: primero identifica{' '}
            <strong>cómo va a leer los datos tu aplicación</strong>, y diseña el documento para que esas
            lecturas sean rápidas y sencillas.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Si siempre muestras el pedido junto con sus líneas,
// tiene sentido que vivan en el mismo documento:
{
  _id: ObjectId(),
  cliente_id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  fecha: new Date(),
  lineas: [
    { producto: "Teclado", cantidad: 1, precio: 79.99 },
    { producto: "Ratón", cantidad: 1, precio: 19.99 }
  ],
  total: 99.98
}`}
          />
        </LessonSection>

        <LessonSection title="Normalizar vs duplicar: un cambio de mentalidad">
          <p>
            En SQL, duplicar datos entre tablas se considera casi siempre un error. En MongoDB, duplicar
            deliberadamente parte de la información (por ejemplo, el nombre de un autor junto a cada
            artículo que ha escrito) es una técnica habitual para evitar consultas adicionales, a cambio de
            asumir que, si el autor cambia de nombre, habrá que actualizar esa copia también.
          </p>
          <Table
            headers={['Criterio', 'SQL (normalizar)', 'MongoDB (a veces duplicar)']}
            rows={[
              ['Prioridad', 'Evitar cualquier duplicación', 'Optimizar la lectura más frecuente'],
              ['Consistencia', 'Garantizada por el motor (FOREIGN KEY)', 'Responsabilidad de la aplicación'],
              ['Lecturas', 'Puede requerir varios JOIN', 'A menudo, un único documento basta']
            ]}
          />
        </LessonSection>

        <LessonSection title="Señales de alerta en el diseño">
          <ul>
            <li>Documentos que crecen sin límite (un array que añade elementos indefinidamente).</li>
            <li>Documentos que se acercan al límite de tamaño de MongoDB (16 MB por documento).</li>
            <li>Necesitar actualizar el mismo dato en muchos documentos distintos cada vez que cambia.</li>
            <li>Consultas que necesitan combinar muchas colecciones distintas de forma habitual.</li>
          </ul>
          <InfoBox type="warning" title="El límite de 16 MB por documento">
            Todo documento de MongoDB tiene un tamaño máximo de 16 MB. Si un documento crece sin control
            (por ejemplo, anidando un historial ilimitado), es una señal clara de que esa información debería
            vivir en su propia colección. {/* TODO-verificar: confirma el límite exacto de tamaño de
            documento en la versión de MongoDB que uses en producción */}
          </InfoBox>
        </LessonSection>

        <LessonSection title="Esquemas explícitos por encima de MongoDB">
          <p>
            En proyectos Node.js es muy habitual usar una librería como <strong>Mongoose</strong> para
            definir un esquema explícito a nivel de aplicación: tipos, campos obligatorios y valores por
            defecto, aunque MongoDB en sí mismo siga sin exigirlo.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Ejemplo de esquema con Mongoose (capa sobre MongoDB)
const usuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  edad: { type: Number, min: 0 }
});`}
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
