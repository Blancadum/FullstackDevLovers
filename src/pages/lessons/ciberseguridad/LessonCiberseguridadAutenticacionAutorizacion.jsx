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

export function LessonCiberseguridadAutenticacionAutorizacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Autenticación y Autorización: conceptos clave';

  const keyPoints = [
    'Autenticación responde a "¿quién eres?": verifica la identidad de quien hace la petición (login, token, certificado...)',
    'Autorización responde a "¿qué puedes hacer?": decide si esa identidad ya verificada tiene permiso para la acción o el recurso solicitado',
    'Siempre se autentica primero y se autoriza después; no tiene sentido comprobar permisos de alguien cuya identidad no has verificado',
    'Las sesiones con cookies delegan el estado de la autenticación al servidor (o a un almacén compartido); los tokens delegan ese estado al propio cliente',
    'Un sistema de roles y permisos permite gestionar la autorización a nivel de grupo, sin codificar reglas para cada usuario individual',
    'El principio de mínimo privilegio dice que cada identidad debe tener solo los permisos estrictamente necesarios para su función, ni uno más'
  ];

  const exercises = [
    {
      title: 'Identifica autenticación vs. autorización',
      description:
        'Para cada una de estas situaciones, indica si el sistema está aplicando autenticación, autorización, o ambas en secuencia: (1) Un usuario introduce su email y contraseña para entrar en la app. (2) Un usuario ya logueado con rol "lector" intenta borrar un artículo y recibe un error 403. (3) Una API rechaza una petición porque el token enviado ha caducado.',
      solution: `1. Autenticación: se está verificando la identidad del usuario mediante credenciales (email + contraseña).
2. Autorización: la identidad ya está verificada (el usuario está logueado); lo que falla es el permiso, porque su rol no incluye la acción de borrar. El 403 Forbidden es la respuesta típica cuando la autorización falla.
3. Autenticación: un token caducado significa que el sistema ya no puede confirmar la identidad del cliente con garantías; la respuesta habitual aquí es un 401 Unauthorized, no un 403.`
    },
    {
      title: 'Diseña un middleware de autorización por rol',
      description:
        'Tienes una API Express con rutas de administración. Escribe un middleware requireRole(rolNecesario) que, asumiendo que req.user ya existe (la autenticación ya ha pasado por un middleware anterior), rechace la petición con un 403 si el rol del usuario no coincide con el requerido.',
      language: 'javascript',
      solution: `function requireRole(rolNecesario) {
  return (req, res, next) => {
    // Se asume que un middleware de autenticación previo ya rellenó req.user
    if (!req.user) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    if (req.user.rol !== rolNecesario) {
      return res.status(403).json({ error: 'No tienes permisos para esta acción' });
    }

    next();
  };
}

// Uso en las rutas
app.delete('/articulos/:id', autenticar, requireRole('admin'), borrarArticulo);`
    }
  ];

  const summary = `Autenticación y autorización son dos pasos distintos y consecutivos en el control de acceso de cualquier aplicación.

• Autenticación verifica quién eres (login, token, certificado); autorización decide qué puedes hacer una vez que ya se sabe quién eres
• Primero se autentica, luego se autoriza: nunca al revés
• Las sesiones con cookies guardan el estado en el servidor (o en un almacén compartido) y el cliente solo lleva un identificador; los tokens (como JWT) llevan la información de la sesión codificada en el propio token
• Los roles agrupan permisos y permiten gestionar la autorización sin reglas individuales por usuario
• El principio de mínimo privilegio limita cada identidad a los permisos estrictamente necesarios para reducir el impacto de un fallo o una cuenta comprometida
• Un fallo de autenticación se responde típicamente con 401 Unauthorized; un fallo de autorización, con 403 Forbidden`;

  return (
    <>
      <LessonLayout
        title={title}
        description="La diferencia entre autenticación y autorización, y por qué es clave para la seguridad de una aplicación"
        breadcrumbs={breadcrumbs}
        seoTitle="Autenticación y Autorización: conceptos clave | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Comprende la diferencia entre autenticación y autorización, dos conceptos fundamentales para controlar el acceso seguro a tus aplicaciones."
        seoKeywords="autenticacion, autorizacion, authentication authorization, control de acceso"
        url="https://fullstackdevlovers.com/ciberseguridad/autenticacion/autenticacion-autorizacion"
      >
        <p>
          Ya sabes construir endpoints que leen y escriben datos. Ahora toca una pregunta que todo backend
          real tiene que responder antes de ejecutar ninguna lógica de negocio:{' '}
          <strong>¿quién está haciendo esta petición, y tiene permiso para hacerla?</strong> Esa pregunta
          se descompone en dos conceptos que se confunden constantemente —autenticación y
          autorización— y que conviene tener muy claros antes de tocar seguridad de APIs, JWT o
          contraseñas, temas que verás en las próximas lecciones.
        </p>

        <LessonSection title="Autenticación: ¿quién eres?">
          <p>
            La <strong>autenticación</strong> (en inglés, <em>authentication</em>, a veces abreviado{' '}
            <code>authn</code>) es el proceso de verificar la identidad de quien hace una petición. Es la
            fase de "demuéstrame que eres quien dices ser". Los mecanismos más habituales son:
          </p>
          <ul>
            <li>
              <strong>Credenciales</strong>: usuario y contraseña, la forma más clásica.
            </li>
            <li>
              <strong>Tokens</strong>: una cadena firmada (como un JWT) que el cliente presenta en cada
              petición tras haberse autenticado una vez.
            </li>
            <li>
              <strong>Claves de API</strong>: identifican a una aplicación o servicio, no a una persona.
            </li>
            <li>
              <strong>Autenticación multifactor (MFA)</strong>: combina algo que sabes (contraseña), algo
              que tienes (un móvil, una app de códigos) o algo que eres (huella, biometría).
            </li>
          </ul>
          <p>
            Si la autenticación falla —credenciales incorrectas, token inválido o caducado— la respuesta
            HTTP habitual es <strong>401 Unauthorized</strong>. El nombre es un poco confuso porque
            menciona "autorización", pero en la práctica se usa cuando el problema es que el sistema no
            sabe (o no confía en) quién eres.
          </p>
        </LessonSection>

        <LessonSection title="Autorización: ¿qué puedes hacer?">
          <p>
            La <strong>autorización</strong> (<em>authorization</em>, <code>authz</code>) entra en juego{' '}
            <strong>después</strong> de la autenticación. Una vez que el sistema sabe quién eres, decide si
            tienes permiso para hacer lo que estás pidiendo: leer ese recurso, borrar ese registro, acceder
            a ese panel de administración.
          </p>
          <p>
            Si la autorización falla, la respuesta HTTP habitual es <strong>403 Forbidden</strong>: el
            sistema sabe perfectamente quién eres, pero tu identidad no tiene permiso para esa acción
            concreta.
          </p>
          <InfoBox type="tip" title="Truco para no confundirlas">
            Autenticación es el control de acceso a la <strong>puerta del edificio</strong> (enseñas tu
            identificación para entrar). Autorización es el control de acceso a{' '}
            <strong>cada puerta interior</strong> una vez dentro (tu tarjeta abre algunas salas, pero no la
            del servidor central).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Sesiones con cookies vs. tokens">
          <p>
            Existen dos patrones dominantes para mantener a un usuario autenticado a lo largo de varias
            peticiones, ya que HTTP en sí mismo no recuerda nada entre una petición y la siguiente:
          </p>
          <Table
            headers={['Patrón', 'Dónde vive el estado', 'Cómo funciona']}
            rows={[
              [
                'Sesiones con cookies',
                'En el servidor (memoria, base de datos o almacén como Redis)',
                'Al hacer login, el servidor crea una sesión y guarda un identificador; ese identificador viaja al navegador en una cookie y se envía automáticamente en cada petición posterior'
              ],
              [
                'Tokens (p. ej. JWT)',
                'En el propio token, que lleva el cliente',
                'Al hacer login, el servidor genera un token firmado con la información necesaria; el cliente lo guarda y lo envía en cada petición (normalmente en la cabecera Authorization)'
              ]
            ]}
          />
          <p>
            Con sesiones, el servidor puede invalidar el acceso de un usuario en cualquier momento
            (borrando su sesión), pero necesita mantener ese estado en algún almacén compartido si hay
            varias instancias del backend. Con tokens autocontenidos, el servidor no necesita guardar nada
            —lo cual escala mejor entre varias instancias—, pero invalidar un token antes de su expiración
            es más difícil. Verás JWT en detalle en la siguiente lección.
          </p>
        </LessonSection>

        <LessonSection title="Roles y permisos">
          <p>
            Gestionar la autorización usuario por usuario no escala. Por eso la mayoría de sistemas usan{' '}
            <strong>control de acceso basado en roles</strong> (<em>RBAC</em>, Role-Based Access Control):
            cada usuario tiene uno o varios <strong>roles</strong> (por ejemplo, <code>lector</code>,{' '}
            <code>editor</code>, <code>admin</code>), y cada rol agrupa un conjunto de{' '}
            <strong>permisos</strong> concretos (por ejemplo, <code>articulos:leer</code>,{' '}
            <code>articulos:borrar</code>).
          </p>
          <CodeBlock
            language="javascript"
            title="Modelo simple de roles y permisos"
            code={`const permisosPorRol = {
  lector: ['articulos:leer'],
  editor: ['articulos:leer', 'articulos:crear', 'articulos:editar'],
  admin: ['articulos:leer', 'articulos:crear', 'articulos:editar', 'articulos:borrar', 'usuarios:gestionar']
};

function tienePermiso(usuario, permiso) {
  const permisosDelRol = permisosPorRol[usuario.rol] || [];
  return permisosDelRol.includes(permiso);
}

// Uso:
if (!tienePermiso(req.user, 'articulos:borrar')) {
  return res.status(403).json({ error: 'No tienes permisos para esta acción' });
}`}
          />
          <p>
            Sistemas más avanzados usan permisos por atributo (<em>ABAC</em>) en lugar de roles fijos, pero
            RBAC cubre la gran mayoría de aplicaciones típicas y es un buen punto de partida.
          </p>
        </LessonSection>

        <LessonSection title="Principio de mínimo privilegio">
          <p>
            El <strong>principio de mínimo privilegio</strong> (<em>least privilege</em>) establece que
            cada identidad —usuario, servicio o proceso— debe tener{' '}
            <strong>solo los permisos estrictamente necesarios</strong> para cumplir su función, ni uno
            más. No es un capricho teórico: limita el daño que puede hacer una cuenta comprometida o un
            bug de autorización.
          </p>
          <ul>
            <li>
              Un usuario normal no debería tener permisos de administrador "por si acaso" los necesita
              algún día.
            </li>
            <li>
              Un servicio que solo necesita leer una tabla no debería tener credenciales con permiso de
              escritura sobre toda la base de datos.
            </li>
            <li>
              Los permisos por defecto de cualquier rol nuevo deberían ser los mínimos, y ampliarse solo
              cuando sea necesario (denegar por defecto, permitir explícitamente).
            </li>
          </ul>
          <InfoBox type="warning" title="El coste de no aplicarlo">
            Si una cuenta con permisos excesivos se ve comprometida (contraseña filtrada, token robado), el
            atacante hereda todos esos permisos. Aplicar mínimo privilegio no evita el compromiso inicial,
            pero limita drásticamente lo que el atacante puede hacer después.
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
