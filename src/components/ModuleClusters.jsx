import { ClusterCards } from './ClusterCards';
import { getModule } from '../config/modulesConfig';

export function ModuleClusters({ moduleId }) {
  const module = getModule(moduleId);

  console.log('ModuleClusters - moduleId:', moduleId);
  console.log('ModuleClusters - module encontrado:', module);
  console.log('ModuleClusters - tiene secciones:', module?.sections?.length);

  if (!module || !module.sections || module.sections.length === 0) {
    console.log('ModuleClusters - retornando null porque no hay módulo o secciones');
    return null;
  }

  // Convertir secciones a cards para ClusterCards
  const sectionCards = module.sections.map((section) => ({
    id: section.id,
    title: section.fullName || section.name,
    icon: '📚', // Icono por defecto para secciones
    color: '#0066cc',
    link: `${module.landingPage}/${section.id}`
  }));

  console.log('ModuleClusters - cards generadas:', sectionCards);

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
