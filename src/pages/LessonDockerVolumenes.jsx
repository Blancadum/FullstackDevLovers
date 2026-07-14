import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerVolumenes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '📦', title: 'Named Volume', definition: 'Volumen gestionado por Docker con nombre', example: 'docker volume create datos' },
    { icon: '📁', title: 'Bind Mount', definition: 'Mapeo directo de carpeta local al contenedor', example: '-v /local/path:/container/path' },
    { icon: '🔄', title: 'Volume Driver', definition: 'Plugin para gestionar almacenamiento', example: 'local, nfs, etc' },
    { icon: '💾', title: 'Persistencia', definition: 'Datos que sobreviven al contenedor', example: 'Bases de datos, archivos de upload' },
    { icon: '🗑️', title: 'Volumen Anónimo', definition: 'Volumen temporal sin nombre', example: '-v /app/data (se elimina con contenedor)' },
    { icon: '🔐', title: 'read-only', definition: 'Montar volumen como solo lectura', example: '-v datos:/app/data:ro' }
  ];

  const exercises = [
    {
      title: 'Persistencia con Named Volume',
      description: 'Base de datos que mantiene datos entre reinicios',
      solution: `# Crear volumen
docker volume create db-data

# Ejecutar contenedor con volumen
docker run -d --name postgres -v db-data:/var/lib/postgresql/data postgres:15

# Eliminar contenedor (datos persisten)
docker rm postgres

# Crear nuevo contenedor con mismo volumen
docker run -d --name postgres2 -v db-data:/var/lib/postgresql/data postgres:15
# ✓ Los datos del primer postgres están aquí`
    },
    {
      title: 'Desarrollo con Bind Mount',
      description: 'Hot-reload en desarrollo local',
      solution: `# Montar código local en contenedor
docker run -d \\
  -v $(pwd)/src:/app/src \\
  -p 3000:3000 \\
  mi-app:dev

# Cambias archivo en tu PC → aparece en contenedor → app refresca`
    }
  ];

  const sections = [
    {
      title: 'Named Volumes vs Bind Mounts',
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <h5 className="font-bold text-purple-900 mb-2">Named Volumes</h5>
              <CodeBlock
                language="bash"
                code={`# Crear
docker volume create datos

# Usar
docker run -v datos:/app/data mi-app

# Ubicación: /var/lib/docker/volumes/datos
# Gestión: Docker
# Rendimiento: ⭐⭐⭐⭐⭐
# Caso: Producción, BD`}
              />
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
              <h5 className="font-bold text-orange-900 mb-2">Bind Mounts</h5>
              <CodeBlock
                language="bash"
                code={`# Usar (sin crear antes)
docker run -v /ruta/local:/app/data mi-app

# Ubicación: Tu disco
# Gestión: Manual
# Rendimiento: ⭐⭐⭐⭐ (en Mac más lento)
# Caso: Desarrollo local`}
              />
            </div>
          </div>

          <InfoBox type="success">
            <strong>Regla:</strong> Producción → Named Volumes. Desarrollo → Bind Mounts.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Gestión de Volúmenes',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Listar volúmenes
docker volume ls

# Inspeccionar
docker volume inspect datos

# Eliminar volumen (cuidado!)
docker volume rm datos

# Eliminar volúmenes no usados
docker volume prune

# En docker run
docker run -v datos:/app/data mi-app          # Named
docker run -v /local:/app/data mi-app         # Bind
docker run -v /app/data mi-app                # Anónimo
docker run -v datos:/app/data:ro mi-app       # Read-only
docker run -v datos:/app/data:rw mi-app       # Read-write (default)`}
          />
        </>
      )
    },

    {
      title: 'Volúmenes en Docker Compose',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`version: '3.8'
services:
  db:
    image: postgres:15
    volumes:
      - db-data:/var/lib/postgresql/data    # Named
      - ./init-scripts:/docker-entrypoint-initdb.d  # Bind

  web:
    build: .
    volumes:
      - ./src:/app/src        # Desarrollo local
      - /app/node_modules     # Anónimo (no sobrescribir)

volumes:
  db-data:  # Definir named volumes`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Named Volumes para producción (gestión automática)',
    'Bind Mounts para desarrollo (cambios en tiempo real)',
    'Volúmenes anónimos son temporales',
    'read-only (:ro) para datos no modificables',
    'docker volume ls, inspect, prune para gestionar',
    'Ubicación named volumes: /var/lib/docker/volumes/',
    'Bind mount ruta absoluta: /local/path o $(pwd)',
    'Definir volumes en docker-compose.yml',
    'depends_on en Compose no espera que volumen esté listo',
    'Siempre usar volúmenes para bases de datos'
  ];

  const summary = `Volúmenes Docker para persistencia:

• Named Volumes: Docker gestiona, para producción
• Bind Mounts: Ruta manual, para desarrollo
• Volúmenes anónimos: Temporales, se eliminan
• read-only para datos inmutables
• docker volume ls/inspect/prune
• En Compose: definir volumes section
• Desarrollo: Bind Mount para hot-reload
• Producción: Named Volume con backups
• Datos críticos: siempre con volumen
• Sin volumen = datos se pierden al eliminar contenedor`;

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
