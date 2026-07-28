import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubPullRequests() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Pull Requests: crear y gestionar"
        description="Crea y gestiona Pull Requests para colaborar en proyectos de GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Pull Requests en GitHub: crear y gestionar - Fullstack Dev Lovers"
        seoDescription="Aprende a crear, revisar y gestionar Pull Requests en GitHub para colaborar de forma profesional en equipo."
        seoKeywords="github, pull request, code review, colaboración"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Pull Requests: crear y gestionar" */}
        <p>Próximamente: contenido sobre cómo crear y gestionar Pull Requests en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
