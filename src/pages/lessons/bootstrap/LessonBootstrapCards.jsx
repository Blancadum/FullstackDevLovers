import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonBootstrapCards() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'card es el contenedor principal; card-body agrupa el contenido interior con relleno (padding)',
    'card-title, card-text y card-img-top son las partes más habituales dentro de una card',
    'card-footer y card-header permiten añadir cabecera y pie diferenciados',
    'Combinar card con el grid (row + col) es la forma habitual de construir listados de tarjetas (productos, artículos, usuarios...)',
    'g-* (gutter) controla el espacio entre columnas cuando maquetas varias cards en una fila',
    'Las cards son uno de los componentes más versátiles: sirven para productos, perfiles, artículos de blog, estadísticas...',
  ];

  const exercises = [
    {
      title: 'Card de producto',
      description:
        'Crea una card con una imagen superior, un título de producto, una breve descripción y un botón "Añadir al carrito".',
      solution: `<div class="card" style="width: 18rem;">
  <img src="producto.jpg" class="card-img-top" alt="Producto" />
  <div class="card-body">
    <h5 class="card-title">Zapatillas Running</h5>
    <p class="card-text">Ligeras, transpirables y con gran amortiguación para largas distancias.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>`,
    },
    {
      title: 'Grid de cards',
      description:
        'Usando el grid de Bootstrap, muestra tres cards de producto en una fila que ocupen un tercio del ancho cada una a partir del breakpoint "md".',
      solution: `<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Producto 1</h5>
          <p class="card-text">Descripción breve.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Producto 2</h5>
          <p class="card-text">Descripción breve.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Producto 3</h5>
          <p class="card-text">Descripción breve.</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  ];

  const summary = `Las cards son uno de los componentes más flexibles de Bootstrap, perfectas para mostrar contenido agrupado (un producto, un artículo, un perfil de usuario...):

• card es el contenedor; card-body añade el padding interior.
• card-title, card-text y card-img-top estructuran el contenido más habitual.
• card-header y card-footer permiten diferenciar cabecera y pie.
• Combinadas con el grid (row + col), las cards son la forma más común de construir listados: catálogos de productos, grids de artículos, tableros de perfiles...

Con esta lección cierras el bloque de fundamentos de Bootstrap: ya conoces instalación, grid, componentes, botones, formularios, navbars y cards, la base suficiente para maquetar cualquier interfaz típica de un proyecto backend con frontend sencillo.`;

  return (
    <>
      <LessonLayout
        title="Cards y layouts"
        description="El componente Card de Bootstrap y su combinación con el grid para construir layouts"
        breadcrumbs={breadcrumbs}
        seoTitle="Cards y layouts en Bootstrap - Guía Completa"
        seoDescription="Aprende a usar el componente Card de Bootstrap y a combinarlo con el grid para construir layouts."
        seoKeywords="bootstrap, cards, layouts, grid, ui"
        url="https://fullstackdevlovers.com/frontend/bootstrap/cards"
      >
        <p>
          Cerramos el bloque de Bootstrap con uno de sus componentes más usados en el día a día: la{' '}
          <code>card</code>. Es el bloque perfecto para mostrar contenido agrupado (un producto, un
          artículo, un usuario) y, combinada con el grid que ya conoces, te permite construir listados
          completos en pocas líneas.
        </p>

        <LessonSection title="Anatomía de una card">
          <p>
            Una card es un contenedor con borde y sombra suave que agrupa contenido relacionado. Su parte
            interior se organiza con <code>card-body</code>, dentro del cual suele haber un título y un
            texto.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Título de la card</h5>
    <p class="card-text">
      Un texto breve describiendo el contenido de esta tarjeta.
    </p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Cards con imagen">
          <p>
            Añadiendo <code>card-img-top</code> antes del <code>card-body</code>, la imagen ocupa todo el
            ancho de la card y queda recortada a sus esquinas.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="card" style="width: 18rem;">
  <img src="zapatillas.jpg" class="card-img-top" alt="Zapatillas running" />
  <div class="card-body">
    <h5 class="card-title">Zapatillas Running</h5>
    <p class="card-text">Ligeras y transpirables, ideales para largas distancias.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Cabecera y pie: card-header y card-footer">
          <CodeBlock
            language="xml"
            code={`<div class="card">
  <div class="card-header">Destacado</div>
  <div class="card-body">
    <h5 class="card-title">Oferta especial</h5>
    <p class="card-text">Válida solo esta semana.</p>
  </div>
  <div class="card-footer text-muted">Actualizado hace 2 días</div>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Combinando cards con el grid">
          <p>
            La forma más habitual de usar cards en un proyecto real es dentro de una rejilla, para mostrar
            un listado (catálogo de productos, artículos de blog, tarjetas de usuario...). Recuerda el
            grid que vimos anteriormente: <code>row</code> + <code>col</code>.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Producto 1</h5>
          <p class="card-text">Descripción breve del producto.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Producto 2</h5>
          <p class="card-text">Descripción breve del producto.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Producto 3</h5>
          <p class="card-text">Descripción breve del producto.</p>
        </div>
      </div>
    </div>
  </div>
</div>`}
          />
          <InfoBox type="tip" title="g-4 y h-100">
            <code>g-4</code> añade espacio (gutter) entre columnas y filas. <code>h-100</code> hace que
            todas las cards de la fila tengan la misma altura, aunque su contenido varíe de longitud.
          </InfoBox>
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
