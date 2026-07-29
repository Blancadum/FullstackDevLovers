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

export function LessonIAQueEsIAGenerativa() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'Qué es la IA generativa y para qué sirve';

  const keyPoints = [
    'La IA generativa crea contenido nuevo (texto, código, imágenes...), mientras que la IA discriminativa/clásica clasifica, predice o detecta patrones sobre datos existentes',
    'Modelos como ChatGPT, Claude o Gemini son LLMs (modelos de lenguaje) especializados en generar texto y código a partir de instrucciones en lenguaje natural',
    'Herramientas como GitHub Copilot o el propio Claude Code integran IA generativa directamente en el flujo de trabajo de desarrollo',
    'Para un desarrollador backend, la IA generativa no es solo "un chat": es una pieza más que se puede integrar en una API mediante peticiones HTTP a un modelo',
    'La IA generativa no "sabe" cosas con certeza: genera la continuación más probable según lo aprendido, por lo que puede equivocarse con seguridad (alucinar)',
    'Elegir cuándo usar IA generativa en una aplicación es una decisión de diseño, no una moda: hay que valorar coste, latencia, privacidad de los datos y margen de error aceptable'
  ];

  const exercises = [
    {
      title: 'Clasificar herramientas de IA',
      description:
        'Para cada una de estas herramientas, indica si es un ejemplo de IA generativa o de IA discriminativa/clásica, y por qué: (1) un filtro de spam de correo, (2) Midjourney, (3) un sistema de recomendación de productos tipo "clientes que compraron esto también compraron", (4) GitHub Copilot.',
      solution: `1. Filtro de spam -> IA discriminativa/clásica: clasifica un correo en dos categorías (spam / no spam), no genera contenido nuevo.

2. Midjourney -> IA generativa: crea una imagen nueva a partir de una descripción de texto.

3. Sistema de recomendación "clientes que compraron esto también compraron" -> IA discriminativa/clásica (o incluso reglas estadísticas simples): predice qué productos son afines, no genera contenido.

4. GitHub Copilot -> IA generativa: genera código nuevo (líneas, funciones) a partir del contexto del archivo y comentarios.`
    },
    {
      title: 'Identificar un caso de uso en tu propio proyecto',
      description:
        'Piensa en una aplicación backend en la que hayas trabajado (o que te gustaría construir). Describe en 3-4 líneas una funcionalidad concreta donde integrar IA generativa aportaría valor real, indicando qué tipo de contenido generaría (texto, código, resumen, etc.) y por qué no bastaría con lógica de negocio tradicional.',
      solution: `No hay una única solución correcta: es un ejercicio de reflexión. Un ejemplo válido sería:

"En una aplicación de gestión de tickets de soporte, se podría usar un LLM para generar automáticamente un resumen del hilo de conversación cuando un ticket se reasigna a otro agente. La lógica de negocio tradicional (si/entonces) no sirve aquí porque el contenido de cada conversación es distinto y en lenguaje natural: hace falta un modelo capaz de entender y sintetizar texto libre."`
    }
  ];

  const summary = `La IA generativa es la rama de la inteligencia artificial capaz de crear contenido nuevo (texto, código, imágenes, audio) en lugar de limitarse a clasificar o predecir sobre datos existentes:

• La IA "clásica" o discriminativa resuelve tareas como clasificar, predecir o detectar (spam, fraude, recomendaciones); la IA generativa produce contenido nuevo a partir de una instrucción o prompt
• Modelos como ChatGPT, Claude o Gemini son LLMs orientados a generar texto y código; Midjourney o DALL-E generan imágenes
• Para un desarrollador backend, la IA generativa se integra normalmente mediante APIs: se envía una petición HTTP con un prompt y se recibe contenido generado como respuesta
• Casos de uso reales y ya extendidos: generación y explicación de código (Copilot, Claude Code), atención al cliente, resúmenes de documentos, generación de contenido, búsqueda semántica
• Un LLM no "sabe" con certeza: genera la continuación más probable según sus datos de entrenamiento, por lo que puede alucinar (inventar información con aparente seguridad)
• Decidir cuándo y cómo integrar IA generativa en una aplicación es una decisión de arquitectura: hay que valorar coste por petición, latencia, privacidad de los datos enviados y el margen de error que la funcionalidad puede tolerar

En las próximas lecciones verás cómo funcionan los LLMs por dentro y cómo encajan dentro del árbol más amplio de la inteligencia artificial (IA, Machine Learning, Deep Learning).`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué es la IA generativa, en qué se diferencia de la IA clásica y por qué importa para un desarrollador backend/fullstack"
        breadcrumbs={breadcrumbs}
        seoTitle="Qué es la IA generativa y para qué sirve | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Descubre qué es la IA generativa, en qué se diferencia de la IA discriminativa/clásica y por qué es relevante para desarrolladores backend y fullstack."
        seoKeywords="ia generativa, inteligencia artificial, que es la ia, llm, chatgpt, claude, github copilot"
        url="https://fullstackdevlovers.com/ia/fundamentos/que-es-ia-generativa"
      >
        <p>
          Llevas un tiempo oyendo hablar de ChatGPT, Claude, Copilot o Midjourney, y seguramente ya los
          has usado alguna vez. Pero para integrar IA de forma seria en tus propias aplicaciones backend
          necesitas entender <strong>qué hay detrás de esas herramientas</strong> y qué las diferencia de
          la "IA" que ya conocías (filtros de spam, recomendadores, detectores de fraude). En esta lección
          vas a ver qué es exactamente la <strong>IA generativa</strong>, en qué se distingue de la IA
          clásica, y por qué es una pieza cada vez más habitual en el stack de un desarrollador backend.
        </p>

        <LessonSection title="IA generativa vs IA discriminativa (o clásica)">
          <p>
            La inteligencia artificial lleva décadas resolviendo problemas de{' '}
            <strong>clasificación y predicción</strong>: decidir si un correo es spam, predecir si un
            cliente va a cancelar su suscripción, recomendar productos, detectar fraude en una
            transacción. A este enfoque se le suele llamar <strong>IA discriminativa</strong> (o IA
            "clásica"): a partir de una entrada, el modelo elige entre un conjunto de categorías o
            predice un valor. No crea nada nuevo, <em>discrimina</em> entre opciones existentes.
          </p>
          <p>
            La <strong>IA generativa</strong> resuelve un problema distinto: a partir de una entrada
            (normalmente una instrucción en lenguaje natural, llamada <strong>prompt</strong>), genera{' '}
            <strong>contenido nuevo</strong> que no existía antes: un texto, un fragmento de código, una
            imagen, un resumen, una traducción.
          </p>
          <Table
            headers={['', 'IA discriminativa / clásica', 'IA generativa']}
            rows={[
              ['Qué hace', 'Clasifica, predice o detecta patrones', 'Crea contenido nuevo'],
              ['Salida típica', 'Una categoría o un número (spam/no spam, probabilidad...)', 'Texto, código, imagen, audio...'],
              ['Ejemplo', 'Filtro de spam, sistema de recomendación', 'ChatGPT, Claude, Midjourney, GitHub Copilot']
            ]}
          />
          <InfoBox type="info" title="No son excluyentes">
            Muchas aplicaciones combinan ambos enfoques: por ejemplo, un sistema puede usar IA
            discriminativa para detectar la intención de un mensaje de soporte y, después, IA generativa
            para redactar una respuesta adecuada a esa intención.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Casos de uso reales">
          <p>
            La IA generativa ya se usa en producción en escenarios muy variados. Algunos de los más
            comunes, agrupados por tipo de contenido que generan:
          </p>
          <ul>
            <li>
              <strong>Texto:</strong> asistentes conversacionales (ChatGPT, Claude), generación y
              corrección de textos, resúmenes de documentos largos, traducción, extracción de información
              estructurada a partir de texto libre.
            </li>
            <li>
              <strong>Código:</strong> autocompletado inteligente y generación de funciones completas
              (GitHub Copilot, Claude Code), explicación de código existente, generación de tests,
              revisión y sugerencias de refactor.
            </li>
            <li>
              <strong>Imágenes:</strong> generación de imágenes a partir de una descripción (Midjourney,
              DALL-E, Stable Diffusion), edición y variaciones de imágenes existentes.
            </li>
            <li>
              <strong>Otros formatos:</strong> generación de audio y voz, música, vídeo. Estos casos son
              menos habituales todavía en aplicaciones backend "normales", pero crecen rápido.
            </li>
          </ul>
        </LessonSection>

        <LessonSection title="Por qué importa para un desarrollador backend/fullstack">
          <p>
            La IA generativa no es solo "un chat bonito en el navegador": los modelos que hay detrás
            (como Claude o GPT) se ofrecen también como <strong>APIs HTTP</strong>. Esto significa que,
            como desarrollador backend, puedes enviar una petición con un prompt y recibir contenido
            generado como respuesta, exactamente igual que consumirías cualquier otra API REST.
          </p>
          <p>Algunos ejemplos concretos de integración en una aplicación backend típica:</p>
          <ul>
            <li>Un endpoint que recibe la descripción de un producto y genera automáticamente varias versiones del texto de marketing.</li>
            <li>Un servicio que resume tickets de soporte largos antes de mostrarlos a un agente humano.</li>
            <li>Un chatbot de atención al cliente integrado en tu propia aplicación, no en una web externa.</li>
            <li>Un asistente interno que ayuda al equipo a consultar documentación técnica en lenguaje natural.</li>
          </ul>
          <InfoBox type="tip" title="No sustituye el pensamiento crítico">
            Integrar IA generativa en una API no elimina la necesidad de validar sus respuestas, controlar
            costes (cada petición a estos modelos suele tener un coste económico) y diseñar buenos
            mecanismos de manejo de errores, igual que harías con cualquier servicio externo del que
            dependa tu aplicación.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Herramientas que probablemente ya conoces">
          <p>Para situarte, aquí tienes algunos ejemplos concretos de IA generativa muy extendidos:</p>
          <Table
            headers={['Herramienta', 'Empresa', 'Tipo de contenido']}
            rows={[
              ['ChatGPT', 'OpenAI', 'Texto y código'],
              ['Claude', 'Anthropic', 'Texto y código'],
              ['GitHub Copilot', 'GitHub / Microsoft / OpenAI', 'Código'],
              ['Midjourney', 'Midjourney, Inc.', 'Imágenes']
            ]}
          />
          <p>
            Todas comparten una misma base tecnológica para el texto y el código: son (o usan){' '}
            <strong>modelos de lenguaje de gran tamaño (LLMs)</strong>, que es exactamente lo que verás en
            la próxima lección.
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
