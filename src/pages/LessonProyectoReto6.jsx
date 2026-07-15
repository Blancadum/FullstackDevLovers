import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

const sections = [
  {
    title: '1. Planificación del Sprint (1 punto)',
    content: (
      <>
        <p>
          Planifica el sprint seleccionando user stories del product backlog.
        </p>

        <h4>Actividades de Sprint Planning:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Sprint Planning Meeting (2-4 horas)</li>
          <li>Seleccionar stories suficientes (basado en velocidad del equipo)</li>
          <li>Desglosar stories en tareas técnicas</li>
          <li>Asignar tareas a miembros del equipo</li>
          <li>Crear tablero Kanban (To Do, In Progress, Review, Done)</li>
        </ul>

        <h4>Objetivo realista:</h4>
        <p>
          Solo comprometer lo que el equipo puede entregar en este sprint.
          No sobrecargar el sprint = mejor calidad.
        </p>
      </>
    )
  },

  {
    title: '2. Backlog del Sprint (1 punto)',
    content: (
      <>
        <p>
          Crea y prioriza el backlog del sprint.
        </p>

        <h4>Qué incluir en cada User Story:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Descripción clara: "Como X, quiero Y, para Z"</li>
          <li>Criterios de Aceptación específicos y medibles</li>
          <li>Estimación en puntos (Fibonacci: 1, 2, 3, 5, 8, 13)</li>
          <li>Dependencias identificadas</li>
          <li>Prioridad clara</li>
        </ul>

        <h4>Checklist del Backlog:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Historias ordenadas por prioridad</li>
          <li>Cada historia tiene criterios de aceptación</li>
          <li>Estimación realista</li>
          <li>Dependencias claras</li>
          <li>Total de puntos = velocidad del equipo</li>
        </ul>
      </>
    )
  },

  {
    title: '3. Desarrollo de User Stories (2 puntos)',
    content: (
      <>
        <p>
          Implementa las user stories seleccionadas siguiendo proceso TDD.
        </p>

        <h4>Proceso de Desarrollo (ciclo):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>1. Crear rama feature:</strong> git checkout -b feature/story-name</li>
          <li><strong>2. Desarrollo TDD:</strong> Tests primero → Implementación → Refactorizar</li>
          <li><strong>3. Code Review:</strong> Pull request → Revisión por pares → Feedback</li>
          <li><strong>4. Merge a develop:</strong> Aprobar tras code review → Merge</li>
          <li><strong>5. Testing:</strong> Tests automatizados + Tests manuales + QA validation</li>
        </ul>

        <h4>Definición de "Done":</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Código escrito y testeado</li>
          <li>Code review aprobado (2+ personas)</li>
          <li>Tests pasan (unit + integration)</li>
          <li>Documentación actualizada</li>
          <li>Deployable a staging</li>
        </ul>
      </>
    )
  },

  {
    title: '4. Daily Standup (1 punto)',
    content: (
      <>
        <p>
          Coordinación diaria del equipo. Máximo 15 minutos.
        </p>

        <h4>Formato de cada persona (3 preguntas):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>¿Qué hice ayer?</li>
          <li>¿Qué haré hoy?</li>
          <li>¿Tengo bloqueadores?</li>
        </ul>

        <h4>Duración y reglas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>15 minutos máximo (time-boxed)</li>
          <li>Problemas complejos → reunión aparte DESPUÉS del standup</li>
          <li>Registro en Jira/Taiga del progreso</li>
          <li>Si hay bloqueadores → resolver en el día o escalar inmediatamente</li>
        </ul>
      </>
    )
  },

  {
    title: '5. Integración Continua (1 punto)',
    content: (
      <>
        <p>
          Automatiza builds, tests y despliegues con CI/CD pipeline.
        </p>

        <h4>Pipeline stages típico:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Build:</strong> Compilar código, descargar dependencias, validar sintaxis</li>
          <li><strong>Test Automatizados:</strong> Unit tests + Integration tests, coverage mínimo 70%</li>
          <li><strong>Análisis de Código:</strong> SonarQube/Checkstyle, deuda técnica, vulnerabilidades</li>
          <li><strong>Build Artefactos:</strong> Generar Jar/War, crear Docker image, push a registry</li>
          <li><strong>Deploy a Staging:</strong> Deploy automático, smoke tests, validación endpoints</li>
        </ul>

        <h4>Herramientas recomendadas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>GitHub Actions (recomendado, gratuito)</li>
          <li>GitLab CI</li>
          <li>Jenkins</li>
          <li>CircleCI</li>
        </ul>
      </>
    )
  },

  {
    title: '6. Sprint Review (1 punto)',
    content: (
      <>
        <p>
          Demuestra el trabajo realizado al cliente y stakeholders.
        </p>

        <h4>Actividades de Sprint Review:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Demostración de features completadas (DEMO funcional)</li>
          <li>Preguntas y feedback del cliente</li>
          <li>Priorización de próximos items del backlog</li>
          <li>Métricas del sprint (velocidad, burndown, issues)</li>
          <li>Documentación de decisiones</li>
        </ul>

        <h4>Asistentes:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Product Owner</li>
          <li>Equipo Desarrollo</li>
          <li>Stakeholders / Cliente</li>
          <li>Scrum Master (facilita)</li>
        </ul>

        <h4>Duración:</h4>
        <p>
          60-90 minutos (máximo 2 horas para equipo de 5-6 personas).
        </p>
      </>
    )
  }
];

export function LessonProyectoReto6() {
  const breadcrumbs = useBreadcrumb();
  return (
    <LessonProyectoRetoGeneric
      retoNumber={6}
      title="REPTE 6: Sprint 1 Development"
      sections={sections}
      breadcrumbs={breadcrumbs}
    />
  );
}
