import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonSpringBootJPA() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  const concepts = [
    {
      icon: '🗄️',
      title: 'JPA',
      definition: 'Java Persistence API - Mapeo objeto-relacional',
      example: '@Entity public class Usuario {}'
    },
    {
      icon: '🔄',
      title: 'Hibernate',
      definition: 'Implementación de JPA que genera SQL automáticamente',
      example: 'spring-boot-starter-data-jpa'
    },
    {
      icon: '📊',
      title: 'Repository',
      definition: 'Interfaz que proporciona operaciones CRUD',
      example: 'public interface UsuarioRepository extends JpaRepository<Usuario, Integer>'
    }
  ];

  const exercises = [
    {
      title: 'Crear entidad JPA',
      description: 'Define una entidad Usuario con relación a Perfil',
      solution: `@Entity
@Table(name = "usuarios")
public class Usuario {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(nullable = false, unique = true)
  private String email;

  @ManyToOne
  @JoinColumn(name = "perfil_id")
  private Perfil perfil;
}`
    }
  ];

  const keyPoints = [
    '@Entity mapea clase a tabla',
    '@Id marca clave primaria',
    '@Column personaliza columnas',
    '@ManyToOne, @OneToMany, @ManyToMany para relaciones',
    '@JoinColumn especifica columna foreign key',
    '@Transient excluye propiedades',
    'JpaRepository.save(), findAll(), delete()',
    'Queries con @Query personalizado',
    'Cascade automático con cascade=',
    'Lazy vs Eager loading en relaciones'
  ];

  const sections = [
    {
      title: '¿Qué es JPA/Hibernate?',
      content: (
        <p>
          JPA mapea objetos Java a tablas SQL. Hibernate genera SQL automáticamente,
          permitiendo trabajar con objetos en lugar de SQL directo.
        </p>
      )
    },
    {
      title: 'Definir Entidades',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Entity
@Table(name = "usuarios")
public class Usuario {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(name = "nombre_completo", nullable = false, length = 100)
  private String nombre;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(columnDefinition = "INT DEFAULT 0")
  private Integer edad;

  @Transient  // No mapea a BD
  private String calculos;

  // Constructores, getters, setters
}`}
          />
        </>
      )
    },
    {
      title: 'Relaciones entre Entidades',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`// One-to-Many
@Entity
public class Perfil {
  @Id
  private Integer id;

  @OneToMany(mappedBy = "perfil", cascade = CascadeType.ALL)
  private List<Usuario> usuarios;
}

// Many-to-One
@Entity
public class Usuario {
  @ManyToOne
  @JoinColumn(name = "perfil_id")
  private Perfil perfil;
}

// Many-to-Many
@Entity
public class Usuario {
  @ManyToMany
  @JoinTable(
    name = "usuario_rol",
    joinColumns = @JoinColumn(name = "usuario_id"),
    inverseJoinColumns = @JoinColumn(name = "rol_id")
  )
  private List<Rol> roles;
}`}
          />
        </>
      )
    },
    {
      title: 'Repositorios (CRUD)',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

  // Métodos CRUD heredados
  // findAll(), findById(), save(), delete(), etc.

  // Queries personalizados
  List<Usuario> findByNombre(String nombre);

  List<Usuario> findByEdadGreaterThan(int edad);

  Usuario findByEmail(String email);

  @Query("SELECT u FROM Usuario u WHERE u.edad > :edad AND u.nombre LIKE :nombre%")
  List<Usuario> buscarPersonalizadb(@Param("edad") int edad, @Param("nombre") String nombre);

  @Query(value = "SELECT * FROM usuarios WHERE edad > ?1", nativeQuery = true)
  List<Usuario> queryNativo(int edad);
}`}
          />
        </>
      )
    },
    {
      title: 'Operaciones CRUD',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository repository;

  // CREATE
  public Usuario crear(Usuario usuario) {
    return repository.save(usuario);
  }

  // READ
  public Usuario obtenerPorId(Integer id) {
    return repository.findById(id).orElse(null);
  }

  public List<Usuario> listar() {
    return repository.findAll();
  }

  // UPDATE
  public Usuario actualizar(Usuario usuario) {
    return repository.save(usuario);
  }

  // DELETE
  public void eliminar(Integer id) {
    repository.deleteById(id);
  }
}`}
          />
        </>
      )
    },
    {
      title: 'Lazy vs Eager Loading',
      content: (
        <>
          <CodeBlock
            language="java"
            code={`// Lazy (por defecto en @ManyToOne)
@Entity
public class Usuario {
  @ManyToOne(fetch = FetchType.LAZY)  // Carga cuando accedes
  private Perfil perfil;
}

// Eager (por defecto en @OneToMany)
@Entity
public class Perfil {
  @OneToMany(fetch = FetchType.EAGER)  // Carga siempre
  private List<Usuario> usuarios;
}

// Solución: usar @EntityGraph para queries específicas
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

  @EntityGraph(attributePaths = {"perfil", "roles"})
  @Query("SELECT u FROM Usuario u")
  List<Usuario> findAllWithRelaciones();
}`}
          />
        </>
      )
    }
  ];

  const summary = `JPA/Hibernate mapea objetos a base de datos:

• @Entity define tabla
• @Id y @GeneratedValue para PKs
• @Column personaliza columnas
• @ManyToOne, @OneToMany, @ManyToMany para relaciones
• JpaRepository proporciona CRUD
• Query derivados: findByNombre, etc.
• @Query para consultas personalizadas
• cascade = CascadeType.ALL para operaciones
• Lazy loading mejor para performance
• Transacciones automáticas en servicios`;

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