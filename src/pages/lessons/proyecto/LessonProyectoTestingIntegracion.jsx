import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonProyectoTestingIntegracion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Testing de Integración"
        description="Cómo probar que los distintos módulos de tu TFC funcionan correctamente juntos"
        breadcrumbs={breadcrumbs}
        seoTitle="Testing de Integración en el Proyecto TFC"
        seoDescription="Cómo diseñar y ejecutar pruebas de integración para verificar que backend, base de datos y APIs funcionan juntos en tu TFC."
        seoKeywords="testing, integracion, tfc, proyecto"
        url="https://fullstackdevlovers.com/proyecto/testing/integracion"
      >
        <p>
          Hasta ahora has probado piezas sueltas de tu TFC con tests unitarios: un método del <code>Service</code> aquí, un cálculo
          allá, todo con mocks. Eso está bien, pero no te dice si tu <code>Controller</code>, tu <code>Service</code>, tu
          <code>Repository</code> y tu base de datos realmente <strong>funcionan juntos</strong>. En esta lección vamos a montar
          tests de integración reales sobre tu API, para llegar a la entrega con la confianza de que el sistema completo responde
          como esperas, no solo sus piezas por separado.
        </p>

        <h2>Unitario vs. Integración: qué falla en cada uno</h2>
        <p>
          Un test unitario mockea el <code>Repository</code> y comprueba que el <code>Service</code> toma la decisión correcta con
          unos datos falsos. Es rápido, pero no detecta errores de mapeo JPA, columnas mal nombradas, constraints de base de datos
          que saltan, o un <code>@RequestMapping</code> mal escrito. Un test de integración levanta el contexto real de Spring,
          conecta con una base de datos (normalmente una de pruebas), y ejercita el flujo completo: petición HTTP entra por el
          <code>Controller</code>, pasa por el <code>Service</code>, llega al <code>Repository</code>, toca la base de datos de
          verdad, y vuelve como respuesta HTTP. Si algo en esa cadena está mal conectado, aquí es donde lo descubres.
        </p>

        <InfoBox type="info">
          En tu TFC no necesitas cientos de tests de integración. Con cubrir los flujos críticos de tu dominio (por ejemplo:
          crear un recurso y recuperarlo, o intentar crear uno inválido y recibir un 400) el tribunal ya ve que entiendes la
          diferencia y que tu API responde correctamente de punta a punta.
        </InfoBox>

        <h2>Preparar un entorno de test aislado</h2>
        <p>
          Nunca ejecutes tests de integración contra tu base de datos de desarrollo: podrías machacar datos reales o dejar el
          esquema en un estado raro. La opción más simple para un TFC es usar una base de datos en memoria como <strong>H2</strong>
          exclusivamente durante los tests, con un perfil de Spring dedicado.
        </p>

        <CodeBlock language="yaml" title="src/test/resources/application-test.yml" code={`spring:
  datasource:
    url: jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
    driver-class-name: org.h2.Driver
    username: sa
    password:
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true`} />

        <p>
          Añade la dependencia de H2 con alcance <code>test</code> en tu <code>pom.xml</code> (<code>com.h2database:h2</code>) y
          activa el perfil con <code>@ActiveProfiles("test")</code> en tus clases de test. Así, cada ejecución arranca con un
          esquema limpio y no toca tu MySQL/PostgreSQL de desarrollo.
        </p>

        <h2>Testeando la API completa con MockMvc</h2>
        <p>
          <code>@SpringBootTest</code> junto con <code>@AutoConfigureMockMvc</code> levanta el contexto completo de tu aplicación
          y te permite simular peticiones HTTP reales sin necesidad de arrancar un servidor en un puerto. Es la forma más directa
          de comprobar que un endpoint de tu proyecto funciona de principio a fin.
        </p>

        <CodeBlock language="java" title="ProductoIntegrationTest.java" code={`@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class ProductoIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ProductoRepository productoRepository;

    @Test
    void deberiaCrearYRecuperarUnProducto() throws Exception {
        String nuevoProducto = """
            {
                "nombre": "Teclado mecánico",
                "precio": 59.90
            }
            """;

        // Act: crea el recurso a través de la API real
        mockMvc.perform(post("/api/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(nuevoProducto))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.nombre").value("Teclado mecánico"));

        // Assert: comprueba que quedó guardado de verdad en la base de datos
        assertEquals(1, productoRepository.findAll().size());
    }

    @Test
    void deberiaRechazarUnProductoSinNombre() throws Exception {
        String productoInvalido = """
            { "precio": 10.0 }
            """;

        mockMvc.perform(post("/api/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(productoInvalido))
            .andExpect(status().isBadRequest());
    }
}`} />

        <p>
          Fíjate en algo importante: este test no mockea nada. El <code>Controller</code>, el <code>Service</code>, el
          <code>Repository</code> y la base de datos H2 son todos reales dentro del test. Si tu validación de
          <code>@NotBlank</code> en el DTO no está bien configurada, o tu <code>@ExceptionHandler</code> no captura el error como
          debería, este test lo detecta; un test unitario con mocks, no.
        </p>

        <h2>Mantén los tests aislados entre sí</h2>
        <p>
          Un problema típico es que un test deje datos en la base y el siguiente test falle por culpa de ese estado previo.
          Spring resuelve esto con <code>@Transactional</code> a nivel de clase de test: cada método de test corre dentro de una
          transacción que se revierte automáticamente al terminar, así que el siguiente test siempre arranca con la base limpia.
        </p>

        <CodeBlock language="java" code={`@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Transactional // rollback automático al final de cada test
class ProductoIntegrationTest {
    // ...
}`} />

        <InfoBox type="warning">
          Si en tu proyecto usas Testcontainers para levantar un MySQL/PostgreSQL real en Docker durante los tests (en vez de H2),
          la idea es la misma pero con una base de datos idéntica a la de producción. Es una opción más realista, aunque más
          pesada de configurar; para un TFC, H2 suele ser suficiente.
          {/* TODO-verificar: si tu proyecto usa Testcontainers, confirma la versión compatible con tu versión concreta de Spring Boot */}
        </InfoBox>

        <h2>Qué flujos merece la pena cubrir</h2>
        <p>
          No intentes testear cada endpoint con integración; prioriza lo que de verdad importa para tu evaluación. Como mínimo,
          cubre: el <strong>camino feliz</strong> de tu operación principal (crear y leer el recurso central de tu dominio), un
          caso de <strong>validación fallida</strong> (datos incorrectos → 400), y si tu proyecto tiene autenticación, un caso de
          <strong>acceso no autorizado</strong> (sin token → 401). Con esos tres frentes cubiertos, demuestras que entiendes tanto
          el éxito como los errores esperados de tu API.
        </p>

        <h2>Resumen</h2>
        <p>
          El testing de integración verifica que las capas de tu proyecto —Controller, Service, Repository y base de datos—
          funcionan correctamente juntas, algo que los tests unitarios con mocks no pueden garantizar. Usa un perfil de test con
          H2, apóyate en <code>@SpringBootTest</code> + <code>MockMvc</code> para simular peticiones reales, y usa
          <code>@Transactional</code> para mantener cada test aislado. No necesitas cubrir todo tu proyecto: con los flujos
          críticos bien testeados, llegas a la entrega con pruebas sólidas de que tu API funciona de extremo a extremo.
        </p>
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
