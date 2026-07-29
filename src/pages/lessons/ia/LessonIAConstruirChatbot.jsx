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

export function LessonIAConstruirChatbot() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Construir un chatbot con IA';

  const keyPoints = [
    'Un chatbot con IA tiene tres piezas: un frontend que envía mensajes, un backend que llama a la API del modelo, y un historial de conversación que da contexto',
    'La API key del modelo (Claude, OpenAI...) nunca debe viajar al frontend: todas las llamadas al modelo se hacen desde el backend',
    'La API no tiene memoria propia: el "historial" de la conversación es simplemente el array de mensajes que tú vuelves a enviar en cada petición',
    'Cada mensaje del historial lleva un rol (user o assistant) que indica quién lo escribió',
    'Guardar el historial en memoria (un objeto o Map) sirve para aprender y prototipar, pero en producción hace falta persistirlo en una base de datos',
    'Conviene limitar cuántos mensajes del historial se reenvían en cada llamada, para no disparar el coste ni acercarte al límite de contexto del modelo'
  ];

  const exercises = [
    {
      title: 'Endpoint para consultar el historial',
      description:
        'Añade al servidor Express del ejemplo un endpoint GET /api/chat/:conversationId que devuelva el array de mensajes guardado para esa conversación (o un array vacío si no existe todavía).',
      language: 'javascript',
      solution: `app.get('/api/chat/:conversationId', (req, res) => {
  const { conversationId } = req.params;

  const historial = conversaciones.get(conversationId) || [];

  res.json({ conversationId, messages: historial });
});

// Con esto el frontend puede, por ejemplo, recuperar la conversación
// al recargar la página y volver a pintar los mensajes anteriores.`
    },
    {
      title: 'Limitar el tamaño del historial',
      description:
        'Modifica el endpoint POST /api/chat para que, antes de llamar a la API, solo se envíen los últimos 10 mensajes del historial (aunque en el almacén se guarden todos). Esto evita superar el límite de contexto y reduce el coste de cada llamada.',
      language: 'javascript',
      solution: `const MAX_MENSAJES_CONTEXTO = 10;

app.post('/api/chat', async (req, res) => {
  const { conversationId, message } = req.body;

  const historialCompleto = conversaciones.get(conversationId) || [];
  historialCompleto.push({ role: 'user', content: message });

  // Solo enviamos los últimos N mensajes a la API, aunque guardemos todos
  const historialParaLaApi = historialCompleto.slice(-MAX_MENSAJES_CONTEXTO);

  try {
    const respuesta = await anthropic.messages.create({
      model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
      max_tokens: 1024,
      messages: historialParaLaApi
    });

    const textoRespuesta = respuesta.content[0].text;
    historialCompleto.push({ role: 'assistant', content: textoRespuesta });
    conversaciones.set(conversationId, historialCompleto);

    res.json({ reply: textoRespuesta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al contactar con el modelo de IA' });
  }
});`
    }
  ];

  const summary = `Un chatbot con IA no es más que una API de chat "de toda la vida" con una pieza nueva: en vez de generar
la respuesta tú mismo, se la pides a un modelo de lenguaje. La arquitectura mínima tiene tres partes: un
frontend que envía el mensaje del usuario, un backend que guarda el historial de la conversación y hace de
intermediario con la API del modelo (para no exponer la API key), y ese propio historial, que hay que
reenviar completo en cada llamada porque la API no recuerda nada entre peticiones. Con esta base ya puedes
construir un chatbot funcional; a partir de aquí, añadir persistencia en base de datos, autenticación de
usuarios o streaming de la respuesta son mejoras sobre el mismo esqueleto.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Arquitectura mínima de un chatbot con IA: frontend, backend y el historial de conversación"
        breadcrumbs={breadcrumbs}
        seoTitle="Construir un chatbot con IA | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende la arquitectura mínima de un chatbot con IA y cómo construir un backend en Node.js/Express que llama a la API de Claude manteniendo el historial de la conversación."
        seoKeywords="chatbot ia, construir chatbot, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/casos-practicos/construir-chatbot"
      >
        <p>
          En las lecciones anteriores has aprendido a llamar a la API de un modelo de lenguaje y a escribir
          buenos prompts. Un chatbot es la aplicación práctica más directa de todo eso: una interfaz donde
          el usuario escribe mensajes y recibe respuestas generadas por IA, manteniendo el hilo de la
          conversación. En esta lección vamos a montar la arquitectura mínima de un chatbot funcional,
          igual que montarías cualquier otra API con la que ya has trabajado.
        </p>

        <LessonSection title="La arquitectura mínima de un chatbot">
          <p>
            Un chatbot con IA se apoya en tres piezas, y ninguna de ellas es nueva para ti: ya has trabajado
            con las tres por separado en otras lecciones del curso.
          </p>
          <ul>
            <li>
              <strong>Frontend:</strong> una interfaz (web, móvil, terminal...) donde el usuario escribe un
              mensaje y ve las respuestas. Envía el mensaje al backend, normalmente por una petición{' '}
              <code>fetch</code> a un endpoint tipo <code>POST /api/chat</code>.
            </li>
            <li>
              <strong>Backend:</strong> un servidor (por ejemplo, Express) que recibe el mensaje, se encarga
              de llamar a la API del modelo (Claude, OpenAI...) y devuelve la respuesta al frontend.
            </li>
            <li>
              <strong>Historial de conversación:</strong> el registro de los mensajes anteriores, que hay
              que guardar y reenviar en cada llamada para que el modelo "recuerde" de qué se estaba
              hablando.
            </li>
          </ul>
          <InfoBox type="warning" title="La API key nunca va en el frontend">
            Todas las llamadas a la API del modelo se hacen <strong>desde el backend</strong>. Si el
            frontend llamase directamente a la API de Claude u OpenAI, tendrías que incluir tu API key en el
            código que se ejecuta en el navegador, y cualquiera podría copiarla y usarla a tu costa. El
            backend actúa siempre de intermediario.
          </InfoBox>
        </LessonSection>

        <LessonSection title="El historial: por qué hay que reenviarlo entero">
          <p>
            La API de un modelo de lenguaje es <strong>sin estado</strong> (stateless): no recuerda nada de
            una petición a otra. Lo que llamamos "memoria" de la conversación no es más que un array de
            mensajes que tú guardas en tu servidor y vuelves a mandar completo cada vez que el usuario
            escribe algo nuevo.
          </p>
          <p>
            Cada mensaje del array lleva un <code>role</code> (quién lo escribió: <code>user</code> o{' '}
            <code>assistant</code>) y un <code>content</code> (el texto). Así, el modelo recibe todo el
            contexto de la conversación en cada llamada:
          </p>
          <CodeBlock
            language="javascript"
            code={`[
  { role: 'user', content: '¿Qué es una API REST?' },
  { role: 'assistant', content: 'Una API REST es...' },
  { role: 'user', content: '¿Y en qué se diferencia de GraphQL?' } // el mensaje que se acaba de añadir
]`}
          />
        </LessonSection>

        <LessonSection title="Backend: un endpoint de chat con Express">
          <p>
            Vamos a construir un endpoint <code>POST /api/chat</code> que recibe un mensaje del usuario y el
            identificador de su conversación, mantiene el historial en memoria (un <code>Map</code>, algo
            que en producción sustituirías por una base de datos) y llama a la API de Claude usando el SDK
            oficial de Anthropic.
          </p>
          <CodeBlock
            language="javascript"
            code={`import express from 'express';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
app.use(express.json());

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Almacén en memoria: cada conversación se identifica por un id
// y guarda su propio array de mensajes. Se reinicia si reinicias el servidor.
const conversaciones = new Map();

app.post('/api/chat', async (req, res) => {
  const { conversationId, message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'El campo "message" es obligatorio' });
  }

  // Recuperamos el historial de esta conversación (o empezamos uno nuevo)
  const historial = conversaciones.get(conversationId) || [];

  // Añadimos el mensaje del usuario al historial
  historial.push({ role: 'user', content: message });

  try {
    const respuesta = await anthropic.messages.create({
      model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
      max_tokens: 1024,
      system: 'Eres un asistente de soporte técnico. Responde de forma breve, clara y amable.',
      messages: historial
    });

    const textoRespuesta = respuesta.content[0].text;

    // Añadimos la respuesta del modelo al historial, para que la próxima
    // llamada incluya también esta parte de la conversación
    historial.push({ role: 'assistant', content: textoRespuesta });
    conversaciones.set(conversationId, historial);

    res.json({ reply: textoRespuesta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al contactar con el modelo de IA' });
  }
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));`}
          />
          <p>
            El flujo es exactamente el mismo con la API de OpenAI: cambia el cliente y el nombre del campo
            de la respuesta, pero la idea de mantener un array de mensajes y reenviarlo completo no cambia.
          </p>
        </LessonSection>

        <LessonSection title="Frontend: enviar el mensaje">
          <p>
            Desde el frontend, el chatbot solo necesita hacer una petición al backend con el mensaje del
            usuario y el identificador de la conversación (por ejemplo, generado una vez al abrir el chat):
          </p>
          <CodeBlock
            language="javascript"
            code={`async function enviarMensaje(conversationId, texto) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ conversationId, message: texto })
  });

  if (!res.ok) {
    throw new Error('No se pudo obtener respuesta del chatbot');
  }

  const data = await res.json();
  return data.reply;
}`}
          />
          <InfoBox type="tip" title="Siguiente paso: streaming">
            Con este endpoint, el usuario espera hasta que el modelo termine de generar toda la respuesta.
            En la lección de streaming ya viste cómo ir mostrando el texto a medida que se genera; aplicar
            esa misma técnica aquí mejora mucho la sensación de "conversación en tiempo real" del chatbot.
          </InfoBox>
        </LessonSection>

        <LessonKeyPoints points={keyPoints} />
        <LessonExercises exercises={exercises} />
        <LessonSummary summary={summary} />
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
