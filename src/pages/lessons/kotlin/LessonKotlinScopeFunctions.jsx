import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinScopeFunctions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Las scope functions (let, run, with, apply, also) ejecutan un bloque de código en el contexto de un objeto',
    'Se diferencian en dos cosas: cómo se referencia al objeto dentro del bloque (this o it) y qué devuelven',
    'let y also usan it; run, with y apply dan acceso al objeto como this',
    'let, run y with devuelven el resultado del bloque lambda; apply y also devuelven siempre el propio objeto',
    'apply se usa mucho para configurar un objeto recién creado; also para efectos secundarios como logging',
    'let combinado con el safe call (?.) es el patrón habitual para ejecutar código solo si algo no es null',
  ];

  const exercises = [
    {
      title: 'apply para configurar un objeto',
      description: 'Usa apply para crear un StringBuilder, añadirle varias líneas de texto y quedarte con el propio StringBuilder configurado.',
      solution: `val texto = StringBuilder().apply {
    append("Línea 1\\n")
    append("Línea 2\\n")
    append("Línea 3")
}

println(texto)`,
    },
    {
      title: 'let para transformar un valor nullable',
      description: 'Dado un email: String?, usa ?.let para imprimir el email en minúsculas solo si no es null.',
      solution: `val email: String? = "USUARIO@EMAIL.COM"

email?.let {
    println(it.lowercase())
}

val sinEmail: String? = null
sinEmail?.let {
    println("Esto no se ejecuta")
}`,
    },
    {
      title: 'also para logging sin romper la cadena',
      description: 'Dada una lista de números, usa also para imprimir un mensaje de depuración justo después de filtrarla, sin interrumpir el encadenamiento de operaciones.',
      solution: `val numeros = listOf(1, 2, 3, 4, 5, 6)

val resultado = numeros
    .filter { it % 2 == 0 }
    .also { println("Números pares: $it") }
    .map { it * 10 }

println(resultado) // [20, 40, 60]`,
    },
  ];

  const summary = `Las scope functions permiten ejecutar bloques de código en el contexto de un objeto, evitando
repetir su nombre una y otra vez:

• let: acceso con "it", devuelve el resultado del bloque. Ideal para transformar valores o trabajar con nulls (?.let).
• run: acceso con "this", devuelve el resultado del bloque. Útil para agrupar varias operaciones y quedarte con un resultado.
• with: como run, pero no es una función de extensión (se pasa el objeto como argumento). Se usa cuando ya tienes la referencia y no es nullable.
• apply: acceso con "this", devuelve el propio objeto. Perfecto para configurar un objeto recién creado.
• also: acceso con "it", devuelve el propio objeto. Perfecto para efectos secundarios (logging, validaciones) sin romper una cadena de llamadas.

Elegir la función correcta es más una cuestión de legibilidad que de funcionalidad: todas se pueden sustituir por código imperativo tradicional, pero usadas bien hacen el código más expresivo.`;

  return (
    <>
      <LessonLayout
        title="Scope Functions en Kotlin"
        description="let, run, with, apply y also explicados"
        breadcrumbs={breadcrumbs}
        seoTitle="Scope Functions en Kotlin - let, run, with, apply, also"
        seoDescription="Aprende a usar las scope functions de Kotlin: let, run, with, apply y also."
        seoKeywords="kotlin, scope functions, let, run, with, apply, also"
        url="https://fullstackdevlovers.com/backend/kotlin/scope-functions"
      >
        <p>
          Las scope functions son un grupo de cinco funciones de la librería estándar de Kotlin (
          <code>let</code>, <code>run</code>, <code>with</code>, <code>apply</code> y <code>also</code>)
          que ejecutan un bloque de código en el contexto de un objeto. Al principio pueden parecer
          confusas porque hacen cosas muy parecidas, pero una vez entiendes sus dos diferencias clave
          (cómo referencian al objeto y qué devuelven), resultan muy naturales de usar.
        </p>

        <LessonSection title="Las dos preguntas clave">
          <p>
            Para elegir la scope function adecuada, basta con responder a dos preguntas:
          </p>
          <ol>
            <li>¿Dentro del bloque, quiero referirme al objeto como <code>this</code> o como <code>it</code>?</li>
            <li>¿Quiero que la expresión completa devuelva el resultado del bloque, o el propio objeto?</li>
          </ol>
          <Table
            headers={['Función', 'Referencia al objeto', 'Qué devuelve', 'Uso típico']}
            rows={[
              ['let', 'it', 'Resultado del bloque', 'Transformar un valor / trabajar con nulls (?.let)'],
              ['run', 'this', 'Resultado del bloque', 'Agrupar operaciones y calcular un resultado'],
              ['with', 'this (no es extensión)', 'Resultado del bloque', 'Operar sobre un objeto ya existente'],
              ['apply', 'this', 'El propio objeto', 'Configurar un objeto recién creado'],
              ['also', 'it', 'El propio objeto', 'Efectos secundarios (logging, validación) en una cadena'],
            ]}
          />
        </LessonSection>

        <LessonSection title="let: transformar valores y trabajar con nulls">
          <CodeBlock
            language="kotlin"
            code={`val nombre = "kotlin"

val longitud = nombre.let {
    println("Procesando: $it")
    it.length
}
println(longitud) // 6

// El uso más habitual: junto al safe call para nulls
val email: String? = "USUARIO@EMAIL.COM"
email?.let {
    println(it.lowercase())
}`}
          />
        </LessonSection>

        <LessonSection title="run: agrupar operaciones">
          <CodeBlock
            language="kotlin"
            code={`val resultado = "kotlin".run {
    val mayus = this.uppercase()
    "Texto en mayúsculas: $mayus"
}
println(resultado) // Texto en mayúsculas: KOTLIN`}
          />
        </LessonSection>

        <LessonSection title="with: operar sobre un objeto existente">
          <p>
            A diferencia de las demás, <code>with</code> no es una función de extensión: el objeto se pasa
            como primer argumento. Se usa cuando ya tienes una referencia no nullable y quieres agrupar
            varias llamadas sobre ella.
          </p>
          <CodeBlock
            language="kotlin"
            code={`data class Config(var host: String, var puerto: Int)

val config = Config("localhost", 8080)

val descripcion = with(config) {
    "Servidor: $host:$puerto"
}
println(descripcion) // Servidor: localhost:8080`}
          />
        </LessonSection>

        <LessonSection title="apply: configurar un objeto recién creado">
          <CodeBlock
            language="kotlin"
            code={`data class Config(var host: String = "", var puerto: Int = 0)

val config = Config().apply {
    host = "localhost"
    puerto = 8080
}

println(config) // Config(host=localhost, puerto=8080)`}
          />
          <InfoBox type="tip" title="apply devuelve el objeto">
            Como <code>apply</code> devuelve siempre el propio objeto configurado, es habitual encadenarlo
            justo después de crear una instancia, como en el ejemplo anterior.
          </InfoBox>
        </LessonSection>

        <LessonSection title="also: efectos secundarios sin romper la cadena">
          <CodeBlock
            language="kotlin"
            code={`val numeros = listOf(1, 2, 3, 4, 5, 6)

val resultado = numeros
    .filter { it % 2 == 0 }
    .also { println("Números pares: $it") } // Solo para depurar/loggear
    .map { it * 10 }

println(resultado) // [20, 40, 60]`}
          />
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
