import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout } from '../../../components';

export function LessonGitHubIntro() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Qué es GitHub y por qué usarlo"
        description="Introducción a GitHub: qué es, para qué sirve y por qué es la plataforma líder para alojar repositorios Git"
        breadcrumbs={breadcrumbs}
        seoTitle="Qué es GitHub y por qué usarlo - Fullstack Dev Lovers"
        seoDescription="Descubre qué es GitHub, sus diferencias con Git y por qué es la plataforma de referencia para alojar código y colaborar en equipo."
        seoKeywords="github, qué es github, control de versiones, repositorios remotos"
      >
        {/* TODO(redactor-contenidos): escribir contenido didáctico de "Qué es GitHub y por qué usarlo" */}
        <p>Próximamente: contenido sobre qué es GitHub y por qué usarlo.</p>
      </LessonLayout>

      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
