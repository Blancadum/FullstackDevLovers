import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonScanner() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Scanner: Clase para leer entrada del usuario',
    'Importar: import java.util.Scanner;',
    'Crear: Scanner sc = new Scanner(System.in);',
    'nextInt(): Lee un número entero',
    'nextDouble(): Lee un número decimal',
    'nextLine(): Lee una línea completa de texto',
    'nextBoolean(): Lee un booleano (true/false)',
    'Siempre usa sc.close() al terminar',
    'hasNext*(): Verifica si hay dato disponible',
    'next(): Lee una palabra (hasta el espacio)',
  ];

  const exercises = [
    {
      title: 'Programa: Calcular el promedio',
      description: 'Lee 3 números del usuario y muestra el promedio. Usa Scanner para entrada.',
      difficulty: 'Principiante',
      hint: 'Usa Scanner sc = new Scanner(System.in); y sc.nextInt();',
      solution: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);

System.out.println("Ingresa 3 números:");
int n1 = sc.nextInt();
int n2 = sc.nextInt();
int n3 = sc.nextInt();

double promedio = (n1 + n2 + n3) / 3.0;
System.out.println("Promedio: " + promedio);

sc.close();`,
    },
    {
      title: 'Programa: Información del usuario',
      description: 'Lee nombre, edad y altura del usuario y muestra la información.',
      difficulty: 'Intermedio',
      hint: 'Usa nextLine() para strings, nextInt() para números, nextDouble() para decimales',
      solution: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);

System.out.print("¿Cuál es tu nombre? ");
String nombre = sc.nextLine();

System.out.print("¿Cuántos años tienes? ");
int edad = sc.nextInt();

System.out.print("¿Cuál es tu altura (en metros)? ");
double altura = sc.nextDouble();

System.out.println("\\n--- Información ---");
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad + " años");
System.out.println("Altura: " + altura + " m");

sc.close();`,
    },
  ];

  const sections = [
    {
      title: '¿Qué es Scanner?',
      content: (
        <>
          <p>
            <strong>Scanner</strong> es una clase de Java que permite leer datos que ingresa el usuario desde la consola. Es muy útil para crear programas interactivos.
          </p>
          <InfoBox type="info">
            <strong>Ubicación:</strong> java.util.Scanner. Necesitas importarla al principio del archivo.
          </InfoBox>
        </>
      ),
    },
    {
      title: 'Crear un Scanner',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Crear un Scanner que lee desde el teclado
        Scanner sc = new Scanner(System.in);

        // Usar Scanner aquí

        // Cerrar Scanner (importante)
        sc.close();
    }
}`}
          />
          <InfoBox type="warning">
            <strong>Importante:</strong> Siempre cierra el Scanner con sc.close() cuando termines.
          </InfoBox>
        </>
      ),
    },
    {
      title: 'Métodos Principales',
      content: (
        <Table
          headers={['Método', 'Lee', 'Ejemplo']}
          rows={[
            ['nextInt()', 'Número entero', '42'],
            ['nextDouble()', 'Número decimal', '3.14'],
            ['nextLine()', 'Línea completa', 'Hola Mundo'],
            ['next()', 'Una palabra', 'Hola'],
            ['nextBoolean()', 'Booleano', 'true'],
            ['nextByte()', 'Byte', '127'],
            ['nextLong()', 'Long', '9223372036854775807'],
            ['hasNext()', '¿Hay entrada?', 'true/false'],
          ]}
        />
      ),
    },
    {
      title: 'Ejemplo 1: Leer un Número',
      content: (
        <CodeBlock
          language="java"
          code={`import java.util.Scanner;

public class LeerNumero {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Tu edad es: " + edad);
        System.out.println("El año que viene tendrás: " + (edad + 1));

        sc.close();
    }
}

// Ejecución:
// Ingresa tu edad: 25
// Tu edad es: 25
// El año que viene tendrás: 26`}
        />
      ),
    },
    {
      title: 'Ejemplo 2: Leer Texto',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`import java.util.Scanner;

public class LeerTexto {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("¿Cuál es tu nombre? ");
        String nombre = sc.nextLine();  // Lee la línea completa

        System.out.println("Hola, " + nombre);

        sc.close();
    }
}

// Ejecución:
// ¿Cuál es tu nombre? Juan Carlos
// Hola, Juan Carlos`}
          />
          <InfoBox type="warning">
            <strong>Nota:</strong> Usa nextLine() para leer nombres con espacios. next() solo lee hasta el espacio.
          </InfoBox>
        </>
      ),
    },
    {
      title: 'Problema: Mezclar nextInt() y nextLine()',
      content: (
        <CodeBlock
          language="java"
          code={`import java.util.Scanner;

public class Problema {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Edad: ");
        int edad = sc.nextInt();  // Lee número pero NO salto de línea

        System.out.print("Nombre: ");
        String nombre = sc.nextLine();  // Lee el salto anterior (vacío)

        System.out.println(nombre); // ¡Vacío!

        sc.close();
    }
}

// ✅ SOLUCIÓN: Agregar nextLine() extra
System.out.print("Edad: ");
int edad = sc.nextInt();
sc.nextLine();  // Consume el salto de línea

System.out.print("Nombre: ");
String nombre = sc.nextLine();`}
        />
      ),
    },
    {
      title: 'Validar Entrada',
      content: (
        <CodeBlock
          language="java"
          code={`import java.util.Scanner;

public class ValidarEntrada {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Ingresa un número: ");
        if (sc.hasNextInt()) {
            int numero = sc.nextInt();
            System.out.println("Número válido: " + numero);
        } else {
            System.out.println("Error: debes ingresar un número");
        }

        sc.close();
    }
}

// Métodos de validación:
// hasNextInt()      - ¿Es número entero?
// hasNextDouble()   - ¿Es número decimal?
// hasNextLine()     - ¿Hay línea disponible?
// hasNext()         - ¿Hay token disponible?`}
        />
      ),
    },
  ];

  const summary = 'Scanner es la forma estándar de leer entrada del usuario en Java. Siempre valida la entrada y recuerda cerrar el Scanner.';

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
