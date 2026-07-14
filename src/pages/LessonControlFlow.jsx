import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonControlFlow() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🔀',
      title: 'Condicional',
      definition: 'Estructura que ejecuta código si una condición es verdadera',
      example: 'if-else, switch',
    },
    {
      icon: '🔁',
      title: 'Bucle',
      definition: 'Estructura que repite código múltiples veces mientras una condición sea verdadera',
      example: 'for, while, do-while',
    },
    {
      icon: '⚡',
      title: 'Operador Ternario',
      definition: 'Forma compacta de if-else: condición ? valor1 : valor2',
      example: 'edad >= 18 ? "Adulto" : "Menor"',
    },
    {
      icon: '🎯',
      title: 'Switch',
      definition: 'Estructura para múltiples casos discretos',
      example: 'Más limpio que if-else-if para muchas opciones',
    },
  ];

  const exercises = [
    {
      title: 'Determinar si es mayor de edad',
      description: 'Escribe un programa que lea una edad y diga si es mayor de 18.',
      solution: `int edad = 20;

if (edad >= 18) {
    System.out.println("Eres mayor de edad");
} else {
    System.out.println("Eres menor de edad");
}`,
    },
    {
      title: 'Calificar una nota',
      description: 'Lee una nota (0-100) y muestra la calificación (A, B, C, D, F).',
      solution: `int nota = 85;
String calificacion;

if (nota >= 90) {
    calificacion = "A";
} else if (nota >= 80) {
    calificacion = "B";
} else if (nota >= 70) {
    calificacion = "C";
} else if (nota >= 60) {
    calificacion = "D";
} else {
    calificacion = "F";
}

System.out.println("Calificación: " + calificacion);

// O con switch (versión Java 14+):
calificacion = switch (nota / 10) {
    case 10, 9 -> "A";
    case 8 -> "B";
    case 7 -> "C";
    case 6 -> "D";
    default -> "F";
};`,
    },
  ];

  const keyPoints = [
    'if-else: Ejecuta código si una condición es verdadera',
    'else if: Comprueba múltiples condiciones en orden',
    'switch: Mejor para muchas opciones discretas',
    'Operadores lógicos: && (AND), || (OR), ! (NOT)',
    'Operador ternario: condición ? valor1 : valor2',
    'for: Repite un código un número fijo de veces',
    'while: Repite mientras la condición sea verdadera',
    'do-while: Ejecuta al menos una vez, luego comprueba',
    'break: Sale del bucle o switch',
    'continue: Salta a la siguiente iteración',
  ];

  const sections = [
    {
      title: '¿Qué es el Control de Flujo?',
      content: (
        <p>
          El control de flujo permite que tu programa tome decisiones (if-else) y repita código
          (bucles). Son las herramientas más básicas de la programación.
        </p>
      ),
    },

    {
      title: 'Sentencia if-else',
      content: (
        <>
          <CodeBlock
            code={`int edad = 20;

if (edad >= 18) {
    System.out.println("Eres mayor");
} else {
    System.out.println("Eres menor");
}

// if-else if-else (múltiples condiciones)
if (edad < 13) {
    System.out.println("Eres niño");
} else if (edad < 18) {
    System.out.println("Eres adolescente");
} else {
    System.out.println("Eres adulto");
}`}
          />

          <InfoBox type="info">
            <strong>Tip:</strong> Las llaves {} son obligatorias si hay más de una línea. Con una línea
            son opcionales.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Operadores de Comparación',
      content: (
        <Table
          headers={['Operador', 'Nombre', 'Ejemplo']}
          rows={[
            ['==', 'Igual a', '5 == 5 → true'],
            ['!=', 'No igual a', '5 != 3 → true'],
            ['>', 'Mayor que', '5 > 3 → true'],
            ['<', 'Menor que', '3 < 5 → true'],
            ['>=', 'Mayor o igual', '5 >= 5 → true'],
            ['<=', 'Menor o igual', '3 <= 5 → true'],
          ]}
        />
      ),
    },

    {
      title: 'Operadores Lógicos',
      content: (
        <CodeBlock
          code={`int edad = 25;
boolean tieneCarnet = true;

// AND (&&) - Ambas condiciones deben ser verdaderas
if (edad >= 18 && tieneCarnet) {
    System.out.println("Puede conducir");
}

// OR (||) - Al menos una condición debe ser verdadera
boolean esFinSemana = true;
boolean esVacaciones = false;
if (esFinSemana || esVacaciones) {
    System.out.println("Puedes descansar");
}

// NOT (!) - Invierte el resultado
if (!esVacaciones) {
    System.out.println("Hay que trabajar");
}`}
        />
      ),
    },

    {
      title: 'Sentencia switch',
      content: (
        <>
          <CodeBlock
            code={`int dia = 3;
String nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    default:
        nombreDia = "Día desconocido";
}

System.out.println(nombreDia); // Miércoles

// Switch con múltiples casos (Java 14+)
String tipo = switch (dia) {
    case 1, 2, 3, 4, 5 -> "Laborable";
    case 6, 7 -> "Fin de semana";
    default -> "Desconocido";
};`}
          />

          <InfoBox type="warning">
            <strong>Importante:</strong> No olvides el break; al final de cada case, o el código
            continuará al siguiente case (fall-through).
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Operador Ternario',
      content: (
        <>
          <p>
            El operador ternario es una forma compacta de if-else para una sola línea:
          </p>
          <CodeBlock
            code={`// Sintaxis: condición ? valor_si_verdadero : valor_si_falso
int edad = 20;
String tipo = (edad >= 18) ? "Adulto" : "Menor";
System.out.println(tipo); // Adulto

// Anidado (no recomendado si es muy complejo)
int nota = 85;
String resultado = (nota >= 90) ? "A" : (nota >= 80) ? "B" : "C";`}
          />
        </>
      ),
    },

    {
      title: 'Bucles - for',
      content: (
        <CodeBlock
          code={`// for clásico
for (int i = 0; i < 5; i++) {
    System.out.println("Iteración " + i);
}

// for-each (para colecciones y arrays)
int[] numeros = {1, 2, 3, 4, 5};
for (int numero : numeros) {
    System.out.println(numero);
}`}
        />
      ),
    },

    {
      title: 'Bucles - while y do-while',
      content: (
        <CodeBlock
          code={`// while
int contador = 0;
while (contador < 5) {
    System.out.println("Contador: " + contador);
    contador++;
}

// do-while (se ejecuta al menos una vez)
int x = 0;
do {
    System.out.println("x = " + x);
    x++;
} while (x < 3);

// Bucle infinito (¡cuidado!)
// while (true) {
//     System.out.println("Infinito!");
// }`}
        />
      ),
    },

    {
      title: 'Control de Bucles',
      content: (
        <CodeBlock
          code={`// break: Sale del bucle
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Sale cuando i es 5
    }
    System.out.println(i);
}

// continue: Salta a la siguiente iteración
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Salta pares
    }
    System.out.println(i);  // Imprime solo impares
}`}
        />
      ),
    },

    {
      title: 'Comparación: Diferentes Enfoques',
      content: (
        <Table
          headers={['Necesidad', 'Enfoque Antiguo', 'Enfoque Moderno']}
          rows={[
            ['Comparación simple', 'if (condición) { ... }', 'condición ? valor1 : valor2 (ternario)'],
            ['Múltiples opciones', 'if-else if anidados complejos', 'switch para casos discretos'],
            ['Múltiples condiciones', 'Comprobar cada una manualmente', 'Usar operadores lógicos: && || !'],
            ['Iterar colecciones', 'for tradicional con índice', 'for-each o streams'],
          ]}
        />
      ),
    },
  ];

  const summary = `Control de Flujo es esencial para programar:

• if-else: Toma decisiones basadas en condiciones
• switch: Mejor para múltiples casos discretos
• Operadores: ==, !=, >, <, >=, <=
• Lógicos: && (AND), || (OR), ! (NOT)
• for: Repite un número fijo de veces
• while: Repite mientras condición sea verdadera
• do-while: Ejecuta al menos una vez
• break: Sale del bucle o switch
• continue: Salta a la siguiente iteración
• Ternario: condición ? valor1 : valor2
• Nidación: múltiples if/bucles dentro de otros (pero cuidado con la complejidad)`;

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