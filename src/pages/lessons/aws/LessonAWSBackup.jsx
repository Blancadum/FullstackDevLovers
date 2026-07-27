import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAWSBackup() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Backup y Recuperación"
        description="Estrategias de copia de seguridad y recuperación ante desastres en AWS"
        breadcrumbs={breadcrumbs}
        seoTitle="Backup y Recuperación en AWS - Estrategias de Disaster Recovery"
        seoDescription="Cómo diseñar estrategias de backup y recuperación ante desastres para tus recursos en AWS."
        seoKeywords="aws, backup, recuperacion, disaster recovery"
        url="https://fullstackdevlovers.com/cloud/aws/operaciones/backup"
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Que AWS gestione tu base de datos o tus discos no significa que tus datos estén automáticamente a salvo de un borrado accidental, un despliegue con bug o un ataque de ransomware. La disponibilidad de la infraestructura la garantiza AWS; la <strong>estrategia de backup y recuperación de tus datos</strong> es responsabilidad tuya. Es una parte del "modelo de responsabilidad compartida" que conviene tener muy clara antes de ir a producción.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          En esta lección vas a ver cómo se hacen copias de seguridad en los servicios que más usarás (RDS, EBS, S3), cómo centralizarlas con AWS Backup, y los conceptos que un profesional necesita manejar al hablar de recuperación ante desastres: RTO y RPO.
        </p>

        <LessonSection title="RTO y RPO: el vocabulario imprescindible">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Antes de diseñar cualquier estrategia de backup, hay que responder dos preguntas de negocio, no solo técnicas:
          </p>

          <Table
            headers={['Métrica', 'Pregunta que responde', 'Ejemplo']}
            rows={[
              ['RTO (Recovery Time Objective)', '¿Cuánto tiempo podemos estar caídos hasta recuperar el servicio?', '"Máximo 1 hora sin servicio"'],
              ['RPO (Recovery Point Objective)', '¿Cuántos datos podemos permitirnos perder desde el último backup?', '"Máximo 15 minutos de datos perdidos"']
            ]}
          />

          <InfoBox type="tip" title="A menor RTO/RPO, mayor coste">
            Un RPO de segundos (réplicas síncronas multi-región) cuesta mucho más que un RPO de 24 horas (un snapshot diario). Define estos valores con el negocio antes de elegir la solución técnica: no toda aplicación necesita el mismo nivel de protección.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Backup por servicio">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Cada servicio de almacenamiento en AWS tiene su propio mecanismo de copia de seguridad. Estos son los que más vas a usar como backend Java:
          </p>

          <Table
            headers={['Servicio', 'Mecanismo', 'Detalle']}
            rows={[
              ['RDS', 'Backups automáticos + snapshots manuales', 'Backups automáticos diarios con retención configurable (hasta 35 días); permiten restauración "point-in-time" a cualquier segundo dentro de ese periodo'],
              ['EBS (discos de EC2)', 'Snapshots', 'Copias incrementales en S3; solo se guardan los bloques que cambiaron desde el último snapshot'],
              ['S3', 'Versionado + replicación entre regiones (CRR)', 'El versionado protege contra sobrescritura/borrado accidental; la réplica entre regiones protege contra un fallo regional'],
              ['DynamoDB', 'Point-in-Time Recovery (PITR) + backups bajo demanda', 'PITR permite restaurar a cualquier segundo de los últimos 35 días si está activado']
            ]}
          />
        </LessonSection>

        <LessonSection title="Ejemplo: snapshots de RDS por CLI">
          <CodeBlock
            language="bash"
            title="Gestión de backups de RDS"
            code={`# Ver la configuración de backups automáticos de una instancia
aws rds describe-db-instances \\
  --db-instance-identifier guttman-db \\
  --query "DBInstances[0].[BackupRetentionPeriod,PreferredBackupWindow]"

# Crear un snapshot manual antes de un cambio arriesgado (ej. una migración grande)
aws rds create-db-snapshot \\
  --db-instance-identifier guttman-db \\
  --db-snapshot-identifier guttman-db-pre-migracion-2026-07-27

# Restaurar una instancia nueva a partir de un snapshot
aws rds restore-db-instance-from-db-snapshot \\
  --db-instance-identifier guttman-db-restaurada \\
  --db-snapshot-identifier guttman-db-pre-migracion-2026-07-27

# Restauración point-in-time: recuperar el estado exacto de hace 10 minutos
aws rds restore-db-instance-to-point-in-time \\
  --source-db-instance-identifier guttman-db \\
  --target-db-instance-identifier guttman-db-recuperada \\
  --restore-time "2026-07-27T10:15:00Z"`}
          />

          <InfoBox type="info" title="Los backups automáticos no sustituyen a un snapshot manual">
            Antes de una migración de esquema arriesgada o un despliegue delicado, crea siempre un snapshot manual explícito. Los snapshots automáticos rotan según la retención configurada; uno manual permanece hasta que tú decidas borrarlo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="AWS Backup: centralizar la estrategia">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Cuando tienes varios servicios (RDS, EBS, DynamoDB, EFS...) gestionar cada backup por separado no escala. <strong>AWS Backup</strong> centraliza la política de copias de seguridad de todos ellos en un único "plan", con reglas de frecuencia, retención y traslado a almacenamiento en frío.
          </p>

          <CodeBlock
            language="json"
            title="Plan de backup centralizado (AWS Backup)"
            code={`{
  "BackupPlan": {
    "BackupPlanName": "guttman-plan-produccion",
    "Rules": [
      {
        "RuleName": "backup-diario",
        "TargetBackupVaultName": "guttman-vault",
        "ScheduleExpression": "cron(0 3 * * ? *)",
        "StartWindowMinutes": 60,
        "CompletionWindowMinutes": 180,
        "Lifecycle": {
          "MoveToColdStorageAfterDays": 30,
          "DeleteAfterDays": 365
        },
        "CopyActions": [
          {
            "DestinationBackupVaultArn": "arn:aws:backup:eu-central-1:123456789012:backup-vault:guttman-vault-dr"
          }
        ]
      }
    ]
  }
}`}
          />

          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', marginTop: '0.5rem' }}>
            Este plan hace copias diarias, las mueve a almacenamiento en frío pasados 30 días, las borra a los 365, y además replica cada copia a una región distinta (<code>eu-central-1</code>) para tener protección ante un desastre regional.
          </p>
        </LessonSection>

        <LessonSection title="Estrategias de recuperación ante desastres (DR)">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Cuando el objetivo no es solo "no perder datos" sino "seguir funcionando aunque se caiga una región entera", se habla de estrategias de <strong>Disaster Recovery</strong>. AWS suele describirlas en cuatro niveles, de menor a mayor coste y menor a mayor rapidez de recuperación:
          </p>

          <Table
            headers={['Estrategia', 'Qué implica', 'RTO aproximado', 'Coste']}
            rows={[
              ['Backup & Restore', 'Solo backups; si hay desastre, se restaura desde cero', 'Horas', 'Bajo'],
              ['Pilot Light', 'Infraestructura mínima replicada y apagada en otra región, lista para escalar', 'Decenas de minutos', 'Medio-bajo'],
              ['Warm Standby', 'Réplica reducida pero funcionando en otra región, se escala al activarla', 'Minutos', 'Medio-alto'],
              ['Multi-Site Active/Active', 'Ambas regiones activas simultáneamente, sirviendo tráfico real', 'Segundos', 'Alto']
            ]}
          />

          <InfoBox type="warning" title="Elige según el negocio, no según lo más avanzado técnicamente">
            No toda aplicación necesita Active/Active. Para muchos proyectos, un buen "Backup & Restore" con RDS y AWS Backup bien configurados es más que suficiente. Sobredimensionar la estrategia de DR es tan problemático como no tener ninguna: consume presupuesto que podría ir a otras prioridades.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen">
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li>El backup de tus datos es responsabilidad tuya, incluso en servicios gestionados: es parte del modelo de responsabilidad compartida de AWS.</li>
            <li>Define primero <strong>RTO</strong> (tiempo máximo de caída) y <strong>RPO</strong> (datos máximos que puedes perder) antes de diseñar la solución técnica.</li>
            <li>RDS, EBS, S3 y DynamoDB tienen mecanismos de backup propios: automáticos, snapshots manuales, versionado y Point-in-Time Recovery.</li>
            <li>AWS Backup centraliza políticas de copia para varios servicios en un único plan, incluyendo copia a otra región.</li>
            <li>Las estrategias de disaster recovery van de Backup & Restore (barato, RTO en horas) a Multi-Site Active/Active (caro, RTO en segundos): elige según lo que realmente necesite el negocio.</li>
          </ul>
        </LessonSection>
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
