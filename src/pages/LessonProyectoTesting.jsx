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
          <h3>Best Practices:</h3>
          <ul>
            <li>Una aserción por test (idealmente)</li>
            <li>Usar mocks para dependencias externas</li>
            <li>AAA pattern: Arrange, Act, Assert</li>
            <li>Nombres descriptivos: testMethod_Condition_ExpectedResult()</li>
            <li>Target: 70-80% code coverage</li>
          </ul>
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