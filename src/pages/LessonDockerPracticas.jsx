import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerPracticas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '🏷️', title: 'Versionado', definition: 'Etiquetar imágenes con versiones semánticas', example: 'mi-app:1.0.0, mi-app:latest' },
    { icon: '🔒', title: 'Seguridad', definition: 'No executar como root, escanear vulnerabilidades', example: 'docker scan mi-app' },
    { icon: '📝', title: 'Logging', definition: 'Enviar logs a sistemas centralizados', example: 'ELK, Splunk, CloudWatch' },
    { icon: '🔄', title: 'CI/CD', definition: 'Automatizar build y push de imágenes', example: 'GitHub Actions, GitLab CI' },
    { icon: '📊', title: 'Monitoreo', definition: 'Prometheus, Grafana para métricas', example: 'CPU, memoria, latencia' },
    { icon: '📦', title: 'Registry', definition: 'Almacenar imágenes privadamente o públicamente', example: 'Docker Hub, ECR, GCR' }
  ];

  const exercises = [
    {
      title: 'Flujo profesional de imagen',
      description: 'Build → Tag → Push → Deploy',
      solution: `# 1. Construir con versión
docker build -t mi-app:1.2.3 .

# 2. Etiquetar también como latest
docker tag mi-app:1.2.3 mi-app:latest

# 3. Etiquetar para registry
docker tag mi-app:1.2.3 myregistry.azurecr.io/mi-app:1.2.3

# 4. Subir
docker push myregistry.azurecr.io/mi-app:1.2.3

# 5. En producción (pull automático)
docker pull myregistry.azurecr.io/mi-app:1.2.3
docker run myregistry.azurecr.io/mi-app:1.2.3`
    }
  ];

  const sections = [
    {
      title: 'Versionado de imágenes',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Semantic Versioning: MAJOR.MINOR.PATCH
docker build -t mi-app:1.0.0 .
docker build -t mi-app:1.0.1 .  # Patch
docker build -t mi-app:1.1.0 .  # Minor
docker build -t mi-app:2.0.0 .  # Major

# Siempre tener latest
docker tag mi-app:1.0.0 mi-app:latest

# Registros privados
docker tag mi-app:1.0.0 myrepo.azurecr.io/mi-app:1.0.0
docker tag mi-app:1.0.0 myrepo.azurecr.io/mi-app:latest`}
          />
        </>
      )
    },

    {
      title: 'Seguridad',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✓ Seguro

# 1. Usuario no-root
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# 2. No hardcodear secretos
# Usar secrets en construcción
RUN --mount=type=secret,id=npm_token \\
  NPM_TOKEN=$(cat /run/secrets/npm_token) \\
  npm install

# 3. Actualizar imagen base
FROM node:18.16.1-alpine3.18

# 4. Escanear vulnerabilidades
# docker scan mi-app
# trivy image mi-app`}
          />

          <InfoBox type="warning">
            <strong>Nunca:</strong> Commit secretos, API keys, contraseñas en Dockerfile.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Mejores prácticas checkli',
      content: (
        <>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Usar imagen base ligera (alpine/slim)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Crear .dockerignore para no copiar basura</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Ordenar capas por frecuencia de cambio</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>No ejecutar como root</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Usar multi-stage builds para producción</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Versionar con semántica (1.2.3)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Mantener latest tag actualizado</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Agregar HEALTHCHECK</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Escanear vulnerabilidades antes de subir</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Usar secretos para credenciales, no ENV</span>
            </div>
          </div>
        </>
      )
    }
  ];

  const keyPoints = [
    'Semantic Versioning: MAJOR.MINOR.PATCH',
    'Siempre mantener latest tag',
    'No ejecutar como root en producción',
    'No hardcodear secretos en Dockerfile',
    'Escanear vulnerabilidades con docker scan',
    'Logging centralizado (ELK, Splunk)',
    'CI/CD automatiza build/test/push',
    'Monitoreo con Prometheus/Grafana',
    'Usar imagen base específica y actualizada',
    'Multi-stage para tamaño reducido'
  ];

  const summary = `Prácticas profesionales Docker:

• Versionado semántico (1.2.3)
• Mantener latest tag actualizado
• No ejecutar como root
• Escanear vulnerabilidades
• Logging centralizado
• CI/CD automatizado
• Monitoreo de métricas
• Usar secretos (no ENV)
• Imágenes base actualizadas
• Documentación en README`;

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
