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

export function LessonIAClaudeAPIPrimerosPasos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Claude API: primeros pasos';

  const keyPoints = [
    'Claude es la familia de modelos de lenguaje de Anthropic; su API permite integrarlo en tu backend igual que cualquier otra API REST',
    'El SDK oficial de Node.js se instala con npm install @anthropic-ai/sdk y evita construir a mano las peticiones HTTP',
    'messages.create() es el método principal: requiere model, max_tokens (obligatorio en esta API) y un array messages con roles user/assistant',
    'La clave de API se lee de una variable de entorno (por ejemplo ANTHROPIC_API_KEY); nunca debe escribirse directamente en el código',
    'La respuesta llega en response.content, un array de bloques; el texto generado está en el primer bloque de tipo text',
    'El campo usage informa de los tokens consumidos en la petición, la unidad con la que estas APIs miden coste y límites'
  ];

  const exercises = [
    {
      title: 'Instala el SDK y haz tu primera llamada',
      description:
        'Crea un proyecto Node vacío, instala el SDK de Anthropic, define la variable de entorno ANTHROPIC_API_KEY con tu clave y ejecuta un script que le pida a Claude que te explique, en una frase, qué es una API REST.',
      solution: `mkdir mi-proyecto-claude && cd mi-proyecto-claude
npm init -y
npm install @anthropic-ai/sdk

# En Linux/macOS
export ANTHROPIC_API_KEY="tu-clave-aqui"
# En Windows (PowerShell)
$env:ANTHROPIC_API_KEY="tu-clave-aqui"

# index.js
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

const respuesta = await anthropic.messages.create({
  model: 'claude-sonnet-4-5-20250929',
  max_tokens: 200,
  messages: [
    { role: 'user', content: 'Explícame en una frase qué es una API REST.' }
  ]
});

console.log(respuesta.content[0].text);

node index.js`
    },
    {
      title: 'Cambia el prompt y limita la respuesta',
      description:
        'Modifica el ejemplo anterior para pedir una explicación algo más larga (por ejemplo, "qué es un backend" en 3-4 líneas) y reduce max_tokens a un valor deliberadamente bajo, como 20. Ejecuta el código e inspecciona el campo response.stop_reason: ¿qué valor tiene cuando la respuesta se corta antes de terminar la idea?',
      solution: `const respuesta = await anthropic.messages.create({
  model: 'claude-sonnet-4-5-20250929',
  max_tokens: 20,
  messages: [
    { role: 'user', content: 'Explícame qué es un backend en una aplicación web, en 3-4 líneas.' }
  ]
});

console.log(respuesta.content[0].text);
console.log('Motivo de parada:', respuesta.stop_reason);

// Con max_tokens tan bajo, la respuesta se corta a mitad de frase
// y stop_reason suele indicar que se alcanzó el límite de tokens
// en lugar de que el modelo terminara su respuesta de forma natural.`
    }
  ];

  const summary = `Claude es la familia de modelos de lenguaje de Anthropic, disponible como API HTTP además de en su interfaz de chat:

• El SDK oficial de Node.js (@anthropic-ai/sdk) se instala con npm y evita construir las peticiones HTTP a mano
• Un cliente Anthropic se crea con new Anthropic({ apiKey: ... }), normalmente leyendo la clave desde una variable de entorno
• messages.create() es el método principal para conversar con el modelo: requiere model, max_tokens (obligatorio) y un array messages con roles user/assistant
• La respuesta llega en response.content (array de bloques); el texto generado está en el primer bloque, en su propiedad text
• response.usage informa de los tokens consumidos y response.stop_reason indica por qué terminó la generación
• En la próxima lección verás el mismo flujo de trabajo con la API de OpenAI, para comparar ambos enfoques`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Cómo instalar el SDK oficial de Claude (Anthropic) en Node.js y hacer tu primera llamada a la API desde tu propio backend"
        breadcrumbs={breadcrumbs}
        seoTitle="Claude API: primeros pasos | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende a instalar el SDK oficial de Anthropic para Node.js y a hacer tu primera llamada a la API de Claude desde tu backend."
        seoKeywords="claude api, anthropic, inteligencia artificial, sdk node.js"
        url="https://fullstackdevlovers.com/ia/apis/claude-api-primeros-pasos"
      >
        <p>
          En las lecciones anteriores has visto qué es un LLM y dónde encaja dentro del panorama de la
          IA. Toca dar el salto de usuario a integrador: en esta lección vas a instalar el{' '}
          <strong>SDK oficial de Anthropic</strong> para Node.js y a hacer tu primera llamada real a la{' '}
          <strong>API de Claude</strong> desde tu propio código, igual que harías con cualquier otra API
          REST que ya conozcas.
        </p>

        <LessonSection title="¿Qué es la API de Claude?">
          <p>
            <strong>Claude</strong> es la familia de modelos de lenguaje desarrollada por{' '}
            <strong>Anthropic</strong>. Cuando hablas con Claude en el navegador, en realidad estás usando
            una interfaz web que, por debajo, llama a la misma API que vas a usar en esta lección: un
            servicio HTTP al que envías un prompt y del que recibes una respuesta generada por el modelo.
          </p>
          <p>Integrar esta API directamente en tu backend te permite, entre otras cosas:</p>
          <ul>
            <li>
              Generar texto o código como parte de la lógica de tu aplicación, sin depender de que un
              usuario copie y pegue en un chat.
            </li>
            <li>
              Automatizar tareas (resumir, clasificar, traducir, extraer datos) sobre información que ya
              maneja tu sistema.
            </li>
            <li>
              Controlar con precisión el prompt, el modelo y los parámetros que se envían, algo que la
              interfaz web no te permite.
            </li>
          </ul>
          <p>
            Por debajo, Anthropic expone esta API como un servicio HTTP, pero en la práctica casi nadie
            construye esas peticiones a mano: se usa el SDK oficial, que envuelve las llamadas en
            funciones cómodas de usar desde JavaScript.
          </p>
        </LessonSection>

        <LessonSection title="Instalar el SDK oficial de Node.js">
          <p>
            Anthropic mantiene un paquete npm oficial para proyectos JavaScript/TypeScript:{' '}
            <code>@anthropic-ai/sdk</code>. Se instala igual que cualquier otra dependencia de tu
            proyecto:
          </p>
          <CodeBlock language="bash" code="npm install @anthropic-ai/sdk" />
          <p>
            Este paquete se encarga de construir las peticiones HTTP, autenticarlas y convertir la
            respuesta en objetos JavaScript fáciles de manejar, sin que tengas que preocuparte por los
            detalles del protocolo.
          </p>
        </LessonSection>

        <LessonSection title="Configurar la clave de API">
          <p>
            Para poder usar la API necesitas una <strong>clave de API</strong> (API key) asociada a tu
            cuenta de Anthropic. Por ahora, para poder ejecutar el ejemplo de esta lección, basta con
            guardarla en una variable de entorno llamada <code>ANTHROPIC_API_KEY</code>: si no le pasas
            una clave explícita al crear el cliente, el SDK la busca automáticamente en esa variable.
          </p>
          <InfoBox type="tip" title="Esto es solo el mínimo para empezar">
            La lección "Autenticación y gestión de API Keys", un poco más adelante en este módulo, entra
            en detalle sobre cómo obtener la clave, protegerla con archivos <code>.env</code> y evitar que
            acabe subida a un repositorio.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Tu primera llamada: messages.create()">
          <p>
            El SDK de Anthropic gira alrededor de un único método principal para conversar con el modelo:{' '}
            <code>messages.create()</code>. Necesita, como mínimo, tres parámetros:
          </p>
          <ul>
            <li>
              <code>model</code>: el identificador del modelo que quieres usar (Anthropic publica varias
              versiones con distinto equilibrio entre velocidad, coste y capacidad).
            </li>
            <li>
              <code>max_tokens</code>: el número máximo de tokens que el modelo puede generar en la
              respuesta. A diferencia de otras APIs, en Claude este parámetro es{' '}
              <strong>obligatorio</strong>.
            </li>
            <li>
              <code>messages</code>: un array con la conversación, donde cada mensaje tiene un{' '}
              <code>role</code> (<code>'user'</code> o <code>'assistant'</code>) y un <code>content</code>{' '}
              con el texto.
            </li>
          </ul>
          <CodeBlock
            language="javascript"
            title="index.js"
            code={`import Anthropic from '@anthropic-ai/sdk';

// Si no se indica apiKey, el SDK la lee de process.env.ANTHROPIC_API_KEY
const anthropic = new Anthropic();

async function preguntarAClaude() {
  const respuesta = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
    max_tokens: 1024,
    messages: [
      { role: 'user', content: '¿Qué es un backend en una aplicación web? Explícalo en dos frases.' }
    ]
  });

  console.log(respuesta.content[0].text);
}

preguntarAClaude();`}
          />
        </LessonSection>

        <LessonSection title="Leyendo la respuesta">
          <p>
            <code>messages.create()</code> devuelve una promesa que resuelve un objeto con la respuesta
            completa del modelo. Los campos más relevantes para empezar son:
          </p>
          <ul>
            <li>
              <code>content</code>: un array de bloques de contenido. En una respuesta de texto normal,
              el primer elemento tiene <code>type: 'text'</code> y el texto generado en su propiedad{' '}
              <code>text</code>.
            </li>
            <li>
              <code>model</code>: el modelo que finalmente atendió la petición.
            </li>
            <li>
              <code>stop_reason</code>: por qué terminó la generación (por ejemplo, porque el modelo
              concluyó su respuesta de forma natural o porque se alcanzó el límite de{' '}
              <code>max_tokens</code>).
            </li>
            <li>
              <code>usage</code>: un objeto con los tokens consumidos, tanto de entrada como de salida.
            </li>
          </ul>
          <CodeBlock
            language="javascript"
            code={`console.log(respuesta.content[0].text);
// "Un backend es la parte de una aplicación que se ejecuta en el servidor..."

console.log(respuesta.usage);
// { input_tokens: 18, output_tokens: 34 }`}
          />
          <InfoBox type="info" title="Los tokens son la unidad de medida">
            Tanto el coste como los límites de uso de estas APIs se calculan en <strong>tokens</strong>{' '}
            (fragmentos de palabras), no en caracteres ni en peticiones. Cuanto más largo sea tu prompt y
            más larga la respuesta permitida, más tokens se consumen.
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
