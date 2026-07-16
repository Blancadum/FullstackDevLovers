import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const LessonAWSProyecto = () => {
  const [expandedSection, setExpandedSection] = useState('contexto');

  const sections = [
    { id: 'contexto', title: '📋 Contexto del Proyecto' },
    { id: 'necesidades', title: '🎯 Necesidades Identificadas' },
    { id: 'arquitectura', title: '🏗️ Arquitectura de Referencia' },
    { id: 'capas', title: '🔧 Desglose por Capas' },
    { id: 'justificacion', title: '✅ Justificación de AWS' },
    { id: 'implementacion', title: '💻 Plan de Implementación' },
    { id: 'estimacion', title: '💰 Estimación de Costos' },
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Sesión 10: Proyecto Final - Arquitectura del Laboratorio Guttman</h1>
        <p className="lesson-intro">
          Integración completa de todos los conceptos AWS en una arquitectura de referencia para modernizar la infraestructura del Laboratorio Guttman.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="quick-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-btn ${expandedSection === section.id ? 'active' : ''}`}
            onClick={() => toggleSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* 1. Contexto */}
      {(expandedSection === null || expandedSection === 'contexto') && (
        <section className="lesson-section">
          <h2>📋 Contexto del Proyecto</h2>

          <div className="info-box">
            <p>
              El <strong>Laboratorio Guttman</strong> es una organización con infraestructura tecnológica existente que requiere modernización.
              A lo largo de este curso hemos construido el conocimiento necesario para proponer una arquitectura cloud completa, justificada
              y coherente con sus necesidades reales.
            </p>
            <p>
              Esta sesión final integra todos los conceptos AWS en una arquitectura de referencia que demuestra cómo aplicar profesionalmente
              lo aprendido: decisiones técnicas, seguridad, rendimiento, costos y operaciones.
            </p>
          </div>

          <h3>¿Qué es el Laboratorio Guttman?</h3>
          <ul>
            <li><strong>Naturaleza:</strong> Centro de investigación y desarrollo tecnológico</li>
            <li><strong>Usuarios:</strong> Administradores, técnicos, clientes finales</li>
            <li><strong>Aplicaciones:</strong> Portal web, base de datos relacional, generación de informes</li>
            <li><strong>Infraestructura actual:</strong> Servidores locales, backup manual, escalabilidad limitada</li>
            <li><strong>Objetivo:</strong> Migrar a cloud para alta disponibilidad, seguridad y escalabilidad</li>
          </ul>

          <h3>Por qué este proyecto es realista</h3>
          <p>
            Este proyecto no es teórico. Refleja decisiones arquitectónicas reales que encontrarás en empresas:
          </p>
          <ul>
            <li>✓ Multi-AZ para cumplimiento de SLAs</li>
            <li>✓ Seguridad en capas (IAM, Security Groups, WAF)</li>
            <li>✓ Monitorización desde el primer día</li>
            <li>✓ CI/CD automatizado para no perder agilidad al pasar a cloud</li>
            <li>✓ Control de costos con Reserved Instances y lifecycle policies</li>
          </ul>
        </section>
      )}

      {/* 2. Necesidades Identificadas */}
      {(expandedSection === null || expandedSection === 'necesidades') && (
        <section className="lesson-section">
          <h2>🎯 Necesidades Identificadas del Laboratorio Guttman</h2>

          <p>Antes de diseñar la arquitectura, identificamos qué requiere el negocio:</p>

          <table className="lesson-table">
            <thead>
              <tr>
                <th>Necesidad</th>
                <th>Prioridad</th>
                <th>Implicación Técnica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alta disponibilidad de la aplicación web</td>
                <td><span className="priority-critical">Crítica</span></td>
                <td>Multi-AZ, Auto Scaling, Load Balancer</td>
              </tr>
              <tr>
                <td>Base de datos relacional con backups automáticos</td>
                <td><span className="priority-critical">Crítica</span></td>
                <td>RDS PostgreSQL Multi-AZ</td>
              </tr>
              <tr>
                <td>Almacenamiento de informes y documentos</td>
                <td><span className="priority-high">Alta</span></td>
                <td>S3 con lifecycle policies</td>
              </tr>
              <tr>
                <td>Acceso seguro por roles</td>
                <td><span className="priority-high">Alta</span></td>
                <td>IAM con grupos (Admin, Tech, Customer)</td>
              </tr>
              <tr>
                <td>Monitorización y alertas</td>
                <td><span className="priority-high">Alta</span></td>
                <td>CloudWatch + SNS</td>
              </tr>
              <tr>
                <td>Despliegue automático sin downtime</td>
                <td><span className="priority-medium">Media</span></td>
                <td>CodePipeline + Blue/Green</td>
              </tr>
              <tr>
                <td>Control de costos</td>
                <td><span className="priority-medium">Media</span></td>
                <td>AWS Budgets, Reserved Instances</td>
              </tr>
              <tr>
                <td>Red privada y segura</td>
                <td><span className="priority-critical">Crítica</span></td>
                <td>VPC con subredes públicas/privadas</td>
              </tr>
            </tbody>
          </table>

          <div className="insight-box">
            <strong>💡 Insight:</strong> Nota cómo cada necesidad de negocio se traduce directamente en decisiones técnicas.
            No empezamos preguntando "¿usamos Lambda o EC2?" sino "¿qué disponibilidad requiere el negocio?"
          </div>
        </section>
      )}

      {/* 3. Arquitectura General */}
      {(expandedSection === null || expandedSection === 'arquitectura') && (
        <section className="lesson-section">
          <h2>🏗️ Arquitectura de Referencia Completa</h2>

          <p>
            La siguiente es la arquitectura de tres capas recomendada para el Laboratorio Guttman:
          </p>

          <CodeBlock
            language="
" title="Diagrama: Arquitectura de Tres Capas">
{`┌─────────────────────────────────────────────────────────────────┐
│                         AWS Region: eu-west-1                    │
│                     (Irlanda - RGPD Compliant)                   │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                   CAPA PÚBLICA (DMZ)                       │  │
│  │  ┌─────────────┐  ┌─────────────┐                         │  │
│  │  │   Internet  │──│     ALB     │  puerto 443 HTTPS      │  │
│  │  │   Gateway   │  │  (balanceo) │                         │  │
│  │  └─────────────┘  └──────┬──────┘                         │  │
│  │                          │                                 │  │
│  │                   Subred pública (10.0.1.0/24, 10.0.2.0/24)   │
│  │                   (eu-west-1a, eu-west-1b)                │  │
│  └────────────────────────────────────────────────────────────┘  │
│                             │                                     │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              CAPA APLICACIÓN (PRIVADA)                     │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │  Auto Scaling Group: 2-6 EC2 (t3.medium)            │  │  │
│  │  │  · Amazon Linux 2023 + Java Corretto 21             │  │  │
│  │  │  · Spring Boot + AWS SDK v2                         │  │  │
│  │  │  · Escala si CPU > 70%                              │  │  │
│  │  │  · Desplegadas con CodeDeploy                       │  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │                                                             │  │
│  │  Subred privada (10.0.11.0/24, 10.0.12.0/24)              │  │
│  │  NAT Gateway: salida a internet (actualizaciones, SDK)     │  │
│  └────────────────────────────────────────────────────────────┘  │
│                             │                                     │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │               CAPA DATOS (PRIVADA)                        │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │  RDS PostgreSQL 15 Multi-AZ                          │  │  │
│  │  │  · db.t3.medium                                      │  │  │
│  │  │  · Backups 7 días                                    │  │  │
│  │  │  · Replicación sincrónica entre AZ                  │  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │  ElastiCache Redis (cache.t3.micro)                  │  │  │
│  │  │  · Sesiones de usuario                              │  │  │
│  │  │  · Caché de consultas frecuentes                    │  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │                                                             │  │
│  │  Subred privada (10.0.21.0/24, 10.0.22.0/24)              │  │
│  │  Solo acepta tráfico de capa de aplicación                │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  SERVICIOS TRANSVERSALES:                                        │
│  · S3: guttman-documentos (lifecycle), guttman-logs              │
│  · Lambda: procesamiento asíncrono de notificaciones             │
│  · CloudWatch: monitorización y logs                             │
│  · Secrets Manager: credenciales de RDS                          │
│  · CodePipeline: CI/CD automatizado (GitHub → Build → Deploy)    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘`}
          </CodeBlock>

          <h3>Características principales</h3>
          <ul>
            <li>
              <strong>Multi-AZ:</strong> Cada componente crítico en 2 zonas de disponibilidad diferentes
            </li>
            <li>
              <strong>Aislamiento de red:</strong> Tráfico controlado entre capas mediante Security Groups
            </li>
            <li>
              <strong>Escalabilidad automática:</strong> ASG escala según demanda
            </li>
            <li>
              <strong>Seguridad en profundidad:</strong> Múltiples niveles de protección
            </li>
            <li>
              <strong>Observabilidad total:</strong> Cada servicio emite métricas y logs
            </li>
          </ul>
        </section>
      )}

      {/* 4. Desglose por Capas */}
      {(expandedSection === null || expandedSection === 'capas') && (
        <section className="lesson-section">
          <h2>🔧 Desglose por Capas</h2>

          <h3>3.1 Capa de Red (Network Tier)</h3>
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>CIDR</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VPC</td>
                <td>10.0.0.0/16</td>
                <td>Red privada en eu-west-1 (Irlanda)</td>
              </tr>
              <tr>
                <td>Subred Pública AZ-a</td>
                <td>10.0.1.0/24</td>
                <td>ALB y NAT Gateway</td>
              </tr>
              <tr>
                <td>Subred Pública AZ-b</td>
                <td>10.0.2.0/24</td>
                <td>ALB y NAT Gateway (redundancia)</td>
              </tr>
              <tr>
                <td>Subred App Privada AZ-a</td>
                <td>10.0.11.0/24</td>
                <td>Instancias EC2 / ECS</td>
              </tr>
              <tr>
                <td>Subred App Privada AZ-b</td>
                <td>10.0.12.0/24</td>
                <td>Instancias EC2 / ECS (redundancia)</td>
              </tr>
              <tr>
                <td>Subred Data Privada AZ-a</td>
                <td>10.0.21.0/24</td>
                <td>RDS, ElastiCache</td>
              </tr>
              <tr>
                <td>Subred Data Privada AZ-b</td>
                <td>10.0.22.0/24</td>
                <td>RDS, ElastiCache (replica)</td>
              </tr>
            </tbody>
          </table>

          <CodeBlock language="yaml" title="Flujo de Tráfico por Security Groups">
{`# ALB Security Group (en subred pública)
- Inbound:  443 (HTTPS) desde cualquier IP (0.0.0.0/0)
- Outbound: 8080 hacia EC2 Security Group

# EC2 Security Group (en subred de aplicación privada)
- Inbound:  8080 solo desde ALB Security Group
- Outbound: 5432 hacia RDS Security Group, S3, SNS

# RDS Security Group (en subred de datos privada)
- Inbound:  5432 solo desde EC2 Security Group
- Outbound: deny all (no necesita salir)

# Redis Security Group (ElastiCache)
- Inbound:  6379 solo desde EC2 Security Group
- Outbound: deny all`}
          </CodeBlock>

          <h3>3.2 Capa de Cómputo (Compute Tier)</h3>
          <CodeBlock language="yaml" title="Auto Scaling Group Configuration">
{`Auto Scaling Group: guttman-app-asg
  Min Size:     2 instancias
  Max Size:     6 instancias
  Desired:      2 instancias (escalará según CPU)

  Scaling Policies:
    - Target Tracking (CPU > 70%):     escala hacia arriba
    - Step Scaling (CPU < 30%):        escala hacia abajo

  Launch Template: guttman-app-lt
    - AMI:           Amazon Linux 2023
    - Instance Type: t3.medium
    - vCPU:          2
    - Memory:        4 GB RAM
    - Storage:       30 GB gp3 EBS
    - IAM Role:      guttman-app-role
    - User Data:     instalación de Java, Docker, CodeDeploy agent

  Health Check:
    - Type:      ELB
    - Grace Period: 300 segundos
    - Interval:  30 segundos

Application Load Balancer:
  - Listeners:     puerto 443 (HTTPS)
  - Target Group:  guttman-app-tg
  - Health Check:  GET /health (status 200)
  - Sticky Sessions: 1 día (para sesiones de usuario)`}
          </CodeBlock>

          <h4>Implementación en Java/Spring Boot - Health Check</h4>
          <CodeBlock language="java" title="Health Check Controller para ALB">
{`@RestController
@RequestMapping("/health")
public class HealthCheckController {

  @Autowired
  private DataSource dataSource;

  @GetMapping
  public ResponseEntity<HealthStatus> health() {
    try {
      // Verificar conexión a BD
      try (Connection conn = dataSource.getConnection()) {
        // Si llegamos aquí, la BD está accesible
      }

      return ResponseEntity.ok(HealthStatus.builder()
          .status("UP")
          .timestamp(LocalDateTime.now())
          .database("connected")
          .uptime(ManagementFactory.getRuntimeMXBean().getUptime())
          .build());

    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(HealthStatus.builder()
              .status("DOWN")
              .error(e.getMessage())
              .build());
    }
  }
}

// DTO
@Data
@Builder
class HealthStatus {
  private String status;
  private String database;
  private String error;
  private LocalDateTime timestamp;
  private long uptime;
}`}
          </CodeBlock>

          <h4>Configuración de Auto-Scaling Metrics</h4>
          <CodeBlock language="java" title="Publicar métricas custom para Auto Scaling">
{`@Service
public class MetricsPublisher {

  @Autowired
  private CloudWatchClient cloudWatch;

  @Scheduled(fixedRate = 60000) // Cada minuto
  public void publishCustomMetrics() {
    try {
      // CPU usage
      OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();
      double cpuUsage = osBean.getProcessCpuLoad() * 100;

      PutMetricDataRequest request = PutMetricDataRequest.builder()
          .namespace("Guttman/Aplicacion")
          .metricData(MetricDatum.builder()
              .metricName("ApplicationCpuUsage")
              .value(cpuUsage)
              .unit(StandardUnit.PERCENT)
              .timestamp(Instant.now())
              .build())
          .build();

      cloudWatch.putMetricData(request);

    } catch (Exception e) {
      log.error("Error publishing metrics", e);
    }
  }
}`}
          </CodeBlock>

          <h4>Ejemplo: REST Controller con Validación</h4>
          <CodeBlock language="java" title="InformeController - Crear y Listar Informes">
{`@RestController
@RequestMapping("/api/informes")
@Validated
@Slf4j
public class InformeController {

  @Autowired
  private InformeService informeService;

  // GET - Listar informes del usuario
  @GetMapping
  public ResponseEntity<Page<InformeDTO>> listarInformes(
      @RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "10") int size,
      @CurrentUser Long usuarioId) {

    Pageable pageable = PageRequest.of(page, size, Sort.by("fechaCreacion").descending());
    Page<InformeDTO> informes = informeService.obtenerInformesPaginado(usuarioId, pageable);

    return ResponseEntity.ok(informes);
  }

  // POST - Crear nuevo informe
  @PostMapping
  @Transactional
  public ResponseEntity<InformeDTO> crearInforme(
      @Valid @RequestBody CreateInformeRequest request,
      @CurrentUser Long usuarioId) {

    try {
      InformeDTO informe = informeService.crearInforme(
          request.getTitulo(),
          request.getContenido(),
          usuarioId
      );

      return ResponseEntity
          .status(HttpStatus.CREATED)
          .body(informe);

    } catch (IllegalArgumentException e) {
      log.warn("Invalid informe request: {}", e.getMessage());
      throw new BadRequestException(e.getMessage());
    }
  }

  // GET - Obtener informe específico (con validación de acceso)
  @GetMapping("/{id}")
  public ResponseEntity<InformeDTO> obtenerInforme(
      @PathVariable Long id,
      @CurrentUser Long usuarioId) {

    InformeDTO informe = informeService.obtenerInforme(id, usuarioId);
    return ResponseEntity.ok(informe);
  }

  // PUT - Actualizar informe
  @PutMapping("/{id}")
  @Transactional
  public ResponseEntity<InformeDTO> actualizarInforme(
      @PathVariable Long id,
      @Valid @RequestBody UpdateInformeRequest request,
      @CurrentUser Long usuarioId) {

    InformeDTO informe = informeService.actualizarInforme(id, request, usuarioId);
    return ResponseEntity.ok(informe);
  }

  // DELETE - Eliminar informe
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> eliminarInforme(
      @PathVariable Long id,
      @CurrentUser Long usuarioId) {

    informeService.eliminarInforme(id, usuarioId);
    return ResponseEntity.noContent().build();
  }
}

// DTOs
@Data
@NoArgsConstructor
class CreateInformeRequest {
  @NotBlank(message = "Título no puede estar vacío")
  @Size(min = 5, max = 200, message = "Título debe tener entre 5 y 200 caracteres")
  private String titulo;

  @NotBlank(message = "Contenido no puede estar vacío")
  @Size(min = 10, max = 50000)
  private String contenido;
}

@Data
class InformeDTO {
  private Long id;
  private String titulo;
  private String contenido;
  private LocalDateTime fechaCreacion;
  private LocalDateTime fechaActualizacion;
}`}
          </CodeBlock>

          <h4>Ejemplo: Manejo Global de Excepciones</h4>
          <CodeBlock language="java" title="Global Exception Handler">
{`@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

  // Excepciones de validación
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ErrorResponse> handleValidationException(
      MethodArgumentNotValidException ex) {

    Map<String, String> errors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(error ->
        errors.put(error.getField(), error.getDefaultMessage())
    );

    log.warn("Validation error: {}", errors);

    return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body(ErrorResponse.builder()
            .status("VALIDATION_ERROR")
            .message("Errores de validación en los datos enviados")
            .errors(errors)
            .timestamp(LocalDateTime.now())
            .build());
  }

  // Recurso no encontrado
  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<ErrorResponse> handleNotFoundException(
      EntityNotFoundException ex) {

    log.warn("Resource not found: {}", ex.getMessage());

    return ResponseEntity
        .status(HttpStatus.NOT_FOUND)
        .body(ErrorResponse.builder()
            .status("NOT_FOUND")
            .message(ex.getMessage())
            .timestamp(LocalDateTime.now())
            .build());
  }

  // Acceso denegado
  @ExceptionHandler(AccessDeniedException.class)
  public ResponseEntity<ErrorResponse> handleAccessDeniedException(
      AccessDeniedException ex) {

    log.warn("Access denied: {}", ex.getMessage());

    return ResponseEntity
        .status(HttpStatus.FORBIDDEN)
        .body(ErrorResponse.builder()
            .status("ACCESS_DENIED")
            .message("No tienes permisos para acceder a este recurso")
            .timestamp(LocalDateTime.now())
            .build());
  }

  // Error interno del servidor
  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
    log.error("Unhandled exception", ex);

    return ResponseEntity
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(ErrorResponse.builder()
            .status("INTERNAL_SERVER_ERROR")
            .message("Ocurrió un error inesperado. Por favor, intenta de nuevo.")
            .timestamp(LocalDateTime.now())
            .build());
  }
}

@Data
@Builder
class ErrorResponse {
  private String status;
  private String message;
  private Map<String, String> errors;
  private LocalDateTime timestamp;
}`}
          </CodeBlock>

          <h3>3.3 Capa de Datos (Data Tier)</h3>
          <CodeBlock language="yaml" title="Configuración de Base de Datos y Caché">
{`RDS PostgreSQL:
  Engine Version:     15.x
  Instance Class:     db.t3.medium
  Storage:            100 GB (gp3, auto-scaling)
  Multi-AZ:           Enabled (replicación sincrónica)
  Backup:
    - Retention:      7 días
    - Window:         03:00-04:00 UTC
    - Encryption:     KMS

  Performance Insights: Enabled
  Enhanced Monitoring:  5 segundos

  Subnet Group:       guttman-db-subnet-group
  Security Group:     guttman-db-sg (solo EC2 puede conectar)

ElastiCache Redis:
  Cluster:           guttman-cache
  Engine:            Redis 7.x
  Node Type:         cache.t3.micro
  Number of Nodes:   2 (con failover automático)
  Encryption:        at-rest y in-transit
  Subnet Group:      guttman-cache-subnet-group
  Security Group:    guttman-cache-sg

  Use Cases:
    - Session store:  sesiones de usuario con TTL 24h
    - Query cache:    resultados de consultas frecuentes
    - Rate limiting:  contador de requests por usuario

S3 Buckets:
  guttman-documentos:
    - Versioning:    Enabled
    - Lifecycle:
      * 0 días:      Standard (datos activos)
      * 30 días:     Standard-IA (acceso infrequente)
      * 90 días:     Glacier (archivo)
      * 365 días:    Deep Archive (almacenamiento largo plazo)
    - Encryption:    S3-managed (SSE-S3)

  guttman-logs:
    - Lifecycle: retención de 1 año
    - CloudWatch Logs exported diariamente
    - Server-side encryption con KMS`}
          </CodeBlock>

          <h4>Implementación en Java/Spring Boot - Acceso a BD y Caché</h4>
          <CodeBlock language="java" title="Spring Data JPA para RDS PostgreSQL">
{`@Entity
@Table(name = "informes", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Informe {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String titulo;

  @Column(columnDefinition = "TEXT")
  private String contenido;

  @Column(name = "fecha_creacion")
  private LocalDateTime fechaCreacion;

  @Column(name = "usuario_id")
  private Long usuarioId;

  @PrePersist
  protected void onCreate() {
    fechaCreacion = LocalDateTime.now();
  }
}

// Repository
@Repository
public interface InformeRepository extends JpaRepository<Informe, Long> {
  List<Informe> findByUsuarioIdOrderByFechaCreacionDesc(Long usuarioId);

  @Query("SELECT i FROM Informe i WHERE i.titulo ILIKE %:filtro%")
  Page<Informe> buscarPorTitulo(@Param("filtro") String filtro, Pageable pageable);
}

// Service con transacciones
@Service
public class InformeService {
  @Autowired
  private InformeRepository informeRepository;

  @Autowired
  private RedisTemplate<String, Informe> redisTemplate;

  @Transactional(readOnly = true)
  public List<Informe> obtenerInformes(Long usuarioId) {
    // Intentar obtener del caché primero
    String cacheKey = "informes:usuario:" + usuarioId;
    List<Informe> cached = (List<Informe>) redisTemplate.opsForValue().get(cacheKey);

    if (cached != null) {
      return cached;
    }

    // Si no está en caché, obtener de BD
    List<Informe> informes = informeRepository.findByUsuarioIdOrderByFechaCreacionDesc(usuarioId);

    // Guardar en caché por 1 hora
    redisTemplate.opsForValue().set(cacheKey, informes, Duration.ofHours(1));

    return informes;
  }

  @Transactional
  public Informe crearInforme(Informe informe) {
    Informe saved = informeRepository.save(informe);

    // Invalidar caché
    String cacheKey = "informes:usuario:" + informe.getUsuarioId();
    redisTemplate.delete(cacheKey);

    return saved;
  }

  @Transactional(readOnly = true)
  public Page<Informe> obtenerInformesPaginado(Long usuarioId, Pageable pageable) {
    return informeRepository.findByUsuarioIdOrderByFechaCreacionDesc(usuarioId, pageable);
  }

  @Transactional(readOnly = true)
  public Informe obtenerInforme(Long id, Long usuarioId) {
    Informe informe = informeRepository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Informe no encontrado"));

    // Validar acceso: solo el propietario puede ver su informe
    if (!informe.getUsuarioId().equals(usuarioId)) {
      throw new AccessDeniedException("No tienes acceso a este informe");
    }

    return informe;
  }

  @Transactional
  public Informe actualizarInforme(Long id, UpdateInformeRequest request, Long usuarioId) {
    Informe informe = obtenerInforme(id, usuarioId);

    informe.setTitulo(request.getTitulo());
    informe.setContenido(request.getContenido());
    informe.setFechaActualizacion(LocalDateTime.now());

    Informe updated = informeRepository.save(informe);

    // Invalidar caché
    redisTemplate.delete("informes:usuario:" + usuarioId);

    return updated;
  }

  @Transactional
  public void eliminarInforme(Long id, Long usuarioId) {
    Informe informe = obtenerInforme(id, usuarioId);
    informeRepository.deleteById(id);

    // Invalidar caché
    redisTemplate.delete("informes:usuario:" + usuarioId);
  }

  // Buscar con filtro y paginación
  @Transactional(readOnly = true)
  public Page<Informe> buscar(String filtro, Long usuarioId, Pageable pageable) {
    if (filtro == null || filtro.trim().isEmpty()) {
      return informeRepository.findByUsuarioIdOrderByFechaCreacionDesc(usuarioId, pageable);
    }

    return informeRepository.buscarPorTitulo(filtro, pageable);
  }
}`}
          </CodeBlock>

          <h4>Ejemplo: Rate Limiting con Redis</h4>
          <CodeBlock language="java" title="Rate Limiter usando Redis">
{`@Component
public class RateLimiter {

  @Autowired
  private RedisTemplate<String, String> redisTemplate;

  public boolean allowRequest(Long usuarioId, int maxRequestsPerMinute) {
    String key = "rate-limit:" + usuarioId;
    String current = (String) redisTemplate.opsForValue().get(key);

    int count = (current == null) ? 0 : Integer.parseInt(current);

    if (count >= maxRequestsPerMinute) {
      return false;
    }

    redisTemplate.opsForValue().increment(key);

    if (count == 0) {
      // Establecer expiración de 60 segundos en la primera petición
      redisTemplate.expire(key, Duration.ofMinutes(1));
    }

    return true;
  }
}

// Usar en Controller
@PostMapping
public ResponseEntity<InformeDTO> crearInforme(
    @Valid @RequestBody CreateInformeRequest request,
    @CurrentUser Long usuarioId) {

  if (!rateLimiter.allowRequest(usuarioId, 10)) {
    return ResponseEntity
        .status(HttpStatus.TOO_MANY_REQUESTS)
        .build();
  }

  // Crear informe...
  return ResponseEntity.ok(new InformeDTO());
}`}
          </CodeBlock>

          <h4>Configuración de Redis para Caché y Sesiones</h4>
          <CodeBlock language="java" title="Redis Configuration">
{`@Configuration
public class RedisConfig {

  @Bean
  public LettuceConnectionFactory connectionFactory() {
    return new LettuceConnectionFactory();
  }

  @Bean
  public RedisTemplate<String, Object> redisTemplate(LettuceConnectionFactory connectionFactory) {
    RedisTemplate<String, Object> template = new RedisTemplate<>();
    template.setConnectionFactory(connectionFactory);

    // Serialización de strings
    StringRedisSerializer stringSerializer = new StringRedisSerializer();
    template.setKeySerializer(stringSerializer);
    template.setHashKeySerializer(stringSerializer);

    // Serialización de valores con Jackson
    Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer =
        new Jackson2JsonRedisSerializer<>(Object.class);
    ObjectMapper om = new ObjectMapper();
    om.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL);
    jackson2JsonRedisSerializer.setObjectMapper(om);

    template.setValueSerializer(jackson2JsonRedisSerializer);
    template.setHashValueSerializer(jackson2JsonRedisSerializer);

    template.afterPropertiesSet();
    return template;
  }

  // Session store en Redis
  @Bean
  public LettuceIndexedSessionRepository sessionRepository(
      LettuceConnectionFactory connectionFactory,
      ApplicationEventPublisher applicationEventPublisher) {
    return new LettuceIndexedSessionRepository(connectionFactory, applicationEventPublisher);
  }
}`}
          </CodeBlock>

          <h3>3.4 Seguridad (Security Layer)</h3>
          <CodeBlock language="yaml" title="Configuración de Seguridad en Capas">
{`IAM Roles and Groups:
  Grupos:
    - Administradores:
        * Permisos: FullAccess en todos los servicios
        * MFA obligatorio
    - Desarrolladores:
        * Permisos: EC2, RDS, S3, CloudWatch, CodePipeline (lectura)
        * Acceso: solo a guttman-* resources
    - Soporte Técnico:
        * Permisos: CloudWatch, RDS (lectura), EC2 (consultar)
        * Sin permisos de modificación
    - Solo-Lectura:
        * Permisos: ReadOnly en todos los servicios
        * Para auditoría y compliance

EC2 IAM Role: guttman-app-role
  Permissions:
    - s3:GetObject, s3:PutObject en guttman-*
    - cloudwatch:PutMetricData
    - secretsmanager:GetSecretValue (credenciales de RDS)
    - ssm:GetParameter (configuración)
    - logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents

Secrets Manager:
  - guttman/rds/password:  Credenciales de PostgreSQL (rotación cada 30 días)
  - guttman/api-keys:      Claves de APIs externas
  - guttman/jwt-secret:    Secret para firmar JWTs

Security Groups (regla de menor privilegio):
  - ALB:       solo 443 desde internet
  - EC2:       solo 8080 desde ALB
  - RDS:       solo 5432 desde EC2
  - Redis:     solo 6379 desde EC2

WAF (Web Application Firewall):
  - Protección contra SQL Injection
  - Protección contra XSS
  - Rate limiting: máx 2000 requests/5 minutos por IP
  - Geo-blocking: si es necesario

CloudTrail:
  - Almacenamiento: S3 cifrado con KMS
  - Retención: 1 año
  - Logs de: API calls, IAM changes, resource creation/deletion

GuardDuty:
  - Detección de amenazas basada en ML
  - Alerta sobre actividad anómala
  - Integración con Security Hub`}
          </CodeBlock>

          <h4>Implementación en Java/Spring Boot - Gestión de Credenciales</h4>
          <CodeBlock language="java" title="Secrets Manager Integration">
{`@Configuration
public class SecretsManagerConfig {

  @Bean
  public SecretsManagerClient secretsManagerClient() {
    return SecretsManagerClient.builder()
        .region(Region.EU_WEST_1)
        .build();
  }
}

@Component
public class DatabaseSecretProvider {

  @Autowired
  private SecretsManagerClient secretsManager;

  private String dbPassword;

  @PostConstruct
  public void loadSecret() {
    try {
      GetSecretValueRequest request = GetSecretValueRequest.builder()
          .secretId("guttman/rds/password")
          .build();

      GetSecretValueResponse response = secretsManager.getSecretValue(request);
      dbPassword = response.secretString();

      // Cachear el secreto con fecha de expiración
      log.info("Database password loaded from Secrets Manager");

    } catch (SecretsManagerException e) {
      log.error("Error loading database password from Secrets Manager", e);
      throw new RuntimeException("Cannot load database credentials", e);
    }
  }

  public String getPassword() {
    return dbPassword;
  }
}

// Usar en application.properties
// spring.datasource.password=\${aws:secretsmanager:guttman/rds/password}

// O manualmente en el Bean de DataSource
@Configuration
public class DataSourceConfig {

  @Bean
  public DataSource dataSource(
      @Value("\${spring.datasource.url}") String url,
      @Value("\${spring.datasource.username}") String username,
      DatabaseSecretProvider secretProvider) {

    HikariConfig config = new HikariConfig();
    config.setJdbcUrl(url);
    config.setUsername(username);
    config.setPassword(secretProvider.getPassword());
    config.setMaximumPoolSize(20);
    config.setMinimumIdle(5);
    config.setConnectionTimeout(30000);
    config.setIdleTimeout(600000);
    config.setMaxLifetime(1800000);

    return new HikariDataSource(config);
  }
}`}
          </CodeBlock>

          <h4>IAM Role Configuration para EC2</h4>
          <CodeBlock language="java" title="AWS SDK Client Configuration">
{`@Configuration
public class AwsClientsConfig {

  @Bean
  public S3Client s3Client() {
    // Usa automáticamente el IAM role de la instancia EC2
    return S3Client.builder()
        .region(Region.EU_WEST_1)
        .credentialsProvider(InstanceProfileCredentialsProvider.create())
        .build();
  }

  @Bean
  public CloudWatchClient cloudWatchClient() {
    return CloudWatchClient.builder()
        .region(Region.EU_WEST_1)
        .credentialsProvider(InstanceProfileCredentialsProvider.create())
        .build();
  }

  @Bean
  public DynamoDbClient dynamoDbClient() {
    return DynamoDbClient.builder()
        .region(Region.EU_WEST_1)
        .credentialsProvider(InstanceProfileCredentialsProvider.create())
        .build();
  }

  // El IAM role guttman-app-role tiene permisos para:
  // - s3:GetObject, s3:PutObject en guttman-* buckets
  // - cloudwatch:PutMetricData
  // - secretsmanager:GetSecretValue
  // - logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents
  // - dynamodb:GetItem, dynamodb:PutItem, dynamodb:Query
}`}
          </CodeBlock>

          <h4>Ejemplo: Custom Annotation para Security</h4>
          <CodeBlock language="java" title="@CurrentUser Annotation y Resolver">
{`@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
public @interface CurrentUser {
}

@Component
public class CurrentUserResolver implements HandlerMethodArgumentResolver {

  @Override
  public boolean supportsParameter(MethodParameter parameter) {
    return parameter.getParameterAnnotation(CurrentUser.class) != null;
  }

  @Override
  public Object resolveArgument(
      MethodParameter parameter,
      ModelAndViewContainer mavContainer,
      NativeWebRequest webRequest,
      WebDataBinderFactory binderFactory) throws Exception {

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    if (authentication == null || !authentication.isAuthenticated()) {
      throw new AccessDeniedException("Usuario no autenticado");
    }

    return ((UserPrincipal) authentication.getPrincipal()).getId();
  }
}

// Registrar el resolver
@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Autowired
  private CurrentUserResolver currentUserResolver;

  @Override
  public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
    resolvers.add(currentUserResolver);
  }
}`}
          </CodeBlock>

          <h4>Ejemplo: Auditoría de Acciones Sensibles</h4>
          <CodeBlock language="java" title="Audit Service con CloudWatch Logs">
{`@Service
@Slf4j
public class AuditService {

  @Autowired
  private CloudWatchClient cloudWatch;

  public void logAction(String userId, String action, String resource, boolean success) {
    try {
      AuditLog auditLog = AuditLog.builder()
          .timestamp(LocalDateTime.now())
          .userId(userId)
          .action(action)
          .resource(resource)
          .success(success)
          .ipAddress(getClientIp())
          .build();

      // Log a CloudWatch Logs
      log.info("AUDIT: {} | User: {} | Action: {} | Resource: {} | Success: {}",
          LocalDateTime.now(), userId, action, resource, success);

      // Publish a CloudWatch Logs con formato estructurado
      publishToCloudWatch(auditLog);

    } catch (Exception e) {
      log.error("Error logging audit action", e);
    }
  }

  private void publishToCloudWatch(AuditLog auditLog) {
    String logMessage = String.format(
        "{\\"timestamp\\":\\"%s\\",\\"userId\\":\\"%s\\",\\"action\\":\\"%s\\",\\"resource\\":\\"%s\\",\\"success\\":%s}",
        auditLog.getTimestamp(),
        auditLog.getUserId(),
        auditLog.getAction(),
        auditLog.getResource(),
        auditLog.isSuccess()
    );

    // Usar PutLogEventsRequest (nota: requiere que el log group y stream existan)
    log.info(logMessage);
  }

  private String getClientIp() {
    ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
    if (attrs != null) {
      HttpServletRequest request = attrs.getRequest();
      return request.getHeader("X-Forwarded-For") != null
          ? request.getHeader("X-Forwarded-For").split(",")[0]
          : request.getRemoteAddr();
    }
    return "unknown";
  }
}

// Usar en Controller
@PostMapping
public ResponseEntity<InformeDTO> crearInforme(
    @Valid @RequestBody CreateInformeRequest request,
    @CurrentUser Long usuarioId) {

  auditService.logAction(
      String.valueOf(usuarioId),
      "CREATE_INFORME",
      "Informe: " + request.getTitulo(),
      true
  );

  // Crear informe...
  return ResponseEntity.ok(new InformeDTO());
}`}
          </CodeBlock>

          <h3>3.5 Observabilidad (Observability Layer)</h3>
          <CodeBlock language="yaml" title="Estrategia de Monitorización">
{`CloudWatch Dashboard: Guttman-Produccion
  Widgets:
    - EC2 CPU Utilization (desagregado por instancia)
    - ALB Target Health (healthy/unhealthy)
    - RDS CPU, Connections, DatabaseConnections
    - RDS Storage Free
    - ElastiCache CPU, Evictions, NetworkBytesIn/Out
    - Lambda Invocations, Errors, Duration
    - S3 Bucket Size
    - API Response Latency (p50, p90, p99)
    - HTTP 5XX Errors por minuto

Alarmas Críticas (con SNS → Email):
    1. EC2 CPU > 80% → trigger ASG scale-up + notificación urgente
    2. ALB 5XX > 10 errores/minuto → notificación urgente + auto-remediation
    3. RDS Storage Free < 10 GB → notificación + escalado manual
    4. RDS Replication Lag > 1 segundo → notificación + investigar
    5. Lambda Errors > 1% → notificación + revisar logs

CloudWatch Logs:
  Log Groups:
    - /guttman/aplicacion       (logs de Spring Boot)
    - /guttman/rds              (logs de PostgreSQL)
    - /guttman/alb              (access logs del ALB)
    - /guttman/codedeploy       (logs de deployment)

  Insights Queries:
    - Errores por severidad
    - Latencia de queries a BD
    - Usuarios activos por hora
    - Rate de requests fallidos

X-Ray:
  - Habilitado en Spring Boot para trazabilidad
  - Traza completa de request: ALB → EC2 → RDS/Redis
  - Servicios map visualization
  - Análisis de latencia end-to-end`}
          </CodeBlock>

          <h4>Implementación en Java/Spring Boot - Monitorización</h4>
          <CodeBlock language="java" title="CloudWatch Metrics Publisher">
{`@Service
@Slf4j
public class ApplicationMetricsService {

  @Autowired
  private CloudWatchClient cloudWatch;

  @Scheduled(fixedRate = 60000)
  public void publishMetrics() {
    try {
      List<MetricDatum> metrics = new ArrayList<>();

      // Métrica 1: Informes generados (contador)
      metrics.add(MetricDatum.builder()
          .metricName("InformesGenerados")
          .value(getReportCountFromDb())
          .unit(StandardUnit.COUNT)
          .timestamp(Instant.now())
          .build());

      // Métrica 2: Latencia de queries a BD
      metrics.add(MetricDatum.builder()
          .metricName("DBQueryLatency")
          .value(getAverageQueryLatency())
          .unit(StandardUnit.MILLISECONDS)
          .timestamp(Instant.now())
          .build());

      // Métrica 3: Usuarios activos
      metrics.add(MetricDatum.builder()
          .metricName("UsuariosActivos")
          .value(getActiveUsersCount())
          .unit(StandardUnit.COUNT)
          .timestamp(Instant.now())
          .build());

      // Métrica 4: Errores de API
      metrics.add(MetricDatum.builder()
          .metricName("ErroresAPI")
          .value(getErrorCount())
          .unit(StandardUnit.COUNT)
          .timestamp(Instant.now())
          .build());

      PutMetricDataRequest request = PutMetricDataRequest.builder()
          .namespace("Guttman/Produccion")
          .metricData(metrics)
          .build();

      cloudWatch.putMetricData(request);
      log.debug("Metrics published to CloudWatch");

    } catch (Exception e) {
      log.error("Error publishing metrics", e);
    }
  }

  private Double getReportCountFromDb() {
    // Consultar BD para obtener count de informes
    return 0.0; // Implementar según lógica
  }

  private Double getAverageQueryLatency() {
    // Calcular latencia promedio de queries
    return 50.0;
  }

  private Double getActiveUsersCount() {
    // Contar usuarios activos en sesión
    return 10.0;
  }

  private Double getErrorCount() {
    // Contar errores desde último publish
    return 0.0;
  }
}`}
          </CodeBlock>

          <h4>X-Ray Tracing Integration</h4>
          <CodeBlock language="java" title="X-Ray Configuration para Trazabilidad">
{`@Configuration
public class XRayConfig {

  @Bean
  public AWSXRayRecorderBuilder xrayRecorderBuilder() {
    AWSXRayRecorderBuilder builder = AWSXRayRecorderBuilder.standard();

    URL ruleFile = Thread.currentThread()
        .getContextClassLoader()
        .getResource("xray/sampling-rules.json");

    builder.samplingStrategy(new LocalizedSamplingStrategy(ruleFile));
    return builder;
  }

  // Interceptor para rastrear requests HTTP
  @Bean
  public Filter TracingFilter() {
    return new AWSXRayServletFilter("Guttman-Aplicacion");
  }
}

// En los servicios, usar @Traced o AWSXRay.beginSegment()
@Service
public class InformeService {

  @Autowired
  private InformeRepository repository;

  public Informe generarInforme(Long usuarioId) {
    // X-Ray automáticamente crea subsegmentos para:
    // - Llamadas a BD (via Spring Data)
    // - Llamadas a Redis (via RedisTemplate)
    // - Llamadas a S3 (via S3Client)

    AWSXRay.createSubsegment("generateReport", subsegment -> {
      // Lógica de generación de informe
      return repository.save(new Informe());
    });

    return null;
  }
}`}
          </CodeBlock>

          <h4>Ejemplo: Logging Estructurado con JSON</h4>
          <CodeBlock language="java" title="Structured Logging para CloudWatch">
{`@Slf4j
@Service
public class LoggingService {

  public void logStructured(String level, String message, Map<String, Object> context) {
    Map<String, Object> logEntry = new HashMap<>();
    logEntry.put("timestamp", LocalDateTime.now());
    logEntry.put("level", level);
    logEntry.put("message", message);
    logEntry.put("context", context);

    String jsonLog = convertToJson(logEntry);

    switch (level.toUpperCase()) {
      case "ERROR":
        log.error(jsonLog);
        break;
      case "WARN":
        log.warn(jsonLog);
        break;
      case "INFO":
        log.info(jsonLog);
        break;
      default:
        log.debug(jsonLog);
    }
  }

  private String convertToJson(Map<String, Object> map) {
    try {
      ObjectMapper mapper = new ObjectMapper();
      return mapper.writeValueAsString(map);
    } catch (Exception e) {
      return map.toString();
    }
  }
}

// Usar en aplicación
loggingService.logStructured("INFO", "Informe creado", Map.of(
    "usuarioId", usuarioId,
    "informeId", informe.getId(),
    "titulo", informe.getTitulo(),
    "duracion_ms", System.currentTimeMillis() - startTime
));

// Output en CloudWatch Logs será fácil de parsear:
// {"timestamp":"2024-01-15T10:30:45","level":"INFO","message":"Informe creado","context":{"usuarioId":123,"informeId":456,...}}`}
          </CodeBlock>

          <h4>Ejemplo: Interceptor para Métricas de Request</h4>
          <CodeBlock language="java" title="Request Metrics Interceptor">
{`@Component
public class MetricsInterceptor implements HandlerInterceptor {

  @Autowired
  private CloudWatchClient cloudWatch;

  private static final ThreadLocal<Long> requestStartTime = new ThreadLocal<>();

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
    requestStartTime.set(System.currentTimeMillis());
    return true;
  }

  @Override
  public void afterCompletion(
      HttpServletRequest request,
      HttpServletResponse response,
      Object handler,
      Exception ex) {

    long duration = System.currentTimeMillis() - requestStartTime.get();
    int statusCode = response.getStatus();
    String endpoint = request.getRequestURI();

    // Publicar métrica de latencia
    publishMetric("APILatency", (double) duration, "Milliseconds");

    // Publicar métrica de status code
    if (statusCode >= 400) {
      publishMetric("HTTPErrors", 1.0, "Count");
    }

    // Publicar métrica de requests completados
    publishMetric("RequestsCompleted", 1.0, "Count");

    requestStartTime.remove();
  }

  private void publishMetric(String metricName, Double value, String unit) {
    try {
      PutMetricDataRequest request = PutMetricDataRequest.builder()
          .namespace("Guttman/API")
          .metricData(MetricDatum.builder()
              .metricName(metricName)
              .value(value)
              .unit(StandardUnit.valueOf(unit))
              .timestamp(Instant.now())
              .build())
          .build();

      cloudWatch.putMetricData(request);
    } catch (Exception e) {
      // Log error pero no romper el flujo
    }
  }
}

// Registrar el interceptor
@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Autowired
  private MetricsInterceptor metricsInterceptor;

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(metricsInterceptor);
  }
}`}
          </CodeBlock>

          <h3>3.6 Despliegue y CI/CD</h3>
          <CodeBlock language="yaml" title="Pipeline de CI/CD">
{`GitHub Repository: guttman/laboratorio-app
  Branches:
    - main:     producción (requiere aprobación manual)
    - develop:  staging (auto-deploy)
    - feature/* : feature branches

CodePipeline: guttman-pipeline
  Source Stage:
    - GitHub repo: guttman/laboratorio-app
    - Trigger: push a main o develop

  Build Stage (CodeBuild):
    - Java 21 + Maven
    - Comandos:
        1. mvn clean package -DskipTests
        2. mvn test (tests unitarios)
        3. docker build -t guttman:${BUILD_NUMBER}
        4. aws ecr get-login-password | docker login -u AWS
        5. docker tag guttman:${BUILD_NUMBER} 123456789.dkr.ecr.eu-west-1.amazonaws.com/guttman:${BUILD_NUMBER}
        6. docker push 123456789.dkr.ecr.eu-west-1.amazonaws.com/guttman:${BUILD_NUMBER}

    Artifacts:
      - Producción: Docker image en ECR
      - Logs de tests y build

  Deploy Stage (CodeDeploy):
    - Strategy: Blue/Green Deployment
    - Blue:   versión actual en producción
    - Green:  nueva versión deployada en paralelo
    - Health Checks: 5 minutos antes de cambiar tráfico
    - Rollback automático si health check falla

    Deployment Group: guttman-prod-dg
      - ASG Target: guttman-app-asg
      - LoadBalancer: guttman-alb

  Manual Approval Gate (para main → producción)
    - Requiere aprobación de DevOps Lead
    - Ventana de deploy: solo horario laboral

CloudFormation:
  Stack: guttman-infrastructure
  Resources:
    - VPC, Subnets, Route Tables, Internet Gateway
    - Security Groups
    - ALB, Target Groups
    - ASG, Launch Template
    - RDS, ElastiCache
    - S3, IAM Roles
    - CloudWatch, SNS, Lambda

  Versionado en GitHub junto al código de la aplicación
  Stack Policy: previene eliminación accidental`}
          </CodeBlock>

          <h4>Implementación en Java/Spring Boot - Docker & CI/CD</h4>
          <CodeBlock language="dockerfile" title="Dockerfile para la Aplicación">
{`FROM amazoncorretto:21-alpine

# Instalar herramientas necesarias
RUN apk add --no-cache curl

WORKDIR /app

# Copiar JAR buildeable
ARG JAR_FILE=target/*.jar
COPY \${JAR_FILE} app.jar

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \\
    CMD curl -f http://localhost:8080/health || exit 1

# Configuración de memoria JVM para contenedores
ENV JAVA_OPTS="-XX:+UseG1GC -XX:MaxRAMPercentage=75.0 -XX:InitialRAMPercentage=25.0"

EXPOSE 8080

# Startup command
ENTRYPOINT ["sh", "-c", "java \$JAVA_OPTS -jar /app/app.jar"]`}
          </CodeBlock>

          <CodeBlock language="yaml" title="buildspec.yml para CodeBuild">
{`version: 0.2

phases:
  pre_build:
    commands:
      - echo Logging in to Amazon ECR...
      - aws ecr get-login-password --region \${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin \${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_DEFAULT_REGION}.amazonaws.com
      - REPOSITORY_URI=\${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_DEFAULT_REGION}.amazonaws.com/guttman
      - COMMIT_HASH=\$(echo \$CODEBUILD_RESOLVED_SOURCE_VERSION | cut -c 1-7)
      - IMAGE_TAG=\${COMMIT_HASH:=latest}
      - echo Starting Maven build...

  build:
    commands:
      - echo Build started on \`date\`
      - mvn clean package -DskipTests
      - echo Running unit tests...
      - mvn test
      - echo Building Docker image on \`date\`
      - docker build -t \$REPOSITORY_URI:\$IMAGE_TAG .
      - docker tag \$REPOSITORY_URI:\$IMAGE_TAG \$REPOSITORY_URI:latest
      - echo Pushing Docker image to ECR...
      - docker push \$REPOSITORY_URI:\$IMAGE_TAG
      - docker push \$REPOSITORY_URI:latest
      - echo Writing image definitions file...
      - printf '[{"name":"guttman-container","imageUri":"%s"}]' \$REPOSITORY_URI:\$IMAGE_TAG > imagedefinitions.json

  post_build:
    commands:
      - echo Build completed on \`date\`

artifacts:
  files:
    - imagedefinitions.json
    - target/app.jar

cache:
  paths:
    - '/root/.m2/**/*'`}
          </CodeBlock>

          <CodeBlock language="java" title="Spring Boot Application Main Class">
{`@SpringBootApplication
@EnableScheduling
@EnableAspectJAutoProxy
public class GuttmanApplication {

  public static void main(String[] args) {
    SpringApplication.run(GuttmanApplication.class, args);
  }

  @Bean
  public ServletWebServerFactory webServerFactory() {
    TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory();
    factory.addConnectorCustomizers(connector -> {
      // Graceful shutdown: esperar máximo 30 segundos
      connector.setProperty("connectionTimeout", "30000");
    });
    return factory;
  }

  @Bean
  public WebServerFactoryCustomizer<TomcatServletWebServerFactory> containerCustomizer() {
    return factory -> factory.setShutdown(Shutdown.GRACEFUL);
  }
}

// application-prod.yml
/*
server:
  port: 8080
  shutdown: graceful
  shutdown-wait-time: 30s

spring:
  application:
    name: guttman-app

  profiles:
    active: prod

  jpa:
    hibernate:
      ddl-auto: validate
    properties:
      hibernate.dialect: org.hibernate.dialect.PostgreSQL15Dialect
      hibernate.jdbc.batch_size: 20

  datasource:
    url: jdbc:postgresql://\${DB_HOST}:5432/guttman
    username: \${aws:secretsmanager:guttman/rds/username}
    password: \${aws:secretsmanager:guttman/rds/password}
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5

  cache:
    type: redis
    redis:
      host: \${REDIS_HOST}
      port: 6379

logging:
  level:
    root: INFO
    com.guttman: DEBUG
  file:
    name: /var/log/guttman/app.log
    max-size: 100MB
  pattern:
    console: "%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n"
*/ }`}
          </CodeBlock>

          <h4>Ejemplo: Integration Tests con Testcontainers</h4>
          <CodeBlock language="java" title="Integration Tests para CI/CD Pipeline">
{`@SpringBootTest
@Testcontainers
public class InformeIntegrationTest {

  @Container
  static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(DockerImageName.parse("postgres:15"))
      .withDatabaseName("guttman_test")
      .withUsername("test")
      .withPassword("test");

  @Container
  static GenericContainer<?> redis = new GenericContainer<>(DockerImageName.parse("redis:7-alpine"))
      .withExposedPorts(6379);

  @DynamicPropertySource
  static void configureTestProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", postgres::getJdbcUrl);
    registry.add("spring.datasource.username", postgres::getUsername);
    registry.add("spring.datasource.password", postgres::getPassword);

    registry.add("spring.data.redis.host", redis::getHost);
    registry.add("spring.data.redis.port", () -> redis.getMappedPort(6379));
  }

  @Autowired
  private InformeController controller;

  @Autowired
  private InformeRepository repository;

  @Test
  public void testCreateInforme() {
    CreateInformeRequest request = new CreateInformeRequest();
    request.setTitulo("Test Informe");
    request.setContenido("Contenido de prueba que tiene longitud suficiente");

    ResponseEntity<InformeDTO> response = controller.crearInforme(request, 1L);

    assertEquals(HttpStatus.CREATED, response.getStatusCode());
    assertNotNull(response.getBody());
    assertEquals("Test Informe", response.getBody().getTitulo());

    // Verificar que se guardó en BD
    List<Informe> informes = repository.findByUsuarioIdOrderByFechaCreacionDesc(1L);
    assertEquals(1, informes.size());
  }

  @Test
  public void testCacheInvalidation() {
    // Crear informe
    Informe informe = new Informe();
    informe.setTitulo("Test");
    informe.setContenido("Test content");
    informe.setUsuarioId(1L);
    repository.save(informe);

    // Actualizar informe
    informe.setTitulo("Updated");
    repository.save(informe);

    // Verificar que caché fue invalidado
    List<Informe> cached = controller.listarInformes(0, 10, 1L).getBody().getContent();
    assertEquals("Updated", cached.get(0).getTitulo());
  }

  @Test
  public void testUnauthorizedAccess() {
    // Usuario 1 crea un informe
    Informe informe = new Informe();
    informe.setTitulo("Privado");
    informe.setContenido("Contenido privado de usuario 1");
    informe.setUsuarioId(1L);
    Informe saved = repository.save(informe);

    // Usuario 2 intenta acceder (debería fallar)
    assertThrows(AccessDeniedException.class, () ->
        controller.obtenerInforme(saved.getId(), 2L)
    );
  }
}`}
          </CodeBlock>

          <h4>Ejemplo: CloudFormation Template en Java</h4>
          <CodeBlock language="java" title="CloudFormation Stack Helper">
{`@Service
public class CloudFormationService {

  @Autowired
  private CloudFormationClient cloudFormationClient;

  public void createStack(String stackName, String templateBody) {
    CreateStackRequest request = CreateStackRequest.builder()
        .stackName(stackName)
        .templateBody(templateBody)
        .capabilities(Capability.CAPABILITY_IAM, Capability.CAPABILITY_NAMED_IAM)
        .tags(
            Tag.builder().key("Environment").value("Production").build(),
            Tag.builder().key("Application").value("Guttman").build()
        )
        .build();

    cloudFormationClient.createStack(request);
  }

  public StackStatus getStackStatus(String stackName) {
    DescribeStacksRequest request = DescribeStacksRequest.builder()
        .stackName(stackName)
        .build();

    DescribeStacksResponse response = cloudFormationClient.describeStacks(request);
    return response.stacks().get(0).stackStatus();
  }

  public void updateStack(String stackName, String templateBody) {
    try {
      UpdateStackRequest request = UpdateStackRequest.builder()
          .stackName(stackName)
          .templateBody(templateBody)
          .capabilities(Capability.CAPABILITY_IAM, Capability.CAPABILITY_NAMED_IAM)
          .build();

      cloudFormationClient.updateStack(request);
    } catch (CloudFormationException e) {
      if (e.awsErrorDetails().errorMessage().contains("No updates are to be performed")) {
        // No hay cambios, no es un error
        return;
      }
      throw e;
    }
  }

  public void deleteStack(String stackName) {
    DeleteStackRequest request = DeleteStackRequest.builder()
        .stackName(stackName)
        .build();

    cloudFormationClient.deleteStack(request);
  }
}`}
          </CodeBlock>

          <h4>Deployment Health Check Script</h4>
          <CodeBlock language="bash" title="Post-Deployment Validation">
{`#!/bin/bash

# Script para validar despliegue en CI/CD pipeline

set -e

ENDPOINT="https://guttman-app.example.com"
MAX_RETRIES=30
RETRY_INTERVAL=2

echo "Esperando a que la aplicación esté disponible..."

for i in $(seq 1 $MAX_RETRIES); do
  if curl -f -s "$ENDPOINT/health" > /dev/null; then
    echo "✓ Health check passed"

    # Validar base de datos
    curl -f -s "$ENDPOINT/api/informes" -H "Authorization: Bearer $TEST_TOKEN" | grep -q "informes"
    echo "✓ Database connectivity verified"

    # Validar Redis
    curl -f -s "$ENDPOINT/health" | grep -q "redis"
    echo "✓ Redis connectivity verified"

    exit 0
  fi

  echo "Intento $i/$MAX_RETRIES... esperando ${RETRY_INTERVAL}s"
  sleep $RETRY_INTERVAL
done

echo "✗ Health check failed after $MAX_RETRIES intentos"
exit 1`}
          </CodeBlock>

          <h3>3.7 Optimización de Costos</h3>
          <CodeBlock language="yaml" title="Estrategia de Costos">
{`Fase 1 (Meses 1-3): On-Demand
  - Medición real de consumo
  - Datos de baseline
  - Sin compromisos

Fase 2 (Meses 4+): Reserved Instances
  - 1-año term, all-upfront para:
    * EC2: 2 instancias t3.medium (carga base)
    * RDS: db.t3.medium Multi-AZ
    * Ahorro: ~30-40% comparado con On-Demand

  - On-Demand para picos (escalado > 2 instancias)

Lambda:
  - Tareas asíncronas (procesamiento de reportes, notificaciones)
  - Mucho más barato que EC2 para cargas esporádicas
  - Trigger: SQS, EventBridge

S3 Lifecycle:
  - Reduce costos 89%: Standard → IA → Glacier
  - Datos de 1 año ahorran: $5/mes per 1TB

Scheduled Scaling:
  - Reducir a 1 instancia fuera de horas laborales
  - Escenarios: fines de semana, festivos, horario nocturno

AWS Budget:
  - Budget mensual: \$XXX (ajustar según realidad)
  - Alertas en:
    * 80% del budget → investigación
    * 100% del budget → escalación

  - Cost Explorer: desglose por:
    * Servicio (EC2, RDS, S3, Lambda)
    * Ambiente (prod, staging)
    * Proyecto

Spot Instances (Staging):
  - Ahorro de hasta 70%
  - Para ambiente de staging (no crítico)
  - Interrupción tolerable para testing`}
          </CodeBlock>
        </section>
      )}

      {/* 5. Justificación de AWS */}
      {(expandedSection === null || expandedSection === 'justificacion') && (
        <section className="lesson-section">
          <h2>✅ Justificación de la Elección de AWS</h2>

          <p>
            ¿Por qué AWS y no Azure, GCP u otro proveedor? La decisión se basa en criterios técnicos y de negocio:
          </p>

          <table className="lesson-table">
            <thead>
              <tr>
                <th>Criterio</th>
                <th>Justificación para Guttman</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Funcionalidad</strong></td>
                <td>
                  AWS ofrece todos los servicios necesarios (RDS, S3, Lambda, CodePipeline,
                  CloudWatch) con madurez probada en producción. Ecosistema más completo.
                </td>
              </tr>
              <tr>
                <td><strong>Alcance Global</strong></td>
                <td>
                  La región eu-west-1 (Irlanda) cumple con RGPD. Datos en Europa,
                  alineado con normativa española. Múltiples AZ para HA.
                </td>
              </tr>
              <tr>
                <td><strong>Documentación</strong></td>
                <td>
                  La documentación de AWS es la más completa. Comunidad enorme.
                  AWS Training oficial. Fácil encontrar soluciones a problemas.
                </td>
              </tr>
              <tr>
                <td><strong>Costos</strong></td>
                <td>
                  Modelo pay-as-you-go flexible. Reserved Instances permiten optimizar
                  según crecimiento real. Presupuesto predecible.
                </td>
              </tr>
              <tr>
                <td><strong>Seguridad &amp; Compliance</strong></td>
                <td>
                  ISO 27001, SOC 2, ENS (Esquema Nacional de Seguridad). Certificaciones
                  relevantes para sector público/privado español.
                </td>
              </tr>
              <tr>
                <td><strong>Integración con Java</strong></td>
                <td>
                  SDK de AWS para Java (v2) tiene integración nativa con Spring Boot,
                  Hibernate, frameworks Java. Desarrollo fluido.
                </td>
              </tr>
              <tr>
                <td><strong>Soporte</strong></td>
                <td>
                  Múltiples niveles de soporte (Business, Enterprise).
                  AWS Partner Network con proveedores locales en España.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="comparison-box">
            <h3>Comparación rápida: AWS vs Alternativas</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>AWS</th>
                  <th>Azure</th>
                  <th>GCP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Market Share</td>
                  <td>31%</td>
                  <td>25%</td>
                  <td>11%</td>
                </tr>
                <tr>
                  <td>Servicios disponibles</td>
                  <td>200+</td>
                  <td>150+</td>
                  <td>100+</td>
                </tr>
                <tr>
                  <td>Java integration</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>RGPD compliance (EU)</td>
                  <td>✓ Múltiples regiones EU</td>
                  <td>✓ Principalmente EU</td>
                  <td>✓ Región EU disponible</td>
                </tr>
                <tr>
                  <td>Documentación</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Learning curve</td>
                  <td>Media (mucho que aprender)</td>
                  <td>Media (conceptos similares)</td>
                  <td>Baja (más simple)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-box">
            <strong>⚠️ Nota importante:</strong> La elección de AWS no significa que sea "la mejor"
            absolutamente. Depende del contexto. Para este proyecto específico del Laboratorio Guttman,
            AWS ofrece el mejor balance entre funcionalidad, documentación, integración Java y costos.
          </div>
        </section>
      )}

      {/* 6. Plan de Implementación */}
      {(expandedSection === null || expandedSection === 'implementacion') && (
        <section className="lesson-section">
          <h2>💻 Plan de Implementación</h2>

          <h3>Fases del Proyecto</h3>

          <CodeBlock language="yaml" title="Roadmap de Implementación (16 semanas)">
{`Fase 1: Infraestructura Base (Semanas 1-4)
  Objetivos:
    - VPC, subnets, security groups
    - EC2, ALB, ASG
    - RDS PostgreSQL Multi-AZ
    - S3 y IAM roles

  Hitos:
    - Semana 1: VPC creada y validada (ping entre subnets)
    - Semana 2: EC2 + ALB funcionando con app placeholder
    - Semana 3: RDS Multi-AZ en modo failover
    - Semana 4: Backup testing (restore de snapshot)

  Equipo: Infrastructure Lead + 2 DevOps engineers

Fase 2: Aplicación & Datos (Semanas 5-8)
  Objetivos:
    - Migrar aplicación Spring Boot a EC2
    - Configurar conexión a RDS
    - Implementar S3 SDK para documentos
    - Cache con ElastiCache Redis

  Hitos:
    - Semana 5: Aplicación desplegada en EC2 (manual)
    - Semana 6: Aplicación conectada a RDS
    - Semana 7: Upload/download de documentos en S3
    - Semana 8: Redis caché integrado

  Equipo: Backend developers + DBA

Fase 3: CI/CD & Automatización (Semanas 9-12)
  Objetivos:
    - CodePipeline desde GitHub
    - CodeBuild + Docker
    - CodeDeploy blue/green
    - CloudFormation IaC

  Hitos:
    - Semana 9: Docker image buildeable
    - Semana 10: ECR setup y auto-push
    - Semana 11: CodePipeline funcionando
    - Semana 12: Blue/green deployment testeado

  Equipo: DevOps lead + Platform engineers

Fase 4: Seguridad & Monitorización (Semanas 13-14)
  Objetivos:
    - CloudWatch dashboards y alarmas
    - X-Ray tracing
    - CloudTrail + GuardDuty
    - Security groups refinados

  Hitos:
    - Semana 13: Todas las métricas en CloudWatch
    - Semana 14: Alarmas configuradas y testeadas

  Equipo: Security engineer + DevOps

Fase 5: Load Testing & Tuning (Semana 15)
  Objetivos:
    - Validar Auto Scaling bajo carga
    - Medir latencias y throughput
    - Optimizar RDS queries

  Equipo: QA + Performance engineer

Fase 6: Cutover & Go-Live (Semana 16)
  Objetivos:
    - DNS switchover
    - Data migration (si es necesario)
    - 24/7 monitoring
    - Post-go-live support

  Plan de rollback:
    - 24 horas para volver a infraestructura anterior
    - Ambiente paralelo en standby`}
          </CodeBlock>

          <h3>Cómo será la aplicación Spring Boot en esta arquitectura</h3>

          <CodeBlock language="java" title="Configuración de la Aplicación Spring Boot">
{`// application-prod.yml
spring:
  application:
    name: guttman-app

  datasource:
    url: jdbc:postgresql://guttman-rds.eu-west-1.rds.amazonaws.com:5432/guttman
    username: \${aws:secretsmanager:guttman/rds/username}
    password: \${aws:secretsmanager:guttman/rds/password}
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 30000

  jpa:
    hibernate:
      ddl-auto: validate  # En producción: validate, no create
    properties:
      hibernate.dialect: org.hibernate.dialect.PostgreSQL15Dialect
      hibernate.jdbc.batch_size: 20

  cache:
    type: redis
    redis:
      host: guttman-cache.eu-west-1.cache.amazonaws.com
      port: 6379
      timeout: 2000

aws:
  region: eu-west-1

  s3:
    bucket: guttman-documentos
    expiration-minutes: 15  # URLs presignadas

  cloudwatch:
    namespace: Guttman/Produccion
    enabled: true

  secrets-manager:
    enabled: true

management:
  endpoints:
    web:
      exposure: include: health,metrics,prometheus

  cloudwatch:
    metrics:
      export:
        enabled: true
        namespace: Guttman/Aplicacion

  tracing:
    brave:
      sampler:
        probability: 0.1  # 10% de requests trackeados

logging:
  level:
    root: INFO
    com.guttman: DEBUG

  pattern:
    console: "%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n"
    file: "%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n"

  file:
    name: /var/log/guttman/app.log
    max-size: 100MB
    max-history: 7

# CloudWatch Logs integration (via AWS SDK)
  awslogs:
    log-group: /guttman/aplicacion
    log-stream: app-\${HOSTNAME}

server:
  port: 8080
  shutdown: graceful
  shutdown-wait-time: 30s  # Para graceful shutdown`}
          </CodeBlock>

          <h3>Consideraciones de Implementación</h3>
          <ul>
            <li>
              <strong>Data Migration:</strong> Si hay datos existentes, plan ETL desde infraestructura actual
            </li>
            <li>
              <strong>Rollback Plan:</strong> Mantener infraestructura antigua durante 30 días post-go-live
            </li>
            <li>
              <strong>Training:</strong> Capacitar al equipo de ops en AWS (CloudWatch, RDS, Security Groups)
            </li>
            <li>
              <strong>Runbooks:</strong> Documentación de procedimientos operacionales (failover manual, escalado, rollback)
            </li>
            <li>
              <strong>Compliance:</strong> Validar RGPD, auditoría y logging antes del go-live
            </li>
          </ul>
        </section>
      )}

      {/* 7. Estimación de Costos */}
      {(expandedSection === null || expandedSection === 'estimacion') && (
        <section className="lesson-section">
          <h2>💰 Estimación de Costos Mensuales</h2>

          <p>
            Usando AWS Pricing Calculator para eu-west-1 (precios EMEA):
          </p>

          <table className="lesson-table">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Configuración</th>
                <th>Mensual (On-Demand)</th>
                <th>Mensual (1yr Reserved)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EC2</strong></td>
                <td>2x t3.medium (2 vCPU, 4GB) base + picos On-Demand</td>
                <td>€90 (base) + €30 (picos)</td>
                <td>€60 (reserved) + €30 (picos)</td>
              </tr>
              <tr>
                <td><strong>Application Load Balancer</strong></td>
                <td>1x ALB, ~1M requests/mes</td>
                <td>€15 + €5 (requests)</td>
                <td>€20 (sin variación)</td>
              </tr>
              <tr>
                <td><strong>RDS PostgreSQL</strong></td>
                <td>db.t3.medium Multi-AZ, 100GB storage</td>
                <td>€110 (compute) + €20 (storage)</td>
                <td>€70 (reserved) + €20 (storage)</td>
              </tr>
              <tr>
                <td><strong>ElastiCache Redis</strong></td>
                <td>2x cache.t3.micro (2 nodes, failover)</td>
                <td>€15</td>
                <td>€12 (reserved)</td>
              </tr>
              <tr>
                <td><strong>S3 Storage</strong></td>
                <td>~500GB total (docs + logs), lifecycle</td>
                <td>€10</td>
                <td>€10 (sin variación)</td>
              </tr>
              <tr>
                <td><strong>Lambda</strong></td>
                <td>Procesamiento asíncrono (~1M invocaciones/mes)</td>
                <td>€3</td>
                <td>€3 (sin variación)</td>
              </tr>
              <tr>
                <td><strong>Data Transfer</strong></td>
                <td>Outbound (inter-AZ, internet)</td>
                <td>€10</td>
                <td>€10 (sin variación)</td>
              </tr>
              <tr>
                <td><strong>CloudWatch</strong></td>
                <td>Custom metrics, logs, dashboards</td>
                <td>€5</td>
                <td>€5 (sin variación)</td>
              </tr>
              <tr>
                <td><strong>CodePipeline, CodeBuild, CodeDeploy</strong></td>
                <td>CI/CD automatizado (~20 deployments/mes)</td>
                <td>€15</td>
                <td>€15 (sin variación)</td>
              </tr>
              <tr>
                <td><strong>Secrets Manager, KMS, IAM</strong></td>
                <td>Gestión de credenciales y encriptación</td>
                <td>€5</td>
                <td>€5 (sin variación)</td>
              </tr>
              <tr>
                <td></td>
                <td><strong>TOTAL MENSUAL</strong></td>
                <td><strong>€283</strong></td>
                <td><strong>€230</strong></td>
              </tr>
            </tbody>
          </table>

          <div className="insight-box">
            <strong>💡 Análisis financiero:</strong>
            <ul>
              <li><strong>On-Demand:</strong> €283/mes = ~€3,396/año. Ideal para fases iniciales sin compromisos.</li>
              <li><strong>Con Reserved Instances (1 año, all-upfront):</strong> €230/mes = ~€2,760/año. Ahorro de €636/año (19%).</li>
              <li><strong>ROI:</strong> Si la infraestructura anterior costaba €500+/mes, amortizamos en menos de 6 meses.</li>
              <li><strong>Scalability:</strong> Si necesitamos escalar a 6 instancias, el cost es ~€400/mes (vs €600/mes on-prem).</li>
            </ul>
          </div>

          <h3>Comparación con infraestructura on-premise</h3>
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>AWS Cloud (esta arquitectura)</th>
                <th>On-Premise (típico)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Inversión inicial</strong></td>
                <td>€0 (solo suscripción)</td>
                <td>€15,000-€25,000 (servidores, racks)</td>
              </tr>
              <tr>
                <td><strong>Costo mensual</strong></td>
                <td>€230-€283</td>
                <td>€300-€400 (depreciation + electricidad + cooling + mantenimiento)</td>
              </tr>
              <tr>
                <td><strong>Disponibilidad (SLA)</strong></td>
                <td>99.95% (Multi-AZ)</td>
                <td>95-99% (depende de setup)</td>
              </tr>
              <tr>
                <td><strong>Escalabilidad</strong></td>
                <td>Automática en minutos</td>
                <td>Manual en semanas (compra de hardware)</td>
              </tr>
              <tr>
                <td><strong>Seguridad/Compliance</strong></td>
                <td>ISO 27001, SOC 2, RGPD built-in</td>
                <td>Responsabilidad 100% del cliente</td>
              </tr>
              <tr>
                <td><strong>Backup/DR</strong></td>
                <td>Automático (snapshots RDS, S3 versioning)</td>
                <td>Manual (costo adicional)</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}

      <section className="lesson-section lesson-summary">
        <h2>🎓 Resumen del Curso AWS Completo</h2>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Sesión</th>
              <th>Contenido Principal</th>
              <th>Aplicación al Laboratorio Guttman</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td>Introducción al Cloud y AWS</td>
              <td>Entender por qué modernizar con cloud</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Arquitectura de Software y Proveedores</td>
              <td>Criterios para elegir AWS sobre Azure/GCP</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>IAM y Seguridad</td>
              <td>Grupos de usuarios, roles, Secrets Manager</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td>EC2 y Lambda</td>
              <td>Auto Scaling Group + Lambda para tareas async</td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td>S3, EBS, EFS</td>
              <td>Almacenamiento de documentos con lifecycle</td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td>RDS y DynamoDB</td>
              <td>PostgreSQL Multi-AZ para datos relaciones</td>
            </tr>
            <tr>
              <td><strong>7</strong></td>
              <td>VPC y Redes</td>
              <td>Arquitectura de 3 capas con subnets públicas/privadas</td>
            </tr>
            <tr>
              <td><strong>8</strong></td>
              <td>CloudWatch y Costos</td>
              <td>Monitorización 24/7 y control de gastos</td>
            </tr>
            <tr>
              <td><strong>9</strong></td>
              <td>CI/CD e Infraestructura como Código</td>
              <td>CodePipeline automatizado, CloudFormation</td>
            </tr>
            <tr>
              <td><strong>10</strong></td>
              <td><strong>Proyecto Final: Arquitectura Integrada</strong></td>
              <td><strong>Laboratorio Guttman en AWS (esta lección)</strong></td>
            </tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>🚀 Siguiente paso:</strong> Este documento es el blueprint técnico. La implementación real
          requiere:
          <ul>
            <li>Equipo dedicado (DevOps + Backend + QA)</li>
            <li>Presupuesto aprobado (~€300/mes + costos iniciales)</li>
            <li>Timeline realista (16 semanas mínimo)</li>
            <li>Plan de training para equipo de ops</li>
            <li>Runbooks y procedimientos documentados</li>
            <li>Pruebas de failover y disaster recovery antes de go-live</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>📚 Recursos Complementarios</h2>
        <ul>
          <li>
            <a href="https://aws.amazon.com/pricing/calculator/" target="_blank" rel="noopener noreferrer">
              AWS Pricing Calculator
            </a>
            {' '}- Calcula costos exactos según tu configuración
          </li>
          <li>
            <a href="https://docs.aws.amazon.com/whitepapers/" target="_blank" rel="noopener noreferrer">
              AWS Whitepapers
            </a>
            {' '}- Documentos técnicos de referencia
          </li>
          <li>
            <a href="https://aws.amazon.com/architecture/well-architected/" target="_blank" rel="noopener noreferrer">
              AWS Well-Architected Framework
            </a>
            {' '}- Principios de buena arquitectura
          </li>
          <li>
            <a href="https://docs.aws.amazon.com/javadeveloper/" target="_blank" rel="noopener noreferrer">
              AWS SDK for Java Developer Guide
            </a>
            {' '}- Referencia de integración Java
          </li>
        </ul>
      </section>
    </div>
  );
};
