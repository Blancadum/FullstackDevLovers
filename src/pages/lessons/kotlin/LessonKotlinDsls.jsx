import { LessonLayout, LessonSection, CodeBlock, InfoBox, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinDsls() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Un DSL (Domain Specific Language) es una mini-sintaxis pensada para resolver un problema concreto, en lugar de ser un lenguaje de propósito general',
    'Kotlin permite construir DSLs internos aprovechando trailing lambdas, funciones de extensión y receptores con nombre',
    'Un "lambda con receptor" (tipo Tipo.() -> Unit) permite llamar directamente a los miembros del receptor dentro del bloque, como si fuera this',
    'El patrón builder + DSL es habitual para construir estructuras jerárquicas de forma declarativa (HTML, configuración, rutas...)',
    'Frameworks como Gradle (build.gradle.kts) o Ktor usan DSLs de Kotlin para configurar proyectos y servidores de forma legible',
    'No hace falta ninguna librería especial para crear un DSL: son funciones y clases normales, bien diseñadas',
  ];

  const exercises = [
    {
      title: 'Builder simple sin DSL',
      description: 'Antes de usar un DSL, escribe una clase Persona con nombre y edad, y créala con un constructor normal para comparar después.',
      solution: `class Persona(val nombre: String, val edad: Int)

fun main() {
    val persona = Persona("Ana", 30)
    println("\${persona.nombre}, \${persona.edad} años")
}`,
    },
    {
      title: 'DSL con lambda con receptor',
      description: 'Crea una clase PersonaBuilder con propiedades var nombre y var edad, y una función personaFinal { } que use un lambda con receptor para configurarla y devuelva una Persona.',
      solution: `class Persona(val nombre: String, val edad: Int)

class PersonaBuilder {
    var nombre: String = ""
    var edad: Int = 0

    fun build(): Persona = Persona(nombre, edad)
}

fun persona(configurar: PersonaBuilder.() -> Unit): Persona {
    val builder = PersonaBuilder()
    builder.configurar()
    return builder.build()
}

fun main() {
    val ana = persona {
        nombre = "Ana"
        edad = 30
    }
    println("\${ana.nombre}, \${ana.edad} años")
}`,
    },
    {
      title: 'DSL anidado tipo HTML',
      description: 'Amplía el ejemplo de listaDsl visto en la lección para añadir un tercer elemento a la lista usando el mismo bloque item { }.',
      solution: `class Lista {
    private val items = mutableListOf<String>()

    fun item(texto: String) {
        items.add(texto)
    }

    override fun toString(): String = items.joinToString(prefix = "- ", separator = "\\n- ")
}

fun lista(configurar: Lista.() -> Unit): Lista {
    val l = Lista()
    l.configurar()
    return l
}

fun main() {
    val miLista = lista {
        item("Comprar pan")
        item("Estudiar Kotlin")
        item("Hacer ejercicio")
    }
    println(miLista)
}`,
    },
  ];

  const summary = `Un DSL en Kotlin no es más que código Kotlin normal, diseñado con cuidado para que se lea como si
fuera un lenguaje propio de un dominio concreto:

• La pieza clave son los "lambdas con receptor" (Tipo.() -> Unit), que permiten llamar a los miembros del receptor directamente dentro del bloque, sin prefijos.
• Combinados con trailing lambdas y funciones de extensión, permiten construir estructuras anidadas de forma muy legible y declarativa.
• Es el mismo mecanismo que usan Gradle (build.gradle.kts), Ktor para definir rutas HTTP, o kotlinx.html para generar HTML.
• No necesitas ninguna herramienta especial: cualquier desarrollador Kotlin puede diseñar su propio mini-DSL combinando clases, funciones de extensión y lambdas con receptor.

Este es el último escalón de la caja de herramientas de Kotlin: una vez dominas sintaxis, null safety, extensiones, lambdas, corrutinas, clases y scope functions, los DSLs son la forma natural en la que todo eso se combina para escribir APIs muy expresivas.`;

  return (
    <>
      <LessonLayout
        title="DSLs en Kotlin"
        description="Domain Specific Languages (lenguajes específicos de dominio) en Kotlin"
        breadcrumbs={breadcrumbs}
        seoTitle="DSLs en Kotlin - Domain Specific Languages"
        seoDescription="Aprende a crear DSLs (Domain Specific Languages) de forma elegante con Kotlin."
        seoKeywords="kotlin, dsl, domain specific language, builders"
        url="https://fullstackdevlovers.com/backend/kotlin/dsls"
      >
        <p>
          Si alguna vez has escrito un archivo <code>build.gradle.kts</code> o has definido rutas con
          Ktor, ya has usado un DSL de Kotlin sin necesariamente saberlo. Un DSL (Domain Specific Language,
          "lenguaje específico de dominio") es una forma de escribir código que parece un mini-lenguaje
          propio, pensado para resolver un problema concreto de forma muy legible. En esta lección verás
          cómo Kotlin permite construir tus propios DSLs combinando herramientas que ya conoces: lambdas,
          funciones de extensión y trailing lambdas.
        </p>

        <LessonSection title="El ingrediente clave: lambdas con receptor">
          <p>
            Una lambda normal no tiene acceso directo a los miembros de ningún objeto en particular. Una{' '}
            <strong>lambda con receptor</strong> sí: se declara con el tipo <code>Tipo.() -{'>'} Unit</code>{' '}
            y, dentro del bloque, puedes llamar a los miembros de <code>Tipo</code> como si estuvieras
            dentro de la propia clase (usando <code>this</code> implícitamente).
          </p>
          <CodeBlock
            language="kotlin"
            code={`class PersonaBuilder {
    var nombre: String = ""
    var edad: Int = 0
}

// configurar es una lambda CON RECEPTOR sobre PersonaBuilder
fun crearPersonaBuilder(configurar: PersonaBuilder.() -> Unit): PersonaBuilder {
    val builder = PersonaBuilder()
    builder.configurar() // Se ejecuta el bloque "dentro" del builder
    return builder
}

fun main() {
    val builder = crearPersonaBuilder {
        nombre = "Ana"  // Acceso directo, sin "builder." ni "it."
        edad = 30
    }
    println("\${builder.nombre}, \${builder.edad} años")
}`}
          />
          <InfoBox type="important" title="La diferencia con una lambda normal">
            Con una lambda normal (<code>() {'->'} Unit</code>) tendrías que escribir{' '}
            <code>it.nombre = "Ana"</code> o similar. Con receptor, escribes directamente{' '}
            <code>nombre = "Ana"</code>, como si el código estuviera dentro de la propia clase. Ese es el
            truco que hace que los DSLs se lean de forma tan natural.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Construyendo un mini-DSL paso a paso">
          <p>
            Combinando una lambda con receptor con el patrón trailing lambda (la lambda fuera de los
            paréntesis), puedes construir una función que se lea casi como una palabra clave del lenguaje.
          </p>
          <CodeBlock
            language="kotlin"
            code={`class Persona(val nombre: String, val edad: Int)

class PersonaBuilder {
    var nombre: String = ""
    var edad: Int = 0

    fun build(): Persona = Persona(nombre, edad)
}

fun persona(configurar: PersonaBuilder.() -> Unit): Persona {
    val builder = PersonaBuilder()
    builder.configurar()
    return builder.build()
}

fun main() {
    // Esto ya parece una mini-sintaxis propia para crear personas
    val ana = persona {
        nombre = "Ana"
        edad = 30
    }
    println("\${ana.nombre}, \${ana.edad} años")
}`}
          />
        </LessonSection>

        <LessonSection title="DSLs anidados: estructuras jerárquicas">
          <p>
            El verdadero potencial de los DSLs aparece cuando anidas varios bloques, como al construir
            HTML, configuración o rutas HTTP. Un ejemplo simplificado con una lista de tareas:
          </p>
          <CodeBlock
            language="kotlin"
            code={`class Lista {
    private val items = mutableListOf<String>()

    fun item(texto: String) {
        items.add(texto)
    }

    override fun toString(): String = items.joinToString(prefix = "- ", separator = "\\n- ")
}

fun lista(configurar: Lista.() -> Unit): Lista {
    val l = Lista()
    l.configurar()
    return l
}

fun main() {
    val tareas = lista {
        item("Comprar pan")
        item("Estudiar Kotlin")
    }
    println(tareas)
}`}
          />
        </LessonSection>

        <LessonSection title="Dónde te vas a encontrar DSLs en el mundo real">
          <ul>
            <li><strong>Gradle</strong> (<code>build.gradle.kts</code>): configura dependencias y plugins de forma declarativa</li>
            <li><strong>Ktor</strong>: define rutas y respuestas HTTP con un DSL de routing</li>
            <li><strong>kotlinx.html</strong>: genera HTML tipado directamente desde código Kotlin</li>
            <li><strong>Testing</strong>: librerías como Kotest usan DSLs para escribir especificaciones muy legibles</li>
          </ul>
          <InfoBox type="tip" title="No necesitas una librería para crear un DSL">
            Todo lo que has visto en esta lección es Kotlin puro: clases, funciones de extensión y lambdas
            con receptor. No hace falta ninguna dependencia adicional para diseñar tu propio DSL.
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
