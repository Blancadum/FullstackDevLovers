import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubForks() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Forks y contribuciones"
        description="Usa forks para contribuir a proyectos de terceros en GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Forks y contribuciones en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende qué es un fork, cómo contribuir a proyectos open source en GitHub y cómo mantener tu fork sincronizado."
        seoKeywords="github, fork, contribuciones, open source"
      >
        <h2>Qué haces cuando no tienes permiso de escritura</h2>
        <p>
          Todo lo visto hasta ahora (crear rama, push, Pull Request) asume que tienes permisos de
          escritura sobre el repositorio. Pero, ¿qué pasa si quieres corregir un bug en una librería
          open source que no es tuya? Ahí es donde entra el <strong>fork</strong>.
        </p>

        <h2>Qué es un fork</h2>
        <p>
          Un fork es una copia completa de un repositorio, alojada bajo tu propia cuenta de GitHub.
          Conserva todo el historial del original, pero es independiente: puedes hacer <code>push</code>
          sobre tu fork sin necesitar permisos en el repositorio original.
        </p>
        <p>
          No lo confundas con <code>git clone</code>: clonar descarga una copia a tu <em>disco local</em>;
          hacer fork crea una copia <em>en GitHub</em>, bajo tu cuenta, de la que después clonarás una
          copia local igual que harías con cualquier otro repositorio.
        </p>

        <h2>El flujo completo: fork → rama → PR</h2>
        <ol>
          <li>Entra en el repositorio original y pulsa el botón "Fork" (arriba a la derecha).</li>
          <li>GitHub crea una copia en tu cuenta: <code>github.com/tu-usuario/repo</code>.</li>
          <li>Clona <strong>tu fork</strong> (no el original) en local.</li>
          <li>Crea una rama para tu cambio y trabaja como siempre.</li>
          <li>Haz <code>push</code> a tu fork.</li>
          <li>Desde GitHub, abre un Pull Request de tu fork hacia el repositorio original.</li>
        </ol>
        <CodeBlock
          language="bash"
          code={`# 1. Clona tu fork (la URL es la de TU cuenta, no la del original)
git clone https://github.com/tu-usuario/repo.git
cd repo

# 2. Agrega el repositorio original como remoto "upstream"
git remote add upstream https://github.com/autor-original/repo.git

# 3. Verifica que tienes ambos remotos
git remote -v
# origin    https://github.com/tu-usuario/repo.git (tu fork)
# upstream  https://github.com/autor-original/repo.git (el original)

# 4. Crea tu rama de trabajo
git switch -c fix/error-tipografico

# 5. Haz tus cambios y commits
git add .
git commit -m "fix: corregir error tipográfico en README"

# 6. Sube la rama a TU fork (origin), nunca directamente a upstream
git push -u origin fix/error-tipografico

# 7. Abre el Pull Request desde GitHub: de tu fork hacia el repo original`}
        />

        <InfoBox type="info" title="origin vs upstream">
          Por convención, <code>origin</code> apunta a tu propio fork (donde tienes permisos de escritura)
          y <code>upstream</code> apunta al repositorio original (del que solo lees). Nunca podrás hacer
          <code>push</code> directo a <code>upstream</code> si no eres colaborador; para proponer cambios
          ahí siempre pasarás por un Pull Request.
        </InfoBox>

        <h2>Mantener tu fork sincronizado</h2>
        <p>
          Mientras tú trabajas, el repositorio original sigue avanzando con cambios de otras personas.
          Tu fork no se actualiza solo: tienes que sincronizarlo manualmente para no quedarte muy
          desactualizado ni generar conflictos innecesarios en tus Pull Requests.
        </p>
        <CodeBlock
          language="bash"
          code={`# Trae los cambios nuevos del repositorio original
git fetch upstream

# Cambia a tu rama principal
git switch main

# Integra los cambios del original en tu main local
git merge upstream/main

# Sube tu main actualizado a tu fork
git push origin main`}
        />
        <p>
          {/* TODO-verificar: GitHub ofrece también un botón "Sync fork" en la interfaz web que automatiza este proceso cuando no hay conflictos; comprueba su disponibilidad y comportamiento exacto en tu versión de la interfaz */}
          GitHub también ofrece un botón "Sync fork" en la página web de tu fork que hace esta
          sincronización sin pasar por la terminal, útil cuando no hay conflictos que resolver.
        </p>

        <h2>Buenas prácticas al contribuir a proyectos ajenos</h2>
        <ul>
          <li>Lee el archivo <code>CONTRIBUTING.md</code> del repositorio si existe: suele explicar el proceso esperado.</li>
          <li>Abre un Issue antes de un PR grande, para discutir el enfoque antes de invertir tiempo.</li>
          <li>Mantén tus PRs pequeños y enfocados en un solo cambio.</li>
          <li>Sincroniza tu fork antes de empezar una nueva contribución.</li>
        </ul>

        <h2>Resumen</h2>
        <ul>
          <li>Un fork es una copia de un repositorio bajo tu cuenta, útil cuando no tienes permisos de escritura sobre el original.</li>
          <li>El flujo típico es: fork → clonar tu fork → rama → commits → push a tu fork → Pull Request al original.</li>
          <li><code>origin</code> apunta a tu fork; <code>upstream</code> apunta al repositorio original.</li>
          <li>Sincroniza tu fork regularmente con <code>upstream</code> para evitar quedarte desactualizado.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
