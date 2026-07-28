import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubPushPull() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Push, Pull y sincronización"
        description="Sincroniza tu repositorio local con GitHub usando push y pull"
        breadcrumbs={breadcrumbs}
        seoTitle="Push, Pull y sincronización con GitHub - Fullstack Dev Lovers"
        seoDescription="Domina git push y git pull para mantener sincronizados tu repositorio local y tu repositorio remoto en GitHub."
        seoKeywords="github, git push, git pull, sincronización, remoto"
      >
        <h2>Tu repositorio local y el remoto viven vidas separadas</h2>
        <p>
          Ya tienes tu repositorio conectado a GitHub (visto en la lección anterior). Pero conectar no es
          lo mismo que sincronizar: tu copia local y la copia en GitHub pueden estar en estados distintos
          en cualquier momento. <code>push</code> y <code>pull</code> son los comandos que mantienen ambas
          copias alineadas.
        </p>

        <h2>git push: enviar tus commits al remoto</h2>
        <p>
          Cuando haces <code>commit</code>, el cambio solo existe en tu máquina. <code>git push</code>
          sube esos commits al repositorio remoto para que estén disponibles para el resto del equipo:
        </p>
        <CodeBlock
          language="bash"
          code={`# Trabajo habitual
git add .
git commit -m "feat: agregar endpoint de login"

# Enviar los commits a GitHub
git push`}
        />
        <p>
          Si tu rama local todavía no tiene una rama remota asociada (por ejemplo, una rama nueva que
          acabas de crear), necesitas indicarlo la primera vez con <code>-u</code>:
        </p>
        <CodeBlock
          language="bash"
          code={`git switch -c feature/login
# ... haces commits ...
git push -u origin feature/login

# A partir de aquí, en esa rama basta con:
git push`}
        />

        <h2>git pull: traer los cambios del remoto</h2>
        <p>
          Cuando otra persona (o tú mismo desde otro ordenador) sube cambios a GitHub, tu copia local se
          queda desactualizada. <code>git pull</code> descarga esos cambios y los integra en tu rama actual:
        </p>
        <CodeBlock
          language="bash"
          code={`git pull`}
        />
        <p>
          En realidad, <code>git pull</code> es un atajo que combina dos pasos: <code>git fetch</code>
          (descarga los commits nuevos del remoto sin tocar tu código) y <code>git merge</code> (los integra
          en tu rama actual). Puedes hacerlo en dos pasos si quieres revisar antes de mezclar:
        </p>
        <CodeBlock
          language="bash"
          code={`# Descargar sin aplicar
git fetch origin

# Ver qué trae la rama remota antes de integrarla
git log origin/main --oneline

# Integrar cuando estés conforme
git merge origin/main`}
        />

        <h2>El error más común: push rechazado</h2>
        <p>
          Si intentas hacer <code>push</code> y GitHub tiene commits que tú no tienes en local (por ejemplo,
          un compañero subió algo antes que tú), Git rechaza el push para evitar que sobrescribas trabajo ajeno:
        </p>
        <CodeBlock
          language="bash"
          code={`$ git push
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/usuario/repo.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally.`}
        />
        <p>
          La solución casi siempre es la misma: primero <code>pull</code> para traer e integrar los cambios
          remotos, resolver conflictos si aparecen, y después <code>push</code> de nuevo:
        </p>
        <CodeBlock
          language="bash"
          code={`git pull
# resuelve conflictos si Git te avisa de alguno
git push`}
        />

        <InfoBox type="warning" title="Evita el push forzado salvo que sepas exactamente qué haces">
          Existe <code>git push --force</code>, que sobrescribe el historial remoto con el tuyo, ignorando
          los cambios ajenos. En un repositorio compartido puede borrar el trabajo de otra persona sin
          posibilidad de recuperarlo fácilmente. Como junior, evita usarlo en ramas compartidas (como
          <code>main</code>) hasta que entiendas bien sus implicaciones.
        </InfoBox>

        <h2>Comprobar el estado de sincronización</h2>
        <CodeBlock
          language="bash"
          code={`git status
# Ejemplo de salida cuando estás desactualizado:
# Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
#   (use "git pull" to update your local branch)`}
        />

        <h2>Resumen</h2>
        <ul>
          <li><code>git push</code> sube tus commits locales al repositorio remoto en GitHub.</li>
          <li><code>git pull</code> descarga e integra los cambios remotos en tu rama local (equivale a <code>fetch</code> + <code>merge</code>).</li>
          <li>Un push rechazado ("fetch first") se resuelve casi siempre con un <code>pull</code> antes de reintentar.</li>
          <li>Evita <code>--force</code> en ramas compartidas: puede sobrescribir el trabajo de otras personas.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
