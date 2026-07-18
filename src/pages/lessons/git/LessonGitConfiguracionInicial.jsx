import { LessonLayout, Exercise, CodeBlock, TabsVerticalContent } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonGitConfiguracionInicial() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Configurar nombre y email globales',
      description: 'Configura tu nombre y email para que aparezcan en todos tus commits en este ordenador.',
      hint: 'Usa git config --global para configurar a nivel global',
      solution: `git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@example.com"`
    },
    {
      title: 'Crear configuración local en un proyecto',
      description: 'Crea una configuración local específica para un proyecto (diferente a la global).',
      hint: 'Usa git config sin --global para configuración local del repositorio',
      solution: `cd /ruta/a/tu/proyecto
git config user.name "Otro Nombre"
git config user.email "otro.email@example.com"`
    },
    {
      title: 'Verificar configuración actual',
      description: 'Lista todas las configuraciones que tienes establecidas.',
      hint: 'Usa git config --list',
      solution: `git config --list
# También puedes ver solo globales:
git config --global --list`
    },
    {
      title: 'Crear un primer repositorio',
      description: 'Inicializa Git en un proyecto nuevo.',
      hint: 'Usa git init en la carpeta del proyecto',
      solution: `cd mi-proyecto
git init`
    }
  ];

  return (
    <>
      <LessonLayout
        title="Configuración Inicial de Git"
        description="Aprende a configurar Git por primera vez en tu sistema"
        breadcrumbs={breadcrumbs}
        seoTitle="Configuración Inicial de Git - Java Backend Learning"
        seoDescription="Guía completa para configurar Git: usuario, email y configuraciones básicas"
        seoKeywords="git, configuración, config, usuario, email, init"
        url="https://javabackendlearning.com/git/basicos/configuracion-inicial"
      >
        <h2>Por qué configurar Git</h2>
        <p>
          Git necesita saber quién eres para registrar cambios en los commits. La configuración es el primer paso
          que debes hacer cuando instalas Git en tu sistema. Sin esta configuración, no podrás crear commits.
        </p>
        <p>
          Existen tres niveles de configuración, cada uno sobrescribiendo el anterior:
        </p>
        <ul>
          <li><strong>--system:</strong> Aplica a todos los usuarios del sistema (requiere permisos de admin)</li>
          <li><strong>--global:</strong> Aplica a tu usuario en todo el sistema (recomendado para empezar)</li>
          <li><strong>--local:</strong> Aplica solo a ese repositorio específico (para casos especiales)</li>
        </ul>
        <p><em>Consejo: Ejecuta la configuración global solo una vez cuando instales Git. Se aplica a todos tus proyectos.</em></p>

        <h2>Configuración del Usuario</h2>
        <p>
          Lo más importante es establecer tu nombre y email. Esto aparecerá de forma permanente en cada commit que hagas.
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Configurar nombre y email',
            content: (
              <div>
                <h4>Configurar nombre y email</h4>
                <CodeBlock
                  language="bash"
                  code={`git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@ejemplo.com"`}
                />

                <p><strong>Ejemplo práctico:</strong></p>
                <CodeBlock
                  language="bash"
                  code={`git config --global user.name "María García Fernández"
git config --global user.email "maria.garcia@empresa.com"`}
                />

                <p><strong>¿Qué hace esto?</strong></p>
                <ul>
                  <li>Guarda tu nombre asociado a tu usuario en todo el sistema</li>
                  <li>Cada commit incluirá: "María García Fernández &lt;maria.garcia@empresa.com&gt;"</li>
                  <li>Solo tienes que hacerlo una vez (se guarda en <code>~/.gitconfig</code>)</li>
                </ul>
              </div>
            )
          },
          {
            id: '2',
            title: 'Configurar editor de texto',
            content: (
              <div>
                <h4>Configurar editor de texto</h4>
                <p>
                  Cuando escribas mensajes de commit largos, Git abrirá un editor de texto. Puedes elegir cuál:
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Usar nano (más amigable para principiantes)
git config --global core.editor "nano"

# Usar vim (poderoso pero más complejo)
git config --global core.editor "vim"

# Usar Visual Studio Code
git config --global core.editor "code"

# En Windows, usar Notepad
git config --global core.editor "notepad"`}
                />
                <p><em>Si no configuras esto, Git usará el editor por defecto del sistema (probablemente vim).</em></p>
              </div>
            )
          },
          {
            id: '3',
            title: 'Verificar la configuración',
            content: (
              <div>
                <h4>Verificar la configuración</h4>
                <p>
                  Después de configurar, verifica que todo se guardó correctamente:
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Ver solo el nombre
git config user.name

# Ver solo el email
git config user.email

# Ver toda la configuración global
git config --global --list

# Ver configuración local de un repositorio
git config --local --list

# Ver TODA la configuración (sistema + global + local)
git config --list`}
                />

                <p><strong>Salida esperada:</strong></p>
                <CodeBlock
                  language="bash"
                  code={`user.name=María García Fernández
user.email=maria.garcia@empresa.com
core.editor=nano
... (más configuraciones)`}
                />
              </div>
            )
          },
          {
            id: '4',
            title: 'Inicializar tu primer repositorio',
            content: (
              <div>
                <h4>Inicializar tu primer repositorio</h4>
                <p>
                  Una vez configurado Git globalmente, puedes crear repositorios locales. Cada proyecto es un repositorio independiente:
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Ir a la carpeta de tu proyecto
cd mi-proyecto-java

# Inicializar Git
git init

# Resultado esperado:
# Initialized empty Git repository in /Users/usuario/mi-proyecto-java/.git`}
                />

                <p><strong>¿Qué hace git init?</strong></p>
                <ul>
                  <li>Crea una carpeta oculta <code>.git</code> en tu proyecto</li>
                  <li>Esta carpeta contiene toda la historia de cambios</li>
                  <li>A partir de ahora, tu proyecto es un repositorio Git</li>
                </ul>
              </div>
            )
          },
          {
            id: '5',
            title: 'Niveles de configuración: Casos especiales',
            content: (
              <div>
                <h4>Niveles de configuración: Casos especiales</h4>
                <p>
                  Normalmente usarás <code>--global</code>, pero hay situaciones donde necesitas configuración local:
                </p>

                <p><strong>Caso 1: Proyecto de trabajo (email corporativo)</strong></p>
                <CodeBlock
                  language="bash"
                  code={`# Global (personal)
git config --global user.email "yo@gmail.com"

# En la carpeta del proyecto de trabajo
git config --local user.email "yo@empresa.com"

# Ahora en ESTE proyecto, los commits usarán el email corporativo`}
                />

                <p><strong>Caso 2: Ver qué configuración aplica aquí</strong></p>
                <CodeBlock
                  language="bash"
                  code={`# ¿Qué email usará Git en este proyecto?
git config user.email

# ¿Cuál es mi nombre en este proyecto?
git config user.name`}
                />
              </div>
            )
          }
        ]} />

        <h2>Configuraciones Útiles Adicionales</h2>
        <p>
          Aquí hay otras configuraciones que muchos desarrolladores usan:
        </p>

        <TabsVerticalContent items={[
          {
            id: '1',
            title: 'Colorear la salida del terminal',
            content: (
              <div>
                <h4>Colorear la salida del terminal</h4>
                <p>
                  Hace que la salida de Git sea más legible con colores en el terminal:
                </p>
                <CodeBlock
                  language="bash"
                  code={`git config --global color.ui true`}
                />
              </div>
            )
          },
          {
            id: '2',
            title: 'Crear alias para comandos frecuentes',
            content: (
              <div>
                <h4>Crear alias para comandos frecuentes</h4>
                <p>
                  Define atajos personalizados para agilizar tu trabajo:
                </p>
                <CodeBlock
                  language="bash"
                  code={`git config --global alias.co "checkout"
git config --global alias.st "status"
git config --global alias.br "branch"`}
                />
              </div>
            )
          },
          {
            id: '3',
            title: 'Configurar líneas finales de archivo',
            content: (
              <div>
                <h4>Configurar líneas finales de archivo</h4>
                <p>
                  Previene conflictos relacionados con saltos de línea (CRLF vs LF):
                </p>
                <CodeBlock
                  language="bash"
                  code={`git config --global core.safecrlf true`}
                />
              </div>
            )
          }
        ]} />

        <h2>⚠️ Errores Comunes</h2>

        <h3>Error: "Author identity unknown"</h3>
        <CodeBlock
          language="bash"
          code={`*** Please tell me who you are.

Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"`}
        />
        <p><strong>Solución:</strong> Ejecuta exactamente esos comandos que Git te sugiere.</p>

        <h3>Error: Editor no abre correctamente</h3>
        <CodeBlock
          language="bash"
          code={`# Verifica que el editor existe
which nano  # o vim, o code

# Si no existe, instálalo o usa otro editor`}
        />

        <h2>Práctica: Configura tu Git</h2>
        {exercises.map((exercise, idx) => (
          <Exercise
            key={idx}
            number={idx + 1}
            title={exercise.title}
            description={exercise.description}
            code={exercise.solution}
            language="bash"
          />
        ))}
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
