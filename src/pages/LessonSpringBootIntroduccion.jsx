import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🍃',
      title: 'Spring Framework',
      definition: 'Framework Java para construcción de aplicaciones empresariales con IoC y DI',
      example: 'Proporciona infraestructura para manejar complejidad',
    },
    {
      icon: '🚀',
      title: 'Spring Boot',
      definition: 'Versión simplificada de Spring que automatiza configuración y permite desarrollo rápido',
      example: 'Crea aplicaciones lisas para producción con mínima configuración',
    },
    {
      icon: '⚙️',
      title: 'IoC (Inversion of Control)',
      definition: 'Patrón donde el framework maneja la creación y ciclo de vida de objetos',
      example: 'El container de Spring crea beans automáticamente',
    },
    {
      icon: '🔌',
      title: 'Inyección de Dependencias (DI)',
      definition: 'Proporcionan dependencias a un objeto en lugar de que el objeto las cree',
      example: 'Usar @Autowired para inyectar servicios en controladores',
    },
  ];

  const exercises = [
    {
      title: 'Diferencia entre Spring y Spring Boot',
      description: 'Explica las ventajas de Spring Boot vs Spring Framework puro',
      solution: `Spring Framework (tradicional):
- Requiere configuración XML extensa
- Setup manual de dependencias
- Configuración compleja de beans

Spring Boot:
- Configuración automática (auto-configuration)
- Starter POMs para simplificar dependencias
- Aplicación ejecutable (JAR embebido)
- Mejor para desarrollo rápido`,
    },
    {
      title: 'Entender IoC y DI',
      description: 'Compara código sin IoC y con IoC/DI',
      solution: `SIN IoC (acoplamiento fuerte):
public class UserController {
  private UserService service = new UserService();
  // Difícil de testear, acoplado
}

CON IoC/DI (desacoplamiento):
@RestController
public class UserController {
  @Autowired
  private UserService service;
  // Fácil de testear, inyectado
}`,
    },
  ];

  const sections = [
    {
      title: 'Qué es Spring Boot',
      content: (
        <>
          <p>
            Spring Boot es una extensión del Spring Framework que simplifica la creación de
            aplicaciones Java standalone y listas para producción. Con Spring Boot, puedes
            crear aplicaciones web profesionales con muy poca configuración.
          </p>
          <InfoBox type="info">
            <strong>¿Por qué Spring Boot?</strong>
            <ul>
              <li>Configuración automática inteligente</li>
              <li>Embedded Tomcat (no necesitas servidor externo)</li>
              <li>Starters POM para simplificar dependencias</li>
              <li>Actuator para monitoreo y métricas</li>
              <li>Excelente documentación y comunidad</li>
            </ul>
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Conceptos Clave',
      content: (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
            {concepts.map((concept, index) => (
              <div key={index} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{concept.icon}</div>
                <h4 style={{ margin: '0.5rem 0' }}>{concept.title}</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Def:</strong> {concept.definition}</p>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Ej:</strong> {concept.example}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      title: 'Spring Boot vs Spring Framework',
      content: (
        <>
          <p>Comparativa entre las dos versiones:</p>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '1.5rem',
            border: '1px solid #ddd'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Aspecto</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Spring Framework</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Spring Boot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Configuración</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Manual, XML/Java</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Automática</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Setup</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Complejo</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Simple</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Servidor</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Externo (Tomcat, etc)</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Embebido</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Uso</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Proyectos grandes/complejos</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>Desarrollo rápido</td>
              </tr>
            </tbody>
          </table>

          <InfoBox type="success" style={{ marginTop: '2rem' }}>
            <strong>Recomendación:</strong> Para nuevos proyectos, <strong>usa Spring Boot</strong>. Es más moderno,
            productivo y sigue siendo Spring bajo el capó.
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Arquitectura de Spring Boot',
      content: (
        <>
          <p>Una aplicación Spring Boot típicamente tiene esta estructura:</p>

          <CodeBlock code={`// 1. CONTROLADOR - Maneja peticiones HTTP
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
  @Autowired
  private UsuarioService service;

  @GetMapping("/{id}")
  public Usuario obtener(@PathVariable Long id) {
    return service.obtenerPorId(id);
  }
}

// 2. SERVICIO - Lógica de negocio
@Service
public class UsuarioService {
  @Autowired
  private UsuarioRepository repository;

  public Usuario obtenerPorId(Long id) {
    return repository.findById(id);
  }
}

// 3. REPOSITORIO - Acceso a datos
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}

// 4. ENTIDAD - Modelo de datos
@Entity
@Table(name = "usuarios")
public class Usuario {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nombre;
  private String email;
}`} />

          <InfoBox type="info">
            <strong>Flujo de Petición:</strong> HTTP Request → Controller → Service → Repository → Base de Datos
          </InfoBox>
        </>
      ),
    },

    {
      title: 'Anotaciones Principales',
      content: (
        <>
          <p>Las anotaciones configuran automáticamente tu aplicación:</p>
          <CodeBlock code={`// Anotaciones de Clase
@SpringBootApplication  // Marca la clase principal
@RestController         // Combinación de @Controller + @ResponseBody
@Service                // Bean de lógica de negocio
@Repository             // Bean de acceso a datos

// Anotaciones de Método
@GetMapping             // Mapea GET /path
@PostMapping            // Mapea POST /path
@PutMapping             // Mapea PUT /path
@DeleteMapping          // Mapea DELETE /path

// Anotaciones de Parámetros
@PathVariable           // Obtiene del URL
@RequestParam           // Obtiene del query string
@RequestBody            // Obtiene del cuerpo JSON

// Inyección
@Autowired              // Inyecta automáticamente
@Qualifier              // Especifica cuál bean inyectar`} />
        </>
      ),
    },
  ];

  const keyPoints = [
    'Spring Boot simplifica desarrollo de aplicaciones Java profesionales',
    'IoC/DI desacopla componentes y facilita testing',
    'Arquitectura en capas: Controller → Service → Repository',
    'Anotaciones configuran automáticamente tu aplicación',
    'Spring Boot incluye servidor embebido y configuración automática',
    'Auto-configuration: Spring Boot detecta librerías y configura automáticamente',
    'Starter POMs: spring-boot-starter-web, spring-boot-starter-data-jpa, etc.',
    'Beans: Spring crea y gestiona objetos automáticamente',
    'Inyección de dependencias: @Autowired para inyectar servicios',
    'Perfecto para microservicios y desarrollo rápido',
  ];

  const summary = `Aprendiste qué es Spring Boot, sus ventajas sobre Spring Framework,
conceptos como IoC y DI, la arquitectura en capas y las anotaciones principales.

Próxima lección: Setup y Configuración - Crearás tu primer proyecto.`;

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