import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, ExerciseSection, CodeBlock, TabsVerticalContent } from '../../../components';

export function LessonGitBranches() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const exercises = [
    {
      title: 'Crear y cambiar a una rama nueva',
      description: 'Crea una rama llamada "feature/login" y cambia a ella.',
      solution: `# Crear rama
git branch feature/login

# Cambiar a esa rama
git checkout feature/login

# O en un comando (Git 2.23+)
git switch -c feature/login`
    },
    {
      title: 'Listar todas las ramas',
      description: 'Muestra todas las ramas locales y marca la actual.',
      solution: `# Ramas locales
git branch

# Ramas locales y remotas
git branch -a

# Con información adicional
git branch -vv`
    },
    {
      title: 'Eliminar una rama',
      description: 'Borra la rama "feature/login" después de mergearla.',
      solution: `# Eliminar rama (seguro)
git branch -d feature/login

# Eliminar rama (fuerza)
git branch -D feature/login`
    },
    {
      title: 'Cambiar nombre de una rama',
      description: 'Renombra una rama de "old-feature" a "new-feature".',
      solution: `# Renombrar rama actual
git branch -m new-feature

# Renombrar otra rama
git branch -m old-feature new-feature`
    },
    {
      title: 'Ver información detallada de ramas',
      description: 'Muestra qué rama está rastreando qué rama remota.',
      solution: `# Ver ramas con tracking
git branch -vv

# Salida:
#   main         abc1234 [origin/main] Mensaje del último commit
#   feature/api  def5678 Mensaje del último commit`
    },
    {
      title: 'Crear rama desde un commit específico',
      description: 'Crea una rama basada en un commit anterior.',
      solution: `# Crear rama desde commit específico
git branch feature/hotfix abc1234

# Cambiar a la rama nueva
git switch feature/hotfix`
    },
    {
      title: 'Eliminar ramas remotas',
      description: 'Borra una rama en el repositorio remoto.',
      solution: `# Eliminar rama remota
git push origin --delete feature/old-feature

# O de forma más concisa
git push origin :feature/old-feature`
    },
    {
      title: 'Limpiar referencias de ramas eliminadas',
      description: 'Sincroniza tu lista local después de que se borren ramas remotas.',
      solution: `# Limpiar referencias de ramas remotas eliminadas
git fetch --prune

# O con git pull
git pull --prune`
    }
  ];

  return (
    <>
      <LessonLayout
        title="Ramas (Branches)"
        description="Aprende a trabajar con ramas para desarrollar en paralelo"
        breadcrumbs={breadcrumbs}
        seoTitle="Ramas en Git - Java Backend Learning"
        seoDescription="Guía completa sobre ramas en Git: crear, cambiar, mergear y mejores prácticas"
        seoKeywords="git, ramas, branches, feature branches, hotfix, merge"
        url="https://javabackendlearning.com/git/basicos/branches"
      >
        {/* SECCIÓN 1: DEFINICIÓN Y FUNCIONALIDAD */}
        <h2>Definición y funcionalidad</h2>
        <p>
          Una rama es una línea de desarrollo independiente que permite trabajar en nuevas funcionalidades sin afectar el código principal (típicamente main o master). Todas las ramas coexisten en el mismo repositorio, permitiendo que múltiples desarrolladores trabajen simultáneamente en diferentes funcionalidades.
        </p>
        <p>
          Una rama es simplemente un apuntador a un commit específico. Cuando haces commit en una rama, ese apuntador se mueve al nuevo commit, permitiendo un desarrollo paralelo sin interferencias.
        </p>

        <p><strong>Algunos usos comunes de las ramas son:</strong></p>
        <ul>
          <li>Trabajar en una funcionalidad nueva</li>
          <li>Arreglar un bug urgente (hotfix)</li>
          <li>Experimentar sin afectar al código</li>
        </ul>

        <TabsVerticalContent items={[
          {
            id: '1.1',
            title: 'Trabajar en una funcionalidad nueva',
            content: (
              <div>
                <h4>Trabajar en una funcionalidad nueva</h4>
                <p>Crea una rama feature, haz tus cambios, luego integra en main cuando esté lista.</p>
                <CodeBlock
                  language="bash"
                  code={`git switch -c feature/user-dashboard
# ... Haces cambios y commits ...
git switch main
git pull origin main
git merge feature/user-dashboard
git push origin main`}
                />
                <p>
                  <strong>Ventaja:</strong> Tu trabajo está aislado de otros desarrolladores. Puedes hacer commits
                  frecuentemente sin afectar main.
                </p>
              </div>
            )
          },
          {
            id: '1.2',
            title: 'Arreglar un bug urgente (hotfix)',
            content: (
              <div>
                <h4>Arreglar un bug urgente (hotfix)</h4>
                <p>
                  Cuando hay un bug crítico en producción, crea una rama hotfix desde main, arréglalo rápidamente y mergea.
                </p>
                <CodeBlock
                  language="bash"
                  code={`git switch main
git pull origin main
git switch -c hotfix/critical-bug
# ... Arreglas el bug ...
git switch main
git merge hotfix/critical-bug
git push origin main`}
                />
                <p>
                  <strong>Ventaja:</strong> Hotfixes se pueden mergear rápidamente sin esperar features que estén en progreso.
                </p>
              </div>
            )
          },
          {
            id: '1.3',
            title: 'Experimentar sin afectar al código',
            content: (
              <div>
                <h4>Experimentar sin afectar al código</h4>
                <p>
                  Crea una rama experiment para probar ideas. Si funciona, integra. Si no, simplemente bórrala.
                </p>
                <CodeBlock
                  language="bash"
                  code={`git switch -c experiment/new-approach
# ... Pruebas cosas nuevas ...
# Si funciona, mergea. Si no:
git switch main
git branch -D experiment/new-approach`}
                />
                <p>
                  <strong>Ventaja:</strong> Libertad para experimentar sin riesgo. El historial de Git no quedará
                  contaminado con experimentos fallidos.
                </p>
              </div>
            )
          }
        ]} />

        {/* SECCIÓN 2: COMANDOS PARA USAR GIT CON RAMAS */}
        <h2 style={{ marginTop: '3rem' }}>Comandos para usar git con ramas</h2>
        <p>
          Git proporciona una serie de comandos para trabajar con ramas. A continuación se muestran los más importantes
          que usarás en tu día a día como desarrollador. Cada comando tiene un propósito específico en el flujo de trabajo
          con ramas.
        </p>

        <p><strong>Los comandos principales son:</strong></p>
        <ol>
          <li>Crear ramas</li>
          <li>Cambiar entre ramas</li>
          <li>Listar ramas</li>
          <li>Eliminar ramas</li>
          <li>Renombrar ramas</li>
        </ol>

        <TabsVerticalContent items={[
          {
            id: '2.1',
            title: 'Crear ramas',
            content: (
              <div>
                <h4>Crear ramas</h4>
                <CodeBlock
                  language="bash"
                  code={`git branch feature/login
git switch feature/login

# O todo en uno (Git 2.23+)
git switch -c feature/login

# Forma antigua (sigue funcionando)
git checkout -b feature/login`}
                />
                <p>
                  La diferencia entre <code>git branch</code> y <code>git switch -c</code> es que la primera
                  crea la rama pero no cambia a ella, mientras que la segunda crea y cambia automáticamente.
                </p>
              </div>
            )
          },
          {
            id: '2.2',
            title: 'Cambiar entre ramas',
            content: (
              <div>
                <h4>Cambiar entre ramas</h4>
                <p>
                  <strong>git switch</strong> es el comando moderno para cambiar de rama (Git 2.23+):
                </p>
                <CodeBlock
                  language="bash"
                  code={`git switch main
git switch feature/login
git switch -`}
                />
                <p>
                  <strong>git checkout</strong> es el comando antiguo pero aún válido:
                </p>
                <CodeBlock
                  language="bash"
                  code={`git checkout main
git checkout feature/login`}
                />
                <p>
                  Ambos funcionan igual, pero <code>switch</code> es más explícito y se recomienda para nuevos proyectos.
                </p>
              </div>
            )
          },
          {
            id: '2.3',
            title: 'Listar ramas',
            content: (
              <div>
                <h4>Listar ramas</h4>
                <CodeBlock
                  language="bash"
                  code={`git branch
git branch -a
git branch -r
git branch -vv
git branch --merged
git branch --no-merged`}
                />
                <p>
                  El marcador <code>*</code> indica en cuál rama estás actualmente.
                </p>
                <p>
                  <code>-a</code> muestra todas las ramas (locales y remotas), <code>-vv</code> muestra el tracking
                  de ramas remotas.
                </p>
              </div>
            )
          },
          {
            id: '2.4',
            title: 'Eliminar ramas',
            content: (
              <div>
                <h4>Eliminar ramas</h4>
                <CodeBlock
                  language="bash"
                  code={`# Eliminar rama local (seguro - requiere que esté mergeada)
git branch -d feature/login

# Eliminar rama local (fuerza)
git branch -D feature/login

# Eliminar rama remota
git push origin --delete feature/login`}
                />
                <p>
                  Usa <code>-d</code> para eliminar de forma segura. Git te avisará si hay cambios sin mergear.
                  Usa <code>-D</code> si quieres forzar la eliminación.
                </p>
              </div>
            )
          },
          {
            id: '2.5',
            title: 'Renombrar ramas',
            content: (
              <div>
                <h4>Renombrar ramas</h4>
                <CodeBlock
                  language="bash"
                  code={`# Renombrar rama actual
git branch -m new-feature

# Renombrar otra rama
git branch -m old-feature new-feature

# Renombrar y actualizar en remoto
git branch -m old-feature new-feature
git push origin -u new-feature
git push origin --delete old-feature`}
                />
                <p>
                  Si la rama ya está en el remoto, necesitas actualizar también la rama remota.
                </p>
              </div>
            )
          }
        ]} />

        {/* SECCIÓN 3: CONVENCIONES DE NOMBRES Y MEJORES PRÁCTICAS */}
        <h2 style={{ marginTop: '3rem' }}>Convenciones de nombres y mejores prácticas</h2>
        <p>
          Usar convenciones consistentes y seguir mejores prácticas hace que el trabajo en equipo sea más eficiente
          y el código más mantenible. Estos patrones han sido probados en miles de proyectos y equipos de desarrollo.
        </p>

        <p><strong>Puntos importantes a considerar:</strong></p>
        <ol>
          <li>Convenciones de nombres</li>
          <li>Nunca trabajar directamente en main</li>
          <li>Una rama = Una funcionalidad</li>
          <li>Mantén ramas sincronizadas</li>
          <li>Limpieza: elimina después de mergear</li>
        </ol>

        <TabsVerticalContent items={[
          {
            id: '3.1',
            title: 'Convenciones de nombres',
            content: (
              <div>
                <h4>Convenciones de nombres</h4>
                <p>
                  Es importante usar nombres descriptivos y consistentes. Las convenciones comunes incluyen:
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Features
feature/login
feature/user-profile
feature/payment-integration

# Bug fixes
bugfix/header-styling
fix/memory-leak

# Hotfixes (para producción)
hotfix/critical-security-fix

# Releases
release/1.2.0

# Experimental
experiment/new-algorithm

# Refactoring
refactor/optimize-queries`}
                />
                <p>
                  <strong>Beneficio:</strong> Usar convenciones hace que sea más fácil entender el propósito de cada rama de un vistazo.
                </p>
              </div>
            )
          },
          {
            id: '3.2',
            title: 'Nunca trabajar directamente en main',
            content: (
              <div>
                <h4>Nunca trabajar directamente en main</h4>
                <p>
                  La rama <code>main</code> debe contener siempre código estable y listo para producción.
                  Siempre crea ramas de feature para nuevos cambios.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# ❌ MALO - No hagas esto
git switch main
git add .
git commit -m "Agregar login"

# ✅ BIEN - Haz esto
git switch -c feature/login
git add .
git commit -m "Agregar login"`}
                />
              </div>
            )
          },
          {
            id: '3.3',
            title: 'Una rama = Una funcionalidad',
            content: (
              <div>
                <h4>Una rama = Una funcionalidad</h4>
                <p>
                  Cada rama debe representar una única funcionalidad o bug fix. Esto hace el código más fácil de revisar y mergear.
                </p>
                <p>
                  <strong>Ventajas:</strong>
                </p>
                <ul>
                  <li>Commits más limpios y entendibles</li>
                  <li>Pull Requests más fáciles de revisar</li>
                  <li>Más fácil revertir cambios si algo falla</li>
                  <li>Mejor colaboración entre desarrolladores</li>
                </ul>
              </div>
            )
          },
          {
            id: '3.4',
            title: 'Mantén ramas sincronizadas',
            content: (
              <div>
                <h4>Mantén ramas sincronizadas</h4>
                <p>
                  Si trabajas en una rama por mucho tiempo, regularmente actualízala con cambios de main para evitar
                  conflictos grandes al mergear.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Opción 1: Rebase (recomendado para historial limpio)
git fetch origin
git rebase origin/main

# Opción 2: Merge (mantiene historial completo)
git fetch origin
git merge origin/main`}
                />
                <p>
                  <strong>Diferencia:</strong> Rebase reorganiza tu historial (más limpio), merge combina los cambios
                  (historial completo).
                </p>
              </div>
            )
          },
          {
            id: '3.5',
            title: 'Limpieza: elimina después de mergear',
            content: (
              <div>
                <h4>Limpieza: elimina después de mergear</h4>
                <p>
                  Ramas viejas que ya fueron mergeadas crean desorden. Elimínalas después de integrarlas en main.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Ver ramas mergeadas
git branch --merged

# Eliminar localmente
git branch -d feature/completed

# Eliminar en remoto
git push origin --delete feature/completed

# Limpiar referencias locales
git fetch --prune`}
                />
                <p>
                  <strong>Beneficio:</strong> Repositorio más limpio y fácil de navegar.
                </p>
              </div>
            )
          }
        ]} />

        {/* SECCIÓN 4: ERRORES COMUNES */}
        <h2 style={{ marginTop: '3rem' }}>Errores comunes</h2>
        <p>
          Al trabajar con ramas, es normal encontrar errores o situaciones inesperadas. Aquí están los más comunes
          y cómo resolverlos.
        </p>

        <p><strong>Problemas que puedes encontrar:</strong></p>
        <ol>
          <li>Error: "fatal: A branch named 'rama' already exists"</li>
          <li>Error: "Your branch has diverged"</li>
          <li>Error: cambios sin commitear impiden cambiar de rama</li>
          <li>Merge conflictos cuando integras ramas</li>
          <li>Rama eliminada localmente pero sigue en remoto</li>
        </ol>

        <TabsVerticalContent items={[
          {
            id: '4.1',
            title: 'Error: "fatal: A branch named \'rama\' already exists"',
            content: (
              <div>
                <h4>Error: "fatal: A branch named 'rama' already exists"</h4>
                <p>
                  Estás intentando crear una rama que ya existe.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# ❌ INCORRECTO - Intenta crear una rama que ya existe
git branch feature/login

# ✅ CORRECTO - Cambia a la rama existente
git switch feature/login`}
                />
                <p>
                  <strong>Solución:</strong> Usa <code>git switch</code> para cambiar a una rama existente,
                  o usa un nombre diferente si realmente quieres crear una nueva.
                </p>
              </div>
            )
          },
          {
            id: '4.2',
            title: 'Error: "Your branch has diverged"',
            content: (
              <div>
                <h4>Error: "Your branch has diverged"</h4>
                <p>
                  Tu rama local se ha desviado de la remota. Esto ocurre cuando alguien más ha hecho push a la misma rama.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Opción 1: Rebase (recomendado)
git fetch origin
git rebase origin/main

# Opción 2: Merge
git fetch origin
git merge origin/main`}
                />
                <p>
                  <strong>Diferencia:</strong> Rebase reorganiza tu historial (más limpio), merge combina los cambios
                  (historial completo).
                </p>
              </div>
            )
          },
          {
            id: '4.3',
            title: 'Error: cambios sin commitear impiden cambiar de rama',
            content: (
              <div>
                <h4>Error: cambios sin commitear impiden cambiar de rama</h4>
                <p>
                  Git no te deja cambiar de rama si tienes cambios sin guardar (para no perderlos).
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Opción 1: Commitea los cambios
git add .
git commit -m "WIP: trabajo en progreso"
git switch otra-rama

# Opción 2: Guarda temporalmente (stash)
git stash
git switch otra-rama
# Luego recupera:
git stash pop`}
                />
                <p>
                  <strong>Consejo:</strong> Usa stash si interrumpes el trabajo. Usa commit si el trabajo es definitivo.
                </p>
              </div>
            )
          },
          {
            id: '4.4',
            title: 'Merge conflictos cuando integras ramas',
            content: (
              <div>
                <h4>Merge conflictos cuando integras ramas</h4>
                <p>
                  Cuando dos ramas modifican las mismas líneas, Git no puede hacer merge automático.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Git te avisará del conflicto
git merge feature/branch
# CONFLICT (content): Merge conflict in archivo.js

# Ver los conflictos
git status

# Abre el archivo en tu editor y resuelve
# Busca <<<<<<< HEAD y >>>>>>> feature/branch

# Después de resolver
git add archivo.js
git commit -m "Resolver merge conflict"`}
                />
                <p>
                  <strong>Tip:</strong> Mantén ramas sincronizadas con main regularmente para evitar grandes conflictos.
                </p>
              </div>
            )
          },
          {
            id: '4.5',
            title: 'Rama eliminada localmente pero sigue en remoto',
            content: (
              <div>
                <h4>Rama eliminada localmente pero sigue en remoto</h4>
                <p>
                  Eliminaste la rama local pero la rama remota aún existe, causando confusión.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Ver ramas remotas que ya no existen localmente
git fetch --prune --dry-run

# Limpiar referencias
git fetch --prune

# O eliminar una rama remota específica
git push origin --delete feature/old-branch`}
                />
                <p>
                  <strong>Consejo:</strong> Ejecuta <code>git fetch --prune</code> regularmente para mantener
                  sincronizadas tus referencias locales.
                </p>
              </div>
            )
          }
        ]} />

        <ExerciseSection title="Práctica: Trabaja con Ramas" exercises={exercises} />
      </LessonLayout>

      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
