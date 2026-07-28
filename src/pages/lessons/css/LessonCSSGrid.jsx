import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCSSGrid() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'display: grid convierte un elemento en contenedor de cuadrícula bidimensional (filas y columnas a la vez)',
    'grid-template-columns y grid-template-rows definen cuántas filas/columnas hay y su tamaño',
    'La unidad fr reparte el espacio disponible de forma proporcional entre columnas o filas',
    'gap añade espacio entre celdas de la cuadrícula, tanto horizontal como vertical',
    'grid-column y grid-row permiten que un elemento ocupe varias celdas, indicando en qué líneas empieza y termina',
    'grid-template-areas permite nombrar zonas del layout y colocar elementos por nombre, muy legible para layouts de página completos',
  ];

  const exercises = [
    {
      title: 'Galería de 3 columnas',
      description:
        'Crea una galería de imágenes con CSS Grid de exactamente 3 columnas del mismo ancho, con 16px de espacio entre celdas.',
      solution: `<div class="galeria">
  <img src="1.jpg" alt="Foto 1" />
  <img src="2.jpg" alt="Foto 2" />
  <img src="3.jpg" alt="Foto 3" />
  <img src="4.jpg" alt="Foto 4" />
</div>

.galeria {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}`,
    },
    {
      title: 'Layout de página con grid-template-areas',
      description:
        'Construye el esqueleto de una página con cabecera arriba (ancho completo), un menú lateral a la izquierda, el contenido principal a la derecha, y un pie de página abajo (ancho completo), usando grid-template-areas.',
      solution: `.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "cabecera cabecera"
    "menu     contenido"
    "pie      pie";
  gap: 16px;
  min-height: 100vh;
}

header  { grid-area: cabecera; }
nav     { grid-area: menu; }
main    { grid-area: contenido; }
footer  { grid-area: pie; }`,
    },
  ];

  const summary = `CSS Grid es un sistema de layout bidimensional: organiza filas y columnas a la vez.

• display: grid activa Grid en un contenedor.
• grid-template-columns / grid-template-rows definen el número y tamaño de columnas y filas.
• La unidad fr reparte proporcionalmente el espacio disponible (1fr 2fr = un tercio y dos tercios).
• gap separa las celdas de la cuadrícula.
• grid-column / grid-row permiten que un elemento ocupe varias celdas.
• grid-template-areas nombra zonas del layout para colocar elementos por nombre, ideal en layouts de página completos (cabecera, menú, contenido, pie).

Como regla general: usa Flexbox cuando organizas elementos en una sola dirección (una fila o una
columna), y usa Grid cuando necesitas controlar filas y columnas a la vez, como el esqueleto completo de
una página. En la práctica, es habitual combinar ambos en el mismo proyecto: Grid para la estructura
general, Flexbox para organizar el contenido dentro de cada zona.`;

  return (
    <>
      <LessonLayout
        title="CSS Grid - Layouts avanzados"
        description="Cómo construir layouts bidimensionales avanzados con CSS Grid"
        breadcrumbs={breadcrumbs}
        seoTitle="CSS Grid: Layouts avanzados - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende a construir layouts bidimensionales avanzados con CSS Grid."
        seoKeywords="css, grid, layouts, css grid"
        url="https://fullstackdevlovers.com/frontend/css/grid"
      >
        <p>
          Flexbox, que viste en la lección anterior, organiza elementos en una única dirección: fila o
          columna. Pero muchos layouts de página necesitan controlar filas <strong>y</strong> columnas a la
          vez: una cabecera arriba, un menú lateral, contenido principal y un pie de página. Para eso existe{' '}
          <strong>CSS Grid</strong>.
        </p>

        <LessonSection title="¿Qué es CSS Grid?">
          <p>
            CSS Grid es un sistema de layout <strong>bidimensional</strong>: a diferencia de Flexbox, que
            trabaja con un único eje, Grid te permite definir una cuadrícula completa de filas y columnas y
            colocar elementos en celdas concretas de esa cuadrícula.
          </p>
        </LessonSection>

        <LessonSection title="Activar Grid: display: grid">
          <p>
            Igual que con Flexbox, activas Grid aplicando <code>display: grid</code> a un contenedor. Luego
            defines la cuadrícula con <code>grid-template-columns</code> y <code>grid-template-rows</code>.
          </p>
          <CodeBlock
            language="css"
            code={`.contenedor {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 columnas de 200px */
  grid-template-rows: 100px 100px;          /* 2 filas de 100px */
  gap: 16px;
}`}
          />
        </LessonSection>

        <LessonSection title="La unidad fr: reparto proporcional">
          <p>
            En lugar de fijar tamaños en píxeles, Grid incluye la unidad <code>fr</code> (fracción), que
            reparte el espacio disponible de forma proporcional entre columnas o filas.
          </p>
          <CodeBlock
            language="css"
            code={`.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 columnas de igual ancho */
}

.otro-contenedor {
  display: grid;
  grid-template-columns: 1fr 2fr; /* la segunda columna mide el doble que la primera */
}`}
          />
        </LessonSection>

        <LessonSection title="Elementos que ocupan varias celdas">
          <p>
            Con <code>grid-column</code> y <code>grid-row</code> puedes hacer que un elemento concreto
            ocupe más de una celda, indicando en qué línea de la cuadrícula empieza y en cuál termina.
          </p>
          <CodeBlock
            language="css"
            code={`.destacado {
  /* Ocupa desde la línea 1 hasta la línea 3 de columnas, es decir, 2 columnas */
  grid-column: 1 / 3;
}`}
          />
        </LessonSection>

        <LessonSection title="grid-template-areas: layouts nombrados">
          <p>
            Para layouts de página completos, <code>grid-template-areas</code> es especialmente legible:
            defines "zonas" con un nombre, dibujando literalmente la forma del layout dentro del CSS, y
            luego asignas cada elemento a su zona con <code>grid-area</code>.
          </p>
          <CodeBlock
            language="css"
            code={`.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "cabecera cabecera"
    "menu     contenido"
    "pie      pie";
  gap: 16px;
  min-height: 100vh;
}

header { grid-area: cabecera; }
nav    { grid-area: menu; }
main   { grid-area: contenido; }
footer { grid-area: pie; }`}
          />
          <InfoBox type="tip" title="Visualiza el layout en el propio CSS">
            Fíjate en cómo el valor de <code>grid-template-areas</code> "dibuja" el layout: cada fila de
            texto entre comillas es una fila de la cuadrícula, y repetir un nombre (como{' '}
            <code>cabecera cabecera</code>) hace que esa zona ocupe varias columnas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Grid vs Flexbox: ¿cuándo usar cada uno?">
          <ul>
            <li><strong>Flexbox</strong>: cuando organizas elementos en una sola dirección (una fila de botones, una navbar, una columna de campos de formulario).</li>
            <li><strong>Grid</strong>: cuando necesitas controlar filas y columnas a la vez (el esqueleto general de una página, una galería de imágenes con celdas de distinto tamaño).</li>
          </ul>
          <p>
            En proyectos reales es muy habitual combinar ambos: Grid para la estructura general de la
            página, y Flexbox para organizar el contenido dentro de cada zona de esa estructura.
          </p>
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
