import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCSSSelectores() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'El selector de tipo (p, div, h1...) selecciona todos los elementos de esa etiqueta',
    'El selector de clase (.nombre) selecciona todos los elementos con ese atributo class, y se puede reutilizar en varios elementos',
    'El selector de id (#nombre) selecciona un único elemento, porque el id debe ser único en toda la página',
    'Los selectores se pueden combinar: descendiente (espacio), hijo directo (>) y agrupación (,)',
    'La especificidad determina qué regla gana cuando varias compiten por el mismo elemento: id > clase > etiqueta',
    'Cuando dos reglas tienen la misma especificidad, gana la que aparece más abajo (más tarde) en el CSS',
  ];

  const exercises = [
    {
      title: 'Selecciona por clase y por id',
      description:
        'Dado el HTML: <p class="destacado">A</p><p>B</p><p id="unico">C</p>, escribe el CSS para que los párrafos con clase "destacado" salgan en negrita, y el párrafo con id "unico" salga en color azul.',
      solution: `.destacado {
  font-weight: bold;
}

#unico {
  color: blue;
}`,
    },
    {
      title: '¿Qué regla gana?',
      description:
        'Dadas estas dos reglas CSS que afectan al mismo <p class="aviso">, indica de qué color se verá el texto y por qué.\n\np { color: black; }\n.aviso { color: red; }',
      solution: `El texto se verá en rojo.

Motivo: .aviso es un selector de clase, que tiene más especificidad que un
selector de tipo como p. Por eso .aviso gana, independientemente del orden
en que aparezcan las reglas en el archivo.`,
    },
  ];

  const summary = `Los selectores CSS determinan a qué elementos se aplica cada regla:

• Selector de tipo (p, div, h1): afecta a todos los elementos de esa etiqueta.
• Selector de clase (.clase): afecta a todos los elementos con ese atributo class; reutilizable.
• Selector de id (#id): afecta a un único elemento, porque el id debe ser único en la página.
• Combinaciones: selector selector (descendiente), selector > selector (hijo directo), selector1, selector2 (agrupación).
• Especificidad: id > clase > tipo. A igual especificidad, gana la regla que aparece más abajo en el CSS.

Con los selectores dominados, en la siguiente lección profundizamos en cómo el navegador calcula el
tamaño y el espacio que ocupa cada elemento: el box model.`;

  return (
    <>
      <LessonLayout
        title="Selectores y propiedades"
        description="Cómo seleccionar elementos HTML y aplicarles propiedades CSS"
        breadcrumbs={breadcrumbs}
        seoTitle="Selectores y propiedades CSS - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende los selectores CSS más usados y cómo aplicar propiedades a los elementos HTML."
        seoKeywords="css, selectores, propiedades, estilos"
        url="https://fullstackdevlovers.com/frontend/css/selectores"
      >
        <p>
          En la lección anterior aprendiste que toda regla CSS empieza con un selector. Ahora vamos a
          detenernos en los tipos de selectores más habituales, cómo combinarlos, y qué pasa cuando dos
          reglas distintas afectan al mismo elemento a la vez.
        </p>

        <LessonSection title="Selector de tipo (etiqueta)">
          <p>
            El selector más simple es el nombre de una etiqueta HTML. Selecciona{' '}
            <strong>todos</strong> los elementos de ese tipo en la página.
          </p>
          <CodeBlock
            language="css"
            code={`p {
  color: #333;
}

h1 {
  font-size: 2rem;
}`}
          />
        </LessonSection>

        <LessonSection title="Selector de clase">
          <p>
            Un elemento HTML puede tener uno o varios valores en su atributo <code>class</code>. El
            selector de clase, que empieza por un punto, aplica el estilo a{' '}
            <strong>todos los elementos que tengan esa clase</strong>, sin importar su etiqueta.
          </p>
          <CodeBlock
            language="xml"
            code={`<p class="destacado">Texto destacado</p>
<span class="destacado">Otro texto destacado</span>`}
          />
          <CodeBlock
            language="css"
            code={`.destacado {
  color: orange;
  font-weight: bold;
}`}
          />
          <InfoBox type="tip" title="Reutilizable por diseño">
            La clase es el selector que más usarás en el día a día: te permite definir un estilo una vez
            (por ejemplo, <code>.boton-primario</code>) y aplicarlo a tantos elementos como necesites, sin
            repetir CSS.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Selector de id">
          <p>
            El atributo <code>id</code> identifica de forma <strong>única</strong> a un elemento dentro de
            toda la página: no puede repetirse. El selector de id empieza con almohadilla.
          </p>
          <CodeBlock
            language="xml"
            code={`<header id="cabecera-principal">...</header>`}
          />
          <CodeBlock
            language="css"
            code={`#cabecera-principal {
  background-color: #222;
}`}
          />
          <InfoBox type="warning" title="Úsalo con moderación">
            Como el id solo puede aparecer una vez, no es reutilizable como la clase. En la práctica, la
            mayoría de estilos se aplican con clases; el id se reserva para casos muy concretos (anclas de
            navegación, referencias desde JavaScript).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Combinar selectores">
          <p>CSS permite combinar selectores para ser más precisos:</p>
          <CodeBlock
            language="css"
            code={`/* Descendiente: cualquier <a> dentro de <nav>, a cualquier profundidad */
nav a {
  text-decoration: none;
}

/* Hijo directo: solo <li> que sean hijos INMEDIATOS de <ul> */
ul > li {
  margin-bottom: 8px;
}

/* Agrupación: aplica el mismo estilo a varios selectores a la vez */
h1, h2, h3 {
  font-family: sans-serif;
}`}
          />
        </LessonSection>

        <LessonSection title="Especificidad: qué regla gana">
          <p>
            Cuando varias reglas CSS afectan al mismo elemento, el navegador necesita decidir cuál aplicar.
            Esto se resuelve con la <strong>especificidad</strong>: cuanto más específico es un selector,
            más "peso" tiene.
          </p>
          <p>De menor a mayor especificidad, de forma simplificada:</p>
          <ol>
            <li>Selector de tipo (<code>p</code>) — el menos específico.</li>
            <li>Selector de clase (<code>.destacado</code>) — más específico que el de tipo.</li>
            <li>Selector de id (<code>#unico</code>) — más específico que la clase.</li>
          </ol>
          <CodeBlock
            language="css"
            code={`p { color: black; }
.destacado { color: red; }
#unico { color: blue; }

/* Un <p id="unico" class="destacado">...</p> se vería en AZUL:
   el id gana a la clase, y la clase gana al selector de tipo. */`}
          />
          <p>
            Cuando dos reglas tienen exactamente la misma especificidad, gana la que aparece{' '}
            <strong>más abajo</strong> (más tarde) en el archivo CSS, o el archivo CSS cargado en último
            lugar.
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
