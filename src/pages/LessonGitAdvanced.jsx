import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGitAdvanced() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Repositorio remoto: Copia en servidor (GitHub, GitLab, Bitbucket).',
    'origin: Nombre estándar del remoto principal.',
    'clone: Descargar repo completo con historial.',
    'push: Subir commits locales al remoto.',
    'pull: Descargar + fusionar cambios del remoto.',
    'fetch: Solo descargar cambios sin fusionar.',
    'git push -u: Primer push de rama nueva (vincula rama).',
    'git branch -r: Ver ramas remotas.',
    'git branch -a: Ver todas (locales + remotas).',
    'Pull Request/Merge Request: Pedir revisión antes de fusionar en main.',
    'Conflictos: Cuando 2 personas modifican mismo archivo. Resolver manualmente.',
    'git remote -v: Ver URLs de push/fetch.',
  ];

  const exercises = [
    {
      title: 'Clonar repositorio y trabajar con remoto',
      description: 'Clonar un repo de GitHub, crear rama, hacer cambios, hacer push y ver en GitHub.',
      difficulty: 'Intermedio',
      hint: 'Pasos: git clone, git switch -c, cambios, git add/commit, git push -u',
      solution: `# 1. Clonar repositorio remoto
$ git clone https://github.com/usuario/mi-proyecto.git

$ cd mi-proyecto

# 2. Ver información del remoto
$ git remote -v

# 3. Crear rama local para nueva feature
$ git switch -c feature/database

# 4. Hacer cambios
$ echo "db connection code" > database.js
$ git add database.js
$ git commit -m "Agrega módulo de conexión a BD"

# 5. PRIMER PUSH de rama nueva (usa -u para vincular)
$ git push -u origin feature/database

# 6. Ver ramas en remoto
$ git branch -r`,
    },
    {
      title: 'Resolver conflictos en merge',
      description: 'Dos personas modifican el mismo archivo. Hacer pull genera conflicto. Resolver y commit.',
      difficulty: 'Avanzado',
      hint: 'Los conflictos se marcan con &lt;&lt;&lt;&lt;&lt;&lt;, ======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;. Elige qué mantener.',
      solution: `# Tu colega hace push con cambios en login.js
$ git pull origin main

# Salida: CONFLICT (content): Merge conflict in login.js
#         Automatic merge failed; fix conflicts and then commit the result

# Ver contenido de archivo con conflicto:
# <<<<<<< HEAD
# function login(user, password) {
#   return auth.verify(user, password);
# }
# =======
# function login(email, pwd) {
#   return api.authenticate(email, pwd);
# }
# >>>>>>> origin/main

# Resolver conflicto: editar manualmente el archivo
# Versión final:
# function login(user, password) {
#   // Usar nueva API
#   return api.authenticate(user, password);
# }

# Completar merge
$ git add login.js
$ git commit -m "Resuelve conflicto en login.js: usa nueva API"
$ git push origin main`,
    },
  ];

  const sections = [
    {
      title: 'Trabajar con Repositorio Remoto',
      level: 2,
      content: [
        'Un <strong>repositorio remoto</strong> es la copia de tu proyecto en un servidor (GitHub, GitLab, etc.). Te permite colaborar con otros, hacer respaldo y compartir código.',
        <InfoBox key="info1" type="info">
          <strong>origin:</strong> Nombre por defecto del remoto principal.
          <br />
          <strong>Otros nombres:</strong> upstream (repo original), deploy (para deployment).
        </InfoBox>,
      ],
    },
    {
      title: 'Clonar y Comenzar a Trabajar',
      level: 2,
      content: [
        <CodeBlock
          key="code1"
          language="bash"
          code={`# Descargar repo completo desde GitHub/remoto
$ git clone https://github.com/usuario/proyecto.git

# Entrar en el repo clonado
$ cd proyecto

# Ver configuración del remoto
$ git remote -v

# Ver ramas disponibles
$ git branch
$ git branch -r      # Ramas remotas
$ git branch -a      # Todas (locales + remotas)

# Crear rama local basada en remota
$ git switch feature/login
# Git automáticamente crea rama local que sigue origin/feature/login`}
        />,
      ],
    },
    {
      title: 'Push y Pull - Sincronizar Local ↔ Remoto',
      level: 2,
      content: [
        <CodeBlock
          key="code2"
          language="bash"
          code={`# PUSH: Subir cambios locales al remoto
$ echo "feature code" > feature.js
$ git add feature.js
$ git commit -m "Agrega nueva feature"
$ git status  # Your branch is ahead of 'origin/main' by 1 commit

# PRIMER PUSH (con -u para vincular)
$ git push -u origin main

# Próximos pushes (sin -u)
$ git push origin main

# PULL: Descargar y fusionar cambios remotos
$ git pull origin main

# Pull = Fetch + Merge
# O separadamente:
$ git fetch origin
$ git merge origin/main`}
        />,
        <InfoBox key="info2" type="success">
          <strong>Regla de oro:</strong> Siempre haz pull ANTES de push para evitar conflictos.
        </InfoBox>,
      ],
    },
    {
      title: 'Pull Requests y Flujo Colaborativo',
      level: 2,
      content: [
        '<h3>Flujo:</h3>',
        '1. Crear rama (feature/login)',
        '2. Hacer commits',
        '3. Push a remoto',
        '4. Abrir PR en GitHub',
        '5. Código review (otros revisan)',
        '6. Aprobar y merge',
        '<h3>En GitHub:</h3>',
        'Aparece botón automático "Compare & pull request" después del primer push.',
      ],
    },
    {
      title: 'Conflictos - Cuando Dos Personas Editan Mismo Archivo',
      level: 2,
      content: [
        '<h3>Entender la marca:</h3>',
        '• <<<<<<< HEAD = TU versión (local)',
        '• ======= = Separador',
        '• >>>>>>> origin/main = Versión remota',
        '<h3>Resolver manualmente:</h3>',
        'Edita el archivo, elimina las marcas, decide qué mantener. Luego:',
        <CodeBlock
          key="code3"
          language="bash"
          code={`$ git add archivo.js
$ git commit -m "Resuelve conflicto en archivo.js"
$ git push origin main`}
        />,
        <InfoBox key="info3" type="warning">
          <strong>Conflictos son normales:</strong> Son parte de la colaboración. Resuélvelos cuidadosamente.
        </InfoBox>,
      ],
    },
  ];

  const summary = 'Git remoto permite colaboración en equipo. Usa pull antes de push, resuelve conflictos cuidadosamente y usa Pull Requests para código review.';

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        sections={sections}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
