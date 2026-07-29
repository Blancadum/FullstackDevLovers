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

export function LessonIATecnicasAvanzadasPrompting() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Técnicas avanzadas de prompting';

  const keyPoints = [
    'Few-shot prompting: incluir ejemplos de entrada/salida en el prompt para que el modelo siga ese mismo patrón',
    'Zero-shot es pedir la tarea sin ejemplos; few-shot suele dar resultados más consistentes en tareas con formato específico',
    'Chain-of-thought: pedir al modelo que razone paso a paso antes de dar la respuesta final mejora tareas de lógica o cálculo',
    'Pedir salida en JSON facilita integrar la respuesta del modelo directamente en tu código',
    'La salida en JSON de un modelo no está garantizada al 100%: valida y maneja errores de parseo igual que con cualquier entrada externa',
    'Reducir alucinaciones pasa por acotar el ámbito de la respuesta, permitir que el modelo diga "no lo sé" y bajar la temperatura en tareas que requieren precisión',
    'Estas técnicas se pueden combinar: un prompt puede usar few-shot, pedir razonamiento y exigir formato JSON a la vez'
  ];

  const exercises = [
    {
      title: 'Convierte un prompt zero-shot en few-shot',
      description:
        'Tienes un prompt zero-shot que pide clasificar el sentimiento de reseñas de producto como "positiva", "negativa" o "neutra". Reescríbelo en formato few-shot, incluyendo tres ejemplos de entrada/salida antes de la reseña real que quieres clasificar.',
      language: 'text',
      solution: `Clasifica el sentimiento de la siguiente reseña como "positiva",
"negativa" o "neutra". Responde solo con una de esas tres palabras.

Ejemplos:
Reseña: "Llegó rápido y funciona perfecto, muy contenta con la compra."
Sentimiento: positiva

Reseña: "El producto llegó roto y el soporte no responde."
Sentimiento: negativa

Reseña: "Es un producto normal, cumple lo que promete, nada más."
Sentimiento: neutra

Reseña: "Tarda una eternidad en cargar y la batería dura muy poco."
Sentimiento:`
    },
    {
      title: 'Diseña un prompt con salida JSON',
      description:
        'Escribe un prompt que le pida al modelo extraer nombre, email y teléfono de un texto de contacto libre, devolviendo el resultado como JSON con las claves "nombre", "email" y "telefono" (usa null si un dato no aparece).',
      language: 'text',
      solution: `Extrae los siguientes datos del texto de contacto que te paso:
nombre, email y teléfono.

Responde exclusivamente con un JSON válido, sin texto adicional antes
ni después, con esta forma exacta:

{
  "nombre": string o null,
  "email": string o null,
  "telefono": string o null
}

Texto de contacto:
"Soy Marta Ruiz, podéis escribirme a marta.ruiz@example.com si tenéis
dudas sobre el pedido."`
    }
  ];

  const summary = `Las técnicas avanzadas de prompting sirven para conseguir respuestas más consistentes, mejor razonadas y más fáciles de integrar en código:

• Few-shot prompting: incluir ejemplos de entrada/salida en el prompt ayuda al modelo a seguir un patrón concreto, especialmente en tareas de clasificación o formato
• Chain-of-thought: pedir "piensa paso a paso" mejora tareas que requieren varios pasos de razonamiento o cálculo
• Formato estructurado (JSON): imprescindible cuando vas a consumir la respuesta con código; siempre hay que validar y manejar errores de parseo
• Reducir alucinaciones: acotar el ámbito de la respuesta, permitir que el modelo diga "no lo sé" y bajar la temperatura ayuda en tareas donde la precisión importa más que la creatividad
• Estas técnicas no son excluyentes: un mismo prompt puede combinar ejemplos, razonamiento paso a paso y formato de salida estructurado`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Few-shot prompting, chain-of-thought, salida estructurada en JSON y técnicas para reducir alucinaciones en las respuestas del modelo."
        breadcrumbs={breadcrumbs}
        seoTitle="Técnicas avanzadas de prompting | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende few-shot prompting, chain-of-thought, cómo pedir salida en JSON y técnicas para reducir alucinaciones al construir prompts para APIs de IA."
        seoKeywords="tecnicas prompting, few-shot, chain-of-thought, prompt engineering avanzado, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/prompt-engineering/tecnicas-avanzadas-prompting"
      >
        <p>
          En la lección anterior viste los principios básicos para escribir un buen prompt: especificidad,
          contexto y formato de salida. Con esa base ya puedes ir un paso más allá, con técnicas pensadas
          para tareas más exigentes: enseñar al modelo con ejemplos, pedirle que razone antes de responder,
          obtener salidas estructuradas que tu código pueda consumir directamente, y reducir el riesgo de
          que "invente" información.
        </p>

        <LessonSection title="Few-shot prompting: enseñar con ejemplos">
          <p>
            Pedir una tarea sin ningún ejemplo se conoce como <strong>zero-shot</strong>: el modelo solo
            tiene la instrucción para guiarse. El <strong>few-shot prompting</strong> consiste en incluir en
            el propio prompt un puñado de ejemplos de entrada/salida antes de pedir el caso real, para que
            el modelo "aprenda" el patrón dentro de esa misma llamada.
          </p>
          <CodeBlock
            language="text"
            title="Few-shot: clasificar el tipo de un ticket de soporte"
            code={`Clasifica el siguiente ticket de soporte como "bug", "pregunta" o
"solicitud de funcionalidad". Responde solo con una de esas tres
palabras.

Ejemplos:
Ticket: "La app se cierra sola al abrir el perfil"
Categoría: bug

Ticket: "¿Cómo puedo cambiar mi contraseña?"
Categoría: pregunta

Ticket: "Sería genial poder exportar los datos a Excel"
Categoría: solicitud de funcionalidad

Ticket: "El botón de guardar no responde al hacer clic"
Categoría:`}
          />
          <p>
            Este patrón es especialmente útil en tareas de clasificación, extracción de datos o cuando
            necesitas un formato de respuesta muy concreto que sería difícil de describir solo con
            instrucciones en texto. Tres o cuatro ejemplos bien elegidos suelen bastar; no hace falta cubrir
            todos los casos posibles, solo mostrar el patrón con claridad.
          </p>
        </LessonSection>

        <LessonSection title="Chain-of-thought: pedir que razone paso a paso">
          <p>
            En tareas que requieren varios pasos de razonamiento —cálculos, depuración de lógica, decisiones
            con varias condiciones— pedirle al modelo que explique su razonamiento antes de dar la respuesta
            final (<strong>chain-of-thought</strong>, "cadena de pensamiento") suele mejorar la fiabilidad
            del resultado, porque el modelo genera cada paso apoyándose en el paso anterior.
          </p>
          <CodeBlock
            language="text"
            code={`Un endpoint recibe una media de 40 peticiones por segundo. Cada
petición tarda de media 250 ms en procesarse y el servidor gestiona
las peticiones de forma secuencial en un único hilo.

Razona paso a paso si el servidor puede sostener ese tráfico sin
acumular peticiones en cola, y explica por qué. Al final, da tu
conclusión en una sola línea que empiece por "Conclusión:".`}
          />
          <InfoBox type="tip" title="Sepára razonamiento y resultado">
            Si vas a consumir la respuesta con código, pide que el razonamiento y la conclusión final estén
            claramente separados (por ejemplo, con una etiqueta como "Conclusión:"), para poder extraer solo
            la parte que necesitas sin parsear todo el texto explicativo.
          </InfoBox>
          <p>
            El coste de esta técnica es que la respuesta es más larga, lo que consume más tokens y aumenta
            la latencia. No merece la pena activarla para tareas triviales; resulta más útil cuanto más
            pasos lógicos requiere el problema.
          </p>
        </LessonSection>

        <LessonSection title="Formato estructurado de salida: pedir JSON">
          <p>
            Cuando vas a usar la respuesta del modelo dentro de tu aplicación —para guardarla en base de
            datos, mostrarla en un formulario o encadenarla con otra llamada— necesitas que tenga un formato
            predecible. Pedir JSON es la forma más habitual de conseguirlo:
          </p>
          <CodeBlock
            language="text"
            title="Prompt: extraer datos de un pedido en texto libre"
            code={`Extrae del siguiente texto los datos del pedido. Responde
exclusivamente con un JSON válido, sin texto antes ni después, con
esta forma exacta:

{
  "producto": string,
  "cantidad": number,
  "direccionEnvio": string o null
}

Texto: "Quiero pedir 3 unidades del teclado mecánico, envíalo a mi
dirección habitual."`}
          />
          <p>
            El resultado esperado sería algo como esto, listo para parsear con{' '}
            <code>JSON.parse()</code> en JavaScript (o con una librería como Jackson en Java):
          </p>
          <CodeBlock
            language="json"
            code={`{
  "producto": "teclado mecánico",
  "cantidad": 3,
  "direccionEnvio": null
}`}
          />
          <CodeBlock
            language="javascript"
            title="Consumir la respuesta de forma segura"
            code={`const textoRespuesta = respuesta.content[0].text;

let pedido;
try {
  pedido = JSON.parse(textoRespuesta);
} catch (error) {
  // El modelo no garantiza un JSON válido al 100%: trata este caso
  // igual que tratarías cualquier entrada externa poco fiable.
  console.error('La respuesta del modelo no es un JSON válido:', textoRespuesta);
  throw new Error('No se pudo interpretar la respuesta del modelo');
}`}
          />
          <InfoBox type="warning" title="El modelo no es un validador de esquemas">
            Aunque pidas JSON de forma explícita, el modelo puede añadir texto adicional, romper el formato
            en respuestas muy largas o generar un JSON sintácticamente inválido. Trata siempre la respuesta
            como una entrada externa no fiable: valida su estructura antes de usarla, igual que harías con
            el cuerpo de una petición HTTP. Tanto Anthropic como OpenAI ofrecen modos de salida
            estructurada (tool use con esquema forzado, <code>response_format</code> con JSON Schema) que
            reducen mucho el riesgo de un JSON inválido; consulta la documentación oficial vigente de cada
            proveedor antes de apoyarte en ellos en producción.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Técnicas para reducir alucinaciones">
          <p>
            Una <strong>alucinación</strong> es cuando el modelo genera información que suena plausible pero
            es incorrecta o inventada. No existe una forma de eliminarlas al cien por cien, pero sí hay
            técnicas de prompting que reducen el riesgo:
          </p>
          <Table
            headers={['Técnica', 'En qué consiste']}
            rows={[
              [
                'Acotar el ámbito',
                'Pedir que responda solo con la información de un texto que le proporcionas, en vez de con su conocimiento general'
              ],
              [
                'Permitir el "no lo sé"',
                'Indicar explícitamente que si no tiene información suficiente, lo diga en vez de inventar una respuesta'
              ],
              [
                'Bajar la temperatura',
                'Usar un valor de temperature bajo (o 0) en la llamada a la API para respuestas más deterministas y menos "creativas"'
              ],
              [
                'Pedir verificación',
                'Solicitar que distinga claramente qué afirmaciones está seguro de que son ciertas y cuáles son suposiciones'
              ]
            ]}
          />
          <CodeBlock
            language="text"
            code={`Responde a la siguiente pregunta usando EXCLUSIVAMENTE la información
del texto de abajo. Si el texto no contiene la respuesta, responde
literalmente "No tengo información suficiente para responder a eso".

Texto: "El servicio de facturación se despliega los martes a las
10:00, tras pasar los tests de integración en el entorno de staging."

Pregunta: ¿Qué día se despliega el servicio de autenticación?`}
          />
          <p>
            Cuando la respuesta necesita apoyarse en información concreta y verificable —documentación
            interna, políticas de la empresa, datos de tu base de datos— la técnica más efectiva no es solo
            el prompt, sino combinarlo con recuperación de información externa (RAG), que verás más adelante
            en el módulo.
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
