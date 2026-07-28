import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubPullRequests() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Pull Requests: crear y gestionar"
        description="Crea y gestiona Pull Requests para colaborar en proyectos de GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Pull Requests en GitHub: crear y gestionar - Fullstack Dev Lovers"
        seoDescription="Aprende a crear, revisar y gestionar Pull Requests en GitHub para colaborar de forma profesional en equipo."
        seoKeywords="github, pull request, code review, colaboración"
      >
        <h2>Por qué no se hace push directo a main en un equipo</h2>
        <p>
          Hasta ahora has hecho <code>push</code> directamente a <code>main</code>. Funciona cuando
          trabajas solo, pero en un equipo real es una mala práctica: cualquier error se cuela sin que
          nadie lo revise. La solución profesional es el <strong>Pull Request</strong> (PR): una propuesta
          de cambios que otra persona revisa antes de integrarla en la rama principal.
        </p>

        <h2>Qué es exactamente un Pull Request</h2>
        <p>
          Un PR compara dos ramas (por ejemplo, tu rama <code>feature/login</code> contra <code>main</code>)
          y muestra exactamente qué líneas cambiarían si se integrase. Sobre ese conjunto de cambios, el
          equipo puede:
        </p>
        <ul>
          <li>Dejar comentarios línea por línea.</li>
          <li>Solicitar cambios ("Request changes") antes de aprobarlo.</li>
          <li>Aprobarlo ("Approve") cuando está listo.</li>
          <li>Ver si los checks automáticos (tests, builds) han pasado.</li>
          <li>Fusionarlo ("Merge") una vez aprobado.</li>
        </ul>

        <h2>Crear un Pull Request paso a paso</h2>
        <ol>
          <li>Crea una rama para tu cambio, nunca trabajes directamente sobre <code>main</code>.</li>
          <li>Haz tus commits y sube la rama a GitHub.</li>
          <li>En GitHub, ve a la pestaña "Pull requests" del repositorio y pulsa "New pull request".</li>
          <li>Elige la rama base (normalmente <code>main</code>) y la rama que quieres fusionar (la tuya).</li>
          <li>Escribe un título claro y una descripción de qué hace el cambio y por qué.</li>
          <li>Pulsa "Create pull request".</li>
        </ol>
        <CodeBlock
          language="bash"
          code={`# Flujo típico en terminal antes de abrir el PR en la web
git switch -c feature/login
# ... trabajas, haces commits ...
git push -u origin feature/login

# Con GitHub CLI instalado, también puedes crear el PR sin salir de la terminal
gh pr create --title "feat: agregar login de usuario" \\
  --body "Añade el endpoint POST /login con validación de credenciales." \\
  --base main --head feature/login`}
        />

        <InfoBox type="tip" title="Un buen título y descripción ahorran tiempo a todo el equipo">
          Explica qué hace el cambio, por qué era necesario y, si aplica, cómo probarlo. Un PR con
          "cambios varios" obliga a quien lo revisa a adivinar qué está evaluando.
        </InfoBox>

        <h2>Draft Pull Requests: pedir feedback sin estar terminado</h2>
        <p>
          Si quieres compartir tu progreso antes de terminarlo (por ejemplo, para validar el enfoque),
          puedes abrir el PR como <strong>Draft</strong>. Se ve claramente marcado como borrador y no se
          puede fusionar hasta que lo marques como "Ready for review".
        </p>

        <h2>Revisar un Pull Request de otra persona</h2>
        <p>
          Cuando te asignan revisar un PR, entra en la pestaña "Files changed" para ver el diff. Puedes
          comentar directamente sobre una línea concreta, y al terminar debes elegir un veredicto:
        </p>
        <ul>
          <li><strong>Comment:</strong> dejas comentarios sin bloquear ni aprobar explícitamente.</li>
          <li><strong>Approve:</strong> el código está listo para fusionarse, desde tu punto de vista.</li>
          <li><strong>Request changes:</strong> hay algo que debe corregirse antes de aprobarlo.</li>
        </ul>

        <h2>Fusionar el Pull Request</h2>
        <p>
          Una vez aprobado (y con los checks en verde, si el repositorio los exige), aparece el botón
          "Merge pull request". GitHub ofrece varias estrategias de fusión:
        </p>
        <ul>
          <li><strong>Merge commit:</strong> crea un commit de fusión que conserva todos los commits originales de la rama.</li>
          <li><strong>Squash and merge:</strong> combina todos los commits de la rama en uno solo, con un historial de <code>main</code> más limpio.</li>
          <li><strong>Rebase and merge:</strong> reaplica los commits de la rama sobre <code>main</code> sin crear un commit de fusión.</li>
        </ul>
        <p>
          {/* TODO-verificar: la estrategia recomendada por defecto puede variar según las convenciones del equipo o la empresa; aquí solo se describen las opciones disponibles */}
          No hay una única estrategia "correcta"; muchos equipos usan <code>Squash and merge</code> para
          mantener el historial de <code>main</code> ordenado con un commit por PR, pero depende de las
          convenciones de cada proyecto.
        </p>

        <h2>Después de fusionar</h2>
        <CodeBlock
          language="bash"
          code={`# Vuelve a main y actualízalo con el cambio ya fusionado
git switch main
git pull

# Borra la rama local que ya no necesitas
git branch -d feature/login

# GitHub suele ofrecer un botón para borrar también la rama remota`}
        />

        <h2>Resumen</h2>
        <ul>
          <li>Un Pull Request propone integrar los cambios de una rama en otra (normalmente en <code>main</code>) permitiendo revisión previa.</li>
          <li>Se crea desde una rama con commits ya subidos, con título y descripción claros.</li>
          <li>Revisar un PR implica comentar, aprobar o solicitar cambios antes de fusionar.</li>
          <li>GitHub ofrece varias estrategias de fusión: merge commit, squash y rebase.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
