import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonExceptions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🚨',
      title: 'Excepción',
      definition: 'Error que ocurre durante la ejecución del programa',
      example: 'ArithmeticException, NullPointerException',
    },
    {
      icon: '🔍',
      title: 'try-catch',
      definition: 'Estructura para capturar y manejar excepciones',
      example: 'try { } catch (Exception e) { }',
    },
    {
      icon: '🧹',
      title: 'finally',
      definition: 'Bloque que SIEMPRE se ejecuta, para limpiar recursos',
      example: 'finally { scanner.close(); }',
    },
    {
      icon: '⚡',
      title: 'throw',
      definition: 'Lanza una excepción manualmente',
      example: 'throw new IllegalArgumentException("Error");',
    },
  ];

  const exercises = [
    {
      title: 'Capturar excepción de división por cero',
      description: 'Crea un programa que divide dos números. Si divide por cero, muestra un error amigable.',
      solution: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);

try {
    System.out.print("Dividendo: ");
    int a = sc.nextInt();

    System.out.print("Divisor: ");
    int b = sc.nextInt();

    int resultado = a / b;
    System.out.println("Resultado: " + resultado);
} catch (ArithmeticException e) {
    System.out.println("Error: No se puede dividir entre cero");
} finally {
    sc.close();
}`,
    },
    {
      title: 'Validar conversión de string a número',
      description: 'Lee un string del usuario e intenta convertirlo a número. Maneja la excepción.',
      solution: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);

try {
    System.out.print("Ingresa un número: ");
    String entrada = sc.nextLine();

    int numero = Integer.parseInt(entrada);
    System.out.println("Número ingresado: " + numero);
    System.out.println("El doble es: " + (numero * 2));
} catch (NumberFormatException e) {
    System.out.println("Error: Debes ingresar un número válido");
    System.out.println("Detalle: " + e.getMessage());
} finally {
    sc.close();
}`,
    },
  ];

  const keyPoints = [
    'Exception: Objeto que representa un error durante la ejecución',
    'try: Bloque donde ocurren errores potenciales',
    'catch: Bloque que maneja la excepción',
    'finally: Bloque que SIEMPRE se ejecuta (opcional)',
    'ArithmeticException: División por cero, etc',
    'NumberFormatException: Conversión de tipos incorrecta',
    'NullPointerException: Usar variable null',
    'ArrayIndexOutOfBoundsException: Índice fuera de rango',
    'throws: Declarar que un método puede lanzar excepciones',
    'throw: Lanzar excepción manualmente',
  ];

  const sections = [
    {
      title: '¿Qué es una Excepción?',
      content: (
        <>
          <p>
            Una <strong>excepción</strong> es un error que ocurre durante la ejecución del programa. Sin manejo,
            la excepción detiene el programa. Con manejo (try-catch), el programa continúa controladamente.
          </p>
          <InfoBox type="info">
            <strong>Excepciones:</strong> Errores predecibles y manejables que ocurren durante la ejecución.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Sintaxis try-catch',
      content: (
        <CodeBlock
          code={`try {
    // Código que puede generar excepción
    int resultado = 10 / 0;
    System.out.println(resultado);
} catch (ArithmeticException e) {
    // Código que se ejecuta si ocurre la excepción
    System.out.println("Error: No se puede dividir entre cero");
    System.out.println("Detalle: " + e.getMessage());
} finally {
    // Código que SIEMPRE se ejecuta (opcional)
    System.out.println("Fin del bloque try-catch");
}

System.out.println("El programa continúa...");`}
        />
      ),
    },

    {
      title: 'Excepciones Comunes',
      content: (
        <Table
          headers={['Excepción', 'Causa', 'Ejemplo']}
          rows={[
            ['ArithmeticException', 'División por cero', '10 / 0'],
            ['NumberFormatException', 'Conversión de tipo inválida', 'Integer.parseInt("abc")'],
            ['ArrayIndexOutOfBoundsException', 'Índice fuera de rango', 'array[99]'],
            ['NullPointerException', 'Usar null', 'String s = null; s.length()'],
            ['StringIndexOutOfBoundsException', 'Índice en string inválido', '"abc".charAt(5)'],
          ]}
        />
      ),
    },

    {
      title: 'Ejemplo 1: ArithmeticException',
      content: (
        <CodeBlock
          code={`public class DivisionSegura {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int resultado = a / b; // ¡Excepción!
            System.out.println(resultado);
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero");
        }
        System.out.println("El programa continúa");
    }
}

// Salida:
// Error: División por cero
// El programa continúa`}
        />
      ),
    },

    {
      title: 'Ejemplo 2: NumberFormatException',
      content: (
        <CodeBlock
          code={`public class ConversionSegura {
    public static void main(String[] args) {
        String texto = "abc";

        try {
            int numero = Integer.parseInt(texto); // ¡Excepción!
            System.out.println("Número: " + numero);
        } catch (NumberFormatException e) {
            System.out.println("Error: '" + texto + "' no es un número válido");
        }
        System.out.println("El programa continúa");
    }
}

// Salida:
// Error: 'abc' no es un número válido
// El programa continúa`}
        />
      ),
    },

    {
      title: 'Múltiples catch',
      content: (
        <>
          <CodeBlock
            code={`public class MultipleCatch {
    public static void main(String[] args) {
        try {
            int[] numeros = {1, 2, 3};

            System.out.println(numeros[5]); // ¡ArrayIndexOutOfBoundsException!

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Índice fuera de rango");
        } catch (NullPointerException e) {
            System.out.println("Error: Array es null");
        } catch (Exception e) {
            System.out.println("Error general: " + e.getMessage());
        } finally {
            System.out.println("Limpieza de recursos");
        }
    }
}

// Salida:
// Error: Índice fuera de rango
// Limpieza de recursos`}
          />
          <InfoBox type="info">
            <strong>Tip:</strong> Ordena los catch de más específico a menos específico. Exception debe ser el último.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'finally para Limpiar Recursos',
      content: (
        <CodeBlock
          code={`import java.util.Scanner;

Scanner sc = null;
try {
    sc = new Scanner(System.in);

    System.out.print("Ingresa un número: ");
    int numero = sc.nextInt();

    System.out.println("El número es: " + numero);
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    // Se ejecuta SIEMPRE, incluso si hay excepción
    if (sc != null) {
        sc.close();
        System.out.println("Scanner cerrado");
    }
}

System.out.println("Programa finalizado");`}
        />
      ),
    },

    {
      title: 'Lanzar Excepciones (throw)',
      content: (
        <CodeBlock
          code={`public class ValidarEdad {
    public static void main(String[] args) {
        try {
            validarEdad(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    // Método que lanza excepción
    static void validarEdad(int edad) {
        if (edad < 18) {
            throw new IllegalArgumentException("Debes ser mayor de 18 años");
        }
        System.out.println("Edad válida: " + edad);
    }
}

// Salida:
// Error: Debes ser mayor de 18 años`}
        />
      ),
    },

    {
      title: 'Declarar Excepciones (throws)',
      content: (
        <>
          <CodeBlock
            code={`import java.io.IOException;

public class ManejoExcepciones {
    // El método DECLARA que puede lanzar IOException
    public static void leerArchivo() throws IOException {
        // Código que puede lanzar IOException
        System.out.println("Leyendo archivo...");
        throw new IOException("Archivo no encontrado");
    }

    public static void main(String[] args) {
        try {
            leerArchivo();
        } catch (IOException e) {
            System.out.println("Error de lectura: " + e.getMessage());
        }
    }
}

// Salida:
// Error de lectura: Archivo no encontrado`}
          />
          <InfoBox type="info">
            <strong>throws vs throw:</strong> throws declara que un método puede lanzar una excepción. throw lanza la excepción.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Try-with-Resources (Java 7+)',
      content: (
        <CodeBlock
          code={`// Forma antigua (necesita finally)
Scanner sc = new Scanner(System.in);
try {
    // código
} finally {
    sc.close();
}

// Forma moderna (automático)
try (Scanner sc = new Scanner(System.in)) {
    System.out.print("Nombre: ");
    String nombre = sc.nextLine();
    System.out.println("Hola, " + nombre);
    // Scanner se cierra automáticamente
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
}

// El recurso (Scanner) se cierra AUTOMÁTICAMENTE`}
        />
      ),
    },
  ];

  const summary = `Manejo de Excepciones es crucial para programas robustos:

• Excepción: Error predecible durante la ejecución
• try: Bloque donde ocurren errores potenciales
• catch: Captura y maneja la excepción
• finally: Bloque que SIEMPRE se ejecuta (limpieza)
• throw: Lanza excepción manualmente
• throws: Declara que un método puede lanzar excepción
• ArithmeticException: División por cero
• NumberFormatException: Conversión inválida
• NullPointerException: Variable null
• Try-with-resources: Cierra recursos automáticamente
• Ordena catches de específico a general
• Siempre clea recursos en finally o try-with-resources`;

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