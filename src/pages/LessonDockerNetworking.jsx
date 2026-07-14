import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerNetworking() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '🌉', title: 'Bridge Network', definition: 'Red por defecto que conecta contenedores', example: 'Localhost para host, DNS por nombre entre contenedores' },
    { icon: '🖥️', title: 'Host Network', definition: 'Usa red del host directamente', example: 'Sin aislamiento de red, máximo rendimiento' },
    { icon: '🔓', title: 'None Network', definition: 'Sin conectividad de red', example: 'Contenedor completamente aislado' },
    { icon: '📡', title: 'DNS Interno', definition: 'Resolución de nombres entre contenedores', example: 'Acceder a "db" en lugar de 172.18.0.2' },
    { icon: '🚪', title: 'Port Mapping', definition: 'Exponer puertos del contenedor al host', example: '-p 8080:3000 mapea host:3000 → contenedor:3000' },
    { icon: '🔗', title: 'Container Linking', definition: 'Conectar contenedores (deprecated, usar networks)', example: '--link db:database (evitar en favor de custom networks)' }
  ];

  const exercises = [
    {
      title: 'Crear red personalizada y conectar contenedores',
      description: 'Red que permite comunicación por nombre',
      solution: `# Crear red
docker network create mi-red

# Ejecutar contenedores en la red
docker run -d --name db --network mi-red postgres:15
docker run -d --name web --network mi-red -p 3000:3000 mi-app:1.0

# Desde web, conectar a db por nombre
docker exec web psql -h db -U user`
    }
  ];

  const sections = [
    {
      title: 'Tipos de Redes Docker',
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h5 className="font-bold text-blue-900 mb-2">Bridge</h5>
              <p className="text-sm text-blue-800">Por defecto. Contenedores aislados, DNS interno.</p>
              <p className="text-xs text-blue-600 mt-1">✓ Desarrollo</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
              <h5 className="font-bold text-orange-900 mb-2">Host</h5>
              <p className="text-sm text-orange-800">Acceso directo a red del host.</p>
              <p className="text-xs text-orange-600 mt-1">✗ Menos aislado</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <h5 className="font-bold text-purple-900 mb-2">None</h5>
              <p className="text-sm text-purple-800">Sin conectividad de red.</p>
              <p className="text-xs text-purple-600 mt-1">✓ Aislado totalmente</p>
            </div>
          </div>

          <CodeBlock
            language="bash"
            code={`# Bridge (default)
docker run my-app

# Host
docker run --network host my-app

# None
docker run --network none my-app`}
          />
        </>
      )
    },

    {
      title: 'Redes personalizadas y DNS',
      content: (
        <>
          <p className="mb-4">
            <strong>DNS Interno</strong> permite comunicación por nombre entre contenedores en la misma red personalizada.
          </p>

          <CodeBlock
            language="bash"
            code={`# Crear red personalizada
docker network create backend-net

# Conectar contenedores
docker run -d --name db --network backend-net postgres:15
docker run -d --name web --network backend-net -p 3000:3000 mi-app

# Desde web, contactar db por nombre
docker exec web curl http://db:5432
# ✓ Funciona! (en red default no funcionaría)`}
          />

          <InfoBox type="success">
            <strong>Ventaja:</strong> No necesitas saber IPs. Los contenedores se descubren por nombre automáticamente.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Port Mapping',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Mapear un puerto
docker run -p 8080:3000 mi-app
#        HOST:CONTAINER

# Mapear múltiples
docker run -p 8080:3000 -p 5432:5432 mi-app

# Mapear a interfaz específica
docker run -p 127.0.0.1:8080:3000 mi-app  # Solo localhost

# Mapear a puerto aleatorio
docker run -p 3000 mi-app  # Host elige puerto

# Ver puertos
docker port mi-app`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Bridge es la red default para contenedores',
    'Redes personalizadas permiten DNS entre contenedores',
    'Evita usar --link (deprecated), usa custom networks',
    'Host network es más rápido pero menos aislado',
    'None network es para contenedores que no necesitan red',
    'Port mapping conecta puertos host con contenedor',
    '-p HOST:CONTAINER mapea puertos',
    'DNS interno resuelve nombres de contenedores',
    'Cada aplicación puede tener su red personalizada',
    'docker network ls, docker network inspect para debugging'
  ];

  const summary = `Networking Docker:

• Bridge: red default, DNS, aislamiento
• Host: red del host directamente
• None: sin conectividad
• Redes personalizadas para proyectos
• DNS por nombre entre servicios
• Port mapping con -p HOST:CONTAINER
• Cada red aislada de las demás
• Docker Compose crea red automáticamente`;

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
