import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealDynamoDB = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>🎮 Caso Real: MobileGameStudio - Juego Multiplayer Masivo</h1>
        <p className="lesson-intro">
          Cómo una startup de juegos escaló de 100K a 1M usuarios simultáneos migrando de RDS a DynamoDB
        </p>
      </div>

      <section className="lesson-section">
        <h2>🚨 El Problema</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>MobileGameStudio</strong> creó un juego mobile tipo "battle royale" que se volvió viral.
            Comenzaron con RDS PostgreSQL (estándar para la mayoría de apps).
            Escaló rápidamente... demasiado rápidamente para SQL.
          </p>
        </div>

        <h3>La Crisis de Rendimiento</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Mes 1:</strong> 100K jugadores simultáneos → RDS db.r6i.xlarge funcionaba perfecto</li>
          <li><strong>Mes 2:</strong> 300K jugadores → queries se ralentizan (500ms latencia)</li>
          <li><strong>Mes 3:</strong> 500K jugadores → timeout en 5% de requests, leaderboards tardaban 10 segundos</li>
          <li><strong>Mes 4:</strong> 800K jugadores → escalar RDS a db.r6i.3xlarge = $8K/mes extra</li>
          <li><strong>Mes 5:</strong> 1M jugadores → RDS al 99% CPU, queries competían por recursos</li>
          <li><strong>Crisis:</strong> El problema: SQL NO es bueno para juegos con millones de jugadores simultáneos</li>
        </ul>

        <div style={{ backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 El Cuello de Botella</h4>
          <p><strong>Las queries SQL no escalan con millones de jugadores</strong></p>
          <ul>
            <li>❌ Leaderboard query: "SELECT * FROM players ORDER BY score LIMIT 100" = scan de tabla completa (1M filas)</li>
            <li>❌ Player stats: 10,000 consultas simultáneas → RDS bottleneck</li>
            <li>❌ Actualizaciones de score: competencia de locks en PostgreSQL</li>
            <li>❌ Latencia: 500ms cuando necesitas 100ms para juego smooth</li>
            <li>❌ Escalado manual: cada 100K jugadores = comprar instancia más grande (lento, caro)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: DynamoDB con Partition Keys</h2>

        <h3>Por Qué DynamoDB y No RDS</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>RDS PostgreSQL</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>DynamoDB</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Latencia (P99)</strong></td>
              <td style={{ padding: '1rem' }}>100-500ms (dependiente de carga)</td>
              <td style={{ padding: '1rem' }}>5-10ms garantizado</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Leaderboard query</strong></td>
              <td style={{ padding: '1rem' }}>10 segundos (scan + sort)</td>
              <td style={{ padding: '1rem' }}>50ms (GSI + sorted)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Escalabilidad</strong></td>
              <td style={{ padding: '1rem' }}>Manual (comprar instancia mayor)</td>
              <td style={{ padding: '1rem' }}>Automática (pay-per-use)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Throughput para 1M usuarios</strong></td>
              <td style={{ padding: '1rem' }}>db.r6i.4xlarge + replica = $25K/mes</td>
              <td style={{ padding: '1rem' }}>On-demand = $8K/mes (o $3K reservado)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Almacenamiento ilimitado</strong></td>
              <td style={{ padding: '1rem' }}>Sí, pero latencia degrada</td>
              <td style={{ padding: '1rem' }}>Sí, latencia constante</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Modelo de datos</strong></td>
              <td style={{ padding: '1rem' }}>Relacional (joins complejos)</td>
              <td style={{ padding: '1rem' }}>NoSQL (desnormalizado)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><strong>Global Secondary Index</strong></td>
              <td style={{ padding: '1rem' }}>Posible pero lento (full scan)</td>
              <td style={{ padding: '1rem' }}>Nativo, millisegundos</td>
            </tr>
          </tbody>
        </table>

        <h3>Arquitectura DynamoDB</h3>
        <CodeBlock language="text" title="MobileGame DynamoDB Architecture" code={`┌─────────────────────────────────────────────────────────┐
│   Mobile Game Client (1M simultáneos)                 │
│   • Updates score cuando mata enemigos                │
│   • Quiere ver su ranking global                      │
│   • Ver amigos en leaderboard                         │
└──────────────────┬──────────────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
    ┌───▼──────┐         ┌───▼──────┐
    │ API GW   │         │ WebSocket│
    │ (stats)  │         │ (live)   │
    └───┬──────┘         └───┬──────┘
        │                     │
        └──────────┬──────────┘
                   │
      ┌────────────▼────────────┐
      │  DynamoDB Tables        │
      │                         │
      │  1. Players Table       │
      │  2. GameSessions Table  │
      │  3. Leaderboards Table  │
      │  4. Friendships Table   │
      └─────────────────────────┘
`} />

        <h3>Diseño de Tablas DynamoDB</h3>
        <CodeBlock language="json" title="DynamoDB Tables Schema" code={`{
  "PlayersTable": {
    "TableName": "players",
    "KeySchema": [
      {
        "AttributeName": "user_id",
        "KeyType": "HASH"
      }
    ],
    "AttributeDefinitions": [
      {
        "AttributeName": "user_id",
        "AttributeType": "S"
      },
      {
        "AttributeName": "region",
        "AttributeType": "S"
      },
      {
        "AttributeName": "score",
        "AttributeType": "N"
      }
    ],
    "BillingMode": "PAY_PER_REQUEST",
    "GlobalSecondaryIndexes": [
      {
        "IndexName": "region-score-index",
        "KeySchema": [
          {
            "AttributeName": "region",
            "KeyType": "HASH"
          },
          {
            "AttributeName": "score",
            "KeyType": "RANGE"
          }
        ],
        "Projection": {
          "ProjectionType": "ALL"
        }
      }
    ]
  },
  "LeaderboardTable": {
    "TableName": "leaderboards",
    "KeySchema": [
      {
        "AttributeName": "leaderboard_id",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "rank",
        "KeyType": "RANGE"
      }
    ],
    "AttributeDefinitions": [
      {
        "AttributeName": "leaderboard_id",
        "AttributeType": "S"
      },
      {
        "AttributeName": "rank",
        "AttributeType": "N"
      }
    ],
    "BillingMode": "PAY_PER_REQUEST",
    "StreamSpecification": {
      "StreamViewType": "NEW_AND_OLD_IMAGES"
    }
  },
  "GameSessionsTable": {
    "TableName": "game_sessions",
    "KeySchema": [
      {
        "AttributeName": "session_id",
        "KeyType": "HASH"
      },
      {
        "AttributeName": "timestamp",
        "KeyType": "RANGE"
      }
    ],
    "TimeToLiveSpecification": {
      "AttributeName": "expires_at",
      "Enabled": true
    }
  }
}`} />

        <h3>Estrategia de Partition Keys</h3>
        <CodeBlock language="text" title="DynamoDB Partition Key Strategy" code={`Problema: DynamoDB distribuye datos por PARTITION KEY.
Si partition key es mala, algunos shards se sobrecargan.

Ejemplo MALO:
  KeySchema: [region_id, rank]
  Problema: Todos en region "US" → una sola partición abrumada
  Resultado: Throttling para jugadores USA

Ejemplo BUENO:
  KeySchema: [user_id, sort_key]
  Ventaja: Cada usuario en partición diferente
  Resultado: Distribución pareja de carga

Para Leaderboards (el caso complicado):
  Problema: Todos quieren ver top 100 del mundo
           "¿Quién es #1 globalmente?" = una sola query

  Solución 1: Sort por timestamp de actualizaciones
  Solución 2: Usar DynamoDB Stream + actualizar tabla separada
  Solución 3: Caché en ElastiCache (leaderboard actualiza cada 5 min)

Implementación MobileGameStudio:
  - Table: leaderboards
    - PK: "leaderboard#global" (string constante)
    - SK: "score#999999#timestamp" (score descendente)

  - Query: "¿Top 100?" → Query GSI con limit 100
    - "leaderboard#global" en región específica
    - Retorna top 100 en 50ms

  - Update: Cuando jugador mata enemigo
    - Update players table: user_id → incrementar score
    - Update leaderboards via Lambda: recalcular posición
    - Cache en Redis: top 100 se actualiza cada 2 min

Resultado: P99 latencia = 5-10ms (vs 500ms en RDS)
`} />
      </section>

      <section className="lesson-section">
        <h2>🔧 Implementación: API en Java + DynamoDB</h2>

        <h3>Service para Actualizar Score del Jugador</h3>
        <CodeBlock language="java" title="Player Score Update Service" code={`import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.*;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Service
public class PlayerScoreService {

  @Autowired
  private DynamoDbClient dynamoDb;

  @Autowired
  private LeaderboardService leaderboardService;

  /**
   * Actualizar score cuando jugador mata enemigo
   * Latencia esperada: 5-10ms
   */
  public void addScore(String userId, int points, String region) {
    // Usar UpdateItem en lugar de GetItem + PutItem
    // Atomic operation = más rápido

    Map<String, AttributeValue> key = new HashMap<>();
    key.put("user_id", AttributeValue.builder().s(userId).build());

    Map<String, AttributeValueUpdate> updates = new HashMap<>();

    // Incrementar score (atómico)
    updates.put("score", AttributeValueUpdate.builder()
        .action(AttributeAction.ADD)
        .value(AttributeValue.builder().n(String.valueOf(points)).build())
        .build());

    // Actualizar timestamp
    updates.put("last_updated", AttributeValueUpdate.builder()
        .action(AttributeAction.PUT)
        .value(AttributeValue.builder().n(String.valueOf(Instant.now().getEpochSecond())).build())
        .build());

    // Actualizar región (para GSI)
    updates.put("region", AttributeValueUpdate.builder()
        .action(AttributeAction.PUT)
        .value(AttributeValue.builder().s(region).build())
        .build());

    try {
      UpdateItemRequest request = UpdateItemRequest.builder()
          .tableName("players")
          .key(key)
          .attributeUpdates(updates)
          .returnValues(ReturnValue.ALL_NEW)
          .build();

      UpdateItemResponse response = dynamoDb.updateItem(request);

      // Publicar evento para actualizar leaderboard
      Integer newScore = Integer.parseInt(
        response.attributes().get("score").n()
      );

      leaderboardService.updateLeaderboardAsync(userId, newScore, region);

    } catch (DynamoDbException e) {
      System.err.println("Error updating score: " + e.awsErrorDetails());
      throw e;
    }
  }
`} />

        <h3>Service para Leaderboard (con GSI)</h3>
        <CodeBlock language="java" title="Leaderboard Query Service" code={`@Service
public class LeaderboardService {

  @Autowired
  private DynamoDbClient dynamoDb;

  @Autowired
  private RedisTemplate<String, String> redis;

  /**
   * Obtener top 100 jugadores de una región
   * Latencia esperada: 50ms (incluye network)
   * Pero con Redis cache: <5ms en 90% de casos
   */
  public List<PlayerRanking> getTopPlayers(String region, int limit) {
    // 1. Intentar obtener del cache (Redis)
    String cacheKey = "leaderboard:" + region + ":top" + limit;
    String cached = redis.opsForValue().get(cacheKey);
    if (cached != null) {
      return parseLeaderboard(cached); // <5ms
    }

    // 2. Si no está en cache, query DynamoDB
    QueryRequest request = QueryRequest.builder()
        .tableName("players")
        .indexName("region-score-index") // GSI
        .keyConditionExpression("region = :region")
        .expressionAttributeValues(Map.of(
            ":region", AttributeValue.builder().s(region).build()
        ))
        .scanIndexForward(false) // Descendente (highest score primero)
        .limit(limit)
        .projectionExpression("user_id,username,score,level")
        .build();

    try {
      QueryResponse response = dynamoDb.query(request);

      List<PlayerRanking> rankings = response.items().stream()
          .map(item -> new PlayerRanking(
              item.get("user_id").s(),
              item.get("username").s(),
              Integer.parseInt(item.get("score").n()),
              Integer.parseInt(item.get("level").n())
          ))
          .collect(Collectors.toList());

      // Guardar en cache por 5 minutos
      String json = ObjectMapper.writeValueAsString(rankings);
      redis.opsForValue().set(cacheKey, json, Duration.ofMinutes(5));

      return rankings;

    } catch (DynamoDbException e) {
      System.err.println("Error querying leaderboard: " + e.awsErrorDetails());
      throw e;
    }
  }

  /**
   * Actualizar leaderboard cuando jugador sube de puntuación
   * Se ejecuta asincronamente (no bloquea el juego)
   */
  @Async
  public void updateLeaderboardAsync(String userId, int newScore, String region) {
    // Invalidar cache
    redis.delete("leaderboard:" + region + ":top*");

    // Actualizar tabla de leaderboards
    updateLeaderboardTable(userId, newScore, region);
  }

  private void updateLeaderboardTable(String userId, int newScore, String region) {
    // Tabla separada: leaderboard_id -> lista ordenada por score
    // Usando formato: "rank#1", "rank#2", etc. como sort key

    String leaderboardId = "global#" + region;

    // 1. Encontrar rank actual del jugador
    int currentRank = findPlayerRank(userId, leaderboardId);

    // 2. Encontrar nueva posición (binary search en scores)
    int newRank = findNewRank(newScore, region);

    if (currentRank != newRank) {
      // 3. Mover jugador en tabla leaderboards
      movePlayerInLeaderboard(userId, leaderboardId, currentRank, newRank);

      // 4. Notificar a amigos vía WebSocket (jugador subió posición)
      notifyFriendsOfRankChange(userId, newRank, region);
    }
  }
`} />

        <h3>Configuración con Terraform</h3>
        <CodeBlock language="hcl" title="DynamoDB Infrastructure as Code" code={`resource "aws_dynamodb_table" "players" {
  name           = "players"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "user_id"
  stream_specification {
    stream_view_type = "NEW_AND_OLD_IMAGES"
  }

  attribute {
    name = "user_id"
    type = "S"
  }

  attribute {
    name = "region"
    type = "S"
  }

  attribute {
    name = "score"
    type = "N"
  }

  # Global Secondary Index para queries por región + score
  global_secondary_index {
    name            = "region-score-index"
    hash_key        = "region"
    range_key       = "score"
    projection_type = "ALL"
  }

  ttl {
    attribute_name = "expires_at"
    enabled        = true
  }

  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Name    = "MobileGame-Players"
    Env     = "production"
  }
}

resource "aws_dynamodb_table" "leaderboards" {
  name           = "leaderboards"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "leaderboard_id"
  range_key      = "rank"

  attribute {
    name = "leaderboard_id"
    type = "S"
  }

  attribute {
    name = "rank"
    type = "N"
  }

  stream_specification {
    stream_view_type = "NEW_AND_OLD_IMAGES"
  }

  point_in_time_recovery {
    enabled = true
  }
}

# Auto-scaling para DynamoDB (si usaran provisioned mode)
resource "aws_dynamodb_table_autoscaling" "players_scaling" {
  table_name = aws_dynamodb_table.players.name

  read_capacity_autoscaling {
    min_capacity       = 100
    max_capacity       = 40000
    target_utilization = 70.0
  }

  write_capacity_autoscaling {
    min_capacity       = 100
    max_capacity       = 40000
    target_utilization = 70.0
  }
}
`} />
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados: Antes vs Después</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (RDS PostgreSQL)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>🐢 <strong>Latencia P99:</strong> 500ms</li>
              <li>😠 <strong>Leaderboard:</strong> 10 segundos (timeout)</li>
              <li>❌ <strong>Throttling:</strong> 5% requests rechazados en pico</li>
              <li>💰 <strong>Costo:</strong> $25K/mes (db.r6i.4xlarge + replica)</li>
              <li>😫 <strong>Escalado:</strong> Manual, esperar horas</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (DynamoDB)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⚡ <strong>Latencia P99:</strong> 5-10ms</li>
              <li>😊 <strong>Leaderboard:</strong> 50ms (instantáneo)</li>
              <li>✅ <strong>Throughput:</strong> 99.99% requests exitosos</li>
              <li>💰 <strong>Costo:</strong> $8K/mes on-demand, $3K reservado</li>
              <li>🎉 <strong>Escalado:</strong> Automático, instantáneo</li>
            </ul>
          </div>
        </div>

        <h3>Métricas de Rendimiento (1M jugadores simultáneos)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Métrica</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>RDS</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>DynamoDB</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Mejora</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Latencia P99</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>500ms</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>8ms</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>62x más rápido</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Latencia Leaderboard</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>10s (timeout)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50ms</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>200x más rápido</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Success rate en pico</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>95% (throttling)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.99%</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+4.99 puntos</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo mensual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$25K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$8K</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-68% ($17K ahorrado)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo por 1M requests</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>~$2.50</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>~$0.25</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>10x más barato</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Escalado manual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Cada 100K jugadores</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Nunca (automático)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>0 intervenciones</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Frustraciones de usuarios</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>"¿Por qué tardas tanto?"</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Ninguna (50ms)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Usuarios felices</td>
            </tr>
          </tbody>
        </table>

        <h3>Impacto en el Negocio</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>KPI Negocio</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Antes</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Después</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Impacto</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Usuarios simultáneos</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>500K (máximo)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>1M+ sin problemas</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>2x capacidad</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Churn rate (abandono)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>25% (lag)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>8% (smooth gameplay)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-17 puntos</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>DAU (Daily Active Users)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>200K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>520K</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+160% 🚀</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>In-game revenue (ARPU)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$2.50/usuario/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$4.80/usuario/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+92%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ingresos mensuales</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$500K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$2.5M</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+400% 🚀</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Costo infraestructura</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$25K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$8K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-$17K (-68%)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>🎓 Lecciones Aprendidas</h2>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>1. SQL no es para juegos masivos</h4>
          <p>
            Juegos con millones de usuarios simultáneos necesitan NoSQL. Las queries complejas del mundo relacional
            (joins, GROUP BY, ORDER BY globales) matan latencia. DynamoDB es hecho para esto.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>2. Partition Key es crítica</h4>
          <p>
            Una mala partition key = algunos shards sobrecargados (hotspots). MobileGameStudio usó user_id como PK,
            distribuyendo uniformemente. Para leaderboards, usaron región + score en GSI. Buenas decisiones = escalabilidad.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>3. Global Secondary Index = el superpower de DynamoDB</h4>
          <p>
            GSI permite queries "diferentes" a la clave primaria sin degradación de performance.
            Leaderboard query: "Dame top 100 de región USA por score" = 50ms, no 10 segundos.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>4. Desnormalización = feature, no bug</h4>
          <p>
            En SQL evitas duplicar datos. En NoSQL lo haces a propósito. Ejemplo: Username + Score en múltiples tablas.
            Más espacio, pero queries 100x más rápidas. MobileGameStudio duplicó intencionalmente para eliminar joins.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>5. PAY_PER_REQUEST ≥ PROVISIONED para startups</h4>
          <p>
            DynamoDB tiene dos modos: Provisioned (paga mínimo) vs On-Demand (paga por uso).
            MobileGameStudio usó On-Demand. Costo sube/baja automáticamente con usuarios. Con Provisioned
            hubieran pagado $25K/mes de todas formas (necesitan capacidad máxima garantizada).
          </p>
        </div>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Conclusión</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <strong>DynamoDB fue transformacional para MobileGameStudio</strong> porque:
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ <strong>Latencia garantizada:</strong> 5-10ms P99, sin importar escala</li>
          <li>✅ <strong>Escalabilidad automática:</strong> De 100K a 1M+ usuarios sin intervención</li>
          <li>✅ <strong>Mejor experiencia usuario:</strong> Churn -68%, revenue +400%</li>
          <li>✅ <strong>Costos predecibles:</strong> Pay-per-request, no pagan por capacidad ociosa</li>
          <li>✅ <strong>Simplicidad operacional:</strong> AWS maneja sharding, replicación, failover</li>
        </ul>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          La migración de RDS a DynamoDB no fue solo técnica. Fue transformacional para el negocio.
          El resultado: de una startup que perdía usuarios en picos a una que generaba $2.5M/mes.
          Y curiosamente, gastaban menos en infraestructura. Win-win.
        </p>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/aws/servicios/dynamodb" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#333',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s',
            border: '2px solid #ddd'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'} onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}>
            ← Volver a DynamoDB
          </a>
          <a href="/aws/casos-reales/ec2" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0066cc',
            color: '#ffffff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#0052a3'} onMouseOut={(e) => e.target.style.backgroundColor = '#0066cc'}>
            Volver al inicio (EC2) →
          </a>
        </div>
      </section>
    </div>
  );
};
