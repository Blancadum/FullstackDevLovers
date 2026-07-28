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

export function LessonMongoDBValidacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'MongoDB permite validar documentos con reglas de JSON Schema, aunque el esquema siga siendo flexible por defecto',
    'El validator se define al crear la colección, o se añade después con collMod',
    'required indica qué campos son obligatorios, similar a NOT NULL en SQL',
    'bsonType, minLength, maximum o pattern acotan el tipo y la forma de cada campo',
    'validationLevel controla si la validación se aplica solo a inserts/updates nuevos o también a los existentes',
    'validationAction decide si un documento inválido se rechaza (error) o solo se avisa (warn)'
  ];

  const exercises = [
    {
      title: 'Crear una colección validada',
      description:
        'Crea una colección "clientes" que exija nombre y email obligatorios, y que la edad (si existe) sea un entero entre 0 y 120.',
      solution: `db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email"],
      properties: {
        nombre: { bsonType: "string", minLength: 2 },
        email: { bsonType: "string" },
        edad: { bsonType: "int", minimum: 0, maximum: 120 }
      }
    }
  }
});`
    },
    {
      title: 'Probar la validación',
      description:
        'Inserta un documento válido y otro inválido (sin email) en la colección "clientes" del ejercicio anterior, y describe qué ocurre en cada caso.',
      solution: `// Válido: se inserta sin problema
db.clientes.insertOne({ nombre: "Ana García", email: "ana@example.com" });

// Inválido: falta el campo obligatorio "email"
db.clientes.insertOne({ nombre: "Carlos" });
// MongoServerError: Document failed validation`
    },
    {
      title: 'Modificar el nivel de validación',
      description:
        'Cambia la colección "clientes" para que la validación solo avise (warn) en lugar de rechazar (error) los documentos inválidos.',
      solution: `db.runCommand({
  collMod: "clientes",
  validationAction: "warn"
});`
    }
  ];

  const summary = `La validación con JSON Schema permite exigir reglas mínimas de calidad sin renunciar a la flexibilidad de MongoDB:

• El validador se define con $jsonSchema al crear la colección (createCollection) o se modifica después (collMod)
• required marca campos obligatorios, similar a NOT NULL en SQL
• bsonType, minLength, maxLength, minimum, maximum y pattern acotan tipo y forma de cada campo
• validationLevel decide si la regla aplica solo a documentos nuevos ("moderate"/"strict")
• validationAction decide si un documento inválido se rechaza ("error") o solo genera un aviso ("warn")
• La validación es opcional y progresiva: puedes empezar sin ella y añadirla cuando el modelo se estabilice`;

  return (
    <>
      <LessonLayout
        title="Validación de Documentos"
        description="Cómo validar la estructura de los documentos en MongoDB con JSON Schema"
        breadcrumbs={breadcrumbs}
        seoTitle="Validación de Documentos en MongoDB - JSON Schema"
        seoDescription="Aprende a validar documentos en MongoDB con reglas de JSON Schema para asegurar la calidad de los datos."
        seoKeywords="mongodb validacion, json schema mongodb, validator mongodb"
        url="https://fullstackdevlovers.com/datos/mongodb/modelado/validacion"
      >
        <p>
          La validación de documentos permite exigir reglas mínimas de estructura y tipo aun trabajando
          sin esquema fijo.
        </p>

        <LessonSection title="¿Por qué validar si MongoDB no exige esquema?">
          <p>
            Que MongoDB no obligue a un esquema fijo no significa que todo valga. En cualquier aplicación
            real necesitas garantías mínimas: que un email exista, que un precio sea un número positivo,
            que un estado solo tome ciertos valores. MongoDB permite definir esas garantías con un{' '}
            <strong>validator</strong> basado en <strong>JSON Schema</strong>, sin perder la flexibilidad
            del resto del documento.
          </p>
        </LessonSection>

        <LessonSection title="Definir un validator al crear la colección">
          <CodeBlock
            language="javascript"
            code={`db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email"],
      properties: {
        nombre: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$"
        },
        edad: {
          bsonType: "int",
          minimum: 0,
          maximum: 120
        },
        estado: {
          enum: ["activo", "inactivo", "pendiente"]
        }
      }
    }
  }
});`}
          />
          <Table
            headers={['Regla', 'Qué controla', 'Equivalente aproximado en SQL']}
            rows={[
              ['required', 'Campos obligatorios', 'NOT NULL'],
              ['bsonType', 'Tipo de dato del campo', 'Tipo de columna (INT, VARCHAR...)'],
              ['minLength / maxLength', 'Longitud de un string', 'VARCHAR(n) / CHECK'],
              ['minimum / maximum', 'Rango de un número', 'CHECK (valor BETWEEN a AND b)'],
              ['enum', 'Valores permitidos', 'CHECK (columna IN (...))'],
              ['pattern', 'Formato mediante expresión regular', 'CHECK con función de regex, según motor']
            ]}
          />
        </LessonSection>

        <LessonSection title="Qué ocurre al insertar un documento inválido">
          <CodeBlock
            language="javascript"
            code={`// Documento válido
db.clientes.insertOne({ nombre: "Ana García", email: "ana@example.com", edad: 27 });

// Documento inválido: falta "email", que es obligatorio
db.clientes.insertOne({ nombre: "Carlos" });
// MongoServerError: Document failed validation`}
          />
        </LessonSection>

        <LessonSection title="Añadir validación a una colección existente">
          <p>
            Si la colección ya existe, puedes añadir o modificar el validator con{' '}
            <code>collMod</code>, sin necesidad de recrearla:
          </p>
          <CodeBlock
            language="javascript"
            code={`db.runCommand({
  collMod: "clientes",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email"]
    }
  },
  validationLevel: "moderate",
  validationAction: "warn"
});`}
          />
        </LessonSection>

        <LessonSection title="validationLevel y validationAction">
          <p>
            Estas dos opciones controlan cómo de estricta es la validación, algo especialmente útil cuando
            añades reglas a una colección que ya tiene datos:
          </p>
          <Table
            headers={['Opción', 'Valores', 'Efecto']}
            rows={[
              ['validationLevel', '"strict" (por defecto)', 'Valida todos los inserts y updates'],
              ['validationLevel', '"moderate"', 'Solo valida inserts y updates sobre documentos ya válidos'],
              ['validationAction', '"error" (por defecto)', 'Rechaza el documento inválido'],
              ['validationAction', '"warn"', 'Permite el documento inválido, pero registra un aviso en el log']
            ]}
          />
          <InfoBox type="tip" title="Estrategia progresiva">
            En una colección con datos ya existentes que no cumplen la nueva regla, empezar con{' '}
            <code>validationAction: "warn"</code> te permite detectar los documentos problemáticos sin
            romper la aplicación, y pasar a <code>"error"</code> una vez los hayas corregido.
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
