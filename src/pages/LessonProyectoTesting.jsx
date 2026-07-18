import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoTesting() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [
    { icon: '🧪', title: 'Unit Testing', definition: 'Tests de funciones/métodos individuales aislados', example: 'JUnit tests para UserService.register()' },
  ];
  const sections = [
    {
      title: 'Testing Unitario - JUnit 5',
      content: (
        <>
          <p>Tests de componentes individuales (métodos, funciones) sin dependencias externas.</p>
          <CodeBlock language="java" code={`// UserServiceTest.java
@SpringBootTest
class UserServiceTest {
    @InjectMocks
    UserService userService;

    @Mock
    UserRepository userRepository;

    @Test
    void testRegisterUser_Success() {
        // Arrange
        UserDTO dto = new UserDTO("test@example.com", "password123");
        User savedUser = new User("test@example.com", "$2a$10$...");
        when(userRepository.save(any())).thenReturn(savedUser);

        // Act
        User result = userService.register(dto);

        // Assert
        assertNotNull(result);
        assertEquals("test@example.com", result.getEmail());
        verify(userRepository).save(any());
    }

    @Test
    void testRegisterUser_DuplicateEmail() {
        // Test para email duplicado
        when(userRepository.findByEmail("test@example.com"))
            .thenReturn(Optional.of(new User()));

        assertThrows(DuplicateEmailException.class, () ->
            userService.register(new UserDTO("test@example.com", "pwd"))
        );
    }
}`} />
          <h3>Best Practices en Testing Unitario</h3>
          <p>
            Escribe tests que sean <strong>aislados</strong>. Cada test prueba una cosa. Si falla, sabes exactamente qué está mal.
            Usa <strong>mocks</strong> para reemplazar dependencias externas (Repository, otros Services). En lugar de hablar con BD real,
            el mock retorna datos fijos. Esto acelera tests y evita efectos secundarios.
          </p>

          <p>
            Sigue el <strong>patrón AAA: Arrange, Act, Assert</strong>. <strong>Arrange:</strong> prepara datos para el test.
            <strong>Act:</strong> ejecuta el método siendo testado. <strong>Assert:</strong> verifica el resultado. Es estructura clara
            que facilita leer el test.
          </p>

          <p>
            Usa <strong>nombres descriptivos</strong> para tests. Incorrecto: testUser(). Correcto: testRegisterUser_DuplicateEmail_ThrowsException().
            El nombre debería describir qué condición testa y qué resultado espera. Cuando falla, el nombre te dice qué falló.
          </p>

          <p>
            Apunta a <strong>70-80% code coverage</strong>. Coverage es porcentaje de líneas ejecutadas por tests. 100% es perfeccionismo
            excesivo (algunas líneas de error son imposibles de testear). 0% es negligencia. 70-80% es equilibrio: cubre casos importantes
            sin ser obsesivo.
          </p>
        </>
      )
    },
  ];

  const keyPoints = [
    'Unit Testing con JUnit 5',
    'Mocks y espías',
    'Test Driven Development'
  ];

  return (
    <>
      <LessonTemplate
        title="Testing Unitario"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
        keyPoints={keyPoints}
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

export function LessonProyectoIntegracion() {
  return <LessonProyectoTesting />;
}

export function LessonProyectoValidacion() {
  return <LessonProyectoTesting />;
}