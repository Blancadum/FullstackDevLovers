import {
  LessonLayout,
  LessonSection,
  InfoBox,
  Table,
  CodeBlock,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAModelosLenguajeLLMs() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Modelos de Lenguaje (LLMs): cómo funcionan';

  const keyPoints = [
    'Un LLM (Large Language Model) es un modelo entrenado para predecir, palabra a palabra (o token a token), la continuación más probable de un texto',
    'Los modelos no procesan letras ni palabras completas directamente, sino tokens: fragmentos de texto que pueden ser una palabra, parte de una palabra o un signo de puntuación',
    'La ventana de contexto es la cantidad máxima de tokens (entrada + salida) que un modelo puede "tener en cuenta" en una conversación o petición',
    'El entrenamiento tiene, a grandes rasgos, dos fases: el pre-entrenamiento (aprender patrones del lenguaje con enormes cantidades de texto) y el ajuste fino (afinar el comportamiento para tareas o conversación)',
    'Las alucinaciones ocurren porque el modelo genera la continuación estadísticamente más probable, no porque consulte una base de datos de hechos verificados',
    'No todos los LLMs son iguales: varían en tamaño, coste, velocidad, ventana de contexto y especialización (conversación general, código, razonamiento...)'
  ];

  const exercises = [
    {
      title: 'Estimar tokens de un texto',
      description:
        'Como regla aproximada, en inglés 1 token equivale a unos 4 caracteres, y en español el ratio suele ser algo mayor por los acentos y la morfología. Sin usar ninguna herramienta, estima a ojo (redondeando) cuántos tokens ocupará aproximadamente la frase: "El backend expone una API REST que devuelve JSON." Después, explica en una frase por qué esta es solo una estimación aproximada y no un cálculo exacto.',
      solution: `La frase tiene unos 55 caracteres. Con una estimación aproximada de ~4 caracteres por token, serían unos 13-14 tokens (el número exacto puede variar).

Es solo una aproximación porque el tokenizador no divide el texto en trozos de tamaño fijo: agrupa fragmentos según patrones aprendidos durante el entrenamiento (palabras completas frecuentes en un token, palabras raras o extranjeras partidas en varios tokens, etc.), así que el número real de tokens solo puede conocerse con exactitud usando el tokenizador específico de cada modelo.`
    },
    {
      title: 'Diagnosticar una alucinación',
      description:
        'Un compañero te dice: "Le pedí a un LLM la versión exacta de una librería de Java y me dio un número de versión que no existe. El modelo debe tener un bug." Explica, en 3-4 líneas, por qué eso no es necesariamente un bug, sino un comportamiento esperable de cómo funciona un LLM.',
      solution: `No es (necesariamente) un bug en el sentido de un error de programación. Un LLM no consulta una base de datos de versiones reales: genera la secuencia de texto estadísticamente más probable según los patrones de sus datos de entrenamiento. Si el modelo no tiene datos fiables o recientes sobre esa librería concreta, puede generar un número de versión "con forma correcta" (con la sintaxis típica de una versión) pero inventado. Por eso, para datos que deben ser exactos y verificables (versiones, IDs, fechas concretas), conviene contrastar la respuesta con una fuente fiable en lugar de confiar ciegamente en el LLM.`
    }
  ];

  const summary = `Un LLM (Large Language Model, "modelo de lenguaje de gran tamaño") es un modelo de IA generativa entrenado con enormes cantidades de texto para predecir, de forma probabilística, cuál es la continuación más adecuada de un texto dado:

• El texto de entrada y salida se procesa en tokens, no en palabras completas; el número de tokens que consumes influye directamente en el coste y en si el texto cabe en la ventana de contexto
• La ventana de contexto es el límite de tokens (entrada + salida) que el modelo puede tener en cuenta en una misma conversación o petición; superarla implica que el modelo "olvida" la parte más antigua
• El entrenamiento combina, a grandes rasgos, un pre-entrenamiento sobre grandes volúmenes de texto (para aprender patrones del lenguaje) y un ajuste posterior para mejorar su comportamiento como asistente
• Las alucinaciones son una consecuencia natural de cómo funciona un LLM: genera la continuación más probable, no consulta una base de datos de hechos verificados, por lo que puede "inventar" con total seguridad
• Existen LLMs muy distintos entre sí en tamaño, coste, velocidad, ventana de contexto y grado de especialización (conversación general, generación de código, razonamiento complejo...)
• Elegir un modelo u otro para una integración concreta es una decisión técnica más, con sus propios trade-offs de coste, latencia y calidad

En la próxima lección verás cómo encajan los LLMs dentro del árbol más amplio de conceptos: Inteligencia Artificial, Machine Learning y Deep Learning.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es un LLM, cómo procesa el texto en tokens, qué es la ventana de contexto y por qué los modelos de lenguaje pueden alucinar"
        breadcrumbs={breadcrumbs}
        seoTitle="Modelos de Lenguaje (LLMs): cómo funcionan | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende qué es un LLM, cómo funcionan los tokens y la ventana de contexto, y por qué los modelos de lenguaje generan alucinaciones."
        seoKeywords="llm, modelos de lenguaje, tokens, ventana de contexto, alucinaciones ia, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/fundamentos/modelos-lenguaje-llms"
      >
        <p>
          En la lección anterior viste qué es la IA generativa y algunos ejemplos como ChatGPT o Claude.
          Detrás de esas herramientas de texto y código hay un tipo concreto de modelo: el{' '}
          <strong>LLM (Large Language Model)</strong>. Entender, a alto nivel, cómo funciona un LLM te va
          a ayudar a tomar mejores decisiones cuando lo integres en tus aplicaciones: cuánto texto puedes
          enviarle, por qué a veces "se inventa" cosas y por qué no todos los modelos son intercambiables.
        </p>

        <LessonSection title="¿Qué es un LLM?">
          <p>
            Un <strong>LLM</strong> es un modelo de IA entrenado con cantidades masivas de texto (libros,
            artículos, código, páginas web...) para aprender los patrones estadísticos del lenguaje. Una
            vez entrenado, su tarea fundamental es sencilla de enunciar aunque compleja por dentro:{' '}
            <strong>dado un texto de entrada, predecir cuál es la continuación más probable</strong>, un
            fragmento cada vez, hasta completar una respuesta.
          </p>
          <InfoBox type="info" title="Ojo con la palabra 'entender'">
            Es habitual decir que un LLM "entiende" una pregunta. En rigor, el modelo no comprende el
            lenguaje como lo haría una persona: ha aprendido, a partir de billones de ejemplos, qué
            secuencias de texto suelen seguir a otras. Ese aprendizaje estadístico es tan potente que, en
            la práctica, produce respuestas que parecen (y muchas veces son) coherentes, útiles y bien
            razonadas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Tokens: la unidad mínima que procesa un modelo">
          <p>
            Un LLM no procesa el texto letra a letra ni palabra a palabra: lo divide en{' '}
            <strong>tokens</strong>. Un token puede ser una palabra completa, parte de una palabra, un
            signo de puntuación o incluso un espacio, según cómo el tokenizador del modelo haya aprendido
            a fragmentar el texto durante el entrenamiento.
          </p>
          <CodeBlock
            language="text"
            code={`Texto:    "El backend expone una API REST"
Tokens:   ["El", " backend", " expone", " una", " API", " REST"]

Texto:    "internacionalización"
Tokens:   ["inter", "nacional", "ización"]  // palabras poco frecuentes se dividen en varios tokens`}
          />
          <p>
            Esto importa en la práctica porque las APIs de los LLMs (Claude, GPT y similares) suelen
            <strong> cobrar y limitar el uso por tokens</strong>, no por caracteres ni por palabras. Como
            aproximación muy general, en inglés 1 token ronda los 4 caracteres; en español, al tener
            tildes y una morfología distinta, el ratio de tokens por palabra suele ser algo mayor.
            El
            número exacto de tokens de un texto solo puede conocerse con precisión usando el tokenizador
            específico de cada modelo.
          </p>
        </LessonSection>

        <LessonSection title="Ventana de contexto">
          <p>
            La <strong>ventana de contexto</strong> es la cantidad máxima de tokens que un modelo puede
            tener "en memoria" en una misma conversación o petición, sumando el texto que le envías (el
            prompt, y en un chat, todo el historial anterior) más el texto que genera como respuesta.
          </p>
          <Table
            headers={['Concepto', 'Qué significa en la práctica']}
            rows={[
              ['Ventana de contexto pequeña', 'El modelo "olvida" mensajes antiguos de la conversación antes; no puedes pegarle documentos muy largos'],
              ['Ventana de contexto grande', 'Puedes enviar documentos extensos o mantener conversaciones largas sin perder información previa'],
              ['Superar el límite', 'La API suele devolver un error, o el sistema debe recortar/resumir el contenido más antiguo antes de enviarlo']
            ]}
          />
          <InfoBox type="warning" title="Contexto grande no es gratis">
            Aunque un modelo admita una ventana de contexto muy amplia, cada token que envías (incluido
            todo el historial de la conversación) suele contar para el coste y la latencia de la petición.
            Enviar más contexto del necesario no es gratuito.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Cómo se entrena un LLM (a alto nivel)">
          <p>
            No hace falta conocer las matemáticas del entrenamiento para integrar un LLM en tu backend,
            pero sí ayuda tener una idea general del proceso, que suele constar de dos grandes fases:
          </p>
          <ul>
            <li>
              <strong>Pre-entrenamiento:</strong> el modelo procesa cantidades enormes de texto (gran
              parte de internet, libros, código) y ajusta sus parámetros internos para predecir, cada vez
              mejor, qué palabra o token viene a continuación de otro. Esta fase es la más costosa
              computacionalmente y da lugar a un modelo "base" con conocimiento general del lenguaje.
            </li>
            <li>
              <strong>Ajuste fino (fine-tuning) y alineamiento:</strong> el modelo base se refina con
              ejemplos más específicos y con retroalimentación humana, para que sus respuestas sean más
              útiles, sigan instrucciones, mantengan un tono conversacional adecuado y eviten
              comportamientos indeseados. Este proceso convierte un modelo "que completa texto" en un
              asistente que responde a instrucciones.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="Por qué los LLMs alucinan">
          <p>
            Como un LLM genera texto prediciendo la continuación más probable (no consultando una base de
            datos de hechos verificados en tiempo real), puede producir información{' '}
            <strong>incorrecta con total seguridad y coherencia gramatical</strong>. Esto se conoce como{' '}
            <strong>alucinación</strong>: el modelo "rellena huecos" con la respuesta más plausible según
            sus datos de entrenamiento, aunque esa respuesta no sea cierta.
          </p>
          <p>Las alucinaciones son más probables cuando:</p>
          <ul>
            <li>Se pide información muy específica, poco representada en los datos de entrenamiento (versiones exactas de librerías, cifras concretas, citas literales).</li>
            <li>Se pregunta por hechos posteriores a la fecha de corte del entrenamiento del modelo.</li>
            <li>El prompt es ambiguo y el modelo "decide" una interpretación concreta sin indicarlo.</li>
          </ul>
          <InfoBox type="tip" title="Cómo mitigarlo en tus integraciones">
            Para datos que deben ser exactos (precios, disponibilidad, datos legales), no confíes solo en
            lo que el LLM "recuerda": combínalo con datos reales de tu sistema (bases de datos, APIs) y,
            cuando sea posible, pide al modelo que cite explícitamente de dónde saca cada dato. Esta idea
            es la base de técnicas como RAG, que verás más adelante en el módulo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="No todos los LLMs son iguales">
          <p>
            A la hora de elegir un modelo para integrar en tu aplicación, conviene comparar varios ejes,
            no solo "cuál es más inteligente":
          </p>
          <Table
            headers={['Eje', 'Qué implica']}
            rows={[
              ['Tamaño del modelo', 'Modelos más grandes suelen razonar mejor en tareas complejas, pero son más lentos y caros por token'],
              ['Ventana de contexto', 'Determina cuánto texto (documentos, historial) puedes enviar en una misma petición'],
              ['Especialización', 'Algunos modelos están optimizados para código, otros para conversación general o para tareas rápidas y económicas'],
              ['Coste por token', 'Varía mucho entre proveedores y entre modelos del mismo proveedor (modelos "mini" o "flash" frente a los de gama alta)'],
              ['Velocidad de respuesta', 'Importante en aplicaciones interactivas donde el usuario espera una respuesta en tiempo real']
            ]}
          />
          <p>
            No existe "el mejor modelo" en abstracto: existe el modelo más adecuado para cada caso de uso,
            en función de estos factores.
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
