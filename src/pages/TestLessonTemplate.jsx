import { LessonTemplate } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function TestLessonTemplate() {
  const breadcrumbs = useBreadcrumb();

  const sections = [
    {
      title: 'Test Section',
      content: <p>Contenido de prueba</p>
    }
  ];

  const concepts = [
    {
      icon: '📚',
      title: 'Test Concept',
      definition: 'Una definición de prueba',
      example: 'Ejemplo simple'
    }
  ];

  return (
    <LessonTemplate
      title="Test Lesson Template"
      breadcrumbs={breadcrumbs}
      sections={sections}
      concepts={concepts}
      exercises={[]}
      keyPoints={['Punto 1', 'Punto 2']}
      summary="Resumen de prueba"
    />
  );
}
