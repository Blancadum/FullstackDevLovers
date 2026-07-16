import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const CasoRealLambda = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>📸 Caso Real: PhotoSharing - Plataforma de Fotos</h1>
        <p className="lesson-intro">
          Cómo una startup pasó de procesar fotos en 48 horas a 5 minutos usando AWS Lambda y S3 Triggers
        </p>
      </div>

      <section className="lesson-section">
        <h2>🚨 El Problema</h2>

        <div style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <p style={{ marginTop: 0 }}>
            <strong>PhotoSharing</strong> es una plataforma de compartir fotos tipo Instagram.
            Los usuarios suben fotos y la plataforma procesa automáticamente: redimensionamiento,
            filtros, reconocimiento de objetos, y extracción de metadatos.
          </p>
        </div>

        <h3>Crisis de Procesamiento</h3>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>Mes 1-3:</strong> 1M fotos/día → EC2 t3.xlarge procesaba bien</li>
          <li><strong>Mes 4:</strong> 5M fotos/día → EC2 al 70% CPU, colas acumulándose</li>
          <li><strong>Mes 5:</strong> 10M fotos/día → EC2 saturado, necesitaban 5 instancias</li>
          <li><strong>Mes 6:</strong> 10M fotos/día, pero procesamiento tardaba 24-48 horas</li>
          <li><strong>Problema crítico:</strong> Usuarios subían foto a las 9am y la veían procesada a las 9pm siguiente</li>
          <li><strong>Decisión:</strong> Migrar procesamiento a AWS Lambda + S3 Triggers</li>
        </ul>

        <div style={{ backgroundColor: '#f8d7da', border: '2px solid #f5c6cb', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h4>📊 El Cuello de Botella</h4>
          <p><strong>Procesamiento sincrónico mataba el rendimiento:</strong></p>
          <ul>
            <li>❌ Servidor EC2 único = bottleneck absoluto</li>
            <li>❌ Cada foto tardaba 5-10 segundos en procesarse (6 pasos secuenciales)</li>
            <li>❌ No escalaba automáticamente → agregar EC2 tardaba 30+ minutos</li>
            <li>❌ Cuando caía el servidor, 100K fotos se perdían de la cola</li>
            <li>❌ Costo: $3,000/mes en EC2 24/7 (aunque idle la mayor parte)</li>
            <li>❌ Experiencia usuario: "Cargando tu foto" durante minutos 😤</li>
          </ul>
        </div>

        <h3>Timeline de la Crisis</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #333' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Fecha</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Fotos/día</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Problema</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Solución Fallida</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Mayo</td>
              <td style={{ padding: '1rem' }}>1M</td>
              <td style={{ padding: '1rem' }}>Lento pero funciona</td>
              <td style={{ padding: '1rem' }}>Agregar más CPU al EC2</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Junio</td>
              <td style={{ padding: '1rem' }}>5M</td>
              <td style={{ padding: '1rem' }}>Demora 12 horas</td>
              <td style={{ padding: '1rem' }}>Escalar a 2 EC2 (manual)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Julio</td>
              <td style={{ padding: '1rem' }}>10M</td>
              <td style={{ padding: '1rem' }}>Demora 48 horas</td>
              <td style={{ padding: '1rem' }}>Escalar a 5 EC2 (manual)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Agosto</td>
              <td style={{ padding: '1rem' }}>10M+</td>
              <td style={{ padding: '1rem' }}>¡Pánico total!</td>
              <td style={{ padding: '1rem' }}>Migrar a Lambda</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>✅ La Solución: Lambda + S3 Triggers</h2>

        <h3>Por Qué Lambda y No EC2</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Aspecto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>EC2 (Antes)</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Lambda (Después)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Escalabilidad</strong></td>
              <td style={{ padding: '1rem' }}>Manual (+ 30 minutos)</td>
              <td style={{ padding: '1rem' }}>Automática (&lt; 1 segundo)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Capacidad máxima</strong></td>
              <td style={{ padding: '1rem' }}>5 instancias = 10M fotos/día</td>
              <td style={{ padding: '1rem' }}>Ilimitada (100M+ posible)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Costo en picos</strong></td>
              <td style={{ padding: '1rem' }}>$3K/mes 24/7 (aunque idle 70%)</td>
              <td style={{ padding: '1rem' }}>$300/mes (solo por uso real)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Tiempo procesamiento</strong></td>
              <td style={{ padding: '1rem' }}>48 horas (cola)</td>
              <td style={{ padding: '1rem' }}>5 minutos (paralelo)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}><strong>Confiabilidad</strong></td>
              <td style={{ padding: '1rem' }}>Si cae, pierden datos</td>
              <td style={{ padding: '1rem' }}>11-nines durabilidad</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><strong>Operacional</strong></td>
              <td style={{ padding: '1rem' }}>Monitorear 24/7, patching</td>
              <td style={{ padding: '1rem' }}>AWS maneja todo</td>
            </tr>
          </tbody>
        </table>

        <h3>Arquitectura Implementada</h3>
        <CodeBlock language="text" title="PhotoSharing Lambda Architecture" code={`┌─────────────────────────────────────────────────────┐
│ User Uploads Photo                                  │
│ (API Gateway POST /upload)                          │
└────────────────────┬────────────────────────────────┘
                     │
        ┌────────────▼──────────┐
        │ S3 Upload (raw-photos)│
        │ s3://photos/user123/  │
        │      raw/photo.jpg    │
        └────────────┬──────────┘
                     │
        ┌────────────▼─────────────────────────┐
        │ S3 Event Trigger                     │
        │ (PUT object notification)            │
        └────────────┬─────────────────────────┘
                     │
        ┌────────────▼─────────────────────────┐
        │ Lambda Functions (paralelo)          │
        │ ┌──────────────────────────────────┐ │
        │ │ Fn1: Redimensionamiento (100ms)  │ │
        │ │ • Thumbnail: 200x200             │ │
        │ │ • Medium: 800x800                │ │
        │ │ • Full: 4K                       │ │
        │ └──────────────────────────────────┘ │
        │ ┌──────────────────────────────────┐ │
        │ │ Fn2: Aplicar Filtros (150ms)     │ │
        │ │ • Sepia, B&W, Blur               │ │
        │ └──────────────────────────────────┘ │
        │ ┌──────────────────────────────────┐ │
        │ │ Fn3: Extraer Metadata (100ms)    │ │
        │ │ • EXIF, ubicación, cámara        │ │
        │ └──────────────────────────────────┘ │
        │ ┌──────────────────────────────────┐ │
        │ │ Fn4: Reconocimiento ML (200ms)   │ │
        │ │ • Detectar objetos (AWS Rekognit)│
        │ │ • Etiquetas automáticas          │ │
        │ └──────────────────────────────────┘ │
        └────────────┬─────────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ S3 Storage (processed-photos)     │
        │ • thumbnails/                    │
        │ • medium/                        │
        │ • full/                          │
        │ • metadata.json                  │
        └────────────┬──────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ DynamoDB (Photo Index)           │
        │ Actualiza metadatos + estado     │
        │ "PROCESSED" ✓                    │
        └──────────────────────────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │ CloudFront CDN                   │
        │ Usuario ve foto en < 5 minutos   │
        └──────────────────────────────────┘
`} />

        <h3>Configuración S3 Triggers</h3>
        <CodeBlock language="json" title="S3 Event Configuration (Lambda Trigger)" code={`{
  "EventBridgeConfiguration": {
    "S3Bucket": "photosharing-raw-photos",
    "EventPattern": {
      "source": ["aws.s3"],
      "detail-type": ["Object Created"],
      "detail": {
        "bucket": {
          "name": ["photosharing-raw-photos"]
        },
        "object": {
          "key": [{
            "prefix": "uploads/",
            "suffix": ".jpg"
          }]
        }
      }
    },
    "Targets": [
      {
        "Arn": "arn:aws:lambda:us-east-1:123456789012:function:ProcessPhotoThumbnail",
        "RoleArn": "arn:aws:iam::123456789012:role/S3LambdaRole",
        "DeadLetterConfig": {
          "Arn": "arn:aws:sqs:us-east-1:123456789012:dlq-photos"
        }
      },
      {
        "Arn": "arn:aws:lambda:us-east-1:123456789012:function:ProcessPhotoFilters",
        "RoleArn": "arn:aws:iam::123456789012:role/S3LambdaRole"
      },
      {
        "Arn": "arn:aws:lambda:us-east-1:123456789012:function:ExtractMetadata",
        "RoleArn": "arn:aws:iam::123456789012:role/S3LambdaRole"
      },
      {
        "Arn": "arn:aws:lambda:us-east-1:123456789012:function:ProcessML",
        "RoleArn": "arn:aws:iam::123456789012:role/S3LambdaRole"
      }
    ]
  }
}
`} />
      </section>

      <section className="lesson-section">
        <h2>🔧 Implementación: Lambdas en Java</h2>

        <h3>Lambda 1: Redimensionamiento (Paralelo)</h3>
        <CodeBlock language="java" title="ProcessPhotoThumbnail Lambda Handler" code={`import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import net.coobird.thumbnailator.Thumbnailator;
import java.io.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;

public class ProcessPhotoThumbnail implements RequestHandler<S3Event, String> {

  private AmazonS3 s3Client = AmazonS3ClientBuilder.defaultClient();

  @Override
  public String handleRequest(S3Event s3event, Context context) {
    try {
      String bucket = s3event.getRecords().get(0).getS3().getBucket().getName();
      String key = s3event.getRecords().get(0).getS3().getObject().getKey();

      context.getLogger().log("Processing photo: " + bucket + "/" + key);

      // 1. Descargar foto original de S3
      GetObjectRequest request = new GetObjectRequest(bucket, key);
      BufferedImage originalImage = ImageIO.read(
          s3Client.getObject(request).getObjectContent()
      );

      long startTime = System.currentTimeMillis();

      // 2. Crear thumbnails en paralelo
      BufferedImage thumbnail200 = Thumbnailator.createThumbnail(originalImage, 200, 200);
      BufferedImage medium800 = Thumbnailator.createThumbnail(originalImage, 800, 800);

      // 3. Guardar en S3 (processed-photos)
      ByteArrayOutputStream baos200 = new ByteArrayOutputStream();
      ImageIO.write(thumbnail200, "jpg", baos200);
      String thumbKey = key.replace("uploads/", "thumbnails/");
      s3Client.putObject(new PutObjectRequest(
          "photosharing-processed",
          thumbKey,
          new ByteArrayInputStream(baos200.toByteArray()),
          baos200.size()
      ));

      ByteArrayOutputStream baos800 = new ByteArrayOutputStream();
      ImageIO.write(medium800, "jpg", baos800);
      String mediumKey = key.replace("uploads/", "medium/");
      s3Client.putObject(new PutObjectRequest(
          "photosharing-processed",
          mediumKey,
          new ByteArrayInputStream(baos800.toByteArray()),
          baos800.size()
      ));

      long duration = System.currentTimeMillis() - startTime;
      context.getLogger().log("Thumbnail processing completed in " + duration + "ms");

      return "Success: Processed " + key + " in " + duration + "ms";

    } catch (Exception e) {
      context.getLogger().log("Error: " + e.getMessage());
      throw new RuntimeException(e);
    }
  }
}
`} />

        <h3>Lambda 2: Extracción de Metadatos (Paralelo)</h3>
        <CodeBlock language="java" title="ExtractMetadata Lambda Handler" code={`import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.dynamodb.AmazonDynamoDB;
import com.amazonaws.services.dynamodb.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodb.model.PutItemRequest;
import com.drew.imaging.ImageMetadataReader;
import com.drew.metadata.Metadata;
import com.drew.metadata.exif.ExifIFD0Directory;
import org.json.JSONObject;
import java.io.*;
import java.time.Instant;
import java.util.*;

public class ExtractMetadata implements RequestHandler<S3Event, String> {

  private AmazonS3 s3Client = AmazonS3ClientBuilder.defaultClient();
  private AmazonDynamoDB dynamodb = AmazonDynamoDBClientBuilder.defaultClient();

  @Override
  public String handleRequest(S3Event s3event, Context context) {
    try {
      String bucket = s3event.getRecords().get(0).getS3().getBucket().getName();
      String key = s3event.getRecords().get(0).getS3().getObject().getKey();

      context.getLogger().log("Extracting metadata from: " + key);

      // 1. Descargar foto
      InputStream photoStream = s3Client.getObject(bucket, key).getObjectContent();

      // 2. Extraer EXIF con metadata-extractor
      Metadata metadata = ImageMetadataReader.readMetadata(photoStream);

      JSONObject exifData = new JSONObject();

      // 3. Extraer campos EXIF comunes
      ExifIFD0Directory exifDir = metadata.getFirstDirectoryOfType(ExifIFD0Directory.class);
      if (exifDir != null) {
        exifData.put("camera", exifDir.getString(ExifIFD0Directory.TAG_MODEL));
        exifData.put("datetime", exifDir.getString(ExifIFD0Directory.TAG_DATETIME));
        exifData.put("orientation", exifDir.getInt(ExifIFD0Directory.TAG_ORIENTATION));
      }

      // 4. Guardar en DynamoDB
      String photoId = extractPhotoId(key);
      Map<String, Object> item = new HashMap<>();
      item.put("photo_id", new com.amazonaws.services.dynamodb.model.AttributeValue(photoId));
      item.put("bucket", new com.amazonaws.services.dynamodb.model.AttributeValue(bucket));
      item.put("key", new com.amazonaws.services.dynamodb.model.AttributeValue(key));
      item.put("exif_data", new com.amazonaws.services.dynamodb.model.AttributeValue(exifData.toString()));
      item.put("extracted_at", new com.amazonaws.services.dynamodb.model.AttributeValue(Instant.now().toString()));
      item.put("status", new com.amazonaws.services.dynamodb.model.AttributeValue("EXIF_EXTRACTED"));

      dynamodb.putItem("photos_metadata", new PutItemRequest().withItem(item));

      context.getLogger().log("Metadata extracted for: " + photoId);
      return "Success: Extracted metadata";

    } catch (Exception e) {
      context.getLogger().log("Error: " + e.getMessage());
      throw new RuntimeException(e);
    }
  }

  private String extractPhotoId(String key) {
    // Convertir "uploads/user123/photo-abc123.jpg" a "user123-photo-abc123"
    return key.replace("uploads/", "").replace("/", "-").replace(".jpg", "");
  }
}
`} />

        <h3>Lambda 3: Reconocimiento con ML (Paralelo)</h3>
        <CodeBlock language="java" title="ProcessML Lambda Handler" code={`import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.rekognition.AmazonRekognition;
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder;
import com.amazonaws.services.rekognition.model.*;
import com.amazonaws.services.dynamodb.AmazonDynamoDB;
import com.amazonaws.services.dynamodb.AmazonDynamoDBClientBuilder;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.*;

public class ProcessML implements RequestHandler<S3Event, String> {

  private AmazonRekognition rekognition = AmazonRekognitionClientBuilder.defaultClient();
  private AmazonDynamoDB dynamodb = AmazonDynamoDBClientBuilder.defaultClient();

  @Override
  public String handleRequest(S3Event s3event, Context context) {
    try {
      String bucket = s3event.getRecords().get(0).getS3().getBucket().getName();
      String key = s3event.getRecords().get(0).getS3().getObject().getKey();

      context.getLogger().log("Processing ML labels for: " + key);

      // 1. Llamar a AWS Rekognition para detectar objetos
      DetectLabelsRequest request = new DetectLabelsRequest()
          .withImage(new Image()
              .withS3Object(new S3Object()
                  .withBucket(bucket)
                  .withName(key)))
          .withMaxLabels(20)
          .withMinConfidence(70F);

      long startTime = System.currentTimeMillis();
      DetectLabelsResult result = rekognition.detectLabels(request);
      long duration = System.currentTimeMillis() - startTime;

      context.getLogger().log("ML processing completed in " + duration + "ms");

      // 2. Convertir labels a JSON
      JSONArray labels = new JSONArray();
      for (Label label : result.getLabels()) {
        JSONObject labelObj = new JSONObject();
        labelObj.put("name", label.getName());
        labelObj.put("confidence", label.getConfidence());
        labels.put(labelObj);
      }

      // 3. Guardar en DynamoDB
      String photoId = extractPhotoId(key);
      Map<String, Object> item = new HashMap<>();
      item.put("photo_id", new com.amazonaws.services.dynamodb.model.AttributeValue(photoId));
      item.put("labels", new com.amazonaws.services.dynamodb.model.AttributeValue(labels.toString()));
      item.put("ml_processed_at", new com.amazonaws.services.dynamodb.model.AttributeValue(System.currentTimeMillis() + ""));
      item.put("status", new com.amazonaws.services.dynamodb.model.AttributeValue("ML_PROCESSED"));

      dynamodb.putItem("photos_metadata", new PutItemRequest().withItem(item));

      context.getLogger().log("Labels saved for: " + photoId);
      return "Success: ML processing completed with " + result.getLabels().size() + " labels";

    } catch (Exception e) {
      context.getLogger().log("Error: " + e.getMessage());
      throw new RuntimeException(e);
    }
  }

  private String extractPhotoId(String key) {
    return key.replace("uploads/", "").replace("/", "-").replace(".jpg", "");
  }
}
`} />

        <h3>Configuración con Serverless Framework</h3>
        <CodeBlock language="yaml" title="serverless.yml" code={`service: photosharing-lambdas

frameworkVersion: '3'

provider:
  name: aws
  runtime: java11
  region: us-east-1
  memorySize: 3008
  timeout: 60
  environment:
    PROCESSED_BUCKET: photosharing-processed
    DYNAMODB_TABLE: photos_metadata
  iam:
    role:
      statements:
        - Effect: Allow
          Action:
            - s3:GetObject
            - s3:PutObject
          Resource: arn:aws:s3:::photosharing-*/*
        - Effect: Allow
          Action:
            - dynamodb:PutItem
            - dynamodb:UpdateItem
          Resource: arn:aws:dynamodb:us-east-1:*:table/photos_metadata
        - Effect: Allow
          Action:
            - rekognition:DetectLabels
          Resource: '*'

package:
  artifact: target/photosharing-lambdas-1.0.jar

functions:
  ProcessPhotoThumbnail:
    handler: com.photosharing.ProcessPhotoThumbnail
    memorySize: 2048
    timeout: 30
    ephemeralStorage: 10240

  ProcessPhotoFilters:
    handler: com.photosharing.ProcessPhotoFilters
    memorySize: 1024
    timeout: 30
    ephemeralStorage: 5120

  ExtractMetadata:
    handler: com.photosharing.ExtractMetadata
    memorySize: 512
    timeout: 20

  ProcessML:
    handler: com.photosharing.ProcessML
    memorySize: 512
    timeout: 30

  UpdatePhotoStatus:
    handler: com.photosharing.UpdatePhotoStatus
    events:
      - stream:
          type: dynamodb
          arn:
            Fn::GetAtt: [PhotoMetadataTable, StreamArn]
          batchSize: 10
          startingPosition: TRIM_HORIZON
    memorySize: 256
    timeout: 20

resources:
  Resources:
    PhotoMetadataTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: photos_metadata
        AttributeDefinitions:
          - AttributeName: photo_id
            AttributeType: S
          - AttributeName: created_at
            AttributeType: N
        KeySchema:
          - AttributeName: photo_id
            KeyType: HASH
          - AttributeName: created_at
            KeyType: RANGE
        BillingMode: PAY_PER_REQUEST
        StreamSpecification:
          StreamViewType: NEW_AND_OLD_IMAGES

    RawPhotoBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: photosharing-raw-photos
        VersioningConfiguration:
          Status: Enabled
        PublicAccessBlockConfiguration:
          BlockPublicAcls: true
          BlockPublicPolicy: true
          IgnorePublicAcls: true
          RestrictPublicBuckets: true

    ProcessedPhotoBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: photosharing-processed
        PublicAccessBlockConfiguration:
          BlockPublicAcls: false
          BlockPublicPolicy: false

    S3EventRule:
      Type: AWS::Events::Rule
      Properties:
        EventBusName: default
        EventPattern:
          source:
            - aws.s3
          detail-type:
            - Object Created
          detail:
            bucket:
              name:
                - photosharing-raw-photos
        State: ENABLED
        Targets:
          - Arn:
              Fn::GetAtt: [ProcessPhotoThumbnailLambdaFunction, Arn]
            RoleArn:
              Fn::GetAtt: [S3ToLambdaRole, Arn]
          - Arn:
              Fn::GetAtt: [ExtractMetadataLambdaFunction, Arn]
            RoleArn:
              Fn::GetAtt: [S3ToLambdaRole, Arn]
          - Arn:
              Fn::GetAtt: [ProcessMLLambdaFunction, Arn]
            RoleArn:
              Fn::GetAtt: [S3ToLambdaRole, Arn]
`} />
      </section>

      <section className="lesson-section">
        <h2>📈 Resultados Reales</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#d4edda', border: '2px solid #28a745', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#155724' }}>Antes (EC2)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⏱️ <strong>Tiempo procesamiento:</strong> 48 horas</li>
              <li>💰 <strong>Costo mensual:</strong> $3,000 (5 EC2 t3.xlarge)</li>
              <li>😠 <strong>Usuarios irritados:</strong> Fotos tarde</li>
              <li>❌ <strong>Downtime:</strong> Cada falla = pérdida de datos</li>
              <li>📊 <strong>Capacidad máx:</strong> 10M fotos/día</li>
              <li>⚙️ <strong>Escalado:</strong> Manual (30+ minutos)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8', padding: '1.5rem', borderRadius: '8px' }}>
            <h4 style={{ marginTop: 0, color: '#0c5460' }}>Después (Lambda + S3)</h4>
            <ul style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              <li>⚡ <strong>Tiempo procesamiento:</strong> 5 minutos</li>
              <li>💰 <strong>Costo mensual:</strong> $300 (pay-per-use)</li>
              <li>😊 <strong>Usuarios felices:</strong> Fotos al instante</li>
              <li>✅ <strong>Durabilidad:</strong> 11-nines (AWS manejado)</li>
              <li>📊 <strong>Capacidad máx:</strong> 1B+ fotos/día (ilimitada)</li>
              <li>⚙️ <strong>Escalado:</strong> Automático (milisegundos)</li>
            </ul>
          </div>
        </div>

        <h3>Tabla de Impacto Negocio</h3>
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
              <td style={{ padding: '1rem' }}>Tiempo procesamiento</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>48 horas</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>5 minutos</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>576x más rápido</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Costo operacional</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$50,000/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$3,000/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>-94% ($47K ahorrado)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Usuarios activos mensuales</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>500K</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>2.1M</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+320% 🚀</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Fotos subidas/día</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>10M</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50M+</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>5x más (sin agregar costo)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Disponibilidad</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.5%</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>99.99%</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+0.49%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Ingresos (premium filters)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$50K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$400K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>+700% 🚀</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>ROI de migración</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>N/A</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$350K/mes</td>
              <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Se pagó en 2 semanas</td>
            </tr>
          </tbody>
        </table>

        <h3>Desglose de Costos Lambda</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#e7f3ff', borderBottom: '2px solid #0066cc' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Componente</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Requests/mes</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Costo</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Thumbnail Lambda</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50M</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$750</td>
              <td style={{ padding: '1rem' }}>2048 MB, 100ms c/una</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>Metadata Lambda</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50M</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$150</td>
              <td style={{ padding: '1rem' }}>512 MB, 20ms c/una</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>ML Lambda (Rekognition)</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>50M</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$1,500</td>
              <td style={{ padding: '1rem' }}>API calls a Rekognition</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '1rem' }}>S3 Almacenamiento</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>500TB</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}>$11,500</td>
              <td style={{ padding: '1rem' }}>Raw + Processed + Thumbnails</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>Total mensual</td>
              <td style={{ padding: '1rem', textAlign: 'center' }}></td>
              <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>$13,900</td>
              <td style={{ padding: '1rem' }}>(en lugar de $50K en EC2)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <h2>🎓 Lecciones Aprendidas</h2>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem' }}>
          <h4 style={{ marginTop: 0 }}>1. Lambda es perfecto para procesamiento asincrónico</h4>
          <p>
            PhotoSharing no necesitaba procesar fotos en tiempo real durante la request del usuario.
            Procesarlas en background fue 10x más eficiente. Lambda + S3 Triggers = patrón perfecto.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>2. Paralelismo = velocidad</h4>
          <p>
            Antes: 4 pasos secuenciales = 48 horas. Después: 4 Lambdas en paralelo = 5 minutos.
            No necesitaban esperar a redimensionamiento para extraer EXIF, etc.
            AWS ejecuta todo simultáneamente si tienes trigger eventos independientes.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>3. Pay-per-use &gt; Siempre encendido</h4>
          <p>
            EC2: $3K/mes 24/7, aunque está idle 70% del tiempo. Lambda: Solo pagas por 100ms que ejecuta.
            Cuando hay picos a las 9pm (usuarios suben fotos), Lambda escala automáticamente.
            Cuando están durmiendo a las 3am, no gastas nada.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>4. S3 Triggers &gt; Polling</h4>
          <p>
            Alternativa: Tener un Lambda que cada minuto haga polling a una SQS. Ineficiente.
            S3 Triggers via EventBridge: Cada foto que llega = automáticamente dispara Lambdas.
            Cero overhead, cero latencia.
          </p>
        </div>

        <div style={{ backgroundColor: '#fffbea', border: '2px solid #ff9800', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
          <h4 style={{ marginTop: 0 }}>5. Deja que AWS maneje lo complejo</h4>
          <p>
            PhotoSharing ya no necesita preocuparse por: backups, failover, balanceo de carga,
            escalado, patches de SO. AWS maneja todo. El equipo se enfocó en features en lugar
            de DevOps. Resultó en 320% más usuarios.
          </p>
        </div>
      </section>

      <section className="lesson-section" style={{ backgroundColor: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '2rem' }}>
        <h2>💡 Conclusión</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <strong>Lambda + S3 Triggers fue transformacional para PhotoSharing porque:</strong>
        </p>
        <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
          <li>✅ <strong>Velocidad:</strong> 48 horas → 5 minutos (576x más rápido)</li>
          <li>✅ <strong>Costos:</strong> $50K/mes → $13.9K/mes (72% ahorro)</li>
          <li>✅ <strong>Escalabilidad:</strong> De 10M a 50M+ fotos/día sin agregar servidores</li>
          <li>✅ <strong>Confiabilidad:</strong> 11-nines durabilidad + failover automático</li>
          <li>✅ <strong>Impacto negocio:</strong> Usuarios felices = +320% DAU, +700% revenue</li>
        </ul>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
          La clave: No intentar hacer todo sincrónico en el servidor. Procesamiento asincrónico
          en Lambdas paralelos. Esto les permitió crecer 5x sin incrementar costos.
          De una startup estresada a un servicio robusto en 2 semanas.
        </p>
      </section>

      <section className="lesson-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #ddd' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <a href="/aws/servicios/lambda" style={{
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
            ← Volver a Lambda
          </a>
          <a href="/aws/casos-reales/s3" style={{
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
            Siguiente: S3 →
          </a>
        </div>
      </section>
    </div>
  );
};
