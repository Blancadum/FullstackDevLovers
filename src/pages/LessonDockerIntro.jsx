import { LessonTemplate, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerIntro() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Vocabulario Técnico',
      content: (
        <>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#666' }}>
            Términos esenciales que usarás diariamente al trabajar con Docker:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Dockerfile */}
            <div style={{
              backgroundColor: '#FFF3E0',
              border: '2px solid #F57C00',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📄</div>
              <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#E65100', fontSize: '1.1rem' }}>Dockerfile</h4>
              <p style={{ marginBottom: '1rem', color: '#555' }}>
                Archivo de texto plano con instrucciones para construir una imagen. Especifica qué sistema operativo usar, qué carpetas copiar y qué comandos ejecutar.
              </p>
              <div style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', fontSize: '0.9rem', color: '#F57C00', fontStyle: 'italic' }}>
                <strong>Analogía:</strong> Receta de cocina o planos arquitectónicos.
              </div>
            </div>

            {/* Imagen */}
            <div style={{
              backgroundColor: '#E3F2FD',
              border: '2px solid #1976D2',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📦</div>
              <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1565C0', fontSize: '1.1rem' }}>Imagen (Image)</h4>
              <p style={{ marginBottom: '1rem', color: '#555' }}>
                Plantilla inmutable de solo lectura con tu aplicación y todas sus dependencias empaquetadas. Lista para ser ejecutada.
              </p>
              <div style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', fontSize: '0.9rem', color: '#1976D2', fontStyle: 'italic' }}>
                <strong>Analogía:</strong> DVD de instalación o molde para pastel.
              </div>
            </div>

            {/* Contenedor */}
            <div style={{
              backgroundColor: '#E8F5E9',
              border: '2px solid #388E3C',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🐳</div>
              <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#2E7D32', fontSize: '1.1rem' }}>Contenedor (Container)</h4>
              <p style={{ marginBottom: '1rem', color: '#555' }}>
                Instancia en ejecución, viva y temporal, creada a partir de una Imagen. Aquí tu aplicación realmente funciona y procesa datos.
              </p>
              <div style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', fontSize: '0.9rem', color: '#388E3C', fontStyle: 'italic' }}>
                <strong>Analogía:</strong> Pastel ya horneado o programa ejecutándose en RAM.
              </div>
            </div>

            {/* Volumen */}
            <div style={{
              backgroundColor: '#F3E5F5',
              border: '2px solid #7B1FA2',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💾</div>
              <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#6A1B9A', fontSize: '1.1rem' }}>Volumen (Volume)</h4>
              <p style={{ marginBottom: '1rem', color: '#555' }}>
                Almacenamiento persistente fuera del contenedor para mantener datos incluso si el contenedor se elimina o reinicia.
              </p>
              <div style={{ backgroundColor: '#fff', padding: '0.75rem', borderRadius: '4px', fontSize: '0.9rem', color: '#7B1FA2', fontStyle: 'italic' }}>
                <strong>Analogía:</strong> Disco duro externo USB conectado permanentemente.
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Contenedores vs. Máquinas Virtuales',
      content: (
        <>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#666' }}>
            A menudo se confunden, pero tienen arquitecturas muy diferentes:
          </p>

          <svg viewBox="0 0 900 350" style={{ width: '100%', maxWidth: '900px', margin: '1.5rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* MÁQUINAS VIRTUALES */}
            <text x="225" y="25" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#D32F2F">Máquinas Virtuales (VM)</text>

            <rect x="50" y="40" width="350" height="280" fill="none" stroke="#D32F2F" strokeWidth="2" strokeDasharray="5,5" rx="5"/>

            <text x="225" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Host OS</text>

            <g>
              <rect x="70" y="80" width="310" height="50" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="1" rx="3"/>
              <text x="225" y="105" textAnchor="middle" fontSize="10" fill="#C62828">Hypervisor (VirtualBox, VMware, KVM)</text>
            </g>

            {/* VM 1 */}
            <g>
              <rect x="70" y="145" width="140" height="160" fill="#FFE0B2" stroke="#F57C00" strokeWidth="2" rx="3"/>
              <text x="140" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E65100">VM 1</text>
              <rect x="80" y="175" width="120" height="30" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="140" y="195" textAnchor="middle" fontSize="9" fill="#333">Guest OS</text>
              <rect x="80" y="210" width="120" height="30" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="140" y="230" textAnchor="middle" fontSize="9" fill="#333">App + Libs</text>
              <text x="140" y="290" textAnchor="middle" fontSize="8" fill="#999">~1-2 GB</text>
            </g>

            {/* VM 2 */}
            <g>
              <rect x="230" y="145" width="140" height="160" fill="#E1BEE7" stroke="#7B1FA2" strokeWidth="2" rx="3"/>
              <text x="300" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6A1B9A">VM 2</text>
              <rect x="240" y="175" width="120" height="30" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="300" y="195" textAnchor="middle" fontSize="9" fill="#333">Guest OS</text>
              <rect x="240" y="210" width="120" height="30" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="300" y="230" textAnchor="middle" fontSize="9" fill="#333">App + Libs</text>
              <text x="300" y="290" textAnchor="middle" fontSize="8" fill="#999">~1-2 GB</text>
            </g>

            {/* CONTENEDORES DOCKER */}
            <text x="675" y="25" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#388E3C">Contenedores Docker</text>

            <rect x="500" y="40" width="350" height="280" fill="none" stroke="#388E3C" strokeWidth="2" strokeDasharray="5,5" rx="5"/>

            <text x="675" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Host OS + Kernel Compartido</text>

            <g>
              <rect x="520" y="80" width="310" height="50" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1" rx="3"/>
              <text x="675" y="105" textAnchor="middle" fontSize="10" fill="#2E7D32">Docker Engine</text>
            </g>

            {/* Container 1 */}
            <g>
              <rect x="520" y="145" width="100" height="160" fill="#C8E6C9" stroke="#388E3C" strokeWidth="2" rx="3"/>
              <text x="570" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1B5E20">Container 1</text>
              <rect x="530" y="180" width="80" height="25" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="570" y="197" textAnchor="middle" fontSize="8" fill="#333">App + Libs</text>
              <text x="570" y="290" textAnchor="middle" fontSize="8" fill="#999">~50-300 MB</text>
            </g>

            {/* Container 2 */}
            <g>
              <rect x="635" y="145" width="100" height="160" fill="#C8E6C9" stroke="#388E3C" strokeWidth="2" rx="3"/>
              <text x="685" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1B5E20">Container 2</text>
              <rect x="645" y="180" width="80" height="25" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="685" y="197" textAnchor="middle" fontSize="8" fill="#333">App + Libs</text>
              <text x="685" y="290" textAnchor="middle" fontSize="8" fill="#999">~50-300 MB</text>
            </g>

            {/* Container 3 */}
            <g>
              <rect x="750" y="145" width="100" height="160" fill="#C8E6C9" stroke="#388E3C" strokeWidth="2" rx="3"/>
              <text x="800" y="165" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1B5E20">Container 3</text>
              <rect x="760" y="180" width="80" height="25" fill="#fff" stroke="#999" strokeWidth="1" rx="2"/>
              <text x="800" y="197" textAnchor="middle" fontSize="8" fill="#333">App + Libs</text>
              <text x="800" y="290" textAnchor="middle" fontSize="8" fill="#999">~50-300 MB</text>
            </g>
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ backgroundColor: '#FFEBEE', padding: '1rem', borderRadius: '8px', border: '2px solid #D32F2F' }}>
              <h4 style={{ marginTop: 0, color: '#D32F2F' }}>Máquinas Virtuales</h4>
              <ul style={{ fontSize: '0.9rem', margin: 0, paddingLeft: '1.2rem' }}>
                <li>Empacan un SO completo (pesado)</li>
                <li>1-2 GB por VM</li>
                <li>Minutos en arrancar</li>
                <li>Caras en recursos</li>
                <li>5-10 VMs por host</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#E8F5E9', padding: '1rem', borderRadius: '8px', border: '2px solid #388E3C' }}>
              <h4 style={{ marginTop: 0, color: '#388E3C' }}>Contenedores Docker</h4>
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
      title: 'El Ciclo de Vida de Docker',
      content: (
        <>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#666' }}>
            Docker sigue un flujo estricto. Cada paso es necesario y en orden:
          </p>

          <svg viewBox="0 0 700 500" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Círculo central */}
            <circle cx="350" cy="250" r="140" fill="none" stroke="#ddd" strokeWidth="2" strokeDasharray="5,5"/>

            {/* Step 1 - Top Left */}
            <circle cx="280" cy="140" r="40" fill="#FFF3E0" stroke="#F57C00" strokeWidth="3"/>
            <text x="280" y="155" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#E65100">1</text>
            <text x="280" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Configurar</text>
            <text x="280" y="215" textAnchor="middle" fontSize="10" fill="#999">Dockerfile</text>

            {/* Arrow 1->2 */}
            <path d="M 310 160 Q 370 100 420 140" fill="none" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Step 2 - Top Right */}
            <circle cx="420" cy="140" r="40" fill="#E3F2FD" stroke="#1976D2" strokeWidth="3"/>
            <text x="420" y="155" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1565C0">2</text>
            <text x="420" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Construir</text>
            <text x="420" y="215" textAnchor="middle" fontSize="10" fill="#999">docker build</text>

            {/* Arrow 2->3 */}
            <path d="M 440 180 Q 450 250 420 310" fill="none" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Step 3 - Bottom Right */}
            <circle cx="420" cy="360" r="40" fill="#E8F5E9" stroke="#388E3C" strokeWidth="3"/>
            <text x="420" y="375" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#2E7D32">3</text>
            <text x="420" y="420" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Ejecutar</text>
            <text x="420" y="435" textAnchor="middle" fontSize="10" fill="#999">docker run</text>

            {/* Arrow 3->4 */}
            <path d="M 390 330 Q 330 300 280 360" fill="none" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Step 4 - Bottom Left */}
            <circle cx="280" cy="360" r="40" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="3"/>
            <text x="280" y="375" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#6A1B9A">4</text>
            <text x="280" y="420" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Distribuir</text>
            <text x="280" y="435" textAnchor="middle" fontSize="10" fill="#999">docker push</text>

            {/* Arrow 4->1 (cierre) */}
            <path d="M 260 320 Q 200 250 260 180" fill="none" stroke="#999" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Center text */}
            <text x="350" y="250" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#999">Ciclo</text>
            <text x="350" y="268" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#999">Continuo</text>

            {/* Arrow marker */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#999" />
              </marker>
            </defs>
          </svg>

          <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '2rem', textAlign: 'center', fontStyle: 'italic' }}>
            El ciclo es continuo: puedes repetir Build → Run → Distribuir múltiples veces durante el desarrollo.
          </p>
        </>
      )
    },

    {
      title: 'Optimización de Imágenes',
      content: (
        <>
          <h3>El Problema: Imágenes Enormes</h3>
          <p>
            Muchos desarrolladores cometen el error de incluir TODO en la imagen final: código fuente, herramientas de build, node_modules, archivos temporales. Esto genera imágenes de 1-2GB que son lentas de descargar, subir y ejecutar.
          </p>
          <p>
            La solución es usar <strong>Multi-stage builds</strong>: crear una imagen de build (con todas las herramientas) y luego una imagen de runtime (solo lo esencial).
          </p>

          <h3>❌ MAL: Imagen de 1.5GB (Todo dentro)</h3>
          <p>
            Este Dockerfile incluye todo lo innecesario en la imagen final: código fuente, node_modules, herramientas de build. Resultado: imagen enorme y lenta.
          </p>
          <CodeBlock
            language="dockerfile"
            code={`FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]

# Resultado: node_modules, src, tools de build... TODO en la imagen final`}
          />
          <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', borderRadius: '4px', color: '#856404' }}>
            <strong>Problema:</strong> La imagen contiene 1.5GB porque incluye:
            <br/>• node_modules (puede ser 500MB+)
            <br/>• Código fuente sin compilar
            <br/>• Herramientas de build (webpack, babel, etc.)
            <br/>• Archivos temporales y de desarrollo
          </p>

          <h3 style={{ marginTop: '2rem' }}>✅ BIEN: Imagen de 50MB (Solo lo esencial)</h3>
          <p>
            Este Dockerfile usa <strong>multi-stage build</strong>: primero compila el código, luego copia solo los archivos compilados a una imagen limpia. Resultado: imagen pequeña y eficiente.
          </p>
          <CodeBlock
            language="dockerfile"
            code={`# ETAPA 1: BUILD (con todas las herramientas)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: RUNTIME (imagen limpia, solo lo esencial)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist .
EXPOSE 3000
CMD ["node", "server.js"]

# Resultado: solo dist/ en la imagen final`}
          />
          <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#d4edda', borderLeft: '4px solid #28a745', borderRadius: '4px', color: '#155724' }}>
            <strong>Ventaja:</strong> La imagen final contiene solo 50MB porque:
            <br/>• Usa node:18-alpine (imagen base ligera)
            <br/>• Solo copia el código compilado (dist/)
            <br/>• node_modules queda en la etapa de build (no en la imagen final)
            <br/>• Sin archivos de desarrollo ni herramientas innecesarias
          </p>

          <h3 style={{ marginTop: '2rem' }}>¿Cómo Funciona el Multi-stage Build?</h3>
          <p>
            <strong>Etapa 1 (builder):</strong> Usa la imagen completa de Node para compilar tu código. Aquí es normal que sea grande (tiene herramientas de build).
          </p>
          <p>
            <strong>Etapa 2 (runtime):</strong> Usa una imagen alpine (mucho más pequeña) e importa solo lo compilado de la etapa anterior con <code>COPY --from=builder</code>.
          </p>
          <p>
            <strong>Resultado:</strong> Docker descarta la etapa 1 automáticamente, así que la imagen final es pequeña y rápida.
          </p>
        </>
      )
    },

    {
      title: 'Comandos Esenciales',
      content: (
        <>
          <p>
            La interacción con Docker se realiza a través de la terminal (CLI). Los comandos principales permiten ejecutar, gestionar y limpiar contenedores e imágenes.
          </p>

          <h3>docker run — Ejecutar un contenedor</h3>
          <p>
            Crea e inicia un nuevo contenedor a partir de una imagen. Si la imagen no existe localmente, Docker la descarga automáticamente desde Docker Hub.
          </p>
          <CodeBlock language="bash" code={`docker run hello-world`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <strong>Salida esperada:</strong> Docker descarga la imagen hello-world, la ejecuta y muestra un mensaje de confirmación. Si la imagen ya existe, solo la ejecuta.
          </p>

          <h3>docker ps — Listar contenedores en ejecución</h3>
          <p>
            Muestra todos los contenedores que están actualmente corriendo. Cada contenedor tiene un ID único, nombre y estado.
          </p>
          <CodeBlock language="bash" code={`docker ps`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <strong>Salida esperada:</strong> Tabla con columnas: CONTAINER ID, IMAGE, COMMAND, CREATED, STATUS, PORTS, NAMES.
          </p>

          <h3>docker images — Listar todas las imágenes locales</h3>
          <p>
            Muestra todas las imágenes Docker que tienes descargadas en tu máquina. Incluye el tamaño de cada imagen, lo cual es importante para optimizar.
          </p>
          <CodeBlock language="bash" code={`docker images`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <strong>Salida esperada:</strong> Tabla con REPOSITORY, TAG, IMAGE ID, CREATED, SIZE. Aquí ves cuánto espacio ocupan tus imágenes.
          </p>

          <h3>docker system prune — Limpiar recursos no usados</h3>
          <p>
            Elimina contenedores parados, imágenes sin usar y caché de build. Es importante ejecutar esto regularmente para liberar espacio en disco.
          </p>
          <CodeBlock language="bash" code={`docker system prune`} />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            <strong>Advertencia:</strong> Esto es destructivo. Docker te pide confirmación antes de eliminar. Usa <code>-a</code> para eliminar también imágenes sin usar.
          </p>
        </>
      )
    }
  ];

  const keyPoints = [
    'Dockerfile: archivo de configuración para construir imágenes',
    'Imagen: plantilla inmutable con aplicación y dependencias',
    'Contenedor: instancia viva y efímera de una imagen',
    'Volumen: almacenamiento persistente para datos',
    'docker build: compila Dockerfile en una imagen',
    'docker run: crea y ejecuta un contenedor',
    'docker ps: lista contenedores en ejecución',
    'docker images: lista imágenes disponibles',
    'docker push/pull: distribuye imágenes en registros'
  ];

  const summary = `Docker: Containerización de Aplicaciones

CONCEPTOS CLAVE:
• Dockerfile: Receta para construir imágenes
• Imagen: Plantilla estática con aplicación completa
• Contenedor: Instancia viva que ejecuta la aplicación
• Volumen: Almacenamiento persistente

CICLO DE VIDA:
1. Configurar → Escribir Dockerfile
2. Construir → docker build (crea imagen)
3. Ejecutar → docker run (inicia contenedor)
4. Distribuir → docker push (sube a Docker Hub)

COMANDOS BÁSICOS:
• docker run <imagen>: Ejecutar aplicación
• docker ps: Ver contenedores activos
• docker images: Ver imágenes disponibles
• docker stop <container>: Detener contenedor
• docker rm <container>: Eliminar contenedor
• docker rmi <imagen>: Eliminar imagen

VENTAJAS:
• Portabilidad: funciona igual en cualquier máquina
• Aislamiento: evita conflictos de dependencias
• Escalabilidad: fácil replicar contenedores
• DevOps: acelera ciclo desarrollo-producción`;

  return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={[]}
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
