import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

const sections = [
  {
    title: '1. Agile vs. Traditional (2 puntos)',
    content: (
      <>
        <p>
          Compara Agile (SCRUM) con metodologías tradicionales (Waterfall, RUP).
          Entiende cuándo usar cada una.
        </p>

        <h4>Agile (SCRUM):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Estructura: Iterativa con ciclos cortos (sprints)</li>
          <li>Cambios: Bienvenidos en cualquier momento</li>
          <li>Documentación: Mínima, enfocada</li>
          <li>Testing: Continuo durante sprints</li>
          <li>Feedback: Frecuente del cliente</li>
          <li>Entrega: Incremental cada sprint</li>
        </ul>

        <h4>Traditional (Waterfall):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Estructura: Secuencial, fases lineales</li>
          <li>Cambios: Difíciles y costosos</li>
          <li>Documentación: Extensa y formal</li>
          <li>Testing: Al final del proyecto</li>
          <li>Feedback: Limitado a hitos</li>
          <li>Entrega: Todo al final</li>
        </ul>

        <h4>Recomendación para proyectos web:</h4>
        <p>
          USA AGILE porque es un proyecto web con requisitos dinámicos
          que evolucionarán durante desarrollo.
        </p>
      </>
    )
  },

  {
    title: '2. Herramientas de Project Management (2 puntos)',
    content: (
      <>
        <p>
          Investiga herramientas Agile disponibles y selecciona la mejor para tu proyecto.
        </p>

        <h4>Herramientas principales:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Jira:</strong> Enterprise, equipos grandes, proyectos complejos - Premium</li>
          <li><strong>Taiga:</strong> Open-source, startups, equipos pequeños - Gratuito</li>
          <li><strong>Trello:</strong> Kanban simple, proyectos pequeños - Freemium</li>
          <li><strong>Asana:</strong> Project management flexible, equipos distribuidos - Premium</li>
          <li><strong>ClickUp:</strong> All-in-one, automatización avanzada - Premium</li>
        </ul>

        <h4>Características requeridas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Gestión de Sprints (planning, tracking, review)</li>
          <li>User Stories y Epics</li>
          <li>Asignación de tareas a equipo</li>
          <li>Burndown charts (seguimiento progreso)</li>
          <li>Integración con GitHub</li>
          <li>Reportes y analytics</li>
        </ul>
      </>
    )
  },

  {
    title: '3. Definición de EPICs y User Stories (2 puntos)',
    content: (
      <>
        <p>
          Define los EPICs (grandes features) y User Stories (unidades de trabajo).
        </p>

        <h4>Concepto:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>EPIC:</strong> Gran feature que toma varios sprints (ej: "Sistema de Autenticación")</li>
          <li><strong>User Story:</strong> Pequeña unidad de trabajo completable en 1-2 días</li>
        </ul>

        <h4>Formato User Story (obligatorio):</h4>
        <p style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
          <strong>Como</strong> [rol del usuario],<br/>
          <strong>quiero</strong> [acción/funcionalidad],<br/>
          <strong>para que</strong> [beneficio/valor].
        </p>

        <h4>Criterios de Aceptación (también obligatorio):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Criterio 1 (específico, medible)</li>
          <li>Criterio 2 (comprobable)</li>
          <li>Criterio 3 (no ambiguo)</li>
        </ul>

        <h4>Estimación: Escala Fibonacci (1, 2, 3, 5, 8, 13)</h4>
        <p>
          Cada punto ≈ 4-8 horas de trabajo del equipo.
        </p>
      </>
    )
  },

  {
    title: '4. Planificación de Sprints (2 puntos)',
    content: (
      <>
        <p>
          Plan de los sprints de 2 semanas cada uno para tu proyecto.
        </p>

        <h4>Estructura de Sprints típica (3-4 sprints):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Sprint 1:</strong> MVP inicial - Setup + funcionalidades core</li>
          <li><strong>Sprint 2:</strong> Funcionalidades principales + integración</li>
          <li><strong>Sprint 3:</strong> Features secundarias + pulido</li>
          <li><strong>Sprint 4 (opcional):</strong> Performance + bugs finales</li>
        </ul>

        <h4>Eventos del Sprint:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Sprint Planning:</strong> Inicio sprint, 2h, todo equipo</li>
          <li><strong>Daily Standup:</strong> Cada mañana, 15min, dev team + SM</li>
          <li><strong>Sprint Review:</strong> Final sprint, 1h, todo + cliente</li>
          <li><strong>Sprint Retrospective:</strong> Final sprint, 1h, dev team + SM</li>
        </ul>

        <h4>Velocidad estimada:</h4>
        <p>
          Si sprint es 2 semanas con 3 devs de 40h = 240 horas disponibles ≈ 30-40 puntos recomendados.
        </p>
      </>
    )
  },

  {
    title: '5. Roles SCRUM (1 punto)',
    content: (
      <>
        <p>
          Define los 3 roles principales de SCRUM para tu equipo.
        </p>

        <h4>Product Owner (PO):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Gestiona Product Backlog (ordenado por prioridad)</li>
          <li>Define/clarifica User Stories</li>
          <li>Acepta o rechaza trabajo completado</li>
          <li>Interfaz con stakeholders/clientes</li>
          <li>Responsable del valor del producto</li>
        </ul>

        <h4>Scrum Master (SM):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>NO es manager del equipo</li>
          <li>Facilita ceremonies (planning, standups, etc)</li>
          <li>Elimina impedimentos/bloques</li>
          <li>Coach del equipo en Agile</li>
          <li>Protege al equipo de distracciones externas</li>
        </ul>

        <h4>Development Team:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Equipos pequeños (3-9 personas ideal)</li>
          <li>Auto-organización: deciden cómo trabajar</li>
          <li>Responsabilidad compartida de calidad</li>
          <li>Múltiples especialidades (frontend, backend, QA)</li>
          <li>Objetivo: entregar Increment productivo cada sprint</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Los roles NO son puestos de trabajo. Una persona puede tener múltiples roles
          (ej. PO podría ser también dev en equipo pequeño).
        </p>
      </>
    )
  }
];

export function LessonProyectoReto5() {
  return (
    <LessonProyectoRetoGeneric
      retoNumber={5}
      title="REPTE 5: Agile & SCRUM Planning"
      sections={sections}
    />
  );
}
