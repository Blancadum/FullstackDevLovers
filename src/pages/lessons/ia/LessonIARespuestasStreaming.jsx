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

export function LessonIARespuestasStreaming() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Manejo de respuestas y streaming';

  const keyPoints = [
    'Por defecto, las APIs de IA devuelven la respuesta completa de una sola vez: el cliente espera hasta que el modelo termina de generar todo el texto',
    'El streaming envía la respuesta en fragmentos (chunks) según se van generando, usando una conexión persistente basada en Server-Sent Events (SSE)',
    'Se activa con el parámetro stream: true en la llamada a la API, tanto en OpenAI como en Claude',
    'Con streaming, el backend recorre los fragmentos con un bucle for await...of, en lugar de esperar un único objeto de respuesta',
    'El streaming mejora la percepción de velocidad (el usuario ve texto casi al instante) y es imprescindible para UX tipo "escribiendo en tiempo real", como en ChatGPT',
    'Para reenviar el streaming a un navegador, el backend actúa de intermediario: recibe los fragmentos del proveedor de IA y los reenvía al cliente mediante SSE'
  ];

  const exercises = [
    {
      title: 'Streaming en consola',
      description:
        'Modifica un script que ya haga una llamada normal a la API de OpenAI para que use stream: true y vaya imprimiendo cada fragmento con process.stdout.write, en lugar de esperar e imprimir la respuesta completa de golpe.',
      solution: `import OpenAI from 'openai';

const openai = new OpenAI();

async function preguntarConStreaming() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      { role: 'user', content: 'Escribe un haiku sobre el backend' }
    ]
  });

  for await (const chunk of stream) {
    const fragmento = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(fragmento);
  }

  process.stdout.write('\\n');
}

preguntarConStreaming();`
    },
    {
      title: 'Endpoint SSE con Express',
      description:
        'Crea un endpoint GET /chat-stream en una aplicación Express que reciba un prompt por query string, llame a la API con stream: true y reenvíe cada fragmento al cliente como un evento de tipo Server-Sent Events.',
      solution: `import express from 'express';
import OpenAI from 'openai';

const app = express();
const openai = new OpenAI();

app.get('/chat-stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [{ role: 'user', content: req.query.prompt }]
  });

  for await (const chunk of stream) {
    const fragmento = chunk.choices[0]?.delta?.content || '';
    if (fragmento) {
      res.write(\`data: \${fragmento}\\n\\n\`);
    }
  }

  res.write('data: [DONE]\\n\\n');
  res.end();
});

app.listen(3000);`
    }
  ];

  const summary = `El streaming cambia cómo se recibe la respuesta de un modelo de IA, no la petición que se envía:

• Por defecto, la API espera a tener toda la respuesta generada y la devuelve de una sola vez
• El streaming la envía en fragmentos progresivos, mediante una conexión persistente basada en Server-Sent Events (SSE)
• Se activa añadiendo stream: true a la llamada; el backend consume la respuesta con un bucle for await...of en lugar de un único objeto
• Mejora la percepción de velocidad y permite una UX tipo "escribiendo en tiempo real", como la de ChatGPT o Claude
• En una aplicación con frontend propio, el backend hace de intermediario: recibe el streaming del proveedor de IA y lo reenvía al navegador, normalmente también mediante SSE
• El streaming no reduce el número de tokens consumidos: cambia cómo llega la información al cliente, no cuánto cuesta generarla`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Diferencia entre respuesta completa y streaming en APIs de IA, por qué usarlo y cómo manejar los chunks en el backend con Node.js"
        breadcrumbs={breadcrumbs}
        seoTitle="Manejo de respuestas y streaming | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende la diferencia entre respuesta completa y streaming en APIs de IA, cómo activarlo con stream: true y cómo manejar los chunks en tu backend Node.js."
        seoKeywords="streaming api ia, respuestas api, inteligencia artificial, server-sent events"
        url="https://fullstackdevlovers.com/ia/apis/respuestas-streaming"
      >
        <p>
          Hasta ahora, todas las llamadas que has hecho a Claude y a OpenAI han funcionado igual: envías
          el prompt, esperas y recibes toda la respuesta de golpe. Funciona bien, pero para respuestas
          largas el usuario se queda mirando una pantalla en blanco varios segundos. En esta lección vas a
          ver la alternativa que usan ChatGPT o Claude en su propia interfaz: el{' '}
          <strong>streaming</strong>, que muestra el texto según se va generando, fragmento a fragmento.
        </p>

        <LessonSection title="Respuesta completa vs streaming">
          <p>
            En todos los ejemplos anteriores has usado el modo por defecto: el cliente envía la petición y
            se queda esperando hasta que el modelo termina de generar <strong>toda</strong> la respuesta;
            solo entonces recibes un único objeto con el texto completo.
          </p>
          <p>
            El <strong>streaming</strong> cambia esa mecánica: en lugar de una única respuesta, el
            servidor abre una conexión HTTP persistente y va enviando pequeños fragmentos (
            <em>chunks</em>) de texto según el modelo los va generando, hasta que termina. Esta técnica se
            basa en un estándar web llamado <strong>Server-Sent Events (SSE)</strong>: una conexión donde
            el servidor puede enviar múltiples eventos de datos al cliente a lo largo del tiempo, en lugar
            de una única respuesta y listo.
          </p>
        </LessonSection>

        <LessonSection title="Por qué usar streaming">
          <ul>
            <li>
              <strong>Mejor percepción de velocidad:</strong> el usuario ve las primeras palabras casi al
              instante, en lugar de esperar varios segundos con la pantalla en blanco.
            </li>
            <li>
              <strong>UX tipo "escribiendo en tiempo real":</strong> es el efecto que ves en ChatGPT o
              Claude cuando el texto aparece progresivamente, como si alguien lo estuviera tecleando en
              directo.
            </li>
            <li>
              <strong>Mejor experiencia en respuestas largas:</strong> cuanto más tarda el modelo en
              generar toda la respuesta, más se nota la diferencia frente a esperar en bloque.
            </li>
          </ul>
          <InfoBox type="info" title="El streaming no cambia el coste">
            Activar streaming no reduce los tokens consumidos ni el tiempo total que tarda el modelo en
            generar toda la respuesta: solo cambia cómo y cuándo recibes esa información. La mejora es de
            experiencia de usuario, no de rendimiento del modelo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Activar streaming: stream: true">
          <p>
            Tanto la API de OpenAI como la de Claude aceptan un parámetro <code>stream: true</code> en la
            misma llamada que ya conoces. La diferencia está en cómo se consume la respuesta: en lugar de
            un único objeto, obtienes un flujo iterable de fragmentos, que se recorre con un bucle{' '}
            <code>for await...of</code>.
          </p>
          <p>Con la API de OpenAI, cada fragmento trae el nuevo texto en su campo delta:</p>
          <CodeBlock
            language="javascript"
            title="index.js"
            code={`import OpenAI from 'openai';

const openai = new OpenAI();

async function preguntarConStreaming() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      { role: 'user', content: 'Escribe un haiku sobre el backend' }
    ]
  });

  for await (const chunk of stream) {
    const fragmento = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(fragmento);
  }
}

preguntarConStreaming();`}
          />
          <p>
            La API de Claude también admite <code>stream: true</code>, aunque el flujo se compone de{' '}
            <strong>eventos con distinto tipo</strong> (inicio de mensaje, fragmento de texto, fin de
            mensaje...) en lugar de fragmentos homogéneos como en OpenAI:
          </p>
          <CodeBlock
            language="javascript"
            code={`const stream = await anthropic.messages.create({
  model: 'claude-sonnet-4-5-20250929',
  max_tokens: 1024,
  stream: true,
  messages: [{ role: 'user', content: 'Escribe un haiku sobre el backend' }]
});

for await (const evento of stream) {
  if (evento.type === 'content_block_delta' && evento.delta?.text) {
    process.stdout.write(evento.delta.text);
  }
}`}
          />
          <InfoBox type="tip">
            El SDK de Anthropic ofrece también un método de conveniencia (<code>messages.stream()</code>)
            pensado específicamente para simplificar este manejo por eventos. Consulta la documentación
            oficial del SDK antes de usarlo en producción, ya que su API puede variar entre versiones.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Manejo de chunks en el backend: reenviar por SSE a un cliente">
          <p>
            En una aplicación real, normalmente no quieres imprimir el streaming por consola: quieres que
            llegue al navegador del usuario en tiempo real. El backend actúa de intermediario: recibe el
            streaming del proveedor de IA y lo reenvía al cliente, también mediante SSE, sobre una ruta
            HTTP normal construida con Express (la misma base que ya conoces de las lecciones de Node.js):
          </p>
          <CodeBlock
            language="javascript"
            title="server.js"
            code={`import express from 'express';
import OpenAI from 'openai';

const app = express();
const openai = new OpenAI();

app.get('/chat-stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [{ role: 'user', content: req.query.prompt }]
  });

  for await (const chunk of stream) {
    const fragmento = chunk.choices[0]?.delta?.content || '';
    if (fragmento) {
      res.write(\`data: \${fragmento}\\n\\n\`);
    }
  }

  res.write('data: [DONE]\\n\\n');
  res.end();
});

app.listen(3000);`}
          />
          <p>
            Las tres cabeceras (<code>Content-Type: text/event-stream</code>,{' '}
            <code>Cache-Control: no-cache</code> y <code>Connection: keep-alive</code>) son las que le
            indican al navegador que esta respuesta es un flujo de eventos, no un JSON normal. Cada
            fragmento se escribe con el prefijo <code>data:</code> y una línea en blanco, tal y como exige
            el formato SSE.
          </p>
          <InfoBox type="info" title="Y en el navegador">
            Desde el frontend, este endpoint se puede consumir con la API nativa <code>EventSource</code>{' '}
            o leyendo manualmente el cuerpo de la respuesta con <code>fetch</code> y un{' '}
            <code>ReadableStream</code>. El detalle de esa parte cliente queda fuera del alcance de esta
            lección, centrada en el backend.
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
