import { LessonLayout, LessonSection, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonScrumFramework() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="SCRUM Framework"
        description="Roles, eventos y artefactos del framework ágil más usado en desarrollo de software"
        breadcrumbs={breadcrumbs}
        seoTitle="SCRUM Framework - Roles, Eventos y Artefactos"
        seoDescription="Aprende el framework SCRUM: Product Owner, Scrum Master, Development Team, Sprint Planning, Daily Standup y Retrospectivas."
        seoKeywords="scrum, agile, product owner, scrum master, sprint planning"
        url="https://fullstackdevlovers.com/metodologias/agile-scrum/scrum"
      >
        <p>
          Cuando entres a tu primer equipo de desarrollo, es muy probable que ya estén trabajando con{' '}
          <strong>SCRUM</strong>. No es una teoría de despacho: es el marco de trabajo que organiza reuniones,
          plazos y responsabilidades del día a día. En esta lección vas a entender sus tres roles, sus cuatro
          eventos y sus tres artefactos, para que el primer <em>daily</em> al que asistas no te pille perdido.
        </p>

        <LessonSection title="¿Qué es SCRUM?" level={2}>
          <p>
            SCRUM es un <strong>framework ágil</strong> (no una metodología cerrada) para gestionar el desarrollo
            de producto de forma iterativa e incremental. En vez de intentar planificar todo el proyecto de golpe,
            el trabajo se divide en ciclos cortos llamados <strong>Sprints</strong>, al final de los cuales el
            equipo entrega un incremento de producto funcional.
          </p>
          <p>
            SCRUM no dice cómo programar ni qué arquitectura usar: define <strong>cómo se organiza el equipo</strong>{' '}
            para tomar decisiones, comunicarse y adaptarse a los cambios. Por eso convive perfectamente con
            prácticas técnicas como TDD, Git Flow o Clean Code.
          </p>
          <InfoBox type="info" title="Framework, no metodología">
            SCRUM define roles, eventos y artefactos, pero deja libertad para adaptar el "cómo" a cada equipo.
            Es ligero de aprender, pero difícil de dominar bien.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Los tres roles" level={2}>
          <p>
            SCRUM define exactamente tres roles dentro del <strong>Scrum Team</strong>. No hay jefes de proyecto
            ni jerarquías intermedias: el equipo es autoorganizado.
          </p>

          <h3>Product Owner (PO)</h3>
          <p>
            Es la persona responsable de <strong>maximizar el valor del producto</strong>. Gestiona y prioriza el{' '}
            <em>Product Backlog</em>, decide qué se construye y en qué orden, y actúa como puente entre el negocio
            (clientes, stakeholders) y el equipo de desarrollo.
          </p>

          <h3>Scrum Master</h3>
          <p>
            No es un jefe: es un <strong>facilitador</strong>. Se asegura de que el equipo entienda y aplique SCRUM
            correctamente, elimina obstáculos (<em>blockers</em>) que impiden avanzar y protege al equipo de
            interrupciones externas durante el Sprint.
          </p>

          <h3>Development Team</h3>
          <p>
            El equipo que construye el incremento de producto: desarrolladores, testers, diseñadores... En SCRUM
            moderno se habla simplemente de "Developers". Es <strong>autoorganizado</strong>: nadie le dice al
            equipo cómo convertir el Backlog en software funcionando, esa decisión es suya.
          </p>

          <InfoBox type="tip" title="Como junior">
            Tu día a día transcurrirá casi siempre dentro del Development Team. Entender qué espera de ti el
            Product Owner (foco en valor) y el Scrum Master (foco en proceso) te ayudará a comunicarte mejor.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Los cuatro eventos" level={2}>
          <p>
            SCRUM se organiza alrededor de un Sprint y cuatro eventos (o ceremonias) que le dan estructura.
            Todos tienen un objetivo claro y una duración limitada (<em>timebox</em>).
          </p>
          <ul>
            <li>
              <strong>Sprint Planning:</strong> al inicio del Sprint, el equipo decide qué elementos del Backlog
              va a completar y cómo lo va a hacer.
            </li>
            <li>
              <strong>Daily Scrum (Daily Standup):</strong> reunión diaria de 15 minutos donde cada persona
              comenta qué hizo, qué va a hacer y si tiene algún bloqueo.
            </li>
            <li>
              <strong>Sprint Review:</strong> al final del Sprint, el equipo muestra el incremento terminado a los
              stakeholders y recoge feedback.
            </li>
            <li>
              <strong>Sprint Retrospective:</strong> el equipo reflexiona sobre cómo ha trabajado (no sobre qué ha
              construido) y define mejoras para el siguiente Sprint.
            </li>
          </ul>
          <InfoBox type="warning">
            El Daily Standup <strong>no</strong> es una reunión de reporte al jefe: es una sincronización entre
            iguales. Si notas que se convierte en eso, es una señal de que el equipo no está aplicando bien SCRUM.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Los tres artefactos" level={2}>
          <p>
            Los artefactos son la representación del trabajo y del valor que SCRUM hace visible para que todo el
            equipo tenga la misma información.
          </p>
          <ul>
            <li>
              <strong>Product Backlog:</strong> lista ordenada y priorizada de todo lo que podría necesitar el
              producto (funcionalidades, mejoras, correcciones de bugs). Vive mientras vive el producto.
            </li>
            <li>
              <strong>Sprint Backlog:</strong> el subconjunto de elementos del Product Backlog seleccionados para
              el Sprint actual, más el plan para conseguirlos.
            </li>
            <li>
              <strong>Increment:</strong> la suma de todo lo completado durante el Sprint (y los anteriores), que
              debe cumplir la <em>Definition of Done</em> del equipo para considerarse terminado.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="Resumen" level={2}>
          <ul>
            <li>SCRUM es un framework ágil, no una metodología rígida: define cómo se organiza el equipo.</li>
            <li>Tres roles: Product Owner (qué construir), Scrum Master (facilitar el proceso), Development Team (cómo construirlo).</li>
            <li>Cuatro eventos: Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective.</li>
            <li>Tres artefactos: Product Backlog, Sprint Backlog e Increment.</li>
            <li>Todo gira en torno al Sprint: la unidad de tiempo donde se produce valor de forma iterativa.</li>
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
