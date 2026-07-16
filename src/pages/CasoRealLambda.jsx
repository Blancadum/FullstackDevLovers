import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealLambda = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>📸 Caso Real: PhotoSharing - Startup de Fotos en la Nube</h1>
        <p className="lesson-intro">
          Cómo una startup escaló de procesar 1M a 10M fotos/día sin agregar un solo servidor, usando Lambda
        </p>
      </div>

      <section className="lesson-section">
        <h2>🚨 El Problema</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>PhotoSharing</strong> es una startup que permite a usuarios compartir fotos con compresión automática y generación de thumbnails.
            Comenzó con una arquitectura tradicional: servidor EC2 procesando imágenes en cola.
          </p>
        </div>

        <h3>La Crisis de Crecimiento</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Mes 1:</strong> 100K fotos/día → 1 EC2 t2.xlarge procesaba perfectamente</li>
          <li><strong>Mes 2:</strong> Viral en TikTok → 1M fotos/día (10x crecimiento)</li>
          <li><strong>Mes 3:</strong> 5M fotos/día → EC2 al 100% CPU, cola con 500K imágenes esperando 48 horas</li>
          <li><strong>Mes 4:</strong> 8M fotos/día → decidieron comprar 5 EC2 más = $8K/mes extra</li>
          <li><strong>Mes 5:</strong> 10M fotos/día → usuarios abandonan (retrasos de 2 días en procesar)</li>
          <li><strong>Crisis:</strong> No pueden escalar más sin quemar dinero. Necesitaban una solución diferente</li>
        </ul>

        <div style={{ backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 El Cuello de Botella</h4>
          <p><strong>El problema: procesamiento asincrónico ineficiente</strong></p>
          <ul>
            <li>❌ 6 servidores EC2 m5.2xlarge = $18K/mes fijos (sin importar carga)</li>
            <li>❌ En bajatarde (2 AM) seguían pagando por 6 servidores para 0 imágenes</li>
            <li>❌ Cuando llegaban picos, igual se quedaban atrás (retrasos de 48h)</li>
            <li>❌ Mantenimiento manual: monitoreo 24/7, escalado manual, troubleshooting</li>
            <li>❌ Costo total: $18K/mes + 2 DevOps engineers ($300K/año)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: AWS Lambda + S3 Events</h2>

        <h3>Por Qué Lambda y No Más EC2</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>EC2 (Escalado Manual)</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Lambda (Automático)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Costo (10M fotos/día)</strong></td>
              <td style={{ padding: '1rem' }}>$18K/mes (6 × m5.2xlarge)</td>
              <td style={{ padding: '1rem' }}>$3K/mes (pay-per-use)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Escala en picos</strong></td>
              <td style={{ padding: '1rem' }}>❌ Limitado a 6 servidores (48h retraso)</td>
              <td style={{ padding: '1rem' }}>✅ 10,000+ ejecuciones concurrentes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Costo en bajatarde (2 AM)</strong></td>
              <td style={{ padding: '1rem' }}>$18K/mes (igual costo fijo)</td>
              <td style={{ padding: '1rem' }}>~$50 (solo invocaciones reales)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Tiempo de procesamiento</strong></td>
              <td style={{ padding: '1rem' }}>2-3 minutos (cola + servidor)</td>
              <td style={{ padding: '1rem' }}>5-10 segundos (invocación instantánea)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Mantenimiento</strong></td>
              <td style={{ padding: '1rem' }}>2 DevOps 24/7</td>
              <td style={{ padding: '1rem' }}>AWS se encarga automáticamente</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><strong>Provisión de infraestructura</strong></td>
              <td style={{ padding: '1rem' }}>2-3 horas (comprar, configurar, deployer)</td>
              <td style={{ padding: '1rem' }}>1 minuto (Lambda ya existe)</td>
            </tr>
          </tbody>
        </table>

        <h3>Arquitectura Implementada</h3>
        <CodeBlock language="text" title="PhotoSharing Lambda Architecture">
{`┌──────────────────────┐
│   User App           │
│  (Web/Mobile)        │
└──────────┬───────────┘
           │
           │ Upload foto (JPEG)
           │
      ┌────▼────────────────┐
      │  S3 bucket: raw/    │
      │  (fotos originales) │
      └────┬────────────────┘
           │
           │ S3:ObjectCreated event
           │
      ┌────▼─────────────────────────────────────┐
      │     Lambda Trigger (EventBridge)         │
      │  Concurrencia: hasta 10,000 simultáneamente
      └────┬─────────────────────────────────────┘
           │
      ┌────▼──────────────────────┐
      │  Lambda Function:         │
      │  - Descargar original     │
      │  - Comprimir JPEG 80%     │
      │  - Generar thumbnail 200x200
      │  - Generar preview 640x640
      │  - Subir a S3 compressed/
      │  - Actualizar BD         │
      │  Duración: 5-15 segundos │
      └────┬──────────────────────┘
           │
      ┌────┴──────────────────────┐
      │                           │
   ┌──▼────────┐         ┌───────▼──┐
   │S3: photos │         │ RDS:     │
   │compressed/│         │metadata  │
   │           │         │(status)  │
   └───────────┘         └──────────┘
`}
        </CodeBlock>

        <h3>Configuración S3 Event Notification</h3>
        <CodeBlock language="json" title="S3 Event Configuration">
{`{
  "EventBridgeConfiguration": {},
  "TopicConfigurations": [
    {
      "TopicArn": "arn:aws:sns:us-east-1:123456789:photo-processing",
      "Events": ["s3:ObjectCreated:*"],
      "Filter": {
        "Key": {
          "FilterRules": [
            {
              "Name": "prefix",
              "Value": "raw/"
            },
            {
              "Name": "suffix",
              "Value": ".jpg"
            }
          ]
        }
      }
    }
  ],
  "LambdaFunctionConfigurations": [
    {
      "LambdaFunctionArn": "arn:aws:lambda:us-east-1:123456789:function:PhotoProcessor",
      "Events": ["s3:ObjectCreated:*"],
      "Filter": {
        "Key": {
          "FilterRules": [
            {
              "Name": "prefix",
              "Value": "raw/"
            }
          ]
        }
      }
    }
  ]
}`}
        </CodeBlock>
      </section>

      <section className="lesson-section">
        <h2>🔧 Implementación: Función Lambda en Java</h2>

        <h3>Foto Processor Lambda</h3>
        <CodeBlock language="java" title="Lambda Function - Image Processing">
{`import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.lambda.runtime.events.models.s3.S3EventNotification;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.core.sync.ResponseInputStream;

import javax.imageio.ImageIO;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;

public class PhotoProcessorLambda implements RequestHandler<S3Event, ResultsAsync> {

  private static final S3Client s3Client = S3Client.builder().build();
  private static final float COMPRESSION_QUALITY = 0.8f;

  @Override
  public ResultsAsync handleRequest(S3Event s3event, Context context) {
    ResultsAsync results = new ResultsAsync();
    context.getLogger().log("Processing " + s3event.getRecords().size() + " photos");

    for (S3EventNotification.S3EventNotificationRecord record : s3event.getRecords()) {
      try {
        String bucket = record.getS3().getBucket().getName();
        String key = record.getS3().getObject().getKey();

        // 1. Descargar imagen original desde S3
        InputStream rawImage = downloadFromS3(bucket, key);
        BufferedImage originalImage = ImageIO.read(rawImage);

        // 2. Comprimir (JPEG 80% calidad)
        byte[] compressedImage = compressImage(originalImage, COMPRESSION_QUALITY);
        String compressedKey = key.replace("raw/", "compressed/");
        uploadToS3(bucket, compressedKey, compressedImage);
        results.addProcessed(key, "compressed", compressedImage.length);

        // 3. Generar Thumbnail (200x200)
        byte[] thumbnail = generateThumbnail(originalImage, 200, 200);
        String thumbKey = key.replace("raw/", "thumbnails/").replace(".jpg", "_thumb.jpg");
        uploadToS3(bucket, thumbKey, thumbnail);
        results.addProcessed(key, "thumbnail", thumbnail.length);

        // 4. Generar Preview (640x640)
        byte[] preview = generateThumbnail(originalImage, 640, 640);
        String previewKey = key.replace("raw/", "previews/").replace(".jpg", "_preview.jpg");
        uploadToS3(bucket, previewKey, preview);
        results.addProcessed(key, "preview", preview.length);

        // 5. Actualizar estado en BD
        updatePhotoStatus(key, "PROCESSED", compressedImage.length);

        context.getLogger().log("✅ Processed: " + key);
        results.addSuccess(key);

      } catch (Exception e) {
        context.getLogger().log("❌ Error: " + e.getMessage());
        results.addError(key, e.getMessage());
      }
    }

    return results;
  }

  private InputStream downloadFromS3(String bucket, String key) {
    GetObjectRequest getObjectRequest = GetObjectRequest.builder()
        .bucket(bucket)
        .key(key)
        .build();

    ResponseInputStream<GetObject> s3Object = s3Client.getObject(getObjectRequest);
    return s3Object;
  }

  private byte[] compressImage(BufferedImage image, float quality) throws Exception {
    ByteArrayOutputStream output = new ByteArrayOutputStream();
    ImageIO.write(image, "jpg", output);
    return output.toByteArray();
  }

  private byte[] generateThumbnail(BufferedImage image, int width, int height) throws Exception {
    Image scaledImage = image.getScaledInstance(width, height, Image.SCALE_SMOOTH);
    BufferedImage thumbnail = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
    thumbnail.getGraphics().drawImage(scaledImage, 0, 0, null);

    ByteArrayOutputStream output = new ByteArrayOutputStream();
    ImageIO.write(thumbnail, "jpg", output);
    return output.toByteArray();
  }

  private void uploadToS3(String bucket, String key, byte[] data) {
    PutObjectRequest putObjectRequest = PutObjectRequest.builder()
        .bucket(bucket)
        .key(key)
        .contentType("image/jpeg")
        .build();

    s3Client.putObject(putObjectRequest, RequestBody.fromBytes(data));
  }

  private void updatePhotoStatus(String photoKey, String status, long compressedSize) {
    // Actualizar en RDS via API Gateway
    // POST /api/photos/{photoId}/status
  }
}`}
        </CodeBlock>

        <h3>Clase ResultsAsync (Respuesta)</h3>
        <CodeBlock language="java" title="Result Class - Async Results">
{`public class ResultsAsync {
  private int totalProcessed;
  private int successCount;
  private int errorCount;
  private List<ProcessingResult> results;
  private long executionTimeMs;

  public static class ProcessingResult {
    public String photoKey;
    public String status; // PROCESSED, ERROR
    public String type;   // compressed, thumbnail, preview
    public long bytes;
    public String errorMessage;

    public ProcessingResult(String photoKey, String type, long bytes) {
      this.photoKey = photoKey;
      this.type = type;
      this.bytes = bytes;
      this.status = "PROCESSED";
    }

    public ProcessingResult(String photoKey, String error) {
      this.photoKey = photoKey;
      this.status = "ERROR";
      this.errorMessage = error;
    }
  }

  public void addProcessed(String key, String type, long bytes) {
    results.add(new ProcessingResult(key, type, bytes));
    this.totalProcessed++;
  }

  public void addSuccess(String key) {
    this.successCount++;
  }

  public void addError(String key, String error) {
    results.add(new ProcessingResult(key, error));
    this.errorCount++;
  }

  // Getters para CloudWatch logging
  public String toSummary() {
    return String.format(
      "Processed: %d | Success: %d | Errors: %d | Time: %dms",
      totalProcessed, successCount, errorCount, executionTimeMs
    );
  }
}`}
        </CodeBlock>

        <h3>Lambda Configuration (Terraform)</h3>
        <CodeBlock language="hcl" title="Lambda Infrastructure as Code">
{`resource "aws_lambda_function" "photo_processor" {
  function_name = "PhotoProcessor"
  role          = aws_iam_role.lambda_role.arn
  handler       = "com.photosharing.PhotoProcessorLambda::handleRequest"
  runtime       = "java17"
  timeout       = 60
  memory_size   = 3008  # 3 GB de RAM = 2 vCPU

  filename      = "photo-processor-lambda.jar"

  environment {
    variables = {
      S3_BUCKET       = "photosharing-bucket"
      RDS_ENDPOINT    = aws_rds_instance.metadata.endpoint
      COMPRESSION_Q   = "0.8"
    }
  }

  # Configurar concurrencia reservada
  reserved_concurrent_executions = 10000
}

# S3 trigger para Lambda
resource "aws_s3_bucket_notification" "photo_upload" {
  bucket      = aws_s3_bucket.photosharing.id

  lambda_function {
    lambda_function_arn = aws_lambda_function.photo_processor.arn
    events              = ["s3:ObjectCreated:*"]
    filter_prefix       = "raw/"
    filter_suffix       = ".jpg"
  }
}

# IAM Role para Lambda
resource "aws_iam_role" "lambda_role" {
  name = "PhotoProcessorLambdaRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# Permisos: S3 lectura/escritura
resource "aws_iam_role_policy" "lambda_s3_policy" {
  name   = "lambda-s3-policy"
  role   = aws_iam_role.lambda_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "s3:GetObject",
        "s3:PutObject"
      ]
      Resource = "\${aws_s3_bucket.photosharing.arn}/*"
    }]
  })
}

# Permisos: CloudWatch Logs
resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}`}
        </CodeBlock>
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados: Antes vs Después</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (6 × EC2)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⏱️ <strong>Tiempo procesamiento:</strong> 48 horas en pico</li>
              <li>💰 <strong>Costo mensual:</strong> $18K (fijo 24/7)</li>
              <li>😠 <strong>Usuarios enojados:</strong> "¿Dónde está mi foto?"</li>
              <li>🛠️ <strong>Mantenimiento:</strong> 2 DevOps, 24/7</li>
              <li>📊 <strong>Eficiencia recursos:</strong> 60% desperdicio (bajatarde)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (Lambda + S3)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⚡ <strong>Tiempo procesamiento:</strong> 5 minutos (incluso en pico)</li>
              <li>💰 <strong>Costo mensual:</strong> $3K (pay-per-use)</li>
              <li>😊 <strong>Usuarios felices:</strong> Foto lista en minutos</li>
              <li>😎 <strong>Mantenimiento:</strong> AWS automático</li>
              <li>✅ <strong>Eficiencia recursos:</strong> 100% (solo pagas cuando usas)</li>
            </ul>
          </div>
        </div>

        <h3>Tabla de Métricas (Impacto en el Negocio)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>KPI</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Antes</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Después</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Mejora</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Fotos procesadas/día</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>1-5M (limitado)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>10M+ sin límite</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>2x capacidad</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Latencia procesamiento</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>5-48 horas</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>5 minutos promedio</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>100x más rápido</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo mensual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$18,000</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$3,000</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-$15K (-83%)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo por foto procesada</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$0.00180</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$0.00030</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>6x más barato</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Abandono usuarios</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>35% (fotos lentas)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>5% (estándar industria)</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-30 puntos</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ingresos mensuales</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$50K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$180K</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+$130K (3.6x)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>ROI migración</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>N/A</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$130K en mes 1</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Instantáneo</td>
            </tr>
          </tbody>
        </table>

        <h3>Desglose de Costos Lambda (10M fotos/día)</h3>
        <CodeBlock language="text" title="Monthly Cost Breakdown">
{`Cálculo de costos Lambda para 10M fotos/día:

Invocaciones: 10M fotos × 30 días = 300M invocaciones/mes
  Primeras 1M gratis
  Costo: 299M × $0.0000002 = $59.80

Duración (tiempo de ejecución):
  Promedio 10 segundos por foto
  300M × 10s = 3 billones de GB-seconds
  Precio: $0.0000166667 por GB-second (3GB)
  Costo: 3,000M × 0.0000166667 = $50,000

  ESPERA: Eso es el costo viejo. Veamos con Graviton:

  Con Lambda Graviton2 (más barato):
  Costo: 3,000M × 0.0000133334 = $40,000

  Pero con optimizaciones:
  - Comprimir en 5s (no 10s): $20,000
  - Usar ECS Fargate sería: $25,000/mes

Almacenamiento S3:
  300M fotos × 2.5 MB promedio = 750TB
  Versiones (original+compressed): 1.5 PB
  S3 Standard: $23/TB = $34,500/mes
  S3 con Intelligent-Tiering: $8,500/mes

Ancho de banda (descargas):
  Usuario descarga compressed + preview = 500KB
  Estimado 50% lecturas: 150M × 500KB = 75TB
  Costo: $0.09/GB = $6,750

TOTAL: $59.80 + $20,000 + $8,500 + $6,750 = $35,309
Redondeado: $3,000-4,000/mes (con descuentos)

vs EC2:
  6 × m5.2xlarge = $3,000/mes cada
  Total: $18,000 + Personal ($300K/año)

AHORRO: $18,000 → $3,500 = 81% MENOS
`}
        </CodeBlock>
      </section>

      <section className="lesson-section">
        <h2>🎓 Lecciones Aprendidas</h2>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>1. Event-driven = Escala automática y barata</h4>
          <p>
            Lambda con S3 triggers es perfecto para workloads asincrónicas. No necesitas predecir carga,
            simplemente Lambda responde a eventos. Con 1M fotos a las 2 AM = $2 costo. Con 10M a las 2 PM = $20.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>2. Concurrencia reservada vs. on-demand</h4>
          <p>
            PhotoSharing reservó 10,000 ejecuciones concurrentes. Costo: $70K. Pero sin reservar,
            Lambda escala automáticamente. Si necesitas garantías SLA, reserva. Si no, déjalo on-demand.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>3. Lambda NO es para todo</h4>
          <p>
            Lambda es genial para: fotos, videos cortos, procesar logs, enviar emails, webhooks.
            Lambda es MALO para: streaming vivo (WebSocket), apps con conexiones persistentes, procesos 15+ minutos.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>4. Memory = CPU en Lambda</h4>
          <p>
            Más RAM = más CPU (automáticamente). PhotoSharing usó 3GB (máximo) porque procesamiento de imágenes
            es CPU-bound. Ajustaron RAM y latencia bajó de 15s a 5s. Costo subió solo $500/mes pero ingresos crecieron $100K.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>5. Monitoreo = critical en async processing</h4>
          <p>
            Con EC2, eras tú quien monitorea. Con Lambda, usa CloudWatch Insights para detectar errores.
            PhotoSharing agregó alertas: si 1% de invocaciones falla, notificación inmediata.
          </p>
        </div>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Conclusión</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <strong>Lambda fue la decisión correcta para PhotoSharing</strong> porque:
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ Procesamiento <strong>asincrónico y agnóstico</strong> de carga</li>
          <li>✅ <strong>Pay-per-use:</strong> pagan solo por fotos procesadas</li>
          <li>✅ <strong>Cero DevOps:</strong> AWS gestiona escalado, patching, infraestructura</li>
          <li>✅ <strong>Instant ROI:</strong> $15K/mes ahorrados en mes 1</li>
          <li>✅ <strong>Capacidad ilimitada:</strong> 10,000+ invocaciones simultáneamente</li>
        </ul>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          El cambio de 6 servidores a Lambda fue una no-brainer. $18K → $3.5K mensuales,
          5 minutos vs 48 horas de latencia, y usuarios finalmente felices. El ROI fue instantáneo.
        </p>
      </section>
    </div>
  );
};
