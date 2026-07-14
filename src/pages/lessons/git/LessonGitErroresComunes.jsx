import { LessonLayout, CodeBlock, TabSection } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonGitErroresComunes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Errores Comunes en Git"
        description="Soluciona los problemas más frecuentes que encontrarás usando Git"
        breadcrumbs={breadcrumbs}
        seoTitle="Errores Comunes en Git - Soluciones - Java Backend Learning"
        seoDescription="Guía práctica para resolver los errores más frecuentes en Git: merge conflicts, push rechazados, commits incorrectos"
        seoKeywords="git, errores, soluciones, troubleshooting, conflictos, merge"
        url="https://javabackendlearning.com/git/basicos/errores-comunes"
      >
        <p>
          Incluso los desarrolladores experimentados cometen errores con Git. Lo importante es saber cómo identificarlos
          y resolverlos rápidamente. Aquí están los errores más comunes que encontrarás.
        </p>

        <TabSection
          tabs={[
            {
              label: "Commit con mensaje incorrecto",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Acabas de hacer commit pero el mensaje tiene un error o está incompleto.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Cometiste un error en el mensaje
git commit -m "Agregar funcio"  # Falta completar la palabra

# SOLUCIÓN: Usar amend para corregir el último commit
git commit --amend -m "Agregar funcionalidad de login"`}
                  />
                  <p>
                    <strong>Advertencia:</strong> Solo usa <code>--amend</code> en commits locales que no has hecho push.
                    Si ya lo compartiste con otros, evita amend.
                  </p>
                </div>
              )
            },
            {
              label: "Olvidaste agregar archivos al commit",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Ya hiciste commit pero olvidaste incluir un archivo importante.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Olvidaste agregar el archivo config.js
git add config.js
git commit --amend --no-edit

# El archivo se añadirá al commit anterior sin cambiar el mensaje`}
                  />
                  <p>
                    Si el commit ya está en el repositorio remoto, esta opción no es segura. Mejor hacer un nuevo commit.
                  </p>
                </div>
              )
            },
            {
              label: "Push rechazado (rejected)",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Recibes un error <code>rejected</code> cuando intentas hacer push.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Error típico:
# error: failed to push some refs to 'origin'

# CAUSA: El remoto tiene cambios que no tienes localmente

# SOLUCIÓN 1: Hacer pull primero (recomendado)
git pull origin main
git push origin main

# SOLUCIÓN 2: Si tienes cambios conflictivos
git pull --rebase origin main
git push origin main`}
                  />
                  <p>
                    <strong>Regla de oro:</strong> Siempre haz <code>pull</code> antes de <code>push</code>.
                  </p>
                </div>
              )
            },
            {
              label: "Conflicto de merge",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Cuando intentas hacer merge, Git encuentra líneas conflictivas que no puede
                    resolver automáticamente.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Estás en main e intentas hacer merge de feature
git merge feature

# Resultado: Conflict (content): Merge conflict in app.js
# Abrirás el archivo y verás algo como esto:

# <<<<<<< HEAD
# console.log("Versión main");
# =======
# console.log("Versión feature");
# >>>>>>> feature

# Solución: Edita el archivo, elige qué mantener
console.log("Versión correcta");

# Luego
git add app.js
git commit -m "Resolver conflicto de merge"`}
                  />
                </div>
              )
            },
            {
              label: "Cambios locales sobreescritos",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Hiciste cambios locales pero quieres descartar todo y traer el código del
                    remoto.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Error: Your local changes to 'archivo.js' would be overwritten by merge

# OPCIÓN 1: Descartar tus cambios locales
git checkout -- archivo.js
git pull origin main

# OPCIÓN 2: Guardar tus cambios (stash) antes de pull
git stash
git pull origin main
git stash pop

# OPCIÓN 3: Ver qué cambios tienes
git status
git diff`}
                  />
                  <p>
                    <strong>Consejo:</strong> Usa <code>git stash</code> cuando necesites cambiar de rama sin perder tu
                    trabajo.
                  </p>
                </div>
              )
            },
            {
              label: "Revertir commit público",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Hiciste push de un commit incorrecto y otros ya lo tienen en su repositorio.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Mala solución: git reset --hard (no hagas esto en commits públicos)
# Esto cambia la historia y confunde a otros desarrolladores

# Buena solución: Usar git revert
git revert abc123  # abc123 es el hash del commit a revertir

# Esto crea un NUEVO commit que deshace los cambios
# La historia de Git se mantiene intacta
git push origin main`}
                  />
                  <p>
                    <strong>Regla:</strong> <code>git reset</code> solo para commits locales. <code>git revert</code> para
                    commits públicos.
                  </p>
                </div>
              )
            },
            {
              label: "Rama eliminada accidentalmente",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Eliminaste una rama y quieres recuperarla.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Eliminaste la rama accidentalmente
git branch -d feature

# Puedes recuperarla usando reflog (Git mantiene un registro de todo)
git reflog

# Encontrarás algo como:
# abc123 HEAD@{0}: commit: Último cambio
# def456 HEAD@{1}: checkout: switching to feature

# Recuperar la rama
git checkout -b feature def456`}
                  />
                  <p>
                    Git no borra realmente nada inmediatamente. Tiene un registro de todas las acciones en
                    <code>reflog</code>.
                  </p>
                </div>
              )
            },
            {
              label: "Archivos en gitignore pero ya trackeados",
              content: (
                <div>
                  <p>
                    <strong>Problema:</strong> Agregas un archivo a <code>.gitignore</code> pero Git sigue rastreándolo
                    porque ya lo tenía.
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`# Archivos como .env o node_modules siguen siendo tracked

# Solución: Dejar de rastrear el archivo sin eliminarlo localmente
git rm --cached .env
git rm --cached -r node_modules

# Luego agrega a .gitignore
echo ".env" >> .gitignore
echo "node_modules/" >> .gitignore

# Commit los cambios
git add .gitignore
git commit -m "Stop tracking .env and node_modules"`}
                  />
                  <p>
                    <strong>Consejo:</strong> Configura <code>.gitignore</code> ANTES de hacer tu primer commit.
                  </p>
                </div>
              )
            }
          ]}
        />

        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f0f7ff', borderLeft: '4px solid #0066cc', borderRadius: '6px' }}>
          <p style={{ margin: 0 }}>
            <strong>Importante:</strong> Cuando algo falla en Git, NO entres en pánico. Git está diseñado para que sea muy
            difícil perder datos. Busca el error, entiende qué pasó, y usa el comando correcto para arreglarlo.
          </p>
        </div>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
