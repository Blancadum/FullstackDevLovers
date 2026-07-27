import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTestingUnitario() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Testing Unitario"
        description="Pruebas aisladas de la unidad más pequeña de código, escritas por el propio equipo de desarrollo"
        breadcrumbs={breadcrumbs}
        seoTitle="Testing Unitario - Pruebas Aisladas de Código"
        seoDescription="Qué es el testing unitario, cómo aislar dependencias y frameworks como JUnit o Mockito."
        seoKeywords="testing unitario, unit testing, junit, mockito, tdd"
        url="https://fullstackdevlovers.com/metodologias/testing/unitario"
      >
        <p>
          Vas a aprender qué es un test unitario, cómo se estructura con el patrón
          Arrange-Act-Assert y cómo escribirlo con JUnit. Es la primera pieza del
          testing: la más pequeña, la más rápida y la que te da confianza para
          refactorizar sin miedo a romper nada.
        </p>

        <LessonSection title="¿Qué es el testing unitario?" level={1}>
          <p>
            Un <strong>test unitario</strong> comprueba el comportamiento de la
            unidad de código más pequeña posible: normalmente un método de una
            clase. Se ejecuta <strong>en aislamiento</strong>, sin base de datos,
            sin red y sin depender de otras clases reales, y lo escribe el propio
            equipo de desarrollo, no un departamento de calidad aparte.
          </p>
          <p>
            Su objetivo no es demostrar que el sistema entero funciona (para eso
            están otros tipos de pruebas), sino detectar cuanto antes si un método
            deja de comportarse como se espera cuando cambias el código.
          </p>
          <InfoBox type="info" title="La pirámide de testing">
            Los tests unitarios forman la <strong>base</strong> de la pirámide de
            testing: son los más numerosos, los más rápidos de ejecutar y los más
            baratos de mantener. Por encima van los de integración y, en la cima,
            los de aceptación, que veremos en las próximas lecciones.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Arrange-Act-Assert: la anatomía de un test" level={1}>
          <p>
            Casi todos los tests unitarios siguen la misma estructura de tres
            pasos, conocida como <strong>AAA</strong>:
          </p>
          <ul>
            <li><strong>Arrange (preparar):</strong> se crean los objetos y datos necesarios para la prueba.</li>
            <li><strong>Act (actuar):</strong> se llama al método que se quiere probar.</li>
            <li><strong>Assert (verificar):</strong> se comprueba que el resultado es el esperado.</li>
          </ul>
          <p>
            Seguir siempre este orden hace que los tests sean fáciles de leer,
            incluso para alguien que no los ha escrito.
          </p>
        </LessonSection>

        <LessonSection title="JUnit: el framework de pruebas de Java" level={1}>
          <p>
            <strong>JUnit</strong> es el framework estándar para escribir y
            ejecutar tests en Java. Con la anotación <code>@Test</code> marcas un
            método como caso de prueba, y con los métodos <code>assert...</code>
            comparas el resultado obtenido con el esperado.
          </p>
          <ul>
            <li><code>@Test</code>: marca un método como caso de prueba.</li>
            <li><code>@BeforeEach</code>: se ejecuta antes de cada test (para preparar el objeto a probar).</li>
            <li><code>@DisplayName</code>: da un nombre descriptivo al test en los informes.</li>
            <li><code>assertEquals(esperado, actual)</code>: compara dos valores.</li>
            <li><code>assertTrue(condicion)</code> / <code>assertFalse(condicion)</code>: comprueban booleanos.</li>
            <li><code>assertThrows(Excepcion.class, () -&gt; { ... })</code>: comprueba que se lanza una excepción.</li>
          </ul>
          <CodeBlock
            language="java"
            title="Calculadora.java"
            code={`public class Calculadora {

    public int suma(int a, int b) {
        return a + b;
    }

    public int dividir(int dividendo, int divisor) {
        if (divisor == 0) {
            throw new IllegalArgumentException("No se puede dividir entre 0");
        }
        return dividendo / divisor;
    }
}`}
          />
          <CodeBlock
            language="java"
            title="CalculadoraTest.java"
            code={`import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculadoraTest {

    private Calculadora calculadora;

    @BeforeEach
    void setUp() {
        // Arrange: se ejecuta antes de cada test
        calculadora = new Calculadora();
    }

    @Test
    @DisplayName("Suma dos números positivos correctamente")
    void debeSumarDosNumeros() {
        // Act
        int resultado = calculadora.suma(2, 3);

        // Assert
        assertEquals(5, resultado);
    }

    @Test
    @DisplayName("Lanza excepción al dividir entre cero")
    void debeLanzarExcepcionAlDividirEntreCero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculadora.dividir(10, 0);
        });
    }
}`}
          />
        </LessonSection>

        <LessonSection title="Aislar dependencias: los mocks" level={1}>
          <p>
            Un test unitario deja de ser rápido y fiable en cuanto depende de una
            base de datos real, una API externa o el sistema de ficheros. Cuando
            una clase necesita colaboradores de ese tipo, se sustituyen por{' '}
            <strong>mocks</strong>: objetos simulados que se comportan como
            indiques tú, sin tocar nada real.
          </p>
          <InfoBox type="tip">
            El framework más habitual para crear mocks en Java es{' '}
            <strong>Mockito</strong>. Lo veremos en detalle en el módulo de Spring
            Boot, donde se combina con JUnit para probar servicios que dependen de
            repositorios y otros componentes.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Un test unitario prueba una unidad de código pequeña (normalmente un método) en aislamiento.</li>
            <li>Estructura AAA: Arrange (preparar), Act (actuar), Assert (verificar).</li>
            <li>JUnit es el framework estándar en Java: <code>@Test</code>, <code>@BeforeEach</code>, <code>assertEquals</code>, <code>assertThrows</code>...</li>
            <li>Los tests unitarios son la base de la pirámide de testing: rápidos, numerosos y baratos de mantener.</li>
            <li>Cuando hay dependencias externas, se aíslan con mocks (Mockito).</li>
            <li>Siguiente parada: el testing de integración, donde sí dejamos que varias piezas colaboren entre sí.</li>
          </ul>
        </LessonSection>
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
