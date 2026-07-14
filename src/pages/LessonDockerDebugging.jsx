import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerDebugging() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '📋', title: 'Logs', definition: 'Salida estándar y errores del contenedor', example: 'docker logs -f mi-contenedor' },
    { icon: '🔧', title: 'exec', definition: 'Ejecutar comandos dentro del contenedor', example: 'docker exec -it mi-contenedor bash' },
    { icon: '📊', title: 'inspect', definition: 'Detalles completos del contenedor en JSON', example: 'docker inspect mi-contenedor' },
    { icon: '📈', title: 'stats', definition: 'Monitoreo en tiempo real de recursos', example: 'docker stats' },
    { icon: '📁', title: 'cp', definition: 'Copiar archivos del/al contenedor', example: 'docker cp mi-contenedor:/logs ./logs-backup' },
    { icon: '🔍', title: 'diff', definition: 'Ver cambios de archivos en contenedor', example: 'docker diff mi-contenedor' }
  ];

  const exercises = [
    {
      title: 'Diagnóstico completo',
      description: 'Técnicas para resolver problemas',
      solution: `# 1. Ver logs
docker logs mi-contenedor
docker logs -f mi-contenedor  # Tiempo real
docker logs --tail 50 mi-contenedor

# 2. Entrar al contenedor
docker exec -it mi-contenedor bash
docker exec -it mi-contenedor sh  # Alpine

# 3. Ver procesos
docker top mi-contenedor

# 4. Inspeccionar detalles
docker inspect mi-contenedor | grep -A 5 '"Env"'

# 5. Ver recursos
docker stats mi-contenedor

# 6. Copiar logs
docker cp mi-contenedor:/app/logs ./logs-backup`
    }
  ];

  const sections = [
    {
      title: 'Lectura de Logs',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Ver logs
docker logs mi-contenedor

# Seguimiento en tiempo real
docker logs -f mi-contenedor

# Últimas 50 líneas
docker logs --tail 50 mi-contenedor

# Con timestamp
docker logs -t mi-contenedor

# Desde hace 5 minutos
docker logs --since 5m mi-contenedor

# Hasta hace 2 minutos
docker logs --until 2m mi-contenedor

# Guardar en archivo
docker logs mi-contenedor > logs.txt 2>&1`}
          />
        </>
      )
    },

    {
      title: 'Entrar al contenedor',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Terminal interactiva
docker exec -it mi-contenedor bash
docker exec -it mi-contenedor sh  # Alpine

# Ejecutar comando directo
docker exec mi-contenedor ls -la /app
docker exec mi-contenedor npm test
docker exec mi-contenedor psql -U user

# Como usuario específico
docker exec -u root mi-contenedor apt-get update

# Con variables de entorno
docker exec -e DEBUG=true mi-contenedor node app.js`}
          />
        </>
      )
    },

    {
      title: 'Monitoring y análisis',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# CPU, RAM en tiempo real
docker stats

# Todos los contenedores
docker stats --all

# Sin streaming (un snapshot)
docker stats --no-stream

# Procesos dentro del contenedor
docker top mi-contenedor

# Detalles en JSON
docker inspect mi-contenedor

# Variable de entorno específica
docker inspect -f '{{.Config.Env}}' mi-contenedor

# IP del contenedor
docker inspect -f '{{.NetworkSettings.IPAddress}}' mi-contenedor

# Cambios de archivos
docker diff mi-contenedor

# Copiar archivos
docker cp mi-contenedor:/app/logs ./backup
docker cp ./archivo.txt mi-contenedor:/app/`}
          />
        </>
      )
    },

    {
      title: 'Problemas comunes',
      content: (
        <>
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <p className="text-sm font-bold text-red-900">Contenedor se para inmediatamente</p>
              <p className="text-xs text-red-800">→ Ver logs: <code>docker logs mi-contenedor</code></p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
              <p className="text-sm font-bold text-orange-900">Puerto ya en uso</p>
              <p className="text-xs text-orange-800">→ <code>docker run -p 8000:3000</code> (cambiar puerto host)</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
              <p className="text-sm font-bold text-yellow-900">Sin conectividad entre contenedores</p>
              <p className="text-xs text-yellow-800">→ Usar custom network: <code>docker network create mi-red</code></p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
              <p className="text-sm font-bold text-blue-900">Alto uso de recursos</p>
              <p className="text-xs text-blue-800">→ Ver con <code>docker stats</code>, limitar con -m y --cpus</p>
            </div>
          </div>
        </>
      )
    }
  ];

  const keyPoints = [
    'docker logs para ver salida estándar y errores',
    'docker logs -f para seguimiento en tiempo real',
    'docker exec -it bash para entrar interactivamente',
    'docker top para ver procesos en contenedor',
    'docker inspect para detalles JSON',
    'docker stats para CPU/RAM en tiempo real',
    'docker cp para copiar archivos',
    'docker diff para ver cambios de archivos',
    'Timestamps (-t) útiles para debugging',
    'Guardar logs en archivo para análisis'
  ];

  const summary = `Debugging Docker:

• Logs: docker logs -f (tiempo real)
• Shell: docker exec -it bash
• Procesos: docker top
• Recursos: docker stats
• Detalles: docker inspect
• Copiar: docker cp
• Ver cambios: docker diff
• Problemas: ver logs primero
• High CPU/RAM: docker stats
• Sin conectividad: custom network`;

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
