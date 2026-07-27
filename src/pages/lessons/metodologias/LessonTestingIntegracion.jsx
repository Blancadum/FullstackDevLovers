import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonTestingIntegracion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Testing de Integración"
        description="Pruebas que verifican la interacción correcta entre distintos módulos o componentes"
        breadcrumbs={breadcrumbs}
        seoTitle="Testing de Integración - Interacción entre Módulos"
        seoDescription="Qué es el testing de integración, en qué se diferencia del unitario y cómo aplicarlo."
        seoKeywords="testing de integración, integration testing, pruebas de software"
        url="https://fullstackdevlovers.com/metodologias/testing/integracion"
      >
        <p>
          En la lección anterior probamos métodos en total aislamiento. Ahora
          vas a aprender qué son las pruebas de integración, en qué se
          diferencian del testing unitario y cómo escribirlas para comprobar
          que varias piezas de tu aplicación colaboran correctamente.
        </p>

        <LessonSection title="¿Qué es el testing de integración?" level={1}>
          <p>
            Una <strong>prueba de integración</strong> comprueba que dos o más
            componentes funcionan bien <strong>juntos</strong>: por ejemplo, un
            servicio que llama a un repositorio real, o una clase que lee y
            escribe en una base de datos. A diferencia del test unitario, aquí{' '}
            <strong>no se aíslan las dependencias con mocks</strong> (o solo se
            aíslan las que no forman parte de lo que quieres probar).
          </p>
          <InfoBox type="info">
            El testing de integración detecta problemas que el unitario no puede
            ver: una consulta SQL mal escrita, un mapeo incorrecto entre objetos y
            tablas, o dos módulos que, por separado, funcionan bien pero que al
            combinarse fallan.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Unitario vs. integración: diferencias clave" level={1}>
          <ul>
            <li><strong>Alcance:</strong> unitario prueba una unidad aislada; integración prueba la colaboración entre varias.</li>
            <li><strong>Velocidad:</strong> unitario es muy rápido (milisegundos); integración es más lento porque toca recursos reales (memoria, disco, red).</li>
            <li><strong>Dependencias:</strong> unitario sustituye colaboradores por mocks; integración usa implementaciones reales (o muy parecidas a las reales).</li>
            <li><strong>Cantidad:</strong> en un proyecto sano hay muchos más tests unitarios que de integración.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Ejemplo: probar un repositorio en memoria" level={1}>
          <p>
            Para no depender de una base de datos externa en este ejemplo,
            usamos un repositorio que guarda los datos en una lista. La prueba
            de integración comprueba que el <code>ProductoService</code> y el{' '}
            <code>ProductoRepository</code> colaboran correctamente al guardar y
            recuperar productos.
          </p>
          <CodeBlock
            language="java"
            title="ProductoRepository.java"
            code={`import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ProductoRepository {

    private final List<Producto> productos = new ArrayList<>();

    public Producto guardar(Producto producto) {
        productos.add(producto);
        return producto;
    }

    public Optional<Producto> buscarPorNombre(String nombre) {
        return productos.stream()
                .filter(p -> p.getNombre().equals(nombre))
                .findFirst();
    }
}`}
          />
          <CodeBlock
            language="java"
            title="ProductoService.java"
            code={`public class ProductoService {

    private final ProductoRepository repository;

    public ProductoService(ProductoRepository repository) {
        this.repository = repository;
    }

    public Producto registrar(String nombre, double precio) {
        if (precio <= 0) {
            throw new IllegalArgumentException("El precio debe ser mayor que 0");
        }
        return repository.guardar(new Producto(nombre, precio));
    }
}`}
          />
          <CodeBlock
            language="java"
            title="ProductoServiceIntegrationTest.java"
            code={`import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;

class ProductoServiceIntegrationTest {

    private ProductoRepository repository;
    private ProductoService service;

    @BeforeEach
    void setUp() {
        // Usamos la implementación REAL del repositorio, sin mocks
        repository = new ProductoRepository();
        service = new ProductoService(repository);
    }

    @Test
    void debeRegistrarYRecuperarUnProducto() {
        service.registrar("Teclado mecánico", 59.90);

        Optional<Producto> encontrado = repository.buscarPorNombre("Teclado mecánico");

        assertTrue(encontrado.isPresent());
        assertEquals(59.90, encontrado.get().getPrecio());
    }
}`}
          />
        </LessonSection>

        <LessonSection title="Integración con base de datos real" level={1}>
          <p>
            En un proyecto Spring Boot, este mismo tipo de prueba se hace contra
            una base de datos de verdad (o una en memoria como H2), levantando el
            contexto de la aplicación con <code>@SpringBootTest</code>. Ese caso
            concreto, con ejemplos completos, lo veremos en el módulo de Spring
            Boot dedicado a testing.
          </p>
          <InfoBox type="tip">
            Regla práctica: si tu test necesita "levantar" algo (una base de
            datos, un contexto de Spring, un servidor) para poder ejecutarse,
            probablemente ya no es un test unitario, sino de integración.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>El testing de integración verifica que varios componentes colaboran correctamente entre sí.</li>
            <li>A diferencia del unitario, usa implementaciones reales en lugar de mocks (al menos de las piezas que se quieren integrar).</li>
            <li>Son más lentos y menos numerosos que los tests unitarios, pero detectan errores que estos no ven.</li>
            <li>En Spring Boot se apoyan en anotaciones como <code>@SpringBootTest</code> y bases de datos en memoria como H2.</li>
            <li>Siguiente parada: el testing de aceptación, donde validamos el sistema completo desde el punto de vista del negocio.</li>
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
