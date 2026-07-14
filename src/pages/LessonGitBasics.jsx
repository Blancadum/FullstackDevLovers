import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGitBasics() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Git: Sistema de control de versiones. Rastrea cambios en archivos.',
    'Repositorio: Carpeta .git que almacena todo el historial.',
    'Commit: Foto permanente con mensaje. El núcleo de Git.',
    'Rama: Línea de desarrollo independiente. main es rama principal.',
    'git config: Configurar nombre y email (global = máquina, sin --global = repo)',
    'git init: Crear repositorio local en carpeta actual.',
    'git status: Ver estado actual (archivos modificados, staged, etc.)',
    'git add: Preparar (stage) archivos para commit.',
    'git commit -m: Crear commit con mensaje descriptivo.',
    'git log: Ver historial de commits.',
    'git branch: Listar/crear ramas.',
    'git switch: Cambiar a otra rama (recomendado 2026).',
    'git merge: Fusionar rama en rama actual.',
  ];

  const exercises = [
    {
      title: 'Crear un repositorio y hacer commits',
      description: 'Configura Git, crea un repo local, crea un archivo, hazle commit y verifica el historial.',
      difficulty: 'Básico',
      hint: 'Pasos: git config, git init, crear archivo, git add, git commit, git log',
      solution: `# 1. Configurar tu nombre y email (solo una vez por máquina)
$ git config --global user.name "Juan Pérez"
$ git config --global user.email "juan@example.com"

# 2. Crear y entrar en una carpeta para el proyecto
$ mkdir mi-proyecto
$ cd mi-proyecto

# 3. Inicializar repositorio local
$ git init

# 4. Crear un archivo
$ echo "console.log('Hola');" > app.js

# 5. Ver estado del repositorio
$ git status

# 6. Preparar el archivo (stage)
$ git add app.js

# 7. Crear commit
$ git commit -m "Crea archivo app.js inicial"

# 8. Ver historial de commits
$ git log
$ git log --oneline`,
    },
    {
      title: 'Trabajar con ramas y merge',
      description: 'Crea rama feature, haz cambios, vuelve a main y fusiona la rama (merge).',
      difficulty: 'Intermedio',
      hint: 'Usa git switch para cambiar de rama, git merge para fusionar, git branch para listar',
      solution: `# 1. Ver ramas locales (por defecto solo main)
$ git branch

# 2. Crear rama para nueva feature
$ git switch -c feature/login

# 3. Hacer cambios
$ echo "function login() { }" > login.js
$ git add login.js
$ git commit -m "Agrega función login"

# 4. Ver ramas
$ git branch

# 5. Volver a main
$ git switch main

# 6. Ver que login.js NO está en main
$ ls

# 7. Fusionar feature/login en main
$ git merge feature/login

# 8. Ahora login.js existe en main
$ ls

# 9. Eliminar rama de feature (ya no la necesitas)
$ git branch -d feature/login`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es Git?',
      level: 2,
      content: [
        '<strong>Git</strong> es un <strong>sistema de control de versiones</strong> que rastrea cambios en archivos. Permite ver quién cambió qué, cuándo, y por qué.',
        <InfoBox key="info1" type="info">
          <strong>Git ≠ GitHub:</strong> Git es software local. GitHub es plataforma online para alojar repositorios.
          <br />
          <strong>Otros remotos:</strong> GitLab, Gitbucket, Bitbucket también usan Git.
        </InfoBox>,
      ],
    },
    {
      title: 'Flujo Básico - Configuración e Inicialización',
      level: 2,
      content: [
        '<h3>CONFIGURACIÓN (solo una vez por máquina)</h3>',
        <CodeBlock
          key="code1"
          language="bash"
          code={`# Ver configuración actual
$ git config --list

# Establecer nombre global
$ git config --global user.name "Juan Pérez"

# Establecer email global
$ git config --global user.email "juan@example.com"

# CREAR REPOSITORIO LOCAL
$ mkdir mi-proyecto
$ cd mi-proyecto
$ git init
# Salida: Initialized empty Git repository in /Users/.../mi-proyecto/.git/

# Ver estado actual
$ git status`}
        />,
      ],
    },
    {
      title: 'El Ciclo: Cambios → Stage → Commit',
      level: 2,
      content: [
        <CodeBlock
          key="code2"
          language="bash"
          code={`/*
 * EL FLUJO DIARIO DE GIT
 *
 *  Directorio                Stage (Zona de espera)         Repositorio (commits)
 *  archivo.js (modificado)
 *       ↓ git add
 *                    archivo.js (preparado)
 *                              ↓ git commit
 *                                          commit #abc123 ✓
 */

# Crear/modificar archivo
$ echo "console.log('Hola');" > app.js

# PASO 1: Preparar archivo (git add)
$ git add app.js

# PASO 2: Crear commit (foto permanente)
$ git commit -m "Crea archivo app.js inicial"

# Ver el historial
$ git log
$ git log --oneline`}
        />,
        <InfoBox key="info2" type="success">
          <strong>Mensajes de commit:</strong> Usa imperativo ("Agrega login" no "Agregado login"). Sé descriptivo pero conciso.
        </InfoBox>,
      ],
    },
    {
      title: 'Ramas - Desarrollo Paralelo',
      level: 2,
      content: [
        <CodeBlock
          key="code3"
          language="bash"
          code={`/*
 * RAMAS: Líneas de desarrollo independientes
 *
 * main               feature/login (rama nueva)
 *  │                 │
 *  ├─ commit 1       ├─ commit 1 (mismo)
 *  │                 │
 *  ├─ commit 2       ├─ commit 2 (mismo)
 *  │                 │
 *  (sin cambios)     ├─ commit 3 (login feature)
 *                    │
 *                    └─ commit 4 (login feature)
 */

# Ver todas las ramas locales
$ git branch

# Crear rama para nueva feature
$ git branch feature/login

# Cambiar a la rama de login (método moderno 2026)
$ git switch feature/login

# Crear rama Y cambiar a ella en un paso
$ git switch -c feature/logout

# Volver a main
$ git switch main

# Fusionar feature/login en main
$ git merge feature/login

# Eliminar rama ya fusionada
$ git branch -d feature/login`}
        />,
        <InfoBox key="info3" type="warning">
          <strong>Convención de nombres:</strong> feature/nombre, bugfix/nombre, hotfix/nombre, docs/nombre
        </InfoBox>,
      ],
    },
    {
      title: 'Ver Historial y Cambios',
      level: 2,
      content: [
        <CodeBlock
          key="code4"
          language="bash"
          code={`# Ver historial completo (detallado)
$ git log

# Historial compacto (recomendado)
$ git log --oneline

# Historial con árbol de ramas (muy visual)
$ git log --oneline --graph --all

# Últimos N commits
$ git log --oneline -5

# Ver cambios SIN preparar (trabajando)
$ git diff

# Ver cambios ya preparados (en stage)
$ git diff --staged

# Ver cambios en un archivo específico
$ git diff archivo.js`}
        />,
      ],
    },
    {
      title: 'Deshacer Cambios - Seguro',
      level: 2,
      content: [
        <CodeBlock
          key="code5"
          language="bash"
          code={`# Descartar cambios en archivo (vuelve al último commit)
$ git restore archivo.js

# Sacar archivo de la zona de espera (sin borrarlo)
$ git restore --staged archivo.js

# Deshacer último commit pero CONSERVAR cambios
$ git reset HEAD~1

# Deshacer último commit y BORRAR cambios
$ git reset --hard HEAD~1

# Guardar cambios sin commit (estibador)
$ git stash

# Recuperar los cambios guardados
$ git stash pop`}
        />,
        <InfoBox key="info4" type="danger">
          <strong>Regla de oro:</strong> Si ya subiste (push), NUNCA uses reset/hard. Usa revert.
        </InfoBox>,
      ],
    },
  ];

  const summary = 'Git es herramienta esencial para control de versiones. Domina el ciclo: cambios → stage → commit, y maneja ramas para desarrollo paralelo.';

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
