import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSDynamoDB() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'DynamoDB — Base de Datos NoSQL Serverless',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>DynamoDB</strong> es la base de datos NoSQL completamente gestionada de AWS. Es serverless, escalable a millones de peticiones por segundo, con latencia de milisegundos y sin necesidad de gestionar servidores ni capacidad.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            A diferencia de RDS que es relacional (SQL), DynamoDB es clave-valor y documentos. No hay JOINs, ni transacciones complejas. Es ideal para acceso rápido por clave, pero requiere un cambio de mentalidad en el diseño.
          </p>

          <InfoBox type="tip" title="Comparativa rápida">
            <strong>RDS (SQL):</strong> Relacional, JOINs, normalizados, consultas complejas
            <br />
            <strong>DynamoDB (NoSQL):</strong> Clave-valor, acceso por clave rápido, datos desnormalizados, escalabilidad infinita
          </InfoBox>
        </>
      )
    },

    {
      title: 'Cuándo usar DynamoDB',
      content: (
        <>
          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>✅ Ideal para:</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Acceso por clave primaria (get/put por ID)</li>
              <li>Escala masiva: millones de peticiones/segundo</li>
              <li>Datos con esquema flexible (no todas las filas tienen los mismos atributos)</li>
              <li>Carritos de compra, sesiones de usuario, contadores, catálogos</li>
              <li>Timelines (tweets, posts, feeds en redes sociales)</li>
              <li>Cache de datos calientes (sesiones, preferencias usuario)</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#ffebee',
            border: '2px solid #f44336',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ color: '#c62828', marginTop: 0 }}>❌ NO usar para:</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Consultas relacionales complejas (JOINs, agregaciones)</li>
              <li>Reportes que requieren análisis de múltiples tablas</li>
              <li>Datos altamente normalizados</li>
              <li>Transacciones ACID complejas entre múltiples entidades</li>
              <li>Full-text search (usa OpenSearch en su lugar)</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Modelo de Datos',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            DynamoDB organiza datos en <strong>tablas</strong>. Cada tabla tiene:
          </p>

          <Table
            headers={['Concepto DynamoDB', 'Equivalente SQL', 'Ejemplo']}
            rows={[
              ['Tabla', 'Tabla', 'GuttmanSesiones'],
              ['Item (fila)', 'Fila', '{"sesionId": "abc123", "usuarioId": "u456"}'],
              ['Attribute (columna)', 'Columna', 'sesionId, usuarioId, estado, timestamp'],
              ['Partition Key', 'Clave primaria (parte 1)', 'sesionId'],
              ['Sort Key (opcional)', 'Clave primaria (parte 2)', 'timestamp'],
              ['Global Secondary Index (GSI)', 'Índice secundario', 'Búsqueda por usuarioId'],
              ['TTL', 'Trigger automático', 'Borrar sesión expirada automáticamente']
            ]}
          />

          <CodeBlock
            code={`// Estructura de tabla DynamoDB para sesiones

GuttmanSesiones (Tabla)
├─ Partition Key: sesionId (String)
├─ Sort Key: timestamp (Number)
│
└─ Attributes:
   ├─ usuarioId (String)
   ├─ estado (String) → "activa", "expirada", "bloqueada"
   ├─ ip (String)
   ├─ duracion (Number) → segundos
   ├─ ultimoAcceso (Number) → timestamp
   ├─ datos (Map) → objeto JSON flexible
   │  ├─ roles: ["admin", "usuario"]
   │  ├─ permisos: {...}
   │  └─ metadata: {...}
   └─ TTL: ultimoAcceso + 3600 (1 hora)

// Global Secondary Index (GSI) para buscar por usuarioId
GSI: usuarioId-index
├─ Partition Key: usuarioId
└─ Projection: ALL (incluir todos los atributos)`}
            language="text"
            title="Estructura de tabla DynamoDB"
          />
        </>
      )
    },

    {
      title: 'Operaciones CRUD con Java',
      content: (
        <>
          <CodeBlock
            code={`// Spring Boot + DynamoDB (Enhanced Client)

import com.amazonaws.services.dynamodbv2.datamodeling.*;

@DynamoDbBean
public class Sesion {
  private String sesionId;
  private long timestamp;
  private String usuarioId;
  private String estado;
  private int duracion;

  @DynamoDbPartitionKey
  public String getSesionId() { return sesionId; }

  @DynamoDbSortKey
  public long getTimestamp() { return timestamp; }

  @DynamoDbAttribute
  public String getUsuarioId() { return usuarioId; }

  // getters y setters...
}

// Servicio para operaciones
@Service
public class SesionService {

  private final DynamoDbTable<Sesion> sesionesTable;

  public SesionService(DynamoDbResource dynamoDb) {
    this.sesionesTable = dynamoDb
      .table("GuttmanSesiones", TableSchema.fromBean(Sesion.class));
  }

  // Crear/Actualizar
  public void crearSesion(Sesion sesion) {
    sesionesTable.putItem(sesion);
  }

  // Obtener por clave
  public Sesion obtenerSesion(String sesionId, long timestamp) {
    return sesionesTable.getItem(
      Key.builder()
        .partitionValue(sesionId)
        .sortValue(timestamp)
        .build()
    );
  }

  // Borrar
  public void borrarSesion(String sesionId, long timestamp) {
    sesionesTable.deleteItem(
      Key.builder()
        .partitionValue(sesionId)
        .sortValue(timestamp)
        .build()
    );
  }

  // Consulta (por usuarioId usando GSI)
  public List<Sesion> obtenerSesionesPorUsuario(String usuarioId) {
    return sesionesTable.query(
        QueryConditional.keyEqualTo(
          Key.builder().partitionValue(usuarioId).build()
        )
      )
      .stream()
      .map(PageIterable::items)
      .flatMap(java.util.stream.Stream::of)
      .collect(java.util.stream.Collectors.toList());
  }
}`}
            language="java"
            title="Operaciones CRUD en Java"
          />
        </>
      )
    },

    {
      title: 'Modelado de Datos — Desnormalización',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En SQL, <strong>normalizas</strong> para evitar redundancia. En DynamoDB, <strong>desnormalizas</strong> para optimizar consultas. Es el opuesto: almacenas datos duplicados para leer rápido.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#0d47a1', marginTop: 0 }}>❌ Enfoque SQL (Relacional)</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Tablas separadas + JOIN
              </p>
              <CodeBlock
                code={`Usuarios:
├─ userId: "u123"
├─ nombre: "Juan"
└─ email: "juan@..."

Pedidos:
├─ orderId: "o456"
├─ userId: "u123"
├─ total: 99.99
└─ fecha: "2024-01-15"

-- Consulta para obtener usuario + pedido
SELECT u.*, o.*
FROM usuarios u
JOIN pedidos o ON u.userId = o.userId
WHERE o.orderId = "o456"`}
                language="sql"
              />
            </div>

            <div style={{
              backgroundColor: '#f0f4c3',
              border: '2px solid #cddc39',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#827717', marginTop: 0 }}>✅ Enfoque DynamoDB (Desnormalizado)</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Una sola lectura por clave
              </p>
              <CodeBlock
                code={`Pedidos (Tabla única):
├─ PK: orderId = "o456"
├─ usuario: {
│  ├─ userId: "u123"
│  ├─ nombre: "Juan"
│  └─ email: "juan@..."
│}
├─ total: 99.99
└─ fecha: "2024-01-15"

// Lectura directa (1 operación)
Sesion sesion = tabla.get("o456")`}
                language="text"
              />
            </div>
          </div>

          <InfoBox type="warning" title="Trade-off">
            <strong>Ventaja:</strong> Una sola lectura rápida
            <br />
            <strong>Desventaja:</strong> Los datos del usuario están duplicados en cada pedido. Si cambias el email, necesitas actualizar todos los pedidos.
            <br />
            <strong>Solución:</strong> Aceptar la duplicación o usar transacciones para actualizar múltiples items.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Capacidad y Escalabilidad',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            DynamoDB escala automáticamente, pero debes entender cómo se factura: por <strong>Read Capacity Units (RCU)</strong> y <strong>Write Capacity Units (WCU)</strong>.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#fce4ec',
              border: '2px solid #e91e63',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#ad1457', marginTop: 0 }}>📖 Read Capacity (RCU)</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: 0 }}>
                <li>1 RCU = 4 KB lectura (strong consistent)</li>
                <li>1 RCU = 8 KB lectura (eventually consistent)</li>
                <li>100 RCU = 100 lecturas/seg (strong) o 200 (eventual)</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f3e5f5',
              border: '2px solid #9c27b0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#6a1b9a', marginTop: 0 }}>✏️ Write Capacity (WCU)</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: 0 }}>
                <li>1 WCU = 1 KB escritura</li>
                <li>100 WCU = 100 escrituras/seg</li>
                <li>Cada transacción = 2 WCU (más costoso)</li>
              </ul>
            </div>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: '2rem 0 1.5rem' }}>
            Dos modos de facturación:
          </p>

          <Table
            headers={['Modo', 'Mejor para', 'Costo']}
            rows={[
              [
                'On-Demand',
                'Cargas impredecibles, spikes ocasionales',
                'Pago por solicitud (más caro con uso estable)'
              ],
              [
                'Provisioned',
                'Cargas predecibles y estables',
                'Costo fijo + overages si excedes capacidad'
              ]
            ]}
          />
        </>
      )
    },

    {
      title: 'Consistencia: Strong vs Eventual',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            DynamoDB ofrece dos modelos de consistencia en las lecturas:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #4caf50',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#2e7d32', marginTop: 0 }}>🔒 Strong Consistent</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Siempre obtienes el valor más reciente
              </p>
              <ul style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: 0 }}>
                <li><strong>Garantía:</strong> Valor actualizado garantizado</li>
                <li><strong>Coste:</strong> 2x RCU</li>
                <li><strong>Latencia:</strong> Ligeramente más alta</li>
                <li><strong>Ideal para:</strong> Datos críticos (saldo, inventario)</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#fff9e6',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#f57f17', marginTop: 0 }}>⚡ Eventual Consistent</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Puedes obtener valor antiguo temporalmente
              </p>
              <ul style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: 0 }}>
                <li><strong>Garantía:</strong> Consistente "eventualmente" (milisegundos)</li>
                <li><strong>Coste:</strong> 1x RCU</li>
                <li><strong>Latencia:</strong> Mínima</li>
                <li><strong>Ideal para:</strong> Datos no críticos (perfiles, caché)</li>
              </ul>
            </div>
          </div>

          <CodeBlock
            code={`// En Java: especificar consistencia

// Strong consistent (caro)
GetItemEnhancedRequest request = GetItemEnhancedRequest.builder()
  .consistentRead(true)  // ← Strong consistent
  .key(Key.builder().partitionValue(id).build())
  .build();

Sesion sesion = table.getItem(request);

// Eventual consistent (barato, default)
sesion = table.getItem(
  Key.builder().partitionValue(id).build()
)  // ← Eventual consistent (default)`}
            language="java"
            title="Especificar consistencia en Java"
          />
        </>
      )
    },

    {
      title: 'TTL — Expiración Automática',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>TTL (Time To Live)</strong> permite que DynamoDB borre automáticamente items expirados. Ideal para sesiones, tokens, datos temporales.
          </p>

          <CodeBlock
            code={`// DynamoDB borra automáticamente cuando TTL expira

// Tabla: GuttmanSesiones
Attributes:
├─ sesionId (PK)
├─ timestamp (SK)
├─ usuarioId
├─ datos
└─ ttl (Number) ← Atributo TTL en segundos desde epoch

// Ejemplo: Sesión expira en 1 hora
{
  "sesionId": "abc123",
  "timestamp": 1705334400,
  "usuarioId": "u456",
  "datos": {...},
  "ttl": 1705338000  // 1 hora después del timestamp
}

// DynamoDB borrará este item automáticamente después de 1705338000
// (Sin intervención, sin costo adicional)`}
            language="text"
            title="TTL en DynamoDB"
          />

          <InfoBox type="tip" title="Ventajas de TTL">
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Borrado automático, sin scripts cron</li>
              <li>Costo reducido: elimina datos inútiles</li>
              <li>Sin latencia de borrado: es asincrónico</li>
              <li>Ideal para sesiones, tokens, caché temporal</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Transacciones en DynamoDB',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            DynamoDB soporta transacciones ACID limitadas: puedes agrupar hasta 25 items en una sola transacción. No son tan poderosas como SQL, pero ofrecen consistencia.
          </p>

          <CodeBlock
            code={`// Transacción: Transferencia entre cuentas

@Transactional
public void transferir(String cuentaOrigen, String cuentaDestino, double monto) {
  // 1. Restar de origen
  // 2. Sumar a destino
  // Ambas o ninguna (ACID)

  TransactWriteItemsEnhancedRequest request = TransactWriteItemsEnhancedRequest
    .builder()
    .addUpdateItem(table, actualizar(cuentaOrigen, -monto))
    .addUpdateItem(table, actualizar(cuentaDestino, +monto))
    .build();

  // Ambas escrituras suceden juntas
  // Si falla una, se revierte la otra
  dynamo.transactWriteItems(request);
}

// Costo: 2 WCU por cada item en la transacción (más caro que operaciones normales)`}
            language="java"
            title="Transacciones ACID"
          />

          <InfoBox type="warning" title="Limitaciones">
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>Máximo 25 items por transacción</li>
              <li>No puedes hacer JOINs entre tablas</li>
              <li>Costo mayor: 2x WCU/RCU por item</li>
              <li>Para lógica compleja, mejor RDS</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Caso de Uso: Carrito de Compra',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            DynamoDB es ideal para carritos: acceso rápido por usuarioId, datos flexibles (cada item es diferente), escalabilidad infinita.
          </p>

          <CodeBlock
            code={`// Tabla: CarritosCompra
├─ PK: usuarioId
├─ SK: timestamp (para versioning)
│
└─ Attributes:
   ├─ items (List):
   │  ├─ productId: "p123"
   │  ├─ nombre: "Laptop"
   │  ├─ precio: 999.99
   │  ├─ cantidad: 1
   │  └─ url: "https://..."
   ├─ total: 999.99
   ├─ descuento: 0
   ├─ estado: "activo" | "pagado" | "cancelado"
   ├─ fechaCreacion: 1705334400
   └─ ultimaModificacion: 1705338000

// Operaciones:
// 1. Obtener carrito: get(usuarioId) → O(1) muy rápido
// 2. Agregar item: update(usuarioId, new_item)
// 3. Borrar item: update(usuarioId, remove_item)
// 4. Checkout: transactWriteItems([actualizar carrito, crear pedido])

// Escala a millones de usuarios sin problema`}
            language="text"
            title="Diseño de carrito en DynamoDB"
          />
        </>
      )
    },

    {
      title: 'Ejemplo Práctico: Crear Tabla DynamoDB y Operaciones CRUD desde Java',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Crearemos una tabla DynamoDB para sesiones de usuario y haremos operaciones CRUD (Create, Read, Update, Delete) desde Java con Spring Boot.
          </p>

          <h3>Paso 1: Crear Tabla en AWS Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>DynamoDB → Tables → Create Table</strong></li>
            <li>Configurar tabla:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Table name: <strong>GuttmanSesiones</strong></li>
                <li>Partition key: <strong>sesionId</strong> (String)</li>
                <li>Sort key: <strong>timestamp</strong> (Number)</li>
                <li>Capacity mode: <strong>On-demand</strong> (flexible para desarrollo)</li>
                <li>Click <strong>Create Table</strong></li>
              </ul>
            </li>
          </ol>

          <h3>Paso 2: Agregar Índice Secundario Global (GSI)</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Para buscar sesiones por usuarioId:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a pestaña <strong>Indexes</strong></li>
            <li>Click <strong>Create Global Secondary Index</strong></li>
            <li>Configurar:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Partition key: <strong>usuarioId</strong> (String)</li>
                <li>Index name: <strong>usuarioId-index</strong></li>
                <li>Projection: <strong>ALL</strong> (incluir todos los atributos)</li>
                <li>Capacity mode: <strong>On-demand</strong></li>
              </ul>
            </li>
            <li>Click <strong>Create</strong></li>
          </ol>

          <h3>Paso 3: Configurar Spring Boot con AWS SDK</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Agregar dependencias en <strong>pom.xml</strong>:
          </p>
          <CodeBlock language="xml" title="pom.xml">
{`<!-- AWS SDK v2 para DynamoDB -->
<dependency>
  <groupId>software.amazon.awssdk</groupId>
  <artifactId>dynamodb</artifactId>
  <version>2.20.0</version>
</dependency>

<!-- DynamoDB Enhanced Client (ORM-like) -->
<dependency>
  <groupId>software.amazon.awssdk</groupId>
  <artifactId>dynamodb-enhanced</artifactId>
  <version>2.20.0</version>
</dependency>

<!-- Spring Cloud AWS -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-aws</artifactId>
  <version>2.4.4</version>
</dependency>`}
          </CodeBlock>

          <h3>Paso 4: Crear Entity para Sesión</h3>
          <CodeBlock language="java" title="Sesion.java">
{`import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.*;

@DynamoDbBean
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sesion {

  @DynamoDbPartitionKey
  private String sesionId;

  @DynamoDbSortKey
  private long timestamp;

  @DynamoDbAttribute
  private String usuarioId;

  @DynamoDbAttribute
  private String estado; // "activa", "expirada", "bloqueada"

  @DynamoDbAttribute
  private String ip;

  @DynamoDbAttribute
  private int duracion; // segundos

  @DynamoDbAttribute
  private long ultimoAcceso; // timestamp

  @DynamoDbAttribute
  private Map<String, Object> datos; // JSON flexible

  public Sesion(String sesionId, String usuarioId, String ip) {
    this.sesionId = sesionId;
    this.usuarioId = usuarioId;
    this.ip = ip;
    this.timestamp = System.currentTimeMillis();
    this.estado = "activa";
    this.duracion = 3600; // 1 hora
    this.ultimoAcceso = this.timestamp;
    this.datos = new HashMap<>();
  }
}`}
          </CodeBlock>

          <h3>Paso 5: Crear Servicio CRUD</h3>
          <CodeBlock language="java" title="SesionService.java">
{`import org.springframework.stereotype.Service;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbEnhancedClient;
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable;
import software.amazon.awssdk.enhanced.dynamodb.TableSchema;
import software.amazon.awssdk.enhanced.dynamodb.Key;
import software.amazon.awssdk.enhanced.dynamodb.model.*;
import java.util.*;

@Service
public class SesionService {

  private final DynamoDbTable<Sesion> sesionesTable;

  public SesionService(DynamoDbEnhancedClient dynamoDb) {
    this.sesionesTable = dynamoDb
      .table("GuttmanSesiones", TableSchema.fromBean(Sesion.class));
  }

  // CREATE: Insertar nueva sesión
  public Sesion crearSesion(String sesionId, String usuarioId, String ip) {
    Sesion sesion = new Sesion(sesionId, usuarioId, ip);
    sesionesTable.putItem(sesion);
    return sesion;
  }

  // READ: Obtener sesión por ID
  public Sesion obtenerSesion(String sesionId, long timestamp) {
    Sesion sesion = sesionesTable.getItem(
      Key.builder()
        .partitionValue(sesionId)
        .sortValue(timestamp)
        .build()
    );
    return sesion;
  }

  // UPDATE: Actualizar sesión (marcar como expirada)
  public void actualizarEstado(String sesionId, long timestamp, String nuevoEstado) {
    Sesion sesion = obtenerSesion(sesionId, timestamp);
    if (sesion != null) {
      sesion.setEstado(nuevoEstado);
      sesion.setUltimoAcceso(System.currentTimeMillis());
      sesionesTable.putItem(sesion);
    }
  }

  // UPDATE: Agregar datos a la sesión (roles, permisos)
  public void agregarDatos(String sesionId, long timestamp, String clave, Object valor) {
    Sesion sesion = obtenerSesion(sesionId, timestamp);
    if (sesion != null) {
      if (sesion.getDatos() == null) {
        sesion.setDatos(new HashMap<>());
      }
      sesion.getDatos().put(clave, valor);
      sesionesTable.putItem(sesion);
    }
  }

  // DELETE: Borrar sesión
  public void borrarSesion(String sesionId, long timestamp) {
    sesionesTable.deleteItem(
      Key.builder()
        .partitionValue(sesionId)
        .sortValue(timestamp)
        .build()
    );
  }

  // QUERY: Obtener todas las sesiones de un usuario (usa GSI)
  public List<Sesion> obtenerSesionesPorUsuario(String usuarioId) {
    QueryConditional queryConditional = QueryConditional
      .keyEqualTo(Key.builder().partitionValue(usuarioId).build());

    PageIterable<Sesion> results = sesionesTable
      .query(r -> r
        .indexName("usuarioId-index")
        .queryConditional(queryConditional)
      );

    List<Sesion> sesiones = new ArrayList<>();
    for (Page<Sesion> page : results) {
      sesiones.addAll(page.items());
    }
    return sesiones;
  }

  // SCAN: Obtener todas las sesiones activas (evitar en producción)
  public List<Sesion> obtenerSesionesActivas() {
    ScanEnhancedRequest scanRequest = ScanEnhancedRequest.builder()
      .filterExpression("estado = :estado")
      .build();

    PageIterable<Sesion> results = sesionesTable.scan(scanRequest);
    List<Sesion> sesiones = new ArrayList<>();
    for (Page<Sesion> page : results) {
      sesiones.addAll(page.items());
    }
    return sesiones;
  }

  // Contar sesiones de usuario
  public int contarSesionesActivas(String usuarioId) {
    return obtenerSesionesPorUsuario(usuarioId).stream()
      .filter(s -> "activa".equals(s.getEstado()))
      .toList()
      .size();
  }
}`}
          </CodeBlock>

          <h3>Paso 6: Crear Controlador REST</h3>
          <CodeBlock language="java" title="SesionController.java">
{`import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api/sesiones")
public class SesionController {

  private final SesionService sesionService;

  public SesionController(SesionService sesionService) {
    this.sesionService = sesionService;
  }

  // POST: Crear sesión
  @PostMapping
  public ResponseEntity<Sesion> crear(@RequestBody Map<String, String> request) {
    String sesionId = UUID.randomUUID().toString();
    String usuarioId = request.get("usuarioId");
    String ip = request.get("ip");

    Sesion sesion = sesionService.crearSesion(sesionId, usuarioId, ip);
    return ResponseEntity.ok(sesion);
  }

  // GET: Obtener sesión
  @GetMapping("/{sesionId}/{timestamp}")
  public ResponseEntity<Sesion> obtener(
    @PathVariable String sesionId,
    @PathVariable long timestamp
  ) {
    Sesion sesion = sesionService.obtenerSesion(sesionId, timestamp);
    if (sesion == null) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(sesion);
  }

  // PUT: Actualizar estado
  @PutMapping("/{sesionId}/{timestamp}/estado")
  public ResponseEntity<Void> actualizarEstado(
    @PathVariable String sesionId,
    @PathVariable long timestamp,
    @RequestBody Map<String, String> request
  ) {
    sesionService.actualizarEstado(sesionId, timestamp, request.get("estado"));
    return ResponseEntity.ok().build();
  }

  // DELETE: Borrar sesión
  @DeleteMapping("/{sesionId}/{timestamp}")
  public ResponseEntity<Void> borrar(
    @PathVariable String sesionId,
    @PathVariable long timestamp
  ) {
    sesionService.borrarSesion(sesionId, timestamp);
    return ResponseEntity.ok().build();
  }

  // GET: Sesiones de usuario
  @GetMapping("/usuario/{usuarioId}")
  public ResponseEntity<List<Sesion>> obtenerPorUsuario(@PathVariable String usuarioId) {
    List<Sesion> sesiones = sesionService.obtenerSesionesPorUsuario(usuarioId);
    return ResponseEntity.ok(sesiones);
  }
}`}
          </CodeBlock>

          <h3>Paso 7: Configurar AWS Credentials</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Crear archivo <strong>application.yaml</strong>:
          </p>
          <CodeBlock language="yaml" title="application.yaml">
{`spring:
  application:
    name: guttman-dynamodb

aws:
  region: eu-west-1
  dynamodb:
    endpoint: "https://dynamodb.eu-west-1.amazonaws.com"

logging:
  level:
    software.amazon.awssdk: WARN`}
          </CodeBlock>

          <h3>Paso 8: Crear Test de Integración</h3>
          <CodeBlock language="java" title="SesionServiceTest.java">
{`import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class SesionServiceTest {

  @Autowired
  private SesionService sesionService;

  @Test
  public void testOperacionesCRUD() {
    String sesionId = "sesion-test-123";
    String usuarioId = "usuario-001";
    String ip = "192.168.1.100";
    long timestamp = System.currentTimeMillis();

    // CREATE
    Sesion sesion = sesionService.crearSesion(sesionId, usuarioId, ip);
    assertNotNull(sesion.getSesionId());
    assertEquals("activa", sesion.getEstado());

    // READ
    Sesion retrieved = sesionService.obtenerSesion(sesionId, timestamp);
    assertNotNull(retrieved);
    assertEquals(usuarioId, retrieved.getUsuarioId());

    // UPDATE
    sesionService.actualizarEstado(sesionId, timestamp, "bloqueada");
    Sesion updated = sesionService.obtenerSesion(sesionId, timestamp);
    assertEquals("bloqueada", updated.getEstado());

    // AGREGAR DATOS
    sesionService.agregarDatos(sesionId, timestamp, "roles",
      List.of("admin", "usuario"));
    Sesion conDatos = sesionService.obtenerSesion(sesionId, timestamp);
    assertNotNull(conDatos.getDatos());
    assertTrue(conDatos.getDatos().containsKey("roles"));

    // QUERY por usuario
    List<Sesion> sesionesUsuario = sesionService.obtenerSesionesPorUsuario(usuarioId);
    assertTrue(sesionesUsuario.size() > 0);

    // DELETE
    sesionService.borrarSesion(sesionId, timestamp);
    Sesion deleted = sesionService.obtenerSesion(sesionId, timestamp);
    assertNull(deleted);

    System.out.println("✓ Todas las operaciones CRUD funcionan!");
  }
}`}
          </CodeBlock>

          <h3>Paso 9: Ejecutar Operaciones CRUD</h3>
          <CodeBlock language="bash">
{`# Crear sesión
curl -X POST http://localhost:8080/api/sesiones \\
  -H "Content-Type: application/json" \\
  -d '{
    "usuarioId": "user-001",
    "ip": "192.168.1.50"
  }'

# Respuesta:
{
  "sesionId": "a1b2c3d4-e5f6",
  "timestamp": 1705334400,
  "usuarioId": "user-001",
  "estado": "activa",
  "ip": "192.168.1.50"
}

# Obtener sesión
curl http://localhost:8080/api/sesiones/a1b2c3d4-e5f6/1705334400

# Actualizar estado
curl -X PUT http://localhost:8080/api/sesiones/a1b2c3d4-e5f6/1705334400/estado \\
  -H "Content-Type: application/json" \\
  -d '{"estado": "expirada"}'

# Obtener todas las sesiones de usuario
curl http://localhost:8080/api/sesiones/usuario/user-001

# Borrar sesión
curl -X DELETE http://localhost:8080/api/sesiones/a1b2c3d4-e5f6/1705334400`}
          </CodeBlock>

          <h3>Paso 10: Verificar en AWS Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>DynamoDB → Tables → GuttmanSesiones</strong></li>
            <li>Click en <strong>Explore table items</strong></li>
            <li>Deberías ver los items insertados desde Java</li>
            <li>Ir a <strong>Metrics</strong> para ver:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Read capacity consumed</li>
                <li>Write capacity consumed</li>
                <li>Latencia promedio</li>
              </ul>
            </li>
            <li>Ir a <strong>CloudWatch</strong> y verificar métricas de ConsumedWriteCapacityUnits y ConsumedReadCapacityUnits</li>
          </ol>

          <h3>Observaciones de Rendimiento</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Monitorizar desde aplicación Java:
          </p>
          <CodeBlock language="java" title="Monitoreo de rendimiento">
{`@Component
public class DynamoDBMetrics {

  @Autowired
  private CloudWatchClient cloudWatch;

  public void publicarLatencia(long ms) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("DynamoDBQueryLatency")
      .value((double) ms)
      .unit(StandardUnit.MILLISECONDS)
      .timestamp(Instant.now())
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/DynamoDB")
      .metricData(datum)
    );
  }
}`}
          </CodeBlock>

          <InfoBox type="success" title="✅ Completado">
            Has creado una tabla DynamoDB completamente funcional con:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>Operaciones CRUD desde Java (Create, Read, Update, Delete)</li>
              <li>Índice Global Secundario para búsquedas por usuarioId</li>
              <li>REST API con Spring Boot</li>
              <li>Tests de integración</li>
              <li>Monitoreo en CloudWatch</li>
            </ul>
          </InfoBox>

          <h3>Próximos Pasos Reales</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Cambiar a modo <strong>Provisioned Capacity</strong> si el tráfico es predecible</li>
            <li>Implementar <strong>TTL</strong> para borrado automático de sesiones expiradas</li>
            <li>Agregar <strong>transacciones</strong> si necesitas actualizar múltiples items atómicamente</li>
            <li>Configurar <strong>DynamoDB Streams</strong> para reaccionar a cambios en tiempo real</li>
            <li>Usar <strong>Point-in-time recovery</strong> para backups automáticos</li>
            <li>Agregar <strong>Lambda triggers</strong> para lógica automática en cambios de datos</li>
          </ul>
        </>
      )
    },

    {
      title: 'Caso Práctico: MobileGameStudio',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            ¿Quieres ver cómo un estudio de juegos móviles (MobileGameStudio) soportó 1M jugadores concurrentes con DynamoDB y leaderboards en tiempo real?
          </p>
          <div style={{
            backgroundColor: '#e8f4f8',
            border: '2px solid #0066cc',
            borderRadius: '8px',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <a href="/aws/casos-reales/dynamodb" style={{
              display: 'inline-block',
              backgroundColor: '#0066cc',
              color: '#ffffff',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}>
              Ver Caso Real: MobileGameStudio
            </a>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="DynamoDB — Base de Datos NoSQL Serverless"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
