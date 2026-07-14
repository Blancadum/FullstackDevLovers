import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonCloudDeployment() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '☁️',
      title: 'Cloud Computing',
      definition: 'Proveedores de infraestructura en internet donde despliegas aplicaciones',
      example: 'AWS, Google Cloud, Microsoft Azure alquilan servidores bajo demanda'
    },
    {
      icon: '🚀',
      title: 'Despliegue en Cloud',
      definition: 'Proceso de llevar aplicación desde desarrollo a servidores remotos',
      example: 'Publicar app Spring Boot en Heroku, AWS, Google Cloud'
    },
    {
      icon: '⚙️',
      title: 'IaaS / PaaS / SaaS',
      definition: 'Niveles de abstracción cloud (Infrastructure / Platform / Software)',
      example: 'IaaS: control total | PaaS: plataforma lista | SaaS: software listo'
    },
    {
      icon: '🔄',
      title: 'Auto-scaling',
      definition: 'Aumentar/disminuir instancias automáticamente según demanda',
      example: 'Más tráfico → más servidores; menos tráfico → menos servidores'
    },
    {
      icon: '🌍',
      title: 'CDN y Distribución',
      definition: 'Red mundial de servidores que sirven contenido desde ubicación cercana',
      example: 'Usuario en Barcelona obtiene contenido desde servidor en Europa'
    },
    {
      icon: '📊',
      title: 'Monitoreo',
      definition: 'Observabilidad: logs, métricas, alertas en aplicación desplegada',
      example: 'CloudWatch (AWS), Stackdriver (GCP), Application Insights (Azure)'
    }
  ];

  const exercises = [
    {
      title: 'Desplegar app en Heroku (la forma más fácil)',
      description: 'Sube una aplicación Spring Boot a Heroku en minutos',
      solution: `# 1. Instalar Heroku CLI
brew install heroku

# 2. Crear Procfile en raíz del proyecto
echo 'web: java -jar target/app.jar' > Procfile

# 3. Ejecutar
heroku login
heroku create mi-app
git push heroku main

# 4. Ver logs
heroku logs --tail`
    },
    {
      title: 'Desplegar app en AWS ECS (Elastic Container Service)',
      description: 'Ejecuta contenedores Docker en AWS con auto-scaling',
      solution: `# 1. Crear imagen Docker y subirla a ECR
aws ecr get-login-password --region us-east-1 | \\
  docker login --username AWS --password-stdin \\
  123456789.dkr.ecr.us-east-1.amazonaws.com

docker tag mi-app:latest \\
  123456789.dkr.ecr.us-east-1.amazonaws.com/mi-app:latest

docker push \\
  123456789.dkr.ecr.us-east-1.amazonaws.com/mi-app:latest

# 2. Crear cluster ECS y servicio
# (Normalmente via AWS Console o Infrastructure as Code)`
    }
  ];

  const sections = [
    {
      title: 'Opciones de Cloud para Java',
      content: (
        <>
          <p>Diferentes plataformas cloud ofrecen soluciones para desplegar aplicaciones Java.</p>
          <CodeBlock
            language="bash"
            code={`OPCIONES PRINCIPALES:

Heroku (PaaS - La más fácil):
✓ Súper simple, git push heroku main
✓ Ideal para MVP y startups
✓ Soporta Java, Node, Python, etc
✗ Más caro que infraestructura pura
$ ~50 USD/mes para aplicación pequeña

AWS (IaaS/PaaS - La más popular):
✓ EC2: máquinas virtuales
✓ ECS: contenedores
✓ RDS: bases de datos
✓ S3: almacenamiento
✓ Más control y opciones
✗ Curva de aprendizaje
$ ~10 USD/mes con free tier

Google Cloud (IaaS/PaaS):
✓ Cloud Run: serverless
✓ App Engine: PaaS
✓ GKE: Kubernetes
✓ BigQuery: analytics
✗ Interfaz menos intuitiva
$ Similar a AWS

Azure (IaaS/PaaS - Microsoft):
✓ Integración con .NET
✓ App Service: fácil despliegue
✓ Fuerte en enterprise
✗ Principalmente orientado a Microsoft
$ Similar a AWS

DigitalOcean (IaaS simplificado):
✓ Más simple que AWS
✓ Buena documentación
✓ Precio predecible
✗ Menos servicios que AWS
$ ~6-12 USD/mes`}
          />
        </>
      )
    },
    {
      title: 'Despliegue en Heroku (La Forma Más Fácil)',
      content: (
        <>
          <p>Heroku es perfecto para comenzar: solo haz git push y tu app está en internet.</p>
          <CodeBlock
            language="bash"
            code={`# PASO 1: Preparar proyecto
# Asegurarse de tener Procfile y pom.xml

# PASO 2: Instalar Heroku CLI
brew install heroku

# PASO 3: Login
heroku login
# Se abre navegador, autentica

# PASO 4: Crear aplicación
heroku create mi-app-unica
# o
heroku apps:create

# PASO 5: Desplegar
git push heroku main

# PASO 6: Ver estado
heroku ps                    # Procesos
heroku logs --tail           # Logs en vivo
heroku apps:info             # Información

# PASO 7: Escalar
heroku ps:scale web=2        # 2 dynos

# PASO 8: Agregar base de datos
heroku addons:create heroku-postgresql:standard-0

# PASO 9: Variables de entorno
heroku config:set DATABASE_URL=jdbc:mysql://...
heroku config               # Ver todas

# PASO 10: Destruir (cuando termines)
heroku apps:destroy mi-app-unica`}
          />
          <InfoBox type="success">
            Heroku es gratuito para experimentos (con limitaciones), perfecto para portfolio y MVPs.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Despliegue en AWS (Control Total)',
      content: (
        <>
          <p>AWS ofrece múltiples formas de desplegar, desde simples hasta complejas.</p>
          <CodeBlock
            language="bash"
            code={`# OPCIÓN 1: Elastic Beanstalk (PaaS en AWS)
# Similar a Heroku pero en AWS

eb create mi-app             # Crear entorno
eb deploy                    # Desplegar
eb logs                      # Ver logs
eb health                    # Estado
eb scale 2                   # Escalar a 2 instancias

# OPCIÓN 2: ECS (Elastic Container Service)
# Para desplegar contenedores Docker

# 1. Crear ECR repository
aws ecr create-repository --repository-name mi-app

# 2. Subir imagen Docker
aws ecr get-login-password | docker login ...
docker tag mi-app:latest <ACCOUNT>.dkr.ecr.us-east-1.amazonaws.com/mi-app
docker push <ACCOUNT>.dkr.ecr.us-east-1.amazonaws.com/mi-app

# 3. Crear cluster ECS
aws ecs create-cluster --cluster-name mi-cluster

# 4. Definir task
aws ecs register-task-definition --cli-input-json file://task.json

# 5. Crear servicio
aws ecs create-service --cluster mi-cluster --service-name mi-service

# OPCIÓN 3: EC2 (Máquinas virtuales)
# Control total, pero más trabajo

# Conectar a instancia
ssh -i key.pem ec2-user@ec2-instance.aws.com

# Instalar Java y desplegar JAR
# (Requiere conocimiento de sysadmin)`}
          />
        </>
      )
    },
    {
      title: 'Google Cloud Run (Serverless Moderno)',
      content: (
        <>
          <p>Cloud Run es serverless: pagas solo por tiempo de ejecución.</p>
          <CodeBlock
            language="bash"
            code={`# Google Cloud Run es ideal para microservicios

# PASO 1: Crear imagen Docker
docker build -t gcr.io/mi-proyecto/mi-app .

# PASO 2: Subir a Container Registry
docker push gcr.io/mi-proyecto/mi-app

# PASO 3: Desplegar en Cloud Run
gcloud run deploy mi-app \\
  --image gcr.io/mi-proyecto/mi-app \\
  --platform managed \\
  --region us-central1 \\
  --memory 512Mi \\
  --allow-unauthenticated

# PASO 4: Tu app está en internet
gcloud run services describe mi-app

# Escalado automático:
# - 0 replicas cuando sin tráfico (no pagas)
# - Hasta 100 replicas según demanda
# - Pagas \$0.00002400 por segundo de ejecución

# Variables de entorno
gcloud run deploy mi-app \\
  --set-env-vars DATABASE_URL=jdbc:mysql://... \\
  ...

# Ver logs
gcloud run logs read mi-app --limit 50`}
          />
          <InfoBox type="info">
            Cloud Run es la opción más económica para aplicaciones intermitentes: pagas solo cuando se ejecutan.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Monitoreo y Observabilidad',
      content: (
        <>
          <p>Una vez desplegada, necesitas observar cómo se comporta tu app.</p>
          <CodeBlock
            language="bash"
            code={`HERRAMIENTAS DE MONITOREO:

AWS CloudWatch:
✓ Logs automáticos
✓ Métricas (CPU, memoria, requeslats)
✓ Alertas
✓ Dashboards

Google Cloud:
✓ Cloud Logging
✓ Cloud Monitoring
✓ Error Reporting
✓ Trace (rastreo de requests)

Soluciones de terceros:
✓ Datadog: métrica profunda + APM
✓ New Relic: monitoreo completo
✓ Elastic Stack: open-source
✓ Prometheus + Grafana: métricas + visualización

SPRING BOOT + ACTUATOR para métricas:
# En pom.xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

# application.properties
management.endpoints.web.exposure.include=*
management.endpoint.health.show-details=always

# Endpoints disponibles
GET /actuator
GET /actuator/health
GET /actuator/metrics
GET /actuator/env`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Cloud permite desplegar sin comprar servidores',
    'PaaS (Heroku) vs IaaS (AWS, GCP) vs Serverless (Cloud Run)',
    'Heroku: más fácil para comenzar, más caro a largo plazo',
    'AWS: más popular, más opciones, curva aprendizaje mayor',
    'Google Cloud Run: serverless, pagas por ejecución',
    'Auto-scaling aumenta/disminuye instancias automáticamente',
    'CDN distribuye contenido globalmente',
    'Monitoreo observa logs, métricas y alertas',
    'Spring Boot Actuator expone métricas de salud',
    'CI/CD se integra con cloud para despliegue automático'
  ];

  const summary = `Desplegar en cloud es fundamental en desarrollo moderno:

• PaaS (Heroku) es la forma más fácil para comenzar
• IaaS (AWS) da control total pero requiere más trabajo
• Serverless (Cloud Run) pagas solo por uso
• Auto-scaling maneja incrementos de tráfico
• Monitoreo detecta problemas en producción
• Variables de entorno protegen configuración
• CI/CD integrado despliega automáticamente
• Free tiers permiten experimentar sin costo
• Spring Boot Actuator expone estado de salud
• Múltiples opciones: elige según necesidades`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}