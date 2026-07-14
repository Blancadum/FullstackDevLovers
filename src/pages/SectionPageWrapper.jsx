import { useParams, useLocation } from 'react-router-dom';
import { SectionPage } from './SectionPage';

export function SectionPageWrapper() {
  const { sectionId } = useParams();
  const location = useLocation();
  const moduleId = location.pathname.split('/')[1];

  return <SectionPage moduleId={moduleId} sectionId={sectionId} />;
}
