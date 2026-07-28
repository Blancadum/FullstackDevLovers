import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonBootstrapGrid() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'El grid de Bootstrap se basa en tres niveles: .container, .row y .col-*',
    'Cada fila (row) se divide conceptualmente en 12 columnas',
    'Puedes indicar cuántas columnas ocupa cada elemento: col-4 ocupa 4 de 12 (un tercio del ancho)',
    'Los breakpoints (sm, md, lg, xl, xxl) permiten cambiar el número de columnas según el tamaño de pantalla',
    'Bootstrap es mobile-first: las clases sin prefijo aplican a todos los tamaños salvo que las sobrescribas',
    'container centra el contenido con un ancho máximo por breakpoint; container-fluid ocupa siempre el 100% del ancho',
  ];

  const exercises = [
    {
      title: 'Layout de tres columnas',
      description:
        'Construye una fila con tres columnas iguales usando el grid de Bootstrap, de forma que cada una ocupe un tercio del ancho en pantallas medianas o mayores.',
      solution: `<div class="container">
  <div class="row">
    <div class="col-md-4">Columna 1</div>
    <div class="col-md-4">Columna 2</div>
    <div class="col-md-4">Columna 3</div>
  </div>
</div>`,
    },
    {
      title: 'Layout tipo sidebar + contenido',
      description:
        'Crea una fila con una barra lateral que ocupe 3 columnas y un área de contenido principal que ocupe las 9 restantes, solo a partir del breakpoint "lg".',
      solution: `<div class="container">
  <div class="row">
    <aside class="col-lg-3">Menú lateral</aside>
    <main class="col-lg-9">Contenido principal</main>
  </div>
</div>`,
    },
  ];

  const summary = `El sistema de grid de Bootstrap se apoya en tres piezas que siempre van juntas:

• .container (o .container-fluid) limita y centra el ancho del contenido.
• .row agrupa un conjunto de columnas y compensa el espaciado (gutters) entre ellas.
• .col-* indica cuántas de las 12 columnas ocupa cada elemento, y puede combinarse con breakpoints (col-sm-, col-md-, col-lg-, col-xl-, col-xxl-) para cambiar el layout según el tamaño de pantalla.

Al ser mobile-first, una clase sin prefijo de breakpoint (por ejemplo col-6) aplica desde el móvil en adelante, y solo necesitas añadir un prefijo cuando quieras que el comportamiento cambie a partir de cierto tamaño de pantalla.`;

  return (
    <>
      <LessonLayout
        title="Sistema de Grid"
        description="El sistema de rejilla (grid) de 12 columnas de Bootstrap para maquetar layouts responsivos"
        breadcrumbs={breadcrumbs}
        seoTitle="Sistema de Grid en Bootstrap - Guía Completa"
        seoDescription="Aprende a usar el sistema de grid de 12 columnas de Bootstrap para crear layouts responsivos."
        seoKeywords="bootstrap, grid, sistema de rejilla, columnas, responsive"
        url="https://fullstackdevlovers.com/frontend/bootstrap/grid"
      >
        <p>
          En la lección anterior instalamos Bootstrap y vimos su filosofía general. Ahora vamos a por su
          pieza más usada: el sistema de <strong>grid</strong>, la rejilla de 12 columnas que te permite
          maquetar cualquier layout (columnas, sidebars, formularios en varias columnas...) sin escribir
          CSS de posicionamiento manual.
        </p>

        <LessonSection title="Las tres piezas del grid: container, row y col">
          <p>
            Todo layout con el grid de Bootstrap sigue la misma estructura anidada: un contenedor, dentro
            una o varias filas, y dentro de cada fila las columnas.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="container">
  <div class="row">
    <div class="col">Columna A</div>
    <div class="col">Columna B</div>
  </div>
</div>`}
          />
          <ul>
            <li><code>.container</code>: centra el contenido y le da un ancho máximo por breakpoint.</li>
            <li><code>.container-fluid</code>: ocupa siempre el 100% del ancho de la pantalla.</li>
            <li><code>.row</code>: agrupa columnas en una fila horizontal y gestiona el espacio (gutter) entre ellas.</li>
            <li><code>.col</code>: representa una columna. Sin número, todas las columnas de la fila se reparten el espacio a partes iguales.</li>
          </ul>
        </LessonSection>

        <LessonSection title="12 columnas: col-1 a col-12">
          <p>
            Cada fila se divide conceptualmente en 12 columnas. Indicando un número junto a <code>col-</code>,
            defines cuántas de esas 12 columnas ocupa el elemento.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="row">
  <div class="col-8">Ocupa 8 de 12 (dos tercios)</div>
  <div class="col-4">Ocupa 4 de 12 (un tercio)</div>
</div>`}
          />
          <InfoBox type="tip" title="Las columnas de una fila deberían sumar 12 (o menos)">
            Si la suma supera 12, las columnas sobrantes "saltan" automáticamente a una nueva línea dentro
            de la misma fila.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Breakpoints: adaptando el grid a cada pantalla">
          <p>
            Bootstrap define varios puntos de ruptura (breakpoints). Puedes usar un número de columna
            distinto según el tamaño de pantalla combinando el prefijo del breakpoint con el número de
            columnas:
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    Ocupa el 100% en móvil, la mitad en tablet (md) y un tercio en escritorio (lg)
  </div>
</div>`}
          />
          <p>Los breakpoints principales de Bootstrap 5 son, de menor a mayor ancho:</p>
          <ul>
            <li><code>sm</code> ≥ 576px</li>
            <li><code>md</code> ≥ 768px</li>
            <li><code>lg</code> ≥ 992px</li>
            <li><code>xl</code> ≥ 1200px</li>
            <li><code>xxl</code> ≥ 1400px</li>
          </ul>
          <InfoBox type="info" title="Mobile-first">
            Bootstrap es mobile-first: una clase sin prefijo (<code>col-6</code>) aplica desde el móvil en
            adelante. Los prefijos de breakpoint (<code>col-md-6</code>) solo sobrescriben el comportamiento
            a partir de ese ancho de pantalla hacia arriba.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Un layout típico: sidebar + contenido">
          <p>
            Combinando lo anterior puedes maquetar layouts habituales, como una barra lateral fija y un
            área de contenido que ocupa el resto del espacio:
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="container">
  <div class="row">
    <aside class="col-12 col-lg-3">
      Menú lateral (ancho completo en móvil, 3 columnas en escritorio)
    </aside>
    <main class="col-12 col-lg-9">
      Contenido principal
    </main>
  </div>
</div>`}
          />
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />
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
