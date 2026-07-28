import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubCrearCuenta() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Crear una cuenta y configurar perfil"
        description="Cómo crear tu cuenta de GitHub y configurar un perfil profesional"
        breadcrumbs={breadcrumbs}
        seoTitle="Crear una cuenta y configurar tu perfil en GitHub - Fullstack Dev Lovers"
        seoDescription="Aprende a registrarte en GitHub, verificar tu cuenta y configurar un perfil profesional que destaque tu trabajo."
        seoKeywords="github, crear cuenta github, perfil github, registro github"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Crear una cuenta y configurar perfil" */}
        <p>Próximamente: contenido sobre cómo crear una cuenta y configurar tu perfil en GitHub.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
