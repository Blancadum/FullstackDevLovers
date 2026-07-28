import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCSSIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'CSS (Cascading Style Sheets) es el lenguaje que da presentación visual al HTML: colores, tamaños, espaciados, posiciones',
    'Una regla CSS tiene siempre la forma selector { propiedad: valor; }',
    'Hay tres formas de aplicar CSS: en línea (style=""), interna (<style> en el head) y externa (archivo .css enlazado)',
    'La forma recomendada en cualquier proyecto real es CSS externo, porque separa contenido (HTML) de presentación (CSS)',
    'La "cascada" del nombre CSS hace referencia a cómo se combinan y priorizan varias reglas que afectan al mismo elemento',
  ];

  const exercises = [
    {
      title: 'Tu primera hoja de estilos',
      description:
        'Crea un archivo estilos.css que ponga el fondo de la página en color claro y todos los párrafos en color gris oscuro. Enlázalo desde un documento HTML mediante <link>.',
      solution: `<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi página con CSS</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <p>Este párrafo debería verse en gris oscuro.</p>
</body>
</html>

/* estilos.css */
body {
  background-color: #f5f5f5;
}

p {
  color: #333333;
}`,
    },
    {
      title: 'De inline a externo',
      description:
        'El siguiente párrafo usa un estilo inline. Reescríbelo usando CSS externo, con una clase llamada "aviso".\n\n<p style="color: red; font-weight: bold;">Cuidado</p>',
      solution: `<!-- HTML -->
<p class="aviso">Cuidado</p>

/* CSS */
.aviso {
  color: red;
  font-weight: bold;
}`,
    },
  ];

  const summary = `CSS (Cascading Style Sheets) es el lenguaje que aplica estilo visual al HTML:

• Una regla CSS sigue siempre el patrón: selector { propiedad: valor; }
• Se puede aplicar de tres formas: inline (atributo style), interna (etiqueta <style>) o externa (archivo .css enlazado con <link>).
• La forma recomendada en cualquier proyecto real es CSS externo, porque separa el contenido (HTML) de la presentación (CSS) y permite reutilizar los mismos estilos en varias páginas.
• "Cascading" (cascada) hace referencia a cómo el navegador combina y prioriza varias reglas que compiten por el mismo elemento, algo que veremos en detalle en la siguiente lección.

Con esta base, en la próxima lección aprenderás a seleccionar exactamente los elementos que quieres
estilizar.`;

  return (
    <>
      <LessonLayout
        title="Introducción a CSS"
        description="Qué es CSS, para qué se usa y cómo aplicar estilos a un documento HTML"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a CSS - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende qué es CSS, su papel en el desarrollo web y cómo aplicar tus primeros estilos."
        seoKeywords="css, introducción, estilos, desarrollo web"
        url="https://fullstackdevlovers.com/frontend/css/introduccion"
      >
        <p>
          Con el bloque de HTML ya cubierto, sabes construir la estructura y el contenido de una página.
          Pero seguro que has notado que, sin más, un documento HTML se ve muy plano: texto negro, fondo
          blanco, sin espaciados. Aquí entra <strong>CSS</strong>. En esta lección descubrirás qué es, cómo
          se aplica a un documento HTML y por qué separar estructura y presentación es una buena práctica.
        </p>

        <LessonSection title="¿Qué es CSS?">
          <p>
            <strong>CSS</strong> son las siglas de <em>Cascading Style Sheets</em> (hojas de estilo en
            cascada). Es el lenguaje que se encarga de la <strong>presentación visual</strong> de una
            página web: colores, tipografías, tamaños, espaciados, bordes, posiciones...
          </p>
          <p>
            Recordando el trío del que hablamos al principio del bloque de HTML: si HTML es la estructura
            (los ladrillos de la casa), CSS es la decoración (la pintura, los muebles, la distribución).
          </p>
        </LessonSection>

        <LessonSection title="Sintaxis básica: la regla CSS">
          <p>
            Toda regla CSS sigue siempre la misma forma: un <strong>selector</strong> (qué elemento quiero
            estilizar) seguido de llaves con una o varias <strong>declaraciones</strong> (propiedad:
            valor).
          </p>
          <CodeBlock
            language="css"
            code={`selector {
  propiedad: valor;
  otra-propiedad: otro-valor;
}

/* Ejemplo real */
p {
  color: darkslategray;
  font-size: 18px;
}`}
          />
          <p>
            En este ejemplo, <code>p</code> es el selector (todos los párrafos), <code>color</code> y{' '}
            <code>font-size</code> son propiedades, y <code>darkslategray</code> y <code>18px</code> son
            sus valores. En la siguiente lección profundizaremos en los distintos tipos de selectores.
          </p>
        </LessonSection>

        <LessonSection title="Tres formas de aplicar CSS">
          <p>Hay tres maneras de conectar CSS con un documento HTML:</p>
          <p><strong>1. Estilos en línea (inline)</strong>: directamente en el atributo <code>style</code> del elemento.</p>
          <CodeBlock language="xml" code={`<p style="color: red;">Texto en rojo</p>`} />
          <p><strong>2. Estilos internos</strong>: dentro de una etiqueta <code>&lt;style&gt;</code> en el <code>&lt;head&gt;</code>.</p>
          <CodeBlock
            language="xml"
            code={`<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>`}
          />
          <p><strong>3. Estilos externos</strong>: en un archivo <code>.css</code> aparte, enlazado con <code>&lt;link&gt;</code>.</p>
          <CodeBlock
            language="xml"
            code={`<head>
  <link rel="stylesheet" href="estilos.css" />
</head>`}
          />
          <CodeBlock
            language="css"
            code={`/* estilos.css */
p {
  color: red;
}`}
          />
        </LessonSection>

        <LessonSection title="¿Cuál usar? CSS externo, casi siempre">
          <p>
            En proyectos reales, la práctica recomendada es usar <strong>CSS externo</strong>. Tiene
            ventajas claras frente a las otras dos opciones:
          </p>
          <ul>
            <li>Separa contenido (HTML) de presentación (CSS): cada archivo tiene una única responsabilidad.</li>
            <li>Un mismo archivo .css puede reutilizarse en varias páginas HTML.</li>
            <li>El navegador puede cachear el archivo CSS, mejorando el rendimiento en visitas posteriores.</li>
            <li>Es mucho más fácil de mantener cuando el proyecto crece.</li>
          </ul>
          <InfoBox type="warning" title="Evita el estilo inline">
            El atributo <code>style</code> inline es útil para pruebas rápidas, pero mezclar estructura y
            presentación en la misma línea hace el código difícil de mantener y no permite reutilizar
            estilos. Resérvalo para casos muy puntuales.
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
