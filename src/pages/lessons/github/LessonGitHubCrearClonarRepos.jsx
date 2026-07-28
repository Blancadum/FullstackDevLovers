import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubCrearClonarRepos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Crear y clonar repositorios en GitHub"
        description="Crea repositorios nuevos en GitHub y clónalos a tu máquina local"
        breadcrumbs={breadcrumbs}
        seoTitle="Crear y clonar repositorios en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a crear repositorios en GitHub desde cero y a clonarlos localmente mediante HTTPS o SSH."
        seoKeywords="github, crear repositorio, clonar repositorio, git clone"
      >
        <h2>Dos puntos de partida distintos</h2>
        <p>
          Con la cuenta ya creada, hay dos escenarios habituales para empezar a trabajar con un
          repositorio en GitHub: que el repositorio <strong>ya exista</strong> en GitHub y quieras
          descargarlo (clonarlo), o que tengas ya un proyecto <strong>en local</strong> (o quieras
          empezar uno nuevo) y necesites subirlo por primera vez. Vamos a cubrir ambos.
        </p>

        <h2>Crear un repositorio nuevo en GitHub</h2>
        <ol>
          <li>Inicia sesión y pulsa el botón "+" de la esquina superior derecha, luego "New repository".</li>
          <li>Ponle un <strong>nombre</strong> descriptivo (sin espacios; usa guiones, como <code>gestor-tareas-api</code>).</li>
          <li>Añade una descripción breve (opcional pero recomendable).</li>
          <li>
            Elige visibilidad: <strong>Public</strong> (cualquiera lo puede ver) o <strong>Private</strong>
            (solo tú y quien invites).
          </li>
          <li>
            Si es un repositorio nuevo sin código local todavía, marca la opción de inicializarlo con un
            <code>README.md</code>, un <code>.gitignore</code> (elige la plantilla de tu lenguaje, por ejemplo "Java")
            y, si quieres, una licencia.
          </li>
          <li>Pulsa "Create repository".</li>
        </ol>

        <InfoBox type="warning" title="No mezcles ambos flujos">
          Si ya tienes un proyecto local con commits (por ejemplo, algo que empezaste en las prácticas de Git),
          <strong> no</strong> inicialices el repositorio de GitHub con README ni <code>.gitignore</code>: crearía
          un historial distinto al tuyo y tendrías conflictos al conectar ambos. Déjalo vacío y sigue el flujo
          de "conectar un proyecto local" que ves más abajo.
        </InfoBox>

        <h2>Clonar un repositorio existente</h2>
        <p>
          Clonar significa descargar una copia completa del repositorio remoto (con todo su historial)
          a tu máquina. GitHub te da la URL en el botón verde "Code" de la página del repositorio:
        </p>
        <CodeBlock
          language="bash"
          code={`# Clonar por HTTPS (recomendado si empiezas)
git clone https://github.com/usuario/nombre-repo.git

# Clonar por SSH (requiere clave SSH configurada, se ve en la lección de seguridad)
git clone git@github.com:usuario/nombre-repo.git

# Clonar en una carpeta con otro nombre
git clone https://github.com/usuario/nombre-repo.git mi-carpeta-local`}
        />
        <p>
          Al clonar, Git configura automáticamente el remoto <code>origin</code> apuntando a esa URL,
          así que ya puedes hacer <code>push</code> y <code>pull</code> sin configurar nada más:
        </p>
        <CodeBlock
          language="bash"
          code={`cd nombre-repo
git remote -v
# origin  https://github.com/usuario/nombre-repo.git (fetch)
# origin  https://github.com/usuario/nombre-repo.git (push)`}
        />

        <h2>Conectar un proyecto local ya existente</h2>
        <p>
          Si ya tenías el proyecto en tu ordenador (con <code>git init</code> y commits hechos) y acabas
          de crear el repositorio vacío en GitHub, solo necesitas decirle a Git hacia dónde apuntar:
        </p>
        <CodeBlock
          language="bash"
          code={`# Dentro de la carpeta de tu proyecto local
git remote add origin https://github.com/tu-usuario/nombre-repo.git

# Asegúrate de que tu rama principal se llama "main"
git branch -M main

# Sube tu historial y establece el seguimiento (-u) con la rama remota
git push -u origin main`}
        />
        <p>
          El flag <code>-u</code> (o <code>--set-upstream</code>) vincula tu rama local <code>main</code>
          con <code>origin/main</code>, así que a partir de ahora podrás usar simplemente <code>git push</code>
          y <code>git pull</code> sin especificar remoto ni rama cada vez.
        </p>

        <h2>Resumen</h2>
        <ul>
          <li>Crea el repositorio vacío en GitHub cuando ya tengas historial local; inicialízalo con README/.gitignore solo si empiezas de cero.</li>
          <li><code>git clone</code> descarga un repositorio remoto completo y configura <code>origin</code> automáticamente.</li>
          <li>Para un proyecto local existente, usa <code>git remote add origin</code> + <code>git push -u origin main</code>.</li>
          <li>El flag <code>-u</code> establece el seguimiento entre tu rama local y la remota para simplificar los siguientes push/pull.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
