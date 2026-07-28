import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubIssues() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Issues y Project Boards"
        description="Gestiona tareas y bugs con Issues y Project Boards en GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Issues y Project Boards en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a crear y organizar Issues, etiquetas y tableros de proyecto (Project Boards) en GitHub."
        seoKeywords="github, issues, project boards, gestión de tareas"
      >
        <h2>El código no es lo único que hay que gestionar</h2>
        <p>
          Hasta ahora hemos hablado de código: commits, ramas, Pull Requests. Pero en cualquier proyecto
          real hay otra capa de trabajo igual de importante: qué bugs hay pendientes, qué funcionalidades
          se van a construir y quién se encarga de cada cosa. Para eso existen los <strong>Issues</strong>
          y los <strong>Project Boards</strong> de GitHub.
        </p>

        <h2>Qué es un Issue</h2>
        <p>
          Un Issue es, básicamente, una ficha para describir un bug, una tarea o una idea de mejora sobre
          un repositorio. Tiene título, descripción, y se le pueden añadir etiquetas, responsable(s) y
          más metadatos.
        </p>
        <ol>
          <li>En el repositorio, ve a la pestaña "Issues" y pulsa "New issue".</li>
          <li>Escribe un título claro y conciso (ej: "El login falla con contraseñas de más de 20 caracteres").</li>
          <li>
            En la descripción, si es un bug, incluye: qué esperabas que pasara, qué pasó realmente, y
            pasos para reproducirlo.
          </li>
          <li>Asigna etiquetas (<code>bug</code>, <code>enhancement</code>, <code>documentation</code>...), responsable y, si existe, un milestone.</li>
          <li>Pulsa "Submit new issue".</li>
        </ol>
        <CodeBlock
          language="bash"
          code={`# También puedes crear issues sin salir de la terminal con GitHub CLI
gh issue create --title "El login falla con contraseñas largas" \\
  --body "Pasos para reproducir: 1) ... 2) ... Resultado esperado: ... Resultado actual: ..." \\
  --label bug`}
        />

        <h2>Etiquetas (labels): clasificar de un vistazo</h2>
        <p>
          Las etiquetas permiten filtrar y priorizar visualmente. Algunas habituales:
        </p>
        <ul>
          <li><code>bug</code> — algo no funciona como debería.</li>
          <li><code>enhancement</code> — una mejora o nueva funcionalidad.</li>
          <li><code>documentation</code> — cambios relacionados con la documentación.</li>
          <li><code>good first issue</code> — tareas sencillas, pensadas para quien contribuye por primera vez.</li>
          <li><code>help wanted</code> — el equipo pide ayuda externa con ese Issue.</li>
        </ul>

        <h2>Conectar Issues con Pull Requests</h2>
        <p>
          Puedes vincular un PR a un Issue usando palabras clave en el mensaje de commit o en la
          descripción del PR. Cuando ese PR se fusiona, el Issue se cierra automáticamente:
        </p>
        <CodeBlock
          language="bash"
          code={`git commit -m "fix: validar longitud máxima de contraseña (closes #42)"`}
        />
        <p>
          {/* TODO-verificar: la lista completa de palabras clave soportadas (close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved) puede ampliarse o cambiar; comprueba la documentación oficial de GitHub para la lista vigente */}
          Palabras clave como <code>close</code>, <code>closes</code>, <code>fix</code>, <code>fixes</code>,
          <code>resolve</code> o <code>resolves</code>, seguidas del número de Issue, generan ese cierre
          automático al fusionar el Pull Request.
        </p>

        <InfoBox type="tip" title="Referencia sin cerrar">
          Si solo quieres mencionar un Issue relacionado sin cerrarlo automáticamente, usa
          <code>#42</code> a secas en el mensaje o la descripción; GitHub creará el enlace pero no
          cerrará el Issue al fusionar.
        </InfoBox>

        <h2>Project Boards: visualizar el flujo de trabajo</h2>
        <p>
          Un Project Board es un tablero, generalmente estilo Kanban, con columnas como "To do",
          "In progress" y "Done". Cada tarjeta suele representar un Issue o un Pull Request, y se mueve
          de columna según avanza el trabajo.
        </p>
        <ol>
          <li>En el repositorio o la organización, ve a la pestaña "Projects" y crea uno nuevo.</li>
          <li>Elige una plantilla (por ejemplo, tablero Kanban básico) o empieza en blanco.</li>
          <li>Añade Issues existentes al tablero, o crea tarjetas nuevas directamente desde ahí.</li>
          <li>Arrastra las tarjetas entre columnas según cambie su estado.</li>
        </ol>
        <p>
          {/* TODO-verificar: GitHub Projects ha tenido varias versiones (Project boards clásicos vs "Projects" nueva generación); la interfaz y las opciones exactas pueden variar según cuándo leas esto */}
          La interfaz de Projects ha evolucionado con el tiempo (columnas, vistas de tabla, campos
          personalizados...), así que es normal que lo que veas en pantalla no coincida al cien por cien
          con lo descrito aquí; el concepto de fondo (organizar Issues visualmente por estado) se mantiene.
        </p>

        <h2>Resumen</h2>
        <ul>
          <li>Un Issue documenta un bug, tarea o idea, con título, descripción y etiquetas.</li>
          <li>Las etiquetas (<code>bug</code>, <code>enhancement</code>...) ayudan a clasificar y priorizar de un vistazo.</li>
          <li>Palabras clave como <code>closes #42</code> en un commit o PR cierran el Issue automáticamente al fusionar.</li>
          <li>Los Project Boards organizan Issues y PRs en un tablero visual por estado de avance.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
