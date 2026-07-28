import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinNullSafety() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Por defecto, ningún tipo en Kotlin puede contener null: String no admite null, String? sí',
    'El operador ?. (safe call) ejecuta la llamada solo si el valor no es null; si lo es, devuelve null',
    'El operador ?: (Elvis) proporciona un valor por defecto cuando la expresión de la izquierda es null',
    'El operador !! fuerza el desempaquetado y lanza NullPointerException si el valor es null; úsalo con mucho cuidado',
    'Kotlin permite encadenar varios ?. seguidos para navegar objetos anidados de forma segura',
    'let combinado con ?. es el patrón habitual para ejecutar código solo si el valor no es null',
  ];

  const exercises = [
    {
      title: 'Safe call básico',
      description: 'Dada una variable nullable "apodo: String?", imprime su longitud o 0 si es null, usando ?. y ?:.',
      solution: `val apodo: String? = null

val longitud = apodo?.length ?: 0
println(longitud) // 0`,
    },
    {
      title: 'Encadenar safe calls',
      description: 'Dado un objeto Usuario con una Direccion? opcional, y Direccion con una ciudad: String, obtén la ciudad o "Desconocida" si algo en la cadena es null.',
      solution: `data class Direccion(val ciudad: String)
data class Usuario(val nombre: String, val direccion: Direccion?)

fun ciudadDe(usuario: Usuario): String {
    return usuario.direccion?.ciudad ?: "Desconocida"
}

fun main() {
    val usuario1 = Usuario("Ana", Direccion("Madrid"))
    val usuario2 = Usuario("Luis", null)

    println(ciudadDe(usuario1)) // Madrid
    println(ciudadDe(usuario2)) // Desconocida
}`,
    },
    {
      title: 'let para ejecutar código solo si no es null',
      description: 'Usa ?.let para imprimir un mensaje de bienvenida solo si la variable "usuario: String?" tiene valor.',
      solution: `val usuario: String? = "Marta"

usuario?.let {
    println("Bienvenida, $it")
}

val usuarioNulo: String? = null
usuarioNulo?.let {
    println("Esto no se imprime nunca")
}`,
    },
  ];

  const summary = `El sistema de null safety es una de las señas de identidad de Kotlin:

• Un tipo normal (String, Int, Usuario...) nunca puede ser null: el compilador lo garantiza.
• Si necesitas admitir ausencia de valor, lo marcas explícitamente con ? (String?, Int?...).
• ?. ejecuta la operación de forma segura y devuelve null si el receptor es null.
• ?: (Elvis) te permite definir un valor alternativo cuando algo es null.
• !! existe, pero es una vía de escape: úsalo solo cuando estés completamente seguro de que el valor no será null.

El resultado es que el NullPointerException, tan habitual en Java, deja de ser un problema en tiempo de ejecución y se convierte en un error detectado por el compilador antes de llegar a producción.`;

  return (
    <>
      <LessonLayout
        title="Null Safety en Kotlin"
        description="El sistema de tipos de Kotlin para evitar NullPointerException"
        breadcrumbs={breadcrumbs}
        seoTitle="Null Safety en Kotlin - Tipos Nullable y Elvis Operator"
        seoDescription="Cómo Kotlin elimina NullPointerException con tipos nullable, safe calls y el operador Elvis."
        seoKeywords="kotlin, null safety, nullable, elvis operator"
        url="https://fullstackdevlovers.com/backend/kotlin/null-safety"
      >
        <p>
          El <code>NullPointerException</code> es, probablemente, el error más común y más molesto en Java.
          Kotlin lo ataca de raíz incorporando el concepto de "nulabilidad" directamente en su sistema de
          tipos. En esta lección vas a aprender a distinguir tipos nullable y no nullable, y a manejar los
          valores ausentes de forma segura y explícita.
        </p>

        <LessonSection title="Tipos nullable y no nullable">
          <p>
            En Kotlin, por defecto, ninguna variable puede ser null. Si quieres que una variable admita
            null, debes indicarlo añadiendo <code>?</code> al final del tipo.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val nombre: String = "Ana"
// nombre = null           // Error de compilación: String no admite null

var apodo: String? = "Anita"
apodo = null               // OK: String? sí admite null

// El compilador te obliga a comprobar antes de usar un tipo nullable
val longitud = apodo.length  // Error: apodo puede ser null`}
          />
          <InfoBox type="important" title="El compilador te protege">
            Si intentas usar un valor <code>String?</code> como si fuera <code>String</code>, el código no
            compila. Es la propia herramienta la que te obliga a decidir qué hacer cuando el valor es null.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Safe call: el operador ?.">
          <p>
            El operador <code>?.</code> ejecuta la llamada o el acceso solo si el valor no es null. Si es
            null, toda la expresión se evalúa como null, sin lanzar ninguna excepción.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val apodo: String? = null

val longitud = apodo?.length  // Int?, no Int. Vale null si apodo es null
println(longitud)             // null

val apodo2: String? = "Anita"
println(apodo2?.length)       // 5`}
          />
        </LessonSection>

        <LessonSection title="Elvis operator: el operador ?:">
          <p>
            El operador Elvis <code>?:</code> permite indicar un valor por defecto cuando la expresión de
            la izquierda es null. Es la forma idiomática de sustituir los típicos <code>if (x == null)</code>{' '}
            de Java.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val apodo: String? = null

val longitud = apodo?.length ?: 0
println(longitud) // 0

// También sirve para devolver o lanzar una excepción
fun procesar(valor: String?) {
    val real = valor ?: throw IllegalArgumentException("valor no puede ser null")
    println(real.uppercase())
}`}
          />
        </LessonSection>

        <LessonSection title="El operador !! (non-null assertion)">
          <p>
            Kotlin también ofrece <code>!!</code>, que fuerza el desempaquetado de un valor nullable. Si el
            valor es realmente null, lanza un <code>NullPointerException</code> en tiempo de ejecución, tal
            y como pasaría en Java.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val apodo: String? = null

val longitud = apodo!!.length // Lanza NullPointerException`}
          />
          <InfoBox type="warning" title="Úsalo con moderación">
            El operador <code>!!</code> reintroduce el mismo riesgo que Kotlin intenta evitar. Solo tiene
            sentido usarlo cuando tienes una certeza absoluta (por ejemplo, justo después de comprobar el
            valor) de que no será null.
          </InfoBox>
        </LessonSection>

        <LessonSection title="let para trabajar de forma segura con nulls">
          <p>
            La función <code>let</code> combinada con el safe call es un patrón muy habitual: ejecuta el
            bloque de código solo si el valor no es null, y dentro del bloque puedes usarlo con total
            seguridad.
          </p>
          <CodeBlock
            language="kotlin"
            code={`val usuario: String? = "Marta"

usuario?.let {
    println("Bienvenida, $it")
    println("Su nombre tiene \${it.length} caracteres")
}

// Si usuario fuera null, el bloque anterior simplemente no se ejecutaría`}
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
