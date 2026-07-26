import { LessonTemplate, CodeBlock, Table, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinVsJava() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: 'Comparación de Características',
      content: (
        <Table
          headers={['Característica', 'Java', 'Kotlin']}
          rows={[
            ['Null Safety', 'No (NullPointerException)', 'Sí (en tiempo de compilación)'],
            ['Sintaxis', 'Verbosa', 'Concisa'],
            ['Funciones de Extensión', 'No', 'Sí'],
            ['Propiedades', 'getter/setter', 'Propiedades nativas'],
            ['Lambdas', 'Java 8+', 'Sí, desde el inicio'],
            ['Tipos Nulos', 'No diferencia', 'String y String?'],
            ['Corrutinas', 'No (necesita librerías)', 'Sí, integradas'],
            ['Interoperabilidad', 'N/A', 'Perfecta con Java'],
          ]}
        />
      )
    },
    {
      title: 'Null Safety: El Principal Diferenciador',
      content: (
        <>
          <p>
            Kotlin distingue entre tipos que pueden ser null y tipos que no, evitando
            el "Billion Dollar Mistake" de los NullPointerException.
          </p>

          <p style={{ marginTop: '1.5rem' }}><strong>En Java:</strong></p>
          <CodeBlock
            code={`String nombre = "Juan";
nombre = null;  // Permitido ✓ (pero peligroso!)

int longitud = nombre.length();  // NullPointerException ✗`}
          />

          <p style={{ marginTop: '1.5rem' }}><strong>En Kotlin:</strong></p>
          <CodeBlock
            code={`val nombre: String = "Juan"
nombre = null  // Error de compilación! ✗

val apodo: String? = null  // Sí puede ser null ✓

// Debo manejar explícitamente el null
val longitud = apodo?.length ?: 0  // Elvis operator`}
          />

          <InfoBox type="important" title="Safe Call Operator">
            El operador <code>?.</code> evita ejecutar el método si el valor es null.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Concisión de Código',
      content: (
        <>
          <p><strong>Ejemplo: Data Class</strong></p>

          <p style={{ marginTop: '1rem' }}>Java (múltiples líneas):</p>
          <CodeBlock
            code={`public class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }

    @Override
    public String toString() { ... }

    @Override
    public boolean equals(Object obj) { ... }
}`}
          />

          <p style={{ marginTop: '1rem' }}>Kotlin (una línea!):</p>
          <CodeBlock
            code={`data class Persona(val nombre: String, val edad: Int)`}
          />

          <p style={{ marginTop: '1.5rem' }}>Kotlin genera automáticamente: constructor, getters, setters, toString(), equals(), hashCode()</p>
        </>
      )
    },
    {
      title: 'Interoperabilidad con Java',
      content: (
        <>
          <p>
            Una de las mayores ventajas de Kotlin es que puedes mezclar código Java y Kotlin
            en el mismo proyecto sin problemas.
          </p>

          <CodeBlock
            code={`// archivo Java
public class MiClaseJava {
    public static void saludar(String nombre) {
        System.out.println("Hola " + nombre);
    }
}

// archivo Kotlin
fun main() {
    MiClaseJava.saludar("Kotlin")  // Llamar código Java desde Kotlin ✓
}

// archivo Java
public class OtraClase {
    public static void main(String[] args) {
        MiKotlinKt.miFunction();  // Llamar código Kotlin desde Java ✓
    }
}

// archivo Kotlin
fun miFunction() {
    println("Desde Kotlin")
}`}
          />

          <InfoBox type="tip" title="No Necesitas Reescribir">
            No necesitas reescribir tu código Java existente. Kotlin puede convivir
            con él y gradualmente migrar.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Otras Diferencias Importantes',
      content: (
        <>
          <p><strong>Funciones de Extensión (Kotlin)</strong></p>
          <CodeBlock
            code={`fun String.esMayuscula(): Boolean = this == this.uppercase()
fun List<Int>.suma(): Int = this.fold(0) { a, b -> a + b }

// En Java no existe esta capacidad sin herencia`}
          />

          <p style={{ marginTop: '1.5rem' }}><strong>Lambdas más Naturales (Kotlin)</strong></p>
          <CodeBlock
            code={`// Java (Java 8+)
lista.stream()
    .filter(x -> x > 5)
    .map(x -> x * 2)
    .forEach(System.out::println);

// Kotlin
lista.filter { it > 5 }
    .map { it * 2 }
    .forEach { println(it) }`}
          />

          <p style={{ marginTop: '1.5rem' }}><strong>Propiedades Nativas (Kotlin)</strong></p>
          <CodeBlock
            code={`// Kotlin
class Persona(var nombre: String, var edad: Int)
val p = Persona("Juan", 25)
p.nombre = "Pedro"  // Acceso directo, no getter/setter

// Java necesita getter/setter explícitamente`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Kotlin tiene null safety incorporado en tiempo de compilación',
    'Sintaxis mucho más concisa que Java',
    'Data classes generan automáticamente constructores, getters, equals, etc.',
    'Funciones de extensión permiten agregar métodos a clases existentes',
    'Interoperabilidad 100% con código Java existente',
    'Las corrutinas están integradas en el lenguaje',
    'Menos boilerplate, más productividad',
  ];

  const summary = `Kotlin vs Java - Comparación rápida:

**Ventajas de Kotlin:**
• Null safety en tiempo de compilación
• Sintaxis más concisa (menos boilerplate)
• Funciones de extensión
• Propiedades nativas (no necesita getter/setter)
• Data classes automáticas
• Corrutinas integradas

**Ventajas de Java:**
• Más maduro y estable
• Mayor comunidad (por ahora)
• Más recursos de aprendizaje disponibles
• Compatible hacia atrás durante más tiempo

**La realidad:** Kotlin compila a Java bytecode. Puedes usar ambos en el mismo proyecto sin problemas.`;

  return (
    <>
      <LessonTemplate
        title="Kotlin vs Java"
        breadcrumbs={breadcrumbs}
        sections={sections}
        keyPoints={keyPoints}
        summary={summary}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
