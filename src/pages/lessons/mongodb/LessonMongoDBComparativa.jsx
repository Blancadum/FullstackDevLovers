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

export function LessonMongoDBComparativa() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'SQL trabaja con esquema fijo definido de antemano; MongoDB trabaja con esquema flexible por documento',
    'Una tabla equivale aproximadamente a una colección, una fila a un documento y una columna a un campo',
    'SQL relaciona datos con FOREIGN KEY y JOIN; MongoDB prefiere anidar (embedding) o referenciar con $lookup',
    'SQL prioriza consistencia fuerte (ACID); MongoDB prioriza disponibilidad y velocidad, aunque soporta transacciones',
    'SQL escala mejor verticalmente; MongoDB está pensado para escalar horizontalmente mediante sharding',
    'La elección no es "cuál es mejor" sino "cuál encaja mejor con el problema y el patrón de acceso a los datos"'
  ];

  const exercises = [
    {
      title: 'Traducir una tabla a una colección',
      description:
        'Dada esta tabla SQL de productos, escribe el documento MongoDB equivalente, incluyendo un array para las etiquetas.',
      solution: `-- SQL
CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

INSERT INTO productos (nombre, precio) VALUES ('Teclado', 79.99);

// MongoDB equivalente
db.productos.insertOne({
  nombre: "Teclado",
  precio: 79.99,
  etiquetas: ["periféricos"]
});`
    },
    {
      title: 'Elegir el modelo adecuado',
      description:
        'Para cada caso, decide si encaja mejor con SQL o con MongoDB y justifica brevemente por qué: (1) sistema bancario con transferencias entre cuentas, (2) catálogo de un e-commerce con atributos muy distintos según categoría.',
      solution: `1) Sistema bancario: SQL. Necesita consistencia fuerte (ACID),
   relaciones muy normalizadas entre cuentas, movimientos y clientes,
   y auditoría estricta.

2) Catálogo de e-commerce: MongoDB. Cada categoría de producto tiene
   atributos distintos (una camiseta tiene talla y color, un portátil
   tiene RAM y CPU), lo que encaja bien con documentos sin esquema fijo.`
    }
  ];

  const summary = `MongoDB y SQL resuelven el mismo problema (persistir y consultar datos) con filosofías distintas:

• Terminología: base de datos ≈ base de datos, tabla ≈ colección, fila ≈ documento, columna ≈ campo, PRIMARY KEY ≈ _id
• Esquema: SQL lo exige por adelantado; MongoDB lo aplica de forma flexible (y opcionalmente lo puede validar)
• Relaciones: SQL usa FOREIGN KEY y JOIN; MongoDB anida datos (embedding) o los referencia con $lookup
• Consistencia: SQL es ACID por diseño; MongoDB ofrece BASE por defecto, con transacciones ACID disponibles para casos concretos
• Escalabilidad: SQL escala mejor verticalmente (más recursos en un servidor); MongoDB está pensado para escalar horizontalmente
• No hay un ganador absoluto: la decisión depende de la forma de los datos, el patrón de consultas y los requisitos de consistencia del proyecto`;

  return (
    <>
      <LessonLayout
        title="MongoDB vs SQL - Comparativa"
        description="Diferencias clave entre MongoDB y las bases de datos relacionales SQL"
        breadcrumbs={breadcrumbs}
        seoTitle="MongoDB vs SQL - Comparativa Completa NoSQL vs Relacional"
        seoDescription="Compara MongoDB con las bases de datos SQL: esquema, escalabilidad, consultas y cuándo elegir cada modelo."
        seoKeywords="mongodb vs sql, nosql vs sql, comparativa bases de datos"
        url="https://fullstackdevlovers.com/datos/mongodb/comparativa"
      >
        <p>
          Comparar MongoDB con SQL ayuda a decidir qué motor de base de datos se ajusta mejor a cada
          proyecto.
        </p>

        <LessonSection title="Terminología equivalente">
          <p>
            Como ya conoces SQL, la forma más rápida de entender MongoDB es mapear los conceptos que ya
            manejas:
          </p>
          <Table
            headers={['SQL', 'MongoDB', 'Comentario']}
            rows={[
              ['Base de datos', 'Base de datos', 'Mismo concepto en ambos'],
              ['Tabla', 'Colección', 'La colección no exige un esquema uniforme'],
              ['Fila', 'Documento', 'El documento puede anidar objetos y arrays'],
              ['Columna', 'Campo', 'No todos los documentos tienen los mismos campos'],
              ['PRIMARY KEY', '_id', 'MongoDB lo genera automáticamente si no lo indicas'],
              ['JOIN', '$lookup / embedding', 'MongoDB prefiere evitar JOINs frecuentes']
            ]}
          />
        </LessonSection>

        <LessonSection title="Esquema: rígido vs flexible">
          <p>
            En SQL defines la estructura antes de insertar ningún dato, y cualquier cambio requiere una
            migración (<code>ALTER TABLE</code>). En MongoDB el esquema es flexible por defecto: puedes
            insertar documentos con campos distintos en la misma colección.
          </p>
          <CodeBlock
            language="javascript"
            code={`// Ambos documentos conviven en la misma colección "productos"
db.productos.insertOne({ nombre: "Camiseta", talla: "M", color: "azul" });
db.productos.insertOne({ nombre: "Portátil", ram_gb: 16, cpu: "i7" });`}
          />
          <InfoBox type="warning" title="Flexible no significa descontrolado">
            En la práctica, casi todos los documentos de una colección deberían compartir una estructura
            razonablemente consistente. MongoDB permite <em>validar</em> esa estructura con reglas
            explícitas, como verás en la lección de validación de documentos.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Relaciones: JOIN vs embedding/referencing">
          <p>
            En SQL, normalizar datos en varias tablas relacionadas por claves foráneas es la norma, y
            <code>JOIN</code> las combina en tiempo de consulta. En MongoDB hay dos estrategias:
          </p>
          <CodeBlock
            language="javascript"
            code={`-- SQL: dos tablas relacionadas por clave foránea
SELECT pedidos.id, usuarios.nombre
FROM pedidos
JOIN usuarios ON pedidos.usuario_id = usuarios.id;

// MongoDB: embedding (anidar los datos del usuario dentro del pedido)
{
  _id: 1,
  usuario: { nombre: "Ana", email: "ana@example.com" },
  total: 59.90
}

// MongoDB: referencing (guardar solo el id y combinarlo con $lookup)
db.pedidos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "_id",
      as: "usuario"
    }
  }
]);`}
          />
          <p>
            La lección "Embedding vs Referencing" profundiza en cuándo conviene cada estrategia.
          </p>
        </LessonSection>

        <LessonSection title="Consistencia: ACID vs BASE">
          <p>
            SQL está construido alrededor de transacciones <strong>ACID</strong> (Atomicidad, Consistencia,
            Aislamiento, Durabilidad). MongoDB, al distribuir datos entre varios servidores, prioriza por
            defecto el modelo <strong>BASE</strong> (Basically Available, Soft state, Eventually
            consistent), aunque también soporta transacciones ACID multi-documento para los casos que las
            necesitan.
          </p>
          {/* TODO-verificar: confirma desde qué versión concreta de MongoDB se soportan transacciones
              ACID multi-documento y sus limitaciones actuales antes de dar el dato como definitivo */}
        </LessonSection>

        <LessonSection title="Escalabilidad: vertical vs horizontal">
          <p>
            Un motor SQL tradicional escala principalmente <strong>verticalmente</strong>: más CPU, más RAM,
            un servidor más potente. MongoDB está diseñado para escalar <strong>horizontalmente</strong>{' '}
            mediante <em>sharding</em>: reparte los datos entre varios servidores para soportar más volumen
            de lectura y escritura.
          </p>
        </LessonSection>

        <LessonSection title="¿Cuándo elegir cada uno?">
          <Table
            headers={['Usa SQL si...', 'Usa MongoDB si...']}
            rows={[
              ['Necesitas transacciones complejas entre muchas tablas', 'Tus documentos agrupan de forma natural la información relacionada'],
              ['El esquema es estable y bien conocido', 'El esquema cambia con frecuencia o es distinto entre registros'],
              ['Los informes dependen de muchos JOIN', 'Priorizas velocidad de lectura/escritura y escalado horizontal'],
              ['La integridad referencial es crítica', 'Necesitas iterar rápido sin migraciones constantes']
            ]}
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
