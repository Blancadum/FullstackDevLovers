import { LessonTemplate, CodeBlock, Table, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootControllers() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🎮',
      title: '@Controller',
      definition: 'Maneja peticiones HTTP y devuelve vistas',
      example: '@Controller public class MiController {}'
    },
    {
      icon: '📤',
      title: '@RestController',
      definition: 'Maneja peticiones y devuelve JSON directamente',
      example: '@RestController public class MiRestController {}'
    },
    {
      icon: '🛣️',
      title: '@RequestMapping',
      definition: 'Define rutas y métodos HTTP permitidos',
      example: '@RequestMapping(path="/usuarios", method=GET)'
    }
  ];

  const exercises = [
    {
      title: 'Crear controlador simple',
      description: 'Crea un controlador que retorne "Hola Mundo"',
      solution: `@RestController
@RequestMapping("/api")
public class SaludoController {

  @GetMapping("/saludo")
  public String saludo() {
    return "¡Hola Mundo!";
  }
}`
    },
    {
      title: 'Controlador con parámetros',
      description: 'Crea endpoint que reciba un nombre por parámetro',
      solution: `@RestController
@RequestMapping("/api")
public class UsuarioController {

  @GetMapping("/usuarios/{id}")
  public String obtenerUsuario(@PathVariable int id) {
    return "Usuario con ID: " + id;
  }

  @GetMapping("/buscar")
  public String buscar(@RequestParam String nombre) {
    return "Buscando: " + nombre;
  }
}`
    }
  ];

  const keyPoints = [
    '@RestController devuelve JSON',
    '@Controller devuelve vistas HTML',
    '@GetMapping mapea GET',
    '@PostMapping mapea POST',
    '@PutMapping mapea PUT',
    '@DeleteMapping mapea DELETE',
    '@PathVariable captura de URL',
    '@RequestParam del query string',
    '@RequestBody del cuerpo JSON',
    '@ResponseStatus define código HTTP'
  ];

  const sections = [
    {
      title: '¿Qué son los Controladores?',
      content: (
        <p>
          Los controladores manejan peticiones HTTP. @RestController devuelve JSON (APIs),
          mientras que @Controller devuelve HTML (vistas web).
        </p>
      )
    },
    {
      title: '@RestController vs @Controller',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`// @RestController: devuelve JSON
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRestController {

  @GetMapping
  public List<Usuario> listar() {
    return List.of(
      new Usuario(1, "Juan"),
      new Usuario(2, "María")
    );
  }
}

// @Controller: devuelve HTML
@Controller
@RequestMapping("/usuarios")
public class UsuarioController {

  @GetMapping
  public String listar(Model model) {
    model.addAttribute("usuarios", usuarioService.listar());
    return "usuarios/lista";  // Template HTML
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Mapeo de Rutas (@RequestMapping, @GetMapping, etc)',
      content: (
        <>
          <Table
            headers={['Anotación', 'Método HTTP', 'Uso']}
            rows={[
              ['@GetMapping', 'GET', 'Obtener datos'],
              ['@PostMapping', 'POST', 'Crear datos'],
              ['@PutMapping', 'PUT', 'Actualizar datos'],
              ['@DeleteMapping', 'DELETE', 'Eliminar datos'],
              ['@PatchMapping', 'PATCH', 'Actualización parcial'],
              ['@RequestMapping', 'Cualquiera', 'Mapeo genérico']
            ]}
          />
          <CodeBlock
            language="java"
            code={`@RestController
@RequestMapping("/api/productos")
public class ProductoController {

  @GetMapping           // GET /api/productos
  public List<Producto> listar() { }

  @GetMapping("/{id}") // GET /api/productos/1
  public Producto obtener(@PathVariable int id) { }

  @PostMapping         // POST /api/productos
  public Producto crear(@RequestBody Producto p) { }

  @PutMapping("/{id}") // PUT /api/productos/1
  public Producto actualizar(@PathVariable int id,
                             @RequestBody Producto p) { }

  @DeleteMapping("/{id}") // DELETE /api/productos/1
  public void eliminar(@PathVariable int id) { }
}`}
          />
        </>
      )
    },
    {
      title: 'Parámetros de Ruta y Query',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@RestController
@RequestMapping("/api")
public class BusquedaController {

  // Parámetro de ruta: /usuarios/5
  @GetMapping("/usuarios/{id}")
  public Usuario obtener(@PathVariable int id) {
    return usuarioService.obtenerPorId(id);
  }

  // Parámetro query: /usuarios?nombre=Juan&edad=25
  @GetMapping("/usuarios")
  public List<Usuario> buscar(
    @RequestParam String nombre,
    @RequestParam(required=false) Integer edad
  ) {
    return usuarioService.buscar(nombre, edad);
  }

  // Parámetro con valor por defecto
  @GetMapping("/productos")
  public List<Producto> listar(
    @RequestParam(defaultValue="10") int limite,
    @RequestParam(defaultValue="0") int offset
  ) {
    return productoService.listar(limite, offset);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Recibir JSON (@RequestBody)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

  @PostMapping
  public Usuario crear(@RequestBody Usuario usuario) {
    // El JSON recibido se convierte automáticamente a Usuario
    return usuarioService.guardar(usuario);
  }

  @PutMapping("/{id}")
  public Usuario actualizar(
    @PathVariable int id,
    @RequestBody Usuario usuario
  ) {
    usuario.setId(id);
    return usuarioService.actualizar(usuario);
  }
}

// JSON en la petición:
// {
//   "nombre": "Juan",
//   "email": "juan@example.com",
//   "edad": 25
// }`}
          />
          <InfoBox type="info">
            Spring usa Jackson para convertir JSON ↔ Objetos automáticamente.
          </InfoBox>
        </>
      )
    },
    {
      title: 'Códigos de Estado HTTP',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)  // 201
  public Usuario crear(@RequestBody Usuario usuario) {
    return usuarioService.guardar(usuario);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Usuario> obtener(@PathVariable int id) {
    Usuario usuario = usuarioService.obtenerPorId(id);
    if (usuario == null) {
      return ResponseEntity.notFound().build();  // 404
    }
    return ResponseEntity.ok(usuario);  // 200
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)  // 204
  public void eliminar(@PathVariable int id) {
    usuarioService.eliminar(id);
  }
}`}
          />
        </>
      )
    }
  ];

  const summary = `Los controladores manejan rutas y peticiones HTTP:

• @RestController para APIs JSON
• @Controller para vistas HTML
• @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
• @PathVariable captura de URL
• @RequestParam del query string
• @RequestBody convierte JSON a objetos
• @ResponseStatus define código HTTP
• ResponseEntity para controlar respuesta
• Jackson convierte JSON automáticamente
• Las rutas pueden ser jerarquizadas`;

      return (
    <>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: '#7f8c8d',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {index > 0 && <span style={{ color: '#bdc3c7' }}>›</span>}
                <a href={crumb.url || '#'} style={{
                  color: '#3498db',
                  textDecoration: 'none',
                  fontWeight: index === breadcrumbs.length - 1 ? 'bold' : 'normal'
                }}>
                  {crumb.label}
                </a>
              </span>
            ))}
          </div>
        )}
      </div>

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