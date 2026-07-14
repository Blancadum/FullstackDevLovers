import { useLocation } from 'react-router-dom';
import { getMetadataForLesson } from '../config/lessonMetadata';

/**
 * Hook personalizado para manejar SEO de lecciones
 * Automáticamente carga metadatos basados en la ruta actual
 */
export function useLessonSEO() {
  const location = useLocation();
  const metadata = getMetadataForLesson(location.pathname);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    url: `https://javabackendlearning.com${location.pathname}`,
    breadcrumb: metadata.breadcrumb
  };
}
