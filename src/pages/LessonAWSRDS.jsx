import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSRDS() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'RDS — Relational Database Service',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>RDS</strong> es el servicio de bases de datos relacionales gestionado de AWS. AWS se encarga de la instalación, parches, backups, replicación y mantenimiento. Tú solo te enfocas en los datos y la optimización.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En lugar de instalar una base de datos en una instancia EC2 y gestionarla manualmente, RDS ofrece una solución completamente gestionada con alta disponibilidad integrada.
          </p>

          <InfoBox type="tip" title="Ventaja clave">
            RDS es más costoso por capacidad bruta que MySQL en EC2, pero el tiempo ahorrado en mantenimiento y la confiabilidad que gainas lo hace económicamente superior en producción.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Motores de Base de Datos Soportados',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            RDS soporta los motores relacionales más utilizados en proyectos Java:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            {[
              {
                title: 'MySQL 8.x',
                icon: '🐬',
                color: '#00758f',
                description: 'Motor open source más popular',
                useCases: 'Proyectos web, máxima compatibilidad, ecosistema amplio de herramientas',
                bestFor: 'Startups, aplicaciones web estándar'
              },
              {
                title: 'PostgreSQL 15/16',
                icon: '🐘',
                color: '#336791',
                description: 'Base de datos más avanzada',
                useCases: 'Consultas complejas, tipos de datos avanzados, extensiones personalizadas',
                bestFor: 'Proyectos con lógica compleja, data warehouse, análisis'
              },
              {
                title: 'MariaDB',
                icon: '🗄️',
                color: '#003545',
                description: 'Fork de MySQL con licencia abierta',
                useCases: 'Alternativa MySQL, mejor rendimiento, características adicionales',
                bestFor: 'Migración de MySQL, máxima compatibilidad'
              },
              {
                title: 'Oracle Database',
                icon: '🦁',
                color: '#f80000',
                description: 'Base de datos empresarial',
                useCases: 'Migración de sistemas legacy, procedimientos PL/SQL complejos',
                bestFor: 'Empresas con inversión en Oracle, aplicaciones ERP'
              },
              {
                title: 'SQL Server',
                icon: '🔷',
                color: '#cc2927',
                description: 'Base de datos de Microsoft',
                useCases: 'Integración con ecosistema Microsoft, .NET, Windows',
                bestFor: 'Empresas Microsoft, aplicaciones .NET'
              },
              {
                title: 'Amazon Aurora',
                icon: '✨',
                color: '#ff9900',
                description: 'Motor propietario de AWS (MySQL/PostgreSQL compatible)',
                useCases: 'Máximo rendimiento, alta disponibilidad, escalabilidad automática',
                bestFor: 'Aplicaciones críticas, máximas prestaciones, crecimiento predecible'
              }
            ].map((motor, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: `3px solid ${motor.color}`,
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${motor.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{motor.icon}</span>
                  <h3 style={{ margin: 0, color: motor.color, fontSize: '1.2rem' }}>{motor.title}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
                  <strong>{motor.description}</strong>
                </p>
                <div style={{ borderTop: `1px solid ${motor.color}20`, paddingTop: '1rem', marginTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                    <strong>Casos de uso:</strong> {motor.useCases}
                  </p>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: motor.color }}>
                    ✓ {motor.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Alta Disponibilidad — Multi-AZ',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Multi-AZ</strong> (Multi Availability Zone) crea automáticamente una réplica sincrónica de tu base de datos en otra zona de disponibilidad (AZ). Si la instancia principal falla, AWS realiza un <strong>failover automático</strong> en menos de 2 minutos, sin que la aplicación tenga que cambiar la cadena de conexión.
          </p>

          <div style={{
            backgroundColor: '#e8f4f8',
            border: '2px solid #2196F3',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#1565c0', marginTop: 0 }}>Garantía Multi-AZ</h4>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Failover automático:</strong> menos de 2 minutos</li>
              <li><strong>Replicación sincrónica:</strong> datos siempre consistentes</li>
              <li><strong>Sin cambio de endpoint:</strong> la aplicación sigue conectándose al mismo DNS</li>
              <li><strong>Incremento de costo:</strong> aproximadamente +100% (se duplica)</li>
            </ul>
          </div>

          <InfoBox type="warning" title="Producción">
            En producción, <strong>siempre activa Multi-AZ</strong>. El coste adicional (~100%) es mínimo comparado con las pérdidas por caídas impredecibles.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Read Replicas — Distribuir Lectura',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Las <strong>Read Replicas</strong> son copias asincrónicas de la base de datos principal que aceptan lecturas. Permiten distribuir consultas de solo lectura (reportes, dashboards, análisis) sin sobrecargar la instancia principal.
          </p>

          <div style={{
            backgroundColor: '#f3e5f5',
            border: '2px solid #9c27b0',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#6a1b9a', marginTop: 0 }}>Características</h4>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Hasta 5 réplicas</strong> de lectura por instancia principal</li>
              <li><strong>Cross-region:</strong> réplicas en otras regiones para baja latencia global</li>
              <li><strong>Replicación asincrónica:</strong> pequeño lag de milisegundos</li>
              <li><strong>Costo:</strong> cada réplica cuesta como una instancia más, pero el endpoint es diferente</li>
              <li><strong>Uso:</strong> Spring Boot con DataSource secundario para consultas de lectura</li>
            </ul>
          </div>

          <CodeBlock
            code={`// Spring Boot - Usar Read Replica para consultas
@Component
public class ReporteService {
  @Autowired
  private ReporteRepository reporteRepository;

  // Spring DataSource configurado apuntando a la Read Replica
  @Repository
  public interface ReporteRepository
    extends JpaRepository<Reporte, Long> {

    // Esta consulta se ejecuta en la Read Replica
    List<Reporte> findByMesAndAno(int mes, int ano);
  }
}`}
            language="java"
            title="Read Replica en Spring Boot"
          />
        </>
      )
    },

    {
      title: 'Configuración en Spring Boot',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Conectar una aplicación Spring Boot con RDS es simple. AWS RDS proporciona un endpoint DNS que actualizas en las propiedades de Spring.
          </p>

          <CodeBlock
            code={`# application.properties para RDS PostgreSQL

# Conexión principal (escritura)
spring.datasource.url=jdbc:postgresql://guttman-db.cluster-xyz.eu-west-1.rds.amazonaws.com:5432/guttman
spring.datasource.username=\${DB_USER}
spring.datasource.password=\${DB_PASS}
spring.datasource.driver-class-name=org.postgresql.Driver

# Configuración del pool de conexiones (HikariCP)
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=2
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.idle-timeout=600000

# Hibernate configuration
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL15Dialect
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true`}
            language="properties"
            title="Conexión Spring Boot a RDS"
          />

          <InfoBox type="security" title="Seguridad">
            <strong>Nunca</strong> pongas usuario y contraseña directamente en application.properties. Usa:
            <ul style={{ marginTop: '1rem', marginBottom: 0 }}>
              <li>Variables de entorno: ${'{DB_USER}'}, ${'{DB_PASS}'}</li>
              <li>AWS Secrets Manager para credenciales automáticas</li>
              <li>Roles IAM en EC2/ECS que se autentican automáticamente</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Amazon Aurora — Motor de Última Generación',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Aurora</strong> es el motor de base de datos propietario de AWS, compatible con MySQL y PostgreSQL. Ofrece hasta <strong>5 veces más rendimiento</strong> que MySQL estándar y escala automáticamente.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#fff3e0',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#e65100', marginTop: 0 }}>Aurora Provisioned</h4>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                <li>Especificas la capacidad (vCPU, RAM)</li>
                <li>Escalas manualmente o con Auto Scaling</li>
                <li>Almacenamiento escala automáticamente hasta 128 TB</li>
                <li>Ideal para cargas estables predecibles</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f0f4c3',
              border: '2px solid #cddc39',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#827717', marginTop: 0 }}>Aurora Serverless v2</h4>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                <li>Escalado automático por demanda</li>
                <li>Pagas solo por lo que usas</li>
                <li>Perfecto para cargas variables</li>
                <li>Ideales para nuevos proyectos</li>
              </ul>
            </div>
          </div>

          <InfoBox type="tip" title="Recomendación">
            Aurora es la mejor opción para nuevos proyectos. Aurora Serverless v2 es especialmente bueno si no conoces el patrón de carga inicial.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Tipos de Instancia RDS',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El tipo de instancia determina la CPU, RAM y red disponibles. AWS clasifica las instancias por familia:
          </p>

          <Table
            headers={['Familia', 'Características', 'Caso de Uso']}
            rows={[
              ['db.t3 / db.t4', 'General purpose, buena relación CPU/RAM', 'Desarrollo, testing, aplicaciones estándar'],
              ['db.r6i / db.r7i', 'Memory Optimized, mucha RAM', 'Bases de datos grandes en memoria, caché'],
              ['db.m6i / db.m7i', 'General compute-optimized', 'Producción con carga estable'],
              ['db.x2idn', 'Storage-optimized, IOPS alta', 'Data warehouse, análisis intensivo']
            ]}
          />

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Para empezar</h4>
            <p style={{ fontSize: '1rem', marginBottom: 0 }}>
              Usa <strong>db.t3.medium</strong> (2 vCPU, 4 GB RAM) para nuevos proyectos. Escala solo cuando las métricas de RDS lo justifiquen (CPU &gt; 80% sostenido, conexiones máximas).
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Backups y Recuperación',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            RDS gestiona automáticamente los backups. Por defecto, retiene backups durante 7 días. Puedes restaurar a cualquier punto en el tiempo dentro de la ventana de retención.
          </p>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Estrategia de Backup Recomendada</h4>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Backups automáticos:</strong> retención de 30 días (vs. default 7)</li>
              <li><strong>Snapshot manual:</strong> antes de cambios mayores (migraciones, upgrades)</li>
              <li><strong>Copy a otra región:</strong> protección ante desastres regionales</li>
              <li><strong>AWS Backup:</strong> gestión centralizada de backups de múltiples servicios</li>
            </ul>
          </div>

          <CodeBlock
            code={`# Crear backup manual con AWS CLI
aws rds create-db-snapshot \
  --db-instance-identifier guttman-db \
  --db-snapshot-identifier guttman-db-backup-2024-01

# Restaurar desde backup
aws rds restore-db-instance-from-db-snapshot \
  --db-instance-identifier guttman-db-restored \
  --db-snapshot-identifier guttman-db-backup-2024-01

# Point-in-time restore (restaurar a un momento específico)
aws rds restore-db-instance-to-point-in-time \
  --source-db-instance-identifier guttman-db \
  --target-db-instance-identifier guttman-db-recovered \
  --restore-time 2024-01-15T14:30:00Z`}
            language="bash"
            title="Backups con AWS CLI"
          />
        </>
      )
    },

    {
      title: 'Monitoreo de RDS',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            CloudWatch publica automáticamente métricas de RDS. Las métricas más críticas a monitorear son:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0'
          }}>
            {[
              {
                metric: 'CPU Utilization',
                warning: '> 80%',
                action: 'Escalar instancia o revisar queries lentas',
                icon: '⚙️'
              },
              {
                metric: 'Database Connections',
                warning: '> 80% del máximo',
                action: 'Aumentar max_connections o revisar pool de conexiones',
                icon: '🔗'
              },
              {
                metric: 'Free Storage Space',
                warning: '< 5 GB',
                action: 'Aumentar tamaño de almacenamiento EBS',
                icon: '💾'
              },
              {
                metric: 'Read/Write Latency',
                warning: '> 50ms',
                action: 'Revisar índices, analizar queries, considerar tipo instancia',
                icon: '⏱️'
              },
              {
                metric: 'Replication Lag',
                warning: '> 1 segundo',
                action: 'En Read Replicas, indica sobrecarga de principal',
                icon: '🔄'
              },
              {
                metric: 'Failed SQL Server Agent',
                warning: 'Cualquier fallo',
                action: 'Investigar logs, comunicarse con soporte AWS',
                icon: '🚨'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#fafafa',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h4 style={{ color: '#333', marginTop: 0, marginBottom: '0.5rem' }}>{item.metric}</h4>
                <p style={{ fontSize: '0.9rem', color: '#e74c3c', marginBottom: '0.5rem' }}>
                  <strong>⚠️ Alerta si:</strong> {item.warning}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: 0 }}>
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Comparativa: RDS vs EC2 autoinstalado',
      content: (
        <>
          <Table
            headers={['Aspecto', 'RDS Gestionado', 'Base de datos en EC2']}
            rows={[
              ['Instalación y configuración', 'AWS lo hace (minutos)', 'Tú lo haces (horas)'],
              ['Parches de SO y motor', 'AWS automático en ventana de mantenimiento', 'Responsabilidad tuya'],
              ['Backups', 'Automáticos y configurables', 'Tú los configuras con scripts'],
              ['High Availability (Multi-AZ)', 'Integrada con failover automático', 'Requiere extra hardware y software'],
              ['Monitoreo', 'CloudWatch automático', 'Necesitas instalar agent'],
              ['Read Replicas', 'Integrado con replicación automática', 'Manual con configuración MySQL'],
              ['Coste inicial', 'Más alto por hora', 'Más bajo en apariencia'],
              ['Coste operativo', 'Bajo (AWS gestiona)', 'Alto (tu equipo gestiona)'],
              ['Escalabilidad de almacenamiento', 'Automática en Aurora', 'Manual (agregar discos)']
            ]}
          />

          <InfoBox type="tip" title="Decisión">
            Para <strong>producción</strong>, RDS es la opción correcta. El coste de licencia es superado por el tiempo ahorrado. Para <strong>desarrollo y testing</strong>, EC2 autoinstalado es aceptable.
          </InfoBox>
        </>
      )
    },

    {
      title: '🎯 Ejemplo Práctico: Crear RDS PostgreSQL y Conectarse',
      content: (
        <>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555' }}>
            En este ejemplo práctico crearemos una instancia RDS PostgreSQL y nos conectaremos desde una aplicación Java.
          </p>

          <h3>Paso 1: Crear RDS PostgreSQL desde AWS Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>RDS Console → Crear Database</strong></li>
            <li>Motor: <strong>PostgreSQL 15</strong></li>
            <li>Clase DB: <strong>db.t3.micro</strong> (gratis en free tier)</li>
            <li>Nombre DB: <strong>guttman_db</strong></li>
            <li>Usuario maestro: <strong>admin</strong></li>
            <li>Contraseña: <strong>GeneraContraseña123!</strong></li>
            <li>VPC: Seleccionar tu VPC o default</li>
            <li>Public accessibility: <strong>No</strong> (solo desde EC2 en misma VPC)</li>
            <li>Backup retention: <strong>7 días</strong></li>
            <li>Click <strong>Create database</strong></li>
          </ol>

          <h3>Paso 2: Esperar 5-10 minutos</h3>
          <p>AWS crea la instancia, asigna endpoint, configura storage y backups.</p>

          <h3>Paso 3: Obtener Endpoint</h3>
          <p>En la consola de RDS, copiar el <strong>Endpoint</strong>. Será algo como:</p>
          <CodeBlock language="text">
{`guttman-db.c9akciq32.eu-west-1.rds.amazonaws.com`}
          </CodeBlock>

          <h3>Paso 4: Conectar desde Java/Spring Boot</h3>
          <CodeBlock language="xml" title="pom.xml - Dependencias">
{`<!-- PostgreSQL Driver -->
<dependency>
  <groupId>org.postgresql</groupId>
  <artifactId>postgresql</artifactId>
  <version>42.7.0</version>
</dependency>

<!-- Spring Data JPA -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>`}
          </CodeBlock>

          <CodeBlock language="yaml" title="application.properties">
{`spring.datasource.url=jdbc:postgresql://guttman-db.c9akciq32.eu-west-1.rds.amazonaws.com:5432/guttman_db
spring.datasource.username=admin
spring.datasource.password=GeneraContraseña123!
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQL15Dialect
spring.jpa.show-sql=false

# HikariCP Connection Pool
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=2
spring.datasource.hikari.connection-timeout=30000`}
          </CodeBlock>

          <h3>Paso 5: Crear Entity y Repository</h3>
          <CodeBlock language="java" title="Usuario.java - Entity">
{`@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(nullable = false)
  private String nombre;

  @Column(name = "fecha_registro")
  private LocalDateTime fechaRegistro;

  @PrePersist
  protected void onCreate() {
    fechaRegistro = LocalDateTime.now();
  }
}

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
  Optional<Usuario> findByEmail(String email);
  List<Usuario> findByNombreContainingIgnoreCase(String nombre);
}`}
          </CodeBlock>

          <h3>Paso 6: Probar Conexión</h3>
          <CodeBlock language="java" title="Test.java">
{`@SpringBootTest
public class RDSConnectionTest {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Test
  public void testInsertarYBuscar() {
    // Insertar usuario
    Usuario usuario = new Usuario();
    usuario.setEmail("juan@example.com");
    usuario.setNombre("Juan García");
    Usuario saved = usuarioRepository.save(usuario);

    // Verificar que se guardó
    assertNotNull(saved.getId());
    assertTrue(saved.getId() > 0);

    // Buscar por email
    Optional<Usuario> found = usuarioRepository.findByEmail("juan@example.com");
    assertTrue(found.isPresent());
    assertEquals("Juan García", found.get().getNombre());

    System.out.println("✓ Conexión a RDS exitosa!");
  }
}`}
          </CodeBlock>

          <h3>Verificación en AWS Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>RDS → Bases de datos → guttman_db</strong></li>
            <li>Tab <strong>Monitoring</strong>: Ver métricas (CPU, conexiones, latencia)</li>
            <li>Tab <strong>Logs</strong>: Ver logs de PostgreSQL si hay errores</li>
            <li>Pestaña <strong>Snapshots</strong>: Backups automáticos creados</li>
          </ol>

          <InfoBox type="success" title="✅ Completado">
            Ahora tienes una base de datos RDS PostgreSQL en producción con backups automáticos, monitoreo centralizado y alta disponibilidad (puedes activar Multi-AZ).
          </InfoBox>

          <h3>Próximos Pasos Reales</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Activar <strong>Multi-AZ</strong> para failover automático (puede tomar 30 minutos)</li>
            <li>Crear <strong>Read Replica</strong> en otra región para lecturas distribuidas</li>
            <li>Configurar <strong>CloudWatch Alarms</strong> para CPU, conexiones, storage</li>
            <li>Testear <strong>failover manual</strong> en ambiente de staging</li>
            <li>Configurar <strong>backup a S3</strong> con snapshot automático semanal</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="RDS — Bases de Datos Relacionales Gestionadas"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
