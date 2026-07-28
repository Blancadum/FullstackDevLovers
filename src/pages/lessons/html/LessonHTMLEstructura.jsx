import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonHTMLEstructura() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    '<!DOCTYPE html> le dice al navegador que interprete el documento como HTML5',
    'El elemento <html> es la raíz del documento y su atributo lang indica el idioma del contenido',
    'La sección <head> contiene metadatos: no se muestra en pantalla, pero es información esencial',
    'La sección <body> contiene todo el contenido visible de la página',
    'Los metaetiquetas charset y viewport son casi obligatorias en cualquier documento HTML moderno',
  ];

  const exercises = [
    {
      title: 'Completa la plantilla',
      description:
        'Escribe un documento HTML completo y válido, en español, con el título de pestaña "Sobre mí" y un único párrafo en el body con una breve presentación tuya.',
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sobre mí</title>
</head>
<body>
  <p>Hola, soy una persona aprendiendo desarrollo web con HTML y CSS.</p>
</body>
</html>`,
    },
    {
      title: 'Encuentra el error',
      description:
        'El siguiente documento tiene un fallo de estructura: el párrafo está fuera de sitio. Reescríbelo corregido.\n\n<!DOCTYPE html>\n<html lang="es">\n<body>\n<head>\n<title>Página con error</title>\n</head>\n<p>Este párrafo está mal ubicado</p>\n</body>\n</html>',
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <title>Página con error</title>
</head>
<body>
  <p>Este párrafo está mal ubicado</p>
</body>
</html>

// El fallo era: <head> estaba abierto DESPUÉS de <body>, y el <p> estaba fuera de <body>.
// head debe declararse primero, completo, y luego body con todo el contenido visible.`,
    },
  ];

  const summary = `Todo documento HTML válido sigue siempre la misma estructura de cuatro piezas:

• <!DOCTYPE html>: declara que el documento es HTML5, siempre en la primera línea.
• <html lang="es">: elemento raíz que envuelve todo el documento; lang indica el idioma.
• <head>: metadatos invisibles (charset, viewport, title, enlaces a CSS...).
• <body>: todo el contenido que el usuario ve y con el que interactúa.

Dominar esta estructura es la base para poder avanzar a las etiquetas de contenido, que veremos en la
siguiente lección.`;

  return (
    <>
      <LessonLayout
        title="Estructura básica de un documento"
        description="Las partes esenciales de todo documento HTML: doctype, head y body"
        breadcrumbs={breadcrumbs}
        seoTitle="Estructura básica de un documento HTML - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende la estructura básica de un documento HTML: doctype, html, head y body."
        seoKeywords="html, estructura, doctype, head, body"
        url="https://fullstackdevlovers.com/frontend/html/estructura"
      >
        <p>
          En la lección anterior vimos un documento HTML completo sin detenernos en cada línea. Ahora toca
          desmontarlo pieza por pieza: qué es el doctype, para qué sirve <code>&lt;head&gt;</code>, qué va
          dentro de <code>&lt;body&gt;</code> y por qué el orden y el anidamiento correcto importan.
          Entender bien esta estructura es la base sobre la que construiremos el resto del bloque de HTML.
        </p>

        <LessonSection title="El doctype: <!DOCTYPE html>">
          <p>
            La primera línea de cualquier documento HTML moderno es siempre esta declaración:
          </p>
          <CodeBlock language="xml" code={`<!DOCTYPE html>`} />
          <p>
            No es una etiqueta HTML en sí misma, sino una instrucción para el navegador: le dice "interpreta
            este documento como HTML5". Sin ella, algunos navegadores podrían activar un modo de
            compatibilidad con versiones muy antiguas de HTML y renderizar la página de forma inconsistente.
          </p>
          <InfoBox type="tip" title="Siempre igual, sin excepciones">
            A diferencia de versiones antiguas de HTML (donde el doctype era una línea larga y complicada),
            en HTML5 siempre se escribe exactamente así: <code>&lt;!DOCTYPE html&gt;</code>. No hace falta
            memorizar nada más.
          </InfoBox>
        </LessonSection>

        <LessonSection title="El elemento raíz: <html>">
          <p>
            Justo después del doctype va el elemento <code>&lt;html&gt;</code>, que actúa como contenedor
            de todo el documento: dentro de él van <code>&lt;head&gt;</code> y <code>&lt;body&gt;</code>, y
            fuera de él no debería haber ningún otro contenido.
          </p>
          <CodeBlock language="xml" code={`<html lang="es">
  <!-- aquí dentro va todo -->
</html>`} />
          <p>
            El atributo <code>lang</code> indica el idioma principal del documento. No es solo un detalle
            estético: los lectores de pantalla lo usan para elegir la pronunciación correcta, y los
            buscadores lo usan para mostrar la página al público adecuado.
          </p>
        </LessonSection>

        <LessonSection title="La sección <head>: metadatos invisibles">
          <p>
            Dentro de <code>&lt;head&gt;</code> va información <strong>sobre</strong> la página, no
            contenido que el usuario vea directamente. Los elementos más habituales son:
          </p>
          <ul>
            <li><code>&lt;meta charset="UTF-8" /&gt;</code>: define la codificación de caracteres. Con UTF-8 evitas problemas con tildes y la ñ.</li>
            <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code>: indispensable para que la página se vea bien en móvil (lo retomaremos en la lección de diseño responsivo).</li>
            <li><code>&lt;title&gt;</code>: el texto que aparece en la pestaña del navegador.</li>
            <li><code>&lt;link&gt;</code>: enlaza recursos externos, como una hoja de estilos CSS.</li>
          </ul>
          <CodeBlock
            language="xml"
            code={`<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi página</title>
  <link rel="stylesheet" href="estilos.css" />
</head>`}
          />
        </LessonSection>

        <LessonSection title="La sección <body>: el contenido visible">
          <p>
            Todo lo que el usuario ve y con lo que interactúa va dentro de <code>&lt;body&gt;</code>:
            textos, imágenes, enlaces, formularios, botones... En la siguiente lección veremos en detalle
            las etiquetas más habituales que se usan aquí dentro.
          </p>
          <CodeBlock
            language="xml"
            code={`<body>
  <h1>Bienvenido</h1>
  <p>Este es el contenido visible de la página.</p>
</body>`}
          />
        </LessonSection>

        <LessonSection title="La plantilla completa">
          <p>Uniendo todas las piezas, así queda un documento HTML mínimo y bien formado:</p>
          <CodeBlock
            language="xml"
            code={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi página</title>
</head>
<body>
  <h1>Bienvenido</h1>
  <p>Este es el contenido visible de la página.</p>
</body>
</html>`}
          />
          <InfoBox type="warning" title="El orden importa">
            <code>&lt;head&gt;</code> siempre va completo antes que <code>&lt;body&gt;</code>, y ambos
            deben estar dentro de <code>&lt;html&gt;</code>. Nunca coloques contenido visible (como un{' '}
            <code>&lt;p&gt;</code>) directamente dentro de <code>&lt;head&gt;</code>: no se mostrará como
            esperas.
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
