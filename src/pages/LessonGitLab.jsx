import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGitLab() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🦊',
      title: 'GitLab',
      definition: 'Plataforma DevOps completa con Git, CI/CD integrado y gestión de proyectos',
      example: 'Crear proyecto en gitlab.com, pipelines automáticos'
    },
    {
      icon: '⚙️',
      title: 'CI/CD nativo',
      definition: 'Pipeline de integración continua y despliegue integrado en la plataforma',
      example: '.gitlab-ci.yml para automatizar tests y deploy'
    },
    {
      icon: '📦',
      title: 'GitLab Container Registry',
      definition: 'Almacenar y gestionar imágenes Docker directamente en GitLab',
      example: 'Push de Docker images a registry.gitlab.com'
    }
  ];

  const exercises = [
    {
      title: 'Crear proyecto en GitLab',
      description: 'Setup inicial de proyecto en GitLab',
      solution: `# 1. Crear cuenta en gitlab.com
# 2. Crear nuevo proyecto
# - Click "New project"
# - Nombre: mi-proyecto
# - Visibility: Private o Public

# 3. Clonar localmente
git clone https://gitlab.com/tu-usuario/mi-proyecto.git
cd mi-proyecto

# 4. Hacer cambios y push
git add .
git commit -m "Initial commit"
git push origin main`
    },
    {
      title: 'Crear pipeline CI/CD',
      description: 'Configurar automatización con .gitlab-ci.yml',
      solution: `# .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - npm install

test_job:
  stage: test
  script:
    - npm test

deploy_job:
  stage: deploy
  script:
    - echo "Deploying..."
  only:
    - main`
    }
  ];

  const keyPoints = [
    'GitLab es la alternativa open-source a GitHub',
    'CI/CD completamente integrado (GitHub usa Actions)',
    'GitLab Runner para ejecutar pipelines',
    'Container Registry nativo para Docker',
    'Merge Requests similar a Pull Requests',
    'Issues y Boards para gestión ágil',
    'Self-hosted option disponible',
    'Webhooks para integraciones',
    'Protected branches y merge rules',
    'SAST y seguridad integrada'
  ];

  const sections = [
    {
      title: '¿Qué es GitLab?',
      content: (
        <p>
          GitLab es una plataforma DevOps completa que incluye repositorio Git, CI/CD, gestión de proyectos,
          y más. A diferencia de GitHub que es principalmente hosting, GitLab es una suite completa para
          todo el ciclo de desarrollo. Disponible en cloud (gitlab.com) o self-hosted.
        </p>
      )
    },
    {
      title: 'Crear proyecto en GitLab',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# 1. Via GitLab UI
# gitlab.com → New project

# 2. Clonar y configurar
git clone https://gitlab.com/usuario/proyecto.git
cd proyecto

git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# 3. Agregar archivos
echo "# Proyecto" > README.md
git add .
git commit -m "Initial commit"
git push origin main`}
          />
        </>
      )
    },
    {
      title: 'CI/CD con GitLab',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# .gitlab-ci.yml en raíz del proyecto

image: node:18

stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm install
    - npm run test
  only:
    - merge_requests

build:
  stage: build
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/
  only:
    - main

deploy:
  stage: deploy
  script:
    - echo "Deploying to production..."
    - npm run deploy
  environment:
    name: production
    url: https://myapp.com
  only:
    - main`}
          />
          <InfoBox type="info">
            Los pipelines se ejecutan automáticamente en cada push o MR. El archivo .gitlab-ci.yml define los pasos.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Merge Requests - Flujo colaborativo',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Flujo de MR en GitLab

# 1. Crear rama
git checkout -b feature/login

# 2. Hacer cambios
git add .
git commit -m "feat: agregar login"
git push origin feature/login

# 3. En GitLab UI
# - Click "Create merge request"
# - Escribir descripción
# - Asignar a reviewer
# - Click "Create merge request"

# 4. CI/CD ejecuta automáticamente
# - Los pipelines corren en background
# - Se muestra resultado en el MR

# 5. Después de aprobación
# - Click "Merge" en GitLab
# - O mergear localmente:
git checkout main
git pull origin main
git merge feature/login
git push origin main`}
          />
        </>
      )
    },
    {
      title: 'GitLab Container Registry',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Usar registry.gitlab.com para Docker

# 1. Crear token de acceso
# GitLab → User Settings → Access Tokens

# 2. Login a registry
docker login registry.gitlab.com

# 3. Crear Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD npm start
EOF

# 4. Build y push
docker build -t registry.gitlab.com/usuario/proyecto:latest .
docker push registry.gitlab.com/usuario/proyecto:latest

# 5. Usar en .gitlab-ci.yml
image: registry.gitlab.com/usuario/proyecto:latest`}
          />
        </>
      )
    },
    {
      title: 'Issues y Boards - Gestión ágil',
      content: (
        <>
          <Table
            headers={['Funcionalidad', 'Descripción', 'Uso']}
            rows={[
              ['Issues', 'Reportar bugs, features, tareas', 'Crear, comentar, cerrar'],
              ['Labels', 'Categorizar issues', 'bug, feature, documentation'],
              ['Milestones', 'Agrupar por versión', 'v1.0, v2.0'],
              ['Boards', 'Vista Kanban', 'To Do → In Progress → Done'],
              ['Epics', 'Issues relacionados', 'Agrupar múltiples issues'],
            ]}
          />
          <CodeBlock
            language="bash"
            code={`# Crear issue desde commit
git commit -m "Fix login bug #42"

# Cuando mergeas, cierra automáticamente
# También soporta: Closes, Resolves, Fixes

# En descripción de MR:
# "This MR closes #42 and #43"`}
          />
        </>
      )
    },
    {
      title: 'GitLab Self-Hosted',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Instalar GitLab en tu servidor (Docker)

docker run --detach \\
  --hostname gitlab.example.com \\
  --publish 443:443 --publish 80:80 \\
  --name gitlab \\
  --restart always \\
  gitlab/gitlab-ee:latest

# Acceso en http://localhost
# Usuario: root
# Contraseña: (ver logs)

# Alternativa: usar Helm en Kubernetes
helm install gitlab gitlab/gitlab \\
  --set external-ip=your-ip-address`}
          />
          <InfoBox type="info">
            Self-hosted permite control total pero requiere mantenimiento.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Webhooks y Integraciones',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Configurar webhook
# Project → Settings → Webhooks

# Tipos de eventos
- Push events
- Merge requests events
- Issues events
- Wiki page events

# Integración con Slack
# Project → Integrations → Slack
# Recibir notificaciones en canal

# Webhook simple en Python
from flask import Flask, request

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    data = request.get_json()
    print(f"Event: {data['event_name']}")
    return 'OK'

if __name__ == '__main__':
    app.run(port=5000)`}
          />
        </>
      )
    }
  ];

  const summary = `GitLab como plataforma DevOps completa:

• Git + CI/CD integrado (no necesitas Actions)
• Container Registry nativo para Docker
• Merge Requests similar a Pull Requests
• Issues y Boards para gestión ágil
• GitLab Runner para ejecutar pipelines
• Self-hosted option disponible
• Webhooks para integraciones
• SAST y análisis de seguridad
• Protected branches y reglas
• Epics para relacionar issues`;

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