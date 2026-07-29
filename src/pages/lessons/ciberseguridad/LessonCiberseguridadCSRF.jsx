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

export function LessonCiberseguridadCSRF() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'CSRF (Cross-Site Request Forgery)';

  const keyPoints = [
    'CSRF engaña al navegador de una víctima autenticada para que envíe, sin que ella lo sepa, una petición no deseada a una web en la que tiene sesión abierta',
    'El ataque funciona porque el navegador adjunta automáticamente las cookies de sesión a cualquier petición hacia ese dominio, sin importar desde qué página se originó',
    'Es especialmente relevante en autenticación basada en cookies de sesión; menos (aunque no totalmente inmune) en esquemas donde el token viaja en una cabecera que el atacante no puede fijar',
    'La cookie SameSite (con valores Lax o Strict) es la mitigación más directa: le dice al navegador que no envíe esa cookie en peticiones que vienen de otro sitio',
    'El patrón de token CSRF (synchronizer token) añade una segunda capa: un valor secreto, ligado a la sesión, que el atacante no puede adivinar ni fijar desde fuera',
    'Ambas mitigaciones se combinan en la práctica: SameSite como primera barrera y un token CSRF como defensa adicional para las peticiones que modifican estado'
  ];

  const exercises = [
    {
      title: 'Diagnostica el escenario',
      description:
        'Una aplicación de banca online mantiene la sesión del usuario en una cookie, sin la cabecera SameSite configurada, y tiene un endpoint POST /transferencias que no comprueba ningún token adicional. Explica, paso a paso, cómo un atacante podría explotar CSRF en este endpoint.',
      solution: `1. La víctima inicia sesión en el banco; el navegador guarda la
cookie de sesión para ese dominio.

2. Sin cerrar sesión, la víctima visita (en otra pestaña) una página
controlada por el atacante.

3. Esa página contiene un formulario oculto que apunta a
POST https://banco.com/transferencias, con los campos "destino" y
"cantidad" ya rellenados con los datos del atacante, y un script
que envía el formulario automáticamente al cargar la página.

4. Como no hay SameSite configurado, el navegador adjunta igualmente
la cookie de sesión del banco a esa petición, aunque se origine
desde la página del atacante.

5. El backend del banco solo comprueba que la cookie de sesión es
válida (que la víctima está autenticada), no de dónde vino la
petición ni si incluye un token CSRF, así que procesa la
transferencia como si la hubiera pedido la propia víctima.`
    },
    {
      title: 'Añade protección CSRF a una ruta',
      description:
        'Añade el middleware de verificación de token CSRF (visto en la lección) a la siguiente ruta de cambio de contraseña, que actualmente no tiene ninguna protección frente a CSRF.',
      solution: `// Antes:
router.post('/cambiar-password', verificarToken, async (req, res) => {
  // ... lógica para cambiar la contraseña
});

// Después, añadiendo el middleware de verificación de token CSRF:
router.post(
  '/cambiar-password',
  verificarToken,       // autenticación: ¿quién eres?
  verificarTokenCSRF,   // protección CSRF: ¿esta petición viene realmente de tu formulario?
  async (req, res) => {
    // ... lógica para cambiar la contraseña
  }
);`
    }
  ];

  const summary = `CSRF aprovecha que el navegador envía automáticamente las cookies de sesión a cualquier petición hacia un dominio, sin importar desde qué página se originó:

• El atacante consigue que el navegador de una víctima ya autenticada envíe una petición no deseada (por ejemplo, un formulario oculto que se autoenvía) a una web donde tiene sesión abierta
• La cookie SameSite (Lax o Strict) es la primera línea de defensa: evita que el navegador adjunte la cookie de sesión en peticiones que vienen de otro origen
• El patrón de token CSRF añade una segunda capa: un valor ligado a la sesión que el atacante no puede conocer ni fijar desde fuera, y que se verifica en cada petición que modifica estado
• En Express no viene protección CSRF activada por defecto: se implementa con un middleware propio o con una librería específica para ello
• Ambas defensas se combinan en la práctica: SameSite como barrera general del navegador y tokens CSRF como verificación explícita en el servidor`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es el ataque CSRF (Cross-Site Request Forgery) y cómo proteger tus formularios y endpoints"
        breadcrumbs={breadcrumbs}
        seoTitle="CSRF (Cross-Site Request Forgery) | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Aprende qué es el ataque CSRF (Cross-Site Request Forgery), cómo funciona y las técnicas para prevenirlo: tokens CSRF, SameSite cookies y verificación de origen."
        seoKeywords="csrf, cross site request forgery, ataque csrf, token csrf"
        url="https://fullstackdevlovers.com/ciberseguridad/owasp/csrf-cross-site-request-forgery"
      >
        <p>
          Las dos lecciones anteriores trataban sobre inyectar código: en la base de datos (SQL) o en el
          navegador de otro usuario (XSS). El <strong>CSRF (Cross-Site Request Forgery)</strong> es distinto:
          no inyecta nada, sino que <strong>abusa de la confianza</strong> que un sitio tiene en la sesión ya
          autenticada de un usuario, para hacerle enviar, sin que se entere, una petición que no quería
          enviar.
        </p>

        <LessonSection title="¿Qué es CSRF?">
          <p>
            <strong>Cross-Site Request Forgery</strong> (falsificación de petición en sitios cruzados) es un
            ataque en el que se engaña al navegador de una víctima, que tiene una sesión ya autenticada en
            una web, para que envíe una petición no autorizada a esa misma web, sin que la víctima lo sepa ni
            lo consienta.
          </p>
          <p>
            La clave del ataque es que <strong>no hace falta robar nada</strong>: ni la contraseña, ni el
            token de sesión. Solo hace falta que la víctima tenga la sesión abierta y visite, aunque sea sin
            darse cuenta, una página controlada por el atacante mientras esa sesión sigue activa.
          </p>
        </LessonSection>

        <LessonSection title="Cómo funciona el ataque">
          <p>
            El ataque se apoya en un comportamiento normal (y necesario) de los navegadores: cuando envías
            una petición a un dominio, el navegador adjunta automáticamente las cookies asociadas a ese
            dominio, <strong>sin importar desde qué página se originó la petición</strong>.
          </p>
          <p>Un ejemplo típico, paso a paso:</p>
          <ul>
            <li>La víctima inicia sesión en <code>banco.com</code>, que guarda la sesión en una cookie.</li>
            <li>
              Sin cerrar sesión, la víctima visita (por ejemplo, siguiendo un enlace en un email o en otra
              web) una página controlada por el atacante.
            </li>
            <li>
              Esa página contiene un formulario oculto, dirigido a <code>banco.com</code>, que se envía
              automáticamente mediante JavaScript en cuanto la página carga.
            </li>
          </ul>
          <CodeBlock
            language="xml"
            title="pagina-maliciosa.html (alojada en otro dominio)"
            code={`<form id="formularioAtaque" action="https://banco.com/api/transferencias" method="POST">
  <input type="hidden" name="destino" value="cuenta-del-atacante" />
  <input type="hidden" name="cantidad" value="1000" />
</form>
<script>
  document.getElementById('formularioAtaque').submit();
</script>`}
          />
          <p>
            El navegador de la víctima envía esa petición <code>POST</code> a <code>banco.com</code> y, como
            de costumbre, adjunta la cookie de sesión de ese dominio. Si el backend solo comprueba que la
            sesión es válida (que hay un usuario autenticado) pero no verifica <strong>de dónde</strong> vino
            realmente esa petición, la procesa como si la víctima la hubiera enviado voluntariamente desde su
            propio formulario.
          </p>
          <InfoBox type="warning" title="Estar autenticado no es lo mismo que haberlo pedido tú">
            El servidor ve una petición con una cookie de sesión perfectamente válida. Lo que no puede ver,
            si no se protege explícitamente, es que esa petición no la generó ningún formulario legítimo de
            su propia aplicación.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Mitigación 1: cookies SameSite">
          <p>
            El atributo <code>SameSite</code> de una cookie le indica al navegador en qué condiciones debe
            enviarla cuando la petición se origina desde otro sitio distinto al que la creó:
          </p>
          <ul>
            <li>
              <code>Strict</code>: la cookie nunca se envía en peticiones que vienen de otro sitio, ni
              siquiera al navegar a través de un enlace normal.
            </li>
            <li>
              <code>Lax</code>: la cookie se envía en navegación normal entre sitios (seguir un enlace), pero
              no en peticiones "silenciosas" como el envío automático de un formulario o una petición hecha
              por JavaScript desde otro origen. Es el valor recomendado para la mayoría de casos, porque
              equilibra seguridad y usabilidad.
            </li>
            <li>
              <code>None</code>: la cookie se envía siempre, incluso en peticiones de otros sitios; requiere
              además el atributo <code>Secure</code> (solo HTTPS). Es el comportamiento equivalente a no
              tener protección SameSite.
            </li>
          </ul>
          <CodeBlock
            language="javascript"
            title="app.js (configuración de sesión con express-session)"
            code={`const session = require('express-session');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,     // solo se envía la cookie por HTTPS
      sameSite: 'lax'   // no se envía en peticiones "de fondo" originadas en otro sitio
    }
  })
);`}
          />
          <InfoBox type="tip">
            <code>SameSite</code> por sí solo ya bloquea buena parte de los ataques CSRF típicos, pero no
            todos los navegadores lo aplican igual en todos los escenarios {/* TODO-verificar: comportamiento exacto y soporte por navegador de SameSite */}.
            Por eso se recomienda combinarlo con una segunda capa de protección explícita en el servidor.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Mitigación 2: token CSRF (synchronizer token)">
          <p>
            La segunda capa consiste en exigir, en cada petición que modifica estado (<code>POST</code>,{' '}
            <code>PUT</code>, <code>DELETE</code>...), un valor adicional que el atacante no puede conocer ni
            fijar desde fuera: un <strong>token CSRF</strong>, generado por el servidor y ligado a la sesión
            del usuario.
          </p>
          <p>
            Express no incluye esta protección activada por defecto. Un patrón típico, usando{' '}
            <code>express-session</code> para guardar el token junto a la sesión, es el siguiente:
          </p>
          <CodeBlock
            language="javascript"
            title="middleware/csrf.js"
            code={`const crypto = require('crypto');

// Genera un token CSRF si la sesión todavía no tiene uno, y lo deja
// disponible para las vistas (por ejemplo, para incluirlo en un formulario)
function generarTokenCSRF(req, res, next) {
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(32).toString('hex');
  }
  res.locals.csrfToken = req.session.csrfToken;
  next();
}

// Verifica que el token recibido coincide con el guardado en la sesión
function verificarTokenCSRF(req, res, next) {
  const tokenRecibido = req.body._csrf || req.headers['x-csrf-token'];

  if (!tokenRecibido || tokenRecibido !== req.session.csrfToken) {
    return res.status(403).json({ error: 'Token CSRF inválido o ausente' });
  }

  next();
}

module.exports = { generarTokenCSRF, verificarTokenCSRF };`}
          />
          <CodeBlock
            language="javascript"
            title="routes/transferencias.js"
            code={`const { generarTokenCSRF, verificarTokenCSRF } = require('../middleware/csrf');

// GET: se genera (o reutiliza) el token y se envía al formulario
router.get('/transferencias/nueva', generarTokenCSRF, (req, res) => {
  res.json({ csrfToken: res.locals.csrfToken });
});

// POST: se exige que el token viaje en la petición y coincida con el de la sesión
router.post('/transferencias', verificarTokenCSRF, async (req, res) => {
  // ... lógica de la transferencia, ya con la petición verificada
});`}
          />
          <p>
            La página atacante del ejemplo anterior no tiene forma de conocer el valor de{' '}
            <code>req.session.csrfToken</code> de la víctima (es un valor aleatorio, distinto para cada
            sesión), así que no puede incluirlo en su formulario oculto. Sin ese token, la petición falsa es
            rechazada con un <code>403</code>.
          </p>
          <InfoBox type="info" title="Existen librerías dedicadas a esto">
            Este patrón (conocido como <em>synchronizer token pattern</em>) se puede implementar a mano, como
            en el ejemplo, o apoyarte en librerías especializadas del ecosistema Express{' '}
            {/* TODO-verificar: qué librería de protección CSRF está actualmente recomendada y mantenida para Express, ya que algunas opciones históricas han quedado obsoletas */}.
            Conviene revisar la documentación oficial de Express sobre seguridad antes de elegir una en un
            proyecto real.
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
