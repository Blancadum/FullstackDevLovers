import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSQLVsNoSQL() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🗂️',
      title: 'SQL Relacional',
      definition: 'Bases de datos estructuradas en tablas con relaciones definidas',
      example: 'MySQL, PostgreSQL, Oracle con ACID y constraints'
    },
    {
      icon: '📄',
      title: 'NoSQL Flexible',
      definition: 'Bases de datos sin esquema fijo, optimizadas para escalabilidad',
      example: 'MongoDB, Cassandra, Redis, almacenan JSON y documentos'
    },
    {
      icon: '🔒',
      title: 'ACID vs BASE',
      definition: 'Modelos de consistencia: SQL = ACID, NoSQL = BASE',
      example: 'Atomicity, Consistency, Isolation, Durability vs Basically Available'
    },
    {
      icon: '📊',
      title: 'Normalización',
      definition: 'Proceso de eliminar redundancia en bases SQL',
      example: 'Formas normales (1NF, 2NF, 3NF) vs denormalización en NoSQL'
    },
    {
      icon: '⚡',
      title: 'Escalabilidad',
      definition: 'Capacidad de crecer sin perder rendimiento',
      example: 'SQL: vertical, NoSQL: horizontal (sharding)'
    },
    {
      icon: '🎯',
      title: 'Caso de Uso',
      definition: 'Tipo de problema para el que cada una es óptima',
      example: 'Transacciones financieras: SQL, Analytics: NoSQL'
    }
  ];

  const exercises = [
    {
      title: 'Comparar modelos de datos: SQL vs NoSQL',
      description: 'Modela los mismos datos en SQL y NoSQL para entender las diferencias',
      solution: `-- MODELO SQL (Relacional, Normalizado)
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT FOREIGN KEY REFERENCES usuarios(id),
  fecha DATETIME,
  total DECIMAL(10, 2)
);

CREATE TABLE articulos_pedido (
  pedido_id INT FOREIGN KEY REFERENCES pedidos(id),
  producto_id INT,
  cantidad INT,
  precio DECIMAL(10, 2)
);

-- Consulta requiere JOIN
SELECT u.nombre, p.id, COUNT(ap.id) as articulos
FROM usuarios u
JOIN pedidos p ON u.id = p.usuario_id
JOIN articulos_pedido ap ON p.id = ap.pedido_id
GROUP BY u.nombre;

-- MODELO NOSQL (Documento, Denormalizado)
db.usuarios.insertOne({
  _id: ObjectId(),
  nombre: "Juan",
  email: "juan@example.com",
  pedidos: [
    {
      id: 1,
      fecha: ISODate("2024-01-15"),
      total: 150.50,
      articulos: [
        { producto_id: 101, cantidad: 2, precio: 50.25 },
        { producto_id: 102, cantidad: 1, precio: 50.00 }
      ]
    }
  ]
});

-- Consulta es simple, sin JOIN necesario
db.usuarios.find({
  "nombre": "Juan"
}, {
  "pedidos.articulos": 1
});`
    },
    {
      title: 'Elegir la BD apropiada para diferentes casos',
      description: 'Analiza características de datos y elige entre SQL y NoSQL',
      solution: `-- CASO 1: Sistema de e-commerce
-- ELEGIR: SQL
-- Razón: Transacciones ACID, relaciones entre tablas (usuarios, productos, pedidos),
-- datos estructurados, necesidad de integridad referencial

CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10,2)
);

CREATE TABLE inventario (
  producto_id INT PRIMARY KEY FOREIGN KEY,
  cantidad INT,
  stock_minimo INT
);

-- CASO 2: Sistema de análisis de redes sociales
-- ELEGIR: NoSQL
-- Razón: Datos no estructurados, volumen masivo, escalabilidad horizontal,
-- cambios frecuentes en esquema

db.tweets.insertOne({
  usuario: "user123",
  texto: "Contenido",
  hashtags: ["tech", "nosql"],
  likes: 145,
  replies: [...],
  metadata: {...}
});

-- CASO 3: Sistema bancario
-- ELEGIR: SQL
-- Razón: Criticidad máxima de datos, ACID obligatorio, auditoría, regulaciones

CREATE TABLE transacciones (
  id INT PRIMARY KEY,
  cuenta_origen INT FOREIGN KEY,
  cuenta_destino INT FOREIGN KEY,
  monto DECIMAL(15,2),
  estado ENUM('pendiente','confirmada','rechazada'),
  fecha TIMESTAMP
);

-- CASO 4: Cache de sesiones web
-- ELEGIR: NoSQL (Redis)
-- Razón: Acceso muy rápido, datos temporales, expiración automática

SET session:user123:token "abc123xyz" EX 3600  -- Expira en 1 hora
GET session:user123:token`
    },
    {
      title: 'Analizar ventajas y desventajas en caso concreto',
      description: 'Evalúa características específicas para un proyecto',
      solution: `-- APLICACIÓN: Plataforma de reservas de hoteles
-- Requisitos:
-- 1. Disponibilidad de habitaciones (debe ser exacta)
-- 2. Reservaciones de múltiples usuarios simultáneamente
-- 3. Histórico de transacciones
-- 4. Búsquedas complejas por fechas, precio, ubicación
-- 5. Reportes gerenciales

-- ANÁLISIS SQL (GANADOR)
-- VENTAJAS:
✓ Transacciones ACID: Garantiza que no se venda 2 veces la misma habitación
✓ FOREIGN KEY: Relaciones entre usuarios, reservas, habitaciones
✓ Reportes: SQL es excelente para análisis complejos
✓ Integridad: Check constraints aseguran datos válidos
✓ Índices: Búsquedas rápidas por fecha, precio, ubicación

-- DESVENTAJAS:
✗ Escalabilidad limitada (sharding es complejo)
✗ Menos flexible con cambios de esquema

-- ANÁLISIS NoSQL (SEGUNDO LUGAR)
-- VENTAJAS:
✓ Escalabilidad horizontal
✓ Flexible para agregar nuevos campos
✓ Rápido para lecturas de documentos completos

-- DESVENTAJAS:
✗ Transacciones débiles (no es seguro para reservas)
✗ No tiene JOIN eficiente (datos duplicados)
✗ Reportes complejos son difíciles
✗ Mayor riesgo de inconsistencia

-- CONCLUSIÓN: SQL es la opción correcta para esta aplicación`
    },
    {
      title: 'Integración híbrida: SQL + NoSQL',
      description: 'Usa ambas tecnologías en la misma aplicación según necesidades',
      solution: `-- ARQUITECTURA HÍBRIDA
-- SQL: Datos críticos y transaccionales
-- NoSQL: Cache, analytics, datos no estructurados

-- CAPA 1: Base de datos principal (SQL - PostgreSQL)
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  nombre VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CAPA 2: Cache de sesiones (NoSQL - Redis)
-- Cliente Python:
redis_client.setex('session:user123', 3600, json.dumps({
  'user_id': 123,
  'last_activity': datetime.now().isoformat()
}))

-- CAPA 3: Búsqueda de texto (NoSQL - Elasticsearch)
PUT /usuarios_index/_doc/123
{
  "id": 123,
  "nombre": "Juan García",
  "email": "juan@example.com",
  "biografía": "Desarrollador de software..."
}

-- FLUJO DE DATOS
1. Datos críticos: SQL (PostgreSQL)
2. Sesiones: NoSQL (Redis)
3. Búsqueda: NoSQL (Elasticsearch)
4. Analytics: NoSQL (MongoDB/Data Lake)
5. Cache: NoSQL (Redis/Memcached)

-- VENTAJAS:
✓ Consistencia de datos críticos (SQL)
✓ Performance en búsquedas (NoSQL)
✓ Escalabilidad de reads (NoSQL)
✓ Auditoría y compliance (SQL)`
    }
  ];

  const keyPoints = [
    'SQL es relacional, estructurado y garantiza ACID',
    'NoSQL es flexible, escalable y optimizado para leer documentos completos',
    'ACID = Atomicity, Consistency, Isolation, Durability (SQL)',
    'BASE = Basically Available, Soft state, Eventually consistent (NoSQL)',
    'SQL usa normalización para eliminar redundancia',
    'NoSQL denormaliza datos para performance en lectura',
    'SQL escala verticalmente (más potente), NoSQL horizontalmente (más servidores)',
    'SQL es mejor para transacciones y relaciones complejas',
    'NoSQL es mejor para datos masivos, no estructurados y cambios frecuentes',
    'Muchas aplicaciones modernas usan ambas (SQL + NoSQL)'
  ];

  const sections = [
    {
      title: 'SQL vs NoSQL: Comparativa Completa',
      content: (
        <>
          <p>
            La elección entre SQL y NoSQL depende de los requisitos específicos de la aplicación.
            Entender las diferencias fundamentales es crucial.
          </p>
          <Table
            headers={['Aspecto', 'SQL (Relacional)', 'NoSQL (Documento/Key-Value)']}
            rows={[
              ['Estructura', 'Tablas, filas y columnas', 'Documentos JSON, colecciones'],
              ['Esquema', 'Fijo y predefinido', 'Flexible y dinámico'],
              ['Consistencia', 'ACID (inmediata)', 'BASE (eventual)'],
              ['Escalabilidad', 'Vertical (más poder)', 'Horizontal (más máquinas)'],
              ['Transacciones', 'Multi-tabla, fuerte', 'Limitadas o débiles'],
              ['Relaciones', 'Explícitas (FOREIGN KEY)', 'Anidadas (documentos)'],
              ['Ejemplos', 'MySQL, PostgreSQL, Oracle', 'MongoDB, Cassandra, Redis'],
              ['Mejor para', 'Datos estructurados, OLTP', 'Datos no estructurados, escalabilidad'],
              ['JOIN', 'Eficiente y rápido', 'Evitar (datos denormalizados)'],
              ['Precio', 'Licencias variables', 'Generalmente open source']
            ]}
          />
        </>
      )
    },
    {
      title: 'ACID vs BASE: Modelos de Consistencia',
      content: (
        <>
          <p>
            Los dos modelos definen cómo se garantiza la consistencia de los datos en el sistema.
          </p>
          <CodeBlock
            language="sql"
            code={`-- MODELO ACID (SQL)
-- Ejemplo: Transferencia bancaria

START TRANSACTION;

-- Atomicity: Todo o nada
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;  -- Débito
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;  -- Crédito

-- Consistency: Suma total siempre igual
-- (Check: SELECT SUM(saldo) FROM cuentas)

-- Isolation: Ninguna otra transacción interfiere
-- (Nadie ve cambios parciales)

-- Durability: Una vez confirmado, es permanente
COMMIT;

-- Si algo falla, se hace ROLLBACK y vuelve al estado anterior


-- MODELO BASE (NoSQL)
-- Ejemplo: Actualizar vista de tweets

-- Basically Available: Responde siempre (puede estar desactualizado)
GET /api/tweets/user123  // Retorna datos últimos 10 segundos

-- Soft state: El estado cambia sin entrada externa
// 5 servidores diferentes pueden tener datos ligeramente diferentes

-- Eventually consistent: Eventualmente todos tendrán los mismos datos
// En 1-5 segundos todos sincronizados (sin garantía inmediata)`}
          />
          <InfoBox type="info">
            <strong>Resumen:</strong> SQL garantiza consistencia INMEDIATA, NoSQL garantiza
            consistencia EVENTUAL. Elige según criticidad de tus datos.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Casos de Uso: Cuando Usar Cada Una',
      content: (
        <>
          <Table
            headers={['Caso de Uso', 'Mejor Opción', 'Razón']}
            rows={[
              ['Sistema bancario', 'SQL', 'ACID esencial, integridad crítica'],
              ['Red social (tweets/posts)', 'NoSQL', 'Volumen masivo, escalabilidad'],
              ['E-commerce', 'SQL', 'Transacciones, inventario exacto'],
              ['Analytics/BI', 'NoSQL (Data Warehouse)', 'Volumen, velocidad de ingesta'],
              ['Cache de sesiones', 'NoSQL (Redis)', 'Velocidad, expiración automática'],
              ['CRM (clientes)', 'SQL', 'Relaciones complejas, reportes'],
              ['IoT (sensores)', 'NoSQL', 'Volumen, datos variados'],
              ['Catálogo de productos', 'SQL o NoSQL', 'Flexible según escala'],
              ['Chat en tiempo real', 'NoSQL', 'Velocidad, elasticidad'],
              ['Sistema de reservas', 'SQL', 'Inventario exacto, ACID']
            ]}
          />
        </>
      )
    },
    {
      title: 'Normalización (SQL) vs Denormalización (NoSQL)',
      content: (
        <>
          <p>
            La normalización elimina redundancia (SQL), mientras que la denormalización la
            aumenta para mejorar performance (NoSQL).
          </p>
          <CodeBlock
            language="sql"
            code={`-- NORMALIZACIÓN (SQL)
-- 1NF: Sin grupos repetitivos
-- 2NF: Sin dependencias parciales
-- 3NF: Sin dependencias transitivas

-- TABLA USUARIOS (1NF - 3NF)
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100)
);

-- TABLA DIRECCIONES (relación separada)
CREATE TABLE direcciones (
  id INT PRIMARY KEY,
  usuario_id INT FOREIGN KEY,
  calle VARCHAR(100),
  ciudad VARCHAR(100)
);

-- Para obtener datos completos: JOIN necesario
SELECT u.nombre, d.calle, d.ciudad
FROM usuarios u
JOIN direcciones d ON u.id = d.usuario_id;


-- DENORMALIZACIÓN (NoSQL)
-- Duplicar datos para evitar JOIN
db.usuarios.insertOne({
  _id: ObjectId(),
  nombre: "Juan",
  email: "juan@example.com",
  direcciones: [  // Datos anidados
    {
      calle: "Calle 123",
      ciudad: "Madrid"
    }
  ]
});

-- Consulta simple sin JOIN
db.usuarios.find({ nombre: "Juan" });`}
          />
        </>
      )
    },
    {
      title: 'Escalabilidad: Vertical vs Horizontal',
      content: (
        <>
          <Table
            headers={['Tipo', 'SQL Típico', 'NoSQL Típico', 'Ventajas/Desventajas']}
            rows={[
              ['Vertical', 'Servidor más potente', 'No común', '+Sencillo, -Límite superior'],
              ['Horizontal', 'Sharding (complejo)', 'Nativo (sharding automático)', '+Ilimitado, -Complejidad']
            ]}
          />
          <CodeBlock
            language="sql"
            code={`-- ESCALADO VERTICAL (SQL)
-- Hardware más potente
-- Más CPU, más RAM, más almacenamiento
-- Problemático: Hay un límite máximo

-- ESCALADO HORIZONTAL (NoSQL)
-- Distribuir datos entre múltiples servidores
-- MongoDB Sharding automático

db.usuarios.createIndex({ region: 1 })  // Índice de sharding
sh.shardCollection("tienda.usuarios", { region: 1 })

// Los datos se distribuyen:
// Shard 1: region = "norte"
// Shard 2: region = "sur"
// Shard 3: region = "este"

// Puedes agregar más shards sin parar el servicio`}
          />
        </>
      )
    },
    {
      title: 'Arquitectura Híbrida: Lo Mejor de Ambos Mundos',
      content: (
        <>
          <p>
            Las aplicaciones modernas frecuentemente combinan SQL y NoSQL para obtener
            ventajas de ambas.
          </p>
          <CodeBlock
            language="sql"
            code={`-- ARQUITECTURA RECOMENDADA
┌─────────────────────────────────────────┐
│         APLICACIÓN / USUARIO            │
└────────────┬────────────────────────────┘
             │
    ┌────────┼────────┐
    │        │        │
    ▼        ▼        ▼
┌────────┬────────┬─────────┐
│  SQL   │ NoSQL  │ NoSQL   │
│ MySQL  │ Redis  │Elastic  │
│(datos) │(cache) │(search) │
└────────┴────────┴─────────┘

-- FLUJO EN APLICACIÓN DE E-COMMERCE

1. Usuario busca producto:
   GET /api/productos?search="laptop"
   -> Elasticsearch (rápido, NoSQL)

2. Sistema verifica disponibilidad:
   SELECT stock FROM inventario WHERE id=123
   -> MySQL (exacto, SQL)

3. Carrito del usuario (sesión):
   SETEX user:123:carrito 3600 {...}
   -> Redis (rápido, NoSQL)

4. Realizar compra (transacción):
   BEGIN TRANSACTION;
   UPDATE inventario ...
   INSERT pedido ...
   COMMIT;
   -> PostgreSQL (ACID, SQL)

5. Análisis de vendtas:
   db.pedidos.aggregate(...)
   -> MongoDB (análisis, NoSQL)`}
          />
          <InfoBox type="success">
            <strong>Estrategia ganadora:</strong> SQL para datos críticos y transaccionales,
            NoSQL para escalabilidad, caché y análisis.
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `SQL y NoSQL son complementarios, no competidores:

• SQL ofrece ACID, relaciones complejas y transacciones seguras
• NoSQL ofrece escalabilidad horizontal, flexibilidad y velocidad
• Elige SQL para datos estructurados y críticos (finanzas, inventario)
• Elige NoSQL para datos masivos, no estructurados o análisis
• ACID garantiza consistencia inmediata, BASE garantiza eventual
• Normalización (SQL) reduce redundancia, denormalización (NoSQL) la aumenta
• SQL escala verticalmente, NoSQL horizontalmente
• Muchas aplicaciones modernas usan ambas (arquitectura híbrida)
• Redis para caché, Elasticsearch para búsqueda, SQL para datos críticos
• Entiende trade-offs: consistencia vs rendimiento, flexibilidad vs integridad`;

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