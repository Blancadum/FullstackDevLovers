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

export function LessonCiberseguridadGestionSeguraContrasenas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Gestión segura de contraseñas (hashing, bcrypt, salts)';

  const keyPoints = [
    'Una contraseña nunca se guarda en texto plano: si la base de datos se filtra, todas las cuentas quedan expuestas de inmediato',
    'El hashing es una función de un solo sentido: convierte la contraseña en una cadena de longitud fija que no se puede revertir para obtener la original',
    'Cifrado y hashing no son lo mismo: el cifrado es reversible (con la clave adecuada); el hashing no lo es, ni siquiera para quien lo generó',
    'Un salt es un valor aleatorio único por contraseña que se combina con ella antes de aplicar el hash, para que dos contraseñas iguales no generen el mismo hash',
    'bcrypt genera y guarda el salt automáticamente como parte del propio hash resultante, así que no hay que gestionarlo aparte',
    'MD5 y SHA-1 (y SHA-256 sin más) son demasiado rápidos: permiten a un atacante probar miles de millones de combinaciones por segundo, por eso no son adecuados para contraseñas'
  ];

  const exercises = [
    {
      title: 'Registro y login con bcrypt',
      description:
        'Escribe dos funciones para un sistema de autenticación: registrarUsuario(email, contraseñaPlano), que hashea la contraseña antes de guardarla, y iniciarSesion(email, contraseñaPlano), que compara la contraseña introducida contra el hash guardado sin descifrar nada.',
      language: 'javascript',
      solution: `import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

async function registrarUsuario(email, contraseñaPlano) {
  const hash = await bcrypt.hash(contraseñaPlano, SALT_ROUNDS);
  // Guardar en la base de datos: { email, contraseñaHash: hash }
  return await db.usuarios.crear({ email, contraseñaHash: hash });
}

async function iniciarSesion(email, contraseñaPlano) {
  const usuario = await db.usuarios.buscarPorEmail(email);
  if (!usuario) {
    throw new Error('Credenciales inválidas'); // mensaje genérico, no reveles si el email existe
  }

  const coincide = await bcrypt.compare(contraseñaPlano, usuario.contraseñaHash);
  if (!coincide) {
    throw new Error('Credenciales inválidas');
  }

  return usuario;
}`
    },
    {
      title: 'Explica por qué falla este código',
      description:
        'Un compañero ha escrito el siguiente código para guardar contraseñas. Identifica los dos problemas de seguridad y corrígelo.',
      language: 'javascript',
      solution: `// Código original (con problemas):
const crypto = require('crypto');

function guardarContraseña(contraseña) {
  return crypto.createHash('md5').update(contraseña).digest('hex');
}

// Problemas:
// 1. MD5 es un algoritmo de hash rápido y roto criptográficamente: es fácil generar
//    tablas precalculadas (rainbow tables) y probar miles de millones de combinaciones
//    por segundo con hardware moderno.
// 2. No usa salt: dos usuarios con la misma contraseña obtendrían exactamente el mismo hash,
//    lo que facilita ataques con tablas precalculadas y revela quién comparte contraseña.

// Corrección: usar bcrypt, que aplica un salt automático y está diseñado para ser lento.
const bcrypt = require('bcrypt');

async function guardarContraseña(contraseña) {
  return await bcrypt.hash(contraseña, 12);
}`
    }
  ];

  const summary = `Las contraseñas nunca se guardan tal cual: se transforman con una función de hash diseñada para ser lenta e irreversible.

• Nunca se guarda una contraseña en texto plano: una filtración de la base de datos expondría todas las cuentas al instante
• El hashing es de un solo sentido: no existe una función para "deshacer" un hash y recuperar la contraseña original, ni siquiera con la clave
• Cifrado (reversible, con clave) y hashing (irreversible) son mecanismos distintos con propósitos distintos; las contraseñas usan hashing, no cifrado
• El salt es un valor aleatorio único por contraseña que evita que contraseñas iguales generen el mismo hash
• bcrypt gestiona el salt automáticamente y está diseñado deliberadamente para ser lento, lo que dificulta los ataques de fuerza bruta
• MD5, SHA-1 y SHA-256 "a secas" son demasiado rápidos y no fueron diseñados para contraseñas: usa siempre un algoritmo pensado específicamente para ello, como bcrypt, scrypt o Argon2`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Cómo almacenar contraseñas de forma segura mediante hashing, bcrypt y salts"
        breadcrumbs={breadcrumbs}
        seoTitle="Gestión segura de contraseñas (hashing, bcrypt, salts) | Ciberseguridad - Fullstack Dev Lovers"
        seoDescription="Aprende a gestionar contraseñas de forma segura: qué es el hashing, cómo funciona bcrypt y por qué los salts son esenciales para proteger las credenciales de tus usuarios."
        seoKeywords="hashing contrasenas, bcrypt, salts, gestion segura de contrasenas"
        url="https://fullstackdevlovers.com/ciberseguridad/autenticacion/gestion-segura-contrasenas"
      >
        <p>
          Ya has visto cómo autenticar a un usuario y cómo emitirle un token una vez identificado. Pero
          hay un paso anterior, igual de crítico: <strong>cómo guardas la contraseña</strong> que ese
          usuario introdujo al registrarse. Es una de las decisiones de diseño con más impacto en la
          seguridad de cualquier aplicación, porque cuando algo sale mal aquí, no falla una función:
          fallan todas las cuentas de todos tus usuarios a la vez.
        </p>

        <LessonSection title="Por qué nunca se guarda una contraseña en texto plano">
          <p>
            Guardar contraseñas tal cual en una columna de tu base de datos parece funcionar perfectamente
            durante el desarrollo... hasta que esa base de datos se filtra, se expone por error o alguien
            con acceso interno hace un mal uso de ella. En ese momento, un almacenamiento en texto plano
            entrega directamente las contraseñas de todos tus usuarios, y con ellas, probablemente el
            acceso a otras cuentas suyas: mucha gente reutiliza contraseñas entre servicios distintos.
          </p>
          <InfoBox type="error" title="No es un riesgo hipotético">
            Las filtraciones de bases de datos con contraseñas en texto plano o mal protegidas son una de
            las causas más habituales de robo de credenciales a gran escala. Diseñar como si la filtración
            fuera a ocurrir algún día —y minimizar el daño que causaría— es la actitud correcta desde el
            primer commit.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Hashing vs. cifrado: no son lo mismo">
          <p>
            Es habitual confundir estos dos términos, pero representan operaciones muy distintas:
          </p>
          <Table
            headers={['', 'Cifrado (encryption)', 'Hashing']}
            rows={[
              ['¿Es reversible?', 'Sí, con la clave adecuada (descifrado)', 'No, ni siquiera con ninguna clave'],
              [
                'Propósito típico',
                'Proteger datos que necesitas recuperar más tarde (por ejemplo, un número de tarjeta)',
                'Verificar un dato sin necesidad de conocerlo ni recuperarlo (por ejemplo, una contraseña)'
              ],
              [
                'Ejemplo de algoritmo',
                'AES',
                'bcrypt, scrypt, Argon2 (para contraseñas); SHA-256 (para integridad de archivos, no contraseñas)'
              ]
            ]}
          />
          <p>
            Una contraseña no necesita "recuperarse" nunca: para comprobar si el usuario la ha escrito bien
            al hacer login, basta con volver a aplicar el mismo proceso a lo que ha introducido y comparar
            el resultado. Por eso las contraseñas usan <strong>hashing</strong>, no cifrado: si ni siquiera
            tú, como desarrollador, puedes revertir el hash, tampoco podrá un atacante que robe la base de
            datos.
          </p>
        </LessonSection>

        <LessonSection title="Qué es un salt y por qué es necesario">
          <p>
            Un <strong>salt</strong> es un valor aleatorio, distinto para cada contraseña, que se combina
            con la contraseña original antes de aplicar el hash. Sin salt, dos usuarios con la misma
            contraseña ("123456", por desgracia frecuente) generarían exactamente el mismo hash en la base
            de datos, lo que tiene dos consecuencias negativas:
          </p>
          <ul>
            <li>
              Un atacante que vea dos hashes idénticos sabe que esos dos usuarios comparten contraseña, sin
              necesidad de romper nada.
            </li>
            <li>
              Facilita el uso de <strong>tablas precalculadas</strong> (rainbow tables): listas enormes de
              hashes ya calculados para contraseñas comunes, que permiten "buscar" el hash filtrado en
              lugar de calcularlo.
            </li>
          </ul>
          <p>
            Con un salt único por contraseña, dos contraseñas idénticas generan hashes completamente
            distintos, y las tablas precalculadas dejan de servir: el atacante tendría que recalcular una
            tabla distinta para cada salt, lo cual no es viable en la práctica.
          </p>
        </LessonSection>

        <LessonSection title="bcrypt en Node.js: registro y login">
          <p>
            <code>bcrypt</code> es una de las librerías más usadas para hashear contraseñas en Node.js.
            Genera el salt automáticamente y lo incorpora dentro del propio hash resultante, así que no
            necesitas guardarlo en una columna aparte.
          </p>
          <CodeBlock language="bash" code="npm install bcrypt" />
          <CodeBlock
            language="javascript"
            title="Hashear la contraseña al registrar un usuario"
            code={`import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // coste computacional del hash: más alto = más lento y más seguro

async function registrarUsuario(email, contraseñaPlano) {
  const hash = await bcrypt.hash(contraseñaPlano, SALT_ROUNDS);
  // hash ya incluye el salt: algo como
  // $2b$12$KIXQ4b8H9F5j... (formato propio de bcrypt)
  return await db.usuarios.crear({ email, contraseñaHash: hash });
}`}
          />
          <CodeBlock
            language="javascript"
            title="Verificar la contraseña al hacer login"
            code={`async function iniciarSesion(email, contraseñaPlano) {
  const usuario = await db.usuarios.buscarPorEmail(email);
  if (!usuario) {
    throw new Error('Credenciales inválidas');
  }

  // bcrypt.compare extrae el salt del propio hash guardado y repite el proceso
  const coincide = await bcrypt.compare(contraseñaPlano, usuario.contraseñaHash);
  if (!coincide) {
    throw new Error('Credenciales inválidas');
  }

  return usuario;
}`}
          />
          <InfoBox type="tip" title="Mensajes de error genéricos">
            Nota que ambos casos de fallo (usuario inexistente y contraseña incorrecta) lanzan el mismo
            mensaje genérico. Si distingues "el usuario no existe" de "la contraseña es incorrecta", le
            estás regalando a un atacante la posibilidad de averiguar qué correos están registrados en tu
            sistema.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Por qué MD5 y SHA-1 no sirven para contraseñas">
          <p>
            MD5 y SHA-1 son funciones de hash, sí, pero fueron diseñadas para verificar la integridad de
            datos (por ejemplo, comprobar que un archivo descargado no se ha corrompido), no para proteger
            contraseñas. El problema es su velocidad: son{' '}
            <strong>demasiado rápidas</strong>.
          </p>
          <p>
            Un hardware moderno puede calcular miles de millones de hashes MD5 o SHA-1 por segundo. Esto
            significa que un atacante con la base de datos filtrada puede probar contraseñas comunes (o
            incluso todas las combinaciones posibles de contraseñas cortas) a una velocidad altísima. bcrypt
            —y algoritmos similares como scrypt o Argon2— están diseñados{' '}
            <strong>deliberadamente para ser lentos</strong> y consumir recursos (CPU, memoria), lo que
            reduce drásticamente cuántos intentos por segundo puede hacer un atacante, incluso con hardware
            especializado.{' '}
            {/* TODO-verificar: incluir cifras concretas y actualizadas de hashes/segundo por algoritmo y hardware, que cambian con el tiempo */}
          </p>
          <InfoBox type="warning" title="SHA-256 tampoco es la respuesta">
            SHA-256 es más robusto criptográficamente que MD5 o SHA-1, pero sigue siendo{' '}
            <strong>rápido por diseño</strong> (se usa, por ejemplo, en blockchain, donde la velocidad es
            una ventaja). Para contraseñas, la velocidad es un problema, no una ventaja: usa siempre un
            algoritmo pensado específicamente para contraseñas, como bcrypt, scrypt o Argon2.
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
