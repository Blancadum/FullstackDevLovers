import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubFlow() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="GitHub Flow: flujo de trabajo profesional"
        description="Domina GitHub Flow, el flujo de trabajo profesional basado en ramas y Pull Requests"
        breadcrumbs={breadcrumbs}
        seoTitle="GitHub Flow: flujo de trabajo profesional - Fullstack Dev Lovers"
        seoDescription="Conoce GitHub Flow, el flujo de trabajo ligero basado en ramas y Pull Requests usado por equipos profesionales."
        seoKeywords="github flow, flujo de trabajo, branching, pull requests"
      >
        <h2>Juntando todas las piezas</h2>
        <p>
          Ya conoces por separado ramas, push/pull, Pull Requests e Issues. <strong>GitHub Flow</strong>
          es simplemente la manera ordenada de encadenar todo eso en un único flujo de trabajo repetible,
          el que usan la mayoría de equipos que trabajan con GitHub en el día a día.
        </p>

        <InfoBox type="info" title="GitHub Flow no es lo mismo que Git Flow">
          {/* TODO-verificar: "Git Flow" (con ramas develop, release, hotfix...) es un modelo distinto y más complejo, popularizado por Vincent Driessen; confirma la fuente si necesitas citarlo con precisión */}
          Existe otro modelo llamado "Git Flow", más elaborado, con ramas <code>develop</code>,
          <code>release</code> y <code>hotfix</code>. GitHub Flow es deliberadamente más simple: pensado
          para equipos que despliegan con frecuencia y solo necesitan una rama principal siempre estable.
        </InfoBox>

        <h2>Los pasos de GitHub Flow</h2>
        <ol>
          <li><strong>Parte de una rama.</strong> Crea una rama descriptiva desde <code>main</code> para tu cambio.</li>
          <li><strong>Haz commits.</strong> Trabaja y confirma tus cambios en esa rama con mensajes claros.</li>
          <li><strong>Abre el Pull Request pronto.</strong> No esperes a terminar del todo; abrirlo temprano permite recibir feedback antes.</li>
          <li><strong>Discute y revisa.</strong> El equipo comenta, pide cambios o aprueba.</li>
          <li><strong>Despliega para comprobar (si aplica).</strong> Algunos equipos despliegan la rama en un entorno de prueba antes de fusionar.</li>
          <li><strong>Fusiona.</strong> Una vez aprobado y con los checks en verde, se fusiona en <code>main</code>.</li>
        </ol>

        <h2>El ciclo completo en comandos</h2>
        <CodeBlock
          language="bash"
          code={`# 1. Parte siempre de un main actualizado
git switch main
git pull

# 2. Crea una rama descriptiva para tu cambio
git switch -c feature/validacion-email

# 3. Trabaja y haz commits pequeños y claros
git add .
git commit -m "feat: validar formato de email en el registro"

# 4. Sube la rama y abre el Pull Request
git push -u origin feature/validacion-email
gh pr create --fill

# 5. Tras la revisión y aprobación, se fusiona desde GitHub

# 6. Actualiza tu main local y limpia la rama ya fusionada
git switch main
git pull
git branch -d feature/validacion-email`}
        />

        <h2>La regla de oro: main siempre desplegable</h2>
        <p>
          La idea central de GitHub Flow es que <code>main</code> debe estar siempre en un estado
          funcional, listo para desplegarse en cualquier momento. Por eso:
        </p>
        <ul>
          <li>Nadie hace push directo a <code>main</code>; todo pasa por Pull Request.</li>
          <li>Las ramas de feature deben ser cortas: cuanto más tiempo viven, más se desincronizan de <code>main</code> y más conflictos generan.</li>
          <li>Los checks automáticos (tests, linters) deben pasar antes de fusionar.</li>
        </ul>

        <h2>Nombrar ramas de forma consistente</h2>
        <p>
          Aunque GitHub Flow no impone una convención estricta, muchos equipos usan prefijos para que
          se entienda de un vistazo qué tipo de cambio contiene cada rama:
        </p>
        <CodeBlock
          language="bash"
          code={`feature/agregar-carrito-compra
fix/error-calculo-total
docs/actualizar-readme
refactor/simplificar-servicio-usuarios`}
        />

        <h2>Resumen</h2>
        <ul>
          <li>GitHub Flow encadena rama → commits → Pull Request → revisión → fusión, con <code>main</code> siempre desplegable.</li>
          <li>Es un modelo ligero, pensado para despliegues frecuentes, más simple que Git Flow.</li>
          <li>Abrir el Pull Request temprano facilita recibir feedback antes de terminar el trabajo.</li>
          <li>Ramas cortas y descriptivas reducen conflictos y facilitan la revisión.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
