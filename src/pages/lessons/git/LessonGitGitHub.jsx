import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitGitHub() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Configurar SSH para GitHub',
      description: 'Evita escribir contraseña cada vez que haces push.',
      solution: `# Generar clave SSH
ssh-keygen -t ed25519 -C "tu-email@example.com"

# Presiona Enter para ubicación por defecto
# Ingresa passphrase (o déjalo en blanco)

# Agregar clave al agente SSH
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Ver la clave pública
cat ~/.ssh/id_ed25519.pub

# Copiar y pegar en GitHub Settings > SSH Keys > New SSH key
# Probar conexión
ssh -T git@github.com`
    },
    {
      title: 'Crear un repositorio en GitHub',
      description: 'Inicializar repo remoto y conectarlo localmente.',
      solution: `# En GitHub:
# 1. Click en + > New repository
# 2. Dale nombre (ej: mi-proyecto)
# 3. Descripción opcional
# 4. Público o privado
# 5. Click "Create repository"

# En terminal (si repo local ya existe):
git remote add origin https://github.com/tu-usuario/mi-proyecto.git
git branch -M main
git push -u origin main

# O clonar repo vacío:
git clone https://github.com/tu-usuario/mi-proyecto.git
cd mi-proyecto`
    },
    {
      title: 'Usar GitHub CLI (gh) para crear PRs',
      description: 'Crear y gestionar PRs desde terminal.',
      solution: `# Instalar GitHub CLI (gh)
# macOS: brew install gh
# Windows: choco install gh
# Linux: seguir docs.github.com/en/github-cli

# Autenticarse
gh auth login
# Seleccionar GitHub.com
# Seleccionar HTTPS
# Autorizar con navegador

# Crear PR desde terminal
gh pr create --title "feat: agregar login" --body "Agrega autenticación"

# Listar PRs
gh pr list

# Ver detalles de un PR
gh pr view 123

# Mergear un PR desde terminal
gh pr merge 123`
    },
    {
      title: 'Proteger branch main con rules',
      description: 'Exigir reviews y pasar CI antes de mergear.',
      solution: `# En GitHub:
# Settings > Branches > Add branch protection rule

# Configurar:
# ✓ Require pull request reviews before merging
# ✓ Require status checks to pass before merging
# ✓ Require branches to be up to date before merging
# ✓ Include administrators

# Esto evita que alguien mergee sin review`
    },
    {
      title: 'Usar GitHub Actions para CI/CD',
      description: 'Automatizar tests y deploys con workflows.',
      solution: `# Crear .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm test
      - run: npm run build`
    },
    {
      title: 'Sincronizar fork con repositorio original',
      description: 'Mantener tu fork actualizado con el proyecto principal.',
      solution: `# Agregar remoto original
git remote add upstream https://github.com/usuario-original/proyecto.git

# Traer cambios del original
git fetch upstream
git checkout main
git merge upstream/main

# O rebasar tu trabajo
git rebase upstream/main

# Push a tu fork
git push origin main`
    },
    {
      title: 'Usar GitHub Issues para gestionar tareas',
      description: 'Crear, asignar y rastrear trabajo.',
      solution: `# En GitHub web:
# 1. Click en Issues > New issue
# 2. Título y descripción clara
# 3. Asignar a personas
# 4. Agregar labels (bug, feature, documentation)
# 5. Asignar a milestone

# Vincular PR a Issue:
# En descripción del PR escribir:
# Closes #123
# Fixes #124

# Al mergear el PR, GitHub cerrará las issues automáticamente`
    },
    {
      title: 'Usar Projects para organizar trabajo',
      description: 'Kanban board para el equipo.',
      solution: `# En GitHub:
# Click en Projects > New project
# Elegir template (Kanban, Table, etc.)
# Agregar issues/PRs como tarjetas
# Mover entre columnas (To do, In progress, Done)

# Esto ayuda a ver qué está en progreso`
    }
  ];

  return (
    <>
      <LessonLayout
        title="GitHub - Plataforma de Desarrollo Colaborativo"
        description="Domina GitHub para trabajar en equipo con Git"
        breadcrumbs={breadcrumbs}
      >
        <TheorySection title="¿Qué es GitHub?">
          <p>
            GitHub es la plataforma más popular para alojar repositorios Git. Ofrece:
          </p>
          <ul>
            <li><strong>Repositorios remotos:</strong> Almacenar código en la nube.</li>
            <li><strong>Colaboración:</strong> Pull Requests, reviews, discussions.</li>
            <li><strong>Automatización:</strong> GitHub Actions para CI/CD.</li>
            <li><strong>Gestión de proyectos:</strong> Issues, Projects, Milestones.</li>
            <li><strong>Social:</strong> Stars, followers, gists compartibles.</li>
          </ul>
        </TheorySection>

        <TheorySection title="Modelo de autorización">
          <p>
            GitHub usa dos sistemas de autenticación:
          </p>
          <CodeBlock
            language="text"
            code={`HTTPS - Usar usuario y contraseña (o token de acceso)
git clone https://github.com/usuario/proyecto.git

SSH - Usar clave pública/privada (más seguro)
git clone git@github.com:usuario/proyecto.git

Recomendado: SSH porque:
- Más seguro (criptografía de clave pública)
- No necesitas escribir contraseña cada vez
- Funciona mejor en scripts y CI/CD`}
          />
        </TheorySection>

        <TheorySection title="Flujo colaborativo en GitHub">
          <ol>
            <li><strong>Fork:</strong> Copiar repositorio a tu cuenta.</li>
            <li><strong>Clone:</strong> Bajar repo a tu máquina.</li>
            <li><strong>Branch:</strong> Crear rama para tu feature.</li>
            <li><strong>Commit & Push:</strong> Hacer cambios y subir.</li>
            <li><strong>Pull Request:</strong> Pedir que integren tu código.</li>
            <li><strong>Review:</strong> Otros revisan y sugieren cambios.</li>
            <li><strong>Merge:</strong> Integrar cambios a main.</li>
          </ol>
        </TheorySection>

        <TheorySection title="Ventajas de GitHub para equipos">
          <ul>
            <li><strong>Visibilidad:</strong> Todos ven qué se está haciendo.</li>
            <li><strong>Trazabilidad:</strong> Cada cambio está documentado en un PR.</li>
            <li><strong>Control de calidad:</strong> Code review antes de mergear.</li>
            <li><strong>Documentación:</strong> README, wikis, discussions integradas.</li>
            <li><strong>Integración:</strong> Slack, Jira, herramientas externas.</li>
          </ul>
        </TheorySection>

        <ExerciseSection title="Prácticas" exercises={exercises} />

        <LessonNavigation prev={nav.prev} next={nav.next} />
      </LessonLayout>
    </>
  );
}
