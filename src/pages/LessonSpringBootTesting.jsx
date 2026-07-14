import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootTesting() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🧪',
      title: 'Unit Test',
      definition: 'Prueba de un componente individual',
      example: '@Test public void debeCrearUsuario() { }'
    },
    {
      icon: '🔗',
      title: 'Integration Test',
      definition: 'Prueba de múltiples componentes juntos',
      example: '@SpringBootTest'
    },
    {
      icon: '🎭',
      title: 'Mock',
      definition: 'Simulación de dependencias',
      example: '@MockBean private UsuarioRepository repo'
    }
  ];

  const exercises = [
    {
      title: 'Escribir unit test',
      description: 'Prueba que el servicio crea usuarios correctamente',
      solution: `@ExtendWith(MockitoExtension.class)
public class UsuarioServiceTest {

  @Mock
  private UsuarioRepository repository;

  @InjectMocks
  private UsuarioService service;

  @Test
  public void debeCrearUsuario() {
    Usuario usuario = new Usuario("Juan", "juan@email.com", 25);
    when(repository.save(usuario)).thenReturn(usuario);

    Usuario resultado = service.crear(usuario);

    assertEquals("Juan", resultado.getNombre());
    verify(repository, times(1)).save(usuario);
  }
}`
    }
  ];

  const keyPoints = [
    '@Test marca método de prueba',
    '@ExtendWith carga extensiones',
    '@Mock crea mocks de dependencias',
    '@InjectMocks inyecta mocks',
    '@SpringBootTest carga contexto completo',
    '@WebMvcTest testea controllers',
    'when().thenReturn() define comportamiento',
    'verify() verifica llamadas',
    'assertEquals, assertTrue, assertFalse',
    'MockMvc para tests de HTTP'
  ];

  const sections = [
    {
      title: 'Unit Tests (JUnit + Mockito)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@ExtendWith(MockitoExtension.class)
public class UsuarioServiceTest {

  @Mock
  private UsuarioRepository repository;

  @InjectMocks
  private UsuarioService service;

  @Test
  public void debeObtenerUsuarioPorId() {
    int id = 1;
    Usuario usuario = new Usuario(1, "Juan");

    when(repository.findById(id))
      .thenReturn(Optional.of(usuario));

    Usuario resultado = service.obtenerPorId(id);

    assertNotNull(resultado);
    assertEquals("Juan", resultado.getNombre());
    verify(repository).findById(id);
  }

  @Test
  public void debeValidarEdad() {
    Usuario usuario = new Usuario("Juan", 15);

    assertThrows(IllegalArgumentException.class, () -> {
      service.crear(usuario);
    });
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Integration Tests (@SpringBootTest)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@SpringBootTest
public class UsuarioControllerIntegrationTest {

  @Autowired
  private TestRestTemplate restTemplate;

  @Autowired
  private UsuarioRepository repository;

  @Test
  public void debeCrearUsuarioViaAPI() {
    UsuarioDTO dto = new UsuarioDTO();
    dto.setNombre("María");
    dto.setEmail("maria@email.com");
    dto.setEdad(28);

    ResponseEntity<Usuario> response = restTemplate.postForEntity(
      "/api/usuarios",
      dto,
      Usuario.class
    );

    assertEquals(HttpStatus.CREATED, response.getStatusCode());
    assertNotNull(response.getBody().getId());
  }

  @Test
  public void debeListarUsuarios() {
    repository.save(new Usuario(null, "Juan", "juan@email.com", 25));

    ResponseEntity<Usuario[]> response = restTemplate.getForEntity(
      "/api/usuarios",
      Usuario[].class
    );

    assertEquals(HttpStatus.OK, response.getStatusCode());
    assertTrue(response.getBody().length > 0);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Test de Controladores (@WebMvcTest)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@WebMvcTest(UsuarioController.class)
public class UsuarioControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private UsuarioService usuarioService;

  @Test
  public void debeObtenerUsuario() throws Exception {
    Usuario usuario = new Usuario(1, "Juan");
    when(usuarioService.obtenerPorId(1))
      .thenReturn(usuario);

    mockMvc.perform(get("/api/usuarios/1"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.nombre").value("Juan"))
      .andExpect(jsonPath("$.id").value(1));

    verify(usuarioService).obtenerPorId(1);
  }

  @Test
  public void debeValidarCreacionUsuario() throws Exception {
    mockMvc.perform(
      post("/api/usuarios")
        .contentType(MediaType.APPLICATION_JSON)
        .content("{\"nombre\": \"\", \"email\": \"invalido\"}")
    )
    .andExpect(status().isBadRequest());
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Bases de Datos en Tests (H2)',
      content: (
        <>
          <CodeBlock
            language="xml"
            code={`<!-- pom.xml -->
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>test</scope>
</dependency>`}
          />
          <CodeBlock
            language="properties"
            code={`<!-- application-test.properties -->
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect`}
          />
          <CodeBlock
            language="java"
            code={`<!-- Test -->
@SpringBootTest
public class UsuarioRepositoryTest {

  @Autowired
  private UsuarioRepository repository;

  @Test
  public void debeGuardarUsuario() {
    Usuario usuario = new Usuario("Juan", "juan@email.com", 25);
    Usuario guardado = repository.save(usuario);

    assertNotNull(guardado.getId());
    assertEquals("juan@email.com", guardado.getEmail());
  }
}`}
          />
        </>
      )
    }
  ];

  const summary = `Testing en Spring Boot:

• @Test marca métodos de prueba
• @Mock crea mocks de dependencias
• when().thenReturn() define comportamiento
• verify() verifica que se llamaron métodos
• @SpringBootTest carga contexto completo
• @WebMvcTest testea controllers solo
• MockMvc para tests de HTTP
• H2 para BD en memoria en tests
• assertEquals, assertTrue, assertThrows
• Integration tests con TestRestTemplate`;

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