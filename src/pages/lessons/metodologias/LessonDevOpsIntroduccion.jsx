import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonDevOpsIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Introducción a DevOps"
        description="Qué es DevOps, sus principios y cómo une desarrollo y operaciones"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a DevOps - Principios y Cultura"
        seoDescription="Qué es DevOps, sus principios fundamentales y cómo integra desarrollo y operaciones."
        seoKeywords="devops, integración continua, despliegue continuo, cultura devops"
        url="https://fullstackdevlovers.com/metodologias/devops/introduccion"
      >
        <p>
          Vas a aprender qué es DevOps, por qué surge y qué principios lo
          sostienen. Es la base para entender, en las próximas lecciones, cómo
          se automatizan los pipelines de CI/CD y cómo se monitoriza una
          aplicación una vez está en producción.
        </p>

        <LessonSection title="¿Qué es DevOps?" level={1}>
          <p>
            <strong>DevOps</strong> es la unión de <em>Development</em>{' '}
            (desarrollo) y <em>Operations</em> (operaciones). No es una
            herramienta ni un framework: es una <strong>cultura de trabajo</strong>{' '}
            que busca que los equipos que escriben código y los equipos que lo
            despliegan y mantienen en producción dejen de trabajar como
            departamentos separados y colaboren de forma continua.
          </p>
          <InfoBox type="info">
            Antes de DevOps era habitual que desarrollo "lanzara" el código
            terminado por encima de la pared para que operaciones lo
            desplegara. Si algo fallaba en producción, cada equipo culpaba al
            otro. DevOps busca romper esa pared.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Principios fundamentales" level={1}>
          <ul>
            <li><strong>Colaboración:</strong> desarrollo y operaciones comparten objetivos y responsabilidades, no se lanzan el trabajo "por encima del muro".</li>
            <li><strong>Automatización:</strong> compilar, testear y desplegar se hace con pipelines automáticos, no a mano.</li>
            <li><strong>Integración continua (CI):</strong> el código se integra y se prueba con mucha frecuencia (varias veces al día), no en grandes bloques aislados.</li>
            <li><strong>Entrega/despliegue continuo (CD):</strong> cada cambio validado puede llegar a producción de forma rápida y segura.</li>
            <li><strong>Monitorización constante:</strong> se observa el sistema en producción con métricas y logs para detectar problemas cuanto antes.</li>
            <li><strong>Mejora continua:</strong> los fallos se analizan para aprender de ellos, no para buscar culpables.</li>
          </ul>
        </LessonSection>

        <LessonSection title="El ciclo DevOps" level={1}>
          <p>
            Estos principios se suelen representar como un ciclo continuo,
            sin principio ni fin fijo, que se repite en cada cambio de código:
          </p>
          <CodeBlock
            language="text"
            code={`PLANIFICAR → DESARROLLAR → INTEGRAR (CI) → DESPLEGAR (CD)
     ↑                                                  ↓
  APRENDER  ←  MONITORIZAR  ←  OPERAR EN PRODUCCIÓN  ←──┘`}
          />
          <p>
            Cada vuelta al ciclo es más pequeña y más frecuente que en los
            modelos tradicionales: en lugar de desplegar una vez cada varios
            meses, un equipo con buena cultura DevOps puede desplegar varias
            veces al día.
          </p>
        </LessonSection>

        <LessonSection title="DevOps y Agile: piezas del mismo puzle" level={1}>
          <p>
            DevOps no sustituye a Agile, lo complementa. Agile se centra en{' '}
            <strong>cómo planificar y organizar el trabajo</strong> del equipo
            de desarrollo (sprints, historias de usuario...). DevOps se centra
            en <strong>cómo llevar ese trabajo hasta producción</strong> de
            forma rápida, segura y automatizada.
          </p>
          <InfoBox type="success">
            Un equipo puede trabajar en sprints de dos semanas (Agile) y, dentro
            de ese sprint, desplegar código a producción varias veces al día
            gracias a un pipeline de CI/CD (DevOps). Son dos capas distintas
            que se apoyan la una en la otra.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>DevOps es la cultura que une desarrollo y operaciones para entregar software de forma continua y fiable.</li>
            <li>Sus pilares: colaboración, automatización, integración continua, entrega continua, monitorización y mejora continua.</li>
            <li>Funciona como un ciclo continuo que se repite en cada cambio de código, no como un proceso lineal.</li>
            <li>Complementa a Agile: Agile organiza el trabajo del equipo, DevOps automatiza su camino hasta producción.</li>
            <li>Siguiente parada: cómo se construye en la práctica un pipeline de CI/CD.</li>
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
