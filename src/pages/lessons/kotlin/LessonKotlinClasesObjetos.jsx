import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table, LessonKeyPoints, LessonExercises, LessonSummary } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinClasesObjetos() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const keyPoints = [
    'Las clases se declaran con class y pueden tener un constructor primario en la propia cabecera',
    'val/var en el constructor primario crean automáticamente propiedades públicas con getter (y setter si es var)',
    'data class genera automáticamente equals(), hashCode(), toString() y copy()',
    'Todas las clases son final por defecto: hay que marcarlas como open para poder heredar de ellas',
    'object crea un singleton: una única instancia compartida en toda la aplicación',
    'companion object permite tener miembros "estáticos" asociados a la clase, similar a static en Java',
    'Las interfaces pueden tener implementaciones por defecto de sus métodos',
  ];

  const exercises = [
    {
      title: 'Data class con copy()',
      description: 'Define una data class Producto(nombre: String, precio: Double). Crea una instancia y usa copy() para crear otra con el precio actualizado.',
      solution: `data class Producto(val nombre: String, val precio: Double)

fun main() {
    val original = Producto("Teclado", 50.0)
    val enOferta = original.copy(precio = 40.0)

    println(original)   // Producto(nombre=Teclado, precio=50.0)
    println(enOferta)   // Producto(nombre=Teclado, precio=40.0)
}`,
    },
    {
      title: 'Herencia con open',
      description: 'Crea una clase abierta Animal con un método hacerSonido() y una subclase Perro que lo sobrescriba.',
      solution: `open class Animal(val nombre: String) {
    open fun hacerSonido(): String = "..."
}

class Perro(nombre: String) : Animal(nombre) {
    override fun hacerSonido(): String = "Guau"
}

fun main() {
    val perro = Perro("Rex")
    println("\${perro.nombre} dice \${perro.hacerSonido()}")
}`,
    },
    {
      title: 'companion object como fábrica',
      description: 'Crea una clase Usuario con un companion object que tenga una función crearInvitado() que devuelva un Usuario con nombre "Invitado".',
      solution: `class Usuario(val nombre: String) {
    companion object {
        fun crearInvitado(): Usuario = Usuario("Invitado")
    }
}

fun main() {
    val invitado = Usuario.crearInvitado()
    println(invitado.nombre) // Invitado
}`,
    },
  ];

  const summary = `Kotlin simplifica mucho la programación orientada a objetos respecto a Java:

• El constructor primario se declara en la propia cabecera de la clase; val/var ahí generan propiedades automáticamente.
• data class resuelve en una línea lo que en Java requeriría decenas: equals, hashCode, toString y copy.
• Las clases son final por defecto, lo que fomenta la composición sobre la herencia; usa open cuando de verdad necesites heredar.
• object sustituye al patrón Singleton clásico sin necesidad de escribirlo manualmente.
• companion object sustituye a los miembros static de Java, pero sigue siendo un objeto real vinculado a la clase.

Entender bien estos conceptos es imprescindible antes de trabajar con frameworks como Spring Boot en Kotlin, donde las data class y los constructores concisos aparecen constantemente en entidades y DTOs.`;

  return (
    <>
      <LessonLayout
        title="Clases y Objetos en Kotlin"
        description="Programación orientada a objetos en Kotlin"
        breadcrumbs={breadcrumbs}
        seoTitle="Clases y Objetos en Kotlin - Programación Orientada a Objetos"
        seoDescription="Aprende cómo se definen clases y objetos en Kotlin y en qué se diferencian de Java."
        seoKeywords="kotlin, clases, objetos, poo, oop"
        url="https://fullstackdevlovers.com/backend/kotlin/clases-objetos"
      >
        <p>
          Kotlin sigue siendo un lenguaje orientado a objetos, con clases, herencia e interfaces, pero
          reduce drásticamente el boilerplate que necesitas escribir en Java para modelar tus datos. En
          esta lección repasarás cómo se definen clases, cómo funcionan las data class y cómo se sustituyen
          los conceptos de Singleton y miembros estáticos de Java.
        </p>

        <LessonSection title="Clases y constructor primario">
          <p>
            En Kotlin, el constructor principal de una clase se declara directamente en la cabecera. Si
            antepones <code>val</code> o <code>var</code> a un parámetro del constructor, Kotlin genera
            automáticamente una propiedad (con su getter, y su setter si es <code>var</code>).
          </p>
          <CodeBlock
            language="kotlin"
            code={`class Persona(val nombre: String, var edad: Int)

fun main() {
    val persona = Persona("Ana", 25)
    println(persona.nombre) // Ana (propiedad generada automáticamente)

    persona.edad = 26       // Se puede modificar porque es var
    println(persona.edad)   // 26
}`}
          />
          <InfoBox type="tip" title="Bloque init para lógica adicional">
            Si necesitas ejecutar código durante la construcción (validaciones, cálculos iniciales...),
            puedes usar un bloque <code>init {'{ ... }'}</code> dentro de la clase.
          </InfoBox>
        </LessonSection>

        <LessonSection title="data class: modelar datos sin boilerplate">
          <p>
            Cuando una clase solo sirve para almacenar datos, Kotlin ofrece las <code>data class</code>.
            El compilador genera automáticamente <code>equals()</code>, <code>hashCode()</code>,{' '}
            <code>toString()</code> y una función <code>copy()</code> muy útil para crear copias con
            algunos campos modificados.
          </p>
          <CodeBlock
            language="kotlin"
            code={`data class Producto(val nombre: String, val precio: Double)

fun main() {
    val original = Producto("Teclado", 50.0)
    val copia = original.copy(precio = 40.0)

    println(original)          // Producto(nombre=Teclado, precio=50.0)
    println(copia)             // Producto(nombre=Teclado, precio=40.0)
    println(original == copia) // false, equals() compara por contenido
}`}
          />
        </LessonSection>

        <LessonSection title="Herencia: open, override y clases abstractas">
          <p>
            A diferencia de Java, en Kotlin todas las clases son <code>final</code> por defecto: no se
            puede heredar de ellas a menos que se marquen explícitamente como <code>open</code>. Esta
            decisión de diseño fomenta preferir la composición frente a la herencia salvo que sea
            realmente necesaria.
          </p>
          <CodeBlock
            language="kotlin"
            code={`open class Animal(val nombre: String) {
    open fun hacerSonido(): String = "..."
}

class Perro(nombre: String) : Animal(nombre) {
    override fun hacerSonido(): String = "Guau"
}

class Gato(nombre: String) : Animal(nombre) {
    override fun hacerSonido(): String = "Miau"
}

fun main() {
    val animales = listOf(Perro("Rex"), Gato("Michi"))
    animales.forEach { println("\${it.nombre}: \${it.hacerSonido()}") }
}`}
          />
        </LessonSection>

        <LessonSection title="object: singletons sin esfuerzo">
          <p>
            La palabra clave <code>object</code> crea una clase con una única instancia (singleton),
            gestionada automáticamente por Kotlin de forma segura frente a la concurrencia.
          </p>
          <CodeBlock
            language="kotlin"
            code={`object ConfiguracionApp {
    val version = "1.0.0"
    fun mostrarInfo() = println("App versión $version")
}

fun main() {
    ConfiguracionApp.mostrarInfo() // Se accede directamente, sin instanciar
}`}
          />
        </LessonSection>

        <LessonSection title="companion object: el sustituto de static">
          <p>
            Kotlin no tiene la palabra clave <code>static</code> de Java. En su lugar, dentro de una clase
            puedes declarar un <code>companion object</code>, que actúa como un contenedor de miembros
            asociados a la clase (no a una instancia concreta), muy usado para implementar fábricas.
          </p>
          <CodeBlock
            language="kotlin"
            code={`class Usuario private constructor(val nombre: String) {
    companion object {
        fun crearInvitado(): Usuario = Usuario("Invitado")
        fun crear(nombre: String): Usuario = Usuario(nombre)
    }
}

fun main() {
    val invitado = Usuario.crearInvitado()
    println(invitado.nombre) // Invitado
}`}
          />
        </LessonSection>

        <LessonSection title="Comparativa rápida con Java">
          <Table
            headers={['Concepto', 'Java', 'Kotlin']}
            rows={[
              ['Clase con datos', 'Clase + getters/setters + equals/hashCode/toString manuales', 'data class Producto(val nombre: String)'],
              ['Herencia', 'Abierta por defecto', 'Cerrada por defecto (requiere open)'],
              ['Singleton', 'Patrón manual con constructor privado', 'object'],
              ['Miembros estáticos', 'static', 'companion object'],
            ]}
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
