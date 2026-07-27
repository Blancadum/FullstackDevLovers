import { LessonLayout, LessonSection, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonSprintsPlanning() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Sprints y Planning"
        description="Cómo planificar, ejecutar y cerrar un Sprint dentro de un equipo SCRUM"
        breadcrumbs={breadcrumbs}
        seoTitle="Sprints y Sprint Planning en SCRUM"
        seoDescription="Cómo funcionan los Sprints en SCRUM: Sprint Planning, duración, objetivos y Sprint Backlog."
        seoKeywords="sprint, sprint planning, scrum, backlog, iteración"
        url="https://fullstackdevlovers.com/metodologias/agile-scrum/sprints"
      >
        <p>
          Ya sabes qué es SCRUM y quién hace qué. Ahora toca meterse en el corazón del framework: el{' '}
          <strong>Sprint</strong>. Es la unidad de trabajo que vas a vivir semana tras semana en tu equipo, así
          que entender bien cómo se planifica, se ejecuta y se cierra te va a ahorrar más de un malentendido en tus
          primeros meses de trabajo.
        </p>

        <LessonSection title="¿Qué es un Sprint?" level={2}>
          <p>
            Un Sprint es un <strong>periodo de tiempo fijo</strong> (normalmente entre una y cuatro semanas, siendo
            dos semanas lo más habitual en equipos de desarrollo web) durante el cual el equipo trabaja para
            conseguir un objetivo concreto: el <strong>Sprint Goal</strong>.
          </p>
          <p>
            Cada Sprint es como un mini-proyecto autocontenido: se planifica al principio, se desarrolla durante
            varios días y se cierra con una entrega revisable. Al terminar un Sprint, empieza el siguiente sin
            pausas entre medio.
          </p>
          <InfoBox type="info" title="Duración fija (timebox)">
            La duración de un Sprint no cambia una vez fijada por el equipo. Si algo no se termina, no se alarga el
            Sprint: se vuelve a priorizar en el Product Backlog para un Sprint futuro.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Sprint Planning: cómo se planifica" level={2}>
          <p>
            El Sprint Planning es la reunión donde el equipo decide <strong>qué</strong> va a construir en el
            Sprint y <strong>cómo</strong> lo va a hacer. Participan el Product Owner, el Scrum Master y el
            Development Team.
          </p>
          <p>La sesión suele dividirse en dos partes:</p>
          <ul>
            <li>
              <strong>Qué se hará:</strong> el Product Owner presenta los elementos del Product Backlog con más
              prioridad y el equipo decide cuáles puede asumir de forma realista.
            </li>
            <li>
              <strong>Cómo se hará:</strong> el Development Team descompone esos elementos en tareas técnicas
              concretas y estima el esfuerzo necesario.
            </li>
          </ul>
          <p>
            El resultado de esta reunión es el <strong>Sprint Backlog</strong>: la lista de elementos
            seleccionados junto con el plan para completarlos, y el Sprint Goal que le da sentido a todo el
            trabajo del Sprint.
          </p>
        </LessonSection>

        <LessonSection title="Estimación del trabajo" level={2}>
          <p>
            Antes de meter una tarea en un Sprint, el equipo necesita saber (aproximadamente) cuánto esfuerzo
            requiere. La mayoría de equipos ágiles no usan horas, sino unidades relativas.
          </p>
          <ul>
            <li>
              <strong>Story Points:</strong> valor relativo (a menudo con la secuencia de Fibonacci: 1, 2, 3, 5, 8,
              13...) que representa complejidad, esfuerzo e incertidumbre, no tiempo exacto.
            </li>
            <li>
              <strong>Planning Poker:</strong> técnica de estimación en grupo donde cada persona vota en privado y
              luego se discuten las diferencias, para evitar que la primera opinión condicione al resto.
            </li>
          </ul>
          <InfoBox type="tip">
            No te obsesiones con acertar la estimación exacta al principio. Lo importante es que el equipo sea{' '}
            <strong>consistente</strong> a lo largo del tiempo: eso permite predecir cuánto trabajo cabe en un
            Sprint (la llamada <em>velocity</em> del equipo).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Durante el Sprint: el Daily Scrum" level={2}>
          <p>
            Una vez arrancado el Sprint, el equipo se sincroniza cada día en el <strong>Daily Scrum</strong>{' '}
            (15 minutos, misma hora, mismo lugar). No es para reportar al Scrum Master: es para que el equipo se
            coordine entre sí y detecte bloqueos cuanto antes.
          </p>
          <p>Las tres preguntas clásicas (aunque cada equipo las adapta) son:</p>
          <ul>
            <li>¿Qué hice ayer que ayudó al Sprint Goal?</li>
            <li>¿Qué voy a hacer hoy para ayudar al Sprint Goal?</li>
            <li>¿Hay algún impedimento que me esté bloqueando?</li>
          </ul>
        </LessonSection>

        <LessonSection title="Cierre del Sprint: Review y Retrospective" level={2}>
          <p>
            El Sprint termina con dos eventos distintos que no deben confundirse:
          </p>
          <ul>
            <li>
              <strong>Sprint Review:</strong> se muestra el incremento de producto terminado a los stakeholders,
              se recoge feedback y se ajusta el Product Backlog si hace falta. El foco está en{' '}
              <em>el producto</em>.
            </li>
            <li>
              <strong>Sprint Retrospective:</strong> el equipo, a solas, reflexiona sobre cómo ha trabajado
              (procesos, comunicación, herramientas) y acuerda una o dos mejoras concretas para el próximo Sprint.
              El foco está en <em>el equipo</em>.
            </li>
          </ul>
          <InfoBox type="success" title="Mejora continua">
            La Retrospectiva es el motor de mejora de SCRUM. Un equipo que la aplica en serio (y no como un
            trámite de 5 minutos) mejora su forma de trabajar Sprint tras Sprint.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={2}>
          <ul>
            <li>El Sprint es un periodo de tiempo fijo (timebox), habitualmente de una a cuatro semanas.</li>
            <li>El Sprint Planning define qué se construye (Product Backlog priorizado) y cómo (tareas técnicas).</li>
            <li>El resultado de la planificación es el Sprint Backlog y el Sprint Goal.</li>
            <li>Story Points y Planning Poker ayudan a estimar esfuerzo de forma relativa, no exacta.</li>
            <li>El Daily Scrum sincroniza al equipo cada día, sin ser un reporte al jefe.</li>
            <li>El Sprint cierra con Review (foco en el producto) y Retrospective (foco en el equipo).</li>
          </ul>
        </LessonSection>
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
