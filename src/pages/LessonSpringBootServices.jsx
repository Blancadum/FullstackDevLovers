import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootServices() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '⚙️',
      title: 'Service',
      definition: 'Capa de lógica de negocio separada del controlador',
      example: '@Service public class UsuarioService {}'
    },
    {
      icon: '🔄',
      title: 'Inyección de Dependencias',
      definition: 'Spring proporciona dependencias automáticamente',
      example: '@Autowired private UsuarioRepository repo;'
    },
    {
      icon: '🎯',
      title: 'Patrón Arquitectónico',
      definition: 'Separación de responsabilidades: Controller → Service → Repository',
      example: 'Mejora mantenibilidad y testabilidad'
    }
  ];

  const exercises = [
    {
      title: 'Crear servicio simple',
      description: 'Crea un servicio con lógica de negocio',
      solution: `@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository repository;

  public List<Usuario> listar() {
    return repository.findAll();
  }

  public Usuario obtenerPorId(int id) {
    return repository.findById(id).orElse(null);
  }

  public Usuario crear(Usuario usuario) {
    if (usuario.getEdad() < 18) {
      throw new IllegalArgumentException("Mayor de edad requerido");
    }
    return repository.save(usuario);
  }
}`
    }
  ];

  const keyPoints = [
    '@Service marca clases de lógica de negocio',
    '@Autowired inyecta dependencias',
    'Separación de controlador y lógica',
    'Mayor testabilidad con inyección',
    'Reutilización de servicios',
    '@Transactional gestiona transacciones',
    'Los servicios llaman a repositories',
    'Validación de datos en servicios',
    'Manejo de excepciones personalizadas',
    'Un servicio puede usar otros servicios'
  ];

  const sections = [
    {
      title: '¿Qué son los Servicios?',
      content: (
        <p>
          Los servicios encapsulan la lógica de negocio. Separan controladores de la persistencia,
          mejorando testabilidad, reutilización y mantenibilidad.
        </p>
      )
    },
    {
      title: 'Patrón Controller-Service-Repository',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`// 1. Controlador: maneja HTTP
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

  @Autowired
  private UsuarioService usuarioService;  // Inyecta servicio

  @PostMapping
  public Usuario crear(@RequestBody Usuario usuario) {
    return usuarioService.crear(usuario);  // Delega lógica
  }
}

// 2. Servicio: lógica de negocio
@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository repository;  // Inyecta repository

  public Usuario crear(Usuario usuario) {
    // Validaciones
    if (usuario.getEdad() < 18) {
      throw new IllegalArgumentException("Debe ser mayor de edad");
    }

    // Lógica
    usuario.setFechaRegistro(LocalDateTime.now());

    // Persistencia
    return repository.save(usuario);
  }
}

// 3. Repository: acceso a datos
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
  List<Usuario> findByEdadGreaterThan(int edad);
}`}
          />
          <InfoBox type="info">
            Este patrón separa responsabilidades: Controller (HTTP),
            Service (lógica), Repository (datos).
          </InfoBox>
        </>
      )
    },
    {
      title: 'Inyección de Dependencias (@Autowired)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`// Forma 1: Inyección por propiedad (no recomendado)
@Service
public class UsuarioService {
  @Autowired
  private UsuarioRepository repository;
}

// Forma 2: Inyección por constructor (recomendado)
@Service
public class UsuarioService {
  private final UsuarioRepository repository;

  // Spring inyecta en constructor
  public UsuarioService(UsuarioRepository repository) {
    this.repository = repository;
  }
}

// Forma 3: Inyección por setter
@Service
public class UsuarioService {
  private UsuarioRepository repository;

  @Autowired
  public void setRepository(UsuarioRepository repository) {
    this.repository = repository;
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Servicios con Lógica Compleja',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Service
public class PedidoService {

  @Autowired
  private PedidoRepository pedidoRepository;

  @Autowired
  private ProductoService productoService;

  @Autowired
  private UsuarioService usuarioService;

  @Transactional  // Transacción automática
  public Pedido crear(int usuarioId, List<Integer> productoIds) {
    // Validar usuario
    Usuario usuario = usuarioService.obtenerPorId(usuarioId);
    if (usuario == null) {
      throw new UsuarioNoEncontradoException("Usuario " + usuarioId);
    }

    // Crear pedido
    Pedido pedido = new Pedido();
    pedido.setUsuario(usuario);
    pedido.setFecha(LocalDateTime.now());

    // Agregar productos
    double total = 0;
    for (Integer productoId : productoIds) {
      Producto producto = productoService.obtenerPorId(productoId);
      if (producto == null) {
        throw new ProductoNoEncontradoException("Producto " + productoId);
      }
      pedido.addProducto(producto);
      total += producto.getPrecio();
    }

    pedido.setTotal(total);

    // Guardar y devolver
    return pedidoRepository.save(pedido);
  }
}`}
          />
        </>
      )
    },
    {
      title: '@Transactional para Transacciones',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Service
public class TransferenciaService {

  @Autowired
  private CuentaRepository cuentaRepository;

  // Si algo falla, se hace ROLLBACK todo
  @Transactional
  public void transferir(int cuentaOrigen, int cuentaDestino, double monto) {
    Cuenta origen = cuentaRepository.findById(cuentaOrigen)
      .orElseThrow(() -> new CuentaNoEncontradaException());

    Cuenta destino = cuentaRepository.findById(cuentaDestino)
      .orElseThrow(() -> new CuentaNoEncontradaException());

    if (origen.getSaldo() < monto) {
      throw new SaldoInsuficienteException();
    }

    origen.setSaldo(origen.getSaldo() - monto);
    destino.setSaldo(destino.getSaldo() + monto);

    cuentaRepository.save(origen);
    cuentaRepository.save(destino);
    // Si aquí ocurre error, ambos saves se revierten
  }
}`}
          />
        </>
      )
    }
  ];

  const summary = `Los servicios encapsulan lógica de negocio:

• @Service marca clase de lógica
• @Autowired inyecta dependencias
• Constructor preferible a propiedades
• Separan controlador de persistencia
• Reutilizables en múltiples controladores
• @Transactional gestiona transacciones
• Validaciones en servicios
• Manejo de excepciones personalizado
• Un servicio puede usar otros servicios
• ROLLBACK automático en errores`;

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