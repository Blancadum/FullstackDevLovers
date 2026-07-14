import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonStrings() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔤',
      title: 'String',
      definition: 'Secuencia de caracteres. Es una clase, no un tipo primitivo.',
      example: 'String nombre = "Juan";',
    },
    {
      icon: '📝',
      title: 'Inmutable',
      definition: 'No se puede cambiar una vez creado. Se crea uno nuevo con cada modificación.',
      example: 'String s = "Java"; s = s + " es genial";',
    },
    {
      icon: '🔗',
      title: 'Concatenación',
      definition: 'Unir dos o más strings usando + o concat().',
      example: '"Hola " + "Mundo" → "Hola Mundo"',
    },
  ];

  const exercises = [
    {
      title: 'Obtener información del string',
      description: 'Crea un string y extrae: longitud, carácter en posición 0, y último carácter.',
      solution: `String texto = "Java";

int longitud = texto.length();           // 4
char primera = texto.charAt(0);          // 'J'
char ultima = texto.charAt(texto.length() - 1); // 'a'

System.out.println("Longitud: " + longitud);
System.out.println("Primera: " + primera);
System.out.println("Última: " + ultima);`,
    },
    {
      title: 'Manipular strings',
      description: 'Convierte un string a mayúsculas, minúsculas, y reemplaza una palabra.',
      solution: `String frase = "Hola Mundo de Java";

String mayuscula = frase.toUpperCase();      // HOLA MUNDO DE JAVA
String minuscula = frase.toLowerCase();      // hola mundo de java
String reemplazado = frase.replace("Java", "Python"); // Hola Mundo de Python

System.out.println(mayuscula);
System.out.println(minuscula);
System.out.println(reemplazado);`,
    },
  ];

  const keyPoints = [
    'String es una clase, no un tipo primitivo',
    'Los strings son inmutables (no se pueden cambiar)',
    'Usa + para concatenar strings',
    'length() devuelve la cantidad de caracteres',
    'charAt(índice) obtiene un carácter por posición',
    'substring(inicio, fin) extrae parte del string',
    'toUpperCase() y toLowerCase() cambian mayúsculas/minúsculas',
    'replace() reemplaza caracteres o palabras',
    'equals() compara dos strings (¡NO uses ==)',
    'split() divide un string en un array',
  ];

  const sections = [
    {
      title: '¿Qué es un String?',
      content: (
        <>
          <p>
            Un <strong>String</strong> es una secuencia de caracteres (texto). Es una de las clases más
            usadas en Java. A diferencia de los tipos primitivos, String es un objeto y tiene métodos
            integrados para manipular texto.
          </p>
          <InfoBox type="important" title="Importante">
            Los strings son INMUTABLES. Cuando "modificas" un string, en realidad creas uno nuevo.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Crear y Declarar Strings',
      content: (
        <CodeBlock
          code={`// Forma 1: Literal (string pool)
String nombre = "Juan";

// Forma 2: Usando new (siempre crea nuevo objeto)
String nombre2 = new String("Juan");

// Forma 3: Conversión de otros tipos
int numero = 42;
String numTexto = String.valueOf(numero);  // "42"
String numTexto2 = "" + numero;             // "42" (concatenación)

// Múltiples strings
String saludo = "Hola";
String mundo = "Mundo";
String mensaje = saludo + " " + mundo;     // "Hola Mundo"`}
        />
      ),
    },

    {
      title: 'Métodos Principales',
      content: (
        <Table
          headers={['Método', 'Descripción', 'Ejemplo']}
          rows={[
            ['length()', 'Cantidad de caracteres', '"Java".length() → 4'],
            ['charAt(i)', 'Carácter en posición i', '"Java".charAt(0) → "J"'],
            ['substring(i, f)', 'Extrae substring', '"Java".substring(0,2) → "Ja"'],
            ['toUpperCase()', 'Convierte a mayúsculas', '"java".toUpperCase() → "JAVA"'],
            ['toLowerCase()', 'Convierte a minúsculas', '"JAVA".toLowerCase() → "java"'],
            ['trim()', 'Elimina espacios', '" Java ".trim() → "Java"'],
            ['replace(a, b)', 'Reemplaza caracteres', '"Jaba".replace("a","v") → "Java"'],
            ['split(sep)', 'Divide en array', '"a,b,c".split(",") → ["a","b","c"]'],
          ]}
        />
      ),
    },

    {
      title: 'Concatenación de Strings',
      content: (
        <>
          <CodeBlock
            code={`// Forma 1: Operador +
String saludo = "Hola" + " " + "Mundo"; // "Hola Mundo"

// Forma 2: Método concat()
String s1 = "Hola";
String s2 = "Mundo";
String resultado = s1.concat(" ").concat(s2); // "Hola Mundo"

// Forma 3: StringBuilder (para muchas concatenaciones)
StringBuilder sb = new StringBuilder();
sb.append("Hola");
sb.append(" ");
sb.append("Mundo");
String resultado2 = sb.toString(); // "Hola Mundo"

// Forma 4: String.format()
String formatted = String.format("Hola %s, tienes %d años", "Juan", 25);`}
          />
          <InfoBox type="tip">
            Para concatenaciones en bucles, usa StringBuilder. El operador + crea muchos strings temporales.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Comparación de Strings',
      content: (
        <>
          <CodeBlock
            code={`String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

// ❌ INCORRECTO: Compara referencias, no contenido
if (s1 == s2) { // true (mismo objeto)
    System.out.println("Son iguales");
}

if (s1 == s3) { // false (objetos diferentes)
    System.out.println("Son iguales");
}

// ✅ CORRECTO: Compara contenido
if (s1.equals(s2)) { // true
    System.out.println("Los strings son iguales");
}

if (s1.equals(s3)) { // true
    System.out.println("Los strings son iguales");
}

// Comparación sin mayúsculas/minúsculas
if (s1.equalsIgnoreCase("JAVA")) { // true
    System.out.println("Son iguales (ignorando mayúsculas)");
}`}
          />
          <InfoBox type="error" title="¡IMPORTANTE!">
            Siempre usa equals() para comparar strings, NUNCA ==
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Búsqueda en Strings',
      content: (
        <CodeBlock
          code={`String texto = "Hola Mundo de Java";

// Buscar posición de un carácter
int pos1 = texto.indexOf("M");        // 5
int pos2 = texto.indexOf("a");        // 1 (primera "a")
int pos3 = texto.lastIndexOf("a");    // 17 (última "a")

// ¿Contiene?
if (texto.contains("Mundo")) {
    System.out.println("Sí, contiene 'Mundo'");
}

// ¿Empieza o termina con?
if (texto.startsWith("Hola")) {
    System.out.println("Empieza con 'Hola'");
}

if (texto.endsWith("Java")) {
    System.out.println("Termina con 'Java'");
}`}
        />
      ),
    },
  ];

  const summary = `Los Strings son fundamentales en Java:

• String es una clase, no un tipo primitivo
• Los strings son inmutables (no se pueden cambiar)
• Usa + o StringBuilder para concatenar
• Siempre usa equals() para comparar, NUNCA ==
• length() obtiene la cantidad de caracteres
• charAt() obtiene un carácter por posición
• substring() extrae parte del string
• Métodos útiles: toUpperCase, toLowerCase, trim, replace, split
• StringBuilder es mejor para muchas concatenaciones en bucles`;

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