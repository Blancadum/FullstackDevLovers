import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerMultistage() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '🏗️', title: 'Builder Stage', definition: 'Etapa de construcción con herramientas pesadas', example: 'Node:18 (600MB) para compilar' },
    { icon: '🎯', title: 'Runtime Stage', definition: 'Etapa ligera con solo lo necesario', example: 'Nginx:alpine (40MB) para servir' },
    { icon: '📋', title: 'AS alias', definition: 'Nombra etapas para referencias cruzadas', example: 'FROM node:18 AS builder' },
    { icon: '📦', title: 'COPY --from', definition: 'Copia solo lo necesario de etapa anterior', example: 'COPY --from=builder /app/dist .' },
    { icon: '💾', title: 'Tamaño reducido', definition: 'Imagen final mucho más pequeña', example: '1.5GB → 50MB' },
    { icon: '⚡', title: 'Rendimiento', definition: 'Builds más rápidos, descarga más veloz', example: 'Menos datos = menos tiempo' }
  ];

  const exercises = [
    {
      title: 'Multi-stage para React',
      description: 'Build en Node, servir con Nginx',
      solution: `# Etapa 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
    }
  ];

  const sections = [
    {
      title: 'Por qué Multi-Stage',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# ✗ MAL: Imagen de 1.5GB (todo dentro)
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]
# Resultado: node_modules, src, tools de build... TODO en la imagen final

# ✓ BIEN: Imagen de 50MB (solo lo esencial)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist .
EXPOSE 3000
CMD ["node", "server.js"]
# Resultado: solo dist/ en la imagen final`}
          />

          <InfoBox type="success">
            <strong>Reducción:</strong> 30x más pequeño, descarga 30x más rápida, deploy 30x más rápido.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Ejemplos: Java, Python, Frontend',
      content: (
        <>
          <div className="space-y-4">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
              <h5 className="font-bold text-orange-900 mb-2">Java</h5>
              <CodeBlock
                language="dockerfile"
                code={`FROM maven:3.8.1-openjdk-11 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]`}
              />
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h5 className="font-bold text-blue-900 mb-2">Python</h5>
              <CodeBlock
                language="dockerfile"
                code={`FROM python:3.10 AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.10-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["uvicorn", "main:app"]`}
              />
            </div>
          </div>
        </>
      )
    }
  ];

  const keyPoints = [
    'Multi-stage = múltiples FROM en mismo Dockerfile',
    'Builder stage: herramientas pesadas, compilación',
    'Runtime stage: base ligera, solo lo esencial',
    'COPY --from=stageName copia entre etapas',
    'Imagen final solo contiene lo necesario',
    'Reducción típica: 60-90% de tamaño',
    'Nombre etapas con AS para claridad',
    'Etapas pueden copiar una de otra',
    'No hay límite de etapas',
    'Builds más rápidos por menor descarga'
  ];

  const summary = `Multi-stage builds para imágenes eficientes:

• Etapa 1 (Builder): Compila con herramientas pesadas
• Etapa 2 (Runtime): Base ligera, solo lo compilado
• COPY --from=builder: Trae solo lo necesario
• Resultado: Imagen 30-90% más pequeña
• Aplicable: Frontend, Backend, cualquier build
• node:18 (600MB) → nginx:alpine (40MB)
• maven (900MB) → openjdk-slim (200MB)
• Uso: Producción, distribución, registros`;

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
