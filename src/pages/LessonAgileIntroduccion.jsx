import { LessonTemplate, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonAgileIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📋',
      title: 'Agile',
      definition: 'Metodología de desarrollo iterativo y flexible basada en la entrega continua',
      example: 'SCRUM, Kanban, Lean'
    },
    {
      icon: '⚡',
      title: 'Sprint',
      definition: 'Iteración de duración fija (generalmente 2-4 semanas) con objetivos claros',
      example: 'Sprint de 2 semanas con 5 historias de usuario a completar'
    },
  ];

  const sections = [
    {
      title: 'Historia de Agile',
      content: (
        <>
          <h3>Origen y Evolución</h3>
          <p>
            Agile surge a principios de los 2000 como respuesta a las limitaciones del desarrollo en cascada (Waterfall).
            Los métodos tradicionales eran rígidos, lentos y poco adaptables a cambios.
          </p>
          <p>
            El Manifiesto Ágil (2001) estableció 4 valores fundamentales que siguen siendo relevantes hoy.
          </p>

          <InfoBox type="info">
            <strong>Manifiesto Ágil:</strong> Valoramos más los individuos e interacciones sobre procesos y herramientas,
            el software que funciona sobre documentación exhaustiva, la colaboración del cliente sobre negociación de contratos,
            y responder a cambios sobre seguir un plan.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Ventajas de Agile',
      content: (
        <>
          <h3>¿Por qué Agile?</h3>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
            <li><strong>Flexibilidad:</strong> Adaptación rápida a cambios en requisitos</li>
            <li><strong>Entrega Continua:</strong> Producto funcionando en producción cada semanas</li>
            <li><strong>Feedback Temprano:</strong> Identificar problemas antes vs después</li>
            <li><strong>Motivación:</strong> El equipo ve resultados concretos regularmente</li>
            <li><strong>Riesgo Reducido:</strong> Problemas se detectan en iteraciones cortas</li>
          </ul>
        </>
      )
    },
    {
      title: 'Agile vs Waterfall',
      content: (
        <>
          <h3>Comparación de Enfoques</h3>
          <p>
            Waterfall es lineal: requisitos → diseño → desarrollo → testing → producción.
            Agile es iterativo: pequeños ciclos de planificación-desarrollo-testing-entrega.
          </p>
          <InfoBox type="success">
            <strong>Cuándo usar Agile:</strong> Proyectos con requisitos cambiantes, equipos coloco-ados,
            necesidad de feedback frecuente.
          </InfoBox>
          <InfoBox type="warning">
            <strong>Cuándo usar Waterfall:</strong> Proyectos con requisitos estables, regulaciones estrictas,
            equipos distribuidos sin comunicación frecuente.
          </InfoBox>
        </>
      )
    }
  ];

  const keyPoints = [
    'Agile: metodología iterativa y flexible',
    'Manifiesto Ágil: 4 valores fundamentales',
    'Sprints: ciclos cortos de 1-4 semanas',
    'Feedback continuo vs planeación exhaustiva',
    'Adaptación al cambio es la clave',
    'SCRUM es la implementación más popular de Agile',
    'Importante: comunicación cara a cara',
    'Entrega de valor en cada iteración'
  ];

  const summary = `Agile es una metodología de desarrollo iterativa que enfatiza la flexibilidad,
  la entrega continua y la adaptación al cambio. Surgió como respuesta a las limitaciones de Waterfall
  y hoy es el estándar en la mayoría de empresas de software.`;

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        keyPoints={keyPoints}
        sections={sections}
        summary={summary}
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