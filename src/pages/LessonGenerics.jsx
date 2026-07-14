import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonGenerics() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '📦',
      title: 'Genéricos',
      definition: 'Permiten escribir código que funciona con diferentes tipos de datos, manteniendo seguridad de tipos.',
      example: 'List<String> lista = new ArrayList<String>();',
    },
    {
      icon: '🔤',
      title: 'Parámetro de Tipo',
      definition: 'Variable de tipo que se especifica en ángulos: <T>, <K, V>, <E>',
      example: 'public class Caja<T> { }',
    },
    {
      icon: '🎯',
      title: 'Bounded Type Parameter',
      definition: 'Restricción del tipo: solo acepta tipos que cumplan una condición.',
      example: '<T extends Number> (T debe ser Number o subclase)',
    },
    {
      icon: '🌊',
      title: 'Wildcard',
      definition: 'Comodín (?) para flexibilidad en tipos. Puede ser ?, ? extends, ? super',
      example: 'List<?> lista; List<? extends Animal> animales;',
    },
  ];

  const exercises = [
    {
      title: 'Clase genérica Caja<T>',
      description: 'Crea clase genérica Caja con getter/setter. Guarda String, Integer y Double.',
      solution: `public class Caja<T> {
    private T contenido;

    public void guardar(T objeto) {
        this.contenido = objeto;
    }

    public T obtener() {
        return contenido;
    }

    public void mostrar() {
        System.out.println("Contenido: " + contenido);
    }
}

// Uso:
Caja<String> cajaString = new Caja<>();
cajaString.guardar("Hola");
cajaString.mostrar(); // Contenido: Hola

Caja<Integer> cajaInt = new Caja<>();
cajaInt.guardar(42);
cajaInt.mostrar(); // Contenido: 42

Caja<Double> cajaDouble = new Caja<>();
cajaDouble.guardar(3.14);
cajaDouble.mostrar(); // Contenido: 3.14`,
    },
    {
      title: 'Método genérico comparar<T>',
      description: 'Crea método genérico que compara dos objetos y retorna si son iguales.',
      solution: `public class Comparador {
    // Método genérico
    public static <T> boolean comparar(T a, T b) {
        if (a == null && b == null) return true;
        if (a == null || b == null) return false;
        return a.equals(b);
    }

    // Método genérico con números (bounded)
    public static <T extends Number> boolean sonIguales(T a, T b) {
        return a.doubleValue() == b.doubleValue();
    }

    public static void main(String[] args) {
        System.out.println(comparar("Java", "Java"));      // true
        System.out.println(comparar("Java", "Python"));    // false
        System.out.println(comparar(10, 10));              // true
        System.out.println(sonIguales(10, 10.0));          // true
    }
}`,
    },
  ];

  const keyPoints = [
    'Genéricos: Código reutilizable, seguro de tipos en compilación',
    'Type Parameter: Variable de tipo entre ángulos <T>',
    'Convenciones: <T> (Type), <K, V> (Key, Value), <E> (Element)',
    'Bounded Type: <T extends Number> restringe a tipos específicos',
    'Wildcard (?): Flexibilidad en lectura/escritura de colecciones',
    '<? extends T>: Acepta T o subclases (lectura, covarianza)',
    '<? super T>: Acepta T o superclases (escritura, contravarianza)',
    'Type Erasure: Genéricos se eliminan en tiempo de ejecución',
    'No se puede hacer new T(): Los tipos genéricos no existen en runtime',
    'Métodos genéricos: <T> returnType método(T param) { }',
    'Ventaja: Menos casting, más seguridad de tipos',
  ];

  const sections = [
    {
      title: '¿Qué son los Genéricos?',
      content: (
        <>
          <p>
            Los <strong>genéricos</strong> permiten escribir clases y métodos que trabajen con diferentes tipos de datos,
            manteniendo la seguridad de tipos en tiempo de compilación. Evita casts innecesarios y previene errores de tipo en runtime.
          </p>
          <InfoBox type="important">
            <strong>Genéricos:</strong> Código reutilizable y seguro que funciona con cualquier tipo de dato.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Clases Genéricas',
      content: (
        <CodeBlock
          code={`// Clase genérica simple
public class Caja<T> {
    private T contenido;

    public void guardar(T objeto) {
        this.contenido = objeto;
    }

    public T obtener() {
        return contenido;
    }
}

// Uso con String
Caja<String> cajaString = new Caja<>();
cajaString.guardar("Hola");
String valor = cajaString.obtener(); // No necesita cast

// Uso con Integer
Caja<Integer> cajaInt = new Caja<>();
cajaInt.guardar(42);
Integer numero = cajaInt.obtener(); // No necesita cast

// Clase genérica con múltiples parámetros
public class Mapa<K, V> {
    private K clave;
    private V valor;

    public void poner(K k, V v) {
        this.clave = k;
        this.valor = v;
    }

    public V obtener(K k) {
        return valor;
    }
}

// Uso:
Mapa<String, Integer> edades = new Mapa<>();
edades.poner("Juan", 30);
Integer edad = edades.obtener("Juan");`}
        />
      ),
    },

    {
      title: 'Métodos Genéricos',
      content: (
        <CodeBlock
          code={`// Método genérico (sin ser clase genérica)
public class Utilidades {
    // Método genérico que retorna el tipo que recibe
    public static <T> void mostrar(T objeto) {
        System.out.println("Valor: " + objeto);
    }

    // Método genérico que compara
    public static <T> boolean comparar(T a, T b) {
        return a.equals(b);
    }

    // Método genérico que obtiene el primero
    public static <T> T obtenerPrimero(T[] array) {
        return array.length > 0 ? array[0] : null;
    }
}

// Uso:
Utilidades.mostrar("Hola");              // Valor: Hola
Utilidades.mostrar(42);                  // Valor: 42
System.out.println(Utilidades.comparar("Java", "Java"));  // true

String[] palabras = {"Hola", "Mundo"};
System.out.println(Utilidades.obtenerPrimero(palabras));  // Hola`}
        />
      ),
    },

    {
      title: 'Bounded Type Parameters',
      content: (
        <>
          <CodeBlock
            code={`// Bounded type parameter: <T extends Number>
// T solo puede ser Number o subclases

public class Calculadora {
    // T debe ser instancia de Number (Integer, Double, Float, etc.)
    public static <T extends Number> double promedio(T[] numeros) {
        double suma = 0;
        for (T n : numeros) {
            suma += n.doubleValue();
        }
        return suma / numeros.length;
    }

    // T debe implementar Comparable
    public static <T extends Comparable<T>> T maximo(T[] array) {
        T max = array[0];
        for (T elemento : array) {
            if (elemento.compareTo(max) > 0) {
                max = elemento;
            }
        }
        return max;
    }
}

// Uso:
Integer[] numeros = {10, 20, 30, 40};
System.out.println(Calculadora.promedio(numeros));  // 25.0

String[] palabras = {"Manzana", "Banana", "Cereza"};
System.out.println(Calculadora.maximo(palabras));    // Manzana`}
          />
          <InfoBox type="warning">
            <strong>Nota:</strong> No puedes pasar tipos primitivos (int, double). Usa sus equivalentes en objetos (Integer, Double).
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Wildcards (?, ? extends, ? super)',
      content: (
        <CodeBlock
          code={`import java.util.*;

public class GestionColecciones {
    // Wildcard (?): Acepta cualquier tipo
    public static void mostrarLista(List<?> lista) {
        for (Object obj : lista) {
            System.out.println(obj);
        }
    }

    // Wildcard con extends (? extends Animal)
    // Lee: acepta List de Animal o subclases
    public static void hacerSonidos(List<? extends Animal> animales) {
        for (Animal animal : animales) {
            animal.hacerSonido();
        }
    }

    // Wildcard con super (? super Perro)
    // Escribe: acepta List de Perro o superclases
    public static void agregarPerros(List<? super Perro> lista) {
        lista.add(new Perro("Rex"));
        lista.add(new Perro("Max"));
    }
}

// Uso:
List<String> strings = Arrays.asList("Java", "Python", "C++");
mostrarLista(strings);  // Imprime cada string

List<Perro> perros = Arrays.asList(new Perro("Rex"), new Perro("Max"));
hacerSonidos(perros);   // Cada perro hace sonido

List<Animal> animales = new ArrayList<>();
agregarPerros(animales); // Agrega perros a lista de Animal`}
        />
      ),
    },

    {
      title: 'Genéricos y Colecciones',
      content: (
        <CodeBlock
          code={`import java.util.*;

public class EjemplosColecciones {
    public static void main(String[] args) {
        // List genérica
        List<String> nombres = new ArrayList<>();
        nombres.add("Juan");
        nombres.add("María");
        for (String nombre : nombres) {
            System.out.println(nombre); // No necesita cast
        }

        // Set genérico
        Set<Integer> numerosPrimos = new HashSet<>();
        numerosPrimos.add(2);
        numerosPrimos.add(3);
        numerosPrimos.add(5);
        numerosPrimos.add(7);

        // Map genérico
        Map<String, Integer> edades = new HashMap<>();
        edades.put("Juan", 30);
        edades.put("María", 28);

        for (Map.Entry<String, Integer> entrada : edades.entrySet()) {
            String nombre = entrada.getKey();
            Integer edad = entrada.getValue();
            System.out.println(nombre + ": " + edad);
        }
    }
}

// Método genérico con colecciones
public static <T> void imprimirLista(List<T> lista) {
    for (T elemento : lista) {
        System.out.println(elemento);
    }
}`}
        />
      ),
    },

    {
      title: 'Type Erasure',
      content: (
        <>
          <CodeBlock
            code={`// Los genéricos se "borran" en tiempo de ejecución (Type Erasure)

// Original:
List<String> strings = new ArrayList<>();
strings.add("Hola");
String valor = strings.get(0);

// Lo que Java hace internamente (después de compilar):
List strings = new ArrayList();
strings.add("Hola");
String valor = (String) strings.get(0); // Se agrega cast automáticamente

// Por eso NO puedes hacer esto:
// public void metodo(List<String> lista) { }
// public void metodo(List<Integer> lista) { }  // ERROR: Conflicto

// Pero sí puedes hacer esto:
public void metodo(List<String> lista) { }
public void metodo(Set<String> conjunto) { }  // OK: diferentes tipos base

// Consecuencias:
// 1. No puedes hacer: new T(), new T[10]
// 2. instanceof no funciona con genéricos
// 3. No puedes hacer casting explícito a tipos genéricos`}
          />
          <InfoBox type="warning">
            <strong>Type Erasure:</strong> Los genéricos existen solo en compilación. En runtime, todo es Object.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Errores Comunes',
      content: (
        <CodeBlock
          code={`// ❌ ERROR 1: No puedes instanciar T
public class Caja<T> {
    // ERROR: new T() no funciona
    // private T contenido = new T();

    // ✅ CORRECTO: Acepta instancia desde afuera
    private T contenido;
}

// ❌ ERROR 2: No puedes hacer array de genéricos
// List<String>[] arrays = new List<String>[10];  // ERROR

// ✅ CORRECTO:
List<String>[] arrays = new List[10]; // Sin tipo genérico

// ❌ ERROR 3: Tipos primitivos no funcionan
// List<int> numeros = new ArrayList<>();  // ERROR

// ✅ CORRECTO:
List<Integer> numeros = new ArrayList<>();

// ❌ ERROR 4: No puedes hacer múltiples métodos con mismo nombre
// public void procesar(List<String> lista) { }
// public void procesar(List<Integer> lista) { }  // ERROR (ambos son List)

// ✅ CORRECTO: Cambiar tipo base
public void procesar(List<String> lista) { }
public void procesar(Set<Integer> conjunto) { }  // OK`}
        />
      ),
    },
  ];

  const summary = `Genéricos son esenciales para código Java seguro y reutilizable:

• Genéricos: Código reutilizable y seguro de tipos
• Type Parameter: <T>, <K, V>, <E> entre ángulos
• Clases genéricas: public class Caja<T> { }
• Métodos genéricos: public static <T> void método(T param)
• Bounded Types: <T extends Comparable<T>> restringe tipos
• Wildcards: ?, ? extends T, ? super T para flexibilidad
• Colecciones: List<T>, Set<T>, Map<K, V> con tipos seguros
• Type Erasure: Genéricos se eliminan en runtime
• No new T(): No puedes instanciar tipos genéricos directamente
• Ventaja: Menos casting, más seguridad y código limpio`;

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