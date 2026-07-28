import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubCrearClonarRepos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Crear y clonar repositorios en GitHub"
        description="Crea repositorios nuevos en GitHub y clónalos a tu máquina local"
        breadcrumbs={breadcrumbs}
        seoTitle="Crear y clonar repositorios en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a crear repositorios en GitHub desde cero y a clonarlos localmente mediante HTTPS o SSH."
        seoKeywords="github, crear repositorio, clonar repositorio, git clone"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Crear y clonar repositorios en GitHub" */}
        <p>Próximamente: contenido sobre cómo crear y clonar repositorios en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
