import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubIssues() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Issues y Project Boards"
        description="Gestiona tareas y bugs con Issues y Project Boards en GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Issues y Project Boards en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a crear y organizar Issues, etiquetas y tableros de proyecto (Project Boards) en GitHub."
        seoKeywords="github, issues, project boards, gestión de tareas"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Issues y Project Boards" */}
        <p>Próximamente: contenido sobre Issues y Project Boards en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
