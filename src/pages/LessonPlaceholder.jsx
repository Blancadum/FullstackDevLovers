import { LessonTemplate, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

// Configuración de contenido por ruta
const LESSON_CONTENT = {
  '/metodologias/agile-scrum/scrum': {
    title: 'SCRUM Framework',
    description: 'Implementación concreta de Agile',
    previousLink: '/metodologias/agile-scrum/introduccion',
    previousTitle: 'Introducción a Agile',
    nextLink: '/metodologias/agile-scrum/sprints',
    nextTitle: 'Sprints y Planning',
    concepts: [
      {
        icon: '🎯',
        title: 'Product Owner',
        definition: 'Responsable del qué (requisitos, prioridades)',
        example: 'Define qué funcionalidades entrar en cada sprint'
      },
      {
        icon: '👥',
        title: 'Scrum Master',
        definition: 'Facilitador que remueve impedimentos',
        example: 'Asegura que el equipo tenga todo lo necesario para trabajar'
      }
    ],
    sections: [
      {
        title: 'Roles en SCRUM',
        content: (
          <>
            <h3>¿Quiénes forman el equipo SCRUM?</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li><strong>Product Owner:</strong> Prioriza funcionalidades, define requisitos</li>
              <li><strong>Scrum Master:</strong> Facilita el proceso, remueve obstáculos</li>
              <li><strong>Development Team:</strong> Implementa las funcionalidades (3-9 personas)</li>
            </ul>
          </>
        )
      },
      {
        title: 'Artefactos SCRUM',
        content: (
          <>
            <h3>Documentos principales</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li><strong>Product Backlog:</strong> Lista de todas las funcionalidades pendientes</li>
              <li><strong>Sprint Backlog:</strong> Funcionalidades a completar en este sprint</li>
              <li><strong>Increment:</strong> Producto funcionando al final del sprint</li>
            </ul>
            <InfoBox type="info">
              <strong>Importante:</strong> El increment debe estar 100% completado (Definition of Done).
            </InfoBox>
          </>
        )
      }
    ]
  },
  '/metodologias/agile-scrum/sprints': {
    title: 'Sprints y Planning',
    description: 'Cómo planificar y ejecutar un sprint',
    previousLink: '/metodologias/agile-scrum/scrum',
    previousTitle: 'SCRUM Framework',
    nextLink: '/metodologias/clean-code/nombres',
    nextTitle: 'Nombres Significativos',
    concepts: [
      {
        icon: '📅',
        title: 'Sprint Planning',
        definition: 'Reunión donde se planifica el sprint',
        example: '2 horas para sprint de 2 semanas'
      }
    ],
    sections: [
      {
        title: 'Planificación del Sprint',
        content: (
          <>
            <h3>Sprint Planning</h3>
            <p>Duración: 1-2 horas para sprint de 2 semanas</p>
            <p>Participantes: Todo el equipo SCRUM</p>
            <p>
              El equipo selecciona historias del Product Backlog y estima esfuerzo.
              Se establece el objetivo del sprint (Sprint Goal).
            </p>
          </>
        )
      }
    ]
  },
  '/metodologias/clean-code/nombres': {
    title: 'Nombres Significativos',
    description: 'Importancia de elegir buenos nombres',
    previousLink: '/metodologias/agile-scrum/sprints',
    previousTitle: 'Sprints y Planning',
    nextLink: '/metodologias/clean-code/funciones',
    nextTitle: 'Funciones Limpias',
    concepts: [],
    sections: [
      {
        title: 'Nombres de Variables',
        content: (
          <>
            <h3>Principios</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li><strong>Significativo:</strong> Explica la intención</li>
              <li><strong>Pronunciable:</strong> Fácil de leer en voz alta</li>
              <li><strong>Evitar prefijos:</strong> No usar m_, _temp, etc</li>
              <li><strong>Evitar magia:</strong> No usar números mágicos sin sentido</li>
            </ul>
            <InfoBox type="info">
              <strong>Regla:</strong> Si necesitas comentario explicativo, el nombre es insuficiente.
            </InfoBox>
          </>
        )
      }
    ]
  },
  '/metodologias/clean-code/funciones': {
    title: 'Funciones Limpias',
    description: 'Cómo escribir funciones de calidad',
    previousLink: '/metodologias/clean-code/nombres',
    previousTitle: 'Nombres Significativos',
    nextLink: '/metodologias/clean-code/estructura',
    nextTitle: 'Estructura y Formato',
    concepts: [],
    sections: [
      {
        title: 'Principios de Funciones',
        content: (
          <>
            <h3>Características de Buenas Funciones</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li><strong>Pequeñas:</strong> Una sola responsabilidad</li>
              <li><strong>Un nivel de abstracción:</strong> Consistencia en nivel de detalle</li>
              <li><strong>Nombres descriptivos:</strong> Explica qué hace</li>
              <li><strong>Pocos argumentos:</strong> Máximo 3, mejor 0-2</li>
              <li><strong>Sin efectos secundarios:</strong> No modifique estado global</li>
            </ul>
          </>
        )
      }
    ]
  },
  '/metodologias/clean-code/estructura': {
    title: 'Estructura y Formato',
    description: 'Cómo organizar el código',
    previousLink: '/metodologias/clean-code/funciones',
    previousTitle: 'Funciones Limpias',
    nextLink: '/metodologias/clean-code/solid',
    nextTitle: 'SOLID y Refactorización',
    concepts: [],
    sections: [
      {
        title: 'Indentación y Espacios',
        content: (
          <>
            <h3>Buenas Prácticas</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li>Indentación consistente (2 o 4 espacios)</li>
              <li>Máximo 120 caracteres por línea</li>
              <li>Espacios en blanco para separar conceptos</li>
              <li>Imports organizados y sin duplicados</li>
              <li>Declaración de variables cerca del uso</li>
            </ul>
          </>
        )
      }
    ]
  },
  '/metodologias/testing/unitario': {
    title: 'Testing Unitario',
    description: 'Pruebas de funciones aisladas',
    previousLink: '/metodologias/clean-code/antipatrones',
    previousTitle: 'Antipatrones',
    nextLink: '/metodologias/testing/integracion',
    nextTitle: 'Testing de Integración',
    concepts: [],
    sections: [
      {
        title: 'Unit Testing',
        content: (
          <>
            <h3>¿Qué es un test unitario?</h3>
            <p>
              Prueba una única función/método de forma aislada.
              Verifica que se comporta correctamente para diferentes inputs.
            </p>
            <InfoBox type="info">
              <strong>Objetivo:</strong> 80%+ code coverage es el estándar profesional.
            </InfoBox>
          </>
        )
      }
    ]
  },
  '/metodologias/testing/integracion': {
    title: 'Testing de Integración',
    description: 'Pruebas de múltiples componentes juntos',
    previousLink: '/metodologias/testing/unitario',
    previousTitle: 'Testing Unitario',
    nextLink: '/metodologias/testing/aceptacion',
    nextTitle: 'Testing de Aceptación',
    concepts: [],
    sections: [
      {
        title: 'Integration Testing',
        content: (
          <>
            <h3>Testear la Interacción</h3>
            <p>
              Verifica que múltiples módulos funcionan juntos correctamente.
              Ejemplo: Base de datos + API + autenticación.
            </p>
          </>
        )
      }
    ]
  },
  '/metodologias/testing/aceptacion': {
    title: 'Testing de Aceptación',
    description: 'Pruebas desde la perspectiva del usuario',
    previousLink: '/metodologias/testing/integracion',
    previousTitle: 'Testing de Integración',
    nextLink: '/metodologias/devops/introduccion',
    nextTitle: 'Introducción a DevOps',
    concepts: [],
    sections: [
      {
        title: 'End-to-End Testing',
        content: (
          <>
            <h3>User Acceptance Testing</h3>
            <p>
              El usuario prueba la funcionalidad completa desde su perspectiva.
              Verifica que la solución cumple los requisitos del negocio.
            </p>
          </>
        )
      }
    ]
  },
  '/metodologias/devops/introduccion': {
    title: 'Introducción a DevOps',
    description: 'Cultura de automatización y colaboración',
    previousLink: '/metodologias/testing/aceptacion',
    previousTitle: 'Testing de Aceptación',
    nextLink: '/metodologias/devops/cicd',
    nextTitle: 'CI/CD Pipelines',
    concepts: [],
    sections: [
      {
        title: '¿Qué es DevOps?',
        content: (
          <>
            <h3>Definición</h3>
            <p>
              DevOps es una cultura que enfatiza la automatización, colaboración y
              responsabilidad compartida entre desarrolladores y operaciones.
            </p>
            <InfoBox type="info">
              <strong>Objetivo:</strong> Entregar software confiable y rápido.
            </InfoBox>
          </>
        )
      }
    ]
  },
  '/metodologias/devops/cicd': {
    title: 'CI/CD Pipelines',
    description: 'Integración y despliegue continuo',
    previousLink: '/metodologias/devops/introduccion',
    previousTitle: 'Introducción a DevOps',
    nextLink: '/metodologias/devops/monitoreo',
    nextTitle: 'Monitoreo y Logs',
    concepts: [],
    sections: [
      {
        title: 'Continuous Integration & Deployment',
        content: (
          <>
            <h3>Automatización del Despliegue</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li><strong>CI:</strong> Cada commit se testea automáticamente</li>
              <li><strong>CD:</strong> Tests pasados se despliegan automáticamente a producción</li>
              <li><strong>Beneficio:</strong> Despliegues múltiples al día sin riesgo</li>
            </ul>
          </>
        )
      }
    ]
  },
  '/metodologias/devops/monitoreo': {
    title: 'Monitoreo y Logs',
    description: 'Observabilidad en producción',
    previousLink: '/metodologias/devops/cicd',
    previousTitle: 'CI/CD Pipelines',
    nextLink: null,
    nextTitle: null,
    concepts: [],
    sections: [
      {
        title: 'Monitoring & Observability',
        content: (
          <>
            <h3>Mantener Control</h3>
            <p>
              Monitorear métricas (CPU, memoria, latencia) y logs para identificar
              problemas rápidamente en producción.
            </p>
          </>
        )
      }
    ]
  },
  '/contacto/general/email': {
    title: 'Email y Redes',
    description: 'Información de contacto',
    concepts: [],
    sections: [
      {
        title: 'Canales de Contacto',
        content: (
          <>
            <h3>Cómo Contactarnos</h3>
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li><strong>Email:</strong> info@javabackendlearning.com</li>
              <li><strong>Twitter:</strong> @javabackendlearn</li>
              <li><strong>GitHub:</strong> github.com/javabackendlearning</li>
              <li><strong>Discord:</strong> [Servidor de comunidad]</li>
            </ul>
            <InfoBox type="info">
              <strong>Respuesta:</strong> Generalmente responden en 24-48 horas.
            </InfoBox>
          </>
        )
      }
    ]
  },
  '/contacto/general/formulario': {
    title: 'Formulario de Contacto',
    description: 'Envía tu mensaje',
    concepts: [],
    sections: [
      {
        title: 'Formulario',
        content: (
          <>
            <h3>Envía tu Pregunta o Feedback</h3>
            <p>
              Completa el formulario con tus datos y tu mensaje.
              Te responderemos a la brevedad.
            </p>
            <InfoBox type="info">
              <strong>Nota:</strong> Asegúrate de incluir tu email para que podamos contactarte.
            </InfoBox>
          </>
        )
      }
    ]
  },
  '/contacto/general/faq': {
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a preguntas comunes',
    concepts: [],
    sections: [
      {
        title: 'FAQ',
        content: (
          <>
            <h3>Preguntas Comunes</h3>
            <p>
              Aquí encontrarás respuestas a las preguntas que hacen con frecuencia
              nuestros estudiantes y visitantes.
            </p>
          </>
        )
      }
    ]
  },
};

export function LessonPlaceholder() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const { pathname } = window.location;
  const lesson = LESSON_CONTENT[pathname] || {
    title: 'Lección',
    description: 'Contenido en construcción',
    concepts: [],
    sections: [
      {
        title: 'Contenido',
        content: <p>Esta lección está siendo desarrollada. Vuelve pronto.</p>
      }
    ]
  };

  const keyPoints = [
    'Contenido en desarrollo',
    'Próxima actualización'
  ];

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        LESSON_CONTENT={LESSON_CONTENT}
        keyPoints={keyPoints}
        lesson={lesson}
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