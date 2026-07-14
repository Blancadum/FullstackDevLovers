import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonLambdas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Lambdas: Funciones anónimas compactas introducidas en Java 8',
    'Sintaxis: (params) -> cuerpo',
    'Solo funcionan con interfaces funcionales (exactamente 1 método abstracto)',
    'Soportan 0, 1 o múltiples parámetros',
    'Pueden ser inline (una línea) o multilineales (con llaves y return)',
    'Referencias de métodos (::) son aún más compactas que lambdas',
    'Son ideales para Streams, Collections y pasar comportamiento como parámetro',
    'Hacen el código más funcional, legible y menos verboso',
    'Son la base de la programación funcional moderna en Java',
    'Consumer<T>: Recibe T, no retorna nada',
    'Function<T,R>: Recibe T, retorna R',
    'Predicate<T>: Recibe T, retorna boolean',
  ];

  const exercises = [
    {
      title: 'Filtrar números pares y duplicarlos',
      description: 'Dada una lista de números, filtra solo los pares y duplica cada uno.',
      difficulty: 'Intermedio',
      hint: 'Usa stream(), filter(n -> n % 2 == 0), map(n -> n * 2), forEach()',
      solution: `ArrayList<Integer> numeros = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));

numeros.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .forEach(System.out::println);

// Resultado esperado: 4, 8, 12`,
    },
    {
      title: 'Crear validador personalizado',
      description: 'Crea una interfaz Validador y úsala con lambdas para validar contraseñas.',
      difficulty: 'Intermedio',
      hint: '@FunctionalInterface interface Validador con método boolean validar(String)',
      solution: `@FunctionalInterface
interface Validador {
    boolean validar(String texto);
}

// Validadores con lambdas
Validador tieneNumeros = p -> p.matches(".*[0-9].*");
Validador tieneMayusculas = p -> p.matches(".*[A-Z].*");
Validador minimo8Caracteres = p -> p.length() >= 8;

String password = "Java2024";
System.out.println("Tiene números: " + tieneNumeros.validar(password));
System.out.println("Tiene mayúsculas: " + tieneMayusculas.validar(password));
System.out.println("8+ caracteres: " + minimo8Caracteres.validar(password));`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es una Expresión Lambda?',
      level: 2,
      content: [
        '<strong>Lambda</strong> es una forma compacta de escribir funciones anónimas (sin nombre) en Java. Introducidas en Java 8, permiten programación más funcional y código más limpio.',
        <InfoBox key="info1" type="info">
          <strong>Sintaxis básica:</strong>
          <br />
          <code>(parámetros) -&gt; {'{cuerpo}'}</code>
        </InfoBox>,
      ],
    },
    {
      title: 'Ejemplos Simples',
      level: 2,
      content: [
        <CodeBlock
          key="code1"
          code={`// Sin parámetros
Runnable r = () -> System.out.println("Hola!");
r.run();

// Un parámetro (paréntesis opcionales)
Consumer<String> saludar = nombre -> System.out.println("Hola " + nombre);
saludar.accept("Juan");

// Dos parámetros
BiFunction<Integer, Integer, Integer> sumar = (a, b) -> a + b;
int resultado = sumar.apply(5, 3); // 8`}
        />,
      ],
    },
    {
      title: 'Comparación: Antes y Después',
      level: 2,
      content: [
        '<strong>Forma antigua (clase anónima):</strong>',
        <CodeBlock
          key="code2"
          code={`ArrayList<Integer> numeros = new ArrayList<>();
numeros.add(1);
numeros.add(5);
numeros.add(3);

// Recorrer con clase anónima
numeros.forEach(new Consumer<Integer>() {
    @Override
    public void accept(Integer numero) {
        System.out.println(numero);
    }
});`}
        />,
        '<strong>Forma moderna (Lambda):</strong>',
        'Mucho más compacta:',
        <CodeBlock
          key="code3"
          code={`numeros.forEach(numero -> System.out.println(numero));`}
        />,
      ],
    },
    {
      title: 'Interfaz Funcional',
      level: 2,
      content: [
        'Las lambdas solo funcionan con interfaces que tengan UN SOLO método abstracto (interfaz funcional):',
        <CodeBlock
          key="code4"
          code={`@FunctionalInterface
public interface Calculadora {
    int calcular(int a, int b);
}

// Usar la interfaz con lambda:
Calculadora suma = (a, b) -> a + b;
Calculadora resta = (a, b) -> a - b;
Calculadora multiplicacion = (a, b) -> a * b;

System.out.println("5 + 3 = " + suma.calcular(5, 3));         // 8
System.out.println("5 - 3 = " + resta.calcular(5, 3));         // 2
System.out.println("5 * 3 = " + multiplicacion.calcular(5, 3)); // 15`}
        />,
      ],
    },
    {
      title: 'Referencia de Métodos (::)',
      level: 2,
      content: [
        'Forma aún más compacta de escribir lambdas:',
        <CodeBlock
          key="code5"
          code={`ArrayList<String> nombres = new ArrayList<>(Arrays.asList("juan", "maría", "pedro"));

// En lugar de:
nombres.forEach(n -> System.out.println(n));

// Puedes usar:
nombres.forEach(System.out::println);`}
        />,
      ],
    },
  ];

  const summary = 'Lambdas son funciones anónimas compactas que hacen el código más funcional y legible. Son ideales para Streams y pasar comportamiento como parámetro.';

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
