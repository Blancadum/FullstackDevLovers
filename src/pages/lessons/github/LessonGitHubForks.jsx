import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

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
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Forks y contribuciones" */}
        <p>Próximamente: contenido sobre forks y contribuciones en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
