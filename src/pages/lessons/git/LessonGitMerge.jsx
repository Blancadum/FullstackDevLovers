import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitMerge() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Mergear una rama sin conflictos',
      description: 'Termina una funcionalidad y fusiona la rama con main.',
      solution: `git switch main
git merge feature/login

# Si todo va bien
# Merge made by the 'recursive' strategy.`
    },
    {
      title: 'Resolver un conflicto de merge',
      description: 'Cuando dos ramas modifican la misma línea, surge un conflicto.',
      solution: `# Después del conflicto, verás algo como:
<<<<<<< HEAD
contenido de main
=======
contenido de feature/login
>>>>>>>

# Edita el archivo, elimina los marcadores y elige qué mantener
# Luego:
git add archivo-conflictivo.java
git commit -m "Resolver conflicto de merge"`
    },
    {
      title: 'Ver un merge de forma gráfica',
      description: 'Visualiza cómo se fusionaron las ramas.',
      solution: `git log --oneline --graph

# O más detallado:
git log --graph --pretty=format:'%h -%d %s'`
    },
    {
      title: 'Abortar un merge que está en conflicto',
      description: 'Si no quieres resolver conflictos, cancela el merge.',
      solution: `# Esto revierte la rama a su estado anterior
git merge --abort

# Ahora estás de vuelta en main sin cambios`
    },
    {
      title: 'Hacer un merge no fast-forward',
      description: 'Fuerza la creación de un commit de merge incluso sin conflictos.',
      solution: `# Merge normal (fast-forward si es posible)
git merge feature/login

# Merge explícito con commit de merge
git merge --no-ff feature/login -m "Merge feature/login"`
    },
    {
      title: 'Ver qué cambios trae un merge antes de hacerlo',
      description: 'Revisa qué cambios traerá un merge sin ejecutarlo.',
      solution: `# Ver cambios entre main y feature/login
git diff main..feature/login

# Ver lista de commits que trae feature/login
git log main..feature/login

# Ver qué archivos cambiarían
git diff --name-status main..feature/login`
    },
    {
      title: 'Mergear un archivo específico de otra rama',
      description: 'Trae un archivo de otra rama sin mergear toda la rama.',
      solution: `# Obtener archivo específico de otra rama
git checkout feature/login -- ruta/al/archivo.java

# Esto trae el archivo a tu rama actual
git add ruta/al/archivo.java
git commit -m "Traer archivo desde feature/login"`
    },
    {
      title: 'Resolver conflictos con git rerere',
      description: 'Git recuerda cómo resolviste conflictos anteriores.',
      solution: `# Habilitar rerere (resolve, resolve)
git config --global rerere.enabled true

# Luego Git recordará cómo resolviste conflictos previos
# y los resolverá automáticamente la próxima vez`
    }
  ];

  return (
    <>
      <LessonLayout
      title="Merge y Resolución de Conflictos"
      description="Fusiona ramas y resuelve conflictos cuando ocurren"
      breadcrumbs={breadcrumbs}
    >
      <TheorySection title="¿Qué es un Merge?">
        <p>
          Merge es la operación que fusiona dos ramas. Normalmente usas merge para
          integrar una rama de funcionalidad de vuelta a la rama principal (main).
        </p>
        <p>
          Un merge crea un nuevo commit que une los cambios de ambas ramas. Este commit
          es especial porque tiene dos padres (parents): uno de cada rama.
        </p>
      </TheorySection>

      <TheorySection title="Merge Simple (sin conflictos)">
        <CodeBlock
          language="bash"
          code={`# Estás en feature/login
git commit -m "feat: agregar login"

# Cambiar a main
git switch main

# Asegúrate de que main está actualizado
git pull origin main

# Mergear feature/login en main
git merge feature/login

# Ahora main tiene los cambios de feature/login`}
        />

        <p>
          Si no hay conflictos, Git automáticamente crea un nuevo commit de merge.
          Este commit contiene todos los cambios de la rama que estás mergeando.
        </p>

        <h4>Fast-Forward vs Merge Commit</h4>
        <p>
          Si no hay cambios nuevos en main desde que creaste feature/login,
          Git hace un "fast-forward": simplemente mueve el apuntador de main.
        </p>
        <CodeBlock
          language="bash"
          code={`# Esto hará fast-forward si es posible
git merge feature/login

# Forzar creación de commit de merge
git merge --no-ff feature/login`}
        />
      </TheorySection>

      <TheorySection title="Conflictos de Merge">
        <p>
          Ocurren cuando ambas ramas modifican las mismas líneas. Git no sabe qué versión mantener.
        </p>
        <CodeBlock
          language="bash"
          code={`<<<<<<< HEAD
Contenido de la rama actual (main)
=======
Contenido de la rama que merges (feature/login)
>>>>>>>`}
        />

        <h4>Entender los marcadores de conflicto</h4>
        <ul>
          <li><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> - Inicio del contenido en tu rama actual</li>
          <li><code>=======</code> - Separador entre tu rama y la rama que estás mergeando</li>
          <li><code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> - Final del contenido de la rama que merges</li>
        </ul>

        <p>
          Debes resolver manualmente: elimina los marcadores y elige qué código mantener.
          Puedes mantener ambas versiones, una sola, o combinarlas.
        </p>

        <CodeBlock
          language="bash"
          code={`# Opción 1: Mantener versión de main
Contenido de la rama actual (main)

# Opción 2: Mantener versión de feature/login
Contenido de la rama que merges (feature/login)

# Opción 3: Combinar ambas
Contenido de la rama actual (main)
Contenido de la rama que merges (feature/login)`}
        />

        <p>
          Después de resolver, debes marcar el archivo como resuelto:
        </p>
        <CodeBlock
          language="bash"
          code={`git add archivo-conflictivo.java
git commit -m "Resolver conflicto de merge entre main y feature/login"`}
        />
      </TheorySection>

      <TheorySection title="Estrategias de Merge">
        <h4>Recursive (por defecto)</h4>
        <p>
          Usada cuando mergeas dos ramas. Busca un ancestro común y lo usa como base.
        </p>

        <h4>Resolve</h4>
        <p>
          Usa tres puntos (3-way merge): rama actual, rama a mergear, y ancestro común.
        </p>

        <h4>Ours vs Theirs</h4>
        <p>
          En caso de conflicto, elige automáticamente de una rama:
        </p>
        <CodeBlock
          language="bash"
          code={`# Resolver conflictos eligiendo siempre nuestra rama
git merge -X ours feature/login

# Resolver conflictos eligiendo siempre la rama a mergear
git merge -X theirs feature/login`}
        />
      </TheorySection>

      <TheorySection title="Abortar un Merge">
        <p>
          Si algo sale mal durante el merge o encuentras conflictos complejos,
          puedes cancelar el merge completamente:
        </p>
        <CodeBlock
          language="bash"
          code={`git merge --abort
# Te devuelve al estado anterior`}
        />

        <p>
          Esto es útil si no estás seguro de cómo resolver los conflictos
          o si descubres que el merge no debería haberse hecho.
        </p>
      </TheorySection>

      <TheorySection title="Ver Cambios Antes de Mergear">
        <p>
          Siempre es buena práctica revisar qué cambios traerá un merge:
        </p>
        <CodeBlock
          language="bash"
          code={`# Ver diferencias
git diff main..feature/login

# Ver commits que trae feature/login
git log main..feature/login

# Ver archivos que cambiarán
git diff --name-status main..feature/login

# Ver resumen más legible
git log --oneline main..feature/login`}
        />
      </TheorySection>

      <TheorySection title="Visualizar Merges">
        <CodeBlock
          language="bash"
          code={`git log --oneline --graph

# Salida:
# *   abc1234 Merge branch 'feature/login' into main
# |\
# | * def5678 Agregar formulario de login
# | * ghi9012 Agregar estilos de login
# |/
# * jkl3456 Inicializar proyecto

# O más detallado:
git log --graph --pretty=format:'%h -%d %s'`}
        />

        <p>
          Los <code>*</code> representan commits y las líneas mostran cómo se conectan
          las ramas. Las líneas diagonales muestran merges.
        </p>
      </TheorySection>

      <TheorySection title="Mejores Prácticas para Merge">
        <h4>1. Mantén las ramas sincronizadas</h4>
        <p>
          Antes de mergear una rama larga, actualízala con cambios recientes de main
          para evitar conflictos grandes.
        </p>
        <CodeBlock
          language="bash"
          code={`git fetch origin
git rebase origin/main`}
        />

        <h4>2. Revisa antes de mergear</h4>
        <p>
          Siempre revisa qué cambios traerá el merge. En equipo, usa Pull Requests
          para que otros revisen el código.
        </p>

        <h4>3. Escribe mensajes de merge descriptivos</h4>
        <CodeBlock
          language="bash"
          code={`git merge feature/login -m "Merge: Agregar sistema de autenticación"`}
        />

        <h4>4. Resuelve conflictos con cuidado</h4>
        <p>
          No elimines código sin entender por qué hay conflicto. Habla con el desarrollador
          de la otra rama si no estás seguro.
        </p>

        <h4>5. Usa --no-ff en main</h4>
        <p>
          Considera usar <code>--no-ff</code> cuando mergeas features en main,
          para mantener un histórico limpio de merges.
        </p>
      </TheorySection>

      <TheorySection title="Errores Comunes en Merge">
        <h4>Error: "CONFLICT (add/add): Merge conflict"</h4>
        <p>
          Ambas ramas agregan el mismo archivo. Debes elegir qué versión mantener.
        </p>

        <h4>Conflicto en archivo que no debería tener conflicto</h4>
        <p>
          A veces Git marca conflictos innecesarios. Revisa el archivo cuidadosamente
          y resuelve manualmente si es necesario.
        </p>

        <h4>Mergear sin estar en la rama correcta</h4>
        <p>
          Siempre verifica en qué rama estás antes de mergear:
        </p>
        <CodeBlock
          language="bash"
          code={`git branch
git switch main
git merge feature/login`}
        />
      </TheorySection>

      <ExerciseSection title="Práctica: Merge y Conflictos" exercises={exercises} />
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
