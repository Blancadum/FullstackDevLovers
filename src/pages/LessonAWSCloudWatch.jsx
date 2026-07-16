import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSCloudWatch() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'CloudWatch — Monitorización Centralizada',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>CloudWatch</strong> es el servicio central de observabilidad de AWS. Integra métricas (CPU, RAM, latencia), logs (registros de aplicación), alarmas (alertas automáticas) y dashboards (paneles visuales) en un único servicio.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En una infraestructura física, sabes si algo está mal porque ves luces de alarma, escuchas ruidos, sientes calor. En la nube, <strong>nada es visible</strong>. Monitorizar es tu único sistema de alerta temprana.
          </p>

          <InfoBox type="warning" title="Crítico">
            Sin monitorización, tu infraestructura cloud es una caja negra. No sabrás que algo está mal hasta que los usuarios te lo comuniquen. En producción, monitorización <strong>NO ES OPCIONAL</strong>.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Métricas — El corazón del monitoreo',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Una <strong>métrica</strong> es un valor que AWS publica periódicamente. AWS publica automáticamente métricas de todos sus servicios. Ejemplos:
          </p>

          <Table
            headers={['Servicio', 'Métricas clave']}
            rows={[
              ['EC2', 'CPUUtilization, NetworkIn, NetworkOut, StatusCheckFailed'],
              ['RDS', 'DatabaseConnections, FreeStorageSpace, ReadLatency, WriteLatency, CPUUtilization'],
              ['ALB', 'RequestCount, HTTPCode_Target_5XX_Count, TargetResponseTime, HealthyHostCount'],
              ['Lambda', 'Invocations, Errors, Duration, Throttles, ConcurrentExecutions'],
              ['S3', 'BucketSizeBytes, NumberOfObjects'],
              ['DynamoDB', 'ConsumedWriteCapacityUnits, ConsumedReadCapacityUnits, UserErrors']
            ]}
          />

          <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: '2rem 0 1.5rem' }}>
            Puedes publicar tus propias <strong>métricas personalizadas</strong> desde tu aplicación Java:
          </p>

          <CodeBlock
            code={`// Spring Boot + AWS SDK v2 - Publicar métrica personalizada

@Component
public class MetricasGuttman {

  @Autowired
  private CloudWatchClient cloudWatch;

  public void publicarInformesGenerados(int cantidad) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("InformesGenerados")
      .value((double) cantidad)
      .unit(StandardUnit.COUNT)
      .timestamp(Instant.now())
      .dimensions(
        Dimension.builder().name("Entorno").value("produccion").build(),
        Dimension.builder().name("Tipo").value("PDF").build()
      )
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/Aplicacion")
      .metricData(datum)
    );
  }

  public void publicarLatenciaDB(long ms) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("DBQueryLatency")
      .value((double) ms)
      .unit(StandardUnit.MILLISECONDS)
      .timestamp(Instant.now())
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/Aplicacion")
      .metricData(datum)
    );
  }
}`}
            language="java"
            title="Métricas personalizadas desde Java"
          />

          <InfoBox type="tip" title="Métricas de negocio">
            Las métricas personalizadas son valiosas no solo para ops sino para el negocio:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>Informes generados por hora</li>
              <li>Usuarios activos concurrentes</li>
              <li>Errores de validación (indicadores de UX)</li>
              <li>Transacciones procesadas</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Alarmas — Alertas automáticas',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Las <strong>alarmas</strong> monitorean una métrica y ejecutan acciones cuando la métrica entra en un estado anómalo. Pueden enviar notificaciones por email, SMS, ejecutar Lambda, escalar Auto Scaling, etc.
          </p>

          <div style={{
            backgroundColor: '#fce4ec',
            border: '2px solid #e91e63',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#ad1457', marginTop: 0 }}>Estados de una alarma</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>OK:</strong> La métrica está dentro del umbral</li>
              <li><strong>ALARM:</strong> La métrica superó el umbral (estado anómalo)</li>
              <li><strong>INSUFFICIENT_DATA:</strong> Datos insuficientes para evaluar</li>
            </ul>
          </div>

          <CodeBlock
            code={`# Alarmas recomendadas para Laboratorio Guttman

1. CPU de EC2 > 80% durante 5 minutos
   → Escala ASG + notificación SNS (email al equipo)

2. Errores 5XX en ALB > 10 en 1 minuto
   → Notificación SNS URGENTE (chat Slack + email)

3. Espacio libre RDS < 10 GB
   → Notificación SNS + ticke automático en sistema operaciones

4. Lambda throttled (concurrencia máxima alcanzada)
   → Notificación inmediata (indica que Lambda se está quedando sin capacidad)

5. Replicación lag en Read Replica > 1 segundo
   → Notificación (indica sobrecarga de instancia principal)

6. Conexiones a RDS > 80% del máximo
   → Notificación (antes de llegar al límite)

7. Free tier límites próximos a alcanzarse
   → Notificación (evitar sorpresas en factura)`}
            language="text"
            title="Alarmas de producción recomendadas"
          />

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Crear alarma con AWS CLI</h4>
            <CodeBlock
              code={`aws cloudwatch put-metric-alarm \\
  --alarm-name "guttman-ec2-cpu-high" \\
  --alarm-description "Alerta cuando CPU > 80%" \\
  --metric-name CPUUtilization \\
  --namespace AWS/EC2 \\
  --statistic Average \\
  --period 300 \\
  --threshold 80 \\
  --comparison-operator GreaterThanThreshold \\
  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \\
  --evaluation-periods 1 \\
  --alarm-actions arn:aws:sns:eu-west-1:123456789:guttman-alerts`}
              language="bash"
            />
          </div>
        </>
      )
    },

    {
      title: 'Logs — Centralización de registros',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>CloudWatch Logs</strong> centraliza todos los logs de tu infraestructura en un único lugar. Sin este servicio, los logs se distribuyen entre múltiples servidores y depurar un problema requiere SSH en 5 máquinas.
          </p>

          <CodeBlock
            code={`<!-- logback-spring.xml en Spring Boot -->
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <appender name="CLOUDWATCH"
    class="ca.pjer.logback.AwsLogsAppender">
    <logGroupName>/guttman/aplicacion</logGroupName>
    <logStreamUuidPrefix>prod-</logStreamUuidPrefix>
    <region>eu-west-1</region>
    <maxBatchLogEvents>50</maxBatchLogEvents>
    <maxFlushTimeMillis>30000</maxFlushTimeMillis>
  </appender>

  <root level="INFO">
    <appender-ref ref="CLOUDWATCH"/>
  </root>
</configuration>`}
            language="xml"
            title="Logback + CloudWatch Logs"
          />

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginTop: '2rem', marginBottom: '1.5rem' }}>
            Con los logs centralizados, usas <strong>CloudWatch Logs Insights</strong> para hacer consultas tipo SQL:
          </p>

          <CodeBlock
            code={`# Encontrar errores en últimas 24 horas
fields @timestamp, @message
| filter @message like /ERROR/
| stats count() by @message

# Contar invocaciones de una función
fields @duration
| filter @type = "REPORT"
| stats avg(@duration), max(@duration), count()

# Latencia P99 de la API
fields @duration
| filter @message like /apiLatency/
| stats pct(@duration, 99) as p99

# IPs que generan más errores 5XX
fields @message, clientIp
| filter @message like /5XX/
| stats count() as errors by clientIp
| sort errors desc`}
            language="text"
            title="CloudWatch Logs Insights queries"
          />
        </>
      )
    },

    {
      title: 'X-Ray — Trazabilidad Distribuida',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>X-Ray</strong> permite rastrear una petición a través de todos los servicios que atraviesa (ALB → EC2 → RDS → S3), identificar dónde está el cuello de botella y depurar errores en arquitecturas distribuidas.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Proporciona:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            margin: '1.5rem 0'
          }}>
            {[
              {
                title: 'Service Map',
                description: 'Visualización de cómo se conectan tus servicios y dónde hay problemas'
              },
              {
                title: 'Traces',
                description: 'Historial completo de una petición a través de todos los servicios'
              },
              {
                title: 'Latency Analysis',
                description: 'Analiza dónde se gasta el tiempo (ALB? EC2? RDS?)'
              },
              {
                title: 'Error Analysis',
                description: 'Agrupa errores y muestra su causa raíz'
              }
            ].map((feature, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ color: '#333', marginTop: 0 }}>{feature.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <CodeBlock
            code={`// Spring Boot + X-Ray

@SpringBootApplication
public class GuttmanApp {

  @Bean
  public Filter tracingFilter() {
    return new AWSXRayServletFilter("GuttmanApp");
  }
}

// Anotar métodos importantes
@Component
public class ReporteService {

  @XRayRecorder
  public Reporte generarReporte(String id) {
    // Este método aparecerá en los traces
    // Si es lento, lo verás inmediatamente
    return repositorio.findById(id).orElseThrow();
  }
}`}
            language="java"
            title="Activar X-Ray en Spring Boot"
          />
        </>
      )
    },

    {
      title: 'Dashboards — Panel de Control',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Los <strong>dashboards</strong> agrupan métricas de múltiples servicios en una sola vista. Ideal para que el equipo sepa de un vistazo la salud general del sistema.
          </p>

          <div style={{
            backgroundColor: '#e0f2f1',
            border: '2px solid #009688',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#00695c', marginTop: 0 }}>Dashboard "Guttman-Produccion" recomendado</h4>
            <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <p><strong>Fila 1 (ALB):</strong></p>
              <ul style={{ marginBottom: '1rem' }}>
                <li>Requests/min (verde si OK)</li>
                <li>HTTP 5XX count (rojo si ≥ 0)</li>
                <li>Target response time (amarillo si &gt; 500ms)</li>
              </ul>

              <p><strong>Fila 2 (EC2):</strong></p>
              <ul style={{ marginBottom: '1rem' }}>
                <li>CPU Utilization (instancias activas)</li>
                <li>Network In/Out</li>
                <li>Active connections</li>
              </ul>

              <p><strong>Fila 3 (Base de datos):</strong></p>
              <ul style={{ marginBottom: '1rem' }}>
                <li>DB Connections</li>
                <li>Read/Write latency</li>
                <li>Free storage</li>
              </ul>

              <p><strong>Fila 4 (Aplicación):</strong></p>
              <ul>
                <li>Logs errors (últimas 5 min)</li>
                <li>InformesGenerados (métrica personalizada)</li>
                <li>Lambda invocations</li>
              </ul>
            </div>
          </div>

          <InfoBox type="tip" title="Recomendación">
            Crea dashboards diferentes para diferentes públicos:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li><strong>Ejecutivos:</strong> Disponibilidad %, Transacciones/hora, Coste mensual</li>
              <li><strong>Ops:</strong> Recursos (CPU, RAM), Logs, Alarmas</li>
              <li><strong>Dev:</strong> Errores de aplicación, Logs detallados, X-Ray traces</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'AWS Budgets — Control de Costes',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>AWS Budgets</strong> permite establecer límites de gasto y recibir alertas cuando te acercas. Es la herramienta crítica para evitar sorpresas en la factura.
          </p>

          <CodeBlock
            code={`# Crear budget con AWS CLI

aws budgets create-budget \\
  --account-id 123456789 \\
  --budget file://budget.json \\
  --notifications-with-subscribers file://notifications.json

# budget.json
{
  "BudgetName": "guttman-monthly-500",
  "BudgetLimit": {
    "Amount": "500",
    "Unit": "USD"
  },
  "TimeUnit": "MONTHLY",
  "BudgetType": "COST"
}

# notifications.json
{
  "Notifications": [
    {
      "NotificationType": "FORECASTED",
      "ComparisonOperator": "GREATER_THAN",
      "Threshold": 80,
      "NotificationState": "ARMED",
      "Subscribers": [
        {
          "SubscriptionType": "EMAIL",
          "Address": "ops@guttman.com"
        }
      ]
    },
    {
      "NotificationType": "ACTUAL",
      "ComparisonOperator": "GREATER_THAN",
      "Threshold": 100,
      "NotificationState": "ARMED",
      "Subscribers": [
        {
          "SubscriptionType": "EMAIL",
          "Address": "cto@guttman.com"
        }
      ]
    }
  ]
}`}
            language="bash"
            title="Crear Budget"
          />

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#e65100', marginTop: 0 }}>Tipos de Budgets recomendados</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>Budget Total ($500/mes):</strong> Costo total de toda la infraestructura</li>
              <li><strong>Budget por Servicio:</strong> EC2 $200, RDS $150, S3 $50</li>
              <li><strong>Budget por Proyecto:</strong> Laboratorio Guttman $500, Otros $200</li>
              <li><strong>Budget por Entorno:</strong> Producción $400, Staging $50, Desarrollo $50</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Cost Explorer — Análisis Histórico',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>AWS Cost Explorer</strong> visualiza el gasto histórico y proyecciones. Permite filtrar por servicio, región, etiqueta (tag) para entender en qué se gasta el dinero.
          </p>

          <div style={{
            backgroundColor: '#f3e5f5',
            border: '2px solid #9c27b0',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ color: '#6a1b9a', marginTop: 0 }}>Análisis recomendados con Cost Explorer</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>¿Qué servicio gasta más?</strong> Filtra por servicio. EC2 suele dominar</li>
              <li><strong>¿Qué región es más cara?</strong> Filtra por región. Algunos datos cruzam regiones</li>
              <li><strong>¿Hay picos de gasto?</strong> Visualiza por día. Si hay picos, investiga qué pasó</li>
              <li><strong>¿El gasto es predecible?</strong> Compara mes a mes. Si varía mucho, hay oportunidades de optimización</li>
            </ul>
          </div>

          <InfoBox type="warning" title="Bill Shock">
            Si ves un pico de gasto inesperado, actúa <strong>inmediatamente</strong>:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>1. Abre Cost Explorer, identifica qué servicio</li>
              <li>2. Revisa qué región y qué cuenta</li>
              <li>3. Busca instancias huérfanas, snapshots, volúmenes EBS olvidados</li>
              <li>4. Si es legítimo, sigue adelante. Si no, bórralo inmediatamente</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Trusted Advisor — Recomendaciones',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>AWS Trusted Advisor</strong> analiza tu cuenta y da recomendaciones en 5 áreas:
          </p>

          <Table
            headers={['Pillar', 'Qué verifica', 'Ejemplo de recomendación']}
            rows={[
              [
                'Cost Optimization',
                'Recursos sin usar, instancias pequeñas, oportunidades de RI',
                '"Tienes 3 instancias t2.large paradas, migra a t2.small"'
              ],
              [
                'Performance',
                'Límites de cuota, conexiones de red, caché',
                '"Activa CloudFront para tu bucket S3"'
              ],
              [
                'Security',
                'Accesos permisivos, encriptación, MFA',
                '"Root account sin MFA, actívalo inmediatamente"'
              ],
              [
                'Fault Tolerance',
                'Redundancia, backups, Multi-AZ',
                '"RDS sin Multi-AZ activado, es un punto único de fallo"'
              ],
              [
                'Service Limits',
                'Cuotas próximas a alcanzarse',
                '"Estás al 90% del límite de instancias EC2"'
              ]
            ]}
          />

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Recomendación</h4>
            <p style={{ marginBottom: 0 }}>
              Revisa Trusted Advisor <strong>mensualmente</strong>. No todas las recomendaciones son urgentes, pero muchas pueden ahorrar dinero u evitar problemas.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Ejemplo Práctico: Dashboard y Alarmas en CloudWatch',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Crearemos un dashboard de monitoreo centralizado y configuraremos alarmas que alertan sobre problemas en tiempo real.
          </p>

          <h3>Paso 1: Crear SNS Topic para Notificaciones</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Las alarmas envían notificaciones a SNS (Simple Notification Service):
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>SNS → Topics → Create Topic</strong></li>
            <li>Type: <strong>Standard</strong></li>
            <li>Topic name: <strong>guttman-alerts</strong></li>
            <li>Click <strong>Create Topic</strong></li>
            <li>Ir a tab <strong>Subscriptions → Create Subscription</strong></li>
            <li>Protocol: <strong>Email</strong></li>
            <li>Endpoint: <strong>tu@email.com</strong></li>
            <li>Create. Revisar email y confirmar suscripción</li>
          </ol>

          <h3>Paso 2: Crear Dashboard en CloudWatch</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Dashboards → Create Dashboard</strong></li>
            <li>Name: <strong>Guttman-Produccion</strong></li>
            <li>Click <strong>Create</strong></li>
            <li>Click <strong>Add Widget</strong> → <strong>Line Chart</strong></li>
          </ol>

          <h3>Paso 3: Agregar Widgets de Métricas EC2</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Agregar métrica de CPU Utilization:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>En el widget, click <strong>Edit</strong></li>
            <li>Tab <strong>Metrics</strong></li>
            <li>Search: <strong>EC2</strong> → Select <strong>AWS/EC2</strong></li>
            <li>Metric: <strong>CPUUtilization</strong></li>
            <li>Statistic: <strong>Average</strong></li>
            <li>Period: <strong>5 minutes</strong></li>
            <li>Click <strong>Create Widget</strong></li>
          </ol>

          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem', marginTop: '2rem' }}>
            Repetir para agregar más widgets:
          </p>
          <CodeBlock language="text" title="Widgets recomendados">
{`Dashboard: Guttman-Produccion

Fila 1 - ALB (si tienes):
├─ RequestCount (número de peticiones)
├─ HTTPCode_Target_5XX_Count (errores de servidor)
└─ TargetResponseTime (latencia)

Fila 2 - EC2:
├─ CPUUtilization (% uso CPU)
├─ NetworkIn (datos recibidos)
└─ NetworkOut (datos enviados)

Fila 3 - RDS (si tienes):
├─ DatabaseConnections (conexiones activas)
├─ CPUUtilization (% CPU)
└─ FreeStorageSpace (espacio disponible)

Fila 4 - Aplicación personalizada:
└─ InformesGenerados (métrica custom desde Java)`}
          </CodeBlock>

          <h3>Paso 4: Crear Alarma para CPU Alta en EC2</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms → Create Alarm</strong></li>
            <li>Select metric: <strong>EC2 → CPUUtilization</strong></li>
            <li>Seleccionar la instancia que quieres monitorear</li>
            <li>Click <strong>Next</strong></li>
            <li>Alarm threshold:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Statistic: <strong>Average</strong></li>
                <li>Condition: <strong>Greater than or equal to</strong></li>
                <li>Threshold: <strong>80</strong> (porcentaje)</li>
                <li>Datapoints to alarm: <strong>1</strong></li>
                <li>Period: <strong>5 minutes</strong></li>
              </ul>
            </li>
            <li>Click <strong>Next</strong></li>
          </ol>

          <h3>Paso 5: Configurar Acciones de la Alarma</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>In alarm: <strong>Send to SNS Topic</strong></li>
            <li>Select SNS Topic: <strong>guttman-alerts</strong></li>
            <li>Add additional action (opcional): <strong>EC2 → Reboot instances</strong></li>
            <li>Alarm name: <strong>guttman-ec2-cpu-high</strong></li>
            <li>Description: <strong>Alert when EC2 CPU ≥ 80%</strong></li>
            <li>Click <strong>Create Alarm</strong></li>
          </ol>

          <h3>Paso 6: Crear Alarma para Errores 5XX en ALB</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms → Create Alarm</strong></li>
            <li>Select metric: <strong>Application ELB → HTTPCode_Target_5XX_Count</strong></li>
            <li>Threshold: <strong>10</strong> (más de 10 errores en 1 minuto)</li>
            <li>Period: <strong>1 minute</strong></li>
            <li>Action: <strong>Send to SNS</strong> → <strong>guttman-alerts</strong></li>
            <li>Alarm name: <strong>guttman-alb-5xx-errors</strong></li>
            <li>Click <strong>Create Alarm</strong></li>
          </ol>

          <h3>Paso 7: Crear Alarma para Espacio RDS Bajo</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms → Create Alarm</strong></li>
            <li>Select metric: <strong>AWS/RDS → FreeStorageSpace</strong></li>
            <li>Select DB instance: Tu instancia RDS</li>
            <li>Threshold: <strong>10000000000</strong> (10 GB en bytes)</li>
            <li>Condition: <strong>Less than</strong> (alarma cuando haya menos de 10 GB)</li>
            <li>Action: <strong>Send to SNS → guttman-alerts</strong></li>
            <li>Alarm name: <strong>guttman-rds-storage-low</strong></li>
            <li>Click <strong>Create Alarm</strong></li>
          </ol>

          <h3>Paso 8: Crear Alarma para Lambda Throttling</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms → Create Alarm</strong></li>
            <li>Select metric: <strong>Lambda → Throttles</strong></li>
            <li>Select function: Tu función Lambda</li>
            <li>Threshold: <strong>1</strong> (cualquier throttle es crítico)</li>
            <li>Condition: <strong>Greater than or equal to</strong></li>
            <li>Action: <strong>Send to SNS → guttman-alerts</strong></li>
            <li>Alarm name: <strong>guttman-lambda-throttles</strong></li>
            <li>Click <strong>Create Alarm</strong></li>
          </ol>

          <h3>Paso 9: Configurar Métricas Personalizadas desde Java</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Spring Boot + CloudWatch para métricas de negocio:
          </p>
          <CodeBlock language="xml" title="pom.xml">
{`<!-- AWS SDK v2 para CloudWatch -->
<dependency>
  <groupId>software.amazon.awssdk</groupId>
  <artifactId>cloudwatch</artifactId>
  <version>2.20.0</version>
</dependency>

<!-- Micrometer para métricas -->
<dependency>
  <groupId>io.micrometer</groupId>
  <artifactId>micrometer-registry-cloudwatch</artifactId>
  <version>1.11.0</version>
</dependency>`}
          </CodeBlock>

          <CodeBlock language="java" title="MetricasAplicacion.java">
{`import org.springframework.stereotype.Component;
import software.amazon.awssdk.services.cloudwatch.CloudWatchClient;
import software.amazon.awssdk.services.cloudwatch.model.*;
import java.time.Instant;

@Component
public class MetricasAplicacion {

  private final CloudWatchClient cloudWatch;

  public MetricasAplicacion(CloudWatchClient cloudWatch) {
    this.cloudWatch = cloudWatch;
  }

  // Métrica: Informes generados por hora
  public void publicarInformesGenerados(int cantidad) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("InformesGenerados")
      .value((double) cantidad)
      .unit(StandardUnit.COUNT)
      .timestamp(Instant.now())
      .dimensions(
        Dimension.builder().name("Entorno").value("produccion").build(),
        Dimension.builder().name("Tipo").value("PDF").build()
      )
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/Aplicacion")
      .metricData(datum)
    );
  }

  // Métrica: Latencia de consultas DB
  public void publicarLatenciaDB(long milisegundos) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("DBQueryLatency")
      .value((double) milisegundos)
      .unit(StandardUnit.MILLISECONDS)
      .timestamp(Instant.now())
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/Aplicacion")
      .metricData(datum)
    );
  }

  // Métrica: Errores de validación (UX)
  public void publicarErroresValidacion(String campo) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("ValidationErrors")
      .value(1.0)
      .unit(StandardUnit.COUNT)
      .timestamp(Instant.now())
      .dimensions(
        Dimension.builder().name("Campo").value(campo).build()
      )
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/Aplicacion")
      .metricData(datum)
    );
  }

  // Métrica: Usuarios activos concurrentes
  public void publicarUsuariosConcurrentes(int cantidad) {
    MetricDatum datum = MetricDatum.builder()
      .metricName("ActiveUsers")
      .value((double) cantidad)
      .unit(StandardUnit.NONE)
      .timestamp(Instant.now())
      .build();

    cloudWatch.putMetricData(r -> r
      .namespace("Guttman/Aplicacion")
      .metricData(datum)
    );
  }
}`}
          </CodeBlock>

          <h3>Paso 10: Usar Métricas en Controladores</h3>
          <CodeBlock language="java" title="ReporteController.java">
{`import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/reportes")
public class ReporteController {

  private final ReporteService reporteService;
  private final MetricasAplicacion metricas;

  public ReporteController(ReporteService reporteService, MetricasAplicacion metricas) {
    this.reporteService = reporteService;
    this.metricas = metricas;
  }

  @PostMapping("/generar")
  public ResponseEntity<Reporte> generarReporte(@RequestBody ReporteRequest request) {
    long inicio = System.currentTimeMillis();

    try {
      Reporte reporte = reporteService.generar(request);

      // Registrar métrica de éxito
      metricas.publicarInformesGenerados(1);

      // Registrar latencia
      long latencia = System.currentTimeMillis() - inicio;
      metricas.publicarLatenciaDB(latencia);

      return ResponseEntity.ok(reporte);
    } catch (ValidationException e) {
      // Registrar error de validación
      metricas.publicarErroresValidacion(e.getCampo());
      throw e;
    }
  }

  @GetMapping("/activos")
  public ResponseEntity<Integer> obtenerActivosActuales() {
    int activos = reporteService.contarActivos();
    metricas.publicarUsuariosConcurrentes(activos);
    return ResponseEntity.ok(activos);
  }
}`}
          </CodeBlock>

          <h3>Paso 11: Crear Alarma para Métrica Personalizada</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms → Create Alarm</strong></li>
            <li>Select metric: <strong>Guttman/Aplicacion → InformesGenerados</strong></li>
            <li>Threshold: <strong>100</strong> (alertar si hay más de 100 informes en período)</li>
            <li>Period: <strong>1 hour</strong></li>
            <li>Action: <strong>Send to SNS → guttman-alerts</strong> (notificar si hay mucha carga)</li>
            <li>Alarm name: <strong>guttman-reportes-high-volume</strong></li>
          </ol>

          <h3>Paso 12: Usar CloudWatch Logs Insights</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Consultar logs para depuración en tiempo real:
          </p>
          <CodeBlock language="text" title="Queries útiles en CloudWatch Logs Insights">
{`# Errores en últimas 24 horas
fields @timestamp, @message, @logStream
| filter @message like /ERROR/
| stats count() as error_count by @logStream

# P99 de latencia de API
fields @duration
| filter @message like /api.latency/
| stats pct(@duration, 99) as p99_ms, pct(@duration, 95) as p95_ms

# Errores 5XX por IP
fields clientIp, @message
| filter @message like /500/
| stats count() as errors by clientIp
| sort errors desc

# Contar invocaciones de función Lambda
fields @timestamp, @duration
| filter @type = "REPORT"
| stats count() as invocations, avg(@duration) as avg_ms, max(@duration) as max_ms

# Transacciones procesadas por hora
fields @message, transactionId
| filter @message like /transaction.complete/
| stats count() by bin(5m)`}
          </CodeBlock>

          <h3>Paso 13: Verificar Alarmas en Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms</strong></li>
            <li>Deberías ver tus 5+ alarmas creadas</li>
            <li>Filter by state: <strong>OK</strong> (todas deberían estar OK si no hay problemas)</li>
            <li>Click en una alarma para ver su historia</li>
          </ol>

          <h3>Paso 14: Crear Composición de Alarmas (Composite Alarms)</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Crear una alarma que se activa si 2+ alarmas están en ALARM:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>CloudWatch → Alarms → Create Composite Alarm</strong></li>
            <li>Name: <strong>guttman-critical-status</strong></li>
            <li>Alarm rule: <strong>(guttman-ec2-cpu-high OR guttman-alb-5xx-errors OR guttman-rds-storage-low)</strong></li>
            <li>Action: <strong>Send to SNS → guttman-alerts-critical</strong> (topic separado para críticos)</li>
            <li>Click <strong>Create</strong></li>
          </ol>

          <h3>Paso 15: Probar las Alarmas</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para testear que las alarmas funcionan sin esperar a un problema real:
          </p>
          <CodeBlock language="bash">
{`# Cambiar alarma manualmente a ALARM (para test)
aws cloudwatch set-alarm-state \\
  --alarm-name guttman-ec2-cpu-high \\
  --state-value ALARM \\
  --state-reason "Testing alarm"

# Deberías recibir email en segundos

# Volver a OK
aws cloudwatch set-alarm-state \\
  --alarm-name guttman-ec2-cpu-high \\
  --state-value OK \\
  --state-reason "Test complete"`}
          </CodeBlock>

          <InfoBox type="success" title="✅ Completado">
            Has configurado un sistema de monitoreo completo:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>Dashboard centralizado con métricas de toda la infraestructura</li>
              <li>5+ alarmas para problemas comunes (CPU, errores, storage, throttles)</li>
              <li>Notificaciones por email en tiempo real via SNS</li>
              <li>Métricas personalizadas desde Java</li>
              <li>Queries de logs para depuración</li>
              <li>Alarmas compuestas para criticidad</li>
            </ul>
          </InfoBox>

          <h3>Próximos Pasos Reales</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Conectar alarmas a <strong>Slack/Teams</strong> en lugar de solo email (más visible)</li>
            <li>Crear <strong>On-Call Rotation</strong> con OpsGenie o PagerDuty</li>
            <li>Configurar <strong>CloudWatch Events</strong> para automatizar respuestas (ej: escalar ASG automáticamente)</li>
            <li>Implementar <strong>X-Ray tracing</strong> para depuración distribuida</li>
            <li>Crear <strong>Custom Metrics</strong> para cada aspecto del negocio (conversiones, ingresos, etc.)</li>
            <li>Usar <strong>CloudWatch Anomaly Detection</strong> para detectar patrones anormales automáticamente</li>
            <li>Documentar <strong>runbooks</strong> para cada alarma (qué hacer cuando se activa)</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="CloudWatch — Monitorización y Observabilidad"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
