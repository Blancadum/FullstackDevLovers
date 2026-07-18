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
      title: 'Pirámide de Testing - Cobertura de Tests',
      content: (
        <>
          <p>
            La <strong>Testing Pyramid</strong> visualiza la estrategia de testing. La base son unit tests (muchos, rápidos, baratos).
            El medio son integration tests (menos, más lentos). La punta son E2E tests (pocos, más lentos, más caros). Esta distribución
            asegura cobertura completa con eficiencia.
          </p>

          <svg viewBox="0 0 700 420" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Pyramid Base - Unit Tests */}
            <polygon points="100,350 600,350 550,250 150,250" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2"/>
            <text x="350" y="285" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">UNIT TESTS (70-80%)</text>
            <text x="350" y="305" textAnchor="middle" fontSize="10" fill="#333">Métodos individuales, lógica pura, mocks, rápidos</text>
            <text x="350" y="320" textAnchor="middle" fontSize="10" fill="#333">Ejemplos: testRegisterUser(), testProductPriceCalculation()</text>

            {/* Pyramid Middle - Integration Tests */}
            <polygon points="150,250 550,250 475,150 225,150" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2"/>
            <text x="350" y="180" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">INTEGRATION TESTS (15-20%)</text>
            <text x="350" y="200" textAnchor="middle" fontSize="10" fill="#333">Múltiples componentes, BD real, más lento</text>
            <text x="350" y="215" textAnchor="middle" fontSize="10" fill="#333">Ejemplos: testCreateProductAndFetchFromDB()</text>

            {/* Pyramid Top - E2E Tests */}
            <polygon points="225,150 475,150 350,50" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2"/>
            <text x="350" y="90" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565C0">E2E TESTS (5-10%)</text>
            <text x="350" y="110" textAnchor="middle" fontSize="10" fill="#333">Flujo completo usuario: login → compra → confirmación</text>

            {/* Cost/Speed indicators */}
            <text x="50" y="290" fontSize="10" fontWeight="bold" fill="#666">Costo: Bajo</text>
            <text x="50" y="310" fontSize="9" fill="#777">Velocidad: Muy rápido</text>
            <text x="50" y="330" fontSize="9" fill="#777">Cantidad: Muchos</text>

            <text x="50" y="180" fontSize="10" fontWeight="bold" fill="#666">Costo: Medio</text>
            <text x="50" y="200" fontSize="9" fill="#777">Velocidad: Medio</text>
            <text x="50" y="220" fontSize="9" fill="#777">Cantidad: Algunos</text>

            <text x="50" y="90" fontSize="10" fontWeight="bold" fill="#666">Costo: Alto</text>
            <text x="50" y="110" fontSize="9" fill="#777">Velocidad: Lento</text>
            <text x="50" y="130" fontSize="9" fill="#777">Cantidad: Pocos</text>

            {/* Coverage indicators */}
            <g>
              <text x="350" y="375" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Cobertura de Testing Recomendada:</text>
              <text x="350" y="395" textAnchor="middle" fontSize="10" fill="#555">Unit: 70-80% | Integration: 15-20% | E2E: 5-10%</text>
              <text x="350" y="410" textAnchor="middle" fontSize="9" fill="#777">Total: ~90-100% de escenarios importantes cubiertos</text>
            </g>
          </svg>

          <h3>Beneficios de esta estrategia:</h3>
          <ul>
            <li><strong>Unit Tests:</strong> Detectan bugs rápidamente, permiten refactoring seguro, documentan código</li>
            <li><strong>Integration Tests:</strong> Verifican que componentes trabajen juntos, testean queries reales</li>
            <li><strong>E2E Tests:</strong> Simulan comportamiento real del usuario, detectan problemas de flujo completo</li>
          </ul>
        </>
      )
    },

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