import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoAPIs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [{ icon: '🌐', title: 'APIs REST', definition: 'Endpoints HTTP para comunicación frontend-backend', example: 'GET, POST, PUT, DELETE con JSON' }];
  const sections = [{ title: 'Intro', content: (<><p>Diseño e implementación de APIs REST.</p></>) }];

      return (
    <>
      <LessonTemplate
        title="APIs REST"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}