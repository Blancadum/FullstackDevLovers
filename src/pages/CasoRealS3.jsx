import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealS3 = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>📊 Caso Real: DataAnalytics - Plataforma de Análisis de Datos</h1>
        <p className="lesson-intro">
          Cómo una startup pasó de riesgo de pérdida de datos a 11-nines de durabilidad, ahorrando 89% en storage con S3 Lifecycle
        </p>
      </div>

      <section className="lesson-section">
        <h2>🚨 El Problema</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>DataAnalytics</strong> es una startup que recopila, almacena y analiza datos de clientes empresariales.
            Crecieron rápidamente y generaban 100TB de nuevos datos cada mes.
          </p>
        </div>

        <h3>La Crisis de Datos</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Año 1:</strong> 100TB almacenados → usando NAS local + backups en discos duros</li>
          <li><strong>Año 2:</strong> 300TB → "¿Dónde hacemos backup de esto?"</li>
          <li><strong>Año 3:</strong> 500TB → NAS local casi lleno, 3 backups en sitios diferentes</li>
          <li><strong>Crisis 1:</strong> Un cliente pierde el acceso. Gastan 2 semanas recuperando datos. Asusado.</li>
          <li><strong>Crisis 2:</strong> Terremoto en sitio donde guardan backups. "¿Y si se pierde TODO?"</li>
          <li><strong>Crisis 3:</strong> Crecen 100TB/mes. En 5 años tendrán 1.1 petabytes. ¿Cómo escalan?</li>
          <li><strong>Decisión:</strong> Migrar a AWS S3 con Lifecycle Policies</li>
        </ul>

        <div style={{ backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 El Cuello de Botella</h4>
          <p><strong>Problema: Durabilidad + Costo + Escalabilidad</strong></p>
          <ul>
            <li>❌ NAS local: 99.9% durabilidad (riesgo de pérdida catastrófica)</li>
            <li>❌ Backups manuales: inconsistentes, sin versionamiento, manual restore (horas/días)</li>
            <li>❌ 3 copias físicas: $100K/mes solo en storage</li>
            <li>❌ Crecimiento no escalable: 100TB/mes = comprar más NAS cada trimestre</li>
            <li>❌ Cumplimiento normativo: clientes exigen "datos guardados al menos 7 años" (imposible)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: S3 + Lifecycle Policies + Glacier</h2>

        <h3>Por Qué S3 y No Storage Local</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>NAS Local</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>S3 + Glacier</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Durabilidad</strong></td>
              <td style={{ padding: '1rem' }}>99.9% (1 en 1000 riesgo de pérdida)</td>
              <td style={{ padding: '1rem' }}>99.999999999% (11-nines, 1 en billón)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Disponibilidad</strong></td>
              <td style={{ padding: '1rem' }}>99% (necesita mantenimiento)</td>
              <td style={{ padding: '1rem' }}>99.99% (99.99% S3, 99.9% Glacier)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Costo (500TB)</strong></td>
              <td style={{ padding: '1rem' }}>$100K/mes ($200/TB)</td>
              <td style={{ padding: '1rem' }}>$11K/mes ($22/TB con lifecycle)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Versionamiento</strong></td>
              <td style={{ padding: '1rem' }}>❌ Manual, propenso a errores</td>
              <td style={{ padding: '1rem' }}>✅ Automático, recupera cualquier versión</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Escalabilidad</strong></td>
              <td style={{ padding: '1rem' }}>❌ Comprar hardware cada 3-6 meses</td>
              <td style={{ padding: '1rem' }}>✅ Ilimitada, paga-por-uso</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Cumplimiento (7 años)</strong></td>
              <td style={{ padding: '1rem' }}>❌ Imposible escalar</td>
              <td style={{ padding: '1rem' }}>✅ S3 Object Lock + Glacier</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><strong>Recuperación desastres</strong></td>
              <td style={{ padding: '1rem' }}>❌ Manual (horas/días)</td>
              <td style={{ padding: '1rem' }}>✅ S3 Cross-Region Replication (automático)</td>
            </tr>
          </tbody>
        </table>

        <h3>Arquitectura S3 + Lifecycle</h3>
        <CodeBlock language="text" title="DataAnalytics Storage Architecture">
{`┌────────────────────────────────────────────────────────┐
│           S3 Bucket: company-data-lake               │
│        (Región primaria: us-east-1)                  │
└────────────────────────────────────────────────────────┘

Datos por edad:
┌─────────────────────────────────────────────────────────┐
│ HOT DATA (últimos 90 días)                             │
│ • S3 Standard: $0.023/GB                              │
│ • Latencia: millisegundos                             │
│ • Acceso: frecuente (análisis diarios)                │
│ • Ejemplo: datos de clientes actuales                │
│ • Tamaño: ~30TB                                       │
└─────────────────────────────────────────────────────────┘
   ↓ (después de 90 días)

┌─────────────────────────────────────────────────────────┐
│ WARM DATA (90-365 días)                               │
│ • S3 Standard-IA: $0.0125/GB + $1/1000 retrievals   │
│ • Latencia: segundos                                 │
│ • Acceso: ocasional (reportes trimestrales)          │
│ • Ejemplo: datos de trimestres anteriores            │
│ • Tamaño: ~100TB                                     │
└─────────────────────────────────────────────────────────┘
   ↓ (después de 365 días)

┌─────────────────────────────────────────────────────────┐
│ COLD DATA (365+ días)                                 │
│ • Glacier Flexible Retrieval: $0.004/GB + $0.03/1000│
│ • Latencia: minutos a horas                          │
│ • Acceso: raro (auditorías, cumplimiento)            │
│ • Ejemplo: datos históricos (2+ años atrás)          │
│ • Tamaño: ~370TB                                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ REPLICACIÓN A OTRA REGIÓN: eu-west-1               │
│ • Cross-Region Replication (automático)              │
│ • Recuperación ante desastre                         │
│ • GDPR compliance (datos EU)                         │
│ • Misma política de lifecycle                        │
└─────────────────────────────────────────────────────────┘
`}
        </CodeBlock>

        <h3>Configuración de Lifecycle Policy</h3>
        <CodeBlock language="json" title="S3 Lifecycle Policy">
{`{
  "Rules": [
    {
      "Id": "HotToWarmTransition",
      "Status": "Enabled",
      "Prefix": "data/",
      "Filter": {
        "And": {
          "Prefix": "data/",
          "Tags": [
            {
              "Key": "tier",
              "Value": "production"
            }
          ]
        }
      },
      "Transitions": [
        {
          "Days": 90,
          "StorageClass": "STANDARD_IA",
          "NoncurrentVersionTransitions": [
            {
              "NoncurrentDays": 90,
              "StorageClass": "STANDARD_IA"
            }
          ]
        },
        {
          "Days": 365,
          "StorageClass": "GLACIER_IR"
        },
        {
          "Days": 2555,
          "StorageClass": "DEEP_ARCHIVE"
        }
      ],
      "Expiration": {
        "Days": 2555
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 90
      }
    },
    {
      "Id": "DeleteIncompleteUploads",
      "Status": "Enabled",
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 7
      }
    }
  ]
}
`}
        </CodeBlock>

        <h3>Configuración: Versionamiento + Replicación</h3>
        <CodeBlock language="bash" title="S3 Setup with Versioning & Replication">
{`# 1. Habilitar versionamiento (histórico de cambios)
aws s3api put-bucket-versioning \\
  --bucket company-data-lake \\
  --versioning-configuration Status=Enabled

# 2. Configurar replicación a otra región (disaster recovery)
aws s3api put-bucket-replication \\
  --bucket company-data-lake \\
  --replication-configuration '{
    "Role": "arn:aws:iam::123456789:role/s3-replication",
    "Rules": [
      {
        "Id": "ReplicateToEU",
        "Status": "Enabled",
        "Priority": 1,
        "Filter": { "Prefix": "data/" },
        "Destination": {
          "Bucket": "arn:aws:s3:::company-data-lake-eu",
          "ReplicationTime": {
            "Status": "Enabled",
            "Time": { "Minutes": 15 }
          },
          "StorageClass": "STANDARD"
        }
      }
    ]
  }'

# 3. Habilitar Object Lock (cumplimiento normativo: WORM = Write Once Read Many)
aws s3api create-bucket \\
  --bucket company-data-lake-compliant \\
  --object-lock-enabled-for-bucket

# 4. Aplicar retención (7 años por regulación)
for file in $(aws s3 ls s3://company-data-lake/data/ --recursive | awk '{print $4}'); do
  aws s3api put-object-retention \\
    --bucket company-data-lake \\
    --key "\$file" \\
    --retention Mode=COMPLIANCE,RetainUntilDate=2032-01-01T00:00:00Z
done

# 5. Configurar notificaciones en CloudWatch
aws s3api put-bucket-notification-configuration \\
  --bucket company-data-lake \\
  --notification-configuration '{
    "EventBridgeConfiguration": {}
  }'

echo "✅ S3 configurado con:"
echo "   - Versionamiento de datos"
echo "   - Replicación a EU (15 min)"
echo "   - Lifecycle: Standard → IA → Glacier → Deep Archive"
echo "   - Object Lock (WORM)"
echo "   - Monitoreo con CloudWatch"
`}
        </CodeBlock>
      </section>

      <section className="lesson-section">
        <h2>💰 Análisis de Costos: Antes vs Después</h2>

        <h3>Costo Anterior: NAS Local (500TB)</h3>
        <CodeBlock language="text" title="Old Storage Cost Breakdown">
{`NAS Local Costs:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NAS Hardware:
  4x NetApp FAS9080 @ $250K cada uno = $1,000,000 (capital)
  Amortizado 4 años = $250K/año = $20,833/mes

Mantenimiento + Soporte:
  NetApp support contract: $50K/año = $4,166/mes

Espacio físico (data center):
  500TB en 16 racks @ $2K/rack/mes = $32,000/mes

Electricidad + Cooling:
  4 NAS × 8KW cada = 32KW
  @ $0.12/KWh × 24h × 30 días = $27,648/mes

Personal IT:
  1 Storage Admin @ $120K/año = $10,000/mes
  1 Backup Engineer @ $130K/año = $10,833/mes

Backups redundantes (3 copias):
  Discos duros de respaldo: 1,500TB @ $10/TB = $15,000/mes
  Almacenamiento en sitios remotos: $8,000/mes

TOTAL MENSUAL: $108,480/mes ≈ $100K/mes
ANUAL: $1.3M/año

Problema: Solo 3 copias, no 11-nines de durabilidad
`}
        </CodeBlock>

        <h3>Costo Nuevo: S3 + Glacier + Lifecycle</h3>
        <CodeBlock language="text" title="New S3 Storage Cost Breakdown">
{`S3 Lifecycle Costs (500TB distribuido):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOT DATA (S3 Standard, 30TB):
  30TB × $0.023/GB × 1000 = $690/mes

WARM DATA (S3-IA, 100TB):
  100TB × $0.0125/GB × 1000 = $1,250/mes
  + Retrievals (~10% acceso): 100TB × 0.1 × $1/1000 = $100/mes
  Total: $1,350/mes

COLD DATA (Glacier Flexible, 250TB):
  250TB × $0.004/GB × 1000 = $1,000/mes
  + Retrievals (~1% acceso): 250TB × 0.01 × $0.03/1000 = $75/mes
  Total: $1,075/mes

DEEP ARCHIVE (Datos 2+ años, 120TB):
  120TB × $0.00099/GB × 1000 = $119/mes
  + Retrievals (raro): ~$10/mes
  Total: $129/mes

Cross-Region Replication (eu-west-1):
  500TB copia en EU: $200/mes (transfer una sola vez)
  + Replicación continua: $500/mes
  Total: $700/mes

Versioning + Metadata:
  ~5% overhead en storage: $150/mes

Monitoreo CloudWatch:
  ~50 métricas × $0.30 = $15/mes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL MENSUAL: $4,029/mes ≈ $4K/mes
ANUAL: $48.3K/año

+ Crecimiento 100TB/mes:
  100TB primer año: $100TB × $0.023/GB × 1000 × 12 × % = ~$500/mes extra
  Años 2-7 en Glacier: negligible (<$50/mes)

Durabilidad: 99.999999999% (11-nines)
Cumplimiento: 7 años guardados, WORM compliance
`}
        </CodeBlock>

        <h3>Tabla Comparativa de Costos</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Rubro</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>NAS Local</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>S3 + Glacier</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Ahorro</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Storage</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$53K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$2.5K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-95%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Personal IT</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$20.8K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$0</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-100%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Infraestructura</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$34.8K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$0</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-100%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>TOTAL</td>
              <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>$108.5K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>$4K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>-96.3%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados: Antes vs Después</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (NAS Local)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>❌ <strong>Durabilidad:</strong> 99.9% (riesgo de pérdida)</li>
              <li>❌ <strong>Disponibilidad:</strong> 99% (mantenimiento)</li>
              <li>❌ <strong>Cumplimiento 7 años:</strong> Imposible</li>
              <li>⚠️ <strong>Recuperación:</strong> Horas a días</li>
              <li>📊 <strong>Crecimiento:</strong> 100TB/mes = comprar hardware</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (S3 + Glacier)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>✅ <strong>Durabilidad:</strong> 99.999999999% (11-nines)</li>
              <li>✅ <strong>Disponibilidad:</strong> 99.99% (administrado AWS)</li>
              <li>✅ <strong>Cumplimiento 7 años:</strong> Object Lock + Glacier</li>
              <li>⚡ <strong>Recuperación:</strong> Minutos (automático CRR)</li>
              <li>📈 <strong>Crecimiento:</strong> Ilimitado, pay-per-use</li>
            </ul>
          </div>
        </div>

        <h3>Impacto en Métricas de Negocio</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>KPI</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Antes</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Después</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Impacto</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo mensual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$108.5K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$4K</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-96% ($1.26M/año)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Durabilidad</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.9%</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.999999999%</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>1B veces más seguro</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Capacidad máxima</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>~1PB (límite)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>∞ (ilimitada)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Escalable indefinidamente</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Cumplimiento GDPR/7 años</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>❌ No</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>✅ Sí</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Regulatorio + clientes felices</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Tiempo recuperación DR</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Horas/días</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Minutos</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>RTO/RPO mejorado 100x</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Confianza de clientes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Media (riesgo)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Alta (AWS SLA)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Contratos más grandes</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Personal requerido</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>2 FTE</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>0 (AWS administra)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>2 engineers → producto</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>📊 Proyección a Largo Plazo (7 años)</h2>

        <h3>Si hubieran seguido con NAS Local</h3>
        <CodeBlock language="text" title="NAS Projection (7 years)">
{`Año 1: 500TB  - $1.3M/año
Año 2: 700TB  - $1.8M/año (+ hardware upgrade)
Año 3: 900TB  - $2.2M/año
Año 4: 1.1PB  - $2.6M/año (+ hardware = $500K)
Año 5: 1.3PB  - Alcanzó límite, necesita nueva solución ($1M migración)
Año 6-7: Stuck, no pueden crecer sin cambiar

TOTAL 7 años: $12.5M + riesgo de pérdida de datos

Además:
- Riesgo de cumplimiento (no pueden garantizar 7 años)
- Clientes no confían
- No pueden crecer
`}
        </CodeBlock>

        <h3>Con S3 + Lifecycle</h3>
        <CodeBlock language="text" title="S3 Projection (7 years)">
{`Año 1: 500TB  - $48K/año (+ transferencia inicial $50K)
Año 2: 700TB  - $65K/año (nuevo 200TB en hot → warm)
Año 3: 900TB  - $82K/año
Año 4: 1.1PB  - $98K/año
Año 5: 1.3PB  - $115K/año
Año 6: 1.5PB  - $132K/año
Año 7: 1.7PB  - $149K/año

TOTAL 7 años: $690K (vs $12.5M)

Beneficios:
✅ Cumplimiento regulatorio garantizado
✅ 11-nines de durabilidad
✅ Escalabilidad ilimitada
✅ Disaster Recovery automático
✅ Crecimiento sin límite
✅ Confianza de clientes → contratos nuevos

ROI = $11.8M ahorrados en 7 años
`}
        </CodeBlock>
      </section>

      <section className="lesson-section">
        <h2>🎓 Lecciones Aprendidas</h2>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>1. Lifecycle Policies = la joya oculta de S3</h4>
          <p>
            La mayoría de startups no saben que automáticamente mover datos de S3 Standard → S3-IA → Glacier
            basado en edad es LEGAL y AUTOMÁTICO. DataAnalytics ahorró 89% sin perder acceso a datos.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>2. Durabilidad vs Disponibilidad</h4>
          <p>
            99.9% durabilidad = "va a perder datos algún día". 99.999999999% durabilidad = "statistically impossible".
            Con millones de clientes, no es cuestión de "si" sino "cuándo". S3 resuelve eso.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>3. Crecimiento sin límite = crecimiento del negocio</h4>
          <p>
            Con NAS, DataAnalytics estaba limitada a ~1.1PB (5 años de datos). Con S3, pueden crecer indefinidamente.
            Esto permitió lanzar un producto nuevo: "datos históricos con 10 años de antecedentes".
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>4. Object Lock = cumplimiento regulatorio gratis</h4>
          <p>
            Antes: "¿Cómo garantizamos que los datos no se borren?" (WORM = Write Once Read Many).
            Después: S3 Object Lock lo hace por ti. Clientes financieros = confianza = contratos nuevos.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>5. CRR (Cross-Region Replication) = disaster recovery gratis</h4>
          <p>
            Antes: "¿Si AWS se cae en us-east-1?" (poco probable, pero terrifying).
            Después: CRR automático a eu-west-1. Si la región se cae (rarísimo), failover en segundos.
          </p>
        </div>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Conclusión</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <strong>S3 + Lifecycle fue la mejor decisión para DataAnalytics</strong> porque:
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ <strong>Durabilidad 11-nines:</strong> vs 99.9% NAS = 1 billón veces más seguro</li>
          <li>✅ <strong>Costo 96% menor:</strong> $1.3M/año → $48K/año</li>
          <li>✅ <strong>Escalabilidad infinita:</strong> Sin límite de capacidad o crecimiento</li>
          <li>✅ <strong>Cumplimiento automático:</strong> GDPR, HIPAA, SOC2, 7-year retention</li>
          <li>✅ <strong>Cero mantenimiento:</strong> AWS administra durabilidad, backups, replicación</li>
        </ul>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          El valor real no fue solo el ahorro de $1.26M/año. Fue la confianza de poder decir a clientes:
          "Tus datos están 99.999999999% seguros, replicados en dos continentes, y guardaremos copias por 10 años".
          Eso permitió contratos de $500K+ que NAS no hubiera permitido.
        </p>
      </section>
    </div>
  );
};
