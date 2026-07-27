import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAWSSeguridad() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Security Groups y Firewalls"
        description="Cómo proteger tus recursos en AWS con Security Groups y reglas de red"
        breadcrumbs={breadcrumbs}
        seoTitle="Security Groups en AWS - Firewalls a Nivel de Instancia"
        seoDescription="Cómo configurar Security Groups en AWS para controlar el tráfico de entrada y salida de tus recursos."
        seoKeywords="aws, security groups, firewall, seguridad, vpc"
        url="https://fullstackdevlovers.com/cloud/aws/operaciones/seguridad"
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si ya viste la lección de VPC, sabes que por defecto no hay nada expuesto a internet en tu red privada: hay que abrir la puerta explícitamente. Los <strong>Security Groups</strong> son la herramienta con la que decides, recurso por recurso, quién puede hablar con quién. Son el control de seguridad de red más usado en AWS, y también el que más incidentes provoca cuando se configura mal (con un <code>0.0.0.0/0</code> de más, por ejemplo).
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          En esta lección vas a repasar cómo funcionan los Security Groups, en qué se diferencian de las Network ACLs, y cómo aplicar el principio de menor privilegio en una arquitectura típica de tres capas.
        </p>

        <LessonSection title="Security Groups: el firewall de cada recurso">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Un Security Group es un firewall virtual que se asocia a nivel de <strong>instancia</strong> (una EC2, una RDS, un ALB), no a nivel de subred. Define reglas de entrada (inbound) y de salida (outbound): qué tráfico se permite, en qué puerto, desde o hacia qué origen.
          </p>

          <InfoBox type="important" title="Todo lo que no está permitido, está denegado">
            Los Security Groups solo tienen reglas de <strong>permitir</strong>. No existen reglas de "denegar" explícitas: si una regla no lo autoriza, el tráfico se bloquea por defecto. Esto simplifica mucho su lectura frente a otros firewalls.
          </InfoBox>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
            Son <strong>stateful</strong>: si permites que entre tráfico en el puerto 443, la respuesta de salida se permite automáticamente, sin que tengas que crear una regla de salida específica para ella.
          </p>
        </LessonSection>

        <LessonSection title="Security Groups vs Network ACLs">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Es habitual confundir Security Groups con Network ACLs (NACLs). Ambos filtran tráfico, pero operan en capas distintas y con comportamientos distintos:
          </p>

          <Table
            headers={['Aspecto', 'Security Group', 'Network ACL']}
            rows={[
              ['Nivel', 'Instancia (EC2, RDS, ALB...)', 'Subred'],
              ['Estado', 'Stateful (la respuesta se permite automáticamente)', 'Stateless (hay que permitir ida y vuelta por separado)'],
              ['Reglas', 'Solo "permitir"', 'Permitir y denegar explícitamente'],
              ['Evaluación', 'Se evalúan todas las reglas', 'Se evalúan en orden numérico, la primera coincidencia gana'],
              ['Uso habitual', 'Control fino, día a día', 'Bloqueo amplio de IPs concretas a nivel de subred (menos frecuente)']
            ]}
          />
        </LessonSection>

        <LessonSection title="Ejemplo: reglas para una arquitectura de tres capas">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El patrón más común (y el que deberías aplicar por defecto) es que cada capa solo acepte tráfico de la capa inmediatamente anterior, referenciando el Security Group de origen en lugar de un rango de IPs:
          </p>

          <CodeBlock
            language="bash"
            title="Crear y encadenar Security Groups con AWS CLI"
            code={`# 1. Security Group del ALB público: acepta HTTP/HTTPS de cualquier origen
aws ec2 create-security-group \\
  --group-name alb-sg --description "ALB publico" --vpc-id vpc-12345678

aws ec2 authorize-security-group-ingress \\
  --group-id sg-alb \\
  --protocol tcp --port 443 --cidr 0.0.0.0/0

# 2. Security Group de la aplicación: SOLO acepta tráfico del ALB
aws ec2 create-security-group \\
  --group-name app-sg --description "EC2 aplicacion" --vpc-id vpc-12345678

aws ec2 authorize-security-group-ingress \\
  --group-id sg-app \\
  --protocol tcp --port 8080 --source-group sg-alb

# 3. Security Group de la base de datos: SOLO acepta tráfico de la aplicación
aws ec2 create-security-group \\
  --group-name rds-sg --description "RDS PostgreSQL" --vpc-id vpc-12345678

aws ec2 authorize-security-group-ingress \\
  --group-id sg-rds \\
  --protocol tcp --port 5432 --source-group sg-app`}
          />

          <InfoBox type="tip" title="Referencia por Security Group, no por IP">
            Usar <code>--source-group</code> en lugar de un CIDR fijo tiene una ventaja enorme: si el Auto Scaling Group añade o elimina instancias EC2, las reglas siguen siendo válidas automáticamente, porque el permiso está atado al Security Group, no a una IP concreta que puede cambiar.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Errores comunes que debes evitar">
          <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            <li><strong>Abrir el puerto 22 (SSH) a <code>0.0.0.0/0</code>.</strong> Si necesitas administrar instancias privadas, usa un bastion host o, mejor aún, <strong>AWS Systems Manager Session Manager</strong>, que no requiere abrir ningún puerto entrante.</li>
            <li><strong>Poner la base de datos en un Security Group abierto "para probar" y olvidarlo.</strong> Una regla temporal en desarrollo es la puerta trasera más común en producción.</li>
            <li><strong>Un único Security Group gigante para todo.</strong> Dificulta la auditoría: crea uno por capa o por función, con el mínimo de reglas necesarias.</li>
            <li><strong>Confundir Security Group con control de acceso a nivel de aplicación.</strong> El SG controla la red; la autenticación y autorización de tu API (Spring Security, JWT) es una capa adicional, no un sustituto.</li>
          </ul>

          <InfoBox type="warning" title="Defensa en profundidad">
            Los Security Groups son una capa de tu estrategia de seguridad, no la única. Combínalos con subredes privadas, IAM con menor privilegio, cifrado en tránsito y en reposo, y monitorización con CloudTrail/CloudWatch.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen">
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li>Los Security Groups son firewalls stateful a nivel de instancia: solo tienen reglas de "permitir".</li>
            <li>Las Network ACLs operan a nivel de subred, son stateless y admiten reglas de "denegar".</li>
            <li>Encadena Security Groups por capa (ALB → aplicación → base de datos), referenciando el SG de origen en vez de IPs fijas.</li>
            <li>Evita abrir SSH a internet: usa un bastion host o AWS Systems Manager Session Manager.</li>
            <li>Los Security Groups son una capa más de una estrategia de defensa en profundidad, no la única medida de seguridad.</li>
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
