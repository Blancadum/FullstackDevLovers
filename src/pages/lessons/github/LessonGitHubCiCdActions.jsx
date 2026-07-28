import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubCiCdActions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="GitHub Actions: automatización y CI/CD"
        description="Automatiza tests, builds y despliegues con GitHub Actions"
        breadcrumbs={breadcrumbs}
        seoTitle="GitHub Actions: automatización y CI/CD - Fullstack Dev Lovers"
        seoDescription="Aprende a crear workflows de GitHub Actions para automatizar CI/CD: tests, builds y despliegues."
        seoKeywords="github actions, ci/cd, automatización, workflows"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "GitHub Actions: automatización y CI/CD" */}
        <p>Próximamente: contenido sobre GitHub Actions, automatización y CI/CD.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
