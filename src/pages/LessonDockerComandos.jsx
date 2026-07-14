import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerComandos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔨',
      title: 'docker build',
      definition: 'Construye una imagen a partir de un Dockerfile',
      example: 'docker build -t mi-app:1.0 . - Crea imagen "mi-app" versión 1.0'
    },
    {
      icon: '▶️',
      title: 'docker run',
      definition: 'Ejecuta un contenedor a partir de una imagen',
      example: 'docker run -p 3000:3000 mi-app - Ejecuta con mapeo de puerto'
    },
    {
      icon: '📦',
      title: 'docker ps',
      definition: 'Lista contenedores en ejecución',
      example: 'docker ps -a - Muestra todos los contenedores (activos + detenidos)'
    },
    {
      icon: '💾',
      title: 'docker images',
      definition: 'Lista todas las imágenes disponibles',
      example: 'docker images - Muestra imágenes, tamaño y fecha de creación'
    },
    {
      icon: '⏸️',
      title: 'docker stop/start',
      definition: 'Pausa o reinicia un contenedor',
      example: 'docker stop mi-contenedor - Detiene gracefully'
    },
    {
      icon: '🗑️',
      title: 'docker rm/rmi',
      definition: 'Elimina contenedores o imágenes',
      example: 'docker rm id-contenedor - Elimina contenedor'
    }
  ];

  const exercises = [
    {
      title: 'Flujo completo: Build → Run → Stop → Remove',
      description: 'Ciclo de vida de un contenedor desde cero',
      solution: `# 1. Construir imagen
docker build -t mi-app:1.0 .

# 2. Ver la imagen creada
docker images | grep mi-app

# 3. Ejecutar contenedor
docker run -d --name mi-contenedor -p 3000:3000 mi-app:1.0

# 4. Ver contenedor corriendo
docker ps

# 5. Ver logs
docker logs mi-contenedor

# 6. Entrar al contenedor
docker exec -it mi-contenedor bash

# 7. Detener
docker stop mi-contenedor

# 8. Reiniciar
docker start mi-contenedor

# 9. Eliminar (primero debe estar detenido)
docker rm mi-contenedor

# 10. Eliminar imagen
docker rmi mi-app:1.0`
    },
    {
      title: 'Debugging: inspeccionar contenedor',
      description: 'Técnicas para diagnosticar problemas',
      solution: `# Ver logs
docker logs mi-contenedor
docker logs -f mi-contenedor    # Sigue en tiempo real

# Inspeccionar detalles
docker inspect mi-contenedor

# Ver procesos dentro del contenedor
docker top mi-contenedor

# Ver cambios de archivos
docker diff mi-contenedor

# Copiar archivos desde contenedor
docker cp mi-contenedor:/app/log.txt ./

# Ver estadísticas de recursos
docker stats mi-contenedor`
    }
  ];

  const sections = [
    {
      title: 'Gestión de Imágenes',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# CONSTRUIR IMÁGENES
docker build -t mi-app:1.0 .              # Construir desde Dockerfile en directorio actual
docker build -t mi-app:1.0 -f Dockerfile.prod .  # Usar Dockerfile específico
docker build --no-cache -t mi-app:1.0 .   # No usar cachó (rebuild todo)

# LISTAR Y VER IMÁGENES
docker images                              # Listar todas las imágenes
docker images mi-app                       # Listar imágenes que coincidan
docker image inspect mi-app:1.0            # Ver detalles detallados

# DESCARGAR IMÁGENES
docker pull ubuntu:22.04                   # Descargar desde Docker Hub
docker pull myregistry.azurecr.io/mi-app   # Descargar de registro privado

# SUBIR IMÁGENES
docker tag mi-app:1.0 usuario/mi-app:1.0   # Etiquetar para subir
docker push usuario/mi-app:1.0              # Subir a Docker Hub

# ELIMINAR
docker rmi mi-app:1.0                      # Eliminar imagen
docker rmi mi-app:1.0 -f                   # Fuerza eliminación
docker image prune                         # Eliminar imágenes no usadas`}
          />
        </>
      )
    },

    {
      title: 'Gestión de Contenedores',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# CREAR Y EJECUTAR
docker run mi-app:1.0                              # Ejecutar y detener
docker run -d mi-app:1.0                           # Detached (background)
docker run -it mi-app:1.0                          # Interactive terminal
docker run --name mi-contenedor mi-app:1.0         # Ponerle nombre
docker run -p 8080:3000 mi-app:1.0                 # Mapear puerto 8080→3000
docker run -v datos:/app/datos mi-app:1.0          # Montar volumen
docker run -e DB_HOST=db mi-app:1.0                # Variable de entorno

# LISTAR CONTENEDORES
docker ps                                          # Solo activos
docker ps -a                                       # Todos (activos + detenidos)
docker ps -q                                       # Solo IDs

# INFORMACIÓN DE CONTENEDOR
docker logs mi-contenedor                          # Ver salida
docker logs -f mi-contenedor                       # Seguir logs en tiempo real
docker logs --tail 50 mi-contenedor                # Últimas 50 líneas
docker inspect mi-contenedor                       # Detalles JSON
docker top mi-contenedor                           # Procesos dentro
docker stats mi-contenedor                         # Uso CPU/RAM

# EJECUTAR COMANDOS EN CONTENEDOR
docker exec -it mi-contenedor bash                 # Entrar a shell
docker exec mi-contenedor ls -la                   # Ejecutar comando
docker exec mi-contenedor npm test                 # Correr tests

# PARAR, REINICIAR, ELIMINAR
docker stop mi-contenedor                          # Detener gracefully (30s)
docker stop -t 5 mi-contenedor                     # Timeout 5 segundos
docker kill mi-contenedor                          # Matar inmediatamente
docker start mi-contenedor                         # Reiniciar
docker restart mi-contenedor                       # Parar + arrancar
docker rm mi-contenedor                            # Eliminar
docker rm -f mi-contenedor                         # Fuerza eliminación`}
          />
        </>
      )
    },

    {
      title: 'Copiar archivos',
      content: (
        <>
          <p className="mb-4">
            Copiar archivos entre tu PC y un contenedor.
          </p>

          <CodeBlock
            language="bash"
            code={`# Copiar DEL contenedor AL host
docker cp mi-contenedor:/app/salida.txt ./
docker cp mi-contenedor:/app/logs/ ./logs-backup/

# Copiar DEL host AL contenedor (contenedor debe estar corriendo)
docker cp ./archivo.txt mi-contenedor:/app/
docker cp ./src/ mi-contenedor:/app/src/

# NOTA: para cambios permanentes, mejor usar volúmenes
# docker run -v $(pwd)/src:/app/src mi-app`}
          />

          <InfoBox type="info">
            <strong>Mejor práctica:</strong> Para archivos que cambian frecuentemente (desarrollo), usa volúmenes. Solo usa <code>docker cp</code> para transferencias puntuales.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Limpieza y Mantenimiento',
      content: (
        <>
          <p className="mb-4">
            Docker se llena de imágenes y contenedores con el tiempo. Aquí cómo limpiar.
          </p>

          <CodeBlock
            language="bash"
            code={`# Ver uso de espacio en disco
docker system df

# Eliminar contenedores detenidos
docker container prune

# Eliminar imágenes no usadas
docker image prune

# Eliminar volúmenes no usados
docker volume prune

# Eliminar TODO (contenedores, imágenes, volúmenes, redes no usadas)
docker system prune

# Eliminar TODO incluyendo volúmenes
docker system prune -a --volumes

# Eliminar imágenes antiguas de una aplicación
docker rmi $(docker images -q 'mi-app')`}
          />

          <InfoBox type="warning">
            <strong>Cuidado:</strong> <code>docker system prune</code> es destructivo. Verifica qué vas a eliminar.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Flags útiles en docker run',
      content: (
        <>
          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">-d, --detach</code>
              <p className="text-sm text-blue-800">Ejecuta en background, retorna el ID del contenedor</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">-p HOST:CONTAINER</code>
              <p className="text-sm text-blue-800">Mapea puerto (8080:3000 → host:3000 → contenedor:3000)</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">-v VOLUMEN:RUTA</code>
              <p className="text-sm text-blue-800">Monta volumen o bind mount</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">-e KEY=VALUE</code>
              <p className="text-sm text-blue-800">Define variable de entorno</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">--name NOMBRE</code>
              <p className="text-sm text-blue-800">Da nombre al contenedor (sino genera automático)</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">-it</code>
              <p className="text-sm text-blue-800">Interactive terminal (enter a terminal dentro del contenedor)</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">--network NOMBRE</code>
              <p className="text-sm text-blue-800">Conecta a red específica</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">-m MEMORIA</code>
              <p className="text-sm text-blue-800">Limita memoria (ej: 512m, 1g)</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3">
              <code className="font-mono text-sm font-bold text-blue-900">--cpus CPUS</code>
              <p className="text-sm text-blue-800">Limita CPUs (ej: 0.5, 1)</p>
            </div>
          </div>

          <CodeBlock
            language="bash"
            code={`# Ejemplo completo con varios flags
docker run -d \\
  --name my-app \\
  -p 8080:3000 \\
  -v app-data:/app/data \\
  -e NODE_ENV=production \\
  -e DB_HOST=postgres \\
  -m 512m \\
  --cpus 1 \\
  mi-app:1.0`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'docker build crea imagen desde Dockerfile',
    'docker run ejecuta contenedor desde imagen',
    'docker ps lista contenedores, docker images lista imágenes',
    'docker stop detiene gracefully, docker kill mata inmediatamente',
    'docker rm elimina contenedor, docker rmi elimina imagen',
    'docker logs para ver salida, docker exec para ejecutar comandos',
    'docker cp copia archivos entre host y contenedor',
    'Flags importantes: -d (background), -p (puertos), -v (volúmenes), -e (env)',
    'docker system prune limpia espacio (cuidado con -a)',
    'Nombrar contenedores facilita referencias posteriores'
  ];

  const summary = `Comandos Docker esenciales:

• docker build: construye imágenes desde Dockerfile
• docker run: ejecuta contenedores (es donde pasa la magia)
• docker ps: lista contenedores en ejecución
• docker images: lista imágenes disponibles
• docker logs: ve salida y errores del contenedor
• docker exec: ejecuta comandos dentro del contenedor
• docker stop/start: pausa/reinicia sin perder datos
• docker rm/rmi: elimina contenedores e imágenes
• Flags clave: -d, -p, -v, -e, --name, -it
• docker system prune: limpia espacio (ser cuidadoso)
• Estos son los 80% de comandos que usarás en el día a día`;

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
