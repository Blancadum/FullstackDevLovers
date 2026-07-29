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

export function LessonCiberseguridadSeguridadAPIsRestChecklist() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Seguridad en APIs REST y checklist de producción';

  const keyPoints = [
    'El rate limiting protege tu API de abusos (fuerza bruta, scraping masivo, ataques de denegación de servicio) limitando cuántas peticiones puede hacer un mismo cliente en un tiempo dado',
    'CORS con origin: "*" es cómodo en desarrollo pero peligroso en producción: hay que restringirlo a los dominios que realmente deben consumir tu API',
    'Cabeceras de seguridad HTTP (con helmet en Express) mitigan ataques comunes del navegador con muy poco esfuerzo de configuración',
    'HTTPS no es opcional en producción: sin él, cualquier dato viaja en texto plano y puede ser interceptado',
    'Versionar la API (por ejemplo, /api/v1/...) permite introducir cambios de seguridad sin romper a los clientes que ya la consumen',
    'La seguridad de una aplicación no es un único punto, sino la suma de todas las capas vistas en este módulo: OWASP Top 10, autenticación y JWT, HTTPS, contraseñas hasheadas, validación/sanitización y gestión de secretos'
  ];

  const exercises = [
    {
      title: 'Configura una API Express con buenas prácticas básicas',
      description:
        'Configura una aplicación Express que use helmet para las cabeceras de seguridad, cors restringido a un único dominio de frontend, y un rate limiter que permita un máximo de 100 peticiones cada 15 minutos por IP.',
      language: 'javascript',
      solution: `const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// Cabeceras de seguridad HTTP
app.use(helmet());

// CORS restringido a un único origen de confianza
app.use(cors({
  origin: 'https://miapp.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Rate limiting: máximo 100 peticiones cada 15 minutos por IP
const limitador = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
  message: { error: 'Demasiadas peticiones desde esta IP, inténtalo más tarde' }
});
app.use(limitador);

app.use(express.json());

app.get('/api/v1/productos', (req, res) => {
  res.json({ productos: [] });
});

app.listen(3000);`
    },
    {
      title: 'Encuentra los fallos de configuración',
      description:
        'La siguiente configuración de una API en producción tiene varios problemas de seguridad. Identifícalos todos y corrígelos.\n\napp.use(cors({ origin: "*" }));\napp.listen(80, () => console.log("API en marcha"));\n// No se usa helmet, ni rate limiting, ni HTTPS',
      language: 'javascript',
      solution: `// Problemas detectados:
// 1. cors({ origin: "*" }) permite que CUALQUIER dominio consuma la API, incluidos sitios
//    maliciosos que quieran hacer peticiones autenticadas desde el navegador de un usuario.
// 2. No hay rate limiting: la API es vulnerable a fuerza bruta y ataques de denegación de servicio.
// 3. No se usan cabeceras de seguridad (helmet), dejando la app expuesta a varios ataques comunes
//    del navegador que esas cabeceras mitigan (por ejemplo, forzar que el navegador no interprete
//    contenido con un tipo MIME distinto al declarado).
// 4. El servidor escucha en el puerto 80 (HTTP) en producción, sin HTTPS: todo el tráfico,
//    incluidas credenciales y tokens, viaja sin cifrar.

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(helmet());

app.use(cors({
  origin: 'https://miapp.com' // dominio concreto, no "*"
}));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// En producción real, el HTTPS se suele terminar en un proxy/balanceador (nginx, el propio
// hosting...) delante de Node, o se configura con un certificado directamente en el servidor.
// Lo importante es que el tráfico externo nunca viaje por HTTP sin cifrar.
app.listen(process.env.PORT || 3000, () => console.log('API en marcha'));`
    }
  ];

  const summary = `Una API REST en producción necesita varias capas de protección que trabajan juntas: rate limiting
para evitar abusos, CORS bien configurado para que solo los dominios de confianza puedan consumirla desde
el navegador, cabeceras de seguridad HTTP (fáciles de añadir con helmet en Express), HTTPS obligatorio
para que ningún dato viaje sin cifrar, y un esquema de versionado que permita evolucionar la API sin
romper a los clientes existentes. Pero, sobre todo, esta lección cierra un módulo completo: la seguridad
de una aplicación real no depende de una sola medida, sino de la suma de todo lo que has ido viendo hasta
ahora, desde entender el OWASP Top 10 hasta gestionar bien tus secretos. El checklist final de esta
lección es el resumen práctico de todo el módulo: úsalo como referencia rápida antes de desplegar
cualquier proyecto a producción.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Buenas prácticas de seguridad para APIs REST y checklist final antes de pasar a producción"
        breadcrumbs={breadcrumbs}
        seoTitle="Seguridad en APIs REST y checklist de producción | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Repasa las buenas prácticas de seguridad para APIs REST y una checklist de producción para verificar que tu aplicación está lista para desplegarse de forma segura."
        seoKeywords="seguridad apis rest, checklist seguridad produccion, api rest seguridad"
        url="https://fullstackdevlovers.com/ciberseguridad/buenas-practicas/seguridad-apis-rest-checklist"
      >
        <p>
          Llegamos a la última lección del módulo de ciberseguridad. Ya sabes identificar vulnerabilidades
          comunes (OWASP Top 10, inyección SQL, XSS, CSRF), proteger la autenticación (contraseñas
          hasheadas, JWT, HTTPS) y tratar con cuidado los datos e información sensible de tu aplicación
          (validación, sanitización, gestión de secretos). En esta lección vas a ver cómo se traduce todo
          eso en la configuración concreta de una API REST en Express, y vas a cerrar el módulo con un
          checklist que puedes reutilizar en cualquier proyecto real antes de desplegarlo.
        </p>

        <LessonSection title="Rate limiting: poner un límite a las peticiones">
          <p>
            El <strong>rate limiting</strong> (limitación de tasa) restringe cuántas peticiones puede hacer
            un mismo cliente (normalmente identificado por IP) en un periodo de tiempo. Sin él, tu API es
            mucho más vulnerable a ataques de fuerza bruta (probar miles de contraseñas contra tu endpoint
            de login), scraping masivo de datos, o simplemente a que un cliente mal programado sature tu
            servidor con peticiones repetidas.
          </p>
          <p>
            En Express, la librería <code>express-rate-limit</code> es la opción más habitual:
          </p>
          <CodeBlock
            language="javascript"
            code={`const rateLimit = require('express-rate-limit');

const limitadorLogin = rateLimit({
  windowMs: 15 * 60 * 1000, // ventana de 15 minutos
  max: 5, // máximo 5 intentos por IP en esa ventana
  message: { error: 'Demasiados intentos de inicio de sesión, inténtalo más tarde' }
});

app.post('/api/login', limitadorLogin, (req, res) => {
  // lógica de autenticación
});`}
          />
          <InfoBox type="tip" title="Límites distintos según el endpoint">
            No todos los endpoints necesitan el mismo límite. Un endpoint de login o de recuperación de
            contraseña suele necesitar un límite mucho más estricto que un endpoint de lectura pública,
            precisamente porque es el objetivo típico de ataques de fuerza bruta.
          </InfoBox>
        </LessonSection>

        <LessonSection title="CORS bien configurado: nada de origin: '*' en producción">
          <p>
            CORS (Cross-Origin Resource Sharing) es el mecanismo que le dice al navegador qué dominios
            distintos al de tu API tienen permiso para hacerle peticiones desde JavaScript. Durante el
            desarrollo es muy cómodo configurar <code>origin: '*'</code> (permitir cualquier origen) para no
            tener que pensar en ello. El problema es que, si esa configuración llega a producción, cualquier
            página web, incluida una maliciosa, puede hacer peticiones a tu API desde el navegador de un
            usuario que la tenga abierta.
          </p>
          <CodeBlock
            language="javascript"
            code={`const cors = require('cors');

// Desarrollo: cómodo, pero NO apto para producción
// app.use(cors({ origin: '*' }));

// Producción: solo el dominio real de tu frontend
app.use(cors({
  origin: 'https://miapp.com',
  credentials: true // si tu API usa cookies de sesión
}));`}
          />
          <InfoBox type="warning" title="CORS no sustituye a la autenticación">
            CORS protege al navegador de páginas ajenas que intentan hacer peticiones en nombre del usuario;
            no protege tu API de peticiones hechas fuera del navegador (por ejemplo, con curl o Postman),
            porque CORS es una restricción que aplican los navegadores, no tu servidor. La autenticación y
            autorización de cada petición (JWT, sesiones...) siguen siendo imprescindibles aunque CORS esté
            bien configurado.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Cabeceras de seguridad con helmet">
          <p>
            <code>helmet</code> es un middleware de Express que configura automáticamente un conjunto de
            cabeceras HTTP relacionadas con seguridad (por ejemplo, evitar que el navegador intente adivinar
            el tipo de contenido de una respuesta, o restringir de dónde puede cargar recursos una página).
            Añadirlo es tan sencillo como esto:
          </p>
          <CodeBlock
            language="javascript"
            code={`const helmet = require('helmet');

app.use(helmet());`}
          />
          <p>
            Con una sola línea obtienes una configuración de cabeceras razonable por defecto. Para casos
            avanzados, <code>helmet</code> permite configurar cada cabecera de forma individual, pero
            conviene revisar la documentación oficial vigente del paquete antes de personalizarlas, porque
            una configuración demasiado estricta puede llegar a bloquear recursos legítimos de tu propia
            aplicación.
          </p>
        </LessonSection>

        <LessonSection title="HTTPS obligatorio">
          <p>
            Ya viste en la lección de HTTPS y TLS cómo funciona el cifrado del tráfico entre cliente y
            servidor. En el contexto de una API en producción, la conclusión práctica es simple: ninguna API
            que maneje datos reales de usuarios (login, datos personales, pagos...) debería aceptar tráfico
            por HTTP sin cifrar. La mayoría de plataformas de hosting modernas gestionan el certificado TLS
            y el cifrado por ti (a menudo mediante un proxy delante de tu aplicación Node), pero sigue siendo
            tu responsabilidad comprobar que esa capa está activa antes de desplegar.
          </p>
        </LessonSection>

        <LessonSection title="Versionado de la API">
          <p>
            Incluir la versión en la ruta de tu API (por ejemplo, <code>/api/v1/usuarios</code>) te permite
            introducir cambios importantes —incluidos cambios necesarios por motivos de seguridad, como
            modificar el formato de un token o endurecer una validación— sin romper de golpe a los clientes
            que todavía dependen del comportamiento anterior. Puedes mantener <code>/api/v1</code> mientras
            migras progresivamente a <code>/api/v2</code>.
          </p>
          <CodeBlock
            language="javascript"
            code={`const routerV1 = require('./routes/v1');
const routerV2 = require('./routes/v2');

app.use('/api/v1', routerV1);
app.use('/api/v2', routerV2);`}
          />
        </LessonSection>

        <LessonSection title="Checklist final del módulo de ciberseguridad">
          <p>
            Esta es la última lección del módulo, así que cerramos con una checklist que repasa los puntos
            clave de todo lo que has aprendido. Guárdala como referencia rápida antes de desplegar cualquier
            proyecto a producción.
          </p>
          <ul>
            <li>
              <strong>OWASP Top 10:</strong> conoces las categorías de vulnerabilidades más críticas y
              habituales en aplicaciones web, y las tienes presentes al diseñar y revisar tu código.
            </li>
            <li>
              <strong>Inyección SQL:</strong> todas las consultas a base de datos usan parámetros
              preparados, nunca concatenación de strings con datos del usuario.
            </li>
            <li>
              <strong>XSS:</strong> el contenido generado por usuarios se escapa correctamente antes de
              mostrarse como HTML (o se confía en que el framework de frontend lo haga, como React).
            </li>
            <li>
              <strong>CSRF:</strong> las acciones que cambian estado están protegidas frente a peticiones
              falsificadas desde otros sitios (tokens CSRF, cookies con <code>SameSite</code>, o
              autenticación basada en cabeceras en vez de solo cookies).
            </li>
            <li>
              <strong>Autenticación y autorización:</strong> cada endpoint comprueba no solo quién es el
              usuario, sino si tiene permiso para hacer esa acción concreta sobre ese recurso concreto.
            </li>
            <li>
              <strong>JWT:</strong> los tokens tienen una expiración razonable, se firman con un secreto
              robusto (guardado como variable de entorno, no en el código) y no incluyen información
              sensible en el payload, que es legible sin necesidad de la clave.
            </li>
            <li>
              <strong>HTTPS:</strong> toda la aplicación en producción sirve el tráfico cifrado, sin
              excepciones para endpoints "poco importantes".
            </li>
            <li>
              <strong>Contraseñas:</strong> se almacenan siempre hasheadas con un algoritmo adecuado (como
              bcrypt) y con salt, nunca en texto plano ni con un hash reversible.
            </li>
            <li>
              <strong>Sanitización y validación de inputs:</strong> todo dato que llega al backend se valida
              de nuevo en el servidor, sin confiar en la validación del cliente.
            </li>
            <li>
              <strong>Gestión de secretos:</strong> ninguna clave, contraseña o token está escrita en el
              código fuente; todos viven en variables de entorno o en un gestor de secretos, y{' '}
              <code>.env</code> está en <code>.gitignore</code>.
            </li>
            <li>
              <strong>API REST:</strong> rate limiting activo, CORS restringido a dominios de confianza,
              cabeceras de seguridad configuradas (helmet) y versionado de la API implementado.
            </li>
          </ul>
          <InfoBox type="success" title="La seguridad es un proceso, no un checklist único">
            Repasar esta lista antes de desplegar es un buen hábito, pero la seguridad real es continua:
            revisar dependencias con vulnerabilidades conocidas, mantener librerías actualizadas y seguir
            aprendiendo sobre nuevas técnicas de ataque forman parte del trabajo habitual de cualquier
            desarrollador backend, no solo de este módulo.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/*
          AVISO-CRITERIOS-AUSENTES: no se ha encontrado docs/criterios/ciberseguridad.md en el
          repositorio en el momento de redactar esta lección. Se han aplicado las reglas base de
          tono, estructura y estilo indicadas en las instrucciones del agente (progresión simple a
          compleja, ejemplos funcionales, ejercicios con solución). Revisar y ajustar este contenido
          si se crea dicho fichero de criterios más adelante.
        */}
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
