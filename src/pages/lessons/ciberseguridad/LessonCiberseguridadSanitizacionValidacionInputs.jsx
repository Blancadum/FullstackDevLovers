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

export function LessonCiberseguridadSanitizacionValidacionInputs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Sanitización y validación de inputs';

  const keyPoints = [
    'Validar responde a "¿este dato tiene el formato que espero?" y sanitizar responde a "¿cómo limpio o escapo este dato antes de usarlo?"',
    'Nunca confíes en la validación del frontend: cualquiera puede saltársela con las DevTools, Postman o curl',
    'Toda petición que llega al backend debe validarse de nuevo en el servidor, sin excepciones',
    'Librerías como Joi o Zod permiten definir esquemas de validación declarativos, en vez de encadenar decenas de if',
    'La validación previene datos con formato incorrecto; la sanitización/escapado previene que un dato válido en formato se interprete como código (SQL, HTML, comandos...)'
  ];

  const exercises = [
    {
      title: 'Esquema de validación con Zod',
      description:
        'Define un esquema de validación con Zod para un endpoint POST /api/usuarios que reciba nombre (string, entre 2 y 50 caracteres), email (formato email válido) y edad (número entero entre 18 y 120). Escribe el middleware que valide el body y devuelva un 400 con los errores si no es válido.',
      language: 'javascript',
      solution: `const { z } = require('zod');

const esquemaUsuario = z.object({
  nombre: z.string().min(2).max(50),
  email: z.string().email(),
  edad: z.number().int().min(18).max(120)
});

function validarUsuario(req, res, next) {
  const resultado = esquemaUsuario.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      error: 'Datos de usuario inválidos',
      detalles: resultado.error.flatten().fieldErrors
    });
  }

  // req.body ya validado (y con los tipos correctos) para el resto de la ruta
  req.body = resultado.data;
  next();
}

app.post('/api/usuarios', validarUsuario, (req, res) => {
  // en este punto req.body.nombre, .email y .edad son de fiar en cuanto a formato
  res.status(201).json({ mensaje: 'Usuario creado' });
});`
    },
    {
      title: 'Detecta el fallo de seguridad',
      description:
        'El siguiente endpoint valida el email en el frontend con una expresión regular en JavaScript, pero el backend confía ciegamente en el dato recibido y lo inserta directamente en una consulta SQL con concatenación de strings. Explica qué falla y reescribe el backend de forma segura (puedes usar una librería de validación y una consulta parametrizada).',
      language: 'javascript',
      solution: `// ANTES (inseguro):
// app.post('/api/newsletter', (req, res) => {
//   const { email } = req.body;
//   db.query("INSERT INTO newsletter (email) VALUES ('" + email + "')");
//   res.sendStatus(201);
// });
//
// Fallos:
// 1. Se confía en que el frontend ya validó el email (el backend no vuelve a comprobarlo).
// 2. El email se concatena directamente en el SQL: un valor como
//    "x'); DROP TABLE newsletter; --" abriría la puerta a una inyección SQL.

const { z } = require('zod');

const esquemaEmail = z.object({
  email: z.string().email()
});

app.post('/api/newsletter', (req, res) => {
  const resultado = esquemaEmail.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const { email } = resultado.data;

  // Consulta parametrizada: el driver escapa el valor, no se concatena como texto
  db.query('INSERT INTO newsletter (email) VALUES (?)', [email], (err) => {
    if (err) return res.status(500).json({ error: 'Error al guardar el email' });
    res.sendStatus(201);
  });
});`
    }
  ];

  const summary = `Validar y sanitizar no son lo mismo, aunque suelan ir de la mano. Validar consiste en comprobar que un
dato de entrada cumple el formato esperado (un email con forma de email, una edad que sea un número entero
dentro de un rango razonable) y rechazarlo si no lo cumple. Sanitizar consiste en limpiar o escapar un dato
para que, aunque tenga un formato válido, no pueda interpretarse como código cuando se use en otro contexto
(una consulta SQL, una página HTML, un comando de sistema). La regla de oro es que ambas cosas deben
ocurrir siempre en el backend: la validación en el cliente mejora la experiencia de usuario (feedback
inmediato), pero no aporta ninguna seguridad real, porque cualquier persona puede saltársela enviando la
petición directamente con herramientas como curl o Postman. Librerías como Joi o Zod facilitan definir
esquemas de validación claros y reutilizables, y usar consultas parametrizadas (en vez de concatenar
strings) es la forma habitual de evitar que un dato "sanitizado a medias" acabe convirtiéndose en una
inyección SQL.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Por qué sanitizar y validar todos los datos de entrada es la primera línea de defensa de una aplicación"
        breadcrumbs={breadcrumbs}
        seoTitle="Sanitización y validación de inputs | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Aprende las técnicas de sanitización y validación de inputs para prevenir ataques de inyección y proteger la integridad de los datos de tu aplicación."
        seoKeywords="sanitizacion de inputs, validacion de datos, seguridad inputs, validacion formularios"
        url="https://fullstackdevlovers.com/ciberseguridad/buenas-practicas/sanitizacion-validacion-inputs"
      >
        <p>
          Llegamos a la última sección del módulo: buenas prácticas y herramientas que deberías aplicar en
          cualquier proyecto real, más allá de las vulnerabilidades concretas que ya hemos visto (inyección
          SQL, XSS, CSRF...). Empezamos por la base de todo: cómo tratar los datos que le llegan a tu
          backend desde fuera, porque un input mal validado o sin sanitizar es la puerta de entrada a la
          mayoría de los ataques que hemos estudiado hasta ahora.
        </p>

        <LessonSection title="Validar vs. sanitizar: dos cosas distintas">
          <p>
            Aunque se suelen mencionar juntas, validación y sanitización responden a preguntas diferentes:
          </p>
          <ul>
            <li>
              <strong>Validación:</strong> ¿este dato tiene el formato que yo espero? Por ejemplo, ¿el campo
              "email" parece realmente un email?, ¿el campo "edad" es un número entero dentro de un rango
              razonable? Si el dato no cumple el formato esperado, se <strong>rechaza</strong> directamente,
              normalmente con un error 400.
            </li>
            <li>
              <strong>Sanitización:</strong> ¿cómo limpio o transformo este dato para que, aunque tenga un
              formato válido, no pueda causar daño cuando lo use en otro contexto? Por ejemplo, escapar
              caracteres especiales de HTML antes de insertar un comentario de usuario en una página, o usar
              una consulta parametrizada en vez de concatenar el dato directamente en una sentencia SQL.
            </li>
          </ul>
          <InfoBox type="tip" title="Un ejemplo para verlo claro">
            El texto <code>{`<script>alert('hola')</script>`}</code> es un valor de formato "válido" para un
            campo de texto libre (nombre de un comentario, por ejemplo): no falla ninguna validación de
            longitud ni de tipo. El problema aparece si ese texto se sanitiza mal y acaba insertándose tal
            cual en una página HTML, donde el navegador lo interpretaría como código ejecutable. Ya viste
            este caso en detalle en la lección de XSS.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Por qué nunca puedes confiar solo en el frontend">
          <p>
            Es habitual añadir validaciones en el formulario del cliente: un <code>required</code>, un
            patrón en un <code>&lt;input&gt;</code>, o una función de JavaScript que comprueba el formato
            antes de enviar el formulario. Está bien hacerlo, porque mejora la experiencia de usuario (el
            error aparece al instante, sin esperar a una respuesta del servidor). Pero esa validación{' '}
            <strong>no aporta ninguna seguridad real</strong>.
          </p>
          <p>
            La razón es sencilla: el frontend se ejecuta en un navegador que controla por completo la
            persona que lo usa. Cualquiera puede abrir las herramientas de desarrollador y modificar el
            HTML, desactivar el JavaScript, o directamente ignorar tu formulario y enviar la petición
            HTTP con curl, Postman o un script propio. Si tu backend confía en que "el frontend ya lo validó",
            está confiando en algo que no controla en absoluto.
          </p>
          <InfoBox type="warning" title="Regla sin excepciones">
            La validación (y la sanitización) del cliente es una mejora de experiencia de usuario. La
            validación real, la que protege tu aplicación, ocurre siempre en el servidor. Todo lo que llega
            al backend —venga de tu propio frontend o de cualquier otro sitio— debe tratarse como no fiable
            hasta que se valida.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Validación con esquemas: el ejemplo de Zod">
          <p>
            Escribir validaciones a mano con muchos <code>if</code> encadenados es propenso a errores y
            difícil de mantener. Por eso en Node.js es habitual usar librerías de validación basadas en
            esquemas, como <strong>Joi</strong> o <strong>Zod</strong>, que permiten declarar la forma
            esperada de un dato de forma clara y centralizada.
          </p>
          <p>
            Un ejemplo con Zod, validando el body de una petición de registro:
          </p>
          <CodeBlock
            language="javascript"
            code={`const { z } = require('zod');

// 1. Se define el esquema: la forma que debe tener el dato
const esquemaRegistro = z.object({
  nombre: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8)
});

app.post('/api/registro', (req, res) => {
  // 2. Se valida el body de la petición contra el esquema
  const resultado = esquemaRegistro.safeParse(req.body);

  if (!resultado.success) {
    // 3. Si no es válido, se rechaza con un 400 y detalles del error
    return res.status(400).json({
      error: 'Datos de registro inválidos',
      detalles: resultado.error.flatten().fieldErrors
    });
  }

  // 4. A partir de aquí, resultado.data tiene el formato garantizado
  const { nombre, email, password } = resultado.data;

  // ... crear el usuario (recuerda hashear la contraseña, no guardarla en texto plano)
});`}
          />
          <p>
            Si prefieres no depender de una librería externa, también puedes hacer validación manual para
            casos simples, aunque escala peor cuantos más campos y reglas tengas:
          </p>
          <CodeBlock
            language="javascript"
            code={`function validarRegistro(body) {
  const errores = [];

  if (typeof body.nombre !== 'string' || body.nombre.length < 2 || body.nombre.length > 50) {
    errores.push('El nombre debe tener entre 2 y 50 caracteres');
  }

  const regexEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (typeof body.email !== 'string' || !regexEmail.test(body.email)) {
    errores.push('El email no tiene un formato válido');
  }

  if (typeof body.password !== 'string' || body.password.length < 8) {
    errores.push('La contraseña debe tener al menos 8 caracteres');
  }

  return errores;
}

app.post('/api/registro', (req, res) => {
  const errores = validarRegistro(req.body);

  if (errores.length > 0) {
    return res.status(400).json({ error: 'Datos inválidos', detalles: errores });
  }

  // ... continuar con el registro
});`}
          />
          <InfoBox type="info" title="Sanitización más allá de la validación">
            Validar el formato no siempre es suficiente. Para prevenir inyección SQL, la técnica clave son
            las <strong>consultas parametrizadas</strong> (vistas en la lección de inyección SQL), no
            escapar el texto a mano. Para prevenir XSS, la clave es escapar el contenido al insertarlo en
            HTML, algo que la mayoría de frameworks de frontend (React incluido) hacen automáticamente al
            renderizar texto dentro de JSX. Cada tipo de "destino" del dato (SQL, HTML, un comando de
            sistema...) tiene su propia técnica de sanitización, y ya las trataste en las lecciones
            correspondientes de este módulo.
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
