import { useState } from 'react';
import './RequiredComponents.css';

export function RequiredComponents() {
  const [activeComponent, setActiveComponent] = useState(0);

  const components = [
    {
      id: 0,
      title: 'Backend (Java Spring Boot)',
      items: [
        'APIs REST con mínimo 10+ endpoints',
        'Base de datos relacional (mínimo 5 tablas)',
        'Autenticación y autorización por roles',
        'Validaciones y manejo de errores',
        'Tests unitarios e integración (80%+ coverage)'
      ]
    },
    {
      id: 1,
      title: 'Frontend (React)',
      items: [
        'Interfaz responsiva (desktop y móvil)',
        'Navegación intuitiva y clara',
        'Formularios con validaciones',
        'Consumo correcto de APIs REST',
        'Manejo de estado si es necesario'
      ]
    },
    {
      id: 2,
      title: 'Base de Datos',
      items: [
        'Diseño normalizado (diagramas ER)',
        'Relaciones bien definidas (1:N, N:N, etc)',
        'Índices en campos de búsqueda frecuente'
      ]
    },
    {
      id: 3,
      title: 'Documentación',
      items: [
        'README con instrucciones para setup',
        'Especificación de requisitos completa',
        'Diagrama de base de datos',
        'API documentation (Swagger/OpenAPI)'
      ]
    },
    {
      id: 4,
      title: 'Deployment',
      items: [
        'Proyecto deployado en internet (AWS, Heroku, etc)',
        'Accesible públicamente con URL funcional',
        'Base de datos en servidor remoto'
      ]
    }
  ];

  const currentComponent = components[activeComponent];

  return (
    <div className="required-components">
      <div className="comp-tabs">
        {components.map((component) => (
          <button
            key={component.id}
            className={`comp-tab ${activeComponent === component.id ? 'active' : ''}`}
            onClick={() => setActiveComponent(component.id)}
          >
            {component.title}
          </button>
        ))}
      </div>

      <div className="comp-content">
        <h3 className="comp-title">{currentComponent.title}</h3>

        <ul className="comp-items">
          {currentComponent.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
