import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitWorkflow() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Crear una rama siguiendo Git Flow',
      description: 'Inicia una nueva funcionalidad con convención de nombres.',
      solution: `# Crear rama de feature
git checkout -b feature/autenticacion-oauth

# O con el prefijo correcto:
git checkout -b feature/agregar-login-google
git checkout -b bugfix/error-al-guardar-usuario
git checkout -b release/v1.2.0`
    },
    {
      title: 'Escribir commit siguiendo Conventional Commits',
      description: 'Estructura clara: tipo(alcance): descripción.',
      solution: `# Ejemplos válidos:
git commit -m "feat(auth): agregar autenticación con Google"
git commit -m "fix(login): resolver error en validación de email"
git commit -m "docs(README): actualizar instrucciones de instalación"
git commit -m "refactor(api): mejorar manejo de errores"
git commit -m "test(user): agregar tests para registro"

# Tipos comunes:
# feat:     Nueva funcionalidad
# fix:      Corrección de error
# docs:     Cambios en documentación
# style:    Formato (espacios, sintaxis)
# refactor: Reorganización de código
# test:     Tests o cobertura
# chore:    Tareas (deps, build, CI)`
    },
    {
      title: 'Revertir un commit con revert',
      description: 'Deshacer cambios manteniendo historial.',
      solution: `# Ver logs para encontrar el commit
git log --oneline | head -10

# Revertir commit específico (crea nuevo commit)
git revert abc1234

# Revertir último commit
git revert HEAD

# Revertir sin crear commit automático (te deja hacer cambios)
git revert --no-commit abc1234
git add .
git commit -m "Revert: xyz por razón específica"`
    },
    {
      title: 'Usar tags para marcar releases',
      description: 'Crear versiones estables con tags.',
      solution: `# Crear tag ligero
git tag v1.0.0

# Crear tag anotado (con mensaje)
git tag -a v1.0.0 -m "Release v1.0.0"

# Crear tag de una version anterior
git tag -a v0.9.0 -m "Release v0.9.0" abc1234

# Listar tags
git tag
git tag -l "v1.*"

# Push tags al remoto
git push origin v1.0.0
git push origin --tags`
    },
    {
      title: 'Usar git aliases para comandos frecuentes',
      description: 'Configurar atajos para los comandos que usas a menudo.',
      solution: `# Crear alias global
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'

# Usar los alias
git st            # igual que git status
git co -b feature # igual que git checkout -b feature
git visual        # ver gráfico de ramas`
    },
    {
      title: 'Implementar pre-commit hooks',
      description: 'Validar código antes de commitear automáticamente.',
      solution: `# Crear script en .git/hooks/pre-commit
#!/bin/sh
echo "Validando código..."
npm run lint
if [ $? -ne 0 ]; then
  echo "Lint falló. Commit cancelado."
  exit 1
fi

# Hacer ejecutable
chmod +x .git/hooks/pre-commit

# Ahora antes de cada commit se ejecutará la validación`
    },
    {
      title: 'Usar git bisect para encontrar bugs',
      description: 'Busca el commit que introdujo un bug usando búsqueda binaria.',
      solution: `# Iniciar búsqueda
git bisect start

# Marcar commit actual como "bad" (tiene el bug)
git bisect bad

# Marcar commit conocido sin bug
git bisect good abc1234

# Git te mostrará commits intermedios para probar
# Para cada uno, marca como good o bad
git bisect good   # o git bisect bad

# Cuando encuentre el culpable
git bisect reset  # vuelve a rama original`
    }
  ];

  return (
    <>
      <LessonLayout
        title="Git Workflow y Conventional Commits"
        description="Estándares profesionales para trabajar con Git en equipos"
        breadcrumbs={breadcrumbs}
      >
        <TheorySection title="¿Qué es Git Workflow?">
          <p>
            Un Git Workflow es un acuerdo entre el equipo sobre cómo usar Git en el proyecto.
            Define convenciones para nombres de ramas, mensajes de commits, y el proceso de merge.
          </p>
          <p>
            Los workflows más comunes son:
          </p>
          <ul>
            <li><strong>Git Flow:</strong> Ideal para releases planificadas. Usa ramas develop, release y hotfix.</li>
            <li><strong>GitHub Flow:</strong> Simple y ágil. Solo main + feature branches. Ideal para CI/CD continuo.</li>
            <li><strong>Trunk-based:</strong> Todos mergean a main rápidamente. Requiere buena automatización.</li>
            <li><strong>GitLab Flow:</strong> Similar a GitHub Flow pero con staging/production branches.</li>
          </ul>
        </TheorySection>

        <TheorySection title="Convenciones de nombres de ramas">
          <p>
            Usar prefijos consistentes hace el código más organizado:
          </p>
          <CodeBlock
            language="bash"
            code={`# Feature - Nueva funcionalidad
feature/agregar-carrito-compras
feature/mejorar-performance

# Bug/Fix - Corrección de errores
bugfix/error-login
fix/crash-en-logout

# Release - Preparar versión
release/v1.0.0
release/v2.1.0-beta

# Hotfix - Parche urgente en production
hotfix/error-critico-pagos
hotfix/seguridad-sql-injection

# Refactor - Reorganizar código existente
refactor/mejorar-arquitectura
refactor/eliminar-code-duplication`}
          />
        </TheorySection>

        <TheorySection title="Conventional Commits">
          <p>
            Conventional Commits es un estándar para escribir mensajes de commits de forma legible
            y procesable automáticamente. Se estructura como:
          </p>
          <CodeBlock
            language="text"
            code={`tipo(alcance): descripción

[cuerpo opcional]

[footer opcional]

# Estructura mínima:
tipo: descripción

# Ejemplo completo:
feat(auth): agregar autenticación con Google OAuth2

Se agregó soporte para login con Google usando OAuth2.
Permite a usuarios autenticarse sin crear cuenta local.

Closes #123
BREAKING CHANGE: cambiado endpoint de /api/login a /api/auth/login`}
          />
          <p>
            Los tipos estándar son: <strong>feat</strong>, <strong>fix</strong>, <strong>docs</strong>,
            <strong>style</strong>, <strong>refactor</strong>, <strong>test</strong>, <strong>chore</strong>
          </p>
        </TheorySection>

        <TheorySection title="Ventajas de seguir un workflow">
          <ul>
            <li><strong>Historial limpio:</strong> Commits bien organizados que cuentan una historia.</li>
            <li><strong>Automatización:</strong> CI/CD puede parsear commits automáticamente.</li>
            <li><strong>Release notes:</strong> Generar changelogs automáticamente desde commits.</li>
            <li><strong>Debugging:</strong> Fácil usar git bisect para encontrar bugs.</li>
            <li><strong>Colaboración:</strong> El equipo entiende quién hizo qué y por qué.</li>
          </ul>
        </TheorySection>

        <ExerciseSection title="Prácticas" exercises={exercises} />

        <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
      </LessonLayout>
    </>
  );
}
