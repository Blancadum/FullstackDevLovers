import { useState } from 'react';
import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAWSVPC() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'VPC — Virtual Private Cloud',
      content: (
        <>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Una <strong>VPC</strong> es tu red privada dentro de AWS. Define el rango de direcciones IP, creas subredes, controlas el enrutamiento y decides qué tiene acceso a internet y qué no. Sin una VPC bien diseñada, tu infraestructura es tan segura como dejar todas las puertas abiertas.
          </p>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Piensa en VPC como la red local de tu empresa. El Internet Gateway es el router que conecta a internet. Las subredes privadas son como una red interna sin acceso directo a internet.
          </p>

          <InfoBox type="security" title="Seguridad por defecto">
            Por defecto, todos los recursos en una VPC son privados. Nada es accesible desde internet salvo que explícitamente lo hagas público. Este es el modelo correcto: <strong>cierre por defecto, apertura excepcional</strong>.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Componentes principales de una VPC',
      content: (
        <>
          <Table
            headers={['Componente', 'Qué es', 'Analogía']}
            rows={[
              [
                'VPC',
                'Red virtual completa aislada',
                'La red de tu empresa (LAN)'
              ],
              [
                'Subred Pública',
                'Subred con acceso directo a internet',
                'DMZ (zona desmilitarizada)'
              ],
              [
                'Subred Privada',
                'Subred sin acceso directo a internet',
                'Red interna segura'
              ],
              [
                'Internet Gateway (IGW)',
                'Puerta de enlace que conecta VPC con internet',
                'Router de salida hacia internet'
              ],
              [
                'NAT Gateway',
                'Permite a subredes privadas salir a internet (sin entrar)',
                'Proxy de salida'
              ],
              [
                'Route Table',
                'Tabla de enrutamiento: qué tráfico va a dónde',
                'Tabla de rutas del router'
              ],
              [
                'Security Group',
                'Firewall a nivel de instancia (stateful)',
                'Firewall de host'
              ],
              [
                'Network ACL',
                'Firewall a nivel de subred (stateless)',
                'ACL del switch'
              ]
            ]}
          />
        </>
      )
    },

    {
      title: 'Direccionamiento IP — CIDR',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Al crear una VPC, defines su rango de direcciones IP usando notación CIDR (Classless Inter-Domain Routing). Por ejemplo, <code>10.0.0.0/16</code> significa 65,536 IPs disponibles.
          </p>

          <CodeBlock
            code={`# Ejemplo de arquitectura de 3 capas para Laboratorio Guttman

VPC: 10.0.0.0/16  (65,536 IPs)
├─ PÚBLICA eu-west-1a:   10.0.1.0/24  (254 IPs)
│  └─ Application Load Balancer
├─ PÚBLICA eu-west-1b:   10.0.2.0/24  (254 IPs)
│  └─ Backup ALB / NAT Gateway
│
├─ APLICACIÓN PRIVADA eu-west-1a: 10.0.11.0/24  (254 IPs)
│  └─ Instancias EC2 (Spring Boot)
├─ APLICACIÓN PRIVADA eu-west-1b: 10.0.12.0/24  (254 IPs)
│  └─ Instancias EC2 (Spring Boot)
│
├─ DATOS PRIVADA eu-west-1a: 10.0.21.0/24  (254 IPs)
│  └─ RDS PostgreSQL
├─ DATOS PRIVADA eu-west-1b: 10.0.22.0/24  (254 IPs)
│  └─ RDS PostgreSQL (replica)

# Rationale:
# - Subredes públicas solo tienen ALB y NAT (punto de entrada/salida)
# - Subredes de aplicación en 2 AZ (HA)
# - Subredes de datos en 2 AZ (Multi-AZ RDS)`}
            language="text"
            title="Planificación de CIDR para 3 capas"
          />

          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#0d47a1', marginTop: 0 }}>Cálculo de CIDR</h4>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li><code>/16</code> = 2^(32-16) = 65,536 IPs</li>
              <li><code>/24</code> = 2^(32-24) = 256 IPs (254 usables: 2 reservadas)</li>
              <li><code>/25</code> = 128 IPs (126 usables)</li>
              <li><code>/32</code> = 1 IP (host individual)</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'Security Groups — Firewall de Instancia',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            <strong>Security Groups</strong> son firewalls virtuales a nivel de instancia. Controlan qué tráfico puede entrar (inbound) y salir (outbound) de una instancia EC2, RDS, ALB, etc.
          </p>

          <CodeBlock
            code={`# Security Group recomendado para ALB público

Inbound rules:
├─ Protocol: TCP, Port: 443 (HTTPS), Source: 0.0.0.0/0
├─ Protocol: TCP, Port: 80 (HTTP), Source: 0.0.0.0/0
│  └─ Recomendación: redirige a 443
└─ (No SSH 22 en ALB público)

Outbound rules:
└─ Protocol: All, Destination: 0.0.0.0/0 (default)


# Security Group para EC2 de aplicación (privada)

Inbound rules:
├─ Protocol: TCP, Port: 8080, Source: <ALB Security Group ID>
└─ Protocol: TCP, Port: 22, Source: <Bastion SG ID>  (solo para admin)

Outbound rules:
├─ Protocol: TCP, Port: 5432, Destination: <RDS SG ID>  (PostgreSQL)
├─ Protocol: TCP, Port: 6379, Destination: <Cache SG ID>  (Redis)
├─ Protocol: TCP, Port: 443, Destination: 0.0.0.0/0  (HTTPS para AWS APIs)
└─ Protocol: UDP, Port: 53, Destination: 0.0.0.0/0  (DNS)


# Security Group para RDS de base de datos (privada)

Inbound rules:
└─ Protocol: TCP, Port: 5432, Source: <EC2 SG ID>

Outbound rules:
└─ None needed (RDS no inicia conexiones)`}
            language="text"
            title="Security Groups para 3 capas"
          />

          <InfoBox type="tip" title="Best practice">
            Usa <strong>referencias de security groups</strong> en lugar de IPs. Cuando alejas un SG a otro SG, los cambios son automáticos. Evita <code>0.0.0.0/0</code> excepto para HTTP/HTTPS en ALB público.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Route Tables — Enrutamiento de Tráfico',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Las <strong>Route Tables</strong> definen cómo se enruta el tráfico dentro y fuera de la VPC. Cada subred tiene una tabla de rutas asociada. El tráfico destinado a cierto rango de IPs se envía a un destino específico.
          </p>

          <CodeBlock
            code={`# Route Table para subred PÚBLICA

Destination     Target                 Status
10.0.0.0/16     local                  Active  (tráfico interno VPC)
0.0.0.0/0       igw-123456789          Active  (todo lo demás → Internet Gateway)

Resultado: instancia pública puede hablar con internet


# Route Table para subred PRIVADA

Destination     Target                 Status
10.0.0.0/16     local                  Active  (tráfico interno VPC)
0.0.0.0/0       nat-123456789          Active  (salida solo por NAT Gateway)

Resultado: instancia privada puede salir a internet PERO no recibir conexiones entrantes


# Comandos AWS CLI para crear route table

# Crear tabla
aws ec2 create-route-table --vpc-id vpc-12345678

# Agregar ruta a Internet Gateway
aws ec2 create-route \
  --route-table-id rtb-12345678 \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id igw-87654321

# Asociar con subred
aws ec2 associate-route-table \
  --route-table-id rtb-12345678 \
  --subnet-id subnet-abcd1234`}
            language="text"
            title="Route Tables ejemplo"
          />
        </>
      )
    },

    {
      title: 'Internet Gateway vs NAT Gateway',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Ambos permiten conexiones con internet, pero con diferencias cruciales:
          </p>

          <Table
            headers={['Aspecto', 'Internet Gateway (IGW)', 'NAT Gateway']}
            rows={[
              ['Para qué', 'Conexiones bidireccionales (entrada y salida)', 'Solo salida (sin entrada directa)'],
              ['Ubicación', 'Subred pública', 'Subred pública'],
              ['Costo', 'Gratuito', 'Pagado por GB procesado'],
              ['Escalabilidad', 'Única por VPC', 'Una por AZ para HA'],
              ['Caso de uso', 'ALB público, EC2 con IP pública', 'EC2 privada que actualiza software'],
              ['Estructura', 'Internet ↔ Subred pública', 'Subred privada → NAT → Internet']
            ]}
          />

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#e65100', marginTop: 0 }}>Arquitectura típica</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              La configuración más común para máxima seguridad:
            </p>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.7', marginBottom: 0 }}>
              <li><strong>ALB:</strong> en subred pública, expuesto a internet (0.0.0.0/0)</li>
              <li><strong>EC2 aplicación:</strong> en subred privada, sin IP pública, tras ALB</li>
              <li><strong>RDS:</strong> en subred privada, solo accesible desde EC2</li>
              <li><strong>NAT Gateway:</strong> en subred pública, permite que EC2 privada salga a internet para updates</li>
            </ul>
          </div>
        </>
      )
    },

    {
      title: 'VPN y Direct Connect',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para conectar tu red física (oficina, datacenter) con tu VPC en AWS:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            margin: '2rem 0'
          }}>
            <div style={{
              backgroundColor: '#e8eaf6',
              border: '2px solid #3f51b5',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#1a237e', marginTop: 0 }}>AWS Site-to-Site VPN</h4>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                <li><strong>Qué es:</strong> Conexión cifrada por internet</li>
                <li><strong>Velocidad:</strong> Hasta 1.25 Gbps</li>
                <li><strong>Costo:</strong> Bajo (por hora + transferencia)</li>
                <li><strong>Configuración:</strong> Rápida (horas)</li>
                <li><strong>Ideal para:</strong> Oficinas pequeñas, conexiones ocasionales</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#f0f4c3',
              border: '2px solid #cddc39',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#827717', marginTop: 0 }}>AWS Direct Connect</h4>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                <li><strong>Qué es:</strong> Enlace físico dedicado</li>
                <li><strong>Velocidad:</strong> Hasta 100 Gbps</li>
                <li><strong>Costo:</strong> Alto (por puerto + transferencia)</li>
                <li><strong>Configuración:</strong> Lenta (semanas, requiere instalación física)</li>
                <li><strong>Ideal para:</strong> Datacenters, conexiones críticas estables</li>
              </ul>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'VPC Peering y Transit Gateway',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Cuando tienes múltiples VPCs que necesitan comunicarse:
          </p>

          <Table
            headers={['Solución', 'Caso de uso', 'Costo']}
            rows={[
              [
                'VPC Peering',
                'Conectar 2 VPCs directamente (mismo o diferente account)',
                'Bajo (solo transferencia de datos)'
              ],
              [
                'Transit Gateway',
                'Hub central para múltiples VPCs, VPN, Direct Connect',
                'Medio (por hora + transferencia)'
              ],
              [
                'PrivateLink',
                'Exponer servicios de una VPC a otra sin exponerse a internet',
                'Bajo (por hora + transferencia)'
              ]
            ]}
          />

          <InfoBox type="tip" title="Recomendación">
            Para la mayoría de organizaciones medianas, <strong>Transit Gateway</strong> es la solución más escalable. Permite crear un hub central que conecta todas las redes (VPCs, oficinas, datacenters) de forma ordenada.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Ejemplo: VPC de 3 capas con Terraform',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Definir una VPC con Terraform es el mejor enfoque para infraestructura como código:
          </p>

          <CodeBlock
            code={`# Usando Terraform para crear VPC segura

# 1. VPC
resource "aws_vpc" "guttman" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = { Name = "guttman-vpc" }
}

# 2. Internet Gateway
resource "aws_internet_gateway" "guttman" {
  vpc_id = aws_vpc.guttman.id
  tags   = { Name = "guttman-igw" }
}

# 3. Subredes públicas
resource "aws_subnet" "public_1a" {
  vpc_id                  = aws_vpc.guttman.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "eu-west-1a"
  map_public_ip_on_launch = true
  tags                    = { Name = "public-1a" }
}

# 4. Subredes privadas
resource "aws_subnet" "private_app_1a" {
  vpc_id            = aws_vpc.guttman.id
  cidr_block        = "10.0.11.0/24"
  availability_zone = "eu-west-1a"
  tags              = { Name = "private-app-1a" }
}

resource "aws_subnet" "private_db_1a" {
  vpc_id            = aws_vpc.guttman.id
  cidr_block        = "10.0.21.0/24"
  availability_zone = "eu-west-1a"
  tags              = { Name = "private-db-1a" }
}

# 5. Route table pública
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.guttman.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.guttman.id
  }
  tags = { Name = "public-rt" }
}

# 6. Route table privada
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.guttman.id
  # Sin ruta a internet (privada) o con NAT Gateway
  tags = { Name = "private-rt" }
}

# 7. Asociar subredes con route tables
resource "aws_route_table_association" "public_1a" {
  subnet_id      = aws_subnet.public_1a.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private_app_1a" {
  subnet_id      = aws_subnet.private_app_1a.id
  route_table_id = aws_route_table.private.id
}`}
            language="hcl"
            title="VPC con Terraform"
          />
        </>
      )
    },

    {
      title: 'Ejemplo Práctico: Crear VPC con Subnets Públicas y Privadas',
      content: (
        <>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En este ejemplo, crearemos una VPC completa de 3 capas usando AWS Console y luego la automatizaremos con Terraform.
          </p>

          <h3>Paso 1: Crear VPC en AWS Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>VPC → VPCs → Create VPC</strong></li>
            <li>Configurar:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>Name tag: <strong>guttman-vpc</strong></li>
                <li>IPv4 CIDR: <strong>10.0.0.0/16</strong></li>
                <li>Dejar otros valores por defecto</li>
                <li>Click <strong>Create VPC</strong></li>
              </ul>
            </li>
          </ol>

          <h3>Paso 2: Crear Internet Gateway</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>VPC → Internet Gateways → Create Internet Gateway</strong></li>
            <li>Name: <strong>guttman-igw</strong></li>
            <li>Click <strong>Create</strong></li>
            <li>Seleccionar el IGW creado y hacer <strong>Attach to VPC</strong></li>
            <li>Seleccionar <strong>guttman-vpc</strong></li>
          </ol>

          <h3>Paso 3: Crear Subredes Públicas (2 AZ para HA)</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Primera subred pública:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>VPC → Subnets → Create Subnet</strong></li>
            <li>VPC ID: <strong>guttman-vpc</strong></li>
            <li>Subnet name: <strong>public-subnet-1a</strong></li>
            <li>Availability Zone: <strong>eu-west-1a</strong></li>
            <li>IPv4 CIDR block: <strong>10.0.1.0/24</strong></li>
            <li>Create, luego repetir para <strong>public-subnet-1b</strong> con CIDR <strong>10.0.2.0/24</strong> en eu-west-1b</li>
          </ol>

          <h3>Paso 4: Crear Subredes Privadas (Aplicación y Base de Datos)</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Crear 4 subredes privadas adicionales:
          </p>
          <CodeBlock language="text" title="Subredes privadas a crear">
{`Subnets privadas para aplicación:
├─ private-app-1a: 10.0.11.0/24 en eu-west-1a
└─ private-app-1b: 10.0.12.0/24 en eu-west-1b

Subnets privadas para base de datos:
├─ private-db-1a: 10.0.21.0/24 en eu-west-1a
└─ private-db-1b: 10.0.22.0/24 en eu-west-1b`}
          </CodeBlock>

          <h3>Paso 5: Crear Route Tables</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Route Table pública (con acceso a internet):
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>VPC → Route Tables → Create Route Table</strong></li>
            <li>Name: <strong>public-rt</strong></li>
            <li>VPC: <strong>guttman-vpc</strong></li>
            <li>Create</li>
            <li>Seleccionar la route table, ir a <strong>Routes</strong></li>
            <li>Click <strong>Edit routes</strong>, luego <strong>Add route</strong></li>
            <li>Destination: <strong>0.0.0.0/0</strong> → Target: <strong>Internet Gateway (guttman-igw)</strong></li>
            <li>Save</li>
            <li>Ir a <strong>Subnet associations</strong> y asociar <strong>public-subnet-1a</strong> y <strong>public-subnet-1b</strong></li>
          </ol>

          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem', marginTop: '2rem' }}>
            Route Table privada (sin acceso directo a internet):
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Crear otra route table llamada <strong>private-rt</strong></li>
            <li>NO agregar ruta a 0.0.0.0/0 (la VPC la crea automáticamente con "local")</li>
            <li>Asociar las subredes privadas: <strong>private-app-1a, private-app-1b, private-db-1a, private-db-1b</strong></li>
          </ol>

          <h3>Paso 6: Crear Security Groups</h3>
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Security Group para ALB público:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>VPC → Security Groups → Create Security Group</strong></li>
            <li>Name: <strong>alb-sg</strong></li>
            <li>VPC: <strong>guttman-vpc</strong></li>
            <li>Inbound rules:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>HTTP (80) from 0.0.0.0/0</li>
                <li>HTTPS (443) from 0.0.0.0/0</li>
              </ul>
            </li>
            <li>Create</li>
          </ol>

          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem', marginTop: '2rem' }}>
            Security Group para EC2 en privada:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Crear <strong>app-sg</strong> con VPC <strong>guttman-vpc</strong></li>
            <li>Inbound rules:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>TCP port 8080 from Security Group <strong>alb-sg</strong></li>
              </ul>
            </li>
          </ol>

          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem', marginTop: '2rem' }}>
            Security Group para RDS:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li>Crear <strong>rds-sg</strong> con VPC <strong>guttman-vpc</strong></li>
            <li>Inbound rules:
              <ul style={{ marginTop: '0.5rem' }}>
                <li>TCP port 5432 (PostgreSQL) from Security Group <strong>app-sg</strong></li>
              </ul>
            </li>
          </ol>

          <h3>Paso 7: Verificar en AWS Console</h3>
          <ol style={{ lineHeight: '2' }}>
            <li>Ir a <strong>VPC → Your VPCs</strong> y verificar que existe <strong>guttman-vpc</strong></li>
            <li>Ir a <strong>VPC → Subnets</strong> y listar todas las subredes creadas</li>
            <li>Ir a <strong>VPC → Internet Gateways</strong> y verificar que <strong>guttman-igw</strong> está attached</li>
            <li>Ir a <strong>VPC → Route Tables</strong> y verificar:
              <ul style={{ marginTop: '0.5rem' }}>
                <li><strong>public-rt</strong> tiene ruta 0.0.0.0/0 → igw</li>
                <li><strong>private-rt</strong> solo tiene ruta local</li>
              </ul>
            </li>
          </ol>

          <h3>Paso 8: Automatizar con Terraform</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Crear archivo <strong>vpc.tf</strong>:
          </p>
          <CodeBlock language="hcl" title="vpc.tf - Infraestructura como código">
{`# Provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-west-1"
}

# 1. VPC
resource "aws_vpc" "guttman" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "guttman-vpc"
  }
}

# 2. Internet Gateway
resource "aws_internet_gateway" "guttman" {
  vpc_id = aws_vpc.guttman.id

  tags = {
    Name = "guttman-igw"
  }
}

# 3. Subredes públicas
resource "aws_subnet" "public_1a" {
  vpc_id                  = aws_vpc.guttman.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "eu-west-1a"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1a"
  }
}

resource "aws_subnet" "public_1b" {
  vpc_id                  = aws_vpc.guttman.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "eu-west-1b"
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-1b"
  }
}

# 4. Subredes privadas (aplicación)
resource "aws_subnet" "private_app_1a" {
  vpc_id            = aws_vpc.guttman.id
  cidr_block        = "10.0.11.0/24"
  availability_zone = "eu-west-1a"

  tags = {
    Name = "private-app-subnet-1a"
  }
}

resource "aws_subnet" "private_app_1b" {
  vpc_id            = aws_vpc.guttman.id
  cidr_block        = "10.0.12.0/24"
  availability_zone = "eu-west-1b"

  tags = {
    Name = "private-app-subnet-1b"
  }
}

# 5. Subredes privadas (base de datos)
resource "aws_subnet" "private_db_1a" {
  vpc_id            = aws_vpc.guttman.id
  cidr_block        = "10.0.21.0/24"
  availability_zone = "eu-west-1a"

  tags = {
    Name = "private-db-subnet-1a"
  }
}

resource "aws_subnet" "private_db_1b" {
  vpc_id            = aws_vpc.guttman.id
  cidr_block        = "10.0.22.0/24"
  availability_zone = "eu-west-1b"

  tags = {
    Name = "private-db-subnet-1b"
  }
}

# 6. Route table pública
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.guttman.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.guttman.id
  }

  tags = {
    Name = "public-rt"
  }
}

# 7. Route table privada
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.guttman.id

  tags = {
    Name = "private-rt"
  }
}

# 8. Asociar subredes públicas con route table pública
resource "aws_route_table_association" "public_1a" {
  subnet_id      = aws_subnet.public_1a.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "public_1b" {
  subnet_id      = aws_subnet.public_1b.id
  route_table_id = aws_route_table.public.id
}

# 9. Asociar subredes privadas con route table privada
resource "aws_route_table_association" "private_app_1a" {
  subnet_id      = aws_subnet.private_app_1a.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_app_1b" {
  subnet_id      = aws_subnet.private_app_1b.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_db_1a" {
  subnet_id      = aws_subnet.private_db_1a.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_db_1b" {
  subnet_id      = aws_subnet.private_db_1b.id
  route_table_id = aws_route_table.private.id
}

# 10. Security Groups
resource "aws_security_group" "alb" {
  name        = "alb-sg"
  description = "Security group for ALB"
  vpc_id      = aws_vpc.guttman.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "alb-sg"
  }
}

resource "aws_security_group" "app" {
  name        = "app-sg"
  description = "Security group for EC2 application"
  vpc_id      = aws_vpc.guttman.id

  ingress {
    from_port       = 8080
    to_port         = 8080
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "app-sg"
  }
}

resource "aws_security_group" "rds" {
  name        = "rds-sg"
  description = "Security group for RDS database"
  vpc_id      = aws_vpc.guttman.id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.app.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "rds-sg"
  }
}

# Outputs
output "vpc_id" {
  value = aws_vpc.guttman.id
}

output "public_subnet_1a" {
  value = aws_subnet.public_1a.id
}

output "private_app_subnet_1a" {
  value = aws_subnet.private_app_1a.id
}

output "private_db_subnet_1a" {
  value = aws_subnet.private_db_1a.id
}`}
          </CodeBlock>

          <h3>Paso 9: Desplegar con Terraform</h3>
          <CodeBlock language="bash">
{`# Inicializar Terraform
terraform init

# Planificar (ver qué va a crear)
terraform plan

# Aplicar cambios
terraform apply

# Ver outputs (IDs de recursos)
terraform output`}
          </CodeBlock>

          <h3>Paso 10: Verificar Conectividad</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Para verificar que la VPC está bien configurada, lanzar una EC2 en subred pública y otra en privada:
          </p>
          <CodeBlock language="bash">
{`# Desde EC2 pública, verificar conectividad con privada
ssh -i key.pem ec2-user@PUBLIC_IP

# Dentro de EC2 pública
ping PRIVATE_IP_EC2_PRIVADA  # Debe funcionar

# Intentar SSH a EC2 privada (fallará sin Bastion)
ssh -i key.pem ec2-user@PRIVATE_IP_EC2_PRIVADA  # Timeout (privada sin acceso)`}
          </CodeBlock>

          <InfoBox type="success" title="✅ Completado">
            Has creado una VPC de 3 capas con infraestructura como código (Terraform). Ahora puedes:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.95rem' }}>
              <li>Lanzar ALB en subredes públicas</li>
              <li>Lanzar EC2 Spring Boot en subredes de aplicación</li>
              <li>Lanzar RDS PostgreSQL en subredes privadas</li>
            </ul>
          </InfoBox>

          <h3>Próximos Pasos Reales</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Crear <strong>NAT Gateway</strong> en subred pública para que instancias privadas accedan a internet</li>
            <li>Crear <strong>Bastion Host</strong> (EC2 en pública) para administrar instancias privadas</li>
            <li>Configurar <strong>CloudWatch Logs</strong> para VPC Flow Logs (ver tráfico de red)</li>
            <li>Implementar <strong>VPC Peering</strong> para conectar con otra VPC si es necesario</li>
            <li>Activar <strong>VPC Endpoints</strong> para acceder a servicios AWS sin salir de la VPC privada</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <LessonTemplate
      title="VPC — Redes Privadas en AWS"
      breadcrumbs={breadcrumbs}
      sections={sections}
    >
      <LessonNavigation current={nav.current} items={nav.items} />
    </LessonTemplate>
  );
}
