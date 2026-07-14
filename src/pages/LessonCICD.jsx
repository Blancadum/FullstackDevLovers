import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonCICD() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔄',
      title: 'CI/CD',
      definition: 'Integración Continua y Despliegue Continuo - automatización de compilación y despliegue',
      example: 'Cada push a git → compilación automática → tests → despliegue a producción'
    },
    {
      icon: '🔗',
      title: 'Integración Continua (CI)',
      definition: 'Proceso de compilar y testear automáticamente cada cambio',
      example: 'Jenkins, GitLab CI, GitHub Actions verifican código en cada push'
    },
    {
      icon: '🚀',
      title: 'Despliegue Continuo (CD)',
      definition: 'Liberar automáticamente cambios a producción después de pasar tests',
      example: 'Código probado se deploya automáticamente sin intervención manual'
    },
    {
      icon: '🔌',
      title: 'Webhooks',
      definition: 'Triggers que inician pipelines al detectar eventos (push, PR)',
      example: 'GitHub envía notificación a CI/CD cuando hay un push'
    },
    {
      icon: '📋',
      title: 'Pipeline',
      definition: 'Serie de etapas que se ejecutan secuencialmente',
      example: 'Build → Test → Security Scan → Deploy Staging → Deploy Production'
    },
    {
      icon: '✅',
      title: 'Artifacts',
      definition: 'Salidas compiladas del pipeline (JARs, DLLs, imágenes Docker)',
      example: 'Se almacenan para despliegue o distribución'
    }
  ];

  const exercises = [
    {
      title: 'Configuración básica de CI para Maven',
      description: 'Script que compila y testa un proyecto Maven automáticamente',
      solution: `# .gitlab-ci.yml (GitLab CI)
image: openjdk:11

stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - mvn clean compile

test:
  stage: test
  script:
    - mvn test

deploy:
  stage: deploy
  script:
    - mvn clean package
  artifacts:
    paths:
      - target/mi-app.jar`
    },
    {
      title: 'Pipeline multi-rama con GitHub Actions',
      description: 'Diferentes acciones según rama (develop vs main)',
      solution: `name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          java-version: '11'

      - name: Build with Maven
        run: mvn clean package

      - name: Deploy to Production
        if: github.ref == 'refs/heads/main'
        run: ./deploy.sh`
    }
  ];

  const sections = [
    {
      title: 'Conceptos de CI/CD',
      content: (
        <>
          <p>CI/CD automatiza construcción, testing y despliegue para entregar software más rápidamente y con menos errores.</p>
          <CodeBlock
            language="bash"
            code={`CI/CD WORKFLOW:

1. Developer pushea código a git
   ↓
2. Webhook notifica al servidor CI/CD
   ↓
3. Servidor clona repositorio
   ↓
4. Ejecuta build (mvn clean package)
   ↓
5. Ejecuta tests (unit + integration)
   ↓
6. Ejecuta análisis de código (SonarQube)
   ↓
7. Si todo pasa: crea artifact (JAR, Docker image)
   ↓
8. Despliega automáticamente a staging
   ↓
9. Ejecuta smoke tests en staging
   ↓
10. Si todo OK: despliega a producción
    ↓
11. Monitorea y notifica resultados`}
          />
          <InfoBox type="info">
            CI/CD acelera release cycles, reduce bugs humanos, y permite rollback rápido en caso de problemas.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Herramientas Populares',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`OPCIONES DE CI/CD:

GitHub Actions:
✓ Nativo en GitHub
✓ Gratuito para repositorios públicos
✓ Buen soporte de integración
✓ Runners en cloud u on-premises

GitLab CI:
✓ Nativo en GitLab
✓ Muy poderoso y flexible
✓ Soporta on-premises
✓ Excelente para DevOps

Jenkins:
✓ Open source
✓ On-premises
✓ Enormemente flexible
✓ Comunidad grande
✗ Requiere más mantenimiento

CircleCI:
✓ Cloud-based
✓ Buenas integraciones
✓ Interface amigable
✓ Buen rendimiento

Gitea + Drone:
✓ Self-hosted
✓ Ligero
✓ Rápido
✗ Comunidad más pequeña`}
          />
        </>
      )
    },
    {
      title: 'GitHub Actions: Ejemplo Práctico',
      content: (
        <>
          <p>GitHub Actions es la opción nativa y gratuita para repositorios en GitHub.</p>
          <CodeBlock
            language="yaml"
            code={`# .github/workflows/maven.yml

name: Java CI with Maven

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    # Checkout del código
    - uses: actions/checkout@v3

    # Setup Java
    - name: Set up JDK 11
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'temurin'
        cache: maven

    # Build
    - name: Build with Maven
      run: mvn clean package -DskipTests

    # Tests
    - name: Run tests
      run: mvn test

    # Quality gate (opcional)
    - name: SonarQube Scan
      run: mvn sonar:sonar \\
        -Dsonar.projectKey=mi-app \\
        -Dsonar.sources=src \\
        -Dsonar.host.url=https://sonarcloud.io \\
        -Dsonar.login=\${{ secrets.SONAR_TOKEN }}

    # Subir artifacts
    - name: Upload artifact
      uses: actions/upload-artifact@v3
      with:
        name: maven-build
        path: target/mi-app.jar

    # Deploy (si es main branch)
    - name: Deploy to Production
      if: github.ref == 'refs/heads/main' && success()
      run: |
        curl -X POST https://api.heroku.com/apps/mi-app/deployments \\
          -H "Authorization: Bearer \${{ secrets.HEROKU_TOKEN }}" \\
          -d '{"ref":"main"}'`}
          />
        </>
      )
    },
    {
      title: 'GitLab CI: Configuración Avanzada',
      content: (
        <>
          <p>GitLab CI ofrece control granular sobre pipeline stages y deployments.</p>
          <CodeBlock
            language="yaml"
            code={`# .gitlab-ci.yml

image: openjdk:11

variables:
  DOCKER_IMAGE: \${CI_REGISTRY}/\${CI_PROJECT_PATH}

stages:
  - build
  - test
  - scan
  - package
  - deploy

# Build stage
build:
  stage: build
  script:
    - mvn clean compile
  artifacts:
    paths:
      - target/
    expire_in: 1 hour

# Test stage
test:unit:
  stage: test
  script:
    - mvn test
  coverage: '/coverage: (\\d+)%/'

test:integration:
  stage: test
  services:
    - mysql:8
  script:
    - mvn verify

# Security scan
scan:code:
  stage: scan
  script:
    - mvn sonar:sonar
  only:
    - merge_requests

# Package Docker image
package:docker:
  stage: package
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t \${DOCKER_IMAGE}:latest .
    - docker push \${DOCKER_IMAGE}:latest

# Deploy stages
deploy:staging:
  stage: deploy
  script:
    - ./deploy-staging.sh
  environment:
    name: staging
  only:
    - develop

deploy:production:
  stage: deploy
  script:
    - ./deploy-production.sh
  environment:
    name: production
  only:
    - main
  when: manual  # Requiere aprobación manual`}
          />
        </>
      )
    },
    {
      title: 'Mejores Prácticas en CI/CD',
      content: (
        <>
          <CodeBlock
            language="yaml"
            code={`# ✓ BUENA PRÁCTICA: Tests rápidos en CI

stages:
  - lint      # Segundos
  - build     # Minutos
  - unit      # Minutos
  - integration # Puede tomar más tiempo
  - deploy

# ✓ Fallar rápido: tests críticos primero
# Compilar antes de ejecutar tests

# ✓ Cachés para dependencias
cache:
  paths:
    - .m2/repository/
  key: "\${CI_COMMIT_REF_SLUG}"

# ✓ Artifacts solo para lo necesario
artifacts:
  paths:
    - target/mi-app.jar
  expire_in: 1 week

# ✓ Secretos en variables de entorno
deploy:production:
  script:
    - export DB_PASSWORD=\$PROD_DB_PASSWORD
    - ./deploy.sh

# ✓ Diferentes comportamientos por rama
only:
  - merge_requests
  - main
  - develop

# ✗ EVITAR: Tests lentos en cada push
# ✗ EVITAR: Cachés viejos
# ✗ EVITAR: Secretos en archivos SCM`}
          />
          <InfoBox type="success">
            Keep CI/CD fast (&lt; 10min), fail fast with unit tests first, cache dependencies, and use secrets properly.
          </InfoBox>
        </>
      )
    }
  ];

  const keyPoints = [
    'CI/CD automatiza build, test y despliegue',
    'CI = Integración Continua (compilar y testear cada push)',
    'CD = Despliegue Continuo (liberar automáticamente)',
    'Webhooks triggers CI/CD cuando hay cambios',
    'Pipeline stages se ejecutan secuencialmente',
    'Fallar rápido: tests críticos primero',
    'Artifacts se generan después de pasar tests',
    'Variables de entorno para secretos (tokens, passwords)',
    'Diferentes comportamientos por rama (develop vs main)',
    'Monitoreo y rollback automático en caso de fallos'
  ];

  const summary = `CI/CD es fundamental en desarrollo profesional:

• Automatiza compilación, testing y despliegue
• Cada push dispara pipeline automático
• Fallar rápido detecta problemas antes
• Artifacts se almacenan y pueden desplegarse
• Variables de entorno protegen secretos
• Diferentes pipelines para diferentes ramas
• Monitoreo detecta problemas en producción
• Rollback rápido si hay fallos
• GitHub Actions, GitLab CI, Jenkins son opciones populares
• Base para prácticas DevOps profesionales`;

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