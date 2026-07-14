import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGitWorkflow() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔀',
      title: 'Git Flow',
      definition: 'Workflow con ramas específicas: main, develop, feature, release, hotfix',
      example: 'git flow feature start nueva-feature'
    },
    {
      icon: '📝',
      title: 'Conventional Commits',
      definition: 'Formato estándar para mensajes de commit',
      example: 'feat: agregar autenticación OAuth2'
    },
    {
      icon: '🌿',
      title: 'Branching Strategy',
      definition: 'Estrategia para crear y manejar ramas en el proyecto',
      example: 'feature/login, bugfix/password-reset'
    }
  ];

  const exercises = [
    {
      title: 'Crear feature con Git Flow',
      description: 'Inicia, desarrolla y termina una feature',
      solution: `# Inicializar Git Flow
git flow init

# Crear feature
git flow feature start agregar-login

# Desarrollar (hacer cambios, commits)
git add .
git commit -m "feat: agregar pantalla de login"

# Terminar feature
git flow feature finish agregar-login`
    },
    {
      title: 'Conventional Commit',
      description: 'Escribe mensajes siguiendo convención',
      solution: `# Formato: type(scope): subject

# Ejemplos:
git commit -m "feat(auth): agregar autenticación JWT"
git commit -m "fix(login): corregir validación de email"
git commit -m "docs(readme): actualizar instrucciones"
git commit -m "refactor(api): simplificar endpoints"
git commit -m "test(user): agregar tests para UserService"
git commit -m "chore(deps): actualizar Spring Boot a 3.2"`
    }
  ];

  const keyPoints = [
    'main = código en producción (estable)',
    'develop = rama de integración',
    'feature/* = nuevas características',
    'bugfix/* = correcciones de bugs',
    'release/* = preparación para release',
    'hotfix/* = parches críticos',
    'Conventional Commits mejoran legibilidad',
    'Type puede ser: feat, fix, docs, style, refactor, test, chore',
    'Scope es opcional pero recomendado',
    'Mensajes claros facilitan CI/CD y changelog automático'
  ];

  const sections = [
    {
      title: '¿Qué es Git Workflow?',
      content: (
        <p>
          Un Git Workflow es una estrategia de cómo usar Git en un proyecto.
          Define qué ramas existen, cuándo se crean, cómo se nombran y cuándo se mergean.
        </p>
      )
    },
    {
      title: 'Git Flow (Estrategia Clásica)',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`Git Flow: Modelo de ramas estructurado

main (master)          ← Producción (releases)
  ↑
  └─ release/1.0.0     ← Preparación de release
       ↑
develop                ← Integración
  ↑
  ├─ feature/login     ← Nueva característica
  ├─ feature/jwt       ← Nueva característica
  └─ bugfix/email      ← Corrección de bug

main (master)
  ↑
  └─ hotfix/security   ← Parche urgente`}
          />
          <CodeBlock
            language="bash"
            code={`# Inicializar Git Flow (requiere git-flow)
git flow init

# Crear una feature
git flow feature start agregar-login

# Crear un bugfix
git flow feature start corregir-password

# Crear un hotfix (desde main)
git flow hotfix start security-patch

# Terminar feature (mergea a develop)
git flow feature finish agregar-login

# Terminar release (mergea a main y develop)
git flow release finish v1.0.0

# Terminar hotfix (mergea a main y develop)
git flow hotfix finish v1.0.1`}
          />
        </>
      )
    },
    {
      title: 'GitHub Flow (Estrategia Simple)',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`GitHub Flow: Más simple, ideal para CI/CD

main (siempre deployable)
  ↑
  ├─ feature/login
  ├─ feature/auth
  └─ bugfix/email

Pasos:
1. Crear rama desde main
2. Hacer cambios y commits
3. Crear Pull Request
4. Revisar y aprobar
5. Mergear a main
6. Deploy automático`}
          />
          <CodeBlock
            language="bash"
            code={`# Crear rama
git checkout -b feature/login

# Hacer cambios y commits
git add .
git commit -m "feat(auth): agregar login"

# Pusear rama
git push origin feature/login

# En GitHub: crear Pull Request
# Después de revisión y aprobación:
git checkout main
git pull origin main
git merge feature/login
git push origin main

# Eliminar rama
git branch -d feature/login`}
          />
        </>
      )
    },
    {
      title: 'Conventional Commits',
      content: (
        <>
          <Table
            headers={['Type', 'Descripción', 'Ejemplo']}
            rows={[
              ['feat', 'Nueva característica', 'feat(auth): agregar OAuth2'],
              ['fix', 'Corrección de bug', 'fix(login): validación email'],
              ['docs', 'Documentación', 'docs(readme): actualizar setup'],
              ['style', 'Formato (sin lógica)', 'style: format código'],
              ['refactor', 'Refactorización', 'refactor(api): simplificar'],
              ['test', 'Tests', 'test(user): agregar tests'],
              ['chore', 'Tareas (deps, build)', 'chore(deps): actualizar'],
              ['perf', 'Mejora performance', 'perf(query): optimizar SQL'],
            ]}
          />
          <CodeBlock
            language="bash"
            code={`# Formato: type(scope): subject [body] [footer]

# Simple
git commit -m "feat(auth): agregar autenticación JWT"

# Con cuerpo
git commit -m "feat(auth): agregar OAuth2

Implementa Google y GitHub OAuth2 providers.
Incluye refresh tokens y logout automático.
Fixes #123"

# Con breaking change
git commit -m "feat(api)!: cambiar endpoint de POST a GET

BREAKING CHANGE: /usuarios cambió de POST a GET.
Usar GET /usuarios?email=... en su lugar."

# Scope es opcional pero recomendado
git commit -m "fix: corregir typo en README"`}
          />
          <InfoBox type="info">
            Conventional Commits permite generar CHANGELOG automático y versionado semántico.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Estrategia de Branching',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Nombres de ramas consistentes

# Features
git checkout -b feature/agregar-login
git checkout -b feature/jwt-token
git checkout -b feature/email-verification

# Bugfixes
git checkout -b bugfix/password-reset
git checkout -b bugfix/email-validation

# Hotfixes (crítico en producción)
git checkout -b hotfix/security-patch
git checkout -b hotfix/database-connection

# Release
git checkout -b release/1.0.0
git checkout -b release/2.1.0

# Mejores prácticas
✅ Nombres descriptivos y en minúsculas
✅ Usar guiones para separar palabras
✅ Una feature por rama
✅ Eliminar rama después de mergear
❌ No usar números como feature/1 o feature/2
❌ No usar espacios en nombres`}
          />
        </>
      )
    },
    {
      title: 'Pull Requests & Code Review',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Workflow con Pull Requests

1. Crear rama
git checkout -b feature/login

2. Hacer cambios y commits
git add .
git commit -m "feat(auth): agregar login"

3. Pusear a remoto
git push origin feature/login

4. Crear Pull Request en GitHub
   - Descripción clara
   - Screenshot/video si es UI
   - Link a issue relacionado

5. Code Review
   - Compañeros revisan
   - Solicitan cambios si es necesario
   - Aprueban

6. Mergear
   - Squash commits si muchos
   - Delete branch después

7. Deploy
   - CI/CD automático
   - Monitoreo post-deploy`}
          />
          <InfoBox type="tip">
            Require reviews antes de mergear a main para mantener calidad.
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `Git Workflow organiza el desarrollo en equipo:

• Git Flow: main, develop, feature, release, hotfix
• GitHub Flow: simple, ideal para CI/CD
• Conventional Commits: feat, fix, docs, refactor
• Scope opcional: feat(auth), fix(login)
• Nombres consistentes: feature/login, bugfix/email
• Pull Requests para code review
• Delete branch después de mergear
• Squash commits antes de mergear
• CI/CD automático acelera deployment
• Versionado semántico con conventional commits`;

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