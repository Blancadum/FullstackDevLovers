import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonHTMLFormularios() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Todo formulario se envuelve en <form>, con los atributos action (a dónde se envían los datos) y method (GET o POST)',
    '<input> es el campo más versátil: su atributo type cambia por completo su comportamiento (text, email, password, checkbox...)',
    '<label> asociado a un campo mediante for/id mejora mucho la accesibilidad y la usabilidad',
    'El atributo name de cada campo es el que se usa como clave al enviar los datos al servidor',
    '<textarea> es para texto largo, <select> con <option> es para listas desplegables',
    'Un botón type="submit" envía el formulario; type="button" no hace nada por sí solo, necesita JavaScript',
  ];

  const exercises = [
    {
      title: 'Formulario de contacto',
      description:
        'Crea un formulario con: campo de nombre (texto), campo de email, un textarea para el mensaje, y un botón de envío. Todos los campos deben tener su label correctamente asociado.',
      solution: `<form action="/contacto" method="POST">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" />

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="mensaje"></textarea>

  <button type="submit">Enviar</button>
</form>`,
    },
    {
      title: 'Selector de talla',
      description:
        'Añade al formulario anterior un <select> llamado "talla" con tres opciones: S, M y L, donde M sea la opción seleccionada por defecto.',
      solution: `<label for="talla">Talla</label>
<select id="talla" name="talla">
  <option value="S">S</option>
  <option value="M" selected>M</option>
  <option value="L">L</option>
</select>`,
    },
  ];

  const summary = `Los formularios son la forma estándar de HTML para capturar datos del usuario:

• <form action="..." method="..."> envuelve todo el formulario y define a dónde y cómo se envían los datos.
• <input type="..."> es el campo más flexible: text, email, password, number, checkbox, radio, date...
• <label for="id"> asociado al id del campo mejora accesibilidad y usabilidad (clic en el texto activa el campo).
• <textarea> para texto largo y <select>/<option> para listas desplegables.
• El atributo name identifica cada campo cuando el formulario se envía al servidor.

En la siguiente lección veremos cómo HTML puede validar estos campos de forma nativa, sin necesitar
JavaScript, usando atributos como required o pattern.`;

  return (
    <>
      <LessonLayout
        title="Formularios HTML"
        description="Cómo construir formularios para capturar datos del usuario"
        breadcrumbs={breadcrumbs}
        seoTitle="Formularios HTML - Guía Completa | Fullstack Dev Lovers"
        seoDescription="Aprende a crear formularios HTML con inputs, labels y botones para capturar datos del usuario."
        seoKeywords="html, formularios, forms, inputs"
        url="https://fullstackdevlovers.com/frontend/html/formularios"
      >
        <p>
          Casi toda aplicación web necesita, en algún momento, pedirle datos al usuario: un login, un
          registro, un formulario de contacto, un buscador... En esta lección aprenderás las etiquetas
          HTML necesarias para construir formularios completos y accesibles, sin necesidad todavía de
          JavaScript.
        </p>

        <LessonSection title="La etiqueta <form>">
          <p>
            Un formulario se envuelve siempre en la etiqueta <code>&lt;form&gt;</code>, que agrupa todos
            los campos y define cómo se envían los datos mediante dos atributos:
          </p>
          <ul>
            <li><code>action</code>: la URL a la que se envían los datos.</li>
            <li><code>method</code>: el método HTTP usado, normalmente <code>GET</code> (datos visibles en la URL, para búsquedas) o <code>POST</code> (datos ocultos en el cuerpo de la petición, para envíos con información sensible o extensa).</li>
          </ul>
          <CodeBlock
            language="xml"
            code={`<form action="/enviar-formulario" method="POST">
  <!-- aquí van los campos -->
</form>`}
          />
          <p>
            La diferencia exacta entre GET y POST en cuanto a cómo el navegador y
            el servidor procesan cada petición se cubrirá con más detalle en el bloque de backend.
          </p>
        </LessonSection>

        <LessonSection title="El campo más versátil: <input>">
          <p>
            <code>&lt;input&gt;</code> es un elemento vacío (sin etiqueta de cierre) cuyo comportamiento
            cambia por completo según su atributo <code>type</code>:
          </p>
          <CodeBlock
            language="xml"
            code={`<input type="text" name="usuario" />
<input type="email" name="email" />
<input type="password" name="clave" />
<input type="number" name="edad" />
<input type="checkbox" name="acepto" />
<input type="radio" name="genero" value="femenino" />
<input type="date" name="nacimiento" />`}
          />
          <p>
            El atributo <code>name</code> es el que identifica cada campo cuando el formulario se envía: es
            la clave con la que el servidor recibirá el valor introducido por el usuario.
          </p>
        </LessonSection>

        <LessonSection title="Etiquetar los campos: <label>">
          <p>
            Cada campo debería tener asociada una etiqueta descriptiva mediante <code>&lt;label&gt;</code>.
            La forma correcta de asociarlos es que el atributo <code>for</code> del label coincida con el{' '}
            <code>id</code> del input:
          </p>
          <CodeBlock
            language="xml"
            code={`<label for="usuario">Nombre de usuario</label>
<input type="text" id="usuario" name="usuario" />`}
          />
          <InfoBox type="important" title="Por qué importa el for/id">
            Cuando <code>label</code> está bien asociado, hacer clic en el texto de la etiqueta activa
            automáticamente el campo (muy útil en checkboxes y radios en móvil), y los lectores de pantalla
            anuncian correctamente qué campo es cada uno.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Texto largo y listas desplegables">
          <p>
            Para texto de varias líneas se usa <code>&lt;textarea&gt;</code> en lugar de{' '}
            <code>&lt;input&gt;</code>. Para listas desplegables se usa <code>&lt;select&gt;</code>, con
            una etiqueta <code>&lt;option&gt;</code> por cada opción disponible.
          </p>
          <CodeBlock
            language="xml"
            code={`<label for="comentario">Comentario</label>
<textarea id="comentario" name="comentario" rows="4"></textarea>

<label for="pais">País</label>
<select id="pais" name="pais">
  <option value="es">España</option>
  <option value="mx">México</option>
  <option value="ar">Argentina</option>
</select>`}
          />
        </LessonSection>

        <LessonSection title="Botones: submit vs button">
          <p>
            Dentro de un formulario, un botón de tipo <code>submit</code> envía automáticamente todos los
            datos del formulario. Un botón de tipo <code>button</code>, en cambio, no hace nada por sí
            solo: necesitaría JavaScript para cobrar vida.
          </p>
          <CodeBlock
            language="xml"
            code={`<button type="submit">Enviar</button>
<button type="button">Este botón, de momento, no hace nada</button>`}
          />
        </LessonSection>

        <LessonSection title="Formulario completo de ejemplo">
          <CodeBlock
            language="xml"
            code={`<form action="/registro" method="POST">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" />

  <label for="clave">Contraseña</label>
  <input type="password" id="clave" name="clave" />

  <label for="pais">País</label>
  <select id="pais" name="pais">
    <option value="es">España</option>
    <option value="mx">México</option>
  </select>

  <label for="bio">Cuéntanos algo de ti</label>
  <textarea id="bio" name="bio" rows="4"></textarea>

  <button type="submit">Registrarme</button>
</form>`}
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
