import { useLocation } from 'react-router-dom';
import { lessonNavigationMap } from '../config/lessonNavigation';

/**
 * Hook custom para obtener navegación anterior/siguiente de una lección
 * Usa React Router's useLocation para obtener la ruta actual
 */
export function useLessonNavigation() {
  const location = useLocation();
  const pathname = location.pathname;

  const nav = lessonNavigationMap[pathname] || {
    previous: null,
    previousTitle: null,
    next: null,
    nextTitle: null,
  };

  return nav;
}
