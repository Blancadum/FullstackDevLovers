import { LessonTemplate, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoDatabase() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [{ icon: '🗄️', title: 'Base de Datos', definition: 'Diseño e implementación de schema relacional', example: 'Tablas, relaciones, índices, migraciones' }];
  const sections = [{ title: 'Intro', content: (<><p>Diseño y gestión de base de datos para el proyecto.</p></>) }];

      return (
    <>
      <LessonTemplate
        title="Base de Datos"
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