import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerFrontend() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '⚛️', title: 'React', definition: 'SPA compilada a HTML/JS/CSS estático', example: 'npm run build → dist/' },
    { icon: '🔧', title: 'Build', definition: 'Compilación a archivos estáticos', example: 'webpack, vite, etc' },
    { icon: '🌐', title: 'Web Server', definition: 'Nginx/Apache sirven archivos estáticos', example: 'nginx:alpine' },
    { icon: '📦', title: 'Node Builder', definition: 'Imagen pesada solo para compilar', example: 'node:18 (600MB)' },
    { icon: '🎯', title: 'Nginx Runtime', definition: 'Imagen ligera solo para servir', example: 'nginx:alpine (40MB)' },
    { icon: '🔄', title: 'COPY --from', definition: 'Trae build output de etapa anterior', example: 'COPY --from=builder /app/dist .' }
  ];

  const exercises = [
    {
      title: 'Multi-stage React',
      description: 'Build con Node, servir con Nginx',
      solution: `# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
    }
  ];

  const sections = [
    {
      title: 'Patrón Multi-Stage',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✗ MAL (1.5GB)
FROM node:18
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
# Resultado: todo en imagen (node_modules, src, etc)

# ✓ BIEN (50MB)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Resultado: solo dist/ servido por Nginx`}
          />
        </>
      )
    },

    {
      title: 'Nginx config',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
          />

          <CodeBlock
            language="text"
            code={`# nginx.conf - router SPA
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}`}
          />

          <InfoBox type="info">
            <strong>try_files:</strong> Redirige 404s a index.html para que React Router maneje rutas.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Docker Compose',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3001:3000"`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Multi-stage: node:18 builder + nginx:alpine runtime',
    'Build en Node, archivo estático con Nginx',
    'COPY --from=builder /app/dist /usr/share/nginx/html',
    'nginx.conf con try_files para SPA routing',
    'Tamaño final: 50-100MB',
    'Sin necesidad de Node en runtime',
    'Nginx servía estático es muy eficiente',
    'Cache headers en Nginx',
    'gzip compression automático',
    'Proxy a backend API en Node'
  ];

  const summary = `Frontend (React/Angular/Vue) en Docker:

• Multi-stage: Node builder + Nginx runtime
• npm run build → dist/
• COPY --from=builder para archivos estáticos
• Nginx config con try_files para SPA
• Tamaño final: 50-100MB
• Eficiente y rápido
• Proxy API requests al backend
• Gzip compression en Nginx
• Cache headers para assets
• Perfecto para producción`;

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
