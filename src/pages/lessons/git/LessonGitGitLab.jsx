import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitGitLab() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Crear proyecto en GitLab',
      description: 'Inicializar repositorio en GitLab.',
      solution: `# En GitLab.com:
# 1. Click en + > New project
# 2. Seleccionar "Create blank project"
# 3. Nombre del proyecto (ej: mi-api)
# 4. Visibilidad (Public/Private)
# 5. Click "Create project"

# En terminal:
git remote add origin https://gitlab.com/tu-usuario/mi-api.git
git branch -M main
git push -u origin main`
    },
    {
      title: 'Usar GitLab CI/CD con .gitlab-ci.yml',
      description: 'Configurar pipeline automático en GitLab.',
      solution: `# Crear archivo .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

test:
  stage: test
  script:
    - npm test
  only:
    - merge_requests

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main`
    },
    {
      title: 'Crear Merge Request en GitLab',
      description: 'Abrir MR en GitLab (equivalente a PR de GitHub).',
      solution: `# En GitLab:
# 1. Ir a Merge Requests > New merge request
# 2. Seleccionar rama source (tu rama)
# 3. Seleccionar rama target (main)
# 4. Título y descripción
# 5. Asignar reviewers
# 6. Click "Create merge request"

# En terminal (con GitLab CLI):
glab mr create --title "feat: agregar API" --description "Nueva API REST"`
    },
    {
      title: 'Usar GitLab Issues y Boards',
      description: 'Gestionar tareas y flujo de trabajo.',
      solution: `# En GitLab:
# Issues > New issue
# Título y descripción
# Asignar a milestone
# Asignar labels (bug, feature, ready)

# Vincular MR a Issue:
# En descripción escribir: Closes #123

# Ver en Board:
# Click en Board para ver tablero kanban
# Las issues aparecen automáticamente`
    },
    {
      title: 'Usar Variables en GitLab CI',
      description: 'Configurar secrets y variables de entorno.',
      solution: `# En GitLab (Settings > CI/CD > Variables):
# Crear variable: DATABASE_URL
# Crear variable: API_KEY (marcar como "Protected")

# En .gitlab-ci.yml:
deploy:
  stage: deploy
  script:
    - echo $DATABASE_URL  # Acceder a variable
    - npm run deploy
  environment:
    name: production
    url: https://miapp.com`
    },
    {
      title: 'Crear deployment environment',
      description: 'Gestionar diferentes ambientes (dev, staging, prod).',
      solution: `# En .gitlab-ci.yml:
deploy_staging:
  stage: deploy
  script:
    - npm run deploy:staging
  environment:
    name: staging
    url: https://staging.miapp.com

deploy_production:
  stage: deploy
  script:
    - npm run deploy:prod
  environment:
    name: production
    url: https://miapp.com
  only:
    - main`
    },
    {
      title: 'Usar GitLab protected branches',
      description: 'Proteger ramas principales con reglas.',
      solution: `# En GitLab (Settings > Repository > Protected branches):
# Rama: main
# Allowed to merge: Maintainers
# Allowed to push: Maintainers
# Require MR approvals: 2

# Esto asegura que main tenga código revisado y aprobado`
    },
    {
      title: 'Usar Group Projects en GitLab',
      description: 'Organizar múltiples proyectos en un grupo.',
      solution: `# En GitLab:
# Groups > New group
# Nombre (ej: backend-team)
# Descripción
# Visibilidad

# Ahora puedes:
# - Agregar proyectos al grupo
# - Asignar permisos al grupo
# - Usar shared runners del grupo
# - Acceder como: gitlab.com/backend-team/mi-proyecto`
    }
  ];

  return (
    <>
      <LessonLayout
        title="GitLab - Gestión Integral de Proyectos"
        description="Domina GitLab para desarrollo empresarial con CI/CD integrado"
        breadcrumbs={breadcrumbs}
      >
        <TheorySection title="¿Qué es GitLab?">
          <p>
            GitLab es una plataforma similar a GitHub pero con CI/CD integrado desde el inicio.
            Es muy usado en empresas porque:
          </p>
          <ul>
            <li><strong>CI/CD nativo:</strong> Pipelines directo sin herramientas externas.</li>
            <li><strong>DevOps completo:</strong> Deploy, monitoring, security todo en uno.</li>
            <li><strong>Self-hosted:</strong> Puedes correrlo en tu servidor (GitHub solo en cloud).</li>
            <li><strong>Gratis para pequeños:</strong> Plan gratuito muy completo.</li>
            <li><strong>GitLab Flow:</strong> Workflow específico para equipos grandes.</li>
          </ul>
        </TheorySection>

        <TheorySection title="GitLab vs GitHub">
          <CodeBlock
            language="text"
            code={`GITHUB:
✓ Más popular y comunidad grande
✓ Mejor para proyectos open source
✗ CI/CD integrado pero requiere GitHub Actions
✗ Mostly cloud-only
✗ Más caro para empresas

GITLAB:
✓ CI/CD integrado y potente
✓ Self-hosted option (control total)
✓ DevOps completo (monitoreo, seguridad)
✓ Mejor para empresas medianas/grandes
✓ Más barato para muchos usuarios
✗ Comunidad más pequeña
✗ Interfaz puede ser compleja`}
          />
        </TheorySection>

        <TheorySection title="GitLab Flow vs Git Flow">
          <p>
            GitLab recomienda un flujo más simple que Git Flow:
          </p>
          <CodeBlock
            language="text"
            code={`SIMPLE (GitLab Flow):
main (siempre estable)
  ├─ feature/login
  ├─ feature/api
  └─ fix/bug-123

COMPLEX (Git Flow):
main (producción)
develop (integración)
  ├─ feature/login
  ├─ feature/api
  └─ release/v1.0.0

GitLab Flow es mejor para CI/CD continuo.
Git Flow es mejor para releases planificadas.`}
          />
        </TheorySection>

        <TheorySection title="Pipelines en GitLab">
          <p>
            Los pipelines son workflows de CI/CD que se ejecutan automáticamente.
            Se configuran en un archivo <code>.gitlab-ci.yml</code>:
          </p>
          <ul>
            <li><strong>Stages:</strong> Fases del pipeline (build, test, deploy).</li>
            <li><strong>Jobs:</strong> Tareas específicas en cada stage.</li>
            <li><strong>Runners:</strong> Máquinas que ejecutan los jobs.</li>
            <li><strong>Artifacts:</strong> Archivos generados para pasar entre stages.</li>
            <li><strong>Cache:</strong> Cachear dependencias para ser más rápido.</li>
          </ul>
        </TheorySection>

        <TheorySection title="Ventajas de GitLab para empresas">
          <ul>
            <li><strong>Todo integrado:</strong> No necesitas Heroku, Jenkins, etc.</li>
            <li><strong>Control:</strong> Self-hosted para máxima privacidad y control.</li>
            <li><strong>Escalabilidad:</strong> Diseñado para equipos grandes.</li>
            <li><strong>Seguridad:</strong> SAST, DAST, análisis de dependencias incluido.</li>
            <li><strong>Compliance:</strong> Auditoría completa de quién hizo qué cuándo.</li>
          </ul>
        </TheorySection>

        <ExerciseSection title="Prácticas" exercises={exercises} />

        <LessonNavigation prev={nav.prev} next={nav.next} />
      </LessonLayout>
    </>
  );
}
