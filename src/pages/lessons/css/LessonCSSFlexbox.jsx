import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCSSFlexbox() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'display: flex convierte un elemento en contenedor flexible, y todos sus hijos directos se convierten en elementos flex',
    'flex-direction define el eje principal: row (horizontal, por defecto) o column (vertical)',
    'justify-content alinea los elementos a lo largo del eje principal; align-items los alinea en el eje transversal',
    'flex-wrap controla si los elementos pueden pasar a una nueva línea cuando no caben',
    'gap añade espacio entre los elementos flex sin necesidad de usar margin',
    'flex-grow, flex-shrink y flex-basis controlan cómo crece o se encoge cada elemento individual dentro del contenedor',
  ];

  const exercises = [
    {
      title: 'Barra de navegación con Flexbox',
      description:
        'Crea una barra de navegación horizontal con un logo a la izquierda y tres enlaces a la derecha, todo en la misma línea y bien separado, usando Flexbox.',
      solution: `<nav class="navbar">
  <span class="logo">MiLogo</span>
  <div class="enlaces">
    <a href="#">Inicio</a>
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
  </div>
</nav>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.enlaces {
  display: flex;
  gap: 16px;
}`,
    },
    {
      title: 'Centrar una caja completa',
      description:
        'Usando Flexbox, centra un único div (tanto horizontal como verticalmente) dentro de otro div que ocupe toda la altura de la pantalla.',
      solution: `<div class="contenedor">
  <div class="caja">Contenido centrado</div>
</div>

.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
    },
  ];

  const summary = `Flexbox es un sistema de layout unidimensional pensado para distribuir elementos en fila o en columna:

• display: flex en el contenedor activa Flexbox para todos sus hijos directos.
• flex-direction: row (por defecto) o column, define el eje principal.
• justify-content: alinea en el eje principal (flex-start, center, space-between, space-around...).
• align-items: alinea en el eje transversal (flex-start, center, stretch...).
• flex-wrap: permite que los elementos salten de línea si no caben.
• gap: espacio entre elementos, sin recurrir a margin.
• flex-grow / flex-shrink / flex-basis: controlan cómo crece o se encoge cada ítem individual.

Flexbox es ideal para distribuir elementos en una sola dirección (una fila de tarjetas, una navbar, un
formulario en columna). En la siguiente lección veremos CSS Grid, pensado para layouts bidimensionales
más complejos.`;

  return (
    <>
      <LessonLayout
        title="Flexbox - Layouts flexibles"
        description="Cómo construir layouts flexibles con Flexbox"
        breadcrumbs={breadcrumbs}
        seoTitle="Flexbox: Layouts flexibles en CSS - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende a construir layouts flexibles con Flexbox: contenedores, ejes y alineación."
        seoKeywords="css, flexbox, layouts, flex"
        url="https://fullstackdevlovers.com/frontend/css/flexbox"
      >
        <p>
          Hasta ahora hemos visto cómo se comporta una caja de forma aislada. Pero construir una página real
          significa organizar <strong>varias</strong> cajas entre sí: alinearlas en fila, centrarlas,
          repartir el espacio disponible... Para eso existe <strong>Flexbox</strong>, uno de los sistemas de
          layout más usados en CSS moderno.
        </p>

        <LessonSection title="¿Qué es Flexbox?">
          <p>
            Flexbox (Flexible Box Layout) es un sistema de layout <strong>unidimensional</strong>: organiza
            elementos a lo largo de un único eje, en fila o en columna, repartiendo el espacio disponible
            entre ellos de forma flexible. Es perfecto para navbars, listas de tarjetas, centrar contenido o
            distribuir elementos de un formulario.
          </p>
        </LessonSection>

        <LessonSection title="Activar Flexbox: display: flex">
          <p>
            Para usar Flexbox, aplicas <code>display: flex</code> a un elemento contenedor. A partir de ese
            momento, todos sus <strong>hijos directos</strong> se convierten automáticamente en "elementos
            flex" y se organizan según las reglas de Flexbox.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`}
          />
          <CodeBlock
            language="css"
            code={`.contenedor {
  display: flex;
}

/* Sin más CSS, los tres .item ya se colocan en fila, uno junto al otro */`}
          />
        </LessonSection>

        <LessonSection title="El eje principal: flex-direction">
          <p>
            Flexbox trabaja siempre con dos ejes: el <strong>eje principal</strong> y el{' '}
            <strong>eje transversal</strong> (perpendicular al principal). La propiedad{' '}
            <code>flex-direction</code> define cuál es el eje principal:
          </p>
          <CodeBlock
            language="css"
            code={`.contenedor {
  display: flex;
  flex-direction: row; /* por defecto: eje principal horizontal */
  /* o bien: */
  flex-direction: column; /* eje principal vertical */
}`}
          />
        </LessonSection>

        <LessonSection title="Alinear elementos: justify-content y align-items">
          <p>
            Estas dos propiedades del contenedor controlan la alineación de los elementos: una en el eje
            principal, otra en el eje transversal.
          </p>
          <CodeBlock
            language="css"
            code={`.contenedor {
  display: flex;

  /* Alinea en el eje PRINCIPAL (horizontal si flex-direction: row) */
  justify-content: flex-start;   /* por defecto: pegados al inicio */
  justify-content: center;       /* centrados */
  justify-content: space-between; /* pegados a los extremos, huecos iguales entre medias */
  justify-content: space-around; /* espacio igual alrededor de cada elemento */

  /* Alinea en el eje TRANSVERSAL (vertical si flex-direction: row) */
  align-items: stretch;    /* por defecto: estiran para llenar el contenedor */
  align-items: center;     /* centrados */
  align-items: flex-start; /* pegados arriba */
}`}
          />
          <InfoBox type="tip" title="Centrar cualquier cosa, la combinación más usada">
            La combinación <code>justify-content: center</code> + <code>align-items: center</code> es,
            probablemente, la forma más común de centrar un elemento tanto horizontal como verticalmente en
            CSS moderno.
          </InfoBox>
        </LessonSection>

        <LessonSection title="flex-wrap y gap">
          <p>
            Por defecto, Flexbox intenta encajar todos los elementos en una sola línea, incluso
            encogiéndolos si hace falta. <code>flex-wrap: wrap</code> permite que salten a una nueva línea
            cuando no caben. La propiedad <code>gap</code> añade espacio entre elementos sin necesitar
            margin.
          </p>
          <CodeBlock
            language="css"
            code={`.contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}`}
          />
        </LessonSection>

        <LessonSection title="Controlar cada elemento: flex-grow, flex-shrink y flex-basis">
          <p>
            Además de las propiedades del contenedor, cada elemento individual admite propiedades propias
            para controlar cómo crece o se encoge dentro del espacio disponible:
          </p>
          <ul>
            <li><code>flex-grow</code>: cuánto puede crecer el elemento respecto a sus hermanos si sobra espacio (0 = no crece, valor por defecto).</li>
            <li><code>flex-shrink</code>: cuánto puede encogerse si falta espacio (1 = se encoge, valor por defecto).</li>
            <li><code>flex-basis</code>: el tamaño de partida del elemento, antes de repartir espacio sobrante.</li>
          </ul>
          <CodeBlock
            language="css"
            code={`.item-principal {
  flex-grow: 2; /* crece el doble de rápido que los demás */
}

.item-secundario {
  flex-grow: 1;
}`}
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
