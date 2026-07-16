import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSLambda() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'AWS Lambda — Computación Serverless',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Lambda</strong> es el servicio de computación sin servidor de AWS. Ejecutas código (función) sin gestionar ninguna máquina, servidor, ni sistema operativo. Subes la función, defines cuándo se ejecuta (evento), y AWS se encarga del resto: aprovisionamiento, escalado automático a miles de ejecuciones paralelas, disponibilidad y facturación por milisegundo.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Es el modelo de cómputo más "serverless" posible: <strong>cero gestión</strong>, <strong>escalado infinito</strong>, <strong>pago exacto</strong>.
          </p>

          <InfoBox type="tip" title="Modelo de negocio">
            No pagas por máquinas. Pagas por invocaciones y por milisegundos de ejecución × memoria usada. Si la función nunca se ejecuta, nunca pagas. Ideal para cargas impredecibles.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Características de Lambda',
      content: (
        <>
          <Table
            headers={['Característica', 'Valor']}
            rows={[
              ['Duración máxima por invocación', '15 minutos'],
              ['Memoria configurable', 'De 128 MB a 10,240 MB (10 GB)'],
              ['CPU', 'Escalada automáticamente con memoria (2 vCPU @ 10 GB)'],
              ['Escalado', 'Automático: miles de ejecuciones paralelas'],
              ['Modelo de precios', 'Por invocación + por milisegundo × memoria'],
              ['Capa gratuita', '1 millón de invocaciones/mes + 400,000 GB-segundos/mes'],
              ['Runtimes soportados', 'Java 11/17/21, Python 3.x, Node.js, Go, .NET, Ruby, Custom'],
              ['Storage temporal', '512 MB en /tmp (útil para descargas temporales)'],
              ['Variable de entorno', 'Soportadas (max 4 KB codificadas)'],
              ['Timeout default', '3 segundos (configurable hasta 15 min)']
            ]}
          />

          <div style={{
            backgroundColor: '#fff9e6',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#f57f17', marginTop: 0 }}>Cold Start en Java</h4>
            <p style={{ marginBottom: '0.5rem' }}>
              El "cold start" es la demora inicial cuando Lambda arranca la JVM. En Java es ~1-2 segundos, en Python ~200ms.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Soluciones:</strong> GraalVM Native Image (sin JVM), SnapStart de Lambda (almacena imagen JVM), o provisioned concurrency.
            </p>
          </div>
        </>
      )
    },

    {
      title: 'Lambda con Java — Ejemplo Básico',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Una función Lambda en Java implementa una interfaz simple. AWS proporciona eventos predefinidos (API Gateway, S3, DynamoDB, etc.) o eventos personalizados.
          </p>

          <CodeBlock
            code={`// Maven: aws-lambda-java-core, aws-lambda-java-events

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.events.APIGatewayProxyResponseEvent;

public class GuttmanHandler
  implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

  @Override
  public APIGatewayProxyResponseEvent handleRequest(
      APIGatewayProxyRequestEvent input,
      Context context) {

    context.getLogger().log("Evento recibido: " + input.getBody());

    String body = input.getBody();
    // Procesar petición...

    return new APIGatewayProxyResponseEvent()
      .withStatusCode(200)
      .withHeaders(Map.of("Content-Type", "application/json"))
      .withBody("{\"resultado\": \"ok\", \"mensaje\": \"Procesado\"}");
  }
}`}
            language="java"
            title="Handler Lambda básico"
          />

          <InfoBox type="info" title="Context parameter">
            El parámetro <code>context</code> proporciona información del contexto de ejecución:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Logger para enviar logs a CloudWatch</li>
              <li>Identidad (ARN role, account ID)</li>
              <li>Información de la invocación</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Triggers y Eventos',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Lambda se ejecuta cuando recibe un evento. Hay dos formas de invocar una función: <strong>sincrónica</strong> (espera respuesta) o <strong>asincrónica</strong> (envía y olvida).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            {[
              {
                title: 'API Gateway → Lambda',
                icon: '🌐',
                description: 'API REST que ejecuta Lambda',
                useCases: 'Webhooks, APIs HTTP, microservicios',
                example: 'HTTP POST a /api/procesar → Lambda'
              },
              {
                title: 'S3 → Lambda',
                icon: '📦',
                description: 'Se dispara cuando se sube archivo a S3',
                useCases: 'Procesar imágenes, validar uploads, transformar datos',
                example: 'Upload a guttman-docs/informes → Lambda redimensiona'
              },
              {
                title: 'DynamoDB Streams → Lambda',
                icon: '🔄',
                description: 'Se dispara ante cambios en DynamoDB',
                useCases: 'Replicar datos, auditoría, disparar workflows',
                example: 'Insert en tabla Usuarios → Lambda envía email bienvenida'
              },
              {
                title: 'SQS → Lambda',
                icon: '📨',
                description: 'Lambda procesa mensajes de una cola',
                useCases: 'Procesamiento asincrónico, desacoplamiento de servicios',
                example: 'Envío de emails, procesamiento batch'
              },
              {
                title: 'EventBridge → Lambda',
                icon: '📅',
                description: 'Eventos programados (cron) o eventos personalizados',
                useCases: 'Tareas programadas, orquestación de eventos',
                example: 'Cada día a las 2 AM → generar reporte diario'
              },
              {
                title: 'CloudWatch Logs → Lambda',
                icon: '📊',
                description: 'Se dispara ante eventos en logs',
                useCases: 'Alertas, parseo de logs, acciones automáticas',
                example: 'ERROR en logs de aplicación → notificación a Slack'
              }
            ].map((trigger, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{trigger.icon}</span>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>{trigger.title}</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                  {trigger.description}
                </p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.3rem' }}>
                    <strong>Casos de uso:</strong>
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                    {trigger.useCases}
                  </p>
                  <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#777' }}>
                    💡 {trigger.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },

    {
      title: 'Lambda vs EC2 — Cuándo usar cada uno',
      content: (
        <>
          <Table
            headers={['Criterio', 'EC2', 'Lambda']}
            rows={[
              ['Duración del proceso', 'Sin límite', 'Máx 15 minutos'],
              ['Estado (memoria)', 'Puede mantener estado', 'Stateless (sin estado)'],
              ['Coste con uso constante', 'Más económico (instance reserved)', 'Más caro (por ms)'],
              ['Coste con uso esporádico', 'Caro (máquina corriendo)', 'Económico (pagas cuando ejecuta)'],
              ['Control del SO', 'Total', 'Ninguno'],
              ['Gestión operativa', 'Alta (parches, updates)', 'Nula (AWS lo gestiona)'],
              ['Escalado', 'Manual o ASG', 'Automático (infinito)'],
              ['Ideal para', 'Aplicaciones de larga vida, APIs web', 'Eventos, webhooks, tareas cortas']
            ]}
          />

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Decisión rápida</h4>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>¿Proceso &gt;15 min?</strong> → Usa EC2</li>
              <li><strong>¿Carga predecible 24/7?</strong> → Usa EC2 + Reserved Instances</li>
              <li><strong>¿Evento ocasional (webhook, email)?</strong> → Usa Lambda</li>
              <li><strong>¿Tarea programada o cron?</strong> → Usa Lambda + EventBridge</li>
              <li><strong>¿No sabes el patrón de carga?</strong> → Usa Lambda al inicio, migra a EC2 si es rentable</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Layers en Lambda',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Los <strong>Layers</strong> permiten empaquetar código compartido (librerías, dependencias) separado de la función principal. Útil para reducir tamaño del despliegue y reutilizar código entre funciones.
          </p>

          <CodeBlock
            code={`# Crear un layer con librerías Java

# 1. Estructura correcta
java-layer/
  └─ java/lib/
      ├─ aws-lambda-java-core.jar
      ├─ aws-lambda-java-events.jar
      └─ otras-dependencias.jar

# 2. Crear ZIP
zip -r lambda-layer.zip java/

# 3. Crear layer con AWS CLI
aws lambda publish-layer-version \
  --layer-name guttman-java-libs \
  --zip-file fileb://lambda-layer.zip \
  --compatible-runtimes java21

# 4. Usar layer en función
aws lambda create-function \
  --function-name mi-funcion \
  --layers arn:aws:lambda:eu-west-1:123456789:layer:guttman-java-libs:1 \
  --zip-file fileb://mi-funcion.jar`}
            language="bash"
            title="Crear y usar Layers"
          />
        </>
      )
    },

    {
      title: 'Provisioned Concurrency y SnapStart',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Dos estrategias para eliminar o reducir el <strong>cold start</strong> (demora inicial):
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#f3e5f5',
              border: '2px solid #9c27b0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#6a1b9a', marginTop: 0 }}>Provisioned Concurrency</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                Mantiene instancias de Lambda "calientes" (con JVM arrancada) esperando invocaciones.
              </p>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                <li><strong>Ventaja:</strong> cold start = 0ms</li>
                <li><strong>Desventaja:</strong> costo por concurrencia aunque no se use</li>
                <li><strong>Ideal para:</strong> APIs críticas, sitios web</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#e8f5e9',
              border: '2px solid #4caf50',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#2e7d32', marginTop: 0 }}>SnapStart (Java 11+)</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                AWS almacena un "snapshot" de la JVM después del initialization. Restaura el snapshot en lugar de arrancar JVM completo.
              </p>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                <li><strong>Ventaja:</strong> cold start ~100ms (vs 1-2s)</li>
                <li><strong>Desventaja:</strong> costo mínimo por snapshot</li>
                <li><strong>Ideal para:</strong> la mayoría de funciones Java</li>
              </ul>
            </div>
          </div>

          <CodeBlock
            code={`# Habilitar SnapStart en función Lambda (AWS CLI)
aws lambda update-function-configuration \
  --function-name mi-funcion \
  --snapstart-response-type Response

# Verificar estado de SnapStart
aws lambda get-function-configuration \
  --function-name mi-funcion | grep -A5 SnapStart`}
            language="bash"
            title="Activar SnapStart"
          />
        </>
      )
    },

    {
      title: 'Costos y Optimización',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Lambda se factura por dos conceptos:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#fce4ec',
              border: '2px solid #e91e63',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#ad1457', marginTop: 0 }}>💰 Invocaciones</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                <strong>$0.20 por millón</strong> de invocaciones (aproximado)
              </p>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>
                Primera 1 millón al mes: <strong>GRATIS</strong>
              </p>
            </div>

            <div style={{
              backgroundColor: '#e0f2f1',
              border: '2px solid #009688',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#00695c', marginTop: 0 }}>⏱️ Duración</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                <strong>$0.0000166667 por GB-segundo</strong> (aproximado)
              </p>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>
                400,000 GB-segundos/mes: <strong>GRATIS</strong> (con 128 MB = 3.2M segundos)
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
            <h4 style={{ color: '#f57f17', marginTop: 0 }}>Optimización de costos</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>Reduce duración:</strong> menos ms = menos coste. Optimiza código, considera async</li>
              <li><strong>Memoria mínima justa:</strong> 128 MB es barato pero lento. 256-512 MB suele ser óptimo</li>
              <li><strong>Evita llamadas síncronas innecesarias:</strong> usa SQS/SNS para desacoplamiento</li>
              <li><strong>Layers grandes:</strong> reducen tamaño de despliegue, reducen cold start</li>
              <li><strong>Usa SnapStart:</strong> mejor cold start sin coste adicional significativo</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: '🎯 Ejemplo Práctico: Crear Lambda Java que Procesa S3',
      content: (
        <>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555' }}>
            En este ejemplo crearemos una función Lambda en Java que se dispara cuando subes una imagen a S3, la procesa y guarda el resultado.
          </p>

          <h3>Paso 1: Crear Proyecto Maven con AWS Lambda</h3>
          <CodeBlock language="xml" title="pom.xml">
{`<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.guttman</groupId>
  <artifactId>lambda-image-processor</artifactId>
  <version>1.0</version>

  <dependencies>
    <!-- AWS Lambda Core -->
    <dependency>
      <groupId>com.amazonaws</groupId>
      <artifactId>aws-lambda-java-core</artifactId>
      <version>1.2.3</version>
    </dependency>

    <!-- AWS Lambda Events (S3 trigger) -->
    <dependency>
      <groupId>com.amazonaws</groupId>
      <artifactId>aws-lambda-java-events</artifactId>
      <version>3.11.0</version>
    </dependency>

    <!-- AWS SDK v2 para S3 -->
    <dependency>
      <groupId>software.amazon.awssdk</groupId>
      <artifactId>s3</artifactId>
      <version>2.25.0</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.5.0</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals><goal>shade</goal></goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>`}
          </CodeBlock>

          <h3>Paso 2: Crear Función Lambda</h3>
          <CodeBlock language="java" title="ImageProcessorFunction.java">
{`package com.guttman;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.lambda.runtime.events.models.s3.S3EventNotification.S3EventNotificationRecord;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class ImageProcessorFunction implements RequestHandler<S3Event, String> {

  private final S3Client s3Client = S3Client.builder().build();

  @Override
  public String handleRequest(S3Event s3event, Context context) {
    context.getLogger().log("Iniciando procesamiento de imagen...");

    try {
      for (S3EventNotificationRecord record : s3event.getRecords()) {
        String bucket = record.getS3().getBucket().getName();
        String key = record.getS3().getObject().getKey();

        context.getLogger().log("Procesando: " + bucket + "/" + key);

        // Leer imagen de S3
        byte[] imageData = downloadFromS3(bucket, key);

        // Procesar imagen (simulado)
        String metadata = processImage(imageData, context);

        // Guardar resultado en otro bucket
        uploadToS3("guttman-processed", key + ".metadata.json", metadata);

        context.getLogger().log("✓ Imagen procesada exitosamente");
      }

      return "Procesamiento completado";

    } catch (Exception e) {
      context.getLogger().log("Error: " + e.getMessage());
      throw new RuntimeException("Error procesando imagen", e);
    }
  }

  private byte[] downloadFromS3(String bucket, String key) {
    GetObjectRequest request = GetObjectRequest.builder()
        .bucket(bucket)
        .key(key)
        .build();

    return s3Client.getObject(request).readAllBytes();
  }

  private String processImage(byte[] imageData, Context context) {
    // Simular procesamiento
    int size = imageData.length;
    context.getLogger().log("Tamaño de imagen: " + size + " bytes");

    // Retornar metadata como JSON
    return "{\\"size\\":" + size + ",\\"processed_at\\":\\"" + System.currentTimeMillis() + "\\"}";
  }

  private void uploadToS3(String bucket, String key, String data) {
    PutObjectRequest request = PutObjectRequest.builder()
        .bucket(bucket)
        .key(key)
        .build();

    s3Client.putObject(request, software.amazon.awssdk.core.sync.RequestBody.fromString(data));
  }
}`}
          </CodeBlock>

          <h3>Paso 3: Empaquetar y Desplegar</h3>
          <CodeBlock language="bash" title="Build and Deploy">
{`# Compilar JAR
mvn clean package

# Crear función Lambda en AWS
aws lambda create-function \\
  --function-name image-processor \\
  --runtime java21 \\
  --role arn:aws:iam::123456789:role/lambda-s3-role \\
  --handler com.guttman.ImageProcessorFunction \\
  --zip-file fileb://target/lambda-image-processor-1.0-shaded.jar \\
  --timeout 60 \\
  --memory-size 512

# O actualizar función existente
aws lambda update-function-code \\
  --function-name image-processor \\
  --zip-file fileb://target/lambda-image-processor-1.0-shaded.jar`}
          </CodeBlock>

          <h3>Paso 4: Conectar S3 Event</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>AWS Console → S3 → Bucket "guttman-uploads"</li>
            <li>Ir a <strong>Propiedades → Notificaciones de eventos</strong></li>
            <li>Click <strong>Crear notificación</strong></li>
            <li>Nombre: <strong>ImageProcessingTrigger</strong></li>
            <li>Eventos: <strong>s3:ObjectCreated:*</strong></li>
            <li>Destino: <strong>Función Lambda → image-processor</strong></li>
            <li>Click <strong>Guardar</strong></li>
          </ol>

          <h3>Paso 5: Probar</h3>
          <CodeBlock language="bash" title="Upload image to S3">
{`# Subir imagen a S3
aws s3 cp photo.jpg s3://guttman-uploads/photo.jpg

# Ver logs en CloudWatch
aws logs tail /aws/lambda/image-processor --follow

# Verificar resultado
aws s3 cp s3://guttman-processed/photo.jpg.metadata.json - | cat`}
          </CodeBlock>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ marginTop: 0, fontSize: '0.95rem', color: '#2e7d32' }}>
              <strong>✅ Resultado esperado:</strong> Cada imagen que subes a S3 dispara automáticamente la función Lambda, que procesa la imagen y guarda metadata en otro bucket. Todo sin servidores.
            </p>
          </div>

          <h3>IAM Role Necesario</h3>
          <CodeBlock language="json" title="lambda-s3-role policy">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::guttman-uploads/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::guttman-processed/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    }
  ]
}`}
          </CodeBlock>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="Lambda — Computación Serverless"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
