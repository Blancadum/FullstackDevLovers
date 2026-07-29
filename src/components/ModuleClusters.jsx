import { ClusterCards } from './ClusterCards';
import { getModule } from '../config/modulesConfig';

export function ModuleClusters({ moduleId }) {
  const module = getModule(moduleId);

  if (!module || !module.sections || module.sections.length === 0) {
    return null;
  }

  // Convertir secciones a cards para ClusterCards
  const sectionCards = module.sections.map((section) => ({
    id: section.id,
    title: section.fullName || section.name,
    icon: '📚', // Icono por defecto para secciones
    color: '#0066cc',
    link: `#${section.id}`
  }));

  return (
    <ClusterCards
      title={`Secciones de ${module.name}`}
      subtitle={`Explora los temas principales de ${module.name}`}
      cards={sectionCards}
      columns={3}
      variant="emoji"
    />
  );
}
