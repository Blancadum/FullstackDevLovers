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

export function LessonIAAutomatizacionTareas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Automatización de tareas con IA';

  const keyPoints = [
    'La IA generativa no es solo para chats: es muy útil para automatizar tareas repetitivas de procesamiento de texto',
    'Casos de uso habituales: clasificar/etiquetar texto, extraer datos estructurados, generar resúmenes y generar contenido',
    'Pedirle al modelo un esquema JSON exacto en el system prompt permite integrar la respuesta directamente en tu código, sin parsear texto libre',
    'El modelo no garantiza por sí solo un JSON perfectamente válido: siempre hay que parsear la respuesta con manejo de errores',
    'Automatizar con IA no elimina la necesidad de validar la salida antes de usarla en procesos que afecten a datos reales'
  ];

  const exercises = [
    {
      title: 'Extraer datos de contacto de un mensaje libre',
      description:
        'Escribe un endpoint POST /api/extraer-contacto que reciba un texto libre (por ejemplo, el mensaje de un formulario de contacto) y le pida al modelo que devuelva un JSON con los campos nombre, email, telefono y empresa, usando null en los campos que no aparezcan en el texto.',
      language: 'javascript',
      solution: `app.post('/api/extraer-contacto', async (req, res) => {
  const { texto } = req.body;

  const systemPrompt = \`Extrae los datos de contacto del siguiente mensaje.
Responde ÚNICAMENTE con un JSON con este formato exacto, sin texto adicional:

{
  "nombre": string o null,
  "email": string o null,
  "telefono": string o null,
  "empresa": string o null
}

Si un dato no aparece en el mensaje, usa null en ese campo.\`;

  try {
    const respuesta = await anthropic.messages.create({
      model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: texto }]
    });

    const contacto = JSON.parse(respuesta.content[0].text);
    res.json(contacto);
  } catch (error) {
    console.error('El modelo no devolvió un JSON válido:', error);
    res.status(502).json({ error: 'No se pudieron extraer los datos de contacto' });
  }
});`
    },
    {
      title: 'Resumen con palabras clave',
      description:
        'Escribe un endpoint POST /api/resumir que reciba un texto largo (por ejemplo, el cuerpo de un artículo) y devuelva un JSON con un campo resumen (máximo 2 frases) y un campo palabrasClave (un array con 3 a 5 términos).',
      language: 'javascript',
      solution: `app.post('/api/resumir', async (req, res) => {
  const { texto } = req.body;

  const systemPrompt = \`Resume el texto que te envíe el usuario.
Responde ÚNICAMENTE con un JSON con este formato exacto:

{
  "resumen": "resumen de máximo 2 frases",
  "palabrasClave": ["term1", "term2", "term3"]
}

El array palabrasClave debe tener entre 3 y 5 elementos.\`;

  try {
    const respuesta = await anthropic.messages.create({
      model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: texto }]
    });

    const resultado = JSON.parse(respuesta.content[0].text);
    res.json(resultado);
  } catch (error) {
    console.error('El modelo no devolvió un JSON válido:', error);
    res.status(502).json({ error: 'No se pudo generar el resumen' });
  }
});`
    }
  ];

  const summary = `La IA generativa no se limita a mantener conversaciones: es una herramienta muy potente para automatizar
tareas de procesamiento de texto que antes requerían reglas manuales frágiles (expresiones regulares
interminables, listas de palabras clave...) o directamente trabajo humano repetitivo. Los casos de uso más
habituales son clasificar y etiquetar texto, extraer datos estructurados de texto libre, generar resúmenes
y generar contenido. La clave técnica para automatizar con estos casos es pedirle al modelo que responda
con un JSON siguiendo un esquema exacto: así puedes tratar su respuesta como cualquier otro dato de tu
aplicación, en vez de tener que interpretar texto libre. Eso sí, como el modelo no garantiza un JSON
perfectamente válido en el 100% de los casos, el parseo con manejo de errores no es opcional: es parte
imprescindible de cualquier automatización real con IA.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Casos de uso de automatización con IA y cómo pedir al modelo salidas en JSON estructurado"
        breadcrumbs={breadcrumbs}
        seoTitle="Automatización de tareas con IA | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Descubre casos de uso reales de automatización con IA (clasificación, extracción de datos, resúmenes) y aprende a pedir al modelo una salida JSON estructurada para procesarla en tu código."
        seoKeywords="automatizacion ia, tareas con ia, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/casos-practicos/automatizacion-tareas"
      >
        <p>
          Hasta ahora has usado la IA sobre todo para generar texto que lee una persona: respuestas de un
          chatbot, contenido, explicaciones. Pero una de las aplicaciones más rentables de la IA en un
          backend es justo la contraria: usarla para <strong>procesar</strong> texto de forma automática, sin
          que haya una persona leyendo la respuesta directamente, sino tu propio código.
        </p>

        <LessonSection title="Casos de uso habituales">
          <p>
            Estos son los patrones de automatización con IA más comunes que te vas a encontrar en un backend:
          </p>
          <ul>
            <li>
              <strong>Clasificar y etiquetar texto:</strong> por ejemplo, asignar una categoría a un ticket
              de soporte, detectar el idioma de un mensaje, o marcar una reseña como positiva, neutra o
              negativa.
            </li>
            <li>
              <strong>Extraer datos estructurados de texto libre:</strong> sacar el nombre, email o
              intención de compra de un mensaje de contacto, o los datos de un currículum, sin tener que
              escribir expresiones regulares para cada caso posible.
            </li>
            <li>
              <strong>Generar resúmenes:</strong> condensar un artículo largo, un hilo de conversación o un
              documento en unas pocas frases.
            </li>
            <li>
              <strong>Generar contenido:</strong> redactar descripciones de producto, borradores de
              respuesta a reseñas, o plantillas de email a partir de unos pocos datos de entrada.
            </li>
          </ul>
          <p>
            Lo que tienen en común todos estos casos es que la salida del modelo no la va a leer
            directamente una persona en ese momento: la va a <strong>consumir tu código</strong>, para
            guardarla en una base de datos, mostrarla en un dashboard, o disparar otra acción. Y para que tu
            código pueda "consumirla" de forma fiable, necesita un formato predecible.
          </p>
        </LessonSection>

        <LessonSection title="Pedir al modelo una salida en JSON">
          <p>
            La técnica clave para automatizar es indicarle al modelo, de forma explícita en el system
            prompt, que responda <strong>únicamente</strong> con un JSON que siga un esquema concreto. Así
            puedes hacer <code>JSON.parse()</code> sobre la respuesta y tratarla como cualquier otro dato de
            tu aplicación.
          </p>
          <p>
            Un ejemplo típico: analizar automáticamente un ticket de soporte para clasificarlo, asignarle
            prioridad y detectar el sentimiento del cliente.
          </p>
          <CodeBlock
            language="javascript"
            code={`app.post('/api/analizar-ticket', async (req, res) => {
  const { texto } = req.body;

  const systemPrompt = \`Eres un sistema de clasificación de tickets de soporte.
Analiza el mensaje del usuario y responde ÚNICAMENTE con un JSON válido,
sin texto adicional antes ni después, siguiendo exactamente este formato:

{
  "categoria": "facturacion" | "tecnico" | "cuenta" | "otro",
  "prioridad": "baja" | "media" | "alta",
  "sentimiento": "positivo" | "neutro" | "negativo",
  "resumen": "resumen de una frase del problema"
}\`;

  try {
    const respuesta = await anthropic.messages.create({
      model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: texto }]
    });

    const textoRespuesta = respuesta.content[0].text;
    const ticketAnalizado = JSON.parse(textoRespuesta);

    res.json(ticketAnalizado);
  } catch (error) {
    console.error('El modelo no devolvió un JSON válido:', error);
    res.status(502).json({ error: 'Respuesta del modelo no procesable' });
  }
});`}
          />
          <p>
            Con este endpoint, cada ticket que llega se puede guardar ya en la base de datos con su
            categoría, prioridad y sentimiento asignados automáticamente, sin que nadie tenga que leerlo y
            etiquetarlo a mano antes.
          </p>
          <InfoBox type="warning" title="El JSON.parse puede fallar">
            Aunque le pidas explícitamente al modelo que responda solo con JSON, no hay una garantía
            absoluta de que siempre lo haga: puede añadir una frase antes, envolver el JSON en explicaciones,
            o cometer algún error de formato puntual. Anthropic y OpenAI ofrecen modos de salida
            estructurada más estrictos (por ejemplo, esquemas JSON forzados mediante tool use o
            <code>response_format</code>) que reducen mucho este riesgo, pero conviene revisar la
            documentación oficial vigente de cada proveedor antes de asumir que garantizan un JSON
            válido al cien por cien.{' '}
            Por eso el <code>try/catch</code> alrededor del <code>JSON.parse()</code> no es opcional: es la
            diferencia entre un fallo controlado (un error 502 que puedes reintentar o loguear) y que tu
            aplicación se caiga.
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
