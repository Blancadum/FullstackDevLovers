import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubPushPull() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Push, Pull y sincronización"
        description="Sincroniza tu repositorio local con GitHub usando push y pull"
        breadcrumbs={breadcrumbs}
        seoTitle="Push, Pull y sincronización con GitHub - Fullstack Dev Lovers"
        seoDescription="Domina git push y git pull para mantener sincronizados tu repositorio local y tu repositorio remoto en GitHub."
        seoKeywords="github, git push, git pull, sincronización, remoto"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Push, Pull y sincronización" */}
        <p>Próximamente: contenido sobre push, pull y sincronización con GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
