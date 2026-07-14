import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, TheorySection, ExerciseSection, CodeBlock } from '../../../components';

export function LessonGitPullRequests() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const exercises = [
    {
      title: 'Crear una Pull Request en GitHub',
      description: 'Push tu rama y abre un PR desde GitHub web.',
      solution: `# 1. Hacer push de tu rama
git push origin feature/login

# 2. Ir a GitHub y hacer click en "Compare & pull request"
# 3. Rellenar título y descripción
# 4. Click en "Create pull request"`
    },
    {
      title: 'Actualizar un PR con nuevos commits',
      description: 'Si revisores piden cambios, agrégalos al mismo PR.',
      solution: `# Haz cambios en los archivos
git add .
git commit -m "fix: cambios solicitados en review"

# Push a la misma rama
git push origin feature/login

# El PR se actualiza automáticamente`
    },
    {
      title: 'Mergear un PR desde la línea de comandos',
      description: 'Una vez aprobado, integra el PR en main.',
      solution: `# Cambiar a main
git switch main

# Pull los cambios del PR
git pull origin feature/login

# O mergear directamente
git merge feature/login`
    },
    {
      title: 'Crear PR desde rama existente',
      description: 'Abre PR entre dos ramas específicas.',
      solution: `# Primero asegúrate de que ambas ramas existen en remoto
git push -u origin feature/api-v2

# En GitHub:
# 1. Ve a tu repositorio
# 2. Click en "Pull requests"
# 3. Click en "New pull request"
# 4. Selecciona rama base (main) y rama a comparar (feature/api-v2)
# 5. Rellena información y crea PR`
    },
    {
      title: 'Marcar PR como WIP (Work In Progress)',
      description: 'Indica que PR aún está en desarrollo.',
      solution: `# Opción 1: Usar prefijo en título
# Cambiar título a: "WIP: Agregar dashboard"

# Opción 2: Convertir a Draft (en GitHub)
# Click en "Still in progress? Convert to draft"

# Esto evita que otros mergueen accidentalmente`
    },
    {
      title: 'Solicitar review a compañeros',
      description: 'Pide que revisen tu PR.',
      solution: `# En GitHub web:
# 1. Click en "Reviewers" en el panel derecho
# 2. Selecciona usuarios para que revisen
# 3. Los revisores recibirán notificación

# En terminal (requiere GitHub CLI):
gh pr review --request-review @usuario`
    },
    {
      title: 'Dejar comentarios en un PR',
      description: 'Revisa el código y deja feedback en líneas específicas.',
      solution: `# En GitHub web:
# 1. Ve a tab "Files changed"
# 2. Hover sobre línea de código
# 3. Click en icono de comentario
# 4. Escribe comentario
# 5. Puedes ser solo comentario o solicitar cambios

# Tipos de review:
# - Comentario: Solo información
# - Aprobar: Aprueba el PR
# - Solicitar cambios: El autor debe hacer cambios`
    },
    {
      title: 'Usar squash al mergear PR',
      description: 'Combinar todos commits en uno antes de mergear.',
      solution: `# En GitHub web al mergear:
# 1. Click en dropdown junto a "Merge pull request"
# 2. Selecciona "Squash and merge"
# 3. Revisa el mensaje y confirma

# Esto crea un único commit con todos los cambios`
    },
    {
      title: 'Rebasar rama de PR contra main',
      description: 'Actualizar PR con cambios recientes de main.',
      solution: `# En rama local:
git fetch origin
git rebase origin/main

# Si hay conflictos, resuélvelos
# git add .
# git rebase --continue

# Push con force
git push --force-with-lease origin feature/login`
    },
    {
      title: 'Cerrar PR sin mergear',
      description: 'Rechazar o cancelar un PR.',
      solution: `# En GitHub web:
# 1. Abre el PR
# 2. Scroll down hasta el botón "Close pull request"
# 3. Click en el botón
# 4. Opcionalmente deja comentario explicando por qué

# La rama aún existe, solo se cierra el PR`
    }
  ];

  return (
    <>
      <LessonLayout
      title="Pull Requests y Colaboración"
      description="Trabaja en equipo usando Pull Requests en GitHub"
      breadcrumbs={breadcrumbs}
    >
      <TheorySection title="¿Qué es un Pull Request?">
        <p>
          Un Pull Request (PR) es una solicitud para integrar cambios de una rama en otra.
          Es el mecanismo principal para colaborar en GitHub/GitLab y es fundamental
          en el flujo de desarrollo moderno.
        </p>
        <p>
          En lugar de mergear directamente, el autor del código solicita que otros
          revisen sus cambios antes de integrarlos. Esto asegura calidad y permite
          que el equipo comparta conocimiento.
        </p>
        <p>
          El flujo típico:
        </p>
        <ol>
          <li>Creas una rama para tu funcionalidad</li>
          <li>Haces commits y push a esa rama</li>
          <li>Abres un PR en GitHub solicitando mergear a main</li>
          <li>Otros revisores ven tus cambios y hacen comentarios</li>
          <li>Haces cambios solicitados (más commits en la misma rama)</li>
          <li>Una vez aprobado, merges el PR a main</li>
          <li>La rama se puede eliminar después</li>
        </ol>
      </TheorySection>

      <TheorySection title="¿PR vs Merge directo?">
        <h4>Merge directo (sin PR)</h4>
        <CodeBlock
          language="bash"
          code={`git switch main
git merge feature/login
git push origin main

# Problemas:
# - Nadie revisa tu código
# - Código de baja calidad puede llegar a production
# - Difícil colaboración`}
        />

        <h4>Con Pull Request</h4>
        <CodeBlock
          language="bash"
          code={`git push origin feature/login
# En GitHub: Abrir PR

# Ventajas:
# - Revisión de código
# - Discusión de cambios
# - Historial de decisiones
# - Mejor control de calidad`}
        />
      </TheorySection>

      <TheorySection title="Crear un Pull Request">
        <p>
          Primero, haz push de tu rama:
        </p>
        <CodeBlock
          language="bash"
          code={`git push -u origin feature/login`}
        />

        <p>
          Luego en GitHub:
        </p>
        <ol>
          <li>Ve a tu repositorio en GitHub</li>
          <li>GitHub mostrará automáticamente "Compare &amp; pull request"</li>
          <li>O ve a "Pull requests" y click en "New pull request"</li>
          <li>Selecciona rama base (main) y rama a comparar (feature/login)</li>
          <li>Rellena un título descriptivo y descripción detallada</li>
          <li>Click "Create pull request"</li>
        </ol>

        <h4>Buena descripción de PR</h4>
        <p>
          Una descripción clara ayuda a los revisores a entender qué hace el PR:
        </p>
        <CodeBlock
          language="bash"
          code={`## Descripción
Agrega sistema de autenticación con JWT

## Cambios
- Nuevo endpoint POST /auth/login
- Nuevo endpoint POST /auth/register
- Middleware de validación de tokens

## Tipo de cambio
- [x] New feature
- [ ] Bug fix
- [ ] Breaking change

## Testing
- [x] Tests unitarios pasando
- [x] Tests de integración pasando

## Checklist
- [x] Código revisado por mí mismo
- [x] Sin código duplicado
- [x] Comentarios añadidos donde es necesario`}
        />
      </TheorySection>

      <TheorySection title="Revisar un Pull Request">
        <p>
          Como revisor, tu rol es asegurar que el código sea de calidad y que siga
          los estándares del proyecto.
        </p>

        <h4>Tabs en un PR de GitHub</h4>
        <ul>
          <li><strong>Conversation</strong> - Discusión del PR, comentarios generales</li>
          <li><strong>Commits</strong> - Lista de commits incluidos</li>
          <li><strong>Files changed</strong> - Diff de los cambios, lugar para comentarios</li>
          <li><strong>Checks</strong> - Resultados de CI/CD (tests, linting, etc)</li>
        </ul>

        <h4>Qué revisar</h4>
        <ul>
          <li>¿El código es legible y fácil de entender?</li>
          <li>¿Sigue los estándares del proyecto?</li>
          <li>¿Hay bugs o errores lógicos?</li>
          <li>¿Se hacen pruebas unitarias suficientes?</li>
          <li>¿Se documentó adecuadamente?</li>
          <li>¿Hay cambios no intencionados?</li>
        </ul>

        <h4>Tipos de comentarios</h4>
        <CodeBlock
          language="bash"
          code={`# En GitHub, al comentar en una línea puedes:
# 1. Dejar simple comentario (no afecta aprobación)
# 2. Solicitar cambio específico
# 3. Sugerir cambio (el autor puede aceptar directamente)

# Luego haces el review:
# - Approve: Apruebas el PR
# - Request changes: Pides cambios antes de mergear
# - Comment: Solo dejas comentarios informativos`}
        />
      </TheorySection>

      <TheorySection title="Actualizar un PR">
        <p>
          Si los revisores solicitan cambios, simplemente haz nuevos commits
          en la misma rama y haz push. El PR se actualiza automáticamente.
        </p>
        <CodeBlock
          language="bash"
          code={`# En tu rama local
git add .
git commit -m "fix: cambios solicitados en review"

# Push a la misma rama
git push origin feature/login

# El PR se actualiza automáticamente
# Los revisores recibirán notificación de cambios nuevos
# No necesitas crear un PR nuevo`}
        />

        <h4>Resolviendo comentarios</h4>
        <p>
          En GitHub, después de resolver un comentario, puedes marcar
          la conversación como resuelta.
        </p>
      </TheorySection>

      <TheorySection title="Mergear un PR">
        <p>
          Una vez que el PR está aprobado y todas las comprobaciones pasan,
          puedes mergearlo.
        </p>

        <h4>Mergear desde GitHub (recomendado)</h4>
        <CodeBlock
          language="bash"
          code={`# En la página del PR:
# 1. Click en "Merge pull request" (si está disponible)
# 2. Selecciona tipo de merge (crear dropdown para ver opciones)
# 3. Confirma con "Confirm merge"
# 4. Opcionalmente elimina la rama`}
        />

        <h4>Mergear desde terminal</h4>
        <CodeBlock
          language="bash"
          code={`git switch main
git pull origin main
git merge feature/login
git push origin main

# O más simple si no hay cambios locales
git pull origin main:feature/login`}
        />

        <h4>Tipos de merge en GitHub</h4>
        <ul>
          <li><strong>Create a merge commit</strong> - Crea commit de merge explícito</li>
          <li><strong>Squash and merge</strong> - Combina todos commits en uno</li>
          <li><strong>Rebase and merge</strong> - Rebasa rama sobre main</li>
        </ul>
      </TheorySection>

      <TheorySection title="Flujo de Trabajo Completo">
        <CodeBlock
          language="bash"
          code={`# 1. Crear rama de feature
git switch -c feature/dashboard

# 2. Hacer cambios y commits
git add .
git commit -m "feat: agregar dashboard"

# 3. Push al remoto
git push -u origin feature/dashboard

# 4. En GitHub: Abrir Pull Request

# 5. Revisores hacen comentarios

# 6. Si hay cambios solicitados
git add .
git commit -m "fix: cambios solicitados"
git push origin feature/dashboard

# 7. Aprobación

# 8. Mergear PR (desde GitHub o terminal)

# 9. (Opcional) Eliminar rama local
git branch -d feature/dashboard

# 10. (Opcional) Eliminar rama remota
git push origin --delete feature/dashboard`}
        />
      </TheorySection>

      <TheorySection title="Mejores Prácticas para PRs">
        <h4>1. Mantén PRs pequeños y enfocados</h4>
        <p>
          Un PR debe representar una única funcionalidad o fix.
          PRs grandes son difíciles de revisar y tiene más bugs.
        </p>

        <h4>2. Escribe buenas descripciones</h4>
        <p>
          Explica QUÉ y POR QUÉ, no solo CÓMO. El código habla del CÓMO.
        </p>

        <h4>3. Actualiza con main regularmente</h4>
        <p>
          Si trabajas en una rama por mucho tiempo, regularmente actualízala:
        </p>
        <CodeBlock
          language="bash"
          code={`git fetch origin
git rebase origin/main
git push --force-with-lease origin feature/login`}
        />

        <h4>4. Asegúrate de que tests pasen</h4>
        <p>
          Antes de abrir PR, verifica que tus tests locales pasen.
          CI/CD pasará tests automáticamente en el PR.
        </p>

        <h4>5. Sé respetuoso en reviews</h4>
        <p>
          Al revisar el código de otros:
        </p>
        <ul>
          <li>Sé constructivo, no crítico</li>
          <li>Explica el por qué de tus sugerencias</li>
          <li>Aprecia buen código</li>
          <li>Usa sugerencias cuando es apropiado</li>
        </ul>

        <h4>6. Responde a comentarios</h4>
        <p>
          Explica tu razonamiento o implementa cambios.
          No dejes comentarios sin respuesta.
        </p>
      </TheorySection>

      <TheorySection title="Errores Comunes en PRs">
        <h4>Error: "Merge conflict" en PR</h4>
        <p>
          Tu rama tiene conflictos con main. En GitHub, usualmente dice
          "This branch has conflicts that must be resolved".
        </p>
        <CodeBlock
          language="bash"
          code={`git fetch origin
git rebase origin/main
# Resuelve conflictos
git push --force-with-lease origin feature/login`}
        />

        <h4>Error: PR no actualiza después de push</h4>
        <p>
          Espera unos segundos. GitHub no actualiza instantáneamente.
          O recarga la página.
        </p>

        <h4>Cambios no intencionados en el PR</h4>
        <p>
          A veces ves archivos que no modificaste. Puede ser porque:
        </p>
        <ul>
          <li>Los cambios vinieron de main (rebase o merge)</li>
          <li>Alguien empujó a tu rama</li>
          <li>El IDE cambió line endings o espacios</li>
        </ul>

        <h4>Mergear accidentalmente a rama equivocada</h4>
        <p>
          Siempre verifica rama base antes de crear PR.
          En GitHub, muestra claramente qué ramas se están comparando.
        </p>
      </TheorySection>

      <ExerciseSection title="Práctica: Pull Requests" exercises={exercises} />
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
