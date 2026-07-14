import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonBitbucket() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🪣',
      title: 'Bitbucket',
      definition: 'Plataforma Git de Atlassian, enfocada en empresas con integración Jira',
      example: 'Crear repo en bitbucket.org, vincular con Jira'
    },
    {
      icon: '📋',
      title: 'Jira Integration',
      definition: 'Conexión nativa con Jira para gestión de proyectos y tracking',
      example: 'Commit linked a Jira issue, automático update de status'
    },
    {
      icon: '🔐',
      title: 'Bitbucket Pipelines',
      definition: 'CI/CD integrado similar a GitHub Actions pero sin costo extra',
      example: 'bitbucket-pipelines.yml para automatizar tests'
    }
  ];

  const exercises = [
    {
      title: 'Crear repositorio en Bitbucket',
      description: 'Setup de proyecto en Bitbucket',
      solution: `# 1. Crear cuenta en bitbucket.org
# 2. Crear repositorio
# - Click "Create repository"
# - Nombrar: mi-proyecto
# - Seleccionar Git
# - Crear

# 3. Clonar
git clone https://bitbucket.org/tu-usuario/mi-proyecto.git
cd mi-proyecto

# 4. Primer commit
git add .
git commit -m "Initial commit"
git push origin main`
    },
    {
      title: 'Bitbucket Pipelines CI/CD',
      description: 'Configurar automatización en Bitbucket',
      solution: `# bitbucket-pipelines.yml
image: node:18

pipelines:
  default:
    - step:
        name: Build and Test
        caches:
          - node
        script:
          - npm install
          - npm test
          - npm run build
  branches:
    main:
      - step:
          name: Deploy to Production
          trigger: manual
          script:
            - echo "Deploying to production..."
            - npm run deploy`
    }
  ];

  const keyPoints = [
    'Bitbucket es de Atlassian (como Jira, Confluence)',
    'Integración perfecta con Jira enterprise',
    'Bitbucket Pipelines para CI/CD',
    'Pull Requests con code review robusto',
    'Gratuito para equipos pequeños',
    'Soporte para Mercurial y Git',
    'Branch permissions y merge strategies',
    'Bitbucket Data Center para self-hosted',
    'API robusta para integraciones',
    'Issues y project management'
  ];

  const sections = [
    {
      title: '¿Qué es Bitbucket?',
      content: (
        <p>
          Bitbucket es la plataforma Git de Atlassian, enfocada principalmente en empresas y equipos que
          ya usan Jira para gestión de proyectos. Ofrece repositorios privados gratuitos, CI/CD integrado,
          y está optimizado para integración con el ecosistema Atlassian.
        </p>
      )
    },
    {
      title: 'Crear primer repositorio',
      content: (
        <>
          <CodeBlock
            code={`# 1. Crear cuenta en bitbucket.org
# 2. Crear repositorio
# Click "Create repository"
# - Repository name: mi-proyecto
# - Access level: Private
# - Git
# - Click "Create"

# 3. Clonar
git clone https://bitbucket.org/usuario/mi-proyecto.git
cd mi-proyecto

# 4. Configurar
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# 5. Primer push
echo "# Mi Proyecto" > README.md
git add .
git commit -m "Initial commit"
git push origin main`}
          />
        </>
      )
    },
    {
      title: 'Bitbucket Pipelines - CI/CD',
      content: (
        <>
          <CodeBlock
            code={`# bitbucket-pipelines.yml en raíz

image: node:18

definitions:
  steps:
    - step: &build-test
        name: Build & Test
        caches:
          - node
        script:
          - npm install
          - npm run lint
          - npm test
          - npm run build
        artifacts:
          - dist/**

pipelines:
  default:
    - step: *build-test

  branches:
    main:
      - step: *build-test
      - step:
          name: Deploy
          trigger: manual
          script:
            - npm run deploy`}
          />
          <InfoBox type="info">
            Bitbucket Pipelines incluye minutos gratis de CI/CD sin costo extra.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Pull Requests - Code Review',
      content: (
        <>
          <CodeBlock
            code={`# Flujo de PR en Bitbucket

# 1. Crear rama
git checkout -b feature/nueva-feature

# 2. Hacer cambios
git add .
git commit -m "feat: agregar feature"
git push origin feature/nueva-feature

# 3. En Bitbucket UI
# - Click "Create pull request"
# - Título y descripción
# - Asignar reviewer
# - Verificar Pipelines status
# - Click "Create"

# 4. Review y mejoras
# - Los reviewers comentan
# - Hacer cambios y push
# - Bitbucket actualiza PR automáticamente

# 5. Mergear
# - Click "Merge" cuando está aprobado
# - Opciones: Merge commit, Squash, Rebase`}
          />
        </>
      )
    },
    {
      title: 'Integración con Jira',
      content: (
        <>
          <Table
            headers={['Funcionalidad', 'Descripción', 'Beneficio']}
            rows={[
              ['Commits linked', 'Vincular commits a Jira issues', 'Auto-track de tiempo'],
              ['Branch naming', 'Branches nombradas con JIRA-123', 'Auto-link'],
              ['PR linking', 'PR describe Jira issue', 'Context automático'],
              ['Auto-transition', 'Cambiar status de issue en Jira', 'Workflow automático'],
              ['Timeline view', 'Ver commits en Jira timeline', 'Trazabilidad'],
            ]}
          />
          <CodeBlock
            code={`# Commit vinculado a Jira
git commit -m "JIRA-123: Fix login validation"

# En descripción de PR
# "This PR closes JIRA-456 and JIRA-457"

# Resultado: En Jira, el issue se actualiza automáticamente
# - Show commit hash
# - Link al PR
# - Cambiar status (opcional)`}
          />
        </>
      )
    },
    {
      title: 'Branch Permissions y Strategies',
      content: (
        <>
          <CodeBlock
            code={`# Configurar protección de rama
# Repository → Settings → Branch permissions

# Reglas para main:
- Require pull requests for all commits
- Require approvals (1-2 reviewers)
- Require builds to pass
- Require code quality tests to pass
- Dismiss approvals when commits are pushed

# Merge strategies disponibles
- Merge commit (keep all history)
- Squash (one commit)
- Rebase (clean history)

# En bitbucket-pipelines.yml
pipelines:
  branches:
    main:
      - step:
          name: Quality Check
          script:
            - npm run lint
            - npm test`}
          />
        </>
      )
    },
    {
      title: 'Bitbucket Data Center - Self-Hosted',
      content: (
        <>
          <CodeBlock
            code={`# Instalar Bitbucket Data Center en servidor

# 1. Requisitos
# - Java 11+
# - PostgreSQL o MySQL
# - 8GB RAM mínimo

# 2. Descargar e instalar
wget https://www.atlassian.com/software/bitbucket/downloads/binary/atlassian-bitbucket-7.x.x.tar.gz
tar -xzf atlassian-bitbucket-7.x.x.tar.gz
cd atlassian-bitbucket-7.x.x/bin
./start-bitbucket.sh

# 3. Acceder en
http://localhost:7990

# 4. Configurar base de datos
# Seguir wizard de instalación

# Alternativa: Docker
docker run -d -p 7990:7990 atlassian/bitbucket-server`}
          />
          <InfoBox type="info">
            Data Center es para empresas grandes con múltiples instancias.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Webhooks y Hooks',
      content: (
        <>
          <CodeBlock
            code={`# Configurar webhook
# Repository → Settings → Webhooks

# Tipos de eventos
POST /webhook on:
- repo:push
- pullrequest:created
- pullrequest:updated
- pullrequest:merged

# Webhook handler simple
from flask import Flask, request
import hmac
import hashlib

app = Flask(__name__)
SECRET = 'tu-webhook-secret'

@app.route('/bitbucket-webhook', methods=['POST'])
def handle_webhook():
    # Verificar firma
    signature = request.headers.get('X-Hub-Signature')
    payload = request.get_data()

    expected_sig = 'sha256=' + hmac.new(
        SECRET.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()

    if signature != expected_sig:
        return 'Invalid', 401

    data = request.get_json()
    print(f"Event: {data['eventKey']}")
    return 'OK', 200`}
          />
        </>
      )
    }
  ];

  const summary = `Bitbucket como plataforma Git empresarial:

• Repositorios privados gratuitos
• Integración perfecta con Jira
• Bitbucket Pipelines para CI/CD
• Pull Requests con code review robusto
• Branch permissions y merge strategies
• Bitbucket Data Center para self-hosted
• Webhooks y API completa
• Auto-link commits a Jira issues
• Soporte para equipos grandes
• Timeline y traceability`;

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