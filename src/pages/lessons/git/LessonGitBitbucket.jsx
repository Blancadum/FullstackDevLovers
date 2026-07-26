import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitBitbucket() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Crear repositorio en Bitbucket',
      description: 'Inicializar proyecto en Bitbucket Cloud.',
      solution: `# En Bitbucket.org:
# 1. Click en + > Repository
# 2. Seleccionar Git como VCS
# 3. Nombre del repositorio (ej: mi-proyecto)
# 4. Descripción
# 5. Click "Create repository"

# En terminal:
git remote add origin https://bitbucket.org/tu-usuario/mi-proyecto.git
git branch -M main
git push -u origin main`
    },
    {
      title: 'Usar Bitbucket Pipelines para CI/CD',
      description: 'Configurar automatización con bitbucket-pipelines.yml',
      solution: `# Crear bitbucket-pipelines.yml en raíz del proyecto
image: node:16

pipelines:
  default:
    - step:
        name: Build and Test
        script:
          - npm install
          - npm test
          - npm run build
        artifacts:
          - dist/**

  branches:
    main:
      - step:
          name: Build and Deploy
          script:
            - npm install
            - npm test
            - npm run build
            - npm run deploy:prod
          deployment: Production`
    },
    {
      title: 'Crear Pull Request en Bitbucket',
      description: 'Abrir PR en Bitbucket.',
      solution: `# En Bitbucket web:
# 1. Ir a Pull requests
# 2. Click "Create pull request"
# 3. Seleccionar rama source y destino
# 4. Título y descripción
# 5. Asignar reviewers
# 6. Click "Create"

# En terminal (con Bitbucket CLI):
bb pr create --title "feat: agregar API" --description "Nueva API REST"`
    },
    {
      title: 'Configurar branch permissions',
      description: 'Proteger ramas con reglas de acceso.',
      solution: `# En Bitbucket (Repository settings > Branch permissions):
# Crear regla:
# Branch: main
# Require approval: 2 reviewers
# Require passing builds: Sí
# Require pull requests: Sí

# Esto asegura que main esté siempre limpio y revisado`
    },
    {
      title: 'Usar Bitbucket Deployments',
      description: 'Gestionar deployments a diferentes ambientes.',
      solution: `# En Bitbucket (Deployments):
# Crear environment: Staging
# Crear environment: Production

# En bitbucket-pipelines.yml:
pipelines:
  branches:
    main:
      - step:
          name: Deploy to Production
          script:
            - npm run deploy
          deployment: Production`
    },
    {
      title: 'Integrar Bitbucket con Jira',
      description: 'Vincular commits y PRs con issues de Jira.',
      solution: `# Configuración automática si usas Atlassian Cloud

# En commit messages, mencionar issue de Jira:
git commit -m "PROYECTO-123 fix: resolver error de login"

# Bitbucket automáticamente vincula el commit con Jira
# Y muestra en la issue

# En PR description:
# Closes PROYECTO-456
# Related to PROYECTO-457`
    },
    {
      title: 'Usar Bitbucket Snippets para compartir código',
      description: 'Compartir fragmentos de código con el equipo.',
      solution: `# En Bitbucket:
# Click en tu avatar > Snippets > Create snippet
# Título y descripción
# Pegar código
# Seleccionar lenguaje
# Público o privado
# Share link con equipo

# Útil para:
# - Ejemplos de código
# - Configuraciones
# - Scripts reutilizables`
    },
    {
      title: 'Sincronizar Bitbucket con GitHub',
      description: 'Mantener mirror entre Bitbucket y GitHub.',
      solution: `# En Bitbucket (Repository settings > Links):
# O manualmente:

git clone --mirror https://github.com/usuario/proyecto.git
cd proyecto.git
git push --mirror https://bitbucket.org/usuario/proyecto.git

# Para mantenimiento continuo:
git clone --mirror git@github.com:usuario/proyecto.git
cd proyecto.git
while true; do
  git fetch -p origin
  git push --mirror https://bitbucket.org/usuario/proyecto.git
  sleep 3600
done`
    }
  ];

  return (
    <>
      <LessonLayout
        title="Bitbucket - Solución Empresarial de Atlassian"
        description="Domina Bitbucket para equipos que usan ecosistema Atlassian"
        breadcrumbs={breadcrumbs}
      >
        <TheorySection title="¿Qué es Bitbucket?">
          <p>
            Bitbucket es la solución Git de Atlassian, la empresa detrás de Jira, Confluence, etc.
            Es muy usado en empresas que ya usan Jira:
          </p>
          <ul>
            <li><strong>Integración perfecta con Jira:</strong> Links automáticos entre commits y issues.</li>
            <li><strong>Pipelines integrado:</strong> CI/CD sin herramientas externas.</li>
            <li><strong>Atlassian Cloud:</strong> Mismo login y facturación centralizada.</li>
            <li><strong>On-premise:</strong> Bitbucket Server para máximo control.</li>
            <li><strong>Mercurial y Git:</strong> Soporta ambos (aunque Git es estándar).</li>
          </ul>
        </TheorySection>

        <TheorySection title="Bitbucket Cloud vs Server vs Data Center">
          <CodeBlock
            language="text"
            code={`CLOUD (bitbucket.org):
✓ Mantenido por Atlassian
✓ Escalabilidad automática
✓ Sync con Jira Cloud
✗ Menos control
✗ Dependencia de internet

SERVER (On-premise):
✓ Control total
✓ Seguridad máxima
✗ Mantener servidores
✗ Caro para empresas pequeñas

DATA CENTER:
✓ Alta disponibilidad
✓ Para grandes empresas
✗ Muy caro`}
          />
        </TheorySection>

        <TheorySection title="Flujo de trabajo en Bitbucket">
          <ol>
            <li><strong>Crear issue en Jira</strong> - Definir tarea que hacer.</li>
            <li><strong>Crear rama</strong> - Nombre con clave Jira: feature/PROJ-123.</li>
            <li><strong>Hacer commits</strong> - Mencionar clave Jira en mensaje.</li>
            <li><strong>Abrir Pull Request</strong> - Descripción clara del cambio.</li>
            <li><strong>Review</strong> - Compañeros revisan en Bitbucket.</li>
            <li><strong>Merge</strong> - Integrar en main.</li>
            <li><strong>Deploy</strong> - Pipeline automático despliega.</li>
            <li><strong>Cerrar Jira issue</strong> - Marcar como done.</li>
          </ol>
        </TheorySection>

        <TheorySection title="Ventajas de Bitbucket en empresas">
          <ul>
            <li><strong>Ecosistema Atlassian:</strong> Todo conectado (Jira, Confluence, etc).</li>
            <li><strong>Trazabilidad:</strong> Ver qué commits fueron a qué issues de Jira.</li>
            <li><strong>Compliance:</strong> Auditoría y permisos granulares.</li>
            <li><strong>Facturación unificada:</strong> Un solo contrato para múltiples productos.</li>
            <li><strong>Integraciones:</strong> Slack, Teams, PagerDuty, etc.</li>
          </ul>
        </TheorySection>

        <TheorySection title="Comparativa: GitHub vs GitLab vs Bitbucket">
          <CodeBlock
            language="text"
            code={`                 GITHUB    GITLAB    BITBUCKET
Popularidad      ★★★★★    ★★★★      ★★★
CI/CD            GitHub    GitLab    Pipelines
                 Actions   (nativo)  (nativo)
Precio           $$/mes    €/mes     Depende
Self-hosted      ✗         ✓         ✓
Jira integrado   ✗         ✗         ✓ (perfecto)
Para startups    ✓         ✓         ✗
Para empresas    ✓         ✓         ✓
Open source      ✓✓✓       ✓✓        ✓
Documentación    ✓✓✓       ✓✓        ✓✓`}
          />
        </TheorySection>

        <TheorySection title="Casos de uso para cada plataforma">
          <p>
            <strong>Elige GitHub si:</strong> Trabajas con open source, startups tech, comunidad
          </p>
          <p>
            <strong>Elige GitLab si:</strong> Necesitas CI/CD completo, self-hosted, o DevOps todo-en-uno
          </p>
          <p>
            <strong>Elige Bitbucket si:</strong> Usas Jira, eres parte de ecosistema Atlassian, o empresa con Confluence
          </p>
        </TheorySection>

        <ExerciseSection title="Prácticas" exercises={exercises} />

        <LessonNavigation prev={nav.prev} next={nav.next} />
      </LessonLayout>
    </>
  );
}
