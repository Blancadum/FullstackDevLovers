import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonBootstrapBotonesFormularios() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Los botones se construyen con btn + una variante de color (btn-primary, btn-danger...)',
    'btn-outline-* da la versión "solo borde" de cada color, útil para acciones secundarias',
    'Los tamaños se controlan con btn-lg y btn-sm; sin ninguna, el botón usa el tamaño por defecto',
    'Los campos de formulario usan form-control (inputs/textarea) o form-select (selects)',
    'form-label asocia visualmente la etiqueta al campo; usa siempre el atributo for/id para accesibilidad',
    'form-check se usa para checkboxes y radios, con form-check-input y form-check-label',
    'is-valid / is-invalid junto con los textos de feedback permiten mostrar validación visual',
  ];

  const exercises = [
    {
      title: 'Grupo de botones de acción',
      description:
        'Crea tres botones: uno primario ("Guardar"), uno secundario en outline ("Cancelar") y uno de peligro ("Eliminar").',
      solution: `<button type="button" class="btn btn-primary">Guardar</button>
<button type="button" class="btn btn-outline-secondary">Cancelar</button>
<button type="button" class="btn btn-danger">Eliminar</button>`,
    },
    {
      title: 'Formulario de contacto',
      description:
        'Construye un formulario con un campo de texto para el nombre, un campo de email, un textarea para el mensaje y un botón de envío. Usa las clases mb-3 para separar los grupos.',
      solution: `<form>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" required />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required />
  </div>
  <div class="mb-3">
    <label for="mensaje" class="form-label">Mensaje</label>
    <textarea class="form-control" id="mensaje" rows="4"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>`,
    },
  ];

  const summary = `Bootstrap facilita la construcción de botones y formularios consistentes con muy pocas clases:

• Botones: btn + variante de color (btn-primary, btn-danger, btn-outline-*) + tamaño opcional (btn-lg, btn-sm).
• Formularios: form-control para inputs y textarea, form-select para selects, form-label para etiquetas.
• Checkboxes y radios: form-check, form-check-input y form-check-label, siempre asociados por id/for.
• Validación visual: is-valid / is-invalid junto con valid-feedback / invalid-feedback muestran al usuario si un campo es correcto.

Con esto ya puedes construir formularios accesibles y con buen aspecto sin escribir una línea de CSS propio. En la siguiente lección veremos cómo montar navbars y menús de navegación.`;

  return (
    <>
      <LessonLayout
        title="Botones y formularios"
        description="Clases de Bootstrap para estilizar botones y construir formularios accesibles"
        breadcrumbs={breadcrumbs}
        seoTitle="Botones y formularios en Bootstrap - Guía Completa"
        seoDescription="Aprende a estilizar botones y formularios con las clases utilitarias de Bootstrap."
        seoKeywords="bootstrap, botones, formularios, forms, ui"
        url="https://fullstackdevlovers.com/frontend/bootstrap/botones-formularios"
      >
        <p>
          Los botones y los formularios son, probablemente, los elementos con los que más va a interactuar
          el usuario en cualquier aplicación. En esta lección vas a aprender las clases de Bootstrap para
          estilizarlos de forma consistente y accesible, desde un botón simple hasta un formulario completo
          con validación.
        </p>

        <LessonSection title="Botones: btn + variante">
          <p>
            Todo botón de Bootstrap combina la clase base <code>btn</code> con una clase de variante que
            define su color y significado.
          </p>
          <CodeBlock
            language="xml"
            code={`<button type="button" class="btn btn-primary">Primario</button>
<button type="button" class="btn btn-secondary">Secundario</button>
<button type="button" class="btn btn-success">Éxito</button>
<button type="button" class="btn btn-danger">Peligro</button>
<button type="button" class="btn btn-warning">Aviso</button>`}
          />
          <p>
            La variante <code>outline</code> ofrece la versión "solo borde" de cada color, muy usada para
            acciones secundarias:
          </p>
          <CodeBlock
            language="xml"
            code={`<button type="button" class="btn btn-outline-primary">Ver detalles</button>
<button type="button" class="btn btn-outline-danger">Cancelar</button>`}
          />
          <p>Y puedes controlar el tamaño con <code>btn-lg</code> o <code>btn-sm</code>:</p>
          <CodeBlock
            language="xml"
            code={`<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-sm">Pequeño</button>`}
          />
        </LessonSection>

        <LessonSection title="Campos de formulario: form-control y form-select">
          <p>
            Los campos de texto, email, número, etc. usan la clase <code>form-control</code>. Los{' '}
            <code>&lt;select&gt;</code> usan <code>form-select</code>.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="mb-3">
  <label for="email" class="form-label">Correo electrónico</label>
  <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com" />
</div>

<div class="mb-3">
  <label for="pais" class="form-label">País</label>
  <select class="form-select" id="pais">
    <option selected>Elige un país</option>
    <option value="es">España</option>
    <option value="mx">México</option>
  </select>
</div>`}
          />
        </LessonSection>

        <LessonSection title="Checkboxes y radios: form-check">
          <CodeBlock
            language="xml"
            code={`<div class="form-check">
  <input class="form-check-input" type="checkbox" id="acepto" />
  <label class="form-check-label" for="acepto">
    Acepto los términos y condiciones
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="plan" id="planBasico" />
  <label class="form-check-label" for="planBasico">Plan básico</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="plan" id="planPro" />
  <label class="form-check-label" for="planPro">Plan pro</label>
</div>`}
          />
          <InfoBox type="tip" title="Accesibilidad: for + id">
            El atributo <code>for</code> de la etiqueta debe coincidir con el <code>id</code> del campo.
            Así, al pulsar sobre la etiqueta, el navegador activa el campo asociado, y los lectores de
            pantalla anuncian correctamente la relación entre ambos.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Validación visual">
          <p>
            Bootstrap incluye clases para mostrar si un campo es válido o inválido, junto con un mensaje de
            ayuda.
          </p>
          <CodeBlock
            language="xml"
            code={`<div class="mb-3">
  <label for="usuario" class="form-label">Usuario</label>
  <input type="text" class="form-control is-invalid" id="usuario" />
  <div class="invalid-feedback">El nombre de usuario ya existe.</div>
</div>

<div class="mb-3">
  <label for="usuario2" class="form-label">Usuario</label>
  <input type="text" class="form-control is-valid" id="usuario2" />
  <div class="valid-feedback">¡Usuario disponible!</div>
</div>`}
          />
          <p>
            Estas clases se pueden aplicar manualmente (como en el ejemplo) o de forma dinámica con
            JavaScript, tras validar el formulario en tu aplicación.
          </p>
          <p>
            Bootstrap también ofrece un patrón de validación nativa del navegador: añades el atributo{' '}
            <code>novalidate</code> al <code>&lt;form&gt;</code> (para desactivar los mensajes por defecto
            del navegador) y, cuando el usuario intenta enviarlo, tu JavaScript añade la clase{' '}
            <code>was-validated</code> al formulario. A partir de ahí, Bootstrap aplica automáticamente los
            estilos <code>is-valid</code>/<code>is-invalid</code> según las reglas HTML5 de cada campo
            (<code>required</code>, <code>type="email"</code>, <code>pattern</code>...), sin que tengas que
            añadir esas clases a mano.
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
