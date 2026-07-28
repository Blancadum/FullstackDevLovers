import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonHTMLIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'HTML (HyperText Markup Language) es un lenguaje de marcado, no un lenguaje de programación: describe estructura y contenido, no lógica',
    'Todo elemento HTML se escribe con etiquetas: normalmente una de apertura y otra de cierre, envolviendo el contenido',
    'El trío HTML + CSS + JavaScript es la base del frontend web: estructura, presentación y comportamiento',
    'Un archivo HTML es texto plano con extensión .html que cualquier navegador puede interpretar y mostrar',
    'El navegador lee el HTML de arriba a abajo y construye con él una estructura en memoria llamada DOM',
  ];

  const exercises = [
    {
      title: 'Tu primer archivo HTML',
      description:
        'Crea un archivo llamado index.html, escribe dentro un documento HTML mínimo con un título de página y un párrafo que diga "Hola, mundo". Ábrelo con el navegador haciendo doble clic sobre el archivo.',
      solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi primera página</title>
</head>
<body>
  <p>Hola, mundo</p>
</body>
</html>`,
    },
    {
      title: 'Identifica las partes',
      description:
        'En el archivo anterior, señala (por escrito, con tus propias palabras) qué parte es la etiqueta de apertura, cuál es la de cierre y cuál es el contenido del elemento <p>.',
      solution: `Etiqueta de apertura: <p>
Contenido: Hola, mundo
Etiqueta de cierre: </p>

El elemento completo es: <p>Hola, mundo</p>`,
    },
  ];

  const summary = `HTML es el lenguaje de marcado que da estructura y contenido a toda página web:

• No es un lenguaje de programación: no tiene lógica, condicionales ni bucles, solo describe "qué hay" en la página.
• Se escribe con etiquetas (tags), normalmente en pareja: una de apertura y otra de cierre, con el contenido en medio.
• Un archivo .html es texto plano que cualquier navegador sabe interpretar y convertir en una página visual.
• Forma equipo con CSS (presentación) y JavaScript (comportamiento) para construir el frontend de una aplicación web.

En la siguiente lección veremos con detalle la estructura mínima que debe tener todo documento HTML.`;

  return (
    <>
      <LessonLayout
        title="Introducción a HTML"
        description="Qué es HTML, para qué se usa y cómo empezar a escribir tu primer documento web"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a HTML - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende qué es HTML, su papel en el desarrollo web y cómo crear tu primer documento HTML."
        seoKeywords="html, introducción, desarrollo web, frontend"
        url="https://fullstackdevlovers.com/frontend/html/introduccion"
      >
        <p>
          Empezamos por el principio absoluto: qué es HTML, para qué sirve y cómo se ve un archivo HTML
          por dentro. Es la primera pieza de todo el bloque de frontend, así que iremos despacio y sin dar
          nada por hecho. Al terminar esta lección sabrás crear y abrir tu primer documento HTML en el
          navegador, y entenderás qué papel juega HTML dentro del desarrollo web.
        </p>

        <LessonSection title="¿Qué es HTML?">
          <p>
            <strong>HTML</strong> son las siglas de <em>HyperText Markup Language</em> (lenguaje de
            marcado de hipertexto). Es el lenguaje que se usa para describir el <strong>contenido y la
            estructura</strong> de cualquier página web: dónde va un título, dónde va un párrafo, dónde va
            una imagen, dónde empieza un formulario...
          </p>
          <p>
            Es importante dejar clara una idea desde el principio: HTML <strong>no es un lenguaje de
            programación</strong>. No tiene variables, condicionales ni bucles. Es un <strong>lenguaje de
            marcado</strong>: se limita a "marcar" o etiquetar partes del contenido para decirle al
            navegador qué es cada cosa (un título, una lista, un enlace...).
          </p>
        </LessonSection>

        <LessonSection title="HTML dentro del desarrollo web">
          <p>
            En el desarrollo frontend, tres tecnologías trabajan siempre juntas, cada una con una
            responsabilidad distinta:
          </p>
          <ul>
            <li><strong>HTML</strong>: estructura y contenido. El "esqueleto" de la página.</li>
            <li><strong>CSS</strong>: presentación visual. Colores, tamaños, posiciones, layout.</li>
            <li><strong>JavaScript</strong>: comportamiento e interactividad. Qué pasa cuando el usuario hace clic, escribe, envía un formulario...</li>
          </ul>
          <InfoBox type="tip" title="Una analogía útil">
            Piensa en una casa: HTML son los ladrillos y las paredes (la estructura), CSS es la pintura,
            los muebles y la decoración (la presentación), y JavaScript es la electricidad y las puertas
            automáticas (el comportamiento). En esta plataforma veremos CSS justo después de terminar este
            bloque de HTML.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Tu primer documento HTML">
          <p>
            Un archivo HTML es, sencillamente, un archivo de texto plano guardado con la extensión{' '}
            <code>.html</code>. No necesitas ningún programa especial para crearlo: basta un editor de
            texto (por ejemplo, Visual Studio Code) y un navegador para verlo.
          </p>
          <CodeBlock
            language="xml"
            code={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi primera página</title>
</head>
<body>
  <p>Hola, mundo</p>
</body>
</html>`}
          />
          <p>
            No te preocupes todavía por entender cada línea: en la siguiente lección (
            <strong>Estructura básica de un documento</strong>) desmontamos esta plantilla pieza por pieza.
            Por ahora quédate con la idea general: es texto con etiquetas, y el navegador sabe leerlo.
          </p>
          <InfoBox type="info" title="Cómo verlo en el navegador">
            Guarda el archivo como <code>index.html</code> y haz doble clic sobre él: se abrirá
            automáticamente en tu navegador por defecto, mostrando el texto "Hola, mundo". Cada vez que
            modifiques el archivo y lo guardes, solo tienes que recargar la pestaña del navegador para ver
            los cambios.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Qué hace el navegador con tu HTML">
          <p>
            Cuando abres un archivo HTML, el navegador lo lee de arriba a abajo y va construyendo, en
            memoria, una representación de la página llamada <strong>DOM</strong> (Document Object Model).
            Ese DOM es lo que finalmente se pinta en pantalla, y es también lo que CSS decorará y
            JavaScript podrá modificar dinámicamente más adelante.
          </p>
          <p>
            De momento no necesitas manipular el DOM ni saber cómo funciona por dentro: solo entender que
            el HTML que escribes es la "materia prima" que el navegador transforma en la página que ve el
            usuario.
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
