import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTestingAceptacion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Testing de Aceptación"
        description="Pruebas que validan que el sistema cumple los requisitos del negocio antes de producción"
        breadcrumbs={breadcrumbs}
        seoTitle="Testing de Aceptación - Validación de Requisitos"
        seoDescription="Qué es el testing de aceptación, quién lo realiza y cómo valida los requisitos del negocio."
        seoKeywords="testing de aceptación, acceptance testing, uat, pruebas de software"
        url="https://fullstackdevlovers.com/metodologias/testing/aceptacion"
      >
        <p>
          Cerramos el bloque de testing subiendo un escalón más en la
          pirámide: vas a aprender qué es el testing de aceptación, quién lo
          hace, cuándo se ejecuta y cómo se relaciona con los tests unitarios y
          de integración que ya conoces.
        </p>

        <LessonSection title="¿Qué es el testing de aceptación?" level={1}>
          <p>
            El <strong>testing de aceptación</strong> (o <em>UAT</em>, User
            Acceptance Testing) verifica que el <strong>sistema completo</strong>{' '}
            cumple los requisitos del negocio, tal y como los describió el
            cliente o el usuario final. Se ejecuta casi al final del ciclo de
            desarrollo, justo antes de pasar a producción.
          </p>
          <InfoBox type="info">
            La pregunta que responde este tipo de prueba no es "¿este método
            devuelve el valor correcto?" sino{' '}
            <strong>"¿este sistema resuelve el problema para el que se
            construyó?"</strong>.
          </InfoBox>
        </LessonSection>

        <LessonSection title="¿En qué se diferencia de unitario e integración?" level={1}>
          <ul>
            <li><strong>Unitario:</strong> prueba un método aislado. Lo escribe el equipo de desarrollo.</li>
            <li><strong>Integración:</strong> prueba que varios componentes colaboran bien entre sí. También lo escribe el equipo de desarrollo.</li>
            <li><strong>Aceptación:</strong> prueba el sistema completo desde fuera, como lo usaría una persona real. Suele validarlo el cliente, un equipo de QA o el propio Product Owner.</li>
          </ul>
          <p>
            Los tests de aceptación no se preocupan de cómo está implementado
            el código por dentro: les da igual si usas un <code>ArrayList</code>{' '}
            o una base de datos, mientras el sistema haga lo que el negocio
            necesita.
          </p>
        </LessonSection>

        <LessonSection title="Criterios de aceptación" level={1}>
          <p>
            Antes de poder probar algo hay que dejar por escrito qué significa
            "funciona correctamente" para esa funcionalidad. A eso se le llama{' '}
            <strong>criterios de aceptación</strong>: condiciones concretas y
            comprobables que una historia de usuario debe cumplir.
          </p>
          <CodeBlock
            language="text"
            title="Historia de usuario: Registro de pedido"
            code={`Como cliente de la tienda online
Quiero poder registrar un pedido con al menos un producto
Para poder comprarlo y recibirlo en mi dirección

CRITERIOS DE ACEPTACIÓN:
1. Un pedido debe tener al menos un producto (no se permiten pedidos vacíos).
2. El total del pedido debe ser la suma del precio de cada producto por su cantidad.
3. Al confirmar el pedido, el sistema debe generar un número de pedido único.
4. Si el stock de un producto es insuficiente, el pedido debe rechazarse con un mensaje claro.`}
          />
        </LessonSection>

        <LessonSection title="Automatizar un test de aceptación con JUnit" level={1}>
          <p>
            Aunque el testing de aceptación nació pensado para pruebas manuales
            realizadas por personas, hoy en día se automatiza siempre que es
            posible. Una forma sencilla de hacerlo, sin introducir herramientas
            nuevas, es escribir un test con JUnit que recorra el{' '}
            <strong>flujo completo</strong> descrito en la historia de usuario,
            en lugar de probar una sola clase.
          </p>
          <CodeBlock
            language="java"
            title="RegistroPedidoAceptacionTest.java"
            code={`import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RegistroPedidoAceptacionTest {

    private CatalogoService catalogo;
    private PedidoService pedidoService;

    @BeforeEach
    void setUp() {
        catalogo = new CatalogoService();
        catalogo.añadirProducto("Ratón inalámbrico", 19.99, 10);
        pedidoService = new PedidoService(catalogo);
    }

    @Test
    void unClienteDebePoderRegistrarUnPedidoConProductosDisponibles() {
        // Criterio 1 y 2: pedido con producto y total correcto
        Pedido pedido = pedidoService.registrarPedido("Ratón inalámbrico", 2);

        assertNotNull(pedido);
        assertEquals(39.98, pedido.getTotal());

        // Criterio 3: número de pedido único
        assertNotNull(pedido.getNumeroPedido());
    }

    @Test
    void noSeDebePermitirUnPedidoSinStockSuficiente() {
        // Criterio 4: stock insuficiente
        assertThrows(StockInsuficienteException.class, () -> {
            pedidoService.registrarPedido("Ratón inalámbrico", 100);
        });
    }
}`}
          />
          <InfoBox type="tip">
            En entornos profesionales es habitual escribir estos criterios en
            lenguaje natural con herramientas como <strong>Cucumber</strong>{' '}
            (formato Gherkin: <em>Dado / Cuando / Entonces</em>), de forma que el
            propio cliente pueda leer y validar el test sin saber programar. Es un
            paso adicional sobre lo aprendido aquí, no imprescindible para
            automatizar aceptación con JUnit.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>El testing de aceptación valida que el sistema completo cumple los requisitos del negocio.</li>
            <li>Se ejecuta al final del ciclo, antes de producción, y suele validarlo el cliente o QA.</li>
            <li>Se apoya en criterios de aceptación: condiciones concretas y comprobables de cada historia de usuario.</li>
            <li>Se puede automatizar con JUnit escribiendo tests que recorren el flujo completo, no solo una clase.</li>
            <li>Con esto cerramos la pirámide de testing: unitario (rápido y numeroso) → integración (colaboración entre módulos) → aceptación (sistema completo, visión de negocio).</li>
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
