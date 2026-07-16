import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSAlmacenamiento() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Tres Modelos de Almacenamiento en AWS',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            AWS ofrece tres modelos diferentes de almacenamiento, cada uno optimizado para casos de uso diferentes:
          </p>

          <Table
            headers={['Modelo', 'Acceso', 'Caso de Uso', 'Servicio AWS']}
            rows={[
              [
                '📦 Objetos',
                'Por URL/API (HTTP)',
                'Archivos, backups, contenido estático, logs',
                'Amazon S3'
              ],
              [
                '💾 Bloques',
                'A nivel de bloque (disco duro)',
                'Disco del SO, bases de datos, aplicaciones',
                'Amazon EBS'
              ],
              [
                '📁 Archivos',
                'Sistema de archivos NFS',
                'Almacenamiento compartido entre instancias',
                'Amazon EFS'
              ]
            ]}
          />

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Analogía para Recordar</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>S3:</strong> Google Drive / Dropbox - archivos en la nube con URLs</li>
              <li><strong>EBS:</strong> Disco duro de tu computadora - solo accesible desde un lugar</li>
              <li><strong>EFS:</strong> Carpeta de red compartida - múltiples computadoras acceden simultáneamente</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Amazon EBS — Elastic Block Store',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>EBS</strong> proporciona discos virtuales que se adjuntan a instancias EC2. Son persistentes (los datos sobreviven al reinicio) y de alto rendimiento.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Piensa en EBS como un disco duro externo que conectas a tu computadora: solo un dispositivo puede usarlo a la vez, pero tiene acceso completo.
          </p>

          <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', color: '#333' }}>Tipos de Volúmenes EBS</h4>
            <Table
              headers={['Tipo', 'Optimizado Para', 'IOPS Máx', 'Caso de Uso']}
              rows={[
                [
                  'gp3 (General Purpose SSD)',
                  'Uso general, balance CPU-IOPS',
                  '16,000',
                  'Discos del SO, bases de datos pequeñas, desarrollo'
                ],
                [
                  'io2 Block Express',
                  'IOPS muy alta, baja latencia',
                  '256,000',
                  'Bases de datos críticas que requieren baja latencia extrema'
                ],
                [
                  'st1 (Throughput HDD)',
                  'Throughput alto, secuencial',
                  'N/A',
                  'Big data, logs, procesamiento paralelo'
                ],
                [
                  'sc1 (Cold HDD)',
                  'Datos de acceso infrecuente',
                  'N/A',
                  'Backups a largo plazo, acceso ocasional'
                ]
              ]}
            />
          </div>

          <CodeBlock
            code={`# Crear volumen EBS con AWS CLI

# 1. Crear volumen gp3 de 100 GB en us-east-1a
aws ec2 create-volume \\
  --size 100 \\
  --volume-type gp3 \\
  --iops 3000 \\
  --throughput 125 \\
  --availability-zone us-east-1a \\
  --tag-specifications 'ResourceType=volume,Tags=[{Key=Name,Value=datos-app}]'

# 2. Adjuntar volumen a instancia EC2
aws ec2 attach-volume \\
  --volume-id vol-0123456789abcdef0 \\
  --instance-id i-0987654321fedcba0 \\
  --device /dev/sdf

# 3. En la instancia EC2, formatear y montar
sudo mkfs -t ext4 /dev/nvme1n1  # Formatea el volumen
sudo mkdir /datos
sudo mount /dev/nvme1n1 /datos  # Monta en /datos

# 4. Crear snapshot (backup del volumen)
aws ec2 create-snapshot \\
  --volume-id vol-0123456789abcdef0 \\
  --description "Backup datos app 2024-01-15"

# 5. Crear volumen desde snapshot
aws ec2 create-volume \\
  --snapshot-id snap-0123456789abcdef0 \\
  --availability-zone us-east-1a`}
            language="bash"
            title="Operaciones básicas EBS"
          />

          <InfoBox type="warning" title="⚠️ Limitación Crítica">
            <strong>EBS solo puede adjuntarse a UNA instancia EC2 a la vez</strong> (excepto io2 Block Express con Multi-Attach). Si necesitas compartir almacenamiento entre varias instancias, usa <strong>EFS</strong>.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Amazon EFS — Elastic File System',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>EFS</strong> es un sistema de archivos NFS completamente gestionado. <strong>Múltiples instancias EC2</strong> pueden montarlo simultáneamente, lo que lo hace ideal para aplicaciones que necesitan compartir archivos.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Piensa en EFS como una carpeta de red compartida: miles de computadoras pueden conectarse, leer y escribir simultáneamente.
          </p>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Características EFS</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>Compartido:</strong> Múltiples EC2 simultáneamente (sin límite)</li>
              <li><strong>Escalable:</strong> Crece automáticamente hasta petabytes</li>
              <li><strong>Gestionado:</strong> AWS gestiona la infraestructura</li>
              <li><strong>Alta disponibilidad:</strong> Automáticamente replicado en múltiples AZ</li>
              <li><strong>Latencia consistente:</strong> Optimizado para acceso concurrente</li>
            </ul>
          </div>

          <CodeBlock
            code={`# Crear y montar EFS

# 1. Crear EFS
aws efs create-file-system \\
  --performance-mode generalPurpose \\
  --throughput-mode bursting \\
  --tags Key=Name,Value=compartido-app

# 2. Crear mount targets (en cada AZ)
aws efs create-mount-target \\
  --file-system-id fs-0123456789abcdef0 \\
  --subnet-id subnet-0123456789abcdef0 \\
  --security-groups sg-0123456789abcdef0

# 3. En cada instancia EC2, montar EFS
# Primero instala el cliente EFS
sudo yum install -y amazon-efs-utils

# Crea el punto de montaje
sudo mkdir /datos-compartidos

# Monta el EFS (las instancias en DIFERENTES AZ pueden compartirlo)
sudo mount -t efs -o tls \\
  fs-0123456789abcdef0:/ /datos-compartidos

# 4. Verificar que está montado
df -h  # Debe mostrar el EFS

# 5. Crear archivo en EC2-1 y leerlo desde EC2-2
# Desde EC2-1:
echo "Datos compartidos" > /datos-compartidos/archivo.txt

# Desde EC2-2 (en AZ diferente, misma VPC):
cat /datos-compartidos/archivo.txt  # ¡Funciona!`}
            language="bash"
            title="Crear y montar EFS"
          />

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#e65100', marginTop: 0 }}>Clases de Almacenamiento EFS</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  <strong>Standard</strong> (predeterminado)
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>
                  Acceso frecuente, baja latencia, coste normal
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  <strong>Infrequent Access (IA)</strong>
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>
                  Acceso ocasional, coste reducido, latencia ligeramente más alta
                </p>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Comparativa: S3 vs EBS vs EFS',
      content: (
        <>
          <Table
            headers={['Aspecto', 'S3 (Objetos)', 'EBS (Bloques)', 'EFS (Archivos)']}
            rows={[
              ['Tipo', 'Almacenamiento de objetos', 'Disco virtual', 'Sistema de archivos NFS'],
              ['Acceso', 'Por URL/API (HTTP)', 'A nivel de bloque', 'Sistema de archivos estándar'],
              ['Capacidad máxima', 'Ilimitada', '64 TB por volumen', 'Ilimitada (crece automático)'],
              ['Desde', 'Cualquier lugar (internet)', 'Solo instancia EC2 adjunta', 'Múltiples EC2 simultáneamente'],
              ['Persistencia', 'Permanente', 'Permanente (independiente EC2)', 'Permanente'],
              ['Caso típico', 'Archivos, backups, webs estáticas', 'Disco del SO, BD', 'Archivos compartidos entre servidores'],
              ['Precio', 'Por GB almacenado + peticiones', 'Por GB aprovisionado', 'Por GB usado (más caro que EBS)'],
              ['Alta disponibilidad', '11 nueves de durabilidad', 'Snapshot a otra AZ', 'Automáticamente multi-AZ'],
              ['Mejor para', 'S3 Standard para acceso frecuente', 'Disco principal EC2', 'Configuración compartida']
            ]}
          />

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Matriz de Decisión</h4>
            <div style={{ fontSize: '0.95rem', lineHeight: '2' }}>
              <div><strong>¿Archivos para descargar/API?</strong> → <strong>S3</strong></div>
              <div><strong>¿Disco del sistema operativo?</strong> → <strong>EBS</strong></div>
              <div><strong>¿Múltiples servidores comparten archivos?</strong> → <strong>EFS</strong></div>
              <div><strong>¿Base de datos en instancia?</strong> → <strong>EBS</strong> (más rápido)</div>
              <div><strong>¿Backup a largo plazo?</strong> → <strong>S3 Glacier</strong></div>
              <div><strong>¿Configuración compartida entre instancias?</strong> → <strong>EFS</strong></div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'AWS Backup — Estrategia Centralizada',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>AWS Backup</strong> centraliza las copias de seguridad de EC2, EBS, RDS, EFS, DynamoDB y S3 desde un único panel. Permite definir políticas de retención, frecuencia y cifrado automáticamente.
          </p>

          <CodeBlock
            code={`# Crear plan de backup con AWS CLI

# 1. Crear un plan de backup
aws backup create-backup-plan \\
  --backup-plan "{
    \"BackupPlanName\": \"guttman-production\",
    \"BackupPlanRule\": {
      \"RuleName\": \"backup-diario\",
      \"TargetBackupVault\": \"backup-vault-prod\",
      \"ScheduleExpression\": \"cron(0 3 * * ? *)\",
      \"StartWindowMinutes\": 60,
      \"CompletionWindowMinutes\": 120,
      \"Lifecycle\": {
        \"DeleteAfterDays\": 30,
        \"MoveToColdStorageAfterDays\": 7
      }
    }
  }"

# 2. Asignar recursos al plan (por tags)
aws backup create-backup-selection \\
  --backup-plan-id guttman-production \\
  --backup-selection "{
    \"SelectionName\": \"recursos-prod\",
    \"IamRoleArn\": \"arn:aws:iam::123456789:role/service-role/AWSBackupRole\",
    \"Resources\": [\"*\"],
    \"ListOfTags\": {
      \"ConditionType\": \"STRINGEQUALS\",
      \"ConditionKey\": \"Environment\",
      \"ConditionValues\": [\"production\"]
    }
  }"

# 3. Los backups se ejecutarán automáticamente según el plan
# Resultados:
# - EC2: snapshots automáticos
# - EBS: backups del volumen
# - RDS: backup de BD
# - EFS: backup del filesystem
# - DynamoDB: backup de tabla`}
            language="bash"
            title="AWS Backup Plan"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #4caf50',
              borderRadius: '8px',
              padding: '1.2rem'
            }}>
              <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Políticas de Retención</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: 0 }}>
                <li><strong>Backups diarios:</strong> Retener 7 días</li>
                <li><strong>Backups semanales:</strong> Retener 4 semanas</li>
                <li><strong>Backups mensuales:</strong> Retener 12 meses</li>
                <li><strong>Transición a Glacier:</strong> Después de 7 días (archivado, más barato)</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#fff3e0',
              border: '2px solid #ff9800',
              borderRadius: '8px',
              padding: '1.2rem'
            }}>
              <h4 style={{ color: '#e65100', marginTop: 0 }}>Ventajas AWS Backup</h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: 0 }}>
                <li>Múltiples servicios desde un panel</li>
                <li>Políticas de retención automáticas</li>
                <li>Cifrado integrado con KMS</li>
                <li>Recuperación punto-en-tiempo (algunos servicios)</li>
                <li>Cumplimiento normativo facilitado</li>
              </ul>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Ciclo de Vida S3 y Archivado',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para S3, las <strong>Lifecycle Policies</strong> permiten mover automáticamente archivos entre clases de almacenamiento según la edad, reduciendo costes dramáticamente:
          </p>

          <CodeBlock
            code={`# Política de ciclo de vida para bucket S3 guttman-documentos

{
  "Rules": [
    {
      "Id": "TransicionAutomatica",
      "Status": "Enabled",
      "Filter": {"Prefix": "documentos/"},
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD_IA"  # Acceso infrecuente
        },
        {
          "Days": 90,
          "StorageClass": "GLACIER"  # Archivado, muy barato
        },
        {
          "Days": 365,
          "StorageClass": "DEEP_ARCHIVE"  # Archivado profundo (años)
        }
      ],
      "Expiration": {
        "Days": 2555  # Borrar después de 7 años
      }
    }
  ]
}

# Coste ilustrativo (por GB/mes):
# - S3 Standard: $0.023
# - S3 Standard-IA: $0.0125
# - S3 Glacier: $0.004
# - S3 Deep Archive: $0.00099

# Escenario: 1000 GB de documentos
# Sin política: $23/mes x 12 = $276/año
# Con política:
#   - Primeros 30 días (1000 GB Standard): $23
#   - Días 31-90 (1000 GB IA): $1.25 x 2 = $2.50
#   - Días 91-365 (1000 GB Glacier): $0.4 x 9 = $3.60
#   - Total: $29.10/año ← 89% de ahorro`}
            language="json"
            title="Política de Ciclo de Vida S3"
          />

          <InfoBox type="tip" title="💡 Recomendación">
            Siempre configura políticas de ciclo de vida en S3. Los archivos antiguos que casi nunca accedes deberían estar en Glacier o Deep Archive. Esto reduce costes sin afectar disponibilidad.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Caso de Uso: Laboratorio Guttman',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para el Laboratorio Guttman, la estrategia de almacenamiento sería:
          </p>

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Infraestructura de Almacenamiento Recomendada</h4>

            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                1️⃣ <strong>EBS para EC2</strong>
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                - Volumen gp3 de 50 GB para SO
                - Volumen gp3 de 100 GB para datos de aplicación
                - Snapshots automáticos diarios
              </p>

              <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                2️⃣ <strong>RDS (storage incluido)</strong>
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                - PostgreSQL con 50 GB EBS gp3 integrado
                - Backups automáticos cada 24 horas
              </p>

              <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                3️⃣ <strong>S3 con ciclo de vida</strong>
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                - Bucket `guttman-documentos`: informes, PDFs
                - Bucket `guttman-logs`: logs de aplicación
                - Política: Standard (30d) → IA (90d) → Glacier (365d)
              </p>

              <p style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                4️⃣ <strong>EFS (opcional, si hay múltiples servidores)</strong>
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: 0 }}>
                - Compartir configuración entre instancias
                - Almacenar archivos de plantillas comunes
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff9e6',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#f57f17', marginTop: 0 }}>Estimación de Costes Mensales</h4>
            <ul style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>EBS: ~$10 (150 GB gp3)</li>
              <li>RDS: ~$30 (db.t3.medium + 50 GB)</li>
              <li>S3: ~$5 (1000 GB con ciclo de vida)</li>
              <li>AWS Backup: ~$5 (políticas de retención)</li>
              <li><strong>Total: ~$50/mes en almacenamiento</strong></li>
            </ul>
          </div>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="Almacenamiento en AWS: S3, EBS, EFS y Backup"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
