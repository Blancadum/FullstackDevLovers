import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSDeployment() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Despliegue e Infraestructura como Código',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El despliegue manual (hacer clic en botones) es propenso a errores, no es reproducible y no escala. La solución es <strong>automatización completa</strong> y <strong>infraestructura como código (IaC)</strong>.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En AWS, dos herramientas son fundamentales:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#0d47a1', marginTop: 0 }}>☁️ CloudFormation</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Qué es:</strong> Define infraestructura en YAML/JSON
              </p>
              <ul style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: 0 }}>
                <li>Crea/modifica/borra todos los recursos de una vez</li>
                <li>Nativo de AWS (sin aprender herramientas externas)</li>
                <li>Ideal para definir arquitecturas completas</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f0f4c3',
              border: '2px solid #cddc39',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#827717', marginTop: 0 }}>🚀 CodePipeline</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong>Qué es:</strong> Automatiza flujo código → build → deploy
              </p>
              <ul style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: 0 }}>
                <li>Escucha cambios en repositorio</li>
                <li>Ejecuta tests automáticamente</li>
                <li>Despliega sin intervención manual</li>
              </ul>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'CloudFormation — Definir Infraestructura',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            CloudFormation usa archivos YAML/JSON llamados <strong>plantillas</strong> que describen toda tu infraestructura. Un <strong>stack</strong> es la instancia de una plantilla (los recursos creados).
          </p>

          <CodeBlock
            code={`# cloudformation/guttman-stack.yaml

AWSTemplateFormatVersion: "2010-09-09"
Description: "Infraestructura completa Laboratorio Guttman - Producción"

Parameters:
  Environment:
    Type: String
    Default: prod
    AllowedValues: [dev, staging, prod]
  InstanceType:
    Type: String
    Default: t3.medium
    AllowedValues: [t3.small, t3.medium, t3.large]

Resources:
  # VPC y Redes
  GuttmanVPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: !Sub 'guttman-vpc-\${Environment}'

  # Subred pública
  PublicSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref GuttmanVPC
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: !Select [0, !GetAZs '']
      MapPublicIpOnLaunch: true
      Tags:
        - Key: Name
          Value: public-subnet-1a

  # Internet Gateway
  InternetGateway:
    Type: AWS::EC2::InternetGateway
    Properties:
      Tags:
        - Key: Name
          Value: guttman-igw

  AttachGateway:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      VpcId: !Ref GuttmanVPC
      InternetGatewayId: !Ref InternetGateway

  # Base de datos RDS
  RDSSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Security group para RDS
      VpcId: !Ref GuttmanVPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 5432
          ToPort: 5432
          CidrIp: 10.0.0.0/16  # Solo desde VPC

  GuttmanDatabase:
    Type: AWS::RDS::DBInstance
    Properties:
      Engine: postgres
      EngineVersion: "15.4"
      DBInstanceClass: !Ref InstanceType
      AllocatedStorage: 50
      StorageType: gp3
      MasterUsername: admin
      MasterUserPassword: !Sub '{{resolve:secretsmanager:guttman-db:SecretString:password}}'
      DBName: guttman
      VPCSecurityGroups:
        - !Ref RDSSecurityGroup
      MultiAZ: true
      BackupRetentionPeriod: 30
      PreferredBackupWindow: "03:00-04:00"
      PreferredMaintenanceWindow: "sun:04:00-sun:05:00"
      Tags:
        - Key: Name
          Value: guttman-db

  # S3 para documentos
  DocumentsBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub 'guttman-documents-\${AWS::AccountId}'
      VersioningConfiguration:
        Status: Enabled
      LifecycleConfiguration:
        Rules:
          - Id: TransitionToIA
            Status: Enabled
            Transitions:
              - TransitionInDays: 30
                StorageClass: STANDARD_IA
              - TransitionInDays: 90
                StorageClass: GLACIER
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        BlockPublicPolicy: true
        IgnorePublicAcls: true
        RestrictPublicBuckets: true
      Tags:
        - Key: Name
          Value: guttman-documents

Outputs:
  VPCId:
    Value: !Ref GuttmanVPC
    Export:
      Name: !Sub '\${Environment}-VPC-ID'

  DatabaseEndpoint:
    Value: !GetAtt GuttmanDatabase.Endpoint.Address
    Export:
      Name: !Sub '\${Environment}-DB-Endpoint'

  DocumentsBucketName:
    Value: !Ref DocumentsBucket
    Export:
      Name: !Sub '\${Environment}-Docs-Bucket'`}
            language="yaml"
            title="Plantilla CloudFormation básica"
          />

          <CodeBlock
            code={`# Desplegar stack con AWS CLI

# 1. Crear stack
aws cloudformation create-stack \\
  --stack-name guttman-prod \\
  --template-body file://guttman-stack.yaml \\
  --parameters ParameterKey=Environment,ParameterValue=prod \\
                ParameterKey=InstanceType,ParameterValue=t3.medium \\
  --capabilities CAPABILITY_IAM

# 2. Ver el progreso
aws cloudformation describe-stacks --stack-name guttman-prod

# 3. Ver eventos
aws cloudformation describe-stack-events --stack-name guttman-prod

# 4. Actualizar (cambiar parámetros, añadir recursos)
aws cloudformation update-stack \\
  --stack-name guttman-prod \\
  --template-body file://guttman-stack.yaml \\
  --parameters ParameterKey=InstanceType,ParameterValue=t3.large

# 5. Borrar stack (borra todos los recursos)
aws cloudformation delete-stack --stack-name guttman-prod`}
            language="bash"
            title="Comandos CloudFormation"
          />
        </>
      )
    },

    {
      title: 'CodePipeline — CI/CD Automatizado',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>CodePipeline</strong> orquesta el flujo completo: código → build → test → despliegue. Es el "orquestador" que coordina otros servicios AWS.
          </p>

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0, marginBottom: '1rem' }}>Pipeline típico para Laboratorio Guttman</h4>
            <div style={{ fontSize: '1rem', lineHeight: '2' }}>
              <div>📦 <strong>Source:</strong> GitHub → detecta push a main</div>
              <div>↓</div>
              <div>🔨 <strong>Build:</strong> CodeBuild → mvn clean package</div>
              <div>↓</div>
              <div>🧪 <strong>Test:</strong> CodeBuild → ejecuta tests, genera imagen Docker</div>
              <div>↓</div>
              <div>✅ <strong>Approval (opcional):</strong> Envía email para confirmar despliegue a producción</div>
              <div>↓</div>
              <div>🚀 <strong>Deploy:</strong> CodeDeploy → blue/green en EC2</div>
            </div>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            Componentes clave:
          </p>

          <Table
            headers={['Servicio', 'Función', 'Ejemplo']}
            rows={[
              ['CodeCommit', 'Repositorio Git gestionado', 'Alternativa a GitHub'],
              ['CodeBuild', 'Compilación y tests', 'mvn clean package, docker build'],
              ['CodeDeploy', 'Despliegue en servidores', 'EC2, on-premise, Lambda'],
              ['CodePipeline', 'Orquestador central', 'Coordina todos los pasos']
            ]}
          />

          <CodeBlock
            code={`# buildspec.yml (CodeBuild)
# Define cómo compilar y testear

version: 0.2

phases:
  pre_build:
    commands:
      - echo "Login a ECR..."
      - aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com
  build:
    commands:
      - echo "Build Spring Boot JAR..."
      - mvn clean package -DskipTests
      - echo "Running tests..."
      - mvn test
      - echo "Building Docker image..."
      - docker build -t $IMAGE_REPO_NAME:$IMAGE_TAG .
      - docker tag $IMAGE_REPO_NAME:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
  post_build:
    commands:
      - echo "Pushing image to ECR..."
      - docker push $AWS_ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
      - echo "Writing image definitions file..."
      - printf '[{"name":"guttman-app","imageUri":"%s"}]' $AWS_ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG > imagedefinitions.json

artifacts:
  files:
    - imagedefinitions.json
    - target/guttman-app.jar`}
            language="yaml"
            title="Especificación build (buildspec.yml)"
          />
        </>
      )
    },

    {
      title: 'Blue/Green Deployment',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            El despliegue <strong>blue/green</strong> es una estrategia que elimina el tiempo de inactividad:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #1976d2',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#0d47a1', marginTop: 0 }}>🔵 Azul (Actual)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Producción corriendo ahora
              </p>
              <ul style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                <li>Versión v1.0</li>
                <li>Usuarios en este entorno</li>
                <li>Tráfico: 100%</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f0f4c3',
              border: '2px solid #cddc39',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#827717', marginTop: 0 }}>🟢 Verde (Nuevo)</h4>
              <p style={{ fontSize: '0.9rem' }}>
                Nueva versión desplegada
              </p>
              <ul style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                <li>Versión v1.1</li>
                <li>Sin usuarios aún</li>
                <li>Tests en este entorno</li>
              </ul>
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff9e6',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            padding: '1.5rem',
            margin: '2rem 0'
          }}>
            <h4 style={{ color: '#f57f17', marginTop: 0 }}>Proceso Blue/Green</h4>
            <div style={{ fontSize: '0.9rem', lineHeight: '2' }}>
              1️⃣ <strong>Green arranca:</strong> Nueva versión en servidores nuevos
              <br />
              2️⃣ <strong>Tests:</strong> Ejecuta smoke tests en verde (sin impactar azul)
              <br />
              3️⃣ <strong>Cambio de tráfico:</strong> ALB redirige tráfico de azul → verde
              <br />
              4️⃣ <strong>Monitoreo:</strong> Observa verde con usuarios reales
              <br />
              5️⃣ <strong>Rollback (si falla):</strong> ALB vuelve a dirigir tráfico a azul inmediatamente
              <br />
              6️⃣ <strong>Después (sin prisa):</strong> Borra el ambiente azul antiguo
            </div>
          </div>

          <InfoBox type="tip" title="Ventajas">
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>Cero downtime:</strong> Cambio de tráfico en segundos</li>
              <li><strong>Rollback inmediato:</strong> Si hay problema, vuelves a azul</li>
              <li><strong>Tests reales:</strong> Pruebas en el nuevo entorno antes de recibir usuarios</li>
              <li><strong>Confidence:</strong> Sabes que puedes desplegar sin miedo</li>
            </ul>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Contenedores y ECS',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para despliegues modernos, empaquetas tu aplicación en un <strong>contenedor Docker</strong> e imploy AWS ECS (Elastic Container Service).
          </p>

          <CodeBlock
            code={`# Dockerfile para Spring Boot

FROM amazoncorretto:21-alpine

WORKDIR /app

# Copiar JAR compilado
COPY target/guttman-app.jar .

# Exponer puerto
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Comando de inicio
ENTRYPOINT ["java", "-jar", "guttman-app.jar"]`}
            language="dockerfile"
            title="Dockerfile para Spring Boot"
          />

          <Table
            headers={['Aspecto', 'Servidor tradicional', 'Contenedor + ECS']}
            rows={[
              ['Despliegue', 'SSH + scripts manuales', 'Push imagen → ECS auto-redeploy'],
              ['Rollback', 'Restaurar versión anterior', 'Cambiar tag de imagen'],
              ['Escalado', 'Tiempo (comprar servidor)', 'Instantáneo (nueva tarea)'],
              ['Ambiente consistente', 'Puede diferir entre servidores', 'Garantizado (imagen)'],
              ['CI/CD integration', 'Complejo', 'Natural (DockerHub → ECR → ECS)']
            ]}
          />

          <div style={{
            backgroundColor: '#e8f5e9',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#2e7d32', marginTop: 0 }}>Pipeline con Contenedores</h4>
            <div style={{ fontSize: '0.9rem', lineHeight: '2' }}>
              1. GitHub → push a main
              <br />
              2. CodeBuild → build JAR + Docker image
              <br />
              3. Push imagen a ECR (Elastic Container Registry)
              <br />
              4. CodeDeploy → actualiza ECS con nueva imagen
              <br />
              5. ECS → reemplaza tareas antiguas con nuevas
              <br />
              6. ALB → tráfico fluye automáticamente a nuevas tareas
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Mejores Prácticas de Despliegue',
      content: (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            margin: '1.5rem 0'
          }}>
            {[
              {
                title: '✅ Versiona tu infraestructura',
                icon: '📝',
                description: 'Guarda CloudFormation y buildspec en Git junto con el código'
              },
              {
                title: '✅ Tests automáticos',
                icon: '🧪',
                description: 'Ejecuta tests unitarios, integración y humo en cada despliegue'
              },
              {
                title: '✅ Ambientes idénticos',
                icon: '🔄',
                description: 'Dev/staging/prod con la misma infraestructura (diferentes parámetros)'
              },
              {
                title: '✅ Monitoreo post-deploy',
                icon: '📊',
                description: 'Alarmas que detecten errores en los primeros minutos'
              },
              {
                title: '✅ Rollback rápido',
                icon: '⏮️',
                description: 'Estrategia blue/green o revert a imagen anterior en segundos'
              },
              {
                title: '✅ Despliegues frecuentes',
                icon: '🚀',
                description: 'Pequeños cambios frecuentes son más seguros que releases grandes'
              }
            ].map((practice, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.2rem'
              }}>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{practice.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: 0 }}>
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="Despliegue e Infraestructura como Código"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
