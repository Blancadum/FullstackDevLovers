import { ProyectoIntegradorLayout } from '../../../components/ProyectoIntegradorLayout';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonProyectoEjemplos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <ProyectoIntegradorLayout breadcrumbs={breadcrumbs} />
      <LessonNavigation previous={nav.previous} next={nav.next} />
    </>
  );
}
