import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonDataTypes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  // Conceptos principales
  const concepts = [
    {
      icon: '🔢',
      title: 'Números Enteros',
      definition: 'Almacenan números sin decimales: byte, short, int, long',
      example: 'int edad = 25; long poblacion = 8000000L;',
    },
    {
      icon: '📊',
      title: 'Números Decimales',
      definition: 'Almacenan números con punto decimal: float, double',
      example: 'float precio = 19.99f; double pi = 3.14159;',
    },
    {
      icon: '✅',
      title: 'Booleano',
      definition: 'Solo dos valores: true o false',
      example: 'boolean esActivo = true;',
    },
    {
      icon: '🔤',
      title: 'Carácter',
      definition: 'Un único carácter entre comillas simples',
      example: "char inicial = 'J';",
    },
  ];

  // Ejercicios
  const exercises = [
    {
      title: 'Declarar variables de cada tipo',
      description: 'Declara una variable para cada tipo primitivo y asigna un valor.',
      solution: `byte edad = 25;
short año = 2024;
int poblacion = 8000000;
long distancia = 9461000000000L;
float altura = 1.75f;
double pi = 3.14159265359;
boolean esJava = true;
char inicial = 'J';`,
    },
    {
      title: 'Convertir tipos (casting)',
      description: 'Convierte un double a int y luego a byte. Observa qué pasa.',
      solution: `double valor = 257.5;
int entero = (int) valor;        // 257
byte pequeño = (byte) valor;     // 1 (perdida de datos)

System.out.println("double: " + valor);
System.out.println("int: " + entero);
System.out.println("byte: " + pequeño);`,
    },
  ];

  // Key points
  const keyPoints = [
    'Java tiene 8 tipos primitivos: byte, short, int, long, float, double, boolean, char',
    'int y double son los más comunes',
    'long requiere sufijo L: 1000L',
    'float requiere sufijo f: 3.14f',
    'El casting (conversión) puede perder información',
    'String NO es primitivo, es una clase',
    'Variables deben inicializarse antes de usarlas',
    'Cada tipo tiene un rango de valores máximo y mínimo',
  ];

  // Secciones de contenido
  const sections = [
    {
      title: '¿Qué son los Tipos Primitivos?',
      content: (
        <>
          <p>
            Los tipos primitivos son los bloques básicos de Java. Son 8 tipos que almacenan valores
            simples como números, caracteres y booleanos. Son los más rápidos porque se almacenan
            directamente en memoria.
          </p>
          <InfoBox type="important" title="Importante">
            Los tipos primitivos empiezan con minúscula (int, double) y NO tienen métodos.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Números Enteros Detallados',
      content: (
        <Table
          headers={['Tipo', 'Bytes', 'Rango', 'Uso']}
          rows={[
            ['byte', '1', '-128 a 127', 'Valores muy pequeños'],
            ['short', '2', '-32,768 a 32,767', 'Valores pequeños'],
            ['int', '4', '~-2 billones a 2 billones', 'Uso común (por defecto)'],
            ['long', '8', '~-9 quintillones a 9 quintillones', 'Números muy grandes'],
          ]}
        />
      ),
    },

    {
      title: 'Declaración de Variables',
      content: (
        <CodeBlock
          code={`// Sintaxis básica
int edad = 25;
double salario = 2500.50;
boolean esActivo = true;
String nombre = "Juan"; // NO es primitivo

// Múltiples variables del mismo tipo
int a = 10, b = 20, c = 30;

// Variable sin inicializar (uso local)
int edad;
edad = 25; // Se inicializa después`}
        />
      ),
    },

    {
      title: 'Operaciones Matemáticas',
      content: (
        <CodeBlock
          code={`int a = 10;
int b = 3;

// Operadores básicos
int suma = a + b;        // 13
int resta = a - b;       // 7
int multiplicacion = a * b;  // 30
int division = a / b;    // 3 (división entera)
int residuo = a % b;     // 1 (módulo)

// Operadores compuestos
a += 5;  // a = a + 5 = 15
b -= 2;  // b = b - 2 = 1
a *= 2;  // a = a * 2 = 30
b /= 1;  // b = b / 1 = 1

// Incremento y decremento
int contador = 0;
contador++;  // contador = 1
contador--;  // contador = 0
++contador;  // prefijo: incrementa antes de usar
contador++;  // sufijo: incrementa después de usar`}
        />
      ),
    },

    {
      title: 'Casting (Conversión de Tipos)',
      content: (
        <CodeBlock
          code={`// Conversión automática (widening)
int numero = 100;
double decimal = numero;  // Se convierte automáticamente a 100.0

// Conversión explícita (narrowing) - Requiere casting
double valor = 3.14;
int entero = (int) valor;  // Se convierte a 3 (pierde decimales)

// Conversión a String
int edad = 25;
String texto = String.valueOf(edad);  // "25"
String texto2 = "" + edad;             // "25" (concatenación)

// Conversión desde String
String numeroTexto = "100";
int numero2 = Integer.parseInt(numeroTexto);  // 100
double decimal2 = Double.parseDouble("3.14"); // 3.14`}
        />
      ),
    },
  ];

  const summary = `Los tipos primitivos son la base de Java. Recuerda:

• Enteros: byte, short, int, long (para números sin decimales)
• Decimales: float, double (para números con decimales)
• Booleano: boolean (true/false)
• Carácter: char (un único carácter)

Usa int por defecto para números enteros y double para números con decimales. String no es primitivo, es una clase de Java.`;

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