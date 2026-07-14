import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGitHub() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🐙',
      title: 'GitHub',
      definition: 'Plataforma de hosting para repositorios Git, colaboración y desarrollo social',
      example: 'Crear repo en github.com, clonar y hacer push'
    },
    {
      icon: '🔀',
      title: 'Pull Requests',
      definition: 'Solicitud de revisión y merge de cambios desde una rama a otra',
      example: 'Crear PR desde feature/login a main'
    },
    {
      icon: '🤝',
      title: 'Colaboración',
      definition: 'Trabajo en equipo con issues, discussions y code review',
      example: 'Comentar en un PR, asignar issues'
    }
  ];

  const exercises = [
    {
      title: 'Crear tu primer repositorio en GitHub',
      description: 'Configura un repo en GitHub y clónalo localmente',
      solution: `# 1. Crear repositorio en GitHub
# - Ir a github.com/new
# - Nombrar repositorio: mi-primer-proyecto
# - Agregar README
# - Crear

# 2. Clonar localmente
git clone https://github.com/tu-usuario/mi-primer-proyecto.git
cd mi-primer-proyecto

# 3. Hacer cambios
echo "Hola GitHub" > archivo.txt
git add .
git commit -m "feat: agregar archivo inicial"

# 4. Hacer push
git push origin main`
    },
    {
      title: 'Crear y mergear un Pull Request',
      description: 'Crea una rama, haz cambios y abre un PR',
      solution: `# 1. Crear rama local
git checkout -b feature/nueva-feature

# 2. Hacer cambios y commit
echo "Nueva característica" > feature.txt
git add .
git commit -m "feat: agregar nueva característica"

# 3. Hacer push
git push origin feature/nueva-feature

# 4. En GitHub:
# - Ir al repo
# - Click "Compare & pull request"
# - Escribir descripción
# - Click "Create pull request"

# 5. Después de aprobación, mergear en GitHub o:
git checkout main
git pull origin main
git merge feature/nueva-feature
git push origin main`
    }
  ];

  const keyPoints = [
    'GitHub es el hosting más popular para Git',
    'Gratuito para repos públicos y privados',
    'Pull Requests son la base de la colaboración',
    'Issues para reportar bugs y features',
    'Actions para CI/CD automático',
    'GitHub Pages para hosting de sitios estáticos',
    'Discussions para comunidad',
    'Code review antes de mergear',
    'Forking para contribuir a proyectos de otros',
    'Trending repos para encontrar inspiración'
  ];

  const sections = [
    {
      title: '¿Qué es GitHub?',
      content: (
        <p>
          GitHub es la plataforma más popular para hosting de repositorios Git. Permite a desarrolladores
          colaborar en código, revisar cambios, y construir software juntos. Es esencial en el desarrollo
          moderno y es donde viven la mayoría de proyectos open source.
        </p>
      )
    },
    {
      title: 'Configurar GitHub por primera vez',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# 1. Crear cuenta en github.com
# 2. Configurar Git localmente con tu usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 3. Generar SSH key (mejor que HTTPS)
ssh-keygen -t ed25519 -C "tu@email.com"

# 4. Agregar clave pública a GitHub
# Copiar contenido de ~/.ssh/id_ed25519.pub
# GitHub → Settings → SSH and GPG keys → New SSH key

# 5. Verificar conexión
ssh -T git@github.com
# Debería responder: "Hi username! You've successfully authenticated"`}
          />
          <InfoBox type="tip">
            SSH es más seguro que HTTPS para git push/pull.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Crear y Clonar Repositorio',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Opción 1: Crear en GitHub primero
# 1. github.com → New repository
# 2. Nombrar y crear
# 3. Clonar localmente
git clone https://github.com/usuario/nombre-repo.git
cd nombre-repo

# Opción 2: Inicializar localmente y pushear
git init mi-proyecto
cd mi-proyecto
git add .
git commit -m "Initial commit"

# Crear repo en GitHub
# Luego conectar:
git remote add origin https://github.com/usuario/mi-proyecto.git
git branch -M main
git push -u origin main`}
          />
        </>
      )
    },
    {
      title: 'Pull Requests - El flujo de colaboración',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Flujo típico de PR en GitHub:

# 1. Crear rama desde main
git checkout main
git pull origin main
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios
# ... editar archivos ...
git add .
git commit -m "feat: nueva funcionalidad"
git push origin feature/nueva-funcionalidad

# 3. En GitHub:
# - Click "Compare & pull request"
# - Escribir descripción detallada
# - Mencionar issues relacionados: "Fixes #123"
# - Click "Create pull request"

# 4. Code Review
# - Compañeros revisan y comentan
# - Hacer cambios si es necesario
# - Push a la misma rama (actualiza PR)

# 5. Mergear
# - Después de aprobación, click "Merge pull request"
# - Eliminar rama: click "Delete branch"`}
          />
          <InfoBox type="info">
            Los PRs son donde ocurre la mayoría de la colaboración. Siempre crea un PR en lugar de hacer push directo a main.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Issues - Rastrear bugs y features',
      content: (
        <>
          <Table
            headers={['Campo', 'Descripción', 'Ejemplo']}
            rows={[
              ['Título', 'Resumen del problema', 'Login no funciona en mobile'],
              ['Descripción', 'Detalles del issue', 'Pasos para reproducir, screenshot'],
              ['Labels', 'Categorización', 'bug, enhancement, documentation'],
              ['Assignee', 'Quién lo va a arreglar', 'Tu nombre'],
              ['Milestone', 'Versión objetivo', 'v1.0.0'],
              ['Priority', 'Urgencia', 'High, Medium, Low'],
            ]}
          />
          <CodeBlock
            language="bash"
            code={`# Referencia de issue en commit
git commit -m "fix: arreglar login mobile - Fixes #42"

# Cuando este commit se mergea a main, el issue #42 se cierra automáticamente`}
          />
        </>
      )
    },
    {
      title: 'Forking - Contribuir a proyectos ajenos',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# 1. Fork el proyecto en GitHub
# Click "Fork" button en el repo

# 2. Clonar tu fork
git clone https://github.com/tu-usuario/proyecto.git
cd proyecto

# 3. Agregar upstream (repo original)
git remote add upstream https://github.com/autor-original/proyecto.git

# 4. Crear rama y hacer cambios
git checkout -b fix/bug-importante
# ... hacer cambios ...
git push origin fix/bug-importante

# 5. En GitHub: Create pull request hacia el repo original
# Click "New pull request" y seleccionar upstream

# 6. Mantener tu fork actualizado
git fetch upstream
git rebase upstream/main
git push origin main`}
          />
        </>
      )
    },
    {
      title: 'GitHub Pages - Hosting gratis',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Crear sitio web estático alojado en GitHub

# 1. Crear repo con nombre especial
# nombre-usuario.github.io

# 2. Agregar archivos HTML
echo "<h1>Mi sitio web</h1>" > index.html
git add .
git commit -m "Initial commit"
git push origin main

# 3. Accesible en
# https://nombre-usuario.github.io

# Alternativa: usar rama 'gh-pages'
# Settings → Pages → Source: gh-pages branch`}
          />
        </>
      )
    },
    {
      title: 'GitHub Actions - Automatización CI/CD',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# Crear workflow automático
# .github/workflows/build.yml

name: Build

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run tests
        run: |
          npm install
          npm test

      - name: Build
        run: npm run build`}
          />
          <InfoBox type="info">
            GitHub Actions ejecuta automáticamente scripts al hacer push o PR.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Mejores prácticas en GitHub',
      content: (
        <>
          <CodeBlock
            language="bash"
            code={`# 1. README.md bien escrito
- Descripción del proyecto
- Cómo instalarlo
- Ejemplos de uso
- Licencia

# 2. .gitignore para archivos innecesarios
node_modules/
.env
*.log

# 3. Commits claros
git commit -m "feat: agregar autenticación"

# 4. Ramas descriptivas
feature/login
bugfix/password-reset
docs/api

# 5. PR descriptions
- Qué cambios hiciste
- Por qué
- Cómo testear

# 6. Code review responsable
- Ser constructivo
- Sugerir mejoras
- Compartir conocimiento`}
          />
        </>
      )
    }
  ];

  const summary = `GitHub es la plataforma colaborativa de Git:

• Hosting de repos públicos y privados
• Pull Requests para code review
• Issues para tracking de bugs y features
• Forking para contribuir a proyectos ajenos
• GitHub Pages para hosting estático
• Actions para CI/CD automático
• Discussions para comunidad
• Trending repos para explorar
• SSH keys para acceso seguro
• Ramas protegidas y reglas de merge`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
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