import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonHTMLValidacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'required impide enviar el formulario si el campo está vacío',
    'Los type especializados (email, url, number, tel...) validan automáticamente el formato sin escribir una sola línea de JavaScript',
    'pattern permite definir una expresión regular personalizada que el valor del campo debe cumplir',
    'minlength, maxlength, min y max acotan la longitud o el rango numérico permitido',
    'La validación nativa de HTML es una primera barrera para el usuario, pero nunca sustituye a la validación en el servidor',
  ];

  const exercises = [
    {
      title: 'Formulario de registro validado',
      description:
        'Reescribe un campo de email y uno de contraseña añadiendo validación nativa: el email debe ser obligatorio y de tipo email; la contraseña debe ser obligatoria, de tipo password y tener al menos 8 caracteres.',
      solution: `<label for="email">Email</label>
<input type="email" id="email" name="email" required />

<label for="clave">Contraseña</label>
<input type="password" id="clave" name="clave" required minlength="8" />`,
    },
    {
      title: 'Validar un código postal con pattern',
      description:
        'Crea un campo de texto para un código postal español, que debe consistir exactamente en 5 dígitos numéricos.',
      solution: `<label for="cp">Código postal</label>
<input
  type="text"
  id="cp"
  name="cp"
  pattern="[0-9]{5}"
  title="Introduce 5 dígitos numéricos"
  required
/>`,
    },
  ];

  const summary = `HTML incluye un sistema de validación nativo, sin necesidad de JavaScript, basado en atributos:

• required: el campo es obligatorio.
• type="email" / type="url" / type="number"...: valida automáticamente el formato del valor.
• pattern="regex": exige que el valor cumpla una expresión regular concreta.
• minlength / maxlength: acotan la longitud del texto permitido.
• min / max / step: acotan valores numéricos y de fecha.

Esta validación mejora la experiencia de usuario dando feedback inmediato, pero nunca es suficiente por
sí sola: cualquier dato que llegue al servidor debe volver a validarse ahí, porque la validación del
navegador puede saltarse fácilmente (formularios manipulados, peticiones directas a la API...). Con esto
cerramos el bloque de HTML: a partir de la siguiente lección empezamos con CSS para dar estilo a todo lo
que hemos construido.`;

  return (
    <>
      <LessonLayout
        title="Validación de formularios"
        description="Validación nativa de formularios HTML con atributos y expresiones"
        breadcrumbs={breadcrumbs}
        seoTitle="Validación de formularios HTML - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende a validar formularios HTML con atributos nativos como required, pattern y type."
        seoKeywords="html, validacion, formularios, required, pattern"
        url="https://fullstackdevlovers.com/frontend/html/validacion"
      >
        <p>
          En la lección anterior construimos formularios que aceptan cualquier dato, sin comprobar si es
          correcto. HTML incluye, desde hace años, un sistema de validación nativo que evita enviar
          formularios incompletos o mal formateados sin necesitar ni una sola línea de JavaScript. Cerramos
          con esta lección el bloque de HTML.
        </p>

        <LessonSection title="El atributo required">
          <p>
            El atributo <code>required</code> convierte un campo en obligatorio: el navegador impedirá
            enviar el formulario si ese campo está vacío, y mostrará un mensaje de aviso nativo.
          </p>
          <CodeBlock
            language="xml"
            code={`<label for="nombre">Nombre</label>
<input type="text" id="nombre" name="nombre" required />`}
          />
        </LessonSection>

        <LessonSection title="Tipos de input con validación automática">
          <p>
            Ya vimos en la lección de formularios que <code>type</code> cambia el comportamiento del
            campo. Muchos de esos tipos además <strong>validan automáticamente el formato</strong> del
            valor introducido, sin código adicional:
          </p>
          <ul>
            <li><code>type="email"</code>: exige un formato de correo válido (algo@algo.algo).</li>
            <li><code>type="url"</code>: exige una URL con formato válido.</li>
            <li><code>type="number"</code>: solo acepta valores numéricos, y admite <code>min</code>, <code>max</code> y <code>step</code>.</li>
            <li><code>type="tel"</code>: pensado para teléfonos (no valida un formato concreto por sí solo, pero en móvil abre el teclado numérico).</li>
          </ul>
          <CodeBlock
            language="xml"
            code={`<input type="email" name="email" required />
<input type="number" name="edad" min="0" max="120" />
<input type="url" name="web" />`}
          />
        </LessonSection>

        <LessonSection title="pattern: validación con expresiones regulares">
          <p>
            Cuando ningún <code>type</code> encaja con lo que necesitas validar, el atributo{' '}
            <code>pattern</code> te permite definir tu propia expresión regular. El valor del campo debe
            coincidir completamente con el patrón para considerarse válido.
          </p>
          <CodeBlock
            language="xml"
            code={`<label for="cp">Código postal</label>
<input
  type="text"
  id="cp"
  name="cp"
  pattern="[0-9]{5}"
  title="Introduce 5 dígitos numéricos"
/>`}
          />
          <InfoBox type="tip" title="El atributo title como ayuda">
            El texto del atributo <code>title</code> se muestra en el mensaje de error nativo cuando el
            patrón no se cumple. Úsalo siempre junto a <code>pattern</code> para explicar qué formato
            espera el campo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Acotar longitud y rangos">
          <p>
            Además de <code>pattern</code>, hay atributos más simples para acotar longitudes de texto o
            rangos numéricos:
          </p>
          <CodeBlock
            language="xml"
            code={`<!-- Texto: entre 3 y 20 caracteres -->
<input type="text" name="usuario" minlength="3" maxlength="20" />

<!-- Número: entre 1 y 5, de uno en uno -->
<input type="number" name="valoracion" min="1" max="5" step="1" />`}
          />
        </LessonSection>

        <LessonSection title="La validación nativa no es suficiente por sí sola">
          <p>
            Todos estos atributos hacen que el navegador rechace el envío del formulario si algo no
            cumple las reglas, dando al usuario un feedback inmediato. Es una gran mejora de experiencia de
            usuario, pero tiene un límite importante.
          </p>
          <InfoBox type="warning" title="Nunca confíes solo en el navegador">
            Cualquier persona con conocimientos técnicos puede desactivar la validación del navegador,
            modificar el HTML desde las herramientas de desarrollador, o enviar peticiones directamente a
            tu API sin pasar por el formulario. Por eso, todo dato que llegue al servidor debe volver a
            validarse ahí, sin excepción. La validación HTML es solo la primera capa de defensa.
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
