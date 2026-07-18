import { useState } from 'react';
import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDocker() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [expandedQuiz, setExpandedQuiz] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState(['$ # Haz clic en un comando para ejecutarlo']);

  const concepts = [
    {
      icon: '🐳',
      title: 'Docker',
      definition: 'Plataforma de containerización que empaqueta aplicaciones en contenedores aislados',
      example: 'Aplicación + dependencias + kernel compartido en un paquete portable'
    },
    {
      icon: '📦',
      title: 'Contenedor',
      definition: 'Instancia ejecutable y viva creada a partir de una Imagen',
      example: 'Lightweight, portable, aislado del sistema operativo'
    },
    {
      icon: '💿',
      title: 'Imagen Docker',
      definition: 'Plantilla inmutable de solo lectura que contiene la aplicación y dependencias',
      example: 'Como el CD-ROM de instalación de un juego o un molde de pastel'
    },
    {
      icon: '📝',
      title: 'Dockerfile',
      definition: 'Archivo de texto con instrucciones paso a paso para construir una imagen',
      example: 'Especifica SO base, instala dependencias, copia código, configura puertos'
    },
    {
      icon: '💾',
      title: 'Volumen',
      definition: 'Mecanismo para guardar datos de forma persistente fuera del contenedor',
      example: 'Disco duro externo USB conectado al contenedor (Named o Bind Mount)'
    },
    {
      icon: '🌐',
      title: 'Red Docker',
      definition: 'Red privada virtual que permite comunicación entre contenedores',
      example: 'DNS interno, bridge networks, port mapping'
    }
  ];

  const executeCommand = (cmd) => {
    const commandOutputs = {
      'docker run hello-world': [
        "$ docker run hello-world",
        "Unable to find image 'hello-world:latest' locally",
        "latest: Pulling from library/hello-world",
        "c1ec31eb5944: Pull complete",
        "Digest: sha256:4bd78111b6914a99dbc560e6a20eab57ff6655aea4a80c50b0c5491968cbc2e6",
        "Status: Downloaded newer image for hello-world:latest",
        "",
        "Hello from Docker!",
        "This message shows that your installation appears to be working correctly."
      ],
      'docker ps': [
        "$ docker ps",
        "CONTAINER ID   IMAGE         COMMAND    CREATED         STATUS         PORTS     NAMES",
        "9b2c3d4e5f6a   nginx:alpine  \"nginx...\" 2 minutes ago   Up 2 minutes   80/tcp    web-server-01"
      ],
      'docker images': [
        "$ docker images",
        "REPOSITORY    TAG       IMAGE ID       CREATED        SIZE",
        "nginx         alpine    a1b2c3d4e5f6   2 days ago     41.2MB",
        "hello-world   latest    d1165f221234   3 months ago   13.3kB"
      ],
      'docker stop 1a2b3c': [
        "$ docker stop 1a2b3c",
        "Error response from daemon: No such container: 1a2b3c"
      ]
    };
    setTerminalOutput(commandOutputs[cmd] || ['Comando no encontrado']);
  };

  const exercises = [
    {
      title: 'Crear Dockerfile para aplicación Node.js',
      description: 'Empaqueta una aplicación web simple en Docker',
      solution: `FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`
    },
    {
      title: 'Docker Compose con Backend y BD',
      description: 'Define múltiples contenedores (web + MySQL)',
      solution: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: mysql://db:3306/app

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secreta123
      MYSQL_DATABASE: app`
    },
    {
      title: 'Multi-Stage Build (Reducir tamaño)',
      description: 'Compilar en grande, empaquetar en pequeño',
      solution: `FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist .
EXPOSE 3000
CMD ["node", "server.js"]`
    }
  ];

  const sections = [
    {
      title: 'El Problema que Resuelve Docker',
      content: (
        <>
          <p className="text-lg font-semibold mb-4">
            "Funciona en mi máquina, pero falla en la del cliente o en el servidor."
          </p>
          <p className="mb-4">
            Docker es una plataforma de código abierto que permite empaquetar, distribuir y ejecutar aplicaciones dentro de entornos aislados y estandarizados llamados <strong>contenedores</strong>.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-4">La Analogía del Transporte Marítimo</h4>
          <p className="mb-4">
            Antes de Docker, el desarrollo era como el transporte antiguo: llevar pianos, sacos de café y maquinaria en el mismo barco requería métodos de carga diferentes para cada cosa. Lento, a medida y propenso a errores.
          </p>
          <p className="mb-6">
            Docker estandarizó esto creando el equivalente al <strong>contenedor marítimo de acero</strong> para el software. Al servidor ya no le importa si dentro hay Java, Python o MySQL. Solo necesita saber cómo levantar, apilar y transportar contenedores estándar.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: '#FFF8E1',
              border: '2px solid #FFA726',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(255, 167, 38, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 167, 38, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 167, 38, 0.1)';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>📦</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#E65100', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Empaquetado Universal</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', textAlign: 'center', margin: 0 }}>Lleva tu código, librerías y configuración en un solo paquete cerrado.</p>
            </div>

            <div style={{
              backgroundColor: '#F3E5F5',
              border: '2px solid #9C27B0',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(156, 39, 176, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(156, 39, 176, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(156, 39, 176, 0.1)';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>🛡️</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#6A1B9A', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Aislamiento Total</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', textAlign: 'center', margin: 0 }}>Lo que pasa en un contenedor no afecta al sistema ni a otros contenedores.</p>
            </div>

            <div style={{
              backgroundColor: '#E0F2F1',
              border: '2px solid #00897B',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(0, 137, 123, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 137, 123, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 137, 123, 0.1)';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>⚡</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#004D47', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Arranque Rápido</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', textAlign: 'center', margin: 0 }}>Inicia en milisegundos, no en minutos como VMs.</p>
            </div>

            <div style={{
              backgroundColor: '#E8F5E9',
              border: '2px solid #388E3C',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(56, 142, 60, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(56, 142, 60, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(56, 142, 60, 0.1)';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>💾</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1B5E20', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Ligero y Escalable</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', textAlign: 'center', margin: 0 }}>Megabytes en lugar de Gigabytes, 100+ contenedores simultáneamente.</p>
            </div>
          </div>

          <InfoBox type="info">
            A diferencia de máquinas virtuales, los contenedores usan el kernel del host, pesan Megabytes (no Gigabytes) y arrancan en milisegundos.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Contenedores vs. Máquinas Virtuales',
      content: (
        <>
          <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: '#555' }}>
            Es muy común confundir Docker con VM, pero resuelven el problema de forma distinta. La diferencia fundamental está en <strong>qué parte del sistema virtualizan</strong>.
          </p>

          <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', minHeight: '500px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* MÁQUINAS VIRTUALES */}
            <text x="250" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#D32F2F">Máquinas Virtuales (VM)</text>

            <rect x="50" y="60" width="400" height="400" fill="none" stroke="#D32F2F" strokeWidth="3" strokeDasharray="8,5" rx="8"/>

            <text x="250" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Host OS</text>

            <g>
              <rect x="80" y="120" width="340" height="70" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="5"/>
              <text x="250" y="160" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#C62828">Hypervisor (VirtualBox, VMware)</text>
            </g>

            {/* VM 1 */}
            <g>
              <rect x="80" y="210" width="160" height="230" fill="#FFE0B2" stroke="#F57C00" strokeWidth="3" rx="5"/>
              <text x="160" y="235" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">VM 1</text>
              <rect x="100" y="255" width="120" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="160" y="285" textAnchor="middle" fontSize="12" fill="#333">Guest OS</text>
              <rect x="100" y="310" width="120" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="160" y="340" textAnchor="middle" fontSize="12" fill="#333">App + Libs</text>
              <text x="160" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E65100">~1-2 GB</text>
            </g>

            {/* VM 2 */}
            <g>
              <rect x="260" y="210" width="160" height="230" fill="#E1BEE7" stroke="#7B1FA2" strokeWidth="3" rx="5"/>
              <text x="340" y="235" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6A1B9A">VM 2</text>
              <rect x="280" y="255" width="120" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="340" y="285" textAnchor="middle" fontSize="12" fill="#333">Guest OS</text>
              <rect x="280" y="310" width="120" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="340" y="340" textAnchor="middle" fontSize="12" fill="#333">App + Libs</text>
              <text x="340" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6A1B9A">~1-2 GB</text>
            </g>

            {/* CONTENEDORES DOCKER */}
            <text x="750" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#388E3C">Contenedores Docker</text>

            <rect x="550" y="60" width="400" height="400" fill="none" stroke="#388E3C" strokeWidth="3" strokeDasharray="8,5" rx="8"/>

            <text x="750" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Host OS + Kernel Compartido</text>

            <g>
              <rect x="580" y="120" width="340" height="70" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="5"/>
              <text x="750" y="160" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">Docker Engine</text>
            </g>

            {/* Container 1 */}
            <g>
              <rect x="580" y="210" width="95" height="230" fill="#C8E6C9" stroke="#388E3C" strokeWidth="3" rx="5"/>
              <text x="628" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B5E20">C1</text>
              <rect x="595" y="255" width="65" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="628" y="285" textAnchor="middle" fontSize="11" fill="#333">App</text>
              <rect x="595" y="310" width="65" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="628" y="340" textAnchor="middle" fontSize="11" fill="#333">Libs</text>
              <text x="628" y="390" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2E7D32">~100 MB</text>
            </g>

            {/* Container 2 */}
            <g>
              <rect x="685" y="210" width="95" height="230" fill="#C8E6C9" stroke="#388E3C" strokeWidth="3" rx="5"/>
              <text x="733" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B5E20">C2</text>
              <rect x="700" y="255" width="65" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="733" y="285" textAnchor="middle" fontSize="11" fill="#333">App</text>
              <rect x="700" y="310" width="65" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="733" y="340" textAnchor="middle" fontSize="11" fill="#333">Libs</text>
              <text x="733" y="390" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2E7D32">~100 MB</text>
            </g>

            {/* Container 3 */}
            <g>
              <rect x="790" y="210" width="95" height="230" fill="#C8E6C9" stroke="#388E3C" strokeWidth="3" rx="5"/>
              <text x="838" y="235" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B5E20">C3</text>
              <rect x="805" y="255" width="65" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="838" y="285" textAnchor="middle" fontSize="11" fill="#333">App</text>
              <rect x="805" y="310" width="65" height="45" fill="#fff" stroke="#999" strokeWidth="2" rx="3"/>
              <text x="838" y="340" textAnchor="middle" fontSize="11" fill="#333">Libs</text>
              <text x="838" y="390" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2E7D32">~100 MB</text>
            </g>
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ backgroundColor: '#FFEBEE', padding: '1rem', borderRadius: '8px', border: '2px solid #D32F2F' }}>
              <h4 style={{ marginTop: 0, color: '#D32F2F', marginBottom: '1rem' }}>Máquinas Virtuales</h4>
              <ul style={{ fontSize: '0.9rem', margin: 0, paddingLeft: '1.2rem' }}>
                <li>Empacan un SO completo (pesado)</li>
                <li>1-2 GB por VM</li>
                <li>Minutos en arrancar</li>
                <li>Caras en recursos</li>
                <li>5-10 VMs por host</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#E8F5E9', padding: '1rem', borderRadius: '8px', border: '2px solid #388E3C' }}>
              <h4 style={{ marginTop: 0, color: '#388E3C', marginBottom: '1rem' }}>Contenedores Docker</h4>
              <ul style={{ fontSize: '0.9rem', margin: 0, paddingLeft: '1.2rem' }}>
                <li>Comparten el kernel del host</li>
                <li>50-300 MB por contenedor</li>
                <li>Milisegundos en arrancar</li>
                <li>Ligeros en recursos</li>
                <li>100+ contenedores por host</li>
              </ul>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Vocabulario Técnico',
      content: (
        <>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#666' }}>
            Términos esenciales que usarás a diario al trabajar con contenedores:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: '#FFF3E0',
              border: '2px solid #F57C00',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(245, 124, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(245, 124, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(245, 124, 0, 0.1)';
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>📄</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.4rem', color: '#E65100', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Dockerfile</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', marginBottom: '0.5rem', textAlign: 'center', margin: 0 }}>Archivo de texto con instrucciones para construir una imagen.</p>
              <p style={{ fontSize: '0.75rem', color: '#F57C00', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>Analogía: receta de cocina</p>
            </div>

            <div style={{
              backgroundColor: '#E3F2FD',
              border: '2px solid #1976D2',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(25, 118, 210, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(25, 118, 210, 0.1)';
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>📦</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.4rem', color: '#1565C0', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Imagen (Image)</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', marginBottom: '0.5rem', textAlign: 'center', margin: 0 }}>Plantilla inmutable con tu aplicación y dependencias.</p>
              <p style={{ fontSize: '0.75rem', color: '#1976D2', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>Analogía: molde de pastel</p>
            </div>

            <div style={{
              backgroundColor: '#E8F5E9',
              border: '2px solid #388E3C',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(56, 142, 60, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(56, 142, 60, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(56, 142, 60, 0.1)';
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>🐳</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.4rem', color: '#2E7D32', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Contenedor (Container)</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', marginBottom: '0.5rem', textAlign: 'center', margin: 0 }}>Instancia viva y efímera de una Imagen ejecutándose.</p>
              <p style={{ fontSize: '0.75rem', color: '#388E3C', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>Analogía: programa en RAM</p>
            </div>

            <div style={{
              backgroundColor: '#F3E5F5',
              border: '2px solid #7B1FA2',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(123, 31, 162, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(123, 31, 162, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(123, 31, 162, 0.1)';
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>💾</div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.4rem', color: '#6A1B9A', fontSize: '0.95rem', textAlign: 'center', margin: 0 }}>Volumen (Volume)</h5>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: '1.4', marginBottom: '0.5rem', textAlign: 'center', margin: 0 }}>Almacenamiento persistente fuera del contenedor.</p>
              <p style={{ fontSize: '0.75rem', color: '#7B1FA2', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>Analogía: disco duro USB</p>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'El Ciclo de Vida de Docker',
      content: (
        <>
          <p style={{ marginBottom: '2rem', color: '#666' }}>El uso de Docker sigue un orden estricto. Saltarse un paso rompe el proceso:</p>

          <div style={{ display: 'space-y', gap: '1.5rem' }}>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '2rem',
              padding: '1.25rem',
              backgroundColor: '#FFF3E0',
              border: '2px solid #FF9800',
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                minWidth: '50px',
                backgroundColor: '#FF9800',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>1</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', fontWeight: 'bold', color: '#E65100' }}>Configurar (Código)</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.95rem' }}>Creas un documento de texto declarando qué SO base usar, qué carpetas copiar y qué comandos ejecutar.</p>
                <p style={{ margin: 0, color: '#FF9800', fontSize: '0.95rem', fontFamily: 'monospace', fontWeight: '500' }}>📄 Archivo: <strong>Dockerfile</strong></p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '2rem',
              padding: '1.25rem',
              backgroundColor: '#E3F2FD',
              border: '2px solid #2196F3',
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                minWidth: '50px',
                backgroundColor: '#2196F3',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>2</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', fontWeight: 'bold', color: '#1565C0' }}>Construir (Empaquetar)</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.95rem' }}>Docker lee tu Dockerfile y crea una <strong>Imagen</strong> estática. Similar a compilar código fuente en ejecutable.</p>
                <p style={{ margin: 0, color: '#2196F3', fontSize: '0.95rem', fontFamily: 'monospace', fontWeight: '500' }}>⚙️ Comando: <strong>docker build</strong></p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '2rem',
              padding: '1.25rem',
              backgroundColor: '#E8F5E9',
              border: '2px solid #4CAF50',
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                minWidth: '50px',
                backgroundColor: '#4CAF50',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>3</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', fontWeight: 'bold', color: '#2E7D32' }}>Ejecutar (Cobrar vida)</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.95rem' }}>Docker crea una instancia viva: un <strong>Contenedor</strong>. Aquí tu aplicación empieza a procesar datos.</p>
                <p style={{ margin: 0, color: '#4CAF50', fontSize: '0.95rem', fontFamily: 'monospace', fontWeight: '500' }}>▶️ Comando: <strong>docker run</strong></p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '1.25rem',
              backgroundColor: '#F3E5F5',
              border: '2px solid #9C27B0',
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                minWidth: '50px',
                backgroundColor: '#9C27B0',
                color: 'white',
                borderRadius: '50%',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>4</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', fontWeight: 'bold', color: '#6A1B9A' }}>Distribuir (Opcional)</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.95rem' }}>Subes la Imagen a Docker Hub o a un registro privado para que otros desarrolladores puedan descargarla y ejecutarla.</p>
                <p style={{ margin: 0, color: '#9C27B0', fontSize: '0.95rem', fontFamily: 'monospace', fontWeight: '500' }}>📤 Comando: <strong>docker push / pull</strong></p>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Comandos Esenciales',
      content: (
        <>
          <p className="mb-6">La interacción con Docker se realiza a través de la terminal (CLI). Los comandos básicos son:</p>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>docker run — Ejecutar un contenedor</h4>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Crea e inicia un nuevo contenedor a partir de una imagen.</p>
          <CodeBlock language="bash" code={`docker run hello-world`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.75rem' }}>Descarga la imagen, la ejecuta y muestra un mensaje de confirmación.</p>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>docker ps — Listar contenedores en ejecución</h4>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Muestra todos los contenedores actualmente corriendo con sus detalles.</p>
          <CodeBlock language="bash" code={`docker ps`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.75rem', marginBottom: '1rem' }}>Para incluir también contenedores detenidos:</p>
          <CodeBlock language="bash" code={`docker ps -a`} />

          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>docker images — Listar todas las imágenes locales</h4>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Muestra todas las imágenes Docker que tienes descargadas, incluyendo tamaño.</p>
          <CodeBlock language="bash" code={`docker images`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.75rem', marginBottom: '1rem' }}>Para filtrar por nombre:</p>
          <CodeBlock language="bash" code={`docker images | grep mi-app`} />

          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>docker build — Construir una imagen</h4>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Construye una imagen a partir de un Dockerfile.</p>
          <CodeBlock language="bash" code={`docker build -t mi-app:1.0 .`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.75rem', marginBottom: '1rem' }}>Sin usar caché (rebuild completo):</p>
          <CodeBlock language="bash" code={`docker build --no-cache -t mi-app:1.0 .`} />

          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}>docker stop/rm — Detener y eliminar</h4>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Detiene un contenedor en ejecución o lo elimina completamente.</p>
          <CodeBlock language="bash" code={`docker stop id-contenedor       # Detiene gracefully
docker rm id-contenedor          # Elimina el contenedor
docker rmi nombre-imagen         # Elimina la imagen`} />

          <InfoBox type="info" className="mt-6">
            <code>docker run</code> es inteligente: si le pides ejecutar una imagen que no tienes, primero hace un <code>pull</code> automático desde Docker Hub.
          </InfoBox>

          <CodeBlock
            language="bash"
            code={`# IMÁGENES
docker build -t mi-app:1.0 .          # Construir imagen
docker images                          # Listar imágenes
docker rmi mi-app:1.0                  # Eliminar imagen

# CONTENEDORES
docker run -p 8080:8080 mi-app:1.0    # Ejecutar
docker ps                              # Contenedores activos
docker ps -a                           # Todos los contenedores
docker stop id                         # Parar contenedor
docker rm id                           # Eliminar

# INFORMACIÓN
docker logs id                         # Ver logs
docker exec -it id bash                # Entrar al contenedor`}
          />
        </>
      )
    },

    {
      title: 'Tu Primer Dockerfile',
      content: (
        <>
          <p className="mb-4">Imagina una aplicación web en Node.js. Así es como escribirías un Dockerfile:</p>

          <CodeBlock
            language="dockerfile"
            code={`FROM node:18-alpine
# Imagen base oficial de Node.js ligera

WORKDIR /app
# Creamos y nos movemos a la carpeta /app dentro del contenedor

COPY package.json package-lock.json ./
# Copiamos los archivos de dependencias primero

RUN npm install
# Instalamos las librerías necesarias

COPY . .
# Copiamos el resto del código fuente

EXPOSE 3000
# Indicamos que el contenedor escuchará en el puerto 3000

CMD ["node", "server.js"]
# Comando que arranca la aplicación cuando despierte`}
          />

          <p className="mt-4">Una vez guardado este archivo en tu carpeta, ejecutas:</p>
          <CodeBlock
            language="bash"
            code={`docker build -t mi-app-node .`}
          />
        </>
      )
    },

    {
      title: 'Docker Compose: Orquestación',
      content: (
        <>
          <p className="mb-4">
            En la vida real, una aplicación rara vez vive en un solo contenedor. Usualmente necesitas servidor web + base de datos + caché.
            <strong> Docker Compose</strong> permite definir múltiples contenedores en un solo archivo YAML:
          </p>

          <CodeBlock
            language="yaml"
            code={`version: '3.8'

services:
  # Servidor web Node.js
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: mysql://db:3306/app

  # Base de datos MySQL
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secreta123
      MYSQL_DATABASE: mi_app_db`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <p className="text-sm font-mono text-blue-700 mb-1">docker-compose up -d</p>
              <p className="text-xs text-blue-600">Levanta toda la infraestructura en segundo plano.</p>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded">
              <p className="text-sm font-mono text-red-700 mb-1">docker-compose down</p>
              <p className="text-xs text-red-600">Apaga y destruye todos los contenedores.</p>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Volúmenes: Persistencia',
      content: (
        <>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem', color: '#555' }}>
            Los contenedores borran todo al ser destruidos. Para guardar datos de forma permanente, usamos <strong>Volúmenes</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
              <h3 className="font-bold mb-3 flex items-center gap-2 text-lg text-blue-900">
                <span className="text-2xl">📦</span> Named Volumes
              </h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#555', lineHeight: '1.5' }}>Docker los gestiona 100%. Tú das un nombre (ej. mysql_data) y Docker lo guarda en una ubicación oculta.</p>
              <p style={{ fontSize: '0.9rem', color: '#059669', marginBottom: '0.5rem', fontWeight: '500' }}>✓ Máximo rendimiento</p>
              <p style={{ fontSize: '0.9rem', color: '#059669', marginBottom: '1.25rem', fontWeight: '500' }}>✓ Independiente del SO</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#7C3AED', backgroundColor: '#F3E8FF', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>📋 CASO: Bases de datos en producción</p>
            </div>

            <div className="border-2 border-orange-300 rounded-lg p-5 bg-orange-50">
              <h3 className="font-bold mb-3 flex items-center gap-2 text-lg text-orange-900">
                <span className="text-2xl">📁</span> Bind Mounts
              </h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#555', lineHeight: '1.5' }}>Tú decides la ruta exacta. Conecta tu ordenador directamente al contenedor.</p>
              <p style={{ fontSize: '0.9rem', color: '#059669', marginBottom: '0.5rem', fontWeight: '500' }}>✓ Sincronización en tiempo real</p>
              <p style={{ fontSize: '0.9rem', color: '#DC2626', marginBottom: '1.25rem', fontWeight: '500' }}>✗ Depende de rutas locales</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#EA580C', backgroundColor: '#FFEDD5', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>🔄 CASO: Live-reload en desarrollo</p>
            </div>
          </div>

          <CodeBlock
            language="bash"
            code={`# Volumen nombrado
docker run -v datos:/app/datos mi-app:1.0

# Bind mount (ruta absoluta)
docker run -v /ruta/local:/app/datos mi-app:1.0

# En Docker Compose
volumes:
  - datos:/app/datos
  - ./local:/app/local`}
          />
        </>
      )
    },

    {
      title: 'Buenas Prácticas',
      content: (
        <>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem', color: '#555' }}>
            Cualquiera puede hacer que un contenedor funcione, pero las imágenes mal optimizadas pesan gigabytes y son lentas. Sigue estas prácticas:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: '#FFF3E0',
              border: '2px solid #F57C00',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(245, 124, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(245, 124, 0, 0.1)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🪶</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#E65100', margin: 0 }}>Imágenes Ligeras</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5', margin: 0 }}>Prefiere <code style={{ backgroundColor: '#fff', padding: '0.2rem 0.4rem', borderRadius: '3px', fontFamily: 'monospace' }}>node:18-alpine</code> (170MB) sobre <code style={{ backgroundColor: '#fff', padding: '0.2rem 0.4rem', borderRadius: '3px', fontFamily: 'monospace' }}>node:18</code> (1GB+).</p>
            </div>

            <div style={{
              backgroundColor: '#F3E5F5',
              border: '2px solid #9C27B0',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(156, 39, 176, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(156, 39, 176, 0.1)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🙈</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#6A1B9A', margin: 0 }}>.dockerignore</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5', margin: 0 }}>Evita copiar node_modules, .git, logs al contenedor como .gitignore.</p>
            </div>

            <div style={{
              backgroundColor: '#E8F5E9',
              border: '2px solid #388E3C',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(56, 142, 60, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(56, 142, 60, 0.1)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧍</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#2E7D32', margin: 0 }}>Un Proceso</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5', margin: 0 }}>Un contenedor = una responsabilidad. No mezcles Apache con MySQL en el mismo Dockerfile.</p>
            </div>

            <div style={{
              backgroundColor: '#E0F2F1',
              border: '2px solid #00897B',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 137, 123, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 137, 123, 0.1)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#004D47', margin: 0 }}>Multi-Stage</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5', margin: 0 }}>Compila pesado, empaquet ligero. Reduce de 1GB a 30MB sin perder funcionalidad.</p>
            </div>
          </div>

          <CodeBlock
            language="dockerfile"
            code={`# ✓ MULTI-STAGE BUILD

# Etapa 1: Builder (pesada)
FROM node:18 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Runtime (ligera)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80`}
          />
        </>
      )
    },

    {
      title: 'Frameworks Populares',
      content: (
        <>
          <p className="mb-6" style={{ fontSize: '1.05rem', color: '#555' }}>Docker cambia cómo empaques diferentes tecnologías:</p>

          <div className="space-y-6">
            <div className="border-2 border-red-300 rounded-lg p-5 bg-red-50">
              <h3 className="font-bold text-red-900 mb-3 text-lg">🐍 Python + venv</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#555', lineHeight: '1.5' }}>Con Docker desaparece la necesidad de venv. El contenedor es el entorno aislado definitivo. Instala librerías directamente sin conflictos.</p>
              <CodeBlock
                language="dockerfile"
                code={`FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`}
              />
            </div>

            <div className="border-2 border-purple-300 rounded-lg p-5 bg-purple-50">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">☕ Java + Spring Boot</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#555', lineHeight: '1.5' }}>Spring Boot embebe un servidor (Tomcat) dentro del JAR. Docker solo necesita Java y ejecutar el JAR. Simple y elegante.</p>
              <CodeBlock
                language="dockerfile"
                code={`FROM openjdk:11-jre-slim

WORKDIR /app

COPY target/app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]`}
              />
            </div>

            <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">⚛️ Frontend (React/Angular) - Multi-Stage</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#555', lineHeight: '1.5' }}>Compila el frontend (etapa 1, pesada), luego sirve archivos estáticos con Nginx (etapa 2, ligera). Resultado: 20-30MB.</p>
              <CodeBlock
                language="dockerfile"
                code={`# Etapa 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor web
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80`}
              />
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Ponte a Prueba',
      content: (
        <>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem', color: '#555' }}>Lee estas situaciones e intenta responder. Haz clic para ver la solución.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: '#E3F2FD',
                border: '2px solid #2196F3',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(33, 150, 243, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => setExpandedQuiz(expandedQuiz === 1 ? null : 1)}
            >
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  minWidth: '50px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>1</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#1565C0' }}>🔄 Código Modificado</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>Modificas una línea de código en tu app. ¿Basta reiniciar el contenedor o debes construir una nueva Imagen?</p>
                </div>
              </div>
              {expandedQuiz === 1 && (
                <div style={{ backgroundColor: '#1E88E5', color: 'white', padding: '1.5rem', borderTop: '2px solid #2196F3' }}>
                  <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: 'bold', color: '#4FC3F7' }}>✓ Debes construir una nueva Imagen</h5>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Los contenedores son efímeros. Se crean a partir de imágenes <strong>inmutables</strong>. Si el código cambia, la receta debe volver a cocinarse con <code style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>docker build</code>.</p>
                </div>
              )}
            </div>

            <div
              style={{
                backgroundColor: '#FFF3E0',
                border: '2px solid #FF9800',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 152, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => setExpandedQuiz(expandedQuiz === 2 ? null : 2)}
            >
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  minWidth: '50px',
                  backgroundColor: '#FF9800',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>2</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#E65100' }}>💾 Datos Perdidos</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>Tu contenedor de base de datos se detiene y es eliminado. Sin volumen configurado, ¿qué ocurre con los datos?</p>
                </div>
              </div>
              {expandedQuiz === 2 && (
                <div style={{ backgroundColor: '#FB8C00', color: 'white', padding: '1.5rem', borderTop: '2px solid #FF9800' }}>
                  <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: 'bold', color: '#FFE0B2' }}>✗ Se pierden para siempre</h5>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Por defecto, los datos viven en una "capa temporal" atada a ese contenedor. Al eliminarse, <strong>desaparece todo</strong>. Por eso es OBLIGATORIO usar <strong>Volúmenes</strong> para bases de datos en producción.</p>
                </div>
              )}
            </div>

            <div
              style={{
                backgroundColor: '#E8F5E9',
                border: '2px solid #4CAF50',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(76, 175, 80, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => setExpandedQuiz(expandedQuiz === 3 ? null : 3)}
            >
              <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  minWidth: '50px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>3</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#2E7D32' }}>⚖️ Imagen Gigante</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#555' }}>Tienes un Dockerfile que genera una imagen de 1.5GB. ¿Cuál es la técnica para reducirla a 50MB sin perder funcionalidad?</p>
                </div>
              </div>
              {expandedQuiz === 3 && (
                <div style={{ backgroundColor: '#388E3C', color: 'white', padding: '1.5rem', borderTop: '2px solid #4CAF50' }}>
                  <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: 'bold', color: '#C8E6C9' }}>✓ Multi-Stage Builds</h5>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Etapa 1 (builder): Compila/construye con herramientas pesadas. Etapa 2 (runtime): Copia solo lo necesario a imagen ligera. Descarta el builder automáticamente. Resultado: <strong>1.5GB → 50MB</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </>
      )
    }
  ];

  const keyPoints = [
    'Docker empaqueta aplicaciones en contenedores ligeros y portables',
    'Imagen Docker es plantilla read-only, Contenedor es instancia viva',
    'Dockerfile define paso a paso cómo construir una imagen',
    'docker build construye, docker run ejecuta, docker push distribuye',
    'Contenedores usan el kernel del host (ligeros) vs VMs con SO completo',
    'Volúmenes persistentes vs datos efímeros del contenedor',
    'Docker Compose orquesta múltiples contenedores con un YAML',
    'DNS interno en Docker permite conectar contenedores por nombre',
    'Multi-Stage Builds reduce tamaño final de 1GB+ a 30-50MB',
    'Named Volumes para producción, Bind Mounts para desarrollo'
  ];

  const summary = `Docker revoluciona el desarrollo y despliegue:

• Contenedores empaquetan app + dependencias en aislamiento
• Portables entre máquinas, desarrollo y producción
• Dockerfile define la receta, docker build genera imagen
• docker run crea instancias vivas con aislamiento de procesos
• Más ligeros que VMs (Megabytes vs Gigabytes)
• Volúmenes permiten persistencia de datos
• Docker Compose maneja múltiples servicios
• Escalabilidad horizontal mediante orquestación (Kubernetes)
• Industria estándar: la mayoría de apps en producción usan Docker`;

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