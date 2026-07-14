import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerfile() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📝',
      title: 'FROM',
      definition: 'Define la imagen base sobre la que construir',
      example: 'FROM node:18-alpine - Comienza con Node 18 ligero'
    },
    {
      icon: '📂',
      title: 'WORKDIR',
      definition: 'Establece el directorio de trabajo dentro del contenedor',
      example: 'WORKDIR /app - Todos los comandos siguientes van aquí'
    },
    {
      icon: '📋',
      title: 'COPY / ADD',
      definition: 'Copia archivos desde tu PC al contenedor',
      example: 'COPY package.json . - Copia package.json al contenedor'
    },
    {
      icon: '⚙️',
      title: 'RUN',
      definition: 'Ejecuta comandos durante la construcción',
      example: 'RUN npm install - Instala dependencias'
    },
    {
      icon: '🚪',
      title: 'EXPOSE',
      definition: 'Documenta qué puerto escucha la app',
      example: 'EXPOSE 3000 - La app escucha puerto 3000'
    },
    {
      icon: '▶️',
      title: 'CMD / ENTRYPOINT',
      definition: 'Comando que se ejecuta al iniciar el contenedor',
      example: 'CMD ["node", "server.js"] - Inicia la app'
    }
  ];

  const exercises = [
    {
      title: 'Escribir Dockerfile para Node.js',
      description: 'Crear Dockerfile para aplicación Express',
      solution: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`
    },
    {
      title: 'Dockerfile para Python FastAPI',
      description: 'Aplicación Python con FastAPI',
      solution: `FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`
    },
    {
      title: 'Optimizar Dockerfile con capas',
      description: 'Reordenar para mejor cacheo',
      solution: `# ✓ Optimizado
FROM node:18-alpine

WORKDIR /app

# Capa que cambia poco
COPY package*.json ./
RUN npm install

# Capa que cambia frecuentemente
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`
    }
  ];

  const sections = [
    {
      title: 'Estructura básica de Dockerfile',
      content: (
        <>
          <p className="mb-4">
            Un Dockerfile es un archivo de texto sin extensión que contiene instrucciones para construir una imagen.
            <strong> Cada línea crea una capa nueva en la imagen.</strong>
          </p>

          <CodeBlock
            language="dockerfile"
            code={`# Comentario: especificar imagen base
FROM node:18-alpine

# Comentario: establecer directorio de trabajo
WORKDIR /app

# Comentario: copiar archivos
COPY package*.json ./

# Comentario: instalar dependencias
RUN npm install

# Comentario: copiar código fuente
COPY . .

# Comentario: exponer puerto
EXPOSE 3000

# Comentario: comando de inicio
CMD ["node", "server.js"]`}
          />

          <InfoBox type="info">
            El archivo debe llamarse exactamente <code>Dockerfile</code> (sin extensión, con mayúscula D).
            Si quieres otro nombre, usa <code>docker build -f MiDockerfile .</code>
          </InfoBox>
        </>
      )
    },

    {
      title: 'Instrucciones principales',
      content: (
        <>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-blue-900 mb-2">FROM</h4>
              <p className="text-sm text-slate-600 mb-2">Siempre debe ser la primera instrucción (salvo ARGS). Define la imagen base.</p>
              <CodeBlock
                language="dockerfile"
                code={`FROM ubuntu:22.04        # SO completo (grande)
FROM node:18-alpine      # Node.js ligero
FROM python:3.10-slim    # Python minimalista
FROM scratch             # Imagen vacía (muy raro)`}
              />
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-green-900 mb-2">WORKDIR</h4>
              <p className="text-sm text-slate-600 mb-2">Establece el directorio de trabajo. Los siguientes comandos se ejecutan aquí.</p>
              <CodeBlock
                language="dockerfile"
                code={`WORKDIR /app
# Ahora estamos en /app
RUN npm install          # Instala en /app
COPY . .                 # Copia al contenedor /app`}
              />
              <p className="text-xs text-slate-500 mt-2">Si no existe, se crea automáticamente.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-purple-900 mb-2">COPY vs ADD</h4>
              <p className="text-sm text-slate-600 mb-2">Copian archivos, pero ADD es más "mágico" (descomprime, descarga URLs).</p>
              <CodeBlock
                language="dockerfile"
                code={`COPY package.json .         # Copiar archivo simple
COPY src/ /app/src/         # Copiar directorio
COPY . .                    # Copiar todo (respetando .dockerignore)

ADD file.tar.gz .           # Descomprime automáticamente
ADD https://example.com/app .  # Descarga de internet`}
              />
              <InfoBox type="info">
                <strong>Mejor práctica:</strong> Usa COPY por defecto. Solo usa ADD si realmente necesitas descompresión.
              </InfoBox>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-red-900 mb-2">RUN</h4>
              <p className="text-sm text-slate-600 mb-2">Ejecuta comandos durante la construcción (instalación de paquetes, compilación, etc).</p>
              <CodeBlock
                language="dockerfile"
                code={`# Shell form (usa /bin/sh)
RUN npm install

# Exec form (ejecuta directamente, sin shell)
RUN ["npm", "install"]

# Múltiples comandos (usar && para asegurar que se ejecutan)
RUN apt-get update && \\
    apt-get install -y curl && \\
    rm -rf /var/lib/apt/lists/*

# Cada RUN crea una capa
RUN npm install      # Capa 1
RUN npm run build    # Capa 2`}
              />
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-orange-900 mb-2">EXPOSE</h4>
              <p className="text-sm text-slate-600 mb-2">Documenta qué puerto escucha. <strong>No abre el puerto automáticamente.</strong></p>
              <CodeBlock
                language="dockerfile"
                code={`EXPOSE 3000
EXPOSE 8080 8081

# Para realmente abrir puerto, usa -p en docker run:
# docker run -p 3000:3000 mi-app`}
              />
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold text-yellow-900 mb-2">CMD vs ENTRYPOINT</h4>
              <p className="text-sm text-slate-600 mb-2">Definen qué se ejecuta al iniciar el contenedor. Son parecidos pero diferentes.</p>
              <CodeBlock
                language="dockerfile"
                code={`# CMD: puede ser reemplazado en línea de comandos
CMD ["node", "server.js"]
# Si haces: docker run mi-app bash → ejecuta bash, no server.js

# ENTRYPOINT: casi siempre se ejecuta
ENTRYPOINT ["node", "server.js"]
# Si haces: docker run mi-app bash → ejecuta node server.js bash

# Lo mejor: combinación
ENTRYPOINT ["node", "server.js"]
CMD []  # Argumentos por defecto (vacíos)`}
              />
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Otras instrucciones importantes',
      content: (
        <>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
              <h5 className="font-bold text-slate-800 mb-2">ENV</h5>
              <p className="text-sm text-slate-600 mb-2">Define variables de entorno dentro del contenedor</p>
              <CodeBlock
                language="dockerfile"
                code={`ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://localhost/mydb
ENV PORT=3000`}
              />
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
              <h5 className="font-bold text-slate-800 mb-2">LABEL</h5>
              <p className="text-sm text-slate-600 mb-2">Metadatos sobre la imagen</p>
              <CodeBlock
                language="dockerfile"
                code={`LABEL version="1.0"
LABEL maintainer="tu-email@ejemplo.com"
LABEL description="Mi aplicación Node.js"`}
              />
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
              <h5 className="font-bold text-slate-800 mb-2">USER</h5>
              <p className="text-sm text-slate-600 mb-2">Define usuario no-root para ejecutar procesos (seguridad)</p>
              <CodeBlock
                language="dockerfile"
                code={`RUN useradd -m appuser
USER appuser
# Ahora los comandos se ejecutan como appuser, no root`}
              />
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
              <h5 className="font-bold text-slate-800 mb-2">HEALTHCHECK</h5>
              <p className="text-sm text-slate-600 mb-2">Define cómo verificar si la app está saludable</p>
              <CodeBlock
                language="dockerfile"
                code={`HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost:3000/health || exit 1`}
              />
            </div>
          </div>
        </>
      )
    },

    {
      title: '.dockerignore',
      content: (
        <>
          <p className="mb-4">
            Similar a .gitignore. Especifica qué archivos NO copiar al construir la imagen.
            <strong> Esto reduce tamaño y mejora velocidad.</strong>
          </p>

          <CodeBlock
            language="text"
            code={`node_modules/
npm-debug.log
.env
.env.local
.git
.gitignore
dist/
build/
.DS_Store
*.md
.vscode/
.idea/
coverage/
.nyc_output/
.circleci/
README.md`}
          />

          <InfoBox type="success">
            <strong>Pro tip:</strong> Siempre crea .dockerignore. Evita que node_modules local, .git y otros archivos grandes se copien, ahorrando Megabytes en la imagen final.
          </InfoBox>
        </>
      )
    }
  ];

  const keyPoints = [
    'FROM debe ser la primera instrucción (define imagen base)',
    'WORKDIR establece directorio de trabajo dentro del contenedor',
    'COPY copia archivos del host al contenedor',
    'RUN ejecuta comandos durante construcción (crea capas)',
    'Cada instrucción crea una nueva capa en la imagen',
    'EXPOSE documenta puertos pero no los abre automáticamente',
    'CMD es reemplazable, ENTRYPOINT casi siempre se ejecuta',
    'ENV establece variables de entorno',
    'USER es importante para seguridad (no ejecutar como root)',
    '.dockerignore acelera builds y reduce tamaño de imagen'
  ];

  const summary = `Dockerfile es la receta para construir imágenes:

• Instrucciones básicas: FROM, WORKDIR, COPY, RUN, EXPOSE, CMD
• Cada línea crea una capa que se cachea
• Orden importa: cambios frecuentes arriba, raros abajo
• COPY antes de RUN para optimizar cacheo
• Usar alpine/slim para imágenes base ligeras
• .dockerignore evita copiar archivos innecesarios
• ENV para configuración, LABEL para metadatos
• USER por seguridad (evitar root)
• HEALTHCHECK para monitoreo automático
• Dockerfile debe estar en raíz del proyecto`;

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
