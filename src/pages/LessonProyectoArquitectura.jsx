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
            Antes de empezar el desarrollo, debes tomar decisiones arquitectónicas que afectarán
            toda la estructura del proyecto. Estas decisiones deben documentarse claramente.
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
            El diseño de la base de datos es crítico. Debe soportar todos los requisitos funcionales
            con buen rendimiento y escalabilidad.
          </p>

          <h3>Ejemplo: Diagrama Entidad-Relación (E-commerce)</h3>
          <CodeBlock
            language="text"
            code={`USUARIOS
┌──────────────────────┐
│ id (PK)              │
│ email (UNIQUE)       │
│ password (hash)      │
│ nombre               │
│ apellido             │
│ rol (admin/client)   │
│ created_at           │
│ updated_at           │
└──────────────────────┘
        │ 1:N
        │
        ├──────→ ÓRDENES
        │        ┌──────────────────────┐
        │        │ id (PK)              │
        │        │ usuario_id (FK)      │
        │        │ total_amount         │
        │        │ estado               │
        │        │ created_at           │
        │        └──────────────────────┘
        │                │ 1:N
        │                │
        │                ├──→ ORDEN_ITEMS
        │                │    ┌──────────────────────┐
        │                │    │ id (PK)              │
        │                │    │ orden_id (FK)        │
        │                │    │ producto_id (FK)     │
        │                │    │ cantidad             │
        │                │    │ precio_unitario      │
        │                │    └──────────────────────┘
        │
        └──────→ CARRITO
                 ┌──────────────────────┐
                 │ id (PK)              │
                 │ usuario_id (FK)      │
                 │ producto_id (FK)     │
                 │ cantidad             │
                 │ added_at             │
                 └──────────────────────┘

PRODUCTOS
┌──────────────────────┐
│ id (PK)              │
│ nombre               │
│ descripción          │
│ precio               │
│ stock                │
│ imagen_url           │
│ categoria_id (FK)    │
│ created_at           │
│ updated_at           │
└──────────────────────┘
        │ N:1
        │
        └──→ CATEGORÍAS
             ┌──────────────────────┐
             │ id (PK)              │
             │ nombre               │
             │ descripción          │
             └──────────────────────┘`}
          />

          <h3>Índices para Rendimiento</h3>
          <CodeBlock
            language="sql"
            code={`-- Índices principales para búsquedas frecuentes
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_rol ON usuarios(rol);

CREATE INDEX idx_productos_categoria ON productos(categoria_id);
CREATE INDEX idx_productos_nombre ON productos(nombre);

CREATE INDEX idx_ordenes_usuario ON ordenes(usuario_id);
CREATE INDEX idx_ordenes_estado ON ordenes(estado);

CREATE INDEX idx_carrito_usuario ON carrito(usuario_id);

-- Índices compuestos para filtrados
CREATE INDEX idx_ordenes_usuario_fecha
  ON ordenes(usuario_id, created_at);

CREATE INDEX idx_orden_items_orden_producto
  ON orden_items(orden_id, producto_id);`}
          />
        </>
      )
    },

    {
      title: 'Patrón MVC en la Práctica',
      content: (
        <>
          <p>
            El patrón MVC organiza el código en tres capas separadas con responsabilidades claras.
          </p>

          <h3>Model (Modelos - Entidades)</h3>
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
          <CodeBlock
            language="text"
            code={`1. REQUEST
   Cliente: GET /api/products?category=books

2. CONTROLLER (ProductController.java)
   @GetMapping
   public List<ProductDTO> getProductsByCategory(@RequestParam String category) {
       return productService.getProductsByCategory(category);
   }

3. SERVICE (ProductService.java)
   public List<ProductDTO> getProductsByCategory(String categoryName) {
       Category cat = categoryRepository.findByNombre(categoryName);
       List<Product> products = productRepository.findByCategoria(cat);
       return convertToDTOs(products);
   }

4. REPOSITORY (ProductRepository.java)
   List<Product> findByCategoria(Category categoria);
   ↓
   [Ejecuta en Base de Datos]
   SELECT * FROM productos WHERE categoria_id = 5

5. DATABASE
   Retorna: [Producto1, Producto2, Producto3]

6. RESPONSE
   Controller devuelve JSON:
   [
       { "id": 1, "nombre": "Java 101", "precio": 29.99, ... },
       { "id": 2, "nombre": "Spring Boot", "precio": 39.99, ... },
       ...
   ]`}
          />
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
          <CodeBlock
            language="text"
            code={`RECURSOS = SUSTANTIVOS (plural)
✓ /api/products       (no /getProducts)
✓ /api/users          (no /getAllUsers)
✓ /api/orders         (no /fetchOrders)

OPERACIONES = VERBOS HTTP
GET    /api/products         ← Obtener lista
GET    /api/products/5       ← Obtener específico
POST   /api/products         ← Crear nuevo
PUT    /api/products/5       ← Actualizar completo
PATCH  /api/products/5       ← Actualizar parcial
DELETE /api/products/5       ← Eliminar

STATUS CODES
200 OK               ← Success, retorna data
201 Created          ← Resource created successfully
204 No Content       ← Success, sin retorno
400 Bad Request      ← Validación fallida
401 Unauthorized     ← Falta autenticación
403 Forbidden        ← Sin permisos
404 Not Found        ← Recurso no existe
500 Server Error     ← Error interno`}
          />

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
            La arquitectura debe estar documentada para que otros desarrolladores la entiendan.
            Usa diagramas y descripciones claras.
          </p>

          <h3>Contenido de Documentación de Arquitectura</h3>
          <CodeBlock
            language="markdown"
            code={`# Documentación de Arquitectura - JoMa E-commerce

## 1. Visión General
Este documento describe la arquitectura técnica del sistema JoMa.
- Tipo: E-commerce de eventos
- Usuarios: 1000+ concurrentes
- Tiempo de respuesta objetivo: <500ms

## 2. Stack Tecnológico
### Frontend
- React 18
- Axios para HTTP
- Redux para state management
- Material-UI para componentes

### Backend
- Java 17
- Spring Boot 3.0
- JPA/Hibernate
- JWT para autenticación

### Base de Datos
- MySQL 8.0
- Redis para caché
- Elasticsearch para búsquedas

### Infraestructura
- Docker para contenedores
- Kubernetes para orquestación
- AWS EC2 para hosting
- CloudFront para CDN

## 3. Capas de la Aplicación

### Presentation Layer (Frontend)
Ubicación: /src en raíz del proyecto
- React components
- CSS modules
- Redux store
- API client (axios)

### API Layer (Backend Controllers)
Ubicación: /src/main/java/com/joma/controllers
- ProductController
- UserController
- OrderController
- AuthController

### Business Logic Layer (Services)
Ubicación: /src/main/java/com/joma/services
- ProductService
- AuthService
- OrderService
- PaymentService

### Data Access Layer (Repositories)
Ubicación: /src/main/java/com/joma/repositories
- ProductRepository
- UserRepository
- OrderRepository

### Database
- MySQL con 8 tablas principales
- Indexes en campos frecuentemente buscados

## 4. Diagrama de Flujo

[Incluir diagrama ASCII o imagen]

## 5. Decisiones Arquitectónicas

### Decisión 1: REST vs GraphQL
**Selección:** REST
**Razón:** Simplicidad, caché HTTP, equipo familiar

### Decisión 2: Monolito vs Microservicios
**Selección:** Monolito (con posibilidad de separación futura)
**Razón:** Desarrollo más rápido, menor complejidad operacional

## 6. Patrones Utilizados
- MVC para separación de responsabilidades
- Repository para abstracción de datos
- Service para lógica de negocio
- DTO para transferencia de datos

## 7. Consideraciones de Seguridad
- HTTPS en todas las conexiones
- JWT tokens con expiración
- Password hashing con bcrypt
- CORS configurado para dominios específicos
- Rate limiting en endpoints críticos

## 8. Escalabilidad
- Horizontal: Múltiples instancias en load balancer
- Vertical: Aumentar recursos de servidor
- Caché: Redis para datos frecuentes
- CDN: CloudFront para assets estáticos`}
          />

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