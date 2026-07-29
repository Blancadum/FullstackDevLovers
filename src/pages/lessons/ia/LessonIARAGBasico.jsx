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

export function LessonIARAGBasico() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const title = 'RAG (Retrieval-Augmented Generation) básico';

  const keyPoints = [
    'RAG (Retrieval-Augmented Generation) resuelve el problema de que un modelo de lenguaje no conoce tus datos privados, recientes o específicos de tu negocio',
    'El flujo básico es: buscar la información relevante en tus propios documentos, inyectarla en el prompt como contexto, y dejar que el modelo responda apoyándose en ese contexto',
    'RAG no reentrena ni modifica el modelo: solo cambia lo que le mandas en el prompt en cada petición',
    'En producción, la búsqueda de información relevante se hace con embeddings y una base de datos vectorial, no con coincidencia literal de palabras',
    'Pedirle explícitamente al modelo que responda solo con la información del contexto reduce (pero no elimina) el riesgo de que invente datos'
  ];

  const exercises = [
    {
      title: 'Puntuación mínima de relevancia',
      description:
        'Modifica la función buscarDocumentosRelevantes para que, si ningún documento supera una puntuación mínima de 1 coincidencia, la función devuelva un array vacío. Después, en el endpoint, si no hay documentos relevantes, responde directamente "No tengo información suficiente para responder a eso" sin llamar a la API (así te ahorras la llamada).',
      language: 'javascript',
      solution: `function buscarDocumentosRelevantes(pregunta, documentos, maxResultados = 2, puntuacionMinima = 1) {
  const palabrasClave = pregunta.toLowerCase().split(/\\s+/);

  const puntuados = documentos.map((doc) => {
    const textoDoc = doc.contenido.toLowerCase();
    const coincidencias = palabrasClave.filter((palabra) => textoDoc.includes(palabra)).length;
    return { ...doc, puntuacion: coincidencias };
  });

  return puntuados
    .filter((doc) => doc.puntuacion >= puntuacionMinima)
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .slice(0, maxResultados);
}

app.post('/api/preguntar', async (req, res) => {
  const { pregunta } = req.body;

  const relevantes = buscarDocumentosRelevantes(pregunta, documentos);

  if (relevantes.length === 0) {
    return res.json({
      respuesta: 'No tengo información suficiente para responder a eso.',
      fuentes: []
    });
  }

  // ...aquí seguiría la llamada a la API con el contexto, igual que en el ejemplo de la lección
});`
    },
    {
      title: 'Trocear un documento largo en fragmentos',
      description:
        'Los documentos reales suelen ser demasiado largos para tratarlos como una sola unidad de búsqueda. Escribe una función trocearTexto(texto, tamanoFragmento) que divida un texto largo en fragmentos ("chunks") de un tamaño máximo de caracteres, sin cortar por la mitad de una frase si es posible (puedes trocear por párrafos o por puntos).',
      language: 'javascript',
      solution: `function trocearTexto(texto, tamanoFragmento = 500) {
  const parrafos = texto.split('\\n').filter((p) => p.trim().length > 0);
  const fragmentos = [];
  let fragmentoActual = '';

  for (const parrafo of parrafos) {
    if ((fragmentoActual + parrafo).length > tamanoFragmento && fragmentoActual.length > 0) {
      fragmentos.push(fragmentoActual.trim());
      fragmentoActual = '';
    }
    fragmentoActual += parrafo + '\\n';
  }

  if (fragmentoActual.trim().length > 0) {
    fragmentos.push(fragmentoActual.trim());
  }

  return fragmentos;
}

// Cada fragmento resultante se indexaría (o buscaría) como si fuese
// un "documento" independiente, igual que en el ejemplo de la lección.`
    }
  ];

  const summary = `RAG (Retrieval-Augmented Generation) es la técnica que le permite a un modelo de lenguaje "conocer"
información que no formaba parte de sus datos de entrenamiento: tus documentos privados, tus datos más
recientes, o el contenido específico de tu producto. La idea central es sencilla: antes de preguntarle
algo al modelo, buscas en tus propios datos los fragmentos relevantes para esa pregunta, y se los pasas
como contexto dentro del prompt. El modelo no aprende nada de forma permanente; simplemente responde
apoyándose en la información que le has dado en esa llamada concreta. El ejemplo de esta lección usa
búsqueda por coincidencia de palabras para que veas el flujo completo sin depender de infraestructura
adicional; en un sistema real, ese paso de búsqueda se sustituye por embeddings y una base de datos
vectorial, que encuentran contenido relevante aunque no comparta las mismas palabras exactas.`;

  return (
    <>
      <LessonLayout
        title={title}
        description="Qué problema resuelve RAG y cómo montar un flujo básico de búsqueda + generación"
        breadcrumbs={breadcrumbs}
        seoTitle="RAG (Retrieval-Augmented Generation) básico | Inteligencia Artificial - Fullstack Dev Lovers"
        seoDescription="Aprende qué es RAG (Retrieval-Augmented Generation), qué problema resuelve y cómo construir un ejemplo simplificado que busca contexto en tus documentos antes de llamar a la API del modelo."
        seoKeywords="rag, retrieval augmented generation, inteligencia artificial"
        url="https://fullstackdevlovers.com/ia/casos-practicos/rag-basico"
      >
        <p>
          Ya sabes cómo llamar a la API de un modelo de lenguaje y cómo escribir prompts efectivos. Pero hay
          un límite que ningún prompt por sí solo puede resolver: el modelo no conoce tus datos. En esta
          lección vas a ver qué problema resuelve RAG (Retrieval-Augmented Generation) y a construir una
          versión simplificada del flujo, sin necesidad de una base de datos vectorial real.
        </p>

        <LessonSection title="¿Qué problema resuelve RAG?">
          <p>
            Un modelo de lenguaje se entrena una vez, con datos hasta una fecha determinada. A partir de ahí
            tiene dos límites importantes:
          </p>
          <ul>
            <li>
              <strong>No conoce información posterior a su entrenamiento</strong>: novedades, cambios
              recientes, datos que se generaron después.
            </li>
            <li>
              <strong>No conoce tus datos privados</strong>: la documentación interna de tu empresa, tu
              base de datos de productos, los tickets de soporte de tus clientes... nada de eso estaba en
              sus datos de entrenamiento.
            </li>
          </ul>
          <p>
            Podrías pensar en reentrenar el modelo con tus datos (fine-tuning), pero es caro, lento, y hay
            que repetirlo cada vez que tus datos cambian. RAG propone algo mucho más simple: en vez de
            "enseñarle" tus datos al modelo, se los <strong>enseñas en cada pregunta</strong>, dentro del
            propio prompt.
          </p>
        </LessonSection>

        <LessonSection title="El flujo general de RAG">
          <p>El proceso tiene siempre la misma forma, independientemente de la tecnología concreta que uses:</p>
          <ol>
            <li>
              <strong>Preparar los documentos:</strong> tienes una colección de textos propios (artículos de
              ayuda, documentación, políticas internas, reseñas de producto...).
            </li>
            <li>
              <strong>Buscar los fragmentos relevantes:</strong> cuando el usuario hace una pregunta, buscas
              en esos documentos cuáles tienen relación con lo que está preguntando.
            </li>
            <li>
              <strong>Inyectar ese contexto en el prompt:</strong> añades el contenido encontrado al mensaje
              que le mandas al modelo, normalmente en el system prompt.
            </li>
            <li>
              <strong>El modelo responde usando ese contexto:</strong> en vez de "inventar" con lo que sabe
              de su entrenamiento, responde apoyándose en la información que acabas de darle.
            </li>
          </ol>
          <InfoBox type="info" title="Retrieval + Generation">
            De ahí el nombre: <em>Retrieval</em> (recuperar información relevante) + <em>Augmented
            Generation</em> (generación de texto "aumentada" con ese contexto extra).
          </InfoBox>
        </LessonSection>

        <LessonSection title="Ejemplo simplificado: búsqueda por texto en vez de vectores">
          <p>
            En un sistema RAG real, el paso de "buscar los fragmentos relevantes" se hace con{' '}
            <strong>embeddings</strong> (una representación numérica del significado de un texto) guardados
            en una <strong>base de datos vectorial</strong>, que permite encontrar contenido relacionado
            aunque no comparta las mismas palabras exactas.{' '}
            Para entender el concepto sin depender de esa infraestructura, vamos a hacer una versión mucho
            más simple: buscar coincidencias de palabras entre la pregunta del usuario y un array de
            documentos en memoria.
          </p>
          <CodeBlock
            language="javascript"
            code={`const documentos = [
  {
    id: 1,
    titulo: 'Política de vacaciones',
    contenido: 'Los empleados tienen derecho a 23 días laborables de vacaciones al año, ' +
      'que se solicitan con un mínimo de 15 días de antelación a través de la intranet.'
  },
  {
    id: 2,
    titulo: 'Política de teletrabajo',
    contenido: 'Se permite el teletrabajo hasta 3 días por semana, previa autorización ' +
      'del responsable de equipo. Los días presenciales se coordinan en el calendario del equipo.'
  },
  {
    id: 3,
    titulo: 'Proceso de reembolso de gastos',
    contenido: 'Los gastos de viaje y dietas se reembolsan adjuntando la factura en la ' +
      'herramienta de gastos, en un plazo máximo de 30 días desde que se produjeron.'
  }
];

function buscarDocumentosRelevantes(pregunta, documentos, maxResultados = 2) {
  const palabrasClave = pregunta.toLowerCase().split(/\\s+/);

  const puntuados = documentos.map((doc) => {
    const textoDoc = doc.contenido.toLowerCase();
    const coincidencias = palabrasClave.filter((palabra) => textoDoc.includes(palabra)).length;
    return { ...doc, puntuacion: coincidencias };
  });

  return puntuados
    .filter((doc) => doc.puntuacion > 0)
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .slice(0, maxResultados);
}`}
          />
          <p>
            Con esa función de búsqueda, el endpoint que atiende la pregunta del usuario queda así:
          </p>
          <CodeBlock
            language="javascript"
            code={`app.post('/api/preguntar', async (req, res) => {
  const { pregunta } = req.body;

  // 1. Buscamos los documentos relevantes para la pregunta
  const relevantes = buscarDocumentosRelevantes(pregunta, documentos);

  // 2. Construimos el contexto a partir de esos documentos
  const contexto = relevantes
    .map((doc) => \`### \${doc.titulo}\\n\${doc.contenido}\`)
    .join('\\n\\n');

  // 3. Se lo pasamos al modelo como parte del system prompt
  const respuesta = await anthropic.messages.create({
    model: 'claude-sonnet-4-5', // usa el identificador de modelo vigente en la documentación oficial de Anthropic
    max_tokens: 500,
    system:
      'Responde ÚNICAMENTE usando la información del siguiente contexto. ' +
      'Si la respuesta no está en el contexto, di explícitamente que no dispones de esa información.\\n\\n' +
      \`Contexto:\\n\${contexto}\`,
    messages: [{ role: 'user', content: pregunta }]
  });

  // 4. Devolvemos la respuesta junto con las fuentes usadas, para que sea trazable
  res.json({
    respuesta: respuesta.content[0].text,
    fuentes: relevantes.map((doc) => doc.titulo)
  });
});`}
          />
          <InfoBox type="tip" title="De la búsqueda por texto a embeddings">
            El límite de la búsqueda por coincidencia de palabras es evidente: si el usuario pregunta "¿días
            de descanso al año?" y el documento dice "vacaciones", no habrá coincidencia literal. Los
            embeddings resuelven esto representando el <em>significado</em> del texto, no las palabras
            exactas, así que "días de descanso" y "vacaciones" quedan cerca en ese espacio numérico aunque
            no compartan ninguna palabra. La lógica del resto del flujo (buscar, inyectar como contexto,
            generar) no cambia.
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
