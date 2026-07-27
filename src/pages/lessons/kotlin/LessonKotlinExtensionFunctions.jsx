import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinExtensionFunctions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Una función de extensión añade comportamiento a una clase existente sin modificar su código fuente',
    'Se declara como fun TipoReceptor.nombreFuncion(...): TipoRetorno',
    'Dentro de la función, "this" hace referencia a la instancia sobre la que se llama (el receptor)',
    'Se resuelven en tiempo de compilación (static dispatch), no en tiempo de ejecución como un método real',
    'Puedes crear extensiones sobre clases propias, de la librería estándar o de librerías de terceros',
    'También existen las propiedades de extensión, aunque son menos comunes que las funciones',
  ];

  const exercises = [
    {
      title: 'Extensión sobre String',
      description: 'Crea una función de extensión "esPalindromo()" sobre String que devuelva true si el texto se lee igual al derecho y al revés (ignorando mayúsculas).',
      solution: `fun String.esPalindromo(): Boolean {
    val limpio = this.lowercase()
    return limpio == limpio.reversed()
}

fun main() {
    println("Ana".esPalindromo())     // true
    println("Kotlin".esPalindromo())  // false
}`,
    },
    {
      title: 'Extensión sobre una clase propia',
      description: 'Dada una clase Producto(val nombre: String, val precio: Double), crea una extensión "precioConIva()" que devuelva el precio con un 21% de IVA añadido.',
      solution: `data class Producto(val nombre: String, val precio: Double)

fun Producto.precioConIva(): Double = this.precio * 1.21

fun main() {
    val producto = Producto("Teclado", 50.0)
    println(producto.precioConIva()) // 60.5
}`,
    },
    {
      title: 'Extensión sobre List<Int>',
      description: 'Crea una función de extensión "promedio()" sobre List<Int> que devuelva la media de sus elementos (0.0 si la lista está vacía).',
      solution: `fun List<Int>.promedio(): Double {
    if (this.isEmpty()) return 0.0
    return this.sum().toDouble() / this.size
}

fun main() {
    println(listOf(1, 2, 3, 4).promedio()) // 2.5
    println(emptyList<Int>().promedio())   // 0.0
}`,
    },
  ];

  const summary = `Las funciones de extensión permiten "añadir" métodos a clases que ya existen, sin tocar su código
fuente y sin recurrir a la herencia:

• Se declaran como fun Tipo.nombre(...): Retorno, fuera de la clase.
• Dentro de la función, this se refiere al objeto sobre el que se llama.
• Funcionan tanto con tus propias clases como con clases de la librería estándar (String, List, Int...).
• Se resuelven en tiempo de compilación, así que no sustituyen el polimorfismo real de la herencia.

Son una de las herramientas que hacen que el código Kotlin resulte tan expresivo: en vez de crear clases de utilidades (Utils, Helpers) llenas de métodos estáticos como en Java, escribes funciones que se leen como si fueran parte natural del tipo.`;

  return (
    <>
      <LessonLayout
        title="Funciones de Extensión en Kotlin"
        description="Cómo añadir métodos a clases existentes sin usar herencia"
        breadcrumbs={breadcrumbs}
        seoTitle="Funciones de Extensión en Kotlin - Extiende Clases sin Herencia"
        seoDescription="Aprende a añadir métodos a clases existentes en Kotlin usando funciones de extensión."
        seoKeywords="kotlin, funciones de extensión, extension functions, clases"
        url="https://fullstackdevlovers.com/backend/kotlin/extension-functions"
      >
        <p>
          En Java, si necesitas un método nuevo sobre una clase que no puedes modificar (como{' '}
          <code>String</code> o una clase de una librería externa), sueles recurrir a clases de utilidades
          con métodos estáticos (<code>StringUtils.isPalindrome(texto)</code>). Kotlin resuelve esto de
          forma mucho más elegante con las funciones de extensión: te permiten "añadir" métodos a
          cualquier clase sin heredar de ella ni modificar su código.
        </p>

        <LessonSection title="¿Qué es una función de extensión?">
          <p>
            Una función de extensión se declara indicando el tipo al que "extiende" antes del nombre de la
            función, separado por un punto. Dentro del cuerpo, <code>this</code> hace referencia al objeto
            sobre el que se ha llamado (el receptor).
          </p>
          <CodeBlock
            language="kotlin"
            code={`fun String.esMayuscula(): Boolean {
    return this == this.uppercase()
}

fun main() {
    val texto = "KOTLIN"
    println(texto.esMayuscula()) // true

    // Se llama exactamente igual que un método normal
    println("hola".esMayuscula()) // false
}`}
          />
          <InfoBox type="important" title="Static dispatch">
            Las funciones de extensión se resuelven en tiempo de compilación según el tipo declarado de la
            variable, no según el tipo real en tiempo de ejecución. No sustituyen al polimorfismo de la
            herencia; son azúcar sintáctico para escribir código más legible.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Extensiones sobre tus propias clases">
          <p>
            Las extensiones son especialmente útiles para añadir funciones auxiliares a tus propias clases
            de dominio sin llenarlas de métodos que no forman parte de su responsabilidad principal.
          </p>
          <CodeBlock
            language="kotlin"
            code={`data class Producto(val nombre: String, val precio: Double)

fun Producto.precioConIva(): Double = this.precio * 1.21

fun main() {
    val teclado = Producto("Teclado mecánico", 50.0)
    println(teclado.precioConIva()) // 60.5
}`}
          />
        </LessonSection>

        <LessonSection title="Extensiones sobre colecciones y otros tipos genéricos">
          <p>
            Muchas funciones que ya usas de la librería estándar de Kotlin (<code>filter</code>,{' '}
            <code>map</code>, <code>sum</code>...) están implementadas como funciones de extensión sobre{' '}
            <code>List</code>, <code>Iterable</code> y similares. Puedes crear las tuyas propias del mismo
            modo.
          </p>
          <CodeBlock
            language="kotlin"
            code={`fun List<Int>.promedio(): Double {
    if (this.isEmpty()) return 0.0
    return this.sum().toDouble() / this.size
}

fun main() {
    val notas = listOf(7, 8, 9, 6)
    println(notas.promedio()) // 7.5
}`}
          />
        </LessonSection>

        <LessonSection title="Propiedades de extensión">
          <p>
            De forma similar, Kotlin permite definir propiedades de extensión. Son menos frecuentes que las
            funciones porque no pueden tener estado propio (no hay dónde almacenar un campo adicional en la
            clase original), pero son útiles para exponer un valor calculado.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val String.ultimaLetra: Char
    get() = this[this.length - 1]

fun main() {
    println("Kotlin".ultimaLetra) // n
}`}
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
