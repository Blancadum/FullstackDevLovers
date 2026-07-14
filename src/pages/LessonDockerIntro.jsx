import { useState } from 'react';
import { LessonTemplate, CodeBlock } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerIntro() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [selectedCommand, setSelectedCommand] = useState(null);

  const commands = {
    hello: {
      name: 'docker run hello-world',
      output: `$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:7d246653d0511db2a6b2e0436cfd0e52ac8c2193490d0c389188765dccc10d28
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.`
    },
    ps: {
      name: 'docker ps',
      output: `$ docker ps
CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS          PORTS     NAMES
a1b2c3d4e5f6   nginx:latest   "nginx"       2 minutes ago   Up 2 minutes    80/tcp    webserver
b2c3d4e5f6a7   postgres       "postgres"    15 minutes ago  Up 15 minutes   5432/tcp  database`
    },
    images: {
      name: 'docker images',
      output: `$ docker images
REPOSITORY          TAG       IMAGE ID       CREATED       SIZE
nginx               latest    4cdc5dd7eaad   2 weeks ago   142MB
postgres            latest    a0eed9e9c74e   2 weeks ago   379MB
hello-world         latest    d1165f221d74   5 months ago  13.3kB
ubuntu              22.04     2ab64b6b8cc5   3 weeks ago   77.8MB`
    },
    clean: {
      name: 'docker system prune',
      output: `$ docker system prune
WARNING! This will remove:
  - all stopped containers
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] y
Deleted Containers:
c3d4e5f6a7b8
d4e5f6a7b8c9

Deleted Images:
sha256:f1a2b3c4d5e6

Total reclaimed space: 523.2MB`
    }
  };

  const sections = [
    {
      title: 'Vocabulario Técnico',
      content: (
        <>
          <h3>Dockerfile</h3>
          <p>
            Archivo de texto plano con instrucciones para construir una imagen. Por ejemplo, especificar qué sistema operativo usar, qué carpetas copiar y qué comandos ejecutar.
          </p>

          <h3>Imagen (Image)</h3>
          <p>
            Plantilla inmutable de solo lectura con tu aplicación y todas sus dependencias empaquetadas. Por ejemplo, un DVD de instalación o un molde para pastel que define la forma final.
          </p>

          <h3>Contenedor (Container)</h3>
          <p>
            Instancia en ejecución, viva y temporal, creada a partir de una Imagen. Por ejemplo, el pastel ya horneado o un programa ejecutándose en RAM.
          </p>

          <h3>Volumen (Volume)</h3>
          <p>
            Almacenamiento persistente fuera del contenedor para mantener datos incluso si el contenedor se elimina. Por ejemplo, un disco duro externo USB conectado.
          </p>
        </>
      )
    },

    {
      title: 'El Ciclo de Vida de Docker',
      content: (
        <>
          <h3>Paso 1: Configurar (Código)</h3>
          <p><strong>Archivo: Dockerfile</strong></p>
          <p>
            Creas un archivo de texto donde declaras qué sistema operativo base usar, qué carpetas copiar, qué dependencias instalar y qué comandos ejecutar.
          </p>

          <h3>Paso 2: Construir (Empaquetar)</h3>
          <p><strong>Comando: docker build</strong></p>
          <p>
            Docker lee tu Dockerfile y crea una Imagen estática. Es como compilar código fuente en un ejecutable: toma instrucciones y genera un producto terminado.
          </p>

          <h3>Paso 3: Ejecutar (Cobrar vida)</h3>
          <p><strong>Comando: docker run</strong></p>
          <p>
            Docker crea una instancia viva a partir de la Imagen: nace un Contenedor. Aquí es donde tu aplicación comienza a procesar datos en tiempo real.
          </p>

          <h3>Paso 4: Distribuir (Opcional)</h3>
          <p><strong>Comando: docker push / pull</strong></p>
          <p>
            Subes la Imagen a Docker Hub o a un registro privado. Otros desarrolladores pueden descargarla y ejecutarla sin necesidad de reconstruirla.
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
          <p>La interacción con Docker se realiza a través de la terminal (CLI). Haz clic en los botones para ver la salida simulada:</p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {Object.entries(commands).map(([key, cmd]) => (
              <button
                key={key}
                onClick={() => setSelectedCommand(selectedCommand === key ? null : key)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: selectedCommand === key ? '#2196F3' : '#f0f0f0',
                  color: selectedCommand === key ? 'white' : '#333',
                  border: selectedCommand === key ? '2px solid #1976D2' : '2px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {cmd.name}
              </button>
            ))}
          </div>

          {selectedCommand && (
            <div style={{
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              padding: '1.5rem',
              borderRadius: '8px',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.9rem',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              border: '1px solid #404040'
            }}>
              {commands[selectedCommand].output}
            </div>
          )}
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
