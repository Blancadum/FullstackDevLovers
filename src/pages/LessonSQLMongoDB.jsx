import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLMongoDB() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🍃',
      title: 'MongoDB',
      definition: 'Base de datos NoSQL orientada a documentos, flexible y escalable',
      example: 'Almacena datos en documentos JSON (BSON), sin esquema fijo'
    },
    {
      icon: '📄',
      title: 'Documentos',
      definition: 'Unidad de almacenamiento en MongoDB, similar a JSON',
      example: '{ "_id": 1, "nombre": "Juan", "edad": 30, "activo": true }'
    },
    {
      icon: '📚',
      title: 'Colecciones',
      definition: 'Equivalente a tablas en SQL, grupo de documentos',
      example: 'db.usuarios (colección de documentos de usuarios)'
    },
    {
      icon: '🔑',
      title: 'BSON',
      definition: 'Binary JSON, formato binario de almacenamiento de MongoDB',
      example: 'Soporta tipos adicionales: ObjectId, Date, Binary, Code'
    },
    {
      icon: '🔍',
      title: 'Queries',
      definition: 'Operaciones de búsqueda y filtrado de documentos',
      example: 'find(), findOne(), aggregate(), con operadores como $match, $group'
    },
    {
      icon: '⚙️',
      title: 'Operaciones CRUD',
      definition: 'Create, Read, Update, Delete en MongoDB',
      example: 'insertOne(), find(), updateOne(), deleteOne()'
    }
  ];

  const exercises = [
    {
      title: 'Operaciones basicas CRUD en MongoDB',
      description: 'Realiza operaciones Create, Read, Update y Delete en una colección',
      solution: `-- Conectar a MongoDB
mongo

-- Seleccionar base de datos
use tienda

-- CREATE: Insertar un documento
db.usuarios.insertOne({
  _id: 1,
  nombre: "Juan",
  email: "juan@example.com",
  edad: 30,
  activo: true,
  roles: ["usuario", "editor"],
  direccion: {
    calle: "Calle Principal 123",
    ciudad: "Madrid",
    pais: "España"
  },
  fecha_registro: new Date()
});

-- Insertar múltiples documentos
db.usuarios.insertMany([
  {
    _id: 2,
    nombre: "María",
    email: "maria@example.com",
    edad: 28,
    activo: true
  },
  {
    _id: 3,
    nombre: "Carlos",
    email: "carlos@example.com",
    edad: 35,
    activo: false
  }
]);

-- READ: Obtener todos los documentos
db.usuarios.find();

-- READ: Obtener un documento específico
db.usuarios.findOne({ _id: 1 });

-- READ: Buscar con condiciones
db.usuarios.find({ edad: { $gt: 25 } });  // Mayor que 25
db.usuarios.find({ activo: true });
db.usuarios.find({ nombre: /Juan/ });  // Búsqueda con regex

-- UPDATE: Actualizar un documento
db.usuarios.updateOne(
  { _id: 1 },
  { $set: { edad: 31, activo: false } }
);

-- UPDATE: Actualizar múltiples documentos
db.usuarios.updateMany(
  { activo: false },
  { $set: { estado: "inactivo" } }
);

-- DELETE: Eliminar un documento
db.usuarios.deleteOne({ _id: 3 });

-- DELETE: Eliminar múltiples documentos
db.usuarios.deleteMany({ activo: false });`
    },
    {
      title: 'Operadores de consulta avanzados',
      description: 'Usa operadores MongoDB para consultas complejas',
      solution: `-- Operadores de comparación
db.usuarios.find({ edad: { $eq: 30 } });      // Igual
db.usuarios.find({ edad: { $ne: 30 } });      // No igual
db.usuarios.find({ edad: { $gt: 25 } });      // Mayor que
db.usuarios.find({ edad: { $gte: 25 } });     // Mayor o igual
db.usuarios.find({ edad: { $lt: 35 } });      // Menor que
db.usuarios.find({ edad: { $lte: 35 } });     // Menor o igual
db.usuarios.find({ edad: { $in: [25, 30, 35] } });     // En lista
db.usuarios.find({ edad: { $nin: [25, 30, 35] } });    // No en lista

-- Operadores lógicos
db.usuarios.find({
  $and: [
    { edad: { $gt: 25 } },
    { activo: true }
  ]
});

db.usuarios.find({
  $or: [
    { nombre: "Juan" },
    { email: "maria@example.com" }
  ]
});

db.usuarios.find({
  $not: { edad: { $gt: 30 } }
});

-- Operadores de array
db.usuarios.find({ roles: "admin" });  // Contiene elemento
db.usuarios.find({ roles: { $in: ["admin", "editor"] } });
db.usuarios.find({ roles: { $size: 2 } });  // Array con tamaño exacto

-- Operadores con regex
db.usuarios.find({ email: /example.com/ });
db.usuarios.find({ nombre: { $regex: "^J", $options: "i" } });  // Insensible mayúsculas

-- Operadores con null
db.usuarios.find({ telefono: { $exists: true } });  // Campo existe
db.usuarios.find({ telefono: null });  // Campo es null`
    },
    {
      title: 'Agregacion y pipeline',
      description: 'Usa agregación MongoDB para transformar y analizar datos',
      solution: `-- Pipeline agregación: $match (filtrar)
db.pedidos.aggregate([
  {
    $match: {
      estado: "completado",
      fecha: { $gte: new Date("2024-01-01") }
    }
  }
]);

-- Pipeline: $group (agrupar y calcular)
db.pedidos.aggregate([
  {
    $group: {
      _id: "$usuario_id",
      total_gastado: { $sum: "$monto" },
      cantidad_pedidos: { $sum: 1 },
      promedio_pedido: { $avg: "$monto" }
    }
  }
]);

-- Pipeline: $sort (ordenar)
db.pedidos.aggregate([
  {
    $group: {
      _id: "$usuario_id",
      total: { $sum: "$monto" }
    }
  },
  {
    $sort: { total: -1 }  // -1 descendente, 1 ascendente
  },
  {
    $limit: 10
  }
]);

-- Pipeline: $project (seleccionar campos)
db.usuarios.aggregate([
  {
    $project: {
      nombre: 1,
      email: 1,
      "direccion.ciudad": 1,
      edad: 1,
      edad_categoria: {
        $cond: [
          { $gte: ["$edad", 30] },
          "mayor",
          "menor"
        ]
      }
    }
  }
]);

-- Pipeline: $lookup (JOIN)
db.pedidos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "_id",
      as: "usuario_info"
    }
  },
  {
    $unwind: "$usuario_info"  // Desdoblar array
  },
  {
    $project: {
      usuario_nombre: "$usuario_info.nombre",
      monto: 1,
      fecha: 1
    }
  }
]);`
    },
    {
      title: 'Validacion de esquema y indices',
      description: 'Implementa validación de datos e índices para performance',
      solution: `-- Validar esquema en colección (JSON Schema)
db.createCollection("usuarios_validado", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email"],
      properties: {
        _id: { bsonType: "objectId" },
        nombre: {
          bsonType: "string",
          minLength: 3,
          maxLength: 100
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        },
        edad: {
          bsonType: "int",
          minimum: 0,
          maximum: 150
        },
        activo: { bsonType: "bool" }
      }
    }
  }
});

-- Insertar documento (validará esquema)
db.usuarios_validado.insertOne({
  nombre: "Juan",
  email: "juan@example.com",
  edad: 30,
  activo: true
});

-- Crear índices para búsqueda rápida
db.usuarios.createIndex({ email: 1 });  // Índice simple
db.usuarios.createIndex({ email: 1, nombre: 1 });  // Índice compuesto

-- Índice único (impide duplicados)
db.usuarios.createIndex({ email: 1 }, { unique: true });

-- Índice de texto para búsqueda
db.articulos.createIndex({ titulo: "text", contenido: "text" });

-- Búsqueda con índice de texto
db.articulos.find({ $text: { $search: "MongoDB tutorial" } });

-- Ver índices
db.usuarios.getIndexes();

-- Eliminar índice
db.usuarios.dropIndex("email_1");`
    }
  ];

  const keyPoints = [
    'MongoDB almacena datos en documentos JSON (BSON) sin esquema fijo',
    'Documentos se organizan en colecciones (equivalente a tablas SQL)',
    'La flexibilidad permite cambios de estructura sin migración',
    'BSON añade tipos que JSON no tiene: ObjectId, Date, Binary, Code',
    'Operadores de consulta comienzan con $ ($match, $group, $lookup)',
    'Agregación con pipeline transforma y analiza datos complejos',
    'Índices mejoran búsquedas pero ralentizan inserciones',
    'Validación con JSON Schema asegura calidad de datos',
    'Escalabilidad horizontal con sharding automático',
    'Transacciones ACID disponibles en replica sets (MongoDB 4.0+)'
  ];

  const sections = [
    {
      title: 'Introduccion a MongoDB',
      content: (
        <>
          <p>
            MongoDB es una base de datos NoSQL orientada a documentos que almacena datos en formato JSON.
            Es flexible, escalable y muy popular en desarrollo web moderno.
          </p>
          <CodeBlock
            language="json"
            code={`// Documento típico de MongoDB
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "nombre": "Juan García",
  "email": "juan@example.com",
  "edad": 30,
  "activo": true,
  "roles": ["usuario", "editor"],
  "direccion": {
    "calle": "Calle Principal 123",
    "ciudad": "Madrid",
    "pais": "España"
  },
  "fechas": {
    "registro": ISODate("2024-01-15T10:30:00Z"),
    "ultima_conexion": ISODate("2024-01-20T15:45:00Z")
  },
  "preferencias": {
    "newsletter": true,
    "notificaciones": false,
    "idioma": "es"
  }
}`}
          />
          <InfoBox type="info">
            <strong>Ventajas:</strong> Flexible, escalable, desarrollo rápido.
            <strong>Desventajas:</strong> Consume más espacio, datos duplicados, sin ACID por defecto
          </InfoBox>
        </>
      )
    },
    {
      title: 'Estructura: Documentos y Colecciones',
      content: (
        <>
          <p>
            Los documentos son la unidad básica en MongoDB. Se organizan en colecciones,
            que no requieren esquema uniforme.
          </p>
          <Table
            headers={['Concepto', 'MongoDB', 'SQL', 'Diferencia']}
            rows={[
              ['Contenedor', 'Colección', 'Tabla', 'Colección = flexible, Tabla = fijo'],
              ['Registro', 'Documento', 'Fila', 'Documento = JSON, Fila = columnas'],
              ['Campo', 'Clave-valor', 'Columna', 'Documento anida objetos y arrays'],
              ['ID único', '_id (ObjectId)', 'PRIMARY KEY', 'ObjectId generado automáticamente'],
              ['Relaciones', 'Anidación', 'FOREIGN KEY', 'MongoDB denormaliza, SQL normaliza'],
              ['Transacciones', 'Débiles/ninguna', 'ACID fuerte', 'MongoDB eventual consistency']
            ]}
          />
          <CodeBlock
            language="json"
            code={`// Base de datos: tienda
// Colecciones en tienda:
db.usuarios      // Colección de usuarios
db.productos     // Colección de productos
db.pedidos       // Colección de pedidos

// Documento típico
db.usuarios.insertOne({
  _id: ObjectId(),
  nombre: "Juan",
  email: "juan@example.com",
  edad: 30,
  direccion: {      // Objeto anidado
    calle: "Calle 1",
    ciudad: "Madrid"
  },
  hobbies: ["lectura", "deporte"],  // Array
  activo: true
});`}
          />
        </>
      )
    },
    {
      title: 'Tipos de Datos en BSON',
      content: (
        <>
          <p>
            BSON (Binary JSON) es el formato de almacenamiento de MongoDB.
            Soporta más tipos que JSON estándar:
          </p>
          <Table
            headers={['Tipo BSON', 'Descripción', 'Ejemplo']}
            rows={[
              ['String', 'Texto UTF-8', '"Juan"'],
              ['Number', 'Int32, Int64, Double', '30, 123456789, 3.14'],
              ['Boolean', 'true/false', 'true, false'],
              ['Date', 'Fecha ISO', 'ISODate("2024-01-15T10:30:00Z")'],
              ['ObjectId', 'ID único de 12 bytes', 'ObjectId("507f1f77bcf86cd799439011")'],
              ['Array', 'Lista de valores', '["a", "b", "c"]'],
              ['Object', 'Documento anidado', '{ "ciudad": "Madrid" }'],
              ['Null', 'Valor nulo', 'null'],
              ['Binary', 'Datos binarios', 'BinData(0, buffer)'],
              ['Regular Expression', 'Regex', '/pattern/'],
              ['Code', 'Código JavaScript', 'Code("return x + y;")'],
              ['Timestamp', 'Timestamp interno', 'Timestamp(1, 0)'],
              ['UUID', 'UUID binario', 'UUID("6ba7b810...")']
            ]}
          />
        </>
      )
    },
    {
      title: 'Operaciones CRUD Completas',
      content: (
        <>
          <p>CRUD (Create, Read, Update, Delete) son las operaciones fundamentales:</p>
          <CodeBlock
            language="json"
            code={`// CREATE (Insertar)
db.usuarios.insertOne({ nombre: "Juan", email: "juan@example.com" });

db.usuarios.insertMany([
  { nombre: "María", email: "maria@example.com" },
  { nombre: "Carlos", email: "carlos@example.com" }
]);

// READ (Leer/Consultar)
db.usuarios.find();  // Todos los documentos
db.usuarios.findOne({ _id: ObjectId(...) });  // Un documento
db.usuarios.countDocuments({ activo: true });  // Contar

// UPDATE (Actualizar)
db.usuarios.updateOne(
  { _id: ObjectId(...) },
  { $set: { edad: 31, activo: false } }
);

db.usuarios.updateMany(
  { ciudad: "Madrid" },
  { $set: { region: "Centro" } }
);

// DELETE (Eliminar)
db.usuarios.deleteOne({ _id: ObjectId(...) });
db.usuarios.deleteMany({ activo: false });
db.usuarios.deleteMany({});  // Eliminar todos (¡CUIDADO!)

// Operadores especiales
{ $set: { campo: valor } }           // Actualizar campo
{ $unset: { campo: "" } }            // Eliminar campo
{ $inc: { contador: 1 } }            // Incrementar
{ $push: { array: valor } }          // Agregar a array
{ $pop: { array: 1 } }               // Sacar del array
{ $pull: { array: { $gte: 5 } } }    // Sacar condicionalmente`}
          />
        </>
      )
    },
    {
      title: 'Agregacion y Analisis',
      content: (
        <>
          <p>
            El pipeline de agregación es la herramienta más poderosa para análisis de datos en MongoDB.
          </p>
          <CodeBlock
            language="json"
            code={`// Agregación simple: Vendedores por región
db.vendedores.aggregate([
  {
    $match: { activo: true }  // Filtrar
  },
  {
    $group: {                 // Agrupar
      _id: "$region",
      cantidad: { $sum: 1 },
      ventas_total: { $sum: "$ventas" },
      ventas_promedio: { $avg: "$ventas" }
    }
  },
  {
    $sort: { ventas_total: -1 }  // Ordenar
  }
]);

// Agregación con JOIN
db.pedidos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  {
    $unwind: "$usuario"  // Desdoblar array
  },
  {
    $group: {
      _id: "$usuario.nombre",
      total_gastado: { $sum: "$monto" },
      cantidad_pedidos: { $sum: 1 }
    }
  },
  {
    $sort: { total_gastado: -1 }
  },
  {
    $limit: 10
  }
]);

// Etapas comunes del pipeline
$match     // Filtrar documentos
$group     // Agrupar por valor
$sort      // Ordenar resultados
$limit     // Limitar cantidad
$skip      // Saltar documentos
$project   // Seleccionar campos
$lookup    // JOIN con otra colección
$unwind    // Desdoblar array en documentos
$count     // Contar documentos
$addFields // Agregar campos calculados`}
          />
        </>
      )
    },
    {
      title: 'Indices y Validacion',
      content: (
        <>
          <p>
            Los índices mejoran performance de búsquedas.
            La validación asegura calidad de datos.
          </p>
          <CodeBlock
            language="json"
            code={`// Crear índices
db.usuarios.createIndex({ email: 1 });
db.usuarios.createIndex({ nombre: 1, apellido: 1 });
db.usuarios.createIndex({ email: 1 }, { unique: true });

// Índice de texto para búsqueda
db.articulos.createIndex({ titulo: "text", contenido: "text" });
db.articulos.find({ $text: { $search: "MongoDB" } });

// Ver y eliminar índices
db.usuarios.getIndexes();
db.usuarios.dropIndex("email_1");

// Validación de datos con JSON Schema
db.createCollection("usuarios_validados", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email"],
      properties: {
        nombre: {
          bsonType: "string",
          minLength: 3,
          maxLength: 100
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$"
        },
        edad: {
          bsonType: "int",
          minimum: 0,
          maximum: 150
        }
      }
    }
  }
});`}
          />
        </>
      )
    }
  ];

  const summary = `MongoDB es una base de datos NoSQL flexible y escalable:

• Almacena datos en documentos JSON sin esquema fijo
• Colecciones agrupan documentos relacionados (sin relaciones formales)
• BSON añade tipos que JSON no tiene (ObjectId, Date, Binary, etc)
• Operaciones CRUD: insertOne(), find(), updateOne(), deleteOne()
• Pipeline de agregación para análisis complejos y transformaciones
• Índices aceleran búsquedas (simple, compuesto, texto, geoespacial)
• Validación con JSON Schema asegura calidad de datos
• Escalabilidad horizontal automática con sharding
• BASE (eventual consistency) vs ACID en SQL
• Ideal para datos no estructurados, análisis y aplicaciones ágiles`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}