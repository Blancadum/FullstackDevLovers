import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoBackend() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [
    { icon: '🔧', title: 'Desarrollo Backend', definition: 'Implementación de lógica de negocio en servidor', example: 'Controllers, Services, Repositories en Spring Boot' },
  ];
  const sections = [
    { title: 'Introducción', content: (<><p>Desarrollo de componentes backend para APIs REST.</p></>) }
  ];

      return (
    <>
      <LessonTemplate
        title="Desarrollo Backend"
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