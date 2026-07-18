import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoBackend() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [
    { icon: '🔧', title: 'Desarrollo Backend', definition: 'Implementación de lógica de negocio en servidor', example: 'Controllers, Services, Repositories en Spring Boot' },
  ];
  const sections = [
    {
      title: 'Desarrollo Backend con Spring Boot',
      content: (
        <>
          <p>
            El <strong>desarrollo backend</strong> es implementar la lógica de tu aplicación en el servidor. Es el "cerebro"
            que procesa requests, valida datos, ejecuta lógica de negocio, y retorna respuestas. Spring Boot hace que esto sea
            relativamente fácil con anotaciones y convenciones.
          </p>

          <h3>Estructura de Carpetas del Backend</h3>
          <p>
            Un proyecto Spring Boot bien organizado sigue esta estructura:
          </p>

          <svg viewBox="0 0 700 400" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* Root folder */}
            <rect x="20" y="20" width="660" height="370" fill="none" stroke="#999" strokeWidth="1" strokeDasharray="3,3" rx="3"/>
            <text x="40" y="45" fontSize="12" fontWeight="bold" fill="#333">joma-project/</text>

            {/* src/main/java/com/example structure */}
            <g>
              <text x="60" y="70" fontSize="11" fontWeight="bold" fill="#333">src/main/java/com/joma/</text>

              {/* Controllers */}
              <rect x="80" y="80" width="140" height="100" fill="#E3F2FD" stroke="#1976D2" strokeWidth="1.5" rx="3"/>
              <text x="150" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1565C0">controllers/</text>
              <text x="100" y="120" fontSize="9" fill="#333">ProductController.java</text>
              <text x="100" y="135" fontSize="9" fill="#333">UserController.java</text>
              <text x="100" y="150" fontSize="9" fill="#333">CartController.java</text>
              <text x="100" y="165" fontSize="9" fill="#333">AuthController.java</text>
              <text x="100" y="177" fontSize="8" fill="#666">@RestController endpoints</text>

              {/* Services */}
              <rect x="240" y="80" width="140" height="100" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1.5" rx="3"/>
              <text x="310" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6A1B9A">services/</text>
              <text x="260" y="120" fontSize="9" fill="#333">ProductService.java</text>
              <text x="260" y="135" fontSize="9" fill="#333">UserService.java</text>
              <text x="260" y="150" fontSize="9" fill="#333">CartService.java</text>
              <text x="260" y="165" fontSize="9" fill="#333">AuthService.java</text>
              <text x="260" y="177" fontSize="8" fill="#666">Lógica de negocio</text>

              {/* Repositories */}
              <rect x="400" y="80" width="140" height="100" fill="#E8F5E9" stroke="#388E3C" strokeWidth="1.5" rx="3"/>
              <text x="470" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2E7D32">repositories/</text>
              <text x="420" y="120" fontSize="9" fill="#333">ProductRepository.java</text>
              <text x="420" y="135" fontSize="9" fill="#333">UserRepository.java</text>
              <text x="420" y="150" fontSize="9" fill="#333">CartRepository.java</text>
              <text x="420" y="165" fontSize="9" fill="#333">+ custom queries</text>
              <text x="420" y="177" fontSize="8" fill="#666">JPA queries</text>

              {/* Entities */}
              <rect x="560" y="80" width="100" height="100" fill="#FFF3E0" stroke="#F57C00" strokeWidth="1.5" rx="3"/>
              <text x="610" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E65100">entities/</text>
              <text x="575" y="120" fontSize="9" fill="#333">User.java</text>
              <text x="575" y="135" fontSize="9" fill="#333">Product.java</text>
              <text x="575" y="150" fontSize="9" fill="#333">Cart.java</text>
              <text x="575" y="165" fontSize="9" fill="#333">Order.java</text>
              <text x="575" y="177" fontSize="8" fill="#666">@Entity models</text>
            </g>

            {/* Additional folders */}
            <g>
              <text x="60" y="210" fontSize="11" fontWeight="bold" fill="#333">Carpetas adicionales:</text>

              <rect x="80" y="220" width="120" height="65" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="1.5" rx="3"/>
              <text x="140" y="237" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#C62828">config/</text>
              <text x="95" y="254" fontSize="8" fill="#333">SecurityConfig.java</text>
              <text x="95" y="265" fontSize="8" fill="#333">DatabaseConfig.java</text>
              <text x="95" y="276" fontSize="8" fill="#333">Configuraciones globales</text>

              <rect x="220" y="220" width="120" height="65" fill="#E0F2F1" stroke="#00897B" strokeWidth="1.5" rx="3"/>
              <text x="280" y="237" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00695C">dto/</text>
              <text x="235" y="254" fontSize="8" fill="#333">UserDTO.java</text>
              <text x="235" y="265" fontSize="8" fill="#333">ProductDTO.java</text>
              <text x="235" y="276" fontSize="8" fill="#333">Data Transfer Objects</text>

              <rect x="360" y="220" width="120" height="65" fill="#FCE4EC" stroke="#C2185B" strokeWidth="1.5" rx="3"/>
              <text x="420" y="237" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A91751">exception/</text>
              <text x="375" y="254" fontSize="8" fill="#333">ResourceNotFoundException.java</text>
              <text x="375" y="265" fontSize="8" fill="#333">ValidationException.java</text>
              <text x="375" y="276" fontSize="8" fill="#333">Custom exceptions</text>

              <rect x="500" y="220" width="120" height="65" fill="#F1F8E9" stroke="#689F38" strokeWidth="1.5" rx="3"/>
              <text x="560" y="237" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#558B2F">util/</text>
              <text x="515" y="254" fontSize="8" fill="#333">JwtTokenProvider.java</text>
              <text x="515" y="265" fontSize="8" fill="#333">PasswordEncoder.java</text>
              <text x="515" y="276" fontSize="8" fill="#333">Utilidades compartidas</text>
            </g>

            {/* Resources section */}
            <g>
              <text x="60" y="330" fontSize="11" fontWeight="bold" fill="#333">src/main/resources/</text>
              <rect x="80" y="340" width="180" height="40" fill="#E8EAF6" stroke="#3F51B5" strokeWidth="1.5" rx="3"/>
              <text x="170" y="360" textAnchor="middle" fontSize="9" fill="#333">application.properties</text>
              <text x="170" y="372" textAnchor="middle" fontSize="8" fill="#666">Configuración de BD, puerto, etc</text>
            </g>

            {/* Tests section */}
            <g>
              <text x="380" y="330" fontSize="11" fontWeight="bold" fill="#333">src/test/java/</text>
              <rect x="380" y="340" width="180" height="40" fill="#ECEFF1" stroke="#455A64" strokeWidth="1.5" rx="3"/>
              <text x="470" y="360" textAnchor="middle" fontSize="9" fill="#333">*ServiceTest.java</text>
              <text x="470" y="372" textAnchor="middle" fontSize="8" fill="#666">Tests unitarios (JUnit 5, Mockito)</text>
            </g>
          </svg>

          <h3>Estructura Típica de un Controlador</h3>
          <p>
            Un <strong>Controller</strong> en Spring Boot usa anotación @RestController para indicar que maneja requests HTTP.
            La anotación @RequestMapping("/api/products") define la ruta base. Métodos individuales como @GetMapping, @PostMapping
            definen endpoints específicos. El Spring framework automáticamente deserializa JSON a objetos Java, maneja excepciones,
            y serializa respuestas a JSON. Esto es "magia" que hace el desarrollo más rápido.
          </p>

          <h3>Estructura Típica de un Service</h3>
          <p>
            Un <strong>Service</strong> contiene lógica de negocio. Es anotado con @Service. Inyectas Repositories con @Autowired.
            Métodos públicos implementan acciones: getAllProducts(), createProduct(dto), updateProduct(id, dto), deleteProduct(id).
            Aquí es donde validas, calculas, aplicas reglas de negocio. El Service es "gordo" de lógica.
          </p>

          <h3>Estructura Típica de un Repository</h3>
          <p>
            Un <strong>Repository</strong> extiende JpaRepository (de Spring Data). Te proporciona automáticamente métodos CRUD:
            findAll(), findById(id), save(entity), delete(entity). Puedes definir queries personalizadas con @Query. El Repository
            abstrae base de datos; Spring genera SQL automáticamente basado en nombres de métodos.
          </p>

          <h3>Flujo de Desarrollo</h3>
          <p>
            Típicamente, desarrollas backend en este orden: Primero, define tus Models (entidades). Luego, crea Repositories.
            Después, implementa Services con lógica. Finalmente, expone Controllers como APIs. Testa cada capa por separado.
            Esto es "desarrollo de abajo hacia arriba" (bottom-up). Algunos prefieren top-down (Controllers primero). Ambos
            funcionan si eres disciplinado.
          </p>

          <InfoBox type="info">
            <strong>Tip importante:</strong> Separa responsabilidades. Controllers son flacos (poco código). Services son gordos (mucha lógica).
            Repositories son especialistas en BD. Esto permite testing fácil y código mantenible.
          </InfoBox>
        </>
      )
    }
  ];

      return (
    <>
      <LessonTemplate
        title="Desarrollo Backend"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
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