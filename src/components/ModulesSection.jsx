import { ModuleExpandable } from './ModuleExpandable';
import { modulesWithLessons } from '../config/modulesConfig';

export function ModulesSection() {
  return (
    <section className="categories">
      <div className="container">
        <h2>Módulos de Aprendizaje</h2>

        <div className="modules-list">
          {modulesWithLessons.map((module) => (
            module.sections ? (
              <ModuleExpandable
                key={module.id}
                moduleId={module.id}
                title={module.name}
                description={module.description}
                icon={module.icon}
                sections={module.sections}
              />
            ) : null
          ))}
        </div>
      </div>
    </section>
  );
}
