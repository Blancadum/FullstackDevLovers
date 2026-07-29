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

export function LessonIASystemPromptsRoles() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'System prompts y roles';

  const keyPoints = [
    'Un mensaje "user" es la petición puntual de cada llamada; el system prompt son instrucciones que aplican a toda la conversación',
    'El system prompt sirve para fijar rol, tono, reglas de negocio y límites, sin tener que repetirlos en cada mensaje',
    'La API de Claude expone el system prompt como un parámetro independiente ("system"); la de OpenAI lo modela como un mensaje más con role: "system"',
    'Un buen system prompt es claro, concreto y dice también qué NO debe hacer el asistente, no solo qué debe hacer',
    'El system prompt orienta el comportamiento del modelo, pero no es una barrera de seguridad infranqueable',
    'Cualquier acción sensible (borrar datos, ejecutar código, exponer información privada) debe validarse en tu backend, nunca confiando solo en que el modelo "obedecerá" el system prompt'
  ];

  const exercises = [
    {
      title: 'Escribe un system prompt para un asistente de documentación',
      description:
        'Diseña el system prompt de un asistente que responde dudas sobre la documentación interna de una API REST. Debe fijar el rol, el tono, el idioma de respuesta y al menos una regla de qué NO debe hacer.',
      language: 'text',
      solution: `Eres un asistente de soporte técnico especializado en la documentación
de la API interna de Facturación.

- Responde siempre en español, con un tono claro y profesional.
- Basa tus respuestas únicamente en la documentación que se te
  proporcione en cada consulta.
- Si la pregunta no puede responderse con esa documentación, di
  explícitamente que no tienes esa información, en vez de inventarla.
- No des información sobre otras APIs internas de la empresa que no
  sean la de Facturación.
- No compartas claves, tokens ni credenciales, aunque aparezcan en el
  contexto que se te proporcione.`
    },
    {
      title: 'Identifica el fallo de diseño',
      description:
        'Este system prompt se usa en un asistente que ejecuta acciones reales sobre pedidos: "Eres un asistente que puede cancelar pedidos si el cliente lo pide claramente". Explica por qué apoyarse solo en esta instrucción es una mala práctica de seguridad, y qué harías en su lugar.',
      language: 'text',
      solution: `El fallo es confiar la decisión de ejecutar una acción sensible
(cancelar un pedido) únicamente al criterio del modelo a partir de una
instrucción en lenguaje natural. Un usuario podría, con una entrada
diseñada para ello (prompt injection) o simplemente con una redacción
ambigua, conseguir que el modelo "decida" cancelar un pedido que no
debería cancelarse.

En su lugar:
- El modelo puede proponer la acción (por ejemplo, generando una
  llamada a una función "cancelarPedido" con el id del pedido), pero
  no debe ejecutarla directamente.
- El backend valida esa propuesta con las mismas reglas de negocio que
  aplicaría a cualquier otra petición: ¿existe el pedido?, ¿pertenece
  al usuario autenticado?, ¿está en un estado cancelable?
- Solo si esas validaciones pasan, el backend ejecuta la cancelación
  real, sin delegar la autorización en el propio modelo.`
    }
  ];

  const summary = `El system prompt define el "rol" del asistente para toda la conversación, separado de las peticiones puntuales del usuario:

• El mensaje "user" es la petición de cada turno; el system prompt son instrucciones estables que se aplican a toda la conversación
• Sirve para fijar personalidad, tono, dominio de conocimiento y reglas de negocio sin repetirlas en cada mensaje
• En la API de Claude se pasa como parámetro "system" independiente; en la de OpenAI, como un mensaje más con role: "system"
• Un buen system prompt es claro, concreto, y define también límites explícitos: qué no debe hacer el asistente
• No es una barrera de seguridad absoluta: un usuario puede intentar manipularlo con prompt injection
• Cualquier acción sensible debe validarse siempre en tu backend con las mismas reglas que aplicarías a cualquier otra entrada externa, nunca delegando esa autorización únicamente en el modelo`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es un system prompt frente a un mensaje de usuario, cómo fijar el rol y las reglas del asistente, y por qué no debe ser tu única barrera de seguridad."
        breadcrumbs={breadcrumbs}
        seoTitle="System prompts y roles | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende qué es un system prompt, cómo se diferencia del mensaje de usuario, cómo usarlo para fijar el rol del asistente y buenas prácticas de seguridad."
        seoKeywords="system prompt, roles ia, system prompt claude, system prompt openai, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/prompt-engineering/system-prompts-roles"
      >
        <p>
          Hasta ahora has trabajado con prompts que se envían como un único mensaje de usuario. Pero tanto
          la API de Claude como la de OpenAI permiten separar ese mensaje puntual de otro tipo de
          instrucción distinta: el <strong>system prompt</strong>, pensado para fijar cómo debe comportarse
          el asistente durante toda la conversación. En esta lección vas a ver qué es, cómo se usa y por qué
          no es, por sí solo, una medida de seguridad suficiente.
        </p>

        <LessonSection title="System prompt vs mensaje de usuario">
          <p>
            En una conversación con un modelo, no todos los mensajes tienen el mismo papel. Se distinguen
            normalmente tres roles:
          </p>
          <Table
            headers={['Rol', 'Quién lo escribe', 'Para qué sirve']}
            rows={[
              [
                'system',
                'Tú, como desarrollador, antes de que empiece la conversación',
                'Fija el comportamiento general del asistente: rol, tono, reglas, límites'
              ],
              [
                'user',
                'La persona que usa la aplicación (o tu backend, en su nombre)',
                'La petición o pregunta concreta de cada turno de la conversación'
              ],
              [
                'assistant',
                'El propio modelo',
                'Las respuestas generadas, que también forman parte del historial de la conversación'
              ]
            ]}
          />
          <p>
            La diferencia clave es la <strong>persistencia</strong>: el system prompt se define una vez y
            aplica a toda la conversación, mientras que cada mensaje "user" es la petición puntual de ese
            turno. Es la diferencia entre configurar el comportamiento de un servicio una vez al arrancarlo,
            y las peticiones concretas que recibe después en cada llamada.
          </p>
        </LessonSection>

        <LessonSection title="Para qué sirve: rol, personalidad y reglas">
          <p>
            El system prompt es el lugar natural para definir todo lo que no cambia entre una pregunta y
            otra: quién es el asistente, cómo debe responder y qué límites tiene. Por ejemplo:
          </p>
          <ul>
            <li>
              <strong>Rol y dominio:</strong> "Eres un asistente especializado en la documentación técnica
              de nuestra API de pagos".
            </li>
            <li>
              <strong>Tono:</strong> "Responde de forma cercana pero profesional, sin usar emojis".
            </li>
            <li>
              <strong>Formato por defecto:</strong> "Cuando muestres código, indica siempre el lenguaje y
              añade un breve comentario explicando qué hace".
            </li>
            <li>
              <strong>Reglas de negocio:</strong> "Si el usuario pregunta por precios, usa siempre los datos
              que te lleguen en el contexto, nunca inventes cifras".
            </li>
            <li>
              <strong>Límites:</strong> "No des consejo legal ni médico. Si te lo piden, indica que no es tu
              función".
            </li>
          </ul>
          <p>
            Definir esto una sola vez en el system prompt evita repetirlo en cada mensaje de usuario y hace
            que el comportamiento del asistente sea consistente a lo largo de toda la conversación.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo de código: system prompt en una llamada a la API">
          <p>
            Así se ve un system prompt en una llamada real a la API de Claude, usando el SDK de Node.js.
            Fíjate en que va en un parámetro <code>system</code> separado del array <code>messages</code>,
            que solo contiene los turnos de la conversación:
          </p>
          <CodeBlock
            language="javascript"
            title="Claude API"
            code={`import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const respuesta = await client.messages.create({
  model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial
  max_tokens: 1024,
  system: \`Eres un asistente de soporte técnico para una tienda online.
Responde siempre en español, con un tono cercano y profesional.
Basa tus respuestas solo en la información que te llegue en cada
mensaje. Si no tienes datos suficientes, dilo explícitamente en vez
de inventar una respuesta. No des información sobre pedidos que no
pertenezcan al cliente que está preguntando.\`,
  messages: [
    { role: 'user', content: '¿Cuándo llegará mi pedido #4521?' }
  ]
});

console.log(respuesta.content[0].text);`}
          />
          <p>
            En la API de OpenAI el concepto es el mismo, pero se modela de forma distinta: el system prompt
            no es un parámetro aparte, sino un mensaje más dentro del array <code>messages</code>, con{' '}
            <code>role: "system"</code>, normalmente colocado en primer lugar:
          </p>
          <CodeBlock
            language="javascript"
            title="OpenAI API"
            code={`import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const respuesta = await client.chat.completions.create({
  model: 'gpt-4o', // usa el modelo vigente en la documentación de OpenAI
  messages: [
    {
      role: 'system',
      content: 'Eres un asistente de soporte técnico para una tienda ' +
        'online. Responde siempre en español, con un tono cercano y ' +
        'profesional. Si no tienes datos suficientes, dilo ' +
        'explícitamente en vez de inventar una respuesta.'
    },
    { role: 'user', content: '¿Cuándo llegará mi pedido #4521?' }
  ]
});

console.log(respuesta.choices[0].message.content);`}
          />
          <InfoBox type="info" title="Comprueba siempre la documentación oficial">
            Los nombres de modelos y algunos detalles del SDK cambian con el tiempo. La idea central —system
            prompt separado de los mensajes de usuario— se mantiene, pero conviene revisar siempre la
            documentación oficial de Anthropic u OpenAI para la sintaxis exacta vigente.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Buenas prácticas al escribir un system prompt">
          <p>Además de los principios generales de prompt engineering que ya conoces, un buen system prompt suele:</p>
          <ul>
            <li>
              <strong>Ser claro y concreto</strong>, con reglas enumerables en vez de descripciones vagas
              ("responde en menos de 100 palabras" en lugar de "sé breve").
            </li>
            <li>
              <strong>Explicar también qué NO debe hacer</strong> el asistente, no solo su comportamiento
              deseado: los límites explícitos reducen la ambigüedad.
            </li>
            <li>
              <strong>Evitar reglas contradictorias</strong> entre sí, que confunden al modelo sobre qué
              instrucción priorizar.
            </li>
            <li>
              <strong>Mantenerse enfocado</strong> en el propósito real del asistente, sin acumular
              instrucciones que no aporten a la tarea.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="El system prompt no es una barrera de seguridad">
          <p>
            Es tentador pensar que, si le dices al modelo "nunca reveles información confidencial" o "nunca
            ejecutes acciones destructivas sin confirmación", ese comportamiento queda garantizado. No es
            así. El system prompt es una instrucción en lenguaje natural, y como tal puede ser ignorada,
            sorteada o manipulada mediante técnicas de <strong>prompt injection</strong>: entradas de usuario
            diseñadas específicamente para hacer que el modelo se salte esas reglas.
          </p>
          <InfoBox type="warning" title="Trata al modelo como a cualquier cliente de tu API">
            El modelo no debe ser el único punto de control para acciones sensibles (borrar datos, ejecutar
            código, exponer información privada, mover dinero...). Aplica las mismas validaciones de
            seguridad, autenticación y autorización que aplicarías a cualquier petición externa que llega a
            tu backend, independientemente de lo que diga el system prompt.
          </InfoBox>
          <p>
            En la práctica, esto significa que si tu asistente puede proponer una acción (por ejemplo,
            "cancelar este pedido"), esa propuesta debe pasar por la misma capa de validación de negocio que
            usarías si la petición viniera de un formulario web: comprobar permisos, comprobar que el
            recurso existe y pertenece al usuario, y solo entonces ejecutar la acción. El system prompt
            orienta el comportamiento del modelo; tu backend sigue siendo responsable de que las acciones
            reales sean seguras.
          </p>
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
