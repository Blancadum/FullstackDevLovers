import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAWSECS() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="ECS - Contenedores en AWS"
        description="Orquestación de contenedores Docker en AWS con Elastic Container Service"
        breadcrumbs={breadcrumbs}
        seoTitle="ECS en AWS - Orquestación de Contenedores Docker"
        seoDescription="Cómo desplegar y orquestar contenedores Docker en AWS con ECS: clusters, task definitions y servicios."
        seoKeywords="aws, ecs, docker, contenedores, orquestacion"
        url="https://fullstackdevlovers.com/cloud/aws/deployment/ecs"
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si ya empaquetas tu aplicación en un contenedor Docker (algo cada vez más habitual en equipos backend), necesitas un sitio donde ejecutar ese contenedor de forma fiable, con reinicios automáticos si falla, escalado según demanda y sin tener que gestionar tú mismo cada servidor. <strong>Amazon ECS (Elastic Container Service)</strong> es el orquestador de contenedores nativo de AWS: le dices "quiero N copias de esta imagen corriendo, con estos recursos" y ECS se encarga de mantenerlas vivas.
          </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          En esta lección vas a entender las piezas que forman ECS, la diferencia entre ejecutarlo sobre EC2 o sobre Fargate (sin gestionar servidores), y cómo definir y desplegar un servicio real desde la CLI.
        </p>

        <LessonSection title="Las piezas de ECS">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            ECS se construye sobre cuatro conceptos que aparecen en ese orden cuando defines un servicio:
          </p>

          <Table
            headers={['Concepto', 'Qué es', 'Analogía']}
            rows={[
              ['Cluster', 'Agrupación lógica de recursos de computación donde corren tus contenedores', 'El "datacenter" donde vive todo'],
              ['Task Definition', 'Plantilla JSON que describe una o varias imágenes, CPU, memoria, puertos y variables de entorno', 'El "plano" de cómo debe ejecutarse tu app'],
              ['Task', 'Una instancia en ejecución de una Task Definition', 'Un contenedor concreto corriendo ahora mismo'],
              ['Service', 'Mantiene un número deseado de Tasks vivas, las reemplaza si fallan y las conecta a un Load Balancer', 'El "supervisor" que garantiza disponibilidad']
            ]}
          />
        </LessonSection>

        <LessonSection title="Fargate vs EC2: dos formas de ejecutar contenedores">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            ECS necesita máquinas donde colocar los contenedores. Tienes dos "launch types" para decidir quién gestiona esas máquinas:
          </p>

          <Table
            headers={['Aspecto', 'Launch type EC2', 'Launch type Fargate']}
            rows={[
              ['Quién gestiona los servidores', 'Tú (parcheas, escalas el Auto Scaling Group)', 'AWS (serverless, no ves instancias)'],
              ['Control de la instancia', 'Total: eliges tipo de instancia, AMI, SSH', 'Ninguno: solo defines CPU y memoria del contenedor'],
              ['Facturación', 'Por instancia EC2, esté o no completamente utilizada', 'Por CPU/memoria realmente reservada de cada Task'],
              ['Arranque en frío', 'Rápido si ya hay instancias con hueco', 'Algo más lento (aprovisiona la infraestructura al vuelo)'],
              ['Caso de uso típico', 'Cargas constantes y predecibles, optimizar coste al máximo', 'Cargas variables, equipos que priorizan simplicidad operativa']
            ]}
          />

          <InfoBox type="tip" title="Por dónde empezar">
            Si vienes de un bootcamp o de un CFGS y es tu primer contacto con ECS, empieza con <strong>Fargate</strong>. Te permite centrarte en la aplicación y en la Task Definition sin tener que gestionar Auto Scaling Groups de EC2. Puedes migrar a EC2 más adelante si el coste lo justifica.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Definir una Task Definition">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La Task Definition es un documento JSON. Aquí tienes una para una aplicación Spring Boot empaquetada como imagen Docker y publicada en Amazon ECR:
          </p>

          <CodeBlock
            language="json"
            title="task-definition.json"
            code={`{
  "family": "guttman-api",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "guttman-api",
      "image": "123456789012.dkr.ecr.eu-west-1.amazonaws.com/guttman-api:latest",
      "portMappings": [
        { "containerPort": 8080, "protocol": "tcp" }
      ],
      "environment": [
        { "name": "SPRING_PROFILES_ACTIVE", "value": "prod" }
      ],
      "healthCheck": {
        "command": ["CMD-SHELL", "curl -f http://localhost:8080/actuator/health || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3
      },
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/guttman-api",
          "awslogs-region": "eu-west-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}`}
          />
        </LessonSection>

        <LessonSection title="Crear el cluster y desplegar el servicio">
          <CodeBlock
            language="bash"
            title="Desplegar en ECS con AWS CLI"
            code={`# 1. Crear el cluster (agrupación lógica, sin coste por sí mismo)
aws ecs create-cluster --cluster-name guttman-cluster

# 2. Registrar la Task Definition
aws ecs register-task-definition \\
  --cli-input-json file://task-definition.json

# 3. Crear el servicio: mantiene 2 tareas siempre corriendo, tras un ALB
aws ecs create-service \\
  --cluster guttman-cluster \\
  --service-name guttman-api-service \\
  --task-definition guttman-api \\
  --desired-count 2 \\
  --launch-type FARGATE \\
  --network-configuration "awsvpcConfiguration={subnets=[subnet-11111,subnet-22222],securityGroups=[sg-33333],assignPublicIp=DISABLED}" \\
  --load-balancers "targetGroupArn=arn:aws:elasticloadbalancing:...,containerName=guttman-api,containerPort=8080"

# 4. Desplegar una nueva versión (nueva imagen ya subida a ECR)
aws ecs update-service \\
  --cluster guttman-cluster \\
  --service guttman-api-service \\
  --force-new-deployment

# 5. Ver el estado de las tareas
aws ecs list-tasks --cluster guttman-cluster`}
          />

          <InfoBox type="info" title="Cómo se entera ECS de que hay una imagen nueva">
            ECS no vigila el registro de imágenes por sí solo. El flujo habitual en un pipeline de CI/CD es: build de la imagen → push a ECR con un tag nuevo → actualizar la Task Definition apuntando a esa imagen → <code>update-service --force-new-deployment</code>. ECS entonces sustituye las tareas antiguas por nuevas de forma gradual, sin downtime si el servicio está detrás de un Load Balancer.
          </InfoBox>
        </LessonSection>

        <LessonSection title="ECS frente a otras opciones de contenedores">
          <Table
            headers={['Servicio', 'Cuándo elegirlo']}
            rows={[
              ['ECS (este servicio)', 'Contenedores en AWS sin la complejidad de Kubernetes; buena integración nativa con IAM, ALB y CloudWatch'],
              ['EKS (Kubernetes gestionado)', 'Ya usas Kubernetes o necesitas su ecosistema de herramientas y portabilidad multi-nube'],
              ['Elastic Beanstalk', 'No usas contenedores, o prefieres que AWS decida la infraestructura por ti'],
              ['Lambda', 'Cargas de trabajo cortas y esporádicas, no procesos de larga duración']
            ]}
          />
        </LessonSection>

        <LessonSection title="Resumen">
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li>ECS orquesta contenedores Docker a través de <strong>Clusters</strong>, <strong>Task Definitions</strong>, <strong>Tasks</strong> y <strong>Services</strong>.</li>
            <li><strong>Fargate</strong> elimina la gestión de servidores; <strong>EC2</strong> como launch type te da más control y puede abaratar costes en cargas constantes.</li>
            <li>La Task Definition es un JSON que describe imagen, CPU, memoria, puertos y variables de entorno.</li>
            <li>Un Service mantiene el número deseado de Tasks vivas y las reemplaza automáticamente si fallan.</li>
            <li>El pipeline típico es: build de imagen → push a ECR → actualizar Task Definition → <code>update-service --force-new-deployment</code>.</li>
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
