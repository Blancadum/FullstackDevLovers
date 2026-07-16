import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSJava() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'AWS SDK v2 para Java',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El <strong>AWS SDK v2 para Java</strong> es la forma oficial de interactuar con servicios AWS desde Java. Es moderno, no bloqueante y completamente integrable con Spring Boot.
          </p>

          <CodeBlock
            code={`<!-- pom.xml - Agregar dependencias AWS SDK v2 -->

<properties>
  <aws.sdk.version>2.25.0</aws.sdk.version>
</properties>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>software.amazon.awssdk</groupId>
      <artifactId>bom</artifactId>
      <version>\${aws.sdk.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <!-- S3 -->
  <dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
  </dependency>

  <!-- RDS / JDBC -->
  <dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>rds</artifactId>
  </dependency>

  <!-- DynamoDB -->
  <dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>dynamodb</artifactId>
  </dependency>

  <!-- DynamoDB Enhanced Client (más idiomático para Java) -->
  <dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>dynamodb-enhanced</artifactId>
  </dependency>

  <!-- CloudWatch -->
  <dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>cloudwatch</artifactId>
  </dependency>

  <!-- Secrets Manager -->
  <dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>secretsmanager</artifactId>
  </dependency>

  <!-- Spring Boot AWS -->
  <dependency>
    <groupId>io.awspring.cloud</groupId>
    <artifactId>spring-cloud-aws-starter</artifactId>
    <version>3.0.0</version>
  </dependency>

  <dependency>
    <groupId>io.awspring.cloud</groupId>
    <artifactId>spring-cloud-aws-starter-s3</artifactId>
    <version>3.0.0</version>
  </dependency>
</dependencies>`}
            language="xml"
            title="Dependencias Maven para AWS"
          />

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>SDK v2 vs SDK v1</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>v2 (actual):</strong> Moderno, async, completamente renovado, no bloqueante</li>
              <li><strong>v1 (legacy):</strong> Antiguo, síncrono, no se recomienda para nuevos proyectos</li>
              <li><strong>Diferencia clave:</strong> v2 usa builders y interfaces funcionales</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Configuración de Credenciales',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            AWS SDK v2 busca credenciales automáticamente en este orden de prioridad:
          </p>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <ol style={{ fontSize: '0.95rem', lineHeight: '2', marginBottom: 0 }}>
              <li><strong>Variables de entorno:</strong> AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY</li>
              <li><strong>Archivo ~/.aws/credentials:</strong> [default] profile</li>
              <li><strong>Archivo ~/.aws/config:</strong> Configuración regional</li>
              <li><strong>Rol IAM de instancia EC2:</strong> Automático si corre en EC2 (recomendado)</li>
              <li><strong>Contenedor de credenciales (ECS):</strong> Para tasks ECS</li>
              <li><strong>Rol de tarea Lambda:</strong> Automático en Lambda</li>
            </ol>
          </div>

          <CodeBlock
            code={`# 1. Setup local para desarrollo
# ~/.aws/credentials
[default]
aws_access_key_id = AKIAIOSFODNN7EXAMPLE
aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

# ~/.aws/config
[default]
region = eu-west-1
output = json

# 2. Variables de entorno (producción)
export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export AWS_REGION="eu-west-1"

# 3. En Spring Boot (application.properties)
aws.region = eu-west-1
# Las credenciales se buscan automáticamente

# 4. En EC2 (la forma correcta, SIN credenciales en el código)
# Asignar rol IAM a la instancia EC2
# El SDK las obtiene automáticamente del metadata service
# ✅ Seguro, no hay credenciales en el código
# ✅ Automático, se renuevan sin intervención`}
            language="bash"
            title="Configuración de credenciales AWS"
          />

          <InfoBox type="security" title="🔒 Seguridad">
            <strong>NUNCA hardcodees credenciales en el código.</strong>
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>✅ Usa variables de entorno</li>
              <li>✅ Usa roles IAM en EC2/Lambda</li>
              <li>✅ Usa AWS Secrets Manager para secretos</li>
              <li>❌ No pongas access keys en application.properties</li>
              <li>❌ No las commits en Git</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Clientes AWS en Spring Boot',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Configura clientes AWS como beans de Spring para inyectarlos en tus servicios:
          </p>

          <CodeBlock
            code={`// AWSConfig.java - Configuración centralizada de clientes AWS

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.rds.RdsClient;
import software.amazon.awssdk.services.cloudwatch.CloudWatchClient;
import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient;

@Configuration
public class AWSConfig {

  // S3
  @Bean
  public S3Client s3Client() {
    return S3Client.builder()
      .region(Region.EU_WEST_1)
      .build();
  }

  // DynamoDB
  @Bean
  public DynamoDbClient dynamoDbClient() {
    return DynamoDbClient.builder()
      .region(Region.EU_WEST_1)
      .build();
  }

  // DynamoDB Enhanced (para usar con beans)
  @Bean
  public DynamoDbEnhancedClient dynamoDbEnhancedClient(DynamoDbClient dynamoDb) {
    return DynamoDbEnhancedClient.builder()
      .dynamoDbClient(dynamoDb)
      .build();
  }

  // CloudWatch
  @Bean
  public CloudWatchClient cloudWatchClient() {
    return CloudWatchClient.builder()
      .region(Region.EU_WEST_1)
      .build();
  }

  // Secrets Manager
  @Bean
  public SecretsManagerClient secretsManagerClient() {
    return SecretsManagerClient.builder()
      .region(Region.EU_WEST_1)
      .build();
  }
}

// ============================================
// Uso en un servicio

@Service
public class DocumentoService {

  private final S3Client s3Client;
  private final CloudWatchClient cloudWatch;

  public DocumentoService(S3Client s3Client, CloudWatchClient cloudWatch) {
    this.s3Client = s3Client;
    this.cloudWatch = cloudWatch;
  }

  public void subirDocumento(String bucket, String key, byte[] contenido) {
    // Subir a S3
    PutObjectRequest request = PutObjectRequest.builder()
      .bucket(bucket)
      .key(key)
      .contentType("application/pdf")
      .build();

    s3Client.putObject(request, RequestBody.fromBytes(contenido));

    // Registrar métrica
    MetricDatum datum = MetricDatum.builder()
      .metricName("DocumentosSubidos")
      .value(1.0)
      .unit(StandardUnit.COUNT)
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/App")
      .metricData(datum)
    );
  }
}`}
            language="java"
            title="Configuración de clientes AWS"
          />
        </>
      )
    },

    {
      title: 'S3 con Spring Boot',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Trabajar con S3 es simple: crear buckets, subir archivos, generar URLs prefirmadas.
          </p>

          <CodeBlock
            code={`// S3Service.java - Servicio para operaciones S3

@Service
public class S3Service {

  private final S3Client s3Client;
  private final S3Presigner presigner;

  public S3Service(S3Client s3Client) {
    this.s3Client = s3Client;
    this.presigner = S3Presigner.builder()
      .region(Region.EU_WEST_1)
      .build();
  }

  // 1. Subir archivo
  public void subirArchivo(String bucket, String key, File file) {
    PutObjectRequest request = PutObjectRequest.builder()
      .bucket(bucket)
      .key(key)
      .build();

    s3Client.putObject(request, RequestBody.fromFile(file));
  }

  // 2. Descargar archivo
  public byte[] descargarArchivo(String bucket, String key) {
    GetObjectRequest request = GetObjectRequest.builder()
      .bucket(bucket)
      .key(key)
      .build();

    ResponseInputStream<GetObjectResponse> response = s3Client.getObject(request);
    return response.readAllBytes();
  }

  // 3. Generar URL prefirmada (acceso temporal sin credenciales)
  public String generarUrlTemporal(String bucket, String key, int minutosExpiracion) {
    GetObjectRequest getObjectRequest = GetObjectRequest.builder()
      .bucket(bucket)
      .key(key)
      .build();

    PresignedGetObjectRequest presignedRequest = presigner.presignGetObject(r -> r
      .signatureDuration(Duration.ofMinutes(minutosExpiracion))
      .getObjectRequest(getObjectRequest)
    );

    return presignedRequest.url().toString();
  }

  // 4. Listar objetos en bucket
  public List<String> listarArchivos(String bucket) {
    ListObjectsV2Request request = ListObjectsV2Request.builder()
      .bucket(bucket)
      .build();

    ListObjectsV2Response response = s3Client.listObjectsV2(request);

    return response.contents().stream()
      .map(S3Object::key)
      .collect(Collectors.toList());
  }

  // 5. Borrar archivo
  public void borrarArchivo(String bucket, String key) {
    DeleteObjectRequest request = DeleteObjectRequest.builder()
      .bucket(bucket)
      .key(key)
      .build();

    s3Client.deleteObject(request);
  }
}

// ============================================
// Controlador REST para subida

@RestController
@RequestMapping("/api/documentos")
public class DocumentoController {

  private final S3Service s3Service;

  @PostMapping("/subir")
  public ResponseEntity<String> subirDocumento(
      @RequestParam("archivo") MultipartFile file) {
    try {
      String key = "documentos/" + file.getOriginalFilename();
      s3Service.subirArchivo("guttman-docs", key, file.getResource().getFile());
      return ResponseEntity.ok("Archivo subido: " + key);
    } catch (Exception e) {
      return ResponseEntity.status(500).body("Error: " + e.getMessage());
    }
  }

  @GetMapping("/descargar")
  public ResponseEntity<byte[]> descargarDocumento(@RequestParam String key) {
    byte[] contenido = s3Service.descargarArchivo("guttman-docs", key);
    return ResponseEntity.ok()
      .header("Content-Type", "application/pdf")
      .header("Content-Disposition", "attachment; filename=documento.pdf")
      .body(contenido);
  }

  @GetMapping("/url-temporal")
  public ResponseEntity<String> obtenerUrlTemporal(@RequestParam String key) {
    String url = s3Service.generarUrlTemporal("guttman-docs", key, 15);
    return ResponseEntity.ok(url);
  }
}`}
            language="java"
            title="Operaciones S3 con Spring Boot"
          />
        </>
      )
    },

    {
      title: 'RDS + Spring Boot + JPA',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Spring Boot integra perfectamente con RDS via Spring Data JPA. La configuración es simple:
          </p>

          <CodeBlock
            code={`# application.properties - Configuración RDS

spring.datasource.url=jdbc:postgresql://guttman-db.abc123.eu-west-1.rds.amazonaws.com:5432/guttman
spring.datasource.username=admin
spring.datasource.password=\${DB_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver

# Pool de conexiones
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=2
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.idle-timeout=600000
spring.datasource.hikari.max-lifetime=1800000

# JPA / Hibernate
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL15Dialect
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.jdbc.batch_size=20
spring.jpa.properties.hibernate.jdbc.fetch_size=50

# Logs de SQL (desarrollo solo)
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE`}
            language="properties"
            title="Configuración RDS en Spring Boot"
          />

          <CodeBlock
            code={`// Entidad JPA

@Entity
@Table(name = "informes")
public class Informe {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String titulo;

  @Column(columnDefinition = "TEXT")
  private String contenido;

  @Column(name = "fecha_creacion")
  @CreationTimestamp
  private LocalDateTime fechaCreacion;

  @Column(name = "usuario_id", nullable = false)
  private Long usuarioId;

  // getters y setters...
}

// ============================================
// Repository

@Repository
public interface InformeRepository extends JpaRepository<Informe, Long> {

  // Queries automáticas
  List<Informe> findByUsuarioId(Long usuarioId);

  List<Informe> findByTituloContainingIgnoreCase(String titulo);

  // Query personalizada
  @Query("SELECT i FROM Informe i WHERE i.usuarioId = :usuarioId AND i.fechaCreacion >= :fecha")
  List<Informe> buscarInformesRecientes(
      @Param("usuarioId") Long usuarioId,
      @Param("fecha") LocalDateTime fecha);
}

// ============================================
// Servicio

@Service
public class InformeService {

  private final InformeRepository repository;

  @Transactional
  public Informe crearInforme(String titulo, String contenido, Long usuarioId) {
    Informe informe = new Informe();
    informe.setTitulo(titulo);
    informe.setContenido(contenido);
    informe.setUsuarioId(usuarioId);
    return repository.save(informe);
  }

  @Transactional(readOnly = true)
  public List<Informe> obtenerInformes(Long usuarioId) {
    return repository.findByUsuarioId(usuarioId);
  }

  @Transactional
  public void actualizarInforme(Long id, String nuevoContenido) {
    Informe informe = repository.findById(id)
      .orElseThrow(() -> new RuntimeException("Informe no encontrado"));
    informe.setContenido(nuevoContenido);
    repository.save(informe);
  }
}`}
            language="java"
            title="JPA + Spring Data con RDS"
          />
        </>
      )
    },

    {
      title: 'DynamoDB con Spring Boot',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El Enhanced Client de DynamoDB es mucho más idiomático para Java que el cliente base:
          </p>

          <CodeBlock
            code={`// Entidad DynamoDB

@DynamoDbBean
public class Sesion {

  private String sesionId;
  private long timestamp;
  private String usuarioId;
  private String estado;
  private int duracionSegundos;
  private long ultimoAcceso;

  @DynamoDbPartitionKey
  public String getSesionId() { return sesionId; }
  public void setSesionId(String sesionId) { this.sesionId = sesionId; }

  @DynamoDbSortKey
  public long getTimestamp() { return timestamp; }
  public void setTimestamp(long timestamp) { this.timestamp = timestamp; }

  @DynamoDbAttribute
  public String getUsuarioId() { return usuarioId; }
  public void setUsuarioId(String usuarioId) { this.usuarioId = usuarioId; }

  @DynamoDbAttribute("estado")
  public String getEstado() { return estado; }
  public void setEstado(String estado) { this.estado = estado; }

  // Más getters y setters...
}

// ============================================
// Servicio DynamoDB

@Service
public class SesionService {

  private final DynamoDbTable<Sesion> sesionesTable;

  public SesionService(DynamoDbEnhancedClient dynamoDb) {
    this.sesionesTable = dynamoDb.table(
      "GuttmanSesiones",
      TableSchema.fromBean(Sesion.class)
    );
  }

  // Crear sesión
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

  // Actualizar
  public void actualizarSesion(String sesionId, long timestamp, String nuevoEstado) {
    Sesion sesion = obtenerSesion(sesionId, timestamp);
    if (sesion != null) {
      sesion.setEstado(nuevoEstado);
      sesion.setUltimoAcceso(System.currentTimeMillis());
      sesionesTable.updateItem(sesion);
    }
  }

  // Consulta por GSI (usuarioId)
  public List<Sesion> obtenerSesionesPorUsuario(String usuarioId) {
    return sesionesTable
      .query(QueryConditional.keyEqualTo(
        Key.builder().partitionValue(usuarioId).build()
      ))
      .stream()
      .flatMap(p -> p.items().stream())
      .collect(Collectors.toList());
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
}`}
            language="java"
            title="DynamoDB con Enhanced Client"
          />

          <InfoBox type="tip" title="💡 Tip">
            <strong>Evita usar repositories tradicionales con DynamoDB.</strong> El Enhanced Client es más simple y directo. Para algo más complejo, considera mantener datos críticos en RDS y datos cálidos en DynamoDB.
          </InfoBox>
        </>
      )
    },

    {
      title: 'CloudWatch Metrics desde Java',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Publica métricas personalizadas de tu aplicación Java a CloudWatch:
          </p>

          <CodeBlock
            code={`// MetricasService.java - Publicar métricas personalizadas

@Service
public class MetricasService {

  private final CloudWatchClient cloudWatch;
  private static final String NAMESPACE = "Guttman/Aplicacion";

  public MetricasService(CloudWatchClient cloudWatch) {
    this.cloudWatch = cloudWatch;
  }

  // Método genérico para publicar métricas
  private void publicarMetrica(String nombreMetrica, double valor,
                                StandardUnit unidad, Map<String, String> dimensiones) {
    MetricDatum.Builder datumBuilder = MetricDatum.builder()
      .metricName(nombreMetrica)
      .value(valor)
      .unit(unidad)
      .timestamp(Instant.now());

    // Agregar dimensiones
    if (dimensiones != null) {
      dimensiones.forEach((key, value) ->
        datumBuilder.dimensions(Dimension.builder()
          .name(key)
          .value(value)
          .build())
      );
    }

    cloudWatch.putMetricData(r -> r
      .namespace(NAMESPACE)
      .metricData(datumBuilder.build())
    );
  }

  // Métricas de negocio
  public void registrarInformeGenerado(String tipo, long durationMs) {
    publicarMetrica("InformesGenerados", 1.0, StandardUnit.COUNT,
      Map.of("TipoInforme", tipo));

    publicarMetrica("InformeGeneracionDuration", (double) durationMs,
      StandardUnit.MILLISECONDS, Map.of("TipoInforme", tipo));
  }

  public void registrarLatenciaBD(long durationMs, String operacion) {
    publicarMetrica("DBQueryLatency", (double) durationMs,
      StandardUnit.MILLISECONDS, Map.of("Operacion", operacion));
  }

  public void registrarErrorAPI(String endpoint, String tipoError) {
    publicarMetrica("ErroresAPI", 1.0, StandardUnit.COUNT,
      Map.of("Endpoint", endpoint, "TipoError", tipoError));
  }

  public void registrarUsuariosActivos(int cantidad) {
    publicarMetrica("UsuariosActivos", (double) cantidad,
      StandardUnit.COUNT, null);
  }
}

// ============================================
// Uso en un servicio

@Service
public class InformeService {

  private final InformeRepository repository;
  private final MetricasService metricas;
  private final S3Service s3Service;

  @Transactional
  public Informe generarInforme(String titulo, String contenido, Long usuarioId) {
    long inicio = System.currentTimeMillis();

    try {
      // Lógica
      Informe informe = new Informe();
      informe.setTitulo(titulo);
      informe.setContenido(contenido);
      informe.setUsuarioId(usuarioId);

      Informe guardado = repository.save(informe);

      // Subir a S3
      s3Service.subirArchivo("guttman-docs",
        "informes/" + guardado.getId() + ".pdf", contenido);

      long duracion = System.currentTimeMillis() - inicio;
      metricas.registrarInformeGenerado("PDF", duracion);

      return guardado;

    } catch (Exception e) {
      metricas.registrarErrorAPI("/api/informes", e.getClass().getSimpleName());
      throw e;
    }
  }
}`}
            language="java"
            title="Métricas personalizadas en CloudWatch"
          />
        </>
      )
    },

    {
      title: 'Secrets Manager + Spring Boot',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Almacena secretos (contraseñas, API keys) en AWS Secrets Manager en lugar del código:
          </p>

          <CodeBlock
            code={`// SecretsService.java - Leer secretos de Secrets Manager

@Service
public class SecretsService {

  private final SecretsManagerClient secretsClient;
  private final ObjectMapper objectMapper;

  public SecretsService(SecretsManagerClient secretsClient) {
    this.secretsClient = secretsClient;
    this.objectMapper = new ObjectMapper();
  }

  public String obtenerSecreto(String nombreSecreto) {
    try {
      GetSecretValueRequest request = GetSecretValueRequest.builder()
        .secretId(nombreSecreto)
        .build();

      GetSecretValueResponse response = secretsClient.getSecretValue(request);

      // El secreto puede ser plaintext o JSON
      if (response.secretString() != null) {
        return response.secretString();
      } else {
        // En caso de binary secret
        return new String(response.secretBinary().asByteArray());
      }
    } catch (Exception e) {
      throw new RuntimeException("Error obteniendo secreto: " + nombreSecreto, e);
    }
  }

  public Map<String, String> obtenerSecreteJSON(String nombreSecreto) {
    try {
      String json = obtenerSecreto(nombreSecreto);
      return objectMapper.readValue(json, new TypeReference<Map<String, String>>() {});
    } catch (JsonProcessingException e) {
      throw new RuntimeException("Error parseando secreto JSON", e);
    }
  }
}

// ============================================
// Usar en configuración

@Configuration
public class DbConfig {

  private final SecretsService secretsService;

  @Bean
  public DataSource dataSource() {
    // Obtener secreto de RDS
    Map<String, String> secreto = secretsService.obtenerSecreteJSON("guttman-db");

    String url = secreto.get("engine") + "://" + secreto.get("host") + ":" +
                 secreto.get("port") + "/" + secreto.get("dbname");
    String usuario = secreto.get("username");
    String password = secreto.get("password");

    // Crear DataSource con credenciales
    HikariConfig config = new HikariConfig();
    config.setJdbcUrl("jdbc:postgresql://" + secreto.get("host") + ":"
                      + secreto.get("port") + "/guttman");
    config.setUsername(usuario);
    config.setPassword(password);
    config.setMaximumPoolSize(10);

    return new HikariDataSource(config);
  }
}

// ============================================
// En Secrets Manager, crear secreto JSON

{
  "username": "admin",
  "password": "MiContraseñaSegura123!",
  "engine": "postgres",
  "host": "guttman-db.abc123.eu-west-1.rds.amazonaws.com",
  "port": 5432,
  "dbname": "guttman"
}`}
            language="java"
            title="Secrets Manager con Spring Boot"
          />

          <InfoBox type="security" title="🔒 Best Practice">
            <strong>Nunca hardcodees secretos en properties.</strong> Usa Secrets Manager para:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>Contraseñas de bases de datos</li>
              <li>API keys de terceros</li>
              <li>Certificados SSL</li>
              <li>Tokens de autenticación</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Lambda con Java + Spring Boot',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Despliega funciones Lambda con Spring Boot para máxima flexibilidad:
          </p>

          <CodeBlock
            code={`<!-- pom.xml -->
<dependency>
  <groupId>software.amazon.awssdk</groupId>
  <artifactId>aws-lambda-java-events</artifactId>
</dependency>

<dependency>
  <groupId>com.amazonaws</groupId>
  <artifactId>aws-lambda-java-core</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-function-adapter-aws</artifactId>
</dependency>

<!-- ============================================ -->

// LambdaFunction.java - Función Lambda

@Component
public class GenerarInformeFunction implements Function<GenerarInformeRequest, InformeResponse> {

  private final InformeService informeService;

  @Override
  public InformeResponse apply(GenerarInformeRequest request) {
    try {
      Informe informe = informeService.generarInforme(
        request.getTitulo(),
        request.getContenido(),
        request.getUsuarioId()
      );

      return new InformeResponse()
        .setId(informe.getId())
        .setEstado("success")
        .setMensaje("Informe generado exitosamente");

    } catch (Exception e) {
      return new InformeResponse()
        .setEstado("error")
        .setMensaje("Error: " + e.getMessage());
    }
  }
}

// ============================================
// Request/Response POJOs

public class GenerarInformeRequest {
  private String titulo;
  private String contenido;
  private Long usuarioId;
  // getters/setters...
}

public class InformeResponse {
  private Long id;
  private String estado;
  private String mensaje;
  // getters/setters...
}

// ============================================
// application-lambda.properties

spring.cloud.function.definition=generarInformeFunction
spring.cloud.function.definition.supplier=supplier

# Desabilitar componentes innecesarios
spring.autoconfigure.exclude=\\
  org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration

# ============================================
// Dockerfile para imagen Lambda

FROM public.ecr.aws/lambda/java:21

COPY target/guttman-lambda.jar /var/task/app.jar
COPY target/lib/* /var/task/lib/

# Handler apunta a Spring Cloud Function adapter
CMD [ "com.example.StreamLambdaHandler::handleRequest" ]`}
            language="java"
            title="Lambda con Spring Cloud Function"
          />

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#e65100', marginTop: 0 }}>Optimizar Cold Start</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>Maven Assembly Plugin:</strong> Crea JAR con todas las dependencias</li>
              <li><strong>Layer Caching:</strong> Separa dependencias de código para mejor cacheo</li>
              <li><strong>GraalVM Native Image:</strong> Compila a binario nativo (100ms cold start)</li>
              <li><strong>SnapStart:</strong> AWS almacena snapshot de JVM (300-400ms vs 1-2s)</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Patrones y Best Practices',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                patron: '1. Inyección de Dependencias',
                descripcion: 'Crea beans para cada cliente AWS, inyecta en servicios',
                ventaja: 'Reutilizable, testeable, configurable centralmente'
              },
              {
                patron: '2. @Transactional Cuidadoso',
                descripcion: 'RDS con transacciones, no con DynamoDB',
                ventaja: 'ACID en SQL, riesgo de timeout en DynamoDB'
              },
              {
                patron: '3. Retry Logic',
                descripcion: 'Usa Resilience4j o Spring Retry para fallos temporales',
                ventaja: 'Maneja throttling de DynamoDB, caídas temporales'
              },
              {
                patron: '4. Caching Local',
                descripcion: 'Cache en memoria para datos frecuentes (Spring Cache)',
                ventaja: 'Reduce latencia y costo en APIs'
              },
              {
                patron: '5. Logging Centralizado',
                descripcion: 'Envía logs a CloudWatch Logs automáticamente',
                ventaja: 'Debugging fácil, auditoría, alertas'
              },
              {
                patron: '6. Circuit Breaker',
                descripcion: 'Protege contra fallos en cascada',
                ventaja: 'Evita sobrecargar servicios caídos'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fafafa',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', color: '#333' }}>
                  {item.patron}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                  {item.descripcion}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#1976d2', fontStyle: 'italic', marginBottom: 0 }}>
                  ✓ {item.ventaja}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Testing con AWS</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>LocalStack:</strong> Emula servicios AWS localmente para tests</li>
              <li><strong>Testcontainers:</strong> Inicia containers Docker de BD para tests</li>
              <li><strong>Mocking:</strong> Mock AWS SDK para tests rápidos y sin costo</li>
              <li><strong>Integration Tests:</strong> Contra AWS real en entorno staging</li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="AWS + Java/Spring Boot — Integración Profesional"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
