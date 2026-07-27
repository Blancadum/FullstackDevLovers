import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinCorrutinas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Una corrutina es una tarea que se puede suspender y reanudar sin bloquear el hilo que la ejecuta',
    'Las funciones que pueden suspenderse se marcan con la palabra clave suspend',
    'launch inicia una corrutina que no devuelve resultado; async inicia una que sí, envuelto en un Deferred',
    'runBlocking bloquea el hilo actual hasta que la corrutina termina; se usa sobre todo para pruebas o el punto de entrada',
    'Un CoroutineScope define el ciclo de vida en el que viven las corrutinas que lanzas',
    'Dispatchers.IO, Dispatchers.Default y Dispatchers.Main determinan en qué hilo(s) se ejecuta el código',
    'Las corrutinas son mucho más ligeras que los hilos: se pueden lanzar miles sin agotar recursos del sistema',
  ];

  const exercises = [
    {
      title: 'Lanzar una corrutina con launch',
      description: 'Dentro de runBlocking, lanza una corrutina con launch que espere 1 segundo (delay) y luego imprima un mensaje. Imprime también un mensaje antes de lanzarla.',
      solution: `import kotlinx.coroutines.*

fun main() = runBlocking {
    println("Antes de lanzar la corrutina")

    launch {
        delay(1000)
        println("Corrutina terminada")
    }

    println("Después de lanzar la corrutina")
}
// Salida:
// Antes de lanzar la corrutina
// Después de lanzar la corrutina
// Corrutina terminada`,
    },
    {
      title: 'Obtener un resultado con async/await',
      description: 'Usa async para calcular el cuadrado de un número en una corrutina y recupera el resultado con await().',
      solution: `import kotlinx.coroutines.*

suspend fun calcularCuadrado(numero: Int): Int {
    delay(500)
    return numero * numero
}

fun main() = runBlocking {
    val resultado = async { calcularCuadrado(6) }
    println("Calculando...")
    println("Resultado: \${resultado.await()}")
}`,
    },
    {
      title: 'Ejecutar tareas en paralelo',
      description: 'Lanza dos llamadas "suspend" con async al mismo tiempo y suma sus resultados cuando ambas terminen.',
      solution: `import kotlinx.coroutines.*

suspend fun obtenerPrecio(): Int {
    delay(300)
    return 100
}

suspend fun obtenerDescuento(): Int {
    delay(300)
    return 20
}

fun main() = runBlocking {
    val precio = async { obtenerPrecio() }
    val descuento = async { obtenerDescuento() }

    // Como se lanzan en paralelo, el tiempo total es ~300ms, no ~600ms
    val total = precio.await() - descuento.await()
    println("Total: $total")
}`,
    },
  ];

  const summary = `Las corrutinas son la forma que tiene Kotlin de escribir código asíncrono con aspecto de código
secuencial:

• Una función suspend puede pausarse y reanudarse sin bloquear el hilo en el que corre.
• launch lanza una corrutina "y olvida" (no espera resultado); async lanza una corrutina y te devuelve un Deferred del que puedes pedir el resultado con await().
• runBlocking bloquea el hilo actual: útil en el punto de entrada de un programa o en tests, pero se evita en código de producción real.
• Un CoroutineScope agrupa corrutinas y controla su ciclo de vida (si el scope se cancela, se cancelan todas sus corrutinas hijas).
• Los Dispatchers (IO, Default, Main) controlan en qué hilo(s) se ejecuta cada corrutina.

Frente a los hilos tradicionales, las corrutinas son mucho más ligeras en memoria y permiten escribir código concurrente legible, sin caer en el "callback hell" típico de otros enfoques asíncronos.`;

  return (
    <>
      <LessonLayout
        title="Corrutinas en Kotlin"
        description="Programación asincrónica y concurrencia ligera en Kotlin"
        breadcrumbs={breadcrumbs}
        seoTitle="Corrutinas en Kotlin - Concurrencia y Asincronía"
        seoDescription="Aprende cómo funcionan las corrutinas en Kotlin para manejar tareas asincrónicas de forma ligera."
        seoKeywords="kotlin, corrutinas, coroutines, async, concurrencia"
        url="https://fullstackdevlovers.com/backend/kotlin/corrutinas"
      >
        <p>
          Cuando una aplicación necesita hacer llamadas a una base de datos, a una API externa o cualquier
          operación que tarda tiempo, no queremos que el programa se quede "congelado" esperando. Las
          corrutinas son la solución que ofrece Kotlin para escribir código asíncrono y concurrente de
          forma sencilla, sin la complejidad de gestionar hilos manualmente ni encadenar callbacks.
        </p>

        <InfoBox type="info" title="Requiere una librería">
          Las corrutinas forman parte del lenguaje (la palabra clave <code>suspend</code> es nativa), pero
          para usarlas en un proyecto real necesitas añadir la dependencia{' '}
          <code>kotlinx-coroutines-core</code> {/* TODO-verificar: confirmar versión recomendada actual de kotlinx-coroutines-core */}
          . En un proyecto Spring Boot con Kotlin suele venir ya incluida a través de{' '}
          <code>spring-boot-starter</code>.
        </InfoBox>

        <LessonSection title="Funciones suspend">
          <p>
            Una función marcada con <code>suspend</code> puede pausar su ejecución sin bloquear el hilo, y
            reanudarla más tarde. Solo se puede llamar desde otra función <code>suspend</code> o desde una
            corrutina.
          </p>
          <CodeBlock
            language="kotlin"
            code={`import kotlinx.coroutines.delay

suspend fun saludarConRetraso() {
    delay(1000) // Suspende la corrutina, no bloquea el hilo
    println("¡Hola después de esperar!")
}`}
          />
        </LessonSection>

        <LessonSection title="launch vs async">
          <p>
            <code>launch</code> y <code>async</code> son las dos formas más comunes de iniciar una
            corrutina. <code>launch</code> se usa cuando no necesitas un resultado; <code>async</code>{' '}
            cuando sí lo necesitas y quieres recuperarlo más tarde con <code>await()</code>.
          </p>
          <CodeBlock
            language="kotlin"
            code={`import kotlinx.coroutines.*

fun main() = runBlocking {
    // launch: "dispara y olvida"
    launch {
        delay(500)
        println("Tarea en segundo plano terminada")
    }

    // async: devuelve un resultado
    val resultado: Deferred<Int> = async {
        delay(300)
        40 + 2
    }

    println("Resultado: \${resultado.await()}")
}`}
          />
        </LessonSection>

        <LessonSection title="runBlocking y el punto de entrada">
          <p>
            <code>runBlocking</code> crea una corrutina y bloquea el hilo actual hasta que termina. Es útil
            para el punto de entrada de un programa de consola o en tests, pero normalmente se evita dentro
            de aplicaciones reales, donde se prefiere lanzar corrutinas desde un <code>CoroutineScope</code>{' '}
            gestionado por el framework (por ejemplo, Spring o Android).
          </p>
          <CodeBlock
            language="kotlin"
            code={`fun main() = runBlocking {
    println("Inicio")
    delay(1000)
    println("Fin, después de esperar 1 segundo")
}`}
          />
        </LessonSection>

        <LessonSection title="Ejecución en paralelo">
          <p>
            Una de las mayores ventajas de <code>async</code> es que puedes lanzar varias tareas a la vez y
            esperar a que todas terminen, en lugar de ejecutarlas una detrás de otra.
          </p>
          <CodeBlock
            language="kotlin"
            code={`import kotlinx.coroutines.*

suspend fun obtenerPrecio(): Int {
    delay(300)
    return 100
}

suspend fun obtenerDescuento(): Int {
    delay(300)
    return 20
}

fun main() = runBlocking {
    // Se lanzan al mismo tiempo: el tiempo total es ~300ms, no 600ms
    val precio = async { obtenerPrecio() }
    val descuento = async { obtenerDescuento() }

    println("Total: \${precio.await() - descuento.await()}")
}`}
          />
        </LessonSection>

        <LessonSection title="Dispatchers: en qué hilo se ejecuta el código">
          <p>
            Un <code>Dispatcher</code> decide en qué hilo o grupo de hilos se ejecuta una corrutina. Los
            más comunes son:
          </p>
          <ul>
            <li><code>Dispatchers.Default</code>: para trabajo intensivo de CPU (cálculos, algoritmos)</li>
            <li><code>Dispatchers.IO</code>: para operaciones de entrada/salida (red, disco, base de datos)</li>
            <li><code>Dispatchers.Main</code>: para actualizar la interfaz de usuario (en apps con UI, como Android)</li>
          </ul>
          <CodeBlock
            language="kotlin"
            code={`import kotlinx.coroutines.*

suspend fun leerDeBaseDeDatos(): String = withContext(Dispatchers.IO) {
    // Aquí iría una llamada real a la base de datos
    "datos obtenidos"
}`}
          />
          <InfoBox type="tip" title="withContext para cambiar de dispatcher">
            <code>withContext</code> permite cambiar temporalmente el dispatcher en el que se ejecuta un
            bloque de código, sin necesidad de lanzar una corrutina nueva.
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
