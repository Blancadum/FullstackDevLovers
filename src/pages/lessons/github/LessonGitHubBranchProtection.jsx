import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

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
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Protección de ramas y políticas" */}
        <p>Próximamente: contenido sobre protección de ramas y políticas en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
