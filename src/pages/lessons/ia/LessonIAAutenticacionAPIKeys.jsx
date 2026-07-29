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

export function LessonIAAutenticacionAPIKeys() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Autenticación y gestión de API Keys';

  const keyPoints = [
    'Una API key es una credencial que identifica y autentica tus peticiones; cualquiera que la tenga puede usarla en tu nombre',
    'Las claves se obtienen desde el panel de desarrollador del proveedor (Anthropic, OpenAI...) y normalmente solo se muestran completas una vez, al crearlas',
    'Nunca se hardcodea una API key en el código: se carga desde variables de entorno, típicamente con un archivo .env y el paquete dotenv',
    'El archivo .env debe añadirse a .gitignore para que nunca llegue a subirse al repositorio, ni siquiera por error',
    'Si una clave se filtra (por ejemplo, en un commit público), la única solución fiable es revocarla y generar una nueva: quitarla del historial de git no basta por sí solo',
    'Los proveedores imponen límites de uso (rate limits) medidos en peticiones y tokens por minuto; superarlos devuelve un error HTTP 429 que conviene manejar con reintentos y backoff'
  ];

  const exercises = [
    {
      title: 'Configura dotenv en un proyecto existente',
      description:
        'Parte de un proyecto Node.js que ya usa @anthropic-ai/sdk u openai con la clave escrita directamente en el código. Instala dotenv, mueve la clave a un archivo .env, carga las variables al inicio del script y añade .env a .gitignore.',
      solution: `npm install dotenv

# .env
ANTHROPIC_API_KEY=tu-clave-aqui

# .gitignore
node_modules/
.env

# index.js (primera línea del archivo, antes de crear cualquier cliente)
import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic(); // lee ANTHROPIC_API_KEY automáticamente`
    },
    {
      title: 'Simula una fuga de API key',
      description:
        'Imagina que acabas de hacer push a un repositorio público de GitHub y, revisando el historial, ves que un commit antiguo incluye tu API key en texto plano dentro del código. Describe, en orden, los pasos que tomarías para resolverlo.',
      solution: `1. Revocar (o rotar) inmediatamente la API key desde el panel del proveedor: esto invalida la clave filtrada al momento, sea cual sea su alcance en el historial de git.
2. Generar una nueva clave y actualizarla solo en variables de entorno (.env local, secretos del servidor/CI), nunca en el código.
3. Eliminar la clave del historial de git si es necesario (por ejemplo con git filter-repo o BFG Repo-Cleaner), aunque esto es secundario: lo prioritario es que la clave filtrada deje de ser válida.
4. Añadir (o revisar) el .gitignore para que .env no vuelva a subirse.
5. Revisar el panel de uso/facturación del proveedor por si la clave filtrada llegó a usarse sin tu consentimiento.`
    }
  ];

  const summary = `Una API key es una credencial sensible: gestionarla bien es tan importante como escribir el código que la usa.

• Una API key identifica y autentica tus peticiones frente al proveedor; quien la tenga puede consumir tu cuota o tu saldo
• Se obtiene desde el panel de desarrollador de cada proveedor y suele mostrarse completa una única vez, al generarla
• Nunca se escribe directamente en el código: se carga desde variables de entorno, normalmente con un archivo .env y el paquete dotenv
• El archivo .env se añade a .gitignore para que nunca se suba al repositorio
• Si una clave se filtra, revocarla y generar una nueva es la única solución fiable; el historial de git no se puede dar por seguro solo con "borrarla" después
• Los proveedores limitan el uso (rate limits) por peticiones y tokens por minuto; superarlos devuelve un error 429 que conviene manejar con reintentos y backoff, no ignorar`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Cómo obtener y proteger correctamente una API key de IA: variables de entorno, .gitignore, rotación de claves y límites de uso"
        breadcrumbs={breadcrumbs}
        seoTitle="Autenticación y gestión de API Keys | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende a obtener, proteger y rotar correctamente las API keys de servicios de IA usando variables de entorno, dotenv y buenas prácticas de seguridad."
        seoKeywords="api keys, autenticacion api, inteligencia artificial, dotenv, variables de entorno"
        url="https://fullstackdevlovers.com/ia/apis/autenticacion-api-keys"
      >
        <p>
          Ya has hecho llamadas reales a Claude y a OpenAI usando una clave de API. En esta lección te vas
          a detener en algo que es fácil pasar por alto cuando empiezas: cómo obtener, proteger y
          gestionar correctamente esa clave. Un descuido aquí puede dejar tu cuenta expuesta a un uso —y
          un gasto— que no controlas.
        </p>

        <LessonSection title="¿Qué es una API key?">
          <p>
            Una <strong>API key</strong> es una cadena de texto única que identifica y autentica tus
            peticiones frente al servicio (Anthropic, OpenAI o cualquier otro proveedor). Funciona de
            forma parecida a una contraseña: cualquiera que la tenga puede hacer peticiones en tu nombre y
            consumir tu cuota o tu saldo, así que debe tratarse con el mismo cuidado que una credencial de
            acceso a producción.
          </p>
        </LessonSection>

        <LessonSection title="Cómo obtener una API key (a alto nivel)">
          <p>
            El proceso concreto varía de un proveedor a otro y cambia con el tiempo, pero el flujo general
            se repite en casi todos:
          </p>
          <ol>
            <li>Crear una cuenta de desarrollador en la plataforma del proveedor.</li>
            <li>
              Acceder a la sección de gestión de claves de API dentro de su panel o consola de
              desarrollador.
            </li>
            <li>
              Generar una nueva clave, idealmente con un nombre descriptivo (por ejemplo, el proyecto o
              entorno donde se va a usar).
            </li>
            <li>
              Copiarla en ese mismo momento: por seguridad, la mayoría de proveedores solo la muestran
              completa una vez, al crearla.
            </li>
          </ol>
          <InfoBox type="warning" title="Trátala como una contraseña">
            No compartas capturas de pantalla donde se vea la clave completa, no la pegues en chats ni en
            issues públicos, y no la envíes por canales sin cifrar. Si crees que se ha expuesto, revócala
            de inmediato (lo verás más abajo).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Nunca hardcodees la clave en tu código">
          <p>
            Escribir la clave directamente en el archivo fuente es el error más común al empezar. El
            problema no es solo de estilo: ese archivo puede acabar en un repositorio compartido, en un
            historial de git, o en una captura de pantalla.
          </p>
          <CodeBlock
            language="javascript"
            title="MAL: clave escrita directamente en el código"
            code={`// Nunca hagas esto: la clave queda visible para cualquiera que vea este archivo
const anthropic = new Anthropic({
  apiKey: 'sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
});`}
          />
          <p>
            La alternativa correcta es cargar la clave desde una <strong>variable de entorno</strong>, un
            valor que vive fuera del código fuente y que puede cambiar según el entorno (desarrollo,
            staging, producción) sin tocar ni una línea.
          </p>
        </LessonSection>

        <LessonSection title="Variables de entorno con dotenv">
          <p>
            En desarrollo local, la forma más habitual de manejar variables de entorno en Node.js es con
            el paquete <code>dotenv</code>, que lee un archivo <code>.env</code> y lo vuelca en{' '}
            <code>process.env</code>:
          </p>
          <CodeBlock language="bash" code="npm install dotenv" />
          <CodeBlock
            language="bash"
            title=".env"
            code={`ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`}
          />
          <CodeBlock
            language="javascript"
            title="index.js"
            code={`// Debe cargarse antes de crear cualquier cliente que necesite las variables
import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic(); // lee ANTHROPIC_API_KEY de process.env automáticamente`}
          />
          <p>
            Así, tu código nunca contiene la clave literal: solo hace referencia a{' '}
            <code>process.env.ANTHROPIC_API_KEY</code>, y cada entorno (tu máquina, el servidor de
            producción, el pipeline de CI) puede tener su propio valor configurado de forma independiente.
          </p>
        </LessonSection>

        <LessonSection title=".gitignore: evita subir la clave a git">
          <p>
            El archivo <code>.env</code> nunca debe formar parte del repositorio. Añádelo a{' '}
            <code>.gitignore</code> desde el primer commit del proyecto:
          </p>
          <CodeBlock
            language="bash"
            title=".gitignore"
            code={`node_modules/
.env`}
          />
          <InfoBox type="error" title="Si ya se subió por error">
            Quitar la línea del archivo y hacer un nuevo commit <strong>no</strong> elimina la clave del
            historial de git: sigue estando en commits anteriores, y cualquiera que clone el repositorio
            puede recuperarla. Si una clave llega a subirse, considérala comprometida y{' '}
            <strong>revócala</strong> de inmediato en el panel del proveedor, generando una nueva.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Rotación de claves">
          <p>
            <strong>Rotar</strong> una clave significa revocar la que tienes en uso y sustituirla por una
            nueva. Conviene hacerlo en dos situaciones:
          </p>
          <ul>
            <li>
              <strong>De forma preventiva y periódica</strong>, como parte de una buena higiene de
              seguridad, igual que cambiarías una contraseña de acceso crítica.
            </li>
            <li>
              <strong>De forma inmediata</strong>, en cuanto sospeches que una clave se ha filtrado (un
              commit público, un log compartido, un canal sin cifrar...).
            </li>
          </ul>
          <p>
            Es habitual usar claves distintas por entorno (desarrollo, staging, producción): así, si una
            clave de desarrollo se ve comprometida, la de producción sigue intacta y el impacto queda
            contenido.
          </p>
        </LessonSection>

        <LessonSection title="Límites de uso: rate limits y cuotas">
          <p>
            Los proveedores de IA limitan cuánto puedes usar su API en un periodo de tiempo, normalmente
            en dos dimensiones: número de <strong>peticiones por minuto</strong> y número de{' '}
            <strong>tokens por minuto</strong>. Estos límites dependen del proveedor, del modelo y del
            nivel de cuenta contratado, y pueden cambiar con el tiempo.
          </p>
          <p>
            Cuando superas el límite, la API responde con un código de estado HTTP{' '}
            <strong>429 (Too Many Requests)</strong>. Un patrón habitual para manejarlo es reintentar la
            petición con una espera creciente entre intentos (<em>backoff</em>):
          </p>
          <CodeBlock
            language="javascript"
            code={`async function llamarConReintento(fn, intentos = 3) {
  for (let intento = 1; intento <= intentos; intento++) {
    try {
      return await fn();
    } catch (error) {
      const esRateLimit = error?.status === 429;
      const esUltimoIntento = intento === intentos;

      if (!esRateLimit || esUltimoIntento) {
        throw error;
      }

      const espera = 1000 * intento; // backoff simple: 1s, 2s, 3s...
      await new Promise((resolve) => setTimeout(resolve, espera));
    }
  }
}

// Uso:
const respuesta = await llamarConReintento(() =>
  anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 200,
    messages: [{ role: 'user', content: 'Hola' }]
  })
);`}
          />
          <InfoBox type="info" title="No lo trates como un error cualquiera">
            Un 429 no significa que tu código esté mal: significa que estás pidiendo más de lo que tu
            cuenta tiene contratado en ese momento. La solución no es reintentar sin límite, sino esperar,
            aplicar backoff y, si es recurrente, revisar el plan contratado con el proveedor.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />

        {/* AVISO: no se encontró un criterio específico en docs/criterios/ia.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos (tono cercano y riguroso, progresión simple->compleja,
            estructura introducción/conceptos/ejemplos/resumen y marcado de afirmaciones no garantizadas con TODO-verificar). */}
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
