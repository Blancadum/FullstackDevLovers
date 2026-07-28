import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCSSBoxModel() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Todo elemento HTML es, para CSS, una caja rectangular formada por content, padding, border y margin',
    'padding es el espacio interior entre el contenido y el borde; margin es el espacio exterior, fuera del borde',
    'Por defecto, width y height solo definen el tamaño del content, y padding/border se suman a ese tamaño',
    'box-sizing: border-box hace que width y height incluyan el padding y el border, lo cual es mucho más intuitivo',
    'display: block ocupa todo el ancho disponible; display: inline solo ocupa el espacio de su contenido y no admite width/height; inline-block combina ambos',
  ];

  const exercises = [
    {
      title: 'Calcula el ancho total',
      description:
        'Una caja tiene width: 200px, padding: 20px y border: 5px solid black, con el box-sizing por defecto (content-box). Calcula cuántos píxeles ocupa en total de ancho, sumando también el margin: 10px.',
      solution: `content:  200px
padding:  20px a cada lado -> +40px
border:   5px a cada lado  -> +10px
--------------------------------
Ancho de la caja (borde a borde): 200 + 40 + 10 = 250px

margin:   10px a cada lado -> +20px
--------------------------------
Espacio total que ocupa en el layout: 250 + 20 = 270px`,
    },
    {
      title: 'Aplica border-box',
      description:
        'Reescribe la caja del ejercicio anterior usando box-sizing: border-box, de forma que el ancho final visible de la caja (borde a borde) sea exactamente 200px.',
      solution: `.caja {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

/* Con border-box, los 200px ya incluyen el padding y el border,
   así que el content se reduce automáticamente para que quepan. */`,
    },
  ];

  const summary = `El box model es el modelo con el que CSS calcula el tamaño y el espacio de cada elemento:

• content: el propio contenido (texto, imagen...).
• padding: espacio interior, entre el contenido y el borde.
• border: el borde de la caja.
• margin: espacio exterior, fuera del borde, que separa la caja de sus vecinas.

Por defecto (content-box), width/height solo miden el content, y padding/border se suman aparte. Con
box-sizing: border-box, width/height incluyen padding y border, lo que hace los cálculos mucho más
predecibles: por eso es muy habitual aplicarlo a todos los elementos de un proyecto.

El display también importa: block ocupa todo el ancho disponible, inline no admite width/height, e
inline-block combina lo mejor de ambos. En la siguiente lección usaremos estas bases para construir
layouts completos con Flexbox.`;

  return (
    <>
      <LessonLayout
        title="Modelo de caja (Box Model)"
        description="Cómo funciona el box model: content, padding, border y margin"
        breadcrumbs={breadcrumbs}
        seoTitle="Modelo de caja CSS (Box Model) - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende el box model de CSS: content, padding, border y margin, y cómo afectan al layout."
        seoKeywords="css, box model, padding, margin, border"
        url="https://fullstackdevlovers.com/frontend/css/box-model"
      >
        <p>
          Ya sabes seleccionar elementos y aplicarles propiedades. Antes de meternos en layouts modernos
          como Flexbox o Grid, necesitas entender cómo CSS calcula el espacio que ocupa cada elemento en la
          página: esto se llama el <strong>box model</strong> (modelo de caja), y es una de las bases más
          importantes de todo el lenguaje.
        </p>

        <LessonSection title="¿Qué es el box model?">
          <p>
            Para CSS, <strong>cada elemento HTML es una caja rectangular</strong>, sin excepción: un
            párrafo, una imagen, un botón, un div... todos se calculan siguiendo el mismo modelo, formado
            por cuatro capas, de dentro hacia fuera:
          </p>
          <ul>
            <li><strong>content</strong>: el contenido real (el texto, la imagen...).</li>
            <li><strong>padding</strong>: espacio interior, entre el contenido y el borde de la caja.</li>
            <li><strong>border</strong>: el borde de la caja, puede tener grosor, estilo y color.</li>
            <li><strong>margin</strong>: espacio exterior, fuera del borde, que separa esta caja de las cajas vecinas.</li>
          </ul>
          <CodeBlock
            language="css"
            code={`.caja {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 16px;
}`}
          />
        </LessonSection>

        <LessonSection title="width, height y de dónde vienen las sorpresas">
          <p>
            Por defecto, CSS calcula <code>width</code> y <code>height</code> midiendo{' '}
            <strong>solo el content</strong>. El padding y el border se suman por fuera, aumentando el
            tamaño real de la caja más allá de lo que indicaste en <code>width</code>.
          </p>
          <CodeBlock
            language="css"
            code={`.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

/* Ancho REAL de la caja (border a border):
   200px (content) + 40px (padding, 20px a cada lado) + 10px (border, 5px a cada lado)
   = 250px, no 200px */`}
          />
          <InfoBox type="warning" title="La sorpresa clásica de CSS">
            Este comportamiento por defecto se llama <code>content-box</code>, y suele confundir a quien
            empieza: pones <code>width: 200px</code> esperando que la caja mida exactamente eso, y termina
            midiendo más por culpa del padding y el border.
          </InfoBox>
        </LessonSection>

        <LessonSection title="box-sizing: border-box, la solución">
          <p>
            La propiedad <code>box-sizing</code> con el valor <code>border-box</code> cambia la forma de
            calcular: ahora <code>width</code> y <code>height</code> incluyen el padding y el border, así
            que el tamaño final de la caja es exactamente el que especificaste.
          </p>
          <CodeBlock
            language="css"
            code={`.caja {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

/* Ahora el ancho REAL de la caja es exactamente 200px:
   el content se reduce automáticamente para dejar sitio al padding y al border */`}
          />
          <InfoBox type="tip" title="Aplícalo globalmente">
            Es muy habitual, en cualquier proyecto real, aplicar <code>box-sizing: border-box</code> a
            todos los elementos desde el principio, para que el tamaño de las cajas sea siempre predecible:
          </InfoBox>
          <CodeBlock
            language="css"
            code={`* {
  box-sizing: border-box;
}`}
          />
        </LessonSection>

        <LessonSection title="display: block, inline e inline-block">
          <p>
            El box model se comporta distinto según el valor de la propiedad <code>display</code> del
            elemento (cada etiqueta HTML trae un valor por defecto, que puedes cambiar con CSS):
          </p>
          <ul>
            <li><strong>block</strong> (por defecto en <code>div</code>, <code>p</code>, <code>h1</code>...): ocupa todo el ancho disponible y siempre empieza en una línea nueva. Admite <code>width</code>, <code>height</code>, <code>padding</code> y <code>margin</code> en todas direcciones.</li>
            <li><strong>inline</strong> (por defecto en <code>span</code>, <code>a</code>, <code>strong</code>...): solo ocupa el espacio de su propio contenido, no rompe línea, e <strong>ignora</strong> <code>width</code>/<code>height</code> y el margin/padding vertical.</li>
            <li><strong>inline-block</strong>: no rompe línea (como inline), pero sí admite <code>width</code>, <code>height</code> y todo el padding/margin (como block).</li>
          </ul>
          <CodeBlock
            language="css"
            code={`.etiqueta {
  display: inline-block;
  width: 100px;
  padding: 8px;
  margin: 4px;
  border: 1px solid gray;
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
