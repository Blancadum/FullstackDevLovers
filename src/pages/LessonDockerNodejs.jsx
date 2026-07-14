import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerNodejs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '📦', title: 'Node.js', definition: 'Runtime JavaScript, Express popular', example: 'node server.js' },
    { icon: '🔧', title: 'npm', definition: 'Gestor de paquetes, package.json', example: 'npm install' },
    { icon: '📝', title: 'package.json', definition: 'Dependencias y scripts', example: 'npm start, npm test' },
    { icon: '🎯', title: 'node_modules', definition: 'Directorio de dependencias (GORDO)', example: '100-500MB' },
    { icon: '⚡', title: 'Alpine', definition: 'Versión ligera de Node', example: 'node:18-alpine (170MB)' },
    { icon: '🔄', title: 'nodemon', definition: 'Auto-reload en desarrollo', example: 'npm i -D nodemon' }
  ];

  const exercises = [
    {
      title: 'Dockerfile Express básico',
      description: 'API Node/Express',
      solution: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]`
    }
  ];

  const sections = [
    {
      title: 'Node.js en Docker',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✓ Optimizado
FROM node:18-alpine

WORKDIR /app

# Dependencias (cacheo)
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Código
COPY . .

EXPOSE 3000
USER node  # No root
CMD ["node", "server.js"]`}
          />

          <InfoBox type="info">
            <strong>npm ci:</strong> Mejor que npm install (más determinístico, para CI/CD)
          </InfoBox>
        </>
      )
    },

    {
      title: 'Desarrollo vs Producción',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# Producción: --only=production
RUN npm ci --only=production

# Desarrollo: todas las dependencias
RUN npm ci

# O usar .dockerignore
# node_modules (no copiar local, reinstalar en contenedor)`}
          />

          <CodeBlock
            language="yaml"
            code={`# docker-compose.yml - Desarrollo
version: '3.8'
services:
  app:
    build: .
    volumes:
      - ./src:/app/src  # Hot reload
    ports:
      - "3000:3000"
    command: npx nodemon server.js
    environment:
      NODE_ENV: development`}
          />
        </>
      )
    },

    {
      title: 'Docker Compose con BD',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/mydb
    volumes:
      - ./src:/app/src  # Desarrollo

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: pass
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'node:18-alpine es imagen base ideal (~170MB)',
    'npm ci mejor que npm install (determinístico)',
    'COPY package*.json primero para cacheo',
    '--only=production en prod (sin devDependencies)',
    'npm cache clean --force ahorra espacio',
    'USER node para no ejecutar como root',
    'Volúmenes para desarrollo (hot-reload)',
    'nodemon para auto-restart en desarrollo',
    'NODE_ENV=production en producción',
    'Tamaño final: 150-250MB'
  ];

  const summary = `Node.js/Express en Docker:

• Imagen base: node:18-alpine
• npm ci --only=production para prod
• COPY package*.json primero (cacheo)
• npm cache clean --force para espacio
• USER node para seguridad
• Volúmenes para desarrollo (hot-reload)
• nodemon para auto-restart
• NODE_ENV variable importante
• DATABASE_URL para conexiones
• Tamaño final: 150-250MB
• Rápido arranque y build`;

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
