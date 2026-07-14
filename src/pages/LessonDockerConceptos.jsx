import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerConceptos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '💿',
      title: 'Imagen Docker',
      definition: 'Plantilla inmutable de solo lectura que contiene aplicación, dependencias y configuración',
      example: 'Como un snapshot de un sistema completo listo para ejecutar'
    },
    {
      icon: '🏃',
      title: 'Contenedor',
      definition: 'Instancia en ejecución de una Imagen con estado y recursos propios',
      example: 'Como un proceso en tu SO, pero completamente aislado'
    },
    {
      icon: '💾',
      title: 'Volumen',
      definition: 'Mecanismo de persistencia de datos que vive fuera del contenedor',
      example: 'Disco externo USB para guardar datos permanentemente'
    },
    {
      icon: '📝',
      title: 'Dockerfile',
      definition: 'Archivo de texto con instrucciones para construir una Imagen',
      example: 'Receta que dice paso a paso cómo ensamblar tu aplicación'
    },
    {
      icon: '🔗',
      title: 'Red Docker',
      definition: 'Red virtual que conecta contenedores permitiendo comunicación',
      example: 'Infraestructura de red interna donde viven tus contenedores'
    },
    {
      icon: '📚',
      title: 'Registro (Registry)',
      definition: 'Repositorio donde se guardan y distribuyen Imágenes Docker',
      example: 'Docker Hub (público) o registros corporativos privados'
    }
  ];

  const exercises = [
    {
      title: 'Visualizar la diferencia Imagen vs Contenedor',
      description: 'Entender qué es cada cosa con una analogía clara',
      solution: `IMAGEN = CD-ROM de instalación (inmutable, reutilizable)
CONTENEDOR = Juego instalado en tu PC (cambia, consume recursos)

Puedes tener:
- 1 Imagen → crear 10 Contenedores (todos iguales inicialmente)
- Si cambias 1 contenedor, no afecta a los otros ni a la Imagen

Analogía:
- Imagen = Molde de pastel
- Contenedor = Pastel ya hecho`
    },
    {
      title: 'Entender Volúmenes',
      description: 'Por qué necesitas volúmenes y qué tipos existen',
      solution: `SIN VOLUMEN:
- Datos viven en /contenedor/datos
- Al eliminar contenedor → datos se pierden ❌

CON VOLUMEN (Named):
- Datos viven en /var/lib/docker/volumes/datos
- Al eliminar contenedor → datos permanecen ✅
- Puedo crear nuevo contenedor y conectar el mismo volumen

CON VOLUMEN (Bind Mount):
- Datos viven en /mi/ruta/local
- Sincronización bidireccional
- Uso: desarrollo local`
    }
  ];

  const sections = [
    {
      title: 'Imagen Docker vs Contenedor',
      content: (
        <>
          <p className="mb-4">
            La confusión más común es pensar que Imagen y Contenedor son lo mismo. <strong>No lo son</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-300 rounded-lg p-5 bg-blue-50">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💿</span> IMAGEN
              </h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>✓ Plantilla estática</li>
                <li>✓ De solo lectura</li>
                <li>✓ No consume recursos mientras no se ejecute</li>
                <li>✓ Reutilizable</li>
                <li>✓ Se guarda en disco/Registry</li>
                <li>✓ Se crea: <code className="bg-white px-1">docker build</code></li>
              </ul>
            </div>

            <div className="border-2 border-green-300 rounded-lg p-5 bg-green-50">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏃</span> CONTENEDOR
              </h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>✓ Instancia en ejecución</li>
                <li>✓ Tiene estado (puede cambiar)</li>
                <li>✓ Consume recursos (CPU, RAM)</li>
                <li>✓ Efímero (desaparece si la cierras)</li>
                <li>✓ Aislado del sistema</li>
                <li>✓ Se crea: <code className="bg-white px-1">docker run</code></li>
              </ul>
            </div>
          </div>

          <InfoBox type="info">
            <strong>Analogía del pastel:</strong> La Imagen es el molde (lo reutilizas). El Contenedor es el pastel horneado (cambias si le añades coberturas, se gasta si lo comes).
          </InfoBox>

          <CodeBlock
            language="bash"
            code={`# Descargar una Imagen (sin ejecutar)
docker pull ubuntu:22.04
# Resultado: una imagen está en tu PC, lista para usar

# Crear un Contenedor (ejecuta la Imagen)
docker run -it ubuntu:22.04 bash
# Resultado: tienes un sistema Ubuntu corriendo, cambia con cada comando

# Puedes crear 5 contenedores de la MISMA imagen
docker run -it ubuntu:22.04 bash  # Contenedor 1
docker run -it ubuntu:22.04 bash  # Contenedor 2 (independiente del 1)
docker run -it ubuntu:22.04 bash  # Contenedor 3 (independiente)
# Los 3 están aislados, pero usan la misma Imagen`}
          />
        </>
      )
    },

    {
      title: 'Capas (Layers)',
      content: (
        <>
          <p className="mb-4">
            Las Imágenes Docker están compuestas de <strong>capas</strong> apiladas. Cada línea en el Dockerfile crea una capa.
          </p>

          <div className="bg-slate-100 border border-slate-300 rounded-lg p-6 mb-6">
            <h4 className="font-bold mb-4 text-center">Estructura de una Imagen con 5 capas:</h4>
            <div className="space-y-2">
              <div className="bg-blue-200 border-2 border-blue-400 p-3 rounded text-sm font-mono">
                Capa 5: COPY . . (tu código) ← Cambia frecuentemente
              </div>
              <div className="bg-blue-300 border-2 border-blue-500 p-3 rounded text-sm font-mono">
                Capa 4: RUN npm install (dependencias)
              </div>
              <div className="bg-blue-400 border-2 border-blue-600 p-3 rounded text-sm font-mono">
                Capa 3: COPY package.json .
              </div>
              <div className="bg-blue-500 border-2 border-blue-700 p-3 rounded text-sm font-mono text-white">
                Capa 2: WORKDIR /app
              </div>
              <div className="bg-blue-600 border-2 border-blue-800 p-3 rounded text-sm font-mono text-white">
                Capa 1: FROM node:18 (base) ← Cambia raramente
              </div>
            </div>
          </div>

          <InfoBox type="success">
            <strong>Por qué importa:</strong> Docker cachea capas. Si reconstruyes y solo cambia la última capa, no descarga/procesa las anteriores. Esto acelera builds enormemente.
          </InfoBox>

          <h4 className="font-bold text-lg mb-3 mt-6">Orden de capas importa:</h4>
          <CodeBlock
            language="dockerfile"
            code={`# ✗ MALO: Cambios frecuentes arriba (invalida cache)
FROM node:18
COPY . .                  # Tu código (CAMBIA SIEMPRE)
RUN npm install           # Instala (vuelve a hacer cada build)
RUN npm run build

# ✓ BUENO: Cambios raros abajo, frecuentes arriba
FROM node:18
COPY package*.json ./     # Cambia poco
RUN npm install           # Se cachea
COPY . .                  # Tu código (CAMBIA SIEMPRE)
RUN npm run build`}
          />
        </>
      )
    },

    {
      title: 'Volúmenes: Persistencia de Datos',
      content: (
        <>
          <p className="mb-4">
            Los datos dentro de un contenedor son <strong>efímeros</strong>. Al eliminar el contenedor, todo se pierde.
          </p>

          <h4 className="font-bold text-lg mb-4">Dos tipos de Volúmenes:</h4>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h5 className="font-bold text-purple-700 mb-2">1. Named Volumes</h5>
              <p className="text-sm text-slate-600 mb-3">Docker los gestiona completamente. Dados un nombre, se guardan en `/var/lib/docker/volumes/`</p>
              <CodeBlock
                language="bash"
                code={`# Crear volumen nombrado
docker volume create datos

# Usar en contenedor
docker run -v datos:/app/datos mi-app

# Listar volúmenes
docker volume ls

# Inspeccionar
docker volume inspect datos`}
              />
              <p className="text-xs text-slate-500 mt-2 italic">Caso de uso: Bases de datos en producción, datos críticos</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h5 className="font-bold text-orange-700 mb-2">2. Bind Mounts</h5>
              <p className="text-sm text-slate-600 mb-3">Tú especificas la ruta exacta en tu PC. Sincronización bidireccional.</p>
              <CodeBlock
                language="bash"
                code={`# Conectar carpeta local al contenedor
docker run -v /mi/ruta/local:/app/datos mi-app

# Cambias archivo en tu PC → aparece en contenedor
# Cambias archivo en contenedor → aparece en tu PC

# Uso común: desarrollo local
docker run -v \$(pwd)/src:/app/src -p 3000:3000 mi-app`}
              />
              <p className="text-xs text-slate-500 mt-2 italic">Caso de uso: Desarrollo local con live-reload</p>
            </div>
          </div>

          <InfoBox type="warning">
            <strong>Importante:</strong> Sin volumen, si eliminas el contenedor con <code>docker rm</code>, pierdes todos los datos. Siempre usa volúmenes para datos importantes.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Redes Docker',
      content: (
        <>
          <p className="mb-4">
            Por defecto, Docker crea una red privada que conecta todos los contenedores, permitiendo comunicación interna.
          </p>

          <h4 className="font-bold text-lg mb-4">Tipos de Redes:</h4>

          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h5 className="font-bold text-blue-900">Bridge (por defecto)</h5>
              <p className="text-sm text-blue-800">Contenedores conectados pueden verse por nombre (DNS interno)</p>
              <p className="text-xs text-blue-600 mt-1">Ejemplo: contenedor "db" es alcanzable como <code>db:5432</code></p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <h5 className="font-bold text-green-900">Host</h5>
              <p className="text-sm text-green-800">Contenedor usa la red del host directamente (más rápido, menos aislado)</p>
              <p className="text-xs text-green-600 mt-1">Uso: apps que necesitan acceso directo a puertos</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <h5 className="font-bold text-purple-900">None</h5>
              <p className="text-sm text-purple-800">Contenedor sin conectividad de red (aislado completamente)</p>
              <p className="text-xs text-purple-600 mt-1">Uso: contenedores que no necesitan red</p>
            </div>
          </div>

          <CodeBlock
            language="bash"
            code={`# Ver redes disponibles
docker network ls

# Crear red personalizada
docker network create mi-red

# Conectar contenedores a red
docker run --network mi-red --name web mi-app:1.0
docker run --network mi-red --name db mysql:8.0

# Ahora "web" puede alcanzar "db" por nombre
# docker exec web ping db  → funciona!`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Imagen = plantilla inmutable, Contenedor = instancia en ejecución',
    'Una Imagen puede crear múltiples Contenedores independientes',
    'Las Imágenes están compuestas de capas apiladas',
    'El orden de capas en Dockerfile afecta el cacheo y velocidad de build',
    'Volúmenes permiten persistencia de datos fuera del contenedor',
    'Named Volumes para producción, Bind Mounts para desarrollo',
    'Docker tiene DNS interno que permite naming entre contenedores',
    'Las redes conectan contenedores permitiendo comunicación',
    'Bridge es la red por defecto y más utilizada',
    'Sin volumen, eliminar contenedor = perder todos los datos'
  ];

  const summary = `Conceptos clave de Docker:

• Imagen y Contenedor son distintos (plantilla vs instancia)
• Capas en Imágenes permiten cacheo y reutilización eficiente
• Volúmenes resuelven el problema de persistencia de datos
• Dos tipos: Named (producción) y Bind Mounts (desarrollo)
• Redes Docker conectan contenedores internamente
• DNS interno permite referencia por nombre entre servicios
• Aislamiento total pero comunicación interna entre contenedores
• Entender estos conceptos es fundamental para Docker Compose`;

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
