import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonStreams() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Stream: Secuencia de elementos procesados funcionalmente',
    'stream(): Crea stream desde colección',
    'Operaciones intermedias: filter(), map(), sorted(), distinct()',
    'Operaciones terminales: forEach(), collect(), reduce(), count()',
    'Lazy evaluation: Intermedias no se ejecutan hasta terminal',
    'map(): Transforma cada elemento',
    'filter(): Mantiene elementos que cumplen condición',
    'collect(): Recolecta resultados en colección',
    'reduce(): Combina elementos en un resultado',
    'forEach(): Itera sobre cada elemento',
    'Method reference (::): Sintaxis compacta de lambdas',
    'Ventaja: Código funcional, legible y conciso',
  ];

  const exercises = [
    {
      title: 'Filtrar números pares y sumarlos',
      description: 'Crea lista de 1-10, filtra pares y calcula la suma con Stream.',
      difficulty: 'Intermedio',
      hint: 'Usa filter(n -> n % 2 == 0) y reduce() o sum()',
      solution: `import java.util.*;
import java.util.stream.*;

List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Opción 1: Con reduce
int suma = numeros.stream()
    .filter(n -> n % 2 == 0)
    .reduce(0, Integer::sum);
System.out.println("Suma de pares: " + suma); // 30

// Opción 2: Con sum() (más simple)
int suma2 = numeros.stream()
    .filter(n -> n % 2 == 0)
    .mapToInt(Integer::intValue)
    .sum();
System.out.println("Suma: " + suma2); // 30`,
    },
    {
      title: 'Convertir strings a mayúsculas y ordenar',
      description: 'Lista de nombres, convertir a mayúsculas, ordenar y mostrar.',
      difficulty: 'Intermedio',
      hint: 'Usa map(String::toUpperCase), sorted(), forEach()',
      solution: `List<String> nombres = Arrays.asList("juan", "maría", "carlos", "ana");

nombres.stream()
    .map(String::toUpperCase)
    .sorted()
    .forEach(System.out::println);

// Salida:
// ANA
// CARLOS
// JUAN
// MARÍA`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es un Stream?',
      level: 2,
      content: [
        'Un <strong>Stream</strong> es una secuencia de elementos que se procesan de manera declarativa y funcional. Permite realizar operaciones como filtrado, mapeo y reducción de forma elegante.',
        <InfoBox key="info1" type="info">
          <strong>Stream:</strong> No es una estructura de datos, es una forma de procesar datos funcionalmente.
        </InfoBox>,
      ],
    },
    {
      title: 'Crear y Usar Streams',
      level: 2,
      content: [
        <CodeBlock
          key="code1"
          code={`import java.util.*;
import java.util.stream.*;

// Desde colección
List<Integer> lista = Arrays.asList(1, 2, 3, 4, 5);
Stream<Integer> stream1 = lista.stream();

// Desde array
int[] array = {1, 2, 3, 4, 5};
IntStream stream2 = Arrays.stream(array);

// Stream.of()
Stream<String> stream3 = Stream.of("a", "b", "c");

// Stream.generate() - Infinito
Stream<Double> stream4 = Stream.generate(Math::random).limit(5);

// Stream.iterate() - Progresión
Stream<Integer> stream5 = Stream.iterate(1, n -> n + 1).limit(10);`}
        />,
      ],
    },
    {
      title: 'Operaciones Intermedias',
      level: 2,
      content: [
        <CodeBlock
          key="code2"
          code={`List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// filter() - Mantiene elementos que cumplen condición
numeros.stream()
    .filter(n -> n > 5)
    .forEach(System.out::println); // 6, 7, 8, 9, 10

// map() - Transforma cada elemento
numeros.stream()
    .map(n -> n * 2)
    .forEach(System.out::println); // 2, 4, 6, 8, ...

// sorted() - Ordena
numeros.stream()
    .sorted()
    .forEach(System.out::println); // 1, 2, 3, ...

// distinct() - Elimina duplicados
Arrays.asList(1, 2, 2, 3, 3, 3).stream()
    .distinct()
    .forEach(System.out::println); // 1, 2, 3

// limit() y skip()
numeros.stream().limit(3).forEach(System.out::println);  // 1, 2, 3
numeros.stream().skip(5).forEach(System.out::println);   // 6, 7, 8, 9, 10`}
        />,
      ],
    },
    {
      title: 'Operaciones Terminales',
      level: 2,
      content: [
        <CodeBlock
          key="code3"
          code={`List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);

// forEach() - Itera sobre cada elemento
numeros.stream()
    .forEach(System.out::println);

// collect() - Recolecta en colección
List<Integer> pares = numeros.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList()); // [2, 4]

// reduce() - Combina elementos
int suma = numeros.stream()
    .reduce(0, (a, b) -> a + b); // 15

// count() - Cuenta elementos
long cantidad = numeros.stream()
    .filter(n -> n > 2)
    .count(); // 3

// min() y max()
int minimo = numeros.stream().min((a, b) -> a - b).orElse(0); // 1
int maximo = numeros.stream().max((a, b) -> a - b).orElse(0); // 5

// anyMatch(), allMatch(), noneMatch()
boolean hayMayorA5 = numeros.stream().anyMatch(n -> n > 5); // false
boolean todosMayorA0 = numeros.stream().allMatch(n -> n > 0); // true
boolean ninguno = numeros.stream().noneMatch(n -> n > 10); // true`}
        />,
      ],
    },
    {
      title: 'Cadena de Operaciones (Pipeline)',
      level: 2,
      content: [
        <CodeBlock
          key="code4"
          code={`List<String> palabras = Arrays.asList("java", "stream", "api", "programacion");

// Pipeline completo: filtro → mapeo → ordenamiento → recolección
List<String> resultado = palabras.stream()
    .filter(s -> s.length() > 3)              // Filtra
    .map(String::toUpperCase)                 // Transforma
    .sorted()                                  // Ordena
    .collect(Collectors.toList());

System.out.println(resultado); // [API, JAVA, PROGRAMACION, STREAM]

// Contar palabras mayores a 5 caracteres
long cantidad = palabras.stream()
    .filter(s -> s.length() > 5)
    .count(); // 2`}
        />,
      ],
    },
    {
      title: 'Lazy Evaluation',
      level: 2,
      content: [
        '<strong>Las operaciones intermedias NO se ejecutan hasta una terminal</strong>',
        <CodeBlock
          key="code5"
          code={`List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);

System.out.println("Inicio");

numeros.stream()
    .filter(n -> {
        System.out.println("Filtrando: " + n);
        return n > 2;
    })
    .map(n -> {
        System.out.println("Mapeando: " + n);
        return n * 2;
    });

System.out.println("Fin"); // NO hay output de filter/map

// Ahora agregamos operación terminal:
System.out.println("\\nCon forEach:");
numeros.stream()
    .filter(n -> {
        System.out.println("Filtrando: " + n);
        return n > 2;
    })
    .map(n -> {
        System.out.println("Mapeando: " + n);
        return n * 2;
    })
    .forEach(n -> System.out.println("Resultado: " + n));`}
        />,
      ],
    },
    {
      title: 'Collectors - Recolectar Resultados',
      level: 2,
      content: [
        <CodeBlock
          key="code6"
          code={`List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6);

// toList() - Convertir a List
List<Integer> lista = numeros.stream()
    .filter(n -> n > 2)
    .collect(Collectors.toList());

// toSet() - Convertir a Set
Set<Integer> conjunto = numeros.stream()
    .collect(Collectors.toSet());

// toMap() - Convertir a Map
Map<Integer, Integer> mapa = numeros.stream()
    .collect(Collectors.toMap(n -> n, n -> n * 2));

// joining() - Concatenar strings
String resultado = numeros.stream()
    .map(Object::toString)
    .collect(Collectors.joining(", ")); // "1, 2, 3, 4, 5, 6"

// groupingBy() - Agrupar
Map<Integer, List<Integer>> grupos = numeros.stream()
    .collect(Collectors.groupingBy(n -> n % 2)); // {0=[2,4,6], 1=[1,3,5]}

// partitioningBy() - Particionar en 2 grupos
Map<Boolean, List<Integer>> particion = numeros.stream()
    .collect(Collectors.partitioningBy(n -> n > 3)); // {false=[1,2,3], true=[4,5,6]}`}
        />,
      ],
    },
  ];

  const summary = 'Streams API permite programación funcional declarativa. Combina operaciones intermedias (lazy) con terminales (eager) para procesar datos de forma legible y eficiente.';

      return (
    <>
      <LessonTemplate
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        exercises={exercises}
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
