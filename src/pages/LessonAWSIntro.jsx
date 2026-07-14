import { useNavigate } from 'react-router-dom';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSIntro() {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '☁️',
      title: 'Amazon Web Services (AWS)',
      definition: 'Proveedor de computación en la nube más grande del mundo con 200+ servicios',
      example: 'Alquila servidores, bases de datos, almacenamiento bajo demanda sin comprar infraestructura física'
    },
    {
      icon: '🌐',
      title: 'Región',
      definition: 'Ubicación geográfica con múltiples centros de datos completamente independientes',
      example: 'us-east-1 (Virginia), eu-west-1 (Irlanda), ap-southeast-1 (Singapur)'
    },
    {
      icon: '🏢',
      title: 'Availability Zone (AZ)',
      definition: 'Centro de datos aislado dentro de una región para alta disponibilidad',
      example: 'us-east-1a, us-east-1b - Se replican para redundancia automática'
    },
    {
      icon: '🔌',
      title: 'EC2 - Elastic Compute Cloud',
      definition: 'Máquinas virtuales en la nube - Sistema operativo completo bajo tu control',
      example: 't2.micro (1 vCPU, 1GB RAM), m5.large (2 vCPU, 8GB RAM), c5.xlarge (4 vCPU, 8GB RAM)'
    },
    {
      icon: '🗄️',
      title: 'RDS - Relational Database Service',
      definition: 'Bases de datos manejadas (MySQL, PostgreSQL, Oracle, SQL Server)',
      example: 'No administras backup, parches, replicación - AWS lo hace automáticamente'
    },
    {
      icon: '📦',
      title: 'S3 - Simple Storage Service',
      definition: 'Almacenamiento de objetos ilimitado (imágenes, videos, archivos)',
      example: 'mybucket/users/photo.jpg, mybucket/logs/app.log - URLs públicas configurables'
    },
    {
      icon: '⚡',
      title: 'Lambda',
      definition: 'Computación sin servidor - Ejecuta código sin gestionar servidores',
      example: 'Pagas solo por milisegundos de ejecución, no por máquinas permanentes'
    },
    {
      icon: '📊',
      title: 'CloudWatch',
      definition: 'Monitoreo centralizado - Logs, métricas y alarmas de toda tu infraestructura',
      example: 'Alertas cuando CPU > 80%, emails cuando falla un servicio'
    }
  ];

  const sections = [
    {
      title: 'Accesos Rápidos',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          <button
            onClick={() => navigate('/aws/lexico')}
            style={{
              backgroundColor: '#FF9900',
              color: '#ffffff',
              border: 'none',
              padding: '2rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(255, 153, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 153, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.2)';
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>📚</span>
            <div>
              <div style={{ marginBottom: '0.5rem' }}>Léxico AWS</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Terminología, conceptos y definiciones</div>
            </div>
          </button>

          <button
            onClick={() => navigate('/aws/evaluacion')}
            style={{
              backgroundColor: '#2196F3',
              color: '#ffffff',
              border: 'none',
              padding: '2rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(33, 150, 243, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(33, 150, 243, 0.2)';
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>✅</span>
            <div>
              <div style={{ marginBottom: '0.5rem' }}>Test & Evaluación</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Autoevaluación de conocimientos</div>
            </div>
          </button>
        </div>
      )
    },
    {
      title: 'AWS en 5 Minutos',
      content: (
        <>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>¿Por qué AWS?</h3>
          <ul style={{ fontSize: '1.05rem', lineHeight: '1.6', marginLeft: '1.5rem' }}>
            <li>No compras hardware: alquilas lo que necesitas</li>
            <li>Escala automática: crece según tráfico de usuarios</li>
            <li>99.99% de disponibilidad: datos replicados en múltiples regiones</li>
            <li>Paga solo por lo que usas: máquina apagada = $0</li>
            <li>Usado por Netflix, Airbnb, Spotify, Twitch, NASA</li>
          </ul>

          <h3 style={{ marginTop: '2rem' }}>AWS vs Otras Plataformas</h3>
          <InfoBox
            title="Comparativa Rápida"
            content={`AWS (50% del mercado):
✓ Mayor variedad de servicios (200+)
✓ Mejor para aplicaciones complejas
✓ Curva aprendizaje: Media-Alta
$ ~$50-500 USD/mes

Google Cloud (9% del mercado):
✓ Excelente para análisis de datos
✓ Mejor para machine learning
✓ Interfaz más moderna
$ Similar a AWS

Microsoft Azure (23% del mercado):
✓ Mejor si usas .NET/Windows
✓ Integración con Office 365
✓ Fuerte en enterprise
$ Similar a AWS

Heroku (Plataforma Simplificada):
✓ Deployd solo en 1 comando
✗ Mucho más caro por poder computacional
$ $25-100 USD/mes para aplicación pequeña`}
          />
        </>
      )
    },
    {
      title: 'Conceptos Clave',
      content: (
        <>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>La Jerarquía de AWS</h3>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            fontFamily: 'monospace',
            fontSize: '0.95rem'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Tu Cuenta AWS</strong>
              <div style={{ marginLeft: '2rem', color: '#666', marginTop: '0.5rem' }}>
                ↓ (contiene)
              </div>
              <strong style={{ marginLeft: '2rem' }}>Región (us-east-1)</strong>
              <div style={{ marginLeft: '4rem', color: '#666', marginTop: '0.5rem' }}>
                ↓ (contiene)
              </div>
              <strong style={{ marginLeft: '4rem' }}>Availability Zone A (us-east-1a)</strong>
              <div style={{ marginLeft: '6rem', color: '#666', marginTop: '0.5rem' }}>
                ├ EC2 Instance (servidor web)
              </div>
              <div style={{ marginLeft: '6rem', color: '#666' }}>
                └ RDS Instance (base de datos)
              </div>
              <strong style={{ marginLeft: '4rem', marginTop: '0.5rem', display: 'block' }}>Availability Zone B (us-east-1b)</strong>
              <div style={{ marginLeft: '6rem', color: '#666', marginTop: '0.5rem' }}>
                ├ EC2 Instance (backup automático)
              </div>
              <div style={{ marginLeft: '6rem', color: '#666' }}>
                └ RDS Replica (sincronizada)
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Servicios Principales por Categoría</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{
              backgroundColor: '#e3f2fd',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #2196F3'
            }}>
              <h4 style={{ color: '#2196F3', marginTop: 0, fontSize: '1.2rem', fontWeight: '600' }}>Computación</h4>
              <ul style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                <li><strong>EC2</strong>: Máquinas virtuales</li>
                <li><strong>Lambda</strong>: Funciones serverless</li>
                <li><strong>ECS</strong>: Contenedores Docker</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#fff3e0',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #FF9800'
            }}>
              <h4 style={{ color: '#FF9800', marginTop: 0, fontSize: '1.2rem', fontWeight: '600' }}>Almacenamiento</h4>
              <ul style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                <li><strong>S3</strong>: Objetos (archivos)</li>
                <li><strong>EBS</strong>: Discos para EC2</li>
                <li><strong>Glacier</strong>: Archivo a largo plazo</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f3e5f5',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #9C27B0'
            }}>
              <h4 style={{ color: '#9C27B0', marginTop: 0, fontSize: '1.2rem', fontWeight: '600' }}>Bases de Datos</h4>
              <ul style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                <li><strong>RDS</strong>: SQL (MySQL, PostgreSQL)</li>
                <li><strong>DynamoDB</strong>: NoSQL rápido</li>
                <li><strong>Redshift</strong>: Data warehouse</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#e8f5e9',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #4CAF50'
            }}>
              <h4 style={{ color: '#4CAF50', marginTop: 0, fontSize: '1.2rem', fontWeight: '600' }}>Redes & CDN</h4>
              <ul style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                <li><strong>VPC</strong>: Red privada virtual</li>
                <li><strong>CloudFront</strong>: Distribuir contenido</li>
                <li><strong>ELB</strong>: Balanceador de carga</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Caso de Uso: Desplegar una App Web',
      content: (
        <>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Arquitectura Típica</h3>
          <div style={{
            backgroundColor: '#f0f7ff',
            padding: '2rem',
            borderRadius: '8px',
            border: '2px dashed #2196F3',
            marginBottom: '1.5rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <strong style={{ fontSize: '1.1rem' }}>Usuarios en Internet</strong>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>↓</div>
            <div style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '1rem',
              borderRadius: '4px',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              <strong>CloudFront CDN</strong>
              <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Distribuye contenido desde 200+ ubicaciones</div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>↓</div>
            <div style={{
              backgroundColor: '#FF9800',
              color: 'white',
              padding: '1rem',
              borderRadius: '4px',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              <strong>Load Balancer (ELB)</strong>
              <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Distribuye requests entre servidores</div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>↓</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                backgroundColor: '#9C27B0',
                color: 'white',
                padding: '1rem',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <strong>EC2 Instancia 1</strong>
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Servidor web (Node.js, Java, Python)</div>
              </div>
              <div style={{
                backgroundColor: '#9C27B0',
                color: 'white',
                padding: '1rem',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <strong>EC2 Instancia 2</strong>
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Servidor web backup</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>↓</div>
            <div style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '1rem',
              borderRadius: '4px',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              <strong>RDS Database</strong>
              <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>PostgreSQL con backup y replica automática</div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>+</div>
            <div style={{
              backgroundColor: '#FF5722',
              color: 'white',
              padding: '1rem',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              <strong>S3 Bucket</strong>
              <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Almacena imágenes, documentos, archivos</div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Flujo de Despliegue</h3>
          <CodeBlock
            language="bash"
            code={`# 1. Crear VPC (red privada)
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# 2. Lanzar instancia EC2
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name mi-llave

# 3. Crear base de datos RDS
aws rds create-db-instance \\
  --db-instance-identifier mi-app-db \\
  --db-instance-class db.t2.micro \\
  --engine postgres \\
  --master-username admin

# 4. Crear bucket S3
aws s3 mb s3://mi-app-imagenes

# 5. Monitorear en CloudWatch
aws cloudwatch put-metric-alarm \\
  --alarm-name cpu-alta \\
  --alarm-description "Alerta cuando CPU > 80%" \\
  --threshold 80`}
          />
        </>
      )
    },
    {
      title: 'Precios: Cómo AWS Cobra',
      content: (
        <>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Modelo de Precios</h3>
          <div style={{
            backgroundColor: '#fff9c4',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #FBC02D',
            marginBottom: '1.5rem'
          }}>
            <strong>⚠️ Regla Importante:</strong>
            <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>Máquina apagada = $0 (no se cobra). Máquina corriendo = se cobra cada hora incluso aunque esté ociosa.</p>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Ejemplos de Costos Mensuales</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '8px'
            }}>
              <h4 style={{ marginTop: 0, color: '#2196F3', fontSize: '1.2rem', fontWeight: '600' }}>Aplicación Pequeña</h4>
              <ul style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                <li>1 EC2 t2.micro: <strong>~$10</strong></li>
                <li>1 RDS t2.micro: <strong>~$15</strong></li>
                <li>10GB S3: <strong>~$0.25</strong></li>
                <li><strong>Total: $25-30/mes</strong></li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '8px'
            }}>
              <h4 style={{ marginTop: 0, color: '#FF9800', fontSize: '1.2rem', fontWeight: '600' }}>Aplicación Mediana</h4>
              <ul style={{ fontSize: '0.95rem', margin: '1rem 0' }}>
                <li>2 EC2 t2.small: <strong>~$40</strong></li>
                <li>1 RDS m5.large: <strong>~$80</strong></li>
                <li>100GB S3 + CDN: <strong>~$20</strong></li>
                <li><strong>Total: $140-150/mes</strong></li>
              </ul>
            </div>
          </div>

          <h3 style={{ marginTop: '2rem' }}>Cómo Ahorrar</h3>
          <ul style={{ fontSize: '1.05rem', lineHeight: '1.6', marginLeft: '1.5rem' }}>
            <li><strong>Apaga máquinas por la noche:</strong> Ahorra 50%</li>
            <li><strong>Reserved Instances:</strong> Paga 1 año adelantado, ahorra 40%</li>
            <li><strong>Spot Instances:</strong> Máquinas que pueden apagarse, 90% descuento</li>
            <li><strong>Uso de Lambda:</strong> Paga solo por milisegundos ejecutados</li>
          </ul>
        </>
      )
    }
  ];

  const keyPoints = [
    'AWS es el proveedor de nube más grande: 50% del mercado mundial',
    'Arquitectura: Región → Availability Zone → Servicios específicos',
    'EC2: servidores virtuales; RDS: bases de datos manejadas; S3: almacenamiento',
    'Lambda permite código sin servidores - pagas solo por ejecución',
    'Máquina apagada = $0; máquina corriendo = costo por hora',
    'CloudWatch centraliza monitoreo, logs y alarmas',
    'Aplicación típica: Load Balancer → EC2s → RDS → S3',
  ];

  const summary = `AWS es la plataforma más poderosa para desplegar aplicaciones profesionales:

• Flexibilidad: Desde máquinas virtuales hasta código serverless
• Escalabilidad: Crecer de 100 a 1,000,000 usuarios automáticamente
• Seguridad: 200+ certificaciones de compliance
• Global: Despliega en 30+ regiones del mundo
• Costos: Paga solo por lo que usas, máquinas apagadas son gratis`;

  return (
    <LessonTemplate
      title="AWS: Introducción a Amazon Web Services"
      subtitle="Cómo AWS permite desplegar y escalar aplicaciones profesionales en la nube"
      sections={sections}
      concepts={concepts}
      keyPoints={keyPoints}
      summary={summary}
      breadcrumbs={breadcrumbs}
      navigation={<LessonNavigation {...nav} />}
    />
  );
}
