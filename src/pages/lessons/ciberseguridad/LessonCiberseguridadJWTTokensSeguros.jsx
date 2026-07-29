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

export function LessonCiberseguridadJWTTokensSeguros() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'JWT: tokens seguros';

  const keyPoints = [
    'Un JWT tiene tres partes separadas por puntos: header.payload.signature',
    'El payload de un JWT está codificado en Base64, no cifrado: cualquiera puede leerlo sin conocer ningún secreto',
    'La firma (signature) es lo único que garantiza que el token no se ha modificado desde que el servidor lo generó',
    'Nunca guardes datos sensibles (contraseñas, tarjetas, secretos) en el payload de un JWT',
    'Usa tiempos de expiración cortos (expiresIn) y, si necesitas sesiones largas, combínalo con un refresh token',
    'Guardar el JWT en localStorage lo expone a robo vía XSS; una cookie httpOnly + Secure reduce ese riesgo porque JavaScript no puede leerla'
  ];

  const exercises = [
    {
      title: 'Decodifica un JWT sin verificarlo',
      description:
        'Copia cualquier JWT de ejemplo (por ejemplo, uno generado en jwt.io) y, usando solo atob() en la consola del navegador o Buffer.from(..., "base64") en Node, decodifica su payload sin usar ninguna librería de JWT ni conocer el secreto. Explica qué demuestra esto sobre la confidencialidad del payload.',
      solution: `// El payload es la segunda parte del token (entre el primer y el segundo punto)
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyLCJyb2wiOiJhZG1pbiJ9.firma...';
const [, payloadBase64] = token.split('.');

// En el navegador:
console.log(JSON.parse(atob(payloadBase64)));

// En Node.js:
console.log(JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf-8')));

// Resultado: { userId: 42, rol: "admin" }
// Esto demuestra que el payload es legible por cualquiera sin necesidad del secreto:
// el JWT NO cifra los datos, solo los codifica y los firma. La firma protege la integridad
// (que no se haya modificado), no la confidencialidad.`
    },
    {
      title: 'Genera y verifica un JWT con expiración',
      description:
        'Usando jsonwebtoken, escribe una función que genere un token para un usuario con una expiración de 15 minutos, y otra que lo verifique y capture el error específico de token expirado.',
      language: 'javascript',
      solution: `import jwt from 'jsonwebtoken';

const SECRETO = process.env.JWT_SECRET; // nunca hardcodeado

function generarToken(usuario) {
  return jwt.sign(
    { userId: usuario.id, rol: usuario.rol },
    SECRETO,
    { expiresIn: '15m' }
  );
}

function verificarToken(token) {
  try {
    return jwt.verify(token, SECRETO);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('El token ha caducado, vuelve a iniciar sesión');
    }
    throw new Error('Token inválido');
  }
}`
    }
  ];

  const summary = `Un JWT es un token firmado que permite transmitir información de autenticación de forma autocontenida, pero firmado no significa cifrado.

• Un JWT se compone de header, payload y signature, codificados en Base64URL y unidos por puntos
• El payload es solo Base64, no está cifrado: cualquiera puede leerlo, así que nunca debe contener datos sensibles
• La firma garantiza integridad (que el token no se ha modificado), verificable solo por quien conoce el secreto o la clave privada
• Los tokens deben tener una expiración corta (expiresIn); para sesiones largas, se combina con un refresh token
• Guardar el JWT en localStorage es legible por cualquier script que se ejecute en la página (riesgo de XSS); una cookie httpOnly reduce ese riesgo porque JavaScript no puede acceder a ella
• Ninguna de estas medidas sustituye a validar y sanitizar bien los datos de entrada de tu aplicación, que verás en próximas lecciones`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es un JWT (JSON Web Token), su estructura y cómo usarlo de forma segura en autenticación"
        breadcrumbs={breadcrumbs}
        seoTitle="JWT: tokens seguros | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Aprende qué es un JWT (JSON Web Token), cómo está estructurado y las buenas prácticas para usarlo de forma segura en la autenticación de tus aplicaciones."
        seoKeywords="jwt, json web token, tokens seguros, autenticacion jwt"
        url="https://fullstackdevlovers.com/ciberseguridad/autenticacion/jwt-tokens-seguros"
      >
        <p>
          En la lección anterior viste que los tokens son una alternativa a las sesiones con cookies: en
          lugar de que el servidor guarde el estado de la sesión, el propio token lleva la información
          necesaria y el cliente lo presenta en cada petición. El formato de token más usado en el mundo
          backend es el <strong>JWT (JSON Web Token)</strong>. En esta lección vas a entender exactamente
          qué contiene, cómo generarlo y verificarlo, y —lo más importante— qué errores de seguridad
          cometen muchos desarrolladores junior al usarlo.
        </p>

        <LessonSection title="¿Qué es un JWT?">
          <p>
            Un <strong>JWT</strong> es una cadena de texto compacta que representa un conjunto de datos (
            <em>claims</em>) firmados digitalmente. Se usa sobre todo para transportar información de
            autenticación y autorización entre el servidor y el cliente sin que el servidor tenga que
            guardar nada. Un JWT tiene siempre tres partes separadas por puntos:
          </p>
          <CodeBlock
            language="text"
            title="Estructura de un JWT"
            code={`eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyLCJyb2wiOiJhZG1pbiJ9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

  header    .        payload         .        signature`}
          />
          <Table
            headers={['Parte', 'Contenido', 'Codificación']}
            rows={[
              [
                'Header',
                'Metadatos: el algoritmo de firma usado (p. ej. HS256) y el tipo de token (JWT)',
                'Base64URL (legible, no secreto)'
              ],
              [
                'Payload',
                'Los claims: los datos en sí (userId, rol, fecha de expiración...)',
                'Base64URL (legible, no secreto)'
              ],
              [
                'Signature',
                'El resultado de firmar header + payload con una clave secreta (o privada)',
                'No es reversible sin conocer la clave'
              ]
            ]}
          />
        </LessonSection>

        <LessonSection title="El payload no está cifrado, solo codificado">
          <p>
            Este es probablemente el malentendido más común y más peligroso sobre JWT: el header y el
            payload están en <strong>Base64URL</strong>, no en un formato cifrado. Base64 no es un
            mecanismo de seguridad, es solo una forma de representar bytes como texto. Cualquiera que
            tenga el token —sin conocer ningún secreto— puede decodificar el payload y leer su contenido
            completo.
          </p>
          <CodeBlock
            language="javascript"
            title="Decodificar el payload sin ninguna librería de JWT"
            code={`const payloadBase64 = token.split('.')[1];
const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf-8'));

console.log(payload); // { userId: 42, rol: "admin", iat: ..., exp: ... }`}
          />
          <InfoBox type="error" title="Nunca guardes datos sensibles en el payload">
            Contraseñas, números de tarjeta, tokens de terceros o cualquier dato confidencial no deben
            aparecer nunca en el payload de un JWT: cualquiera con el token puede leerlos, aunque no pueda
            modificarlos sin invalidar la firma. El payload es público; la firma protege la{' '}
            <strong>integridad</strong>, no la <strong>confidencialidad</strong>.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Generar y verificar un JWT en Node.js">
          <p>
            La librería más habitual en el ecosistema Node.js para trabajar con JWT es{' '}
            <code>jsonwebtoken</code>. El servidor firma el token al hacer login, y lo verifica en cada
            petición protegida.
          </p>
          <CodeBlock language="bash" code="npm install jsonwebtoken" />
          <CodeBlock
            language="javascript"
            title="Generar un token al hacer login"
            code={`import jwt from 'jsonwebtoken';

const SECRETO = process.env.JWT_SECRET; // nunca hardcodeado en el código

function generarToken(usuario) {
  return jwt.sign(
    { userId: usuario.id, rol: usuario.rol }, // payload: solo datos no sensibles
    SECRETO,
    { expiresIn: '15m' } // vida corta
  );
}`}
          />
          <CodeBlock
            language="javascript"
            title="Middleware de Express para verificar el token en rutas protegidas"
            code={`function autenticar(req, res, next) {
  const authHeader = req.headers.authorization; // formato esperado: "Bearer <token>"
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No se ha enviado ningún token' });
  }

  try {
    const payload = jwt.verify(token, SECRETO);
    req.user = payload; // { userId, rol, iat, exp }
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o caducado' });
  }
}

app.get('/perfil', autenticar, (req, res) => {
  res.json({ userId: req.user.userId });
});`}
          />
        </LessonSection>

        <LessonSection title="Errores comunes al usar JWT">
          <ul>
            <li>
              <strong>Guardar datos sensibles en el payload</strong>, asumiendo por error que está
              cifrado. Ya lo has visto: no lo está.
            </li>
            <li>
              <strong>Tokens sin expiración, o con una expiración demasiado larga</strong>. Un JWT robado
              sigue siendo válido hasta que expira; cuanto más corta sea su vida útil, menor la ventana de
              riesgo. Para sesiones largas se usa un patrón de{' '}
              <strong>refresh token</strong>: un token de vida corta para las peticiones normales y otro,
              de vida más larga y guardado con más cuidado, para renovar el primero sin pedir de nuevo las
              credenciales.
            </li>
            <li>
              <strong>Usar el algoritmo "none" o aceptar cualquier algoritmo</strong> en la verificación,
              lo que permitiría a un atacante enviar un token sin firmar. La librería{' '}
              <code>jsonwebtoken</code> requiere indicar los algoritmos permitidos al verificar en
              proyectos sensibles, precisamente para evitar este ataque.{' '}
              {/* TODO-verificar: confirmar el comportamiento exacto por defecto de jsonwebtoken frente a algorithm confusion en la versión actual de la librería */}
            </li>
            <li>
              <strong>No invalidar tokens comprometidos</strong>. Al ser autocontenidos, un JWT no se
              puede "borrar" del lado del servidor como una sesión; si necesitas poder revocarlo antes de
              su expiración, hace falta una lista de revocación o un almacén adicional, lo que reduce parte
              de la ventaja de no guardar estado.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="Dónde guardar el JWT en el cliente">
          <p>
            Una vez que el cliente (una SPA en React, por ejemplo) recibe el token, tiene que guardarlo en
            algún sitio para enviarlo en las siguientes peticiones. Las dos opciones más comunes tienen
            implicaciones de seguridad muy distintas:
          </p>
          <Table
            headers={['Dónde guardarlo', 'Accesible desde JavaScript', 'Riesgo principal']}
            rows={[
              [
                'localStorage / sessionStorage',
                'Sí',
                'Vulnerable a XSS: si un atacante consigue inyectar y ejecutar JavaScript en tu página, puede leer el token directamente y robarlo'
              ],
              [
                'Cookie httpOnly + Secure',
                'No (JavaScript no puede leer una cookie httpOnly)',
                'Vulnerable a CSRF si no se aplican protecciones adicionales (como SameSite), aunque el token en sí no es legible por scripts maliciosos'
              ]
            ]}
          />
          <InfoBox type="warning" title="No existe una opción sin riesgos">
            Una cookie httpOnly protege frente a XSS robando el token, pero abre la puerta a CSRF si no se
            configura con el atributo <code>SameSite</code> adecuado (y, cuando aplique, protecciones CSRF
            adicionales). localStorage evita el problema de CSRF pero queda totalmente expuesto ante
            cualquier XSS. La elección depende del resto de tu estrategia de seguridad, no es una decisión
            aislada.{' '}
            {/* TODO-verificar: confirmar recomendación actualizada de OWASP sobre almacenamiento de tokens en SPA */}
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
