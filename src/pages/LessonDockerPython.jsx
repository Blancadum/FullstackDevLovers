import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDockerPython() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    { icon: '🐍', title: 'Python', definition: 'Lenguaje interpretado, Flask/FastAPI populares', example: 'FastAPI server.py' },
    { icon: '📦', title: 'pip', definition: 'Gestor de paquetes de Python', example: 'pip install -r requirements.txt' },
    { icon: '⚙️', title: 'requirements.txt', definition: 'Dependencias del proyecto', example: 'fastapi==0.95.0' },
    { icon: '🚀', title: 'Uvicorn', definition: 'Servidor ASGI para Python', example: 'uvicorn main:app' },
    { icon: '🔄', title: 'venv', definition: 'Entorno virtual (NO necesario con Docker)', example: 'En Docker: no usar venv' },
    { icon: '💾', title: '--no-cache-dir', definition: 'No guardar paquetes descargados', example: 'pip install --no-cache-dir' }
  ];

  const exercises = [
    {
      title: 'Dockerfile para FastAPI',
      description: 'API rápida con Python',
      solution: `FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`
    }
  ];

  const sections = [
    {
      title: 'FastAPI en Docker',
      content: (
        <>
          <CodeBlock
            language="dockerfile"
            code={`# Multi-stage si es necesario
FROM python:3.10-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.10-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`}
          />

          <InfoBox type="info">
            <strong>Sin venv:</strong> En Docker no necesitas entorno virtual. El contenedor ya es aislado.
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
  api:
    build: .
    ports:
      - "8000:8000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/mydb
    volumes:
      - ./src:/app/src  # Desarrollo

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: pass`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'python:3.10-slim es imagen base ideal',
    'requirements.txt en /app primero (cacheo)',
    'pip install --no-cache-dir ahorra espacio',
    'No necesitas venv en Docker',
    'Uvicorn para ASGI (FastAPI, Starlette)',
    'Host 0.0.0.0 para ser accesible desde fuera',
    '--reload solo en desarrollo',
    'Postgres compatible con Python via psycopg2',
    'Multi-stage si necesitas compilar extensiones',
    'Tamaño final: ~150MB con dependencias'
  ];

  const summary = `Python en Docker:

• Imagen base: python:3.10-slim
• requirements.txt con --no-cache-dir
• Uvicorn para servir FastAPI/Starlette
• Host 0.0.0.0 obligatorio
• Sin venv (Docker es el aislamiento)
• Multi-stage si hay extensiones C
• Postgres + psycopg2 típico
• volumes para desarrollo
• Tamaño ~150-200MB`;

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
