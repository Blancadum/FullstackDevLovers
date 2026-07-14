import { LessonLayout, TabsVerticalContent, ExerciseSection, CodeBlock } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonGitCrearClonarRepos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Crear un repositorio local nuevo',
      description: 'Crea un nuevo repositorio Git en una carpeta vacía en tu ordenador.',
      hint: 'Usa git init en la carpeta donde quieras crear el repositorio',
      solution: `mkdir mi-proyecto
cd mi-proyecto
git init

# Verificar que se creó
ls -la
# Deberías ver una carpeta .git`
    },
    {
      title: 'Clonar un repositorio remoto',
      description: 'Clona el repositorio de esta misma web (o cualquier repositorio público de GitHub).',
      hint: 'Usa git clone con la URL del repositorio',
      solution: `git clone https://github.com/usuario/repositorio.git

# O si usas SSH
git clone git@github.com:usuario/repositorio.git

# Clonando en una carpeta con otro nombre
git clone https://github.com/usuario/repositorio.git mi-carpeta-local`
    },
    {
      title: 'Ver información del repositorio clonado',
      description: 'Después de clonar, explora la estructura y verifica el remoto.',
      hint: 'Usa git remote -v para ver los remotos',
      solution: `# Listar repositorios remotos
git remote -v

# Ver información detallada del remoto origin
git remote show origin

# Ver ramas locales y remotas
git branch -a`
    }
  ];

  return (
    <>
      <LessonLayout
        title="Crear y Clonar Repositorios"
        description="Aprende a inicializar repositorios nuevos y clonar existentes"
        breadcrumbs={breadcrumbs}
        seoTitle="Crear y Clonar Repositorios Git - Java Backend Learning"
        seoDescription="Guía completa: git init, git clone y cómo trabajar con repositorios locales y remotos"
        seoKeywords="git init, git clone, repositorio, github"
        url="https://javabackendlearning.com/git/basicos/crear-clonar-repos"
      >
        <h2>¿Qué es un Repositorio?</h2>
        <p>
          Un <strong>repositorio Git</strong> es como una "máquina del tiempo" para tu proyecto. Es una carpeta especial que Git monitorea para rastrear todos los cambios que haces. Piensa en él como un sistema de versiones completo de tu código.
        </p>

        <p>
          Cada repositorio contiene dos cosas principales:
        </p>
        <ul>
          <li><strong>La carpeta .git:</strong> El "cerebro" de Git. Aquí se almacena TODO: commits, ramas, historial completo, referencias. Sin esta carpeta, Git no sabe nada de tu proyecto</li>
          <li><strong>Tu código:</strong> Los archivos normales de tu proyecto (Python, Java, JavaScript, etc.). Estos son los que editas y cambias día a día</li>
        </ul>

        <p>
          <em>Consejo: Nunca elimines la carpeta <code>.git</code> a menos que quieras destruir todo el historial del proyecto.</em>
        </p>

        <h2>Repositorio Local vs Repositorio Remoto</h2>
        <p>
          Los repositorios vienen en dos "flavores":
        </p>

        <p><strong>Repositorio Local:</strong></p>
        <ul>
          <li>Existe solo en tu ordenador</li>
          <li>Lo creas con <code>git init</code> en una carpeta vacía</li>
          <li>Solo tú puedes ver los cambios (a menos que lo compartas)</li>
          <li>Es donde trabajas día a día: crear archivos, hacer commits, cambiar ramas</li>
          <li>Los cambios se guardan en la carpeta <code>.git</code> de tu ordenador</li>
        </ul>

        <p><strong>Repositorio Remoto:</strong></p>
        <ul>
          <li>Existe en un servidor externo (GitHub, GitLab, Bitbucket, etc.)</li>
          <li>Lo creas manualmente a través de la web (e.g., en github.com)</li>
          <li>Es un "respaldo" y un punto de colaboración</li>
          <li>Otros desarrolladores pueden ver, clonar y contribuir al proyecto</li>
          <li>Es donde "subes" tus cambios locales para compartirlos</li>
        </ul>

        <h3>¿Por Qué Necesito un Repositorio Remoto?</h3>
        <p>
          Con un repositorio remoto en GitHub:
        </p>
        <ul>
          <li><strong>Seguridad:</strong> Tu código está guardado en un servidor. Si tu ordenador falla, el código sigue existiendo</li>
          <li><strong>Colaboración:</strong> Otros pueden clonar tu proyecto, hacer cambios y enviarlos de vuelta</li>
          <li><strong>Portfolio:</strong> Puedes mostrar tu código a potenciales empleadores</li>
          <li><strong>Backup automático:</strong> GitHub guarda tu historial completo</li>
          <li><strong>Integración CI/CD:</strong> Puedes automatizar tests, builds, despliegues, etc.</li>
        </ul>

        <h3>El Ciclo de Trabajo: Local ↔ Remoto</h3>
        <p>
          El flujo típico es:
        </p>
        <ol>
          <li><strong>Trabajas localmente:</strong> Editas archivos, haces commits en tu ordenador</li>
          <li><strong>Sincronizas:</strong> Usas <code>git push</code> para enviar tus commits al remoto (GitHub)</li>
          <li><strong>Otros colaboran:</strong> Tus compañeros ven tus cambios en GitHub y pueden descargarlos con <code>git pull</code></li>
          <li><strong>Recibes cambios:</strong> Usas <code>git pull</code> para descargar los cambios que otros subieron</li>
          <li><strong>Vuelves a trabajar:</strong> Editas, haces commits, y repites desde el paso 1</li>
        </ol>

        <h2>Formas de Empezar con un Repositorio</h2>
        <p>
          Hay dos formas principales de obtener un repositorio Git:
        </p>
        <ul>
          <li><strong>git init:</strong> Crear un repositorio nuevo desde cero en tu ordenador</li>
          <li><strong>git clone:</strong> Copiar un repositorio existente desde GitHub (u otro servidor) a tu ordenador</li>
        </ul>

        <h2>Crear un Repositorio Nuevo (git init)</h2>
        <p>
          Usa <code>git init</code> cuando quieras convertir una carpeta existente en un repositorio Git.
        </p>
        <p>
          Esto crea una carpeta oculta <code>.git</code> que contiene toda la información del repositorio.
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Inicializar repositorio',
            content: (
              <div>
                <h4>Inicializar repositorio</h4>
                <CodeBlock
                  language="bash"
                  code={`cd /ruta/a/tu/carpeta
git init`}
                />
              </div>
            )
          },
          {
            id: '2',
            title: '¿Qué ocurre?',
            content: (
              <div>
                <h4>¿Qué ocurre?</h4>
                <CodeBlock
                  language="bash"
                  code={`$ git init
Initialized empty Git repository in /Users/usuario/mi-proyecto/.git/`}
                />
                <p>
                  Ahora puedes empezar a añadir archivos, hacer commits, etc.
                </p>
              </div>
            )
          }
        ]} />

        <h2>Clonar un Repositorio Existente (git clone)</h2>
        <p>
          Usa <code>git clone</code> cuando quieras descargar un repositorio existente de GitHub, GitLab, etc.
        </p>
        <p>
          Esto descarga todo el proyecto (historial completo) a una carpeta local.
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Clonar con HTTPS',
            content: (
              <div>
                <h4>Clonar con HTTPS</h4>
                <CodeBlock
                  language="bash"
                  code={`git clone https://github.com/usuario/nombre-repo.git`}
                />
                <p>HTTPS funciona en cualquier red, pero requiere autenticación.</p>
              </div>
            )
          },
          {
            id: '2',
            title: 'Clonar con SSH',
            content: (
              <div>
                <h4>Clonar con SSH</h4>
                <CodeBlock
                  language="bash"
                  code={`git clone git@github.com:usuario/repo.git`}
                />
                <p>SSH es más seguro, pero requiere configuración de claves públicas.</p>
              </div>
            )
          },
          {
            id: '3',
            title: 'Cambiar el nombre de la carpeta',
            content: (
              <div>
                <h4>Cambiar el nombre de la carpeta local</h4>
                <CodeBlock
                  language="bash"
                  code={`# Por defecto usa el nombre del repositorio
git clone https://github.com/usuario/repo.git

# Especificar nombre personalizado
git clone https://github.com/usuario/repo.git mi-carpeta`}
                />
              </div>
            )
          }
        ]} />

        <h2>Entender la Estructura del Repositorio</h2>
        <p>
          Después de <code>git init</code> o <code>git clone</code>, tu carpeta tiene una estructura especial:
        </p>
        <CodeBlock
          language="bash"
          code={`mi-proyecto/
  ├── .git/                    # Carpeta oculta con el historial
  │   ├── objects/             # Objetos Git (commits, árboles, blobs)
  │   ├── refs/                # Referencias a ramas
  │   ├── HEAD                 # Rama actual
  │   └── config               # Configuración del repositorio
  │
  ├── archivo1.js
  ├── archivo2.java
  └── README.md`}
        />

        <p>
          La carpeta <code>.git</code> es toda la "magia" de Git. No la elimines a menos que quieras
          destruir el repositorio.
        </p>

        <h2>Ver Información del Remoto</h2>
        <p>
          Si clonaste un repositorio, puedes ver a dónde está conectado:
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Listar repositorios remotos',
            content: (
              <div>
                <h4>Listar repositorios remotos</h4>
                <CodeBlock
                  language="bash"
                  code={`git remote -v

# Output esperado:
origin  https://github.com/usuario/repo.git (fetch)
origin  https://github.com/usuario/repo.git (push)`}
                />
                <p>
                  "origin" es el nombre por defecto del repositorio remoto del que clonaste.
                </p>
              </div>
            )
          },
          {
            id: '2',
            title: 'Ver información detallada',
            content: (
              <div>
                <h4>Ver información detallada del remoto</h4>
                <CodeBlock
                  language="bash"
                  code={`git remote show origin

# Output esperado:
* remote origin
  Fetch URL: https://github.com/usuario/repo.git
  Push  URL: https://github.com/usuario/repo.git
  HEAD branch: main
  Remote branches:
    develop
    main
    feature/nueva-funcionalidad`}
                />
              </div>
            )
          }
        ]} />

        <h2>Conectar un Repositorio Local Existente a Remoto</h2>
        <p>
          Imaginemos que ya tienes un proyecto con <code>git init</code> y algunos commits locales. Ahora quieres subirlo a GitHub por primera vez.
        </p>
        <p>
          Los siguientes 4 pasos te mostrarán exactamente cómo hacerlo:
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Crear repositorio en GitHub',
            content: (
              <div>
                <h4>1. Crear repositorio en GitHub</h4>
                <p>Crea el repositorio remoto en GitHub (sin inicializar).</p>
              </div>
            )
          },
          {
            id: '2',
            title: 'Añadir el remoto',
            content: (
              <div>
                <h4>2. Añadir el remoto localmente</h4>
                <CodeBlock
                  language="bash"
                  code={`git remote add origin https://github.com/usuario/mi-repo.git`}
                />
              </div>
            )
          },
          {
            id: '3',
            title: 'Verificar conexión',
            content: (
              <div>
                <h4>3. Verificar la conexión</h4>
                <CodeBlock
                  language="bash"
                  code={`git remote -v`}
                />
              </div>
            )
          },
          {
            id: '4',
            title: 'Push del primer commit',
            content: (
              <div>
                <h4>4. Enviar tu primer commit</h4>
                <CodeBlock
                  language="bash"
                  code={`# Asume que ya tienes commits locales
git push -u origin main

# O si tu rama principal es master
git push -u origin master`}
                />
              </div>
            )
          }
        ]} />

        <ExerciseSection title="Práctica: Crea y Clona Repositorios" exercises={exercises} />
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
