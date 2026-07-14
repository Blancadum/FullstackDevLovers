import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { BytecodeTabbed } from '../components/BytecodeTabbed';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonJavaInternals() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '⚙️',
      title: 'JVM - Java Virtual Machine',
      definition: 'Máquina virtual que interpreta bytecode compilado. Gestiona memoria, threads, ejecución.',
      example: 'java Programa → JVM ejecuta bytecode de Programa.class'
    },
    {
      icon: '💾',
      title: 'Bytecode',
      definition: 'Código intermedio compilado. Independiente del SO. Ejecutable por cualquier JVM.',
      example: '.class contiene instrucciones de la JVM (BIPUSH, ALOAD, etc.)'
    },
    {
      icon: '📚',
      title: 'Stack',
      definition: 'Memoria LIFO para variables locales y referencias. Se limpia automáticamente.',
      example: 'int x = 10; String nombre = "Juan"; (variables locales en Stack)'
    },
    {
      icon: '🏢',
      title: 'Heap',
      definition: 'Memoria compartida para objetos. Gestionada por Garbage Collector.',
      example: 'new ArrayList<>(), new Usuario() (objetos en Heap)'
    },
    {
      icon: '🗑️',
      title: 'Garbage Collection',
      definition: 'Proceso que libera objetos sin referencias vivas. Automático pero tiene pauses.',
      example: 'Usuario u = null; → sin referencias, GC lo elimina'
    },
    {
      icon: '🔗',
      title: 'Threads',
      definition: 'Líneas de ejecución concurrentes. Comparten Heap, cada una tiene su Stack.',
      example: 'new Thread(() -> {}).start();'
    }
  ];

  const exercises = [
    {
      title: 'Analizar bytecode con javap',
      description: 'Compila una clase y visualiza el bytecode generado. Entiende cómo la JVM ejecuta tu código.',
      difficulty: 'Intermedio',
      hint: 'Usa javap -c Clase.class para ver instrucciones de la JVM',
      solution: `// Archivo: Calculator.java
public class Calculator {
    public int sumar(int a, int b) {
        return a + b;
    }
}

// En terminal:
$ javac Calculator.java
$ javap -c Calculator.class

// Salida (bytecode):
// public int sumar(int, int);
//   Code:
//      0: iload_1           // carga a del stack
//      1: iload_2           // carga b del stack
//      2: iadd              // suma a + b
//      3: ireturn           // retorna resultado

// El bytecode es independiente del SO y ejecutable por cualquier JVM`
    },
    {
      title: 'Memory Leak: objetos sin referencias',
      description: 'Crea un escenario donde objetos no se limpian. Observa cómo afecta la memoria.',
      difficulty: 'Avanzado',
      hint: 'Usa colecciones que crecen indefinidamente sin limpiar referencias.',
      solution: `import java.util.*;

public class MemoryLeakExample {
    static List<byte[]> cache = new ArrayList<>();  // Lista estática: siempre referenciada

    public static void main(String[] args) {
        // Simulador de memory leak
        for (int i = 0; i < 10000; i++) {
            byte[] datos = new byte[1024 * 1024];  // 1 MB
            cache.add(datos);  // NUNCA se limpia

            if (i % 1000 == 0) {
                Runtime r = Runtime.getRuntime();
                System.out.println("Iteración " + i +
                    " | Memoria usada: " +
                    ((r.totalMemory() - r.freeMemory()) / 1024 / 1024) + " MB");
            }
        }

        // Sin limpiar: cache.clear()
        // La memoria crece indefinidamente hasta OutOfMemoryError
    }

    // Solución: limpiar cuando no se necesita
    public static void clearCache() {
        cache.clear();  // Libera referencias, GC puede limpiar
    }
}`
    },
    {
      title: 'Threads comparten Heap - Race Condition',
      description: 'Crea 2 threads que modifican la misma variable. Observa condición de carrera.',
      difficulty: 'Avanzado',
      hint: 'Sin synchronized: números inconsistentes. Con synchronized: seguro.',
      solution: `public class RaceConditionExample {
    static class Contador {
        int valor = 0;  // Compartido entre threads (Heap)

        // Sin sincronización: ¡PELIGRO! race condition
        public void incrementarSinSync() {
            valor++;
        }

        // Con sincronización: SEGURO
        public synchronized void incrementarSync() {
            valor++;
        }
    }

    public static void main(String[] args) throws InterruptedException {
        Contador contador = new Contador();  // Objeto en Heap

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                contador.incrementarSinSync();  // INSEGURO
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                contador.incrementarSinSync();  // INSEGURO
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        // Sin sync: valor ≈ 150000 (menos de 200000!)
        // Con sync: valor = 200000 (correcto)
        System.out.println("Valor final: " + contador.valor);
    }
}`
    }
  ];

  const keyPoints = [
    '🔄 Compilación: .java → .class (bytecode) una vez',
    '⚙️ Ejecución: JVM interpreta bytecode cada vez que ejecutas',
    '📚 Stack: Local de cada método, LIFO, se limpia automáticamente',
    '🏢 Heap: Compartido, contiene objetos, gestionado por Garbage Collector',
    '💾 Bytecode es independiente del SO - verdadera portabilidad',
    '🗑️ Garbage Collector: automático pero causa pauses en ejecución',
    '🔗 Threads: comparten Heap → sincronización necesaria',
    '⚡ JIT Compiler: convierte bytecode frecuente a código nativo (HotSpot)',
    '🔴 OutOfMemoryError: Stack overflow o Heap lleno',
    '🎯 Tuning JVM: -Xms (memoria inicial), -Xmx (máxima), -XX opciones GC'
  ];

  const sections = [
    {
      id: 'jvm',
      title: '1. Cómo Funciona la JVM',
      description: 'La columna vertebral de Java',
      content: (
        <>
          <p>
            La <strong>JVM (Java Virtual Machine)</strong> es una máquina virtual que ejecuta bytecode compilado. Es lo que permite
            que Java sea <strong>"Write Once, Run Anywhere" (WORA)</strong>.
          </p>

          <h4>Ciclo de Vida: Código → Compilación → Ejecución</h4>
          <CodeBlock
            language="java"
            code={`// PASO 1: Escribir código (MiPrograma.java)
public class MiPrograma {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;
        System.out.println(x + y);
    }
}

// PASO 2: Compilar a bytecode
// $ javac MiPrograma.java
// → Genera MiPrograma.class (bytecode)

// PASO 3: Ejecutar con JVM
// $ java MiPrograma
// → JVM interpreta el bytecode y lo ejecuta`}
          />

          <h4>¿Qué es Bytecode?</h4>
          <p>
            El bytecode es <strong>código intermedio</strong> compilado que la JVM entiende. No es código máquina
            (como en C++), sino instrucciones específicas de la JVM que son independientes del SO.
          </p>

          <Table
            headers={['Aspecto', 'Descripción']}
            rows={[
              ['Formato', 'Archivo .class (binario)'],
              ['Contenido', 'Instrucciones JVM (BIPUSH, ALOAD, INVOKEVIRTUAL, etc.)'],
              ['Portabilidad', 'Mismo .class en Windows, Linux, macOS'],
              ['Ejecución', 'Interpretado por JVM (o compilado a nativo por JIT)'],
              ['Tamaño', 'Más compacto que .java, más grande que código máquina']
            ]}
          />

          <InfoBox type="info">
            <strong>JIT Compiler:</strong> La JVM usa Just-In-Time compilation. El bytecode
            frecuente se compila a código nativo en tiempo de ejecución para mejor rendimiento (HotSpot).
          </InfoBox>
        </>
      )
    },

    {
      id: 'memoria',
      title: '2. Memoria: Stack vs Heap',
      description: 'Dos regiones con responsabilidades distintas',
      content: (
        <>
          <p>
            Java divide la memoria en dos regiones principales: <strong>Stack</strong> y <strong>Heap</strong>.
            Cada una con diferentes características y responsabilidades.
          </p>

          <h4>STACK - Rápido, Automático, Limitado</h4>
          <CodeBlock
            language="java"
            code={`public void ejemploStack() {
    int edad = 30;              // Stack: valor primitivo (4 bytes)
    double peso = 75.5;         // Stack: valor primitivo (8 bytes)
    String nombre = "Juan";     // Stack: referencia. "Juan" en Heap

    List<String> lista = new ArrayList<>();  // Stack: ref. ArrayList en Heap
    lista.add("Item");          // String en Heap
}
// Al salir del método: edad, peso, nombre, lista desaparecen del Stack

// Stack típico: 1-8 MB por thread
// Si local variables son demasiadas: StackOverflowError`}
          />

          <InfoBox type="success">
            <strong>Stack:</strong> LIFO (Last In First Out). Se limpia automáticamente
            al salir del método. Muy rápido.
          </InfoBox>

          <h4>HEAP - Lento, Manual (GC), Compartido</h4>
          <CodeBlock
            language="java"
            code={`public static void main(String[] args) {
    Usuario u1 = new Usuario(1, "Juan");  // Objeto en Heap
    Usuario u2 = u1;                      // u2 referencia el MISMO objeto

    u1 = null;  // u1 ya no referencia el objeto

    // El objeto AÚN VIVE porque u2 lo referencia
    // Cuando u2 = null: sin referencias → Garbage Collector lo limpia
    u2 = null;
    // Ahora: sin referencias, GC puede limpiar

    Usuario[] usuarios = new Usuario[1000];  // Array en Heap
    for (int i = 0; i < 1000; i++) {
        usuarios[i] = new Usuario(i, "Usuario " + i);  // Cada objeto en Heap
    }
    // Total: 1000 objetos en Heap
}
// Heap típico: 512 MB - 4 GB (configurable)`}
          />

          <Table
            headers={['Característica', 'Stack', 'Heap']}
            rows={[
              ['Contenido', 'Primitivos + referencias', 'Objetos'],
              ['Gestión', 'Automática (LIFO)', 'Garbage Collector'],
              ['Velocidad', 'Muy rápido', 'Más lento'],
              ['Tamaño', 'Limitado (MB)', 'Grande (GB)'],
              ['Limpieza', 'Automática al salir función', 'Cuando no hay referencias'],
              ['Error si lleno', 'StackOverflowError', 'OutOfMemoryError'],
              ['Por thread', 'Cada thread tiene su Stack', 'Compartido por todos']
            ]}
          />

          <InfoBox type="danger">
            <strong>Regla crítica:</strong> Las referencias Stack apuntan a objetos Heap.
            Si todas las referencias se pierden, el objeto muere (sin referencias).
          </InfoBox>
        </>
      )
    },

    {
      id: 'garbage-collection',
      title: '3. Garbage Collection - Limpieza Automática',
      description: 'Cómo Java libera memoria automáticamente',
      content: (
        <>
          <p>
            El <strong>Garbage Collector (GC)</strong> es un proceso que busca objetos sin referencias
            vivas y los elimina del Heap. Es automático pero tiene costo (pauses en ejecución).
          </p>

          <h4>¿Cuándo un Objeto Muere?</h4>
          <CodeBlock
            language="java"
            code={`public void ejemploGC() {
    // Creamos objeto
    Usuario juan = new Usuario(1, "Juan");  // Vivo (juan lo referencia)

    // Dejamos de referenciar
    juan = null;  // Muerto: sin referencias vivas

    // GC eventualmente limpiará el objeto
}

public void otroEjemplo() {
    List<Usuario> usuarios = new ArrayList<>();
    usuarios.add(new Usuario(1, "Juan"));
    usuarios.add(new Usuario(2, "María"));

    usuarios.clear();  // Borramos elementos
    // Los objetos de Usuario: sin referencias → pueden ser recogidos por GC

    usuarios = null;  // ArrayList también sin referencias
    // ArrayList y usuarios: muertos
}

// Objetos con referencias circulares (raramente mueren)
class Nodo {
    Nodo siguiente;
}

Nodo n1 = new Nodo();
Nodo n2 = new Nodo();
n1.siguiente = n2;
n2.siguiente = n1;  // Referencia circular

n1 = null;
n2 = null;  // Los dos se limpian (GC detecta ciclos)`}
          />

          <h4>Generaciones de Objetos</h4>
          <p>
            La JVM divide el Heap en generaciones para optimizar GC. Objetos jóvenes se limpian
            frecuentemente; objetos viejos raramente.
          </p>

          <Table
            headers={['Generación', 'Descripción', 'Frecuencia GC']}
            rows={[
              ['Young Generation', 'Objetos nuevos (menores de edad)', 'Frecuentemente'],
              ['Old Generation', 'Objetos que sobrevivieron a varios GC', 'Ocasionalmente'],
              ['Permanent Generation', 'Metadata de clases, strings (Java 7 y antes)', 'Raramente']
            ]}
          />

          <h4>Tipos de Garbage Collection</h4>
          <CodeBlock
            language="bash"
            code={`# Ejecutar con collector específico:

# Serial GC (simple, pauses largas)
java -XX:+UseSerialGC MiPrograma

# Parallel GC (múltiples threads, pauses cortas)
java -XX:+UseParallelGC MiPrograma

# G1 GC (bajo latency, recomendado para heap grande)
java -XX:+UseG1GC MiPrograma

# ZGC (pause time < 10ms, muy bajo latency)
java -XX:+UnlockExperimentalVMOptions -XX:+UseZGC MiPrograma

# Ver estadísticas de GC
java -XX:+PrintGCDetails -XX:+PrintGCDateStamps MiPrograma`}
          />

          <InfoBox type="warning">
            <strong>GC Pauses:</strong> Cuando GC corre, la aplicación PARA. Pauses típicas:
            50ms - 2s (depende del heap size y collector).
          </InfoBox>
        </>
      )
    },

    {
      id: 'bytecode-compilacion',
      title: '4. Bytecode y Compilación',
      description: 'De código fuente a instrucciones JVM',
      content: (
        <>
          <p>
            El proceso de compilación transforma tu código .java en bytecode (.class) que la JVM entiende y ejecuta.
            El bytecode es el código intermedio, independiente del sistema operativo, que permite que Java sea portátil.
            Selecciona cada tema para aprender más sobre cómo Java compila y ejecuta tu código.
          </p>

          <BytecodeTabbed />
        </>
      )
    },

    {
      id: 'threads-concurrencia',
      title: '5. Threads y Concurrencia',
      description: 'Múltiples líneas de ejecución compartiendo memoria',
      content: (
        <>
          <p>
            Los <strong>Threads</strong> son líneas de ejecución independientes que pueden
            ejecutarse en paralelo. Cada thread tiene su propio Stack pero todos comparten el Heap.
          </p>

          <h4>Stack vs Heap en Multithreading</h4>
          <CodeBlock
            language="java"
            code={`public class ThreadsMemoria {
    static class Contador {
        int valor = 0;  // ← EN HEAP (compartido entre threads)
    }

    public static void main(String[] args) {
        Contador contador = new Contador();  // Heap

        Thread t1 = new Thread(() -> {
            int x = 10;           // ← EN STACK de t1 (privado)
            contador.valor += 1;  // ← MODIFICA Heap (¡peligro!)
        });

        Thread t2 = new Thread(() -> {
            int y = 20;           // ← EN STACK de t2 (privado)
            contador.valor += 1;  // ← MODIFICA Heap (¡peligro!)
        });

        t1.start();
        t2.start();

        // Problema: t1 y t2 comparten contador.valor
        // Sin sincronización: race condition
    }
}`}
          />

          <h4>Race Condition - El Problema</h4>
          <CodeBlock
            language="java"
            code={`// ❌ SIN SINCRONIZACIÓN - INSEGURO
public class InseguroEjemplo {
    static int contador = 0;

    public static void main(String[] args) throws Exception {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                contador++;  // RACE CONDITION
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                contador++;  // RACE CONDITION
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Contador: " + contador);
        // Esperado: 200000
        // Real: ≈ 150000 (números varían cada ejecución!)
        // Razón: instrucción contador++ NO es atómica
    }
}`}
          />

          <h4>Soluciones: Sincronización</h4>
          <CodeBlock
            language="java"
            code={`// ✅ OPCIÓN 1: synchronized (método)
public class SeguroSync {
    static int contador = 0;

    public synchronized static void incrementar() {
        contador++;
    }

    public static void main(String[] args) throws Exception {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                incrementar();  // Sincronizado
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                incrementar();  // Sincronizado
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Contador: " + contador);  // 200000 ✓
    }
}

// ✅ OPCIÓN 2: AtomicInteger (mejor para números)
import java.util.concurrent.atomic.AtomicInteger;

public class SeguroAtomic {
    static AtomicInteger contador = new AtomicInteger(0);

    public static void main(String[] args) throws Exception {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                contador.incrementAndGet();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                contador.incrementAndGet();
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Contador: " + contador.get());  // 200000 ✓
    }
}`}
          />

          <h4>Thread Pool - Ejecutar Muchos Threads</h4>
          <CodeBlock
            language="java"
            code={`import java.util.concurrent.*;

public class ThreadPoolEjemplo {
    public static void main(String[] args) {
        // Crear pool de 4 threads reutilizables
        ExecutorService executor = Executors.newFixedThreadPool(4);

        // Enviar 10 tareas al pool
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Tarea " + taskId + " ejecutada por " +
                    Thread.currentThread().getName());
            });
        }

        // Esperar a que terminen todas
        executor.shutdown();
        executor.awaitTermination(10, TimeUnit.SECONDS);

        System.out.println("Todas las tareas completadas");
    }
}`}
          />

          <InfoBox type="warning">
            <strong>Memory Visibility:</strong> Sin sincronización, cambios en variables compartidas
            pueden no verse en otros threads (CPU caches). Usa synchronized, volatile, o AtomicXXX.
          </InfoBox>
        </>
      )
    },

    {
      id: 'tuning-jvm',
      title: 'Tuning y Optimización de JVM',
      description: 'Parámetros para ajustar rendimiento y memoria',
      content: (
        <>
          <p>
            La JVM tiene cientos de parámetros configurables. Los más importantes son para
            controlar memoria y comportamiento del Garbage Collector.
          </p>

          <h4>Parámetros Comunes</h4>
          <CodeBlock
            language="bash"
            code={`# MEMORIA
-Xms512m        # Memoria inicial (heap minimum)
-Xmx2g          # Memoria máxima (heap maximum)
-Xmn256m        # Tamaño Young Generation

# GARBAGE COLLECTION
-XX:+UseG1GC              # Usar G1 Garbage Collector
-XX:MaxGCPauseMillis=200  # Target pauses de 200ms (G1)
-XX:+PrintGCDetails       # Mostrar detalles de GC
-XX:+PrintGCDateStamps    # Con timestamps

# COMPILACIÓN
-XX:+TieredCompilation    # Compilación en capas
-XX:TieredStopAtLevel=4   # Nivel máximo de compilación

# EJEMPLO COMPLETO
java -Xms2g -Xmx4g \\
     -XX:+UseG1GC \\
     -XX:MaxGCPauseMillis=200 \\
     -XX:+PrintGCDetails \\
     MiAplicacion`}
          />

          <h4>Monitorear Memoria en Runtime</h4>
          <CodeBlock
            language="java"
            code={`public class MonitorMemoria {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();

        // Información de memoria
        long maxMemory = runtime.maxMemory();      // -Xmx
        long totalMemory = runtime.totalMemory();  // asignada actualmente
        long freeMemory = runtime.freeMemory();    // libre en totalMemory
        long usedMemory = totalMemory - freeMemory;

        System.out.println("Memoria Máxima: " + (maxMemory / 1024 / 1024) + " MB");
        System.out.println("Memoria Total: " + (totalMemory / 1024 / 1024) + " MB");
        System.out.println("Memoria Usada: " + (usedMemory / 1024 / 1024) + " MB");
        System.out.println("Memoria Libre: " + (freeMemory / 1024 / 1024) + " MB");

        // Forzar Garbage Collection (no recomendado en prod)
        System.gc();

        // Ver procesadores disponibles
        System.out.println("CPUs disponibles: " + runtime.availableProcessors());
    }
}`}
          />

          <InfoBox type="success">
            <strong>Reglas Generales:</strong>
            <br />- Heap inicial ≈ 50% heap máximo
            <br />- Máximo heap ≈ 50% RAM disponible
            <br />- Usa G1GC para heaps &gt; 4GB
            <br />- Young Gen ≈ 25% del heap
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `Java internals incluyen la JVM (máquina virtual), compilación a bytecode, gestión de memoria
(Stack/Heap), Garbage Collection automático, y threading concurrente. Stack es rápido y local; Heap es compartido y gestionado por GC.
Threads comparten Heap → sincronización necesaria. JIT compilation optimiza código frecuente. Bytecode es portátil:
"Write Once, Run Anywhere".`;

      return (
    <>
      <LessonTemplate
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