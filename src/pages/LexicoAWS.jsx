import { useState } from 'react';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LexicoAWS() {
  const [selectedCategory, setSelectedCategory] = useState(0);
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
        },
        {
          term: 'Elastic Load Balancer (ELB)',
          definition: 'Distribuye automáticamente tráfico entrante entre múltiples instancias. Hay 3 tipos: Classic (CLB), Application (ALB), Network (NLB).',
          example: 'ALB distribuye tráfico HTTP/HTTPS entre instancias web en múltiples AZ'
        },
        {
          term: 'Subnet',
          definition: 'Segmento de red dentro de una VPC. Puede ser pública (acceso a internet) o privada (sin acceso directo a internet).',
          example: 'Subnet pública 10.0.1.0/24 para web servers, Subnet privada 10.0.2.0/24 para base de datos'
        },
        {
          term: 'Internet Gateway',
          definition: 'Componente VPC que permite comunicación entre instancias en VPC e internet.',
          example: 'Sin IGW, tus instancias EC2 no pueden conectarse a internet ni recibir tráfico externo'
        },
        {
          term: 'NAT Gateway',
          definition: 'Permite que instancias en subnets privadas accedan a internet sin exponerse públicamente.',
          example: 'Instancia privada puede descargar actualizaciones de internet a través del NAT Gateway'
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
        },
        {
          term: 'KMS (Key Management Service)',
          definition: 'Servicio para crear y gestionar claves de encriptación. Controla quién puede encriptar/desencriptar datos.',
          example: 'Encriptar datos en S3 o RDS con claves manejadas por AWS KMS'
        },
        {
          term: 'Secrets Manager',
          definition: 'Servicio para almacenar secretos seguros: contraseñas de BD, API keys, tokens.',
          example: 'Guardar contraseña de RDS en Secrets Manager en lugar de hardcodearla en código'
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
        },
        {
          term: 'VPC Flow Logs',
          definition: 'Herramienta de auditoría que captura información sobre tráfico IP en tu VPC.',
          example: 'Detectar patrones de tráfico sospechoso o depurar conectividad entre servicios'
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
        },
        {
          term: 'RPO (Recovery Point Objective)',
          definition: 'Máximo tiempo de pérdida de datos tolerable. Define cada cuánto hacer backups.',
          example: 'RPO de 1 hora = máximo 1 hora de datos perdidos si ocurre desastre'
        },
        {
          term: 'RTO (Recovery Time Objective)',
          definition: 'Tiempo máximo para recuperarse de un desastre. Cuánto tiempo toleras que el sistema esté down.',
          example: 'RTO de 30 minutos = recuperar sistema completo en máximo 30 minutos'
        }
      ]
    },
    {
      category: 'Cómputo Avanzado',
      icon: '⚡',
      color: '#A8D8EA',
      terms: [
        {
          term: 'Auto Scaling (Horizontal)',
          definition: 'Escalar aumentando número de instancias. Mejora capacidad de manejo de tráfico.',
          example: 'De 2 a 10 instancias EC2 cuando tráfico sube'
        },
        {
          term: 'Vertical Scaling',
          definition: 'Escalar cambiar tipo de instancia (más potente). Requiere downtime.',
          example: 'Cambiar de t2.micro a t2.large'
        },
        {
          term: 'ECS (Elastic Container Service)',
          definition: 'Orquestación de contenedores Docker. AWS gestiona el cluster.',
          example: 'Desplegar múltiples contenedores Docker con balanceo automático'
        },
        {
          term: 'Fargate',
          definition: 'Computación serverless para contenedores. No gestiona servidores, solo containers.',
          example: 'Desplegar Docker sin pensar en EC2 instances'
        },
        {
          term: 'Lightsail',
          definition: 'Computación virtual simplificada para principiantes. Precios predecibles.',
          example: 'Servidor web WordPress con IP estática por $3.5/mes'
        },
        {
          term: 'Batch',
          definition: 'Servicio para ejecutar trabajos en lote (batch jobs) de forma administrada.',
          example: 'Procesar 1 millón de imágenes automáticamente'
        },
        {
          term: 'SnapStart (Lambda)',
          definition: 'Inicia Lambda desde snapshot pre-inicializado. Reduce cold start dramáticamente.',
          example: 'Lambda Java de 6 segundos a 100ms en cold start'
        }
      ]
    },
    {
      category: 'Almacenamiento Avanzado',
      icon: '📦',
      color: '#AA96DA',
      terms: [
        {
          term: 'EFS (Elastic File System)',
          definition: 'Sistema de archivos NFS para compartir entre múltiples EC2 instancias.',
          example: 'Múltiples instancias EC2 leyendo/escribiendo archivos compartidos'
        },
        {
          term: 'Glacier',
          definition: 'Almacenamiento de archivo de bajo costo. Tiempo de recuperación: horas o días.',
          example: 'Backups de 1 año atrás a $0.004/GB/mes'
        },
        {
          term: 'Backup (AWS Backup)',
          definition: 'Servicio centralizado para backups de EC2, RDS, EBS, EFS, DynamoDB.',
          example: 'Una política de backup para todos tus recursos'
        },
        {
          term: 'FSx',
          definition: 'Sistemas de archivos administrados (Windows File Server, Lustre).',
          example: 'Windows File Server completamente gestionado sin hardware'
        },
        {
          term: 'S3 Glacier Deep Archive',
          definition: 'Almacenamiento ultra-barato para datos raros. Recuperación en 12 horas.',
          example: 'Cumplimiento legal: guardar datos 10 años por $0.00099/GB/mes'
        },
        {
          term: 'S3 Intelligent-Tiering',
          definition: 'Mueve automáticamente objetos entre access tiers según patrones de acceso.',
          example: 'Ahorro automático sin cambiar código'
        }
      ]
    },
    {
      category: 'Networking Avanzado',
      icon: '🌍',
      color: '#FCBAD3',
      terms: [
        {
          term: 'Route 53',
          definition: 'DNS gestionado y health checking. Distribuye tráfico entre regiones.',
          example: 'www.example.com → 50% us-east, 50% eu-west con failover automático'
        },
        {
          term: 'CloudFront',
          definition: 'CDN (Content Delivery Network). Cachea contenido en edge locations globales.',
          example: 'Usuario en Japón descarga video desde edge en Tokyo, no desde Virginia'
        },
        {
          term: 'API Gateway',
          definition: 'Crea, publica y gestiona APIs REST y WebSocket. Integra con Lambda, EC2, RDS.',
          example: 'API pública sin exponer tu backend directamente'
        },
        {
          term: 'Direct Connect',
          definition: 'Conexión dedicada privada entre tu data center y AWS.',
          example: 'Conexión directa con banda garantizada entre oficina y AWS'
        },
        {
          term: 'VPN (Virtual Private Network)',
          definition: 'Conexión encriptada entre tu red on-premise y AWS VPC.',
          example: 'Acceso seguro a instancias privadas desde home office'
        },
        {
          term: 'Transit Gateway',
          definition: 'Hub central para conectar múltiples VPCs, on-premise y redes remotas.',
          example: 'Conectar 10 VPCs diferentes a través de un hub'
        },
        {
          term: 'Endpoint (VPC)',
          definition: 'Conexión privada sin internet. Conectar EC2 privada a S3 sin NAT Gateway.',
          example: 'EC2 privada → S3 sin salir de la red AWS'
        }
      ]
    },
    {
      category: 'Bases de Datos Avanzado',
      icon: '🔑',
      color: '#FFFACD',
      terms: [
        {
          term: 'Read Replica (RDS)',
          definition: 'Copia de lectura sincrónica de BD principal. Distribuye lecturas.',
          example: 'RDS Master en us-east, Read Replica en eu-west'
        },
        {
          term: 'Multi-AZ (RDS)',
          definition: 'Replica de standby sincrónica en otra AZ. Failover automático en 1-2 minutos.',
          example: 'RDS en us-east-1a con standby en us-east-1b'
        },
        {
          term: 'Aurora',
          definition: 'Base de datos relacional MySQL/PostgreSQL compatible. 3x más rápida que RDS estándar.',
          example: 'Compatible con MySQL pero con rendimiento de base de datos proprietaria'
        },
        {
          term: 'DocumentDB',
          definition: 'MongoDB compatible completamente gestionado. No administras nada.',
          example: 'Usar código MongoDB existente en AWS sin cambios'
        },
        {
          term: 'Neptune',
          definition: 'Base de datos de grafos gestionada para relaciones complejas.',
          example: 'Redes sociales: encontrar amigos de amigos en milisegundos'
        },
        {
          term: 'Redshift',
          definition: 'Data warehouse columnar para análisis masivos. Petabytes de datos.',
          example: 'Analizar 10 años de datos de ventas en segundos'
        },
        {
          term: 'DAX (DynamoDB Accelerator)',
          definition: 'Cache en memoria para DynamoDB. Reduce latencia de milisegundos a microsegundos.',
          example: 'DynamoDB normalmente 50ms → con DAX 200 microsegundos'
        },
        {
          term: 'Global Secondary Index (GSI)',
          definition: 'Índice alternativo en DynamoDB con diferentes Partition Key y Sort Key.',
          example: 'Tabla por usuario-id, GSI por email para buscar por email'
        }
      ]
    },
    {
      category: 'Gestión de Costos',
      icon: '💰',
      color: '#B4F8C8',
      terms: [
        {
          term: 'Pricing Calculator',
          definition: 'Herramienta para estimar costos antes de desplegar.',
          example: 'Calcular costo de 10 EC2 + RDS + S3 antes de crear'
        },
        {
          term: 'Cost Explorer',
          definition: 'Analiza gastos actuales por servicio, región, etiqueta.',
          example: 'Descubrir que DynamoDB gasta 60% del presupuesto'
        },
        {
          term: 'Budgets',
          definition: 'Alertas cuando gastos alcanzan límite definido.',
          example: 'Notificación cuando alcanzas el 80% del budget mensual'
        },
        {
          term: 'Savings Plans',
          definition: 'Compromiso flexible de 1-3 años. Descuento 30-50% vs On-Demand.',
          example: 'Comprometerse a $100/mes por 1 año con descuento significativo'
        },
        {
          term: 'Compute Savings Plans',
          definition: 'Descuento en EC2, Fargate, Lambda con compromiso 1-3 años.',
          example: 'Mismo descuento si cambias de EC2 a Fargate'
        },
        {
          term: 'Trusted Advisor',
          definition: 'Auditor automático que recomienda optimizaciones para ahorrar dinero y mejorar seguridad.',
          example: 'Alertar sobre instancias EC2 subutilizadas, bases de datos sin backup'
        },
        {
          term: 'Rightsizing',
          definition: 'Usar instancia del tamaño correcto. No oversizing ni undersizing.',
          example: 'Cambiar de m5.xlarge a t3.medium si no necesitas poder'
        }
      ]
    },
    {
      category: 'Compliance & Gobernanza',
      icon: '✅',
      color: '#FFB6C1',
      terms: [
        {
          term: 'Organizations',
          definition: 'Gestiona múltiples cuentas AWS bajo estructura centralizada.',
          example: 'Empresa con 50 cuentas AWS: Dev, Staging, Prod, etc.'
        },
        {
          term: 'Config',
          definition: 'Audita configuración de recursos. Detecta cambios no autorizados.',
          example: 'Alerta si alguien abre Security Group a 0.0.0.0/0'
        },
        {
          term: 'Systems Manager',
          definition: 'Gestiona múltiples instancias EC2 de forma centralizada.',
          example: 'Aplicar patch de seguridad a 1000 instancias con 1 comando'
        },
        {
          term: 'Compliance',
          definition: 'Cumplimiento regulatorio: HIPAA, PCI-DSS, GDPR, FedRAMP.',
          example: 'AWS cumple con RGPD para datos de usuarios en Europa'
        },
        {
          term: 'GuardDuty',
          definition: 'Detección de amenazas con ML. Busca actividad anómala automáticamente.',
          example: 'Detectar brute force SSH, data exfiltration, patrones sospechosos'
        },
        {
          term: 'Security Hub',
          definition: 'Centro centralizado de seguridad. Agrega hallazgos de múltiples servicios.',
          example: 'Tablero único con todos los hallazgos de seguridad'
        },
        {
          term: 'Macie',
          definition: 'Descubre y protege datos sensibles en S3 usando ML.',
          example: 'Encontrar automáticamente números de tarjeta de crédito en S3'
        },
        {
          term: 'WAF (Web Application Firewall)',
          definition: 'Protege aplicaciones web contra SQL injection, XSS, DDoS.',
          example: 'Bloquear requests con patrones maliciosos'
        }
      ]
    },
    {
      category: 'Integraciones & Machine Learning',
      icon: '🤖',
      color: '#DDA0DD',
      terms: [
        {
          term: 'SQS (Simple Queue Service)',
          definition: 'Cola de mensajes para desacoplar componentes. FIFO o estándar.',
          example: 'API recibe pedido → SQS → Lambda procesa asincrónico'
        },
        {
          term: 'SNS (Simple Notification Service)',
          definition: 'Servicio de mensajería publish-subscribe. Fan-out a múltiples suscriptores.',
          example: 'Evento en RDS → SNS notifica a Lambda, SQS y Email'
        },
        {
          term: 'EventBridge',
          definition: 'Bus de eventos. Conecta aplicaciones usando eventos en lugar de APIs.',
          example: 'EC2 lanzada → evento → Lambda, SNS, SQS reaccionan'
        },
        {
          term: 'Step Functions',
          definition: 'Orquestar flujos de trabajo complejos con Lambda, ECS, etc.',
          example: 'Workflow: validar datos → procesar → guardar → notificar'
        },
        {
          term: 'SageMaker',
          definition: 'Servicio completo de ML. Entrenar, ajustar e implementar modelos.',
          example: 'Crear modelo de predicción sin expertise en ML'
        },
        {
          term: 'Rekognition',
          definition: 'ML para visión: detectar objetos, rostros, texto en imágenes.',
          example: 'Detectar si persona usa máscara en foto'
        },
        {
          term: 'Comprehend',
          definition: 'ML para procesar lenguaje natural: sentimiento, entidades, sintaxis.',
          example: 'Analizar reviews de clientes para extraer sentimientos'
        },
        {
          term: 'Translate',
          definition: 'Traducción neural automática entre idiomas.',
          example: 'Traducir contenido web automáticamente a 100 idiomas'
        }
      ]
    }
  ];

  const selectedCategoryData = lexicoTerms[selectedCategory];

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        sections={[
          {
            title: 'Léxico AWS: Terminología por Temas',
            content: (
              <>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#666' }}>
                  Explora todos los términos de AWS organizados por categorías.
                  Selecciona una categoría del desplegable para ver los términos relacionados.
                </p>

                {/* Selector de categorías - Desplegable */}
                <div style={{
                  backgroundColor: '#f9f9f9',
                  border: '2px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '2rem',
                  marginBottom: '2rem'
                }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '700', color: '#333', fontSize: '1.05rem' }}>
                    📂 Selecciona una categoría:
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
                    style={{
                      padding: '1rem',
                      fontSize: '1rem',
                      fontWeight: '700',
                      border: `2px solid ${lexicoTerms[selectedCategory].color}`,
                      backgroundColor: '#ffffff',
                      color: '#333',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      minWidth: '300px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 2px 8px ${lexicoTerms[selectedCategory].color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {lexicoTerms.map((category, idx) => (
                      <option key={idx} value={idx}>
                        {category.icon} {category.category} ({category.terms.length} términos)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Términos de la categoría seleccionada */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '2.5rem' }}>{selectedCategoryData.icon}</span>
                    <div>
                      <h2 style={{ margin: '0 0 0.5rem 0', color: selectedCategoryData.color, fontSize: '1.8rem', fontWeight: '700' }}>
                        {selectedCategoryData.category}
                      </h2>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>
                        {selectedCategoryData.terms.length} términos disponibles
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    {selectedCategoryData.terms.map((item, idx) => (
                      <div key={`term-${selectedCategory}-${idx}`} style={{
                        backgroundColor: '#ffffff',
                        border: `2px solid ${selectedCategoryData.color}20`,
                        borderLeft: `5px solid ${selectedCategoryData.color}`,
                        borderRadius: '12px',
                        padding: '1.8rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 6px 20px ${selectedCategoryData.color}25`;
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>
                        <h3 style={{ margin: '0 0 0.8rem 0', color: selectedCategoryData.color, fontSize: '1.1rem', fontWeight: '700' }}>
                          {item.term}
                        </h3>
                        <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', color: '#555', lineHeight: '1.6', flex: 1 }}>
                          {item.definition}
                        </p>
                        <div style={{
                          backgroundColor: '#f5f5f5',
                          padding: '1rem',
                          borderRadius: '8px',
                          borderLeft: `3px solid ${selectedCategoryData.color}`,
                          fontSize: '0.9rem',
                          color: '#333'
                        }}>
                          <p style={{ margin: '0 0 0.3rem 0', fontWeight: '600' }}>💡 Ejemplo:</p>
                          <p style={{ margin: 0 }}>{item.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
