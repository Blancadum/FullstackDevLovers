import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonNodejsJwt() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Autenticación y JWT"
        description="Cómo implementar autenticación en Node.js usando JSON Web Tokens."
        breadcrumbs={breadcrumbs}
        seoTitle="Autenticación con JWT en Node.js | Fullstack Dev Lovers"
        seoDescription="Aprende a implementar autenticación en Node.js con JSON Web Tokens (JWT): generación, verificación y rutas protegidas."
        seoKeywords="node.js, jwt, autenticación, json web token, seguridad"
        url="https://fullstackdevlovers.com/backend/nodejs/jwt"
      >
        <p>
          Hasta ahora, cualquiera podía llamar a cualquier ruta de tu API. Toca cerrar esa
          puerta: vas a aprender a registrar usuarios guardando contraseñas de forma segura,
          generar un <strong>JWT</strong> al iniciar sesión y proteger rutas con el
          middleware que ya conoces de la lección de routing, aplicado ahora para verificar
          tokens.
        </p>

        <LessonSection title="Autenticación vs autorización" level={1}>
          <ul>
            <li><strong>Autenticación:</strong> comprobar quién eres (login con usuario y contraseña).</li>
            <li><strong>Autorización:</strong> comprobar qué puedes hacer una vez identificado (por ejemplo, si eres administrador).</li>
          </ul>
          <p>
            En esta lección nos centramos en la autenticación y en cómo mantenerla a lo
            largo de varias peticiones usando JWT, ya que HTTP es{' '}
            <strong>stateless</strong> (el servidor no recuerda quién eres entre una
            petición y la siguiente, como viste en la lección de REST).
          </p>
        </LessonSection>

        <LessonSection title="Qué es un JWT" level={1}>
          <p>
            Un <strong>JSON Web Token</strong> es una cadena de texto que codifica
            información (por ejemplo, el id de un usuario) y va firmada digitalmente. Tiene
            tres partes separadas por puntos: <code>cabecera.payload.firma</code>.
          </p>
          <ul>
            <li><strong>Cabecera:</strong> algoritmo de firma usado.</li>
            <li><strong>Payload:</strong> los datos que quieres guardar en el token (id de usuario, rol...).</li>
            <li><strong>Firma:</strong> garantiza que el token no se ha modificado desde que el servidor lo generó.</li>
          </ul>
          <InfoBox type="warning">
            El payload de un JWT <strong>no está cifrado</strong>, solo codificado en
            Base64: cualquiera puede leerlo (pruébalo en jwt.io). Nunca guardes contraseñas
            ni datos sensibles dentro de un JWT; la firma solo garantiza que no se ha
            manipulado, no que sea secreto.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Hashear contraseñas con bcrypt" level={1}>
          <p>
            Antes de generar ningún token hace falta poder registrar usuarios de forma
            segura. Las contraseñas nunca se guardan en texto plano en la base de datos:
            se guardan hasheadas con <code>bcrypt</code>.
          </p>
          <CodeBlock language="bash" code="npm install bcrypt jsonwebtoken" />
          <CodeBlock
            language="javascript"
            title="routes/auth.js"
            code={`const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const router = express.Router();

router.post('/registro', async (req, res) => {
  const { email, password } = req.body;

  const passwordHasheado = await bcrypt.hash(password, 10); // 10 = coste del hash

  const usuario = await Usuario.create({
    email,
    password: passwordHasheado
  });

  res.status(201).json({ id: usuario.id, email: usuario.email });
});`}
          />
          <InfoBox type="tip">
            El segundo argumento de <code>bcrypt.hash()</code> es el "salt rounds": a más
            número, más lento (y más seguro frente a ataques de fuerza bruta) es el hash.
            OWASP recomienda no bajar de 10; hoy en día 12 es un punto de partida más
            habitual, siempre que el tiempo de hash resultante siga siendo aceptable para tu
            servidor.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Generar un token en el login" level={1}>
          <CodeBlock
            language="javascript"
            code={`const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const passwordCorrecta = await bcrypt.compare(password, usuario.password);
  if (!passwordCorrecta) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});`}
          />
          <p>
            <code>bcrypt.compare()</code> compara la contraseña recibida con el hash
            guardado, sin necesidad de deshacer el hash (no es posible: bcrypt no es
            reversible). <code>jwt.sign()</code> genera el token firmado con un secreto
            guardado en variables de entorno, igual que hiciste con las credenciales de la
            base de datos.
          </p>
        </LessonSection>

        <LessonSection title="Proteger rutas con un middleware de autenticación" level={1}>
          <p>
            El cliente debe enviar el token en cada petición a una ruta protegida, casi
            siempre en la cabecera <code>Authorization</code> con el prefijo{' '}
            <code>Bearer</code>. Un middleware, como los que viste en la lección de routing,
            se encarga de verificarlo:
          </p>
          <CodeBlock
            language="javascript"
            title="middleware/auth.js"
            code={`const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload; // disponible en las siguientes rutas
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

module.exports = verificarToken;`}
          />
          <CodeBlock
            language="javascript"
            title="routes/tareas.js"
            code={`const verificarToken = require('../middleware/auth');

// Solo usuarios autenticados pueden crear tareas
router.post('/', verificarToken, async (req, res) => {
  const nuevaTarea = await Tarea.create({
    titulo: req.body.titulo,
    usuarioId: req.usuario.id
  });
  res.status(201).json(nuevaTarea);
});`}
          />
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Autenticación identifica quién eres; autorización decide qué puedes hacer.</li>
            <li>Las contraseñas nunca se guardan en texto plano: se hashean con <code>bcrypt</code>.</li>
            <li>Un JWT tiene tres partes (cabecera, payload, firma) y no cifra su contenido, solo lo firma.</li>
            <li><code>jwt.sign()</code> genera el token en el login; <code>jwt.verify()</code> lo valida en cada petición protegida.</li>
            <li>El token viaja en la cabecera <code>Authorization: Bearer &lt;token&gt;</code>.</li>
            <li>Un middleware de autenticación (igual que los de la lección de routing) protege las rutas que lo necesiten.</li>
          </ul>
        </LessonSection>
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
