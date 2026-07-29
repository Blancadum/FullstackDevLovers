import {
  LessonLayout,
  LessonSection,
  InfoBox,
  Table,
  LessonKeyPoints,
  LessonExercises,
  LessonSummary
} from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonIAVsMLVsDeepLearning() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'IA vs Machine Learning vs Deep Learning';

  const keyPoints = [
    'La Inteligencia Artificial (IA) es el campo más amplio: cualquier sistema que simule comportamiento "inteligente", incluidas reglas escritas a mano por una persona',
    'El Machine Learning (ML) es un subconjunto de la IA en el que el sistema aprende patrones a partir de datos, en lugar de seguir reglas programadas explícitamente',
    'El Deep Learning (aprendizaje profundo) es un subconjunto del ML que usa redes neuronales con muchas capas, especialmente potente con datos no estructurados (texto, imágenes, audio)',
    'Los LLMs (como Claude o GPT) son un caso concreto de Deep Learning aplicado al lenguaje: por eso son IA, son ML y son Deep Learning al mismo tiempo',
    'No todo lo que hoy llamamos "IA" es Machine Learning: un sistema experto con reglas fijas (if/else) también es IA, aunque no aprenda de datos',
    'Elegir entre reglas explícitas, ML "tradicional" o Deep Learning es una decisión técnica según el problema, los datos disponibles y el presupuesto, no una jerarquía de "mejor a peor"'
  ];

  const exercises = [
    {
      title: 'Clasificar sistemas en el árbol de conceptos',
      description:
        'Para cada sistema, indica si es solo IA (reglas fijas, sin aprendizaje), IA + ML, o IA + ML + Deep Learning, y justifica brevemente: (1) un motor de ajedrez clásico basado en reglas y búsqueda de jugadas, (2) un modelo que predice el precio de una vivienda a partir de su tamaño, ubicación y antigüedad usando regresión, (3) Claude respondiendo a una pregunta en lenguaje natural.',
      solution: `1. Motor de ajedrez clásico basado en reglas -> Solo IA: sigue una lógica programada explícitamente (reglas del juego, algoritmos de búsqueda como minimax), no aprende de datos. Es "inteligente" en su comportamiento pero no es Machine Learning.

2. Modelo de regresión para predecir precios de vivienda -> IA + ML: aprende de datos históricos (tamaño, ubicación, antigüedad, precio real) para ajustar sus parámetros, sin necesidad de que un humano programe reglas explícitas de precio. No suele requerir redes neuronales profundas para este tipo de tarea, así que normalmente no se considera Deep Learning.

3. Claude respondiendo en lenguaje natural -> IA + ML + Deep Learning: es un LLM, entrenado mediante Machine Learning usando redes neuronales profundas (arquitectura Transformer) sobre enormes cantidades de texto.`
    },
    {
      title: 'Explicar la jerarquía con tus propias palabras',
      description:
        'Completa la frase con los tres términos en el orden correcto y explica en una línea por qué el orden es ese y no otro: "Todo ___ es ___, pero no todo ___ es ___".',
      solution: `Una versión válida: "Todo Deep Learning es Machine Learning, pero no todo Machine Learning es Deep Learning". Y a su vez: "Todo Machine Learning es IA, pero no toda IA es Machine Learning".

El orden es ese porque cada concepto es un subconjunto del anterior: Deep Learning está contenido dentro de Machine Learning, y Machine Learning está contenido dentro de Inteligencia Artificial (no al revés). Por eso la implicación solo funciona en una dirección.`
    }
  ];

  const summary = `IA, Machine Learning y Deep Learning no son sinónimos ni tecnologías independientes: forman una jerarquía de conjuntos anidados, cada uno más específico que el anterior:

• Inteligencia Artificial (IA): el campo más amplio, cualquier sistema que simule comportamiento inteligente, incluidos los que siguen reglas fijas escritas por una persona (sin aprender de datos)
• Machine Learning (ML): subconjunto de la IA donde el sistema aprende patrones a partir de datos de ejemplo, en lugar de seguir reglas programadas a mano
• Deep Learning: subconjunto del ML que usa redes neuronales con muchas capas ("profundas"), especialmente eficaz con datos no estructurados como texto, imágenes o audio
• Los LLMs (Claude, GPT y similares) son Deep Learning aplicado específicamente al lenguaje, con una arquitectura llamada Transformer como pieza clave
• No toda IA es ML (un sistema de reglas if/else sigue siendo IA) ni todo ML es Deep Learning (muchos modelos de ML "tradicional" no usan redes neuronales)
• La elección entre reglas explícitas, ML tradicional o Deep Learning depende del problema, la cantidad de datos disponibles y los recursos, no de cuál es "más avanzado" en abstracto

Con este mapa de conceptos ya tienes una base sólida para entender dónde encajan los LLMs dentro del panorama de la IA. En el siguiente bloque del módulo empezarás a integrarlos de forma práctica a través de sus APIs.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="La jerarquía real entre Inteligencia Artificial, Machine Learning y Deep Learning, y dónde encajan los LLMs dentro de ella"
        breadcrumbs={breadcrumbs}
        seoTitle="IA vs Machine Learning vs Deep Learning | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Entiende la diferencia real entre Inteligencia Artificial, Machine Learning y Deep Learning, y por qué los LLMs son Deep Learning aplicado al lenguaje."
        seoKeywords="ia vs machine learning, deep learning, inteligencia artificial, llm, redes neuronales"
        url="https://fullstackdevlovers.com/ia/fundamentos/ia-vs-ml-vs-deep-learning"
      >
        <p>
          Es habitual usar "IA", "Machine Learning" y "Deep Learning" como si fueran sinónimos, pero no lo
          son. Son tres círculos concéntricos, cada uno metido dentro del anterior. Entender esta jerarquía
          te va a ayudar a hablar con propiedad del tema y, sobre todo, a entender <strong>por qué</strong>{' '}
          los LLMs de los que hablamos en las lecciones anteriores son, técnicamente, Deep Learning
          aplicado al lenguaje.
        </p>

        <LessonSection title="La jerarquía: IA > Machine Learning > Deep Learning">
          <p>
            Piensa en tres círculos, uno dentro de otro, de mayor a menor:
          </p>
          <ul>
            <li>
              <strong>Inteligencia Artificial (IA):</strong> el concepto más amplio. Cualquier sistema
              diseñado para simular comportamiento inteligente: resolver problemas, tomar decisiones,
              reconocer patrones. Esto incluye tanto sistemas que aprenden de datos como sistemas que
              simplemente siguen reglas escritas por una persona.
            </li>
            <li>
              <strong>Machine Learning (ML):</strong> un subconjunto de la IA. En lugar de que una persona
              programe explícitamente las reglas ("si el email contiene la palabra X, márcalo como
              spam"), el sistema <strong>aprende esas reglas por sí mismo</strong> a partir de ejemplos
              (datos etiquetados o no etiquetados).
            </li>
            <li>
              <strong>Deep Learning (aprendizaje profundo):</strong> un subconjunto del ML que usa{' '}
              <strong>redes neuronales artificiales con muchas capas</strong> ("profundas") para aprender
              representaciones cada vez más complejas de los datos. Es el enfoque que ha permitido los
              mayores avances recientes en visión por computador, reconocimiento de voz y, sobre todo,
              lenguaje.
            </li>
          </ul>
          <InfoBox type="info" title="Un círculo dentro de otro">
            Todo Deep Learning es Machine Learning (usa datos para aprender), y todo Machine Learning es
            IA (simula comportamiento inteligente). Pero la implicación no funciona al revés: no toda IA
            es ML, ni todo ML es Deep Learning.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Diferencias prácticas entre los tres enfoques">
          <Table
            headers={['Enfoque', 'Cómo "decide"', 'Ejemplo típico']}
            rows={[
              ['IA con reglas fijas', 'Lógica programada a mano por una persona (if/else, árboles de decisión escritos)', 'Motor de ajedrez clásico, sistema experto de diagnóstico con reglas fijas'],
              ['Machine Learning "tradicional"', 'Aprende un patrón a partir de datos, con algoritmos como regresión, árboles de decisión o SVM', 'Predicción de precios, detección de fraude con features tabulares'],
              ['Deep Learning', 'Aprende representaciones complejas mediante redes neuronales de muchas capas', 'Reconocimiento de imágenes, traducción automática, LLMs como Claude']
            ]}
          />
          <p>
            La frontera entre "ML tradicional" y "Deep Learning" no siempre es nítida, pero una buena
            regla general es esta: cuando los datos son <strong>estructurados y tabulares</strong>{' '}
            (filas y columnas, como en una hoja de cálculo o una tabla de base de datos), el ML tradicional
            suele funcionar muy bien y es más barato de entrenar y ejecutar. Cuando los datos son{' '}
            <strong>no estructurados</strong> (texto libre, imágenes, audio), el Deep Learning suele dar
            resultados muy superiores.
          </p>
        </LessonSection>

        <LessonSection title="¿Por qué los LLMs son Deep Learning?">
          <p>
            Un LLM como Claude o GPT es, en el fondo, una <strong>red neuronal profunda</strong> entrenada
            con una arquitectura llamada <strong>Transformer</strong>, sobre cantidades masivas de texto.
            Por eso un LLM es, a la vez:
          </p>
          <ul>
            <li><strong>IA</strong>, porque simula un comportamiento inteligente (mantener una conversación, generar código).</li>
            <li><strong>Machine Learning</strong>, porque no sigue reglas escritas a mano: aprende patrones del lenguaje a partir de datos de entrenamiento.</li>
            <li><strong>Deep Learning</strong>, porque ese aprendizaje ocurre en una red neuronal de muchas capas, capaz de captar relaciones complejas entre palabras, frases y conceptos.</li>
          </ul>
          <InfoBox type="tip" title="Conectando con las lecciones anteriores">
            Cuando en la lección anterior hablamos de tokens, ventana de contexto y pre-entrenamiento,
            estábamos describiendo, en la práctica, cómo se entrena y usa un modelo de Deep Learning
            aplicado al lenguaje. Ahora ya tienes el mapa completo de dónde encaja ese proceso dentro del
            panorama general de la IA.
          </InfoBox>
        </LessonSection>

        <LessonSection title="¿Cuándo usar cada enfoque?">
          <p>
            Como desarrollador backend, no siempre necesitas Deep Learning ni mucho menos un LLM para
            resolver un problema "de IA". Algunas pautas generales:
          </p>
          <ul>
            <li>
              Si el problema tiene <strong>reglas claras y estables</strong> (validaciones de negocio,
              cálculo de impuestos), unas simples reglas programadas suelen ser más rápidas, baratas y
              predecibles que cualquier modelo.
            </li>
            <li>
              Si tienes <strong>datos tabulares</strong> y una tarea de predicción o clasificación bien
              definida (riesgo de impago, predicción de demanda), el Machine Learning tradicional suele
              ser suficiente y mucho más barato de entrenar y ejecutar que el Deep Learning.
            </li>
            <li>
              Si trabajas con <strong>texto, imágenes o audio</strong>, o necesitas generar contenido
              nuevo en lenguaje natural, el Deep Learning (y en particular, los LLMs vía API) es hoy la
              herramienta más potente y accesible.
            </li>
          </ul>
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
