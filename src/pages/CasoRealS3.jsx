import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealS3 = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>💾 Caso Real: DataAnalytics - Plataforma de Análisis de Datos</h1>
        <p className="lesson-intro">
          Cómo una startup protegió 500TB de datos críticos con S3 + Glacier y ahorró 89% en storage
        </p>
      </div>

      <section className="lesson-section">
        <h2>🚨 El Problema: Riesgo de Pérdida de Datos</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>DataAnalytics</strong> es una plataforma SaaS que ayuda a empresas a analizar datos.
            Sus clientes confían datos sensibles: registros de ventas, datos financieros, métricas privadas.
            Perder datos = perder clientes. La confianza es todo.
          </p>
        </div>

        <h3>La Crisis de Durabilidad</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Inicio:</strong> 50TB datos en servidor on-premise con 3 copias manuales</li>
          <li><strong>Mes 6:</strong> Se descubre corrupción en una base de datos (¿quién tiene la copia limpia?)</li>
          <li><strong>Mes 9:</strong> Fallo de disco duro en servidor principal → 72 horas para recuperar</li>
          <li><strong>Mes 12:</strong> Auditoría: "¿Garantizar durabilidad de datos?" → No pueden prometer 11-nines</li>
          <li><strong>Crisis:</strong> Casi pierden contrato de $500K/año (cliente exigía 99.999999999% uptime)</li>
          <li><strong>Decisión:</strong> Migrar datos críticos a S3 + Glacier con Lifecycle policies</li>
        </ul>

        <div style={{ backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 El Problema Real</h4>
          <p><strong>Storage distribuido no era confiable ni barato:</strong></p>
          <ul>
            <li>❌ On-premise: 3-4 nines máximo (requiere equipo 24/7)</li>
            <li>❌ Backups manuales: riesgo humano (se olvidan, se corrompen)</li>
            <li>❌ Costo mensual: $108,000 (servidor + backups + personal + electricidad)</li>
            <li>❌ No hay auditoría de acceso: ¿Quién accedió a qué datos? No lo saben</li>
            <li>❌ Cumplimiento: No pueden certificar GDPR, HIPAA, SOC 2</li>
            <li>❌ Recuperación lenta: 72+ horas para restaurar (inasceptable para SaaS)</li>
          </ul>
        </div>

        <h3>Escenarios de Pérdida Potencial</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Escenario</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Probabilidad</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Impacto Financiero</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Tiempo Recuperación</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Fallo disco duro</td>
              <td style={{ padding: '1rem' }}>5%/año (MTBF 200K horas)</td>
              <td style={{ padding: '1rem' }}>$500K (pérdida cliente)</td>
              <td style={{ padding: '1rem' }}>72 horas (manual)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Corrupción de datos</td>
              <td style={{ padding: '1rem' }}>2%/año (acceso errado)</td>
              <td style={{ padding: '1rem' }}>$1M (múltiples clientes afectados)</td>
              <td style={{ padding: '1rem' }}>Horas/días</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ataque ransomware</td>
              <td style={{ padding: '1rem' }}>1%/año</td>
              <td style={{ padding: '1rem' }}>$2M+ (rescate + pérdida clientes)</td>
              <td style={{ padding: '1rem' }}>Minutos (si encriptado)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Eliminación accidental</td>
              <td style={{ padding: '1rem' }}>Mensual (somos humanos)</td>
              <td style={{ padding: '1rem' }}>$100K por incidente</td>
              <td style={{ padding: '1rem' }}>Segundos (si existe backup)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: S3 + Glacier Lifecycle</h2>

        <h3>Por Qué S3 + Glacier</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>On-Premise</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>S3 + Glacier</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Durabilidad</strong></td>
              <td style={{ padding: '1rem' }}>99.9% (3-4 nines)</td>
              <td style={{ padding: '1rem' }}>99.999999999% (11-nines)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Replicación</strong></td>
              <td style={{ padding: '1rem' }}>Manual (3 copias))</td>
              <td style={{ padding: '1rem' }}>Automática (6+ copias distribuidas)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Recuperación de versiones</strong></td>
              <td style={{ padding: '1rem' }}>Backup manual (backup?)</td>
              <td style={{ padding: '1rem' }}>30 días de historial automático</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Encriptación</strong></td>
              <td style={{ padding: '1rem' }}>Si lo configuras (extra dinero)</td>
              <td style={{ padding: '1rem' }}>Incluida, AES-256 automático</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Auditoría de acceso</strong></td>
              <td style={{ padding: '1rem' }}>Logs locales (fácil de borrar)</td>
              <td style={{ padding: '1rem' }}>CloudTrail (inmutable)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Cumplimiento (GDPR, etc)</strong></td>
              <td style={{ padding: '1rem' }}>No certificado</td>
              <td style={{ padding: '1rem' }}>AWS manejado (SOC 2, HIPAA, PCI)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Costo almacenamiento</strong></td>
              <td style={{ padding: '1rem' }}>$108K/mes (todo incluido)</td>
              <td style={{ padding: '1rem' }}>$12K/mes (S3 hot) + $4K (Glacier)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><strong>Escalabilidad</strong></td>
              <td style={{ padding: '1rem' }}>Comprar discos nuevos (2+ semanas)</td>
              <td style={{ padding: '1rem' }}>Ilimitada (automática)</td>
            </tr>
          </tbody>
        </table>

        <h3>Arquitectura Implementada</h3>
        <CodeBlock language="text" title="DataAnalytics S3 + Glacier Architecture" code={`┌─────────────────────────────────────────────────────────┐
│ Cliente DataAnalytics sube datos                        │
│ (API POST /upload, CSV/Parquet/JSON)                    │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ S3 Standard (Acceso frecuente)    │
        │ s3://dataanalytics-prod/          │
        │ • active_datasets/                │
        │ • recent_reports/                 │
        │ Durabilidad: 11-nines             │
        │ Replicación: 3+ AZs               │
        │ Costo: $23/TB/mes                 │
        └────────────┬─────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ Lifecycle Policy (30 días)        │
        │ Si no accedido en 30 días →       │
        │ Mover a Glacier Flexible Retrieval│
        └────────────┬─────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ Glacier Flexible Retrieval        │
        │ (Históricos, auditoría)           │
        │ • archived_data/                  │
        │ • compliance_backups/             │
        │ Durabilidad: 11-nines             │
        │ Recuperación: 1-5 horas           │
        │ Costo: $4/TB/mes (89% más barato) │
        └────────────┬─────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ Glacier Deep Archive (7+ años)    │
        │ Backup legal/auditoría            │
        │ Costo: $1/TB/mes                  │
        │ Recuperación: 12 horas            │
        └────────────┬─────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ CloudTrail Logs (inmutable)       │
        │ • ¿Quién accedió a qué?          │
        │ • Cumplimiento GDPR/HIPAA/SOC2   │
        │ • Encriptación KMS                │
        └────────────┬─────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ CloudWatch Monitoring             │
        │ • Alerta si acceso sospechoso    │
        │ • Rastrear cambios de datos      │
        │ • Métricas de acceso             │
        └──────────────────────────────────┘
`} />

        <h3>Lifecycle Policy (Terraform)</h3>
        <CodeBlock language="hcl" title="S3 Lifecycle Configuration" code={`resource "aws_s3_bucket" "dataanalytics_prod" {
  bucket = "dataanalytics-prod"
}

# Versionado habilitado (historial 30 días)
resource "aws_s3_bucket_versioning" "dataanalytics" {
  bucket = aws_s3_bucket.dataanalytics_prod.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Lifecycle Policy: Auto-mover archivos
resource "aws_s3_bucket_lifecycle_configuration" "dataanalytics" {
  bucket = aws_s3_bucket.dataanalytics_prod.id

  rule {
    id     = "archive-old-data"
    status = "Enabled"

    # Mover a Glacier después de 30 días sin acceso
    transition {
      days          = 30
      storage_class = "GLACIER_IR"  # Glacier Instant Retrieval (1-3 horas)
    }

    # Mover a Deep Archive después de 90 días
    transition {
      days          = 90
      storage_class = "DEEP_ARCHIVE"  # Glacier Deep Archive (12 horas)
    }

    # Borrar versiones antiguas después de 1 año
    # (mantener última versión siempre)
    noncurrent_version_transition {
      noncurrent_days = 30
      storage_class   = "GLACIER_IR"
    }

    noncurrent_version_transition {
      noncurrent_days = 90
      storage_class   = "DEEP_ARCHIVE"
    }

    noncurrent_version_expiration {
      noncurrent_days = 365
    }
  }

  rule {
    id     = "delete-incomplete-uploads"
    status = "Enabled"

    # Limpiar uploads fallidos después de 7 días
    abort_incomplete_multipart_upload {
      days_after_initiation = 7
    }
  }

  rule {
    id     = "delete-compliance-old"
    status = "Enabled"

    # Borrar datos después de 7 años (por ley)
    filter {
      prefix = "compliance-archive/"
    }

    expiration {
      days = 2555  # 7 años
    }
  }
}

# Encriptación automática (KMS)
resource "aws_s3_bucket_server_side_encryption_configuration" "dataanalytics" {
  bucket = aws_s3_bucket.dataanalytics_prod.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.dataanalytics.arn
    }
    bucket_key_enabled = true
  }
}

# Bloquear acceso público (crucial)
resource "aws_s3_bucket_public_access_block" "dataanalytics" {
  bucket = aws_s3_bucket.dataanalytics_prod.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Logging de acceso (CloudTrail)
resource "aws_cloudtrail" "dataanalytics" {
  depends_on                    = [aws_s3_bucket_policy.dataanalytics_trail]
  name                          = "dataanalytics-trail"
  s3_bucket_name                = aws_s3_bucket.dataanalytics_logs.id
  include_global_service_events = true
  is_multi_region_trail         = true
  enable_log_file_validation    = true

  event_selector {
    include_management_events = true

    data_resource {
      type   = "AWS::S3::Object"
      values = ["arn:aws:s3:::dataanalytics-prod/*"]
    }
  }
}

# Alerta si intentan desactivar versionado
resource "aws_cloudwatch_event_rule" "s3_config_change" {
  name        = "dataanalytics-s3-config-change"
  description = "Alert on S3 configuration changes"

  event_pattern = jsonencode({
    source      = ["aws.s3"]
    detail-type = ["AWS API Call via CloudTrail"]
    detail = {
      eventSource = ["s3.amazonaws.com"]
      eventName = [
        "DeleteVersioning",
        "DeleteBucket",
        "PutBucketPolicy",
        "DeleteBucketPolicy"
      ]
    }
  })
}

resource "aws_cloudwatch_event_target" "sns" {
  rule      = aws_cloudwatch_event_rule.s3_config_change.name
  target_id = "SendToSNS"
  arn       = aws_sns_topic.dataanalytics_alerts.arn
}

# KMS Key para encriptación
resource "aws_kms_key" "dataanalytics" {
  description             = "KMS key for DataAnalytics S3 encryption"
  deletion_window_in_days = 30
  enable_key_rotation     = true
}
`} />

        <h3>Costo de Lifecycle Policy</h3>
        <CodeBlock language="text" title="Estimación Costos Mensuales" code={`Supuesto: 500TB de datos, con patrón de acceso común

ANTES (On-Premise):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Server + Storage (redundante):     $45,000/mes
Backups y medios de almacenamiento: $20,000/mes
Personal (2 sysadmins):            $25,000/mes
Electricidad + Cooling:            $12,000/mes
Seguros + Mantenimiento:           $6,000/mes
────────────────────────────────────────────────
TOTAL ON-PREMISE:                 $108,000/mes

DESPUÉS (AWS S3 + Glacier):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
S3 Standard (100TB activos):       $2,300/mes    ($23/TB)
  - 20% access rate (usuarios activos)

Glacier Flexible Retrieval (250TB): $1,000/mes   ($4/TB)
  - 30-90 días sin acceso

Glacier Deep Archive (100TB):      $100/mes      ($1/TB)
  - 90+ días sin acceso (auditoría legal)

Requests y transferencia:          $500/mes
  - GET requests
  - Data transfer out (si descarga)

CloudTrail logging:                $200/mes
  - Auditoría y cumplimiento

KMS encryption:                    $200/mes
  - Key management + rotación

VPC Gateway endpoint:              $50/mes
  - Acceso privado sin traversar internet

────────────────────────────────────────────────
TOTAL AWS:                        $4,350/mes

────────────────────────────────────────────────
AHORRO: $108,000 - $4,350 = $103,650/mes
PORCENTAJE: 96% más barato ✓
ANUAL: $1.24M de ahorro
────────────────────────────────────────────────

NOTA: 500TB es mucho. Para empresas típicas (50TB):
AWS: ~$435/mes
On-Premise: ~$10,800/mes
Ahorro: 96%
`} />
      </section>

      <section className="lesson-section">
        <h2>🔧 Implementación: API de Datos + S3</h2>

        <h3>Spring Boot Service para Subir Datos</h3>
        <CodeBlock language="java" title="DataUploadService with S3" code={`import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import software.amazon.awssdk.transfer.s3.S3TransferManager;
import software.amazon.awssdk.transfer.s3.model.FileUpload;
import com.amazonaws.services.dynamodb.AmazonDynamoDB;
import com.amazonaws.services.dynamodb.model.PutItemRequest;
import org.springframework.web.multipart.MultipartFile;
import java.io.*;
import java.time.Instant;
import java.util.*;

@Service
public class DataUploadService {

  @Autowired
  private S3Client s3Client;

  @Autowired
  private S3TransferManager transferManager;

  @Autowired
  private AmazonDynamoDB dynamodb;

  /**
   * Subir dataset a S3
   * El archivo se almacena en S3 Standard
   * Lifecycle policy automáticamente lo mueve a Glacier después de 30 días
   */
  public String uploadDataset(
      String customerId,
      String datasetName,
      MultipartFile file
  ) throws IOException {

    String s3Key = buildS3Key(customerId, datasetName);
    String bucket = "dataanalytics-prod";

    try {
      // 1. Subir archivo a S3
      //    - Encriptación automática (KMS)
      //    - Versionado habilitado (historial automático)
      PutObjectRequest putRequest = PutObjectRequest.builder()
          .bucket(bucket)
          .key(s3Key)
          .metadata(Map.of(
              "customer-id", customerId,
              "dataset-name", datasetName,
              "uploaded-at", Instant.now().toString(),
              "file-size", String.valueOf(file.getSize())
          ))
          .serverSideEncryption(ServerSideEncryption.AWS_KMS)
          .storageClass(StorageClass.STANDARD)  // Hot storage initially
          .build();

      PutObjectResponse response = s3Client.putObject(
          putRequest,
          RequestBody.fromInputStream(
              file.getInputStream(),
              file.getSize()
          )
      );

      String eTag = response.eTag();
      System.out.println("Uploaded: " + s3Key + " (ETag: " + eTag + ")");

      // 2. Registrar metadata en DynamoDB
      registerDatasetMetadata(
          customerId,
          datasetName,
          s3Key,
          file.getSize(),
          bucket
      );

      // 3. Retornar info al cliente
      return new DatasetUploadResponse(
          customerId,
          datasetName,
          s3Key,
          bucket,
          file.getSize(),
          Instant.now()
      ).toJson();

    } catch (S3Exception e) {
      System.err.println("Error uploading to S3: " + e.awsErrorDetails());
      throw new RuntimeException("Failed to upload dataset", e);
    }
  }

  /**
   * Descargar dataset de S3
   * Si está en Glacier, esperar a que se restaure (1-5 horas)
   */
  public InputStream downloadDataset(String customerId, String datasetName) {

    String s3Key = buildS3Key(customerId, datasetName);
    String bucket = "dataanalytics-prod";

    try {
      // 1. Verificar en qué almacenamiento está
      HeadObjectRequest headRequest = HeadObjectRequest.builder()
          .bucket(bucket)
          .key(s3Key)
          .build();

      HeadObjectResponse headResponse = s3Client.headObject(headRequest);
      StorageClass storageClass = headResponse.storageClass();

      System.out.println("Dataset storage class: " + storageClass);

      // Si está en Glacier, necesita restauración
      if (storageClass == StorageClass.GLACIER ||
          storageClass == StorageClass.DEEP_ARCHIVE) {
        return handleGlacierRestoration(bucket, s3Key, storageClass);
      }

      // 2. Si está en Standard/Intelligent-Tiering, descargar inmediatamente
      GetObjectRequest getRequest = GetObjectRequest.builder()
          .bucket(bucket)
          .key(s3Key)
          .build();

      return s3Client.getObject(getRequest);

    } catch (S3Exception e) {
      System.err.println("Error downloading from S3: " + e.awsErrorDetails());
      throw new RuntimeException("Failed to download dataset", e);
    }
  }

  /**
   * Manejar restauración desde Glacier
   * Glacier Flexible: 1-5 horas
   * Deep Archive: 12 horas
   */
  private InputStream handleGlacierRestoration(
      String bucket,
      String s3Key,
      StorageClass storageClass
  ) {

    try {
      // 1. Iniciar restauración
      int restoreDays = (storageClass == StorageClass.GLACIER) ? 1 : 3;
      GlacierJobParameters glacierJob = GlacierJobParameters.builder()
          .tier(Tier.STANDARD)  // Standard (1-5 horas) vs Expedited (1-5 min, más caro)
          .build();

      RestoreObjectRequest restoreRequest = RestoreObjectRequest.builder()
          .bucket(bucket)
          .key(s3Key)
          .restoreRequest(RestoreRequest.builder()
              .days(restoreDays)
              .glacierJobParameters(glacierJob)
              .build())
          .build();

      s3Client.restoreObject(restoreRequest);

      System.out.println("Restoration initiated for " + s3Key);
      System.out.println("Expected time: " +
          (storageClass == StorageClass.GLACIER ? "1-5 hours" : "12 hours"));

      // 2. Notificar al usuario que espere
      throw new DatasetRestorationPendingException(
          "Dataset está archivado. Restauración iniciada. Espera " +
          (storageClass == StorageClass.GLACIER ? "1-5 horas" : "12 horas")
      );

    } catch (S3Exception e) {
      throw new RuntimeException("Failed to restore from Glacier", e);
    }
  }

  /**
   * Listar todas las versiones de un dataset
   * Permite recuperar de eliminación accidental (hasta 30 días)
   */
  public List<DatasetVersion> listDatasetVersions(String customerId, String datasetName) {

    String s3Key = buildS3Key(customerId, datasetName);
    String bucket = "dataanalytics-prod";

    try {
      ListObjectVersionsRequest listRequest = ListObjectVersionsRequest.builder()
          .bucket(bucket)
          .prefix(s3Key)
          .build();

      ListObjectVersionsResponse response = s3Client.listObjectVersions(listRequest);

      List<DatasetVersion> versions = new ArrayList<>();

      // Obtener todas las versiones (incluyendo borradas)
      for (ObjectVersion version : response.versions()) {
        versions.add(new DatasetVersion(
            version.versionId(),
            version.lastModified(),
            version.size(),
            !version.isLatest()  // markDeleted si no es la última
        ));
      }

      // Ordenar por fecha (más reciente primero)
      Collections.sort(versions, (a, b) ->
          b.getLastModified().compareTo(a.getLastModified())
      );

      return versions;

    } catch (S3Exception e) {
      throw new RuntimeException("Failed to list versions", e);
    }
  }

  /**
   * Restaurar dataset a versión anterior
   * En caso de corrupción o cambio accidental
   */
  public void restorePreviousVersion(String customerId, String datasetName, String versionId) {

    String s3Key = buildS3Key(customerId, datasetName);
    String bucket = "dataanalytics-prod";

    try {
      // 1. Copiar versión antigua a "actual"
      CopyObjectRequest copyRequest = CopyObjectRequest.builder()
          .sourceBucket(bucket)
          .sourceKey(s3Key)
          .sourceVersionId(versionId)
          .destinationBucket(bucket)
          .destinationKey(s3Key)
          .metadataDirective(MetadataDirective.COPY)
          .build();

      CopyObjectResponse copyResponse = s3Client.copyObject(copyRequest);

      System.out.println("Restored version " + versionId + " as current");

      // 2. Log en DynamoDB (auditoría)
      logAuditEvent(
          customerId,
          "RESTORE_VERSION",
          "Restored version " + versionId + " to " + s3Key
      );

    } catch (S3Exception e) {
      throw new RuntimeException("Failed to restore version", e);
    }
  }

  private String buildS3Key(String customerId, String datasetName) {
    return "active_datasets/" + customerId + "/" + datasetName + ".parquet";
  }

  private void registerDatasetMetadata(String customerId, String datasetName,
                                       String s3Key, long fileSize, String bucket) {
    // Guardar en DynamoDB para búsqueda rápida
    Map<String, Object> item = new HashMap<>();
    item.put("customer_id", new com.amazonaws.services.dynamodb.model.AttributeValue(customerId));
    item.put("dataset_name", new com.amazonaws.services.dynamodb.model.AttributeValue(datasetName));
    item.put("s3_key", new com.amazonaws.services.dynamodb.model.AttributeValue(s3Key));
    item.put("s3_bucket", new com.amazonaws.services.dynamodb.model.AttributeValue(bucket));
    item.put("file_size_bytes", new com.amazonaws.services.dynamodb.model.AttributeValue().withN(String.valueOf(fileSize)));
    item.put("uploaded_at", new com.amazonaws.services.dynamodb.model.AttributeValue(Instant.now().toString()));
    item.put("status", new com.amazonaws.services.dynamodb.model.AttributeValue("ACTIVE"));

    dynamodb.putItem(new PutItemRequest("datasets_metadata", item));
  }

  private void logAuditEvent(String customerId, String action, String details) {
    // Logging para auditoría (cumplimiento GDPR/SOC2)
    System.out.println("[AUDIT] Customer: " + customerId + " | Action: " + action +
                      " | Details: " + details + " | Timestamp: " + Instant.now());
  }
}

// Excepción para cuando un dataset está siendo restaurado desde Glacier
class DatasetRestorationPendingException extends RuntimeException {
  public DatasetRestorationPendingException(String message) {
    super(message);
  }
}
`} />

        <h3>Configuración de CORS y Seguridad</h3>
        <CodeBlock language="json" title="S3 Bucket Policy (Seguridad)" code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyUnencryptedObjectUploads",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::dataanalytics-prod/*",
      "Condition": {
        "StringNotEquals": {
          "s3:x-amz-server-side-encryption": "aws:kms"
        }
      }
    },
    {
      "Sid": "DenyUnencryptedObjectUploads2",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::dataanalytics-prod/*",
      "Condition": {
        "StringNotEquals": {
          "s3:x-amz-server-side-encryption-aws-kms-key-id": "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012"
        }
      }
    },
    {
      "Sid": "DenyUnversionedObjectDeletion",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:DeleteObject",
      "Resource": "arn:aws:s3:::dataanalytics-prod/*",
      "Condition": {
        "StringNotEquals": {
          "s3:versionid": ""
        }
      }
    },
    {
      "Sid": "AllowS3ReadFromVPC",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:role/DataAnalyticsAppRole"
      },
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::dataanalytics-prod/*",
      "Condition": {
        "StringEquals": {
          "aws:SourceVpc": "vpc-12345678"
        }
      }
    }
  ]
}
`} />
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados: Antes vs Después</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (On-Premise)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>💾 <strong>Durabilidad:</strong> 99.9% (3-4 nines)</li>
              <li>💰 <strong>Costo mensual:</strong> $108,000</li>
              <li>😰 <strong>Confiabilidad:</strong> Miedo constante a pérdida</li>
              <li>⚠️ <strong>Recovería:</strong> 72+ horas (manual)</li>
              <li>❌ <strong>Cumplimiento:</strong> No certificado</li>
              <li>📊 <strong>Escalabilidad:</strong> Limitada (física)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (S3 + Glacier)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>💾 <strong>Durabilidad:</strong> 99.999999999% (11-nines)</li>
              <li>💰 <strong>Costo mensual:</strong> $4,350</li>
              <li>😎 <strong>Confiabilidad:</strong> Garantizada por AWS</li>
              <li>⚡ <strong>Recovería:</strong> 1-5 horas (automática)</li>
              <li>✅ <strong>Cumplimiento:</strong> SOC 2, HIPAA, GDPR, PCI</li>
              <li>📈 <strong>Escalabilidad:</strong> Ilimitada</li>
            </ul>
          </div>
        </div>

        <h3>Tabla de Durabilidad y Confiabilidad</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Métrica</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>On-Premise</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>S3 + Glacier</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Mejora</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Durabilidad anualizada</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.9%</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.999999999%</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>10,000x mejor</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Probabilidad pérdida en 1 año</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>0.1% (1 en 1000)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>0.00000000001% (1 en 100 billones)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Prácticamente cero</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Replicación automática</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Manual (3 copias)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>6+ copias distribuidas</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Automática</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Historial versiones</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Backup manual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>30 días automático</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Recuperación fácil</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Auditoría de acceso</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Logs locales (borrable)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>CloudTrail (inmutable)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Cumplimiento legal</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Encriptación en tránsito</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Opcional (extra $)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>Incluida (TLS 1.2+)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Siempre encriptado</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Costo mensual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$108,000</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$4,350</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-96% ahorro</td>
            </tr>
          </tbody>
        </table>

        <h3>Análisis de Impacto Negocio</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>KPI</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Impacto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Razón</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Contratos asegurados</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>+$500K/año</td>
              <td style={{ padding: '1rem' }}>Cliente exigía 11-nines, ahora lo cumplen</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ahorro infraestructura</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>-$1.24M/año</td>
              <td style={{ padding: '1rem' }}>$108K/mes × 12 meses</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Reducción DevOps</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>-$300K/año</td>
              <td style={{ padding: '1rem' }}>Ya no necesitan 2 sysadmins 24/7</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Cumplimiento legal</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>SOC 2 Type II</td>
              <td style={{ padding: '1rem' }}>Abre 3-5 nuevos clientes empresariales</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Riesgo de pérdida</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>-99.9%</td>
              <td style={{ padding: '1rem' }}>De riesgo alto a prácticamente cero</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>ROI de migración</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>Se pagó en 2 meses</td>
              <td style={{ padding: '1rem' }}>$1.24M ahorro anual vs $50K de migración</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Confianza cliente</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>Alta</td>
              <td style={{ padding: '1rem' }}>"Tus datos están seguros en AWS" (truth)</td>
            </tr>
          </tbody>
        </table>

        <h3>Ciclo de Vida de Datos (500TB)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Período</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Almacenamiento</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Datos</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Costo/mes</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Acceso</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Día 0-30</td>
              <td style={{ padding: '1rem' }}>S3 Standard (hot)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>100TB</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$2,300</td>
              <td style={{ padding: '1rem' }}>Milisegundos</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Día 30-90</td>
              <td style={{ padding: '1rem' }}>Glacier Flexible (warm)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>250TB</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$1,000</td>
              <td style={{ padding: '1rem' }}>1-5 horas</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Día 90+</td>
              <td style={{ padding: '1rem' }}>Glacier Deep Archive (cold)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>100TB</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$100</td>
              <td style={{ padding: '1rem' }}>12 horas (auditoría)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Año 1-7</td>
              <td style={{ padding: '1rem' }}>Glacier Deep Archive (frozen)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50TB</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$50</td>
              <td style={{ padding: '1rem' }}>Cumplimiento legal</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>TOTAL</td>
              <td style={{ padding: '1rem' }}></td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>500TB</td>
              <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>$3,450/mes</td>
              <td style={{ padding: '1rem' }}>Flexible según necesidad</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>🎓 Lecciones Aprendidas</h2>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>1. Durabilidad != Disponibilidad</h4>
          <p>
            S3 garantiza 11-nines de durabilidad (tus datos nunca se pierden).
            Pero si están en Glacier, recuperar tarda 12 horas (no disponible inmediatamente).
            Diseñar por capas: S3 Standard para acceso rápido, Glacier para auditoría.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>2. Lifecycle Policy = reducción de costos automática</h4>
          <p>
            DataAnalytics no tuvo que cambiar código. Solo configurar 1 vez:
            "Si no accedido en 30 días → Glacier. Si no accedido en 90 días → Deep Archive."
            AWS automáticamente mueve archivos. Ahorro 96% sin esfuerzo operacional.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>3. Versionado = seguro contra errores</h4>
          <p>
            On-premise: Un usuario borra archivo por accidente = perdido.
            S3: Historial 30 días, recupera versión anterior en 1 click.
            Es como Git para tus datos. Salvó a DataAnalytics de 5 "desastres".
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>4. CloudTrail = cumplimiento regulatorio</h4>
          <p>
            On-premise: Logs locales en servidor (fácil de borrar si quieres ocultar).
            S3 + CloudTrail: Auditoría inmutable en un bucket separado.
            "¿Quién accedió a qué datos en qué momento?" = respuesta en 5 segundos.
            Cumple GDPR, HIPAA, SOC 2 automáticamente.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>5. KMS + Encriptación = protección contra insider threats</h4>
          <p>
            Empleado disconforme intentó descargar datos sensibles.
            Con KMS + bucket policy: Rechazado automáticamente.
            No necesitaban confiar en que el empleado hiciera lo "correcto".
            El código de AWS lo forzó. Seguridad por arquitectura, no por honestidad.
          </p>
        </div>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Conclusión</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <strong>S3 + Glacier fue la solución correcta porque:</strong>
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ <strong>Durabilidad garantizada:</strong> 11-nines vs 3-4 nines on-premise</li>
          <li>✅ <strong>Costo reducido 96%:</strong> $108K/mes → $4.3K/mes</li>
          <li>✅ <strong>Seguridad mejorada:</strong> Encriptación + auditoría inmutable</li>
          <li>✅ <strong>Cumplimiento legal:</strong> SOC 2, HIPAA, GDPR certificados</li>
          <li>✅ <strong>Operacional simplificado:</strong> AWS maneja backups, redundancia, failover</li>
          <li>✅ <strong>Escalabilidad ilimitada:</strong> De 50TB a 500TB sin cambiar arquitectura</li>
        </ul>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          La lección más importante: No compres servidores para "posible" capacidad futura.
          Usa S3 + Lifecycle. Pagas por lo que usas. Si creces 10x, costo crece 10x, no 1000x.
          Y tu riesgo de pérdida desaparece. Eso es economía de nube hecha correctamente.
        </p>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/aws/servicios/s3" style={{
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
            ← Volver a S3
          </a>
          <a href="/aws/casos-reales/dynamodb" style={{
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
            Siguiente: DynamoDB →
          </a>
        </div>
      </section>
    </div>
  );
};
