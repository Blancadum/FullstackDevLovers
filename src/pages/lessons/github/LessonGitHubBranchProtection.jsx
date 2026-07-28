import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubBranchProtection() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Protección de ramas y políticas"
        description="Protege tus ramas principales con reglas y políticas en GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Protección de ramas y políticas en GitHub - Fullstack Dev Lovers"
        seoDescription="Configura branch protection rules en GitHub para exigir revisiones, checks de CI y evitar cambios directos en main."
        seoKeywords="github, branch protection, políticas de ramas, seguridad de código"
      >
        <h2>Las buenas prácticas necesitan reglas que las hagan cumplir</h2>
        <p>
          Ya sabes que "no se hace push directo a <code>main</code>" y que "los PRs deben revisarse
          antes de fusionar" son buenas prácticas de GitHub Flow. El problema es que, si dependen solo de
          la disciplina del equipo, alguien terminará saltándoselas por prisa o despiste. Las
          <strong> branch protection rules</strong> convierten esas buenas prácticas en reglas que
          GitHub hace cumplir automáticamente.
        </p>

        <h2>Dónde se configuran</h2>
        <p>
          En el repositorio, ve a <code>Settings → Branches</code> y añade una regla de protección
          (en versiones más recientes de la interfaz puede aparecer como "Rulesets"). Se aplica sobre un
          patrón de nombre de rama, típicamente <code>main</code>.
        </p>
        <p>
          {/* TODO-verificar: la ubicación exacta y el nombre de la sección ("Branches" vs "Rulesets") ha cambiado entre versiones de la interfaz de GitHub; verifica el menú vigente al configurarlo */}
          GitHub ha ido evolucionando esta funcionalidad (de "Branch protection rules" clásicas a
          "Rulesets" más flexibles); el concepto de fondo que ves en esta lección se mantiene aunque la
          ubicación exacta del menú pueda variar.
        </p>

        <h2>Las reglas más habituales</h2>
        <ul>
          <li>
            <strong>Require a pull request before merging:</strong> nadie puede hacer push directo a la
            rama protegida; todo cambio pasa obligatoriamente por un PR.
          </li>
          <li>
            <strong>Require approvals:</strong> exige un número mínimo de aprobaciones (por ejemplo, al
            menos una persona distinta del autor) antes de poder fusionar.
          </li>
          <li>
            <strong>Dismiss stale approvals on new commits:</strong> si alguien aprueba y luego se suben
            nuevos commits, la aprobación anterior se invalida y hay que revisar de nuevo.
          </li>
          <li>
            <strong>Require status checks to pass:</strong> exige que los workflows de CI (los que viste
            en la lección de GitHub Actions) terminen en verde antes de permitir la fusión.
          </li>
          <li>
            <strong>Require branches to be up to date before merging:</strong> obliga a que tu rama tenga
            los últimos cambios de <code>main</code> integrados antes de fusionar, evitando fusionar
            "a ciegas" sobre una base desactualizada.
          </li>
          <li>
            <strong>Require conversation resolution:</strong> no permite fusionar si quedan comentarios de
            revisión sin resolver.
          </li>
          <li>
            <strong>Restrict who can push:</strong> limita qué usuarios o equipos pueden hacer push directo,
            incluso en excepciones.
          </li>
        </ul>

        <InfoBox type="warning" title="Ni siquiera los administradores deberían saltarse las reglas">
          GitHub permite una opción para "incluir a los administradores" en las restricciones. Actívala:
          si el propio equipo administrador puede saltarse las reglas cuando quiera, la protección deja
          de ser una garantía real.
        </InfoBox>

        <h2>El archivo CODEOWNERS: revisiones dirigidas automáticamente</h2>
        <p>
          Puedes definir qué personas o equipos deben revisar obligatoriamente los cambios en ciertas
          rutas del proyecto, creando un archivo <code>CODEOWNERS</code> en la raíz del repositorio (o en
          <code>.github/</code>):
        </p>
        <CodeBlock
          language="text"
          code={`# Archivo .github/CODEOWNERS

# Por defecto, cualquier cambio lo revisa el equipo backend
*       @tu-organizacion/backend-team

# Los cambios en la carpeta de configuración de CI los revisa el responsable de DevOps
/.github/workflows/  @nombre-usuario-devops`}
        />
        <p>
          Si combinas esto con "Require approvals" y activas también la opción de exigir revisión de los
          code owners, GitHub asignará automáticamente al revisor correcto en cada Pull Request según los
          archivos que modifique.
        </p>

        <h2>Qué se siente al chocar con una regla</h2>
        <p>
          Si intentas hacer push directo a una rama protegida sin pasar por PR, Git te lo rechazará con
          un mensaje similar a este:
        </p>
        <CodeBlock
          language="bash"
          code={`$ git push origin main
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes must be made through a pull request.
To https://github.com/usuario/repo.git
 ! [remote rejected] main -> main (protected branch hook declined)`}
        />
        <p>
          Es exactamente el comportamiento esperado: la solución es crear una rama, hacer push ahí, y
          abrir el Pull Request correspondiente.
        </p>

        <h2>Resumen</h2>
        <ul>
          <li>Las branch protection rules convierten buenas prácticas de GitHub Flow en reglas obligatorias, no en sugerencias.</li>
          <li>Las más comunes exigen Pull Request, aprobaciones, checks de CI en verde y ramas actualizadas antes de fusionar.</li>
          <li>El archivo <code>CODEOWNERS</code> asigna automáticamente revisores según qué rutas cambia un PR.</li>
          <li>Incluir a los administradores en las restricciones evita excepciones que rompan la garantía de la protección.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
