import { useParams } from 'react-router-dom';
import { LessonTemplate } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';
import { ejemplosTFCData } from '../data/ejemplosTFCData';

export function LessonEjemplosTFC() {
  const { id } = useParams();
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const ejemplo = ejemplosTFCData.find(e => e.id === parseInt(id));

  if (!ejemplo) {
    return (
      <>
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2>Ejemplo no encontrado</h2>
          <p>El ejemplo que buscas no existe.</p>
        </div>
        <LessonNavigation
          previousLink={nav.previous}
          previousTitle={nav.previousTitle}
          nextLink={nav.next}
          nextTitle={nav.nextTitle}
        />
      </>
    );
  }

  return (
    <>
      <LessonTemplate
        title={ejemplo.title}
        breadcrumbs={breadcrumbs}
        sections={[
          {
            title: 'Descripción',
            content: ejemplo.description
          },
          {
            title: 'Características',
            content: (
              <ul>
                {ejemplo.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )
          },
          {
            title: 'Requisitos',
            content: (
              <ul>
                {ejemplo.requirements?.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            )
          }
        ]}
        concepts={[]}
        keyPoints={ejemplo.keyPoints || []}
        summary={ejemplo.summary || ejemplo.description}
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
