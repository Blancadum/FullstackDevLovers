import { LessonTemplate, CodeBlock, InfoBox, Table } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoArquitectura() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🏗️',
      title: 'Arquitectura en Capas',
      definition: 'Separación vertical del sistema en Presentation, Business Logic y Data Access',
      example: 'Frontend (HTML/CSS/JS) ↔ Backend (Java) ↔ Database (MySQL)'
    },
    {
      icon: '🌐',
      title: 'API RESTful',
      definition: 'Interfaz de comunicación entre frontend y backend usando HTTP',
      example: 'GET /api/products, POST /api/cart, DELETE /api/orders/5'
    },
    {
      icon: '🔗',
      title: 'Microservicios',
      definition: 'Dividir aplicación en servicios independientes y escalables',
      example: 'Servicio de Autenticación, Servicio de Productos, Servicio de Pagos'
    },
    {
      icon: '📚',
      title: 'Patrón MVC',
      definition: 'Separación de Model (datos), View (presentación), Controller (lógica)',
      example: 'Usuario (Model) → ProductController (Controller) → response JSON (View)'
    },
  ];

  const exercises = [
    {
      title: 'Diseña la arquitectura de tu proyecto',
      description: 'Crea un diagrama de capas y endpoints API principales',
      solution: `ARQUITECTURA EN CAPAS:

┌─────────────────────────────────────────────┐
│  PRESENTATION LAYER (Frontend)              │
│  ├─ React/Vue/Angular                       │
│  ├─ HTML5 + CSS3                            │
│  └─ User Interface                          │
└────────────────────┬────────────────────────┘
                     │ HTTP/JSON
┌────────────────────▼────────────────────────┐
│  API LAYER (REST Endpoints)                 │
│  ├─ /api/auth (login, register)             │
│  ├─ /api/products (CRUD)                    │
│  ├─ /api/cart (shopping)                    │
│  └─ /api/orders (checkout)                  │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│  BUSINESS LOGIC (Services)                  │
│  ├─ AuthService                             │
│  ├─ ProductService                          │
│  ├─ CartService                             │
│  └─ OrderService                            │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│  DATA ACCESS (Repositories)                 │
│  ├─ UserRepository                          │
│  ├─ ProductRepository                       │
│  ├─ CartRepository                          │
│  └─ OrderRepository                         │
└────────────────────┬────────────────────────┘
                     │ SQL
┌────────────────────▼────────────────────────┐
│  DATABASE LAYER                             │
│  └─ MySQL/PostgreSQL                        │
└─────────────────────────────────────────────┘

PRINCIPALES ENDPOINTS:

Authentication:
POST   /api/auth/register    - Registrar usuario
POST   /api/auth/login       - Login
POST   /api/auth/logout      - Logout
POST   /api/auth/refresh     - Refresh token

Products:
GET    /api/products         - Listar todos
GET    /api/products/:id     - Detalle
GET    /api/products?category=X - Por categoría
POST   /api/products         - Crear (admin)
PUT    /api/products/:id     - Actualizar (admin)
DELETE /api/products/:id     - Eliminar (admin)

Cart:
GET    /api/cart             - Ver carrito
POST   /api/cart             - Agregar item
PUT    /api/cart/:itemId     - Actualizar cantidad
DELETE /api/cart/:itemId     - Eliminar item

Orders:
POST   /api/orders           - Crear orden
GET    /api/orders           - Mis órdenes
GET    /api/orders/:id       - Detalle orden
GET    /api/admin/orders     - Todas las órdenes (admin)`
    }
  ];

  const sections = [
    {
      title: 'Decisiones Arquitectónicas Principales',
      content: (
        <>
          <p>
            Antes de escribir una sola línea de código, necesitas tomar <strong>decisiones arquitectónicas</strong> que
            afectarán toda la estructura del proyecto. Estas decisiones son como elegir si construir una casa de uno o dos
            pisos, de madera o ladrillos. Son difíciles de cambiar después, así que debes pensarlas cuidadosamente.
            <strong>Documenta cada decisión</strong> explicando por qué la tomaste, para que en el futuro (cuando otros
            desarrolladores se unan) entiendan el razonamiento detrás.
          </p>

          <h3>Technology Stack</h3>
          <Table
            headers={['Capa', 'Opciones', 'Selección', 'Justificación']}
            rows={[
              ['Frontend', 'React, Angular, Vue', 'React', 'Popular, comunidad grande, fácil de aprender'],
              ['Backend', 'Java, Node.js, Python', 'Java Spring Boot', 'Robusto, escalable, tipo seguro'],
              ['Database', 'MySQL, PostgreSQL, MongoDB', 'MySQL 8.0', 'Relacional, ACID, bien soportado'],
              ['Server', 'Tomcat, Jetty, Undertow', 'Tomcat 10', 'Estándar Java, confiable, documentado'],
              ['API', 'SOAP, GraphQL, REST', 'REST', 'Simple, stateless, estándar HTTP'],
              ['Auth', 'Session, JWT, OAuth2', 'JWT', 'Stateless, móvil-friendly, seguro'],
            ]}
          />

          <InfoBox type="info">
            Documentar las decisiones arquitectónicas es tan importante como la decisión misma.
            En el futuro, otros desarrolladores querrán entender el por qué.
          </InfoBox>
        </>
      )
    },

    {
      title: 'Diseño de Base de Datos',
      content: (
        <>
          <p>
            El diseño de la base de datos es <strong>crítico</strong>. Una mala estructura de datos hace que todo sea lento
            y difícil de mantener. Un buen diseño soporta todos tus requisitos funcionales con rendimiento excelente y
            escalabilidad para crecer. El primer paso es crear un <strong>Diagrama Entidad-Relación (MER)</strong>, que es
            un plano de cómo se relacionan tus datos.
          </p>

          <h3>Ejemplo: Estructura de E-commerce</h3>
          <p>
            Imagina un sistema de tienda online. Necesitas guardar Usuarios, Productos, Órdenes. Cada Usuario puede hacer
            múltiples Órdenes (relación 1:N). Cada Orden contiene múltiples Productos (relación N:N). Por eso necesitas tabla
            intermedia PedidoDetalle. Cada Producto pertenece a una Categoría (relación 1:N).
          </p>

          <svg viewBox="0 0 700 400" style={{ width: '100%', maxWidth: '700px', margin: '2rem auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            {/* USUARIOS Table */}
            <g>
              <rect x="30" y="50" width="120" height="100" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2" rx="4"/>
              <text x="90" y="70" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565C0">USUARIOS</text>
              <line x="30" y="80" x2="150" y2="80" stroke="#1976D2" strokeWidth="1"/>
              <text x="40" y="95" fontSize="10" fill="#333">id (PK)</text>
              <text x="40" y="110" fontSize="10" fill="#333">email</text>
              <text x="40" y="125" fontSize="10" fill="#333">password</text>
              <text x="40" y="140" fontSize="10" fill="#333">nombre</text>
            </g>

            {/* ÓRDENES Table */}
            <g>
              <rect x="280" y="50" width="120" height="100" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="2" rx="4"/>
              <text x="340" y="70" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6A1B9A">ÓRDENES</text>
              <line x="280" y="80" x2="400" y2="80" stroke="#7B1FA2" strokeWidth="1"/>
              <text x="290" y="95" fontSize="10" fill="#333">id (PK)</text>
              <text x="290" y="110" fontSize="10" fill="#333">usuario_id (FK)</text>
              <text x="290" y="125" fontSize="10" fill="#333">total</text>
              <text x="290" y="140" fontSize="10" fill="#333">estado</text>
            </g>

            {/* PRODUCTOS Table */}
            <g>
              <rect x="530" y="50" width="130" height="100" fill="#E8F5E9" stroke="#388E3C" strokeWidth="2" rx="4"/>
              <text x="595" y="70" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">PRODUCTOS</text>
              <line x="530" y="80" x2="660" y2="80" stroke="#388E3C" strokeWidth="1"/>
              <text x="540" y="95" fontSize="10" fill="#333">id (PK)</text>
              <text x="540" y="110" fontSize="10" fill="#333">nombre</text>
              <text x="540" y="125" fontSize="10" fill="#333">precio</text>
              <text x="540" y="140" fontSize="10" fill="#333">categoria_id</text>
            </g>

            {/* ORDEN_ITEMS Table (N:N) */}
            <g>
              <rect x="405" y="220" width="130" height="80" fill="#FFF3E0" stroke="#F57C00" strokeWidth="2" rx="4"/>
              <text x="470" y="240" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">ORDEN_ITEMS</text>
              <line x="405" y="250" x2="535" y2="250" stroke="#F57C00" strokeWidth="1"/>
              <text x="415" y="265" fontSize="10" fill="#333">orden_id (FK)</text>
              <text x="415" y="280" fontSize="10" fill="#333">producto_id (FK)</text>
              <text x="415" y="295" fontSize="10" fill="#333">cantidad</text>
            </g>

            {/* Relationships - 1:N USUARIOS to ÓRDENES */}
            <line x1="150" y1="100" x2="280" y2="100" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5"/>
            <text x="215" y="90" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#555">1:N</text>

            {/* Relationship - 1:N ÓRDENES to ORDEN_ITEMS */}
            <line x1="340" y1="150" x2="455" y2="220" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5"/>
            <text x="360" y="180" fontSize="10" fontWeight="bold" fill="#555">1:N</text>

            {/* Relationship - 1:N PRODUCTOS to ORDEN_ITEMS */}
            <line x1="595" y1="150" x2="520" y2="220" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5"/>
            <text x="575" y="180" fontSize="10" fontWeight="bold" fill="#555">N:1</text>

            {/* CATEGORÍAS Table */}
            <g>
              <rect x="30" y="270" width="130" height="80" fill="#FFEBEE" stroke="#D32F2F" strokeWidth="2" rx="4"/>
              <text x="95" y="290" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#C62828">CATEGORÍAS</text>
              <line x="30" y="300" x2="160" y2="300" stroke="#D32F2F" strokeWidth="1"/>
              <text x="40" y="315" fontSize="10" fill="#333">id (PK)</text>
              <text x="40" y="330" fontSize="10" fill="#333">nombre</text>
              <text x="40" y="345" fontSize="10" fill="#333">descripción</text>
            </g>

            {/* Relationship - 1:N CATEGORÍAS to PRODUCTOS */}
            <line x1="160" y1="310" x2="530" y2="100" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5"/>
            <text x="300" y="200" fontSize="10" fontWeight="bold" fill="#555">1:N</text>

            {/* Legend */}
            <text x="30" y="380" fontSize="11" fill="#666"><strong>PK:</strong> Primary Key (identificador único)</text>
            <text x="320" y="380" fontSize="11" fill="#666"><strong>FK:</strong> Foreign Key (referencia a otra tabla)</text>
          </svg>

          <p>
            <strong>Tabla USUARIOS:</strong> Almacena información de usuarios con campos como id (PK), email (UNIQUE),
            password (hash), nombre, apellido, rol (admin/client), created_at, y updated_at. Esta tabla es la base de toda
            autenticación y autorización.
          </p>

          <p>
            <strong>Tabla ÓRDENES:</strong> Cada usuario puede tener múltiples órdenes (relación 1:N desde USUARIOS).
            Contiene id (PK), usuario_id (FK que referencia USUARIOS), total_amount (monto total), estado (pendiente,
            procesada, cancelada), y created_at para auditoría.
          </p>

          <p>
            <strong>Tabla ORDEN_ITEMS:</strong> Relación N:N entre ÓRDENES y PRODUCTOS. Una orden contiene múltiples items,
            cada uno referencia una orden específica y un producto específico. Campos: id (PK), orden_id (FK), producto_id (FK),
            cantidad (cuántos del producto), y precio_unitario (precio al momento de compra).
          </p>

          <p>
            <strong>Tabla CARRITO:</strong> Permite que usuarios mantengan un carrito de compras activo. Relación con USUARIOS
            (1:N) y con PRODUCTOS. Campos: id (PK), usuario_id (FK), producto_id (FK), cantidad, y added_at para saber cuándo
            se agregó el item.
          </p>

          <p>
            <strong>Tabla PRODUCTOS:</strong> Catálogo de productos. Contiene id (PK), nombre, descripción, precio, stock
            (cantidad disponible), imagen_url, categoria_id (FK que referencia CATEGORÍAS), created_at, y updated_at. El
            campo categoria_id establece una relación N:1 con la tabla CATEGORÍAS.
          </p>

          <p>
            <strong>Tabla CATEGORÍAS:</strong> Clasificación de productos. Campos simples: id (PK), nombre (ej: "Libros", "Electrónica"),
            y descripción. Múltiples productos pueden pertenecer a la misma categoría (relación N:1).
          </p>

          <h3>Índices para Rendimiento</h3>
          <p>
            Una vez que tienes tu estructura básica, necesitas pensar en <strong>índices</strong>. Un índice es como el índice
            de un libro: en lugar de leer página por página, saltas directo a la página que necesitas. Sin índices, cada búsqueda
            examina millones de registros. Con índices, encontramos datos en milisegundos.
          </p>

          <p>
            <strong>¿Dónde poner índices?</strong> En campos que buscas frecuentemente. Si buscas usuarios por email para login,
            crea un índice en usuarios(email). Si filtras productos por categoría, crea índice en productos(categoria_id). Si
            filtras órdenes por estado o usuario, crea índices ahí. Los <strong>índices compuestos</strong> combinan múltiples
            columnas: si siempre buscas órdenes de un usuario en una fecha específica, índice en (usuario_id, created_at) es ideal.
          </p>

          <p>
            <strong>Cuidado:</strong> Más índices = búsquedas más rápidas, pero inserciones/actualizaciones más lentas. Balancea según
            tu patrón de uso. En e-commerce, lees mucho y escribes poco, así que muchos índices son buenos.
          </p>
        </>
      )
    },

    {
      title: 'Patrón MVC en la Práctica',
      content: (
        <>
          <p>
            El patrón <strong>MVC (Model-View-Controller)</strong> organiza el código en tres capas separadas, cada una con
            responsabilidades claras. Esto permite que múltiples desarrolladores trabajen sin conflictos, facilita testing, y
            hace el código mantenible.
          </p>

          <h3>Model (Modelos - Entidades)</h3>
          <p>
            El <strong>Model</strong> representa tus datos. Son las clases que mapean a tablas en la base de datos. Un Model
            User tiene propiedades como id, email, nombre, password. Un Model Product tiene id, nombre, precio, stock. Los Models
            son "tontos" en el sentido que solo guardan datos; no contienen lógica de negocio. Son como esqueletos de información.
          </p>
          <CodeBlock
            language="java"
            code={`// src/models/User.java
public class User {
    private Long id;
    private String email;
    private String nombre;
    private String apellido;
    private String password;
    private String rol;
    private LocalDateTime createdAt;

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    // ... más getters/setters
}`}
          />

          <h3>Controller (Controladores - Endpoints)</h3>
          <p>
            El <strong>Controller</strong> es el orquestador. Recibe peticiones HTTP del cliente, decide qué hacer, llama
            al Service apropiado, y retorna una respuesta. Por ejemplo, ProductController recibe GET /api/products/5, llama
            ProductService.getProductById(5), recibe los datos, y retorna JSON. El Controller es el "gerente" que coordina todo.
          </p>
          <CodeBlock
            language="java"
            code={`// src/controllers/ProductController.java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // GET /api/products
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    // GET /api/products/:id
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable Long id) {
        ProductDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    // POST /api/products (solo admin)
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO dto) {
        ProductDTO created = productService.createProduct(dto);
        return ResponseEntity.status(201).body(created);
    }
}`}
          />

          <h3>Service (Servicios - Lógica de Negocio)</h3>
          <p>
            El <strong>Service</strong> contiene la lógica de negocio - las reglas que hacen que tu aplicación funcione. Por ejemplo,
            cuando creas un producto, el Service valida que el precio sea positivo, que la categoría exista, encripta datos si
            es necesario, y luego llama al Repository. Aquí es donde ocurre la "magia". Controllers son flacos (poca lógica),
            Services son gordos (mucha lógica). Esto facilita testing: testa Services sin tocar Controllers ni Database.
          </p>
          <CodeBlock
            language="java"
            code={`// src/services/ProductService.java
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<ProductDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    public ProductDTO createProduct(ProductDTO dto) {
        // Validar datos
        if (dto.getPrice() <= 0) {
            throw new InvalidProductException("El precio debe ser > 0");
        }

        // Buscar categoría
        Category category = categoryRepository.findById(dto.getCategoryId())
            .orElseThrow(() -> new CategoryNotFoundException("Categoría no existe"));

        // Crear producto
        Product product = new Product();
        product.setNombre(dto.getNombre());
        product.setDescripcion(dto.getDescripcion());
        product.setPrecio(dto.getPrecio());
        product.setStock(dto.getStock());
        product.setCategoria(category);

        Product saved = productRepository.save(product);
        return convertToDTO(saved);
    }

    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setNombre(product.getNombre());
        // ... más mappings
        return dto;
    }
}`}
          />

          <h3>Repository (Acceso a Datos)</h3>
          <p>
            El <strong>Repository</strong> es especialista en hablar con la base de datos. Service dice "dame todos los productos
            de la categoría 'Libros'", y Repository sabe cómo escribir esa query SQL. Repository abstrae los detalles de base de datos,
            permitiendo cambiar de MySQL a PostgreSQL sin tocar Service. Es como un intermediario entre el código y la BD.
          </p>
          <CodeBlock
            language="java"
            code={`// src/repositories/ProductRepository.java
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Búsquedas personalizadas
    List<Product> findByCategoria(Category categoria);

    List<Product> findByNombreContainingIgnoreCase(String nombre);

    @Query("SELECT p FROM Product p WHERE p.precio BETWEEN ?1 AND ?2")
    List<Product> findByPriceRange(BigDecimal minPrice, BigDecimal maxPrice);

    @Query("SELECT p FROM Product p WHERE p.stock > 0 ORDER BY p.nombre")
    List<Product> findAvailableProducts(Pageable pageable);
}`}
          />

          <h3>Flujo Completo de una Petición</h3>
          <p>
            Veamos cómo todo funciona junto. Un cliente hace una petición: <strong>GET /api/products?category=books</strong>,
            queriendo ver todos los libros disponibles.
          </p>

          <p>
            <strong>Paso 1 - Controller</strong>: ProductController recibe la petición. Ve que es un GET a /api/products y hay un
            parámetro ?category=books. Extrae ese parámetro y llama al ProductService.getProductsByCategory("books").
          </p>

          <p>
            <strong>Paso 2 - Service</strong>: ProductService recibe la categoría "books". Primero valida que la categoría exista
            llamando categoryRepository.findByNombre("books"). Luego llama productRepository.findByCategoria(cat) para obtener todos
            los productos de esa categoría. Convierte los Products a DTOs (Data Transfer Objects) para no exponer detalles internos
            al cliente.
          </p>

          <p>
            <strong>Paso 3 - Repository</strong>: ProductRepository ejecuta la query SQL:
            <code>SELECT * FROM productos WHERE categoria_id = 5</code>. La base de datos retorna una lista de productos.
          </p>

          <p>
            <strong>Paso 4 - Response</strong>: El Service recibe los datos, los convierte a DTOs, y retorna al Controller. El Controller
            retorna JSON al cliente con un array de objetos, cada uno con propiedades id, nombre, y precio. El navegador recibe ese JSON
            y lo muestra al usuario.
          </p>

          <p>
            Note la separación clara: Controller no toca base de datos. Service no toca HTTP. Repository no contiene lógica de negocio.
            Cada capa tiene una responsabilidad. Si hay un bug en cómo filtrar por categoría, sabes exactamente dónde mirar: Service.
          </p>
        </>
      )
    },

    {
      title: 'APIs RESTful: Diseño de Endpoints',
      content: (
        <>
          <p>
            Los endpoints REST deben ser consistentes, predecibles y fáciles de usar.
            Siguen convenciones HTTP estándar.
          </p>

          <h3>Convenciones REST</h3>
          <p>
            REST es una arquitectura para APIs. La clave es usar <strong>sustantivos en URLs, no verbos</strong>. El verbo lo
            proporciona HTTP. Incorrecto: GET /api/getProducts o /api/getAllUsers. Correcto: GET /api/products, GET /api/users.
            Las URLs son recursos, no acciones.
          </p>

          <p>
            <strong>GET</strong> obtiene datos sin efectos secundarios. GET /api/products retorna lista de todos. GET /api/products/5
            retorna el producto con id 5. <strong>POST</strong> crea nuevo recurso. POST /api/products con JSON en el body crea un
            producto nuevo y retorna 201 Created. <strong>PUT</strong> actualiza un recurso existente completamente. PUT /api/products/5
            reemplaza el producto 5. <strong>PATCH</strong> actualiza parcialmente (útil si solo cambias precio, no nombre). <strong>DELETE</strong>
            elimina. DELETE /api/products/5 borra el producto 5 y retorna 204 No Content.
          </p>

          <p>
            Los <strong>status codes</strong> comunican qué pasó. <strong>200 OK</strong> significa suceso, retorna datos. <strong>201
            Created</strong> significa recurso creado exitosamente. <strong>204 No Content</strong> significa suceso pero sin datos para
            retornar. <strong>400 Bad Request</strong> significa que el cliente envió datos inválidos. <strong>401 Unauthorized</strong>
            significa falta autenticación (usuario no logged in). <strong>403 Forbidden</strong> significa usuario autenticado pero sin
            permisos (admin panel, pero no eres admin). <strong>404 Not Found</strong> significa recurso no existe. <strong>500 Server Error</strong>
            significa fallo en el servidor.
          </p>

          <h3>Ejemplo: Especificación de Endpoints</h3>
          <Table
            headers={['Método', 'Endpoint', 'Descripción', 'Auth', 'Response']}
            rows={[
              ['GET', '/api/products', 'Lista paginada', 'No', '200 + array'],
              ['GET', '/api/products/:id', 'Detalle producto', 'No', '200 + objeto'],
              ['POST', '/api/products', 'Crear producto', 'Admin', '201 + objeto'],
              ['PUT', '/api/products/:id', 'Actualizar todo', 'Admin', '200 + objeto'],
              ['DELETE', '/api/products/:id', 'Eliminar', 'Admin', '204 vacío'],
            ]}
          />

          <h3>Request/Response JSON</h3>
          <CodeBlock
            language="javascript"
            code={`// POST /api/products - REQUEST
{
    "nombre": "Advanced Java",
    "descripcion": "Guía completa de Java avanzado",
    "precio": 49.99,
    "stock": 100,
    "imagenUrl": "https://...",
    "categoriaId": 3
}

// 201 CREATED - RESPONSE
{
    "id": 42,
    "nombre": "Advanced Java",
    "descripcion": "Guía completa de Java avanzado",
    "precio": 49.99,
    "stock": 100,
    "imagenUrl": "https://...",
    "categoriaId": 3,
    "createdAt": "2025-03-15T10:30:00Z",
    "updatedAt": "2025-03-15T10:30:00Z"
}

// PUT /api/products/42 - REQUEST (actualizar)
{
    "precio": 39.99,  // solo cambio precio
    "stock": 95
}

// 200 OK - RESPONSE
{
    "id": 42,
    "nombre": "Advanced Java",
    "precio": 39.99,
    "stock": 95,
    ...
}`}
          />
        </>
      )
    },

    {
      title: 'Documentación de Arquitectura',
      content: (
        <>
          <p>
            La arquitectura debe estar <strong>documentada</strong> para que otros desarrolladores (o tú mismo en 3 meses) la
            entiendan sin preguntarte. Una buena documentación de arquitectura es como un mapa de carreteras: te muestra cómo está
            organizado todo. Debe incluir: visión general, stack tecnológico, capas, decisiones y justificaciones, patrones utilizados,
            consideraciones de seguridad, y planes de escalabilidad.
          </p>

          <h3>Estructura de Documentación</h3>
          <p>
            Comienza con una <strong>Visión General</strong>: qué es el proyecto, cuántos usuarios esperas, qué objetivos de rendimiento
            tienes. Documenta tu <strong>Stack Tecnológico</strong>: Frontend (React, Angular?), Backend (Java Spring Boot?), Database
            (MySQL?), y por qué elegiste cada uno. Describe tus <strong>Capas</strong>: Frontend con React, API Layer con Controllers,
            Service Layer con lógica, Data Access con Repositories, Database con MySQL.
          </p>

          <p>
            Registra tus <strong>Decisiones Arquitectónicas</strong> importantes y por qué las tomaste. Ej: "Elegimos REST sobre GraphQL
            porque el equipo es pequeño y REST es más simple". Documenta <strong>Patrones</strong> que usas: MVC, Repository, DTO, etc.
            Lista <strong>Consideraciones de Seguridad</strong>: HTTPS, JWT tokens, password hashing, input validation. Finalmente,
            explica planes de <strong>Escalabilidad</strong>: cómo escalarás cuando lleguen 1 millón de usuarios.
          </p>

          <h3>Ejemplo: Documentación de Arquitectura - JoMa E-commerce</h3>

          <h4>1. Visión General</h4>
          <p>
            Este documento describe la arquitectura técnica del sistema JoMa. Es un e-commerce de eventos que espera manejar
            1000+ usuarios concurrentes con un tiempo de respuesta objetivo menor a 500ms.
          </p>

          <h4>2. Stack Tecnológico</h4>
          <p>
            <strong>Frontend:</strong> React 18 con Axios para HTTP, Redux para state management, y Material-UI para componentes
            reutilizables.
          </p>
          <p>
            <strong>Backend:</strong> Java 17 con Spring Boot 3.0, JPA/Hibernate para ORM, y JWT para autenticación.
          </p>
          <p>
            <strong>Base de Datos:</strong> MySQL 8.0 como base de datos principal, Redis para caché en memoria, Elasticsearch
            para búsquedas avanzadas.
          </p>
          <p>
            <strong>Infraestructura:</strong> Docker para contenedores, Kubernetes para orquestación, AWS EC2 para hosting de servidores,
            CloudFront como CDN para distribución de assets estáticos.
          </p>

          <h4>3. Capas de la Aplicación</h4>
          <p>
            <strong>Presentation Layer (Frontend):</strong> Ubicada en /src, contiene React components, CSS modules, Redux store, y cliente
            HTTP (axios) para comunicarse con el backend.
          </p>
          <p>
            <strong>API Layer (Controllers):</strong> Ubicada en /src/main/java/com/joma/controllers, contiene ProductController, UserController,
            OrderController, y AuthController que reciben peticiones HTTP y orquestan la lógica de negocio.
          </p>
          <p>
            <strong>Business Logic Layer (Services):</strong> Ubicada en /src/main/java/com/joma/services, contiene ProductService, AuthService,
            OrderService, y PaymentService que contienen la lógica de negocio centralizada y reutilizable.
          </p>
          <p>
            <strong>Data Access Layer (Repositories):</strong> Ubicada en /src/main/java/com/joma/repositories, contiene ProductRepository,
            UserRepository, y OrderRepository que abstraen las operaciones de base de datos.
          </p>
          <p>
            <strong>Database:</strong> MySQL con 8 tablas principales y índices en campos frecuentemente buscados para optimizar rendimiento.
          </p>

          <h4>5. Decisiones Arquitectónicas Principales</h4>
          <p>
            <strong>Decisión 1: REST vs GraphQL</strong> - Elegimos REST por su simplicidad, soporte de caché HTTP nativo, y porque
            el equipo estaba más familiarizado con REST.
          </p>
          <p>
            <strong>Decisión 2: Monolito vs Microservicios</strong> - Elegimos arquitectura monolítica (con posibilidad de separación futura)
            para desarrollo más rápido y menor complejidad operacional.
          </p>

          <h4>6. Patrones Utilizados</h4>
          <p>
            <strong>MVC</strong> para separación clara de responsabilidades. <strong>Repository</strong> para abstracción de datos y permitir
            cambiar de base de datos sin afectar el resto del código. <strong>Service</strong> para lógica de negocio centralizada. <strong>DTO</strong>
            para transferencia de datos sin exponer modelos internos al cliente.
          </p>

          <h4>7. Consideraciones de Seguridad</h4>
          <p>
            HTTPS en todas las conexiones, JWT tokens con expiración para autenticación stateless, password hashing con bcrypt para
            proteger credenciales, CORS configurado para dominios específicos evitando ataques de origen cruzado, y rate limiting en
            endpoints críticos como login para prevenir fuerza bruta.
          </p>

          <h4>8. Escalabilidad</h4>
          <p>
            <strong>Horizontal:</strong> Múltiples instancias de la aplicación detrás de un load balancer. <strong>Vertical:</strong> Aumentar
            recursos (CPU, RAM) de los servidores. <strong>Caché:</strong> Redis para cachear datos frecuentes. <strong>CDN:</strong> CloudFront
            para distribuir assets estáticos geográficamente.
          </p>

          <InfoBox type="success">
            Una buena documentación arquitectónica te ahorra horas cuando cambios equipo,
            tomas vacaciones o después de 3 meses sin tocar el código.
          </InfoBox>
        </>
      )
    },
  ];

  const keyPoints = [
    'Arquitectura en capas: Presentation, API, Business, Data, Database',
    'Decisiones arquitectónicas deben estar documentadas',
    'MVC: Model (datos), View (presentación), Controller (lógica)',
    'REST API: Recursos = sustantivos, Operaciones = verbos HTTP',
    'Status codes: 200, 201, 204, 400, 401, 403, 404, 500',
    'DTOs para transferencia de datos (no enviar modelos directos)',
    'Repositories para abstracción de base de datos',
    'Services contienen lógica de negocio centralizada',
    'Índices en base de datos para rendimiento',
    'Documentar decisiones arquitectónicas y patrones'
  ];

  const summary = `La arquitectura define cómo se estructura el proyecto:

• Arquitectura en capas: Frontend ↔ API ↔ Services ↔ Data Access ↔ Database
• Stack tecnológico debe elegirse basado en requisitos y equipo
• MVC separa responsabilidades: Model, View, Controller
• Endpoints REST: GET, POST, PUT, PATCH, DELETE con status codes
• DTOs abstraen modelos internos de API
• Services centralizan lógica de negocio
• Repositories abstracen acceso a datos
• Índices en base de datos mejoran performance
• Documentación arquitectónica es crítica para mantenibilidad
• Decisiones arquitectónicas deben ser justificadas y documentadas`;

      return (
    <>
      <LessonTemplate
        title="Arquitectura y Diseño"
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