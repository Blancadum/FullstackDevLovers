import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerOptimizacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '🪶', title: 'Alpine', definition: 'Distribución Linux ultra-ligera para contenedores', example: 'node:18-alpine (170MB vs 900MB)' },
    { icon: '⚡', title: 'Layer Caching', definition: 'Reutiliza capas no modificadas', example: 'COPY package.json antes que código' },
    { icon: '🗑️', title: 'Limpieza', definition: 'Elimina archivos temporales en construcción', example: 'RUN apt-get clean && rm -rf /var/lib/apt/lists/*' },
    { icon: '🚫', title: '.dockerignore', definition: 'No copia archivos innecesarios', example: 'node_modules, .git, .env' },
    { icon: '🔐', title: 'Seguridad', definition: 'No ejecutar como root, actualizar librerías', example: 'USER appuser' },
    { icon: '📊', title: 'Monitoreo', definition: 'Limitar recursos, health checks', example: '-m 512m, HEALTHCHECK' }
  ];

  const exercises = [
    {
      title: 'Optimizar Dockerfile Node.js',
      description: 'Reducir tamaño y mejorar seguridad',
      solution: `# ✓ Optimizado
FROM node:18-alpine

WORKDIR /app

# Cambios infrequentes primero
COPY package*.json ./
RUN npm install --only=production && \\
    npm cache clean --force

# Código (cambia frecuentemente)
COPY . .

# Usuario no-root
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001
USER nodejs

EXPOSE 3000
HEALTHCHECK --interval=30s CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"
CMD ["node", "server.js"]`
    }
  ];

  const sections = [
    {
      title: 'Seleccionar imagen base',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✗ Pesada (900MB)
FROM node:18
FROM python:3.10
FROM ubuntu:22.04

# ✓ Ligera (50-170MB)
FROM node:18-alpine
FROM python:3.10-slim
FROM alpine:latest

# ✓ Muy específica para producción
FROM node:18.16.1-alpine3.18`}
          />
        </>
      )
    },

    {
      title: 'Optimizar capas y cachés',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✓ Ordena por frecuencia de cambio
FROM node:18-alpine

WORKDIR /app

# Capa 1: Casi nunca cambia
COPY package*.json ./
RUN npm install --production

# Capa 2: Cambia frecuentemente
COPY . .

# Capa 3: Configuración
EXPOSE 3000
CMD ["node", "server.js"]

# Resultado: cambios al código no invalidan npm install`}
          />

          <InfoBox type="info">
            <strong>Cache invalida:</strong> Si COPY . . va después de RUN npm install y cambias código, npm install se ejecuta de nuevo innecesariamente.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Seguridad',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✗ Inseguro: ejecuta como root
FROM node:18-alpine
COPY . .
CMD ["node", "server.js"]

# ✓ Seguro: usuario no-root
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001
USER nodejs
COPY . .
CMD ["node", "server.js"]

# ✓ También: actualizar base
FROM node:18-alpine
RUN apk update && apk upgrade && apk add dumb-init
USER node  # Imagen ya tiene usuario 'node'
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "server.js"]`}
          />
        </>
      )
    },

    {
      title: 'Health Checks',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# Verificar que app está saludable
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# Con wget
HEALTHCHECK CMD wget --quiet --tries=1 --spider http://localhost:3000/health

# Con comando custom
HEALTHCHECK CMD node /app/health-check.js`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Alpine es 5-10x más ligera que distribuciones normales',
    'Slim es versión intermedia (más pequeña que base)',
    'Ordenar capas por frecuencia de cambio',
    'COPY package.json antes que código para caché',
    '.dockerignore evita node_modules, .git, etc',
    'Limpiar cache de paquetes después de instalar',
    'No ejecutar como root por seguridad',
    'HEALTHCHECK automático en Compose y Kubernetes',
    'Limitar recursos con -m (memoria) y --cpus',
    'Versionar imagen base (node:18.16.1-alpine3.18)'
  ];

  const summary = `Optimización Docker:

• Imagen base ligera (alpine/slim)
• Ordena capas por frecuencia de cambio
• Copia package.json antes que código
• .dockerignore para no copiar basura
• Limpiar cache: npm cache clean, apt-get clean
• Usuario no-root para seguridad
• HEALTHCHECK para monitoreo
• Limitar recursos en producción
• Multi-stage para imágenes finales pequeñas
• Resultado: imágenes rápidas, seguras, eficientes`;

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
