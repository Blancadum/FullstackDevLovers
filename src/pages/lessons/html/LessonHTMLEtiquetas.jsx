import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonHTMLEtiquetas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Un elemento HTML suele tener etiqueta de apertura, contenido y etiqueta de cierre; algunos son de una sola etiqueta (self-closing)',
    'Los atributos van dentro de la etiqueta de apertura y añaden información extra al elemento (href, src, alt...)',
    'h1-h6 son encabezados jerárquicos; p es un párrafo; ul/ol/li construyen listas',
    'a crea enlaces (href) e img inserta imágenes (src y alt, este último obligatorio por accesibilidad)',
    'Las etiquetas semánticas (header, nav, main, section, article, footer) describen el propósito del contenido, no solo su aspecto',
    'div y span son contenedores genéricos sin significado semántico: se usan cuando ninguna otra etiqueta encaja mejor',
  ];

  const exercises = [
    {
      title: 'Ficha de un producto',
      description:
        'Construye el body de una página con: un encabezado h1 con el nombre de un producto inventado, un párrafo con su descripción, una lista (ul) con 3 características, y una imagen con su atributo alt correctamente descrito.',
      solution: `<body>
  <h1>Auriculares InalámbriX Pro</h1>
  <p>Auriculares inalámbricos con cancelación de ruido activa y 30 horas de batería.</p>
  <ul>
    <li>Cancelación activa de ruido</li>
    <li>30 horas de autonomía</li>
    <li>Resistentes al agua (IPX4)</li>
  </ul>
  <img src="auriculares.jpg" alt="Auriculares inalámbricos InalámbriX Pro en color negro" />
</body>`,
    },
    {
      title: 'De div genérico a semántico',
      description:
        'El siguiente HTML usa solo div. Reescríbelo usando las etiquetas semánticas equivalentes: header, nav, main y footer.\n\n<div class="cabecera"><div class="menu">Inicio | Contacto</div></div>\n<div class="contenido"><p>Texto principal</p></div>\n<div class="pie">© 2026</div>',
      solution: `<header>
  <nav>Inicio | Contacto</nav>
</header>
<main>
  <p>Texto principal</p>
</main>
<footer>© 2026</footer>`,
    },
  ];

  const summary = `HTML ofrece un vocabulario amplio de etiquetas, cada una con un propósito concreto:

• Texto: h1-h6 (encabezados), p (párrafos), strong/em (énfasis).
• Listas: ul/ol como contenedor, li para cada elemento.
• Enlaces e imágenes: a (con href) e img (con src y alt).
• Semánticas de estructura: header, nav, main, section, article, footer.
• Contenedores genéricos sin significado: div (bloque) y span (en línea).

Elegir la etiqueta correcta (en lugar de abusar de div para todo) mejora la accesibilidad, el SEO y la
legibilidad del código. En la siguiente lección usaremos varias de estas etiquetas dentro de un formulario.`;

  return (
    <>
      <LessonLayout
        title="Etiquetas y elementos"
        description="Las etiquetas HTML más comunes y cómo se combinan para construir una página"
        breadcrumbs={breadcrumbs}
        seoTitle="Etiquetas y elementos HTML - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Conoce las etiquetas y elementos HTML más utilizados para estructurar contenido web."
        seoKeywords="html, etiquetas, elementos, tags"
        url="https://fullstackdevlovers.com/frontend/html/etiquetas"
      >
        <p>
          Ya sabes cómo se organiza un documento HTML por dentro. Ahora toca llenar el{' '}
          <code>&lt;body&gt;</code> con contenido real: en esta lección recorremos las etiquetas más
          habituales de HTML (texto, listas, enlaces, imágenes y etiquetas semánticas) que usarás en
          prácticamente cualquier página que construyas.
        </p>

        <LessonSection title="Etiquetas, elementos y atributos">
          <p>
            Antes de ver etiquetas concretas, fijemos el vocabulario. Una <strong>etiqueta</strong>{' '}
            (<em>tag</em>) es la marca entre símbolos de menor y mayor que: <code>&lt;p&gt;</code>. Un{' '}
            <strong>elemento</strong> es la etiqueta de apertura, su contenido y su etiqueta de cierre
            juntos: <code>&lt;p&gt;Hola&lt;/p&gt;</code>.
          </p>
          <p>
            Algunos elementos no tienen contenido ni etiqueta de cierre, porque son "de un solo uso": se
            llaman elementos vacíos o self-closing, como <code>&lt;img /&gt;</code> o <code>&lt;br /&gt;</code>.
          </p>
          <p>
            Los <strong>atributos</strong> añaden información extra dentro de la etiqueta de apertura, con
            el formato <code>nombre="valor"</code>:
          </p>
          <CodeBlock
            language="xml"
            code={`<a href="https://ejemplo.com">Visitar sitio</a>
<!--   ^tag   ^atributo         ^contenido   ^cierre -->`}
          />
        </LessonSection>

        <LessonSection title="Texto: encabezados y párrafos">
          <p>
            Los encabezados van de <code>&lt;h1&gt;</code> (el más importante) a <code>&lt;h6&gt;</code>{' '}
            (el menos importante), y deben usarse en orden jerárquico, no por tamaño de letra. El texto
            normal se envuelve en párrafos con <code>&lt;p&gt;</code>.
          </p>
          <CodeBlock
            language="xml"
            code={`<h1>Título principal de la página</h1>
<h2>Un subtítulo</h2>
<p>Un párrafo normal de texto, con <strong>una parte importante</strong> y
otra <em>en cursiva para dar énfasis</em>.</p>`}
          />
          <InfoBox type="warning" title="No uses h1-h6 solo por su tamaño">
            Es tentador usar <code>&lt;h3&gt;</code> porque "el texto se ve del tamaño que quiero", pero
            los encabezados deben respetar la jerarquía del contenido. El tamaño de letra se controla con
            CSS, que veremos en el siguiente bloque.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Listas">
          <p>
            Hay dos tipos de listas: <code>&lt;ul&gt;</code> (lista sin orden, "unordered list") y{' '}
            <code>&lt;ol&gt;</code> (lista numerada, "ordered list"). En ambos casos, cada elemento de la
            lista se escribe con <code>&lt;li&gt;</code>.
          </p>
          <CodeBlock
            language="xml"
            code={`<ul>
  <li>Café</li>
  <li>Té</li>
  <li>Agua</li>
</ul>

<ol>
  <li>Encender el horno</li>
  <li>Mezclar los ingredientes</li>
  <li>Hornear 20 minutos</li>
</ol>`}
          />
        </LessonSection>

        <LessonSection title="Enlaces e imágenes">
          <p>
            El elemento <code>&lt;a&gt;</code> (anchor) crea enlaces mediante su atributo{' '}
            <code>href</code>. El elemento <code>&lt;img&gt;</code> inserta imágenes con el atributo{' '}
            <code>src</code> (la ruta del archivo) y <code>alt</code> (texto alternativo).
          </p>
          <CodeBlock
            language="xml"
            code={`<a href="https://fullstackdevlovers.com">Ir a la web</a>

<img src="logo.png" alt="Logo de la empresa" />`}
          />
          <InfoBox type="important" title="alt no es opcional">
            El atributo <code>alt</code> se lee en voz alta por lectores de pantalla y se muestra si la
            imagen no carga. Escribe siempre una descripción breve y útil, nunca lo dejes vacío ni pongas
            "imagen1.jpg".
          </InfoBox>
        </LessonSection>

        <LessonSection title="Etiquetas semánticas">
          <p>
            HTML5 incluye etiquetas que describen el <strong>propósito</strong> de una sección de la
            página, no solo su aspecto. Usarlas en lugar de un <code>&lt;div&gt;</code> genérico ayuda a
            los buscadores y a las tecnologías de accesibilidad a entender mejor tu página.
          </p>
          <ul>
            <li><code>&lt;header&gt;</code>: cabecera de la página o de una sección.</li>
            <li><code>&lt;nav&gt;</code>: bloque de navegación con enlaces principales.</li>
            <li><code>&lt;main&gt;</code>: contenido principal (debería aparecer una sola vez por página).</li>
            <li><code>&lt;section&gt;</code>: agrupa contenido relacionado bajo un mismo tema.</li>
            <li><code>&lt;article&gt;</code>: contenido independiente y autocontenido (un post de blog, una noticia).</li>
            <li><code>&lt;footer&gt;</code>: pie de página o de una sección.</li>
          </ul>
          <CodeBlock
            language="xml"
            code={`<header>
  <nav>Inicio | Servicios | Contacto</nav>
</header>

<main>
  <article>
    <h1>Cómo empezar con HTML</h1>
    <p>Contenido del artículo...</p>
  </article>
</main>

<footer>
  <p>© 2026 Fullstack Dev Lovers</p>
</footer>`}
          />
        </LessonSection>

        <LessonSection title="div y span: contenedores genéricos">
          <p>
            Cuando ninguna etiqueta semántica encaja, HTML ofrece dos contenedores neutros:{' '}
            <code>&lt;div&gt;</code> (bloque, ocupa toda la línea) y <code>&lt;span&gt;</code> (en línea,
            solo ocupa el espacio de su contenido). Se usan mucho como "ganchos" para aplicar estilos CSS o
            agrupar elementos sin dotarlos de significado propio.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="tarjeta">
  <p>Precio: <span class="destacado">19,99€</span></p>
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
