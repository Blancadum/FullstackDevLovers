import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCSSResponsive() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'La meta etiqueta viewport en el <head> del HTML es imprescindible para que el diseño responsivo funcione en móvil',
    'Una media query aplica un bloque de CSS solo cuando se cumple una condición sobre el dispositivo, normalmente el ancho de pantalla',
    'El enfoque mobile-first escribe primero el CSS para móvil y usa min-width para ir añadiendo estilos a partir de pantallas más grandes',
    'Las unidades relativas (%, em, rem, vw, vh) se adaptan al contexto, a diferencia de las unidades fijas como px',
    'max-width: 100% en imágenes evita que se desborden de su contenedor en pantallas pequeñas',
    'Flexbox y Grid, combinados con media queries, son la base de casi cualquier layout responsivo moderno',
  ];

  const exercises = [
    {
      title: 'Cambia de columnas a una sola en móvil',
      description:
        'Un contenedor usa CSS Grid con 3 columnas (1fr 1fr 1fr). Escribe una media query mobile-first que, en pantallas de menos de 600px, haga que pase a mostrar una sola columna.',
      solution: `.contenedor {
  display: grid;
  grid-template-columns: 1fr; /* mobile-first: una columna por defecto */
  gap: 16px;
}

@media (min-width: 600px) {
  .contenedor {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`,
    },
    {
      title: 'Imagen responsiva',
      description:
        'Escribe el CSS necesario para que cualquier imagen dentro de la clase .contenido nunca se desborde de su contenedor, manteniendo su proporción original.',
      solution: `.contenido img {
  max-width: 100%;
  height: auto;
}`,
    },
  ];

  const summary = `El diseño responsivo adapta una misma página a distintos tamaños de pantalla:

• La meta etiqueta viewport (<meta name="viewport" content="width=device-width, initial-scale=1.0" />) es obligatoria en el <head>: sin ella, el móvil simula una pantalla de escritorio y nada de lo demás funciona bien.
• Las media queries (@media (min-width: ...) { ... }) aplican bloques de CSS según el ancho (u otras condiciones) del dispositivo.
• El enfoque recomendado es mobile-first: el CSS base es para móvil, y se añaden estilos con min-width a medida que crece la pantalla.
• Las unidades relativas (%, em, rem, vw, vh) permiten que el diseño se adapte, frente a las unidades fijas como px.
• max-width: 100% en imágenes evita desbordamientos en pantallas pequeñas.

Con esto completamos el bloque de fundamentos de HTML y CSS: ya tienes las bases para construir páginas
estructuradas, con estilo y adaptadas a cualquier dispositivo. A partir de aquí, cualquier framework o
herramienta CSS que aprendas (como Bootstrap o Tailwind) se apoya exactamente en estos mismos conceptos.`;

  return (
    <>
      <LessonLayout
        title="Diseño responsivo"
        description="Cómo adaptar el diseño a distintos tamaños de pantalla con media queries"
        breadcrumbs={breadcrumbs}
        seoTitle="Diseño responsivo con CSS - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende a crear diseños responsivos con media queries y unidades flexibles en CSS."
        seoKeywords="css, responsive, media queries, diseño adaptable"
        url="https://fullstackdevlovers.com/frontend/css/responsive"
      >
        <p>
          Ya sabes construir layouts con Flexbox y Grid, pero hasta ahora hemos asumido una única pantalla.
          En la realidad, tu página se va a ver en móviles, tablets, portátiles y monitores enormes. En esta
          última lección del bloque aprenderás a que un mismo HTML y CSS se adapten correctamente a
          cualquier tamaño de pantalla: esto es el <strong>diseño responsivo</strong>.
        </p>

        <LessonSection title="El punto de partida: la meta etiqueta viewport">
          <p>
            En la lección de estructura HTML mencionamos brevemente esta etiqueta; ahora entendemos por qué
            es tan importante. Sin ella, los navegadores móviles simulan una pantalla de escritorio ancha y
            luego reducen la página entera, haciendo que todo se vea diminuto.
          </p>
          <CodeBlock
            language="xml"
            code={`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`}
          />
          <p>
            Esta línea le dice al navegador: "usa el ancho real del dispositivo, y empieza con un zoom del
            100%". Es imprescindible en el <code>&lt;head&gt;</code> de cualquier página que quiera ser
            responsiva.
          </p>
        </LessonSection>

        <LessonSection title="Media queries: CSS condicional">
          <p>
            Una <strong>media query</strong> aplica un bloque de CSS solo cuando se cumple una condición,
            normalmente relacionada con el ancho de la pantalla.
          </p>
          <CodeBlock
            language="css"
            code={`.caja {
  background-color: lightblue;
}

@media (max-width: 600px) {
  .caja {
    background-color: lightcoral;
  }
}

/* En pantallas de 600px de ancho o menos, la caja cambia a color coral */`}
          />
        </LessonSection>

        <LessonSection title="Mobile-first: construir de pequeño a grande">
          <p>
            Hay dos formas de organizar las media queries: <strong>desktop-first</strong> (empezar por
            escritorio y usar <code>max-width</code> para ir reduciendo) o{' '}
            <strong>mobile-first</strong> (empezar por móvil y usar <code>min-width</code> para ir
            ampliando). En proyectos modernos se recomienda mobile-first: la mayoría del tráfico web es
            móvil, y es más sencillo ir añadiendo complejidad que ir quitándola.
          </p>
          <CodeBlock
            language="css"
            code={`/* Estilos base: pensados para móvil */
.contenedor {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* A partir de 768px (tablet), 2 columnas */
@media (min-width: 768px) {
  .contenedor {
    grid-template-columns: 1fr 1fr;
  }
}

/* A partir de 1024px (escritorio), 3 columnas */
@media (min-width: 1024px) {
  .contenedor {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`}
          />
          <InfoBox type="tip" title="Breakpoints habituales">
            No existe un estándar único, pero es muy frecuente encontrar breakpoints
            alrededor de 576px/600px (móvil grande), 768px (tablet) y 1024px/1200px (escritorio). Cada
            proyecto puede ajustar estos valores según su diseño.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Unidades flexibles vs unidades fijas">
          <p>
            Para que un diseño se adapte de verdad, conviene usar unidades relativas en lugar de unidades
            fijas como <code>px</code> siempre que sea posible:
          </p>
          <ul>
            <li><code>%</code>: relativo al tamaño del elemento contenedor.</li>
            <li><code>em</code>: relativo al tamaño de fuente del elemento padre.</li>
            <li><code>rem</code>: relativo al tamaño de fuente del elemento raíz (<code>html</code>), más predecible que <code>em</code> porque no se acumula al anidar.</li>
            <li><code>vw</code> / <code>vh</code>: relativo al ancho / alto de la ventana del navegador (1vw = 1% del ancho de la ventana).</li>
          </ul>
          <CodeBlock
            language="css"
            code={`.titulo {
  font-size: 2rem; /* relativo al tamaño de fuente raíz */
}

.banner {
  width: 100%;   /* ocupa todo el ancho de su contenedor */
  min-height: 40vh; /* al menos el 40% de la altura de la ventana */
}`}
          />
        </LessonSection>

        <LessonSection title="Imágenes responsivas">
          <p>
            Sin ningún ajuste, una imagen grande puede desbordar su contenedor en pantallas pequeñas. La
            solución más simple y habitual es:
          </p>
          <CodeBlock
            language="css"
            code={`img {
  max-width: 100%;
  height: auto;
}`}
          />
          <p>
            Con <code>max-width: 100%</code>, la imagen nunca supera el ancho de su contenedor, y{' '}
            <code>height: auto</code> mantiene su proporción original para que no se deforme.
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
