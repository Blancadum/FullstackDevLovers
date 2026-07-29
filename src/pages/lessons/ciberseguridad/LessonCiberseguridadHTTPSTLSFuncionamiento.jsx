import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  Table,
  InfoBox,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonCiberseguridadHTTPSTLSFuncionamiento() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'HTTPS y TLS: cómo funciona';

  const keyPoints = [
    'HTTPS es HTTP transmitido sobre TLS: la misma comunicación, pero cifrada, íntegra y con el servidor autenticado mediante certificado',
    'El TLS handshake es el proceso previo al intercambio de datos en el que cliente y servidor acuerdan cómo van a cifrar la conversación',
    'Un certificado TLS/SSL vincula una clave pública con un dominio, y una CA (Certificate Authority) es quien avala esa vinculación',
    'HSTS obliga al navegador a usar siempre HTTPS con un dominio, incluso si el usuario escribe o hace clic en un enlace con http://',
    'Los códigos de estado HTTP se agrupan en cinco categorías según su primer dígito: 1xx informativos, 2xx éxito, 3xx redirección, 4xx error del cliente y 5xx error del servidor',
    'Elegir el código de estado correcto en una API no es un detalle cosmético: comunica al cliente exactamente qué ha pasado y cómo debe reaccionar'
  ];

  const exercises = [
    {
      title: 'Identifica el código de estado adecuado',
      description:
        'Para cada situación, indica qué código de estado HTTP debería devolver una API REST: (1) Un cliente envía un JSON con un campo obligatorio ausente. (2) Un usuario autenticado intenta borrar un recurso de otro usuario. (3) Se crea un nuevo recurso correctamente. (4) El cliente pide un recurso que existió pero fue borrado permanentemente. (5) El servidor de base de datos no responde y la API no puede completar la petición.',
      solution: `1. 400 Bad Request: la petición está mal formada o le falta un dato obligatorio antes incluso de aplicar ninguna lógica de negocio.
2. 403 Forbidden: el usuario está autenticado (se sabe quién es), pero no tiene permiso para esa acción sobre ese recurso.
3. 201 Created: el recurso se ha creado correctamente; normalmente se acompaña de una cabecera Location con la URL del nuevo recurso.
4. 410 Gone: el recurso existió pero se ha eliminado de forma permanente y no va a volver (a diferencia de 404, que no distingue si nunca existió).
5. 503 Service Unavailable o 502 Bad Gateway, dependiendo de si el propio servidor está sobrecargado/caído (503) o si actúa como intermediario y la dependencia (la base de datos) no responde a través de otro servicio intermedio (502). En muchos casos prácticos, un backend que no puede hablar con su base de datos simplemente devuelve 500 Internal Server Error si no distingue el caso con más detalle.`
    },
    {
      title: 'Explica el propósito del TLS handshake',
      description:
        'En tus propias palabras (sin entrar en fórmulas criptográficas), explica qué logra el TLS handshake antes de que se envíe ningún dato de la aplicación, y por qué eso importa para la seguridad de una API.',
      solution: `El TLS handshake es el proceso previo, antes de enviar ningún dato de la aplicación (como una petición HTTP), en el que cliente y servidor:
1. Acuerdan qué versión de TLS y qué algoritmos de cifrado van a usar.
2. El servidor demuestra su identidad presentando un certificado firmado por una CA reconocida, y el cliente lo valida.
3. Cliente y servidor generan de forma segura una clave compartida que usarán para cifrar el resto de la conversación.

Importa porque, sin este paso, cualquiera que intercepte el tráfico (una red wifi pública, un proxy malicioso) podría leer o modificar los datos en tránsito, incluyendo credenciales, tokens o datos personales que viajan en las peticiones a una API.`
    }
  ];

  const summary = `HTTPS añade a HTTP las tres garantías que le faltan: cifrado, integridad y autenticación del servidor, gracias a TLS.

• HTTPS es HTTP sobre TLS: los datos viajan cifrados y no en texto plano
• El TLS handshake, previo a cualquier dato de la aplicación, acuerda el cifrado a usar y valida la identidad del servidor mediante su certificado
• Un certificado TLS/SSL vincula una clave pública a un dominio; una CA (Certificate Authority) es la entidad de confianza que firma y avala esa vinculación
• HSTS le dice al navegador que use siempre HTTPS con un dominio, cerrando la ventana de ataque de la primera conexión en texto plano
• Los códigos de estado HTTP se agrupan en 1xx (informativos), 2xx (éxito), 3xx (redirección), 4xx (error del cliente) y 5xx (error del servidor)
• La tabla de códigos de esta lección es la referencia canónica de códigos de estado HTTP de todo el sitio: consúltala siempre que necesites confirmar el código correcto para una respuesta de API`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Cómo funcionan HTTPS y TLS para cifrar la comunicación entre cliente y servidor"
        breadcrumbs={breadcrumbs}
        seoTitle="HTTPS y TLS: cómo funciona | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Descubre cómo funcionan HTTPS y TLS, el proceso de cifrado de la comunicación web y por qué son imprescindibles para proteger los datos en tránsito."
        seoKeywords="https, tls, ssl, cifrado, comunicacion segura"
        url="https://fullstackdevlovers.com/ciberseguridad/autenticacion/https-tls-funcionamiento"
      >
        <p>
          Cada vez que ves el candado en la barra de direcciones de tu navegador, hay un proceso entero
          ocurriendo antes de que se cargue un solo byte de la página. Ese proceso es lo que convierte HTTP
          —un protocolo que, por sí mismo, viaja en texto plano y legible por cualquiera— en{' '}
          <strong>HTTPS</strong>, seguro para transmitir credenciales, tokens y datos personales. Entender
          cómo funciona no es solo cultura general: como backend, vas a configurar certificados, forzar
          HTTPS y devolver códigos de estado HTTP correctos en tus APIs todos los días.
        </p>

        <LessonSection title="¿Qué es HTTPS?">
          <p>
            <strong>HTTPS</strong> (HTTP Secure) no es un protocolo distinto de HTTP: es exactamente HTTP,
            pero transmitido a través de una capa de seguridad llamada <strong>TLS</strong> (Transport
            Layer Security). Por eso a veces se describe como "HTTP sobre TLS". TLS es el sucesor de{' '}
            <strong>SSL</strong> (Secure Sockets Layer), un protocolo anterior ya obsoleto e inseguro, pero
            cuyo nombre sigue usándose coloquialmente ("certificado SSL") aunque técnicamente hoy en día se
            use TLS.
          </p>
          <p>HTTPS aporta tres garantías que HTTP por sí solo no ofrece:</p>
          <ul>
            <li>
              <strong>Cifrado</strong>: los datos viajan cifrados entre cliente y servidor, así que un
              tercero que intercepte el tráfico no puede leer su contenido.
            </li>
            <li>
              <strong>Integridad</strong>: se puede detectar si los datos han sido modificados en tránsito
              (por ejemplo, por un atacante interceptando la conexión).
            </li>
            <li>
              <strong>Autenticación del servidor</strong>: el cliente puede verificar que efectivamente
              está hablando con el servidor que dice ser, gracias al certificado que este presenta.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="El TLS handshake, a grandes rasgos">
          <p>
            Antes de que viaje ningún dato de la aplicación (la petición HTTP en sí), cliente y servidor
            realizan el <strong>TLS handshake</strong>: un intercambio inicial en el que se ponen de
            acuerdo sobre cómo van a proteger el resto de la conversación. Sin entrar en las matemáticas
            de la criptografía, el proceso sigue esta idea general:
          </p>
          <ol>
            <li>
              El cliente contacta con el servidor e indica qué versiones de TLS y qué algoritmos de
              cifrado soporta.
            </li>
            <li>
              El servidor responde eligiendo una versión y un algoritmo compatibles, y envía su{' '}
              <strong>certificado</strong>, que incluye su clave pública.
            </li>
            <li>
              El cliente valida ese certificado (comprueba que está firmado por una CA de confianza, que
              no ha caducado y que corresponde al dominio al que se está conectando).
            </li>
            <li>
              Cliente y servidor generan de forma segura una clave compartida (de sesión), que se usará
              para cifrar el resto de la comunicación con un algoritmo mucho más rápido que la criptografía
              de clave pública usada en el propio handshake.
            </li>
          </ol>
          <p>
            A partir de ahí, toda la conversación —incluida la petición HTTP y su respuesta— viaja cifrada
            con esa clave de sesión.{' '}
            {/* TODO-verificar: el resumen anterior simplifica el handshake de TLS 1.2/1.3; los detalles exactos de mensajes e intercambio de claves (RSA vs Diffie-Hellman efímero) varían según versión y configuración */}
          </p>
          <InfoBox type="info" title="No necesitas implementar TLS tú mismo">
            En el día a día como backend casi nunca implementas criptografía TLS manualmente: la gestionan
            el servidor web (Nginx, Apache), el framework, o un proveedor cloud/CDN delante de tu
            aplicación. Lo importante es entender qué garantiza el proceso y cómo configurarlo
            correctamente (certificados válidos, redirección forzada a HTTPS, HSTS).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Certificados TLS/SSL y las CA (Certificate Authority)">
          <p>
            Un <strong>certificado TLS/SSL</strong> es un archivo firmado digitalmente que vincula una
            clave pública con la identidad de un dominio (por ejemplo,{' '}
            <code>fullstackdevlovers.com</code>). Cuando tu navegador se conecta a ese dominio, el servidor
            presenta su certificado para demostrar que la clave pública que va a usar en el handshake
            realmente pertenece a ese dominio.
          </p>
          <p>
            Para que ese certificado sea de fiar, tiene que estar firmado por una{' '}
            <strong>CA (Certificate Authority)</strong>: una entidad de confianza cuya labor es verificar
            que quien solicita el certificado realmente controla el dominio en cuestión, antes de firmarlo.
            Los navegadores y sistemas operativos vienen con una lista preinstalada de CA en las que
            confían por defecto; si un certificado está firmado por una de esas CA (o por una cadena de
            confianza que termina en una de ellas), el navegador lo acepta sin avisos.
          </p>
          <InfoBox type="tip" title="Certificados gratuitos: Let's Encrypt">
            Hoy en día es habitual obtener certificados TLS gratuitos y de renovación automática a través
            de CA como <strong>Let's Encrypt</strong>, lo que ha eliminado gran parte de la barrera
            económica y operativa que existía antes para tener HTTPS en cualquier proyecto, incluso
            personales.
          </InfoBox>
        </LessonSection>

        <LessonSection title="HSTS: forzar HTTPS siempre">
          <p>
            Incluso con HTTPS bien configurado, existe una ventana de riesgo: si un usuario escribe{' '}
            <code>tuweb.com</code> sin especificar protocolo, o hace clic en un enlace antiguo con{' '}
            <code>http://</code>, la primera conexión podría intentarse en HTTP antes de que el servidor
            redirija a HTTPS, dejando esa primera petición expuesta a manipulación.
          </p>
          <p>
            <strong>HSTS</strong> (HTTP Strict Transport Security) es una cabecera de respuesta que le dice
            al navegador: "recuerda que este dominio solo debe visitarse por HTTPS, durante los próximos X
            segundos; ni siquiera intentes HTTP". Una vez que el navegador ha visto esa cabecera, convierte
            automáticamente cualquier intento de acceso por HTTP a HTTPS <em>antes</em> de enviar ninguna
            petición a la red, eliminando esa ventana de riesgo en visitas posteriores.
          </p>
          <CodeBlock
            language="text"
            title="Cabecera HSTS típica"
            code={`Strict-Transport-Security: max-age=31536000; includeSubDomains`}
          />
          <InfoBox type="warning" title="HSTS es una promesa a largo plazo">
            El parámetro <code>max-age</code> indica, en segundos, cuánto tiempo debe recordar el navegador
            esta política (en el ejemplo, un año). Activar HSTS implica un compromiso: mientras esté
            vigente, ese dominio (y sus subdominios, si se usa <code>includeSubDomains</code>) debe seguir
            sirviendo HTTPS correctamente, o los usuarios que ya recibieron la cabecera se quedarán sin
            poder acceder por HTTP como alternativa.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Referencia: tabla completa de códigos de estado HTTP">
          <p>
            Cada respuesta HTTP incluye un <strong>código de estado</strong> de tres dígitos que indica el
            resultado de la petición. El primer dígito determina la categoría general; los otros dos
            distinguen el caso concreto dentro de esa categoría. Conocerlos bien —y usarlos correctamente
            en tus propias APIs— es una de esas habilidades que separan una API bien diseñada de una que
            simplemente "funciona".
          </p>

          <h4>1xx — Informational (informativos)</h4>
          <p>
            Indican que la petición se ha recibido y el proceso continúa. Son poco frecuentes en el
            desarrollo de APIs del día a día.
          </p>
          <Table
            headers={['Código', 'Nombre', 'Cuándo se usa']}
            rows={[
              [
                '100',
                'Continue',
                'El servidor ha recibido las cabeceras de la petición y el cliente puede continuar enviando el cuerpo'
              ],
              [
                '101',
                'Switching Protocols',
                'El servidor acepta cambiar de protocolo a petición del cliente (por ejemplo, al establecer una conexión WebSocket)'
              ],
              [
                '102',
                'Processing',
                'El servidor ha recibido la petición y la está procesando, pero aún no hay respuesta disponible (extensión WebDAV)'
              ],
              [
                '103',
                'Early Hints',
                'El servidor envía cabeceras preliminares (por ejemplo, recursos a precargar) mientras prepara la respuesta final'
              ]
            ]}
          />

          <h4>2xx — Success (éxito)</h4>
          <p>La petición se ha recibido, entendido y aceptado correctamente.</p>
          <Table
            headers={['Código', 'Nombre', 'Cuándo se usa']}
            rows={[
              ['200', 'OK', 'La petición se ha completado correctamente; es el código de éxito genérico'],
              [
                '201',
                'Created',
                'Se ha creado un nuevo recurso como resultado de la petición (típico tras un POST); suele incluir la cabecera Location'
              ],
              [
                '202',
                'Accepted',
                'La petición se ha aceptado para procesar, pero el procesamiento aún no ha terminado (útil en procesos asíncronos)'
              ],
              [
                '203',
                'Non-Authoritative Information',
                'La respuesta es válida pero proviene de una copia o transformación intermedia, no directamente del origen'
              ],
              [
                '204',
                'No Content',
                'La petición se ha completado con éxito pero no hay contenido que devolver (típico tras un DELETE)'
              ],
              [
                '205',
                'Reset Content',
                'La petición se ha completado y el cliente debe reiniciar la vista o el formulario que la originó'
              ],
              [
                '206',
                'Partial Content',
                'Se devuelve solo una parte del recurso solicitado, en respuesta a una petición con cabecera Range (usado en descargas parciales o streaming)'
              ],
              [
                '207',
                'Multi-Status',
                'La respuesta contiene varios códigos de estado independientes para distintas sub-operaciones (extensión WebDAV)'
              ],
              [
                '208',
                'Already Reported',
                'Evita repetir varias veces los mismos miembros dentro de una respuesta 207 con múltiples bindings (extensión WebDAV)'
              ],
              [
                '226',
                'IM Used',
                'El servidor ha cumplido la petición aplicando una o varias instance-manipulations sobre el recurso'
              ]
            ]}
          />

          <h4>3xx — Redirection (redirección)</h4>
          <p>Indican que hace falta una acción adicional, normalmente seguir a otra URL, para completar la petición.</p>
          <Table
            headers={['Código', 'Nombre', 'Cuándo se usa']}
            rows={[
              [
                '300',
                'Multiple Choices',
                'Existen varias opciones posibles para el recurso solicitado y el cliente (o usuario) debe elegir una'
              ],
              [
                '301',
                'Moved Permanently',
                'El recurso se ha movido de forma permanente a una nueva URL; los clientes deben actualizar sus enlaces'
              ],
              [
                '302',
                'Found',
                'El recurso está temporalmente en otra URL; a diferencia de 301, no implica un cambio permanente'
              ],
              [
                '303',
                'See Other',
                'La respuesta a la petición puede encontrarse en otra URL, a la que debe accederse con GET (típico tras procesar un formulario)'
              ],
              [
                '304',
                'Not Modified',
                'El recurso no ha cambiado desde la última vez que el cliente lo pidió (usado con cabeceras de caché como If-None-Match); el cliente debe usar su copia cacheada'
              ],
              [
                '305',
                'Use Proxy',
                'El recurso debe accederse a través del proxy indicado en la respuesta; en desuso por motivos de seguridad'
              ],
              [
                '307',
                'Temporary Redirect',
                'Como el 302, pero garantiza que el cliente repetirá la petición con el mismo método HTTP original (incluido el cuerpo, si lo hay)'
              ],
              [
                '308',
                'Permanent Redirect',
                'Como el 301, pero garantiza que el cliente repetirá la petición con el mismo método HTTP original'
              ]
            ]}
          />

          <h4>4xx — Client Error (error del cliente)</h4>
          <p>Indican que la petición contiene un error o no puede completarse por algo relacionado con el cliente.</p>
          <Table
            headers={['Código', 'Nombre', 'Cuándo se usa']}
            rows={[
              [
                '400',
                'Bad Request',
                'La petición está mal formada o contiene datos inválidos que el servidor no puede procesar'
              ],
              [
                '401',
                'Unauthorized',
                'Falta autenticación válida, o las credenciales/token proporcionados no son válidos'
              ],
              [
                '402',
                'Payment Required',
                'Reservado para uso futuro relacionado con sistemas de pago; algunas APIs lo reutilizan para indicar límites de facturación superados'
              ],
              [
                '403',
                'Forbidden',
                'El cliente está identificado pero no tiene permiso para acceder al recurso o realizar la acción'
              ],
              ['404', 'Not Found', 'El recurso solicitado no existe (o el servidor no quiere revelar que existe)'],
              [
                '405',
                'Method Not Allowed',
                'El método HTTP usado (GET, POST, DELETE...) no está permitido para ese recurso'
              ],
              [
                '406',
                'Not Acceptable',
                'El servidor no puede generar una respuesta que satisfaga las cabeceras Accept enviadas por el cliente'
              ],
              [
                '407',
                'Proxy Authentication Required',
                'El cliente debe autenticarse primero frente a un proxy antes de que la petición pueda continuar'
              ],
              [
                '408',
                'Request Timeout',
                'El servidor agotó el tiempo de espera para recibir la petición completa del cliente'
              ],
              [
                '409',
                'Conflict',
                'La petición entra en conflicto con el estado actual del recurso (por ejemplo, un registro duplicado)'
              ],
              [
                '410',
                'Gone',
                'El recurso existió pero se ha eliminado de forma permanente y no va a volver; a diferencia de 404, esto es intencionado y conocido'
              ],
              [
                '411',
                'Length Required',
                'El servidor requiere que la petición incluya la cabecera Content-Length'
              ],
              [
                '412',
                'Precondition Failed',
                'Una condición indicada por el cliente en las cabeceras de la petición (por ejemplo, If-Match) no se cumple'
              ],
              [
                '413',
                'Payload Too Large',
                'El cuerpo de la petición supera el tamaño máximo que el servidor está dispuesto a procesar'
              ],
              ['414', 'URI Too Long', 'La URL de la petición es demasiado larga para que el servidor la procese'],
              [
                '415',
                'Unsupported Media Type',
                'El formato del cuerpo de la petición (indicado en Content-Type) no está soportado por el servidor'
              ],
              [
                '416',
                'Range Not Satisfiable',
                'El rango solicitado mediante la cabecera Range no puede satisfacerse (por ejemplo, excede el tamaño del recurso)'
              ],
              [
                '417',
                'Expectation Failed',
                'El servidor no puede cumplir los requisitos indicados en la cabecera Expect de la petición'
              ],
              [
                '418',
                "I'm a teapot",
                'Código de broma introducido en un RFC del 1 de abril de 1998; no forma parte de ningún estándar HTTP real, pero algunos servidores lo implementan por diversión'
              ],
              [
                '421',
                'Misdirected Request',
                'La petición se envió a un servidor que no puede producir una respuesta válida para el dominio indicado'
              ],
              [
                '422',
                'Unprocessable Entity',
                'La petición está bien formada sintácticamente pero contiene errores semánticos (muy usado en APIs REST para errores de validación)'
              ],
              [
                '423',
                'Locked',
                'El recurso al que se accede está bloqueado (extensión WebDAV)'
              ],
              [
                '424',
                'Failed Dependency',
                'La petición ha fallado porque dependía de otra petición anterior que también falló (extensión WebDAV)'
              ],
              [
                '425',
                'Too Early',
                'El servidor no está dispuesto a procesar una petición que podría reenviarse (usado para mitigar ataques de repetición en Early Data de TLS 1.3)'
              ],
              [
                '426',
                'Upgrade Required',
                'El servidor rechaza completar la petición con el protocolo actual y requiere que el cliente cambie a otro (indicado en la cabecera Upgrade)'
              ],
              [
                '428',
                'Precondition Required',
                'El servidor requiere que la petición incluya condiciones (por ejemplo, cabeceras If-Match) para evitar conflictos de actualización perdida'
              ],
              [
                '429',
                'Too Many Requests',
                'El cliente ha superado el límite de peticiones permitido en un periodo de tiempo (rate limiting)'
              ],
              [
                '431',
                'Request Header Fields Too Large',
                'Las cabeceras de la petición son demasiado grandes para que el servidor las procese'
              ],
              [
                '451',
                'Unavailable For Legal Reasons',
                'El recurso no se puede servir por motivos legales (por ejemplo, censura o una orden judicial); el nombre hace referencia a "Fahrenheit 451"'
              ]
            ]}
          />

          <h4>5xx — Server Error (error del servidor)</h4>
          <p>Indican que el servidor sabe que ha fallado, o no puede completar una petición aparentemente válida.</p>
          <Table
            headers={['Código', 'Nombre', 'Cuándo se usa']}
            rows={[
              [
                '500',
                'Internal Server Error',
                'Error genérico: el servidor ha encontrado una situación inesperada y no puede completar la petición'
              ],
              [
                '501',
                'Not Implemented',
                'El servidor no reconoce el método de la petición o no tiene capacidad para completarla'
              ],
              [
                '502',
                'Bad Gateway',
                'El servidor, actuando como proxy o gateway, ha recibido una respuesta inválida de un servidor "upstream"'
              ],
              [
                '503',
                'Service Unavailable',
                'El servidor no puede atender la petición temporalmente (sobrecarga, mantenimiento); a menudo incluye la cabecera Retry-After'
              ],
              [
                '504',
                'Gateway Timeout',
                'El servidor, actuando como proxy o gateway, no recibió respuesta a tiempo de un servidor "upstream"'
              ],
              [
                '505',
                'HTTP Version Not Supported',
                'El servidor no soporta la versión del protocolo HTTP usada en la petición'
              ],
              [
                '506',
                'Variant Also Negotiates',
                'Error de configuración interna del servidor relacionado con la negociación de contenido (poco común)'
              ],
              [
                '507',
                'Insufficient Storage',
                'El servidor no puede almacenar la representación necesaria para completar la petición, por falta de espacio (extensión WebDAV)'
              ],
              [
                '508',
                'Loop Detected',
                'El servidor detectó un bucle infinito mientras procesaba la petición (extensión WebDAV)'
              ],
              [
                '510',
                'Not Extended',
                'Se requieren extensiones adicionales de la petición para que el servidor pueda completarla'
              ],
              [
                '511',
                'Network Authentication Required',
                'El cliente necesita autenticarse para obtener acceso a la red (típico en portales cautivos de wifi pública)'
              ]
            ]}
          />

          {/* TODO-verificar: confirmar la descripción exacta y el estado de estandarización de los códigos menos
              comunes o pertenecientes a extensiones (102, 207, 208, 226, 305, 421, 425, 451, 506, 507, 508, 510, 511),
              ya que varios provienen de RFCs de extensión (WebDAV, TLS 1.3 Early Data) y no del núcleo original de HTTP/1.1 */}

          <InfoBox type="tip" title="Referencia canónica del sitio">
            Esta tabla es la <strong>referencia canónica de códigos de estado HTTP</strong> de Fullstack
            Dev Lovers: siempre que necesites confirmar el nombre o el uso correcto de un código de estado
            en cualquier lección o proyecto, esta es la lista a consultar.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/* AVISO: no se encontró un criterio específico en docs/criterios/ciberseguridad.md (ni en ninguna categoría)
            en el repositorio en el momento de redactar esta lección. Se han aplicado las reglas base del redactor
            de contenidos (tono cercano y riguroso, progresión simple->compleja, estructura
            introducción/conceptos/ejemplos/resumen y marcado de afirmaciones no garantizadas con TODO-verificar). */}
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
