import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LexicoAWS() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const lexicoTerms = [
    {
      category: 'Modelos de Servicio',
      icon: '🏢',
      color: '#FF6B6B',
      terms: [
        {
          term: 'IaaS (Infrastructure as a Service)',
          definition: 'Acceso a infraestructura virtualizada. Tú gestiona: aplicaciones, datos, runtime, middleware, SO. AWS gestiona: virtualización, servidores, almacenamiento, red.',
          example: 'EC2, VPC, EBS, Elastic Load Balancer'
        },
        {
          term: 'PaaS (Platform as a Service)',
          definition: 'Plataforma completa para desarrollar y desplegar aplicaciones. AWS gestiona la infraestructura, tú solo te enfocas en tu código.',
          example: 'Elastic Beanstalk, AWS App Runner, RDS (base de datos gestionada)'
        },
        {
          term: 'SaaS (Software as a Service)',
          definition: 'Aplicaciones completamente gestionadas, accesibles vía web. No requiere instalación ni mantenimiento.',
          example: 'Amazon WorkSpaces, Amazon Chime, Amazon Connect'
        }
      ]
    },
    {
      category: 'Computación',
      icon: '⚙️',
      color: '#4ECDC4',
      terms: [
        {
          term: 'EC2 (Elastic Compute Cloud)',
          definition: 'Máquinas virtuales en la nube. Sistema operativo completo bajo tu control con recursos configurables.',
          example: 't2.micro (1 vCPU, 1GB RAM), m5.large (2 vCPU, 8GB), c5.xlarge (4 vCPU, 8GB)'
        },
        {
          term: 'Lambda',
          definition: 'Computación sin servidor. Ejecuta código sin gestionar servidores. Pagas solo por milisegundos de ejecución.',
          example: 'Procesar imágenes al subirlas a S3, API serverless, automatizar tareas'
        },
        {
          term: 'Elastic Beanstalk',
          definition: 'Plataforma para desplegar aplicaciones web rápidamente sin gestionar infraestructura.',
          example: 'Desplegar app Node.js, Python, Java en 1 comando'
        },
        {
          term: 'Instancia',
          definition: 'Una máquina virtual en funcionamiento. Cada instancia tiene: CPU, RAM, almacenamiento y IP asignada.',
          example: 'Una instancia t2.micro ejecutándose en us-east-1a'
        }
      ]
    },
    {
      category: 'Almacenamiento & Bases de Datos',
      icon: '🗄️',
      color: '#95E1D3',
      terms: [
        {
          term: 'S3 (Simple Storage Service)',
          definition: 'Almacenamiento de objetos ilimitado y durabilidad de 99.999999999% (11 nueves).',
          example: 'mybucket/users/photo.jpg, mybucket/logs/app.log (URLs públicas configurables)'
        },
        {
          term: 'RDS (Relational Database Service)',
          definition: 'Bases de datos gestionadas (MySQL, PostgreSQL, Oracle, SQL Server). AWS gestiona backup, parches, replicación.',
          example: 'No administras servidor de BD, AWS lo escala y respalda automáticamente'
        },
        {
          term: 'DynamoDB',
          definition: 'Base de datos NoSQL completamente gestionada. Escalabilidad automática, baja latencia.',
          example: 'Tiendas online con millones de transacciones por segundo'
        },
        {
          term: 'ElastiCache',
          definition: 'Servicio de cache en memoria (Redis, Memcached) para acelerar aplicaciones.',
          example: 'Cachear datos de BD para reducir latencia de consultas'
        },
        {
          term: 'EBS (Elastic Block Store)',
          definition: 'Almacenamiento de bloques para instancias EC2. Volúmenes persistentes y snapshots.',
          example: 'Disco duro virtual que adjuntas a una instancia EC2'
        }
      ]
    },
    {
      category: 'Networking',
      icon: '🌐',
      color: '#FFB3BA',
      terms: [
        {
          term: 'VPC (Virtual Private Cloud)',
          definition: 'Red privada en AWS. Controlas subnets, rutas, gateways, firewalls dentro de tu VPC.',
          example: 'Crear una red 10.0.0.0/16 donde viven tus recursos aislados'
        },
        {
          term: 'Región',
          definition: 'Ubicación geográfica con múltiples centros de datos completamente independientes.',
          example: 'us-east-1 (Virginia), eu-west-1 (Irlanda), ap-southeast-1 (Singapur)'
        },
        {
          term: 'Availability Zone (AZ)',
          definition: 'Centro de datos aislado dentro de una región para alta disponibilidad.',
          example: 'us-east-1a, us-east-1b (replicas automáticas para redundancia)'
        },
        {
          term: 'Security Group',
          definition: 'Firewall virtual que controla tráfico de entrada (inbound) y salida (outbound).',
          example: 'Permitir puerto 80 (HTTP) desde cualquier IP, puerto 22 (SSH) solo desde IP conocida'
        },
        {
          term: 'Elastic IP',
          definition: 'Dirección IP estática que puedes reasignar. No cambia cuando reinicia instancia.',
          example: 'Garantizar IP fija para un servidor web'
        }
      ]
    },
    {
      category: 'Seguridad & Gestión de Identidades',
      icon: '🔐',
      color: '#FFD3B6',
      terms: [
        {
          term: 'IAM (Identity & Access Management)',
          definition: 'Sistema de gestión de usuarios, roles y permisos. Control granular de acceso a recursos AWS.',
          example: 'Usuario "dev-team" con acceso solo a S3 y EC2, sin acceso a bases de datos'
        },
        {
          term: 'Rol (Role)',
          definition: 'Conjunto de permisos asignables a usuarios, EC2 instancias o servicios. No tiene credenciales propias.',
          example: 'Rol "LambdaS3Access" que permite a Lambda leer de S3'
        },
        {
          term: 'Política (Policy)',
          definition: 'Documento JSON que define qué acciones se permiten en qué recursos.',
          example: '{ "Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::mybucket/*" }'
        },
        {
          term: 'MFA (Multi-Factor Authentication)',
          definition: 'Autenticación de dos factores: contraseña + código temporal del teléfono.',
          example: 'Contraseña + código Google Authenticator para acceso a cuenta root'
        }
      ]
    },
    {
      category: 'Monitoreo & Logs',
      icon: '📊',
      color: '#FFAAA5',
      terms: [
        {
          term: 'CloudWatch',
          definition: 'Servicio de monitoreo centralizado. Recopila logs, métricas y alarmas de toda infraestructura.',
          example: 'Alerta cuando CPU > 80%, email cuando falla un servicio, gráficos de latencia'
        },
        {
          term: 'CloudTrail',
          definition: 'Auditoría de todas las acciones realizadas en tu cuenta AWS. Quién hizo qué, cuándo y desde dónde.',
          example: 'Detectar quién eliminó una instancia EC2 importante'
        },
        {
          term: 'CloudFormation',
          definition: 'Infrastructure as Code. Define tus recursos AWS en archivos JSON/YAML y deploya todo con 1 comando.',
          example: 'Crear 10 instancias EC2, VPC, RDS, S3 con template CloudFormation'
        }
      ]
    },
    {
      category: 'Despliegue & Automatización',
      icon: '🚀',
      color: '#FF8B94',
      terms: [
        {
          term: 'CodePipeline',
          definition: 'Servicio de CI/CD. Automatiza compilación, test y despliegue de código.',
          example: 'Push a GitHub → Compila → Test → Deploya a producción automáticamente'
        },
        {
          term: 'CodeBuild',
          definition: 'Servicio de compilación gestionado. Compila código y ejecuta tests.',
          example: 'Compilar Java, correr JUnit tests, crear Docker image'
        },
        {
          term: 'CodeDeploy',
          definition: 'Automatiza el despliegue de aplicaciones a instancias EC2, on-premise o servidores Lambda.',
          example: 'Desplegar nueva versión de aplicación sin downtime'
        },
        {
          term: 'Auto Scaling Group',
          definition: 'Grupo de instancias EC2 que escala automáticamente según demanda.',
          example: 'Crear más instancias cuando CPU > 70%, eliminar cuando CPU < 30%'
        }
      ]
    },
    {
      category: 'Conceptos Clave',
      icon: '💡',
      color: '#FF6B9D',
      terms: [
        {
          term: 'On-Demand',
          definition: 'Pagar por hora/segundo de uso. Flexible, sin compromiso a largo plazo.',
          example: 't2.micro: $0.0116 USD/hora'
        },
        {
          term: 'Reserved Instance',
          definition: 'Pagar por adelantado por 1-3 años. Descuento de 30-70% vs On-Demand.',
          example: 'Servidor que siempre está activo: mejor con Reserved Instance'
        },
        {
          term: 'Spot Instance',
          definition: 'Instancias baratas (hasta 90% descuento) que AWS puede terminar cuando suba demanda.',
          example: 'Batch jobs, análisis de datos, workloads no críticos'
        },
        {
          term: 'Elasticidad',
          definition: 'Capacidad de escalar recursos hacia arriba o abajo según demanda en tiempo real.',
          example: 'Black Friday: 100 instancias. Lunes normal: 10 instancias'
        },
        {
          term: 'SLA (Service Level Agreement)',
          definition: 'Garantía de disponibilidad y rendimiento. AWS ofrece 99.99% de uptime para servicios gestionados.',
          example: 'Si RDS está down > 4.4 minutos/mes, AWS reembolsa crédito'
        }
      ]
    }
  ];

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        sections={[
          {
            title: 'Léxico AWS: Terminología Completa',
            content: (
              <>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#666' }}>
                  Aquí encontrarás todos los términos, conceptos y definiciones esenciales para trabajar con AWS.
                  Cada término incluye explicación clara y ejemplos prácticos.
                </p>

                {lexicoTerms.map((category, categoryIdx) => (
                  <div key={`lex-category-${categoryIdx}`} style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                      <h2 style={{ margin: 0, color: category.color, fontSize: '1.5rem', fontWeight: '700' }}>
                        {category.category}
                      </h2>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                      gap: '1.5rem'
                    }}>
                      {category.terms.map((item, termIdx) => (
                        <div key={`term-${categoryIdx}-${termIdx}`} style={{
                          backgroundColor: '#ffffff',
                          border: `2px solid ${category.color}20`,
                          borderLeft: `5px solid ${category.color}`,
                          borderRadius: '8px',
                          padding: '1.5rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 4px 16px ${category.color}20`;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}>
                          <h3 style={{ margin: '0 0 0.8rem 0', color: category.color, fontSize: '1.1rem', fontWeight: '700' }}>
                            {item.term}
                          </h3>
                          <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                            {item.definition}
                          </p>
                          <div style={{
                            backgroundColor: '#f5f5f5',
                            padding: '1rem',
                            borderRadius: '6px',
                            borderLeft: `3px solid ${category.color}`,
                            fontSize: '0.9rem',
                            color: '#333'
                          }}>
                            <p style={{ margin: '0', fontWeight: '600', marginBottom: '0.3rem' }}>💡 Ejemplo:</p>
                            <p style={{ margin: 0 }}>{item.example}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )
          }
        ]}
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
