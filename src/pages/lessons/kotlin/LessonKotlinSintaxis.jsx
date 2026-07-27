import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinSintaxis() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'val declara una referencia inmutable (no se puede reasignar); var declara una referencia mutable',
    'Kotlin infiere el tipo automáticamente, pero puedes declararlo explícitamente si lo necesitas',
    'No hace falta punto y coma al final de cada línea',
    'if, when, for y while son las estructuras de control básicas; if y when pueden usarse como expresiones',
    'Las funciones se declaran con fun y pueden tener valores por defecto y parámetros nombrados',
    'Los tipos básicos (Int, Double, Boolean, String, Char...) empiezan siempre en mayúscula',
  ];

  const exercises = [
    {
      title: 'Declarar variables y constantes',
      description: 'Declara una variable mutable "puntuacion" con valor 0 y una constante "nombreJuego" con el nombre que quieras. Aumenta la puntuación en 10.',
      solution: `var puntuacion = 0
val nombreJuego = "Space Invaders"

puntuacion += 10

println("$nombreJuego - Puntuación: $puntuacion")`,
    },
    {
      title: 'Función con parámetro por defecto',
      description: 'Escribe una función "saludar" que reciba un nombre y un saludo opcional (por defecto "Hola") y devuelva el mensaje completo.',
      solution: `fun saludar(nombre: String, saludo: String = "Hola"): String {
    return "$saludo, $nombre!"
}

fun main() {
    println(saludar("Ana"))            // Hola, Ana!
    println(saludar("Luis", "Buenas")) // Buenas, Luis!
}`,
    },
    {
      title: 'when como expresión',
      description: 'Escribe una función que reciba una nota numérica (0-10) y devuelva "Suspenso", "Aprobado", "Notable" o "Sobresaliente" usando when.',
      solution: `fun calificar(nota: Int): String = when {
    nota < 5 -> "Suspenso"
    nota < 7 -> "Aprobado"
    nota < 9 -> "Notable"
    else -> "Sobresaliente"
}

fun main() {
    println(calificar(8)) // Notable
}`,
    },
  ];

  const summary = `Kotlin apuesta por una sintaxis limpia y sin ceremonias innecesarias:

• val para lo que no cambia, var para lo que sí. Empieza siempre por val.
• El tipo se infiere casi siempre; decláralo solo cuando aporte claridad.
• if y when funcionan como expresiones: puedes asignar directamente su resultado a una variable.
• Las funciones son ciudadanas de primera clase: parámetros por defecto, nombrados y expresiones de una línea.
• for itera sobre rangos y colecciones de forma muy directa, sin los bucles clásicos con contador de Java.

Dominar esta sintaxis es la base para todo lo que verás después: null safety, funciones de extensión, lambdas y corrutinas.`;

  return (
    <>
      <LessonLayout
        title="Sintaxis Básica de Kotlin"
        description="Variables, tipos, funciones y control de flujo en Kotlin"
        breadcrumbs={breadcrumbs}
        seoTitle="Sintaxis Básica de Kotlin - Guía Completa"
        seoDescription="Aprende la sintaxis fundamental de Kotlin: variables, tipos, funciones y control de flujo."
        seoKeywords="kotlin, sintaxis, variables, funciones, control de flujo"
        url="https://fullstackdevlovers.com/backend/kotlin/sintaxis"
      >
        <p>
          En esta lección vas a repasar la sintaxis básica de Kotlin: cómo se declaran variables, qué tipos
          existen, cómo se escriben funciones y cómo se controla el flujo del programa con condicionales y
          bucles. Es la base sobre la que se apoyan el resto de lecciones del módulo, así que conviene
          dominarla antes de avanzar a temas como null safety o corrutinas.
        </p>

        <LessonSection title="Variables: val y var">
          <p>
            Kotlin distingue explícitamente entre referencias inmutables y mutables. Esta decisión de diseño
            obliga a pensar, desde el primer momento, si un valor debería poder cambiar o no.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val nombre = "Ana"       // Inmutable: no se puede reasignar
var edad = 25            // Mutable: se puede reasignar

edad = 26                // OK
// nombre = "Laura"      // Error de compilación

// Tipo explícito (normalmente no hace falta)
val ciudad: String = "Madrid"`}
          />
          <InfoBox type="tip" title="Buena práctica">
            Empieza siempre declarando con <code>val</code>. Cambia a <code>var</code> solo cuando el
            compilador te obligue a ello porque realmente necesitas reasignar el valor.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Tipos básicos">
          <p>
            Los tipos en Kotlin empiezan siempre en mayúscula, incluso los que en Java eran primitivos
            (<code>int</code>, <code>double</code>, <code>boolean</code>...). El compilador infiere el tipo
            a partir del valor asignado, así que rara vez necesitas escribirlo.
          </p>
          <Table
            headers={['Tipo', 'Ejemplo', 'Equivalente en Java']}
            rows={[
              ['Int', 'val edad: Int = 25', 'int'],
              ['Long', 'val poblacion: Long = 8_000_000L', 'long'],
              ['Double', 'val precio: Double = 19.99', 'double'],
              ['Boolean', 'val activo: Boolean = true', 'boolean'],
              ['String', 'val nombre: String = "Ana"', 'String'],
              ['Char', "val inicial: Char = 'A'", 'char'],
            ]}
          />
        </LessonSection>

        <LessonSection title="Plantillas de cadenas (string templates)">
          <p>
            Kotlin permite insertar variables y expresiones directamente dentro de un string usando el
            símbolo <code>$</code>, sin necesidad de concatenar con <code>+</code>.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val nombre = "Marta"
val edad = 30

println("Hola, $nombre. El año que viene tendrás \${edad + 1} años")
// Hola, Marta. El año que viene tendrás 31 años`}
          />
        </LessonSection>

        <LessonSection title="Funciones">
          <p>
            Las funciones se declaran con la palabra clave <code>fun</code>. Kotlin admite valores por
            defecto para los parámetros, argumentos nombrados y funciones de una sola expresión.
          </p>
          <CodeBlock
            language="kotlin"
            code={`// Función estándar
fun sumar(a: Int, b: Int): Int {
    return a + b
}

// Función de una expresión (el tipo de retorno se infiere)
fun sumar(a: Int, b: Int) = a + b

// Parámetro con valor por defecto
fun saludar(nombre: String, saludo: String = "Hola"): String {
    return "$saludo, $nombre!"
}

fun main() {
    println(sumar(2, 3))                 // 5
    println(saludar("Ana"))              // Hola, Ana!
    println(saludar(saludo = "Buenas", nombre = "Luis")) // Buenas, Luis!
}`}
          />
        </LessonSection>

        <LessonSection title="Control de flujo: if, when y bucles">
          <p>
            En Kotlin, <code>if</code> y <code>when</code> pueden usarse como expresiones que devuelven un
            valor, no solo como sentencias. Esto elimina la necesidad del operador ternario que existe en
            otros lenguajes.
          </p>
          <CodeBlock
            language="kotlin"
            code={`// if como expresión
val mayorDeEdad = if (edad >= 18) "Sí" else "No"

// when como sustituto de switch (y mucho más potente)
val descripcion = when (edad) {
    in 0..12 -> "Niño"
    in 13..17 -> "Adolescente"
    else -> "Adulto"
}

// Bucle for sobre un rango
for (i in 1..5) {
    println(i)
}

// Bucle for sobre una colección
val frutas = listOf("manzana", "pera", "uva")
for (fruta in frutas) {
    println(fruta)
}

// while, igual que en Java
var contador = 0
while (contador < 3) {
    println(contador)
    contador++
}`}
          />
          <InfoBox type="important" title="No hay switch en Kotlin">
            Kotlin no tiene la sentencia <code>switch</code> de Java: <code>when</code> la sustituye por
            completo y es más flexible, ya que admite rangos, múltiples valores y condiciones arbitrarias.
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
