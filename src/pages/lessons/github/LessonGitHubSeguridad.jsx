import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubSeguridad() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Seguridad y tokens personales"
        description="Gestiona la seguridad de tu cuenta y tokens de acceso personal en GitHub"
        breadcrumbs={breadcrumbs}
        seoTitle="Seguridad y tokens personales en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a proteger tu cuenta de GitHub con verificación en dos pasos y a gestionar tokens de acceso personal (PAT) de forma segura."
        seoKeywords="github, seguridad, tokens de acceso personal, 2fa"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Seguridad y tokens personales" */}
        <p>Próximamente: contenido sobre seguridad y tokens de acceso personal en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
