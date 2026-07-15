import { ProyectoIntegradorLayout } from '../components/ProyectoIntegradorLayout';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LessonProyectoEjemplos() {
  const breadcrumbs = useBreadcrumb();
  return <ProyectoIntegradorLayout breadcrumbs={breadcrumbs} />;
}
