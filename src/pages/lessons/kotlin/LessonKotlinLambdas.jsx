import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinLambdas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Una lambda es una función anónima que puedes guardar en una variable o pasar como argumento',
    'Se escribe entre llaves: { parametros -> cuerpo }',
    'Si la lambda es el último parámetro de una función, se puede escribir fuera de los paréntesis',
    'Si la lambda tiene un único parámetro, puedes omitirlo y referirte a él con "it"',
    'filter, map, forEach, sortedBy y reduce son funciones de orden superior muy comunes en colecciones',
    'Una función de orden superior es aquella que recibe una función como parámetro o devuelve una función',
  ];

  const exercises = [
    {
      title: 'Filtrar y transformar una lista',
      description: 'Dada una lista de números, obtén una nueva lista solo con los pares y multiplícalos por 2, usando filter y map con lambdas.',
      solution: `val numeros = listOf(1, 2, 3, 4, 5, 6)

val resultado = numeros
    .filter { it % 2 == 0 }
    .map { it * 2 }

println(resultado) // [4, 8, 12]`,
    },
    {
      title: 'Función de orden superior propia',
      description: 'Escribe una función "operar" que reciba dos Int y una lambda (Int, Int) -> Int, y devuelva el resultado de aplicar la lambda a los dos números.',
      solution: `fun operar(a: Int, b: Int, operacion: (Int, Int) -> Int): Int {
    return operacion(a, b)
}

fun main() {
    val suma = operar(4, 5) { x, y -> x + y }
    val producto = operar(4, 5) { x, y -> x * y }

    println(suma)     // 9
    println(producto) // 20
}`,
    },
    {
      title: 'reduce para acumular un valor',
      description: 'Usa reduce para calcular el producto de todos los elementos de una lista de enteros.',
      solution: `val numeros = listOf(1, 2, 3, 4)

val producto = numeros.reduce { acumulado, actual -> acumulado * actual }

println(producto) // 24`,
    },
  ];

  const summary = `Las lambdas son una pieza central de la programación funcional en Kotlin:

• Se escriben entre llaves: { parametros -> cuerpo }.
• Si son el último argumento de una función, se pueden sacar fuera de los paréntesis (trailing lambda).
• Con un único parámetro, puedes usar el nombre implícito "it" en lugar de nombrarlo.
• Funciones como filter, map, forEach o reduce reciben lambdas y son mucho más legibles que los bucles manuales equivalentes en Java.
• Puedes escribir tus propias funciones de orden superior aceptando una lambda como parámetro, indicando su firma con el tipo (Tipo1, Tipo2) -> TipoRetorno.

Combinar lambdas con las funciones de la librería estándar de colecciones es una de las formas más rápidas de escribir código Kotlin idiomático y expresivo.`;

  return (
    <>
      <LessonLayout
        title="Lambdas y Funciones Literales en Kotlin"
        description="Funciones anónimas y expresiones lambda en Kotlin"
        breadcrumbs={breadcrumbs}
        seoTitle="Lambdas en Kotlin - Funciones Literales y Programación Funcional"
        seoDescription="Aprende a usar lambdas y funciones literales en Kotlin para escribir código más funcional."
        seoKeywords="kotlin, lambda, funciones literales, programación funcional"
        url="https://fullstackdevlovers.com/backend/kotlin/lambdas"
      >
        <p>
          Kotlin trata las funciones como ciudadanos de primera clase: puedes guardarlas en variables,
          pasarlas como argumento a otras funciones o devolverlas como resultado. Las lambdas son la forma
          más habitual de escribir estas "funciones literales" de manera compacta, y son especialmente
          útiles al trabajar con colecciones.
        </p>

        <LessonSection title="Sintaxis básica de una lambda">
          <p>
            Una lambda se escribe entre llaves, con los parámetros (si los hay) seguidos de una flecha{' '}
            <code>{'->'}</code> y el cuerpo de la función.
          </p>
          <CodeBlock
            language="kotlin"
            code={`// Lambda guardada en una variable
val saludar: (String) -> String = { nombre -> "Hola, $nombre!" }
println(saludar("Ana")) // Hola, Ana!

// Lambda sin parámetros
val obtenerSaludo: () -> String = { "Buenos días" }
println(obtenerSaludo())

// Lambda con varios parámetros
val sumar: (Int, Int) -> Int = { a, b -> a + b }
println(sumar(2, 3)) // 5`}
          />
        </LessonSection>

        <LessonSection title="El parámetro implícito it">
          <p>
            Cuando una lambda recibe un único parámetro, Kotlin permite omitir su nombre y referirse a él
            con la palabra reservada <code>it</code>. Es muy común al usar lambdas cortas con colecciones.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val numeros = listOf(1, 2, 3, 4, 5)

// Con nombre explícito
val pares = numeros.filter { numero -> numero % 2 == 0 }

// Con "it" (más habitual para lambdas de un solo parámetro)
val pares2 = numeros.filter { it % 2 == 0 }

println(pares2) // [2, 4]`}
          />
          <InfoBox type="tip" title="Cuándo evitar it">
            Si la lambda es larga o tiene lógica compleja, es más legible nombrar el parámetro
            explícitamente en lugar de usar <code>it</code>, sobre todo si hay lambdas anidadas.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Trailing lambda: la lambda fuera de los paréntesis">
          <p>
            Si la lambda es el último (o único) parámetro de una función, Kotlin permite escribirla fuera
            de los paréntesis, e incluso omitir los paréntesis por completo si no hay más argumentos. Este
            es el motivo por el que funciones como <code>filter</code> o <code>forEach</code> se leen tan
            naturalmente.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val numeros = listOf(1, 2, 3, 4, 5)

// Forma "completa"
numeros.forEach({ println(it) })

// Trailing lambda: la forma idiomática
numeros.forEach { println(it) }`}
          />
        </LessonSection>

        <LessonSection title="Funciones de orden superior">
          <p>
            Una función de orden superior es aquella que recibe una función (o lambda) como parámetro, o
            que devuelve una función. La librería estándar de Kotlin está llena de ellas, pero también
            puedes escribir las tuyas propias indicando el tipo de la lambda entre paréntesis.
          </p>
          <CodeBlock
            language="kotlin"
            code={`// operacion es una función que recibe dos Int y devuelve un Int
fun operar(a: Int, b: Int, operacion: (Int, Int) -> Int): Int {
    return operacion(a, b)
}

fun main() {
    val suma = operar(4, 5) { x, y -> x + y }
    val resta = operar(4, 5) { x, y -> x - y }

    println(suma) // 9
    println(resta) // -1
}`}
          />
        </LessonSection>

        <LessonSection title="Lambdas con colecciones: los operadores más usados">
          <CodeBlock
            language="kotlin"
            code={`val numeros = listOf(5, 3, 8, 1, 9, 2)

val ordenados = numeros.sortedBy { it }         // [1, 2, 3, 5, 8, 9]
val mayoresDeTres = numeros.filter { it > 3 }   // [5, 8, 9]
val alCuadrado = numeros.map { it * it }        // [25, 9, 64, 1, 81, 4]
val suma = numeros.reduce { acc, n -> acc + n } // 28
val algunoMayorA5 = numeros.any { it > 5 }      // true`}
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
