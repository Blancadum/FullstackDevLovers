import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

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
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "GitHub Flow: flujo de trabajo profesional" */}
        <p>Próximamente: contenido sobre GitHub Flow y el flujo de trabajo profesional.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
