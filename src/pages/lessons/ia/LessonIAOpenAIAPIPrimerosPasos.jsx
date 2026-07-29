import {
  LessonLayout,
  LessonSection,
  CodeBlock,
  InfoBox,
  Table,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAOpenAIAPIPrimerosPasos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'OpenAI API: primeros pasos';

  const keyPoints = [
    'OpenAI es la empresa creadora de GPT y ChatGPT; su API permite integrar esos modelos en tu propio backend',
    'El SDK oficial de Node.js se instala con npm install openai y sigue el mismo patrón de trabajo que el SDK de Anthropic',
    'chat.completions.create() es el método principal: requiere model y un array messages con roles system/user/assistant',
    'A diferencia de Claude, OpenAI incluye el mensaje de sistema como un elemento más dentro de messages, en lugar de un parámetro aparte',
    'La respuesta llega en response.choices, un array de posibles finalizaciones; el texto generado está en choices[0].message.content',
    'Ambas APIs (Claude y OpenAI) comparten la misma idea de fondo: cliente autenticado con una clave, método que envía mensajes, respuesta con texto y contador de tokens'
  ];

  const exercises = [
    {
      title: 'Instala el SDK y haz tu primera llamada',
      description:
        'Crea un proyecto Node vacío, instala el SDK de OpenAI, define la variable de entorno OPENAI_API_KEY con tu clave y ejecuta un script que le pida al modelo que te explique, en una frase, qué es una API REST.',
      solution: `mkdir mi-proyecto-openai && cd mi-proyecto-openai
npm init -y
npm install openai

# En Linux/macOS
export OPENAI_API_KEY="tu-clave-aqui"
# En Windows (PowerShell)
$env:OPENAI_API_KEY="tu-clave-aqui"

# index.js
import OpenAI from 'openai';

const openai = new OpenAI();

const respuesta = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    { role: 'user', content: 'Explícame en una frase qué es una API REST.' }
  ]
});

console.log(respuesta.choices[0].message.content);

node index.js`
    },
    {
      title: 'Añade un mensaje de sistema',
      description:
        'Modifica el ejemplo anterior para incluir un mensaje con role: "system" que le indique al modelo que responda siempre en un máximo de dos frases y en un tono muy técnico. Comprueba cómo cambia la respuesta respecto a no incluirlo.',
      solution: `const respuesta = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    { role: 'system', content: 'Responde siempre en un máximo de dos frases, con un tono técnico y directo.' },
    { role: 'user', content: '¿Qué es un backend en una aplicación web?' }
  ]
});

console.log(respuesta.choices[0].message.content);`
    }
  ];

  const summary = `OpenAI es la empresa creadora de GPT y ChatGPT, y expone sus modelos como una API HTTP igual que Anthropic con Claude:

• El SDK oficial de Node.js (openai) se instala con npm y sigue el mismo patrón que el SDK de Anthropic: cliente autenticado + método que envía mensajes
• chat.completions.create() es el método principal: recibe model y un array messages con roles system/user/assistant
• El mensaje de sistema (role: 'system') va dentro del propio array messages, a diferencia del parámetro system separado que usa Claude
• La respuesta llega en response.choices (un array, porque se puede pedir más de una alternativa); el texto está en choices[0].message.content
• response.usage informa de los tokens consumidos, igual que en la API de Claude
• Elegir entre Claude y OpenAI (o usar ambas) es una decisión de proyecto: el flujo de integración es prácticamente idéntico, así que cambiar de proveedor no debería suponer reescribir tu aplicación entera`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Cómo instalar el SDK oficial de OpenAI en Node.js, hacer tu primera llamada con chat.completions.create() y compararlo con la API de Claude"
        breadcrumbs={breadcrumbs}
        seoTitle="OpenAI API: primeros pasos | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende a instalar el SDK oficial de OpenAI para Node.js, hacer tu primera llamada con chat.completions.create() y compararlo con la API de Claude."
        seoKeywords="openai api, chatgpt api, inteligencia artificial, sdk node.js"
        url="https://fullstackdevlovers.com/ia/apis/openai-api-primeros-pasos"
      >
        <p>
          En la lección anterior integraste la <strong>API de Claude</strong> en tu backend. Ahora vas a
          hacer lo mismo con la <strong>API de OpenAI</strong>, la otra gran opción del mercado (la que
          hay detrás de ChatGPT). Verás que el flujo de trabajo es prácticamente idéntico: instalar un
          SDK, crear un cliente con tu clave y llamar a un método que envía mensajes y devuelve una
          respuesta generada. Aprovecha esta lección para fijarte en las diferencias concretas entre
          ambas APIs, porque te las vas a encontrar en cualquier proyecto real que integre LLMs.
        </p>

        <LessonSection title="¿Qué es la API de OpenAI?">
          <p>
            <strong>OpenAI</strong> es la empresa creadora de los modelos <strong>GPT</strong> y de{' '}
            <strong>ChatGPT</strong>. Igual que ocurre con Claude, la interfaz web de ChatGPT es solo una
            capa de presentación sobre la misma API que vas a usar en esta lección: contratar acceso a
            esa API te permite generar texto o código desde tu propio código, sin pasar por el navegador.
          </p>
          <p>
            OpenAI ofrece varios modelos con distinto equilibrio entre coste, velocidad y capacidad, y
            además de texto también expone APIs para otras tareas (generación de imágenes, audio,
            embeddings...). Esta lección se centra en la parte más habitual en un backend: generar texto
            mediante <em>chat completions</em>.
          </p>
        </LessonSection>

        <LessonSection title="Instalar el SDK oficial de Node.js">
          <p>
            OpenAI mantiene un paquete npm oficial llamado, simplemente, <code>openai</code>:
          </p>
          <CodeBlock language="bash" code="npm install openai" />
          <p>
            Igual que <code>@anthropic-ai/sdk</code>, este paquete se encarga de construir las peticiones
            HTTP, autenticarlas con tu clave y convertir la respuesta en objetos JavaScript.
          </p>
        </LessonSection>

        <LessonSection title="Tu primera llamada: chat.completions.create()">
          <p>
            El SDK de OpenAI gira alrededor del método <code>chat.completions.create()</code>. Sus
            parámetros más habituales son:
          </p>
          <ul>
            <li>
              <code>model</code>: el identificador del modelo que quieres usar.
            </li>
            <li>
              <code>messages</code>: un array con la conversación, donde cada mensaje tiene un{' '}
              <code>role</code> (<code>'system'</code>, <code>'user'</code> o <code>'assistant'</code>) y
              un <code>content</code> con el texto.
            </li>
            <li>
              <code>max_tokens</code>: límite de tokens de la respuesta. Aquí es opcional (a diferencia de
              Claude), aunque conviene fijarlo siempre para controlar el coste.
            </li>
          </ul>
          <CodeBlock
            language="javascript"
            title="index.js"
            code={`import OpenAI from 'openai';

// Si no se indica apiKey, el SDK la lee de process.env.OPENAI_API_KEY
const openai = new OpenAI();

async function preguntarAOpenAI() {
  const respuesta = await openai.chat.completions.create({
    model: 'gpt-4o-mini', // usa el identificador de modelo vigente en la documentación oficial de OpenAI
    messages: [
      { role: 'system', content: 'Eres un asistente conciso para desarrolladores backend.' },
      { role: 'user', content: '¿Qué es un backend en una aplicación web? Explícalo en dos frases.' }
    ]
  });

  console.log(respuesta.choices[0].message.content);
}

preguntarAOpenAI();`}
          />
        </LessonSection>

        <LessonSection title="Leyendo la respuesta">
          <p>
            La respuesta de <code>chat.completions.create()</code> tiene una forma parecida a la de
            Claude, con algunas diferencias de nombres:
          </p>
          <ul>
            <li>
              <code>choices</code>: un array de posibles finalizaciones (por defecto solo una). Cada
              elemento tiene un objeto <code>message</code> con <code>role</code> y{' '}
              <code>content</code>, y un <code>finish_reason</code> que indica por qué terminó.
            </li>
            <li>
              <code>usage</code>: tokens consumidos, con <code>prompt_tokens</code>,{' '}
              <code>completion_tokens</code> y <code>total_tokens</code>.
            </li>
          </ul>
          <CodeBlock
            language="javascript"
            code={`console.log(respuesta.choices[0].message.content);
// "Un backend es la parte de una aplicación que se ejecuta en el servidor..."

console.log(respuesta.choices[0].finish_reason);
// "stop"

console.log(respuesta.usage);
// { prompt_tokens: 24, completion_tokens: 31, total_tokens: 55 }`}
          />
        </LessonSection>

        <LessonSection title="Claude vs OpenAI: mismo patrón, pequeñas diferencias">
          <p>
            Si comparas esta lección con la anterior, verás que ambas APIs resuelven el mismo problema de
            forma muy parecida. Estas son las diferencias que más se notan al escribir código:
          </p>
          <Table
            headers={['Aspecto', 'Claude (Anthropic)', 'OpenAI']}
            rows={[
              ['Paquete npm', '@anthropic-ai/sdk', 'openai'],
              ['Método principal', 'messages.create()', 'chat.completions.create()'],
              ['Mensaje de sistema', 'Parámetro system aparte', "Mensaje con role: 'system' dentro de messages"],
              ['max_tokens', 'Obligatorio', 'Opcional (recomendable fijarlo igualmente)'],
              ['Texto de la respuesta', 'response.content[0].text', 'response.choices[0].message.content'],
              ['Tokens consumidos', 'response.usage.input_tokens / output_tokens', 'response.usage.prompt_tokens / completion_tokens']
            ]}
          />
          <InfoBox type="tip" title="La lógica de negocio no cambia">
            Si diseñas tu backend para que la llamada al LLM esté aislada en una función o servicio propio
            (por ejemplo, <code>generarRespuestaIA(prompt)</code>), cambiar de proveedor —o usar varios—
            se reduce a adaptar esa función, sin tocar el resto de tu aplicación.
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
