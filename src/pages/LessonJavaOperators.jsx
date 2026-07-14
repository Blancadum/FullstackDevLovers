import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonJavaOperators() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '➕',
      title: 'Operadores Aritméticos',
      definition: 'Realizan cálculos matemáticos: +, -, *, /, %',
      example: 'int suma = 5 + 3; // 8'
    },
    {
      icon: '⚖️',
      title: 'Operadores Lógicos',
      definition: 'Combinan condiciones booleanas: &&, ||, !',
      example: 'if (edad > 18 && tiene_licencia)'
    },
    {
      icon: '🔀',
      title: 'Operadores Bitwise',
      definition: 'Operan a nivel de bits: &, |, ^, ~, <<, >>',
      example: 'int resultado = 5 & 3; // 1'
    }
  ];

  const exercises = [
    {
      title: 'Operaciones aritméticas',
      description: 'Calcula usando todos los operadores aritméticos',
      solution: `int a = 10, b = 3;

System.out.println(a + b);      // 13 (suma)
System.out.println(a - b);      // 7  (resta)
System.out.println(a * b);      // 30 (multiplicación)
System.out.println(a / b);      // 3  (división entera)
System.out.println(a % b);      // 1  (módulo/resto)
System.out.println(a++);        // 10 (post-incremento)
System.out.println(++a);        // 12 (pre-incremento)`
    },
    {
      title: 'Operadores lógicos',
      description: 'Combina condiciones con &&, ||, !',
      solution: `boolean a = true, b = false;

System.out.println(a && b);     // false (ambas deben ser true)
System.out.println(a || b);     // true  (al menos una es true)
System.out.println(!a);         // false (negación)

// Ejemplo real
int edad = 25;
boolean tiene_licencia = true;

if (edad >= 18 && tiene_licencia) {
  System.out.println("Puede manejar");
}`
    }
  ];

  const keyPoints = [
    'Operadores aritméticos: +, -, *, /, %',
    'División entera retorna int, no decimal',
    'Módulo (%) retorna el resto',
    '++/-- incrementan/decrementan',
    'Pre-incremento (++i) vs post-incremento (i++)',
    'Operadores lógicos: &&, ||, !',
    '&& requiere ambas condiciones true',
    '|| requiere al menos una true',
    'Operadores de comparación: ==, !=, <, >, <=, >=',
    'Operadores bitwise para manipular bits'
  ];

  const sections = [
    {
      title: '¿Qué son los Operadores?',
      content: (
        <p>
          Los operadores son símbolos que realizan operaciones en variables y valores.
          Java tiene varios tipos: aritméticos, lógicos, de comparación, de asignación, y bitwise.
        </p>
      )
    },
    {
      title: 'Operadores Aritméticos',
      content: (
        <>
          <Table
            headers={['Operador', 'Nombre', 'Ejemplo', 'Resultado']}
            rows={[
              ['+', 'Suma', '10 + 5', '15'],
              ['-', 'Resta', '10 - 5', '5'],
              ['*', 'Multiplicación', '10 * 5', '50'],
              ['/', 'División', '10 / 5', '2'],
              ['%', 'Módulo (resto)', '10 % 3', '1'],
              ['++', 'Incremento', 'i++', 'i + 1'],
              ['--', 'Decremento', 'i--', 'i - 1'],
            ]}
          />
          <CodeBlock
            code={`int a = 10, b = 3;

// Suma, resta, multiplicación, división
System.out.println(a + b);      // 13
System.out.println(a - b);      // 7
System.out.println(a * b);      // 30
System.out.println(a / b);      // 3 (división entera, no 3.33)

// Módulo: resto de la división
System.out.println(a % b);      // 1

// Incremento y decremento
int x = 5;
System.out.println(x++);        // 5 (usa, luego incrementa)
System.out.println(x);          // 6
System.out.println(++x);        // 7 (incrementa, luego usa)`}
          />
        </>
      )
    },
    {
      title: 'Operadores de Comparación',
      content: (
        <>
          <Table
            headers={['Operador', 'Descripción', 'Ejemplo']}
            rows={[
              ['==', 'Igual a', '5 == 5 → true'],
              ['!=', 'Diferente de', '5 != 3 → true'],
              ['<', 'Menor que', '3 < 5 → true'],
              ['>', 'Mayor que', '5 > 3 → true'],
              ['<=', 'Menor o igual', '5 <= 5 → true'],
              ['>=', 'Mayor o igual', '5 >= 3 → true'],
            ]}
          />
          <CodeBlock
            code={`int a = 5, b = 3;

System.out.println(a == b);     // false
System.out.println(a != b);     // true
System.out.println(a > b);      // true
System.out.println(a < b);      // false
System.out.println(a >= 5);     // true
System.out.println(b <= 3);     // true`}
          />
        </>
      )
    },
    {
      title: 'Operadores Lógicos',
      content: (
        <>
          <Table
            headers={['Operador', 'Nombre', 'Descripción']}
            rows={[
              ['&&', 'AND lógico', 'Ambas condiciones deben ser true'],
              ['||', 'OR lógico', 'Al menos una condición debe ser true'],
              ['!', 'NOT lógico', 'Invierte el valor booleano'],
            ]}
          />
          <CodeBlock
            code={`boolean a = true, b = false;

// AND (&&): ambas deben ser true
System.out.println(true && true);   // true
System.out.println(true && false);  // false
System.out.println(false && false); // false

// OR (||): al menos una es true
System.out.println(true || false);  // true
System.out.println(false || false); // false

// NOT (!): invierte
System.out.println(!true);          // false
System.out.println(!false);         // true

// Ejemplo real
int edad = 25;
boolean tiene_licencia = true;
boolean infracciones = false;

if (edad >= 18 && tiene_licencia && !infracciones) {
  System.out.println("Puede manejar");
}`}
          />
          <InfoBox type="info">
            && y || usan "short-circuit": si el resultado es claro, no evalúan el resto.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Operadores de Asignación',
      content: (
        <>
          <CodeBlock
            code={`int x = 10;

x += 5;     // x = x + 5  → 15
x -= 3;     // x = x - 3  → 12
x *= 2;     // x = x * 2  → 24
x /= 4;     // x = x / 4  → 6
x %= 2;     // x = x % 2  → 0

// Asignación condicional (ternario)
int edad = 25;
String tipo = (edad >= 18) ? "Adulto" : "Menor";
System.out.println(tipo);  // "Adulto"`}
          />
        </>
      )
    },
    {
      title: 'Operadores Bitwise',
      content: (
        <>
          <CodeBlock
            code={`int a = 5;    // 0101 en binario
int b = 3;    // 0011 en binario

// AND bitwise (&)
System.out.println(a & b);   // 1 (0001)

// OR bitwise (|)
System.out.println(a | b);   // 7 (0111)

// XOR bitwise (^)
System.out.println(a ^ b);   // 6 (0110)

// NOT bitwise (~)
System.out.println(~a);      // -6

// Left shift (<<)
System.out.println(a << 1);  // 10 (multiplica por 2)

// Right shift (>>)
System.out.println(a >> 1);  // 2  (divide por 2)

// Ejemplo: verificar si bit está activo
int flags = 5;  // 0101
if ((flags & 4) != 0) {  // ¿Está activo el bit 4?
  System.out.println("Bit activo");
}`}
          />
        </>
      )
    },
    {
      title: 'Precedencia de Operadores',
      content: (
        <>
          <CodeBlock
            code={`// Precedencia (de mayor a menor):
// 1. Postfijo: x++, x--
// 2. Prefijo: ++x, --x, +, -, !
// 3. Multiplicativo: *, /, %
// 4. Aditivo: +, -
// 5. Relacional: <, >, <=, >=
// 6. Igualdad: ==, !=
// 7. AND lógico: &&
// 8. OR lógico: ||
// 9. Ternario: ? :
// 10. Asignación: =, +=, -=, etc

// Ejemplos:
int a = 2 + 3 * 4;  // 14, no 20 (multiplicación primero)
int b = (2 + 3) * 4; // 20 (paréntesis primero)

boolean resultado = true && false || true;  // true
// (true && false) || true → false || true → true`}
          />
          <InfoBox type="tip">
            Usa paréntesis para claridad incluso si no son necesarios.
          </InfoBox>
        </>
      )
    }
  ];

  const summary = `Los operadores realizan operaciones en variables:

• Aritméticos: +, -, *, /, %
• Comparación: ==, !=, <, >, <=, >=
• Lógicos: &&, ||, !
• Asignación: =, +=, -=, etc
• Ternario: condición ? verdadero : falso
• Bitwise: &, |, ^, ~, <<, >>
• Pre vs post incremento: ++i vs i++
• && tiene precedencia sobre ||
• Paréntesis mejoran legibilidad`;

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