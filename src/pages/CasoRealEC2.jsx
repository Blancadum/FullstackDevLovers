import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealEC2 = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>📱 Caso Real: StreamFlow - Plataforma de Video en Vivo</h1>
        <p className="lesson-intro">
          Cómo una startup pasó de 100 a 500,000 usuarios concurrentes en 6 meses usando EC2 y Auto Scaling
        </p>
      </div>

      <section className="lesson-section">
        <h2>🎬 El Problema</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>StreamFlow</strong> es una plataforma de streaming de video en vivo tipo Twitch.
            Comenzó con infraestructura on-premise en un data center local.
          </p>
        </div>

        <h3>Línea de Tiempo del Problema</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Mes 1-2:</strong> 100 usuarios simultáneos → funcionaba en 2 servidores bare-metal</li>
          <li><strong>Mes 3:</strong> 5,000 usuarios simultáneos → servidores al 90% CPU</li>
          <li><strong>Mes 4:</strong> 15,000 usuarios → servidor #1 se cae, 4 horas de downtime</li>
          <li><strong>Mes 5:</strong> 100,000 usuarios esperados en Black Friday → miedo de perder ventas</li>
          <li><strong>Decisión:</strong> Migrar urgentemente a AWS EC2 con Auto Scaling</li>
        </ul>

        <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 Problema Específico</h4>
          <p><strong>No podían predecir la carga.</strong> Los picos de usuarios ocurrían sin aviso:</p>
          <ul>
            <li>⚠️ Nuevo streamer con millones de followers → 50,000 usuarios simultáneos en 2 minutos</li>
            <li>⚠️ Evento especial → carga 100x normal</li>
            <li>⚠️ No tenían capacidad para escalar rápido</li>
            <li>⚠️ Comprar más servidores físicos tardaba semanas</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: EC2 + Auto Scaling</h2>

        <h3>Arquitectura Implementada</h3>
        <CodeBlock language="text" title="StreamFlow Architecture" code={`┌─────────────────────────────────────────────────────┐
│ CloudFront CDN (distribuye video a edge locations)  │
└────────────────────┬────────────────────────────────┘
                     │
         ┌───────────┴────────────┐
         │                        │
    ┌────▼──────┐            ┌───▼──────┐
    │ ALB (443) │            │ ALB (80) │
    └────┬──────┘            └───┬──────┘
         │                        │
    ┌────┴────────────────────────┴──────┐
    │  Auto Scaling Group                 │
    │  ┌─────────────┐ ┌───────────────┐ │
    │  │ EC2 t3.xlg  │ │ EC2 t3.xlg    │ │
    │  │ AZ: us-e-1a │ │ AZ: us-e-1b   │ │
    │  └─────────────┘ └───────────────┘ │
    │  Min: 5  Des: 20  Max: 100         │
    └────┬────────────────────────────────┘
         │
    ┌────┴──────────────────┐
    │ RDS PostgreSQL Multi-AZ
    │ • Metadata usuarios
    │ • Streams activos
    └───────────────────────┘

    ElastiCache Redis
    • Sesiones de usuario
    • Cache de lista de streams
`} />

        <h3>Por Qué EC2 y No Lambda</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>StreamFlow (EC2)</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Si usara Lambda</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Conexiones WebSocket</strong></td>
              <td style={{ padding: '1rem' }}>✅ Soporta miles/instancia</td>
              <td style={{ padding: '1rem' }}>❌ Lambda desconecta después de 15 min</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Latencia streaming</strong></td>
              <td style={{ padding: '1rem' }}>✅ &lt;2 segundos (persistente)</td>
              <td style={{ padding: '1rem' }}>❌ 10-15 segundos (cold start)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Costos (500K concurrentes)</strong></td>
              <td style={{ padding: '1rem' }}>✅ $15,000/mes (100 EC2 t3.xlg)</td>
              <td style={{ padding: '1rem' }}>❌ $100,000+/mes (500K × 15min × $0.0000166667)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Escalabilidad</strong></td>
              <td style={{ padding: '1rem' }}>✅ Predecible + elasticidad</td>
              <td style={{ padding: '1rem' }}>❌ Impredecible con streams vivos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>🔧 Implementación Paso a Paso</h2>

        <h3>Paso 1: Launch Template</h3>
        <CodeBlock language="json" title="EC2 Launch Template JSON" code={`{
  "LaunchTemplateName": "streamflow-app-v1",
  "VersionDescription": "Streaming video platform",
  "LaunchTemplateData": {
    "ImageId": "ami-0c55b159cbfafe1f0",
    "InstanceType": "t3.xlarge",
    "KeyName": "streamflow-prod",
    "IamInstanceProfile": {
      "Name": "StreamFlowEC2Role"
    },
    "SecurityGroupIds": ["sg-0123456789abcdef0"],
    "UserData": "IyEvYmluL2Jhc2gKc3VkbyB5dW0gdXBkYXRlIC15CnN1ZG8geXVtIGluc3RhbGwgLXkgamF2YS0yMS1hbWF6b25jb3JyZXR0bw==",
    "BlockDeviceMappings": [{
      "DeviceName": "/dev/xvda",
      "Ebs": {
        "VolumeSize": 100,
        "VolumeType": "gp3",
        "DeleteOnTermination": true,
        "Iops": 3000,
        "Throughput": 125
      }
    }],
    "Monitoring": {
      "Enabled": true
    },
    "CreditSpecification": {
      "CpuCredits": "unlimited"
    }
  }
`} />

        <h3>Paso 2: Auto Scaling Group</h3>
        <CodeBlock language="bash" title="Create Auto Scaling Group" code={`aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name streamflow-asg \\
  --launch-template LaunchTemplateName=streamflow-app-v1,Version='$Latest' \\
  --min-size 5 \\
  --max-size 100 \\
  --desired-capacity 20 \\
  --default-cooldown 300 \\
  --health-check-type ELB \\
  --health-check-grace-period 300 \\
  --vpc-zone-identifier "subnet-123456,subnet-789012" \\
  --target-group-arns "arn:aws:elasticloadbalancing:..."

# Target Tracking Scaling Policy
aws autoscaling put-scaling-policy \\
  --auto-scaling-group-name streamflow-asg \\
  --policy-name cpu-scaling \\
  --policy-type TargetTrackingScaling \\
  --target-tracking-configuration '{
    "TargetValue": 70.0,
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "ASGAverageCPUUtilization"
    },
    "ScaleOutCooldown": 60,
    "ScaleInCooldown": 300
  }'`} />

        <h3>Paso 3: Aplicación Spring Boot</h3>
        <CodeBlock language="java" title="WebSocket Config para Streaming" code={`@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

  @Override
  public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
    registry.addHandler(new StreamWebSocketHandler(), "/ws/stream/{streamId}")
        .setAllowedOrigins("*");
  }
}

@Component
public class StreamWebSocketHandler extends TextWebSocketHandler {

  @Autowired
  private StreamService streamService;

  private Map<String, Set<WebSocketSession>> activeSessions = new ConcurrentHashMap<>();

  @Override
  public void afterConnectionEstablished(WebSocketSession session) {
    String streamId = getStreamId(session);
    activeSessions.computeIfAbsent(streamId, k -> ConcurrentHashMap.newKeySet()).add(session);

    // Notificar a CloudWatch
    publishMetric("ViewersConnected", activeSessions.get(streamId).size());
  }

  @Override
  protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
    // Broadcast frames de video a todos los clientes del stream
    String streamId = getStreamId(session);
    Set<WebSocketSession> viewers = activeSessions.get(streamId);

    for (WebSocketSession viewer : viewers) {
      if (viewer.isOpen()) {
        viewer.sendMessage(message);
      }
    }
  }

  @Override
  public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
    String streamId = getStreamId(session);
    Set<WebSocketSession> viewers = activeSessions.get(streamId);
    if (viewers != null) {
      viewers.remove(session);
    }
  }

  private String getStreamId(WebSocketSession session) {
    return session.getUri().getPath().split("/")[3];
  }

  private void publishMetric(String metric, double value) {
    // Publicar a CloudWatch para monitoreo
  }
}`} />
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados Reales</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (On-Premise)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⏱️ <strong>Max capacidad:</strong> 50K usuarios</li>
              <li>❌ <strong>Downtime:</strong> 4 horas cada mes</li>
              <li>💰 <strong>CAPEX anual:</strong> $200K</li>
              <li>⏳ <strong>Escalar:</strong> 2-4 semanas</li>
              <li>😰 <strong>Miedo de picos:</strong> Altísimo</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (AWS EC2)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⚡ <strong>Max capacidad:</strong> 500K+ usuarios</li>
              <li>✅ <strong>Downtime:</strong> 0 horas/mes (99.99%)</li>
              <li>💰 <strong>OPEX mensual:</strong> $15K</li>
              <li>⚙️ <strong>Escalar:</strong> 2-3 minutos (automático)</li>
              <li>😎 <strong>Confianza:</strong> Total - escala transparente</li>
            </ul>
          </div>
        </div>

        <h3>Impacto en el Negocio</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Métrica</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Antes</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Después</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Mejora</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Usuarios simultáneos</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>500K+</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>10x</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Disponibilidad</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.5%</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.99%</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>50x menos downtime</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ingreso (Black Friday)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$100K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$1.2M</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>12x 🚀</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>ROI de migración</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>N/A</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$1.1M en 1 mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>∞</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>🎓 Lecciones Aprendidas</h2>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>1. El timing es crítico</h4>
          <p>
            No migrar "cuando tengas tiempo", sino <strong>antes de que realmente lo necesites</strong>.
            Si StreamFlow hubiera esperado hasta Black Friday, hubieran tenido downtime durante el evento más importante.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>2. EC2 + Auto Scaling ≥ Servidor único</h4>
          <p>
            Aunque parecía más caro, EC2 fue 10x más rentable que intentar mantener servidores on-premise.
            La elasticidad pagó por sí misma en el primer mes.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>3. Monitoreo = paz mental</h4>
          <p>
            Antes: "¿Qué pasará si 10K usuarios llegan hoy?" 😰<br/>
            Después: Auto Scaling maneja automáticamente. Solo monitorea CloudWatch. 😎
          </p>
        </div>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Conclusión</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <strong>EC2 + Auto Scaling fue la decisión correcta para StreamFlow</strong> porque:
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ Necesitaban <strong>conexiones persistentes (WebSocket)</strong> con baja latencia</li>
          <li>✅ Cagas impredecibles pero <strong>sostenidas por período</strong> (streams pueden durar horas)</li>
          <li>✅ Requería <strong>control total del servidor</strong> (Docker, configuración custom)</li>
          <li>✅ El ROI fue <strong>inmediato</strong> (Black Friday con 10x usuarios)</li>
        </ul>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          Si hubieran usado Lambda → hubieras perdido 500K usuarios en Black Friday.
          El costo de una hora de downtime fue mayor que el OPEX de un año en EC2.
        </p>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/aws/servicios/ec2" style={{
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
            ← Volver a EC2
          </a>
          <a href="/aws/casos-reales/rds" style={{
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
            Siguiente: RDS →
          </a>
        </div>
      </section>
    </div>
  );
};
