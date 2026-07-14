import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonJavaVM() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '⚙️',
      title: 'JVM',
      definition: 'Java Virtual Machine - Ejecuta bytecode Java en cualquier plataforma',
      example: 'java -jar aplicacion.jar'
    },
    {
      icon: '📦',
      title: 'Bytecode',
      definition: 'Código intermedio compilado desde Java, independiente de plataforma',
      example: '.class files'
    },
    {
      icon: '🗑️',
      title: 'Garbage Collection',
      definition: 'Limpieza automática de objetos no utilizados en memoria',
      example: 'G1GC, ZGC, Serial GC'
    }
  ];

  const exercises = [
    {
      title: 'Compilar y ejecutar con bytecode',
      description: 'Compila un archivo Java y observa el .class generado',
      solution: `// Archivo: Saludo.java
public class Saludo {
  public static void main(String[] args) {
    System.out.println("¡Hola desde la JVM!");
  }
}

// Compilar (genera Saludo.class)
javac Saludo.java

// Ejecutar (JVM interpreta bytecode)
java Saludo`
    },
    {
      title: 'Configurar memoria de la JVM',
      description: 'Ajusta heap memory para una aplicación',
      solution: `// Ejecutar con heap mínimo 512MB y máximo 2GB
java -Xms512m -Xmx2g MiAplicacion

// Ver información de la JVM
java -XshowSettings:vm -version`
    }
  ];

  const keyPoints = [
    'JVM es independiente de plataforma (write once, run anywhere)',
    'Bytecode es formato intermedio (.class)',
    'javac compila .java a .class',
    'java interpreta .class con bytecode',
    'JIT (Just-In-Time) compila bytecode a código nativo',
    'Garbage Collection automático (no manual)',
    'Heap es donde se almacenan objetos',
    'Stack es donde se almacenan variables locales',
    'Metaspace almacena información de clases',
    '-Xms/-Xmx configuran memoria inicial/máxima'
  ];

  const sections = [
    {
      title: '¿Qué es la JVM?',
      content: (
        <p>
          La Java Virtual Machine es una máquina virtual que ejecuta bytecode Java.
          Permite que código Java compilado se ejecute en cualquier plataforma que tenga una JVM instalada.
          Esto es lo que significa "Write Once, Run Anywhere" (WORA).
        </p>
      )
    },
    {
      title: 'Compilación vs Interpretación',
      content: (
        <>
          <CodeBlock
            code={`// Proceso de compilación y ejecución Java:

1. COMPILACIÓN (javac)
   .java → compilador → .class (bytecode)

   javac MiClase.java

2. EJECUCIÓN (java)
   .class → JVM → bytecode interpretado → código nativo

   java MiClase

// Comparación:
C/C++:    Código → Compilación → Ejecutable binario (específico del SO)
Python:   Código → Interpretado directamente
Java:     Código → Bytecode → JVM interpreta/compila a nativo (multiplataforma)`}
          />
          <InfoBox type="info">
            Java es compilado (a bytecode) e interpretado (por JVM).
            Lo mejor de ambos mundos: portabilidad + rendimiento.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Estructura de Memoria de la JVM',
      content: (
        <>
          <Table
            headers={['Área', 'Contenido', 'Características']}
            rows={[
              ['Heap', 'Objetos', 'Compartido por threads, GC automático'],
              ['Stack', 'Variables locales, referencias', 'Por thread, LIFO (Last In First Out)'],
              ['Method Area', 'Clases, métodos, constantes', 'Compartido por threads'],
              ['Program Counter', 'Instrucción actual', 'Por thread'],
              ['Native Method Stack', 'Código C/C++', 'Para métodos nativos']
            ]}
          />
          <CodeBlock
            code={`// Ejemplo de distribución de memoria:

public class MemoriaEjemplo {
  static int numero = 10;              // Method Area

  public static void main(String[] args) {
    Usuario usuario = new Usuario();   // Stack: referencia 'usuario'
                                       // Heap: objeto Usuario
    int edad = 25;                     // Stack: variable 'edad'
    usuario.procesar();
  }
}

// Stack: main()
//   ├─ usuario (referencia) → #12345 (dirección en Heap)
//   └─ edad: 25
//
// Heap:
//   └─ #12345 Usuario {
//       nombre: "Juan"
//       edad: 25
//     }`}
          />
        </>
      )
    },
    {
      title: 'Garbage Collection',
      content: (
        <>
          <p>El Garbage Collection automático libera memoria de objetos que no se usan.</p>
          <CodeBlock
            code={`// Objetos son automáticamente liberados cuando no hay referencias

public class GCEjemplo {
  public static void main(String[] args) {
    Usuario u1 = new Usuario("Juan");   // Objeto creado en Heap
    Usuario u2 = u1;                    // u2 referencia al mismo objeto
    u1 = null;                          // u1 ya no referencia el objeto
                                        // pero u2 todavía sí

    u2 = null;                          // Ahora nadie referencia el objeto
                                        // GC puede eliminarlo cuando quiera

    // No necesitas hacer: delete u1; (como en C++)
    // La JVM se encarga automáticamente
  }
}

// Tipos de GC:
// - Serial GC: un thread (aplicaciones pequeñas)
// - Parallel GC: múltiples threads (servidores)
// - G1GC: particiones, bajo latency (aplicaciones modernas)
// - ZGC: milisegundos de pausa (aplicaciones críticas)`}
          />
          <InfoBox type="tip">
            System.gc() es solo una sugerencia. La JVM decide cuándo ejecutar realmente GC.
          </InfoBox>
        </>
      )
    },
    {
      title: 'JIT (Just-In-Time Compilation)',
      content: (
        <>
          <p>
            La JVM no solo interpreta bytecode, también lo compila a código nativo
            para optimizar performance. Esto sucede automáticamente durante la ejecución.
          </p>
          <CodeBlock
            code={`// Flujo completo:

1. PRIMER EJECUTAR (interpretación)
   bytecode → JVM interpreta → más lento

2. SEGUNDO+ EJECUTAR (compilación JIT)
   JVM detecta que se ejecuta frecuentemente
   bytecode → JIT compila a código nativo → más rápido

// Ejemplo: loop que se ejecuta millones de veces
for (int i = 0; i < 1_000_000; i++) {
  procesarDatos(i);  // Primera vez: interpretado
                     // Después: compilado a código nativo
}

// Por eso Java empieza lento pero después es muy rápido`}
          />
        </>
      )
    },
    {
      title: 'Configuración de la JVM',
      content: (
        <>
          <CodeBlock
            code={`// Configurar memoria:
java -Xms256m -Xmx1024m MiAplicacion
     └─ inicial   └─ máximo

// Seleccionar GC:
java -XX:+UseG1GC MiAplicacion
java -XX:+UseSerialGC MiAplicacion
java -XX:+UseParallelGC MiAplicacion

// Ver configuración actual:
java -XshowSettings:all -version

// Habilitar debug:
java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005 MiAplicacion

// Performance profiling:
java -XX:+UnlockCommercialFeatures -XX:+FlightRecorder MiAplicacion`}
          />
        </>
      )
    },
    {
      title: 'Bytecode y Decompilación',
      content: (
        <>
          <p>El bytecode es interpretable y puede ser decompilado a Java:</p>
          <CodeBlock
            code={`// Ver bytecode de una clase:
javap -c MiClase.class

// Decompilador (CFR, Procyon, etc.):
cfr MiClase.class

// El bytecode es el mismo sin importar dónde compile:
// Windows   → javac MiClase.java → MiClase.class
// Linux     → javac MiClase.java → MiClase.class
// macOS     → javac MiClase.java → MiClase.class
// (todos idénticos)`}
          />
          <InfoBox type="warning" title="Seguridad">
            El bytecode puede ser decompilado. Si tienes código sensible, considera ofuscación.
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `La JVM es el corazón de Java:

• JVM ejecuta bytecode independiente de plataforma
• javac compila .java → .class (bytecode)
• java interpreta .class con bytecode
• JIT compila partes frecuentes a código nativo
• Garbage Collection automático libera memoria
• Heap para objetos, Stack para variables
• Memory Area contiene classes, constants, métodos
• -Xms/-Xmx configuran memoria
• Múltiples GC: Serial, Parallel, G1, ZGC
• Bytecode es multiplataforma pero decompilable`;

  return (
    <>
      <LessonTemplate
        title="Fundamentos de la Máquina de Java"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
        keyPoints={keyPoints}
        sections={sections}
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