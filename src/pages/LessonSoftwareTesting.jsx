import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSoftwareTesting() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    'Pruebas unitarias: aisladas, rápidas, escritas por programadores. Framework: JUnit, TestNG',
    'Pruebas de integración: verifican interfaces entre módulos. Más lentas que unitarias',
    'Pruebas funcionales/de sistema: caja negra, verifican requisitos. Escritas por verificadores',
    'Pruebas de aceptación: cliente valida el sistema completo antes de producción',
    'Pruebas de carga: verifican rendimiento con datos reales en entorno similar al real',
    'Caja blanca: conoces código interno, diseñas caminos independientes, complejidad ciclomática',
    'Caja negra: desconoces código, basadas en especificación, clases de equivalencia, valores límite',
    'Clases de equivalencia: dividir entradas en grupos que se comportan igual. Reducen casos mantienen cobertura',
    'Valores límite: probar justo en los extremos válidos/inválidos (-1, 0, N, N+1 para rango 0..N)',
    'Complejidad ciclomática: número de caminos independientes (decisiones). Diseña casos para cada camino',
    'JUnit en Java: @Test marca método de prueba, assertEquals(esperado, actual), assertTrue/assertFalse',
    'TDD (Test-Driven Development): escribir pruebas primero, luego código que las pasa',
  ];

  const exercises = [
    {
      title: 'Diseñar casos de prueba por clases de equivalencia',
      description: 'Método validaEdad(int edad): retorna true si 0 ≤ edad ≤ 150, false si no. Diseña clases de equivalencia y casos de prueba.',
      difficulty: 'Intermedia',
      hint: 'Clases: edad negativa (inválida), edad válida 0-150, edad > 150. Valores límite: -1, 0, 150, 151.',
      solution: `CLASES DE EQUIVALENCIA:
1. Edad < 0 (inválida)
2. 0 ≤ Edad ≤ 150 (válida)
3. Edad > 150 (inválida)

CASOS DE PRUEBA:
- validaEdad(-1) → false
- validaEdad(0) → true (valor límite inferior)
- validaEdad(75) → true (valor válido medio)
- validaEdad(150) → true (valor límite superior)
- validaEdad(151) → false

PRUEBAS EN JUNIT:
@Test
public void testEdadNegativa() { assertFalse(validaEdad(-1)); }
@Test
public void testEdadLimiteInferior() { assertTrue(validaEdad(0)); }
@Test
public void testEdadValida() { assertTrue(validaEdad(75)); }
@Test
public void testEdadLimiteSuperior() { assertTrue(validaEdad(150)); }
@Test
public void testEdadSuperior() { assertFalse(validaEdad(151)); }`,
    },
    {
      title: 'Escribir prueba unitaria en JUnit',
      description: 'Escribe una prueba unitaria en JUnit para un método suma(a, b). Prueba: suma(2, 3) = 5, suma(-1, 1) = 0, suma(0, 0) = 0.',
      difficulty: 'Fácil',
      hint: 'Usa @Test, assertEquals(esperado, actual), y múltiples @Test para cada caso.',
      solution: `public class CalculadoraTest {
  private Calculadora calc;

  @Before
  public void setUp() {
    calc = new Calculadora();
  }

  @Test
  public void testSumaPositivos() {
    assertEquals(5, calc.suma(2, 3));
  }

  @Test
  public void testSumaNegativoConPositivo() {
    assertEquals(0, calc.suma(-1, 1));
  }

  @Test
  public void testSumaCeros() {
    assertEquals(0, calc.suma(0, 0));
  }
}

// Ejecutar: clic derecho en clase → Run As → JUnit Test
// Los 3 test deben passar (verde)`,
    },
  ];

  const sections = [
    {
      title: '¿Por qué Probar?',
      level: 1,
      content: [
        'Antes de desplegar una aplicación, es crítico <strong>verificar que funciona correctamente</strong>. Las <strong>pruebas de software</strong> son el proceso de validar que el sistema cumple requisitos, funciona con datos válidos, maneja errores, tiene rendimiento aceptable y es seguro.',
        <InfoBox key="info1" type="info">
          <strong>Realidad:</strong> Es matemáticamente imposible probar que NO hay bugs (la cantidad de casos posibles es infinita). El objetivo es <strong>aumentar confianza</strong> mediante pruebas bien diseñadas.
        </InfoBox>,
      ],
    },
    {
      title: 'Caja Blanca vs Caja Negra',
      level: 1,
      content: [
        '<h3>Caja Blanca (White Box / Glass Box)</h3>',
        'Se diseñan <strong>conociendo la estructura interna del código</strong> (lógica, condiciones, bucles). El tester ve el código fuente y diseña casos para ejecutar cada rama.',
        '<h3>Caja Negra (Black Box)</h3>',
        'Se diseñan <strong>sin conocer la implementación interna</strong>, solo a partir de <strong>especificación / requisitos</strong>. El tester actúa como usuario final.',
      ],
    },
    {
      title: 'Tipos de Pruebas',
      level: 2,
      content: [
        <CodeBlock
          key="code1"
          code={`UNITARIAS        → Durante desarrollo (temprano)  → Métodos aislados
INTEGRACIÓN      → Durante desarrollo (después)    → Interfaces entre módulos
FUNCIONALES      → Durante desarrollo             → Requisitos funcionales
CARGA            → Antes aceptación                → Rendimiento, integridad
ACEPTACIÓN       → Antes producción (al final)   → Sistema completo
SISTEMA          → Tras aceptación               → Integración en env real
REGRESIÓN        → Tras cambios                  → Detectar nuevos bugs`}
        />,
      ],
    },
    {
      title: 'Diseño de Casos de Prueba: Clases de Equivalencia',
      level: 2,
      content: [
        'Es <strong>imposible probar todos los valores posibles</strong> (infinitos). La solución es <strong>agrupar entradas en clases que se comportan igual</strong>.',
        <CodeBlock
          key="code2"
          code={`Especificación: "Método valida temperatura. Rango válido: 0-100°C"

CLASE 1: Temperatura < 0
  - Comportamiento esperado: rechaza (false)
  - Ejemplo: -1

CLASE 2: 0 ≤ Temperatura ≤ 100
  - Comportamiento esperado: acepta (true)
  - Ejemplo: 50 (valor medio)

CLASE 3: Temperatura > 100
  - Comportamiento esperado: rechaza (false)
  - Ejemplo: 101

CASOS DE PRUEBA COMPLETOS:
- validaTemp(-1)   → false  (justo fuera límite)
- validaTemp(0)    → true   (límite inferior)
- validaTemp(50)   → true   (valor medio válido)
- validaTemp(100)  → true   (límite superior)
- validaTemp(101)  → false  (justo fuera límite)`}
        />,
      ],
    },
    {
      title: 'JUnit: Framework de Pruebas en Java',
      level: 2,
      content: [
        '<strong>JUnit</strong> es el framework estándar para pruebas unitarias en Java.',
        '<h3>Estructura básica de una prueba JUnit</h3>',
        <CodeBlock
          key="code3"
          code={`import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculadoraTest {
    private Calculadora calc;

    @Before
    public void setUp() {
        // Se ejecuta ANTES de cada @Test
        calc = new Calculadora();
    }

    @Test
    public void testSuma() {
        // Arrange (preparar)
        int esperado = 5;

        // Act (actuar)
        int resultado = calc.suma(2, 3);

        // Assert (verificar)
        assertEquals(esperado, resultado);
    }
}`}
        />,
      ],
    },
  ];

  const summary = 'Las pruebas de software son críticas para garantizar calidad. Usa clases de equivalencia y valores límite para diseñar casos eficientes. JUnit es el estándar de Java.';

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
