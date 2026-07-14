import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TabsVerticalContent, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitCommits() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Crear tu primer commit',
      description: 'Crea un archivo, añádelo a staging y haz un commit con un mensaje descriptivo.',
      solution: `echo "# Mi Proyecto" > README.md
git add README.md
git commit -m "docs: agregar README inicial"`
    },
    {
      title: 'Ver el historial de commits',
      description: 'Visualiza todos los commits que has hecho en el proyecto.',
      solution: `# Ver commits simples
git log

# Ver commits en una línea
git log --oneline

# Ver últimos 5 commits
git log -5`
    },
    {
      title: 'Modificar el último commit',
      description: 'Corrige un error en el commit más reciente sin crear uno nuevo.',
      hint: 'Usa git commit --amend pero recuerda: solo si no has hecho push',
      solution: `# Hacer cambios en los archivos
git add .

# Enmendar el último commit
git commit --amend -m "Nuevo mensaje"

# O si no quieres cambiar el mensaje:
git commit --amend --no-edit`
    }
  ];

  return (
    <>
      <LessonLayout
        title="Commits y Mensajes Claros"
        description="Domina los commits y escribe mensajes descriptivos"
        breadcrumbs={breadcrumbs}
        seoTitle="Commits en Git - Java Backend Learning"
        seoDescription="Guía completa: git add, git commit, mensajes descriptivos y buenas prácticas"
        seoKeywords="git commit, staging, add, historial"
      >
        <h2>¿Qué es un Commit?</h2>
        <p>
          Un commit es una "foto" del estado de tu proyecto en un momento específico. Es como un checkpoint
          en un videojuego que puedes usar para recuperar el proyecto si algo sale mal.
        </p>
        <p>
          Cada commit contiene:
        </p>
        <ul>
          <li>Los cambios realizados</li>
          <li>Autor (nombre y email)</li>
          <li>Fecha y hora</li>
          <li>Un mensaje descriptivo</li>
          <li>Un hash único (SHA-1)</li>
        </ul>

        <h2>El Flujo: Modificar → Staging → Commit</h2>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Modifica tus archivos',
            content: (
              <div>
                <h4>Modifica tus archivos</h4>
                <CodeBlock
                  language="bash"
                  code={`echo "print('Hola Git')" > main.py`}
                />
              </div>
            )
          },
          {
            id: '2',
            title: 'Usa git add para preparar (staging)',
            content: (
              <div>
                <h4>Usa git add para preparar (staging)</h4>
                <CodeBlock
                  language="bash"
                  code={`git add main.py
git add .`}
                />
              </div>
            )
          },
          {
            id: '3',
            title: 'Crea un commit con git commit',
            content: (
              <div>
                <h4>Crea un commit con git commit</h4>
                <CodeBlock
                  language="bash"
                  code={`git commit -m "feat: agregar script principal"`}
                />
              </div>
            )
          },
          {
            id: '4',
            title: 'El flujo completo',
            content: (
              <div>
                <h4>El flujo completo</h4>
                <CodeBlock
                  language="bash"
                  code={`# 1. Ver qué cambió
git status

# 2. Preparar cambios
git add .

# 3. Hacer commit
git commit -m "Mensaje descriptivo"

# 4. Verificar
git log --oneline`}
                />
              </div>
            )
          }
        ]} />

        <h2>Escribir Buenos Mensajes de Commit</h2>
        <p>
          Los mensajes claros son fundamentales para entender el historial del proyecto.
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Formato recomendado (Conventional Commits)',
            content: (
              <div>
                <h4>Formato recomendado (Conventional Commits)</h4>
                <CodeBlock
                  language="bash"
                  code={`<tipo>(<scope>): <descripción>`}
                />

                <p>
                  Tipos comunes:
                </p>
                <ul>
                  <li><strong>feat:</strong> Nueva funcionalidad</li>
                  <li><strong>fix:</strong> Corrección de bug</li>
                  <li><strong>docs:</strong> Cambios en documentación</li>
                  <li><strong>style:</strong> Formato, espacios, etc (sin cambiar lógica)</li>
                  <li><strong>refactor:</strong> Reorganizar código</li>
                  <li><strong>test:</strong> Agregar o modificar tests</li>
                </ul>
              </div>
            )
          },
          {
            id: '2',
            title: 'Ejemplos buenos vs malos',
            content: (
              <div>
                <h4>Ejemplos buenos vs malos</h4>
                <CodeBlock
                  language="bash"
                  code={`❌ BAD:
git commit -m "cambios"
git commit -m "arreglé cosas"
git commit -m "jeje"

✓ GOOD:
git commit -m "feat: agregar validación de email"
git commit -m "fix: resolver error en login"
git commit -m "docs: actualizar instrucciones de instalación"`}
                />
              </div>
            )
          }
        ]} />

        <h2>Ver el Historial: git log</h2>
        <p>
          Visualiza todos los commits que se han hecho:
        </p>
        <CodeBlock
          language="bash"
          code={`git log
git log --oneline
git log -5
git log --author="Juan"
git log --grep="login"
git log --since="2 weeks ago"
git log --oneline --graph`}
        />

        <p>
          <strong>Ejemplo de salida:</strong>
        </p>
        <CodeBlock
          language="bash"
          code={`$ git log --oneline -5
a3f9c12 feat: agregar validación de email
f2b8e45 fix: resolver error de login
e1d7c34 docs: actualizar README
d0c6b23 refactor: simplificar autenticación
c9b5a12 test: agregar pruebas de usuario`}
        />

        <h2>Zona de Staging: Preparar Cambios</h2>
        <p>
          El staging (preparación) es un paso intermedio entre modificar archivos y crear un commit.
          Te permite elegir exactamente qué cambios incluir:
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Agregar archivos específicos',
            content: (
              <div>
                <h4>Agregar archivos específicos</h4>
                <CodeBlock
                  language="bash"
                  code={`# Agregar un archivo
git add archivo.js

# Agregar todos los cambios
git add .

# Agregar de forma interactiva (elige qué líneas incluir)
git add -p`}
                />
              </div>
            )
          },
          {
            id: '2',
            title: 'Ver qué está en staging',
            content: (
              <div>
                <h4>Ver qué está en staging</h4>
                <CodeBlock
                  language="bash"
                  code={`git status

# Ejemplo de salida:
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   main.js
        new file:   utils.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   config.js`}
                />
              </div>
            )
          },
          {
            id: '3',
            title: 'Remover archivos del staging',
            content: (
              <div>
                <h4>Remover archivos del staging</h4>
                <CodeBlock
                  language="bash"
                  code={`git restore --staged archivo.js`}
                />
              </div>
            )
          }
        ]} />

        <h2>Guardar Cambios Temporalmente (git stash)</h2>
        <p>
          A veces necesitas cambiar de rama o limpiar tu área de trabajo sin hacer commit. Usa <code>stash</code>:
        </p>
        <CodeBlock
          language="bash"
          code={`# Guardar cambios temporalmente
git stash

# Ver todos los stashes guardados
git stash list

# Recuperar el stash más reciente
git stash pop

# Recuperar un stash específico
git stash apply stash@{0}`}
        />

        <p><strong>Caso de uso:</strong> Estás trabajando en una rama, te piden urgente cambiar a otro tema.
        Haces <code>stash</code>, cambias de rama, trabajas, y luego recuperas con <code>pop</code>.</p>

        <h2>Enmendar Commits: git commit --amend</h2>
        <p>
          ¿Hiciste un commit pero se te olvidó un cambio o el mensaje es incorrecto? Usa <code>--amend</code>:
        </p>
        <CodeBlock
          language="bash"
          code={`# Cambiar el mensaje del último commit
git commit --amend -m "Nuevo mensaje correcto"

# Añadir archivos olvidados sin cambiar el mensaje
git add archivo-olvidado.js
git commit --amend --no-edit

# Usar el editor para escribir un mensaje largo
git commit --amend`}
        />

        <p><strong>⚠️ Importante:</strong> Solo usa <code>--amend</code> en commits locales que NO hayas hecho push.
        Si ya subiste el commit, usa <code>git revert</code> en su lugar.</p>

        <h2>Ver Qué Cambió: git diff</h2>
        <p>
          Antes de hacer commit, verifica exactamente qué líneas cambiaron:
        </p>
        <CodeBlock
          language="bash"
          code={`# Ver cambios sin preparar (working directory vs staging)
git diff

# Ver cambios preparados (staging vs último commit)
git diff --staged

# Ver cambios de un archivo específico
git diff archivo.js

# Ver cambios en un commit específico
git show a3f9c12`}
        />

        <h2>⚠️ Errores Comunes</h2>

        <h3>Error: "Changes not staged for commit"</h3>
        <p>Hiciste cambios pero olvidaste hacer <code>git add</code>:</p>
        <CodeBlock
          language="bash"
          code={`git add .
git commit -m "Tu mensaje"`}
        />

        <h3>Error: "nothing added to commit but untracked files present"</h3>
        <p>Los archivos son completamente nuevos y Git no sabe de ellos:</p>
        <CodeBlock
          language="bash"
          code={`git add .
git commit -m "Tu mensaje"`}
        />

        <h3>Mensaje de commit vacío</h3>
        <p>Si abres el editor (sin -m) y lo cierras sin escribir, el commit se cancela. Esto es normal.</p>

        <h3>Commit con mensaje horrible</h3>
        <p>Si ya hiciste push: usa <code>git revert</code>. Si es local: usa <code>git commit --amend</code>.</p>

        <ExerciseSection title="Práctica: Domina los Commits" exercises={exercises} />
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
