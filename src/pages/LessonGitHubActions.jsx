import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGitHubActions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🤖',
      title: 'GitHub Actions',
      definition: 'Plataforma de automatización nativa de GitHub integrada en repositorios',
      example: 'Ejecutar tests, builds y despliegues directamente desde GitHub'
    },
    {
      icon: '📋',
      title: 'Workflow',
      definition: 'Archivo YAML que define automatizaciones en .github/workflows/',
      example: 'Define triggers, jobs, steps y acciones a ejecutar'
    },
    {
      icon: '🎯',
      title: 'Triggers',
      definition: 'Eventos que inician workflows (push, pull request, schedule)',
      example: 'on: [push, pull_request] ejecuta al hacer push o PR'
    },
    {
      icon: '👷',
      title: 'Jobs',
      definition: 'Conjuntos de steps que se ejecutan en paralelo o secuencial',
      example: 'job build, job test, job deploy pueden correr en paralelo'
    },
    {
      icon: '📝',
      title: 'Steps',
      definition: 'Acciones individuales dentro de un job (comandos, acciones)',
      example: 'Checkout código, setup Java, ejecutar Maven'
    },
    {
      icon: '📦',
      title: 'Actions',
      definition: 'Componentes reutilizables (community o propias)',
      example: 'actions/checkout, actions/setup-java, docker/build-push-action'
    }
  ];

  const exercises = [
    {
      title: 'Crear workflow simple de tests',
      description: 'Compila y ejecuta tests en Java cada vez que hay push',
      solution: `# .github/workflows/tests.yml
name: Tests

on:
  push:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          java-version: '11'
          cache: 'maven'
      - run: mvn clean test`
    },
    {
      title: 'Workflow con múltiples versiones de Java',
      description: 'Testea código en Java 11, 17 y 21 simultáneamente',
      solution: `name: Tests Multi-Java

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        java-version: ['11', '17', '21']
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          java-version: \${{ matrix.java-version }}
          cache: 'maven'
      - run: mvn clean test`
    }
  ];

  const sections = [
    {
      title: 'Introducción a GitHub Actions',
      content: (
        <>
          <p>GitHub Actions es la solución nativa de GitHub para CI/CD, incluida gratuitamente en todos los repositorios.</p>
          <CodeBlock
            language="bash"
            code={`# Estructura de GitHub Actions

.github/
  workflows/
    build.yml       # Workflow para compilar
    tests.yml       # Workflow para tests
    deploy.yml      # Workflow para despliegue

# Características clave
✓ Gratuito para repositorios públicos
✓ Integrado nativamente en GitHub
✓ 2000 minutos/mes gratis en privados
✓ Runners en cloud o self-hosted
✓ Marketplace de acciones reutilizables
✓ Secretos seguros integrados`}
          />
        </>
      )
    },
    {
      title: 'Estructura Básica de un Workflow',
      content: (
        <>
          <p>Un workflow YAML define triggers, jobs y steps a ejecutar.</p>
          <CodeBlock
            language="yaml"
            code={`# Estructura básica

name: Build & Test              # Nombre visible en GitHub

on:                             # Triggers
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 0 * * *'         # Diariamente

env:                            # Variables globales
  REGISTRY: ghcr.io
  IMAGE_NAME: mi-app

jobs:                           # Conjuntos de trabajo
  build:
    runs-on: ubuntu-latest      # Sistema operativo runner

    steps:                      # Pasos secuenciales
      - uses: actions/checkout@v3
        # Acción reutilizable

      - name: Set up JDK
        uses: actions/setup-java@v3
        with:
          java-version: '11'

      - name: Build
        run: mvn clean package
        # Comando shell

      - name: Upload reports
        if: always()            # Siempre ejecutar
        uses: actions/upload-artifact@v3
        with:
          name: test-reports
          path: target/surefire-reports/`}
          />
        </>
      )
    },
    {
      title: 'Triggers: Cuándo Ejecutar',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`# TRIGGERS: Events que inician workflows

# On push
on:
  push:
    branches: [main, develop]
    paths:
      - 'src/**'              # Solo si cambia src
      - 'pom.xml'
    paths-ignore:
      - 'README.md'           # Ignorar cambios en docs

# On pull request
on:
  pull_request:
    branches: [main]
    types: [opened, synchronize, reopened]

# On schedule (cron)
on:
  schedule:
    - cron: '0 2 * * *'       # Cada día 2 AM UTC

# Manual trigger
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Entorno a desplegar'
        required: true
        type: choice
        options:
          - staging
          - production

# Combinado
on:
  push:
  pull_request:
  schedule:
    - cron: '0 0 * * *'`}
          />
        </>
      )
    },
    {
      title: 'Actions Populares del Marketplace',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`# Acciones reutilizables más populares

# Checkout repositorio
- uses: actions/checkout@v3

# Setup Java
- uses: actions/setup-java@v3
  with:
    java-version: '11'
    cache: maven

# Setup Python
- uses: actions/setup-python@v4
  with:
    python-version: '3.11'

# Setup Node
- uses: actions/setup-node@v3
  with:
    node-version: '18'

# Docker build & push
- uses: docker/build-push-action@v4
  with:
    push: true
    tags: ghcr.io/usuario/imagen:latest

# SonarQube analysis
- uses: SonarSource/sonarcloud-github-action@master

# Slack notification
- uses: slackapi/slack-github-action@v1
  with:
    payload: |
      { "text": "Build \${{ job.status }}" }

# Crear release
- uses: actions/create-release@v1
  with:
    tag_name: v1.0.0`}
          />
          <InfoBox type="info">
            Busca acciones en GitHub Marketplace (github.com/marketplace/actions) y reutiliza componentes probados.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Workflow Completo: Build, Test, Deploy',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`name: Complete CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  # Job 1: Build y Tests
  build:
    runs-on: ubuntu-latest

    outputs:
      artifact-path: \${{ steps.build.outputs.artifact }}

    steps:
      - uses: actions/checkout@v3

      - name: Set up JDK 11
        uses: actions/setup-java@v3
        with:
          java-version: '11'
          cache: maven

      - name: Build with Maven
        id: build
        run: |
          mvn clean package
          echo "artifact=target/app.jar" >> \$GITHUB_OUTPUT

      - name: Run tests
        run: mvn test

      - name: Upload test reports
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-reports
          path: target/surefire-reports/

  # Job 2: Security scan (en paralelo)
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run OWASP dependency check
        run: |
          mvn org.owasp:dependency-check-maven:check

  # Job 3: Deploy (depende de build exitoso)
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Download artifact
        uses: actions/download-artifact@v3
        with:
          name: artifact

      - name: Deploy to production
        env:
          DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}
        run: |
          mkdir -p ~/.ssh
          echo "\$DEPLOY_KEY" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh -i ~/.ssh/deploy_key user@prod.example.com 'bash /opt/deploy.sh'`}
          />
        </>
      )
    },
    {
      title: 'Secretos y Variables Protegidas',
      content: (
        <>
          <p>Protege información sensible usando secretos de GitHub.</p>
          <CodeBlock
            language="bash"
            code={`# En GitHub: Settings → Secrets and Variables

# Crear secreto (desde interfaz web)
Name: DATABASE_PASSWORD
Value: (información sensible)

# En workflow:
- name: Deploy
  env:
    DB_PASSWORD: \${{ secrets.DATABASE_PASSWORD }}
    DB_USER: \${{ secrets.DATABASE_USER }}
  run: ./deploy.sh

# Variables públicas (no sensibles)
- name: Show version
  run: echo "Version: \${{ vars.APP_VERSION }}"

# Contextos disponibles
- run: echo "Branch: \${{ github.ref }}"
- run: echo "Actor: \${{ github.actor }}"
- run: echo "Run ID: \${{ github.run_id }}"
- run: echo "Job status: \${{ job.status }}"

# Outputs entre jobs
build:
  outputs:
    artifact: \${{ steps.build.outputs.file }}

deploy:
  needs: build
  run: echo "Using \${{ needs.build.outputs.artifact }}"`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'GitHub Actions integrado nativamente en GitHub',
    'Workflows YAML en .github/workflows/',
    'Triggers: push, pull_request, schedule, workflow_dispatch',
    'Jobs pueden ejecutarse en paralelo o secuencial',
    'Steps son acciones individuales (comandos o acciones reutilizables)',
    'Gratuito para repositorios públicos, 2000 min/mes en privados',
    'Marketplace tiene acciones reutilizables de comunidad',
    'Secretos protegen información sensible',
    'Outputs permiten pasar datos entre jobs',
    'Runners en cloud o self-hosted'
  ];

  const summary = `GitHub Actions es la solución nativa y gratuita para CI/CD:

• Workflows YAML en .github/workflows/
• Triggers automáticos: push, PR, schedule, manual
• Jobs en paralelo para máxima velocidad
• Actions reutilizables del Marketplace
• Secretos protegen tokens y passwords
• Integración perfecta con GitHub
• Gratuito para proyectos públicos
• 2000 min/mes gratis en privados
• Self-hosted runners para control total
• Base para DevOps profesional`;

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