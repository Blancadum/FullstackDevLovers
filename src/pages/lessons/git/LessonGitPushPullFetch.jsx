import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitPushPullFetch() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Push de tu rama local al remoto',
      description: 'Envía tus commits a GitHub/GitLab.',
      solution: `# Push de rama actual
git push origin feature/login

# Push y configurar upstream
git push -u origin feature/login

# La próxima vez puedes solo hacer:
git push`
    },
    {
      title: 'Fetch para actualizar sin mergear',
      description: 'Descarga cambios remotos pero no los fusiona automáticamente.',
      solution: `# Fetch
git fetch origin

# Ver cambios que descargaste
git log origin/main

# Luego, si quieres integrar
git merge origin/main`
    },
    {
      title: 'Pull para descargar e integrar cambios',
      description: 'Descarga y mergea cambios del remoto en un comando.',
      solution: `git pull origin main

# Es equivalente a:
git fetch origin
git merge origin/main`
    },
    {
      title: 'Configurar rama upstream',
      description: 'Establece qué rama remota rastrear.',
      solution: `# Configurar upstream al hacer push
git push -u origin feature/login

# Luego puedes usar solo:
git push
git pull

# O configurar en rama existente
git branch --set-upstream-to=origin/feature/login`
    },
    {
      title: 'Push forzado (cuidado)',
      description: 'Sobreescribir historial remoto (usar con cuidado).',
      solution: `# Fuerza push (reescribe historial remoto)
git push --force origin feature/login

# Variante más segura (rechaza si diverge)
git push --force-with-lease origin feature/login`
    },
    {
      title: 'Ver cambios que traerá un pull',
      description: 'Revisa qué cambios descargará antes de hacer pull.',
      solution: `# Fetch para actualizar referencias
git fetch origin

# Ver qué cambios traerá pull
git log ..origin/main

# Ver diferencias de archivos
git diff HEAD origin/main`
    },
    {
      title: 'Fetch de todas las ramas remotas',
      description: 'Actualiza información de todas las ramas remotas.',
      solution: `# Fetch de todos los remotos
git fetch --all

# Fetch y limpiar referencias de ramas borradas
git fetch --all --prune`
    },
    {
      title: 'Pull con rebase en lugar de merge',
      description: 'Descargar cambios y rebasar (en lugar de mergear).',
      solution: `# Pull con rebase
git pull --rebase origin main

# Es equivalente a:
git fetch origin
git rebase origin/main`
    },
    {
      title: 'Push de todas las ramas',
      description: 'Envía todas las ramas locales al remoto.',
      solution: `# Push de todas las ramas
git push --all origin

# Verificar qué se enviará
git push --all --dry-run origin`
    },
    {
      title: 'Eliminar rama remota',
      description: 'Borra una rama en el servidor remoto.',
      solution: `# Eliminar rama remota
git push origin --delete feature/old-feature

# O de forma más concisa
git push origin :feature/old-feature`
    }
  ];

  return (
    <>
      <LessonLayout
      title="Push, Pull y Fetch"
      description="Sincroniza tu repositorio con el remoto"
      breadcrumbs={breadcrumbs}
    >
      <TheorySection title="Entender el Flujo Remoto">
        <p>
          Git diferencia entre tu repositorio local y el remoto (en GitHub, GitLab, etc).
          Tu máquina tiene una copia completa del repositorio, mientras que el servidor
          tiene su propia versión que otros desarrolladores también usan.
        </p>
        <CodeBlock
          language="bash"
          code={`Tu Computadora          Servidor (GitHub)
    main ◀──────────── origin/main
     │                      │
     └──── push ──────────▶  │
     ▲                       │
     └──── pull ◀────────────┘`}
        />

        <p>
          <code>origin</code> es el nombre predeterminado del repositorio remoto.
          <code>origin/main</code> es tu copia local de la rama main en el servidor.
        </p>
      </TheorySection>

      <TheorySection title="Push: Subir cambios">
        <p>
          Envía tus commits locales al repositorio remoto. Solo puedes hacer push
          si tienes permisos de escritura en el repositorio.
        </p>
        <CodeBlock
          language="bash"
          code={`# Push de rama actual
git push origin main

# Push de rama específica
git push origin feature/login

# Push de todas las ramas
git push --all

# Configurar rama para rastrear remoto
git push -u origin feature/login

# Luego puedes usar solo:
git push`}
        />

        <h4>El flag -u (upstream)</h4>
        <p>
          Cuando usas <code>-u</code> (upstream), Git recuerda que esta rama
          debe rastrear la rama remota. Luego puedes usar <code>git push</code>
          sin especificar rama ni remoto.
        </p>

        <h4>¿Qué sucede cuando haces push?</h4>
        <ol>
          <li>Git compara tu rama local con la rama remota</li>
          <li>Envía los commits que no existen en el remoto</li>
          <li>Actualiza la rama remota en el servidor</li>
          <li>Otros desarrolladores pueden ver tus cambios</li>
        </ol>
      </TheorySection>

      <TheorySection title="Fetch: Solo descargar">
        <p>
          Descarga información del servidor remoto pero NO integra los cambios automáticamente.
          Es seguro porque no modifica tu rama actual. Útil para ver qué cambios hay
          sin afectar tu trabajo.
        </p>
        <CodeBlock
          language="bash"
          code={`# Fetch de todas las ramas
git fetch origin

# Fetch de rama específica
git fetch origin main

# Fetch de otra rama
git fetch origin feature/api

# Ver qué se descargó
git log origin/main

# Ver diferencia
git diff main origin/main

# Luego mergear si quieres
git merge origin/main`}
        />

        <h4>¿Qué sucede cuando haces fetch?</h4>
        <ol>
          <li>Git descarga todos los commits del servidor</li>
          <li>Actualiza las referencias remotas (ej: origin/main)</li>
          <li>No cambia tu rama local actual</li>
          <li>No crea conflictos</li>
        </ol>

        <h4>¿Cuándo usar fetch?</h4>
        <ul>
          <li>Quieres revisar cambios antes de integrarlos</li>
          <li>Trabajas en paralelo con otros y quieres estar informado</li>
          <li>Quieres actualizar referencias sin cambiar tu código</li>
        </ul>
      </TheorySection>

      <TheorySection title="Pull: Descargar e integrar">
        <p>
          Combina fetch + merge en un comando. Descarga los cambios remotos
          y automáticamente los integra en tu rama actual mediante merge.
        </p>
        <CodeBlock
          language="bash"
          code={`# Pull simple (fetch + merge)
git pull origin main

# Es lo mismo que:
git fetch origin
git merge origin/main

# Pull con rebase en lugar de merge
git pull --rebase origin main

# Es lo mismo que:
git fetch origin
git rebase origin/main`}
        />

        <h4>¿Cuándo usar pull vs fetch?</h4>
        <p>
          Usa <code>pull</code> cuando confías en los cambios y quieres integrarlos inmediatamente.
          Usa <code>fetch</code> cuando quieres revisar primero qué cambios hay.
        </p>

        <p>
          Aviso: Si hay conflictos durante el pull, el merge fallará y tendrás que resolverlos.
        </p>
      </TheorySection>

      <TheorySection title="El Flujo Recomendado: Fetch → Review → Pull">
        <p>
          Este es el flujo más seguro y recomendado:
        </p>
        <CodeBlock
          language="bash"
          code={`# 1. Descargar cambios sin integrar
git fetch origin

# 2. Revisar qué cambios hay
git log -p main..origin/main  # Ver diffs
git diff main origin/main     # Ver diferencias

# 3. Si todo se ve bien, integrar
git pull origin main

# Si hay conflictos:
# - Resuélvelos
# - git add .
# - git commit -m "Resolver conflictos"`}
        />
      </TheorySection>

      <TheorySection title="Diferencias: Fetch vs Pull vs Rebase">
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #8B5CF6'}}>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>Comando</th>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>Qué hace</th>
              <th style={{textAlign: 'left', padding: '0.5rem'}}>Cuándo usar</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
              <td style={{padding: '0.5rem'}}><code>fetch</code></td>
              <td style={{padding: '0.5rem'}}>Solo descarga, no integra</td>
              <td style={{padding: '0.5rem'}}>Ver cambios primero</td>
            </tr>
            <tr style={{borderBottom: '1px solid #e0e0e0'}}>
              <td style={{padding: '0.5rem'}}><code>pull</code></td>
              <td style={{padding: '0.5rem'}}>Descarga + mergea</td>
              <td style={{padding: '0.5rem'}}>Integrar cambios rápido</td>
            </tr>
            <tr>
              <td style={{padding: '0.5rem'}}><code>pull --rebase</code></td>
              <td style={{padding: '0.5rem'}}>Descarga + rebasa</td>
              <td style={{padding: '0.5rem'}}>Mantener historial lineal</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      <TheorySection title="Upstream (Rastreo de Ramas)">
        <p>
          Una rama puede tener un "upstream" (rama remota que rastrea).
          Cuando estableces upstream, Git sabe qué rama remota corresponde a tu rama local.
        </p>
        <CodeBlock
          language="bash"
          code={`# Establecer upstream al hacer push
git push -u origin feature/login

# O en una rama existente
git branch --set-upstream-to=origin/feature/login

# Ver información de tracking
git branch -vv

# Salida:
#   main         abc1234 [origin/main] Mensaje
#   feature/api  def5678 [origin/feature/api] Mensaje`}
        />
      </TheorySection>

      <TheorySection title="Errores Comunes">
        <h4>Error: "Your branch is ahead of origin/main"</h4>
        <p>
          Tienes commits locales que no has enviado. Haz push para sincronizar.
        </p>
        <CodeBlock language="bash" code={`git push origin main`} />

        <h4>Error: "Your branch is behind origin/main"</h4>
        <p>
          El servidor tiene cambios que no tienes. Haz pull para actualizar.
        </p>
        <CodeBlock language="bash" code={`git pull origin main`} />

        <h4>Error: "fatal: Could not read from remote repository"</h4>
        <p>
          Problema de conexión o permisos. Verifica:
        </p>
        <CodeBlock
          language="bash"
          code={`git remote -v  # Verifica URL

# Si usas SSH, asegúrate de que tienes acceso
# Si usas HTTPS, verifica usuario y contraseña`}
        />

        <h4>Error: "Updates were rejected because the remote contains work"</h4>
        <p>
          El servidor rechazó tu push porque tiene cambios que no tienes localmente.
          Haz pull primero para integrar sus cambios.
        </p>
        <CodeBlock
          language="bash"
          code={`git pull origin main
git push origin main`}
        />

        <h4>Push forzado sin querer (--force)</h4>
        <p>
          Usa <code>--force-with-lease</code> en lugar de <code>--force</code>.
          Es más seguro porque rechaza si hay cambios que no conoces.
        </p>
      </TheorySection>

      <TheorySection title="Mejores Prácticas">
        <h4>1. Fetch regularmente</h4>
        <p>
          Haz fetch frecuentemente para mantenerte al tanto de cambios en el servidor.
        </p>

        <h4>2. Revisa antes de integrar</h4>
        <p>
          Usa fetch para revisar cambios antes de hacer pull.
          Esto evita sorpresas.
        </p>

        <h4>3. Pull antes de push</h4>
        <p>
          Siempre haz pull antes de push para evitar conflictos.
        </p>
        <CodeBlock
          language="bash"
          code={`git pull origin main

# ... Resuelve conflictos si hay ...

git push origin main`}
        />

        <h4>4. Usa -u para establecer upstream</h4>
        <p>
          Cuando hagas push de una rama nueva, usa <code>-u</code> para establecer
          que la rama remota sea el upstream.
        </p>

        <h4>5. Evita --force en main</h4>
        <p>
          Nunca uses <code>--force</code> en ramas compartidas como main.
          Puedes sobreescribir cambios de otros.
        </p>
      </TheorySection>

      <ExerciseSection title="Práctica: Sincroniza con el Remoto" exercises={exercises} />
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
