import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAWSBeanstalk() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Elastic Beanstalk - Deploy Simplificado"
        description="Despliega aplicaciones en AWS sin gestionar la infraestructura manualmente"
        breadcrumbs={breadcrumbs}
        seoTitle="Elastic Beanstalk en AWS - Deploy Simplificado de Aplicaciones"
        seoDescription="Cómo desplegar aplicaciones en AWS Elastic Beanstalk: entornos, versiones y gestión automática de infraestructura."
        seoKeywords="aws, elastic beanstalk, deployment, paas"
        url="https://fullstackdevlovers.com/cloud/aws/deployment/beanstalk"
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Hasta ahora, si has seguido el módulo de AWS en orden, has aprendido a crear tú mismo cada pieza de la infraestructura: una VPC, instancias EC2, un balanceador, una base de datos RDS. Es un conocimiento imprescindible. Pero en el día a día de un equipo pequeño, montar todo eso a mano cada vez que sale una aplicación nueva es lento y propenso a errores. <strong>Elastic Beanstalk</strong> es la respuesta de AWS a ese problema: le entregas tu artefacto (un <code>.jar</code>, un <code>.war</code>, un contenedor Docker) y él aprovisiona, conecta y mantiene la infraestructura necesaria para ejecutarlo.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          En esta lección vas a entender qué hace Beanstalk por debajo (no es magia, son los mismos servicios que ya conoces), cómo desplegar una aplicación Spring Boot con la CLI, y sobre todo, cuándo tiene sentido usarlo y cuándo te conviene más control manual.
        </p>

        <LessonSection title="¿Qué es Elastic Beanstalk?">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Beanstalk es un servicio <strong>PaaS (Platform as a Service)</strong> construido encima de servicios que ya conoces: EC2, Auto Scaling, Elastic Load Balancing, S3 y CloudWatch. La diferencia con crear esos recursos tú mismo es que Beanstalk los orquesta automáticamente a partir de una plantilla de "entorno" (environment) que tú configuras una vez.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            No es un servicio nuevo con su propia infraestructura oculta: si entras en la consola de EC2 mientras tienes un entorno de Beanstalk activo, verás las instancias, el Auto Scaling Group y el Load Balancer que Beanstalk ha creado por ti. Sigues pudiendo entrar por SSH, revisar logs o ajustar la configuración manualmente si lo necesitas.
          </p>

          <Table
            headers={['Aspecto', 'Infraestructura manual (EC2 + ELB + ASG)', 'Elastic Beanstalk']}
            rows={[
              ['Quién crea los recursos', 'Tú, uno a uno (o con Terraform/CloudFormation)', 'Beanstalk, a partir de una configuración'],
              ['Curva de entrada', 'Alta: necesitas conocer VPC, ELB, ASG, IAM', 'Baja: subes el artefacto y listo'],
              ['Control fino', 'Total', 'Alto, pero con convenciones que debes respetar'],
              ['Actualizaciones de plataforma (SO, JDK)', 'Las gestionas tú', 'Beanstalk ofrece parches gestionados'],
              ['Coste adicional', 'Ninguno más allá de los recursos', 'Ninguno: solo pagas los recursos subyacentes']
            ]}
          />

          <InfoBox type="tip" title="Beanstalk no reemplaza lo que ya sabes">
            Beanstalk es una capa de automatización, no un servicio distinto. Todo lo que aprendiste sobre VPC, Security Groups y EC2 sigue aplicando: Beanstalk simplemente te ahorra el trabajo repetitivo de conectarlo todo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Aplicaciones, versiones y entornos">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Beanstalk organiza tu trabajo en tres conceptos que conviene tener claros desde el principio:
          </p>

          <Table
            headers={['Concepto', 'Qué representa', 'Ejemplo']}
            rows={[
              ['Application', 'El proyecto en sí, un contenedor lógico', '"guttman-api"'],
              ['Application Version', 'Un artefacto concreto subido a S3', 'guttman-api-v1.4.2.jar'],
              ['Environment', 'Una instancia en ejecución de una versión, con su propia infraestructura', '"guttman-api-prod", "guttman-api-staging"']
            ]}
          />

          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Una misma aplicación puede tener varios entornos (producción, staging, pruebas de carga) ejecutando versiones distintas del mismo código, cada uno con su propia URL, su propia configuración de instancias y sus propias variables de entorno.
          </p>
        </LessonSection>

        <LessonSection title="Desplegar una aplicación Spring Boot con la CLI">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            La herramienta oficial es <code>eb</code> (EB CLI). El flujo típico para un proyecto Spring Boot empaquetado como JAR es el siguiente:
          </p>

          <CodeBlock
            language="bash"
            title="Flujo completo con EB CLI"
            code={`# 1. Instalar la CLI (una sola vez)
pip install awsebcli --upgrade

# 2. Inicializar el proyecto en la carpeta raíz del repositorio
eb init guttman-api --platform "Corretto 21" --region eu-west-1

# 3. Crear el entorno (aprovisiona ELB, Auto Scaling Group, instancias EC2)
eb create guttman-api-prod \\
  --instance-type t3.small \\
  --envvars SPRING_PROFILES_ACTIVE=prod

# 4. Empaquetar y desplegar una nueva versión
mvn clean package -DskipTests
eb deploy guttman-api-prod

# 5. Ver el estado del entorno
eb status

# 6. Ver logs en caso de error
eb logs

# 7. Abrir la URL pública en el navegador
eb open`}
          />

          <InfoBox type="info" title="Cómo llega el JAR a producción">
            Cuando ejecutas <code>eb deploy</code>, la CLI comprime tu proyecto, lo sube a un bucket S3 gestionado por Beanstalk, crea una nueva "Application Version" y actualiza el entorno para desplegarla en las instancias EC2, sustituyendo la versión anterior sin que tengas que tocar nada manualmente.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Configuración avanzada con .ebextensions">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Cuando la configuración por defecto no es suficiente (por ejemplo, quieres definir variables de entorno adicionales, instalar paquetes del sistema operativo o ajustar el health check), Beanstalk lee archivos de configuración YAML en una carpeta <code>.ebextensions/</code> dentro de tu proyecto.
          </p>

          <CodeBlock
            language="yaml"
            title=".ebextensions/01-environment.config"
            code={`option_settings:
  aws:elasticbeanstalk:application:environment:
    SPRING_PROFILES_ACTIVE: prod
    JAVA_OPTS: "-Xmx512m -Xms256m"

  aws:elasticbeanstalk:environment:process:default:
    HealthCheckPath: /actuator/health
    Port: 8080

  aws:autoscaling:asg:
    MinSize: 2
    MaxSize: 6

  aws:autoscaling:trigger:
    MeasureName: CPUUtilization
    Unit: Percent
    UpperThreshold: 70
    LowerThreshold: 25`}
          />
        </LessonSection>

        <LessonSection title="¿Cuándo usar Beanstalk y cuándo no?">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Beanstalk brilla en equipos pequeños o medianos que quieren desplegar rápido sin construir su propia plataforma interna. No es la mejor opción si ya trabajas con contenedores en un pipeline maduro, o si necesitas arquitecturas muy específicas (microservicios con mallas de servicio, por ejemplo).
          </p>

          <Table
            headers={['Situación', 'Recomendación']}
            rows={[
              ['Equipo pequeño, aplicación monolítica Spring Boot', 'Elastic Beanstalk'],
              ['Varios microservicios en contenedores, necesitas orquestación fina', 'ECS o EKS'],
              ['Funciones puntuales, eventos, cargas esporádicas', 'Lambda'],
              ['Necesitas control total de la infraestructura desde el minuto uno', 'EC2 + Terraform/CloudFormation']
            ]}
          />
        </LessonSection>

        <LessonSection title="Resumen">
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li>Elastic Beanstalk es una capa de automatización PaaS sobre EC2, ELB, Auto Scaling y CloudWatch: no oculta la infraestructura, la gestiona por ti.</li>
            <li>Se organiza en <strong>Applications</strong>, <strong>Application Versions</strong> y <strong>Environments</strong>.</li>
            <li>El flujo típico con la CLI es <code>eb init</code> → <code>eb create</code> → <code>eb deploy</code>.</li>
            <li>La carpeta <code>.ebextensions/</code> permite personalizar variables de entorno, health checks y reglas de autoescalado.</li>
            <li>Es ideal para equipos pequeños que priorizan velocidad de despliegue; para arquitecturas de microservicios con contenedores, ECS suele encajar mejor.</li>
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
