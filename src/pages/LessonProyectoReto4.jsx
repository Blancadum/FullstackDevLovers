import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

const sections = [
  {
    title: '1. Componentes del Equipo (2 puntos)',
    content: (
      <>
        <p>
          Define los miembros del equipo que desarrollará el proyecto.
          Se requiere mínimo 2-3 personas con roles complementarios.
        </p>

        <h4>Criterios de selección:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Proximidad geográfica:</strong> Facilita reuniones presenciales opcionales</li>
          <li><strong>Horarios comunes:</strong> Coincidencia de franjas laborales</li>
          <li><strong>Especialidades complementarias:</strong> No duplicar conocimientos</li>
          <li><strong>Relación previa:</strong> Confianza y comunicación fluida</li>
          <li><strong>Compromiso:</strong> Todos asumen responsabilidad conjunta</li>
        </ul>

        <h4>Roles recomendados:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Product Owner / Full-stack Developer</li>
          <li>Backend Developer / DevOps</li>
          <li>Frontend Developer / UI/UX Designer</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Diversidad de roles es obligatoria. El equipo debe cubrir Frontend + Backend + DevOps mínimo.
        </p>
      </>
    )
  },

  {
    title: '2. Medios de Comunicación (1 punto)',
    content: (
      <>
        <p>
          Define qué herramientas usarás para comunicación del equipo.
          El profesor DEBE poder seguir el proceso de toma de decisiones.
        </p>

        <h4>Stack de herramientas obligatorias:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Google Meet / Zoom:</strong> Reuniones sincrónicas diarias (grabadas)</li>
          <li><strong>Slack / Discord:</strong> Comunicación rápida asincrónica</li>
          <li><strong>GitHub:</strong> Code review + issues + discussions</li>
          <li><strong>Google Drive / Notion:</strong> Documentación compartida</li>
        </ul>

        <h4>Acuerdo de comunicación:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Visible profesor: Reuniones grabadas, Slack público, GitHub issues públicas</li>
          <li>Decisiones documentadas: Cada decisión registrada en GitHub o Notion</li>
          <li>Meeting minutes: Resumen escrito después cada reunión importante</li>
          <li>Escalación transparente: Conflictos discutidos en reunión grupal</li>
        </ul>

        <h4>ADVERTENCIA:</h4>
        <p>
          Comunicación solo WhatsApp sin documentar = 0 puntos en esta sección.
        </p>
      </>
    )
  },

  {
    title: '3. Frecuencia de Comunicación (1 punto)',
    content: (
      <>
        <p>
          Define cuándo se reúne el equipo: frecuencia, duración, tipos de reuniones.
        </p>

        <h4>Reuniones típicas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Daily Standup:</strong> 15-20 min diarios - qué hice, qué haré, bloques</li>
          <li><strong>Pair Programming:</strong> 1-2h según necesidad - problemas complejos</li>
          <li><strong>Sprint Planning:</strong> 1h semanal/bi-semanal - tareas de la semana</li>
          <li><strong>Sprint Review:</strong> 1h semanal/bi-semanal - demo features + feedback</li>
          <li><strong>Retrospective:</strong> 45 min semanal/bi-semanal - qué mejorar en proceso</li>
        </ul>

        <h4>Comunicación asincrónica:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Sincrónica: diaria 15-30 min (scrum rápido)</li>
          <li>Asincrónica: Slack respuesta en máximo 2h</li>
          <li>Semanal: revisión progreso + bloqueos</li>
        </ul>

        <h4>Horarios de trabajo:</h4>
        <p>
          Define claramente sincrónico vs. asincrónico. Todos deben saber cuándo hay reunión obligatoria.
        </p>
      </>
    )
  },

  {
    title: '4. Gestión de Incidentes (1 punto)',
    content: (
      <>
        <p>
          Define qué pasa cuando hay problemas: falta de miembro, bloques técnicos, desacuerdos.
        </p>

        <h4>Protocolo de escalación:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Nivel 1 (Dev):</strong> Decisión técnica entre 2 devs → código review</li>
          <li><strong>Nivel 2 (Lead):</strong> Blocker técnico → reunión urgente + tech lead decisión</li>
          <li><strong>Nivel 3 (PO):</strong> Cambio scope o conflicto no-técnico → PO final call</li>
          <li><strong>Nivel 4 (Profesor):</strong> Desacuerdo irreconciliable → mediación profesor</li>
        </ul>

        <h4>Casos específicos:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Si alguien falta 1 día: Tareas reassignadas, daily sin esa persona</li>
          <li>Si alguien falta 3+ días: Replan sprint, consideración expulsión equipo</li>
          <li>Desacuerdo técnico: Pro/con documentados, voto equipo, PO desempate</li>
          <li>Bug crítico en producción: Parada sprint, todos disponibles fix</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Tener un plan es mejor que improvisar. Define hoy para no discutir en crisis.
        </p>
      </>
    )
  },

  {
    title: '5. Otros Aspectos Organizacionales (1 punto)',
    content: (
      <>
        <p>
          Cubre procesos: toma de decisiones, versionado documentación, expectativas de teamwork.
        </p>

        <h4>Documentación compartida:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Specs + Requisitos:</strong> Google Docs/Notion - Actualización semanal</li>
          <li><strong>Arquitectura:</strong> Draw.io/Lucidchart - Cada sprint</li>
          <li><strong>API Documentation:</strong> Postman/Swagger - Continua</li>
          <li><strong>Decision Log:</strong> GitHub Discussions - Por decisión</li>
        </ul>

        <h4>Expectativas de teamwork:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Todos entienden la arquitectura completa (no silos)</li>
          <li>Code review obligatorio antes de merge (2+ aprobaciones)</li>
          <li>Pair programming semanal para cross-training</li>
          <li>Documentación en código (comments + docstrings)</li>
          <li>Testing: mínimo coverage requerido (ej. 70%)</li>
          <li>Responsabilidad compartida: nos fracasamos o ganamos juntos</li>
        </ul>

        <h4>Filosofía del equipo:</h4>
        <p>
          Escribe tu filosofía en términos que reflejen valores del equipo.
          Esto es lo que el equipo recuerda en tiempos difíciles.
        </p>
      </>
    )
  },

  {
    title: '6. Perfiles Profesionales (2 puntos)',
    content: (
      <>
        <p>
          Detalla el perfil de cada miembro: rol, responsabilidades, horas, especialidades.
        </p>

        <h4>Información requerida por miembro:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Nombre y apellido</li>
          <li>Rol específico (PO, Tech Lead, Frontend Dev, Backend Dev, QA, DevOps)</li>
          <li>Horas de trabajo por semana</li>
          <li>Responsabilidades y especialidades</li>
          <li>Experiencia previa relevante</li>
        </ul>

        <h4>Distribución de tareas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Especialista: Cada uno es expert en su área</li>
          <li>Cross-training: Todos deben entender otras especialidades</li>
          <li>Backup: Si alguien falta, otro puede continuar</li>
          <li>Objetivo: Todos full-stack al final del proyecto</li>
        </ul>

        <h4>IMPORTANTE:</h4>
        <p>
          Especifica horas reales (40h/semana total mínimo). Si sumas menos, proyecto insuficiente.
          Si sumas más de 60h/semana, redimensiona scope.
        </p>
      </>
    )
  },

  {
    title: '7. Proyecto Elegido (2 puntos)',
    content: (
      <>
        <p>
          Entre los proyectos individuales del equipo (REPTE 1), ¿cuál desarrollarán en grupo?
          Justifica la decisión.
        </p>

        <h4>Argumentación de selección:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Viabilidad técnica: Equipo tiene skills para ejecutarlo</li>
          <li>Complejidad equilibrada: Ni muy fácil ni imposible</li>
          <li>Oportunidad de aprendizaje: Todos aprenderán algo nuevo</li>
          <li>Mercado potencial: Proyecto con demanda real (no ficción)</li>
          <li>Alineación: Cada miembro ve su área representada</li>
          <li>Consenso: Votación unánime o mayoría clara + mediación</li>
        </ul>

        <h4>Alternativas consideradas:</h4>
        <p>
          Documenta otros proyectos considerados y por qué los rechazaste.
          Muestra análisis crítico de decisión.
        </p>

        <h4>Compromiso final:</h4>
        <p>
          Escribe declaración de compromiso grupal:
          "Todos nos comprometemos a ejecutar [Proyecto] con rigor, aprender el stack completo,
          comunicar cambios al profesor, y responsabilizarnos conjuntamente del resultado."
        </p>
      </>
    )
  }
];

export function LessonProyectoReto4() {
  return (
    <LessonProyectoRetoGeneric
      retoNumber={4}
      title="REPTE 4: Organización del Equipo"
      sections={sections}
    />
  );
}
