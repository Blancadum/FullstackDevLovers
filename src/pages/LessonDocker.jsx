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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
              <div className="text-3xl mb-2">📦</div>
              <h5 className="font-bold mb-2">Empaquetado Universal</h5>
              <p className="text-sm">Lleva tu código, librerías y configuración en un solo paquete cerrado.</p>
            </div>
            <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
              <div className="text-3xl mb-2">🛡️</div>
              <h5 className="font-bold mb-2">Aislamiento Total</h5>
              <p className="text-sm">Lo que pasa en un contenedor no afecta al sistema ni a otros contenedores.</p>
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
          <p className="mb-6">
            Es muy común confundir Docker con VM, pero resuelven el problema de forma distinta. La diferencia fundamental está en <strong>qué parte del sistema virtualizan</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="font-bold text-center mb-3 bg-slate-100 py-2 rounded">Máquina Virtual Clásica</h5>
              <div className="border border-slate-200 rounded p-3 space-y-2">
                <div className="bg-red-100 text-red-800 p-2 text-center rounded text-sm">App 1 + App 2</div>
                <div className="bg-orange-100 text-orange-800 p-2 text-center rounded text-sm">Binarios/Librerías</div>
                <div className="bg-yellow-100 text-yellow-800 p-3 text-center rounded font-bold">Guest OS (Pesado)</div>
                <div className="bg-slate-300 p-2 text-center rounded text-xs">Hypervisor</div>
                <div className="bg-slate-700 text-white p-2 text-center rounded text-xs">Host OS</div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-center mb-3 bg-blue-50 py-2 rounded text-blue-700">Contenedores Docker</h5>
              <div className="border-2 border-blue-400 rounded p-3 space-y-2">
                <div className="bg-blue-500 text-white p-2 text-center rounded text-sm">App 1 | App 2 | App 3</div>
                <div className="bg-blue-100 text-blue-800 p-2 text-center rounded text-sm">Binarios/Librerías</div>
                <div className="border-2 border-dashed border-slate-300 p-3 text-center text-sm text-slate-500">Comparte el kernel del Host</div>
                <div className="bg-slate-300 p-2 text-center rounded text-xs">Docker Engine</div>
                <div className="bg-slate-700 text-white p-2 text-center rounded text-xs">Host OS</div>
              </div>
            </div>
          </div>

          <InfoBox type="warning">
            <strong>La gran diferencia:</strong> Una VM empaqueta un sistema operativo completo (Gigabytes, minutos en arrancar). Los contenedores comparten el kernel del host (Megabytes, milisegundos en arrancar). Puedes ejecutar 100+ contenedores donde cabrían 5-10 VMs.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Vocabulario Técnico',
      content: (
        <>
          <p className="mb-6">Términos que usarás a diario al trabajar con contenedores:</p>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-3 mb-2">
                <span className="text-2xl">📄</span>
                <div>
                  <h5 className="font-bold">Dockerfile</h5>
                  <p className="text-sm text-slate-600">Archivo de texto plano con instrucciones para construir una imagen.</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Analogía: receta de cocina o planos arquitectónicos.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-3 mb-2">
                <span className="text-2xl">💿</span>
                <div>
                  <h5 className="font-bold">Imagen (Image)</h5>
                  <p className="text-sm text-slate-600">Plantilla inmutable de solo lectura con tu aplicación y dependencias.</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Analogía: CD-ROM de instalación o molde de pastel.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-3 mb-2">
                <span className="text-2xl">🏃</span>
                <div>
                  <h5 className="font-bold">Contenedor (Container)</h5>
                  <p className="text-sm text-slate-600">Instancia en ejecución, viva y efímera, creada a partir de una Imagen.</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Analogía: pastel ya horneado o programa ejecutándose en RAM.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-3 mb-2">
                <span className="text-2xl">💾</span>
                <div>
                  <h5 className="font-bold">Volumen (Volume)</h5>
                  <p className="text-sm text-slate-600">Almacenamiento persistente fuera del contenedor para no perder datos.</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Analogía: disco duro externo USB conectado.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'El Ciclo de Vida de Docker',
      content: (
        <>
          <p className="mb-6">El uso de Docker sigue un orden estricto. Saltarse un paso rompe el proceso:</p>

          <div className="space-y-6 border-l-2 border-blue-500 pl-6 ml-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm -ml-9">1</div>
                <h4 className="text-lg font-bold">Configurar (Código)</h4>
              </div>
              <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded mb-2">Archivo: <code>Dockerfile</code></p>
              <p>Creas un documento de texto declarando qué SO base usar, qué carpetas copiar y qué comandos ejecutar.</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm -ml-9">2</div>
                <h4 className="text-lg font-bold">Construir (Empaquetar)</h4>
              </div>
              <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded mb-2">Comando: <code>docker build</code></p>
              <p>Docker lee tu Dockerfile y crea una <strong>Imagen</strong> estática. Similar a compilar código fuente en ejecutable.</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm -ml-9">3</div>
                <h4 className="text-lg font-bold">Ejecutar (Cobrar vida)</h4>
              </div>
              <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded mb-2">Comando: <code>docker run</code></p>
              <p>Docker crea una instancia viva: un <strong>Contenedor</strong>. Aquí tu aplicación empieza a procesar datos.</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-sm -ml-9">4</div>
                <h4 className="text-lg font-bold">Distribuir (Opcional)</h4>
              </div>
              <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded mb-2">Comando: <code>docker push / pull</code></p>
              <p>Subes la Imagen a Docker Hub o a un registro privado para que otros desarrolladores puedan descargarla y ejecutarla.</p>
            </div>
          </div>
        </>
      )
    },

    {
      title: 'Comandos Esenciales',
      content: (
        <>
          <p className="mb-4">La interacción con Docker se realiza a través de la terminal (CLI). Haz clic en los botones para ver la salida simulada:</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => executeCommand('docker run hello-world')}
              className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-mono rounded transition-colors"
            >
              docker run hello-world
            </button>
            <button
              onClick={() => executeCommand('docker ps')}
              className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-mono rounded transition-colors"
            >
              docker ps
            </button>
            <button
              onClick={() => executeCommand('docker images')}
              className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-mono rounded transition-colors"
            >
              docker images
            </button>
            <button
              onClick={() => setTerminalOutput(['$ # Consola limpia'])}
              className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-bold rounded ml-auto transition-colors"
            >
              Limpiar
            </button>
          </div>

          <div className="bg-slate-900 border-2 border-slate-700 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-slate-400 ml-3 font-mono">user@docker:~</span>
            </div>
            <div className="bg-slate-950 text-slate-300 p-4 font-mono text-sm overflow-auto" style={{maxHeight: '300px', minHeight: '150px'}}>
              {terminalOutput.map((line, idx) => (
                <div key={idx} className="leading-relaxed">
                  {line.startsWith('$') ? (
                    <>
                      <span className="text-green-400">{line.substring(0, 1)}</span>
                      <span className="text-slate-400">{line.substring(1)}</span>
                    </>
                  ) : line.includes('Hello') || line.includes('Status') ? (
                    <span className="text-yellow-300">{line}</span>
                  ) : line.includes('Error') ? (
                    <span className="text-red-400">{line}</span>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <InfoBox type="info" className="mt-6">
            <code>docker run</code> es inteligente: si le pides ejecutar una imagen que no tienes, primero hace un <code>pull</code> (descarga) automático desde Docker Hub.
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
          <p className="mb-6">
            Los contenedores borran todo al ser destruidos. Para guardar datos de forma permanente, usamos <strong>Volúmenes</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-slate-200 rounded-lg p-4">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">📦</span> Named Volumes
              </h5>
              <p className="text-sm mb-3">Docker los gestiona 100%. Tú das un nombre (ej. mysql_data) y Docker lo guarda en una ubicación oculta.</p>
              <p className="text-xs text-green-600">✓ Máximo rendimiento</p>
              <p className="text-xs text-green-600">✓ Independiente del SO</p>
              <p className="text-xs font-bold text-purple-600 mt-2">CASO: Bases de datos en producción</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h5 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">📁</span> Bind Mounts
              </h5>
              <p className="text-sm mb-3">Tú decides la ruta exacta. Conecta tu ordenador directamente al contenedor.</p>
              <p className="text-xs text-green-600">✓ Sincronización en tiempo real</p>
              <p className="text-xs text-red-600">✗ Depende de rutas locales</p>
              <p className="text-xs font-bold text-orange-600 mt-2">CASO: Live-reload en desarrollo</p>
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
          <p className="mb-6">
            Cualquiera puede hacer que un contenedor funcione, pero las imágenes mal optimizadas pesan gigabytes y son lentas. Sigue estas prácticas:
          </p>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex gap-3">
                <span className="text-3xl">🪶</span>
                <div>
                  <h5 className="font-bold">Usa imágenes base ligeras</h5>
                  <p className="text-sm text-slate-600">Prefiere <code className="bg-slate-100 px-1">node:18-alpine</code> (170MB) sobre <code className="bg-slate-100 px-1">node:18</code> (1GB+). Alpine es ultra minimalista.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex gap-3">
                <span className="text-3xl">🙈</span>
                <div>
                  <h5 className="font-bold">Usa .dockerignore</h5>
                  <p className="text-sm text-slate-600">Al igual que .gitignore, evita copiar node_modules, .git, logs al contenedor.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex gap-3">
                <span className="text-3xl">🧍</span>
                <div>
                  <h5 className="font-bold">Un contenedor = Un proceso</h5>
                  <p className="text-sm text-slate-600">No instales Apache y MySQL en el mismo Dockerfile. Mantén servicios separados para escalarlos individualmente.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex gap-3">
                <span className="text-3xl">🔐</span>
                <div>
                  <h5 className="font-bold">Multi-Stage Builds</h5>
                  <p className="text-sm text-slate-600">Compila en grande (Etapa 1) y copia solo lo necesario a pequeño (Etapa 2). Reduce de 1GB a 30MB.</p>
                </div>
              </div>
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
          <p className="mb-6">Docker cambia cómo empaques diferentes tecnologías:</p>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-4 bg-red-50">
              <h5 className="font-bold text-red-900 mb-2">Python + venv</h5>
              <p className="text-sm mb-2">Con Docker desaparece la necesidad de venv. El contenedor es el entorno aislado definitivo. Instala librerías directamente sin conflictos.</p>
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

            <div className="border border-slate-200 rounded-lg p-4 bg-purple-50">
              <h5 className="font-bold text-purple-900 mb-2">Java + Spring Boot</h5>
              <p className="text-sm mb-2">Spring Boot embebe un servidor (Tomcat) dentro del JAR. Docker solo necesita Java y ejecutar el JAR. Simple y elegante.</p>
              <CodeBlock
                language="dockerfile"
                code={`FROM openjdk:11-jre-slim

WORKDIR /app

COPY target/app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]`}
              />
            </div>

            <div className="border border-slate-200 rounded-lg p-4 bg-blue-50">
              <h5 className="font-bold text-blue-900 mb-2">Frontend (React/Angular) - Multi-Stage</h5>
              <p className="text-sm mb-2">Compila el frontend (etapa 1, pesada), luego sirve archivos estáticos con Nginx (etapa 2, ligera). Resultado: 20-30MB.</p>
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
          <p className="mb-6">Lee estas situaciones e intenta responder. Haz clic para ver la solución.</p>

          <div className="space-y-4">
            <div
              className="border-2 border-slate-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-400 transition-colors"
              onClick={() => setExpandedQuiz(expandedQuiz === 1 ? null : 1)}
            >
              <div className="bg-white p-4">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded mb-2">Escenario 1</span>
                <p className="font-medium">Modificas una línea de código en tu app. ¿Basta reiniciar el contenedor o debes construir una nueva Imagen?</p>
              </div>
              {expandedQuiz === 1 && (
                <div className="bg-slate-800 text-white p-4 border-t-2 border-slate-800">
                  <h5 className="text-green-400 font-bold mb-2">✓ Debes construir una nueva Imagen (docker build)</h5>
                  <p className="text-sm">Los contenedores son efímeros. Se crean a partir de imágenes inmutables. Si el código cambia, la receta debe volver a cocinarse.</p>
                </div>
              )}
            </div>

            <div
              className="border-2 border-slate-200 rounded-lg overflow-hidden cursor-pointer hover:border-yellow-400 transition-colors"
              onClick={() => setExpandedQuiz(expandedQuiz === 2 ? null : 2)}
            >
              <div className="bg-white p-4">
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded mb-2">Escenario 2</span>
                <p className="font-medium">Tu contenedor de base de datos se detiene y es eliminado. Sin volumen configurado, ¿qué ocurre con los datos?</p>
              </div>
              {expandedQuiz === 2 && (
                <div className="bg-slate-800 text-white p-4 border-t-2 border-slate-800">
                  <h5 className="text-red-400 font-bold mb-2">✗ Se pierden para siempre</h5>
                  <p className="text-sm">Por defecto, los datos viven en una "capa temporal" atada a ese contenedor. Al eliminarse, desaparece todo. Por eso es OBLIGATORIO usar Volúmenes para bases de datos.</p>
                </div>
              )}
            </div>

            <div
              className="border-2 border-slate-200 rounded-lg overflow-hidden cursor-pointer hover:border-green-400 transition-colors"
              onClick={() => setExpandedQuiz(expandedQuiz === 3 ? null : 3)}
            >
              <div className="bg-white p-4">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mb-2">Escenario 3</span>
                <p className="font-medium">Tienes un Dockerfile que genera una imagen de 1.5GB. ¿Cuál es la técnica para reducirla a 50MB sin perder funcionalidad?</p>
              </div>
              {expandedQuiz === 3 && (
                <div className="bg-slate-800 text-white p-4 border-t-2 border-slate-800">
                  <h5 className="text-green-400 font-bold mb-2">✓ Multi-Stage Builds</h5>
                  <p className="text-sm">Etapa 1 (builder): Compila/construye con herramientas pesadas. Etapa 2 (runtime): Copia solo lo necesario a imagen ligera. Descarta el builder. Resultado: 1.5GB → 50MB.</p>
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