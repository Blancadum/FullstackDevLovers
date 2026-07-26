import { LessonTemplate, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonKotlinIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const sections = [
    {
      title: '¿Qué es Kotlin?',
      content: (
        <>
          <p>
            Kotlin es un lenguaje de programación moderno desarrollado por JetBrains que se ejecuta en la
            máquina virtual de Java (JVM). Combina características de lenguajes funcionales e imperativos,
            ofreciendo una sintaxis más concisa y segura que Java.
          </p>
          <InfoBox type="important" title="JVM Compatible">
            Kotlin corre en la JVM, lo que significa que puede usar cualquier librería de Java existente
            sin problemas.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Historia y Motivación',
      content: (
        <>
          <p>
            JetBrains creó Kotlin para resolver problemas comunes en Java:
          </p>
          <ul>
            <li><strong>Verbosidad:</strong> Código más conciso sin sacrificar claridad</li>
            <li><strong>Null Safety:</strong> Prevenir NullPointerException en tiempo de compilación</li>
            <li><strong>Compilación Rápida:</strong> Tan rápido como Java</li>
            <li><strong>Interoperabilidad:</strong> Convivir perfecto con código Java existente</li>
          </ul>
        </>
      )
    },
    {
      title: 'Primer Programa en Kotlin',
      content: (
        <CodeBlock
          code={`fun main() {
    println("¡Hola, Kotlin!")
}

// Declarar variables
val nombre = "Juan"  // Inmutable (val)
var edad = 25        // Mutable (var)

// Concatenación de strings
println("Hola, \${nombre}! Tienes \${edad} años")`}
        />
      )
    },
    {
      title: 'Ventajas Principales',
      content: (
        <>
          <p><strong>1. Null Safety</strong></p>
          <p>
            Kotlin distingue entre tipos que pueden ser null y tipos que no pueden serlo,
            evitando el famoso "Billion Dollar Mistake".
          </p>

          <CodeBlock
            code={`val nombre: String = "Juan"        // No puede ser null
val apodo: String? = null          // Puede ser null

// El compilador te obliga a manejar el null
val longitud = apodo?.length ?: 0  // Elvis operator`}
          />

          <p style={{ marginTop: '1.5rem' }}><strong>2. Funciones de Extensión</strong></p>
          <p>Agregar métodos a clases existentes sin herencia.</p>

          <CodeBlock
            code={`fun String.esMayuscula(): Boolean = this == this.uppercase()

val texto = "KOTLIN"
println(texto.esMayuscula())  // true`}
          />

          <p style={{ marginTop: '1.5rem' }}><strong>3. Sintaxis Concisa</strong></p>
          <p>Menos boilerplate, más expresividad.</p>

          <CodeBlock
            code={`// Java
public class Persona {
    private String nombre;
    public Persona(String nombre) { this.nombre = nombre; }
    public String getNombre() { return nombre; }
}

// Kotlin (una línea!)
data class Persona(val nombre: String)`}
          />
        </>
      )
    }
  ];

  const keyPoints = [
    'Kotlin es un lenguaje moderno que corre en la JVM',
    'Interoperable 100% con Java',
    'Tiene null safety incorporado',
    'Sintaxis más concisa que Java',
    'Desarrollado por JetBrains (creadores de IntelliJ)',
    'Google anunció Kotlin como lenguaje preferido para Android',
    'val para variables inmutables, var para mutables',
  ];

  const summary = `Kotlin es un lenguaje de programación moderno que se ejecuta en la JVM. Ofrece:

• Sintaxis más concisa que Java
• Null safety para evitar NullPointerException
• Interoperabilidad perfecta con código Java existente
• Menos boilerplate y más legibilidad
• Características funcionales (lambdas, funciones de orden superior)

Es especialmente popular en desarrollo Android, donde Google lo recomienda oficialmente.`;

  return (
    <>
      <LessonTemplate
        title="Introducción a Kotlin"
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
